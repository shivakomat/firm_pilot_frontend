import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { taskChart, tasks } from './data';

import { ChartType, Tasklist } from './list.model';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone:true,
  imports:[PagetitleComponent,ReactiveFormsModule,NgApexchartsModule,CommonModule,FormsModule]
})

/**
 * Tasks-list component
 */
export class ListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  modalRef?: BsModalRef;

  submitted = false;
  formData: UntypedFormGroup;

  taskChart: ChartType;

  upcomingTasks: Tasklist[];
  inprogressTasks: Tasklist[];
  completedTasks: Tasklist[];
  myFiles: string[] = [];
  allTasks: any[] = [];
  taskStats = {
    total: 0,
    completed: 0,
    inProgress: 0,
    upcoming: 0
  };

  constructor(private modalService: BsModalService, private formBuilder: UntypedFormBuilder, private api: CrudService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Tasks' }, { label: 'Task List', active: true }];

    this.formData = this.formBuilder.group({
      name: ['', [Validators.required]],
      file: new UntypedFormControl('', [Validators.required]),
      taskType: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });

    this._fetchData();
  }

  onFileChange(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push('assets/images/users/' + event.target.files[i].name);
    }
  }

  _fetchData() {
    console.log('Calling API: /businesses/1/tasks');
    this.api.fetchData('/businesses/1/tasks').subscribe({
      next: (data) => {
        console.log('Tasks API Response:', data);
        // Parse the backend response structure: { data: [...], msg: "..." }
        if (data && (data as any).data && Array.isArray((data as any).data)) {
          // The data array contains project objects with taskLists
          this.allTasks = (data as any).data;
        } else {
          this.allTasks = [];
        }
        
        console.log('Parsed project tasks:', this.allTasks);
        this.processTasksData();
      },
      error: (error) => {
        console.error('Tasks API Error:', error);
        // Fallback to static data if API fails
        this.loadStaticData();
      }
    });
  }

  processTasksData() {
    // Extract all tasks from the nested project/taskList structure
    const flatTasks: any[] = [];
    
    this.allTasks.forEach(projectData => {
      if (projectData.taskLists && Array.isArray(projectData.taskLists)) {
        projectData.taskLists.forEach(taskList => {
          // Add parent task if it exists
          if (taskList.parent) {
            flatTasks.push({
              ...taskList.parent,
              project: projectData.project,
              isParent: true
            });
          }
          
          // Add all subtasks
          if (taskList.subTasks && Array.isArray(taskList.subTasks)) {
            taskList.subTasks.forEach(subTask => {
              flatTasks.push({
                ...subTask,
                project: projectData.project,
                parent: taskList.parent,
                isParent: false
              });
            });
          }
        });
      }
    });
    
    console.log('Flattened tasks:', flatTasks);
    
    // Categorize tasks based on completion status and due dates
    this.completedTasks = flatTasks
      .filter(task => task.is_completed === true)
      .map(task => this.mapTaskToComponent(task, 'completed'));
    
    // For upcoming vs in-progress, we'll use due dates and completion status
    const incompleteTasks = flatTasks.filter(task => task.is_completed === false);
    
    // Tasks due soon (within 7 days) are "upcoming", others are "in progress"
    const today = new Date();
    const todayFormatted = parseInt(today.getFullYear().toString() + 
                                   (today.getMonth() + 1).toString().padStart(2, '0') + 
                                   today.getDate().toString().padStart(2, '0'));
    
    this.upcomingTasks = incompleteTasks
      .filter(task => {
        if (!task.due_date) return false;
        const daysDiff = this.getDaysDifference(todayFormatted, task.due_date);
        return daysDiff >= 0 && daysDiff <= 7; // Due within next 7 days
      })
      .map(task => this.mapTaskToComponent(task, 'upcoming'));
    
    this.inprogressTasks = incompleteTasks
      .filter(task => {
        if (!task.due_date) return true; // No due date = in progress
        const daysDiff = this.getDaysDifference(todayFormatted, task.due_date);
        return daysDiff > 7; // Due more than 7 days away
      })
      .map(task => this.mapTaskToComponent(task, 'inprogress'));

    // Update task statistics
    this.taskStats = {
      total: flatTasks.length,
      completed: this.completedTasks.length,
      inProgress: this.inprogressTasks.length,
      upcoming: this.upcomingTasks.length
    };

    // Update chart with real data
    this.updateTaskChart();
  }
  
  getDaysDifference(date1: number, date2: number): number {
    const d1 = new Date(
      Math.floor(date1 / 10000),
      Math.floor((date1 % 10000) / 100) - 1,
      date1 % 100
    );
    const d2 = new Date(
      Math.floor(date2 / 10000),
      Math.floor((date2 % 10000) / 100) - 1,
      date2 % 100
    );
    const diffTime = d2.getTime() - d1.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  mapTaskToComponent(task: any, taskType: string): Tasklist {
    return {
      index: task.id,
      taskType: taskType,
      name: task.title || task.description || 'Untitled Task',
      images: ['assets/images/users/avatar-1.jpg'], // Default avatar since no assigned_users in current structure
      status: this.getDisplayStatus(task.is_completed ? 'completed' : 'pending'),
      checked: task.is_completed === true
    };
  }

  getDisplayStatus(status: string): string {
    if (!status) return 'Pending';
    switch (status.toLowerCase()) {
      case 'completed': case 'complete': return 'Complete';
      case 'in_progress': case 'inprogress': return 'In Progress';
      case 'upcoming': case 'pending': return 'Pending';
      case 'waiting': return 'Waiting';
      case 'approved': return 'Approved';
      default: return status;
    }
  }

  updateTaskChart() {
    // Update chart with real task statistics
    const monthlyData = this.generateMonthlyTaskData();
    this.taskChart = {
      ...taskChart,
      series: [{
        name: 'Complete Tasks',
        type: 'column',
        data: monthlyData.completed
      }, {
        name: 'All Tasks',
        type: 'line',
        data: monthlyData.total
      }]
    };
  }

  generateMonthlyTaskData() {
    // Generate sample monthly data based on current tasks
    // In a real app, this would come from the API with date-based aggregation
    const baseCompleted = Math.max(1, this.taskStats.completed);
    const baseTotal = Math.max(1, this.taskStats.total);
    
    return {
      completed: Array(11).fill(0).map(() => Math.floor(Math.random() * baseCompleted * 2) + baseCompleted),
      total: Array(11).fill(0).map(() => Math.floor(Math.random() * baseTotal * 2) + baseTotal)
    };
  }

  loadStaticData() {
    // Fallback to original static data
    this.inprogressTasks = tasks.filter(t => t.taskType === 'inprogress');
    this.upcomingTasks = tasks.filter(t => t.taskType === 'upcoming');
    this.completedTasks = tasks.filter(t => t.taskType === 'completed');
    this.taskChart = taskChart;
    
    this.taskStats = {
      total: tasks.length,
      completed: this.completedTasks.length,
      inProgress: this.inprogressTasks.length,
      upcoming: this.upcomingTasks.length
    };
  }

  // Toggle task completion status
  toggleTaskCompletion(task: Tasklist) {
    console.log('Toggling task completion:', task);
    
    // Find the original task data from allTasks to get the real task ID and structure
    const originalTask = this.findOriginalTask(task.index);
    if (!originalTask) {
      console.error('Could not find original task data for task:', task);
      return;
    }
    
    // Update the backend with the new completion status
    const updateData = {
      id: originalTask.id,
      is_completed: task.checked,
      modified_date: parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''))
    };
    
    console.log('Updating task completion:', updateData);
    
    // Call API to update task completion status
    // Assuming the API endpoint is PUT /businesses/tasks/:id
    this.api.updateData(`/businesses/tasks/${originalTask.id}`, updateData).subscribe({
      next: (response) => {
        console.log('Task completion updated successfully:', response);
        // Update the original task data
        originalTask.is_completed = task.checked;
        // Refresh the task categorization
        this.processTasksData();
      },
      error: (error) => {
        console.error('Error updating task completion:', error);
        // Revert the checkbox state on error
        task.checked = !task.checked;
      }
    });
  }
  
  // Find the original task data from the API response
  findOriginalTask(taskId: number): any {
    for (const projectData of this.allTasks) {
      if (projectData.taskLists) {
        for (const taskList of projectData.taskLists) {
          // Check parent task
          if (taskList.parent && taskList.parent.id === taskId) {
            return taskList.parent;
          }
          // Check subtasks
          if (taskList.subTasks) {
            for (const subTask of taskList.subTasks) {
              if (subTask.id === taskId) {
                return subTask;
              }
            }
          }
        }
      }
    }
    return null;
  }


  get form() {
    return this.formData.controls;
  }

  listData() {
    if (this.formData.valid) {
      const name = this.formData.get('name').value;
      const status = this.formData.get('status').value;
      const taskType = this.formData.get('taskType').value;
      tasks.push({
        index: tasks.length + 1,
        name,
        status,
        taskType,
        images: this.myFiles,
        checked: true
      })
    }
    this.modalService.hide()
    this._fetchData();
    this.submitted = false;
  }
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalRef = this.modalService.show(content);
  }
}

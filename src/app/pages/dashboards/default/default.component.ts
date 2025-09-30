import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { emailSentBarChart, monthlyEarningChart } from './data';
import { ChartType } from './dashboard.model';
import { BsModalService, BsModalRef, ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { EventService } from '../../../core/services/event.service';

import { ConfigService } from '../../../core/services/config.service';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TransactionComponent } from 'src/app/shared/widget/transaction/transaction.component';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { LoaderComponent } from 'src/app/shared/ui/loader/loader.component';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  standalone:true,
  imports:[PagetitleComponent,LoaderComponent,CommonModule,NgApexchartsModule,BsDropdownModule,ModalModule,TransactionComponent]
})
export class DefaultComponent implements OnInit {
  modalRef?: BsModalRef;
  isVisible: string;
  userEmail: string = 'user@firmpilot.com';
  userDisplayName: string = 'user';

  emailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  revenueChart: ChartType;
  clientCreationChart: ChartType;
  revenueGrowthChart: ChartType;
  transactions: any;
  statData: any;
  
  // New dashboard metrics
  clientsInProgress: number = 0;
  numberOfLeads: number = 0;
  upcomingMeetings: number = 0;
  totalProjects: number = 0;
  totalClients: number = 0;
  config:any = {
    backdrop: true,
    ignoreBackdropClick: true
  };

  isActive: string;

  @ViewChild('content') content;
  @ViewChild('center', { static: false }) center?: ModalDirective;
  constructor(private modalService: BsModalService, private configService: ConfigService, private eventService: EventService, private apiService: ApiService) {
  }

  ngOnInit() {

    /**
     * horizontal-vertical layput set
     */
    const attribute = document.body.getAttribute('data-layout');

    this.isVisible = attribute;
    const vertical = document.getElementById('layout-vertical');
    if (vertical != null) {
      vertical.setAttribute('checked', 'true');
    }
    if (attribute == 'horizontal') {
      const horizontal = document.getElementById('layout-horizontal');
      if (horizontal != null) {
        horizontal.setAttribute('checked', 'true');
      }
    }

    // Load user email from localStorage
    this.loadUserEmail();

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  ngAfterViewInit() {
    setTimeout(() => {
     this.center?.show()
    }, 2000);
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.emailSentBarChart = emailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;
    this.initializeCharts();
    this.loadDashboardMetrics();

    this.isActive = 'year';
    this.configService.getConfig().subscribe(data => {
      this.transactions = data.transactions;
      this.statData = data.statData;
    });
  }

  /**
   * Initialize dashboard charts
   */
  private initializeCharts() {
    // Revenue YTD Chart
    this.revenueChart = {
      series: [{
        name: 'Revenue',
        data: [12000, 15000, 18000, 22000, 25000, 28000, 32000, 35000, 38000, 42000, 45000, 48000]
      }],
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
        }
      },
      colors: ['#556ee6']
    };

    // Client Creation Chart
    this.clientCreationChart = {
      series: [
        {
          name: 'Lead',
          data: [5, 8, 12, 15, 18, 22, 25, 28, 32, 35, 38, 42]
        },
        {
          name: 'Invited',
          data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
        },
        {
          name: 'Active',
          data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]
        },
        {
          name: 'Complete',
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }
      ],
      chart: {
        type: 'line',
        height: 350,
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      colors: ['#f1b44c', '#556ee6', '#34c38f', '#50a5f1'],
      legend: {
        position: 'top'
      }
    };

    // Revenue Growth Over Time (placeholder – no data yet)
    this.revenueGrowthChart = {
      series: [],
      chart: {
        type: 'area',
        height: 350,
        toolbar: { show: false }
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      colors: ['#34c38f'],
      legend: { show: false },
      noData: {
        text: 'No revenue data yet',
        align: 'center',
        verticalAlign: 'middle',
        style: {
          color: '#6c757d',
          fontSize: '14px'
        }
      }
    };
  }

  /**
   * Load dashboard metrics from API
   */
  private loadDashboardMetrics() {
    // Load clients data
    this.apiService.getClients().subscribe({
      next: (response) => {
        this.totalClients = response.clients.length;
        this.clientsInProgress = response.clients.filter(client => client.status === 'ACTIVE').length;
        this.numberOfLeads = response.clients.filter(client => client.status === 'LEAD').length;
      },
      error: (error) => {
        console.error('Error loading clients:', error);
        // Fallback to mock data
        this.totalClients = 18;
        this.clientsInProgress = 24;
        this.numberOfLeads = 42;
      }
    });

    // Mock data for projects and meetings - would be replaced with actual API calls
    this.totalProjects = 125;
    this.upcomingMeetings = 7;
  }
  opencenterModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  weeklyreport() {
    this.isActive = 'week';
    this.emailSentBarChart.series =
      [{
        name: 'Series A',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }, {
        name: 'Series B',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }, {
        name: 'Series C',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }];
  }

  monthlyreport() {
    this.isActive = 'month';
    this.emailSentBarChart.series =
      [{
        name: 'Series A',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }, {
        name: 'Series B',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }, {
        name: 'Series C',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }];
  }

  yearlyreport() {
    this.isActive = 'year';
    this.emailSentBarChart.series =
      [{
        name: 'Series A',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }, {
        name: 'Series B',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }, {
        name: 'Series C',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }];
  }


  /**
   * Load user's email from localStorage
   */
  loadUserEmail(): void {
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        // Try multiple possible field names for email
        this.userEmail = user.email || user.emailAddress || user.username || 'user@firmpilot.com';
        
        // Extract username part (before @) for display
        this.userDisplayName = this.userEmail.split('@')[0];
      } catch (error) {
        console.error('Error parsing user data:', error);
        this.userEmail = 'user@firmpilot.com';
        this.userDisplayName = 'user';
      }
    } else {
      this.userEmail = 'user@firmpilot.com';
      this.userDisplayName = 'user';
    }
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }
}

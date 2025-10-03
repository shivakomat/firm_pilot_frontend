import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PagetitleComponent } from '../../shared/ui/pagetitle/pagetitle.component';

interface ChartType {
  chart?: any;
  plotOptions?: any;
  colors?: any;
  series?: any;
  stroke?: any;
  xaxis?: any;
  legend?: any;
  noData?: any;
}

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [CommonModule, PagetitleComponent, NgApexchartsModule],
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  clientCreationChart: ChartType;
  revenueGrowthChart: ChartType;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Insights' }, { label: 'Analytics', active: true }];
    this.initializeCharts();
  }

  /**
   * Initialize charts for insights page
   */
  private initializeCharts() {
    // Client Creation Chart (moved from dashboard)
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

    // Revenue Growth Over Time Chart (moved from dashboard)
    this.revenueGrowthChart = {
      series: [
        {
          name: 'Revenue',
          data: [12000, 15000, 18000, 22000, 25000, 28000, 32000, 35000, 38000, 42000, 45000, 48000]
        }
      ],
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
      legend: { show: false }
    };
  }

}

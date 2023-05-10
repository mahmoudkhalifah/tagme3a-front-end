import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-admin-dashboard-main',
  templateUrl: './admin-dashboard-main.component.html',
  styleUrls: ['./admin-dashboard-main.component.css']
})
export class AdminDashboardMainComponent implements OnInit {
  lineChart: any;
  doughnutChart: any;
  numOfProducts: any;
  numOfCategories: any;
  numOfOrders: any;
  totalEarnings: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {


    this.dashboardService.getNumOfProducts().subscribe(result => this.numOfProducts = result);
    this.dashboardService.getNumOfCategories().subscribe(result => this.numOfCategories = result);
    this.dashboardService.getOrderStats().subscribe(result => this.numOfOrders = result);
    this.dashboardService.getTotalEarnings().subscribe(result => this.totalEarnings = result);


    this.dashboardService.getOrderStats().subscribe((count) => {
      this.numOfOrders = count;
      this.initChart();
      
      this.updateChart();
    });
  }

  initChart() {
    this.doughnutChart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ['Processing', 'Delivered'],
        datasets: [{
          label: 'Orders',
          data:  [this.numOfOrders.processingOrders, this.numOfOrders.deliveredOrders],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
    });
  }

  updateChart() {
    this.doughnutChart.data.datasets[0].data[0] = this.numOfOrders.processingOrders;
    this.doughnutChart.data.datasets[0].data[1] = this.numOfOrders.deliveredOrders;

    this.doughnutChart.update();
  }
}

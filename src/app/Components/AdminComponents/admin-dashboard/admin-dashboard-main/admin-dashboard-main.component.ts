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
    this.dashboardService.getNumOfOrders().subscribe(result => this.numOfOrders = result);
    this.dashboardService.getTotalEarnings().subscribe(result => this.totalEarnings = result);


    this.dashboardService.getNumOfOrders().subscribe((count) => {
      this.numOfOrders = count;
      this.updateChart();
    });
    this.initChart();

    // Chart for Users
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Users',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {

        }
      }
    });

    // Chart for Orderس
    
  }

  initChart() {
    this.doughnutChart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ['New', 'In progress', 'Completed'],
        datasets: [{
          label: 'Orders',
          data: [0, this.numOfOrders, 0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
    });
  }

  updateChart() {
    this.doughnutChart.data.datasets[0].data[1] = this.numOfOrders;
    this.doughnutChart.update();
  }
}

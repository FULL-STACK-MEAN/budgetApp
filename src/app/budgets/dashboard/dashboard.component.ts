import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataRoutes: any;
  lineChart: any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.dataRoutes = this.route.pathFromRoot;
      setTimeout(() => {
        this.loadLineChart();
      }, 1500)
  }

  loadLineChart() {
      const months = ['Abril 2021','Mayo 2021','Junio 2021'];
      const totals = [23500,400,36000];
      this.lineChart = new Chart('budgetsChart', {
          type: 'line',
          data: {
              labels: months,
              datasets: [
                  {
                      data: totals,
                      borderColor: '#0a2558'
                  }
              ]
          },
          options: {
              legend: {
                  display: false
              }
          }
      })
  }

}

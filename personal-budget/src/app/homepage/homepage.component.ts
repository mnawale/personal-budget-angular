import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { DataJsonService } from '../data-json.service';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  public dataSource = {
    datasets: [
        {
            data:[],
            backgroundColor: [
                '#ff3364',
                '#808080',
                '#acff33',
                '#fd6b19',
                '#859b45',
                '#9b4593',
                '#4f459b',
                '#459b7e',
                '#410e12'
            ],
        }
    ],

    labels: []
};

   // public mbudget = [];

  constructor(private budgetdata: DataJsonService) { }
  ngOnInit(): void {
    this.budgetdata.getBudget()
    .subscribe((res: any) => {
      for (var i=0;i <res.myBudget.length;i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
        this.createChart();
      }
        console.log(this.dataSource);
  });
  }
  createChart() {
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: this.dataSource,
  });

}
}

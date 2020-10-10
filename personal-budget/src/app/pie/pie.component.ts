
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})

export class PieComponent implements OnInit {


  public svg;
  public margin = 50;
  public width = 750;
  public height = 600;
  // The radius of the pie chart is half the smallest side
  public radius = Math.min(this.width, this.height) / 2 - this.margin;
  public labels =[];


  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
  }

  drawChart(data): void {
    for (let i =0; i< data.myBudget.length; i++){
      this.labels[i] = data.myBudget[i].title;
    }
    let color = d3.scaleOrdinal().domain(this.labels).range(d3.schemeDark2);
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.budget));


    // Build the pie chart

    this.svg
    .selectAll('pieces')
    .data(pie(data.myBudget))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
    )
    .attr('fill',function (d){
      return color(d.data.title);
    })
    .attr("stroke", "#121926")
    .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(data.myBudget))
    .enter()
    .append('text')
    .text(d => d.data.title)
    .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 15);
  }
  constructor(private dataService: DataService) { }



  ngOnInit(): void {
    this.createSvg();
    this.dataService.getChartData().subscribe((data) => {
      this.drawChart(data);
      //console.log(data);
    });

  }

}

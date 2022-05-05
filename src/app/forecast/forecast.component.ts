import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  @Input() forecast =[];
  private data = [
    {"month": "January", "count": "166443"},
    {"month": "February", "count": "150793"},
    {"month": "March", "count": "62342"},
    {"month": "April", "count": "27647"},
    {"month": "May", "count": "21471"},
    {"month": "June", "count": "166443"},
    {"month": "July", "count": "150793"},
    {"month": "August", "count": "62342"},
    {"month": "September", "count": "27647"},
    {"month": "October", "count": "21471"},
    {"month": "November", "count": "27647"},
    {"month": "December", "count": "1021471"},
  ];
  
  private svg: d3.Selection<SVGGElement, unknown, HTMLElement, any> |any;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  constructor() { }
  
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
private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.count.toString()))
  .range(["#7400B8" ,"#6930C3","#5E60CE", "#5390D9", "#4EA8DE", "#48BFE3","#56CFE1","#64DFDF","#72EFDD","#80FFDB","#4AAFF0","#4CC9F0"]);
}

private drawChart(): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.count));

  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d: any, i: any) => (this.colors(i)))
  .attr("stroke", "#dadde3")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('text')
  .text((d: { data: { month: any; }; }) => d.data.month)
  .attr("transform", (d: d3.DefaultArcObject) => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}
private transformdata(data:any){
  for (let index = 0; index < data.length; ++index) {
     data[index].count=this.forecast[index];
}}

  ngOnInit(): void {
    this.transformdata(this.data);
    console.log(this.data[0]);
    this.createSvg();
    this.createColors();
    this.drawChart();
  }
  


}

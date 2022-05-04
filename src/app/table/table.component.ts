import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products = [
    {
        name: 'eXtreme Programming Explained',
        price:'100$',
        id:'1'
    },
    {
      name: 'psss',
      price:'200$',
      id:'2'
    }
];

  constructor() { }

  ngOnInit(): void {
  }
  forecast(id: any):void{
    console.log(id)
  }

}

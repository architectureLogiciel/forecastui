import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() token :any;
  @Output()Pforecast=new EventEmitter<string>();
  products :any;
  forecasts:any;
  forecastb=false;

  emitForecast(value: any) {
    this.Pforecast.emit(value);
  }

headers:any;
  constructor(private service:ServiceService) {
   
   }

  ngOnInit(): void {
    console.log(this.token);
   this.getProducts();
  }

  getProducts () {
    var k  =  this.service.getProducts(this.token); 
    k.subscribe({
      next: data => {
        console.log("data",data);
        this.products=data  
      },
      error: error => {
      },
  }    
  );

  }
 
  forecast(id: any):void{
    console.log(id);
    var x  =  this.service.getProductForcast(this.token,id);
    x.subscribe({
      next: data => {
        console.log("data",data);
        this.emitForecast(data);
        console.log("donne envoyer");
        this.forecasts=data;
      },
      error: error => {
      },}  
       
  );
  this.forecastb=!this.forecastb;
  }
  

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  
  tokenbool=false;
  forecastb=false;
  tokenvalue:any;
  forecastP:any;
  forecast(forecasts: any) {
    console.log(forecasts);
      if (forecasts!=null)
      {this.forecastb =true;
        this.forecastP=forecasts;
      console.log("forest envoye",forecasts)}
  }

  token(newItem: string) {
    console.log('token in parent ');
    console.log(newItem);
      if (newItem!=null)
      {this.tokenbool =true;
      this.tokenvalue=newItem;}
  }
  
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private REST_API_SERVER = "http://localhost:8070";
  errorMessage: any;

  constructor(private httpClient: HttpClient) {};

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  products:any;

  public getProducts(token:any){
     return this.httpClient.get(this.REST_API_SERVER+"/products",{ headers: {"Authorization" : `Bearer ${token}`} })
  }
  public getProductForcast(token:any,id:any){
    console.log(id);
     return this.httpClient.get(this.REST_API_SERVER+"/products/forcast/id"+id,{ headers: {"Authorization" : `Bearer ${token}`} })
  }
 

  token:any;
   public postuser(user: any):Observable<any>{
    this.httpClient.post<any>('http://localhost:3002/auth/login', user).subscribe({
        next: data => {
          this.token =data.token;
        },
        error: error => {
            this.errorMessage = error.message;
            
        }
    }    
    );
    return(this.token);
  }


 
   /*userIdUpdate:any;
  public upadteuser(id: number){ 
        this.httpClient.put<any>(`${this.REST_API_SERVER}/update/${id}`,{})
            .subscribe(data => this.userIdUpdate = data.id)
            ;
          }*/



}

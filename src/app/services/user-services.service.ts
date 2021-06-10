import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) {
  }
  users(){
   return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
     catchError(this.errorHandler)
   );
 }
  
 errorHandler(error){
   let errorMessage ='';
   if(error.error instanceof ErrorEvent){
     errorMessage = `Error: ${error.error.message}`;
   }else{
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   console.log(error);
   return throwError(errorMessage);
 }

}

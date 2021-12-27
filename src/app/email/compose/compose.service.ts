import { Injectable, Inject } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable, throwError, of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import {config} from '../../../config/local';


 
@Injectable({  
    providedIn: 'root',  
   })  
  export class ContactFormService {  
    // private apiUrl = config.apiUrl+'core/send-contact-message/';   
    private apiUrl = config.apiUrl+'core/send-prestataire-message/';   
   
    
    
    constructor(private http: HttpClient) { }  
    
    postMessage(input:any){  
      return this.http.post(this.apiUrl, input, {responseType:'text'}) .pipe(map(
          (response)=>{
              if(response){
                  return response;
              }

          },
          (error:any) => {
              return error
          }
      )) 
    
    }


}
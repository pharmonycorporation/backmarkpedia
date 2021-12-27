import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {  UserModel } from './user';
import { config } from 'src/config/local';
import { catchError } from 'rxjs/operators';
import { delay } from "rxjs/operators";  
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class AuthenticationService {
  public host: string = config.apiUrl;

  // baseUrl = "https://markpedia.herokuapp.com/"

   private currentUserSubject = new BehaviorSubject<any>({} as any);
   public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
   isAuth$ = new BehaviorSubject<boolean>(true);
    public user$: UserModel;
    public isAuth: boolean = false;
    baseUrl = config.apiUrl;
   loginStatus = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient,private router: Router,
    private http: HttpClient)
  { 
      
  }

  public loginol(url: string, user: any): Observable<any> {
    // const host="https://markpedia.herokuapp.com/api/login"
    const host="https://markpedia.herokuapp.com/api/login"
    return this.httpClient
      .post<any>(host+url, user, {responseType: 'json'})
      .pipe(map((response: any) => {
        console.log(response);
        this.loginStatus.next(true);
        console.log("SUCCES LOGIN");
        sessionStorage.setItem("markpediausersessionid",JSON.stringify(response))
        this.currentUserSubject.next(response);

                   
        console.log(this.currentUserSubject);

        return response;
      }));
  }

  public postSignUp(url: string, user: any): Observable<any> {
    // const host="https://markpedia.herokuapp.com/api"
    const host="https://markpedia.herokuapp.com/api"
    return this.httpClient
      .post<any>(host+url, user)
      .pipe(map((response: any) => {
        console.log(response);

        // sessionStorage.setItem("markpediausersessionid",JSON.stringify(response))
        this.currentUserSubject.next(response);

                   
        console.log(this.currentUserSubject);

        return response;
      }));
  }

  
  

  
 
  createNewUser(url: string, user: any) {
    const myurl = `${this.baseUrl}${url}`;
    return new Promise<void>((resolve, reject) => {
      this.http.post(
        myurl, user)
        .subscribe(
          (response: any) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  upDateUser(url: string, user: any) {
    const myurl = `${this.baseUrl}${url}`;
    return new Promise<void>((resolve, reject) => {
      this.http.put(
        myurl, user)
        .subscribe(
          (response: any) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  getEntity(url: string, entity: any) {
    const myurl = `${this.baseUrl}${url}`;
    return new Promise<void>((resolve, reject) => {
      this.http.post(
        myurl, entity)
        .subscribe(
          (response: any) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  confirmAccount(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (response: any) => {
        resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  forgotPassword(url: string, email: string) {
    const myurl = `${this.baseUrl}${url}`;
    return new Promise<void>((resolve, reject) => {
      this.http.post(
        myurl,
        {email : email})
        .subscribe(
          (response: any) => {
           resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getUserById(url: string, id: string) {
    const myurl = `${this.baseUrl}${url}${id}/`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(myurl).subscribe(
        (user: any) => {
            resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  deleteEntityById(url: string, id: string) {
    const myurl = `${this.baseUrl}${url}${id}/`;
    return new Promise<void>((resolve, reject) => {
      this.http.delete(myurl).subscribe(
        (user: any) => {
            resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  getCommande(url:string, id:string): Observable<any> {  
    const myurl = `${this.baseUrl}${url}${id}/`;
    return this.http.get<any>(myurl).pipe(delay(2000));  
  } 

  getsEntite(url: string) {
    const myurl = `${this.baseUrl}${url}/`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(myurl).subscribe(
        (user: any) => {
            resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  getsObject(url: string) {
    const myurl = `${this.baseUrl}${url}`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(myurl).subscribe(
        (user: any) => {
            resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  changePassword(url: string, password: any) {
    const myurl = `${this.baseUrl}${url}`;
    return new Promise<void>((resolve, reject) => {
      this.http.post(
        myurl,
        password)
        .subscribe(
          (response: any) => {
           resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  login(url: string, email: string, password: string) {
    const myurl = `${this.baseUrl}${url}`;
    return new Promise<UserModel>((resolve, reject) => {
      this.http.post(
        myurl,
        { email: email, password: password })
        .subscribe(
          (authData: UserModel) => {
            sessionStorage.setItem("markpediausersessionid",JSON.stringify(authData))
            this.user$ = authData;
            this.isAuth = true;
            this.isAuth$.next(true);
            console.log("Response login :", authData)
            resolve(authData);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  loginToken(url: string, token: string) {
    const myurl = `${this.baseUrl}${url}`;
    return new Promise<UserModel>((resolve, reject) => {
      this.http.post(
        myurl,
        { token: token})
        .subscribe(
          (authData: UserModel) => {
            sessionStorage.setItem("markpediausersessionid",JSON.stringify(authData))
            this.user$ = authData;
            this.isAuth = true;
            this.isAuth$.next(true);
            console.log("Response login :", authData)
            resolve(authData);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  logout() {
    this.isAuth$.next(false);
  }
 

}

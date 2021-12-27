import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  loginForm: FormGroup;
  user:any;
  errorMessage='';
  is_authenticated=false;
  constructor( private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private authService: AuthenticationService,
    private http: HttpClient,
    // cd: ChangeDetectorRef
    ) {
      //  super(cd);
       this.loginForm = this.formBuilder.group({
     
        email: new FormControl(null),
        password: new FormControl(null)
       
      });
  }

  ngOnInit(): void {
    //this.openSnackBar('message Toast')
    if(this.router.parseUrl(this.router.url).queryParams['token']){
      let token = this.router.parseUrl(this.router.url).queryParams['token']
       this.authService.loginToken("api/login-token/", token).then(
         (response: any) => {
 
           if(response.user.is_prestataire){
             this.router.navigate(['/admin/profile']);
             this.is_authenticated = true;
           }else if(response.user.is_particulier){
             this.router.navigate(['/admin']);
             this.is_authenticated = true;
           }else{
             if(response.user.is_superuser){
               this.router.navigate(['/admin']);
               this.is_authenticated = true;
             }else{
               this.router.navigate(['/login']);
             }
             
           }
         }
       ).catch(
         (error) => {
           console.log("Cet utilisateur n'existe pas");
           if(error.error.message == "Cet utilisateur n'existe pas"){
            console.log(error.error.message)
             console.log("Erreur : ", error.error.message)
           }
          
         }
       );
     }
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'Fermer', {
      duration: 2 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
 
  

  onSubmit() {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    this.authService.login("api/login/", email, password).then(
      (response: any) => {
        // this.actions.addTodo(response as UserModel);
        //console.log("login succes", response)
        if(response.user.is_prestataire){
          this.router.navigate(['/admin']);
        }else if(response.user.is_particulier){
          this.router.navigate(['/admin']);
        }else{
          this.router.navigate(['/admin']);
        }
        // this.router.navigate(['pages/entreprise/'+response.user.user]);
      }
    ).catch(
      (error) => {
        this.openSnackBar("Cet utilisateur n'existe pas");

        if(error.error.message == "Cet utilisateur n'existe pas"){
          this.openSnackBar(error.error.message)
          console.log("Erreur : ", error.error.message)
        }
       
        //console.log("Erreur : ", error)
        this.errorMessage = error.message;
      }
    );
  }
}

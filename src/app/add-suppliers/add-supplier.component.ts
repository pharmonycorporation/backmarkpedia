import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
// import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/theme/utils/must-match.validator';
import { AuthenticationService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
  prestataires:any=[];
  errorMessage;
  public page: any;
  public count = 6;
  searchForm: FormGroup;
  registerFormThree: FormGroup;
  filteredItems;
  loading= false;
  registerFormSubmitted: boolean = false;
  isRegisterError: boolean = false;
  linkedInCredentials = {
    clientId: "78yphvj1o57vh3",
    redirectUrl: "https://markpedia.cm/auth/forgot-password",
    scope: "r_liteprofile%20r_emailaddress%20w_member_social" // To read basic user profile data and email
  };
  is_buyer: boolean = false;
  is_seller: boolean = true;
  emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private router: Router, 
    private ___snackBar: MatSnackBar , private authService: AuthenticationService, private formBuilder: FormBuilder) { 
    // this.getListPrestataire();
    // this.updateTransactionListing();
    this.registerFormThree = this.formBuilder.group({
        country: new FormControl(null),
        city: new FormControl(null),
        address1: new FormControl(null),
        phone: new FormControl(null),
        url: new FormControl("url"),
        is_approved: new FormControl(0),
        commission_enable: new FormControl(0),
        first_name: new FormControl(null),
        shop_title: new FormControl(null),
        last_name: new FormControl(null, [Validators.required]),
        accept_condition: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(52)]),
        confirmation_password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(52)]),
      }, {
        validator: MustMatch('password', 'confirmation_password')
      });
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      nom:new FormControl(null)
    })
  }
  mettreEnAvant(prestataire,val){
    const data = {
      val :val
    }
    this.authService.upDateUser("/mettre-enavant-prestataire/"+prestataire.id+"/", data).then((res)=>{
      
      this.openSnackBar("le status du prestataire a été mis à jour ");
        let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);  
    }).catch((error)=>{

    });
    
    
  }
  desactiver(prestataire,actif){
    const data = {
      actif :actif
    }
    this.authService.upDateUser("/prestataire-activer-desactiver/"+prestataire.id+"/", data).then((res)=>{
      
      this.openSnackBar("le compte du prestataire a été mis à jour ");
        let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);  
    }).catch((error)=>{

    });
    
    
  }
  getListPrestataire(){
    this.authService.getsEntite("api/marketplacesellers").then(
      (response) => {
        console.log(response);
         this.filteredItems = this.prestataires = response;
        
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );
  }
  openSnackBar(message) {
    this.___snackBar.open(message, 'Fermer', {
      duration: 2 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }
  pageSize = 6;
  collectionSize = this.prestataires.length;
  updateTransactionListing() {
    this.prestataires
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  filterResults() {
    if (!this.searchForm.value.nom) {
      this.filteredItems = [...this.prestataires];
    } else {
      this.filteredItems = [];
      this.filteredItems = this.prestataires.filter((prestataire) => {
        return prestataire.shop_title.toUpperCase().indexOf(this.searchForm.value.nom.toUpperCase()) > -1;
      });
    }
 }

 loginWithLinkedin() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
      this.linkedInCredentials.clientId
    }&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope={this.linkedInCredentials.scope}`;
  }

//   signInWithGoogle(): void {
//     this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
//     .then((response) => {
      
//       console.log("Google user response : ", response)
//       const signup = {
      
//         "is_google": true,
//         "is_active": true,
//         "name":response.lastName,
//         "email":response.email,
//         "is_approved":true,
//         "shop_title":"",
//         "last_name":response.lastName,
//         "first_name":response.firstName,
//         "commission_enable":"",
//         "avatar": null,
//         "password":'google_auth',
//         "dark_mode":1,
//         "active_status":0,
//         "messenger_color":"red"
//         }
//       this.authService.postSignUp('/users/' ,signup).subscribe(res => {
//         this.registerFormThree.reset();
//         this.loading = false;
//         this.router.navigate(['/auth/login']);
//       }, 
//       (err : any) =>{
//         this.errorMessage = err.error;
//         this.isRegisterError = true;
        
//         alert(err.email[0]);
//         this.loading = false;
//         console.log(err.error.email[0])
//         console.log(err.error);
//       });
//     })
//     .catch((error) => {
//       console.log("Google user  error : ", error)
//     });
//   }

//   signInWithFB(): void {
//     this.socialAuth.signIn(FacebookLoginProvider.PROVIDER_ID)
//     .then((response) => {
//       console.log("Facebook user response : ", response)
//       const signup = {
//         firstName: response.firstName,
//         name: response.lastName,
//         email: response.email,
//         password: 'google_auth',
//         picture: response.photoUrl,
//         is_facebook: true,
//         is_active: true

        
//       }
      
      
//     })
//     .catch((error) => {
//       console.log("Facebook user  error : ", error)
//     });
//   }

//   signOut(): void {
//     this.socialAuth.signOut();
//   }

//   refreshToken(): void {
//     this.socialAuth.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
//   }

  get registerFormControl() {
    return this.registerFormThree.controls;
  }

  onSubmit(){
    this.loading = true;
    this.registerFormSubmitted = true;
    let user = {
      "name":this.registerFormThree.get('first_name')?.value+" " +this.registerFormThree.get('last_name')?.value,
      "email":this.registerFormThree.get('email')?.value,
      "country":this.registerFormThree.get('country')?.value,
      "city":this.registerFormThree.get('city')?.value,
      "address1":this.registerFormThree.get('address1')?.value,
      "phone":this.registerFormThree.get('phone')?.value,
      "url":"/sellers/url/"+this.registerFormThree.get('country')?.value+""+this.registerFormThree.get('first_name')?.value+"/"+this.registerFormThree.get('last_name')?.value+"/"+this.registerFormThree.get('shop_title')?.value,
      "is_approved":this.registerFormThree.get('is_approved')?.value,
      "shop_title":this.registerFormThree.get('shop_title')?.value,
      "last_name":this.registerFormThree.get('last_name')?.value,
      "first_name":this.registerFormThree.get('first_name')?.value,
      "commission_enable":this.registerFormThree.get('commission_enable')?.value,
      "avatar":null,
      "password":this.registerFormThree.get('password')?.value,
      "dark_mode":1,
      "active_status":0,
      "messenger_color":"red"
    }

    if (this.registerFormThree.valid) {
     
      const role_buyer = (<HTMLInputElement>document.getElementById('role_buyer')).checked
      const role_seller = (<HTMLInputElement>document.getElementById('role_seller')).checked
      
      if (role_seller) {
        user['is_seller']=true;
        this.authService.postSignUp('/marketplacesellers/' ,user).subscribe(res => {
          this.registerFormThree.reset();
          this.loading = false;
          this.___snackBar.open("your registration has been successfull submitted", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });

          this.router.navigate(['/auth/login']);
        }, 
        (err : any) =>{
          this.errorMessage = err.error;
          this.isRegisterError = true;
          this.___snackBar.open("something wrong has happen", '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

          // alert("something wrong has happen");
          // alert(err.email[0]);
          this.loading = false;
          console.log(err.error.email[0])
          console.log(err.error);
        });

        // console.log("Formulaire d'inscription valide", this.registerFormThree.value)
      }
      
      
      if (role_buyer) {
        this.authService.postSignUp('/users/' ,user).subscribe(res => {
          this.registerFormThree.reset();
          this.loading = false;
          this.router.navigate(['/auth/login']);
        }, 
        (err : any) =>{
          this.errorMessage = err.error;
          this.isRegisterError = true;
          this.___snackBar.open(err.email[0], '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

          //alert(err.email[0]);
          this.loading = false;
          console.log(err.error.email[0])
          console.log(err.error);
        });

        // console.log("Formulaire d'inscription valide", this.registerFormThree.value)
      }

    }else{
      this.___snackBar.open("Invalid form data", '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

      //  alert("Formulaire d'inscription non valide");
       this.loading = false;
    }
    
  }

  buyer(){
    this.is_buyer = true;
  }
  seller(){
    this.is_buyer = false;
  }
}

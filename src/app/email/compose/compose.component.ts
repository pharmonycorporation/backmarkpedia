import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';
import { ContactFormService } from './compose.service';


@Component({
  selector: 'app-compose-manager',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeManagerComponent implements OnInit {
	messages;
  toggleChat: boolean = true;
	toggleSingle: boolean = true;
  detail=false;
  prestataires ;
  errorMessage = "";
  filteredItems;
  _listFilter = '';
  searchForm : FormGroup;
  sendEmailForm : FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private formBuilder:  FormBuilder, private contact : ContactFormService, private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      first_name:new FormControl(null)
    })
    this.sendEmailForm = this.formBuilder.group({
      email:new FormControl(null),
      objet:new FormControl(null),
      message:new FormControl(null)
    })
	this.authService.getsEntite('core/get-prestataire-message').then((response)=>{
        this.messages = response['results'];
    }).catch((error)=>{
            console.log(error)
    });
    this.authService.getsEntite("prestataires-info").then( 
      (response: any) => {
  
      this.filteredItems = this.prestataires = response
       console.log(this.prestataires)
      //console.log("Liste des prestataire: "+this.prestataires)
        }
      ).catch(
      (error) => {
        }
      );
   
    }   
     
    send(){
      this.contact.postMessage(this.sendEmailForm.value)
      .subscribe(response => {
        console.log(response);
        // alert("votre message a été envoyé");
        this.openSnackBar("votre message a été envoyé");
        let currentUrl = this.router.url;
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([currentUrl]);
        }, error => {
        console.warn(error.responseText)
        console.log({ error })
            // alert(contactForm);
    })
    }
  
  files: File[] = [];

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
  write(prestataire){
    this.sendEmailForm.patchValue({
      email:prestataire.user.email
    })
  }
  reset() {
    this.sendEmailForm.reset();
  }
  openSnackBar(message) {
    this._snackBar.open(message, 'Fermer', {
      duration: 2 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  filterResults() {
    if (!this.searchForm.value.first_name) {
      this.filteredItems = [...this.prestataires];
    } else {
      this.filteredItems = [];
      this.filteredItems = this.prestataires.filter((prestataire) => {
        return prestataire.user.first_name.toUpperCase().indexOf(this.searchForm.value.first_name.toUpperCase()) > -1;
      });
    }
 }
}





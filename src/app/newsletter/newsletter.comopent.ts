import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/auth.service';
import { config } from 'src/config/local';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
    newsletters:any=[];
    private apiUrl = config.apiUrl+'core/send-newsletter-message/';   
  errorMessage;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  sendEmailNewsletterForm: FormGroup;
  constructor(private authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient, private formBuilder: FormBuilder,private modalService: NgbModal,) { 
    this.getListPrestataire();
    this.updateTransactionListing();
  }

  ngOnInit(): void {
    this.sendEmailNewsletterForm = this.formBuilder.group({
        newsletter:true,
        objet:new FormControl(null),
        message:new FormControl(null)
      })
  }
  openSnackBar(message) {
    this._snackBar.open(message, 'Fermer', {
      duration: 2 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  sendNewsletter(){
        this.postMessage(this.sendEmailNewsletterForm.value) .subscribe(response => {
            console.log(response);
            // alert("votre message a été envoyé");
            this.openSnackBar("votre message a été envoyé");
            this.sendEmailNewsletterForm.reset()
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

  postMessage(input:any){  
    return this.http.post(this.apiUrl, input, {responseType:'text'}) .pipe(map (
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
  reset()
    {
      this.sendEmailNewsletterForm.reset()
     }

  open(content) {
    this.modalService.open(content);
}

  getListPrestataire(){
    this.authService.getsEntite("newsletters").then(
      (response) => {
        console.log(response);
         this.newsletters = response['results'];
        
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  page = 1;
  pageSize = 10;
  collectionSize = this.newsletters.length;
  updateTransactionListing() {
    this.newsletters
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';
import { ContactFormService } from '../compose/compose.service';

@Component({
  selector: 'app-read-manager',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadManagerComponent implements OnInit {

  messages;
  message;
  replyForm :  FormGroup;
  is_admin_message = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private contact : ContactFormService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute ,private formBuilder: FormBuilder, private router :  Router, private authService :  AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.replyForm = this.formBuilder.group({
      message :new FormControl(null)
      
    })
  
    const param = this.route.snapshot.paramMap.get('id');
    const user_mes_id = this.route.snapshot.paramMap.get('message_id');
    
   
    if(user_mes_id){
      this.is_admin_message = true;
        this.authService.getsEntite('core/get-prestataire-message/'+user_mes_id).then((response)=>{
          this.message = response;
          console.log(this.message);
        }).catch((error)=>{
          console.log(error)
        });

        this.authService.getsEntite('core/get-contact-message').then((response)=>{
          this.messages = response;
        }).catch((error)=>{
                console.log(error)
        });
    }else{
      this.authService.getsEntite('core/get-contact-message/'+param).then((response)=>{
        this.message = response;
        console.log(this.message);
      }).catch((error)=>{
        console.log(error)
      });
  
      this.authService.getsEntite('core/get-contact-message').then((response)=>{
        this.messages = response;
      }).catch((error)=>{
              console.log(error)
      });
    }
    
  }
  
  actualiser(){
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }


  reply(replyForm){

    const formtest = {
      message : replyForm.message,
      email : this.message.email,
      objet : this.message.objet

    }
    this.contact.postMessage(formtest).subscribe(response => {
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
    // console.log(formtest);
    // alert("test");
  });
}

  openSnackBar(message) {
    this._snackBar.open(message, 'Fermer', {
      duration: 2 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }


}

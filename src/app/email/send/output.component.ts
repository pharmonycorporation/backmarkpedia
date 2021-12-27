import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-output-manager',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputManagerComponent implements OnInit {
  messages;
  constructor(private authService: AuthenticationService, private router: Router ) { }

  ngOnInit(): void {

    this.authService.getsEntite('core/get-prestataire-message').then((response)=>{
        this.messages = response;
        console.log(this.messages)
    }).catch((error)=>{
            console.log(error)
    });

  }
    
  actualiser(){
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  
  checkUncheckAll(event) {
     var checkboxes = document.getElementsByTagName('input');
     if (event.target.checked) {
         for (var i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = true;
             }
         }
     } else {
         for (var i = 0; i < checkboxes.length; i++) {
             // console.log(i)
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = false;
             }
         }
     }
 }
    
}

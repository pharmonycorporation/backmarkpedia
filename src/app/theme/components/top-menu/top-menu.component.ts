import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../../app.service';
import { Settings, AppSettings } from '../../../app.settings';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html'
})
export class TopMenuComponent implements OnInit {
  public currencies = ['USD', 'EUR'];
  public currency:any; 
  userProfile : any= {};
  is_not_authenticate=true
  is_google_authenticated = false
  google_avatar;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public router: Router, public appService:AppService, public translateService: TranslateService) { 
    this.settings = this.appSettings.settings;
    this.userProfile = JSON.parse(sessionStorage.getItem("markpediausersessionid")); 
    this.google_avatar = JSON.parse(sessionStorage.getItem("google_avatar")) ; 
    // console.log(this.google_avatar);
    if(this.google_avatar){
      this.is_google_authenticated = true;
    }
    
  } 

  ngOnInit() {
    this.currency = this.currencies[0]; 
   
    if(this.userProfile){
      this.is_not_authenticate = false;
      console.log("is seller", this.userProfile.user.is_seller)
    }
    // console.log(this.userProfile.success);
  }

  public changeCurrency(currency){
    this.currency = currency;
  } 

  public changeLang(lang:string){ 
    this.translateService.use(lang);   
  } 
  logout(){

    sessionStorage.removeItem("markpediausersessionid");
    if(sessionStorage.getItem("google_avatar")){
      sessionStorage.removeItem("google_avatar");
    }
    
	  this.router.navigate(['/auth/login']);
  }
  public getLangText(lang){
    if(lang == 'de'){
      return 'German';
    }
    else if(lang == 'fr'){
      return 'French';
    }
    else if(lang == 'ru'){
      return 'Russian';
    }
    else if(lang == 'tr'){
      return 'Turkish';
    }
    else{
      return 'English';
    }
  } 

}

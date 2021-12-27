import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'markpedia';
  // title = 'Espace Prestataire';
  navSidebarClass: boolean = true;
  hamburgerClass: boolean = false;

  configPrestataire = {
    typography: "poppins",
    version: "light",
    layout: "vertical",
    primary: "color_13",
    headerBg: "color_13",
    navheaderBg: "color_13",
    sidebarBg: "color_1",
    sidebarStyle: "compact",
    sidebarPosition: "static",
    headerPosition: "fixed",
    containerLayout: "compact",
    };
    direction = 'ltr';
    constructor(private route: ActivatedRoute, private router: Router) {
      // this.ngxLoader.start();
   
     }
  
    ngOnInit(): void {
      
      var themeVar = this.configPrestataire;
          
           document.body.setAttribute('data-typography', themeVar.typography);
           document.body.setAttribute('data-theme-version', themeVar.version);
           document.body.setAttribute('data-layout', themeVar.layout);
           document.body.setAttribute('data-primary', themeVar.primary);
           document.body.setAttribute('data-headerbg', themeVar.headerBg);
           document.body.setAttribute('data-nav-headerbg', themeVar.navheaderBg);
           document.body.setAttribute('data-sibebarbg', themeVar.sidebarBg);
           document.body.setAttribute('data-sidebar-style', themeVar.sidebarStyle);
           document.body.setAttribute('data-sidebar-position', themeVar.sidebarPosition);
           document.body.setAttribute('data-header-position', themeVar.headerPosition);
           document.body.setAttribute('data-container', themeVar.containerLayout);
           document.body.setAttribute('direction', this.direction);
              
          document.getElementsByTagName('html')[0].setAttribute('dir', this.direction);
          document.getElementsByTagName('html')[0].setAttribute('class', this.direction);
        //   setTimeout(() => {
        //     this.ngxLoader.stop(); 
        //  }, 3000);
    }
}

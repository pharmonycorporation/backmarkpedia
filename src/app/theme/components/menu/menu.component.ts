import { Component, OnInit, Input} from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  categories:any[] = [];
  
  constructor(private appService: AppService,) { 
    this.appService.get("categories/").subscribe(data=>{
      this.categories = data;      
      console.log("this.categories ShopByCategoriesComponent : ", this.categories)
    }) 
  }

  ngOnInit() { }

  openMegaMenu(){
    let pane = document.getElementsByClassName('cdk-overlay-pane');
    [].forEach.call(pane, function (el) {
        if(el.children.length > 0){
          if(el.children[0].classList.contains('mega-menu')){
            el.classList.add('mega-menu-pane');
          }
        }        
    });
  }

}

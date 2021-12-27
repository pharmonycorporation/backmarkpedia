import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';
import { AddBannerComponent } from './add-banner/add-banner.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { AppSettings, Settings } from 'src/app/app.settings';
import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-banners-v',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersVendorComponent implements OnInit {
  public banners: Banner[] = []; 
  public page: any;
  public count = 6;
  public settings:Settings;
  marketplace;
  sellers_id;
  products;
  constructor(public appService: AppService, public dialog: MatDialog, 
    public appSettings:AppSettings,
    public authService : AuthenticationService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    // this.marketplace = JSON.parse(sessionStorage.getItem("markepdiamarketplaceid")); 
    // this.sellers_id = this.marketplace.id;
    this.getBanners();
    // this.getVendorProducts(); 
    // this.marketplace = JSON.parse(sessionStorage.getItem("markepdiamarketplaceid")); 
    // this.user = this.marketplace;
    
  }
  // public getVendorProducts(){
  //   this.appService.getProducts("products_vendor_list/"+this.sellers_id).subscribe(data=>{
  //     this.products = data; 
  //     console.log(this.products);
  //     //for show more product  
  //     // for (var index = 0; index < 3; index++) {
  //     //   this.products = this.products.concat(this.products);        
  //     // }
  //   });
  // }
  public getBanners(){  
    
    this.authService.getsEntite("api/banners").then(
      (res:any)=>{
        this.banners = res
        console.log("banners", res)
      }).catch((err)=>{console.log(err)})

    // this.appService.getMbanners("banners").subscribe(data => {
    //   console.log("data : ", data)
    //   this.banners = data; 
    //   this.banners.shift();
    // }); 

  }

  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }

  public openCategoryDialog(data:any){
    const dialogRef = this.dialog.open(AddBannerComponent, {
      data: {
        deal: data,
        products: this.products
      },
      panelClass: ['theme-dialog'],
      autoFocus: false,
      direction: (this.settings.rtl) ? 'rtl' : 'ltr'
    });
    dialogRef.afterClosed().subscribe(deal => { 
        // console.log(deal);
      if(deal){    
        const index: number = this.banners.findIndex(x => x.id == deal.id);
        if(index !== -1){
          this.banners[index] = deal;
        } 
        else{ 
          let last_deal = this.banners[this.banners.length - 1]; 
          deal.id = last_deal.id + 1;
          this.banners.push(deal);  
        }          
      }
    });
  }

  public remove(deal:any){  
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        title: "Confirm Action",
        message: "Are you sure you want remove this deal?"
      }
    }); 
    dialogRef.afterClosed().subscribe(dialogResult => { 
      if(dialogResult){
        const index: number = this.banners.indexOf(deal);
        if (index !== -1) {
          this.banners.splice(index, 1);  
        } 
      } 
    }); 
  }

}

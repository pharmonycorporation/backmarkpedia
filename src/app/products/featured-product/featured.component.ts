import { Component, OnInit } from '@angular/core';
import { Deal, Product } from 'src/app/app.models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { AppSettings, Settings } from 'src/app/app.settings';
import { AuthenticationService } from 'src/app/auth.service';
import { AddFeaturedProductComponent } from './add-featured/add-featured.component';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-featured-daily',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  public products: Product[] = []; 
  public sellers_products: Product[] = []; 
  public page: any;
  public count = 6;
  public settings:Settings;
  marketplace;
  sellers_id;
  featureds;
  constructor(public appService: AppService, public dialog: MatDialog, 
    public appSettings:AppSettings,
    public authService : AuthenticationService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.marketplace = JSON.parse(sessionStorage.getItem("markepdiamarketplaceid")); 
    this.sellers_id = this.marketplace.id;
    // this.getDeals();
    this.getfeaturedProducts(); 
    this.getVendorProducts2(); 
    // this.marketplace = JSON.parse(sessionStorage.getItem("markepdiamarketplaceid")); 
    // this.user = this.marketplace;
    
  }
  public getfeaturedProducts(){
    this.appService.getProducts("featured_vendor_product_list/"+this.sellers_id+"/").subscribe(data=>{
      this.products = data; 
      console.log(this.products);
      //for show more product  
      // for (var index = 0; index < 3; index++) {
      //   this.products = this.products.concat(this.products);        
      // }
    });
  
  }
  public getVendorProducts2(){
    this.appService.getProducts("products_vendor_list/"+this.sellers_id+"/").subscribe(data=>{
      this.sellers_products = data; 
      // console.log(this.sellers_products);
      //for show more product  
      // for (var index = 0; index < 3; index++) {
      //   this.products = this.products.concat(this.products);        
      // }
    });
  }
  // public getDeals(){  
    
  //   this.authService.getsEntite("api/vendor_productsday/"+this.marketplace.id).then(
  //     (res:any)=>{
  //       this.products = res
  //       console.log(res)
  //     }).catch((err)=>{console.log(err)})

  //   // this.appService.getMproducts("products").subscribe(data => {
  //   //   console.log("data : ", data)
  //   //   this.products = data; 
  //   //   this.products.shift();
  //   // }); 

  // }

  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }

  public openCategoryDialog(data:any){
    const dialogRef = this.dialog.open(AddFeaturedProductComponent, {
      data: {
        featured: data,
        products: this.sellers_products
      },
      panelClass: ['theme-dialog'],
      autoFocus: false,
      direction: (this.settings.rtl) ? 'rtl' : 'ltr'
    });
    dialogRef.afterClosed().subscribe(deal => { 
        // console.log(deal);
      if(deal){    
        const index: number = this.products.findIndex(x => x.id == deal.id);
        if(index !== -1){
          this.products[index] = deal;
        } 
        else{ 
          let last_deal = this.products[this.products.length - 1]; 
          deal.id = last_deal.id + 1;
          this.products.push(deal);  
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
        const index: number = this.products.indexOf(deal);
        if (index !== -1) {
          this.products.splice(index, 1);  
        } 
      } 
    }); 
  }

}

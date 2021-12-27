import { Component, OnInit } from '@angular/core';
import { Deal } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';
import { DealsDialogComponent } from './deals-dialog/deals-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { AppSettings, Settings } from 'src/app/app.settings';
import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-deals-daily',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  public deals: Deal[] = []; 
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
    this.marketplace = JSON.parse(sessionStorage.getItem("markepdiamarketplaceid")); 
    this.sellers_id = this.marketplace.id;
    this.getDeals();
    this.getVendorProducts(); 
    // this.marketplace = JSON.parse(sessionStorage.getItem("markepdiamarketplaceid")); 
    // this.user = this.marketplace;
    
  }
  public getVendorProducts(){
    this.appService.getProducts("products_vendor_list/"+this.sellers_id).subscribe(data=>{
      this.products = data; 
      console.log(this.products);
      //for show more product  
      // for (var index = 0; index < 3; index++) {
      //   this.products = this.products.concat(this.products);        
      // }
    });
  }
  public getDeals(){  
    
    this.authService.getsEntite("api/vendor_dealsday/"+this.marketplace.id).then(
      (res:any)=>{
        this.deals = res
        console.log(res)
      }).catch((err)=>{console.log(err)})

    // this.appService.getMdeals("deals").subscribe(data => {
    //   console.log("data : ", data)
    //   this.deals = data; 
    //   this.deals.shift();
    // }); 

  }

  public onPageChanged(event){
    this.page = event; 
    window.scrollTo(0,0); 
  }

  public openCategoryDialog(data:any){
    const dialogRef = this.dialog.open(DealsDialogComponent, {
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
        const index: number = this.deals.findIndex(x => x.id == deal.id);
        if(index !== -1){
          this.deals[index] = deal;
        } 
        else{ 
          let last_deal = this.deals[this.deals.length - 1]; 
          deal.id = last_deal.id + 1;
          this.deals.push(deal);  
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
        const index: number = this.deals.indexOf(deal);
        if (index !== -1) {
          this.deals.splice(index, 1);  
        } 
      } 
    }); 
  }

}
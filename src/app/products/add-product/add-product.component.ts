import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Category } from 'src/app/app.models';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public form: FormGroup;
  public colors = ["#5C6BC0","#66BB6A","#EF5350","#BA68C8","#FF4081","#9575CD","#90CAF9","#B2DFDB","#DCE775","#FFD740","#00E676","#FBC02D","#FF7043","#F5F5F5","#696969"];
  public sizes = ["S","M","L","XL","2XL","32", "36","38","46","52","13.3\"","15.4\"","17\"","21\"","23.4\""]; 
  public selectedColors:string;
  public categories:Category[];
  languages;
  products;
  private sub: any;
  public id:any;
  marketPlaceProfile;
  constructor(public snackBar: MatSnackBar ,private router: Router, public appService:AppService, public authService: AuthenticationService, public formBuilder: FormBuilder, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.marketPlaceProfile = JSON.parse(sessionStorage.getItem("markepdiamarketplaceid"));
    this.form = this.formBuilder.group({ 
      'name': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'images': null,
      "oldPrice": null,
      "price": null,
      "min_price": null,
      "max_price": null,
      "special_price": null,
      "special_price_from": null,
      "special_price_to": null,
      "newPrice": [null, Validators.required ],
      "discount": null, 
      "description": null,
      "short_description": null,
      "meta_title": null,
      "meta_keywords": null,
      "availibilityCount": null, 
      "color": null,
      "size": null,
      "locale": null,
      "weight": null,
      "product_id": null,
      "parent_id": null,
      "category_id": [null, Validators.required ]   
    }); 
    this.getCategories();
    this.sub = this.activatedRoute.params.subscribe(params => {  
      if(params['id']){
        this.id = params['id'];
        this.getProductById(); 
      }  
    }); 
  }

  public getCategories(){ 
    
    this.authService.getsEntite("api/categories").then(
      (res:any)=>{
        this.categories = res
        this.categories.shift();
        console.log(res)
      }).catch((err)=>{console.log(err)})

    // this.appService.getMCategories("categories").subscribe(data => {
    //   console.log("data : ", data)
    //   this.categories = data; 
    //   this.categories.shift();
    // }); 
  
  }

  public getProductById(){
    this.appService.getProductById(this.id).subscribe((data:any)=>{ 
      this.form.patchValue(data); 
      this.selectedColors = data.color; 
      const images: any[] = [];
      data.images.forEach(item=>{
        let image = {
          link: item.medium,
          preview: item.medium
        }
        images.push(image);
      })
      this.form.controls.images.setValue(images); 
    });
  }

  public onSubmit(){
    console.log(this.form.value);
    const prod = {
      "product":this.form.value,
      "marketplacesellers":this.marketPlaceProfile
    }
    this.authService.createNewUser('api/add_new_product_marketPlace_by_seller/', prod).then(
      (res:any)=>{
        console.log(res)
        this.snackBar.open('Your product have been created!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        this.router.navigate(['/vendor/products/product-detail/',res.marketpdt_id] );
      }
    ).catch((error)=>{
      this.snackBar.open('An error has occured!!! please verify your form data', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    })
  }

  public onColorSelectionChange(event:any){  
    if(event.value){
      this.selectedColors = event.value.join();
    } 
  }  

  ngOnDestroy() {
    this.sub.unsubscribe();
  } 

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Product } from 'src/app/app.models';
import { ProductZoomComponent } from './product-zoom/product-zoom.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import { AuthenticationService } from 'src/app/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('zoomViewer') zoomViewer;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  public config: SwiperConfigInterface={};
  public product: any;
  public image: any;
  public zoomImage: any;
  private sub: any;
  public form: FormGroup;

  constructor(private _sanitizer: DomSanitizer,public authService: AuthenticationService ,public appService:AppService, private activatedRoute: ActivatedRoute, public dialog: MatDialog, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {  
      if(params['id']){
        // console.log('if')
        this.authService.getUserById("api/marketplaceproducts/",params['id']).then(
          (res:any)=>{
            console.log(res)
            const imgs = []
            // res.marketplace_product.images.forEach(element => {
            //  const a = element.image64.split("data:image/")
            //  console.log(a)
            //  const b = a[1].split("'}")
            //  imgs.push("data:image/"+b)
            //   console.log(b)
            // });
            const pdt = {
              "id": res.marketplace_product.id,
              "name": res.product_flat.name,
              "images":res.marketplace_product.images,
              "price":res.marketplace_product.price,
              "color":res.marketplace_product.colors,
              "size":res.marketplace_product.size,
              "description":res.marketplace_product.description,
              "weight":res.product_flat.weight,
              "short_description":res.product_flat.short_description,
              "categorie_id":res.product_flat.product_id.categorie.id,
              "categorie_name":res.product_flat.product_id.categorie.name,
              "max_price": res.product_flat.max_price,
              "meta_description":res.product_flat.meta_description,
              "meta_keywords": res.product_flat.meta_keywords,
              "meta_title": res.product_flat.meta_title,
              "min_price": res.product_flat.min_price,
              "oldPrice": null,
               "newPrice": null,
               "discount": null,
               "ratingsCount": null,
               "ratingsValue": null,
               "availibilityCount": null,
               "cartCount": null,
               "categoryId": null
            }
            this.product = pdt

            console.log(this.product)
          }
        ).catch(
          (error)=>{
            console.log(error)
          }
        )
        //this.getProductById(params['id']); 
      } 
      else{
        console.log("else")
        this.getProductById(1); 
      }
    }); 
    this.form = this.formBuilder.group({ 
      'review': [null, Validators.required],            
      'name': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])]
    }); 
  }

  ngAfterViewInit(){
    this.config = {
      observer: false,
      slidesPerView: 4,
      spaceBetween: 10,      
      keyboard: true,
      navigation: true,
      pagination: false,       
      loop: false, 
      preloadImages: false,
      lazy: true, 
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        600: {
          slidesPerView: 3,
        }
      }
    }
  }

  public getProductById(id){
    this.appService.getProductById(id).subscribe(data=>{
      this.product = data;
      this.image = data.images[0].medium;
      this.zoomImage = data.images[0].big;
      setTimeout(() => { 
        this.config.observer = true;
       // this.directiveRef.setIndex(0);
      });
    });
  }

  public selectImage(image){
    this.image = image.medium;
    this.zoomImage = image.big;
  }

  public onMouseMove(e){
    if(window.innerWidth >= 1280){
      var image, offsetX, offsetY, x, y, zoomer;
      image = e.currentTarget; 
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      x = offsetX/image.offsetWidth*100;
      y = offsetY/image.offsetHeight*100;
      zoomer = this.zoomViewer.nativeElement.children[0];
      if(zoomer){
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
        zoomer.style.display = "block";
        zoomer.style.height = image.height + 'px';
        zoomer.style.width = image.width + 'px';
      }
    }
  }

  public onMouseLeave(event){
    this.zoomViewer.nativeElement.children[0].style.display = "none";
  }

  public openZoomViewer(){
    this.dialog.open(ProductZoomComponent, {
      data: this.zoomImage,
      panelClass: 'zoom-dialog'
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  } 
  
  public onSubmit(){ 
    if(this.form.valid){
      console.log(this.form.value);
    }
  }

}

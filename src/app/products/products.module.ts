import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SwiperModule } from 'ngx-swiper-wrapper';
// import { SwiperModule } from 'swiper/angular';
import { InputFileModule } from 'ngx-input-file';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductZoomComponent } from './product-detail/product-zoom/product-zoom.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDialogComponent } from './categories/category-dialog/category-dialog.component';
import { DealsComponent } from './daily-deals/deals.component';
import { DealsDialogComponent } from './daily-deals/deals-dialog/deals-dialog.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MatDateFormats, MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';
// import { BannersVendorComponent } from 'src/app/shared/banners/banners.component';
import { AddBannerComponent } from './banners-products/add-banner/add-banner.component';
import { FeaturedProductComponent } from 'src/app/shared/products-carousel/featured-product/featured-product.component';
import { AddFeaturedProductComponent } from './featured-product/add-featured/add-featured.component';
import { FeaturedProductsComponent } from './featured-product/featured.component';
import { BannersVendorComponent } from './banners-products/banners.component';
export const routes = [ 
  { path: '', redirectTo: 'product-list', pathMatch: 'full'},
  { path: 'categories', component: CategoriesComponent, data: { breadcrumb: 'Categories' } },
  { path: 'daily-deals', component: DealsComponent, data: { breadcrumb: 'deals' } },
  { path: 'featured-product', component: FeaturedProductsComponent, data: { breadcrumb: 'Featured product' } },
  { path: 'banner-product', component: BannersVendorComponent, data: { breadcrumb: 'banner product' } },
  { path: 'product-list', component: ProductListComponent, data: { breadcrumb: 'Product List' } },
  { path: 'product-detail', component: ProductDetailComponent, data: { breadcrumb: 'Product Detail' } },
  { path: 'product-detail/:id', component: ProductDetailComponent, data: { breadcrumb: 'Product Detail' } }, 
  { path: 'add-product', component: AddProductComponent, data: { breadcrumb: 'Add Product' } },
  { path: 'add-product/:id', component: AddProductComponent, data: { breadcrumb: 'Edit Product' } }, 
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    BannersVendorComponent,
    AddBannerComponent,
    FeaturedProductsComponent,
    AddFeaturedProductComponent,
    ProductZoomComponent,
    AddProductComponent,
    CategoriesComponent,
    DealsComponent,
    DealsDialogComponent, 
    CategoryDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    SwiperModule,
    InputFileModule
  ], providers:[]
})
export class ProductsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductsComponent } from './components/products/products.component';




@NgModule({
  declarations: [
    MainPageComponent,
    CatalogPageComponent,
    ContactPageComponent,
    LayoutComponent,
    CollectionPageComponent,
    ProductDetailPageComponent,
    ProductsComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class MainModule { }

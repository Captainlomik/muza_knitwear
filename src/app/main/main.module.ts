import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainPageComponent,
    CatalogPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }

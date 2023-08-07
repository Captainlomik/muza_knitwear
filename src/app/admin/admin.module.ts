import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    SharedModule
  ]
})
export class AdminModule { }

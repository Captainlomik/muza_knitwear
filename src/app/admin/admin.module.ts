import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
    LayoutComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    SharedModule, 
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule
  ]
})
export class AdminModule { }

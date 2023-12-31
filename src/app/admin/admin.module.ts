import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { CardModule } from 'primeng/card';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsPageComponent } from './settings-page/settings-page.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
    LayoutComponent,
    MenuComponent,
    QuestionPageComponent,
    SettingsPageComponent,

  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    TableModule,
    BrowserModule,
    CardModule,
    FileUploadModule,
    InputTextareaModule

  ]
})
export class AdminModule { }

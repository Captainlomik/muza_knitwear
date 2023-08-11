import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LayoutComponent } from './layout/layout.component';
import { QuestionPageComponent } from './question-page/question-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: LayoutComponent, children: [
      { path: '', component: MainPageComponent },
      { path: 'questions', component: QuestionPageComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


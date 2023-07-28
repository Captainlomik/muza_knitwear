import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/main-page/main-page.component';
import { CatalogPageComponent } from './main/catalog-page/catalog-page.component';
import { ContactPageComponent } from './main/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'contact', component: ContactPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AccordionComponent,
    AccordionItemComponent,
    ModalComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AccordionComponent, 
    AccordionItemComponent,
    ModalComponent,
    ReactiveFormsModule
  ]

})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component'



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AccordionComponent,
    AccordionItemComponent,
    ModalComponent
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AccordionComponent, 
    AccordionItemComponent,
    ModalComponent
  ]

})
export class SharedModule { }

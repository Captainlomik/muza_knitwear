import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { PersonalOrderService } from 'src/app/shared/services/personal-order.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

  orderForm!: FormGroup

  constructor(private modalService: ModalService, private personalOrder: PersonalOrderService) {
  }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      name: new FormControl(' ', Validators.required),
      phone: new FormControl(' ', Validators.required),
    })
  }


  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate)
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }

  submitOrder() {
    // let order = {
    //   id: 1,
    //   data: Date.now(),
    //   name: this.orderForm.value.name,
    //   phone: this.orderForm.value.phone
    // }
    // this.personalOrder.post(this.orderForm.value).subscribe({
    //   next: el => console.log(el),
    //   error: er => console.log(er)
    // })
    this.modalService.submitModal()
    console.log('lol')
    console.log(this.orderForm.value)
  }

}

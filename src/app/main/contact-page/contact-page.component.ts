import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  questionForm!: FormGroup
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required)
    })
  }

  submitForm() {
    this.questionService.post(this.questionForm.value).subscribe(
      {
        next: el => console.log(el),
        error: er => console.log(er)
      }
    )
  }

}

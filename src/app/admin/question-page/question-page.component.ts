import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionPageComponent implements OnInit, OnDestroy {

  constructor(private questionService: QuestionService) { }

  $aSub!: Subscription;
  questions: any

  ngOnInit(): void {
    this.$aSub = this.questionService.get().subscribe({
      next: el => this.questions = el,
      error: er => console.log(er),
    })
  }

 ngOnDestroy(): void {
   if(this.$aSub) this.$aSub.unsubscribe()
 }


}

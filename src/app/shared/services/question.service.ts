import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Question } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService<Question> {

  protected override url?: string | undefined = 'question'

}

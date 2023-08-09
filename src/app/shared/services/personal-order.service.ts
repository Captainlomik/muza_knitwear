import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Order } from '../interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalOrderService extends BaseService<Order> {

  protected override url?: string | undefined = 'order'

}

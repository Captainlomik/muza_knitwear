import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Product } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {
  protected override url?: string | undefined = 'product';

}

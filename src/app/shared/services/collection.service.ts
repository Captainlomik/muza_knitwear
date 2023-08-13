import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Collection } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CollectionService extends BaseService<Collection>  {
 protected override url?: string | undefined = 'collection'
}

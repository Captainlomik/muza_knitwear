import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Info } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class MainInfoService extends BaseService<Info> {
protected override url?: string | undefined = 'main'
}

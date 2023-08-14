import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Collection } from 'src/app/shared/interface';
import { CollectionService } from 'src/app/shared/services/collection.service';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {

  param!: number
  collection$!: Observable<Collection>

  constructor(private route: ActivatedRoute, private collectionsService: CollectionService) { }

  ngOnInit(): void {
    this.collection$ = this.route.params
      .pipe(switchMap((params: Params) => {
        this.param = params['id']
        return this.collectionsService.get_byId(params['id'])
      }))
  }


}

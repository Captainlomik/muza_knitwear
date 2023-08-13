import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/shared/interface';
import { CollectionService } from 'src/app/shared/services/collection.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  collections: Collection[] = []

  constructor(private collectionsService: CollectionService) { }

  ngOnInit(): void {
    this.collectionsService.get().subscribe({
      next: el => this.collections = el,
      error: er => console.log(er)
    })
  }

}

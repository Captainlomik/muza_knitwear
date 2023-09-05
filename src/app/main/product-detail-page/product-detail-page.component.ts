import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/shared/interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  product$!: Observable<Product>
  param!: number


  constructor(private router: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.product$ = this.router.params.pipe(switchMap((params: Params) => {
      this.param = params['id']
      return this.productService.get_byId(params['id'])
    }))
  }
}

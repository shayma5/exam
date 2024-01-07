import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
  id!: Number;
  product!: Product;

  constructor(private actRoute: ActivatedRoute, private router: Router, private ps: ProductService) { }

  ngOnInit() {
    this.getParam();

    this.ps.getProductById(this.id).subscribe((data) => {
      this.product = data;
    })
  }

  getParam() {
    this.actRoute.paramMap.subscribe(data => this.id = Number(data.get('param')));
  }

}
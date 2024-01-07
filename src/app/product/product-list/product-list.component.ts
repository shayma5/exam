import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  list : Product[] = []

  constructor(private Router:Router, private ps:ProductService){}

  ngOnInit(){
    this.ps.getAllProducts().subscribe(data=> this.list= (data));
    console.log(this.list);
  }

  deleteProduct(index: Number ) {
    this.ps.deleteProduct(index).subscribe(() => alert('product deleted'));
  }

  add(){
    this.Router.navigate(["addproduct"]);
   }

}

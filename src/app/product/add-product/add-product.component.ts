import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private Router: Router, private ps: ProductService) { }

  add(F: NgForm) {
    const id = new Date().getTime();
    const newProduct: Product = {
      id: id,
      productName: F.value.inputproductName,
      description: F.value.inputdescription,
      price: F.value.inputprice,
      quantity: F.value.inputquantity,
      expiryDate: F.value.inputexpiryDate
    }
    this.ps.addProduct(newProduct).subscribe(() => {
      alert("product added");
      this.Router.navigate(["productList"]);
    });
  }
}
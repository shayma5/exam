import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  id!: Number;
  product!: Product;
  updateForm: FormGroup;

  constructor(private actRoute: ActivatedRoute, private router: Router, private ps: ProductService, private formBuilder: FormBuilder) {
    this.updateForm = this.formBuilder.group({
      id: [''],
      productName: ['', Validators.required],
      description:['', Validators.required],
      price:['', Validators.required],
      quantity:['', Validators.required],
      expiryDate:['', Validators.required],
    });
   }

ngOnInit() {
  this.getParam();

  this.ps.getProductById(this.id).subscribe((data) => {
    this.product = data;
    this.updateForm.patchValue(this.product);
  })
}

update() {
  const updatedProductData = this.updateForm.value;
  this.ps.updateProduct(updatedProductData).subscribe(
    () => this.router.navigate(['/productList'])
  );
}

getParam() {
  this.actRoute.paramMap.subscribe(data => this.id = Number(data.get('param')));
}

}

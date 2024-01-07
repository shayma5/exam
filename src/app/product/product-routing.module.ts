import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"details/:param",component:DetailsProductComponent},
  {path:"update/:param", component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

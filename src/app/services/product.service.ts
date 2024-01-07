import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    //url du backend
    URL=" http://localhost:3000/product"
    httpOPtions={
      headers: new HttpHeaders({
        'content-type' : 'application/json'
      })
    }
  
    constructor(private http:HttpClient) { }

    getAllProducts(){
      return this.http.get<Product[]>(this.URL);
    }

    deleteProduct(id:Number){
      let URL2= this.URL + "/"+id;
      return this.http.delete<Product>(URL2);
    }

    addProduct(p:Product){
      return this.http.post<Product>(this.URL, p, this.httpOPtions);
    }

    getProductById(id:Number){
      return this.http.get<Product>(this.URL+'/'+id);
    }

    updateProduct(u:Product){
      let id=u.id;
      return this.http.put(this.URL+'/'+id,u);
    }
  
}

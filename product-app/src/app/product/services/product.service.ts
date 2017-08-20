import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Product } from "../models/product.model";

import {Http, Headers, 
  Response, 
  RequestOptions} from "@angular/http";

import { environment } from "../../../environments/environment";

import "rxjs/add/operator/map";
import { HttpClient } from "../../auth/auth.http-client";

@Injectable()
export abstract class ProductService {
   
  abstract getProducts(): Observable<Product[]>;
  abstract deleteProduct(id): Observable<any>;
  abstract getProduct(id):Observable<Product>;
  abstract saveProduct(product:Product):Observable<Product>;
  abstract searchProducts(q: string): Observable<Product[]>;

}

@Injectable()
export class ProductWebService extends ProductService {
    constructor(private http:HttpClient) {
       super();

       console.log("Product Service created");
    }

    getProducts():Observable<Product[]> {
      return this.http
             .get(environment.apiEndPoint + "/api/products")
             .map ( (response: Response)=>{
               console.log(response);
               let products:Product[] = response.json();
               /*products = products.map( (product: Product)=>{
                product.price = product.price+10;
                return product;
               })*/
               return products;
             })
   }

   

  //DELETE /api/products/123

  deleteProduct(id): Observable<any> {
    return this.http
              .delete(environment.apiEndPoint + "/api/products/" + id)
              .map ( (response: Response)=>{
                console.log(response);
                let data:any = response.json();
                 
                return data;
              })
  }


  
  getProduct(id):Observable<Product> {
    return this.http
           .get(environment.apiEndPoint + "/api/products/" + id)
           .map ( (response: Response)=>{
             console.log(response);
             let product:Product = response.json();
             return product;
           })
 }
 
 saveProduct(product:Product):Observable<Product> {
  let headers:Headers = new Headers({
    "Content-Type" : "application/json"
  });

  let options: RequestOptions = new RequestOptions({
    headers: headers
  });

  let jsonData = JSON.stringify(product);
  
  if (product.id) {
     return this.http
           .put(environment.apiEndPoint + "/api/products/" + product.id, 
                jsonData, options)
           .map ( (response: Response)=>{
             console.log(response);
             let product:Product = response.json();
             return product;
           })
   } else {
     return this.http
           .post(environment.apiEndPoint + "/api/products" , 
                jsonData, options)
           .map ( (response: Response)=>{
             console.log(response);
             let product:Product = response.json();
             return product;
           })
   }

}

searchProducts(q: string):Observable<Product[]> {
  return this.http
         .get(environment.apiEndPoint + "/api/products?q=" + q)
         .map ( (response: Response)=>{
           console.log(response);
           let products:Product[] = response.json();
           
           products = products.map( (product: Product) => {
             product.price = product.price * Math.random()
             return product;
           })

           return products;
         })
}

}

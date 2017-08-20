import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} 
        from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";

//convert rxjs to promise
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:Product = {name :''};

  constructor(private productService:ProductService,
             private route: ActivatedRoute,
            private router: Router) {
              
   }

  ngOnInit() {
    let id: any = this.route.snapshot.params["id"];

    if (id) { //edit
        this.productService.getProduct(id)
        .toPromise()
        .then ( (product: Product) => {
          this.product = product;
        })
    
    }

  }

  saveProduct() {
    this.productService
    .saveProduct(this.product)
    .subscribe ( (product: Product)=> {
        this.router.navigate(["/products", "list"]);
    })

  }

}

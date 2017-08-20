import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductService } from "./services/product.service";

@NgModule({
  imports: [CommonModule],
  declarations: [ProductHomeComponent, ProductListComponent, ProductEditComponent, ProductSearchComponent, FilterPipe],
  providers: [ProductService]
})
export class ProductModule { }

import { Component } from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';
import {ProductModel} from '../models/product.model';
import {ProductService} from '../services/product.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    RouterLink
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products : ProductModel[];
  constructor(private productService: ProductService) {
    this.products = productService.productsList();
  }
  deleteProduct(product : ProductModel) {
    let message = confirm("Are you sure you want to delete this product?");
    if(message)
      this.productService.deleteProduct(product);
  }
}

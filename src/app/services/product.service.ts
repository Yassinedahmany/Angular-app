import { Injectable } from '@angular/core';
import {ProductModel} from '../models/product.model';
import {CategoryModel} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductModel[];
  product! : ProductModel;
  categories!: CategoryModel[];
  category!: CategoryModel;
  constructor() {
    this.categories=[
      {idCategory : 1,category : "Bakery"},
      {idCategory : 2,category : "Dairy"},
      {idCategory : 3,category : "Meat"},
      {idCategory : 4,category : "Frozen food"},
      {idCategory : 5,category : "Seafood"}
    ]
      this.products = [
        {idProduct : 1 , nameProduct : "Cheese", priceProduct : 34.00,dateCreate : new Date(),
        category : {idCategory : 2,category : "Dairy"}},
        {idProduct : 2 , nameProduct : "Bread", priceProduct : 3.00,dateCreate : new Date(),
        category : {idCategory : 1,category : "Bakery"}},
        {idProduct : 3 , nameProduct : "Milk", priceProduct : 7.00,dateCreate : new Date(),
        category : {idCategory : 2,category : "Dairy"}},
      ];
  }
  productsList(){
    return this.products;
  }
  addProduct(product: ProductModel ){
    this.products.push(product);
  }
  deleteProduct(product : ProductModel ){
    const index = this.products.indexOf(product, 0);
    if(index > -1)
      this.products.splice(index, 1);
  }
  editProduct(id : number ){
    this.product = this.products.find(p => p.idProduct == id)!;
    return this.product;
  }
  updateProdut(product : ProductModel ){
    this.deleteProduct(product);
    this.addProduct(product);
    this.sortProduct();
  }
  sortProduct(){
    this.products.sort(
      (x,y) =>
        (x.idProduct! > y.idProduct! ? 1 : -1)
    )
  }
  categoriesList(){
    return this.categories;
  }
  editCategory(id : number ){
    this.category = this.categories.find(c => c.idCategory == id)!;
    return this.category;
  }
}

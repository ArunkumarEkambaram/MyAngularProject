import { product } from './product/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: product[] = [
    new product(1, "Wireless Mouse", "Logitech", 680, 20),
    new product(2, "Samsung Galaxy M31s", "Samsung", 19990.50, 25),
    new product(3, "HP Pavilion", "HP", 68499, 20),
    new product(4, "Pedestal Fan", "Bajaj", 2899, 50)
  ];

  constructor() { }

  getProductList(): product[] {
    return this.products;
  }
}

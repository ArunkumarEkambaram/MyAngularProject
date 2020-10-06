import { product } from './../product.model';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parseTemplate } from '@angular/compiler';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: string;
  name: string;
  manufacturer: string;
  price: number;
  quantity: number;

  productdetail: product;

  products: product[];

  constructor(private route: ActivatedRoute, private _productService: ProductService) {
    // this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    //ActivatedRoute
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    });

    this.products = this._productService.getProductList();
    for (let pr of this.products) {
      if (pr.id.toString() == this.id) {
        this.productdetail = pr;
      }
    }
  }

}

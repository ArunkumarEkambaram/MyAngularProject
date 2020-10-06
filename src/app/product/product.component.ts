import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string = "List of Product";

  imgSrc: string = "/assets/images/Wildlife.jpg";

  imgOnline = "https://learn.zoner.com/wp-content/uploads/2018/08/landscape-photography-at-every-hour-part-ii-photographing-landscapes-in-rain-or-shine.jpg";

  isDisabled = false;

  isActive = false;

  newProduct = "Mobile Phone";

  constructor() { }

  ngOnInit(): void {

  }

  getTitle() {
    return this.title;
  }

  products = ["Pen", "Pencil", "Laptop", "Fan", "Water Bottle"];

  onAddNew() {
    this.products.push(this.newProduct);
  }

  onKeyUp() {
    console.log(this.newProduct);
  }

  parentDivClick() {
    console.log("Parent Div");
  }

  onSubmit(event) {
    event.stopPropagation();
    console.log("Submit Button Clicked");
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orders: any[] = [
    {orderId:1, productName:"Laptop", price:59990.99, quantity:50,
    orderDate:new Date("01/06/2020"), rating:3.5628},
    {orderId:2, productName:"Mobile Phone", price:25999.50, quantity:25,
    orderDate:new Date("12/02/2020"), rating:4.87},
    {orderId:3, productName:"Wireless Headphone", price:8999, quantity:15,
     orderDate:new Date("01/04/2020"),rating:4.2847},
    {orderId:4, productName:"Water Bottle", price:599.60, quantity:120,
    orderDate:new Date("04/23/2020"),rating:4.895},
  ];
}

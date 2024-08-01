import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  product1:Product={
    name:"Samsung S23+",
    price: 80000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:"Mobile Electronics",
    image:"../assets/images/samsung_s23+.jpg"
  }

  product2:Product={
    name:"TShirt",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:"Clothes",
    image:"../assets/images/tshirt.webp"
  }
  constructor() { }

  ngOnInit(): void {
  }

}

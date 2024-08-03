import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  electronicsProducts : Product[] = [
  {
    name:"Samsung S23+",
    price: 80000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:"Mobile Electronics",
    image:"../assets/images/samsung_s23+.jpg"
  },
  {
    name:"Iphone 15 Pro Max",
    price: 120000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:"Mobile Electronics",
    image:"../assets/images/iphone15.jpg"
  },
  {
    name:"Redmi 11T Pro",
    price: 40000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:"Mobile Electronics",
    image:"../assets/images/redmi_11t_pro.webp"
  },
  {
    name:"Vivo V23",
    price: 20000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:"Mobile Electronics",
    image:"../assets/images/vivo_v23.jpg"
  }
  ];

  clothesProducts : Product[] = [
    {
      name:"TShirt",
      price: 500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Clothes",
      image:"../assets/images/tshirt.webp"
    },
    {
      name:"Pants",
      price: 300,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Clothes",
      image:"../assets/images/pant.webp"
    },
    {
      name:"Belt",
      price: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Clothes",
      image:"../assets/images/belt.webp"
    },
    {
      name:"Spectacles",
      price: 500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Clothes",
      image:"../assets/images/spectacles.jpg"
    },

  ];

  category1 = "Mobile Electronics";
  category2 = "Clothes";


  // product1:Product={
  //   name:"Samsung S23+",
  //   price: 80000,
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   category:"Mobile Electronics",
  //   image:"../assets/images/samsung_s23+.jpg"
  // }

  // product2:Product={
  //   name:"TShirt",
  //   price: 500,
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   category:"Clothes",
  //   image:"../assets/images/tshirt.webp"
  // }
  constructor() { }

  ngOnInit(): void {
  }

}

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
    image:"../assets/images/samsung_s23+.jpg",
    stock:"In Stock"
  },
  {
    name:"Iphone 15 Pro Max",
    price: 120000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:"Mobile Electronics",
    image:"../assets/images/iphone15.jpg",
    stock:"Not In Stock"
  },
  {
    name:"Redmi 11T Pro",
    price: 40000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:"Mobile Electronics",
    image:"../assets/images/redmi_11t_pro.webp",
    stock:"In Stock"
  },
  {
    name:"Vivo V23",
    price: 20000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category:"Mobile Electronics",
    image:"../assets/images/vivo_v23.jpg",
    stock:"Not In Stock"
  }
  ];

  clothesProducts : Product[] = [
    {
      name:"TShirt",
      price: 500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Clothes",
      image:"../assets/images/tshirt.webp",
      stock:"In Stock"
    },
    {
      name:"Pants",
      price: 300,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Clothes",
      image:"../assets/images/pant.webp",
      stock:"In Stock"
    },
    {
      name:"Belt",
      price: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Clothes",
      image:"../assets/images/belt.webp",
      stock:"Not In Stock"
    },
    {
      name:"Spectacles",
      price: 500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Clothes",
      image:"../assets/images/spectacles.jpg",
      stock:"In Stock"
    },

  ];

  category1 = "Mobile Electronics";
  category2 = "Clothes";

  giveColorStock(stock:string){
    if(stock == "In Stock"){
      return 'white'
    }
    else{
      return 'red'
    }
  }

  giveElectronicsPriceColor(price:number){
    if(price>40000){
      return true
    }else{
      return false
    }
  }

  giveClothesPriceColor(price:number){
    if(price>400){
      return true
    }else{
      return false
    }
  }

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

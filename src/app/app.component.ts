import { Component } from '@angular/core';
import { Product } from './productlist/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
  searchProduct = "";
  // hideButton = true;

  onClickSubmit(){
    console.log("Button Clicked");
  }

  onInputChanges(event:any){
    // console.log(event.target.value); //the target means to target the input field and values shows the values of the input inside itself.
    this.searchProduct = event.target.value;
  }

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
  
    // clothesProducts : Product[] = [
    //   {
    //     name:"TShirt",
    //     price: 500,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     category:"Clothes",
    //     image:"../assets/images/tshirt.webp",
    //     stock:"In Stock"
    //   },
    //   {
    //     name:"Pants",
    //     price: 300,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     category:"Clothes",
    //     image:"../assets/images/pant.webp",
    //     stock:"In Stock"
    //   },
    //   {
    //     name:"Belt",
    //     price: 100,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     category:"Clothes",
    //     image:"../assets/images/belt.webp",
    //     stock:"Not In Stock"
    //   },
    //   {
    //     name:"Spectacles",
    //     price: 500,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     category:"Clothes",
    //     image:"../assets/images/spectacles.jpg",
    //     stock:"In Stock"
    //   },
  
    // ];
}

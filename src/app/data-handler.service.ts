import { Injectable } from '@angular/core';
import { Product } from './productlist/product';
// import { http } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  cartCount = 0;
  electronicsProducts : Product[] = [
    {
      id:1,
      name:"Samsung S23+",
      price: 80000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Mobile Electronics",
      image:"../assets/images/samsung_s23+.jpg",
      stock:"In Stock"
    },
    {
      id:2,
      name:"Iphone 15 Pro Max",
      price: 120000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Mobile Electronics",
      image:"../assets/images/iphone15.jpg",
      stock:"Not In Stock"
    },
    {
      id:3,
      name:"Redmi 11T Pro",
      price: 40000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Mobile Electronics",
      image:"../assets/images/redmi_11t_pro.webp",
      stock:"In Stock"
    },
    {
      id:4,
      name:"Vivo V23",
      price: 20000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category:"Mobile Electronics",
      image:"../assets/images/vivo_v23.jpg",
      stock:"Not In Stock"
    }
    ];

  // constructor(private http: HttpClient) { }

  // apiUrl : string = "http://127.0.0.1:8000/"

  // electronicsProducts !: Product[];

  // getElectronicsProducts(){
  //   return this.http.get(this.apiUrl).subscribe(
  //     (data: any)=>{
  //       this.electronicsProducts = data;
  //     }
  //   )
  // }

  // postElectronicsProducts(data:any){
  //   this.http.post(this.apiUrl,data).subscribe();
  //   this.getElectronicsProducts;
  // }

}

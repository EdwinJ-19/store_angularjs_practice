import { Component } from '@angular/core';
import { Product } from './productlist/product';
import { DataHandlerService } from './data-handler.service';
import { interval, Observable, of } from 'rxjs';
import { filter,map,take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
  searchProduct = "";
  // hideButton = true;

  showSpinner: boolean = true;


  ngOnInit(): void{
    // console.log(this.products);
    this.electronicsProducts = this.electronicsProducts;

    // const obs$ = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   throw "My Error"
    //   observer.complete()
    // })

    // obs$.subscribe(
    //   (val)=>{
    //     console.log(val);
    //   },
    //   (err)=>{
    //     console.error(err);
    //   },
    //   ()=>{
    //     console.log("Complete Callback")
    //   }
    // )

    // const obs$ = of(1,2,3,4,5,6);

    // const newObs$ = obs$.pipe(
    //   map(
    //     (val:number)=>{
    //       return val**2
    //     }
    //   ),
    //   filter(
    //     (val: number)=>{
    //       return val%2==0;
    //     }
    //   )
    // )

    // newObs$.subscribe(
    //   (val)=>{
    //     console.log(val);
    //   },
    //   (err)=>{
    //     console.log(err);
    //   },
    //   ()=>{
    //     console.log("complete");
        
    //   }
    // )

    const intervalObs$ = interval(3000).pipe(
      take(2)
    );
    intervalObs$.subscribe(
      (val) =>{
        console.log(val);
      },
      (err)=>{

      },
      ()=>{
        this.showSpinner = !this.showSpinner
      }
    )
  }

  onClickSubmit(){
    console.log("Button Clicked");
  }

  onInputChanges(event:any){
    // console.log(event.target.value); //the target means to target the input field and values shows the values of the input inside itself.
    this.searchProduct = event.target.value;
  }

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

    constructor(private dataService: DataHandlerService){}

    onGetData(data:any){
      this.electronicsProducts.push(data);
    }

    getData(id:any){
      this.electronicsProducts = this.electronicsProducts.filter((prod) =>{
        return prod.id !== id;
      })  
      console.log(this.electronicsProducts);
      // console.log(id);
      // this.electronicsProducts.pop();
      
    }
}

import { Component, OnInit } from '@angular/core';
import {Product} from '../productlist/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  tempValue:Product[] = [];

  productObj:Product ={
    name:"",
    price:0,
    description:"",
    category:"",
    stock:"",
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmitElectronics(){
    this.tempValue.push(this.productObj);
    this.productObj = {
      name:"",
      price:0,
      description:"",
      category:"",
      stock:"",
    } 
  }

}

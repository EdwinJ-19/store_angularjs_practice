import { Component, OnInit } from '@angular/core';
import {Product} from '../productlist/product';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() sendData = new EventEmitter();

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
    // console.log(this.sendData);
    this.sendData.emit(this.productObj)
    this.productObj = {
      name:"",
      price:0,
      description:"",
      category:"",
      stock:"",
    }
  }

}

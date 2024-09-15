import { Component, OnInit } from '@angular/core';
import {Product} from '../productlist/product';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // @Output() sendData = new EventEmitter();


  tempValue:Product[] = [];

  productObj:Product ={
    id:0,
    name:"",
    price:0,
    description:"",
    category:"",
    stock:"",
  }

  constructor(private dataService: DataHandlerService) { }

  ngOnInit(): void {

  }

  onClickSubmitElectronics(){
    // console.log(this.sendData);
    // this.sendData.emit(this.productObj)
    // this.dataService.electronicsProducts.push(this.productObj);

    const newObj = {
      name: this.productObj.name,
      price: this.productObj.price,
      description: this.productObj.description,
      category: this.productObj.category,
      stock: this.productObj.stock,
    }

    this.dataService.postElectronicsProducts(newObj);

    this.productObj = {
      id:0,
      name:"",
      price:0,
      description:"",
      category:"",
      stock:"",
    }
  }

}

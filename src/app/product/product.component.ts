import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // this indicates to show the id of the product
    this.route.params.subscribe((data)=>{
      console.log(data);
    })
   }

  ngOnInit(): void {
  }

}

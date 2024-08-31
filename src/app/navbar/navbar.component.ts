import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  storeTitle:string = "Store";
  currDate = new Date();
  cartCount = 0;
  showDropdown = false;
  
  constructor(private dataService: DataHandlerService) { 
    
  }

  ngDoCheck(){
    this.cartCount = this.dataService.cartCount;
  }

  ngOnInit(): void {
    
  }

  onClickDropdown(){
    this.showDropdown = !this.showDropdown;
  }


}

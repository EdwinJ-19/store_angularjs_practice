import { Component } from '@angular/core';

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
}

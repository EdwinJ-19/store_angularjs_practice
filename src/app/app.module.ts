import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './productlist/productlist.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { AddProductComponent } from './add-product/add-product.component';
// import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    CustomPipePipe,
    SearchFilterPipe,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

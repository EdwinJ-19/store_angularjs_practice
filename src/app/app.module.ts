import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './productlist/productlist.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { CustomDirective } from './custom.directive';
import { ShowDropdownDirective } from './show-dropdown.directive';
import { SpinnersComponent } from './spinners/spinners.component';
// import { CustomDirectivesDirective } from './custom-directives.directive';
// import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    CustomPipePipe,
    SearchFilterPipe,
    AddProductComponent,
    CustomDirective,
    ShowDropdownDirective,
    SpinnersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

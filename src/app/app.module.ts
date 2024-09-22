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
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { CustomDirectivesDirective } from './custom-directives.directive';
// import { SearchFilterPipe } from './search-filter.pipe';

const routes = [
  {path: '', component: ProductlistComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}
]

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
    AboutUsComponent,
    ProductComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

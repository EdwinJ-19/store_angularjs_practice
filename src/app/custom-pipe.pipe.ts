import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './productlist/product';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: Product[], ...args: any[]): any {
    const newArr = value.filter((prod)=>{
      return prod.stock === 'In Stock';
    })

    console.log(newArr);
    
    return newArr;
  }

}

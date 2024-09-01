import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appShowDropdown]'
})
export class ShowDropdownDirective {

  @Input() appShowDropdown !: any;

  constructor(private el: ElementRef) {
    // console.log(this.appShowDropdown)
   }

   ngOnInit(){
    this.el.nativeElement.style.display = (this.appShowDropdown === true ? 'block' : 'none');
   }

   ngDoCheck(){
    this.el.nativeElement.style.display = (this.appShowDropdown === true ? 'block' : 'none');
   }

}

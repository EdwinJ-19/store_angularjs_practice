import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class CustomDirective {

  @Input() appHeader !: string;

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'black'
  }

  @HostListener('mouseenter') onMouseEnter(){
    // console.log(this.appHeader)
    this.el.nativeElement.style.backgroundColor = this.appHeader
    this.el.nativeElement.style.color = 'white'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'white'
    this.el.nativeElement.style.color = this.appHeader
  }
}

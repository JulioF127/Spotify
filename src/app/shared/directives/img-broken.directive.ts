import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error')handleError(): void{
    const elNative = this.elHost.nativeElement
    elNative.src = '../../../assets/images/img-broken.jpg'
  }

  constructor(private elHost: ElementRef) { 
  }

}

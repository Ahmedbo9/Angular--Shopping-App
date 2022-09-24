// import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[appBasicHighlight]',
// })
// export class BasicHighlightDirective implements OnInit {
//   constructor(private elemtRef: ElementRef , private renderer :Renderer2) {}

//   ngOnInit() {
//     this.renderer.setStyle(this.elemtRef.nativeElement, 'backgroundColor', 'blue')
//   }
// }

//================================================================================
// directive avec HostListner

import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'red';
  @Input() newColor: string = 'blue';

  constructor(private elemtRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elemtRef.nativeElement,
    //   'backgroundColor',
    //   'blue'
    // );
  }

  @HostListener('mouseenter') mouseOver(/*eventData:Event*/) {
    this.renderer.setStyle(
      this.elemtRef.nativeElement,
      'backgroundColor',
      this.defaultColor // affectation dans le html avec [defaultcolor] = 'color'
    );
  }
}

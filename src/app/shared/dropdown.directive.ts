import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropdownDirective {
  //@HostBinding('class.show') isOpen: boolean = false;
  private isOpen = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('click')
  onClick() {
    const dropdown = this.elementRef.nativeElement.nextElementSibling;
    if (!this.isOpen) {
      this.renderer.addClass(dropdown, 'show');
    } else {
      this.renderer.removeClass(dropdown, 'show');
    }
    this.isOpen = !this.isOpen;
  }
}

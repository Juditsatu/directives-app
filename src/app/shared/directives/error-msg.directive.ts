import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges  {

  private _color: string = 'red';
  private _message: string = 'Required';
  public htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this.htmlElement.nativeElement.style.color = value;
    this._color = value;
  }

  // @Input() message: string = 'Required';

  @Input() set message(value: string) {
    this.htmlElement.nativeElement.innerText = value;
    this._message = value;
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const message = changes['message'].currentValue;
  }
  
  ngOnInit(): void {
    // this.setColor();
    // this.setMessage();
  }

  // setColor(): void {
  //   this.htmlElement.nativeElement.style.color = this.color;
  //   this.htmlElement.nativeElement.classList.add('form-text')
  // }

  // setMessage(): void {
  //   this.htmlElement.nativeElement.innerText = this.message;
  // }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text')

  }

}

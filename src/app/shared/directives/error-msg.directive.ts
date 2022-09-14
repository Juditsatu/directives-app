import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges  {

  private _color: string = 'red';
  private _message: string = 'Required';
  public htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  // @Input() message: string = 'Required';

  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  }

  @Input() set valid(value: boolean) {
    if (value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const message = changes['message'].currentValue;
  }
  
  ngOnInit(): void {
    this.setClass();
    this.setColor();
    this.setMessage();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text')

  }

}

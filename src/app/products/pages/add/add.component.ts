import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  text: string = 'Write your name';
  color: string = 'red';

  myForm: FormGroup = this.fb.group({
    name: [ '', Validators.required ]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  invalidForm(field: string): boolean {
    return this.myForm.get('name')?.invalid || false;
  }

  changeName() {
    this.text = Math.random().toString()
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}

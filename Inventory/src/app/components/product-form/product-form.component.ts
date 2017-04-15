import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {

    // Create a new instance of FormGroup by calling group method of FormBuilder service
    // A property of an object passed in the method group contains a value of an array will add a new instance of FormControl
    // Newly added FormControl will be used in the template like this
    // <input [formControl]="myForm.controls['sku']">

    this.myForm = fb.group({
      sku: ['sample-sku']
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('You\'ve submitted value:', value);
  }
}

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

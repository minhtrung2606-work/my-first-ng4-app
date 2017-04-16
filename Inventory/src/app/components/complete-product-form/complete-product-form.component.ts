import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'complete-product-form',
  templateUrl: './complete-product-form.component.html',
  styleUrls: ['./complete-product-form.component.css']
})
export class CompleteProductFormComponent implements OnInit {
  private myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['sku_', Validators.required],
      name: ['Unknown', Validators.required],
      departments: ['', Validators.required],
      price: [0, Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(product): void {
    console.log(product);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Product } from './../../product';

class InAppValidator {
  static buildStartWithValidator(validatorName: string, str: string): ValidatorFn {
    return function (control: AbstractControl): {[s: string]: boolean} {
      let valid = !!control;
      let result = {};
      let regEpx;

      if (control && control.value) {
        // This makes this validator only return false if input value is not an empty string and does not start with str
        regEpx = new RegExp('^' + str, 'i');
        valid = regEpx.test(control.value);
      }

      result[validatorName] = !valid;
      return result;
    };
  }
}

@Component({
  selector: 'complete-product-form',
  templateUrl: './complete-product-form.component.html',
  styleUrls: ['./complete-product-form.component.css']
})
export class CompleteProductFormComponent implements OnInit {
  private myForm: FormGroup;
  private product: Product;

  constructor(fb: FormBuilder) {
    this.product = new Product(
      'sku_',
      'Unknown',
      'assets/resources/images/products/box.png',
      ['Unkonwn'],
      0.00
    );

    this.myForm = fb.group({
      sku: [this.product.sku, Validators.compose([Validators.required, InAppValidator.buildStartWithValidator('start_with_sku', 'sku_')])],
      name: [this.product.name, Validators.required],
      departments: [this.product.departments.join(''), Validators.required],
      price: [this.product.price, Validators.required]
    });
  }

  ngOnInit() {

    this.myForm.get('sku').valueChanges.subscribe(
      (value) => {
        this.product.setSku(value);
      }
    );

    this.myForm.get('name').valueChanges.subscribe(
      (value) => {
        this.product.setName(value);
      }
    );

    this.myForm.get('departments').valueChanges.subscribe(
      (value) => {
        let departments = (value || '').split(',');
        this.product.setDepartments(departments);
      }
    );

    this.myForm.get('price').valueChanges.subscribe(
      (value) => {
        this.product.setPrice(value);
      }
    );

  }

  onSubmit(product): void {
    console.log(product);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

class InAppValidator {
  static buildStartWithValidator(str: string): ValidatorFn {
    return function (control: AbstractControl) {
      let regEpx = new RegExp('^' + str, 'i');
      let valid = regEpx.test(control.value);
      console.log(valid);
      return {
        'start_with_sku_': valid
      };
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

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['sku_', Validators.compose([Validators.required, InAppValidator.buildStartWithValidator('sku_')])],
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

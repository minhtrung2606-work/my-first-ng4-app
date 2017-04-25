import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

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

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['sku_', Validators.compose([Validators.required, InAppValidator.buildStartWithValidator('start_with_sku', 'sku_')])],
      name: ['Unknown', Validators.required],
      departments: ['Unknown', Validators.required],
      price: [0, Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(product): void {
    console.log(product);
  }

}

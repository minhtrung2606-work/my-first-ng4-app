import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  skuValue: string;

  constructor(fb: FormBuilder) {

    // Create a new instance of FormGroup by calling group method of FormBuilder service
    // A property of an object passed in the method group contains a value of an array will add a new instance of FormControl
    // Newly added FormControl will be used in the template like this
    // <input [formControl]="myForm.controls['sku']">

    // Add validator to sku FormControl of myForm
    // Validators.required is one of built-ins Validators from Angular

    // To add multiple validators we use Validators.compose method which accepts an array of validators

    this.myForm = fb.group({
      sku: ['', Validators.compose([Validators.required, invalidSkuPrefix])]
    });

    // Export sku FormControl to be used in our view
    this.sku = this.myForm.controls['sku'];

    // Try to get an EventEmitter provided by this FormControl sku
    // Then subscribe to this EventEmitter
    this.sku.valueChanges.subscribe(

      // Use arrow function to access outer scope more easily
      // If an ordinary function is passed in then we have to declare a variable referering to the component instance
      // Like in the following code listing

      // var myself = this;
      // this.sku.valueChanges.subscribe(function (value) {
      //   myself.skuValue = value;
      // });

      (value: string) => {
        this.skuValue = value;
      }
    );

    // Custom validator is kinda pure function which accepts a form control of type FormControl and
    // returns a StringMap<string, boolean> with the error name and state of it
    function invalidSkuPrefix(control: FormControl): {[s: string]: boolean} {
      if (!control.value.match(/^sku_/)) {
        // Check if a sku whether it starts with 'sku_'
        return {invalidSkuPrefix: true};
      }
    }
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('You\'ve submitted value:', value);
  }

  changeFormControlValue(): void {
    // This will never happen because this is one-way binding from view to model only
    this.sku.value = 'CHANGED';
  }
}

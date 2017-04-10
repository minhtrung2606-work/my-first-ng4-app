import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any): void {
    console.log('You\'ve submitted value:', value);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../product';

@Component({
  selector: 'product-departments',
  templateUrl: './product-departments.component.html',
  styleUrls: ['./product-departments.component.css']
})
export class ProductDepartmentsComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from './../../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'product-item';

  constructor() { }

  ngOnInit() {
  }

}

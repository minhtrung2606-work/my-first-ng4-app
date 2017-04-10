import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from './../../product';

@Component({
  selector: 'product-image',
  template: `
    <img [alt]="product.name" class="product-image" [src]="product.imageUrl">
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'product-image';

  constructor() { }

  ngOnInit() {
  }

}

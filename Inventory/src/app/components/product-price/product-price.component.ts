import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-price',
  template: `
    <div class="product-price">\${{price}}</div>
  `,
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}

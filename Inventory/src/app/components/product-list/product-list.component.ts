import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Array<Product>;
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  onAProductClicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(this.currentProduct);
  }

  isProductSelected(product: Product): boolean {
    return product && this.currentProduct && this.currentProduct.equals(product);
  }

}

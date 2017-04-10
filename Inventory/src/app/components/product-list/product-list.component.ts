import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Product } from './../../product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // An array of type Product passed in this component
  @Input() productList: Array<Product>;

  // Pass out the current product whenever a product is selected
  // Selected is done by clicked and marked selected
  @Output() onProductSelected: EventEmitter<Product>;

  @HostBinding('attr.class') cssClass = 'product-list';

  // Private property of this component to keep the current selected product
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  onProductClicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(this.currentProduct);
  }

  isProductSelected(product: Product): boolean {
    // Use equals function of the type Product to make it easy to test
    return product && this.currentProduct && this.currentProduct.equals(product);
  }

}

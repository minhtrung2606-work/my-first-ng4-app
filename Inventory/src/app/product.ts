export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public departments: Array<string>,
    public price: number) {}

  equals(product: Product): boolean {
    return product && this.sku === product.sku;
  }
}

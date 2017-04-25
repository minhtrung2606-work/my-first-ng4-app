export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public departments: Array<string>,
    public price: number) {}

  setSku(sku: string): Product {
    this.sku = sku;
    return this;
  }

  setName(name: string): Product {
    this.name = name;
    return this;
  }

  setImageUrl(imageUrl: string): Product {
    this.imageUrl = imageUrl;
    return this;
  }

  setDepartments(departments: Array<string>): Product {
    this.departments = departments;
    return this;
  }

  setPrice(price: number): Product {
    this.price = price;
    return this;
  }

  equals(product: Product): boolean {
    return product && this.sku === product.sku;
  }
}

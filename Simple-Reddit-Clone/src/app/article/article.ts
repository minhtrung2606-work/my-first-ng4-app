export class Article {
  title: string;
  url: string;
  point: number;

  constructor(title: string, url: string, point?: number) {
    this.title = title;
    this.url = url;
    this.point = point || 0;
  }

  increase(): number {
    this.point++;
    return this.point;
  }

  descrease(): number {
    this.point--;
    return this.point;
  }
}

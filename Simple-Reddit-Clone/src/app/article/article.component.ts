import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  point: number;
  title: string;
  url: string;

  constructor() {
    this.point = 0;
    this.title = 'Unknown';
    this.url = 'example.com';
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.point++;
    return false;
  }

  voteDown(): boolean {
    this.point--;
    return false;
  }

}

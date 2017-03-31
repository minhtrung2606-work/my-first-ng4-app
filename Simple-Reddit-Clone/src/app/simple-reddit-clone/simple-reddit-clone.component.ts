import { Component, OnInit } from '@angular/core';
import { Article } from './../article/article';

@Component({
  selector: 'app-simple-reddit-clone',
  templateUrl: './simple-reddit-clone.component.html',
  styleUrls: ['./simple-reddit-clone.component.css']
})
export class SimpleRedditCloneComponent implements OnInit {
  articles: Array<Article>;

  constructor() {
    this.articles = [
      new Article('Article 1', 'article1.example.com'),
      new Article('Article 2', 'article2.example.com')
    ];
  }

  ngOnInit() {
  }

  postAnArticle(title: HTMLInputElement, url: HTMLInputElement): boolean {
    console.log(`
      Title: ${title.value}, URL: ${url.value}
    `);
    return false;
  }

}

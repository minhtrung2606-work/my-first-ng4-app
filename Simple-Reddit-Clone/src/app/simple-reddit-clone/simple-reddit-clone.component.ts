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
    this.articles = [];
  }

  ngOnInit() {
  }

  postAnArticle(title: HTMLInputElement, url: HTMLInputElement): boolean {
    // Instantiate a new instance of Article data structure using HTMLInputElement instances' values
    var newArticle = new Article(title.value, url.value);

    // Store newly instantiated object to the property articles
    this.articles.push(newArticle);

    // Reset the values of HTMLInputElement instances
    title.value = '';
    url.value = '';

    // TODO-Why return fales here. I need an answer >"<
    return false;
  }

}

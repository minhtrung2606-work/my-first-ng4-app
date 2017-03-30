import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-reddit-clone',
  templateUrl: './simple-reddit-clone.component.html',
  styleUrls: ['./simple-reddit-clone.component.css']
})
export class SimpleRedditCloneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postAnArticle(title: HTMLInputElement, url: HTMLInputElement): boolean {
    console.log(`
      Title: ${title.value}, URL: ${url.value}
    `);
    return false;
  }

}

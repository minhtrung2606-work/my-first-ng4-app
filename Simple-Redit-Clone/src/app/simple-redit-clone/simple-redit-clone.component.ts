import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-redit-clone',
  templateUrl: './simple-redit-clone.component.html',
  styleUrls: ['./simple-redit-clone.component.css']
})
export class SimpleReditCloneComponent implements OnInit {

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

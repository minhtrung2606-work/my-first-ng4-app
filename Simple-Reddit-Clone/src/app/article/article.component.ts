import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // A component host is the element this component is attached to (component selector tag)
  // Anotation HostBinding is used to set property to the host element
  // Pros of using host element
  // - Don't both use app-article tag and require a class="row" in the markup of the parent element view
  //   E.g.: instead of using <div class="article-wrapper row"><app-article></app-article></div>
  //         we use <app-article class="row"></app-article>
  // - Be able to configure our host element within the component

  @HostBinding('attr.class') cssClass = 'article row';
  article: Article;

  constructor() {
    this.article = new Article('Unknown', 'example.com');
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.increase();

    // For the first time this method does not return anything. But this would cause the page reload whenever user clicks on the link
    // This is the click event is propagated to parents and our browser will try to follow an empty link and reload the page

    return false;
  }

  voteDown(): boolean {
    this.article.descrease();
    return false;
  }

}

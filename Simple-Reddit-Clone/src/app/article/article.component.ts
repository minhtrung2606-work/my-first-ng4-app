import { Component, OnInit, HostBinding, Input } from '@angular/core';
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

  // The point of making a component is not only encapsulation but also reusability
  // For the first time ArticleComponent has hard coded to have a concrete instance of Article data structure. This results in the component
  // cannot be reused for different instances of Article data structure. Then make property article become an input of the component so that
  // the instance this property holds can be populated/passed in from the outside.

  @Input() article: Article;

  constructor() {

  }

  ngOnInit() {
  }

  voteUp(): boolean {
    // For the first time right after isolating the data structure this method still accessed directly to the internal property of the data
    // structure meaning this.article.point++. However, this would break LoD (Law of Demeter) which mentions that a given object should
    // assume as little as possible about the structure or properties of anything else

    // So the Article data structure provides a method (here's increase) to hide its internal propertie from outside direct access

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

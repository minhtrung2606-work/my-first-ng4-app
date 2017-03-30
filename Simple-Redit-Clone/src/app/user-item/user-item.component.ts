import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  // Adding anotation @Input() before a property of a component make this property as an input of the component
  // Two things included:
  // - As it's an input: it can be passed in the component
  // - As it's a property: it can be used within the component's template
  @Input() name: string; // Declare a new property `name` as being of string type

  constructor() {
    this.name = 'NMT';
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  name: string; // Declare a new property `name` as being of string type

  constructor() {
    this.name = 'NMT';
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; // Declare a new property "names" which is an array of string type
  // names: Array<string>; // Another way to declare a property which is an array of string type

  constructor() {
    this.names = ['NMT', 'PHPU', 'TTNM'];
  }

  ngOnInit() {
  }

}

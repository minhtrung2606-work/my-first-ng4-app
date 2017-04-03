import { Component } from '@angular/core';

// Below is called Component Decorator which is used to configure how the outside world would use/interact your component

@Component({
  selector: 'inventory-app', // Indicate how your component is recognized when used in a template
  templateUrl: './app.component.html', // So called visual part of the component which is to declare HTML code for your component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

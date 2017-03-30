import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleRedditCloneComponent } from './simple-reddit-clone/simple-reddit-clone.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

// import: describes which dependencies this module has
// BrowserModule: as we're creating a Web application

@NgModule({
  declarations: [

    // Specify components defined in this module or what modules are owned by this module
    // As in Angular idea: You have to declare components in a NgModule before you can use them in templates within that module

    AppComponent,
    SimpleRedditCloneComponent,
    UserItemComponent,
    UserListComponent
  ],
  imports: [

    // Declare something's gonna be used in:
    // - Templates within this module
    // - With dependency injection

    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [

    // Add services to make them available for use throughout our application

  ],
  bootstrap: [AppComponent] // Declare which component is a root component to be bootstraped
})
export class AppModule { }

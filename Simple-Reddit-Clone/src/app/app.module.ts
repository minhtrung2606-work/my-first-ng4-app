// import statement defines the modules we wanna use to write our code
// There are two parts:
// - Portion (here's @angular/core): tells our program where to find the dependencies
// - Dependency: things exported from the the portion

// The main ided of importing: we're pulling out dependencies from another module (portions) and making these dependencies available for use
// in this file

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleRedditCloneComponent } from './simple-reddit-clone/simple-reddit-clone.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './article/article.component';

// import: describes which dependencies this module has
// BrowserModule: as we're creating a Web application

@NgModule({
  declarations: [

    // Specify components defined in this module or what modules are owned by this module
    // As in Angular idea: You have to declare components in a NgModule before you can use them in templates within that module

    AppComponent,
    SimpleRedditCloneComponent,
    UserItemComponent,
    UserListComponent,
    ArticleComponent
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

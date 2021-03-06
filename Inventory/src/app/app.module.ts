import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ProductDepartmentsComponent } from './components/product-departments/product-departments.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CompleteProductFormComponent } from './components/complete-product-form/complete-product-form.component';

// At first, module system (introduced by Angular) helps organize your code
// Compared to AngularJS 1.x, you have to specify which components you're gonna be using in your app

// While it's a bit more configuration at this time, but it's truly a lifesave for larger apps

// When a new component is created, it MUST be accessible in the current module to be used which says
// If ProductListComponent is required to use with product-list selector in the AppComponent template then we need to
// make sure that the AppComponent's module either:
// - is in the same module as the ProductListComponent or
// - the AppComponent module has to import the module containing ProductListComponent
// (They're in the same module in this exmaple app)

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductDepartmentsComponent,
    ProductFormComponent,
    CompleteProductFormComponent
  ],
  imports: [
    BrowserModule,

    // To use form library of Angular we need to import the two below modules which are under @angular/forms
    // FormsModule is to provide template driven directives such as
    // - ngModel (here we're mentioning about selector which is used in template)
    // - NgForm (here we're mentioning about the class of the component)
    FormsModule,

    // ReactiveFormsModule provides such the following directives:
    // - formControl
    // - ngFormGroup
    ReactiveFormsModule,

    HttpModule
  ],
  providers: [],

  // AppComponent is the top-level component which will be bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }

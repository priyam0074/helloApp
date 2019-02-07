import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { CategoryComponent } from './category/category.component';
import { FoodItemComponent } from './food-item/food-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    CategoryComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { CategoryComponent } from './category/category.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { ScrollSpyDirective } from './Directive/scroll-spy.directive';
import { BillingAddModalComponent } from './modal/billing-add-modal/billing-add-modal.component';
//import { SalesCompoentComponent } from './sales-compoent/sales-compoent.component';
import { SalesComponent } from './sales/sales.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    CategoryComponent,
    FoodItemComponent,
    ScrollSpyDirective,
    BillingAddModalComponent,
    SalesComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    
  ],
  providers: [],
  entryComponents:[BillingAddModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

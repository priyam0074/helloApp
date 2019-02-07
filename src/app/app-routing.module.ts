import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { CategoryComponent } from './category/category.component';
import { FoodItemComponent } from './food-item/food-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: BillingComponent },
  { path: 'detail', component: CategoryComponent },
  { path: 'heroes', component: FoodItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerComponent } from './customers/customer/customer.component';


const routes: Routes = [
  // { path: '', redirectTo: '/detail', pathMatch: 'full' },
  // { path: 'detail', component: CustomerListComponent },
  // { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

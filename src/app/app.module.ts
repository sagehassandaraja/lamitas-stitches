import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    HeaderComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [CustomerComponent],
  providers: [
    // {provide: MatDialogRef, useValue: {
    //   // onCloseDialog
    //   close: (_matDialogRef: any) => { }
    // }},
    // {provide: MAT_DIALOG_DATA, useValue: []}
],
  bootstrap: [AppComponent]

})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { DummyDataService } from 'src/app/shared/dummy-data.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  // column headers defination
  displayedColumns: string[] = ['fullName','location','telNo',
  'completionDate','totalAmt','totalDeposits','outstandingBill','actions'
];

searchKey:string;

  constructor(private data: DummyDataService, private _matDialog: MatDialog,
    private _customerService: CustomerService) {}

  ngOnInit() {
    // this._customerService.customerForm
    this._customerService.getAllCustomers();
  }

  clearSearch(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this._customerService.listCustomers.filter = this.searchKey.trim().toLocaleLowerCase();
  }
  // mat dialog
  onCreate(){
    const _dialogConfig = new MatDialogConfig();
    _dialogConfig.disableClose = true;
    _dialogConfig.autoFocus = true;
    _dialogConfig.width = '60%';
    this._matDialog.open(CustomerComponent, _dialogConfig)
  }

  // to edit a customer
  editCustomer(row: Customer){
    this._customerService.populateForm(row);
    this.onCreate();
  }

  // to delete a customer row
  deleteCustomer(row: Customer){
    this._customerService.deleteCustomer(row)
    .subscribe(res => {
      this._customerService.getAllCustomers()
    })
  }

}

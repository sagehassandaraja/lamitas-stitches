import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DummyDataService } from 'src/app/shared/dummy-data.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  datasource: Customer[];
// for sorting
  @ViewChild (MatSort, {static: true}) _sort: MatSort;

  // for pagination
  @ViewChild(MatPaginator, {static: true}) _paginator: MatPaginator;

  // declare listCustomers as MatTableDataSource
  listCustomers: MatTableDataSource<Customer>

  // column headers defination
  displayedColumns: string[] = ['fullName','location','telNo',
  'completionDate','totalAmt','totalDeposits','outstandingBill','actions'
];

searchKey:string;

  constructor(private data: DummyDataService, private _matDialog: MatDialog,
    private _customerService: CustomerService) {

    }

  ngOnInit() {
    // for testing only
    this.getAllCustomers();

    // initialize listCustomers
    // this.listCustomers = new  MatTableDataSource(Observable<this.getAllCustomers<>)
    this.listCustomers = new  MatTableDataSource(this.datasource)
    // this.listCustomers = new  MatTableDataSource(this.dummyData)
    console.log('customers :' + this.datasource);
    // console.log('dummyData :' + this.dummyData);

    // configure for sorting
    this.listCustomers.sort = this._sort;

    // configure for pagination
    this.listCustomers.paginator = this._paginator;

  }
  // return all customers setup in DummyDataService
  // comment below code in production
  get dummyData(){
    return this.data.customers
  }

  getAllCustomers() {
    this._customerService.getCustomers()
    // .pipe(map(res => {
    //   const customerArray = []
    //   for (const key in res) {
    //     if (res.hasOwnProperty(key)) {
    //       customerArray.push({...res[key], _id: key})
    //     }
    //   }
    //   return customerArray
    // }))
    .subscribe(res => {
      this.datasource = res
      console.log(this.datasource);
    });
  }

  clearSearch(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.listCustomers.filter = this.searchKey.trim().toLocaleLowerCase();
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
  editCustomer(row){
    this._customerService.populateForm(row);
    this.onCreate();
  }

  // to delete a customer row
  deleteCustomer(row){
    // console.log(this.dummyData.splice(row,1))
    // this.dummyData.splice(row,1);
  }

}

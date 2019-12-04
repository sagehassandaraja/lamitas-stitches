import { Component, OnInit, ViewChild } from '@angular/core';
import { DummyDataService } from 'src/app/shared/dummy-data.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
// for sorting
  @ViewChild (MatSort, {static: true}) _sort: MatSort;

  // for pagination
  @ViewChild(MatPaginator, {static: true}) _paginator: MatPaginator;

  // declare listCustomers as MatTableDataSource
  listCustomers: MatTableDataSource<any>

  // column headers defination
  displayedColumns: string[] = ['fullName','location','telNo',
  'completionDate','totalDeposits','outstandingBill','actions'
];

searchKey:string;

  constructor(private data: DummyDataService) { }

  ngOnInit() {
    // initialize listCustomers
    this.listCustomers = new  MatTableDataSource(this.dummyData)

    // configure for sorting
    this.listCustomers.sort = this._sort;

    // configure for pagination
    this.listCustomers.paginator = this._paginator;

  }
  // return all customers setup in DummyDataService
  get dummyData() {
    return this.data.customers;
  }

  clearSearch(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.listCustomers.filter = this.searchKey.trim().toLocaleLowerCase();
  }

}

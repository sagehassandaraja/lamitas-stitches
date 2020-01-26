import { Injectable, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  datasource: Customer[];
  customers: Customer[];

  // for sorting
  @ViewChild (MatSort, {static: true}) _sort: MatSort;

  // for pagination
  @ViewChild(MatPaginator, {static: true}) _paginator: MatPaginator;
  // declare listCustomers as MatTableDataSource
  listCustomers: MatTableDataSource<Customer>
  readonly baseUrl = 'http://localhost:3000/customers';
  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  customerForm: FormGroup = this.fb.group({
    _id: [''],
    name: ['', Validators.required],
    gender: ['Male', Validators.required],
    location: [''],
    telNo: ['', Validators.required],
    currentDate: ['', {disabled : true}, Validators.required],
    completionDate: ['', {disabled : true}],
    description: this.fb.group({
      designDescc: [''],
      // matPic: [''],
      matQty: ['', Validators.required],
      accesories: this.fb.array([])
    }),
    measurement: this.fb.group({
      bust: [''],
      waist: [''],
      hips: [''],
      shoulder: [''],
      topLength: [''],
      skirtLength: [''],
      sleeveLength: [''],
      fullLength: [''],
      thighs: [''],
      arndArm: ['']
    }),
    bills: this.fb.group({
      totalAmt: ['', Validators.required],
      deposits: [''],
      totalDeposits: ['', {disabled : true}, Validators.required],
      outstandingBill: ['', {disabled : true}, Validators.required]
    })
  });

  // applyFilter(){
  //   this.searchKey = "";
  //   this.listCustomers.filter = this.searchKey.trim().toLocaleLowerCase();
  // }

  populateForm(customer: Customer){
      return this.customerForm.patchValue(customer);
  }

  updateCustomer(customer: Customer){
    // return this.httpClient.put(this.baseUrl + `/${customer._id}`, customer)
    return this.httpClient.patch(this.baseUrl + `/${customer._id}`, customer)
  }

  getCustomers(){
    return this.httpClient.get<Customer[]>(this.baseUrl)
  }

  deleteCustomer(customer: Customer){
    return this.httpClient.delete(this.baseUrl + `/${customer._id}`)
  }

  saveCustomer(_customer: Customer){
    return this.httpClient.post(this.baseUrl, _customer);
  }
  getAllCustomers(){
    this.getCustomers()
    .subscribe(res => {
      this.datasource = res
      // initialize listCustomers
      this.listCustomers = new  MatTableDataSource(this.datasource)
      this.listCustomers.paginator = this._paginator;
      this.listCustomers.sort = this._sort;
    });
  }
}

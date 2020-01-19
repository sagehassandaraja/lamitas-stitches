import { Injectable} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // selectedCustomer: Customer;
  customers: Customer[];
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
      matPic: [''],
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

  populateForm(customer){
    this.customerForm.setValue(customer);
  }

  getCustomers(){
    return this.httpClient.get<Customer[]>(this.baseUrl)
  }

  saveCustomer(_customer: Customer){
    return this.httpClient.post(this.baseUrl, _customer);
  }
}

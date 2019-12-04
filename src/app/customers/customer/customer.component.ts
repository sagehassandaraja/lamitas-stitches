import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  gender = ['Male', 'Female'];

  // tslint:disable-next-line:variable-name
  constructor(private _customerService: CustomerService, private fb: FormBuilder) {}

  ngOnInit() {
    return this._customerService.customerForm;
  }
  get matAccessories() {
    // return this._customerService.customerForm.get('accesories') as FormArray;
    return this._customerService.customerForm.get('description.accesories') as FormArray;
  }
  addAccessories() {
    // tslint:disable-next-line:variable-name
    const _accesories = this.fb.group({
      itemType: [],
      itemQty: [],
      itemAmt: []
    });
    this.matAccessories.push(_accesories);
  }
  deleteAccessories(index) {
    this.matAccessories.removeAt(index);
  }
}

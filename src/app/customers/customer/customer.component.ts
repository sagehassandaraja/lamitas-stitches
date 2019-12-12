import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  gender = ['Male', 'Female'];

  // tslint:disable-next-line:variable-name
  constructor(private _customerService: CustomerService, private fb: FormBuilder,
    private _notification: NotificationService, private _matDialogRef: MatDialogRef<CustomerComponent>
    ) {}

  ngOnInit() {
    return this._customerService.customerForm;
  }
  get matAccessories() {
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
  clearForm() {
    this._customerService.customerForm.reset();
    // todo: move below line to the saveAll()
    this._notification.success('Client Measurement Saved Successfully');
    this.onClose();
  }
  saveAll(){}

  onClose(){
    // this._customerService.customerForm.reset();
    this._matDialogRef.close();
  }
}

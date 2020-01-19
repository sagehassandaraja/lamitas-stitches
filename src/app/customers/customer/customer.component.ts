import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification.service';
import { DummyDataService } from 'src/app/shared/dummy-data.service';
import { Customer } from '../../shared/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  gender = ['Male', 'Female'];
  submitedForm = this._customerService.customerForm;

  constructor(private _customerService: CustomerService, private fb: FormBuilder,private _dummyData: DummyDataService,
    private _notification: NotificationService, private _matDialogRef: MatDialogRef<CustomerComponent>
    ) {}

  ngOnInit() {
    return this._customerService.customerForm;
  }
  get matAccessories() {
    return this._customerService.customerForm.get('description.accesories') as FormArray;
  }
  addAccessories() {
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

  }
  saveAll(submitedForm: Customer){
    this._customerService.saveCustomer(submitedForm).subscribe(
      res => {
        this._notification.success('Client Measurement Saved Successfully');
        this.onClose();
    // console.log(submitedForm)
      }
    )
    // console.log(submitedForm)
  }

  onClose(){
    this._matDialogRef.close();
    this.clearForm();
  }
}

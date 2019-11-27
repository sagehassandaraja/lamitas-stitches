import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // tslint:disable-next-line:variable-name
  constructor(private fb: FormBuilder) { }

  customerForm: FormGroup = this.fb.group({
    $key: [''],
    name: ['', Validators.required],
    gender: ['', Validators.required],
    location: [''],
    telNo: ['', Validators.required],
    currentDate: ['', Validators.required],
    completionDate: [''],
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
      totalDeposits: ['', {disabled : false}, Validators.required],
      outstandingBill: ['', {disabled : true}, Validators.required]
    })
  });

  public get matAccessories() {
    return this.customerForm.get('accesories') as FormArray;
  }

  matAccessoriesControls() {
    return this.matAccessories.controls;
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
  deleteAccessories(i) {
    this.matAccessories.removeAt(i);
  }
}

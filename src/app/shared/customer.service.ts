import { Injectable} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private fb: FormBuilder) { }

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
}

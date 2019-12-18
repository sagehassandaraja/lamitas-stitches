import { Injectable} from '@angular/core';
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
    telNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
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

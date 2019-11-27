import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  gender = ['Male', 'Female'];

  // tslint:disable-next-line:variable-name
  constructor(private _customerService: CustomerService) {}

  ngOnInit() {
    return this._customerService;
  }
}

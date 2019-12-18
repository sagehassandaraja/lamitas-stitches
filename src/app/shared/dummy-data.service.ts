import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor() { }

  customers = [
    {
      "$key": 1,
       "name": "Sage Hassan",
       "gender": "Male",
       "location": "Ahodwo",
       "telNo": "0209199413",
       "currentDate": "2019-12-16",
       "completionDate": "2019-12-20",
       "description": {
          "designDescc": "Nigeria lace",
          "matPic": "some pic",
          "matQty": 2,
          "accesories": [] },
      "measurement": {
          "bust": 23,
          "waist": 45,
          "hips": 50,
          "shoulder": 47,
          "topLength": 42,
          "skirtLength": 54,
          "sleeveLength": 47,
          "fullLength": 60,
          "thighs": 15,
          "arndArm": 10 },
      "bills": {
          "totalAmt": 500,
          "deposits": 50,
          "totalDeposits": 100,
          "outstandingBill": 400 }
      },
    {
      "$key": 2,
       "name": "Amina",
       "gender": "Female",
       "location": "Suame",
       "telNo": "0505458456",
       "currentDate": "2019-11-11",
       "completionDate": "2019-12-20",
       "description": {
          "designDescc": "Nigeria lace",
          "matPic": "some pic",
          "matQty": 2,
          "accesories": [] },
      "measurement": {
          "bust": 23,
          "waist": 45,
          "hips": 50,
          "shoulder": 47,
          "topLength": 42,
          "skirtLength": 54,
          "sleeveLength": 47,
          "fullLength": 60,
          "thighs": 15,
          "arndArm": 10 },
      "bills": {
          "totalAmt": 600,
          "deposits": 50,
          "totalDeposits": 100,
          "outstandingBill": 500 }
      },
    {
      "$key": 3,
       "name": "Bob Marley",
       "gender": "Male",
       "location": "Sepe",
       "telNo": "0209199413",
       "currentDate": "2019-12-20",
       "completionDate": "2019-12-25",
       "description": {
          "designDescc": "Ghana lace",
          "matPic": "some pic",
          "matQty": 2,
          "accesories": [] },
      "measurement": {
          "bust": 23,
          "waist": 45,
          "hips": 50,
          "shoulder": 47,
          "topLength": 42,
          "skirtLength": 54,
          "sleeveLength": 47,
          "fullLength": 60,
          "thighs": 15,
          "arndArm": 10 },
      "bills": {
          "totalAmt": 500,
          "deposits": 50,
          "totalDeposits": 100,
          "outstandingBill": 400 }
      },
    {
      "$key": 4,
       "name": "Louisa",
       "gender": "Female",
       "location": "Tech",
       "telNo": "0209199413",
       "currentDate": "2019-11-20",
       "completionDate": "2019-11-25",
       "description": {
          "designDescc": "Ghana lace",
          "matPic": "some pic",
          "matQty": 2,
          "accesories": [] },
      "measurement": {
          "bust": 23,
          "waist": 45,
          "hips": 50,
          "shoulder": 47,
          "topLength": 42,
          "skirtLength": 54,
          "sleeveLength": 47,
          "fullLength": 60,
          "thighs": 15,
          "arndArm": 10 },
      "bills": {
          "totalAmt": 500,
          "deposits": 50,
          "totalDeposits": 100,
          "outstandingBill": 400 }
      },
    {
      "$key": 5,
       "name": "Marley",
       "gender": "Male",
       "location": "Accra",
       "telNo": "0209199413",
       "currentDate": "2019-12-20",
       "completionDate": "2019-12-25",
       "description": {
          "designDescc": "Ghana lace",
          "matPic": "some pic",
          "matQty": 1,
          "accesories": [] },
      "measurement": {
          "bust": 23,
          "waist": 45,
          "hips": 50,
          "shoulder": 47,
          "topLength": 42,
          "skirtLength": 54,
          "sleeveLength": 47,
          "fullLength": 60,
          "thighs": 15,
          "arndArm": 10 },
      "bills": {
          "totalAmt": 200,
          "deposits": 50,
          "totalDeposits": 100,
          "outstandingBill": 100 }
      },
    {
      "$key": 6,
       "name": "Bob",
       "gender": "Male",
       "location": "Sepe",
       "telNo": "0525485421",
       "currentDate": "2019-12-20",
       "completionDate": "2019-12-25",
       "description": {
          "designDescc": "Ghana lace",
          "matPic": "some pic",
          "matQty": 2,
          "accesories": [] },
      "measurement": {
          "bust": 23,
          "waist": 45,
          "hips": 50,
          "shoulder": 47,
          "topLength": 42,
          "skirtLength": 54,
          "sleeveLength": 47,
          "fullLength": 60,
          "thighs": 15,
          "arndArm": 10 },
      "bills": {
          "totalAmt": 700,
          "deposits": 70,
          "totalDeposits": 100,
          "outstandingBill": 600 }
      },
  ];
}

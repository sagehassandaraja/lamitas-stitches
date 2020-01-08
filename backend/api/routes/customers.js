const express = require('express'); //import express to get access to its methods
const route = express.Router(); //assigning express Router() to route
const mongoose = require('mongoose');

const Customer = require('../models/customer');

//GET request to backend/api/customers
route.get('/',(req , res, next) => {
  res.status(200).json({
    message: 'handling GET route request'
  })
})

//a single GET request to backend/api/customers
route.get('/:customerID',(req , res, next) => {
  const id = req.params.customerID
  res.status(200).json({
    Message: 'handling a single GET route request',
    ID: id
  })
})

//POST request to backend/api/customers
route.post('/',(req , res, next) => {

//creating an instance of the customer model
  const customerDetails = new Customer ({
    name: req.body.name,
      gender: req.body.gender,
      location: req.body.location,
      telNo: req.body.telNo,
      currentDate: req.body.currentDate,
      completionDate: req.body.completionDate,
      description: {
          designDescc: req.body.description.designDescc,
          matQty: req.body.description.matQty,
          accesories: [{ itemType: req.body.description.accesories[0].itemType,
                         itemQty: req.body.description.accesories[0].itemQty,
                         itemAmt: req.body.description.accesories[0].itemAmt }]
        },
      measurement: {
          bust: req.body.measurement.bust,
          waist: req.body.measurement.waist,
          hips: req.body.measurement.hips,
          shoulder: req.body.measurement.shoulder,
          topLength: req.body.measurement.topLength,
          skirtLength: req.body.measurement.skirtLength,
          sleeveLength: req.body.measurement.sleeveLength,
          fullLength: req.body.measurement.fullLength,
          thighs: req.body.measurement.thighs,
          arndArm: req.body.measurement.arndArm },
      bills: {
          totalAmt: req.body.bills.totalAmt,
          deposits: req.body.bills.deposits,
          totalDeposits: req.body.bills.totalDeposits,
          outstandingBill: req.body.bills.outstandingBill }
  });

  customerDetails.save().then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error);

  })
  res.status(201).json({
    message: 'handling POST route request',
    details: customerDetails
  })
})

//UPDATE/PATCH request to backend/api/customers
route.patch('/:customerID',(req , res, next) => {
  res.status(201).json({
    message: 'handling a single UPDATE/PATCH route request'
  })
})

//DELETE request to backend/api/customers
route.delete('/:customerID',(req , res, next) => {
  const id = req.params.customerID
  res.status(200).json({
    message: 'customer with ID: ' + id + ' has been deleted successfully'
  })
})

module.exports = route;

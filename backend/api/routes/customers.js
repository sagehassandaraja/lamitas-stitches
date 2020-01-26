const express = require('express'); //import express to get access to its methods
const route = express.Router(); //assigning express Router() to route
const bodyParser = require('body-parser');

const Customer = require('../models/customer');
const CustomerController = require('../controllers/customers');

//GET request to backend/api/customers
route.get('/',CustomerController.get_all_customers)

//a single GET request to backend/api/customers/id
route.get('/:customerID', CustomerController.get_single_customer)

//POST request to backend/api/customers
route.post('/',(req , res, next) => {

//creating an instance of the customer model
  const customer = new Customer ({
    name: req.body.name,
      gender: req.body.gender,
      location: req.body.location,
      telNo: req.body.telNo,
      currentDate: req.body.currentDate,
      completionDate: req.body.completionDate,
      description: {
          designDescc: req.body.description.designDescc,
          matQty: req.body.description.matQty,
          accesories: req.body.description.accesories
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

  customer.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'handling POST route request',
      details: result
    })
  }).catch(error => {
    console.log(err);
    res.status(500).json({
      error: err
    })

  })

})


//UPDATE/PATCH request to backend/api/customers/id
// route('/:customerID').put((req , res) => {
//   // const id = req.params.customerID
//   Customer.findByIdAndUpdate(req.params.customerID, {
//     $set: req.body
//   }, (error, data) => {
//           if (error) {
//             res.status(500).json({
//                     error: err})
//           } else {
//             res.json(data)
//             console.log('Student successfully updated!')
//           }
//         })
// })
route.patch('/:customerID',(req , res, next) => {
  const id = req.params.customerID
  // const updateObj = {}
  // for (const obj of req.body){
  //   // updateObj[obj.propName] = obj.value;
  // }
  Customer.updateOne({_id: id}, {$set: req.body})
  .exec()
  .then(updatedObj => {
    console.log(updatedObj);
    res.status(200).json(updatedObj)
  })
  .catch(error => {
    res.status(500).json({
      err: error
    })
  })
})

//DELETE request to backend/api/customers
route.delete('/:customerID',(req , res, next) => {
  const id = req.params.customerID
  Customer.deleteOne({_id: id})
  .exec()
  .then(customerToDelete => {
    console.log(customerToDelete);
    res.status(200).json(customerToDelete)
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
})

module.exports = route;

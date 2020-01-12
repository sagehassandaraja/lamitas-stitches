const Customer = require('../models/customer');

exports.get_all_customers = (req , res, next) => {
  Customer.find()
  .exec()
  .then(allCustomers => {
    console.log(allCustomers);
    if (allCustomers.length >= 0) {
      res.status(200).json(allCustomers)
    } else {
      res.status(404).json({
        Message: 'No customer found'
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })
}

exports.get_single_customer = (req , res, next) => {
  const id = req.params.customerID;
  Customer.findById(id)
  .exec()
  .then(customerById => {
    console.log(customerById);
    if (customerById) {
      res.status(200).json(customerById)
    } else {
      res.status(404).json({
        Message: 'Customer with searched ID not found'
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      Message: 'Invalid searched ID',
      error: err.value
    })

  })
}

const mongoose = require('mongoose');


const customerSchema = mongoose.Schema(
    {
      name: {type: String, require: true},
      gender: String,
      location: String,
      telNo: String,
      currentDate: { type: Date, default: Date.now },
      completionDate: Date,
      description: {
          designDescc: String,
          matQty: Number,
          accesories: Array
        },
      measurement: {
          bust: Number,
          waist: Number,
          hips: Number,
          shoulder: Number,
          topLength: Number,
          skirtLength: Number,
          sleeveLength: Number,
          fullLength: Number,
          thighs: Number,
          arndArm: Number },
      bills: {
          totalAmt: {type: Number, require: true},
          deposits: Number,
          totalDeposits: Number,
          outstandingBill: Number }
    }
  )

module.exports = mongoose.model('Customer', customerSchema)

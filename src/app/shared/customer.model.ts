// export interface Customer {
//   _id: String;
//     name: {type: String; require: true};
//     gender: String;
//     location: String;
//     telNo: String;
//     currentDate: Date;
//     completionDate: Date;
//     description: {};
//     designDescc: string;
//     matQty: Number;
//     accesories: [];
//     measurement: {
//         bust: Number;
//         waist: Number;
//         hips: Number;
//         shoulder: Number;
//         topLength: Number;
//         skirtLength: Number;
//         sleeveLength: Number;
//         fullLength: Number;
//         thighs: Number;
//         arndArm: Number };
//     bills: {
//         totalAmt: {type: Number; require: true};
//         deposits: Number;
//         totalDeposits: Number;
//         outstandingBill: Number
//        }

// }
export interface Customer {
  _id: String;
    name: {type: String; require: true};
    gender: String;
    location: String;
    telNo: String;
    currentDate: Date;
    completionDate: Date;
    description: {
        designDescc: String;
        matQty: Number;
        accesories: [];
      };
    measurement: {
        bust: Number;
        waist: Number;
        hips: Number;
        shoulder: Number;
        topLength: Number;
        skirtLength: Number;
        sleeveLength: Number;
        fullLength: Number;
        thighs: Number;
        arndArm: Number };
    bills: {
        totalAmt: {type: Number; require: true};
        deposits: Number;
        totalDeposits: Number;
        outstandingBill: Number
       }

}

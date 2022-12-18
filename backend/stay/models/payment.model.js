const mongoose = require("mongoose");

const paymentschema = mongoose.Schema({
    fname:String,
    lname:String,
    mobile:Number,
    email:String,
    card:{
        cardname:String,
        cardnumber:Number,
        expdate:Date,
        securityCode:Number,
        zipcode:Number
    },
    password:String,
    confirmpassword:String,
    roomprice:Number,
    tax:Number,
    total:Number
    
})


const PaymentModel = mongoose.model("payment",paymentschema)

module.exports = {PaymentModel}
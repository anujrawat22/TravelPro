const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:Number
})


const UserModel = mongoose.model("user",userschema)

module.exports = {UserModel}
const mongoose = require("mongoose");

const adminschema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    isadmin:{
        type:Boolean,
        default:false
    }
})


const AdminModel = mongoose.model("admin",adminschema)

module.exports = {AdminModel}
const mongoose=require('mongoose');

let userSchema=mongoose.Schema({
    email:String,
    first_name:String,
    last_name:String,
    password:String
})

let UserModel=mongoose.model('users',userSchema);

module.exports={
    UserModel
}
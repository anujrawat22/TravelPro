const express=require('express');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const {UserModel}=require('../model/user.model')
const userRouter=express.Router()

//signup
userRouter.post('/signup',async(req,res)=>{
    let {email,first_name,last_name,password}=req.body;
    let data=await UserModel.find({email});
    if(data.length==0){
        bcrypt.hash(password,5,async function(err, hash){
            if(err){
                console.log(err)
                res.send({"ERR":"Some error"})
            }
            else{
                try{
                    let data=new UserModel({email,password:hash,first_name,last_name});
                    await data.save();
                   let userDetails=await UserModel.find({email})
                   let userId=userDetails[0]._id
                   console.log(userId)
                   let token=jwt.sign({"userId":userId},'nxm');
                    res.send({"MSG":"Account has been created successfully","token":token,"userDetails":userDetails})
                }
                catch(err){
                    console.log(err);
                    res.send({"ERR":"Something went wrong"})
                }
            }
           })
    }
    else{
        res.send({"MSG":"Account has been already created"})
    }
})

//login
userRouter.post('/login',async(req,res)=>{
    let {email,password}=req.body;
    let data=await UserModel.find({email})
   if(data.length>0){
       let userId=data[0]._id
       let hash_pass=data[0].password
       bcrypt.compare(password,hash_pass,async function(err,result){
           if(err){
            console.log(err);
            res.send({"ERR":"Something went wrong"})
           }
           else if(result){
            let token=jwt.sign({"userId":userId},'nxm');
            res.send({"MSG":"Login sueccesfull","token":token,"userDetails":data})
           }else{
            res.send({"ERR":"Incorrect password"})
           }
       })  
   }
})

module.exports={
    userRouter
}
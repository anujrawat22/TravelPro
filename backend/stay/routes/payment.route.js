const express = require("express");
const {PaymentModel} = require("../models/payment.model")
const bcrypt = require("bcrypt");
const cors = require("cors");

const app1 = express()
app1.use(cors({
    origin:"*"
}))

const paymentRouter = express.Router();

paymentRouter.use(express.json())

paymentRouter.get("/" , async(req,res)=>{
    const data = await PaymentModel.find()
    res.send("done")
})

paymentRouter.post('/create',async(req,res)=>{
    const data = req.body
    const {fname,lname,mobile,email,card,password,confirmpassword,roomprice,tax,total} = req.body
    try{
        if(password==confirmpassword){
            bcrypt.hash(password, 5, async function(err, hash) {
                const user = new PaymentModel({fname,lname,mobile,email,card,password:hash,confirmpassword:hash,roomprice,tax,total})
                await user.save();
                res.send("payment successful")
            });
        }
        else{
            res.send("password not match")
        }
    }
    catch(err){
        res.send(err)
    }
})

module.exports = {paymentRouter}
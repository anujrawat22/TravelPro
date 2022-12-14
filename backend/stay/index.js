const express = require("express")
require('dotenv').config()
const app = express()
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const {connect} = require("./config/db")
const {AdminModel} = require("./models/admin.model")
const {authenticate} = require("./middleware/authentication")
const {hotelRouter} = require("./routes/hotel.route")
 

app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.post("/signup", async(req,res)=>{
    const {name,email,password,isadmin} = req.body;
    const userpresent = await AdminModel.findOne({email})

    if(userpresent?.email){
        res.send("signup with new email")
    }
    else{
        try{
            bcrypt.hash(password, 5, async function(err, hash) {
                const user = new AdminModel({name,email,password:hash,isadmin})
                await user.save();
                res.send("signup successful")
            });
        }
        catch(err){
            res.send(err)
        }
    }

})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await AdminModel.find({email});
        if(user.length > 0){
            const hash_pass = user[0].password; 
            bcrypt.compare(password, hash_pass, function(err, result) {
                //console.log(result)
                if(result){
                    const token = jwt.sign({"userid":user[0]._id}, 'shhhhh');
                    res.send({"msg":"Login successfull","token" : token})
                }
                else{
                    res.send("login failed")
                }
            });
        }
        else{
            res.send("no user")
        }
    }
    catch(err){
        res.send(err)
    }
})

app.use(authenticate);
app.use("/hotels", hotelRouter)

app.listen(process.env.PORT,async()=>{
    try{
        await connect
        console.log("hotel server")
    }
    catch(err){
        console.log(err)
    }
    
})
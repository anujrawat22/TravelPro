const express = require("express");

const {HotelModel} = require("../models/hotel.model");

const hotelRouter = express.Router();

hotelRouter.use(express.json())

hotelRouter.get("/",async(req,res)=>{
    const app = await HotelModel.find()
    res.send({"msg":"Login successfull","data" : app})
})

hotelRouter.post('/create',async(req,res)=>{
    const data = req.body
    try{
        const new_app = new HotelModel(data);
        await new_app.save();
        //console.log(new_app)
        res.send("hoteldata created")
    }
    catch(err){
        res.send(err)
    }
})

hotelRouter.patch("/update/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    const data = req.body
    try{
        const app = await HotelModel.findOne({userID:appid})
        if(appid !== app.userID){
            console.log("hi")
            res.send("not valid id")
        }
        else{
           await HotelModel.findByIdAndUpdate({_id:app._id},data);
           res.send("app updated")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

hotelRouter.delete("/delete/:appId", async(req,res)=>{
    const appid  = req.params.appId;
    const userID = req.body.userID;
    try{
        const app = await HotelModel.findOne({userID:appid})
        if(appid !== app.userID){
            res.send("not valid id")
        }
        else{
           await HotelModel.findByIdAndDelete({_id:app._id});
           res.send("app deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})

//get by city
hotelRouter.get("/search",async(req,res)=>{
    const q = req.query
    console.log(q)
    try{
        let data = await HotelModel.find({"city":{$regex: '^' + q.city, $options: 'i'}})
        console.log("done")
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
})

module.exports = {hotelRouter}

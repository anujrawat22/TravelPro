const express=require('express');
const cors=require('cors')

const {validator}=require('./middleware/validator')
const {userRouter}=require('./router/user.router')
const {connection}=require('./config/db')

const app=express();
app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.get('/',(req,res)=>{
    console.log('Welcome')
    res.send("Welcome")
})

app.post('/signup',validator,userRouter)
app.post('/login',userRouter)

app.listen(2000,async()=>{
    try{
       console.log("Connected to datbase")
    }
    catch(err){
        console.log(err)
    }
    console.log('Listening in port no 2000')
})

const validator=(req,res,next)=>{
    let payload=req.body;
    if(!payload.email||!payload.first_name||!payload.last_name||!payload.password){
       res.send({"ERR":"Please fill all details"})
    }
    else{
        next()
    }
}
module.exports={
    validator
}
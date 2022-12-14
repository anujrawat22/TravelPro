const jwt =  require("jsonwebtoken");

const authenticate_admin = (req,res,next)=>{
    const token = req.headers?.authorization?.split(' ')[1]
    if(token){
        const decoded = jwt.verify(token, 'shhhhh');
        if(decoded){
            const userID = decoded.userid;
            console.log(userID)
            req.body.userID = userID
            next()
        }
        else{
            res.send("please login")
        }
    }
    else{
        res.send("please login")
    }
}

const authenticate_user = (req,res,next)=>{
    const token = req.headers?.authorization?.split(' ')[1]
    if(token){
        const decoded = jwt.verify(token, 'shhhhh');
        if(decoded){
            const userID = decoded.userid;
            console.log(userID)
            req.body.userID = userID
            next()
        }
        else{
            res.send("please login")
        }
    }
    else{
        res.send("please login")
    }
}

module.exports = {authenticate_admin,authenticate_user}
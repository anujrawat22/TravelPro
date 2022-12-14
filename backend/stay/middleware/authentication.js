const jwt =  require("jsonwebtoken");

const authenticate = (req,res,next)=>{
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

module.exports = {authenticate}
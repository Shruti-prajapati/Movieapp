const userModel= require("../models/user");
const bcrypt= require("bcrypt");
const jwt =require('jsonwebtoken');
const SECRET_KEY="MOVIEAPP";
const signup =async(req, res)=>{
    const{username, email, password}= req.body;
}
try{
    const existingUser = await userModel.findOne({"email": email});
    console.log("foooo");
    if(existingUser){
        return res.status(400).jason({message:"User already exists"});
        const HashedPassword = await.bcrypt.hash(password,10);
        const result= await userModel.create({
            username: username,
            password: HashedPassword,
            email: email
        })
        const token= jwt.sign(result, SECRET_KEY)
        res.status(200).json({user:result, token: token});
    }
}catch(error) {
    console.log(error);
    res.status(500).json({message:"bad request"});
}

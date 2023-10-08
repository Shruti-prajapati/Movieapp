const express =require('express');
const mongodb= require('mongodb');
const app= express();
const MongoClient= require('mongodb').MongoClient;
const uri="mongodb://localhost:27016/";
MongoClient.connect(uri,function(err,client){
    if(err){
        console.log(err);
        return;
    }
    const db =client.db('moviedb');

})
app.post('/users',(req , res)=>{
    const item = new Item({
        userid: req.body.userid,
        email:req.body.email,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        username: req.body.username,
        contact: req.body.contact,
        password: req.body.password,
        role: req.body.role,
        isLoggedIn: req.body.isLoggedIn,
        uuid: req.body.uuid,
        accesstoken: req.body.accesstoken,
        coupens: req.body.coupens
    });
    item.save((err)=>{
        if(err){
            res.send(err);
            } else {
                res.send("Item saved to database");
            }
    })
})
app.get('/users', (req,res)=>{
    Item.find((err, first_name)=>{
        if(err){
            res.send(err);
        }else{
            res.send(first_name);
        }
    })
})
app.put('/genre',(req, res)=>{
    Item.findById(req.params.userid),(err,first_name)=>{
        if(err){
            res.send(err);
        } else{
            res.send(first_name);
        }
    }
})
app.listen(9001, ()=>{
    console.log("Server listening on port 9001! http://localhost:9001");
})
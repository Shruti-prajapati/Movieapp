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
app.post('/genres',(req , res)=>{
    const item = new Item({
        genreid: req.body.genreid,
        genre:req.body.genre,
    });
    item.save((err)=>{
        if(err){
            res.send(err);
            } else {
                res.send("Item saved to database");
            }
    })
})
app.get('/genres', (req ,res)=>{
    Item.find((err, genreid)=>{
        if(err){
            res.send(err);
        }else{
            res.send(genreid);
        }
    })
})
app.put('/genres',(req, res)=>{
    Item.findById(req.params.genreid),(err,genre)=>{
        if(err){
            res.send(err);
        } else{
            res.send(genre);
        }
    }
})
app.listen(9001, ()=>{
    console.log("Server listening on port 9001! http://localhost:9001");
})
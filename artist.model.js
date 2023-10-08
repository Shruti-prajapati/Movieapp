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
app.post('/artists',(req , res)=>{
    const item = new Item({
        artistid: req.body.artistid,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        wiki_url:req.body.wiki_url
    });
    item.save((err)=>{
        if(err){
            res.send(err);
            } else {
                res.send("Item saved to database");
            }
    })
})
app.get('/artists', (req,res)=>{
    Item.find((err, artis)=>{
        if(err){
            res.send(err);
        }else{
            res.send(artist);
        }
    })
})
app.put('/artists',(req, res)=>{
    Item.findById(req.params.aristid),(err,artist)=>{
        if(err){
            res.send(err);
        } else{
            res.send(artist);
        }
    }
})
app.listen(9001, ()=>{
    console.log("Server listening on port 9001! http://localhost:9001");
})
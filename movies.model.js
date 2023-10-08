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
app.post('/movies',(req , res)=>{
    const item = new Item({
        movieid: req.body.movieid,
        first_name:req.body.title,
        poster_url:req.body.poster_url,
        shows:req.body.shows
    });
    item.save((err)=>{
        if(err){
            res.send(err);
            } else {
                res.send("Item saved to database");
            }
    })
})
app.get('/movies', (req,res)=>{
    Item.find((err, title)=>{
        if(err){
            res.send(err);
        }else{
            res.send(title);
        }
    })
})
app.put('/movies',(req, res)=>{
    Item.findById(req.params.movieid),(err,title)=>{
        if(err){
            res.send(err);
        } else{
            res.send(title);
        }
    }
})
app.listen(9001, ()=>{
    console.log("Server listening on port 9001! http://localhost:9001");
})
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
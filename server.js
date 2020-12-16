
 //import express from 'express';
// import mongoose from 'mongoose';
const cors = require('cors');
const data = require('./data.js'); //static data
const dbData = require('./dbschema.js'); //database data
const express  = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

const port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors());
app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next()
})

const conn_url  = process.env.DBCONN;
mongoose.connect(conn_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})



app.get('/', (req, res) => {
    temp = dbData.find((err,data) =>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.post('/create/post',(req , res) => {
    const insertData = req.body; //data coming from client side (req.body)
    dbData.create(insertData,(err,data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
    console.log("abcd");
});

app.listen(port,() => console.log(`listining on ${port}`));
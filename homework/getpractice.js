
const express = require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/',(req,res) =>{res.sendFile(`${__dirname}/test.html`)});

app.post('/form',(req,res) =>{res.send(req.body)});










const location = process.env.PORT || 5000;
app.listen(location ,function()
    {
         console.log(`server is running at ${location}`)});
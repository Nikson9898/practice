const express=require('express');
const app=express();

app.get('/',(req,res)=>{
res.send('welcome to covai');

});

app.listen(9080);
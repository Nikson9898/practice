var express=require('express');
var app=express();

app.get('/',(req,res)=>{
    res.send('welcome');
});

app.get('/:id',(req,res)=>{
    res.send('user'+ req.params.id);
});

app.listen(9000)
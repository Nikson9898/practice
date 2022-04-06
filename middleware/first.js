var express=reqiure('express');
var app=express();

app.get('/',(req,res){
    console.log('homepage');
    res.send("welcome this is middleware");
});

app.get('/users',(req,res){
    console.log('userspage');
    res.send("this is contact page");
});

function logger(req,res,next){
    console.log('log');
    next()
}
 
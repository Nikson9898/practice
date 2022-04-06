var express=require("express");
var app= express();

app.get('/', function(req,res){
    res.sendFile(__dirname + "/" +"form.html");
});
app.get('/home',function(req,res){
    res.get('<h1>welcome' + req.query['username'])
});
app.listen(8080);


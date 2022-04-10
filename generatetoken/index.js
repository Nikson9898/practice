var express = require('express');
 var jwt= require('jsonwebtoken');
const app = express();

 
    app.get('/jpr',function(req,res){ 
        res.json({
            text: 'jpr student'
        });
    });
    
    app.post('/jpr/beast', function(req,res){

        const user = [{name:"naveen"},{profession:"musicdirector"}];
        const token = jwt.sign({user}, 'my_secret_key');
        res.json({
            token: token
        });
    
    });   
 
 
  

app.get('/jpr/music', ensureToken,function(req,res){
    jwt.verify(req.token,'my_secret_key', function(err,data){
if(err){
    res.sendStatus(403);
}else{
   
  res.json({
      text: 'this is protected',
      data: data
  });
}
    })
});



  function ensureToken(req,res,next){
    const bearerHeader = req.headers["authorization"];
if(typeof bearerHeader !== 'undefined') {
  const bearer =bearerHeader.split(" ");
  const bearerToken = bearer[1];
  req.token = bearerToken;
  next();
    }
    else{
        res.sendStatus(403);
    }
}  

app.listen(3000,function (){
    console.log('app is listening in 3000')
});   


 
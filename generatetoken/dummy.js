var express=require('express');
const jwt=require('jsonwebtoken');
const abc=express();
 
app.get('/api',function(req,res){
    req.json({
        text:'hiiiwelcome'
    });
});
 

 
app.get('/api/jpr',function(req,res){
const user =[{name:'praveen'},{std:10}]
const token= jwt.sign({user},'my_secret_key');    
res.json({
    token:token
});

})

 app.post('/api/proteccted',ensureToken,function(req,res){
jwt.verify(req.token,'my_secret_key',function(err,data){

if(err){
    res.Status(403);

}
else{
    res.json({
text='this is protected',
data= data
}
 })

app.get('/api/protected', ensureToken,function(req,res){
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

  const express=require('express');
  const jwt=require('jsonwebtoken');
  const app=express();


  app.get('/api',function(req,res){
res.json(
    {
        display:'you details';
    }
)

  })

  app.post=('/api/proteccted',ensureToken,functiom(req,res){
jwt.verify(req.token,'my_secret_key',function(err,data){
    if(err){
        sendStatus(403);
    }
    else
    {
        send.json({
            text:'abcd',
            data:'data'
        })
    }
})
  } 

  function (req,res,next){
    const bearerHeader
  }
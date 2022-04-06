const express=require('express');
const app=express();

app.posts('/',(req,re)=>{
  res.send('welcome to kovai')
})
app.listen(7080);
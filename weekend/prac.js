 const express= require('express');
 const app =express();
app.use(express.urlencoded({extende:false}));
app.use(json());
const mongo=require(mongoose)
 mongo.connect=('mongodb://localhost/sparkout')



 app.get('/',async(req,res=>{
     const answer=req.body
     const finalanswer=User.create(answer)
     .then(result=>{
      console.log(result)
      res.send(result)
                         
     })
   .catch(error=>{
       res.send(error.message)
   })
 });  


 const express=require('express');
 const 
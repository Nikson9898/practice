const express=require('express');
const res = require('express/lib/response');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const mongo=require('mongoose');
mongo.connect("mongodb://localhost/sparkout")
const User=require('./schema');
 
 
app.post('/',async(req,res)=>{
     const answer=req.body;
     const response=await User.create(answer)
    .then(result=>{console.log(result)
res.send(result)
   }) 

.catch(error=>{
    res.send(error.message)
})

});



app.get('/come',async(req,res)=>{
     const response=await User.find()
   .then(result=>{console.log(result)
   res.send(result)
  })

.catch(error=>{
   res.send(error.message)
})

});

   
app.patch('/:id',async(req,res)=>{
   await User.updateOne(req.params.id)
  .then(result=>{console.log(result)
  res.send(result)
 })
                
.catch(error=>{
  res.send(error.message)
})

});


app.listen(4000);

   
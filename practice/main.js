const express=require('express');
const app=express();
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

app.get('/',(req,res)=>{
res.send(req.query);
});

app.post('/home',(req,res)=>{
    res.send(req.body);
    });
    
    app.post('/contactus',(req,res)=>{
        res.send(req.body);
        });
    
app.listen(9000);
var express =require("express");
    var bodyparser=require("body-parser");
    var mongoose = require("mongoose");

    const app= express();

    app.use(bodyparser.json());
    app.use(express.static('public'));
    app.use(bodyparser.urlencoded({extended:true}));


    mongoose.connect("mongodb://127.0.0.1:27017/dbtest",{
        useNewUrlParser:true ,
        useUnifiedTopology:true
    });
    var db = mongoose.connection;

    db.on('error',()=>console.log("error in connecting database"));
    db.once('open',()=>console.log("connceted to database"));

    app.post("/signup",(req,res)=>{
    var name =req.body.name;
    var email=req.body.email;
    var data ={

        "name" : name,
        "email": email,
    };
     db.collection('users').insertOne(data,(err,collection)=>{
     if(err){

        throw err;

    }
    console.log("successfully Registered");


     });
 return res.sendFile(__dirname+"/"+'success.html');
});

app.post("/login",async(req,res)=>{

    try{

     const email = req.body.email;
     const password = req.body.psw;
     const useremail = await users.findOne({email:email});

     if(useremail.password == psw){
         res.status(201).sendFile(__dirname+"/"+"reg.html");
     }else{
         res.send("password not matching");
     }


    }catch(error){
        res.status(400).send("invalid password");
    }
res.status("success");

});

   app.get("/login",(req,res)=>{
       res.sendFile(__dirname+"/"+"reglogin.html");  
   });



    app.get("/",(req,res)=>{

     res.set({
         "Allow-access-Allow-Origin":'*'});
    return res.sendFile(__dirname+"/"+"reg.html");  //__dirname+"/"+
    

    }).listen(8000);

    console.log("listening  on port 8000");

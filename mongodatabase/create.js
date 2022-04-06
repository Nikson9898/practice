var MongoClient = require('mongodb').MongoClient;
var url ="mongodb"//locslhost:2703   /";

MongoClient.connect(url,{useUnifiedTopology: true},function(err,db){
if (err) throw err;
var dbname = db.db("demodb");
dbname.createCollection("students", function(err,result){
    if (err) throw err;
    console.log("Collection created successfully");
    db.close();
})

}); 
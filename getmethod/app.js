var express= require('require');
var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname +"/" +"index.html");
});
app.listen(7450);






 


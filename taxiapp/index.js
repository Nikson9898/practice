let express=require('express');
const app=express();
const router= require('./routes/userss')
 app.use('/main',router)

app.listen(3000,()=>{
    console.log(('server is running'));
});
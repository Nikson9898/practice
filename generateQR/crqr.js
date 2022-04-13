const QRCode= require('qrcode');

const generateqr= async text=>{
try{
    console.log(QRCode.toString (text, {type:string})) 
}
     catch
     {
         console.log(err);
}

}
generteQR('welcome');



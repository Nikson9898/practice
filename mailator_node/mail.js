var nodemailator = require('nodemailer');

var transporter = nodemailer.createTransport({
service: 'gmail',
auth:{
user: 'enteryourmailid@gmail.com',
pass: 'password'
}
});

var mailOptions ={

    from :'sender@gmail.com',
    to: 'reciever@gmail.com',
    subject:'sending Email using Nodejs',
    text: 'welcome to kovai'

};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);

    }

    else{
        console.log('Email sent' + info.response);
    }
});
 const crypto =require('crypto');
 const secret = 'abcdefg';
 const hash = crypto.createHmac('sha256',secret,11)
                     .update('welcome to Techweber')
                     .digest('hex');
console.log(hash);

const algorithm="ut-8";
const password='this is password'
const key=crypto.sync("password, secretkey,24")
const cipher= crypto.createcipher('algorithm,key')

crypto.write"military";
crypto.end();


const algorithnm= 'ut-8';
const password ="this is password"
const key=('password,secret,key');
const cipher=crypto.createcipher('algorithm,key')


const express=require('express');
const app= expresS();
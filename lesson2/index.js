const fs = require('fs');
const path = require('path')


 fs.readFile('E:/vsCode/WebTechnology/nodejs/views/aMahmud.txt', 'utf-8', (err, data)=>{
     
    if(err){
         console.log(err);
     }
     else
     {
         console.log(data);
     }
 });
 

 
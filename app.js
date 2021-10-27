const fs = require('fs');
// console.log(fs);
fs.mkdirSync('dogs'); 
fs.mkdir('cars',{ recursive: true},err =>{
    console.log('inside of callback');
    if (err){
        throw err;
    }
    
})
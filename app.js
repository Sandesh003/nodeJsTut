const fs = require('fs');
// console.log(fs);
 
fs.mkdir('cars',{ recursive: true},err =>{
    console.log('inside of callback');
    if (err){
        throw err;
    }
    
})
fs.mkdirSync('dogs');

  
/* 
       Read and Write File Utility
       Commonjs Modules
       exports.funcName = ()=>{}
       import
       require('module name)
    
*/

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
let userID = uuidv4();

exports.getFileContents = (filePath)=>{
   let fileContents = JSON.parse(fs.readFileSync(path.join(__dirname, filePath)));
   return fileContents;
     
}

exports.writeFileContents = (filePath, data) =>{
    let fileContents = getFileContents(filePath);
    fileContents.push(data);
    fileContents = JSON.stringify(fileContents);
    fs.writeFileSync(path.join(__dirname, filePath), fileContents);
}



// writeFileContents('../data/users.json', {id: userID, username:"jane", email:"jane@work.com", password: "4321" });
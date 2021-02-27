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


// exports.getFileContents = (filePath) => {
//     const contentFilePath = fs.readFileSync(path.join(__dirname, filePath));
//     return fileContents;
// }


exports.getFileContents = (filePath)=>{
   let fileContents = JSON.parse(fs.readFileSync(path.join(__dirname, filePath)));
   //console.log(fileContents.username);
     
}
                   
    // {"id": "1aae33ef-a55b-4874-9e06-398d7b881ec2", "username": "jane", "email": "jane@work.com", "password": "123"}
           

getFileContents('../data/users.json');
let userID = uuidv4();

exports.writeFileContents = (filePath, data) =>{

    let fileContents = fs.readFileSync(path.join(__dirname, filePath));
    fileContents = JSON.parse(fileContents);
    //fileContents = JSON.stringify(fileContents);
    fileContents.push(data);
    fileContents = JSON.stringify(fileContents);
    fs.writeFileSync(path.join(__dirname, filePath), fileContents);
}
//writeFileContents('../data/users.json', {id: userID, username:"john", email:"john@work.com", password: "321" });
 

// [
//     {"id": "1aae33ef-a55b-4874-9e06-398d7b881ec2", "username": "jane", "email": "jane@work.com", "password": "123"}
// ]
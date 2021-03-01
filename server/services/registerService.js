// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// var urlencodedParser = bodyParser.urlencoded({extended: false});

// app.post('/register', urlencodedParser, function(req, res) {
//     console.log(req.body);
//     res.render('register', {qs: req.query});
// });

const fileService = require('./fileService')
const { v4: uuidv4 } = require('uuid');
let userID = uuidv4();

exports.register = (registerInfo)=>{
 
    const {username, email} = {...registerInfo}
    const users = fileService.getFileContents('../data/users.json');
    // flush the authentication
    
  const authUser =  users.reduce((authObj, user)=>{

    if(user.username === username){
        authObj.validUsername = true;
      }else{
         // errorObj
      }
      
     if(user.email === email){
       authObj.validEmail = true;
     }else{
        // errorObj
     }
 
 
     if(authObj.validUsername===true && authObj.validEmail===true){
         authObj.user = user;
     }
          
     return authObj
 
    }, {validEmail:false, validPassword:false, user:null});
 
     // ternary opertoar   ()?true:false
     // if() else
     // truthy falsy
    const auth0 = authUser.user ? {user:authUser.user}: formatErrors(authUser);


    return auth0
 }
 
const formatErrors = function(user){
  let usernameWarning = "";
  let emailWarning = "";

  if(user.validUsername === false){usernameWarning= `username already exists`}
  if(user.validEmail === false){ emailWarning= `email already exists`}

  return {user:null, usernameWarning, emailWarning}
}



// //function for adding warnings if the inputs are empty
// const registerErrors = function(user) {
//     usernameWarning = "";
//     emailWarning = "";
//     passwordWarning = "";

//     if(user.availableUsername === false){
//         usernameWarning = `username is taken`;
//     }
//     if(user.availableEmail === false){
//         emailWarning = `email is taken`;
//     }
  
//     return {user:null, usernameWarning, emailWarning}
// }
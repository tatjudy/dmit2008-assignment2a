// require dotenv package to read the properties in the .env file.
require('dotenv').config();
//import express module
const express = require('express');
// import the path utils from Node.
const path = require('path');
const cors = require('cors');
const cookSession = require('cookie-session');

// Importing our Login Service Used With the POST Login Route
const loginService = require('./services/loginService');
const registerService = require('./services/registerService');
const fileService = require('./services/fileService');
const { v4: uuidv4 } = require('uuid');
let userID = uuidv4();

// create an instance of express
const app = express();
 
// read the value of PORT NODE_EVN variable in the .env file
// when the index.js file starts up this file is read in and
// we can set configuration variables for the application.
// never upload to git...
const PORT =  process.env.PORT || 5000 ;
 
// Middleware For Cross Origin Resource SHaring
app.use(cors());

//To get access to the name value pairs send in the message Body of POST Request.
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());

 //create the REST API for the bonus feature, users.html
 app.get('/api/v1/users', (req, res) => {
  const readUsersFile = fileService.getFileContents('../data/users.json');
  res.json(readUsersFile);
});

 // Session Middleware
 app.use(cookSession({
   name:"session",
   keys:['SDFLU9iw2308dlsfuwe2adfl', 'LDFA34gsdfgFOPW2323DA7FS2']
 }));

 // Setup Template Engine
 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, './views'));
 

//Middleware Serving Static Pages from client directory
 
app.use(express.static(path.join(__dirname, "../client"), {extensions: ["html", 'htm']}));


 // Protected Route
 app.get('/dashboard', (req, res)=>{
          if(req.session.isValid){
            res.render('dashboard');
          }else{
           res.redirect('/login');
          }
 });

 app.get('/login', (req, res)=>{
   // user template placed inside the views directory
   // res.render(view, data)   ejs.render(template, {data})
   res.render('login', {passwordWarning:"", emailWarning:"", email:"", password:""})

 });

 app.post('/login', (req, res)=>{
   // if your incomming name value pairs are alot then create an object
    const credentials = {
      email:req.body.email,
      password:req.body.password
    };
    // isValidUser returns {user:null, emailWarning, passwordWarning}
    // isValudUser.user !=null...
    const isValidUser =  loginService.authenticate(credentials);
   
       //if the isValidUser has a user returned
       if( isValidUser.user !== null){
             // set a session value isValid
             if(!req.session.isValid){
                 req.session.isValid = true;
             }
             res.redirect('/dashboard');
       }

       if(isValidUser.user === null){
           // req.body.email, req.body.password
           res.render('login', {
             emailWarning:isValidUser.emailWarning, 
             passwordWarning:isValidUser.passwordWarning,
             email:req.body.email,
             password:req.body.password
            });
       }
  });
    
 
 app.post('/login', (req, res)=>{
   // POST name value pairs in body request
   const credentials = {
     email:req.body.email,
     password:req.body.password
    }; 
    
    
    const isValidUser = loginService.authenticate(credentials);
   
    res.end();
 
 });



app.get('/register', (req, res) => {
  res.render('register', {
    usernameWarning: "",
    emailWarning: ""
  });
 });

 app.post('/register', (req, res)=>{
  // get the info, store into an object
  //  to access:
  //  username: use registerInfo.username,
  //  email: use registerInfo.email
  //  password: user registerInfo.password
   const registerInfo = {
     username:req.body.username,
     email:req.body.email,
     password: req.body.password
   };

   const { v4: uuidv4 } = require('uuid');
    let userID = uuidv4();

   const getFile = fileService.getFileContents('../data/users.json');


   // isValidUser returns {user:null, emailWarning, passwordWarning}
   // isValudUser.user !=null...
   const isValidUser =  registerService.register(registerInfo);
  
      //check if the user exists, if not, register them, write their inputs to users.json file
      if( isValidUser.user === null){
        const writeToFile = fileService.writeFileContents('../data/users.json', {id: userID, username: registerInfo.username, email: registerInfo.email, password: registerInfo.password});
        //after writing, redirect to login page
        res.redirect('/login');
      }

      if(isValidUser.user !== null){
        // req.body.email, req.body.password
        res.render('register', {
          usernameWarning:isValidUser.usernameWarning, 
          emailWarning:isValidUser.emailWarning,
          username: req.body.username,
          email:req.body.email
          });
      }
 });
   

app.post('/register', (req, res)=>{
  // POST name value pairs in body request
  const registerInfo = {
    username: req.body.username,
    email:req.body.email,
    password: req.body.password
   };
   
   
   const isValidUser = registerService.register(registerInfo);
  
   res.end();

});


 

// Final Middleware 
// Catch all for any request not handled while express was
// processing requests. 
// Returns 404 Page from the client directory.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/404.html"));
});



// Tell express app to listen for incomming request on a specific PORT
app.listen(PORT, () => {
  console.log(`The server has started on http://localhost:5000`);
});

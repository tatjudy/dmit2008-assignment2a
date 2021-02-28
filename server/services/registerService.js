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

exports.register = (registerInfo) => {
    const {username, email, password} = {...registerInfo};
}

exports.registerErrors = (registerInfo) => {
    let usernameWarning = `Please enter a username`;
    let emailWarning = `Please enter an email`;
    let passwordWarning = `Please enter a password`;
}
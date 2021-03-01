//create variables for writing to the DOM

let usersDisplay,
user,
id,
username,
email,
password;

let userHeading,
idHeading,
usernameHeading,
emailHeading,
passwordHeading;
let theId,
theUsername,
theEmail,
thePassword;
let userHeadingText,
idHeadingText,
usernameHeadingText,
emailHeadingText,
passwordHeadingText;
let theIdText,
theUsernameText,
theEmailText,
thePasswordText;

let body = document.querySelector('body');
//fetch the data from server
function usersModel(url) {
    //get the data
    console.log('hi');
      fetch(url)
        .then(res => {
            return res.json()
        })
        .then((data) => {
            // let theData = JSON.parse(data);
            // console.log(theData);
            for (var i = 0; i < data.length; i++) {
                createUserView(data[i]);
                //console.log(data[i].id)
            }
            return data;
        })  
}

usersModel('/api/v1/users');
//create the user view in the DOM
function createUserView (theData) {
    usersDisplay = document.createElement('div');
    user = document.createElement('div');
    id = document.createElement('div');
    username = document.createElement('div');
    email = document.createElement('div');
    password = document.createElement('div');

    userHeading = document.createElement('h3');
    idHeading = document.createElement('h2');
    usernameHeading = document.createElement('h2');
    emailHeading = document.createElement('h2');
    passwordHeading = document.createElement('h2');

    theID = document.createElement('p');
    theUsername = document.createElement('p');
    theEmail = document.createElement('p');
    thePassword = document.createElement('p');

    userHeadingText = document.createTextNode(theData.username);
    idHeadingText = document.createTextNode('ID');
    usernameHeadingText = document.createTextNode('Username');
    emailHeadingText = document.createTextNode('Email');
    passwordHeadingText = document.createTextNode('Password');

    theIdText = document.createTextNode(theData.id);
    theUsernameText = document.createTextNode(theData.username);
    theEmailText = document.createTextNode(theData.email);
    thePasswordText = document.createTextNode(theData.password);
    console.log(theData.id);

    usersDisplay.classList.add('users-display');
    user.classList.add('user');
    id.classList.add('id');
    username.classList.add('username');
    email.classList.add('email');
    password.classList.add('password');
    idHeading.classList.add('id-heading');
    usernameHeading.classList.add('username-heading');
    emailHeading.classList.add('email-heading');
    passwordHeading.classList.add('password-heading');
    //theId.classList.add('the-id');
    theUsername.classList.add('the-username');
    theEmail.classList.add('the-email');
    thePassword.classList.add('the-password');

    body.appendChild(usersDisplay);
    usersDisplay.appendChild(user);
    user.appendChild(userHeading);
    user.appendChild(id);
    user.appendChild(username);
    user.appendChild(email);
    user.appendChild(password);

    id.appendChild(idHeading);
    id.appendChild(theID);
    username.appendChild(usernameHeading);
    username.appendChild(theUsername);
    email.appendChild(emailHeading);
    email.appendChild(theEmail);
    password.appendChild(passwordHeading);
    password.appendChild(thePassword);

    userHeading.appendChild(userHeadingText);
    idHeading.appendChild(idHeadingText);
    theID.appendChild(theIdText);
    usernameHeading.appendChild(usernameHeadingText);
    theUsername.appendChild(theUsernameText);
    emailHeading.appendChild(emailHeadingText);
    theEmail.appendChild(theEmailText);
    passwordHeading.appendChild(passwordHeadingText);
    thePassword.appendChild(thePasswordText);

}
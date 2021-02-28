//validate client side username/pass before submitting
let form = document.querySelector('#register');
let usernameWarning = document.querySelector('.username-warning');
let emailWarning = document.querySelector('.email-warning')
let passWarning = document.querySelector('.password-warning')

//check if there is an input for email/password
//don't redirect to server-side authentication if inputs are empty
form.addEventListener('submit', (event)=> {
    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    if (username.value === '') {
        usernameWarning.innerText = 'Please enter a username';
        event.preventDefault();
    }

    if(email.value === '') {
        emailWarning.innerText = 'Please enter a email';
        event.preventDefault();
    }
    if(password.value === '') {
        passWarning.innerText = 'Please enter a password';
        event.preventDefault();
    }
    
});

//reset warnings if there is something in inputs
form.addEventListener('input', ()=> {
    let usernameWarning = document.querySelector('.username-warning');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    if(username.value !== '') {
        usernameWarning.innerText = '';
    }

    if(email.value !== '') {
        emailWarning.innerText = '';
    }
    if(password.value !== '') {
        passWarning.innerText = '';
    }
});
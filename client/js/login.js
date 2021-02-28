//validate client side username/pass before submitting
let form = document.querySelector('#login');
let emailWarning = document.querySelector('.email-warning')
let passWarning = document.querySelector('.password-warning')

//check if there is an input for email/password
//don't redirect to server-side authentication if inputs are empty
form.addEventListener('submit', (event)=> {
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    if(email.value === '') {
        emailWarning.innerText = 'Please enter your email';
        event.preventDefault();
    }
    if(password.value === '') {
        passWarning.innerText = 'Please enter your password';
        event.preventDefault();
    }
    
});

//reset warnings if there is something in inputs
form.addEventListener('input', ()=> {
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    if(email.value !== '') {
        emailWarning.innerText = '';
    }
    if(password.value !== '') {
        passWarning.innerText = '';
    }
});
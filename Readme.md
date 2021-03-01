# dmit2008-assignment2a
A client application that is deployed through Heroku. It will have a dashboard, a login form and a registration form.

The dashboard is only accessible to logged in users.
The login and register pages both have client side validation/authentication.
The login page has server side validation/authentication.

The users page is a bonus feature which retrieves the JSON data from the server and displays it. To do this, in the index.js we create a REST API with NODE using the url /api/v1/users


Link to Heroku App:

The Procfile specifies the commands that are executed by the app on startup.

The gitignore file makes sure that nodemodules are not uploaded to git. Please see here what to install.

What to install (using terminal):
1. Install Node Modules
    a. npm init
    b. npm install -D parcel-bundler
    c. npm install

2. Install express.js middleware for validator
    a. npm install express-validator

3. Install express-session, creates a session middleware
    a. npm install express-session

4. Install uuid, creates unique id for each user
    a. npm install uuid

5. Install cors
    a. npm install cors


Note: the server side authentication works for the login, but not the register. For the register page, the goal is to check if there is already a user with the submitted form information. If there is, errors will show up on the ejs view. If not, it will redirect to the login page.
My attempts were to take the login service authentication and implement it in the register, but reverse the logic with true/false.
It worked, but errors are not displayed. 
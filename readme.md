# Weather Application

This is a weather application involving HTML, JavaScript, Web API with a PHP backend and dependencies.

## Prerequisites

- Virtual Box (https://www.virtualbox.org/wiki/Downloads)
- Public vagrant file (https://www.vagrantup.com/docs/installation/)
- PHP  (5.4 or Newer) (php.net/downloads.php)
- Git (x.x or Newer) (https://git-scm.com/downloads)
- Heroku CLI (https://id.heroku.com/login)
- Composer (https://getcomposer.org/download/)
## Project Architecture

This project consists of an HTML form with one input field that connects to JavaScript code which makes an AJAX call to a PHP server where an API call is processed and retrieved to present weather data to the user.  The user inputs a Zip Postal code to retrieve weather data for
that specific location.

### Getting Started: Frontend
1. Open the command terminal on your machine to get into the file you would like to clone the repository to.
2. Clone Repoistory `git clone https://github.com/tyleretruitt/Weatherapp-frontend`
3. Use a Development environment of your choice. A good example would be to utilize Scotch Box (https://box.scotch.io/) along with a public vagrant machine, and VirtualBox is a good example (https://www.virtualbox.org/wiki/Downloads).
4. You shall then be able to run your HTML and JavaScript in your Development environment.

### Getting Started: Backend
1. Open the command terminal on your machine to get into the file you would like to clone the repository to.
2. Clone Repository `git clone https://github.com/tyleretruitt/Weatherapp-backend`
3. Make sure that prerequisites are installed on your machine including the Heroku CLI and Composer.
4. Use a Development environment of your choice. A good example would be to utilize Scotch Box (https://box.scotch.io/) along with a public vagrant machine, and VirtualBox is a good example (https://www.virtualbox.org/wiki/Downloads).
5. Follow the proper prompts to get Scotch Box and your public vagrant machine.  Upon installation, a the HTML and JavaScript code should be able to run the PHP code which I have stored on a Heroku Server (http://arctic-leaf-15909.herokuapp.com/forecast/).  
6. If you would like to run the PHP code locally, you would need to push is to a local host then change the URL where the PHP code is stored in the app.js file.  For example (http://localhost:8080/forecast/) instead of (http://arctic-leaf-15909.herokuapp.com/forecast/).  This can be easilly done in your command terminal in your machine. Once inside your project folder in your command terminal type in (php -S localhost:8080) with PHP version 5.4 or later installed on your machine.  The php code is now being ran locally on your device upon completing these steps.

## Deployment: backend
This can be easily done in your computer's command prompt, but in order to do so please make sure Heroku is installed.(https://id.heroku.com/login)
1. Create the heroku server `heroku create`
2. Verify the remote in your git configuration `git remote -v`
3. Add your remote connection to heroku via git `heroku git:remote -a [given name]` (you are given a randomized url to deploy live PHP code.)
4. Deploy PHP and Dependencies to heroku server `git push heroku master`

## Deployment: frontend
Before deployment frontend code, the backend code needs to be installed on the heroku server to ensure that the PHP code is being ran live on the internet rather than locally on your own server.  In order to deploy the front end code, please use a hosting environment of your choice to deploy this code.  Because I already have an account with Smarterasp for my personal website,  I decided to use that it was my best choice. (https://www.smarterasp.net/).  The website provides a simple upload tool to upload files.

## Author

* **Tyler Truitt** - *Initial work* - [Tyler Truitt](https://github.com/tyleretruitt)


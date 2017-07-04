# Project Title

Weather Application with JavaScript, PHP, and HTML

## Installing

First of all, a live version of this application is available for use at http://www.weatherapp.trucoding.com. But in order to run this software locally you will need to use an development
environment of your choice.  A good example would be to utilize Scotch Box (https://box.scotch.io/) along with a public vagrant machine, and VirtualBox is a good example
(https://www.virtualbox.org/wiki/Downloads).  Follow the proper prompts to get Scotch Box and your public vagrant machine.  Upon installation, a the HTML and JavaScript code should be able to
run the PHP code which I have stored on a Heroku Server (http://arctic-leaf-15909.herokuapp.com/forecast/).  If you would like to run the PHP code locally, you would need to push is to a local host then change the URL where
the PHP code is stored in the app.js file.  For example (http://localhost:8080/forecast/) instead of (http://arctic-leaf-15909.herokuapp.com/forecast/).  This can be easilly done in your command terminal in your machine. Once inside your project folder in your
command terminal type in (php -S localhost:8080) with PHP version 5.4 or later installed on your machine.  The php code is now being ran locally on your device upon completing these steps.

### Prerequisites

As mentioned about a public vagrant machine is needed as well as PHP version 5.4 or greater(php.net/downloads.php).  Please install the latest version of git(https://git-scm.com/downloads)

## How The Application Works

This project is essentially an HTML form with one input field that connects to JavaScript code which makes an AJAX call to a PHP server where an API call is processed and retrieved to present weather data to the user.  The user inputs a Zip Postal code to retrieve weather data for
that specific location.

## Deployment

As mentioned above, this application is deployed on a server of my own (http://www.weatherapp.trucoding.com). To deploy the PHP Backend code, I would use a software called Heroku (https://www.heroku.com), following the instructions along with your command prompt is a quick and painless process.  A domain name
is then given to you which you will need to replace your localhost in your app.js code.  This makes it so the JavaScript is connected to the webserver and not the live server 
on your computer. In order to deploy the front end code, please use a hosting environment of your choice to deploy this code.  Because I already have an account with Smarter ASP for my
personal website,  I decided to use that it was my best choice. (https://www.smarterasp.net/).  The website provides a simple upload tool to upload files.

## Built With

* [Scotch Box](https://box.scotch.io/) - Development tools downloaded
* [Virtual Box](https://www.virtualbox.org/wiki/Downloads) - Public vagrant machine used
* [Composer](https://getcomposer.org/) - PHP depenency library used
* [Slim Framework](https://www.slimframework.com/) - PHP Framework used for API

## Author

* **Tyler Truitt** - *Initial work* - [Tyler Truitt](https://github.com/tyleretruitt)


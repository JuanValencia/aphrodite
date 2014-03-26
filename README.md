How We Setup
============

Install nodejs

for Mac OSX:

`brew install node`

for Ubuntu:

`sudo apt-get node`


Then install depedencies execute:

`npm install`


Then, start the supervisor process.  Supervisor restart programs when they crash and monitors the script specified in the current process.

`./node_modules/.bin/foreverstart node/app.js`

Other helpful commands:

`./node_modules/.bin/forever list`

and to stop a process use 

`./node_modules/.bin/forever stop [process number]`

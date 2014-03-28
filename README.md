Setup
============

Install nodejs

for Mac OSX:

`brew install node`

for Ubuntu:

`sudo apt-get node`

for Redhat:

`sudo yum install node`


Then install depedencies execute:

`npm install`


Then, start the supervisor process.  Supervisor restart programs when they crash and monitors the script specified in the current process.

`./node_modules/.bin/foreverstart node/app.js`

Other helpful commands:

`./node_modules/.bin/forever list`

and to stop a process use 

`./node_modules/.bin/forever stop [process number]`


Troubleshooting
===============

If you are using linux, you might get "nodejs" instead of "node" as your executable.  This will cause issues with npm and express.  There is a ham radio app called "ax25-node" which "node" points to.  You can change the symlink to point "node" to "nodejs" instead of "ax25-node" to fix the issue.

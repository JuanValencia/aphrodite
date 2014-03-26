How We Setup
============

Visit http://nodejs.org and download install for Windows or Mac (Easy installation by clicking next !! )
Once you finishes the setup, you can type "node" on the terminal, then it will shows REPL which is >
Then type console.log("Hello ShareThis ...");
The result will be Hello ShareThis...

yay!

To install depedencies execute:

`npm install`


Then, start the supervisor process.  Supervisor restart programs when they crash and monitors the script specified in the current process.

`forever start app.js`

Other helpful commands:

`forever list`

and to stop a process use 

`forever stop [process number]`

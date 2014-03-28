Setup
============

### Install nodejs

for Mac OSX:

```
brew install node
```

for Ubuntu:

```
sudo apt-get node
```

for Redhat:

```
sudo yum install node
```


### Install project depedencies

```
npm install
```

### Run the server!

```
./bin/grunt nodemon
```

visit `http://127.0.0.1:52273/` in your favorite browser.

### Run tests and coverage

```
./bin/grunt coverage
```

Troubleshooting
===============

If you are using linux, you might get "nodejs" instead of "node" as your executable.  This will cause issues with npm and express.  There is a ham radio app called "ax25-node" which "node" points to.  You can change the symlink to point "node" to "nodejs" instead of "ax25-node" to fix the issue.

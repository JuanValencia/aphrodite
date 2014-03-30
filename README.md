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

### Create local mysql database

If you don't have a local database installed, please install one with brew.
```
brew install mysql
```

Then create and add a local database and add a user
```
CREATE DATABASE aphrodite;
CREATE USER 'aphrodev'@'localhost' IDENTIFIED BY '@phrod3v';
GRANT ALL PRIVILEGES ON aphrodite.* TO 'aphrodev'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
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

To view the report:
```
open coverage/lcov-report/index.html 
```

Troubleshooting
===============

If you are using linux, you might get "nodejs" instead of "node" as your executable.  This will cause issues with npm and express.  There is a ham radio app called "ax25-node" which "node" points to.  You can change the symlink to point "node" to "nodejs" instead of "ax25-node" to fix the issue.

## Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/shahsmit1109/getir-assignment.git
```
and install the dependencies
```
npm install
```

### Prerequisites
You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb.

#### MongoDB
The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.

### Run the Application

The project is preconfigured with a simple development web server. The simplest way to start this server is:

    npm start

### Run test case
 
   npm test

### Refer API documentation

    https://getir-assignment-nodejs.herokuapp.com/swagger

### Project Structure

*index.js*    Contains app inititalization code

*routes/*     Contains all available routes in application

*controller*  Contains files which have business logic

*tests/*      Contains test cases for api

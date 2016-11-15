Project Name
Github Profile Viewer

Description
An app that will let users search for specific github accounts and display all of the information

Project Lectures

1. Section Intro
2. Files & Webpack Setup
3. Main App Component
4. Profile Component
5. RepoList & Repo Components
6. Search Component


What You Will Learn 
1. How to setup multiple components and nest them
2. How to install and use Webpack
3. How to run the Webpack Dev Server
4. How to working with forms and submission
5. Working with events



1. Section Intro

class name will be component
we will have render method in it
we don't have getInitialState and getDefaultProps

we can define states as this.state in constructor
ClassName.defaultProps and classname.propTypes

We will be using github api's
We will be using webpack to run on localhost.

First thing to go to http://github.com/settings/developers
Register a new application, with application name, with homepage url: http://localhost:8080
callback url: http://localhost:8080/_oauth/github


Create a new folder prj2
Open command line
go to project folder prj2

you should have node and npm installed in your system.

sudo npm install -g webpack
sudo npm install -g webpack-dev-server

npm init
  answer all questions, this will install package.json file
  
Add following dependencies in package.json after licence
  "devDependencies": {
    "babel-core": "5.8.*",
    "babel-loader": "5.3.*",
    "webpack": "1.12.*"
  },
  "dependencies": {
    "react":"^0.14.7",
    "react-dom": "^0.14.7"
  }

Now run
sudo npm install
  



2. Files & Webpack Setup
3. Main App Component
4. Profile Component
5. RepoList & Repo Components
6. Search Component


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
  
Since we are using webpack, we should create webpack.config.js in root and write following code in it
module.exports = {
  entry: [
    './src/index.js' //this is file which we create
  ],
  output: {
    path: __dirname,
    filename: 'app/js/main.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}

Now create two folders: app (where html and css will go) and src (where we will put our code)

Create file inside app folder: index.html, css folder, js folder

Create file inside src: index.js, and components folder

and write following code in index.html
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>My GitHub</title>
</head>

<body>
  <div id="app"></div>
  <script src="js/main.js"></script>
</body>
</html>

Now go to command line and type
webpack-dev-server

go to url:
http://localhost:8080/app/
and see the page is loading 


and now add following code in index.js
alert('it worked!');
and recheck it in browser.

And we don't see main.js in app/js folder, because it does create it on fly since it is dev server. We will have to ultimately see main.js file in js folder.

Add following code in index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

Add following code in App.jsx created inside components folder
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return(
      <div>
        MY APP
      </div>
    );
  }
}

export default App


Add following navbar code in index.html above id="app"
<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">My GitHub</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      
    </div><!--/.nav-collapse -->
  </div>
</nav>

Add following styles in index.html, create one style.css and link it to index.html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<link rel="stylesheet" href="css/style.css">


Wrap div id="app" with container, row and col-md-12

<div class="container">
  <div class="row">
     <div class="col-md-12">
      <div id="app"></div>
     </div>
  </div>
</div>

create a folder inside src/components/github

create new file inside it Profile.jsx, RepoList.jsx, Repo.jsx, Search.jsx

Create a constructor inside App.jsx in App class as:
  constructor(props) {
    super(props);
    this.state = {
      username: 'manishkhanchandani',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

Also create following proptypes after class App in App.jsx
App.propTypes =  {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: '85ed9b6325343133f7cc',
  clientSecret: '2be6c435e81399b75348100d909f3ea7a2e226a1'
};

Now change the MY APP to {this.state.username}, to see the user name instead of MY APP,

remember this.state is only present in App.jsx, if you want to use this in other component then you have to export it and use it as props in other file.


Now grab the jquery file and put it in app/js folder
and link jquery file to index.html using script tag above main.js

Write following getUserData function inside the App.jsx below constructor

//Get user data from github
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username+'?client_id=' + this.props.clientId+'&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(err);
        alert(err);
      }.bind(this)
    });
  }
  
Below that, call the following function
  componentDidMount() {
    this.getUserData();
  }

View it in web browser and see the console.log






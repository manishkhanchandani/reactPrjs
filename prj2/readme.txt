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

now we have to fill userData with the response which we got from getUserData

so we will write as:
so on success add following:
this.setState({userData: data});

and on failure add following:
this.setState({username: null});

Add profile to render function of App as:
render() {
    return(
      <div>
        <Profile />
      </div>
    );
  }
  
Open Profile.jsx

Add following code in it:
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component {
  render() {
    return(
      <div>
        This is profile
      </div>
    );
  }
}

export default Profile

Now import Profile.jsx in App.jsx as 

import Profile from './github/Profile.jsx';

Now pass userData to Profile module as:

<Profile userData={this.state.userData} />

Open Profile.jsx file
and change the text "This is profile" to

{this.props.userData.name}

Run the app and check

Open Profile.jsx
Replace dynamic name {this.props.userData.name} with

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">{this.props.userData.name}</h3>
        </div>
        <div class="panel-body">
          Panel content
        </div>
      </div>

Edit the above text to add variables

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                  <span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
                  <span className="label label-info">{this.props.userData.followers} Followers</span>
                  <span className="label label-danger">{this.props.userData.following} Following</span>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-12">
                    <ul className="list-group">
                      <li className="list-group-item"><strong>Username: </strong> {this.props.userData.login}</li>
                      <li className="list-group-item"><strong>Location: </strong> {this.props.userData.location}</li>
                      <li className="list-group-item"><strong>Email Address: </strong> {this.props.userData.email}</li>
                    </ul>
                  </div>
                </div>
                <br />
                <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>

Create new function below getUserData in App.js to fetch repolist

  
  //Get user repos from github
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username+'/repos?per_page='+this.state.perPage+'&client_id=' + this.props.clientId+'&client_secret=' + this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userRepos: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, error) {
        this.setState({username: null});
        //this.setState({userRepos: null});
        console.log(err);
        alert(err);
      }.bind(this)
    });
  }
  
Call this in componentDidMount function
  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  
In App.jsx change <Profile userData={this.state.userData} /> to <Profile userData={this.state.userData} /><Profile {...this.state} />

{...this.state} will pass all the state data

Open RepoList.jsx and paste following code

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Repo from './Repo.jsx';

class RepoList extends Component {
  render() {
    return(
      <div>
        <ul className="list-group">
          {
            this.props.userRepos.map(repo => {
              return <Repo
                     repo={repo}
                     key={repo.id}
                     {...this.props}
                      />
            })
          }
        </ul>
      </div>
    );
  }
}

export default RepoList

Import the Repolist in Profile
import RepoList from './RepoList.jsx';

Copy and paste following code in Repo.jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Repo extends Component {
  render() {
    const {repo} = this.props;
    
    return(
      <li className="list-group-item">
        <a href={repo.html_url}>{repo.name}</a> : {repo.description}
      </li>
    );
  }
}

export default Repo

Add the repolist in Profile.jsx, change following code in profile.jsx
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                  <span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
                  <span className="label label-info">{this.props.userData.followers} Followers</span>
                  <span className="label label-danger">{this.props.userData.following} Following</span>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-12">
                    <ul className="list-group">
                      <li className="list-group-item"><strong>Username: </strong> {this.props.userData.login}</li>
                      <li className="list-group-item"><strong>Location: </strong> {this.props.userData.location}</li>
                      <li className="list-group-item"><strong>Email Address: </strong> {this.props.userData.email}</li>
                    </ul>
                  </div>
                </div>
                <br />
                <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
              </div>
            </div>
            
          </div>
          
          <hr />
          <h3>User Repositories</h3>
          <RepoList userRepos={this.props.userRepos} />
          
        </div>
      </div>
  
Run the app

Open the Search.jsx and copy paste following code:
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  onSubmit(e) {
    e.preventDefault();
    
    let username = this.refs.username.value.trim();
    if (!username) {
      alert('Please enter the username');
      return
    }
    
    this.props.onFormSubmit(username);
    this.refs.username.value = '';
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search Github Users</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    );
  }
}

export default Search

Include search in App.jsx as
import Search from './github/Search.jsx';

Also add following tag before Profile tag as:

<Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
<Profile {...this.state} />

Add following function in App.jsx below getUserRepos

  handleFormSubmit(username) {
    this.setState({username: username}, function() {
      this.getUserData();
      this.getUserRepos();
    });
  }
  
  
Run the app



Quiz:
a. Which command creates a package.json file?
npm create
npm package
npm new
npm init (correct)

b. By default, the webpack configuration file must be named what?
config.js
webpack.config.js (correct)
webpack.conf.js
webpack-config.js

c. What loader did we use with Webpack?

webpack-loader
react-loader
babel-loader (correct)
jsx-loader

d. With ES6 syntax, a component class must extend what class?

React
Component (correct)
Master
Application

e. When using ES6, states are set in a constructor

True (correct)
False

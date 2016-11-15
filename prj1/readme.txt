1. Create a new project prj1

2. Create index.html file, and css folder and js folder

Go to
https://facebook.github.io/react/
Installation
https://facebook.github.io/react/docs/installation.html

CDN
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>

or minify version
<script src="https://unpkg.com/react@15/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>

or download it locally using above urls

use following bootstrap cdn location or download it locally from website http://getbootstrap.com/getting-started/#download

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


We need babel-core script to compile the javascript from website:
https://cdnjs.com/libraries/babel-core/5.8.34

Copy browser version as:
https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js

3. Add following code in index.html file with div tag (id=app)

<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome</title>
<script src="js/react.js"></script>
<script src="js/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>

<body>
  <div id="app"></div>
</body>
</html>


now go to http://getbootstrap.com/examples/jumbotron/
and see the view source: view-source:http://getbootstrap.com/examples/jumbotron/

4. and copy the code from nav tag to ending container and paste it below the div tag.

go to http://getbootstrap.com/components/#navbar
5. and change the nav bar by taking the sample code provided there.

and do some changes as you like

6. Create new style.css and add following style

/* CSS Document */

.jumbotron {
  margin-top: -20px;
}

and attach this style.css to index.html

7. <link rel="stylesheet" href="css/style.css">

now let's define the components for this layout

8. Create a new script tag before the ending body tag. Change the type of script tag to text/babel.

9. Create a new component for navbar inside the script tag as follows:
  var Navbar = React.createClass({
    render: function() {
      return(
        <div>
          <h1>some navbar</h1>
        </div>
      );
    }
  });
  ReactDOM.render(
    <Navbar />,
    document.getElementById('app')
  );
  
10. now grab whole navbar and put it in place of <h1>some navbar</h1>
11. Rename all class to className
12. Now create a new component App and put Navbar component inside it as follows:
  var App = React.createClass({
    render: function() {
      return(
        <Navbar />
      );
    }
  });
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
  
13. Create different components for each section of html part as follows:

<div id="app"></div>
  
<script type="text/babel">
  //NavBar Component
  var Navbar = React.createClass({
    render: function() {
      return(
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">My Website</a>
              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  });
  
  //jumbotron Component
  var Jumbotron = React.createClass({
    render: function() {
      return(
        <div className="jumbotron">
          <div className="container">
            <h1>Hello, world!</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          </div>
        </div>
      );
    }
  });
  
  
  //Homepage component
  var PageHome = React.createClass({
    render: function() {
      return(
        <div className="container">
          <div className="row">
            Main Content
          </div>
        </div>
      );
    }
  });
  
  //Footer component
  var Footer = React.createClass({
    render: function() {
      return(
        <div className="container">
          <hr />
          <footer>
            <p>&copy; 2016 My Website, Inc.</p>
          </footer>
        </div>
      );
    }
  });
  
  //main app
  var App = React.createClass({
    render: function() {
      return(
        <div>
          <Navbar />
          <Jumbotron />
          <PageHome />
          <Footer />
        </div>
      );
    }
  });
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
</script>


14. Passing properties to component

example: <Navbar brand="My Websites" />

and then use it in Navbar component as: {this.props.brand}

15. Setting default property for component
go to any component and before render, add following code to set default properties
  getDefaultProps: function() {
      return {
        brand: 'My Sample Website'
      }
    },

16. Validation for each property, add following code above render,
  propTypes: {
      brand: React.PropTypes.string  
    },
    
17. or
    propTypes: {
      brand: React.PropTypes.string.isRequired  
    },
18. Check the different properties in react

<script type="text/babel">
  //NavBar Component
  var Navbar = React.createClass({
    propTypes: {
      brand: React.PropTypes.string.isRequired  
    },
    getDefaultProps: function() {
      return {
        brand: 'My Sample Website',
        color: 'light'
      }
    },
    render: function() {
      if (this.props.color == 'dark') {
        var navClass = 'navbar navbar-inverse';
      } else {
        var navClass = 'navbar navbar-default';
      }
      return(
        <div>
          <nav className={navClass}>
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">{this.props.brand}</a>
              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  });
  
  //jumbotron Component
  var Jumbotron = React.createClass({
    PropTypes: {
      heading: React.PropTypes.string,
      text: React.PropTypes.string,
      link: React.PropTypes.string
    },
    getDefaultProps: function() {
      return {
        heading: 'Welcome',
        text: 'Welcome to our shiny new website built with React components',
        link: 'http://google.com'
      }  
    },
    render: function() {
      return(
        <div className="jumbotron">
          <div className="container">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            <p><a className="btn btn-primary btn-lg" href="{this.props.link}" role="button">Learn more &raquo;</a></p>
          </div>
        </div>
      );
    }
  });
  
  
  //Homepage component
  var PageHome = React.createClass({
    render: function() {
      return(
        <div className="container">
          <div className="row">
            Main Content
          </div>
        </div>
      );
    }
  });
  
  //Footer component
  var Footer = React.createClass({
    getDefaultProps: function() {
      return {
        website: 'My Website',
        copy_year: 2016
      }  
    },
    render: function() {
      return(
        <div className="container">
          <hr />
          <footer>
            <p>&copy; {this.props.copy_year} {this.props.website}, Inc.</p>
          </footer>
        </div>
      );
    }
  });
  
  //main app
  var App = React.createClass({
    render: function() {
      return(
        <div>
          <Navbar color="dark" />
          <Jumbotron />
          <PageHome />
          <Footer />
        </div>
      );
    }
  });
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
</script>

changing the state of button and content

19. change the home and about link as:
<li><a onClick={this.props.homeClick} href="#">Home</a></li>
<li><a onClick={this.props.aboutClick} href="#">About</a></li>

20. Add properties for App component inside Navbar call

            homeClick={this.handleHomeClick}
            aboutClick={this.handleAboutClick}

21. Create handles and initalstate function as:
    getInitialState: function() {
      return {
        page: 'home'
      }  
    },
    handleHomeClick: function() {
      this.setState({
        page: 'home'
      });  
    },
    handleAboutClick: function() {
      this.setState({
        page: 'about'
      });  
    },
22. Pass state in navbar property
page="{this.state.page}

23. put following code in navbar->render function

      var homeActive = '';
      var aboutActive = '';
      if (this.props.page == 'home') {
        homeActive = 'active';
      } else if (this.props.page == 'about') {
        aboutActive = 'active';
      }
24. change the class for nav as:
<li className={homeActive}><a onClick={this.props.homeClick} href="#">Home</a></li>
<li className={aboutActive}><a onClick={this.props.aboutClick} href="#">About</a></li>

Show jumbotron only on homepage

25. write following code inside render function of App,
      if (this.state.page == 'home') {
        var jumbotron = <Jumbotron />;
        var page = <PageHome />;
      } else if (this.state.page == 'about') {
        var jumbotron = '';
        var page = <PageAbout />;
      }

26. create PageAbout Component as:


  //Homepage component
  var PageAbout = React.createClass({
    render: function() {
      return(
        <div className="container">
          <div className="row">
            <h2 className="page-header">About Us </h2>
            <p> some content.. </p>
          </div>
        </div>
      );
    }
  });


27. change the call to jumbotron and pageabout in App component as


      return(
        <div>
          <Navbar 
            color="light"
            page={this.state.page}
            homeClick={this.handleHomeClick}
            aboutClick={this.handleAboutClick}
          />
          {jumbotron}
          {page}
          <Footer />
        </div>
      );

28. View it in browser.

29. Quiz


a. React is sometimes defined as which letter in MVC?
  1. M - Model
  2. V - View (correct)
  3. C - Controller
  4. V - View
b. When creating a component, which is correct?
  1. var MyComp = ReactDOM.createClass()
  2. var MyComp = createClass()
  3. var MyComp = React.createClass()  (correct)
  4. var MyComp = React.createComponent()
c. When building a React component, the render function is NOT required
  1. True
  2. False (correct)
d. When using Babel in <script> tags, the type must be set to what?
  1. html/babel
  2. text/babel-core
  3. text/javascript
  4. text/babel  (correct)
e. Which HTML attribute can NOT be used in JSX?
  1. id
  2. class (correct)
  3. src
  4. rel
f. The render function in a component must return only 1 root element
  1. True (correct)
  2. False
  
  



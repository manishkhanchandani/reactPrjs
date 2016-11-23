Movie Finder

An application that will let you search for movies in the IMDB database and show info and link.

1. Intro
2. Flux Structure and Gulp
3. Flux Setup and Preparation
4. SearchForm Component
5. Working with Api
6. Display Results

What you will learn
1. How to use Gulp tasks
2. How to compile Javascript
3. How to work with the OMDB API
4. Work with JSON responses

For Api:
http://omdbapi.com/


1. create a new folder prj4
2. Command line: npm init
3. Open package.json and add following dependencies

  "devDependencies": {
    "browserify": "*",
    "flux": "*",
    "gulp": "*",
    "reactify": "*",
    "vinyl-source-stream": "*",
    "object-assign": "*"
  },
  "dependencies": {
    "react":"^0.14.7",
    "react-dom": "^0.14.7"
  }

4. npm install

5. Create following folders
src
  index.html
  css
    style.css
    bootstrap.css
  js
    main.js
    actions
      AppActions.js
    stores
      AppStore.js
    dispatcher
      AppDispatcher.js
    constants
      AppConstants.js
    components
      App.js
    utils
      AppAPI.js
    vendors

6. Get bootstrap.css and put it in css folder and bootstrap.js and jquery.js and put it in vendors folder.

7. Now lets create gulp file at root level:
gulpfile.js and add following contents

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  browserify('./src/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/css/*.*')
    .pipe(gulp.dest('dist/css'));
  gulp.src('src/js/vendors/*.*')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['browserify', 'copy'], function() {
  return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});

8. go to src/index.html file
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>MovieFind</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">
</head>

<body>
  <div id="app"></div>
  
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery-1.11.3.min.js"></script>
  <script src="js/jquery-migrate-1.2.1.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>


9. go to command line and run following:
gulp, if this gives error try: sudo npm install gulp -g and then run gulp

10. Once you run gulp, you will see dist folder is created with all related files in it.

11. open src/main.js and add
var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI.js');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

12. Open src/components/App.js and write
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var App = React.createClass({
  render: function() {
    return(
      <div>
        MY APP
      </div>
    )
  }
});


module.exports = App;

13. Open dispatcher/AppDispatcher.js and write

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    var payload = {
      source: 'VIEW_ACTION',
      action: action
    }
    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;

14. Go to constants/AppConstants.js
module.exports = {
  SEARCH_MOVIES: 'SEARCH_MOVIES'
}

15. Now go to actions/AppActions.js
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  
}

module.exports = AppActions;

16. now go to store/AppStore.js where data logic will go

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
  //store methods will come here
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.on('remove', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  
  switch(action.actionType) {
  
  }
  
  return true;
});

module.exports = AppStore;

17. now go to AppAPI.js
var AppActions = require('../actions/AppActions');

module.exports = {
  searchMovies: function(movie) {
    
  }
}

18. in components folder, create a new file SearchForm.js, copy from App component, and write following:
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  render: function() {
    return(
      <div className="search-form">
        <h1 className="text-center">Search For A Movie</h1>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" ref="title" placeholder="Enter a Movie Title..." />
          </div>
          <button className="btn btn-primary btn-block">Search Movies</button>
        </form>
      </div>
    )
  }
});


module.exports = SearchForm;

19. Now call this searchform in App.js as follows:
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <SearchForm />
      </div>
    )
  }
});


module.exports = App;

20. Run the gulp and open the file in browser and see the change.

21. change the index.html to add container and row as:
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>MovieFind</title>
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div id="app"></div>
      </div>
    </div>
  </div>
  
  <script src="js/jquery-1.11.3.min.js"></script>
  <script src="js/jquery-migrate-1.2.1.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>

22. open css/style.css and add following code:
body {
  margin-top: 30px;
}

.search-form {
  width: 100%;
  margin: auto;
  background: #f4f4f4;
  padding: 0 20px 20px 20px;
  border: 1px #ccc solid;
  border-radius: 10px;
}

23. When we submit we need to call an action, in form tag, add an attribute onSubmit={this.onSubmit} as:  onSubmit={this.onSubmit}, and create onSubmit function as follows:
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  render: function() {
    return(
      <div className="search-form">
        <h1 className="text-center">Search For A Movie</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="title" placeholder="Enter a Movie Title..." />
          </div>
          <button className="btn btn-primary btn-block">Search Movies</button>
        </form>
      </div>
    )
  },
  
  onSubmit: function(e) {
    e.preventDefault();
    
    //create an object
    var movie = {
      title: this.refs.title.value.trim()
    }
    
    //flux
    AppActions.searchMovies(movie);
  }
});


module.exports = SearchForm;

24. Go to appActions and create a function searchMovies as:
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchMovies: function(movie) {
    console.log('searching for movie: ', movie);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  }
}

module.exports = AppActions;

Run the app and check the console.log

25. Now open AppStore file and update it as follows:

  switch(action.actionType) {
    case AppConstants.SEARCH_MOVIES:
      console.log('Searching for mov: ', action.movie);
      AppStore.emit(CHANGE_EVENT);
      break;
  }
  

26. add following in appconstant: ,
  RECEIVE_MOVIE_RESULTS: 'RECEIVE_MOVIE_RESULTS'
  
27. add following in appactions:
,
  receiveMovieResults: function(movies) {
    console.log('recieving movies: ', movies);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
      movie: movies
    });
  }

28. add following in appstore

    case AppConstants.RECEIVE_MOVIE_RESULTS:
      AppStore.setMovieResults(action.movies);
      AppStore.emit(CHANGE_EVENT);
      break;

29. add in appapi.js

  searchMovies: function(movie) {
    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + movie.title,
      dataType: 'json',
      cache: false,
      success: function(data) {
        AppActions.receiveMovieResults(data.Search);
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);
      }.bind(this)
    });
  }

30. add following in app.js

function getAppState() {
  return {
    movies: AppStore.getMovieResults()
  }
}

 setMovieResults: function(movies) {
    _movies = movies;
  },
  getMovieResults: function() {
    return _movies;
  },
  
  

31. create MovieResults.js in components and add following:
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var MovieResults = React.createClass({
  render: function() {
    return(
      <div>
        RESULTS
      </div>
    )
  }
});


module.exports = MovieResults;

32. Open App.js and add

var MovieResults = require('./MovieResults.js');

and 
        <SearchForm />
        <MovieResults />

33. change movieResults.js as

var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var MovieResults = React.createClass({
  render: function() {
    console.log('m: ', this.props.movies);
    return(
      <div>
        <h3 className="text-center">Results</h3>
        {
          this.props.movies.map(function(movie, i) {
            return(
              <Movie movie={movie} key={i} />
            )
          })
        }
      </div>
    )
  }
});


module.exports = MovieResults;

24. change app.js as
console.log('this: ', this.state.movies);
    if (this.state.movies == '') {
      var movieResults = '';
    } else {
      var movieResults = <MovieResults movies={this.state.movies} />;
    }
    return(
      <div>
        <SearchForm />
        {movieResults}
      </div>
    )
    
25. Create new file movie.js
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Movie = React.createClass({
  render: function() {
    if (this.props.movie.Poster != 'N/A') {
      var img = this.props.movie.Poster;
    } else {
      var img = '';
    }
    var link = 'http://www.imdb.com/title/' + this.props.movie.imdbID;
    return(
      <div className="well">
        <div className="row">
          <div className="col-md-4">
            <img className="thumbnail img-responsive" src={img} />
          </div>
          <div className="col-md-8">
            <h4>{this.props.movie.Title}</h4>
            <ul className="list-group">
              <li className="list-group-item">Year Released: {this.props.movie.Year}</li>
              <li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
            </ul>
            <a className="btn btn-primary" href={link} target="_blank">View on Imdb</a>
          </div>
        </div>
      </div>
    )
  }
});


module.exports = Movie;




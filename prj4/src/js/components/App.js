var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var MovieResults = require('./MovieResults.js');

function getAppState() {
  return {
    movies: AppStore.getMovieResults()
  }
}

var App = React.createClass({
  //get initial state
  getInitialState: function() {
    return getAppState();
  },
  //change listener
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnMount: function() {
    AppStore.removeChangeListener(this._onChange);
  },
  render: function() {
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
  },
  _onChange: function() {
    this.setState(getAppState());
  }
});


module.exports = App;
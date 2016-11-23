var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  searchMovies: function(movie) {
    console.log('searching for movie: ', movie);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  },
  receiveMovieResults: function(movies) {
    console.log('recieving movies: ', movies);
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
      movies: movies
    });
  }
}

module.exports = AppActions;
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
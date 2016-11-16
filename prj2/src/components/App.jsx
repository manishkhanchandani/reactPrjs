import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'manishkhanchandani',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }
  
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
  
  //call the getUserData function 
  componentDidMount() {
    this.getUserData();
  }
  
  render() {
    return(
      <div>
        {this.props.clientId}
      </div>
    );
  }
}

App.propTypes =  {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: '85ed9b6325343133f7cc',
  clientSecret: '2be6c435e81399b75348100d909f3ea7a2e226a1'
};

export default App
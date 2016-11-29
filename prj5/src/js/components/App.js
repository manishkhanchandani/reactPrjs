var React = require('react');
var Firebase = require('firebase');
var AppConstants = require('../constants/AppConstants');
Firebase.initializeApp(AppConstants.firebase);

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm.js');
var EditForm = require('./EditForm.js');
var ContactList = require('./ContactList.js');

function getAppState(){
	return {
    contacts: AppStore.getContacts(),
    contactToEdit: AppStore.getContactToEdit()
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
    if (this.state.contactToEdit) {
      var form = <EditForm contactToEdit={this.state.contactToEdit} />
    } else {
      var form = <AddForm />
    }
    console.log('state start');
    console.log(this.state.contacts);
    console.log(this.state.contactToEdit);
    console.log('state end');
    //show add form or edit form based on edit variable
		return(
			<div>
				{form}
        <ContactList contacts={this.state.contacts} />
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;
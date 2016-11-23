var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _contacts = [];

var AppStore = assign({}, EventEmitter.prototype, {
  saveContact: function(contact) {
    _contacts.push(contact);
    console.log('14. contacts is ', _contacts);
  },
  getContacts: function() {
    return _contacts;
  },
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
    case AppConstants.SAVE_CONTACT:
      console.log('Saving Contacts ....: ', action);
      
      //Store save
      AppStore.saveContact(action.contact);
      
      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;
	}

	return true;
});

module.exports = AppStore;
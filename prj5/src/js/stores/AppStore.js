var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _contacts = [];

var _contact_to_edit = '';

var AppStore = assign({}, EventEmitter.prototype, {
  saveContact: function(contact) {
    _contacts.push(contact);
    console.log('14. contacts is ', _contacts);
  },
  getContacts: function() {
    return _contacts;
  },
  setContacts: function(contacts) {
    _contacts = contacts;
  },
  setContactToEdit: function(contact) {
    _contact_to_edit = contact;
  },
  getContactToEdit: function() {
    return _contact_to_edit;
  },
  updateContact: function(contact) {
    for(i = 0; i < _contacts.length; i++) {
      if (_contacts[i].id == contact.id) {
        _contacts.splice(i, 1);
        _contacts.push(contact);
      }
    }
  },
  removeContact: function(contactId) {
    var index = _contacts.findIndex(x => x.id === contactId);
    _contacts.splice(index, 1);
    console.log(_contacts);
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
      //console.log('Saving Contacts ....: ', action);
      
      //Store save
      AppStore.saveContact(action.contact);
      
      //save to api
      AppAPI.saveContact(action.contact);
      
      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.RECEIVE_CONTACTS:
      //console.log('Receiving Contacts ....: ', action);
      
      //Store set
      AppStore.setContacts(action.contacts);
      
      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.REMOVE_CONTACT:
      //Store remove
       AppStore.removeContact(action.contactId);
      //API remove
       AppAPI.removeContact(action.contactId);
      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.EDIT_CONTACT:
      //Store edit
       AppStore.setContactToEdit(action.contact);
      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.UPDATE_CONTACT:
      AppStore.updateContact(action.contact);
      AppAPI.updateContact(action.contact);
      AppStore.emit(CHANGE_EVENT);
      break;
	}

	return true;
});

module.exports = AppStore;
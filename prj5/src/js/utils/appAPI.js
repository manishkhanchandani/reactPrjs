var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');
var AppConstants = require('../constants/AppConstants');

var firebaseRef = Firebase.database().ref('contacts');
module.exports = {

	saveContact: function(contact) {
    firebaseRef.push({
      contact: contact
    });
  },
  
  getContacts: function() {
    
    firebaseRef.once('value', function(snapshot){
      var contacts = [];
      snapshot.forEach(function(childSnapshot) {
          var contact = {
            id: childSnapshot.key,
            name: childSnapshot.val().contact.name,
            email: childSnapshot.val().contact.email,
            phone: childSnapshot.val().contact.phone
          };
          contacts.push(contact);
          AppActions.receiveContacts(contacts);
      });
    }); 
  },
  
  updateContact: function(contact) {
    var id = contact.id;
    var updatedContact = {
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    }
    firebaseRef.child(contact.id).child('contact').update(updatedContact);
  },
  
  removeContact: function(contactId) {
    
    var child = firebaseRef.child(contactId);
    child.remove();
  }
}
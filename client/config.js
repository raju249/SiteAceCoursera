/* global FlashMessages*/
/*global Comments*/
/*global PackageSearch*/

	FlashMessages.configure({
    autoHide: true,
    hideDelay: 5000,
    autoScroll: true
  });
	
	//Accounts Config
	Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'username',
        fieldLabel: 'User name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }]});
	

Comments.ui.config({
   template: 'bootstrap'
});

// Suscribe
Meteor.subscribe("websites");
Meteor.subscribe("comments");
Meteor.subscribe("recommendations");
Meteor.subscribe("votes");



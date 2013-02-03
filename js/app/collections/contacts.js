define([
  'underscore',
  'backbone',
  'models/contact'
], function(_, Backbone, Contact) {

  var Contacts = Backbone.Collection.extend({
    model: Contact
  });

  return Contacts;

});

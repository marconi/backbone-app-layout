define([
  'backbone'
], function(Backbone) {

  var Contact = Backbone.Model.extend({
    defaults: {
      name: null,
      number: null
    }
  });

  return Contact;

});

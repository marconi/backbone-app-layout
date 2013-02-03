define([
  'jquery',
  'backbone',
  'collections/contacts',
  'views/app'
], function($, Backbone, Contacts, AppView) {

  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'contact/new': 'createContact'
    },

    initialize: function() {
      this.appView = new AppView({router: this,
                                  collection: new Contacts()});
      $('body').append(this.appView.render().el);
    },

    index: function() {
      this.appView.hideAddContactForm();
    },

    createContact: function() {
      this.appView.showAddContactForm();
    }
  });

  return Router;

});

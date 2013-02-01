define([
  'views/base',
  'views/add_contact',
  'hbs!templates/app/app'
], function(BaseView, AddContactView, appTpl) {

  var AppView = BaseView.extend({
    template: appTpl,
    id: 'contacts-app',
    events: {
      'click .add': 'showAddContactForm',
      'click .cancel': 'hideAddContactForm'
    },

    // sub views
    addContactView: null,

    render: function() {
      this.$el.html(this.template({contacts: this.collection.toJSON()}));
      return this;
    },

    showAddContactForm: function(e) {
      e && e.preventDefault();
      this.addContactView = new AddContactView({collection: this.collection});
      this.$('#add-contact').append(this.addContactView.render().el);
      this.$('.add, .contacts').addClass('hidden');
      this.options.router.navigate('contact/new');
    },

    hideAddContactForm: function(e) {
      e && e.preventDefault();
      if (this.addContactView) {
        this.addContactView.dispose();
        this.addContactView = null;
      }
      this.$('.add, .contacts').removeClass('hidden');
      this.options.router.navigate('');
      this.render();
    }
  });

  return AppView;

});

define([
  'views/base',
  'models/contact',
  'hbs!templates/app/add-contact'
], function(BaseView, Contact, addContactTpl) {

  var AddContactView = BaseView.extend({
    template: addContactTpl,
    events: {
      'click #addbtn': 'addPhonebook'
    },
    render: function() {
      this.$el.html(this.template({}));
      return this;
    },
    addPhonebook: function(e) {
      e.preventDefault();
      var contactName = this.$('input[type=text]').val();
      this.$('input[type=text]').val('');
      this.collection.push(new Contact({name: contactName}));
    }
  });

  return AddContactView;

});

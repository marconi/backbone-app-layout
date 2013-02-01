require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    handlebars: 'libs/handlebars/handlebars',
    hbs: 'libs/require/hbs',
    i18nprecompile: 'libs/require/i18nprecompile',
    json2: 'libs/require/json2'
  },

  // module dependencies
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore'],
      exports: 'Backbone'
    },
    'hbs': {
      deps: ['handlebars', 'i18nprecompile', 'json2']
    }
  },

  urlArgs: 'ts=' + (new Date()).getTime(),  // for development only!
  deps: ['main'],
  locale: 'tl-tl',  // language, defaults to en_us if not specified

  // handlebars plugin config
  hbs: {
    templateExtension: 'html',
    compileOptions: {},
    helperDirectory: 'templates/helpers/',
    i18nDirectory: 'templates/i18n/'
  }
});

require([
  'routers/router'
], function(Router) {

  new Router();
  Backbone.history.start();

});

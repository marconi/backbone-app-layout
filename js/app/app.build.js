({
    appDir: "./",
    baseUrl: "./",
    dir: "../app-build",

    optimizeCss: "standard",
    inlineText: true,

    pragmasOnSave: {
        //removes Handlebars.Parser code (used to compile template strings) set
        //it to `false` if you need to parse template strings even after build
        excludeHbsParser : true,

        // kills the entire plugin set once it's built.
        excludeHbs: true,

        // removes i18n precompiler, handlebars and json2
        excludeAfterBuild: true
    },

    paths: {
      'jquery': 'libs/jquery/jquery',

      'underscore': 'libs/underscore/underscore',
      'backbone': 'libs/backbone/backbone',

      'handlebars': 'libs/handlebars/handlebars',

      'hbs': 'libs/require/hbs',
      'i18nprecompile': 'libs/require/i18nprecompile',
      'json2': 'libs/require/json2'
    },

    // module dependencies
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore'],
        exports: 'Backbone'
      },
      hbs: {
        deps: ['handlebars', 'underscore', 'i18nprecompile', 'json2']
      }
    },

    locale: "tl-tl",

    // handlebars plugin config
    hbs: {
      templateExtension: 'html',
      compileOptions: {},
      helperDirectory: 'templates/helpers/',
      i18nDirectory: 'templates/i18n/',
      disableI18n: false
    },

    modules: [{name: "main"}]
})

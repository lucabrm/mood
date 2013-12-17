require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        tpl: '../tpl',
        handlebars:'handlebars.runtime'

    },

   /* map: {
        '*': {
            'app/models/employee': 'app/models/memory/employee'
        }
    },
    */
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
       
        'tpl/compiled-templates':{
            deps: [ 'handlebars' ]
        }
    }
});

require(['jquery', 'backbone', 'app/router' ], function ($, Backbone,Router) {


    var router = new Router();

    $("body").on("click", ".back-button", function (event) {
        event.preventDefault();
        window.history.back();
    });

    Backbone.history.start();
});

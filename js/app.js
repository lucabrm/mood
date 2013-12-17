require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        tpl: '../tpl',
        handlebars:'handlebars.runtime'

    },

    map: {
        '*': {
            'app/models/employee': 'app/models/memory/employee'
        }
    },

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
            deps: [ 'handlebars' ],
            exports: 'Htemp'

        }
    }
});
/*
require(['jquery', 'backbone', 'app/router', 'tpl/compiled-templates'], function ($, Backbone, Router, Templates) {

    var router = new Router();

    $("body").on("click", ".back-button", function (event) {
        event.preventDefault();
        window.history.back();
    });

    Backbone.history.start();
});
*/

require(['jquery', 'backbone', 'app/router', 'tpl/compiled-templates' ], function ($, Backbone,Router,Htemp) {


    var router = new Router();

    $("body").on("click", ".back-button", function (event) {
        event.preventDefault();
        window.history.back();
    });

    Backbone.history.start();
});

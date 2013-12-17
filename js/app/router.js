define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        SlugView    = require('app/views/Slug'),
        Htemp       = require('tpl/compiled-templates');
        
        
       
    return Backbone.Router.extend({

        routes: {
            ":slug":"slug"
        },

        slug: function (slug) {
           var slugView = new SlugView({slug: slug});
           $('body').html(slugView.$el);
        }

    });

});
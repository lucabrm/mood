/*define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Handlebars          = require('handlebars.runtime');
        //Templates           = require('tpl/compiled-templates');
       
    return Backbone.View.extend({
        //template : Handlebars.templates['slug.hbs'],

        initialize: function () {
            this.template =  Handlebars.templates['slug.hbs'];
            
            this.render();
        },

        render: function () {
            //console.log(Templates);
            this.$el.html(this.template({slug: this.options.slug}));

            return this;
        }

    });

});

*/

define(['jquery', 'backbone', 'handlebars','tpl/compiled-templates'], function ($, Backbone,Handlebars,Templates) {

    var SlugView =   Backbone.View.extend({
        

        initialize: function () {
            this.template = Templates['js/tpl/slug-new.hbs'];
            this.render();
        },

        render: function () {
            this.$el.html(this.template({slug: this.options.slug}));
            return this;
        }

    });
    return SlugView;

});

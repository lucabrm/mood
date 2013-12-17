define(['jquery', 'backbone', 'handlebars','tpl/compiled-templates'], function ($, Backbone,Handlebars,Templates) {

    var SlugView = Backbone.View.extend({
        
        initialize: function () {
            console.log(Templates);
            this.template = Templates['slug'];
            this.render();
        },

        render: function () {
            this.$el.html(
                this.template(
                    {slug: this.options.slug}));
            return this;
        }

    });
    return SlugView;

});

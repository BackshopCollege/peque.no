define([
        'jquery',
        'underscore',
        'backbone',
        'app/models/url',
        'app/collections/url',
        'text!layouts/shared/home_url.html'
], function ($, _, Backbone, Url, UrlCollection, homeTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: '#url_list',
    template: _.template(homeTemplate),
    events: {
      'click .order th': 'reorder_list'
    },
    initialize: function (options) {
      var list = new UrlCollection()
      var that = this
      list.fetch({success: function(){
          console.log(list.models); // => 2 (collection have been populated)
          that.render(list)
      }});
    },
    render: function(data) {
      $(this.el).html(this.template(data))
    },
    reorder_list: function(e){
      console.log("reorder by: " + e.target.innerText)
    },
  });
  return View;

});


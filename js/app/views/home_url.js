define([
        'jquery',
        'underscore',
        'backbone',
        'text!layouts/shared/home_url.html',
], function ($, _, Backbone, homeTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: '#url_list',
    template: _.template(homeTemplate),
    events: {
      'click .order th': 'reorder_list'
    },
    initialize: function (options) {
      this.render()
    },
    render: function() {
      $(this.el).html(this.template(populate()))
    },
    reorder_list: function(e){
      console.log("reorder by: " + e.target.innerText)
    },
  });
  return View;

});

function populate() {
  return {
    "urls": [
      {
        slang: "afwefawefa",
        clicks: 12,
        when: "a"
      }
    ]
  }
}

define([
        'app/events',
        'jquery',
        'underscore',
        'backbone',
        'text!layouts/shared/home_url.html',
], function (Events, $, _, Backbone, homeTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: '#app_area',
    template: _.template(homeTemplate),
    events: {
      'click .order th': 'reorder_list'
    },
    initialize: function (options) {
      Events.trigger('app_area',{item:"listing"});
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

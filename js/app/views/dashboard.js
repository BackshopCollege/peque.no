define([
        'app/events',
        'jquery',
        'underscore',
        'backbone',
        'app/vm',
        'text!layouts/dashboard.html',
], function (Events, $, _, Backbone, Vm, dashboardTemplate) {
  'use strict';

  var View = Backbone.View.extend({
    el: '#app',
    events: {},
    initialize: function (options) {
      this.options = options;
      this.init_view(true)
    },
    render: function() {
      $(this.el).html(dashboardTemplate)
    },
    init_view: function (op) {
      if (op) {
        this.eventHandler();
        this.render();
        this.load_menu();
      }
    },
    load_menu: function () {
      var that = this
      require(['app/views/shared/dashboard_menu','app/views/create_url'],
        function(DashboardMenulView, CreateUrllView){
         Vm.create({}, 'DashboardMenulView', DashboardMenulView, that.options);
         if (that.options.home)
          Vm.create({}, 'CreateUrllView', CreateUrllView);
      });
    },
    eventHandler: function () {
      Events.on("app_area", function(options) {
        Events.trigger("dashboard_menu",options)
      })
      Events.on("dashboard_menu_created", function (options) {
        if(typeof options.after_menu === 'function') {
          options.after_menu();
        }
      })
    },
    clean: function () {
      Events.off("app_area");
      Events.off("dashboard_menu_created")
    }


  });
  return View;

});

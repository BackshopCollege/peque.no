define(['jquery','backbone','app/vm'], function (_, Backbone, Vm) {

  var PequenoRouter = Backbone.Router.extend({

    initialize: function(options) {},

    routes: {
      "" : "home",
      "login": "login",
      "dashboard": "dashboard",
      "listing": "listing",
      "config": "config",
    },

    home: function(){
      require(['app/views/home'],function(LoginView){
        Vm.create({}, 'LoginView', LoginView);
      });
    },
    login: function() {
      require(['app/views/login'],function(LoginView){
        Vm.create({}, 'LoginView', LoginView);
      });
    },
    dashboard: function() {
      require(['app/views/dashboard'],function(DashboardView){
        Vm.create({}, 'DashboardView', DashboardView, {home: true});
      });
    },
    listing: function() {
      require(['app/views/dashboard','app/views/listing'],
        function(DashboardView, ListingView){
          Vm.reload({}, 'DashboardView', DashboardView,{
            after_menu: function (argument) {
              Vm.create({}, 'ListingView', ListingView);
            }
          });
          
        });
    },
    config: function() {
        require(['app/views/dashboard','app/views/config'],
        function(DashboardView, ConfigView){
          Vm.reload({}, 'DashboardView', DashboardView,{
            after_menu: function (argument) {
              Vm.create({}, 'ConfigView', ConfigView);
            }
          });
          
        });
    },

  });

  var initialize = function(options){
    new PequenoRouter(options);
    Backbone.history.start();  
  };

  return {
    initialize: initialize
  };

});

define(["app/router", "app/vm", "app/views/app"], function(Router, Vm, AppView) {
  var appView = Vm.create({}, 'AppView', AppView);
  Router.initialize({appView: appView});
});

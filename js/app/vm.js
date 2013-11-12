define(['app/events','underscore'], function(Events,_){
  var views = {};
  var reload = function (context, name, View, options) {
    view = has_view(name)
    if(view) {
      if(typeof view.reload === 'function')
        view.reload();
      return view
    }
    create(context, name, View, options)
  }
  var create = function (context, name, View, options) {
    if(!options) options = {}
    if(typeof views[name] !== 'undefined') {
      views[name].undelegateEvents();
      if(typeof views[name].clean === 'function') {
        views[name].clean();
      }
    }
    var view = new View(options);
    views[name] = view;
    if(typeof context.children === 'undefined'){
      context.children = {};
      context.children[name] = view;
    } else {
      context.children[name] = view;
    }
    Events.trigger('viewCreated');
   
    return view;
  }
  var has_view = function (name) {
    console.log(views)
    _.each(views,function(item){
      console.log(item)
    })
    return false
  }  
  return {
    create: create,
    reload: reload
  };
});

define(['backbone'], function(Backbone){
  var Url = Backbone.Model.extend({
    defaults: {
      "slang":  "",
      "clicks":   0,
      "stamp": new Date()
    },
    initialize: function() {
      //this.set("slang", Math.random().toString(36).substring(7));
      //this.set("when", new Date())
    }
  });
  return Url;
});

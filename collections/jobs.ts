export var Jobs = new Mongo.Collection<Job>('jobs');

Jobs.allow({
  insert: function() {
    var user = Meteor.user();
    return !!user;
  },

  update: function() {
    var user = Meteor.user();
    return !!user;
  },

  remove: function() {
    var user = Meteor.user();
    return !!user;
  },
});

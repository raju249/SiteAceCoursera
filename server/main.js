//Publish
Meteor.publish("websites", function () {
  return Websites.find();
});
Meteor.publish("comments", function () {
  return Comments.find();
});
Meteor.publish("votes", function () {
  return Votes.find();
});
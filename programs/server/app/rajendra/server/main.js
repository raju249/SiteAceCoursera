(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// rajendra/server/main.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
//Publish                                                              //
Meteor.publish("websites", function () {                               // 2
  return Websites.find();                                              // 3
});                                                                    //
Meteor.publish("comments", function () {                               // 5
  return Comments.find();                                              // 6
});                                                                    //
Meteor.publish("votes", function () {                                  // 8
  return Votes.find();                                                 // 9
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=main.js.map

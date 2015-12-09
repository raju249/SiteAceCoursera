(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/startup.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
if (Meteor.isServer) {                                                 // 2
  // start up function that creates entries in the Websites databases.
  Meteor.startup(function () {                                         // 4
    // code to run on server at startup                                //
    if (!Websites.findOne()) {                                         // 6
      console.log("No websites yet. Creating starter data.");          // 7
      Websites.insert({                                                // 8
        title: "Goldsmiths Computing Department",                      // 9
        url: "http://www.gold.ac.uk/computing/",                       // 10
        description: "This is where this course was developed.",       // 11
        createdOn: new Date()                                          // 12
      });                                                              //
      Websites.insert({                                                // 14
        title: "University of London",                                 // 15
        url: "http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
        description: "University of London International Programme.",  // 17
        createdOn: new Date()                                          // 18
      });                                                              //
      Websites.insert({                                                // 20
        title: "Coursera",                                             // 21
        url: "http://www.coursera.org",                                // 22
        description: "Universal access to the world’s best education.",
        createdOn: new Date()                                          // 24
      });                                                              //
      Websites.insert({                                                // 26
        title: "Google",                                               // 27
        url: "http://www.google.com",                                  // 28
        description: "Popular search engine.",                         // 29
        createdOn: new Date()                                          // 30
      });                                                              //
    }                                                                  //
  });                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=startup.js.map

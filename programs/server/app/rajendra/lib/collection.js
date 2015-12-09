(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// rajendra/lib/collection.js                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/*global WebsitesIndex*/                                               //
/*global EasySearch*/                                                  //
/*global Websites*/                                                    //
Websites = new Mongo.Collection("websites");                           // 4
Votes = new Mongo.Collection("votes");                                 // 5
                                                                       //
//Easysearch package                                                   //
WebsitesIndex = new EasySearch.Index({                                 // 8
  collection: Websites,                                                // 9
  fields: ['title', 'url', 'description'],                             // 10
  engine: new EasySearch.MongoDB()                                     // 11
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=collection.js.map

/*global WebsitesIndex*/
/*global EasySearch*/
/*global Websites*/
 Websites = new Mongo.Collection("websites");
 Votes = new Mongo.Collection("votes");
 
 //Easysearch package
WebsitesIndex = new EasySearch.Index({
  collection: Websites,
  fields: ['title','url','description'],
  engine: new EasySearch.MongoDB()
});
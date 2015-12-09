/* global Websites*/
/*global Router*/
Template.website_list.helpers({
		websites:function(){
			return Websites.find({},{sort : {votesUp : -1} });
		}
	});
	
	
Template.homePage.helpers({
		websites:function(){
			return Websites.find({},{limit:5,sort:{createdOn:-1}});
		},
		popular:function(){
		    return Websites.find({},{limit : 5,sort: {votesUp : { $gt : 2}} });
		}
	});

Template.navbar.helpers({
    isActive:function(){
        var route = Router.current().route.path();
        if (route === '/'){
            return "active";
        }
        else{
            return "";
        }
    }
});

Template.searchPage.helpers({
  websitesIndex: () => WebsitesIndex
});

//Global helpers
Template.registerHelper('cleanId', function(id) {
    var cleanId = id.substring(0,17); //same as truncate.
    return new Spacebars.SafeString(cleanId);
});
/*global FlashMessages*/
/* global Websites*/

Template.website_list.events({
		"click .js-add":function(){
			if(Meteor.user()){
				$("#addModal").modal("show");
			}
			else
			{
				FlashMessages.sendError("Please login!!")
			}
			
		}
	});
	
Template.website_item.events({
		"click .js-upvote":function(event){
			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;
			console.log("Up voting website with id "+website_id);
			// put the code in here to add a vote to a website!
			if(Meteor.user()){
				console.log(Meteor.user())
			}else{
				FlashMessages.sendError("You must be logged in mate !!!");
			}
			return false;// prevent the button from reloading the page
		}, 
		"click .js-downvote":function(event){

			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;
			console.log("Down voting website with id "+website_id);
			
			if(Meteor.user()){
				console.log(Meteor.user());
			}
			else{
				FlashMessages.sendError("Please Login!!")
			}
			
			return false;// prevent the button from reloading the page
		}
	});
	
Template.website_form.events({
		"submit .js-addSite":function(event){

			// here is an example of how to get the url out of the form:
			var url = event.target.url.value;
			var des = event.target.description.value;
			var titl = event.target.title.value;
			
			// insert data into mogodb
			Websites.insert({
				title:titl,
				url:url,
				description:des,
				createdOn:new Date(),
				createdBy:Meteor.user().userId
			});
			$("#close").click();
		  $("#thank").modal("show");
			
			//  put your website saving code in here!	
			
			return false;// stop the form submit from reloading the page

		}
	});
	
Template.header.events({
		"click .js-add":function(event){
			if(Meteor.user()){
				$("#addModal").modal("show");
			}
			else{
				FlashMessages.sendError("Please login!!");
			}
			
		},
		"click .js-search":function(){
			$("#search").modal("show");
		}
	});
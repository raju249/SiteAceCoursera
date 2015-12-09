/*global Router*/
/*global Websites*/
	Router.configure({
        layoutTemplate:'ApplicationLayout'
    });
    
    Router.route('/',function(){
        this.render('navbar',{
            to:"navbar"
        });
        this.render('header',{
        	to:"mainPage"
        });
    });
    
    Router.route('/sites',function(){
    	this.render('navbar',{
    		to:"navbar"
    	});
    	this.render('website_list',{
    		to:"mainPage"
    	});
    });
    
    Router.route('/site/:id',function(){
        this.render('navbar',{
            to:"navbar"
        });
        this.render('siteDetail',{
            to:"mainPage",
            data:function(){
                return  Websites.findOne({_id:this.params.id});
            }
        });
    });
    
    
    Router.route('/search',function() {
        this.render('navbar',{
            to:"navbar"
        });
        this.render('searchPage',{
            to:"mainPage"
        });
    });
    
    
    
var test = require("./test") ;
var showHide = require("./showHide") ;

jQuery(document).ready(function($) {

    (function() {
	window.swHeader = {

	    els : {
		nav : $(".sw-navigation-menu ul"),
		button : $(".sw-showhide")
	    },

	    functions : {	
		toggleMenu : function(e) {
		    	console.debug("got to toggleMenu") ;
		    $(".sw-showhide").on("click", function() {
			console.debug("clicked on toggleMenu") ;
		    }) ;
		}
	    }	    
	    
	} ; // swHeader object ends	

	// return our functions
	window.swHeader.functions.toggleMenu() ;
	
    })() ;    
    
});

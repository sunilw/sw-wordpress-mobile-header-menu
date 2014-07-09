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
		    $(".sw-showhide").on("click", function(e) {
			e.preventDefault() ;
			showHide() ;
		    }) ;
		}
	    }	    
	    
	} ; // swHeader object ends	

	// return our functions
	window.swHeader.functions.toggleMenu() ;
	
    })() ;    
    
});

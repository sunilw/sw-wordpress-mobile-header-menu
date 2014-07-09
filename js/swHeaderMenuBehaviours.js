(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./showHide":2,"./test":3}],2:[function(require,module,exports){
/* show and hide the menu  */

module.exports = function() {

    console.debug("hello from showHide") ;
    
}

},{}],3:[function(require,module,exports){
module.exports = function() {
    console.debug("hello, from test")   ;
}

},{}]},{},[1]);
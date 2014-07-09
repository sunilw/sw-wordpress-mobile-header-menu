/* show and hide the menu  */

module.exports = function() {
    var menu = window.swHeader.els.nav ;    
    
    var menuState = function() {
	return window.swHeader.settings.state.menuShowing ;
    } ;
    
    var switchMenuState = function() {
	if (window.swHeader.state.menuShowing == true) {
	    console.debug("menu is showing") ;
	} else if (window.swHeader.state.menuShowing == false)
	{
	    console.debug("menu is not showing") ;
	}
	else
	{
	    console.debug("we really don't know what is happening")
	}
    } ;
    
    switchMenuState() ;
}

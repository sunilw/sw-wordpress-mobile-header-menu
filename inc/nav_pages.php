<?php
/***
*  This template outputs the menu.
*
*
*/
?><nav class="sw-navigation-menu">
<?php
$args = array() ;
wp_list_pages($args) ;
?></nav>
<?php return  ; ?>

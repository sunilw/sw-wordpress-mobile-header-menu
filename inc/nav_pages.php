<?php
/***
*  This template outputs the menu.
*
*
*/
?><nav class="sw-navigation-menu">
<ul><?php
$args = array(
    'post_type'    => 'page',
    'title_li'             => '', 
) ;
wp_list_pages($args) ;
?></nav></ul>
<?php return  ; ?>

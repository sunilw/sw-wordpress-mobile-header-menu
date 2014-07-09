<?php
/*
 *   Plugin Name: SW Header Menu
 *  Version 0.0.1
 *  Author: Sunil Williams
 *  Author URI : http://sunil.co.nz
 *  License: GPL
 */

if  (!defined('ABSPATH')) {
    exit() ;
}

/*set up constants */
define( "SWHEADERMENU_DIR",  plugin_dir_path(__FILE__ ) ) ;
define( "SWHEADERMENU_URL",  plugin_dir_url(__FILE__ ) ) ;

/* load styles   */
function sw_header_menu_styles()
{
    // primary stylesheet
    wp_enqueue_style('sw-header-menu-styles',  SWHEADERMENU_URL . "/css/sw-header-menu-styles.css"  ) ;
}
add_action('wp_enqueue_scripts',  'sw_header_menu_styles');

/* load scripts */
function sw_header_menu_scripts()
{
       wp_enqueue_script(  'velocity', SWHEADERMENU_URL . "/js/jquery.velocity.min.js",  array('jquery')    );
    wp_enqueue_script(  'sw-header-menu-scripts', SWHEADERMENU_URL . "/js/swHeaderMenuBehaviours.js",  array('jquery', 'velocity')    );
    
}
add_action('wp_enqueue_scripts', 'sw_header_menu_scripts' );


/****
* display the toggling button
*/
function sw_header_showhide_button() {
    $button =  include(  SWHEADERMENU_DIR . "inc/showhide.php" ) ;
    echo $button ;
}
/***
* display the actual navigation menu
*/
function sw_header_menu_nav()
{
    $menu = include( SWHEADERMENU_DIR ."inc/nav_pages.php") ;
    echo $menu ;
}

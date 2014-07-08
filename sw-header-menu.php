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
    wp_enqueue_style('sw-header-menu-styles',  SWHEADERMENU_URL . "/css/sw-header-menu-styles.css"  ) ;
}
add_action('wp_enqueue_scripts',  'sw_header_menu_styles');

function sw_header_showhide_button() {
    $button =  include(  SWHEADERMENU_DIR . "inc/showhide.php" ) ;
    echo $button ;
}

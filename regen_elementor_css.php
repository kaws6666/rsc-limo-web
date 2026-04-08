<?php
// Bootstrap WordPress
define('ABSPATH', '/home7/rsclimoc/public_html/');
define('WPINC', 'wp-includes');

$_SERVER['HTTP_HOST']   = 'www.rsclimo.com.sg';
$_SERVER['REQUEST_URI'] = '/';

require_once '/home7/rsclimoc/public_html/wp-load.php';

if (!defined('ELEMENTOR_PATH')) {
    die("Elementor not loaded\n");
}

// Regenerate CSS for post 102 (header template) and post 2061 (homepage)
$posts = [102, 2061];

foreach ($posts as $post_id) {
    $css_file = \Elementor\Core\Files\CSS\Post::create($post_id);
    $css_file->update();
    echo "Regenerated CSS for post $post_id\n";
}

// Also clear Elementor CSS global cache
\Elementor\Plugin::$instance->files_manager->clear_cache();
echo "Global Elementor CSS cache cleared\n";

// Check the file was created
$css_path = WP_CONTENT_DIR . '/uploads/elementor/css/post-102.css';
if (file_exists($css_path)) {
    echo "post-102.css size: " . filesize($css_path) . " bytes\n";
} else {
    echo "WARNING: post-102.css still does not exist\n";
}

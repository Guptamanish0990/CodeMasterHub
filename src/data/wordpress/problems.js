// This is pure data export - NO React imports, NO "use client"
export const problems = {
  fresher: [
    {
      question: "Create a Custom Page Template",
      answer: "Create a PHP file in your theme folder named page-recent-posts.php. Add template header comment, use WP_Query to fetch recent posts, loop through posts and display title, date, and excerpt. Template will be selectable from WordPress admin when editing a page.",
      example: `<?php
/*
Template Name: Recent Posts List
*/

get_header(); ?>

<div class="recent-posts-template">
    <h1><?php the_title(); ?></h1>
    
    <?php
    $recent_posts = new WP_Query(array(
        'posts_per_page' => 10,
        'post_status' => 'publish',
        'ignore_sticky_posts' => 1
    ));
    
    if ($recent_posts->have_posts()) : ?>
        <ul class="recent-posts-list">
            <?php while ($recent_posts->have_posts()) : $recent_posts->the_post(); ?>
                <li>
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="post-meta">
                        <span>Posted on <?php echo get_the_date(); ?></span>
                        <span>By <?php the_author(); ?></span>
                    </div>
                    <div class="post-excerpt"><?php the_excerpt(); ?></div>
                </li>
            <?php endwhile; ?>
        </ul>
        <?php wp_reset_postdata(); ?>
    <?php else : ?>
        <p>No posts found.</p>
    <?php endif; ?>
</div>

<?php get_footer(); ?>`,
      output: "Custom page template displays 10 most recent posts with title, date, author, and excerpt"
    },
    {
      question: "Create a Shortcode Plugin",
      answer: "Create plugin folder and main PHP file. Use add_shortcode() function to register shortcode. Shortcode function returns greeting with optional name attribute. Plugin must have plugin header comment. Shortcodes can be used in posts, pages, or widgets. Always sanitize shortcode attributes using esc_html() or esc_attr() for security.",
      example: `<?php
/*
Plugin Name: Custom Greeting Shortcode
Description: Adds [greeting] shortcode to display personalized greeting
Version: 1.0
Author: Your Name
*/

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

function custom_greeting_shortcode($atts) {
    // Default attributes
    $atts = shortcode_atts(array(
        'name' => 'Visitor',
        'color' => 'blue',
        'size' => '16px'
    ), $atts);
    
    // Sanitize attributes
    $name = esc_html($atts['name']);
    $color = esc_attr($atts['color']);
    $size = esc_attr($atts['size']);
    
    // Get current time greeting
    $hour = current_time('H');
    if ($hour < 12) {
        $greeting = 'Good Morning';
    } elseif ($hour < 18) {
        $greeting = 'Good Afternoon';
    } else {
        $greeting = 'Good Evening';
    }
    
    // Return greeting HTML
    return sprintf(
        '<div class="custom-greeting" style="color: %s; font-size: %s;">
            <p>%s, %s! Welcome to our site.</p>
        </div>',
        $color,
        $size,
        $greeting,
        $name
    );
}
add_shortcode('greeting', 'custom_greeting_shortcode');

// Add settings link on plugins page
function greeting_plugin_action_links($links) {
    $settings_link = '<a href="options-general.php?page=greeting-settings">Settings</a>';
    array_unshift($links, $settings_link);
    return $links;
}
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'greeting_plugin_action_links');`,
      output: "Shortcode [greeting name='John'] displays 'Good Morning, John! Welcome to our site.' with styling"
    },
    {
      question: "Enqueue Custom Stylesheet in Child Theme",
      answer: "Create style.css in child theme folder with required header. Use wp_enqueue_scripts action hook to enqueue styles. Use get_stylesheet_directory_uri() for child theme path. Parent theme styles load automatically when child theme is activated. Child theme is safest way to modify theme; updates won't overwrite customizations.",
      example: `/* style.css - Child Theme Header */
/*
Theme Name: My Child Theme
Template: parent-theme-folder
Description: Custom child theme for modifications
Version: 1.0
*/

// functions.php in child theme
<?php
function child_theme_enqueue_styles() {
    // Enqueue parent theme style
    wp_enqueue_style(
        'parent-style',
        get_template_directory_uri() . '/style.css'
    );
    
    // Enqueue child theme custom styles
    wp_enqueue_style(
        'child-style',
        get_stylesheet_directory_uri() . '/custom.css',
        array('parent-style'),
        wp_get_theme()->get('Version')
    );
    
    // Enqueue mobile-specific styles
    wp_enqueue_style(
        'child-mobile-style',
        get_stylesheet_directory_uri() . '/mobile.css',
        array('child-style'),
        '1.0',
        '(max-width: 768px)'
    );
}
add_action('wp_enqueue_scripts', 'child_theme_enqueue_styles');

// Also enqueue custom JavaScript
function child_theme_enqueue_scripts() {
    wp_enqueue_script(
        'child-custom-js',
        get_stylesheet_directory_uri() . '/custom.js',
        array('jquery'),
        '1.0',
        true
    );
    
    // Localize script for AJAX
    wp_localize_script('child-custom-js', 'childAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('child_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'child_theme_enqueue_scripts');`,
      output: "Child theme styles load after parent theme, allowing CSS override without modifying parent files"
    },
    {
      question: "Add Custom Post Type",
      answer: "Use register_post_type() function in init action hook. Define labels, supports, public, show_in_rest parameters. Add custom taxonomy 'genre' using register_taxonomy(). Flush rewrite rules after registration. After registering custom post type, visit Settings > Permalinks to flush rewrite rules.",
      example: `<?php
function create_book_post_type() {
    $labels = array(
        'name'               => 'Books',
        'singular_name'      => 'Book',
        'menu_name'          => 'Books',
        'add_new'            => 'Add New Book',
        'add_new_item'       => 'Add New Book',
        'edit_item'          => 'Edit Book',
        'new_item'           => 'New Book',
        'view_item'          => 'View Book',
        'search_items'       => 'Search Books',
        'not_found'          => 'No books found',
        'not_found_in_trash' => 'No books found in trash'
    );
    
    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => array('slug' => 'books'),
        'capability_type'     => 'post',
        'has_archive'         => true,
        'hierarchical'        => false,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-book',
        'supports'            => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'),
        'show_in_rest'        => true, // Gutenberg support
        'taxonomies'          => array('category', 'post_tag')
    );
    
    register_post_type('book', $args);
}
add_action('init', 'create_book_post_type');

// Add custom taxonomy 'Genre'
function create_genre_taxonomy() {
    register_taxonomy(
        'genre',
        'book',
        array(
            'labels' => array(
                'name'              => 'Genres',
                'singular_name'     => 'Genre',
                'search_items'      => 'Search Genres',
                'all_items'         => 'All Genres',
                'parent_item'       => 'Parent Genre',
                'parent_item_colon' => 'Parent Genre:',
                'edit_item'         => 'Edit Genre',
                'update_item'       => 'Update Genre',
                'add_new_item'      => 'Add New Genre',
                'new_item_name'     => 'New Genre Name',
                'menu_name'         => 'Genres'
            ),
            'hierarchical'      => true,
            'public'            => true,
            'show_ui'           => true,
            'show_admin_column' => true,
            'query_var'         => true,
            'rewrite'           => array('slug' => 'genre'),
            'show_in_rest'      => true
        )
    );
}
add_action('init', 'create_genre_taxonomy', 0);`,
      output: "Books custom post type appears in admin menu with custom fields and genre taxonomy"
    },
    {
      question: "Create Custom Widget",
      answer: "Extend WP_Widget class. Implement constructor, widget(), form(), and update() methods. Register widget using register_widget() hook. Use WP_Query to fetch posts. Use get_the_post_thumbnail() for images. Always use wp_reset_postdata() after custom WP_Query to restore global post object.",
      example: `<?php
class Recent_Posts_Thumbnail_Widget extends WP_Widget {
    
    function __construct() {
        parent::__construct(
            'recent_posts_thumbnail',
            __('Recent Posts with Thumbnails', 'text_domain'),
            array('description' => __('Displays recent posts with featured images', 'text_domain'))
        );
    }
    
    public function widget($args, $instance) {
        echo $args['before_widget'];
        
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        
        $number = !empty($instance['number']) ? $instance['number'] : 5;
        $show_date = isset($instance['show_date']) ? $instance['show_date'] : false;
        
        $recent_posts = new WP_Query(array(
            'posts_per_page' => $number,
            'post_status' => 'publish',
            'ignore_sticky_posts' => 1
        ));
        
        if ($recent_posts->have_posts()) : ?>
            <ul class="recent-posts-widget">
                <?php while ($recent_posts->have_posts()) : $recent_posts->the_post(); ?>
                    <li>
                        <?php if (has_post_thumbnail()) : ?>
                            <a href="<?php the_permalink(); ?>" class="widget-thumbnail">
                                <?php the_post_thumbnail('thumbnail'); ?>
                            </a>
                        <?php endif; ?>
                        <div class="widget-post-content">
                            <h4><a href="<?php the_permalink(); ?>"><?php get_the_title() ? the_title() : the_ID(); ?></a></h4>
                            <?php if ($show_date) : ?>
                                <span class="post-date"><?php echo get_the_date(); ?></span>
                            <?php endif; ?>
                        </div>
                    </li>
                <?php endwhile; ?>
            </ul>
            <?php wp_reset_postdata();
        endif;
        
        echo $args['after_widget'];
    }
    
    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : __('Recent Posts', 'text_domain');
        $number = !empty($instance['number']) ? $instance['number'] : 5;
        $show_date = isset($instance['show_date']) ? (bool) $instance['show_date'] : false;
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>">
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('number'); ?>"><?php _e('Number of posts:'); ?></label>
            <input class="tiny-text" id="<?php echo $this->get_field_id('number'); ?>" name="<?php echo $this->get_field_name('number'); ?>" type="number" step="1" min="1" value="<?php echo esc_attr($number); ?>" size="3">
        </p>
        <p>
            <input class="checkbox" type="checkbox" <?php checked($show_date); ?> id="<?php echo $this->get_field_id('show_date'); ?>" name="<?php echo $this->get_field_name('show_date'); ?>">
            <label for="<?php echo $this->get_field_id('show_date'); ?>"><?php _e('Display post date?'); ?></label>
        </p>
        <?php
    }
    
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
        $instance['number'] = (int) $new_instance['number'];
        $instance['show_date'] = isset($new_instance['show_date']) ? (bool) $new_instance['show_date'] : false;
        return $instance;
    }
}

function register_recent_posts_widget() {
    register_widget('Recent_Posts_Thumbnail_Widget');
}
add_action('widgets_init', 'register_recent_posts_widget');`,
      output: "Widget displays recent posts with thumbnails, title, and optional date in widget areas"
    },
    {
      question: "Add Custom Meta Box",
      answer: "Use add_meta_boxes action to register meta box. Save meta data using save_post action. Display meta box content with custom fields. Use nonce for security. Retrieve meta values using get_post_meta(). Use underscore prefix (_meta_key) to hide meta box from custom fields list.",
      example: `<?php
// Add meta box
function add_custom_meta_box() {
    add_meta_box(
        'custom_post_meta',                 // ID
        'Additional Post Options',          // Title
        'display_custom_meta_box',          // Callback
        array('post', 'page'),              // Post types
        'normal',                           // Context
        'high'                              // Priority
    );
}
add_action('add_meta_boxes', 'add_custom_meta_box');

// Display meta box content
function display_custom_meta_box($post) {
    wp_nonce_field('custom_meta_box_nonce', 'meta_box_nonce');
    
    $subtitle = get_post_meta($post->ID, '_post_subtitle', true);
    $page_layout = get_post_meta($post->ID, '_page_layout', true);
    $custom_css = get_post_meta($post->ID, '_custom_css', true);
    $show_author = get_post_meta($post->ID, '_show_author_box', true);
    ?>
    <div class="custom-meta-box">
        <p>
            <label for="post_subtitle"><strong>Subtitle:</strong></label><br>
            <input type="text" name="post_subtitle" id="post_subtitle" class="widefat" value="<?php echo esc_attr($subtitle); ?>" placeholder="Enter post subtitle">
        </p>
        
        <p>
            <label for="page_layout"><strong>Page Layout:</strong></label><br>
            <select name="page_layout" id="page_layout">
                <option value="default" <?php selected($page_layout, 'default'); ?>>Default</option>
                <option value="full-width" <?php selected($page_layout, 'full-width'); ?>>Full Width</option>
                <option value="left-sidebar" <?php selected($page_layout, 'left-sidebar'); ?>>Left Sidebar</option>
                <option value="right-sidebar" <?php selected($page_layout, 'right-sidebar'); ?>>Right Sidebar</option>
            </select>
        </p>
        
        <p>
            <label><strong>Options:</strong></label><br>
            <input type="checkbox" name="show_author_box" id="show_author_box" value="1" <?php checked($show_author, 1); ?>>
            <label for="show_author_box">Show author bio box</label>
        </p>
        
        <p>
            <label for="custom_css"><strong>Custom CSS:</strong></label><br>
            <textarea name="custom_css" id="custom_css" rows="5" class="widefat code" placeholder=".post-content { color: #333; }"><?php echo esc_textarea($custom_css); ?></textarea>
        </p>
    </div>
    <?php
}

// Save meta data
function save_custom_meta_data($post_id) {
    // Check nonce
    if (!isset($_POST['meta_box_nonce']) || !wp_verify_nonce($_POST['meta_box_nonce'], 'custom_meta_box_nonce')) {
        return;
    }
    
    // Check autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    // Check permissions
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    // Save subtitle
    if (isset($_POST['post_subtitle'])) {
        update_post_meta($post_id, '_post_subtitle', sanitize_text_field($_POST['post_subtitle']));
    }
    
    // Save page layout
    if (isset($_POST['page_layout'])) {
        update_post_meta($post_id, '_page_layout', sanitize_text_field($_POST['page_layout']));
    }
    
    // Save author box option
    $show_author = isset($_POST['show_author_box']) ? 1 : 0;
    update_post_meta($post_id, '_show_author_box', $show_author);
    
    // Save custom CSS
    if (isset($_POST['custom_css'])) {
        update_post_meta($post_id, '_custom_css', wp_strip_all_tags($_POST['custom_css']));
    }
}
add_action('save_post', 'save_custom_meta_data');

// Display meta data in frontend
function display_post_subtitle() {
    if (is_single()) {
        $subtitle = get_post_meta(get_the_ID(), '_post_subtitle', true);
        if ($subtitle) {
            echo '<div class="post-subtitle">' . esc_html($subtitle) . '</div>';
        }
    }
}
add_action('the_content', 'display_post_subtitle');`,
      output: "Meta box appears in post editor with subtitle, layout selector, and custom CSS fields"
    },
    {
      question: "Create Custom REST API Endpoint",
      answer: "Use register_rest_route() function in rest_api_init hook. Define endpoint route, callback function, and permission callback. Return WP_REST_Response object. Support pagination with per_page and page parameters. Use permission_callback to restrict access to sensitive endpoints.",
      example: `<?php
// Register custom REST API endpoint
function register_custom_api_endpoints() {
    register_rest_route('custom/v1', '/recent-posts', array(
        'methods' => 'GET',
        'callback' => 'get_recent_posts_api',
        'permission_callback' => '__return_true',
        'args' => array(
            'per_page' => array(
                'default' => 10,
                'sanitize_callback' => 'absint'
            ),
            'page' => array(
                'default' => 1,
                'sanitize_callback' => 'absint'
            ),
            'category' => array(
                'required' => false,
                'sanitize_callback' => 'absint'
            )
        )
    ));
    
    register_rest_route('custom/v1', '/post-meta/(?P<id>\\d+)', array(
        'methods' => 'GET',
        'callback' => 'get_post_meta_api',
        'permission_callback' => function() {
            return current_user_can('edit_posts');
        },
        'args' => array(
            'id' => array(
                'required' => true,
                'validate_callback' => function($param) {
                    return is_numeric($param);
                }
            )
        )
    ));
}
add_action('rest_api_init', 'register_custom_api_endpoints');

// Callback for recent posts endpoint
function get_recent_posts_api($request) {
    $per_page = $request->get_param('per_page');
    $page = $request->get_param('page');
    $category = $request->get_param('category');
    
    $args = array(
        'posts_per_page' => $per_page,
        'paged' => $page,
        'post_status' => 'publish'
    );
    
    if ($category) {
        $args['cat'] = $category;
    }
    
    $query = new WP_Query($args);
    $posts_data = array();
    
    foreach ($query->posts as $post) {
        $posts_data[] = array(
            'id' => $post->ID,
            'title' => get_the_title($post),
            'excerpt' => get_the_excerpt($post),
            'date' => get_the_date('c', $post),
            'modified' => get_the_modified_date('c', $post),
            'author' => get_the_author_meta('display_name', $post->post_author),
            'featured_image' => get_the_post_thumbnail_url($post, 'large'),
            'categories' => get_the_category($post->ID),
            'tags' => get_the_tags($post->ID),
            'custom_fields' => array(
                'subtitle' => get_post_meta($post->ID, '_post_subtitle', true),
                'views' => (int) get_post_meta($post->ID, '_post_views', true)
            ),
            'link' => get_permalink($post)
        );
    }
    
    $response = new WP_REST_Response($posts_data);
    $response->header('X-WP-Total', $query->found_posts);
    $response->header('X-WP-TotalPages', $query->max_num_pages);
    
    return $response;
}

// Callback for single post meta
function get_post_meta_api($request) {
    $post_id = $request->get_param('id');
    $post = get_post($post_id);
    
    if (!$post) {
        return new WP_Error('no_post', 'Post not found', array('status' => 404));
    }
    
    $custom_fields = get_post_meta($post_id);
    
    // Remove protected and serialized fields
    foreach ($custom_fields as $key => $value) {
        if (is_serialized($value[0]) || strpos($key, '_wp') === 0) {
            unset($custom_fields[$key]);
        } else {
            $custom_fields[$key] = maybe_unserialize($value[0]);
        }
    }
    
    return array(
        'id' => $post_id,
        'title' => get_the_title($post),
        'custom_fields' => $custom_fields
    );
}

// Add custom endpoint to track post views
function track_post_view() {
    if (is_single()) {
        $post_id = get_the_ID();
        $views = get_post_meta($post_id, '_post_views', true);
        $views = empty($views) ? 1 : $views + 1;
        update_post_meta($post_id, '_post_views', $views);
    }
}
add_action('wp_head', 'track_post_view');`,
      output: "REST API endpoints at /wp-json/custom/v1/recent-posts and /wp-json/custom/v1/post-meta/{id}"
    },
    {
      question: "Create Custom Cron Job",
      answer: "Use wp_schedule_event() to schedule cron job. Create custom function for cleanup tasks. Add action hook for scheduled event. Check schedule status with wp_get_schedule(). Clear schedule on plugin deactivation. Test cron jobs by visiting WP-Cron manually: example.com/wp-cron.php?doing_wp_cron",
      example: `<?php
// Schedule cron job on plugin activation
function custom_cron_activation() {
    if (!wp_next_scheduled('custom_daily_cleanup')) {
        wp_schedule_event(time(), 'daily', 'custom_daily_cleanup');
    }
}
register_activation_hook(__FILE__, 'custom_cron_activation');

// Clear cron job on plugin deactivation
function custom_cron_deactivation() {
    $timestamp = wp_next_scheduled('custom_daily_cleanup');
    if ($timestamp) {
        wp_unschedule_event($timestamp, 'custom_daily_cleanup');
    }
}
register_deactivation_hook(__FILE__, 'custom_cron_deactivation');

// Add custom cron schedule (optional)
function add_custom_cron_schedules($schedules) {
    $schedules['twicedaily'] = array(
        'interval' => 43200, // 12 hours
        'display' => __('Twice Daily')
    );
    
    $schedules['weekly'] = array(
        'interval' => 604800, // 7 days
        'display' => __('Once Weekly')
    );
    
    return $schedules;
}
add_filter('cron_schedules', 'add_custom_cron_schedules');

// Cron job callback function
function custom_daily_cleanup() {
    global $wpdb;
    
    // 1. Clean expired transients
    $expired_count = 0;
    $expired_transients = $wpdb->get_results(
        "SELECT option_name FROM {$wpdb->options} 
         WHERE option_name LIKE '_transient_timeout_%' 
         AND option_value < UNIX_TIMESTAMP()"
    );
    
    foreach ($expired_transients as $transient) {
        $transient_name = str_replace('_transient_timeout_', '', $transient->option_name);
        delete_transient($transient_name);
        $expired_count++;
    }
    
    // 2. Delete old post revisions (older than 30 days)
    $revisions_deleted = $wpdb->query(
        "DELETE FROM {$wpdb->posts} 
         WHERE post_type = 'revision' 
         AND post_modified_gmt < DATE_SUB(NOW(), INTERVAL 30 DAY)"
    );
    
    // 3. Delete spam comments older than 7 days
    $spam_deleted = $wpdb->query(
        "DELETE FROM {$wpdb->comments} 
         WHERE comment_approved = 'spam' 
         AND comment_date_gmt < DATE_SUB(NOW(), INTERVAL 7 DAY)"
    );
    
    // 4. Generate report and log
    $report = array(
        'timestamp' => current_time('mysql'),
        'expired_transients' => $expired_count,
        'revisions_deleted' => $revisions_deleted,
        'spam_comments_deleted' => $spam_deleted,
        'memory_usage' => memory_get_usage() / 1024 / 1024 . ' MB'
    );
    
    // Save report as option
    $reports = get_option('custom_cleanup_reports', array());
    array_unshift($reports, $report);
    $reports = array_slice($reports, 0, 30); // Keep last 30 reports
    update_option('custom_cleanup_reports', $reports);
    
    // Send email notification if needed
    if ($expired_count > 100 || $revisions_deleted > 500) {
        wp_mail(
            get_option('admin_email'),
            'Cron Job Cleanup Report',
            print_r($report, true)
        );
    }
    
    // Log to file for debugging
    $log_entry = date('Y-m-d H:i:s') . " - Cleaned {$expired_count} transients, {$revisions_deleted} revisions\\n";
    file_put_contents(WP_CONTENT_DIR . '/cron-cleanup.log', $log_entry, FILE_APPEND);
}
add_action('custom_daily_cleanup', 'custom_daily_cleanup');

// Add manual trigger button in admin
function add_cron_trigger_admin_page() {
    add_submenu_page(
        'tools.php',
        'Cron Job Manager',
        'Cron Manager',
        'manage_options',
        'cron-manager',
        'cron_manager_page'
    );
}
add_action('admin_menu', 'add_cron_trigger_admin_page');

function cron_manager_page() {
    if (isset($_POST['manual_cleanup'])) {
        check_admin_referer('cron_cleanup_action');
        custom_daily_cleanup();
        echo '<div class="notice notice-success"><p>Manual cleanup completed!</p></div>';
    }
    ?>
    <div class="wrap">
        <h1>Cron Job Manager</h1>
        
        <form method="post">
            <?php wp_nonce_field('cron_cleanup_action'); ?>
            <input type="submit" name="manual_cleanup" class="button button-primary" value="Run Cleanup Now">
        </form>
        
        <h2>Scheduled Events</h2>
        <table class="widefat striped">
            <thead>
                <tr><th>Hook</th><th>Next Execution</th><th>Schedule</th></tr>
            </thead>
            <tbody>
                <?php
                $cron_jobs = _get_cron_array();
                foreach ($cron_jobs as $timestamp => $jobs) {
                    foreach ($jobs as $hook => $details) {
                        echo '<tr>';
                        echo '<td>' . esc_html($hook) . '</td>';
                        echo '<td>' . date('Y-m-d H:i:s', $timestamp) . '</td>';
                        echo '<td>' . esc_html(key($details['schedule'])) . '</td>';
                        echo '</tr>';
                    }
                }
                ?>
            </tbody>
        </table>
        
        <h2>Recent Cleanup Reports</h2>
        <?php
        $reports = get_option('custom_cleanup_reports', array());
        if ($reports) {
            echo '<table class="widefat striped">';
            echo '<thead><tr><th>Time</th><th>Transients</th><th>Revisions</th><th>Spam</th><th>Memory</th></tr></thead><tbody>';
            foreach ($reports as $report) {
                echo '<tr>';
                echo '<td>' . esc_html($report['timestamp']) . '</td>';
                echo '<td>' . intval($report['expired_transients']) . '</td>';
                echo '<td>' . intval($report['revisions_deleted']) . '</td>';
                echo '<td>' . intval($report['spam_comments_deleted']) . '</td>';
                echo '<td>' . esc_html($report['memory_usage']) . '</td>';
                echo '</tr>';
            }
            echo '</tbody></table>';
        } else {
            echo '<p>No reports yet.</p>';
        }
        ?>
    </div>
    <?php
}`,
      output: "Daily cleanup removes expired transients, old revisions, and spam comments with logging"
    }
  ],

  experienced: [
    {
      question: "Create Custom Gutenberg Block",
      answer: "Use @wordpress/create-block or registerBlockType in JavaScript. Register block in PHP with register_block_type. Use WP_Query to fetch posts in block render callback. Support inspector controls for customization. Dynamic blocks (save: null) allow PHP rendering for fresh content on each page load.",
      example: `// Plugin main file - gutenberg-latest-posts.php
<?php
/**
 * Plugin Name: Latest Posts Gutenberg Block
 * Description: Custom block to display latest posts
 * Version: 1.0
 */

// Register block assets
function register_latest_posts_block() {
    wp_register_script(
        'latest-posts-block-editor',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );
    
    wp_register_style(
        'latest-posts-block-style',
        plugins_url('style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );
    
    register_block_type('custom/latest-posts', array(
        'editor_script' => 'latest-posts-block-editor',
        'style' => 'latest-posts-block-style',
        'render_callback' => 'render_latest_posts_block'
    ));
}
add_action('init', 'register_latest_posts_block');

// Block render callback (PHP)
function render_latest_posts_block($attributes) {
    $posts_per_page = isset($attributes['postsToShow']) ? $attributes['postsToShow'] : 3;
    $show_excerpt = isset($attributes['showExcerpt']) ? $attributes['showExcerpt'] : true;
    $show_date = isset($attributes['showDate']) ? $attributes['showDate'] : true;
    $show_image = isset($attributes['showImage']) ? $attributes['showImage'] : true;
    
    $args = array(
        'posts_per_page' => $posts_per_page,
        'post_status' => 'publish',
        'post_type' => 'post'
    );
    
    $query = new WP_Query($args);
    
    if (!$query->have_posts()) {
        return '<p>No posts found.</p>';
    }
    
    ob_start();
    ?>
    <div class="latest-posts-block columns-<?php echo esc_attr($attributes['columns'] ?? 1); ?>">
        <?php while ($query->have_posts()) : $query->the_post(); ?>
            <div class="latest-post-item">
                <?php if ($show_image && has_post_thumbnail()) : ?>
                    <a href="<?php the_permalink(); ?>" class="post-thumbnail">
                        <?php the_post_thumbnail('medium'); ?>
                    </a>
                <?php endif; ?>
                
                <div class="post-content">
                    <h3 class="post-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>
                    
                    <?php if ($show_date) : ?>
                        <div class="post-meta">
                            <span class="post-date"><?php echo get_the_date(); ?></span>
                            <span class="post-author">By <?php the_author(); ?></span>
                        </div>
                    <?php endif; ?>
                    
                    <?php if ($show_excerpt) : ?>
                        <div class="post-excerpt"><?php the_excerpt(); ?></div>
                    <?php endif; ?>
                    
                    <a href="<?php the_permalink(); ?>" class="read-more">Read More →</a>
                </div>
            </div>
        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
    </div>
    
    <style>
        .latest-posts-block {
            display: grid;
            gap: 30px;
            margin: 20px 0;
        }
        .latest-posts-block.columns-1 { grid-template-columns: 1fr; }
        .latest-posts-block.columns-2 { grid-template-columns: repeat(2, 1fr); }
        .latest-posts-block.columns-3 { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 768px) {
            .latest-posts-block.columns-2,
            .latest-posts-block.columns-3 {
                grid-template-columns: 1fr;
            }
        }
        .latest-post-item {
            border: 1px solid #eee;
            padding: 20px;
            border-radius: 8px;
            transition: transform 0.2s;
        }
        .latest-post-item:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .post-thumbnail img { width: 100%; height: 200px; object-fit: cover; border-radius: 5px; }
        .post-title { margin: 15px 0 10px; font-size: 1.2em; }
        .post-meta { font-size: 0.85em; color: #666; margin-bottom: 10px; }
        .post-excerpt { margin-bottom: 15px; line-height: 1.5; color: #444; }
        .read-more { display: inline-block; color: #0073aa; text-decoration: none; font-weight: 500; }
    </style>
    <?php
    return ob_get_clean();
}`,
      output: "Custom Gutenberg block appears in editor with settings panel, displays latest posts on frontend"
    },
    {
      question: "Build Plugin with Custom REST API Endpoint",
      answer: "Use register_rest_route with custom callback. Gather data using WordPress functions like wp_count_posts(), count_users(), wp_count_comments(). Add authentication using permission_callback. Return JSON response with site stats. Use caching headers to reduce database load on frequently accessed endpoints.",
      example: `<?php
/**
 * Plugin Name: Site Stats REST API
 * Description: Adds /wp-json/custom/v1/stats endpoint for site statistics
 * Version: 1.0
 */

// Register REST API endpoint
function register_stats_endpoint() {
    register_rest_route('custom/v1', '/stats', array(
        'methods' => 'GET',
        'callback' => 'get_site_stats',
        'permission_callback' => 'stats_permission_check'
    ));
    
    register_rest_route('custom/v1', '/stats/(?P<type>[a-z]+)', array(
        'methods' => 'GET',
        'callback' => 'get_specific_stats',
        'permission_callback' => 'stats_permission_check',
        'args' => array(
            'type' => array(
                'required' => true,
                'validate_callback' => function($param) {
                    return in_array($param, array('posts', 'users', 'comments', 'pages'));
                }
            )
        )
    ));
}
add_action('rest_api_init', 'register_stats_endpoint');

// Permission callback
function stats_permission_check($request) {
    // Allow public access (change to 'manage_options' for admin only)
    return true;
}

// Get all site stats
function get_site_stats() {
    // Get post counts
    $post_counts = wp_count_posts();
    $page_counts = wp_count_posts('page');
    
    // Get user counts
    $user_counts = count_users();
    
    // Get comment counts
    $comment_counts = wp_count_comments();
    
    // Get category and tag counts
    $category_count = wp_count_terms('category');
    $tag_count = wp_count_terms('post_tag');
    
    // Get total registered menus
    $menus = wp_get_nav_menus();
    
    // Get theme info
    $theme = wp_get_theme();
    
    // Calculate site age
    $first_post = get_posts(array(
        'post_type' => 'any',
        'posts_per_page' => 1,
        'orderby' => 'date',
        'order' => 'ASC'
    ));
    
    $site_age = !empty($first_post) ? human_time_diff(strtotime($first_post[0]->post_date), current_time('timestamp')) : 'Unknown';
    
    // Get active plugins count
    $active_plugins = get_option('active_plugins', array());
    $plugins_count = count($active_plugins);
    
    // Prepare response
    $stats = array(
        'timestamp' => current_time('mysql'),
        'site' => array(
            'name' => get_bloginfo('name'),
            'url' => home_url(),
            'description' => get_bloginfo('description'),
            'version' => get_bloginfo('version'),
            'language' => get_bloginfo('language'),
            'timezone' => wp_timezone_string(),
            'site_age' => $site_age,
            'theme' => $theme->get('Name'),
            'active_plugins' => $plugins_count
        ),
        'content' => array(
            'posts' => array(
                'total' => (int) $post_counts->publish,
                'draft' => (int) $post_counts->draft,
                'pending' => (int) $post_counts->pending,
                'trash' => (int) $post_counts->trash
            ),
            'pages' => array(
                'total' => (int) $page_counts->publish,
                'draft' => (int) $page_counts->draft
            ),
            'categories' => (int) $category_count,
            'tags' => (int) $tag_count
        ),
        'users' => array(
            'total' => $user_counts['total_users'],
            'admins' => isset($user_counts['avail_roles']['administrator']) ? $user_counts['avail_roles']['administrator'] : 0
        ),
        'comments' => array(
            'total' => (int) $comment_counts->total_comments,
            'approved' => (int) $comment_counts->approved,
            'pending' => (int) $comment_counts->moderated,
            'spam' => (int) $comment_counts->spam
        ),
        'menus' => count($menus),
        'attachments' => wp_count_attachments()->total
    );
    
    // Add cache headers
    $response = new WP_REST_Response($stats, 200);
    $response->header('Cache-Control', 'public, max-age=3600');
    
    return $response;
}

// Get specific stats by type
function get_specific_stats($request) {
    $type = $request->get_param('type');
    $stats = get_site_stats();
    
    if (isset($stats[$type])) {
        return new WP_REST_Response($stats[$type], 200);
    }
    
    return new WP_Error('invalid_type', 'Invalid statistics type', array('status' => 400));
}

// Add admin dashboard widget
function add_stats_dashboard_widget() {
    wp_add_dashboard_widget(
        'site_stats_widget',
        'Site Statistics',
        'display_stats_widget'
    );
}
add_action('wp_dashboard_setup', 'add_stats_dashboard_widget');

function display_stats_widget() {
    $stats = get_site_stats();
    ?>
    <div class="site-stats-widget">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
            <div style="text-align: center; padding: 10px; background: #f0f6fc; border-radius: 8px;">
                <strong style="font-size: 24px;"><?php echo $stats['content']['posts']['total']; ?></strong>
                <p>Posts</p>
            </div>
            <div style="text-align: center; padding: 10px; background: #f0f6fc; border-radius: 8px;">
                <strong style="font-size: 24px;"><?php echo $stats['users']['total']; ?></strong>
                <p>Users</p>
            </div>
            <div style="text-align: center; padding: 10px; background: #f0f6fc; border-radius: 8px;">
                <strong style="font-size: 24px;"><?php echo $stats['comments']['total']; ?></strong>
                <p>Comments</p>
            </div>
            <div style="text-align: center; padding: 10px; background: #f0f6fc; border-radius: 8px;">
                <strong style="font-size: 24px;"><?php echo $stats['attachments']; ?></strong>
                <p>Media</p>
            </div>
        </div>
        <p style="margin-top: 10px; font-size: 12px; color: #666;">
            Last updated: <?php echo $stats['timestamp']; ?>
        </p>
    </div>
    <?php
}

// Add settings page for API key
function add_stats_settings_page() {
    add_options_page(
        'Site Stats API Settings',
        'Site Stats API',
        'manage_options',
        'site-stats-settings',
        'render_stats_settings_page'
    );
}
add_action('admin_menu', 'add_stats_settings_page');

function render_stats_settings_page() {
    if (isset($_POST['submit'])) {
        update_option('stats_api_key', sanitize_text_field($_POST['api_key']));
        echo '<div class="notice notice-success"><p>Settings saved!</p></div>';
    }
    $api_key = get_option('stats_api_key', '');
    ?>
    <div class="wrap">
        <h1>Site Stats API Settings</h1>
        <form method="post">
            <table class="form-table">
                <tr>
                    <th><label for="api_key">API Key</label></th>
                    <td>
                        <input type="text" id="api_key" name="api_key" class="regular-text" value="<?php echo esc_attr($api_key); ?>">
                        <p class="description">Set a custom API key for authentication</p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
        <h2>API Usage</h2>
        <code>GET <?php echo rest_url('custom/v1/stats'); ?></code>
    </div>
    <?php
}`,
      output: "REST endpoint returns comprehensive site statistics including posts count, users, comments, categories"
    }
  ]
};

export default problems;
export const questions = [
  { 
    line: "the_post_thumbnail()", 
    explanation: "Displays the featured image of the current post in the loop.", 
    example: "<?php if (has_post_thumbnail()) : the_post_thumbnail('large'); endif; ?>", 
    output: "HTML image tag with featured image URL and attributes." 
  },
  { 
    line: "the_title()", 
    explanation: "Displays or returns the title of the current post.", 
    example: "<h2><?php the_title(); ?></h2>", 
    output: "Post title wrapped in heading tags." 
  },
  { 
    line: "the_permalink()", 
    explanation: "Displays the permanent URL of the current post.", 
    example: "<a href='<?php the_permalink(); ?>'>Read more</a>", 
    output: "Permalink URL to the single post page." 
  },
  { 
    line: "the_content()", 
    explanation: "Displays the full content of the current post.", 
    example: "<div class='entry-content'><?php the_content(); ?></div>", 
    output: "Post content with HTML formatting applied." 
  },
  { 
    line: "the_excerpt()", 
    explanation: "Displays the excerpt of the current post (first 55 words).", 
    example: "<?php the_excerpt(); ?>", 
    output: "Shortened post content with '[...]' at the end." 
  },
  { 
    line: "has_post_thumbnail()", 
    explanation: "Checks if the current post has a featured image set.", 
    example: "<?php if (has_post_thumbnail()) : the_post_thumbnail(); endif; ?>", 
    output: "Conditional check returns true or false." 
  },
  { 
    line: "get_the_date()", 
    explanation: "Returns the publication date of the current post.", 
    example: "<?php echo get_the_date('F j, Y'); ?>", 
    output: "Formatted date like 'January 15, 2024'." 
  },
  { 
    line: "the_author()", 
    explanation: "Displays the author name of the current post.", 
    example: "By <?php the_author(); ?>", 
    output: "Author's display name." 
  },
  { 
    line: "the_category()", 
    explanation: "Displays the categories of the current post as links.", 
    example: "<?php the_category(', '); ?>", 
    output: "Comma-separated category links." 
  },
  { 
    line: "the_tags()", 
    explanation: "Displays the tags of the current post with optional prefix.", 
    example: "<?php the_tags('Tags: ', ', '); ?>", 
    output: "Tags: tag1, tag2, tag3 with links." 
  },
  { 
    line: "edit_post_link()", 
    explanation: "Displays edit link for current post (visible to logged-in users).", 
    example: "<?php edit_post_link('Edit', '<span>', '</span>'); ?>", 
    output: "'Edit' link for users with edit permissions." 
  },
  { 
    line: "comments_template()", 
    explanation: "Loads the comments template file (comments.php).", 
    example: "<?php comments_template(); ?>", 
    output: "Comments form and comment list." 
  },
  { 
    line: "wp_nav_menu()", 
    explanation: "Displays a navigation menu registered in functions.php.", 
    example: "<?php wp_nav_menu(array('theme_location' => 'primary')); ?>", 
    output: "HTML unordered list of menu items." 
  },
  { 
    line: "dynamic_sidebar()", 
    explanation: "Displays a registered widget area (sidebar).", 
    example: "<?php dynamic_sidebar('main-sidebar'); ?>", 
    output: "Widgets content in the specified sidebar area." 
  },
  { 
    line: "is_active_sidebar()", 
    explanation: "Checks if a sidebar has any active widgets.", 
    example: "<?php if (is_active_sidebar('footer-1')) : dynamic_sidebar('footer-1'); endif; ?>", 
    output: "Conditional check before displaying sidebar." 
  },
  { 
    line: "register_sidebar()", 
    explanation: "Registers a widget area in functions.php.", 
    example: "register_sidebar(array('name' => 'Main Sidebar', 'id' => 'main-sidebar'));", 
    output: "Widget area appears in Appearance > Widgets." 
  },
  { 
    line: "add_theme_support()", 
    explanation: "Adds theme features like post thumbnails, custom logo, etc.", 
    example: "add_theme_support('post-thumbnails'); add_theme_support('custom-logo');", 
    output: "Theme features enabled in WordPress." 
  },
  { 
    line: "add_image_size()", 
    explanation: "Registers custom image size for WordPress to generate on upload.", 
    example: "add_image_size('featured', 1920, 600, true);", 
    output: "New image size available in media library and templates." 
  },
  { 
    line: "register_nav_menus()", 
    explanation: "Registers navigation menu locations in functions.php.", 
    example: "register_nav_menus(array('primary' => 'Primary Menu', 'footer' => 'Footer Menu'));", 
    output: "Menu locations appear in Appearance > Menus." 
  },
  { 
    line: "wp_enqueue_style()", 
    explanation: "Properly enqueues CSS stylesheet in WordPress.", 
    example: "wp_enqueue_style('my-style', get_template_directory_uri() . '/css/style.css', array(), '1.0.0');", 
    output: "CSS file loaded with proper dependencies and version." 
  },
  { 
    line: "wp_enqueue_script()", 
    explanation: "Properly enqueues JavaScript file in WordPress.", 
    example: "wp_enqueue_script('my-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0', true);", 
    output: "Script added to footer with jQuery dependency." 
  },
  { 
    line: "wp_localize_script()", 
    explanation: "Passes PHP data to JavaScript file.", 
    example: "wp_localize_script('my-script', 'my_ajax', array('ajax_url' => admin_url('admin-ajax.php')));", 
    output: "JavaScript variable 'my_ajax' available with PHP data." 
  },
  { 
    line: "add_action()", 
    explanation: "Hooks a function to a specific action in WordPress.", 
    example: "add_action('init', 'register_custom_post_type');", 
    output: "Function runs when init action fires." 
  },
  { 
    line: "add_filter()", 
    explanation: "Hooks a function to modify data before display or save.", 
    example: "add_filter('the_title', 'modify_title_function');", 
    output: "Post titles modified before display." 
  },
  { 
    line: "do_action()", 
    explanation: "Creates a custom action hook for other functions to attach to.", 
    example: "do_action('my_custom_hook', $data);", 
    output: "Custom hook created for extensibility." 
  },
  { 
    line: "apply_filters()", 
    explanation: "Creates a custom filter hook that returns modified data.", 
    example: "$value = apply_filters('my_custom_filter', $value);", 
    output: "Data can be modified by other functions." 
  },
  { 
    line: "add_shortcode()", 
    explanation: "Registers a custom shortcode for use in posts/pages.", 
    example: "add_shortcode('greeting', function() { return 'Hello World'; });", 
    output: "[greeting] displays 'Hello World' in content." 
  },
  { 
    line: "register_post_type()", 
    explanation: "Creates a custom post type in WordPress.", 
    example: "register_post_type('book', array('public' => true, 'labels' => array('name' => 'Books')));", 
    output: "Books section appears in admin menu." 
  },
  { 
    line: "register_taxonomy()", 
    explanation: "Creates a custom taxonomy for grouping posts.", 
    example: "register_taxonomy('genre', 'book', array('hierarchical' => true, 'labels' => array('name' => 'Genres')));", 
    output: "Genre taxonomy appears in Book edit screen." 
  },
  { 
    line: "WP_Query()", 
    explanation: "Creates custom database query for WordPress posts.", 
    example: "$query = new WP_Query(array('post_type' => 'book', 'posts_per_page' => 10));", 
    output: "Custom loop with 10 books." 
  },
  { 
    line: "get_posts()", 
    explanation: "Returns array of posts without setting up global post data.", 
    example: "$posts = get_posts(array('post_type' => 'book', 'posts_per_page' => 5));", 
    output: "Array of WP_Post objects." 
  },
  { 
    line: "wp_reset_postdata()", 
    explanation: "Restores global post data to main query after custom WP_Query.", 
    example: "$query = new WP_Query($args); while($query->have_posts()) { $query->the_post(); } wp_reset_postdata();", 
    output: "Global post data restored to original." 
  },
  { 
    line: "get_post_meta()", 
    explanation: "Retrieves custom field value for a post.", 
    example: "$author = get_post_meta($post_id, '_book_author', true);", 
    output: "Returns author name string." 
  },
  { 
    line: "update_post_meta()", 
    explanation: "Updates or adds custom field value for a post.", 
    example: "update_post_meta($post_id, '_book_price', 29.99);", 
    output: "Meta value updated in database." 
  },
  { 
    line: "add_meta_box()", 
    explanation: "Adds custom meta box to post edit screen.", 
    example: "add_meta_box('book_details', 'Book Details', 'render_book_meta', 'book', 'normal', 'high');", 
    output: "Meta box appears in post editor." 
  },
  { 
    line: "wp_nonce_field()", 
    explanation: "Adds security nonce field to forms for verification.", 
    example: "wp_nonce_field('save_book_action', 'book_nonce');", 
    output: "Hidden nonce field added to form." 
  },
  { 
    line: "wp_verify_nonce()", 
    explanation: "Verifies nonce for security before processing form data.", 
    example: "if (!wp_verify_nonce($_POST['book_nonce'], 'save_book_action')) die('Security check failed');", 
    output: "Returns true or false for nonce verification." 
  },
  { 
    line: "current_user_can()", 
    explanation: "Checks if current user has specific capability.", 
    example: "if (current_user_can('edit_posts')) { echo 'User can edit posts'; }", 
    output: "Conditional check for user permissions." 
  },
  { 
    line: "is_admin()", 
    explanation: "Checks if current page is in WordPress admin area.", 
    example: "if (!is_admin()) { wp_enqueue_script('frontend-script'); }", 
    output: "Returns true on admin pages, false on frontend." 
  },
  { 
    line: "is_single()", 
    explanation: "Checks if single post page is being displayed.", 
    example: "if (is_single()) { echo 'This is a single post'; }", 
    output: "True on single blog post pages." 
  },
  { 
    line: "is_page()", 
    explanation: "Checks if page is being displayed.", 
    example: "if (is_page('about')) { echo 'About page'; }", 
    output: "True on static page views." 
  },
  { 
    line: "is_home()", 
    explanation: "Checks if main blog page is being displayed.", 
    example: "if (is_home()) { echo 'Blog homepage'; }", 
    output: "True on posts index page." 
  },
  { 
    line: "is_front_page()", 
    explanation: "Checks if front page of site is being displayed.", 
    example: "if (is_front_page()) { echo 'Welcome to homepage'; }", 
    output: "True on site's front page (static or blog)." 
  },
  { 
    line: "is_archive()", 
    explanation: "Checks if any archive page is being displayed.", 
    example: "if (is_archive()) { echo 'Archive page'; }", 
    output: "True on category, tag, author, date archives." 
  },
  { 
    line: "is_search()", 
    explanation: "Checks if search results page is being displayed.", 
    example: "if (is_search()) { echo 'Search results for: ' . get_search_query(); }", 
    output: "True on search results page." 
  },
  { 
    line: "get_template_part()", 
    explanation: "Includes template file with child theme override support.", 
    example: "get_template_part('template-parts/content', 'single');", 
    output: "Includes content-single.php from child or parent theme." 
  },
  { 
    line: "locate_template()", 
    explanation: "Finds template file in child/parent theme hierarchy.", 
    example: "$template = locate_template(array('custom-template.php', 'index.php'));", 
    output: "Returns path to first existing template." 
  },
  { 
    line: "get_sidebar()", 
    explanation: "Includes sidebar.php template file.", 
    example: "<?php get_sidebar(); ?>", 
    output: "Sidebar template content." 
  },
  { 
    line: "get_footer()", 
    explanation: "Includes footer.php template file.", 
    example: "<?php get_footer(); ?>", 
    output: "Footer template content." 
  },
  { 
    line: "get_header()", 
    explanation: "Includes header.php template file.", 
    example: "<?php get_header(); ?>", 
    output: "Header template content." 
  },
  { 
    line: "bloginfo()", 
    explanation: "Displays site information from WordPress settings.", 
    example: "bloginfo('name'); bloginfo('description');", 
    output: "Site title and tagline." 
  },
  { 
    line: "wp_head()", 
    explanation: "Hook that outputs scripts/styles before closing head tag.", 
    example: "<?php wp_head(); ?>", 
    output: "Plugin and theme scripts inserted in head." 
  },
  { 
    line: "wp_footer()", 
    explanation: "Hook that outputs scripts before closing body tag.", 
    example: "<?php wp_footer(); ?>", 
    output: "JavaScript files loaded in footer." 
  },
  { 
    line: "home_url()", 
    explanation: "Returns the site home URL (front page address).", 
    example: "<a href='<?php echo home_url(); ?>'>Home</a>", 
    output: "https://example.com or custom front page URL." 
  },
  { 
    line: "site_url()", 
    explanation: "Returns the WordPress installation URL (core files location).", 
    example: "$ajax_url = admin_url('admin-ajax.php');", 
    output: "URL to WordPress admin-ajax.php file." 
  },
  { 
    line: "get_template_directory_uri()", 
    explanation: "Returns URL of the active theme directory.", 
    example: "get_template_directory_uri() . '/css/style.css'", 
    output: "https://example.com/wp-content/themes/mytheme/css/style.css" 
  },
  { 
    line: "get_stylesheet_uri()", 
    explanation: "Returns URL of the main style.css file (child theme aware).", 
    example: "wp_enqueue_style('theme-style', get_stylesheet_uri());", 
    output: "URL to style.css of active theme (child if exists)." 
  },
  { 
    line: "get_permalink()", 
    explanation: "Returns the permalink URL for a specific post ID.", 
    example: "echo get_permalink(123);", 
    output: "https://example.com/post-title/" 
  },
  { 
    line: "get_the_ID()", 
    explanation: "Returns the ID of the current post in the loop.", 
    example: "$post_id = get_the_ID();", 
    output: "Numeric post ID." 
  },
  {
    line: "set_transient() / get_transient()",
    explanation: "Stores and retrieves temporary cached data with expiration time.",
    example: "$cached = get_transient('my_data'); if (false === $cached) { $data = expensive_query(); set_transient('my_data', $data, HOUR_IN_SECONDS); }",
    output: "Cached data stored for 1 hour, reducing database queries."
  },
  {
    line: "wp_schedule_event()",
    explanation: "Schedules recurring WordPress cron tasks.",
    example: "if (!wp_next_scheduled('my_daily_event')) { wp_schedule_event(time(), 'daily', 'my_daily_event'); }",
    output: "Event scheduled to run daily at next site visit."
  },
  {
    line: "flush_rewrite_rules()",
    explanation: "Regenerates WordPress rewrite rules for custom post types/taxonomies.",
    example: "function activate_plugin() { register_post_type('book'); flush_rewrite_rules(); } register_activation_hook(__FILE__, 'activate_plugin');",
    output: "Custom post type URLs work properly."
  }
];
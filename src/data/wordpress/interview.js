export const interview = {
  fresher: [
    {
      question: "1. What is WordPress? How is it different from other CMS platforms?",
      answer: "WordPress is a free, open-source Content Management System (CMS) built on PHP/MySQL. It powers over 40% of websites. Unlike other CMS platforms, WordPress has a massive ecosystem of themes, plugins, and community support. It started as a blogging platform but evolved into a full-featured CMS.",
      example: "WordPress vs Joomla: WordPress easier for beginners, larger plugin directory. vs Drupal: WordPress simpler, Drupal more complex but more flexible for enterprise.",
      output: "WordPress powers blogs, e-commerce, portfolios, membership sites, forums, and enterprise websites.",
      note: "WordPress.org (self-hosted) vs WordPress.com (hosted service) - different features and control levels."
    },
    {
      question: "2. What are hooks in WordPress?",
      answer: "Hooks are the core extensibility mechanism in WordPress. Actions (do_action) let you run custom code at specific points. Filters (apply_filters) let you modify data before it's saved or displayed.",
      example: "// Action Example\nadd_action('init', 'my_init_function');\nfunction my_init_function() {\n    // Runs during WordPress initialization\n    add_theme_support('post-thumbnails');\n}\n\n// Filter Example\nadd_filter('the_title', 'modify_title');\nfunction modify_title($title) {\n    return $title . ' (Modified)';\n}",
      output: "Action runs code at specific point. Filter modifies title before display.",
      note: "Actions 'do something', filters 'modify something'. Use remove_action()/remove_filter() to unhook."
    },
    {
      question: "3. How do you create a custom post type?",
      answer: "Use register_post_type() function hooked to 'init' action. Parameters include labels, public, supports, rewrite, has_archive, menu_icon. Flush rewrite rules after registering to see changes.",
      example: "function create_book_post_type() {\n    $args = array(\n        'labels' => array('name' => 'Books', 'singular_name' => 'Book'),\n        'public' => true,\n        'has_archive' => true,\n        'supports' => array('title', 'editor', 'thumbnail'),\n        'menu_icon' => 'dashicons-book-alt',\n        'show_in_rest' => true,\n    );\n    register_post_type('book', $args);\n}\nadd_action('init', 'create_book_post_type');",
      output: "Adds 'Books' to WordPress admin menu with its own edit screen.",
      note: "Always prefix function names to avoid conflicts. Flush rewrite rules only on activation/deactivation."
    },
    {
      question: "4. What is the template hierarchy?",
      answer: "The template hierarchy is the order WordPress uses to select which template file to display different content types (posts, pages, archives, custom post types). WordPress checks for specific template names before falling back to generic ones.",
      example: "Single Post hierarchy:\n1. single-{post-type}.php (single-book.php)\n2. single.php\n3. singular.php\n4. index.php\n\nPage hierarchy:\n1. custom-template.php\n2. page-{slug}.php\n3. page-{id}.php\n4. page.php\n5. singular.php\n6. index.php",
      output: "WordPress uses the first matching template in the hierarchy.",
      note: "Child themes can override parent theme templates. Use is_page_template() to detect custom templates."
    },
    {
      question: "5. Explain The Loop in WordPress.",
      answer: "The Loop is PHP code that processes and displays posts from the database. It checks for posts (have_posts()), then iterates through each post (the_post()), setting up post data for template tags like the_title(), the_content(), the_permalink().",
      example: "<?php if (have_posts()) : ?>\n    <?php while (have_posts()) : the_post(); ?>\n        <h2><?php the_title(); ?></h2>\n        <div><?php the_content(); ?></div>\n    <?php endwhile; ?>\n<?php else : ?>\n    <p>No posts found.</p>\n<?php endif; ?>\n<?php wp_reset_postdata(); ?>",
      output: "Displays all posts with title and content.",
      note: "Always use wp_reset_postdata() after custom queries to restore global post object."
    },
    {
      question: "6. What is the difference between post and page?",
      answer: "Posts are dynamic content with publish dates, categories, tags, and RSS feed support (blog content). Pages are static, hierarchical, don't use categories/tags, and aren't included in RSS feeds (content like About, Contact).",
      example: "// Get posts\n$posts = get_posts(array('post_type' => 'post', 'posts_per_page' => 10));\n// Get pages\n$pages = get_posts(array('post_type' => 'page', 'orderby' => 'menu_order'));\n// Check if page or post\nif (is_page()) echo 'This is a page';\nelseif (is_single()) echo 'This is a post';",
      output: "Posts appear in blog feed; Pages are for static content.",
      note: "Pages can have hierarchy (parent/child pages). Posts are organized by date."
    },
    {
      question: "7. How do you create a custom taxonomy?",
      answer: "Use register_taxonomy() function hooked to 'init'. Parameters include hierarchical (categories-like) or non-hierarchical (tags-like), labels, rewrite rules. Associate taxonomy with one or more post types.",
      example: "function create_genre_taxonomy() {\n    $args = array(\n        'labels' => array('name' => 'Genres', 'singular_name' => 'Genre'),\n        'hierarchical' => true,\n        'public' => true,\n        'show_in_rest' => true,\n        'rewrite' => array('slug' => 'genre'),\n    );\n    register_taxonomy('genre', array('book'), $args);\n}\nadd_action('init', 'create_genre_taxonomy');",
      output: "Adds 'Genres' taxonomy (like categories) to Books custom post type.",
      note: "Use hierarchical=true for categories, false for tags. show_in_rest enables block editor support."
    },
    {
      question: "8. What are WordPress shortcodes?",
      answer: "Shortcodes are macros that insert dynamic content into posts/pages using square brackets. Use add_shortcode() to register, return content (never echo). Shortcodes can accept attributes and content.",
      example: "add_shortcode('greeting', 'greeting_shortcode');\nfunction greeting_shortcode($atts, $content = null) {\n    $atts = shortcode_atts(array('name' => 'World'), $atts);\n    return '<div>Hello ' . esc_html($atts['name']) . '! ' . $content . '</div>';\n}\n// Usage: [greeting name=\"John\"]Welcome[/greeting]",
      output: "Shortcode outputs custom content where inserted in editor.",
      note: "Always return, don't echo in shortcode callbacks. Use shortcode_atts() for default values."
    },
    {
      question: "9. How do you properly enqueue scripts and styles?",
      answer: "Use wp_enqueue_script() and wp_enqueue_style() hooked to wp_enqueue_scripts. Never hard-code script/style tags. Functions handle dependencies, versioning, and loading in footer.",
      example: "function mytheme_enqueue_scripts() {\n    wp_enqueue_style('mytheme-style', get_stylesheet_uri(), array(), '1.0.0');\n    wp_enqueue_script('jquery');\n    wp_enqueue_script('mytheme-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);\n    wp_localize_script('mytheme-script', 'mytheme_ajax', array(\n        'ajax_url' => admin_url('admin-ajax.php'),\n        'nonce' => wp_create_nonce('mytheme_nonce'),\n    ));\n}\nadd_action('wp_enqueue_scripts', 'mytheme_enqueue_scripts');",
      output: "Scripts and styles loaded in correct order with proper dependencies.",
      note: "Load scripts in footer when possible (5th parameter = true). Use wp_localize_script for AJAX."
    },
    {
      question: "10. What are WordPress sidebars and widgets?",
      answer: "Sidebars are widget-ready areas in themes. Widgets are modular content blocks users can drag-and-drop into sidebars. register_sidebar() creates widget areas, dynamic_sidebar() displays them.",
      example: "function mytheme_widgets_init() {\n    register_sidebar(array(\n        'name' => 'Main Sidebar',\n        'id' => 'main-sidebar',\n        'before_widget' => '<div class=\"widget\">',\n        'after_widget' => '</div>',\n        'before_title' => '<h3>',\n        'after_title' => '</h3>',\n    ));\n}\nadd_action('widgets_init', 'mytheme_widgets_init');\n// Display: <?php dynamic_sidebar('main-sidebar'); ?>",
      output: "Widget area appears in Appearance > Widgets. Users can add, remove, reorder widgets.",
      note: "Use is_active_sidebar() before dynamic_sidebar() to avoid empty markup."
    },
    {
      question: "11. How do you create navigation menus in WordPress?",
      answer: "Register menu locations with register_nav_menus(), then display with wp_nav_menu(). Menus are managed in Appearance > Menus. Supports custom walkers for advanced styling.",
      example: "function mytheme_menus() {\n    register_nav_menus(array(\n        'primary' => 'Primary Menu',\n        'footer' => 'Footer Menu',\n    ));\n}\nadd_action('init', 'mytheme_menus');\n// Display: wp_nav_menu(array('theme_location' => 'primary'));",
      output: "Menu locations appear in admin, users can assign menus to them.",
      note: "has_nav_menu() checks if menu assigned to location. Use fallback_cb to show default menu."
    },
    {
      question: "12. How do you add meta boxes to post editor?",
      answer: "Use add_meta_box() hooked to add_meta_boxes. Save data with save_post action. Always verify nonce and permissions before saving.",
      example: "function add_book_meta_box() {\n    add_meta_box('book_details', 'Book Details', 'render_book_meta_box', 'book', 'normal', 'high');\n}\nadd_action('add_meta_boxes', 'add_book_meta_box');\nfunction render_book_meta_box($post) {\n    wp_nonce_field('book_meta_box', 'book_meta_box_nonce');\n    $author = get_post_meta($post->ID, '_book_author', true);\n    echo '<input type=\"text\" name=\"book_author\" value=\"' . esc_attr($author) . '\">';\n}",
      output: "Custom meta box appears in post editor for Books custom post type.",
      note: "Prefix meta keys with underscore to hide from custom fields UI. Use _e() for translatable labels."
    },
    {
      question: "13. What are the differences between get_posts and WP_Query?",
      answer: "get_posts returns array of WP_Post objects, doesn't modify global post data. WP_Query is a class that sets up loop with full query control and proper post data setup.",
      example: "// get_posts returns array\n$posts = get_posts(array('posts_per_page' => 5));\nforeach ($posts as $post) { setup_postdata($post); the_title(); }\n// WP_Query full loop support\n$query = new WP_Query(array('posts_per_page' => 5));\nwhile($query->have_posts()) { $query->the_post(); the_title(); }\nwp_reset_postdata();",
      output: "get_posts returns raw array; WP_Query used in loops with proper pagination.",
      note: "WP_Query supports pagination, get_posts doesn't by default. Use setup_postdata() with get_posts."
    },
    {
      question: "14. What is the difference between home_url() and site_url()?",
      answer: "site_url() returns the WordPress installation URL (where core files are). home_url() returns the address set in Settings > General > Site Address (for front page). Often same, but can differ.",
      example: "// If WordPress installed in subdirectory /wp\nsite_url(); // https://example.com/wp\nhome_url(); // https://example.com\n// Usage: admin_url('admin-ajax.php') uses site_url; home_url('/about/') for front page",
      output: "site_url points to WordPress core location, home_url points to front page.",
      note: "Use home_url() for user-facing links, site_url() for WordPress internal paths."
    },
    {
      question: "15. How do you handle AJAX requests in WordPress?",
      answer: "Use admin-ajax.php with actions: wp_ajax_{action} for logged-in, wp_ajax_nopriv_{action} for logged-out. Pass nonce for security, return JSON response with wp_send_json_success().",
      example: "add_action('wp_ajax_my_action', 'my_ajax_callback');\nadd_action('wp_ajax_nopriv_my_action', 'my_ajax_callback');\nfunction my_ajax_callback() {\n    check_ajax_referer('my_nonce', 'security');\n    wp_send_json_success(array('data' => 'success'));\n}",
      output: "AJAX request returns JSON data without page reload.",
      note: "Always verify nonce and permissions. Use wp_die() or wp_send_json_success()."
    },
    {
      question: "16. What are WordPress transients?",
      answer: "Transients are temporary cached data with expiration time. Use set_transient() to store, get_transient() to retrieve. Great for caching API responses, expensive queries, or complex calculations.",
      example: "function get_expensive_data() {\n    $cached = get_transient('expensive_data_cache');\n    if (false !== $cached) return $cached;\n    $data = expensive_operation();\n    set_transient('expensive_data_cache', $data, 12 * HOUR_IN_SECONDS);\n    return $data;\n}",
      output: "Cached data stored with expiration, reduces database queries dramatically.",
      note: "Transients use database by default, object cache if available (Redis, Memcached)."
    },
    {
      question: "17. How do you add custom image sizes in WordPress?",
      answer: "Use add_image_size() in functions.php. Generates additional image copies on upload. Use add_filter('image_size_names_choose') to make sizes available in media library.",
      example: "add_action('after_setup_theme', 'add_custom_image_sizes');\nfunction add_custom_image_sizes() {\n    add_image_size('featured-large', 1920, 600, true);\n    add_image_size('square-thumb', 300, 300, true);\n}\nadd_filter('image_size_names_choose', function($sizes) {\n    return array_merge($sizes, array('featured-large' => 'Featured Large'));\n});",
      output: "Custom image sizes appear in media library and can be used in theme templates.",
      note: "Regenerate thumbnails after adding new sizes. Hard crop = exact dimensions."
    },
    {
      question: "18. How do you create a child theme?",
      answer: "Create folder in /wp-content/themes/ with style.css (with Template: parent-theme) and functions.php. Child theme overrides parent templates without losing modifications on parent update.",
      example: "/* style.css */\n/*\nTheme Name: My Child Theme\nTemplate: parent-theme\nVersion: 1.0.0\n*/\n// functions.php\n<?php\nfunction child_enqueue_styles() {\n    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');\n    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));\n}\nadd_action('wp_enqueue_scripts', 'child_enqueue_styles');",
      output: "Child theme appears in Appearance > Themes, inherits parent functionality.",
      note: "Always use child theme for modifications. Never edit parent theme files directly."
    },
    {
      question: "19. What are user roles and capabilities?",
      answer: "Roles group capabilities (permissions). Default roles: Administrator, Editor, Author, Contributor, Subscriber. Add custom roles with add_role(), modify with add_cap()/remove_cap().",
      example: "add_role('book_reviewer', 'Book Reviewer', array('read' => true, 'upload_files' => true));\n$role = get_role('author');\n$role->add_cap('publish_books');\nif (current_user_can('publish_posts')) { echo 'Can publish'; }",
      output: "Custom roles appear in admin user edit screen with assigned capabilities.",
      note: "Never give administrator capabilities to untrusted users. Use current_user_can() for permission checks."
    },
    {
      question: "20. How do you debug WordPress errors?",
      answer: "Enable WP_DEBUG in wp-config.php. Use WP_DEBUG_LOG and WP_DEBUG_DISPLAY. Check debug.log in /wp-content/. Use Query Monitor plugin for database queries.",
      example: "// wp-config.php\ndefine('WP_DEBUG', true);\ndefine('WP_DEBUG_LOG', true);\ndefine('WP_DEBUG_DISPLAY', false);\ndefine('SAVEQUERIES', true);\nerror_log('Custom debug message');",
      output: "Errors logged to debug.log file for troubleshooting without affecting users.",
      note: "Never enable WP_DEBUG_DISPLAY on production sites. Use logging instead."
    },
    {
      question: "21. What is the difference between do_action() and apply_filters()?",
      answer: "do_action() executes custom hooks (actions) that perform actions without returning values. apply_filters() executes filter hooks that modify data and must return the modified value.",
      example: "// Action (does something)\ndo_action('my_custom_action', $data);\nadd_action('my_custom_action', 'my_function');\n// Filter (modifies data)\n$value = apply_filters('my_custom_filter', $value);\nadd_filter('my_custom_filter', 'modify_function');",
      output: "Actions execute code; Filters modify and return data.",
      note: "Actions can't return data, filters must return data. Both accept multiple parameters."
    },
    {
      question: "22. How do you optimize database queries in WordPress?",
      answer: "Use WP_Query with specific parameters, cache results with transients, use wp_cache_set/get, minimize number of queries, use proper indexes, avoid querying inside loops.",
      example: "// Good: Single query\n$posts = get_posts(array('posts_per_page' => 10, 'post_type' => 'book'));\n// Bad: Query inside loop\nwhile(have_posts()) { the_post(); get_post_meta(get_the_ID()); }\n// Better: Get all meta at once\nupdate_meta_cache($post_ids);",
      output: "Reduced database queries, faster page loads.",
      note: "Use Query Monitor to identify slow queries and N+1 problems."
    },
    {
      question: "23. What is the REST API in WordPress?",
      answer: "REST API provides JSON endpoints for interacting with WordPress data externally. Default endpoints for posts, pages, users, comments. Supports CRUD operations with authentication.",
      example: "// GET request\nhttps://example.com/wp-json/wp/v2/posts\n// POST request (create post)\ncurl -X POST https://example.com/wp-json/wp/v2/posts \\\n  -H 'Content-Type: application/json' \\\n  -H 'X-WP-Nonce: nonce' \\\n  -d '{\"title\":\"New Post\",\"content\":\"Content\"}'",
      output: "External applications can read/write WordPress data via API.",
      note: "Use Application Passwords for authentication. Register custom endpoints with register_rest_route()."
    },
    {
      question: "24. How do you handle file uploads securely?",
      answer: "Use wp_handle_upload() with proper validation. Check file type with wp_check_filetype(), limit file sizes, sanitize filenames, use nonces for verification.",
      example: "$uploaded_file = $_FILES['my_file'];\n$upload_overrides = array('test_form' => false);\n$movefile = wp_handle_upload($uploaded_file, $upload_overrides);\nif ($movefile && !isset($movefile['error'])) {\n    $attachment_id = wp_insert_attachment($attachment, $movefile['file']);\n    require_once(ABSPATH . 'wp-admin/includes/image.php');\n    $attach_data = wp_generate_attachment_metadata($attachment_id, $movefile['file']);\n    wp_update_attachment_metadata($attachment_id, $attach_data);\n}",
      output: "Files uploaded securely to WordPress media library.",
      note: "Always validate file types. Use wp_handle_upload() for security. Never trust user-supplied filenames."
    },
    {
      question: "25. What are WordPress cron jobs and how do they work?",
      answer: "WP-Cron handles scheduled tasks triggered by site visits (not true system cron). Use wp_schedule_event() for recurring, wp_schedule_single_event() for one-time tasks. For critical tasks, use real cron.",
      example: "if (!wp_next_scheduled('my_hourly_event')) {\n    wp_schedule_event(time(), 'hourly', 'my_hourly_event');\n}\nadd_action('my_hourly_event', 'do_this_hourly');\nfunction do_this_hourly() { /* cleanup task */ }",
      output: "Tasks run on schedule (e.g., hourly cleanup, email notifications).",
      note: "WP-Cron requires site traffic to trigger. Use real cron for critical time-sensitive tasks."
    }
  ],
  
  experienced: [
    {
      question: "26. How do you optimize a slow WordPress site?",
      answer: "Implement caching (page cache, object cache, CDN), optimize images (lazy load, compression), minify CSS/JS, use fast hosting, optimize database, enable GZIP, use HTTP/2, reduce external requests, implement critical CSS.",
      example: "// Enable caching in wp-config.php\ndefine('WP_CACHE', true);\n// Disable emojis\nremove_action('wp_head', 'print_emoji_detection_script', 7);\n// Lazy load images\nadd_filter('wp_lazy_loading_enabled', '__return_true');",
      output: "Significantly improved page load times (2-5x faster), better Core Web Vitals.",
      note: "Use tools: GTmetrix, Google PageSpeed, Query Monitor. Start with caching plugin (W3 Total Cache, WP Rocket)."
    },
    {
      question: "27. How do you implement multisite network efficiently?",
      answer: "WordPress Multisite runs multiple sites from single installation. Enable with WP_ALLOW_MULTISITE, configure network in admin, use subdomain/subdirectory structure. Manage sites, users, themes network-wide.",
      example: "// wp-config.php\ndefine('WP_ALLOW_MULTISITE', true);\n// Get all sites\n$sites = get_sites(array('number' => 100));\nforeach ($sites as $site) { echo $site->blogname; }\n// Switch between sites\nswitch_to_blog(2);\nrestore_current_blog();",
      output: "Multiple sites sharing same WordPress core, plugins, themes, reducing maintenance overhead.",
      note: "Multisite requires server configuration (wildcard subdomains). Large networks need object caching (Redis)."
    },
    {
      question: "28. What are advanced caching strategies in WordPress?",
      answer: "Implement page caching (Batcache, Varnish), object caching (Redis, Memcached), database query caching, CDN for static assets, fragment caching for dynamic parts, transients for expensive operations.",
      example: "// Object cache\nwp_cache_set('key', $data, 'group', 3600);\n$data = wp_cache_get('key', 'group');\n// Page cache with Batcache\ndefine('WP_CACHE', true);\n// Fragment caching\nob_start(); // dynamic content\n$content = ob_get_clean();\nset_transient('fragment_cache', $content, HOUR_IN_SECONDS);",
      output: "Dramatically reduced server load, sub-second response times.",
      note: "Redis/Memcached require server setup. Object cache bypasses database for repeated queries."
    },
    {
      question: "29. How do you create Gutenberg blocks?",
      answer: "Create custom Gutenberg blocks using @wordpress/create-block package. Blocks use React components, register with registerBlockType, render with edit/save functions. Modern block development requires build step.",
      example: "// block.json\n{\n    \"apiVersion\": 2,\n    \"name\": \"my-plugin/custom-block\",\n    \"title\": \"Custom Block\",\n    \"category\": \"widgets\",\n    \"editorScript\": \"file:./index.js\",\n    \"editorStyle\": \"file:./index.css\"\n}\n// index.js\nimport { registerBlockType } from '@wordpress/blocks';\nregisterBlockType('my-plugin/custom-block', {\n    edit: () => <div>Editor view</div>,\n    save: () => <div>Frontend view</div>,\n});",
      output: "Custom block appears in Gutenberg editor with React-based interface.",
      note: "Block development requires Node.js, webpack. Use @wordpress/create-block for scaffolding."
    },
    {
      question: "30. How do you implement headless WordPress?",
      answer: "Use WordPress as backend with REST API or GraphQL (WPGraphQL). Frontend built with React, Vue, Next.js, or Gatsby. Decouples content management from presentation layer.",
      example: "// Next.js fetch example\nexport async function getStaticProps() {\n    const res = await fetch('https://example.com/wp-json/wp/v2/posts');\n    const posts = await res.json();\n    return { props: { posts } };\n}\n// WPGraphQL query\nquery GetPosts {\n    posts { nodes { title content } }\n}",
      output: "WordPress content delivered via API to any frontend technology.",
      note: "Headless loses some WordPress features (frontend preview, theme customizer). Use for high-performance sites."
    },
    {
      question: "31. How do you secure WordPress against common vulnerabilities?",
      answer: "Update core/plugins/themes regularly, use strong passwords, limit login attempts, implement 2FA, use HTTPS, disable file editing (DISALLOW_FILE_EDIT), change default table prefix, hide wp-version, use security plugins (Wordfence, Sucuri).",
      example: "// wp-config.php security\ndefine('DISALLOW_FILE_EDIT', true);\ndefine('DISALLOW_FILE_MODS', true);\n$table_prefix = 'wp_custom_';\n// .htaccess security\n<Files wp-config.php>\n    Order Deny,Allow\n    Deny from all\n</Files>",
      output: "Hardened WordPress installation resistant to common attacks.",
      note: "Regular backups are essential. Use principle of least privilege for user roles."
    },
    {
      question: "32. How do you handle high-traffic WordPress sites?",
      answer: "Use caching (page, object, CDN), load balancing, database replication, separate web/database servers, use Redis for sessions, implement queue systems (RabbitMQ), use static file serving, optimize autoloaded options.",
      example: "// Database replication\nwp-config.php\ndefine('DB_HOST', 'master.example.com,slave1.example.com');\n// Redis object cache\n$redis = new Redis();\n$redis->connect('127.0.0.1', 6379);\nwp_cache_add_global_groups(array('users', 'userlogins'));",
      output: "Site handles millions of requests per month without downtime.",
      note: "Start with caching, then scale horizontally. Use managed WordPress hosting for high traffic."
    },
    {
      question: "33. What are WordPress actions and filters? Advanced usage?",
      answer: "Actions and filters allow modifying WordPress behavior. Advanced: dynamic hook names, anonymous functions (with caution), removing hooks, adding hooks inside loops, using current_filter(), conditional hooking.",
      example: "// Dynamic hook names\n$post_type = get_post_type();\nadd_action(\"save_post_{$post_type}\", 'custom_save');\n// Get current filter\nfunction debug_hook() { echo current_filter(); }\nadd_action('any_hook', 'debug_hook');\n// Conditional hooking\nif (is_admin()) { add_action('admin_menu', 'admin_function'); }",
      output: "Powerful, flexible code that only runs when needed.",
      note: "Avoid anonymous functions for hooks you need to remove later. Always match priority when removing hooks."
    },
    {
      question: "34. How do you create a WordPress plugin from scratch?",
      answer: "Create plugin folder in /wp-content/plugins/, add main PHP file with plugin header. Use hooks to add functionality. Follow WordPress coding standards. Use classes to avoid naming collisions.",
      example: "<?php\n/**\n * Plugin Name: My Custom Plugin\n * Plugin URI: https://example.com\n * Description: Custom functionality plugin\n * Version: 1.0.0\n * Author: Your Name\n */\nif (!defined('ABSPATH')) exit;\nclass My_Plugin {\n    function __construct() {\n        add_action('init', array($this, 'init'));\n    }\n    function init() {\n        // Plugin code here\n    }\n}\nnew My_Plugin();",
      output: "Plugin appears in Plugins menu, can be activated/deactivated independently.",
      note: "Use unique prefixes for functions/classes. Separate concerns: main plugin file, includes folder."
    },
    {
      question: "35. How do you implement custom database tables in WordPress?",
      answer: "Create custom tables on plugin activation using dbDelta(). Use $wpdb prefix for table names. Follow WordPress database naming conventions. Handle updates with dbDelta on version changes.",
      example: "function create_custom_table() {\n    global $wpdb;\n    $table_name = $wpdb->prefix . 'ratings';\n    $charset_collate = $wpdb->get_charset_collate();\n    $sql = \"CREATE TABLE $table_name (\n        id mediumint(9) NOT NULL AUTO_INCREMENT,\n        post_id mediumint(9) NOT NULL,\n        rating tinyint(1) NOT NULL,\n        PRIMARY KEY (id)\n    ) $charset_collate\";\n    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');\n    dbDelta($sql);\n}\nregister_activation_hook(__FILE__, 'create_custom_table');",
      output: "Custom table created on plugin activation, removed on deactivation.",
      note: "Always use $wpdb->prefix for table names. Use dbDelta() not direct CREATE TABLE queries."
    },
    {
      question: "36. How do you migrate a WordPress site to new hosting?",
      answer: "Export database (mysqldump or phpMyAdmin), copy wp-content folder, edit wp-config.php for new database credentials, search/replace URLs using WP-CLI or search-replace-db tool, update domain in WordPress settings.",
      example: "// WP-CLI migration\nwp db export backup.sql\nwp search-replace 'oldsite.com' 'newsite.com'\nwp option update home 'https://newsite.com'\nwp option update siteurl 'https://newsite.com'\n// Serialized data safe replacement\nwp search-replace --all-tables 'http://oldsite.com' 'https://newsite.com'",
      output: "Site migrated with all content, plugins, themes intact.",
      note: "Use WP-CLI for large databases. Update .htaccess and server configs. Test on staging first."
    },
    {
      question: "37. What are WordPress object-oriented programming best practices?",
      answer: "Use PHP namespaces to avoid conflicts, implement Singleton pattern for main plugin classes, use dependency injection, separate concerns (Model-View-Controller pattern), implement interfaces and abstract classes, use Composer for autoloading.",
      example: "namespace MyPlugin;\nclass Plugin {\n    private static $instance = null;\n    public static function get_instance() {\n        if (null === self::$instance) {\n            self::$instance = new self();\n        }\n        return self::$instance;\n    }\n    private function __construct() {\n        add_action('init', array($this, 'init'));\n    }\n    public function init() {}\n}\nPlugin::get_instance();",
      output: "Clean, maintainable, testable plugin code.",
      note: "Use Composer for PSR-4 autoloading. Implement contracts/interfaces for testability."
    },
    {
      question: "38. How do you implement E-commerce with WordPress?",
      answer: "Use WooCommerce as base. Implement custom product types using plugins, integrate payment gateways via hooks, customize checkout using filters, use REST API for headless e-commerce, implement inventory management, coupons, shipping calculations.",
      example: "// Add custom product type\nadd_filter('product_type_selector', function($types) {\n    $types['custom'] = 'Custom Product';\n    return $types;\n});\n// Modify cart item price\nadd_filter('woocommerce_cart_item_price', 'custom_cart_item_price', 10, 3);\n// Add custom payment gateway\nclass WC_Custom_Gateway extends WC_Payment_Gateway { }",
      output: "Fully functional e-commerce store with complex business logic.",
      note: "WooCommerce has extensive hooks. Use child theme or custom plugin for modifications."
    },
    {
      question: "39. How do you implement role-based access control (RBAC)?",
      answer: "Use WordPress capabilities system. Add custom capabilities with add_cap(), create custom roles with add_role(). Use current_user_can() for permission checks. Implement custom permission callbacks for REST API endpoints.",
      example: "$role = get_role('editor');\n$role->add_cap('manage_custom_products');\nif (current_user_can('manage_custom_products')) {\n    // Show custom admin menu\n}\nadd_filter('map_meta_cap', 'custom_map_meta_cap', 10, 4);\nfunction custom_map_meta_cap($caps, $cap, $user_id, $args) {\n    if ('edit_custom' === $cap) { $caps = array('manage_options'); }\n    return $caps;\n}",
      output: "Granular access control for different user types.",
      note: "Never hardcode role names. Use capabilities for checks. map_meta_cap allows dynamic capability mapping."
    },
    {
      question: "40. How do you optimize WordPress for SEO?",
      answer: "Use SEO plugins (Yoast, Rank Math), optimize permalinks (post name), add XML sitemaps, implement schema markup, optimize meta tags, improve site speed, use canonical URLs, add alt tags to images, create internal linking structure.",
      example: "// Add meta tags\nadd_action('wp_head', 'add_custom_meta_tags');\nfunction add_custom_meta_tags() {\n    if (is_single()) {\n        echo '<meta name=\"description\" content=\"' . get_the_excerpt() . '\">';\n    }\n}\n// Filter canonical URL\nadd_filter('wpseo_canonical', 'custom_canonical_url');\n// Add schema markup\nadd_filter('the_content', 'add_schema_markup');",
      output: "Improved search engine rankings and visibility.",
      note: "SEO plugins handle most tasks. Focus on content quality and site speed."
    },
    {
      question: "41. How do you implement multi-language WordPress site?",
      answer: "Use WPML, Polylang, or MultilingualPress. For custom implementation: store translations in post meta, use language detection via URL or cookie, load translation files, implement language switcher, use WPML hooks for custom strings.",
      example: "// Load textdomain\nload_theme_textdomain('mytheme', get_template_directory() . '/languages');\n_e('Hello World', 'mytheme');\n// Detect language from URL\n$lang = substr($_SERVER['REQUEST_URI'], 1, 2);\nif ($lang === 'es') { switch_to_locale('es_ES'); }",
      output: "Site accessible in multiple languages with translated content.",
      note: "WPML is premium but most feature-rich. Use .po/.mo files for string translations."
    },
    {
      question: "42. How do you implement custom WP-CLI commands?",
      answer: "Extend WP-CLI by creating class with public methods, register command with WP_CLI::add_command(). Use WP_CLI::success(), ::error(), ::warning(), ::line() for output. Support progress bars and flags.",
      example: "class My_CLI_Command {\n    public function hello($args, $assoc_args) {\n        $name = isset($assoc_args['name']) ? $assoc_args['name'] : 'World';\n        WP_CLI::success(\"Hello, $name!\");\n    }\n    public function batch_update($args) {\n        $progress = \\WP_CLI\\Utils\\make_progress_bar('Updating', count($args));\n        foreach ($args as $post_id) { update_post_meta($post_id, 'custom', 'value'); $progress->tick(); }\n        $progress->finish();\n    }\n}\nWP_CLI::add_command('my', 'My_CLI_Command');",
      output: "Custom automation commands accessible via terminal.",
      note: "Use for bulk operations, data migration, cron tasks. Test commands in staging environment first."
    },
    {
      question: "43. How do you implement webhooks in WordPress?",
      answer: "Use REST API endpoints for receiving webhooks. Use HTTP API (wp_remote_post) for sending webhooks. Implement event listeners that trigger webhooks on specific actions (post save, user registration). Queue webhooks with WP-Cron.",
      example: "// Send webhook on post publish\nadd_action('publish_post', 'send_post_webhook');\nfunction send_post_webhook($post_id) {\n    $webhook_url = 'https://example.com/webhook';\n    $args = array('body' => array('post_id' => $post_id, 'title' => get_the_title($post_id)), 'timeout' => 5);\n    wp_remote_post($webhook_url, $args);\n}\n// Receive webhook\nadd_action('rest_api_init', function() {\n    register_rest_route('webhooks/v1', '/process', array('methods' => 'POST', 'callback' => 'process_webhook', 'permission_callback' => '__return_true'));\n});",
      output: "External systems notified of events, real-time integrations.",
      note: "Handle webhooks asynchronously to avoid slowing down requests. Implement retry logic for failures."
    },
    {
      question: "44. How do you implement site health checks?",
      answer: "Add custom health checks with site_status_tests filter. Check critical components (database connection, cron jobs, API endpoints, filesystem permissions). Return results array with test label, status, description.",
      example: "add_filter('site_status_tests', 'add_custom_health_tests');\nfunction add_custom_health_tests($tests) {\n    $tests['direct']['custom_api_check'] = array(\n        'label' => 'API Connection',\n        'test' => 'check_api_connection',\n    );\n    return $tests;\n}\nfunction check_api_connection() {\n    $response = wp_remote_get('https://api.example.com/health');\n    if (is_wp_error($response) || wp_remote_retrieve_response_code($response) !== 200) {\n        return array('status' => 'critical', 'badge' => array('label' => 'Error'), 'label' => 'API unavailable');\n    }\n    return array('status' => 'good', 'label' => 'API reachable');\n}",
      output: "Custom health checks appear in Tools > Site Health.",
      note: "Use WordPress Site Health API. Provide actionable recommendations for failures."
    },
    {
      question: "45. How do you implement content versioning and rollback?",
      answer: "WordPress has built-in post revisions. Use wp_revisions_to_keep filter to control number. Store custom meta revisions with wp_insert_post. Implement custom rollback functionality with wp_restore_post_revision().",
      example: "// Increase revisions\nadd_filter('wp_revisions_to_keep', function($num, $post) { return 50; }, 10, 2);\n// Disable revisions for specific post type\nadd_filter('wp_revisions_to_keep', function($num, $post) { return 'book' === $post->post_type ? 0 : $num; }, 10, 2);\n// Get revisions\n$revisions = wp_get_post_revisions($post_id);\n// Restore revision\nwp_restore_post_revision($revision_id);",
      output: "Full content history with ability to revert to previous versions.",
      note: "Revisions can increase database size. Use wp_delete_post_revision() to clean old revisions."
    },
    {
      question: "46. How do you integrate third-party APIs securely?",
      answer: "Use HTTP API (wp_remote_get/post). Store API keys in wp-config.php or as site options encrypted. Validate responses, handle errors gracefully, implement caching, use webhooks for real-time updates.",
      example: "// Store API key in wp-config.php\ndefine('MY_API_KEY', 'api-key-here');\n$response = wp_remote_get('https://api.example.com/data', array('headers' => array('Authorization' => 'Bearer ' . MY_API_KEY)));\nif (is_wp_error($response)) { error_log('API error: ' . $response->get_error_message()); }\n$data = json_decode(wp_remote_retrieve_body($response), true);\nset_transient('api_data_cache', $data, HOUR_IN_SECONDS);",
      output: "External API data integrated reliably with fallbacks.",
      note: "Never hardcode API keys. Use transients for caching. Implement exponential backoff for retries."
    },
    {
      question: "47. How do you implement advanced search in WordPress?",
      answer: "Use WP_Query with 's' parameter for basic search. Implement custom search with pre_get_posts filter. Use Elasticsearch, Algolia, or SearchWP for advanced search. Add custom search filters (categories, custom fields, date ranges).",
      example: "add_action('pre_get_posts', 'custom_search_filter');\nfunction custom_search_filter($query) {\n    if (!is_admin() && $query->is_search() && $query->is_main_query()) {\n        $query->set('post_type', array('post', 'page', 'book'));\n        $query->set('meta_query', array(array('key' => 'custom_field', 'value' => $query->get('s'), 'compare' => 'LIKE')));\n        $query->set('orderby', 'relevance');\n    }\n}",
      output: "Enhanced search results with filters and relevance sorting.",
      note: "Basic LIKE search is slow on large databases. Consider Elasticsearch for high-volume search."
    },
    {
      question: "48. How do you implement email sending with attachments?",
      answer: "Use wp_mail() with headers array. Configure SMTP via plugin or phpmailer_init filter. Add attachments via $attachments array parameter. Use WP-Cron for batch emails.",
      example: "$to = 'user@example.com';\n$subject = 'Report';\n$message = 'See attached report.';\n$headers = array('Content-Type: text/html; charset=UTF-8', 'From: Admin <admin@example.com>');\n$attachments = array(WP_CONTENT_DIR . '/uploads/report.pdf');\nwp_mail($to, $subject, $message, $headers, $attachments);\n// Configure SMTP\nadd_action('phpmailer_init', function($phpmailer) {\n    $phpmailer->isSMTP(); $phpmailer->Host = 'smtp.example.com'; $phpmailer->SMTPAuth = true; $phpmailer->Username = 'user'; $phpmailer->Password = 'pass';\n});",
      output: "Reliable email delivery with formatted HTML and file attachments.",
      note: "Always configure SMTP for production. Use email log plugin for debugging."
    },
    {
      question: "49. How do you implement custom user profiles?",
      answer: "Use show_user_profile and edit_user_profile actions to add fields. Save data with personal_options_update and edit_user_profile_update actions. Display data with get_user_meta(). Add custom user list columns with manage_users_columns.",
      example: "add_action('show_user_profile', 'add_custom_profile_fields');\nadd_action('edit_user_profile', 'add_custom_profile_fields');\nfunction add_custom_profile_fields($user) { ?><h3>Custom Fields</h3><label>Twitter</label><input name=\"twitter\" value=\"<?php echo esc_attr(get_user_meta($user->ID, 'twitter', true)); ?>\"><?php }\nadd_action('personal_options_update', 'save_custom_profile_fields');\nadd_action('edit_user_profile_update', 'save_custom_profile_fields');\nfunction save_custom_profile_fields($user_id) { if (!current_user_can('edit_user', $user_id)) return; update_user_meta($user_id, 'twitter', sanitize_text_field($_POST['twitter'])); }",
      output: "Extended user profiles with custom fields and metadata.",
      note: "Always validate and sanitize user input. Check current_user_can() before saving."
    },
    {
      question: "50. How do you handle WP_Error objects?",
      answer: "WP_Error stores multiple errors. Create with new WP_Error('code', 'message'). Check with is_wp_error(). Get messages with get_error_message(), get_error_codes(). Add data with add_data(). Return WP_Error from API endpoints.",
      example: "function validate_input($data) { $errors = new WP_Error(); if (empty($data['name'])) { $errors->add('missing_name', 'Name is required'); } if (strlen($data['name']) < 3) { $errors->add('short_name', 'Name too short'); } return $errors; }\n$result = validate_input($data);\nif (is_wp_error($result)) { foreach ($result->get_error_messages() as $message) { echo $message; } }\n// Return from REST API\nif (is_wp_error($result)) { return $result; }",
      output: "Consistent error handling across plugin/theme code.",
      note: "WP_Error objects track multiple errors. Always check is_wp_error() after operations that may fail."
    }
  ]
};

export default interview;
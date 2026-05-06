export const learning = {
  basic: {
    title: "📝 WORDPRESS BASICS: COMPLETE CMS DOCUMENTATION",
    description: "Comprehensive WordPress guide covering everything from theme development to custom post types. WordPress powers over 40% of all websites on the internet. This documentation includes 15+ topics with practical code examples, line-by-line explanations, and real-world use cases. Perfect for beginners learning WordPress development and building custom themes.",
    
    topics: [
      {
        name: "1. THEME SETUP - functions.php",
        description: "The functions.php file is the heart of WordPress theme development. It allows you to add theme support features (post thumbnails, custom logo, HTML5), register navigation menus, add custom image sizes, and hook into WordPress with actions. Always use add_action('after_setup_theme') for theme setup functions to ensure they run at the correct time.",
        code: `// functions.php - Essential theme setup
<?php
// Enable featured images (post thumbnails)
add_theme_support('post-thumbnails');

// Enable HTML5 support for search forms, comment forms, galleries
add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

// Enable title tag (dynamic title generation)
add_theme_support('title-tag');

// Enable custom logo support
add_theme_support('custom-logo', array(
    'height' => 100,
    'width' => 400,
    'flex-height' => true,
    'flex-width' => true,
));

// Add custom image sizes
add_image_size('custom-size', 300, 200, true);
add_image_size('hero-image', 1920, 500, true);

// Theme setup hook (runs on theme activation)
function mytheme_setup() {
    // Register navigation menus
    register_nav_menus(array(
        'primary' => 'Primary Menu',
        'footer' => 'Footer Menu',
        'mobile' => 'Mobile Menu',
    ));
    
    // Add theme support for woocommerce
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
}
add_action('after_setup_theme', 'mytheme_setup');

// Set content width (for oEmbeds and images)
if (!isset($content_width)) {
    $content_width = 1200;
}

// Register widget areas (sidebars)
function mytheme_widgets_init() {
    register_sidebar(array(
        'name' => 'Main Sidebar',
        'id' => 'main-sidebar',
        'before_widget' => '<div class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'mytheme_widgets_init');
?>`,
        lineByLine: [
          "Line 1: <?php - Opens PHP tag for functions.php file",
          "Line 2: add_theme_support('post-thumbnails') - Enables featured images for posts and pages",
          "Line 3: add_theme_support('html5') - Enables HTML5 markup for forms, galleries, captions",
          "Line 4: add_theme_support('title-tag') - WordPress generates dynamic page titles automatically",
          "Line 5-9: add_theme_support('custom-logo') - Enables custom logo upload with size options",
          "Line 6: height/width - Sets logo dimensions, flex-height/width allows custom sizes",
          "Line 8-9: add_image_size() - Creates custom image sizes for responsive images",
          "Line 12-21: mytheme_setup() - Custom function that runs on theme initialization",
          "Line 14-18: register_nav_menus() - Creates menu locations for navigation",
          "Line 19-21: WooCommerce support - Enables e-commerce features",
          "Line 24-26: $content_width - Sets maximum width for oEmbeds and media",
          "Line 29-38: register_sidebar() - Creates widget area with custom markup",
          "Line 39: add_action('widgets_init') - Hooks sidebar registration to WordPress initialization"
        ],
        simpleMeaning: "functions.php is like your theme's control panel. It tells WordPress what features your theme supports (like featured images and custom logos), where menus go, what widget areas exist, and sets up custom image sizes. Think of it as your theme's settings file.",
        output: "Enables featured images, HTML5 support, title tags, custom logo, navigation menus, widget areas, and custom image sizes.",
        note: "Always use add_theme_support for core features. Never edit functions.php directly in production - use child theme. Run theme setup on 'after_setup_theme' hook, not directly in file."
      },
      
      {
        name: "2. THE LOOP - Displaying Posts",
        description: "The WordPress Loop is the core template tag that displays posts. It checks if posts exist (have_posts()), then loops through each post (while have_posts()), setting up post data with the_post(). Inside the loop, template tags like the_title(), the_content(), the_permalink() display post information. The Loop works with main query and custom WP_Query objects.",
        code: `<!-- The WordPress Loop - Main query for displaying posts -->
<?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
        
        <article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
            <header class="entry-header">
                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="post-thumbnail">
                        <a href="<?php the_permalink(); ?>">
                            <?php the_post_thumbnail('large'); ?>
                        </a>
                    </div>
                <?php endif; ?>
                
                <h2 class="entry-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h2>
                
                <div class="entry-meta">
                    <span class="posted-on">
                        <?php echo get_the_date(); ?>
                    </span>
                    <span class="byline">
                        By <?php the_author_posts_link(); ?>
                    </span>
                    <span class="cat-links">
                        <?php the_category(', '); ?>
                    </span>
                    <span class="tags-links">
                        <?php the_tags('Tags: ', ', '); ?>
                    </span>
                </div>
            </header>
            
            <div class="entry-content">
                <?php the_excerpt(); ?>
            </div>
            
            <footer class="entry-footer">
                <?php edit_post_link('Edit', '<span class="edit-link">', '</span>'); ?>
            </footer>
        </article>
        
        <?php comments_template(); ?>
        
    <?php endwhile; ?>
    
    <?php
    the_posts_pagination(array(
        'mid_size' => 2,
        'prev_text' => __('Previous', 'textdomain'),
        'next_text' => __('Next', 'textdomain'),
    ));
    ?>
    
<?php else : ?>
    <p><?php _e('No posts found.', 'textdomain'); ?></p>
<?php endif; ?>

<?php wp_reset_postdata(); ?>`,
        lineByLine: [
          "Line 1: if ( have_posts() ) - Checks if there are posts to display",
          "Line 2: while ( have_posts() ) : the_post() - Loops through posts and sets up post data",
          "Line 4: post_class() - Adds dynamic CSS classes to article element",
          "Line 5: the_ID() - Displays the unique post ID number",
          "Line 6: has_post_thumbnail() - Checks if post has featured image",
          "Line 8: the_permalink() - Displays the permanent URL to the post",
          "Line 9: the_post_thumbnail('large') - Displays featured image at 'large' size",
          "Line 13: the_title() - Displays post title",
          "Line 17: get_the_date() - Returns post date",
          "Line 19: the_author_posts_link() - Displays author name linked to their posts",
          "Line 21: the_category(', ') - Displays post categories separated by commas",
          "Line 23: the_tags('Tags: ', ', ') - Shows post tags",
          "Line 29: the_excerpt() - Shows post excerpt",
          "Line 34: edit_post_link() - Shows 'Edit' link for logged-in users",
          "Line 38: comments_template() - Loads comments template",
          "Line 44-49: the_posts_pagination() - Creates numbered pagination",
          "Line 53: _e('No posts found.') - Displays message when no posts exist",
          "Line 56: wp_reset_postdata() - Restores global post data"
        ],
        simpleMeaning: "The Loop is like a conveyor belt for your posts. It checks 'Do we have any posts?' then grabs each post one by one, displays its title, content, image, and metadata, then moves to the next. If no posts exist, it shows 'No posts found'.",
        output: "Displays complete blog archive with featured images, titles, metadata, excerpts, pagination, and comments.",
        note: "Always use wp_reset_postdata() after custom WP_Query loops. the_excerpt() is better for archive pages."
      },
      
      {
        name: "3. CUSTOM POST TYPE (CPT)",
        description: "Custom Post Types allow you to create content types beyond default posts and pages (e.g., Books, Products, Portfolio). register_post_type() registers CPT with labels, supports, taxonomies, and rewrite rules. Flush rewrite rules after registering. CPTs appear in admin menu and can have custom templates (single-{posttype}.php, archive-{posttype}.php).",
        code: `<?php
// Register Custom Post Type - Books
function create_book_post_type() {
    $labels = array(
        'name' => 'Books',
        'singular_name' => 'Book',
        'menu_name' => 'Books',
        'add_new' => 'Add New Book',
        'add_new_item' => 'Add New Book',
        'edit_item' => 'Edit Book',
        'new_item' => 'New Book',
        'view_item' => 'View Book',
        'search_items' => 'Search Books',
        'not_found' => 'No books found',
        'not_found_in_trash' => 'No books found in trash',
        'all_items' => 'All Books',
        'archives' => 'Book Archives',
    );
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'show_in_rest' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'books'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-book-alt',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
    );
    
    register_post_type('book', $args);
}
add_action('init', 'create_book_post_type');

// Flush rewrite rules on activation
function book_rewrite_flush() {
    create_book_post_type();
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'book_rewrite_flush');
?>`,
        lineByLine: [
          "Line 1: function create_book_post_type() - Function to register custom post type",
          "Line 2-15: $labels array - Human-readable names for admin UI",
          "Line 3: 'name' => 'Books' - Plural name in admin menu",
          "Line 4: 'singular_name' => 'Book' - Single item name",
          "Line 5: 'add_new' => 'Add New Book' - Button text",
          "Line 17-32: $args array - Configuration settings",
          "Line 18: 'labels' => $labels - Assigns labels to post type",
          "Line 19: 'public' => true - Visible on frontend and admin",
          "Line 23: 'show_in_nav_menus' => true - Available for menus",
          "Line 24: 'show_in_rest' => true - Enables Gutenberg editor",
          "Line 26: 'rewrite' => array('slug' => 'books') - URL structure /books/",
          "Line 28: 'has_archive' => true - Enables archive page",
          "Line 30: 'menu_icon' => 'dashicons-book-alt' - Admin menu icon",
          "Line 31: 'supports' array - Features like title, editor, thumbnail",
          "Line 34: register_post_type('book', $args) - Registers the post type",
          "Line 35: add_action('init', 'create_book_post_type') - Runs on WordPress init",
          "Line 38: flush_rewrite_rules() - Updates URL rules (run once)"
        ],
        simpleMeaning: "Custom Post Types are like creating new furniture for your WordPress house. Default post types are like chairs and tables (posts and pages). CPTs let you build custom furniture like bookshelves, product displays, or portfolio galleries. Each has its own admin menu, URL structure, and templates.",
        output: "Adds 'Books' custom post type to admin menu with full editor support, Gutenberg compatibility, and /books/ archive page.",
        note: "Always flush rewrite rules after registering CPT (on activation). Use singular file names: single-book.php, archive-book.php. show_in_rest enables block editor."
      },
      
      {
        name: "4. CUSTOM TAXONOMY (Categories for CPT)",
        description: "Custom Taxonomies group custom post types (like categories and tags for books). Hierarchical (categories) have parent-child relationships. Non-hierarchical (tags) are flat. register_taxonomy() associates taxonomy with post types. Taxonomies appear in admin UI and can be shown in REST API for block editor support.",
        code: `<?php
// Register Custom Taxonomy - Genre for Books
function create_genre_taxonomy() {
    $labels = array(
        'name' => 'Genres',
        'singular_name' => 'Genre',
        'search_items' => 'Search Genres',
        'all_items' => 'All Genres',
        'parent_item' => 'Parent Genre',
        'parent_item_colon' => 'Parent Genre:',
        'edit_item' => 'Edit Genre',
        'update_item' => 'Update Genre',
        'add_new_item' => 'Add New Genre',
        'new_item_name' => 'New Genre Name',
        'menu_name' => 'Genres',
    );
    
    $args = array(
        'labels' => $labels,
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_in_rest' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'genre'),
    );
    
    register_taxonomy('genre', array('book'), $args);
}
add_action('init', 'create_genre_taxonomy');

// Register non-hierarchical taxonomy (like tags)
function create_book_tag_taxonomy() {
    $labels = array(
        'name' => 'Book Tags',
        'singular_name' => 'Book Tag',
        'search_items' => 'Search Book Tags',
        'popular_items' => 'Popular Book Tags',
        'all_items' => 'All Book Tags',
        'edit_item' => 'Edit Book Tag',
        'update_item' => 'Update Book Tag',
        'add_new_item' => 'Add New Book Tag',
        'new_item_name' => 'New Book Tag Name',
        'separate_items_with_commas' => 'Separate tags with commas',
        'menu_name' => 'Book Tags',
    );
    
    $args = array(
        'labels' => $labels,
        'hierarchical' => false,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'show_in_rest' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'book-tag'),
    );
    
    register_taxonomy('book_tag', array('book'), $args);
}
add_action('init', 'create_book_tag_taxonomy');
?>`,
        lineByLine: [
          "Line 1: function create_genre_taxonomy() - Function to register taxonomy",
          "Line 2-14: $labels array - Human-readable names for admin UI",
          "Line 10: 'parent_item' => 'Parent Genre' - For hierarchical taxonomies",
          "Line 16-26: $args array - Configuration settings",
          "Line 17: 'labels' => $labels - Assigns labels",
          "Line 18: 'hierarchical' => true - Like categories (has parents)",
          "Line 21: 'show_admin_column' => true - Shows in CPT list view",
          "Line 23: 'show_in_rest' => true - Gutenberg block editor support",
          "Line 25: 'rewrite' => array('slug' => 'genre') - URL structure",
          "Line 28: register_taxonomy('genre', array('book'), $args) - Associates with book CPT",
          "Line 31: add_action('init', 'create_genre_taxonomy') - Runs on WordPress init",
          "Line 34: function create_book_tag_taxonomy() - Non-hierarchical taxonomy",
          "Line 56: 'hierarchical' => false - Like tags (no parents)"
        ],
        simpleMeaning: "Custom Taxonomies are like filing systems for your custom post types. Hierarchical (like categories) lets you organize items in parent-child relationships (Fiction > Mystery). Non-hierarchical (like tags) lets you add flat labels (bestseller, award-winning). Both help users find and filter content.",
        output: "Adds hierarchical 'Genres' taxonomy (like categories) and non-hierarchical 'Book Tags' (like tags) for Books custom post type.",
        note: "Hierarchical = categories (parent/child), Non-hierarchical = tags (no hierarchy). Show in REST API for block editor. Use wp_get_post_terms() to display terms."
      },
      
      {
        name: "5. ENQUEUE SCRIPTS & STYLES",
        description: "wp_enqueue_script() and wp_enqueue_style() properly load CSS and JavaScript files with dependencies and versioning. Never hard-code script/style tags. Use wp_localize_script() to pass PHP data to JavaScript. Enqueue on wp_enqueue_scripts hook for frontend, admin_enqueue_scripts for admin, login_enqueue_scripts for login page.",
        code: `<?php
// Properly enqueue CSS and JavaScript files
function mytheme_enqueue_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('mytheme-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue custom CSS file
    wp_enqueue_style('mytheme-custom', get_template_directory_uri() . '/assets/css/custom.css', array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap', array(), null);
    
    // Enqueue jQuery
    wp_enqueue_script('jquery');
    
    // Enqueue custom JavaScript with dependencies
    wp_enqueue_script('mytheme-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script (pass PHP data to JavaScript)
    wp_localize_script('mytheme-script', 'mytheme_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('mytheme_nonce'),
        'site_url' => get_site_url(),
    ));
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_scripts');

// Enqueue admin styles
function mytheme_admin_styles($hook) {
    if ($hook == 'post.php' || $hook == 'post-new.php') {
        wp_enqueue_style('mytheme-admin', get_template_directory_uri() . '/assets/css/admin.css', array(), '1.0.0');
    }
}
add_action('admin_enqueue_scripts', 'mytheme_admin_styles');
?>`,
        lineByLine: [
          "Line 1: function mytheme_enqueue_scripts() - Function to load assets",
          "Line 2: wp_enqueue_style() - Loads CSS files",
          "Line 3: get_stylesheet_uri() - Gets main style.css file",
          "Line 4: get_template_directory_uri() - Gets theme directory URL",
          "Line 7: wp_enqueue_script('jquery') - Loads built-in jQuery",
          "Line 10: wp_enqueue_script() with dependencies - Loads JS after jQuery",
          "Line 11: 'true' parameter - Loads script in footer",
          "Line 14: wp_localize_script() - Passes PHP data to JavaScript",
          "Line 15: admin_url('admin-ajax.php') - AJAX URL for WordPress",
          "Line 16: wp_create_nonce() - Creates security token",
          "Line 20: add_action('wp_enqueue_scripts') - Hook for frontend assets"
        ],
        simpleMeaning: "Enqueueing is like checking books in and out of a library. You tell WordPress 'I need these CSS/JS files', WordPress checks for duplicates and dependencies, then loads them in the right order. Never manually add script tags - use proper enqueueing for compatibility.",
        output: "Properly loads theme CSS, JavaScript, Google Fonts, passes PHP data to JS, and conditionally loads assets on specific admin pages.",
        note: "Always use wp_enqueue_scripts hook, not wp_head. Use dependencies array for jQuery. Load scripts in footer when possible (set 5th param to true)."
      },
      
      {
        name: "6. SIDEBARS & WIDGET AREAS",
        description: "register_sidebar() creates widget areas where users can drag and drop widgets. Dynamic sidebars can be placed in theme templates using dynamic_sidebar(). Widget areas are registered in functions.php and displayed using dynamic_sidebar() in template files. is_active_sidebar() checks if sidebar has widgets before displaying.",
        code: `<?php
// Register widget areas (sidebars)
function mytheme_widgets_init() {
    // Main sidebar
    register_sidebar(array(
        'name' => 'Main Sidebar',
        'id' => 'main-sidebar',
        'description' => 'Main sidebar widget area',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    // Footer widget area
    register_sidebar(array(
        'name' => 'Footer Widget Area',
        'id' => 'footer-widgets',
        'before_widget' => '<div class="col-md-3 widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'mytheme_widgets_init');

// Display sidebar in template
// <?php if (is_active_sidebar('main-sidebar')) : ?>
//     <aside class="sidebar">
//         <?php dynamic_sidebar('main-sidebar'); ?>
//     </aside>
// <?php endif; ?>
?>`,
        lineByLine: [
          "Line 1: function mytheme_widgets_init() - Function to register widgets",
          "Line 2: register_sidebar() - Creates widget area",
          "Line 3: 'name' => 'Main Sidebar' - Display name in admin",
          "Line 4: 'id' => 'main-sidebar' - Unique identifier",
          "Line 5: 'description' - Tooltip text in admin",
          "Line 6: 'before_widget' - HTML before each widget",
          "Line 6: %1$s - Widget ID placeholder, %2$s - Widget class placeholder",
          "Line 7: 'after_widget' - HTML after each widget",
          "Line 8: 'before_title' - HTML before widget title",
          "Line 9: 'after_title' - HTML after widget title",
          "Line 12-20: Footer sidebar - Separate widget area",
          "Line 23: add_action('widgets_init') - Hook for registration",
          "Line 26: is_active_sidebar() - Checks if sidebar has widgets",
          "Line 28: dynamic_sidebar() - Displays widget area"
        ],
        simpleMeaning: "Sidebars are like empty containers where users can place widgets. register_sidebar creates the container with custom HTML wrapper. dynamic_sidebar pours the widgets into that container. Users can drag widgets (search, categories, recent posts) into these areas from Appearance > Widgets.",
        output: "Registers main sidebar and footer widget area with custom HTML markup. Displays widgets when active, nothing when empty.",
        note: "Use is_active_sidebar() before dynamic_sidebar() to avoid empty markup. Each sidebar needs unique ID. Widgets can be customized with CSS classes using %2$s placeholder."
      }
    ]
  },
  
  advanced: {
    title: "🚀 ADVANCED WORDPRESS: PROFESSIONAL DEVELOPMENT",
    description: "Advanced WordPress techniques for professional developers. Master WP_Query, REST API, actions & filters, transients, WP Cron, AJAX, database operations, user roles, security hardening, and performance optimization. Build enterprise-grade WordPress solutions.",
    
    topics: [
      {
        name: "7. WP_QUERY - CUSTOM LOOPS",
        description: "WP_Query allows custom database queries beyond the main loop. It supports complex parameters for meta queries, tax queries, date queries, and custom field sorting. Always use wp_reset_postdata() after custom queries to restore global post data. WP_Query is more flexible than get_posts() and returns full post objects.",
        code: `<?php
// Basic custom WP_Query
$args = array(
    'post_type' => 'book',
    'posts_per_page' => 6,
    'orderby' => 'date',
    'order' => 'DESC',
    'post_status' => 'publish',
);

$query = new WP_Query($args);

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        ?>
        <h2><?php the_title(); ?></h2>
        <?php the_post_thumbnail('medium'); ?>
        <?php
    }
    wp_reset_postdata();
}

// Advanced query with meta and tax queries
$args = array(
    'post_type' => 'book',
    'posts_per_page' => 12,
    'meta_key' => '_book_price',
    'orderby' => 'meta_value_num',
    'order' => 'ASC',
    'meta_query' => array(
        'relation' => 'AND',
        array(
            'key' => '_book_price',
            'value' => array(10, 50),
            'type' => 'NUMERIC',
            'compare' => 'BETWEEN'
        ),
        array(
            'key' => '_book_in_stock',
            'value' => '1',
            'compare' => '='
        )
    ),
    'tax_query' => array(
        array(
            'taxonomy' => 'genre',
            'field' => 'slug',
            'terms' => array('fiction', 'mystery'),
            'operator' => 'IN'
        )
    ),
);

$advanced_query = new WP_Query($args);
?>`,
        lineByLine: [
          "Line 1-7: $args array - Query parameters",
          "Line 2: 'post_type' => 'book' - Query custom post type",
          "Line 3: 'posts_per_page' => 6 - Limit results",
          "Line 4: 'orderby' => 'date' - Sort by date",
          "Line 5: 'order' => 'DESC' - Newest first",
          "Line 9: new WP_Query($args) - Create custom query object",
          "Line 11: $query->have_posts() - Check for results",
          "Line 12: while ($query->have_posts()) - Loop through posts",
          "Line 13: $query->the_post() - Sets up post data",
          "Line 18: wp_reset_postdata() - Restores global post",
          "Line 21-45: Advanced query with meta and tax conditions",
          "Line 26-33: meta_query - Filters by custom fields",
          "Line 27: 'relation' => 'AND' - All conditions must match",
          "Line 29: 'key' => '_book_price' - Meta field name",
          "Line 30: 'value' => array(10, 50) - Price range",
          "Line 31: 'type' => 'NUMERIC' - Data type",
          "Line 32: 'compare' => 'BETWEEN' - Comparison operator",
          "Line 35-43: tax_query - Filters by taxonomy"
        ],
        simpleMeaning: "WP_Query is a powerful search tool for WordPress. It lets you ask complex questions like 'Find 12 books in fiction or mystery genres, priced between $10-50, in stock, sorted by price lowest first'. Use it for custom loops, related posts, or any custom content display.",
        output: "Custom queries with meta filters, taxonomy filters, date ranges, pagination, and related posts functionality. Results displayed with full post data.",
        note: "Always use wp_reset_postdata() after custom WP_Query. Use wp_reset_query() for query_posts(). Meta query compares can be =, !=, >, <, LIKE, NOT LIKE, IN, NOT IN, BETWEEN, NOT BETWEEN."
      },
      
      {
        name: "8. WORDPRESS REST API",
        description: "REST API allows external applications to interact with WordPress data. register_rest_route() creates custom endpoints with methods (GET, POST, PUT, DELETE). Use permission_callback to control access. Return data with rest_ensure_response(). The REST API is essential for headless WordPress, mobile apps, and third-party integrations.",
        code: `<?php
// Register custom REST API endpoint
add_action('rest_api_init', function() {
    // GET endpoint - retrieve books
    register_rest_route('my/v1', '/books/', array(
        'methods' => 'GET',
        'callback' => 'get_books_callback',
        'permission_callback' => '__return_true',
        'args' => array(
            'per_page' => array(
                'default' => 10,
                'validate_callback' => function($param) {
                    return is_numeric($param) && $param <= 100;
                }
            ),
        ),
    ));
    
    // POST endpoint - create book
    register_rest_route('my/v1', '/books/', array(
        'methods' => 'POST',
        'callback' => 'create_book_callback',
        'permission_callback' => function() {
            return current_user_can('publish_posts');
        },
    ));
});

function get_books_callback($request) {
    $args = array(
        'post_type' => 'book',
        'posts_per_page' => $request->get_param('per_page'),
    );
    
    $query = new WP_Query($args);
    $books = array();
    
    foreach($query->posts as $post) {
        $books[] = array(
            'id' => $post->ID,
            'title' => get_the_title($post),
            'author' => get_post_meta($post->ID, '_book_author', true),
        );
    }
    
    return rest_ensure_response($books);
}
?>`,
        lineByLine: [
          "Line 1: add_action('rest_api_init') - Hook for REST API",
          "Line 2: register_rest_route() - Creates custom endpoint",
          "Line 3: 'my/v1' - Namespace (vendor/version)",
          "Line 4: '/books/' - Endpoint URL",
          "Line 5: 'methods' => 'GET' - HTTP method",
          "Line 6: 'callback' => 'get_books_callback' - Function to handle request",
          "Line 7: 'permission_callback' => '__return_true' - Public access",
          "Line 8-15: 'args' array - Validates request parameters",
          "Line 9: 'per_page' - Parameter name",
          "Line 10: 'default' => 10 - Default value",
          "Line 11-13: validate_callback - Custom validation function",
          "Line 18-25: POST endpoint - Creates new posts",
          "Line 22-24: permission_callback - Admin only access",
          "Line 28-45: get_books_callback() - Endpoint handler",
          "Line 27: $request->get_param() - Gets query parameter",
          "Line 43: rest_ensure_response() - Formats response"
        ],
        simpleMeaning: "REST API is like a waiter between your WordPress kitchen and external customers. Mobile apps, JavaScript frontends, and other websites can order specific dishes (data) through URLs, and WordPress serves them JSON meals. You can create custom menus (endpoints) for special requests.",
        output: "Adds custom REST API endpoints (GET /books/, POST /books/) with authentication, validation, and proper JSON responses.",
        note: "Use GET for retrieving data, POST for creating, PUT for updating, DELETE for removing. Always validate input. Use nonce for authenticated requests from JavaScript."
      },
      
      {
        name: "9. ACTIONS & FILTERS",
        description: "Actions let you execute code at specific points (add content to footer, modify admin menu). Filters let you modify data before it's used (change title, modify content). add_action() and add_filter() hook functions. Priority determines execution order (lower runs first). Use do_action() to add custom action hooks in themes/plugins.",
        code: `<?php
// ========== ACTIONS (Execute code at specific points) ==========

// Basic action - add content to footer
add_action('wp_footer', 'add_custom_footer_script');
function add_custom_footer_script() {
    echo '<script>console.log("Custom footer script");</script>';
}

// Action with priority (lower number = runs earlier)
add_action('wp_head', 'add_early_meta_tags', 1);
add_action('wp_head', 'add_late_styles', 100);

// Modify admin menu
add_action('admin_menu', 'custom_admin_menu');
function custom_admin_menu() {
    add_menu_page('Custom Settings', 'Custom', 'manage_options', 'custom-settings', 'custom_settings_page', 'dashicons-admin-generic', 30);
    remove_menu_page('edit-comments.php');
}

// ========== FILTERS (Modify data before use) ==========

// Filter post title
add_filter('the_title', 'modify_post_title', 10, 2);
function modify_post_title($title, $id) {
    if (is_single() && !is_admin()) {
        $title = $title . ' - Read More';
    }
    return $title;
}

// Filter excerpt length
add_filter('excerpt_length', 'custom_excerpt_length');
function custom_excerpt_length($length) {
    return 30; // 30 words
}

// Add custom body classes
add_filter('body_class', 'add_custom_body_classes');
function add_custom_body_classes($classes) {
    if (is_single()) {
        $classes[] = 'single-post';
    }
    if (is_user_logged_in()) {
        $classes[] = 'logged-in';
    }
    return $classes;
}

// Modify content
add_filter('the_content', 'add_social_share_buttons');
function add_social_share_buttons($content) {
    if (is_single()) {
        $buttons = '<div class="social-share">Share this post</div>';
        $content = $content . $buttons;
    }
    return $content;
}
?>`,
        lineByLine: [
          "Line 1: add_action('wp_footer', ...) - Hooks function to footer",
          "Line 2-4: function add_custom_footer_script() - Adds console.log to footer",
          "Line 7: add_action('wp_head', 'add_early_meta_tags', 1) - Priority 1 (runs early)",
          "Line 10-15: admin_menu action - Modifies WordPress admin menu",
          "Line 12: add_menu_page() - Adds custom admin page",
          "Line 13: remove_menu_page() - Removes comments menu item",
          "Line 18: add_filter('the_title', ...) - Hooks title modifier",
          "Line 19: function modify_post_title($title, $id) - Receives title and post ID",
          "Line 20-23: is_single() && !is_admin() - Only on single posts, not admin",
          "Line 22: $title . ' - Read More' - Appends text to title",
          "Line 23: return $title - Must return modified value",
          "Line 26: add_filter('excerpt_length', ...) - Hooks excerpt length",
          "Line 27-29: function custom_excerpt_length($length) - Returns new length",
          "Line 32: add_filter('body_class', ...) - Hooks body classes",
          "Line 33: function add_custom_body_classes($classes) - Receives class array",
          "Line 34-39: Modifies classes array and returns it",
          "Line 42: add_filter('the_content', ...) - Hooks content modifier"
        ],
        simpleMeaning: "Actions are like setting up automatic tasks: 'After someone saves a post, send me an email'. Filters are like editing on the fly: 'Before showing the title, add 'Read More' to it'. Actions do something, filters change something.",
        output: "Actions add footer scripts, modify admin menu, run code at specific points. Filters modify post titles, excerpt length, body classes, and content before display.",
        note: "Actions vs Filters: Actions execute code (do_action), Filters modify data (apply_filters). Always return value in filters. Use priority to control execution order (10 is default)."
      },
      
      {
        name: "10. ACTIONS & FILTERS - ADVANCED",
        description: "Advanced hook techniques include passing multiple parameters, using anonymous functions (PHP 5.3+), conditional hooking, dynamic hook names, and removing hooks. add_action() can accept up to 5 parameters. Use remove_action() to unhook functions. Current action/filter ID available with current_filter().",
        code: `<?php
// ========== ADVANCED ACTION TECHNIQUES ==========

// Action with multiple parameters (up to 5)
add_action('save_post', 'log_post_changes', 10, 3);
function log_post_changes($post_id, $post, $update) {
    if ($update) {
        error_log("Post {$post_id} was updated");
    } else {
        error_log("Post {$post_id} was created");
    }
}

// Anonymous function (PHP 5.3+)
add_action('wp_footer', function() {
    echo '<script>console.log("Anonymous function");</script>';
});

// Conditional hooking (only register if needed)
if (is_admin()) {
    add_action('admin_menu', 'add_admin_menu');
}

// Dynamic hook names
$hook_name = 'wp_footer';
add_action($hook_name, 'dynamic_callback');

// Removing hooks
// First add hook
add_action('wp_head', 'add_header_script', 10);
// Later remove it
remove_action('wp_head', 'add_header_script', 10);

// Remove ALL hooks from a tag (dangerous!)
remove_all_actions('wp_head');

// ========== ADVANCED FILTER TECHNIQUES ==========

// Filter with multiple parameters
add_filter('wp_nav_menu_objects', 'custom_menu_order', 10, 2);
function custom_menu_order($items, $args) {
    if ($args->theme_location == 'primary') {
        // Custom sorting logic here
    }
    return $items;
}

// Conditional filtering (only on specific pages)
add_filter('the_content', function($content) {
    if (is_front_page()) {
        $content = '<div class="home-content">' . $content . '</div>';
    }
    return $content;
});

// Dynamically generate filter name
$post_type = get_post_type();
add_filter("manage_{$post_type}_posts_columns", 'add_custom_columns');

// Get filter arguments count
$accepted_args = has_filter('the_title') ? 1 : 0;

// Current filter/action name
function debug_hook() {
    echo 'Current hook: ' . current_filter();
}
add_action('any_hook', 'debug_hook');

// Check if hook is running
if (doing_action('save_post')) {
    // This code runs during save_post action
}

// Hook into specific post type save
add_action('save_post_book', 'custom_book_save', 10, 3);
function custom_book_save($post_id, $post, $update) {
    // Only runs when saving 'book' post type
}
?>`,
        lineByLine: [
          "Line 1-9: Multiple parameters - Can pass extra data to callbacks",
          "Line 2: add_action('save_post', ..., 10, 3) - 3 parameters (post_id, post, update)",
          "Line 4-8: function log_post_changes($post_id, $post, $update) - Receives all parameters",
          "Line 12-14: Anonymous function - Closure as callback (PHP 5.3+)",
          "Line 17-19: Conditional hooking - Only registers in admin area",
          "Line 22-24: Dynamic hook names - Variable as hook name",
          "Line 27-30: Removing hooks - Must match original priority",
          "Line 33: remove_all_actions('wp_head') - Removes all head actions (dangerous!)",
          "Line 38-44: Filter with multiple parameters - $args provides context",
          "Line 47-52: Conditional filtering - PHP function inside add_filter",
          "Line 55-56: Dynamic filter names - Creates filter like manage_book_posts_columns",
          "Line 59: has_filter() - Checks if filter has callbacks",
          "Line 62: current_filter() - Returns name of currently running hook",
          "Line 68: doing_action('save_post') - Checks if action is running",
          "Line 71: add_action('save_post_book') - Post-type specific save hook"
        ],
        simpleMeaning: "Advanced hooks give you surgical control. You can attach multiple parameters, use anonymous functions for quick tasks, conditionally register hooks only when needed, and even remove other developers' hooks. It's like having a universal remote that can add, remove, or modify any WordPress action.",
        output: "Demonstrates advanced hook techniques: multiple parameters, anonymous functions, dynamic hook names, removing hooks, and conditional filtering.",
        note: "Use anonymous functions sparingly (harder to unhook). Match priority exactly when removing hooks. Use doing_action() to prevent recursive loops. Post-type specific hooks (save_post_{post_type}) are more efficient."
      },
      
      {
        name: "11. TRANSIENTS - CACHING",
        description: "Transients are temporary options that expire (caching for WordPress). Use set_transient() to store, get_transient() to retrieve, delete_transient() to remove. Transients use database by default, object cache if available (Memcached, Redis). Perfect for API responses, complex queries, or expensive operations.",
        code: `<?php
// Store expensive query result for 12 hours
function get_expensive_data() {
    $cached = get_transient('expensive_data_cache');
    
    if (false !== $cached) {
        return $cached; // Cache hit
    }
    
    // Cache miss - perform expensive operation
    $data = new WP_Query(array(
        'posts_per_page' => 100,
        'post_type' => 'book',
    ));
    
    // Store for 12 hours (43200 seconds)
    set_transient('expensive_data_cache', $data, 12 * HOUR_IN_SECONDS);
    
    return $data;
}

// Delete transient when data changes
add_action('save_post_book', 'clear_book_cache');
function clear_book_cache($post_id) {
    delete_transient('expensive_data_cache');
}

// Site transients (network-wide for multisite)
get_site_transient('site_wide_cache');
set_site_transient('site_wide_cache', $data, DAY_IN_SECONDS);

// Check if transient exists (but get is faster)
$exists = get_transient('my_cache') !== false;

// Transient timeout (how long to store)
set_transient('short_cache', $value, 5 * MINUTE_IN_SECONDS);
set_transient('day_cache', $value, DAY_IN_SECONDS);
set_transient('week_cache', $value, WEEK_IN_SECONDS);

// WordPress time constants
// MINUTE_IN_SECONDS = 60
// HOUR_IN_SECONDS = 3600
// DAY_IN_SECONDS = 86400
// WEEK_IN_SECONDS = 604800
// MONTH_IN_SECONDS = 2592000
// YEAR_IN_SECONDS = 31536000

// Delete all expired transients
function delete_expired_transients() {
    global $wpdb;
    $wpdb->query("DELETE FROM {$wpdb->options} 
                  WHERE option_name LIKE '_transient_timeout%' 
                  AND option_value < UNIX_TIMESTAMP()");
}
add_action('wp_scheduled_delete', 'delete_expired_transients');
?>`,
        lineByLine: [
          "Line 1: function get_expensive_data() - Function with caching",
          "Line 2: get_transient('expensive_data_cache') - Attempts to get cached data",
          "Line 4: if (false !== $cached) - Checks if cache exists (false = no cache)",
          "Line 5: return $cached - Returns cached data (cache hit)",
          "Line 8-12: Cache miss - Run expensive query",
          "Line 14: set_transient(..., $data, 12 * HOUR_IN_SECONDS) - Stores data for 12 hours",
          "Line 19: add_action('save_post_book', 'clear_book_cache') - Clears cache on update",
          "Line 20: delete_transient('expensive_data_cache') - Removes cached data",
          "Line 24-25: get_site_transient/set_site_transient - For multisite network",
          "Line 28: get_transient('my_cache') !== false - Checks existence (slower than get)",
          "Line 31-33: Time constants - Readable expiration times",
          "Line 36-39: WordPress time constants - Built-in multipliers",
          "Line 42-46: delete_expired_transients() - Manually cleanup expired transients"
        ],
        simpleMeaning: "Transients are like sticky notes with expiration dates. Write expensive query result on a note, stick it on the fridge (database), it stays there for X hours. Next time, just read the note instead of recalculating. When data changes, throw away the note and write a new one.",
        output: "Caches database queries and API responses to improve performance. Cache hit returns instantly, cache miss runs query then stores result.",
        note: "Always prefix transient keys to avoid collisions. Use get_transient check for false, not null. Set appropriate expiration times based on how often data changes. site_transients for multisite."
      },
      
      {
        name: "12. WP_CRON - SCHEDULED TASKS",
        description: "WP-Cron runs scheduled tasks when WordPress loads, not as a true system cron (triggered by site traffic). Use wp_schedule_event() for recurring tasks, wp_schedule_single_event() for one-time. Create custom schedules with cron_schedules filter. Better for time-critical tasks: use real cron.",
        code: `<?php
// Schedule a daily cron job
function schedule_daily_task() {
    if (!wp_next_scheduled('my_daily_event')) {
        wp_schedule_event(time(), 'daily', 'my_daily_event');
    }
}
add_action('wp', 'schedule_daily_task');

// Custom schedule intervals
add_filter('cron_schedules', 'add_custom_cron_intervals');
function add_custom_cron_intervals($schedules) {
    $schedules['every_five_minutes'] = array(
        'interval' => 300,
        'display' => __('Every 5 Minutes')
    );
    $schedules['twice_daily'] = array(
        'interval' => 43200,
        'display' => __('Twice Daily')
    );
    return $schedules;
}

// Cron job callback
add_action('my_daily_event', 'run_daily_cleanup');
function run_daily_cleanup() {
    // Delete expired transients
    global $wpdb;
    $wpdb->query("DELETE FROM {$wpdb->options} 
                  WHERE option_name LIKE '_transient_timeout%' 
                  AND option_value < UNIX_TIMESTAMP()");
    
    // Delete old post revisions
    $revisions = wp_get_post_revisions(array('posts_per_page' => -1));
    foreach($revisions as $revision) {
        wp_delete_post_revision($revision->ID);
    }
}

// Schedule one-time event (clear cache at specific time)
$timestamp = strtotime('tomorrow 2am');
wp_schedule_single_event($timestamp, 'clear_cache_event');

// Clear specific scheduled event
wp_clear_scheduled_hook('my_daily_event');

// Get all scheduled events
$cron_jobs = _get_cron_array();
print_r($cron_jobs);

// Check if cron is enabled
function is_cron_enabled() {
    return !defined('DISABLE_WP_CRON') || !DISABLE_WP_CRON;
}

// Run cron manually (disable default, set up real cron)
// Add to crontab: * * * * * wget -q -O - https://example.com/wp-cron.php?doing_wp_cron >/dev/null 2>&1
// Add to wp-config.php: define('DISABLE_WP_CRON', true);
?>`,
        lineByLine: [
          "Line 1: function schedule_daily_task() - Function to schedule cron",
          "Line 2: if (!wp_next_scheduled('my_daily_event')) - Checks if already scheduled",
          "Line 3: wp_schedule_event(time(), 'daily', 'my_daily_event') - Schedules daily task",
          "Line 6: add_action('wp', 'schedule_daily_task') - Schedules on first page load",
          "Line 9: add_filter('cron_schedules', ...) - Adds custom intervals",
          "Line 10: function add_custom_cron_intervals($schedules) - Filter callback",
          "Line 11-13: $schedules['every_five_minutes'] - New 5-minute schedule",
          "Line 12: 'interval' => 300 - 300 seconds = 5 minutes",
          "Line 17: add_action('my_daily_event', 'run_daily_cleanup') - Hook to scheduled event",
          "Line 18: function run_daily_cleanup() - What runs at scheduled time",
          "Line 20-23: Cleanup expired transients - Database maintenance",
          "Line 26-29: Delete old revisions - Housekeeping",
          "Line 32: wp_schedule_single_event($timestamp, 'clear_cache_event') - One-time event",
          "Line 35: wp_clear_scheduled_hook('my_daily_event') - Removes scheduled hook",
          "Line 38: _get_cron_array() - Returns all scheduled cron jobs"
        ],
        simpleMeaning: "WP-Cron is like an alarm clock that only rings when someone visits your site. Instead of running exactly at 2am, it waits until the next visitor arrives after 2am. Good for non-critical tasks (update stats, cleanup). Critical tasks need real system cron or external service.",
        output: "Schedules daily cleanup tasks, custom intervals (every 5 minutes, twice daily), one-time events, and manual cron triggers.",
        note: "WP-Cron accuracy depends on site traffic. Low traffic sites may never run tasks. Use real cron for critical jobs (backups, emails). Always check if already scheduled before adding."
      }
    ]
  }
};

export default learning;
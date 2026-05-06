// This is pure data export - NO React imports, NO "use client"
export const problems = {
  fresher: [
    {
      question: "Add Custom Field to Product Page",
      answer: "Use woocommerce_product_options_general_product_data action to add custom field. Save using woocommerce_process_product_meta hook. Display using woocommerce_single_product_summary action. All custom fields are stored in post meta. Use underscore prefix `_product_author` to hide from custom fields list.",
      example: `// Add custom field to product admin
add_action('woocommerce_product_options_general_product_data', 'add_author_custom_field');
function add_author_custom_field() {
    global $post;
    
    woocommerce_wp_text_input(array(
        'id' => '_product_author',
        'label' => __('Product Author', 'woocommerce'),
        'description' => __('Enter the author name for this product', 'woocommerce'),
        'desc_tip' => true,
        'placeholder' => 'e.g., John Doe'
    ));
}

// Save custom field
add_action('woocommerce_process_product_meta', 'save_author_custom_field');
function save_author_custom_field($post_id) {
    $product_author = isset($_POST['_product_author']) ? sanitize_text_field($_POST['_product_author']) : '';
    update_post_meta($post_id, '_product_author', $product_author);
}

// Display custom field on frontend
add_action('woocommerce_single_product_summary', 'display_product_author', 15);
function display_product_author() {
    global $product;
    $author = get_post_meta($product->get_id(), '_product_author', true);
    
    if ($author) {
        echo '<div class="product-author"><strong>Author:</strong> ' . esc_html($author) . '</div>';
    }
}`,
      output: "Author field appears in product data metabox, displays below product title on frontend"
    },
    {
      question: "Show Cart Total Items Shortcode",
      answer: "Use add_shortcode function. Get cart object using WC()->cart. Use get_cart_contents_count() to get item count. Return integer value. Works in posts, pages, widgets, and theme files. Use cart fragments for AJAX updates when adding products to cart.",
      example: `// Register shortcode
add_shortcode('cart_count', 'display_cart_item_count');
function display_cart_item_count() {
    if (!function_exists('WC')) {
        return 'WooCommerce not active';
    }
    
    $cart_count = WC()->cart ? WC()->cart->get_cart_contents_count() : 0;
    
    // Add wrapper with cart count class for styling
    $html = '<span class="cart-count">';
    $html .= sprintf(
        _n('%s item', '%s items', $cart_count, 'woocommerce'),
        $cart_count
    );
    $html .= '</span>';
    
    return $html;
}

// Variation with AJAX update
add_filter('woocommerce_add_to_cart_fragments', 'update_cart_count_fragment');
function update_cart_count_fragment($fragments) {
    $fragments['.cart-count'] = '<span class="cart-count">' . WC()->cart->get_cart_contents_count() . '</span>';
    return $fragments;
}`,
      output: "Shortcode [cart_count] displays '3 items' updating dynamically when cart changes"
    },
    {
      question: "Change Add to Cart Button Text",
      answer: "Filter woocommerce_product_single_add_to_cart_text for single product page. Filter woocommerce_product_add_to_cart_text for shop/archive pages. Conditional logic based on product category or ID. Always check product type before modifying button behavior for variable products.",
      example: `// Change button text on single product page
add_filter('woocommerce_product_single_add_to_cart_text', 'custom_add_to_cart_text', 10, 2);
function custom_add_to_cart_text($text, $product) {
    // Change for specific category
    if (has_term('books', 'product_cat', $product->get_id())) {
        $text = __('Buy Now', 'woocommerce');
    }
    
    // Change for specific product ID
    if ($product->get_id() == 123) {
        $text = __('Purchase', 'woocommerce');
    }
    
    // Change based on product type
    if ($product->is_type('variable')) {
        $text = __('Select Options', 'woocommerce');
    }
    
    return $text;
}

// Change button text on shop/archive pages
add_filter('woocommerce_product_add_to_cart_text', 'custom_archive_add_to_cart_text', 10, 2);
function custom_archive_add_to_cart_text($text, $product) {
    if (has_term('featured', 'product_cat', $product->get_id())) {
        $text = __('Shop Now', 'woocommerce');
    }
    
    if (!$product->is_in_stock()) {
        $text = __('Read More', 'woocommerce');
    }
    
    return $text;
}

// Change button text based on user role
add_filter('woocommerce_product_single_add_to_cart_text', 'role_based_button_text', 10, 2);
function role_based_button_text($text, $product) {
    if (current_user_can('wholesale_customer')) {
        $text = __('Request Quote', 'woocommerce');
    }
    return $text;
}`,
      output: "Add to Cart button text changes to 'Buy Now' for books category, 'Select Options' for variable products"
    },
    {
      question: "Add Custom Product Badge",
      answer: "Use woocommerce_before_shop_loop_item_title hook for archive pages. Use woocommerce_before_single_product_summary for single page. Calculate total sales using get_post_meta or wc_get_orders. Display badge with custom CSS. Use CSS positioning to ensure badges don't break layout across different themes.",
      example: `// Add best seller badge
add_action('woocommerce_before_shop_loop_item_title', 'add_best_seller_badge', 5);
add_action('woocommerce_before_single_product_summary', 'add_best_seller_badge', 5);
function add_best_seller_badge() {
    global $product;
    
    // Get total sales for product
    $total_sales = get_post_meta($product->get_id(), 'total_sales', true);
    
    // Check if product is best seller (sold more than 50)
    if ($total_sales > 50) {
        echo '<span class="best-seller-badge">🏆 Best Seller</span>';
    }
    
    // Check for low stock
    if ($product->is_in_stock() && $product->get_stock_quantity() < 5 && $product->get_stock_quantity() > 0) {
        echo '<span class="low-stock-badge">⚠️ Almost Gone</span>';
    }
    
    // Check for new product (created within last 30 days)
    $post_date = get_the_time('U');
    $days_old = (time() - $post_date) / DAY_IN_SECONDS;
    if ($days_old < 30) {
        echo '<span class="new-badge">✨ New Arrival</span>';
    }
}

// Add custom CSS for badges
add_action('wp_head', 'add_badge_styles');
function add_badge_styles() {
    echo '<style>
        .best-seller-badge, .low-stock-badge, .new-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background: #ff6b6b;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            z-index: 9;
        }
        .best-seller-badge { background: #ffd700; color: #333; }
        .new-badge { background: #4caf50; }
        .low-stock-badge { background: #ff9800; }
    </style>';
}

// Badge shortcode for custom placement
add_shortcode('product_badge', 'product_badge_shortcode');
function product_badge_shortcode($atts) {
    $atts = shortcode_atts(array('id' => 0), $atts);
    $product = wc_get_product($atts['id']);
    if (!$product) return '';
    
    $total_sales = get_post_meta($product->get_id(), 'total_sales', true);
    if ($total_sales > 50) {
        return '<span class="best-seller-badge">Best Seller!</span>';
    }
    return '';
}`,
      output: "'Best Seller' badge appears on products with more than 50 sales"
    },
    {
      question: "Modify Product Price Display",
      answer: "Filter woocommerce_get_price_html. Detect product type using is_type() method. Use conditionals to modify price string. Return modified price HTML. Test price modifications with all product types (simple, variable, grouped, external).",
      example: `add_filter('woocommerce_get_price_html', 'customize_price_display', 10, 2);
function customize_price_display($price, $product) {
    // For variable products - add "Starting from"
    if ($product->is_type('variable')) {
        $price = '<span class="starting-from">Starting from </span>' . $price;
    }
    
    // For sale products - add "Save percentage"
    if ($product->is_on_sale()) {
        $regular_price = $product->get_regular_price();
        $sale_price = $product->get_sale_price();
        
        if (!empty($regular_price) && !empty($sale_price)) {
            $percentage = round(100 - ($sale_price / $regular_price * 100));
            $saved_amount = $regular_price - $sale_price;
            $price .= '<span class="saving-badge"> Save ' . $percentage . '%</span>';
        }
    }
    
    // For free products
    if ($product->get_price() == 0) {
        $price = '<span class="free-price">FREE</span>';
    }
    
    return $price;
}

// Add "Only" text for sale items
add_filter('woocommerce_format_sale_price', 'add_only_text_to_sale_price', 10, 3);
function add_only_text_to_sale_price($price, $regular_price, $sale_price) {
    return '<span class="only-text">Only </span>' . $sale_price . ' <del>' . $regular_price . '</del>';
}

// Add price suffix based on quantity
add_filter('woocommerce_get_price_html', 'add_price_suffix', 10, 2);
function add_price_suffix($price, $product) {
    if ($product->is_type('simple')) {
        $price .= ' <span class="price-suffix">(per piece)</span>';
    }
    return $price;
}`,
      output: "Variable products show 'Starting from $XX', sale items show savings percentage"
    },
    {
      question: "Add Custom Tab on Product Page",
      answer: "Use woocommerce_product_tabs filter to add custom tab. Define tab callback to display content. Use priority to position tab. Content can be static HTML or dynamic data. Use priority to control tab order (lower numbers appear first).",
      example: `// Add custom product tab
add_filter('woocommerce_product_tabs', 'add_custom_product_tab');
function add_custom_product_tab($tabs) {
    // Add new tab
    $tabs['qa_tab'] = array(
        'title' => __('Q&A', 'woocommerce'),
        'priority' => 20,
        'callback' => 'custom_product_tab_content'
    );
    
    // Modify existing tab title
    $tabs['reviews']['title'] = __('Reviews & Ratings', 'woocommerce');
    
    // Remove specific tab
    // unset($tabs['additional_information']);
    
    return $tabs;
}

// Tab content callback
function custom_product_tab_content() {
    global $product;
    ?>
    <div class="product-qa-section">
        <h2>Have Questions? We're Here to Help!</h2>
        <div class="qa-form">
            <form id="qa-submit-form">
                <input type="text" name="qa_name" placeholder="Your Name" required>
                <input type="email" name="qa_email" placeholder="Your Email" required>
                <textarea name="qa_question" rows="4" placeholder="Ask your question..." required></textarea>
                <button type="submit">Submit Question</button>
            </form>
        </div>
        <div class="qa-list">
            <h3>Frequently Asked Questions</h3>
            <?php
            $qa_data = get_post_meta($product->get_id(), '_product_qa', true);
            if ($qa_data && is_array($qa_data)) {
                foreach ($qa_data as $qa) {
                    echo '<div class="qa-item">';
                    echo '<p class="qa-question"><strong>Q:</strong> ' . esc_html($qa['question']) . '</p>';
                    echo '<p class="qa-answer"><strong>A:</strong> ' . esc_html($qa['answer']) . '</p>';
                    echo '</div>';
                }
            } else {
                echo '<p>No questions yet. Be the first to ask!</p>';
            }
            ?>
        </div>
    </div>
    
    <style>
        .product-qa-section { margin: 30px 0; }
        .qa-form input, .qa-form textarea { width: 100%; margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
        .qa-form button { background: #0073aa; color: white; padding: 10px 20px; border: none; cursor: pointer; }
        .qa-item { margin-bottom: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px; }
        .qa-question { font-weight: bold; margin-bottom: 10px; }
        .qa-answer { color: #555; }
    </style>
    <?php
}

// Save Q&A AJAX handler
add_action('wp_ajax_submit_product_question', 'handle_qa_submission');
add_action('wp_ajax_nopriv_submit_product_question', 'handle_qa_submission');
function handle_qa_submission() {
    $product_id = intval($_POST['product_id']);
    $question = sanitize_text_field($_POST['question']);
    $name = sanitize_text_field($_POST['name']);
    
    $qa_data = get_post_meta($product_id, '_product_qa', true);
    if (!is_array($qa_data)) {
        $qa_data = array();
    }
    
    $qa_data[] = array(
        'question' => $question,
        'name' => $name,
        'date' => current_time('mysql'),
        'answer' => 'Pending review'
    );
    
    update_post_meta($product_id, '_product_qa', $qa_data);
    
    wp_send_json_success(array('message' => 'Question submitted successfully!'));
}`,
      output: "New 'Q&A' tab appears on product page with form and existing questions"
    },
    {
      question: "Change WooCommerce Breadcrumbs",
      answer: "Use woocommerce_breadcrumb_defaults filter. Modify home text, separator, and breadcrumb items. Add custom delimiters with HTML/CSS. Conditionally modify breadcrumbs based on page type. Breadcrumb modifications affect all WooCommerce pages including shop, categories, products.",
      example: `// Modify breadcrumb defaults
add_filter('woocommerce_breadcrumb_defaults', 'custom_breadcrumb_defaults');
function custom_breadcrumb_defaults($defaults) {
    $defaults['home'] = '🏠 Home';
    $defaults['delimiter'] = ' › ';
    $defaults['before'] = '<span class="breadcrumb-current">';
    $defaults['after'] = '</span>';
    $defaults['wrap_before'] = '<nav class="woocommerce-breadcrumb custom-breadcrumb">';
    $defaults['wrap_after'] = '</nav>';
    return $defaults;
}

// Remove shop page from breadcrumb
add_filter('woocommerce_breadcrumb_home_url', 'custom_breadcrumb_home_url');
function custom_breadcrumb_home_url($url) {
    return home_url('/');
}

// Add custom breadcrumb items
add_filter('woocommerce_get_breadcrumb', 'add_custom_breadcrumb_items', 10, 2);
function add_custom_breadcrumb_items($breadcrumb, $breadcrumb_instance) {
    $new_breadcrumb = array();
    
    foreach ($breadcrumb as $key => $item) {
        $new_breadcrumb[] = $item;
        
        // Add 'Custom Link' after home
        if ($key == 0 && !is_product_category()) {
            $new_breadcrumb[] = array('Special Offers', '/special-offers');
        }
    }
    
    return $new_breadcrumb;
}

// Add schema markup to breadcrumbs
add_filter('woocommerce_breadcrumb_defaults', 'add_breadcrumb_schema');
function add_breadcrumb_schema($defaults) {
    $defaults['wrap_before'] = '<nav class="woocommerce-breadcrumb" typeof="BreadcrumbList" vocab="https://schema.org/">';
    return $defaults;
}

// Add CSS styling for breadcrumbs
add_action('wp_head', 'add_breadcrumb_styles');
function add_breadcrumb_styles() {
    echo '<style>
        .custom-breadcrumb {
            padding: 15px 0;
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
        }
        .custom-breadcrumb a {
            text-decoration: none;
            color: #666;
        }
        .custom-breadcrumb a:hover {
            color: #0073aa;
        }
        .breadcrumb-current {
            color: #333;
            font-weight: bold;
        }
    </style>';
}`,
      output: "Breadcrumbs show '🏠 Home › Category › Product' with custom styling"
    },
    {
      question: "Add Custom Product Type",
      answer: "Extend WC_Product class. Register new product type using woocommerce_product_class filter and product_type_selector filter. Add custom fields and save handler. Override product methods for custom behavior. Custom product types need careful handling of add-to-cart and stock management.",
      example: `// Register custom product type
add_filter('product_type_selector', 'add_custom_product_type');
function add_custom_product_type($types) {
    $types['digital_download'] = __('Digital Download', 'woocommerce');
    return $types;
}

// Load custom product class
add_filter('woocommerce_product_class', 'load_custom_product_class', 10, 2);
function load_custom_product_class($classname, $product_type) {
    if ($product_type == 'digital_download') {
        $classname = 'WC_Product_Digital_Download';
    }
    return $classname;
}

// Define custom product class
add_action('init', 'init_custom_product_class');
function init_custom_product_class() {
    if (!class_exists('WC_Product_Digital_Download')) {
        class WC_Product_Digital_Download extends WC_Product {
            public function __construct($product) {
                $this->product_type = 'digital_download';
                parent::__construct($product);
            }
            
            public function get_download_limit() {
                return get_post_meta($this->get_id(), '_download_limit', true);
            }
            
            public function get_file_url() {
                return get_post_meta($this->get_id(), '_file_url', true);
            }
            
            public function add_to_cart_text() {
                return __('Download Now', 'woocommerce');
            }
            
            public function single_add_to_cart_text() {
                return __('Purchase & Download', 'woocommerce');
            }
        }
    }
}

// Add custom fields to product data metabox
add_action('woocommerce_product_options_general_product_data', 'add_digital_download_fields');
function add_digital_download_fields() {
    global $post;
    $product = wc_get_product($post->ID);
    
    if ($product && $product->get_type() !== 'digital_download') {
        return;
    }
    
    echo '<div class="options_group show_if_digital_download">';
    
    woocommerce_wp_text_input(array(
        'id' => '_file_url',
        'label' => __('File URL', 'woocommerce'),
        'placeholder' => 'https://example.com/file.zip',
        'description' => __('URL of the downloadable file', 'woocommerce'),
        'desc_tip' => true
    ));
    
    woocommerce_wp_text_input(array(
        'id' => '_download_limit',
        'label' => __('Download Limit', 'woocommerce'),
        'type' => 'number',
        'placeholder' => 'Unlimited',
        'description' => __('Maximum number of downloads allowed', 'woocommerce')
    ));
    
    echo '</div>';
}

// Save custom fields
add_action('woocommerce_process_product_meta', 'save_digital_download_fields');
function save_digital_download_fields($post_id) {
    if (isset($_POST['_file_url'])) {
        update_post_meta($post_id, '_file_url', esc_url_raw($_POST['_file_url']));
    }
    if (isset($_POST['_download_limit'])) {
        update_post_meta($post_id, '_download_limit', intval($_POST['_download_limit']));
    }
}

// Custom add to cart button for product type
add_action('woocommerce_digital_download_add_to_cart', 'digital_download_add_to_cart_template');
function digital_download_add_to_cart_template() {
    wc_get_template('loop/add-to-cart.php');
}

// Add stock status for digital downloads
add_action('woocommerce_product_options_stock_status', 'add_digital_download_stock_message');
function add_digital_download_stock_message() {
    global $post;
    $product = wc_get_product($post->ID);
    
    if ($product && $product->get_type() === 'digital_download') {
        echo '<p class="form-field">Digital downloads never go out of stock!</p>';
    }
}`,
      output: "New 'Digital Download' product type appears with custom file URL and download limit fields"
    },
    {
      question: "Add Product Additional Information Section",
      answer: "Use woocommerce_display_product_attributes filter. Modify attribute display using custom template. Add custom data like weight, dimensions, SKU, categories in organized table. Use wc_get_template to override core templates safely.",
      example: `// Modify additional information tab
add_filter('woocommerce_display_product_attributes', 'custom_product_attributes', 10, 2);
function custom_product_attributes($product_attributes, $product) {
    $custom_attributes = array();
    
    // Add weight and dimensions
    if ($product->has_weight()) {
        $custom_attributes['weight'] = array(
            'label' => __('Weight', 'woocommerce'),
            'value' => $product->get_weight() . ' ' . get_option('woocommerce_weight_unit')
        );
    }
    
    if ($product->has_dimensions()) {
        $custom_attributes['dimensions'] = array(
            'label' => __('Dimensions', 'woocommerce'),
            'value' => $product->get_dimensions()
        );
    }
    
    // Add SKU (if not empty)
    if ($product->get_sku()) {
        $custom_attributes['sku'] = array(
            'label' => __('SKU', 'woocommerce'),
            'value' => $product->get_sku()
        );
    }
    
    // Add categories
    $categories = get_the_terms($product->get_id(), 'product_cat');
    if ($categories && !is_wp_error($categories)) {
        $cat_names = wp_list_pluck($categories, 'name');
        $custom_attributes['categories'] = array(
            'label' => __('Categories', 'woocommerce'),
            'value' => implode(', ', $cat_names)
        );
    }
    
    // Add tags
    $tags = get_the_terms($product->get_id(), 'product_tag');
    if ($tags && !is_wp_error($tags)) {
        $tag_names = wp_list_pluck($tags, 'name');
        $custom_attributes['tags'] = array(
            'label' => __('Tags', 'woocommerce'),
            'value' => implode(', ', $tag_names)
        );
    }
    
    return array_merge($custom_attributes, $product_attributes);
}

// Custom additional information template
add_filter('wc_get_template', 'custom_additional_info_template', 10, 2);
function custom_additional_info_template($template, $template_name) {
    if ($template_name == 'single-product/tabs/additional-information.php') {
        $template = get_stylesheet_directory() . '/woocommerce/custom-additional-information.php';
    }
    return $template;
}`,
      output: "Additional information tab shows weight, dimensions, SKU, categories in organized table"
    }
  ],

  experienced: [
    {
      question: "Implement Cart Total Discount",
      answer: "Use woocommerce_before_calculate_totals action. Calculate cart subtotal. Apply discount using add_fee() for negative fee. Or generate automatic coupon code. Test discount calculations with tax and shipping included/excluded.",
      example: `// Method 1: Automatic discount using coupon
add_action('woocommerce_before_cart', 'apply_automatic_discount');
function apply_automatic_discount() {
    $cart_total = WC()->cart->get_subtotal();
    
    if ($cart_total >= 100) {
        if (!WC()->cart->has_discount('bulk_discount')) {
            WC()->cart->apply_coupon('bulk_discount');
        }
    } else {
        if (WC()->cart->has_discount('bulk_discount')) {
            WC()->cart->remove_coupon('bulk_discount');
        }
    }
}

// Create coupon programmatically
function create_bulk_discount_coupon() {
    $coupon_code = 'bulk_discount';
    $coupon = new WC_Coupon($coupon_code);
    
    if (!$coupon->get_id()) {
        $new_coupon = array(
            'post_title' => $coupon_code,
            'post_content' => '',
            'post_status' => 'publish',
            'post_author' => 1,
            'post_type' => 'shop_coupon'
        );
        
        $coupon_id = wp_insert_post($new_coupon);
        
        update_post_meta($coupon_id, 'discount_type', 'percent');
        update_post_meta($coupon_id, 'coupon_amount', '10');
        update_post_meta($coupon_id, 'minimum_amount', '100');
        update_post_meta($coupon_id, 'individual_use', 'yes');
        update_post_meta($coupon_id, 'usage_limit', '');
    }
}
register_activation_hook(__FILE__, 'create_bulk_discount_coupon');

// Method 2: Custom discount using fee
add_action('woocommerce_cart_calculate_fees', 'add_bulk_discount_fee');
function add_bulk_discount_fee($cart) {
    if (is_admin() && !defined('DOING_AJAX')) {
        return;
    }
    
    $subtotal = $cart->get_subtotal();
    $discount = 0;
    
    if ($subtotal > 100) {
        $discount = $subtotal * 0.10; // 10% discount
        $cart->add_fee(__('Bulk Discount (10%)', 'woocommerce'), -$discount);
    }
}

// Add discount progress bar to cart
add_action('woocommerce_before_cart', 'add_discount_progress_bar');
function add_discount_progress_bar() {
    $cart_total = WC()->cart->get_subtotal();
    $threshold = 100;
    $remaining = max(0, $threshold - $cart_total);
    
    if ($remaining > 0) {
        $percentage = min(100, ($cart_total / $threshold) * 100);
        echo '<div class="discount-progress">';
        echo '<p>Add <strong>' . wc_price($remaining) . '</strong> more to get 10% off!</p>';
        echo '<div class="progress-bar"><div class="progress" style="width: ' . $percentage . '%;"></div></div>';
        echo '</div>';
        
        echo '<style>
            .discount-progress { background: #f8f9fa; padding: 15px; margin: 20px 0; border-radius: 8px; text-align: center; }
            .progress-bar { background: #e0e0e0; height: 10px; border-radius: 5px; overflow: hidden; margin-top: 10px; }
            .progress { background: #4caf50; height: 100%; transition: width 0.3s; }
        </style>';
    }
}`,
      output: "10% discount automatically applied when cart total exceeds $100 with progress bar showing how much more to add"
    },
    {
      question: "Custom Payment Gateway",
      answer: "Extend WC_Payment_Gateway class. Implement init_form_fields, process_payment, and thankyou_page methods. Log transaction data to custom log file. Always sanitize and validate log data to prevent injection attacks.",
      example: `// Register custom payment gateway
add_filter('woocommerce_payment_gateways', 'add_custom_payment_gateway');
function add_custom_payment_gateway($gateways) {
    $gateways[] = 'WC_Gateway_Offline_Log';
    return $gateways;
}

// Custom payment gateway class
add_action('plugins_loaded', 'init_custom_payment_gateway');
function init_custom_payment_gateway() {
    if (!class_exists('WC_Payment_Gateway')) {
        return;
    }
    
    class WC_Gateway_Offline_Log extends WC_Payment_Gateway {
        public function __construct() {
            $this->id = 'offline_log';
            $this->icon = apply_filters('woocommerce_offline_log_icon', '');
            $this->has_fields = false;
            $this->method_title = __('Offline Payment with Log', 'woocommerce');
            $this->method_description = __('Accepts offline payments and logs all transactions', 'woocommerce');
            
            $this->init_form_fields();
            $this->init_settings();
            
            $this->title = $this->get_option('title');
            $this->description = $this->get_option('description');
            $this->enabled = $this->get_option('enabled');
            $this->instructions = $this->get_option('instructions');
            
            add_action('woocommerce_update_options_payment_gateways_' . $this->id, array($this, 'process_admin_options'));
            add_action('woocommerce_thankyou_' . $this->id, array($this, 'thankyou_page'));
        }
        
        public function init_form_fields() {
            $this->form_fields = array(
                'enabled' => array(
                    'title' => __('Enable/Disable', 'woocommerce'),
                    'type' => 'checkbox',
                    'label' => __('Enable Offline Payment Logging', 'woocommerce'),
                    'default' => 'yes'
                ),
                'title' => array(
                    'title' => __('Title', 'woocommerce'),
                    'type' => 'text',
                    'description' => __('Payment method title shown to customers', 'woocommerce'),
                    'default' => __('Offline Payment', 'woocommerce'),
                    'desc_tip' => true
                ),
                'description' => array(
                    'title' => __('Description', 'woocommerce'),
                    'type' => 'textarea',
                    'description' => __('Payment method description', 'woocommerce'),
                    'default' => __('Pay offline via bank transfer, cash, or check', 'woocommerce')
                ),
                'instructions' => array(
                    'title' => __('Instructions', 'woocommerce'),
                    'type' => 'textarea',
                    'description' => __('Instructions shown on thank you page', 'woocommerce'),
                    'default' => __('Thank you for your order. Please complete your payment offline.', 'woocommerce')
                )
            );
        }
        
        public function process_payment($order_id) {
            $order = wc_get_order($order_id);
            
            // Log transaction with all details
            $this->log_transaction($order);
            
            // Mark as processing or on-hold
            $order->update_status('on-hold', __('Awaiting offline payment', 'woocommerce'));
            
            // Reduce stock levels
            wc_reduce_stock_levels($order_id);
            
            // Empty cart
            WC()->cart->empty_cart();
            
            // Return thank you redirect
            return array(
                'result' => 'success',
                'redirect' => $this->get_return_url($order)
            );
        }
        
        private function log_transaction($order) {
            $log_file = WP_CONTENT_DIR . '/offline-payments.log';
            $log_entry = array(
                'timestamp' => current_time('mysql'),
                'order_id' => $order->get_id(),
                'customer_name' => $order->get_billing_first_name() . ' ' . $order->get_billing_last_name(),
                'customer_email' => $order->get_billing_email(),
                'order_total' => $order->get_total(),
                'order_currency' => $order->get_currency(),
                'payment_method' => $this->title,
                'items' => array()
            );
            
            foreach ($order->get_items() as $item) {
                $log_entry['items'][] = array(
                    'product' => $item->get_name(),
                    'quantity' => $item->get_quantity(),
                    'subtotal' => $item->get_subtotal()
                );
            }
            
            $log_line = json_encode($log_entry) . PHP_EOL;
            file_put_contents($log_file, $log_line, FILE_APPEND | LOCK_EX);
            
            // Also save as order meta for admin view
            update_post_meta($order->get_id(), '_offline_payment_logged', current_time('timestamp'));
        }
        
        public function thankyou_page($order_id) {
            $order = wc_get_order($order_id);
            if ($this->instructions) {
                echo wpautop(wptexturize(wp_kses_post($this->instructions)));
            }
        }
    }
}

// Add admin notice for pending offline payments
add_action('admin_notices', 'offline_payment_admin_notice');
function offline_payment_admin_notice() {
    $pending_orders = wc_get_orders(array(
        'status' => 'on-hold',
        'payment_method' => 'offline_log',
        'limit' => 5
    ));
    
    if (!empty($pending_orders)) {
        echo '<div class="notice notice-warning is-dismissible">';
        echo '<p><strong>Pending Offline Payments:</strong> ' . count($pending_orders) . ' orders awaiting confirmation.</p>';
        echo '</div>';
    }
}`,
      output: "Customer selects 'Offline Payment' during checkout, order marked on-hold, transaction logged to file"
    },
    {
      question: "Out of Stock Admin Email",
      answer: "Use woocommerce_product_set_stock hook. Check new stock quantity. Send email using wp_mail() when stock becomes 0. Prevent duplicate emails using transient. Use transients to prevent duplicate email spam during bulk updates.",
      example: `// Send email when product goes out of stock
add_action('woocommerce_product_set_stock', 'send_out_of_stock_alert', 10, 1);
add_action('woocommerce_variation_set_stock', 'send_out_of_stock_alert', 10, 1);
function send_out_of_stock_alert($product) {
    $stock_quantity = $product->get_stock_quantity();
    $product_id = $product->get_id();
    
    // Check if product is now out of stock
    if ($stock_quantity === 0 || $stock_quantity <= 0) {
        // Prevent duplicate emails using transient (30 minute cooldown)
        $last_sent = get_transient('oos_alert_' . $product_id);
        if ($last_sent) {
            return;
        }
        
        // Set transient to prevent duplicate alerts
        set_transient('oos_alert_' . $product_id, time(), 30 * MINUTE_IN_SECONDS);
        
        // Prepare email
        $to = get_option('admin_email');
        $subject = sprintf(__('Product Out of Stock: %s', 'woocommerce'), $product->get_name());
        
        $product_url = get_permalink($product_id);
        $edit_url = get_edit_post_link($product_id);
        
        $message = "A product has gone out of stock.\n\n";
        $message .= "Product: " . $product->get_name() . "\n";
        $message .= "SKU: " . $product->get_sku() . "\n";
        $message .= "Product ID: " . $product_id . "\n";
        $message .= "View Product: " . $product_url . "\n";
        $message .= "Edit Product: " . $edit_url . "\n\n";
        $message .= "Stock status was changed to: Out of Stock\n";
        $message .= "Time: " . current_time('mysql') . "\n";
        
        // Add recent sales data
        $total_sold = get_post_meta($product_id, 'total_sales', true);
        if ($total_sold) {
            $message .= "Total units sold: " . $total_sold . "\n";
        }
        
        // Send email
        wp_mail($to, $subject, $message, array('Content-Type: text/plain; charset=UTF-8'));
        
        // Also send SMS via API (example)
        // $this->send_sms_alert($product);
    }
}

// Send alert for low stock (less than 5 units)
add_action('woocommerce_product_set_stock', 'send_low_stock_alert', 10, 1);
function send_low_stock_alert($product) {
    $stock_quantity = $product->get_stock_quantity();
    $product_id = $product->get_id();
    
    if ($stock_quantity > 0 && $stock_quantity <= 5) {
        $last_sent = get_transient('low_stock_alert_' . $product_id);
        if ($last_sent) {
            return;
        }
        
        set_transient('low_stock_alert_' . $product_id, time(), 12 * HOUR_IN_SECONDS);
        
        $to = get_option('admin_email');
        $subject = sprintf(__('Low Stock Alert: %s', 'woocommerce'), $product->get_name());
        
        $message = sprintf(
            "Product '%s' is running low on stock!\n\n",
            $product->get_name()
        );
        $message .= "Current Stock: " . $stock_quantity . " units\n";
        $message .= "SKU: " . $product->get_sku() . "\n";
        $message .= "Product ID: " . $product_id . "\n";
        $message .= "Edit Product: " . get_edit_post_link($product_id) . "\n";
        
        wp_mail($to, $subject, $message);
    }
}

// Add dashboard widget for stock alerts
add_action('wp_dashboard_setup', 'add_stock_alert_widget');
function add_stock_alert_widget() {
    wp_add_dashboard_widget('stock_alert_widget', 'Stock Alerts', 'display_stock_alert_widget');
}

function display_stock_alert_widget() {
    $low_stock_products = wc_get_products(array(
        'stock_quantity' => array(1, 5),
        'stock_status' => 'instock',
        'limit' => 10
    ));
    
    $out_of_stock_products = wc_get_products(array(
        'stock_status' => 'outofstock',
        'limit' => 10
    ));
    
    echo '<div class="stock-alerts-widget">';
    
    if (!empty($out_of_stock_products)) {
        echo '<h3>Out of Stock Products</h3><ul>';
        foreach ($out_of_stock_products as $product) {
            echo '<li><a href="' . get_edit_post_link($product->get_id()) . '">' . $product->get_name() . '</a></li>';
        }
        echo '</ul>';
    }
    
    if (!empty($low_stock_products)) {
        echo '<h3>Low Stock Products (&lt;5 units)</h3><ul>';
        foreach ($low_stock_products as $product) {
            echo '<li><a href="' . get_edit_post_link($product->get_id()) . '">' . $product->get_name() . '</a> - Stock: ' . $product->get_stock_quantity() . '</li>';
        }
        echo '</ul>';
    }
    
    if (empty($out_of_stock_products) && empty($low_stock_products)) {
        echo '<p>All products have sufficient stock!</p>';
    }
    
    echo '</div>';
}`,
      output: "Admin receives email alert when product goes out of stock or reaches low stock threshold"
    }
  ]
};

export default problems;
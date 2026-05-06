export const learning = {
  basic: {
    title: "🛒 WOOCOMMERCE BASICS: COMPLETE E-COMMERCE DOCUMENTATION",
    description: "Comprehensive WooCommerce guide covering everything from product creation to cart management. WooCommerce is the leading e-commerce plugin for WordPress, powering over 30% of all online stores. This documentation includes 15+ topics with practical code examples, line-by-line explanations, and real-world use cases. Perfect for beginners learning WooCommerce development and building custom online stores.",
    
    topics: [
      {
        name: "1. PRODUCT CREATION - Simple Product",
        description: "Create WooCommerce products programmatically using WC_Product_Simple class. Set product properties like name, price, description, SKU, stock status, and categories. Use save() method to persist to database. Supports all product types: simple, variable, grouped, external, and subscription.",
        code: `// Create a simple product programmatically
function create_custom_product() {
    // Create new product object
    $product = new WC_Product_Simple();
    
    // Set basic product data
    $product->set_name('Custom Product');           // Product title
    $product->set_slug('custom-product');            // URL slug
    $product->set_description('This is a custom product description');  // Long description
    $product->set_short_description('Short description here');  // Excerpt
    
    // Set pricing
    $product->set_price(99.99);                     // Regular price
    $product->set_regular_price(99.99);             // Regular price (same as price)
    $product->set_sale_price(79.99);                // Sale price (optional)
    
    // Set inventory
    $product->set_manage_stock(true);               // Enable stock management
    $product->set_stock_quantity(50);               // Stock quantity
    $product->set_stock_status('instock');          // Stock status (instock/outofstock/onbackorder)
    $product->set_backorders('no');                 // Backorders allowed? (no/notify/yes)
    
    // Set visibility and status
    $product->set_catalog_visibility('visible');    // Catalog visibility
    $product->set_status('publish');                // Product status (publish/draft)
    
    // Set categories and tags
    $product->set_category_ids(array(15, 20));      // Category IDs
    $product->set_tag_ids(array(5, 8));             // Tag IDs
    
    // Set dimensions and weight (for shipping)
    $product->set_weight(1.5);                      // Weight in kg/lbs
    $product->set_dimensions(array(10, 20, 5));     // Length, width, height
    
    // Set images
    $attachment_id = 123; // Media attachment ID
    $product->set_image_id($attachment_id);          // Main image
    $product->set_gallery_image_ids(array(124, 125)); // Gallery images
    
    // Save product to database
    $product_id = $product->save();
    
    return $product_id;
}
add_action('init', 'create_custom_product');

// Update existing product
function update_product_price($product_id, $new_price) {
    $product = wc_get_product($product_id);
    if ($product) {
        $product->set_price($new_price);
        $product->set_regular_price($new_price);
        $product->save();
    }
}

// Get product data
function get_product_info($product_id) {
    $product = wc_get_product($product_id);
    if ($product) {
        echo 'Name: ' . $product->get_name();
        echo 'Price: ' . wc_price($product->get_price());
        echo 'Stock: ' . $product->get_stock_quantity();
        echo 'SKU: ' . $product->get_sku();
    }
}`,
        lineByLine: [
          "Line 1: function create_custom_product() - Function to create product programmatically",
          "Line 2: $product = new WC_Product_Simple() - Creates new simple product object",
          "Line 5: set_name('Custom Product') - Sets product title/name",
          "Line 6: set_slug('custom-product') - Sets URL-friendly slug",
          "Line 7: set_description() - Sets long product description",
          "Line 8: set_short_description() - Sets short excerpt",
          "Line 11: set_price(99.99) - Sets product price",
          "Line 12: set_regular_price(99.99) - Sets regular (non-sale) price",
          "Line 13: set_sale_price(79.99) - Sets sale price (optional)",
          "Line 16: set_manage_stock(true) - Enables stock management tracking",
          "Line 17: set_stock_quantity(50) - Sets available stock quantity",
          "Line 18: set_stock_status('instock') - Sets stock status",
          "Line 19: set_backorders('no') - Disables backorders",
          "Line 22: set_catalog_visibility('visible') - Product appears in shop/search",
          "Line 23: set_status('publish') - Publishes product",
          "Line 26: set_category_ids(array(15,20)) - Assigns categories by ID",
          "Line 29: set_weight(1.5) - Sets shipping weight",
          "Line 30: set_dimensions(array(10,20,5)) - Sets dimensions",
          "Line 33-34: set_image_id() and set_gallery_image_ids() - Sets product images",
          "Line 37: $product->save() - Saves product to database",
          "Line 40: add_action('init', ...) - Runs function on WordPress initialization"
        ],
        simpleMeaning: "Programmatically creating products is like filling out an online form with code. WC_Product_Simple is the blueprint for simple products. Set properties like name, price, stock like filling fields, then save() submits the product to your store's database.",
        output: "New product created in WooCommerce with name 'Custom Product', price $99.99, stock quantity 50, published and visible in shop.",
        note: "Always run product creation on activation or admin_init, not on every page load. Use wc_get_product() to retrieve existing products. Sale price must be less than regular price."
      },
      
      {
        name: "2. CART HOOKS - Adding to Cart Events",
        description: "WooCommerce provides hooks to intercept and modify cart behavior. Use woocommerce_add_to_cart to run code when product added. Validate additions with woocommerce_add_to_cart_validation. Modify cart items with woocommerce_before_calculate_totals.",
        code: `// Hook when product is added to cart
add_action('woocommerce_add_to_cart', 'log_product_addition', 10, 6);
function log_product_addition($cart_item_key, $product_id, $quantity, $variation_id, $variation, $cart_item_data) {
    // Log product addition
    error_log("Product {$product_id} added to cart with quantity {$quantity}");
    
    // Get product object
    $product = wc_get_product($product_id);
    $product_name = $product->get_name();
    
    // Add custom session data
    WC()->session->set('last_added_product', $product_id);
    
    // Set cookie for tracking
    setcookie('cart_add_time', current_time('timestamp'), time() + 3600, '/');
}

// Validate before adding to cart
add_filter('woocommerce_add_to_cart_validation', 'validate_cart_addition', 10, 3);
function validate_cart_addition($passed, $product_id, $quantity) {
    $product = wc_get_product($product_id);
    
    // Prevent adding if price is zero
    if ($product->get_price() <= 0) {
        wc_add_notice('This product cannot be added to cart (price invalid)', 'error');
        return false;
    }
    
    // Limit quantity per product
    $max_quantity = 10;
    if ($quantity > $max_quantity) {
        wc_add_notice("Maximum {$max_quantity} units allowed for this product", 'error');
        return false;
    }
    
    return $passed;
}

// Modify cart item data before calculation
add_action('woocommerce_before_calculate_totals', 'modify_cart_item_price', 10, 1);
function modify_cart_item_price($cart) {
    if (is_admin() && !defined('DOING_AJAX')) {
        return;
    }
    
    foreach ($cart->get_cart() as $cart_item_key => $cart_item) {
        $product = $cart_item['data'];
        $original_price = $product->get_price();
        
        // Apply volume discount (10% off for 5+ items)
        if ($cart_item['quantity'] >= 5) {
            $discounted_price = $original_price * 0.9;
            $product->set_price($discounted_price);
        }
    }
}

// Add custom data to cart item
add_filter('woocommerce_add_cart_item_data', 'add_custom_cart_item_data', 10, 3);
function add_custom_cart_item_data($cart_item_data, $product_id, $variation_id) {
    // Add gift wrap option
    if (isset($_POST['gift_wrap']) && $_POST['gift_wrap'] === 'yes') {
        $cart_item_data['gift_wrap'] = true;
        $cart_item_data['gift_wrap_price'] = 5.00;
    }
    
    return $cart_item_data;
}

// Display custom cart item data
add_filter('woocommerce_get_item_data', 'display_custom_cart_item_data', 10, 2);
function display_custom_cart_item_data($item_data, $cart_item) {
    if (isset($cart_item['gift_wrap']) && $cart_item['gift_wrap']) {
        $item_data[] = array(
            'name' => 'Gift Wrap',
            'value' => 'Yes (+$5.00)'
        );
    }
    return $item_data;
}

// Remove product from cart action
add_action('woocommerce_remove_cart_item', 'log_cart_removal', 10, 2);
function log_cart_removal($cart_item_key, $cart) {
    $product_id = $cart->cart_contents[$cart_item_key]['product_id'];
    error_log("Product {$product_id} removed from cart");
}

// Empty cart action
add_action('woocommerce_cart_emptied', 'log_cart_emptied');
function log_cart_emptied() {
    error_log('Cart was emptied by user');
}`,
        lineByLine: [
          "Line 1: add_action('woocommerce_add_to_cart') - Hooks when product added to cart",
          "Line 2: log_product_addition($cart_item_key, $product_id, $quantity...) - Callback parameters",
          "Line 5: error_log() - Logs product addition for debugging",
          "Line 11: WC()->session->set() - Stores session data",
          "Line 16: add_filter('woocommerce_add_to_cart_validation') - Validates before adding",
          "Line 18: validate_cart_addition($passed, $product_id, $quantity) - Callback",
          "Line 20: if ($product->get_price() <= 0) - Checks price validity",
          "Line 21: wc_add_notice() - Displays error message",
          "Line 22: return false - Prevents addition",
          "Line 31: add_action('woocommerce_before_calculate_totals') - Modifies cart totals",
          "Line 33: if (is_admin() && !defined('DOING_AJAX')) - Avoids admin recursion",
          "Line 36: $cart->get_cart() - Gets all cart items",
          "Line 39: if ($cart_item['quantity'] >= 5) - Quantity-based discount",
          "Line 40: $discounted_price = $original_price * 0.9 - 10% discount calculation",
          "Line 44: add_filter('woocommerce_add_cart_item_data') - Adds custom data",
          "Line 50: $cart_item_data['gift_wrap'] = true - Stores gift wrap option",
          "Line 56: add_filter('woocommerce_get_item_data') - Displays custom data",
          "Line 68: add_action('woocommerce_remove_cart_item') - Logs removal",
          "Line 76: add_action('woocommerce_cart_emptied') - Logs empty cart"
        ],
        simpleMeaning: "Cart hooks let you watch and modify what happens when customers add items to cart. You can log activities, validate additions (like checking stock), apply discounts, add extra services (gift wrap), and track removals. Like having a security camera for your shopping cart.",
        output: "Logs product additions and removals, validates quantity limits, applies volume discounts, adds gift wrap options to cart items.",
        note: "Always use wc_add_notice() for user feedback. For price modifications, use before_calculate_totals hook. Session data persists during customer visit."
      },
      
      {
        name: "3. DISPLAY PRODUCTS - Shortcodes",
        description: "WooCommerce shortcodes display products anywhere: products, product_page, product_category, recent_products, featured_products, sale_products, best_selling_products, top_rated_products. Customize with attributes like limit, columns, orderby, order, category, and ids.",
        code: `// Basic product shortcodes
echo do_shortcode('[products limit="4" columns="4"]');
echo do_shortcode('[featured_products limit="4" columns="4"]');
echo do_shortcode('[sale_products limit="4" columns="4"]');
echo do_shortcode('[best_selling_products limit="4" columns="4"]');
echo do_shortcode('[top_rated_products limit="4" columns="4"]');
echo do_shortcode('[recent_products limit="4" columns="4"]');

// Product shortcode with specific IDs
echo do_shortcode('[products ids="1,2,3,4"]');

// Product category shortcode
echo do_shortcode('[product_category category="clothing" limit="4" columns="4"]');

// Recent products with pagination
echo do_shortcode('[products limit="12" columns="3" paginate="true"]');

// Product by SKU
echo do_shortcode('[product sku="PROD-123"]');

// Add to cart button
echo do_shortcode('[add_to_cart id="123"]');
echo do_shortcode('[add_to_cart_url id="123"]');

// Display product as shortcode in PHP
function display_featured_products() {
    return do_shortcode('[products limit="8" columns="4" orderby="date" order="DESC" category="featured"]');
}
add_shortcode('my_featured_products', 'display_featured_products');

// Custom product loop with WP_Query
function custom_product_loop() {
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => 6,
        'meta_key' => '_price',
        'orderby' => 'meta_value_num',
        'order' => 'ASC',
        'tax_query' => array(
            array(
                'taxonomy' => 'product_cat',
                'field' => 'slug',
                'terms' => 'sale-items',
            ),
        ),
        'meta_query' => array(
            array(
                'key' => '_stock_status',
                'value' => 'instock',
                'compare' => '='
            ),
        ),
    );
    
    $query = new WP_Query($args);
    if ($query->have_posts()) {
        woocommerce_product_loop_start();
        while ($query->have_posts()) {
            $query->the_post();
            wc_get_template_part('content', 'product');
        }
        woocommerce_product_loop_end();
        wp_reset_postdata();
    }
}

// Product attributes shortcode
echo do_shortcode('[products attribute="color" filter="red"]');

// Custom ordering
add_filter('woocommerce_shortcode_products_query', 'custom_shortcode_query', 10, 3);
function custom_shortcode_query($query_args, $attributes, $type) {
    if ($type === 'featured_products') {
        $query_args['orderby'] = 'title';
        $query_args['order'] = 'ASC';
        $query_args['posts_per_page'] = 8;
    }
    return $query_args;
}

// Display product price only
echo do_shortcode('[product_price id="123"]');

// Check if product exists before shortcode
if (function_exists('wc_get_product') && wc_get_product(123)) {
    echo do_shortcode('[product id="123"]');
}`,
        lineByLine: [
          "Line 1: echo do_shortcode('[products limit=\"4\" columns=\"4\"]') - Displays 4 products in 4 columns",
          "Line 2: '[featured_products]' - Shows only featured products",
          "Line 3: '[sale_products]' - Shows products on sale",
          "Line 4: '[best_selling_products]' - Shows top sellers by sales",
          "Line 5: '[top_rated_products]' - Shows highest rated products",
          "Line 6: '[recent_products]' - Shows newest products",
          "Line 9: '[products ids=\"1,2,3,4\"]' - Shows specific product IDs",
          "Line 12: '[product_category category=\"clothing\"]' - Shows category products",
          "Line 15: 'paginate=\"true\"' adds pagination to product grid",
          "Line 18: '[product sku=\"PROD-123\"]' - Shows product by SKU",
          "Line 21: '[add_to_cart id=\"123\"]' - Displays add to cart button for product",
          "Line 25-27: Add own shortcode wrapper using do_shortcode()",
          "Line 30-47: Custom WP_Query loop for products with meta/tax queries",
          "Line 50: '[products attribute=\"color\" filter=\"red\"]' - Filter by attribute",
          "Line 53-60: Customize shortcode query parameters via filter",
          "Line 63: '[product_price id=\"123\"]' - Shows only product price"
        ],
        simpleMeaning: "Shortcodes are like magic words that display products anywhere. [products] shows product grid, [featured_products] shows only featured items, [sale_products] shows discounted items. Add parameters to control how many, columns, sorting, filtering.",
        output: "Displays responsive product grid with 4 products in 4 columns, pagination, add to cart buttons, and product images.",
        note: "Use products shortcode for custom product grids. Avoid nested shortcodes (slower). Cache shortcode output for performance. Use WP_Query for complex filtering."
      },
      
      {
        name: "4. WOOCOMMERCE SETTINGS - Configuration",
        description: "WooCommerce settings control store behavior. Access via wc_get_products(), get_option('woocommerce_...'). Modify payment gateways, shipping zones, tax settings, currency format, page IDs, and email templates.",
        code: `// Get WooCommerce settings
function get_woocommerce_settings() {
    // Currency settings
    $currency = get_woocommerce_currency();
    $currency_symbol = get_woocommerce_currency_symbol();
    $price_format = get_woocommerce_price_format();
    
    // Page settings
    $shop_page_id = wc_get_page_id('shop');
    $cart_page_id = wc_get_page_id('cart');
    $checkout_page_id = wc_get_page_id('checkout');
    $myaccount_page_id = wc_get_page_id('myaccount');
    
    // General settings
    $store_address = get_option('woocommerce_store_address');
    $store_city = get_option('woocommerce_store_city');
    $store_postcode = get_option('woocommerce_store_postcode');
    $allowed_countries = get_option('woocommerce_allowed_countries');
    
    return array(
        'currency' => $currency,
        'shop_url' => get_permalink($shop_page_id),
        'currency_symbol' => $currency_symbol,
    );
}

// Update WooCommerce settings
function update_woocommerce_settings() {
    // Change currency to EUR
    update_option('woocommerce_currency', 'EUR');
    
    // Enable guest checkout
    update_option('woocommerce_enable_guest_checkout', 'yes');
    
    // Set default country
    update_option('woocommerce_default_country', 'US:CA');
    
    // Enable tax calculation
    update_option('woocommerce_calc_taxes', 'yes');
    
    // Set price display suffix
    update_option('woocommerce_price_display_suffix', 'incl. VAT');
    
    // Change thumbnail dimensions
    update_option('woocommerce_thumbnail_image_width', 300);
    update_option('woocommerce_thumbnail_image_height', 300);
    update_option('woocommerce_thumbnail_cropping', '1:1');
}

// Get product visibility settings
function get_product_visibility_options() {
    global $wpdb;
    $visibility_options = wc_get_product_visibility_options();
    // Returns array('visible' => 'Visible', 'catalog' => 'Catalog', 'search' => 'Search', 'hidden' => 'Hidden')
    return $visibility_options;
}

// Modify settings via filter
add_filter('woocommerce_currency_symbol', 'custom_currency_symbol', 10, 2);
function custom_currency_symbol($currency_symbol, $currency) {
    if ($currency === 'USD') {
        return '$';
    } elseif ($currency === 'EUR') {
        return '€';
    }
    return $currency_symbol;
}

// Change number of products per page
add_filter('loop_shop_per_page', 'custom_products_per_page', 20);
function custom_products_per_page($cols) {
    return 12; // 12 products per page
}

// Change number of columns in shop
add_filter('loop_shop_columns', 'custom_shop_columns', 20);
function custom_shop_columns($columns) {
    return 4; // 4 columns
}

// Disable WooCommerce styles
add_filter('woocommerce_enqueue_styles', '__return_false');

// Enable stock management globally
add_action('wp_loaded', 'enable_global_stock_management');
function enable_global_stock_management() {
    update_option('woocommerce_manage_stock', 'yes');
    update_option('woocommerce_stock_quantity', 100);
    update_option('woocommerce_notify_low_stock_amount', 5);
    update_option('woocommerce_notify_no_stock_amount', 0);
}

// Set default product sorting
add_filter('woocommerce_default_catalog_orderby', 'custom_default_sorting');
function custom_default_sorting() {
    return 'price-asc'; // price-asc, price-desc, date, popularity, rating
}

// Check if WooCommerce is active
if (class_exists('WooCommerce')) {
    // WooCommerce specific code here
    $wc = WC();
    $version = WC_VERSION;
}`,
        lineByLine: [
          "Line 2: get_woocommerce_currency() - Returns active currency (USD, EUR, etc.)",
          "Line 3: get_woocommerce_currency_symbol() - Returns $, €, £ symbol",
          "Line 4: get_woocommerce_price_format() - Returns price format with currency",
          "Line 7-10: wc_get_page_id() - Returns page IDs for shop/cart/checkout/myaccount",
          "Line 13-15: get_option('woocommerce_store_*') - Gets store address settings",
          "Line 18-23: Returns array of settings",
          "Line 26: update_option('woocommerce_currency', 'EUR') - Changes store currency to Euro",
          "Line 29: 'woocommerce_enable_guest_checkout' - Allows checkout without account",
          "Line 32: 'woocommerce_default_country' - Sets default country to US:California",
          "Line 35: 'woocommerce_calc_taxes' - Enables tax calculations",
          "Line 38: 'woocommerce_price_display_suffix' - Adds text after price",
          "Line 41-43: 'woocommerce_thumbnail_*' - Sets product image dimensions",
          "Line 48-49: wc_get_product_visibility_options() - Gets visibility options array",
          "Line 53-58: 'woocommerce_currency_symbol' filter - Changes currency symbol display",
          "Line 61-63: 'loop_shop_per_page' filter - Changes products per page on shop",
          "Line 66-68: 'loop_shop_columns' filter - Changes number of columns",
          "Line 71: 'woocommerce_enqueue_styles' filter - Removes default WooCommerce CSS"
        ],
        simpleMeaning: "Settings control how your store behaves: currency, where pages are, tax rules, shipping. Like store configuration panel but with code. Change currency from USD to EUR, enable guest checkout, set image sizes, adjust products per page.",
        output: "Store configured with EUR currency, guest checkout enabled, 12 products per page, 4 columns, taxes calculated, custom image dimensions.",
        note: "Update options using update_option() with 'woocommerce_' prefix. Use filters for dynamic modifications. Test settings on staging site first."
      }
    ]
  },
  
  advanced: {
    title: "🚀 ADVANCED WOOCOMMERCE: PROFESSIONAL E-COMMERCE DEVELOPMENT",
    description: "Advanced WooCommerce techniques for professional developers. Master payment gateways, order management, HPOS (High-Performance Order Storage), custom APIs, product add-ons, subscriptions, bookings, dynamic pricing, and performance optimization. Build enterprise-grade e-commerce solutions.",
    
    topics: [
      {
        name: "5. CUSTOM PAYMENT GATEWAY - Complete Implementation",
        description: "Custom payment gateways integrate external payment processors. Extend WC_Payment_Gateway class, implement init_form_fields(), process_payment(), and validate_fields(). Register gateway with woocommerce_payment_gateways filter. Support redirect, direct, or iframe payment methods.",
        code: `<?php
/**
 * Custom Payment Gateway
 * Extends WooCommerce payment gateway base class
 */
class WC_Gateway_Custom extends WC_Payment_Gateway {
    
    /**
     * Constructor - Setup gateway properties
     */
    public function __construct() {
        $this->id = 'custom_gateway';
        $this->icon = apply_filters('woocommerce_custom_gateway_icon', '');
        $this->has_fields = false; // No additional fields on checkout
        $this->method_title = 'Custom Payment Gateway';
        $this->method_description = 'Accept payments via custom payment processor';
        
        // Load settings
        $this->init_form_fields();
        $this->init_settings();
        
        // Define settings
        $this->title = $this->get_option('title');
        $this->description = $this->get_option('description');
        $this->enabled = $this->get_option('enabled');
        $this->api_key = $this->get_option('api_key');
        $this->api_secret = $this->get_option('api_secret');
        
        // Actions
        add_action('woocommerce_update_options_payment_gateways_' . $this->id, array($this, 'process_admin_options'));
        add_action('woocommerce_receipt_' . $this->id, array($this, 'receipt_page'));
        add_action('woocommerce_api_wc_gateway_' . $this->id, array($this, 'webhook_handler'));
    }
    
    /**
     * Initialize form fields for admin settings
     */
    public function init_form_fields() {
        $this->form_fields = array(
            'enabled' => array(
                'title' => 'Enable/Disable',
                'type' => 'checkbox',
                'label' => 'Enable Custom Payment Gateway',
                'default' => 'no'
            ),
            'title' => array(
                'title' => 'Title',
                'type' => 'text',
                'description' => 'Payment method title shown at checkout',
                'default' => 'Custom Payment',
                'desc_tip' => true,
            ),
            'description' => array(
                'title' => 'Description',
                'type' => 'textarea',
                'description' => 'Payment method description at checkout',
                'default' => 'Pay via our custom payment processor',
            ),
            'api_key' => array(
                'title' => 'API Key',
                'type' => 'text',
                'description' => 'Your payment gateway API key',
                'desc_tip' => true,
            ),
            'api_secret' => array(
                'title' => 'API Secret',
                'type' => 'password',
                'description' => 'Your payment gateway API secret',
                'desc_tip' => true,
            ),
        );
    }
    
    /**
     * Process payment - called when customer submits order
     */
    public function process_payment($order_id) {
        $order = wc_get_order($order_id);
        
        // Mark as pending (we'll confirm after payment)
        $order->update_status('pending', 'Awaiting payment confirmation');
        
        // Reduce stock levels
        wc_reduce_stock_levels($order_id);
        
        // Remove cart
        WC()->cart->empty_cart();
        
        // Return redirect URL
        return array(
            'result' => 'success',
            'redirect' => $this->get_return_url($order),
        );
    }
    
    /**
     * Payment fields shown at checkout
     */
    public function payment_fields() {
        if ($this->description) {
            echo wpautop(wptexturize($this->description));
        }
        ?>
        <div class="custom-payment-fields">
            <p>Enter your payment details:</p>
            <label>Card Number: <input type="text" name="card_number" class="input-text"></label>
            <label>Expiry: <input type="text" name="card_expiry" placeholder="MM/YY"></label>
            <label>CVV: <input type="password" name="card_cvv" class="input-text"></label>
        </div>
        <?php
    }
    
    /**
     * Validate payment fields
     */
    public function validate_fields() {
        if (empty($_POST['card_number'])) {
            wc_add_notice('Card number is required', 'error');
            return false;
        }
        if (empty($_POST['card_expiry'])) {
            wc_add_notice('Expiry date is required', 'error');
            return false;
        }
        return true;
    }
    
    /**
     * Receipt page - for off-site payment gateways
     */
    public function receipt_page($order_id) {
        echo '<p>Redirecting to payment gateway...</p>';
        echo '<form action="https://payment-gateway.com/process" method="post">';
        echo '<input type="submit" value="Pay Now">';
        echo '</form>';
    }
    
    /**
     * Webhook handler - receive payment confirmation
     */
    public function webhook_handler() {
        $payload = file_get_contents('php://input');
        $data = json_decode($payload, true);
        
        $order_id = $data['order_id'];
        $payment_status = $data['status'];
        
        $order = wc_get_order($order_id);
        
        if ($payment_status === 'completed') {
            $order->payment_complete();
            $order->add_order_note('Payment confirmed via webhook');
        } else {
            $order->update_status('failed', 'Payment failed: ' . $data['message']);
        }
        
        status_header(200);
        die();
    }
}

/**
 * Register the custom payment gateway
 */
add_filter('woocommerce_payment_gateways', 'add_custom_payment_gateway');
function add_custom_payment_gateway($gateways) {
    $gateways[] = 'WC_Gateway_Custom';
    return $gateways;
}`,
        lineByLine: [
          "Line 4: class WC_Gateway_Custom extends WC_Payment_Gateway - Extends base class",
          "Line 9: __construct() - Constructor method for gateway initialization",
          "Line 10: $this->id = 'custom_gateway' - Unique gateway identifier",
          "Line 11: $this->icon - Payment method icon URL",
          "Line 12: $this->has_fields - Whether gateway has additional fields",
          "Line 23: $this->api_key = $this->get_option('api_key') - Gets saved API key",
          "Line 27-28: Admin options and webhook actions",
          "Line 33-57: init_form_fields() - Defines admin settings fields",
          "Line 37: 'type' => 'checkbox' - Boolean setting for enabling",
          "Line 45: 'type' => 'textarea' - Multi-line description",
          "Line 61: process_payment($order_id) - Called when customer submits",
          "Line 64: $order->update_status('pending') - Sets initial order status",
          "Line 67: wc_reduce_stock_levels() - Reduces inventory",
          "Line 70: WC()->cart->empty_cart() - Clears shopping cart",
          "Line 74-77: Return success and redirect URL",
          "Line 81-90: payment_fields() - Shows fields at checkout",
          "Line 93-101: validate_fields() - Validates payment data",
          "Line 104-112: receipt_page() - For off-site payment redirects",
          "Line 115-133: webhook_handler() - Handles payment confirmation",
          "Line 119: $order->payment_complete() - Marks order as paid",
          "Line 136-140: Register gateway with WooCommerce"
        ],
        simpleMeaning: "Custom payment gateways let you add your own payment method (e.g., custom processor, bank transfer, crypto). Extend WooCommerce's payment class, define fields, process payment when customer submits. Like building a new checkout lane in your store.",
        output: "Custom payment gateway appears in WooCommerce settings and checkout, processes payments via external API, handles webhook confirmations.",
        note: "Test gateway thoroughly in sandbox mode. Handle webhook retries for reliability. Validate all inputs for security."
      },
      
      {
        name: "6. ORDER STATUS MANAGEMENT",
        description: "WooCommerce manages order lifecycle: pending, processing, completed, on-hold, cancelled, refunded, failed. Register custom statuses with register_post_status, add to order status list with wc_order_statuses filter, style with CSS, and trigger actions on status changes.",
        code: `// Register custom order status
function register_custom_order_statuses() {
    register_post_status('wc-custom-status', array(
        'label' => 'Custom Status',
        'public' => true,
        'exclude_from_search' => false,
        'show_in_admin_all_list' => true,
        'show_in_admin_status_list' => true,
        'label_count' => _n_noop('Custom Status <span class="count">(%s)</span>', 'Custom Status <span class="count">(%s)</span>'),
    ));
}
add_action('init', 'register_custom_order_statuses');

// Add to order status list
add_filter('wc_order_statuses', 'add_custom_order_status');
function add_custom_order_status($order_statuses) {
    $order_statuses['wc-custom-status'] = 'Custom Status';
    return $order_statuses;
}

// Trigger on order status change
add_action('woocommerce_order_status_changed', 'log_order_status_change', 10, 4);
function log_order_status_change($order_id, $old_status, $new_status, $order) {
    error_log("Order {$order_id} status changed from {$old_status} to {$new_status}");
    
    // Send email on completed status
    if ($new_status === 'completed') {
        $customer_email = $order->get_billing_email();
        $subject = 'Your order is complete!';
        $message = "Thank you for your purchase. Order #{$order_id} is complete.";
        wp_mail($customer_email, $subject, $message);
    }
}

// Add custom action on specific status
add_action('woocommerce_order_status_processing', 'send_processing_notification');
function send_processing_notification($order_id) {
    $order = wc_get_order($order_id);
    $message = "Order #{$order_id} is now being processed.";
    // Send admin notification
}

// Bulk status change for all orders
function bulk_update_order_status($old_status, $new_status) {
    $orders = wc_get_orders(array(
        'status' => $old_status,
        'limit' => -1,
    ));
    
    foreach ($orders as $order) {
        $order->update_status($new_status);
        $order->save();
    }
}

// Get orders by status
function get_orders_by_status($status) {
    return wc_get_orders(array(
        'status' => $status,
        'limit' => 100,
        'orderby' => 'date',
        'order' => 'DESC',
    ));
}

// Style custom status in admin
add_action('admin_head', 'style_custom_order_status');
function style_custom_order_status() {
    ?>
    <style>
        .order-status.status-custom-status {
            background: #f0f0f0;
            color: #333;
        }
        .order-status.status-completed {
            background: #c6e1c6;
            color: #5b841b;
        }
    </style>
    <?php
}

// Add custom column for order status
add_filter('manage_edit-shop_order_columns', 'add_order_status_column');
function add_order_status_column($columns) {
    $columns['custom_status'] = 'Custom Status';
    return $columns;
}

add_action('manage_shop_order_posts_custom_column', 'display_order_status_column', 10, 2);
function display_order_status_column($column, $post_id) {
    if ($column === 'custom_status') {
        $order = wc_get_order($post_id);
        echo get_post_meta($post_id, '_custom_status_meta', true);
    }
}`,
        lineByLine: [
          "Line 1: register_custom_order_statuses() - Function to register status",
          "Line 2: register_post_status('wc-custom-status') - Registers custom status in database",
          "Line 3: 'label' => 'Custom Status' - Display name",
          "Line 4: 'public' => true - Visible in admin",
          "Line 5: 'exclude_from_search' => false - Included in searches",
          "Line 11: add_filter('wc_order_statuses', ...) - Adds to status dropdown",
          "Line 12: 'wc-custom-status' => 'Custom Status' - Status key and label",
          "Line 16: 'woocommerce_order_status_changed' - Runs when status changes",
          "Line 17: log_order_status_change($order_id, $old_status, $new_status, $order)",
          "Line 19: error_log() - Logs status changes for debugging",
          "Line 22: if ($new_status === 'completed') - Checks status",
          "Line 24: wp_mail() - Sends email notification",
          "Line 31: 'woocommerce_order_status_processing' - Action for processing status",
          "Line 38: wc_get_orders() - Retrieves orders by status",
          "Line 40: 'limit' => -1 - Gets all orders",
          "Line 43: $order->update_status($new_status) - Changes order status",
          "Line 44: $order->save() - Saves changes"
        ],
        simpleMeaning: "Order statuses track order progress: pending (just placed), processing (paid, preparing), completed (shipped/delivered). Add custom statuses like 'in-warehouse' or 'quality-check'. Trigger actions like sending emails when status changes.",
        output: "Custom order status added to WooCommerce, triggers email notifications on status change, logged for audit trail, styled in admin interface.",
        note: "Always prefix custom status keys with 'wc-'. Use status change hooks for automation. Update order meta for additional tracking."
      },
      
      {
        name: "7. HPOS (HIGH-PERFORMANCE ORDER STORAGE)",
        description: "HPOS stores orders in custom tables (wc_orders) instead of posts table. Improves performance for large stores, faster queries, better scalability. Enable in WooCommerce settings or via code. Use CRUD methods for compatibility.",
        code: `// Check if HPOS is enabled
function check_hpos_status() {
    if (class_exists('Automattic\\WooCommerce\\Utilities\\OrderUtil')) {
        $is_hpos_enabled = Automattic\\WooCommerce\\Utilities\\OrderUtil::custom_orders_table_usage_is_enabled();
        if ($is_hpos_enabled) {
            echo 'HPOS is active - orders in custom table';
        } else {
            echo 'HPOS is disabled - orders in posts table';
        }
    }
}

// Enable HPOS programmatically (requires WooCommerce 8.2+)
function enable_hpos() {
    update_option('woocommerce_custom_orders_table_enabled', 'yes');
    update_option('woocommerce_custom_orders_table_data_sync_enabled', 'yes');
}
add_action('wp_loaded', 'enable_hpos');

// Get order compatibly (works with HPOS and posts table)
function get_order_compatible($order_id) {
    // WC_Order works with both storage methods
    $order = wc_get_order($order_id);
    if ($order) {
        return array(
            'id' => $order->get_id(),
            'status' => $order->get_status(),
            'total' => $order->get_total(),
            'customer_id' => $order->get_customer_id(),
            'date_created' => $order->get_date_created(),
        );
    }
    return null;
}

// Query orders using HPOS
function query_orders_hpos($args) {
    // Use WC_Order_Query for HPOS compatibility
    $order_query = new WC_Order_Query($args);
    $orders = $order_query->get_orders();
    
    foreach ($orders as $order) {
        echo 'Order #' . $order->get_id() . ' - Status: ' . $order->get_status();
    }
}

// Custom order query example
$orders = wc_get_orders(array(
    'status' => 'processing',
    'date_created' => '2024-01-01...2024-12-31',
    'customer_id' => 123,
    'limit' => 50,
));

// HPOS compatibility check for plugins
function ensure_hpos_compatibility() {
    if (class_exists('Automattic\\WooCommerce\\Utilities\\FeaturesUtil')) {
        // Declare HPOS compatibility
        Automattic\\WooCommerce\\Utilities\\FeaturesUtil::declare_compatibility(
            'custom_order_tables',
            __FILE__,
            true
        );
    }
}
add_action('before_woocommerce_init', 'ensure_hpos_compatibility');

// Get HPOS order table name
function get_hpos_table_name() {
    global $wpdb;
    return $wpdb->prefix . 'wc_orders';
}

// Direct HPOS query (not recommended - use CRUD)
function direct_hpos_query() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'wc_orders';
    $results = $wpdb->get_results("SELECT * FROM {$table_name} WHERE status = 'processing' LIMIT 10");
    return $results;
}

// Sync posts table to HPOS
function sync_orders_to_hpos() {
    if (get_option('woocommerce_custom_orders_table_data_sync_enabled') === 'yes') {
        // Backfill sync runs automatically
        echo 'Order data sync is enabled';
    }
}`,
        lineByLine: [
          "Line 1: check_hpos_status() - Checks if HPOS is enabled",
          "Line 2: class_exists('Automattic\\WooCommerce\\Utilities\\OrderUtil') - Checks for HPOS class",
          "Line 3: OrderUtil::custom_orders_table_usage_is_enabled() - Returns HPOS status",
          "Line 13: update_option('woocommerce_custom_orders_table_enabled', 'yes') - Enables HPOS",
          "Line 14: 'woocommerce_custom_orders_table_data_sync_enabled' - Syncs data between tables",
          "Line 19: wc_get_order($order_id) - Works with both HPOS and posts",
          "Line 26: $order->get_date_created() - CRUD method compatible with both",
          "Line 33: new WC_Order_Query($args) - HPOS-compatible query class",
          "Line 34: $order_query->get_orders() - Returns order objects",
          "Line 41: wc_get_orders() - Most compatible way to query orders",
          "Line 48-56: ensure_hpos_compatibility() - Declares plugin compatible",
          "Line 50: FeaturesUtil::declare_compatibility() - Official HPOS declaration",
          "Line 61: get_hpos_table_name() - Gets custom order table name",
          "Line 67: direct_hpos_query() - Direct SQL query (avoid when possible)"
        ],
        simpleMeaning: "HPOS is like upgrading from paper files to a digital database. Orders stored in dedicated tables instead of posts table. Much faster for stores with thousands of orders. Use wc_get_orders() instead of WP_Query to stay compatible.",
        output: "HPOS enabled, orders stored in wc_orders table, faster order queries, plugin declared compatible, backward compatible with posts table.",
        note: "Always use CRUD methods (wc_get_order, wc_get_orders). Declare HPOS compatibility in plugins. Test thoroughly before enabling on production."
      }
    ]
  }
};

export default learning;
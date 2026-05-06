export const questions = [
  { 
    line: "WC()->cart->get_cart_total()", 
    explanation: "Returns the formatted total amount of the shopping cart including tax and shipping.", 
    example: "$total = WC()->cart->get_cart_total(); echo $total;", 
    output: "$100.00" 
  },
  { 
    line: "wc_get_product($product_id)", 
    explanation: "Retrieves a product object by ID. Returns WC_Product object or false if not found.", 
    example: "$product = wc_get_product(123); echo $product->get_name();", 
    output: "Product Title" 
  },
  { 
    line: "$product->get_price()", 
    explanation: "Returns the current price of the product (regular or sale price).", 
    example: "$price = wc_get_product(123)->get_price(); echo wc_price($price);", 
    output: "$99.99" 
  },
  { 
    line: "$product->get_regular_price()", 
    explanation: "Returns the regular (non-sale) price of the product.", 
    example: "$regular = $product->get_regular_price();", 
    output: "99.99" 
  },
  { 
    line: "$product->get_sale_price()", 
    explanation: "Returns the sale price if product is on sale, otherwise returns empty string.", 
    example: "if ($product->is_on_sale()) { echo $product->get_sale_price(); }", 
    output: "79.99" 
  },
  { 
    line: "$product->get_stock_quantity()", 
    explanation: "Returns the available stock quantity for inventory-managed products.", 
    example: "$stock = $product->get_stock_quantity(); echo 'Stock: ' . $stock;", 
    output: "Stock: 50" 
  },
  { 
    line: "$product->get_sku()", 
    explanation: "Returns the SKU (Stock Keeping Unit) identifier for the product.", 
    example: "$sku = $product->get_sku(); echo 'SKU: ' . $sku;", 
    output: "SKU: PROD-12345" 
  },
  { 
    line: "$product->get_categories()", 
    explanation: "Returns array of category objects assigned to the product.", 
    example: "$cats = $product->get_categories(); foreach($cats as $cat) { echo $cat->name; }", 
    output: "Clothing, Men, Shirts" 
  },
  { 
    line: "wc_get_orders($args)", 
    explanation: "Retrieves orders based on arguments (status, date, customer, etc.). HPOS compatible.", 
    example: "$orders = wc_get_orders(array('status' => 'processing', 'limit' => 10));", 
    output: "Array of WC_Order objects" 
  },
  { 
    line: "$order->get_total()", 
    explanation: "Returns the formatted total amount of the order.", 
    example: "$order = wc_get_order(123); echo $order->get_total();", 
    output: "$150.00" 
  },
  { 
    line: "$order->get_status()", 
    explanation: "Returns the current status of the order (pending, processing, completed, etc.).", 
    example: "$status = $order->get_status(); echo 'Status: ' . $status;", 
    output: "Status: processing" 
  },
  { 
    line: "$order->update_status('completed')", 
    explanation: "Updates order status to completed and triggers associated actions.", 
    example: "$order->update_status('completed', 'Order shipped via API');", 
    output: "Order status changed to completed" 
  },
  { 
    line: "$order->add_order_note($note)", 
    explanation: "Adds a private note to the order (visible in admin only).", 
    example: "$order->add_order_note('Customer requested gift wrap');", 
    output: "Note added to order timeline" 
  },
  { 
    line: "WC()->cart->add_to_cart($product_id, $quantity)", 
    explanation: "Adds a product to the cart programmatically with specified quantity.", 
    example: "$added = WC()->cart->add_to_cart(123, 2);", 
    output: "true if added successfully, false if failed" 
  },
  { 
    line: "WC()->cart->remove_cart_item($cart_item_key)", 
    explanation: "Removes a specific item from the cart using its unique cart item key.", 
    example: "WC()->cart->remove_cart_item('a1b2c3d4e5f6g7h8');", 
    output: "Item removed from cart" 
  },
  { 
    line: "WC()->cart->get_cart_contents_count()", 
    explanation: "Returns the total number of items in the cart (sum of quantities).", 
    example: "$count = WC()->cart->get_cart_contents_count(); echo 'Cart items: ' . $count;", 
    output: "Cart items: 5" 
  },
  { 
    line: "WC()->cart->apply_coupon($coupon_code)", 
    explanation: "Applies a coupon code to the current cart.", 
    example: "WC()->cart->apply_coupon('SAVE20');", 
    output: "Coupon applied successfully" 
  },
  { 
    line: "WC()->cart->remove_coupon($coupon_code)", 
    explanation: "Removes a previously applied coupon from the cart.", 
    example: "WC()->cart->remove_coupon('SAVE20');", 
    output: "Coupon removed from cart" 
  },
  { 
    line: "wc_create_new_customer($email, $username, $password)", 
    explanation: "Creates a new customer account programmatically.", 
    example: "$customer_id = wc_create_new_customer('john@example.com', 'john123', 'password');", 
    output: "New customer ID number" 
  },
  { 
    line: "wc_get_product_id_by_sku($sku)", 
    explanation: "Retrieves product ID by searching for matching SKU.", 
    example: "$product_id = wc_get_product_id_by_sku('PROD-123');", 
    output: "456" 
  },
  { 
    line: "wc_price($amount)", 
    explanation: "Formats a numeric price with currency symbol and decimal places.", 
    example: "echo wc_price(29.99);", 
    output: "$29.99" 
  },
  { 
    line: "get_woocommerce_currency()", 
    explanation: "Returns the active store currency code (USD, EUR, GBP, etc.).", 
    example: "$currency = get_woocommerce_currency(); echo $currency;", 
    output: "USD" 
  },
  { 
    line: "is_woocommerce()", 
    explanation: "Conditional tag that returns true on WooCommerce pages (shop, product, cart, checkout).", 
    example: "if (is_woocommerce()) { echo 'WooCommerce page'; }", 
    output: "WooCommerce page" 
  },
  { 
    line: "is_product()", 
    explanation: "Returns true when viewing a single product page.", 
    example: "if (is_product()) { the_title(); }", 
    output: "Product title displayed" 
  },
  { 
    line: "is_cart()", 
    explanation: "Returns true when viewing the shopping cart page.", 
    example: "if (is_cart()) { echo 'Viewing cart'; }", 
    output: "Viewing cart" 
  },
  { 
    line: "is_checkout()", 
    explanation: "Returns true when viewing the checkout page.", 
    example: "if (is_checkout()) { echo 'Viewing checkout'; }", 
    output: "Viewing checkout" 
  },
  { 
    line: "is_account_page()", 
    explanation: "Returns true when viewing customer account pages (dashboard, orders, etc.).", 
    example: "if (is_account_page()) { echo 'My Account page'; }", 
    output: "My Account page" 
  },
  { 
    line: "add_filter('woocommerce_add_to_cart_validation', '__return_false')", 
    explanation: "Prevents any product from being added to cart (useful for debugging).", 
    example: "add_filter('woocommerce_add_to_cart_validation', '__return_false');", 
    output: "Add to cart disabled for all products" 
  },
  { 
    line: "wc_get_cart_url()", 
    explanation: "Returns the URL of the cart page.", 
    example: "<a href='<?php echo wc_get_cart_url(); ?>'>View Cart</a>", 
    output: "https://example.com/cart/" 
  },
  { 
    line: "wc_get_checkout_url()", 
    explanation: "Returns the URL of the checkout page.", 
    example: "<a href='<?php echo wc_get_checkout_url(); ?>'>Proceed to Checkout</a>", 
    output: "https://example.com/checkout/" 
  },
  { 
    line: "wc_get_account_endpoint_url($endpoint)", 
    explanation: "Returns URL for specific My Account endpoints (orders, downloads, etc.).", 
    example: "$orders_url = wc_get_account_endpoint_url('orders');", 
    output: "https://example.com/my-account/orders/" 
  },
  {
    line: "$order->get_billing_email()",
    explanation: "Retrieves the billing email address from an order.",
    example: "$email = $order->get_billing_email(); echo 'Customer email: ' . $email;",
    output: "Customer email: customer@example.com"
  },
  {
    line: "$order->get_billing_first_name()",
    explanation: "Returns the billing first name from an order.",
    example: "$first_name = $order->get_billing_first_name();",
    output: "John"
  },
  {
    line: "$order->get_billing_last_name()",
    explanation: "Returns the billing last name from an order.",
    example: "$last_name = $order->get_billing_last_name();",
    output: "Doe"
  },
  {
    line: "$order->get_billing_phone()",
    explanation: "Retrieves the billing phone number from an order.",
    example: "$phone = $order->get_billing_phone();",
    output: "555-123-4567"
  },
  {
    line: "$order->get_billing_address_1()",
    explanation: "Returns the first line of billing address from an order.",
    example: "$address = $order->get_billing_address_1();",
    output: "123 Main Street"
  },
  {
    line: "$order->get_billing_city()",
    explanation: "Returns the billing city from an order.",
    example: "$city = $order->get_billing_city();",
    output: "New York"
  },
  {
    line: "$order->get_items()",
    explanation: "Returns array of order items (products) in the order.",
    example: "$items = $order->get_items(); foreach($items as $item) { echo $item->get_name(); }",
    output: "Product names list"
  },
  {
    line: "WC_Product_Query()",
    explanation: "Class for querying products with advanced filters (price, stock, category, etc.).",
    example: "$query = new WC_Product_Query(array('category' => array('clothing'), 'limit' => 10)); $products = $query->get_products();",
    output: "Array of WC_Product objects"
  },
  {
    line: "wc_get_product_cat_id_by_slug($slug)",
    explanation: "Retrieves product category ID by its slug.",
    example: "$cat_id = wc_get_product_cat_id_by_slug('clothing');",
    output: "15"
  },
  {
    line: "$product->get_attribute('size')",
    explanation: "Returns the value of a specific product attribute (e.g., size, color).",
    example: "$size = $product->get_attribute('size'); echo 'Size: ' . $size;",
    output: "Size: Large"
  },
  {
    line: "$product->get_attributes()",
    explanation: "Returns array of all attributes assigned to the product.",
    example: "$attrs = $product->get_attributes(); print_r($attrs);",
    output: "Array of attribute objects"
  },
  {
    line: "$product->get_gallery_image_ids()",
    explanation: "Returns array of attachment IDs for product gallery images.",
    example: "$gallery_ids = $product->get_gallery_image_ids(); echo count($gallery_ids);",
    output: "3"
  },
  {
    line: "$product->get_image_id()",
    explanation: "Returns the attachment ID of the product's main image.",
    example: "$image_id = $product->get_image_id(); echo wp_get_attachment_url($image_id);",
    output: "https://example.com/wp-content/uploads/photo.jpg"
  },
  {
    line: "$coupon = new WC_Coupon($coupon_code)",
    explanation: "Creates or retrieves a coupon object by code.",
    example: "$coupon = new WC_Coupon('SAVE20'); echo $coupon->get_amount();",
    output: "20"
  },
  {
    line: "$coupon->set_amount($amount)",
    explanation: "Sets the discount amount for a coupon (percentage or fixed).",
    example: "$coupon = new WC_Coupon(); $coupon->set_amount(15); $coupon->save();",
    output: "Coupon created with 15% discount"
  },
  {
    line: "$coupon->set_discount_type($type)",
    explanation: "Sets coupon discount type (percent, fixed_cart, fixed_product).",
    example: "$coupon->set_discount_type('percent');",
    output: "Coupon type set to percentage discount"
  },
  {
    line: "wc_update_product_stock($product_id, $quantity, $operation)",
    explanation: "Updates product stock quantity (set, increase, or decrease).",
    example: "wc_update_product_stock(123, 10, 'decrease'); // Reduce stock by 10",
    output: "true if successful"
  },
  {
    line: "$variation->get_attributes()",
    explanation: "Returns the variation attributes (e.g., size, color) for a variable product.",
    example: "$attrs = $variation->get_attributes(); echo $attrs['attribute_size'];",
    output: "Large"
  },
  {
    line: "wc_get_product_variation_id_by_sku($sku)",
    explanation: "Retrieves variation ID by searching for variation SKU.",
    example: "$var_id = wc_get_product_variation_id_by_sku('PROD-LARGE');",
    output: "789"
  },
  {
    line: "scss( 'WooCommerce - Initialize' ); echo 'WooCommerce has been activated';",
    explanation: "Checks if WooCommerce is active by verifying class_exists.",
    example: "if (class_exists('WooCommerce')) { echo 'WooCommerce is active'; }",
    output: "WooCommerce is active"
  }
];
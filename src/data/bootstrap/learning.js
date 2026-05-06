// /data/bootstrap/learning.js

export const learning = {
  basic: {
    title: "🧩 Bootstrap Basics - Complete Beginner's Guide",
    topics: [
      // ========== INTRODUCTION & SETUP (1-5) ==========
      {
        name: "1. What is Bootstrap & How to Setup",
        description: "Bootstrap is the world's most popular front-end open-source toolkit for building responsive, mobile-first websites. It includes HTML, CSS, and JavaScript components for buttons, forms, navigation, and more.",
        code: `<!-- Method 1: CDN (Quickest) -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<!-- Method 2: npm (For build tools) -->
npm install bootstrap@5.3.0

<!-- Method 3: Download manually from getbootstrap.com -->

<!-- Basic HTML template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-center mt-5">Hello, Bootstrap!</h1>
    <button class="btn btn-primary d-block mx-auto mt-3">Click Me</button>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
        lineByLine: [
          "Line 2: Bootstrap CSS CDN - Loads all Bootstrap styles",
          "Line 3: Bootstrap JS Bundle - Includes Popper.js for tooltips/popovers",
          "Line 6: npm install - For Node.js projects with build tools",
          "Line 15: viewport meta tag - Ensures proper responsive behavior",
          "Line 18: Bootstrap CSS - Must be in head for proper rendering",
          "Line 22: text-center mt-5 - Bootstrap utility classes for centering and margin",
          "Line 23: btn btn-primary - Bootstrap button component classes",
          "Line 25: Bootstrap JS - Must be before closing body tag"
        ],
        simpleMeaning: "Bootstrap is a ready-to-use toolkit that makes building responsive websites faster with pre-built components",
        output: "Page shows centered heading and styled blue button",
        note: "Always place Bootstrap CSS in <head> and JS before closing </body> tag"
      },
      {
        name: "2. Bootstrap Grid System - Containers, Rows, Columns",
        description: "Bootstrap's grid system uses containers, rows, and columns to create responsive layouts. It's based on 12 columns that automatically rearrange based on screen size.",
        code: `<!-- Container (fixes width at each breakpoint) -->
<div class="container">
    <h3>Fixed Container</h3>
    <!-- Row wrapper for columns -->
    <div class="row">
        <!-- Column with responsive widths -->
        <div class="col-md-6 col-lg-4 bg-primary text-white p-3">
            Column 1 - 6 on tablet, 4 on desktop
        </div>
        <div class="col-md-6 col-lg-8 bg-secondary text-white p-3">
            Column 2 - 6 on tablet, 8 on desktop
        </div>
    </div>
</div>

<!-- Fluid container (full width always) -->
<div class="container-fluid bg-light p-3">
    <div class="row">
        <div class="col bg-info p-3">Full width column</div>
    </div>
</div>

<!-- Auto-layout columns (equal width) -->
<div class="container mt-3">
    <div class="row">
        <div class="col bg-danger text-white p-3">Auto width</div>
        <div class="col bg-warning p-3">Auto width</div>
        <div class="col bg-success text-white p-3">Auto width</div>
    </div>
</div>

<!-- Nested grids -->
<div class="container mt-3">
    <div class="row">
        <div class="col-md-8 bg-dark text-white p-3">
            Parent Column
            <div class="row mt-2">
                <div class="col-sm-6 bg-info p-2">Nested 1</div>
                <div class="col-sm-6 bg-warning p-2">Nested 2</div>
            </div>
        </div>
        <div class="col-md-4 bg-secondary p-3">Sidebar</div>
    </div>
</div>

<!-- Responsive breakpoints -->
<!-- col- (xs), col-sm- (≥576px), col-md- (≥768px), col-lg- (≥992px), col-xl- (≥1200px), col-xxl- (≥1400px) -->`,
        lineByLine: [
          "Line 2: .container - Fixed-width container that changes at breakpoints",
          "Line 4: .row - Creates horizontal group for columns",
          "Line 6: .col-md-6 - Takes 6/12 columns (50%) on medium screens and up",
          "Line 7: .col-lg-4 - Takes 4/12 columns on large screens",
          "Line 16: .container-fluid - Full width container always",
          "Line 19: .col - Auto-width column (equal distribution)",
          "Line 28-35: Nested grids - Rows can be nested inside columns",
          "Line 39: Breakpoints - Different column configurations at different screen sizes"
        ],
        simpleMeaning: "Grid system divides page into 12 columns. Rows contain columns, containers hold everything",
        output: "Responsive layout that changes based on screen size: 2 columns on tablet, 2 columns on desktop in different ratios",
        note: "Columns should always be direct children of rows, rows direct children of containers"
      },
      {
        name: "3. Bootstrap Buttons & Button Groups",
        description: "Bootstrap provides multiple button styles, sizes, states, and button groups for toolbars.",
        code: `<!-- Button Styles -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>

<!-- Outline Buttons -->
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-danger">Outline Danger</button>

<!-- Button Sizes -->
<button class="btn btn-primary btn-lg">Large button</button>
<button class="btn btn-primary">Default button</button>
<button class="btn btn-primary btn-sm">Small button</button>

<!-- Button States -->
<button class="btn btn-primary active">Active state</button>
<button class="btn btn-primary" disabled>Disabled button</button>

<!-- Button Groups -->
<div class="btn-group" role="group">
    <button class="btn btn-primary">Left</button>
    <button class="btn btn-primary">Middle</button>
    <button class="btn btn-primary">Right</button>
</div>

<!-- Vertical button group -->
<div class="btn-group-vertical">
    <button class="btn btn-primary">Top</button>
    <button class="btn btn-primary">Middle</button>
    <button class="btn btn-primary">Bottom</button>
</div>

<!-- Toolbar with multiple groups -->
<div class="btn-toolbar">
    <div class="btn-group me-2">
        <button class="btn btn-primary">1</button>
        <button class="btn btn-primary">2</button>
    </div>
    <div class="btn-group me-2">
        <button class="btn btn-danger">3</button>
        <button class="btn btn-danger">4</button>
    </div>
</div>

<!-- Block buttons (full width) -->
<div class="d-grid gap-2">
    <button class="btn btn-primary">Full width button</button>
    <button class="btn btn-secondary">Another button</button>
</div>`,
        lineByLine: [
          "Line 2-11: Button styles - Different color variants for different contexts",
          "Line 14-15: Outline buttons - Transparent background with colored border",
          "Line 18-20: Button sizes - lg (large), default, sm (small)",
          "Line 23-24: Button states - active (pressed state), disabled (non-interactive)",
          "Line 27-32: Button groups - Group buttons together without gaps",
          "Line 35-40: Vertical button group - Buttons stacked vertically",
          "Line 43-52: Button toolbar - Multiple button groups in a toolbar",
          "Line 55-58: Block buttons - Full width buttons using grid utilities"
        ],
        simpleMeaning: "Buttons come in different colors, sizes, and can be grouped together for toolbars",
        output: "Styled buttons in various colors (blue, green, red, etc.), sizes (large, small), and grouped layouts",
        note: "Use .btn classes for all interactive buttons, not just <button> elements - works on <a> and <input> too"
      },
      {
        name: "4. Bootstrap Forms & Input Groups",
        description: "Bootstrap provides form controls, input groups, validation states, and floating labels for building forms.",
        code: `<!-- Basic Form -->
<form>
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="check">
        <label class="form-check-label" for="check">Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>

<!-- Input Groups (addons before/after input) -->
<div class="input-group mb-3">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Amount">
    <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
    <button class="btn btn-outline-secondary">Copy</button>
    <input type="text" class="form-control" placeholder="Text to copy">
</div>

<!-- Floating Labels -->
<div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
    <label for="floatingEmail">Email address</label>
</div>

<!-- Form Validation -->
<form class="needs-validation" novalidate>
    <div class="mb-3">
        <input type="text" class="form-control is-valid" value="Valid input">
        <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="mb-3">
        <input type="text" class="form-control is-invalid" value="">
        <div class="invalid-feedback">Please enter a value.</div>
    </div>
</form>

<!-- Range Slider -->
<input type="range" class="form-range" min="0" max="100" step="5">

<!-- File Input -->
<div class="mb-3">
    <label for="file" class="form-label">Choose file</label>
    <input class="form-control" type="file" id="file">
</div>`,
        lineByLine: [
          "Line 5: .form-label - Labels for form controls",
          "Line 6: .form-control - Styles inputs, selects, textareas",
          "Line 11: .form-check, .form-check-input, .form-check-label - For checkboxes and radios",
          "Line 19-27: Input groups - Add text or buttons before/after inputs",
          "Line 33-36: Floating labels - Labels that float above inputs when focused",
          "Line 41-47: Form validation - .is-valid, .is-invalid with feedback messages",
          "Line 51: .form-range - Styled range slider",
          "Line 55: .form-control with type='file' - Styled file input"
        ],
        simpleMeaning: "Bootstrap styles all form elements consistently with built-in validation states",
        output: "Styled form with proper spacing, input groups, validation messages, and special controls",
        note: "Use form-label, form-control, form-check classes for consistent styling"
      },
      {
        name: "5. Bootstrap Navigation & Navbar",
        description: "Bootstrap Navbar is a responsive navigation header that collapses on mobile and expands on larger screens.",
        code: `<!-- Basic Navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand Name</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <!-- Right-aligned content -->
            <form class="d-flex ms-auto" role="search">
                <input class="form-control me-2" type="search" placeholder="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>

<!-- Dark Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">Dark Theme</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#darkNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="darkNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
            </ul>
        </div>
    </div>
</nav>

<!-- Nav Tabs -->
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
    </li>
</ul>

<!-- Nav Pills -->
<ul class="nav nav-pills">
    <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
</ul>

<!-- Breadcrumb Navigation -->
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
</nav>`,
        lineByLine: [
          "Line 2: .navbar - Main navbar container",
          "Line 3: .navbar-expand-lg - Collapses on screens smaller than large",
          "Line 4: .navbar-brand - Your logo/brand text",
          "Line 5-7: .navbar-toggler - Hamburger menu button for mobile (needs data-bs-toggle and data-bs-target)",
          "Line 9: .collapse.navbar-collapse - Collapsible content container",
          "Line 10: .navbar-nav - Navigation list container",
          "Line 11-12: .nav-item and .nav-link - Individual navigation items",
          "Line 13: .active - Current page indicator",
          "Line 25: ms-auto - Margin start auto pushes content to the right",
          "Line 34: .navbar-dark .bg-dark - Dark theme navbar",
          "Line 52-59: .nav-tabs - Tabbed navigation",
          "Line 62-68: .nav-pills - Pill-shaped navigation",
          "Line 71-77: .breadcrumb - Hierarchical navigation path"
        ],
        simpleMeaning: "Navbar creates responsive navigation that turns into hamburger menu on mobile",
        output: "Responsive navigation bar that shows full menu on desktop, collapse button on mobile",
        note: "Always include navbar-toggler button and collapse div for responsive behavior"
      },
      {
        name: "6. Cards & Components",
        description: "Cards are flexible content containers with multiple layout options: header, body, footer, images, and lists.",
        code: `<!-- Basic Card -->
<div class="card" style="width: 18rem;">
    <img src="https://picsum.photos/300/200" class="card-img-top" alt="Card image">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

<!-- Card with Header and Footer -->
<div class="card text-center">
    <div class="card-header">Featured</div>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">Content of the card.</p>
        <a href="#" class="btn btn-primary">Button</a>
    </div>
    <div class="card-footer text-body-secondary">2 days ago</div>
</div>

<!-- Card Grid -->
<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has even height.</p>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Another card with more content to show equal height.</p>
            </div>
        </div>
    </div>
</div>

<!-- Horizontal Card -->
<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text.</p>
            </div>
        </div>
    </div>
</div>

<!-- Card with List Group -->
<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
    </ul>
</div>

<!-- Card Styles -->
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Primary card</h5>
        <p class="card-text">Some quick example text.</p>
    </div>
</div>`,
        lineByLine: [
          "Line 2-9: Basic card - Card container with image, body, title, text, and button",
          "Line 3: .card-img-top - Image at top of card",
          "Line 4: .card-body - Padding container for card content",
          "Line 5: .card-title - Title styling",
          "Line 6: .card-text - Text styling",
          "Line 12-19: Card with header and footer - Additional sections",
          "Line 13: .card-header - Top section for title/date",
          "Line 18: .card-footer - Bottom section",
          "Line 22-34: Card grid - Cards in responsive columns with equal height",
          "Line 23: .row-cols-1 .row-cols-md-3 - Responsive card columns",
          "Line 24: .col - Column wrapper",
          "Line 25: .card.h-100 - Equal height cards",
          "Line 38-47: Horizontal card - Image beside content",
          "Line 52-57: List group in card - Card with list items",
          "Line 60-66: Colored cards - Cards with background color variants"
        ],
        simpleMeaning: "Cards are flexible containers for displaying content with images, headers, footers, and lists",
        output: "Styled card containers with consistent spacing, borders, and shadow effects",
        note: "Use .h-100 on cards in grids to make all cards the same height"
      },
      {
        name: "7. Alerts & Badges",
        description: "Alerts provide contextual feedback messages. Badges are small count indicators and labels.",
        code: `<!-- Basic Alerts -->
<div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
</div>
<div class="alert alert-secondary">Secondary alert!</div>
<div class="alert alert-success">Success alert!</div>
<div class="alert alert-danger">Danger alert!</div>
<div class="alert alert-warning">Warning alert!</div>
<div class="alert alert-info">Info alert!</div>
<div class="alert alert-light">Light alert!</div>
<div class="alert alert-dark">Dark alert!</div>

<!-- Alert with Link -->
<div class="alert alert-primary">
    This is a <a href="#" class="alert-link">primary alert with a link</a>.
</div>

<!-- Alert with Dismiss Button -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<!-- Alert with Icon -->
<div class="alert alert-success d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>Success message with icon!</div>
</div>

<!-- Badges (Counters) -->
<h1>Heading <span class="badge bg-primary">New</span></h1>
<button class="btn btn-primary">
    Notifications <span class="badge bg-secondary">4</span>
</button>

<!-- Pill Badges -->
<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-success">Success</span>
<span class="badge rounded-pill bg-danger">Danger</span>

<!-- Positioned Badge on Icons -->
<button type="button" class="btn btn-primary position-relative">
    Inbox
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        99+
        <span class="visually-hidden">unread messages</span>
    </span>
</button>

<!-- Badge inside list -->
<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
        Messages
        <span class="badge bg-primary rounded-pill">14</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        Notifications
        <span class="badge bg-secondary rounded-pill">3</span>
    </li>
</ul>`,
        lineByLine: [
          "Line 2-11: Alert variants - Different colors for different message types",
          "Line 14-16: Alert with link - .alert-link for properly colored links",
          "Line 19-22: Dismissible alert - .alert-dismissible and .btn-close with data-bs-dismiss",
          "Line 25-28: Alert with icon - Using SVG icons with Bootstrap Icons",
          "Line 31-34: Badges - .badge with bg-* classes",
          "Line 37-40: Pill badges - .rounded-pill for rounded corners",
          "Line 43-51: Positioned badge - Absolute positioning for notification badges",
          "Line 54-61: Badges in list groups - Common pattern for showing counts"
        ],
        simpleMeaning: "Alerts show important messages with different colors. Badges show counts and labels",
        output: "Colored alert boxes with optional close buttons, small counters on buttons and list items",
        note: "Use alert-dismissible and btn-close for closable alerts with JavaScript"
      },
      {
        name: "8. Modals & Popups",
        description: "Modals are dialog boxes/popups that appear on top of the page. They're built with HTML, CSS, and JavaScript.",
        code: `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>

<!-- Modal Structure -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Modal Body -->
            <div class="modal-body">
                Modal content goes here...
            </div>
            <!-- Modal Footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Sizes -->
<!-- Small Modal -->
<div class="modal-dialog modal-sm">...</div>
<!-- Default Modal -->
<div class="modal-dialog">...</div>
<!-- Large Modal -->
<div class="modal-dialog modal-lg">...</div>
<!-- Extra Large Modal -->
<div class="modal-dialog modal-xl">...</div>
<!-- Full Screen Modal -->
<div class="modal-dialog modal-fullscreen">...</div>

<!-- Modal with Scrolling Long Content -->
<div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header">...</div>
        <div class="modal-body">Long content that scrolls...</div>
        <div class="modal-footer">...</div>
    </div>
</div>

<!-- Centered Modal -->
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">...</div>
</div>

<!-- Static Backdrop (click outside doesn't close) -->
<div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">...</div>

<!-- Vertical Form Modal -->
<div class="modal fade" id="formModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Login Form</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>`,
        lineByLine: [
          "Line 1-4: Trigger button - data-bs-toggle='modal' and data-bs-target='#id'",
          "Line 7: .modal.fade - Main modal container with fade animation",
          "Line 8: .modal-dialog - Container for modal content (controls size)",
          "Line 9: .modal-content - Actual modal content wrapper",
          "Line 11-14: .modal-header - Title and close button",
          "Line 13: .btn-close with data-bs-dismiss='modal' - Closes modal",
          "Line 16-18: .modal-body - Main content area",
          "Line 20-24: .modal-footer - Action buttons area",
          "Line 28-32: Modal sizes - modal-sm, modal-lg, modal-xl, modal-fullscreen",
          "Line 35-40: Scrolling modal - modal-dialog-scrollable makes body scroll",
          "Line 43-45: Centered modal - modal-dialog-centered vertically centers",
          "Line 48: Static backdrop - data-bs-backdrop='static' prevents closing on backdrop click",
          "Line 51-73: Form modal - Forms inside modals"
        ],
        simpleMeaning: "Modals are popup windows that appear on top of your page for forms, alerts, or extra content",
        output: "Click button opens modal overlay with title, content, and action buttons",
        note: "Modal requires Bootstrap JS bundle. Use data-bs-dismiss to close, data-bs-toggle to open"
      },
      {
        name: "9. Bootstrap Icons & Spinners",
        description: "Bootstrap Icons is an open-source SVG icon library with 1,800+ icons. Spinners show loading states.",
        code: `<!-- Bootstrap Icons Setup -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">

<!-- Common Icons -->
<i class="bi bi-heart"></i> Heart
<i class="bi bi-star"></i> Star
<i class="bi bi-check-circle"></i> Check
<i class="bi bi-x-circle"></i> X
<i class="bi bi-trash"></i> Trash
<i class="bi bi-pencil"></i> Edit
<i class="bi bi-plus-circle"></i> Add
<i class="bi bi-download"></i> Download
<i class="bi bi-upload"></i> Upload
<i class="bi bi-search"></i> Search
<i class="bi bi-envelope"></i> Email
<i class="bi bi-phone"></i> Phone
<i class="bi bi-geo-alt"></i> Location
<i class="bi bi-calendar"></i> Calendar
<i class="bi bi-clock"></i> Clock
<i class="bi bi-user"></i> User
<i class="bi bi-lock"></i> Lock

<!-- Icon Sizes -->
<i class="bi bi-star fs-1"></i>
<i class="bi bi-star fs-2"></i>
<i class="bi bi-star fs-3"></i>
<i class="bi bi-star fs-4"></i>
<i class="bi bi-star fs-5"></i>
<i class="bi bi-star fs-6"></i>

<!-- Icon Colors -->
<i class="bi bi-heart-fill text-danger"></i>
<i class="bi bi-star-fill text-warning"></i>
<i class="bi bi-check-circle-fill text-success"></i>

<!-- Buttons with Icons -->
<button class="btn btn-primary">
    <i class="bi bi-save"></i> Save
</button>
<button class="btn btn-danger">
    <i class="bi bi-trash"></i> Delete
</button>

<!-- Border Spinner -->
<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<!-- Colored Spinners -->
<div class="spinner-border text-primary"></div>
<div class="spinner-border text-success"></div>
<div class="spinner-border text-danger"></div>

<!-- Growing Spinner -->
<div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<!-- Spinner Sizes -->
<div class="spinner-border spinner-border-sm"></div>
<div class="spinner-grow spinner-grow-sm"></div>

<!-- Button with Spinner -->
<button class="btn btn-primary" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
</button>

<!-- Flex-centered Spinner -->
<div class="d-flex justify-content-center">
    <div class="spinner-border"></div>
</div>`,
        lineByLine: [
          "Line 2: Bootstrap Icons CSS - Load icon library",
          "Line 5-23: Basic icons - i.bi.bi-* classes for icons",
          "Line 5: .bi-heart - Heart icon",
          "Line 6: .bi-star - Star icon",
          "Line 26-31: Icon sizes - Using Bootstrap font-size utilities",
          "Line 34-36: Icon colors - Using text-* color utilities",
          "Line 39-44: Buttons with icons - Combined button and icon",
          "Line 47-49: Border spinner - .spinner-border for loading state",
          "Line 52-54: Colored spinners - text-* utilities with spinner",
          "Line 57-59: Growing spinner - .spinner-grow for pulsing animation",
          "Line 62-63: Spinner sizes - .spinner-border-sm or .spinner-grow-sm",
          "Line 66-70: Button with spinner - Disabled button with inline spinner",
          "Line 73-75: Centered spinner - Flexbox utilities to center"
        ],
        simpleMeaning: "Icons add visual elements to your UI. Spinners show loading/processing states",
        output: "Various icons in different sizes and colors, animated loading spinners",
        note: "Bootstrap Icons requires separate CSS link. Spinners need role='status' for accessibility"
      },
      {
        name: "10. Tooltips & Popovers",
        description: "Tooltips show additional info on hover/focus. Popovers are like expanded tooltips with more content and title.",
        code: `<!-- Tooltip Setup (requires JavaScript initialization) -->
<script>
    // Initialize all tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
</script>

<!-- Basic Tooltips -->
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-title="Tooltip text">
    Hover me
</button>

<!-- Tooltip with HTML -->
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<em>Tooltip</em> with <u>HTML</u>">
    HTML tooltip
</button>

<!-- Tooltip Directions -->
<button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Top tooltip" data-bs-placement="top">Top</button>
<button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Right tooltip" data-bs-placement="right">Right</button>
<button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Bottom tooltip" data-bs-placement="bottom">Bottom</button>
<button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Left tooltip" data-bs-placement="left">Left</button>

<!-- Popover Setup -->
<script>
    // Initialize all popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    const popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
</script>

<!-- Basic Popover -->
<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="Popover content goes here.">
    Click to toggle popover
</button>

<!-- Popover Directions -->
<button class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
    Popover on top
</button>
<button class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
    Popover on right
</button>

<!-- Popover with Dismiss -->
<button class="btn btn-primary" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Dismissible popover" data-bs-content="Click anywhere to close">
    Dismissible popover
</button>

<!-- Hover Popover -->
<button class="btn btn-info" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Hover popover" data-bs-content="Appears on hover">
    Hover me
</button>

<!-- Custom Popover with HTML content -->
<button class="btn btn-warning" data-bs-toggle="popover" data-bs-html="true" data-bs-title="Custom Popover" data-bs-content="<strong>Bold text</strong> and <a href='#'>link</a>">
    HTML popover
</button>

<!-- Disabled Element Tooltip (wrapper needed) -->
<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-title="Disabled tooltip">
    <button class="btn btn-primary" style="pointer-events: none;" disabled>Disabled button</button>
</span>`,
        lineByLine: [
          "Line 2-7: Tooltip initialization - Requires JavaScript to enable",
          "Line 9-10: Basic tooltip - data-bs-toggle='tooltip' and data-bs-title",
          "Line 13-14: HTML tooltip - data-bs-html='true' allows HTML content",
          "Line 17-20: Tooltip directions - data-bs-placement='top/right/bottom/left'",
          "Line 23-28: Popover initialization - Separate initialization needed",
          "Line 30-32: Basic popover - data-bs-title and data-bs-content",
          "Line 35-38: Popover directions - Same placement options as tooltips",
          "Line 41-42: Dismissible popover - data-bs-trigger='focus' closes on click outside",
          "Line 45-46: Hover popover - data-bs-trigger='hover' shows on hover",
          "Line 49-50: HTML popover - data-bs-html='true' for formatted content",
          "Line 53-57: Disabled element tooltip - Wrapper needed because disabled elements can't trigger events"
        ],
        simpleMeaning: "Tooltips show small hints on hover. Popovers show larger content boxes when clicked",
        output: "Hover shows small tooltip text, click shows popover box with title and content",
        note: "Tooltips and popovers require manual JavaScript initialization for performance reasons"
      }
    ]
  },
  
  advanced: {
    title: "🚀 Advanced Bootstrap - Expert Level",
    topics: [
      {
        name: "1. Customizing Bootstrap with Sass",
        description: "Bootstrap is built with Sass, allowing you to customize variables, import only needed components, and create custom themes.",
        code: `// custom-bootstrap.scss
// Override default variables
$primary: #ff6b35;
$secondary: #6c757d;
$success: #28a745;
$danger: #dc3545;
$warning: #ffc107;
$info: #17a2b8;

// Custom font family
$font-family-sans-serif: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto;

// Custom border radius
$border-radius: 0.5rem;
$border-radius-lg: 0.75rem;
$border-radius-sm: 0.25rem;

// Custom spacing
$spacer: 1rem;
$spacers: (
    0: 0,
    1: $spacer * 0.25,
    2: $spacer * 0.5,
    3: $spacer,
    4: $spacer * 1.5,
    5: $spacer * 3,
    6: $spacer * 4.5,
    7: $spacer * 6,
);

// Custom container widths
$container-max-widths: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px,
    xxl: 1320px,
    xxxl: 1540px
);

// Custom breakpoints
$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px,
    xxxl: 1600px
);

// Import Bootstrap (must be after variable overrides)
@import "bootstrap/scss/bootstrap";

// Custom utility classes
@each $color, $value in $theme-colors {
    .bg-soft-#{$color} {
        background-color: rgba($value, 0.1);
    }
    .text-hover-#{$color} {
        transition: color 0.3s;
        &:hover {
            color: $value !important;
        }
    }
}

// Custom component styles
.card {
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: $box-shadow-lg;
    }
}

.btn {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.3s;
    
    &:hover {
        transform: translateY(-2px);
    }
}`,
        lineByLine: [
          "Line 5-10: Variable overrides - Changes Bootstrap's default colors",
          "Line 15: Font family - Changes default font",
          "Line 18-20: Border radius - Customizes rounded corners",
          "Line 23-31: Custom spacers - Adds additional spacing options",
          "Line 34-41: Container widths - Adds custom container breakpoints",
          "Line 44-52: Grid breakpoints - Adds custom breakpoints",
          "Line 55: Import Bootstrap - Must be after variable overrides",
          "Line 58-62: Custom utilities - Creates bg-soft-* classes",
          "Line 65-73: Custom card styles - Adds hover effects",
          "Line 76-83: Custom button styles - Adds animations and styling"
        ],
        simpleMeaning: "Sass customization lets you change Bootstrap's colors, spacing, and create your own theme",
        output: "Custom themed Bootstrap with brand colors, hover effects, and additional spacing options",
        note: "You need npm and a Sass compiler to customize Bootstrap with Sass"
      },
      {
        name: "2. Bootstrap Utility API",
        description: "The Utility API allows you to generate your own utility classes or modify existing ones.",
        code: `// custom-utilities.scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";
@import "bootstrap/scss/utilities";

// Add custom utilities
$utilities: map-merge(
    $utilities,
    (
        // Opacity utilities
        "opacity": (
            property: opacity,
            class: o,
            values: (
                0: 0,
                25: 0.25,
                50: 0.5,
                75: 0.75,
                100: 1,
            )
        ),
        // Cursor utilities
        "cursor": (
            property: cursor,
            class: cursor,
            values: (
                auto: auto,
                pointer: pointer,
                wait: wait,
                text: text,
                move: move,
                not-allowed: not-allowed,
            )
        ),
        // Text decoration utilities
        "text-decoration": (
            property: text-decoration,
            class: text-decoration,
            values: (
                none: none,
                underline: underline,
                line-through: line-through,
            )
        ),
        // Object fit utilities
        "object-fit": (
            property: object-fit,
            class: object,
            values: (
                contain: contain,
                cover: cover,
                fill: fill,
                none: none,
                scale-down: scale-down,
            )
        ),
        // Z-index utilities
        "z-index": (
            property: z-index,
            class: z,
            values: (
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                auto: auto,
            )
        ),
    )
);

// Modify existing utilities (remove responsive variants)
$utilities: map-merge(
    $utilities,
    (
        "width": (
            property: width,
            class: w,
            values: (
                25: 25%,
                50: 50%,
                75: 75%,
                100: 100%,
                auto: auto,
            )
        ),
    )
);

// Import Bootstrap utilities
@import "bootstrap/scss/utilities/api";

// Usage in HTML
// <div class="o-50"></div>
// <div class="cursor-pointer"></div>
// <div class="text-decoration-underline"></div>
// <div class="object-cover"></div>
// <div class="z-5"></div>`,
        lineByLine: [
          "Line 2-9: Bootstrap imports - Required for utilities",
          "Line 15-24: Opacity utilities - Creates .o-0, .o-25, .o-50, etc.",
          "Line 26-39: Cursor utilities - Creates .cursor-pointer, .cursor-wait, etc.",
          "Line 41-50: Text decoration - Creates .text-decoration-underline",
          "Line 52-62: Object fit - Creates .object-cover, .object-contain",
          "Line 64-75: Z-index utilities - Creates .z-0 through .z-5",
          "Line 80-90: Modify existing - Changes width utility responsivity",
          "Line 93: Import utilities API - Generates all utilities",
          "Line 96-101: Usage examples - How to use custom utilities"
        ],
        simpleMeaning: "Utility API lets you create your own helper classes for any CSS property",
        output: "Custom utilities like opacity, cursor, z-index, and object-fit become available",
        note: "The Utility API is powerful but increases CSS size; only add utilities you need"
      },
      {
        name: "3. Bootstrap with JavaScript Events & Methods",
        description: "Bootstrap components expose JavaScript events and methods for programmatic control.",
        code: `<!-- Modal with Events -->
<div class="modal fade" id="dynamicModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Dynamic Modal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">Modal content</div>
        </div>
    </div>
</div>

<button class="btn btn-primary" id="openModalBtn">Open Modal Programmatically</button>

<script>
// Method 1: Programmatically show/hide
const myModal = new bootstrap.Modal(document.getElementById('dynamicModal'));

document.getElementById('openModalBtn').addEventListener('click', function() {
    myModal.show(); // Open modal
});

// Method 2: Hide after 3 seconds
setTimeout(function() {
    myModal.hide();
}, 3000);

// Modal Events
const modalElement = document.getElementById('dynamicModal');
modalElement.addEventListener('show.bs.modal', function(event) {
    console.log('Modal is about to be shown');
});

modalElement.addEventListener('shown.bs.modal', function(event) {
    console.log('Modal is fully shown');
    // Focus on first input
    document.querySelector('#dynamicModal input')?.focus();
});

modalElement.addEventListener('hide.bs.modal', function(event) {
    console.log('Modal is about to be hidden');
    if (!confirm('Are you sure?')) {
        event.preventDefault(); // Prevent closing
    }
});

modalElement.addEventListener('hidden.bs.modal', function(event) {
    console.log('Modal is fully hidden');
    // Reset form
    document.querySelector('#dynamicModal form')?.reset();
});

// Tooltip Programmatic Control
const tooltipElement = document.querySelector('[data-bs-toggle="tooltip"]');
const tooltip = new bootstrap.Tooltip(tooltipElement);
tooltip.show(); // Show programmatically
tooltip.hide(); // Hide programmatically
tooltip.toggle(); // Toggle visibility
tooltip.dispose(); // Remove tooltip

// Popover Programmatic Control
const popoverElement = document.querySelector('[data-bs-toggle="popover"]');
const popover = new bootstrap.Popover(popoverElement);
popover.show();
popover.hide();
popover.toggle();
popover.setContent({ '.popover-body': 'New content' });

// Dropdown Programmatic Control
const dropdownElement = document.getElementById('dropdownMenuButton');
const dropdown = new bootstrap.Dropdown(dropdownElement);
dropdown.show();
dropdown.hide();
dropdown.toggle();

// Tab Programmatic Control
const triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'));
triggerTabList.forEach(function(triggerEl) {
    const tabTrigger = new bootstrap.Tab(triggerEl);
    triggerEl.addEventListener('click', function(event) {
        event.preventDefault();
        tabTrigger.show();
    });
});

// Dynamic content loading in Modal
const modal = new bootstrap.Modal(document.getElementById('ajaxModal'));
document.getElementById('loadDataBtn').addEventListener('click', async function() {
    modal.show();
    
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        document.querySelector('#ajaxModal .modal-body').innerHTML = 
            '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    } catch (error) {
        document.querySelector('#ajaxModal .modal-body').innerHTML = 
            '<div class="alert alert-danger">Error loading data</div>';
    }
});

// Toast notifications
<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div class="toast" id="liveToast" data-bs-autohide="false">
        <div class="toast-header">
            <strong class="me-auto">Notification</strong>
            <small>Just now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>

<button class="btn btn-primary" id="showToast">Show Toast</button>

<script>
const toastEl = document.getElementById('liveToast');
const toast = new bootstrap.Toast(toastEl, { animation: true, autohide: true, delay: 3000 });

document.getElementById('showToast').addEventListener('click', function() {
    toast.show();
});

toastEl.addEventListener('hidden.bs.toast', function() {
    console.log('Toast hidden');
});
</script>`,
        lineByLine: [
          "Line 15-18: Programmatically control - new bootstrap.Modal().show()",
          "Line 21-22: Auto hide - setTimeout to hide after duration",
          "Line 25-32: Show events - show.bs.modal (before show), shown.bs.modal (after show)",
          "Line 35-42: Hide events - hide.bs.modal (can prevent), hidden.bs.modal (after hide)",
          "Line 46-52: Tooltip methods - show(), hide(), toggle(), dispose()",
          "Line 55-61: Popover methods - show(), hide(), toggle(), setContent()",
          "Line 64-69: Dropdown methods - show(), hide(), toggle()",
          "Line 72-79: Tab control - new bootstrap.Tab().show()",
          "Line 82-94: Dynamic modal content - Fetch and display data",
          "Line 97-118: Toast notifications - Bootstrap.Toast with show() method"
        ],
        simpleMeaning: "You can control Bootstrap components with JavaScript methods and respond to events",
        output: "Programmatic control over modals, tooltips, popovers, and toasts with event handling",
        note: "Events have 'bs.' prefix. Use event.preventDefault() to cancel show/hide events"
      },
      {
        name: "4. Creating Custom Bootstrap Components",
        description: "Combine Bootstrap utilities and custom CSS to create new component variations.",
        code: `// Custom Card Component
<div class="card hover-card border-0 shadow-sm">
    <div class="card-body text-center p-4">
        <div class="icon-wrapper mb-3">
            <i class="bi bi-star fs-1 text-primary"></i>
        </div>
        <h5 class="card-title fw-bold">Feature Title</h5>
        <p class="card-text text-muted">Feature description goes here.</p>
        <button class="btn btn-outline-primary rounded-pill px-4">Learn More</button>
    </div>
</div>

<style>
.hover-card {
    transition: all 0.3s ease;
}
.hover-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,0.175) !important;
}
.icon-wrapper {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--bs-primary), var(--bs-info));
    border-radius: 50%;
}
</style>

// Custom Pricing Card
<div class="card pricing-card text-center">
    <div class="card-header bg-transparent border-0 pt-4">
        <h3 class="fw-bold">Basic Plan</h3>
    </div>
    <div class="card-body">
        <h2 class="display-4 fw-bold">$19<span class="fs-6 text-muted">/month</span></h2>
        <ul class="list-unstyled mt-4 mb-4">
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>10 Users</li>
            <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>50GB Storage</li>
            <li class="mb-2"><i class="bi bi-x-circle-fill text-danger me-2"></i>Priority Support</li>
        </ul>
        <button class="btn btn-primary btn-lg w-100 rounded-pill">Get Started</button>
    </div>
</div>

<style>
.pricing-card {
    border-radius: 1rem;
    transition: transform 0.3s;
}
.pricing-card:hover {
    transform: scale(1.02);
}
.pricing-card .card-header {
    background: linear-gradient(135deg, var(--bs-primary), var(--bs-info));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
</style>

// Custom Animated Button
<button class="btn btn-primary btn-animated">
    <span>Hover Me</span>
    <i class="bi bi-arrow-right"></i>
</button>

<style>
.btn-animated {
    overflow: hidden;
    position: relative;
    transition: all 0.3s;
}
.btn-animated span {
    display: inline-block;
    transition: transform 0.3s;
}
.btn-animated i {
    position: absolute;
    right: -20px;
    opacity: 0;
    transition: all 0.3s;
}
.btn-animated:hover span {
    transform: translateX(-10px);
}
.btn-animated:hover i {
    right: 15px;
    opacity: 1;
}
</style>

// Custom Form Switch
<div class="custom-switch">
    <input type="checkbox" class="form-check-input" id="customSwitch">
    <label class="form-check-label" for="customSwitch">Toggle Me</label>
</div>

<style>
.custom-switch .form-check-input {
    width: 3rem;
    height: 1.5rem;
    cursor: pointer;
}
.custom-switch .form-check-input:checked {
    background-color: var(--bs-success);
    border-color: var(--bs-success);
}
.custom-switch .form-check-label {
    margin-left: 0.5rem;
    cursor: pointer;
}
</style>

// Custom Progress Bar with Steps
<div class="step-progress">
    <div class="step active">1</div>
    <div class="step">2</div>
    <div class="step">3</div>
    <div class="step">4</div>
</div>

<style>
.step-progress {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 2rem 0;
}
.step-progress::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #dee2e6;
    transform: translateY(-50%);
    z-index: 1;
}
.step {
    width: 40px;
    height: 40px;
    background: white;
    border: 2px solid #dee2e6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    background: white;
    transition: all 0.3s;
}
.step.active {
    border-color: var(--bs-primary);
    background: var(--bs-primary);
    color: white;
}
.step.completed {
    border-color: var(--bs-success);
    background: var(--bs-success);
    color: white;
}
</style>`,
        lineByLine: [
          "Line 2-13: Custom card - Enhanced card with hover effects and centered content",
          "Line 16-27: Hover animation - Translate and shadow on hover",
          "Line 30-39: Icon wrapper - Gradient background circle",
          "Line 43-54: Pricing card - Special styling for pricing tables",
          "Line 58-68: Pricing card hover - Scale effect",
          "Line 72-86: Animated button - Icons slide in on hover",
          "Line 91-102: Custom switch - Larger toggle with success color",
          "Line 107-131: Step progress - Multi-step indicator with active/completed states"
        ],
        simpleMeaning: "Extend Bootstrap by combining utilities with custom CSS for unique components",
        output: "Custom-designed components that maintain Bootstrap compatibility and responsiveness",
        note: "Always maintain Bootstrap's responsive breakpoints and accessibility features"
      },
      {
        name: "5. Bootstrap RTL Support",
        description: "Bootstrap supports RTL (Right-to-Left) languages like Arabic, Hebrew, Persian through its RTL version.",
        code: `<!-- RTL Bootstrap CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">

<!-- Or with local build -->

// Custom RTL with Sass
// custom-rtl.scss
$enable-rtl: true;
$enable-smooth-scroll: false; // Smooth scroll doesn't work well with RTL

$dir: rtl;
$theme-direction: rtl;

@import "bootstrap/scss/bootstrap";

// Manual RTL adjustments
.custom-component {
    // LTR styles
    margin-left: 1rem;
    
    // RTL overrides
    [dir="rtl"] & {
        margin-left: 0;
        margin-right: 1rem;
    }
}

// RTL-aware spacing utilities
<div class="container">
    <!-- Margin and padding automatically flip in RTL -->
    <div class="ms-3 rtl:me-3">Start margin becomes end margin in RTL</div>
    <div class="me-2 rtl:ms-2">End margin becomes start margin in RTL</div>
    
    <!-- Text alignment flips -->
    <div class="text-start rtl:text-end">Left-aligned becomes right-aligned</div>
    <div class="text-end rtl:text-start">Right-aligned becomes left-aligned</div>
    
    <!-- Flexbox direction flips -->
    <div class="d-flex rtl:flex-row-reverse">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
</div>

// RTL Dropdown Menu
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
</div>

// RTL Navbar
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto"> <!-- ms-auto pushes to left in RTL -->
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

// RTL Form Elements
<div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" placeholder="name@example.com">
</div>

<div class="form-check">
    <input class="form-check-input" type="checkbox" id="check">
    <label class="form-check-label" for="check">
        Remember me
    </label>
</div>

// Detecting RTL in JavaScript
function isRTL() {
    return document.documentElement.getAttribute('dir') === 'rtl' ||
           window.getComputedStyle(document.body).direction === 'rtl';
}

// Toggle RTL dynamically
function toggleRTL() {
    const html = document.documentElement;
    const currentDir = html.getAttribute('dir');
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    html.setAttribute('dir', newDir);
    
    // Save preference
    localStorage.setItem('direction', newDir);
    
    // Reload Bootstrap RTL CSS
    const link = document.querySelector('link[href*="bootstrap"]');
    const href = link.getAttribute('href');
    const newHref = newDir === 'rtl' 
        ? href.replace('.css', '.rtl.css')
        : href.replace('.rtl.css', '.css');
    link.setAttribute('href', newHref);
}`,
        lineByLine: [
          "Line 2: RTL Bootstrap CDN - Special RTL version",
          "Line 7-11: Sass RTL configuration - $enable-rtl: true",
          "Line 16-23: Manual RTL adjustments - [dir='rtl'] & selector",
          "Line 27-30: RTL-aware utilities - ms/me automatically flip",
          "Line 33-34: Text alignment - text-start/text-end flip",
          "Line 37-41: Flex direction - flex-row-reverse in RTL",
          "Line 45-52: Dropdown menu - dropdown-menu-end positions correctly",
          "Line 56-68: RTL Navbar - ms-auto pushes items to opposite side",
          "Line 72-80: RTL form elements - Labels and inputs position correctly",
          "Line 83-89: JavaScript RTL detection - Check dir attribute or computed style",
          "Line 92-106: Toggle RTL - Dynamic switching with local storage"
        ],
        simpleMeaning: "Bootstrap RTL version automatically flips layouts for right-to-left languages",
        output: "Full layout mirroring: text alignment spacing, flex direction, and component positioning",
        note: "Use Bootstrap's RTL CDN or enable $enable-rtl in Sass for automatic RTL support"
      }
    ]
  }
};
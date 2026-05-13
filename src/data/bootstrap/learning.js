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
      },
     {
  name: "3. Bootstrap Custom Components Development",
  description: "Create reusable, custom Bootstrap components with proper styling, JavaScript integration, and documentation.",
  explanation: `🎯 WHY BUILD CUSTOM COMPONENTS?
- Reusable across projects
- Consistent branding
- Complex functionality encapsulated
- Easy to maintain and update
- Share with team or community

🔧 COMPONENT TYPES:
1. UI Components (cards, modals, carousels)
2. Form Components (custom inputs, selects)
3. Data Components (tables, charts, grids)
4. Navigation Components (megamenus, tabs)
5. Interactive Components (sliders, drawers)

📁 COMPONENT STRUCTURE:
- HTML markup (structure)
- CSS/Sass styling (appearance)
- JavaScript (behavior)
- Documentation (usage)

🎨 STYLING APPROACHES:
1. Extend Bootstrap classes
2. Create new utility classes
3. Override Bootstrap variables
4. Custom CSS with BEM naming

⚡ JAVASCRIPT PATTERNS:
- Vanilla JS (no dependencies)
- Bootstrap's JS plugins API
- jQuery (legacy)
- Framework components (React, Vue)

📖 DOCUMENTATION BEST PRACTICES:
- Installation instructions
- Basic usage examples
- Configuration options
- API reference
- Browser support
- Accessibility notes`,
  code: `// ========== PART 1: CUSTOM CARD COMPONENT ==========
// _custom-card.scss
.card-custom {
  position: relative;
  background: white;
  border: none;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    
    .card-custom-overlay {
      opacity: 1;
    }
  }
  
  &-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  &-content {
    padding: 1.5rem;
  }
  
  &-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  
  &-text {
    color: #6c757d;
    line-height: 1.6;
  }
  
  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(67, 97, 238, 0.9);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #dc3545;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 50rem;
    font-size: 0.75rem;
    font-weight: 600;
  }
}

// ========== PART 2: CUSTOM MODAL COMPONENT ==========
// custom-modal.js
class CustomModal {
  constructor(options = {}) {
    this.title = options.title || 'Modal Title';
    this.content = options.content || '';
    this.onConfirm = options.onConfirm || (() => {});
    this.onCancel = options.onCancel || (() => {});
    this.createModal();
  }
  
  createModal() {
    const modalHTML = \`
      <div class="modal fade" id="customModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title">\${this.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              \${this.content}
            </div>
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" id="confirmBtn">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    \`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('customModal');
    this.modalInstance = new bootstrap.Modal(this.modal);
    
    const confirmBtn = this.modal.querySelector('#confirmBtn');
    confirmBtn.addEventListener('click', () => {
      this.onConfirm();
      this.close();
    });
    
    this.modal.addEventListener('hidden.bs.modal', () => {
      this.onCancel();
      this.modal.remove();
    });
  }
  
  show() {
    this.modalInstance.show();
  }
  
  close() {
    this.modalInstance.hide();
  }
}

// Usage
// const modal = new CustomModal({
//   title: 'Confirm Action',
//   content: '<p>Are you sure you want to delete this item?</p>',
//   onConfirm: () => console.log('Confirmed'),
//   onCancel: () => console.log('Cancelled')
// });
// modal.show();

// ========== PART 3: CUSTOM TOAST NOTIFICATION ==========
// toast-notification.js
class ToastNotification {
  constructor(message, type = 'info', duration = 3000) {
    this.message = message;
    this.type = type;
    this.duration = duration;
    this.element = null;
  }
  
  show() {
    const toastHTML = \`
      <div class="toast-custom toast-custom-\${this.type} p-3 mb-3" role="alert">
        <div class="d-flex align-items-center">
          <div class="toast-custom-icon me-3">
            \${this.getIcon()}
          </div>
          <div class="flex-grow-1">
            <div class="toast-custom-message">\${this.message}</div>
            <div class="toast-custom-time">Just now</div>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
      </div>
    \`;
    
    const container = document.getElementById('toast-container') || this.createContainer();
    container.insertAdjacentHTML('beforeend', toastHTML);
    this.element = container.lastElementChild;
    
    const bsToast = new bootstrap.Toast(this.element, { autohide: true, delay: this.duration });
    bsToast.show();
    
    this.element.addEventListener('hidden.bs.toast', () => {
      this.element.remove();
    });
  }
  
  getIcon() {
    const icons = {
      success: '<i class="bi bi-check-circle-fill"></i>',
      error: '<i class="bi bi-x-circle-fill"></i>',
      warning: '<i class="bi bi-exclamation-triangle-fill"></i>',
      info: '<i class="bi bi-info-circle-fill"></i>'
    };
    return icons[this.type] || icons.info;
  }
  
  createContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = \`
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1100;
    \`;
    document.body.appendChild(container);
    return container;
  }
}

// Usage
// new ToastNotification('Operation completed successfully!', 'success').show();
// new ToastNotification('Something went wrong!', 'error', 5000).show();

// ========== PART 4: CUSTOM SEARCHABLE DROPDOWN ==========
// searchable-dropdown.js
class SearchableDropdown {
  constructor(selectElement, options = {}) {
    this.select = selectElement;
    this.placeholder = options.placeholder || 'Search...';
    this.options = Array.from(this.select.options);
    this.init();
  }
  
  init() {
    this.select.style.display = 'none';
    
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    
    const button = document.createElement('button');
    button.className = 'btn btn-outline-secondary dropdown-toggle w-100';
    button.textContent = this.placeholder;
    button.setAttribute('data-bs-toggle', 'dropdown');
    
    const menu = document.createElement('div');
    menu.className = 'dropdown-menu p-3';
    menu.style.minWidth = '300px';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'form-control mb-2';
    searchInput.placeholder = this.placeholder;
    
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'dropdown-search-items';
    itemsContainer.style.maxHeight = '300px';
    itemsContainer.style.overflowY = 'auto';
    
    this.renderItems(itemsContainer, this.options);
    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = this.options.filter(opt => 
        opt.textContent.toLowerCase().includes(searchTerm)
      );
      this.renderItems(itemsContainer, filtered);
    });
    
    menu.appendChild(searchInput);
    menu.appendChild(itemsContainer);
    dropdown.appendChild(button);
    dropdown.appendChild(menu);
    this.select.parentNode.insertBefore(dropdown, this.select.nextSibling);
  }
  
  renderItems(container, options) {
    container.innerHTML = '';
    
    if (options.length === 0) {
      container.innerHTML = '<div class="text-center text-muted p-3">No results found</div>';
      return;
    }
    
    options.forEach(opt => {
      const item = document.createElement('div');
      item.className = 'dropdown-item';
      item.textContent = opt.textContent;
      item.style.cursor = 'pointer';
      
      item.addEventListener('click', () => {
        this.select.value = opt.value;
        const button = container.closest('.dropdown').querySelector('.dropdown-toggle');
        button.textContent = opt.textContent;
      });
      
      container.appendChild(item);
    });
  }
}

// Usage
// const select = document.querySelector('#mySelect');
// const dropdown = new SearchableDropdown(select, {
//   placeholder: 'Search country...'
// });

// ========== PART 5: CUSTOM DATA TABLE ==========
// data-table.js
class DataTable {
  constructor(table, options = {}) {
    this.table = table;
    this.data = options.data || [];
    this.columns = options.columns || [];
    this.pageSize = options.pageSize || 10;
    this.currentPage = 1;
    this.sortColumn = null;
    this.sortDirection = 'asc';
    this.init();
  }
  
  init() {
    this.renderHeader();
    this.renderBody();
    this.renderPagination();
  }
  
  renderHeader() {
    const thead = this.table.createTHead();
    const headerRow = thead.insertRow();
    
    this.columns.forEach(col => {
      const th = document.createElement('th');
      th.textContent = col.label;
      th.style.cursor = 'pointer';
      
      if (col.sortable !== false) {
        th.addEventListener('click', () => this.sort(col.field));
      }
      
      if (this.sortColumn === col.field) {
        th.innerHTML += \` \${this.sortDirection === 'asc' ? '↑' : '↓'}\`;
      }
      
      headerRow.appendChild(th);
    });
    
    const actionsTh = document.createElement('th');
    actionsTh.textContent = 'Actions';
    headerRow.appendChild(actionsTh);
  }
  
  renderBody() {
    const tbody = this.table.querySelector('tbody') || this.table.createTBody();
    tbody.innerHTML = '';
    
    let filteredData = [...this.data];
    
    if (this.sortColumn) {
      filteredData.sort((a, b) => {
        let aVal = a[this.sortColumn];
        let bVal = b[this.sortColumn];
        
        if (typeof aVal === 'string') {
          aVal = aVal.toLowerCase();
          bVal = bVal.toLowerCase();
        }
        
        if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    
    const start = (this.currentPage - 1) * this.pageSize;
    const paginatedData = filteredData.slice(start, start + this.pageSize);
    
    paginatedData.forEach(row => {
      const tr = tbody.insertRow();
      
      this.columns.forEach(col => {
        const td = tr.insertCell();
        td.textContent = row[col.field];
      });
      
      const actionsTd = tr.insertCell();
      actionsTd.innerHTML = \`
        <button class="btn btn-sm btn-outline-primary me-1">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger">
          <i class="bi bi-trash"></i>
        </button>
      \`;
    });
  }
  
  renderPagination() {
    const totalPages = Math.ceil(this.data.length / this.pageSize);
    if (totalPages <= 1) return;
    
    const pagination = document.createElement('nav');
    pagination.className = 'mt-3';
    
    const ul = document.createElement('ul');
    ul.className = 'pagination justify-content-center';
    
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.className = \`page-item \${i === this.currentPage ? 'active' : ''}\`;
      
      const a = document.createElement('a');
      a.className = 'page-link';
      a.href = '#';
      a.textContent = i;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        this.currentPage = i;
        this.renderBody();
        this.renderPagination();
      });
      
      li.appendChild(a);
      ul.appendChild(li);
    }
    
    pagination.appendChild(ul);
    this.table.parentNode.appendChild(pagination);
  }
  
  sort(field) {
    if (this.sortColumn === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = field;
      this.sortDirection = 'asc';
    }
    
    this.renderHeader();
    this.renderBody();
  }
}

// Usage
// const table = new DataTable(document.getElementById('dataTable'), {
//   data: [
//     { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' }
//   ],
//   columns: [
//     { field: 'id', label: 'ID', sortable: true },
//     { field: 'name', label: 'Name', sortable: true },
//     { field: 'email', label: 'Email', sortable: true },
//     { field: 'status', label: 'Status', sortable: false }
//   ],
//   pageSize: 5
// });`,
  lineByLine: [
    "Line 4-52: Custom card component - Hover effects, overlays, and badges",
    "Line 55-98: Custom modal - JavaScript class for reusable modals with Bootstrap integration",
    "Line 101-158: Toast notifications - Success, error, warning, and info variants",
    "Line 161-226: Searchable dropdown - Filterable select component with live search",
    "Line 229-370: Data table - Sortable and paginatable table component"
  ],
  simpleMeaning: "Create reusable, production-ready Bootstrap components with custom styling, JavaScript functionality, and proper documentation.",
  output: "Fully functional custom components including cards, modals, toasts, searchable dropdowns, and data tables.",
  note: "Follow BEM naming convention for CSS. Use Bootstrap's utilities for spacing and colors. Provide clear documentation. Test components across browsers."
},
{
        name: "4. Bootstrap Utility API Mastery",
        description: "Master Bootstrap's Utility API to generate custom utility classes, modify existing ones, and create responsive utilities.",
        explanation: `🎯 WHAT IS THE UTILITY API?
Bootstrap's Utility API is a powerful Sass-based system that allows you to generate utility classes on-demand. It's the engine behind all of Bootstrap's utilities.

🔧 WHY USE UTILITY API?
- Generate only what you need (smaller CSS)
- Create custom utilities easily
- Modify existing utilities globally
- Add responsive variants automatically
- Maintain consistency across project

📁 UTILITY API STRUCTURE:
$utilities: (
  "property-name": (
    property: css-property,
    class: class-name,
    values: map-of-values,
    responsive: true/false,
    state: hover/focus,
    rfs: true/false
  )
);

🎨 COMMON UTILITY PROPERTIES:
- property: CSS property (margin, padding, color)
- class: Class prefix (m, p, text)
- values: Map of values (0, 1, 2, auto)
- responsive: Enable breakpoint variants
- state: Enable hover/focus variants

⚡ UTILITY GENERATION PROCESS:
1. Define utility in $utilities map
2. Choose property and values
3. Set responsive/state variants
4. Import utilities API
5. Compile Sass to generate CSS

📏 SPACING UTILITIES CUSTOMIZATION:
- $spacer: Base spacing unit
- $spacers: Map of spacing values
- margin/padding utilities auto-generated
- Negative margins included automatically

🎯 BEST PRACTICES:
- Use default utilities when possible
- Extend rather than replace
- Generate only needed variants
- Test generated classes
- Document custom utilities`,
        code: `// ========== PART 1: UTILITY API CONFIGURATION ==========
// custom-utilities.scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/utilities";

// Custom spacing values
$custom-spacers: (
  6: $spacer * 4.5,   // 72px
  7: $spacer * 6,     // 96px
  8: $spacer * 7.5,   // 120px
  9: $spacer * 9,     // 144px
  10: $spacer * 12    // 192px
);

// Merge with default spacers
$spacers: map-merge($spacers, $custom-spacers);

// ========== PART 2: CUSTOM UTILITIES ==========
// Add cursor utilities
$utilities: map-merge($utilities, (
  "cursor": (
    property: cursor,
    class: cursor,
    values: (
      pointer: pointer,
      default: default,
      wait: wait,
      grab: grab,
      grabbing: grabbing,
      not-allowed: not-allowed,
      zoom-in: zoom-in,
      zoom-out: zoom-out
    )
  )
));

// Add text shadow utilities
$utilities: map-merge($utilities, (
  "text-shadow": (
    property: text-shadow,
    class: text-shadow,
    values: (
      none: none,
      sm: 0 1px 2px rgba(0, 0, 0, 0.05),
      md: 0 2px 4px rgba(0, 0, 0, 0.1),
      lg: 0 4px 8px rgba(0, 0, 0, 0.15),
      xl: 0 8px 16px rgba(0, 0, 0, 0.2)
    )
  )
));

// Add backdrop blur utilities
$utilities: map-merge($utilities, (
  "backdrop-blur": (
    property: backdrop-filter,
    class: backdrop-blur,
    values: (
      none: none,
      sm: blur(4px),
      md: blur(8px),
      lg: blur(12px),
      xl: blur(16px),
      xxl: blur(24px)
    )
  )
));

// Add rotate utilities
$utilities: map-merge($utilities, (
  "rotate": (
    property: transform,
    class: rotate,
    values: (
      0: rotate(0deg),
      45: rotate(45deg),
      90: rotate(90deg),
      135: rotate(135deg),
      180: rotate(180deg),
      225: rotate(225deg),
      270: rotate(270deg),
      315: rotate(315deg)
    )
  )
));

// Add scale utilities
$utilities: map-merge($utilities, (
  "scale": (
    property: transform,
    class: scale,
    values: (
      25: scale(0.25),
      50: scale(0.5),
      75: scale(0.75),
      100: scale(1),
      110: scale(1.1),
      125: scale(1.25),
      150: scale(1.5),
      175: scale(1.75),
      200: scale(2)
    )
  )
));

// ========== PART 3: MODIFY EXISTING UTILITIES ==========
// Extend opacity utilities
$utilities: map-merge($utilities, (
  "opacity": (
    property: opacity,
    class: opacity,
    values: (
      0: 0,
      10: 0.1,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      90: 0.9,
      100: 1
    )
  )
));

// Extend border radius
$utilities: map-merge($utilities, (
  "rounded": (
    property: border-radius,
    class: rounded,
    values: (
      null: $border-radius,
      0: 0,
      1: $border-radius-sm,
      2: $border-radius,
      3: $border-radius-lg,
      4: $border-radius-xl,
      5: $border-radius-2xl,
      circle: 50%,
      pill: 50rem
    )
  )
));

// ========== PART 4: RESPONSIVE UTILITIES ==========
// Width utilities with responsive variants
$utilities: map-merge($utilities, (
  "width-responsive": (
    property: width,
    class: w,
    values: (
      25: 25%,
      50: 50%,
      75: 75%,
      100: 100%,
      auto: auto
    ),
    responsive: true
  )
));

// Custom breakpoint utilities
$custom-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
  xxxl: 1600px
);

$grid-breakpoints: map-merge($grid-breakpoints, $custom-breakpoints);

// ========== PART 5: STATE UTILITIES ==========
$utilities: map-merge($utilities, (
  "hover-scale": (
    property: transform,
    class: hover-scale,
    values: (
      105: scale(1.05),
      110: scale(1.1),
      115: scale(1.15)
    ),
    state: hover
  ),
  
  "focus-ring": (
    property: box-shadow,
    class: focus-ring,
    values: (
      primary: 0 0 0 0.25rem rgba($primary, 0.25),
      success: 0 0 0 0.25rem rgba($success, 0.25),
      danger: 0 0 0 0.25rem rgba($danger, 0.25),
      warning: 0 0 0 0.25rem rgba($warning, 0.25)
    ),
    state: focus
  )
));

// ========== PART 6: ADVANCED UTILITY GENERATION ==========
// Gradient utilities
$gradient-colors: (
  primary: $primary,
  secondary: $secondary,
  success: $success,
  danger: $danger,
  warning: $warning,
  info: $info,
  dark: $dark,
  light: $light
);

@each $name, $color in $gradient-colors {
  $utilities: map-merge($utilities, (
    "bg-gradient-#{$name}": (
      property: background-image,
      class: bg-gradient-#{$name},
      values: (
        null: linear-gradient(135deg, $color, darken($color, 10%))
      )
    )
  ));
}

// ========== PART 7: PERFORMANCE OPTIMIZATION ==========
// Only generate specific utilities
$utilities: (
  // Only include needed utilities
  "width": $utilities["width"],
  "height": $utilities["height"],
  "margin": $utilities["margin"],
  "padding": $utilities["padding"],
  "color": $utilities["color"],
  "background-color": $utilities["background-color"]
);

// Disable responsive variants for performance
$enable-responsive-utilities: false;

// Disable dark mode variants
$enable-dark-mode: false;

// ========== PART 8: CUSTOM UTILITY CLASSES EXAMPLE ==========
<!-- Usage Examples -->
<div class="container p-5">
  <!-- Custom cursor utilities -->
  <button class="btn btn-primary cursor-pointer">Pointer Cursor</button>
  <button class="btn btn-secondary cursor-grab" disabled>Grab Cursor</button>
  
  <!-- Text shadow utilities -->
  <h1 class="text-shadow-lg">Text with Large Shadow</h1>
  <p class="text-shadow-md">Medium text shadow effect</p>
  
  <!-- Backdrop blur -->
  <div class="bg-dark text-white p-4 backdrop-blur-md">
    This content has backdrop blur
  </div>
  
  <!-- Rotate utilities -->
  <i class="bi bi-arrow-repeat rotate-90"></i>
  <i class="bi bi-arrow-repeat rotate-180"></i>
  
  <!-- Scale utilities -->
  <img src="image.jpg" class="scale-110 hover:scale-125 transition-all">
  
  <!-- Extended opacity -->
  <div class="bg-primary opacity-25">25% opacity</div>
  <div class="bg-primary opacity-60">60% opacity</div>
  
  <!-- Responsive width utilities -->
  <div class="w-50 w-md-75 w-lg-100 bg-info">
    Responsive width that changes at breakpoints
  </div>
  
  <!-- Hover scale utilities -->
  <button class="btn btn-success hover-scale-110 transition-all">
    Hover to scale up
  </button>
  
  <!-- Gradient backgrounds -->
  <div class="bg-gradient-primary p-5 rounded text-white">
    Primary gradient background
  </div>
  <div class="bg-gradient-success p-5 rounded text-white mt-3">
    Success gradient background
  </div>
  
  <!-- Custom spacing (spacer 6-10) -->
  <div class="mt-6 mb-7 p-8 bg-light rounded">
    Custom spacing values: margin-top 72px, margin-bottom 96px, padding 120px
  </div>
</div>`,
        lineByLine: [
          "Line 4-7: Import Bootstrap functions, variables, and utilities",
          "Line 10-15: Custom spacers - Adding values 6 through 10",
          "Line 20-34: Cursor utilities - Pointer, grab, not-allowed, etc.",
          "Line 39-50: Text shadow - Adding shadow depth levels",
          "Line 55-66: Backdrop blur - Blur effects for glass morphism",
          "Line 71-84: Rotate utilities - Transform rotate degrees",
          "Line 89-100: Scale utilities - Transform scale factors",
          "Line 105-118: Extended opacity - More opacity options",
          "Line 123-138: Extended border radius - More rounded options",
          "Line 143-151: Responsive utilities - With breakpoint variants",
          "Line 154-164: Custom breakpoints - Adding xxxl breakpoint",
          "Line 169-184: State utilities - Hover scale and focus ring",
          "Line 189-200: Dynamic generation - Loop through gradient colors",
          "Line 205-214: Performance optimization - Selective utility generation"
        ],
        simpleMeaning: "The Utility API lets you generate custom CSS utilities on-demand, modify existing ones, and add responsive/state variants automatically.",
        output: "Custom utility classes for cursor, text-shadow, backdrop-blur, rotate, scale, extended opacity, gradients, and more.",
        note: "Always import utilities after modifying $utilities map. Use map-merge to preserve defaults. Test generated classes. Only generate what you need for smaller CSS."
      },
      
      {
        name: "5. Bootstrap with React.js Integration",
        description: "Complete guide to using Bootstrap 5 with React.js applications using react-bootstrap library.",
        explanation: `🎯 WHY REACT-BOOTSTRAP?
React-Bootstrap rebuilds Bootstrap components as true React components without jQuery dependency. Each component is built from scratch as proper React components.

📦 ADVANTAGES:
- No jQuery dependency
- True React components (props, state, lifecycle)
- Bootstrap styles preserved
- Accessible by default
- TypeScript support
- Tree-shakeable imports

🔧 INSTALLATION:
npm install react-bootstrap bootstrap

📁 COMPONENT CATEGORIES:
1. Layout (Container, Row, Col, Stack)
2. Forms (Form, InputGroup, FloatingLabel)
3. Navigation (Nav, Navbar, Breadcrumb)
4. Components (Button, Card, Modal, Toast)
5. Data (Table, Pagination, Spinner)
6. Overlays (Tooltip, Popover, Dropdown)

🎨 THEMING WITH REACT:
- Import Bootstrap CSS
- Override with custom CSS
- Use CSS modules
- Styled components integration

⚡ PERFORMANCE:
- Import only needed components
- Code splitting ready
- Lazy loading support
- Minimal bundle size

🔄 REACT-BOOTSTRAP vs BOOTSTRAP JS:
- No global $ or jQuery
- Component-based API
- Event handlers as props
- State management integration
- Lifecycle method access`,
        code: `// ========== PART 1: INSTALLATION & SETUP ==========
// Install packages
// npm install react-bootstrap bootstrap

// App.js - Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function App() {
  return (
    <Container className="py-4">
      <h1>React-Bootstrap Demo</h1>
      <Button variant="primary">Primary Button</Button>
    </Container>
  );
}

// ========== PART 2: LAYOUT COMPONENTS ==========
// Responsive grid layout
import { Container, Row, Col } from 'react-bootstrap';

function ResponsiveLayout() {
  return (
    <Container fluid className="p-4">
      <Row>
        <Col xs={12} md={6} lg={4} className="mb-3">
          <div className="bg-light p-3">Column 1</div>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-3">
          <div className="bg-light p-3">Column 2</div>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-3">
          <div className="bg-light p-3">Column 3</div>
        </Col>
      </Row>
      
      {/* Auto-layout columns */}
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      
      {/* Stack component for vertical spacing */}
      <Stack gap={3}>
        <div className="bg-light p-2">First item</div>
        <div className="bg-light p-2">Second item</div>
        <div className="bg-light p-2">Third item</div>
      </Stack>
    </Container>
  );
}

// ========== PART 3: FORM COMPONENTS ==========
import { Form, Button, InputGroup, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';

function BootstrapForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };
  
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {/* Basic input */}
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      
      {/* Input group with addon */}
      <InputGroup className="mb-3">
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control placeholder="Username" />
        <InputGroup.Text>.com</InputGroup.Text>
      </InputGroup>
      
      {/* Floating label */}
      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      
      {/* Checkbox */}
      <Form.Group className="mb-3" controlId="formCheckbox">
        <Form.Check 
          type="checkbox"
          name="remember"
          checked={formData.remember}
          onChange={handleChange}
          label="Remember me"
        />
      </Form.Group>
      
      {/* Select dropdown */}
      <Form.Select className="mb-3" aria-label="Default select">
        <option>Open this select menu</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      
      {/* Range slider */}
      <Form.Range className="mb-3" />
      
      {/* Switch */}
      <Form.Switch className="mb-3" label="Dark mode" />
      
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
}

// ========== PART 4: MODAL COMPONENT ==========
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

function BootstrapModal() {
  const [show, setShow] = useState(false);
  const [showLarge, setShowLarge] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);
  
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Launch Modal
      </Button>
      
      {/* Standard modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body content goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      {/* Large modal */}
      <Button variant="info" onClick={() => setShowLarge(true)}>
        Large Modal
      </Button>
      <Modal size="lg" show={showLarge} onHide={() => setShowLarge(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Large Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a large modal with more space for content.</p>
        </Modal.Body>
      </Modal>
      
      {/* Fullscreen modal */}
      <Button variant="dark" onClick={() => setShowFullscreen(true)}>
        Fullscreen Modal
      </Button>
      <Modal 
        size="xl" 
        fullscreen="xl-down" 
        show={showFullscreen} 
        onHide={() => setShowFullscreen(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Fullscreen Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This modal becomes fullscreen on large devices and below.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

// ========== PART 5: NAVIGATION COMPONENTS ==========
import { Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap';

function BootstrapNavbar() {
  return (
    <>
      {/* Basic navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#login">
                Login <Badge bg="secondary">New</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Tabs */}
      <Tab.Container defaultActiveKey="home">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="settings">Settings</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <h3>Home Content</h3>
                <p>Welcome to the dashboard!</p>
              </Tab.Pane>
              <Tab.Pane eventKey="profile">
                <h3>Profile Content</h3>
                <p>User profile information.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="settings">
                <h3>Settings Content</h3>
                <p>Application settings panel.</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

// ========== PART 6: CARD & DATA COMPONENTS ==========
import { Card, Button, Table, Pagination, Spinner, Alert } from 'react-bootstrap';

function BootstrapComponents() {
  return (
    <>
      {/* Card grid */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Col key={num}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={\`https://picsum.photos/300/200?random=\${num}\`} />
              <Card.Body>
                <Card.Title>Card Title {num}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                2 days ago
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* Data table */}
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
      
      {/* Pagination */}
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      
      {/* Loading spinner */}
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="grow" variant="success" />
        <Button variant="primary" disabled>
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          Loading...
        </Button>
      </div>
      
      {/* Alerts */}
      <Alert variant="success" dismissible>
        <Alert.Heading>Success!</Alert.Heading>
        <p>Your operation completed successfully.</p>
      </Alert>
      
      <Alert variant="danger">
        <Alert.Heading>Error!</Alert.Heading>
        <p>Something went wrong. Please try again.</p>
      </Alert>
    </>
  );
}

// ========== PART 7: TOAST NOTIFICATIONS ==========
import { Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';

function ToastNotifications() {
  const [showToast, setShowToast] = useState(false);
  const [showPositionedToast, setShowPositionedToast] = useState(false);
  
  return (
    <>
      <Button onClick={() => setShowToast(true)}>Show Toast</Button>
      <Button onClick={() => setShowPositionedToast(true)}>Positioned Toast</Button>
      
      {/* Standard toast */}
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
      
      {/* Positioned toast container */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast onClose={() => setShowPositionedToast(false)} show={showPositionedToast} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>This toast is positioned at bottom-end.</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

// ========== PART 8: CUSTOMIZING REACT-BOOTSTRAP ==========
// theme/custom.scss
$primary: #4361ee;
$secondary: #6c757d;
$success: #06ffa5;
$danger: #ef233c;
$warning: #ffb703;
$info: #00b4d8;

// Import Bootstrap after custom variables
@import 'bootstrap/scss/bootstrap';

// App.js with custom theme
import './theme/custom.scss';
import { ThemeProvider } from 'react-bootstrap';

function ThemedApp() {
  return (
    <ThemeProvider
      prefixes={{
        btn: 'btn',
        card: 'card'
      }}
    >
      <div className="bg-primary text-white p-4">
        Custom themed Bootstrap components
      </div>
    </ThemeProvider>
  );
}

// ========== PART 9: TOOLTIPS & POPOVERS ==========
import { OverlayTrigger, Tooltip, Popover, Button } from 'react-bootstrap';

function BootstrapOverlays() {
  // Tooltip placement
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  
  // Popover content
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover Header</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
      </Popover.Body>
    </Popover>
  );
  
  return (
    <div className="d-flex gap-3">
      {/* Tooltip on hover */}
      <OverlayTrigger placement="top" overlay={renderTooltip}>
        <Button variant="secondary">Top tooltip</Button>
      </OverlayTrigger>
      
      <OverlayTrigger placement="right" overlay={renderTooltip}>
        <Button variant="secondary">Right tooltip</Button>
      </OverlayTrigger>
      
      {/* Popover */}
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="danger">Click for popover</Button>
      </OverlayTrigger>
    </div>
  );
}

// ========== PART 10: ADVANCED PATTERNS ==========
// Custom component that uses Bootstrap internally
import { Button, Modal, Form } from 'react-bootstrap';

const ConfirmDialog = ({ show, onConfirm, onCancel, title, message }) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Usage pattern
function App() {
  const [showDialog, setShowDialog] = useState(false);
  
  const handleDelete = () => {
    console.log('Item deleted');
    setShowDialog(false);
  };
  
  return (
    <>
      <Button variant="danger" onClick={() => setShowDialog(true)}>
        Delete Item
      </Button>
      
      <ConfirmDialog
        show={showDialog}
        onConfirm={handleDelete}
        onCancel={() => setShowDialog(false)}
        title="Confirm Delete"
        message="Are you sure you want to delete this item? This action cannot be undone."
      />
    </>
  );
}`,
        lineByLine: [
          "Line 4-10: Installation - npm install react-bootstrap bootstrap",
          "Line 13-21: Basic setup - Import CSS and components",
          "Line 24-58: Responsive grid - Container, Row, Col with responsive props",
          "Line 61-120: Form components - Form.Group, FloatingLabel, InputGroup",
          "Line 123-189: Modal component - Show/hide state, sizes, fullscreen",
          "Line 192-263: Navigation - Navbar, Tabs, NavDropdown, Badge",
          "Line 266-328: Card grid - Bootstrap Card with grid layout",
          "Line 331-361: Data table - Table, Pagination, Spinner components",
          "Line 364-386: Toast notifications - Toast and ToastContainer",
          "Line 389-404: Custom theming - Override Bootstrap variables",
          "Line 407-431: Tooltips & Popovers - OverlayTrigger component",
          "Line 434-466: Custom component - Wrapping Bootstrap components"
        ],
        simpleMeaning: "React-Bootstrap provides Bootstrap components as true React components with props, state, and no jQuery dependency.",
        output: "Fully functional React components with Bootstrap styling that work seamlessly with React's component model.",
        note: "Import only needed components for better performance. Use React state for component visibility. No jQuery needed. TypeScript definitions included."
      },
      {
  name: "6. Bootstrap with Next.js Integration",
  description: "Complete guide to using Bootstrap 5 with Next.js App Router, including SSR compatibility and optimization.",
  explanation: `🎯 WHY NEXT.JS + BOOTSTRAP?
Next.js provides server-side rendering, static generation, and optimal performance. Combining with Bootstrap gives you a powerful UI framework.

🔧 CHALLENGES WITH SSR:
- Bootstrap JS requires browser APIs
- CSS imports need proper handling
- Component hydration mismatches
- Dynamic imports for client components

📦 INSTALLATION FOR NEXT.JS:
npm install bootstrap react-bootstrap
npm install @popperjs/core (for tooltips/popovers)

📁 NEXT.JS APP ROUTER STRUCTURE:
- 'use client' directive for interactive components
- Bootstrap CSS imported in layout or component
- Dynamic imports for heavy components
- Lazy loading for modals/tooltips

🎨 CSS STRATEGIES:
1. Global import in layout.tsx
2. CSS Modules for scoped styling
3. Sass import for customization
4. Dynamic CSS loading

⚡ PERFORMANCE TIPS:
- Use next/dynamic for large components
- Prefetch Bootstrap CSS
- Tree-shake unused components
- Use CDN for production

🔄 HYDRATION BEST PRACTICES:
- Suppress hydration warnings
- Use useEffect for client-only code
- Dynamic imports with ssr: false
- State initialization patterns`,
  code: `// ========== PART 1: NEXT.JS SETUP WITH BOOTSTRAP ==========
// app/layout.tsx
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Bootstrap App',
  description: 'Bootstrap 5 with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}

// ========== PART 2: CLIENT COMPONENTS WITH BOOTSTRAP ==========
// app/components/BootstrapNavbar.tsx
'use client';

import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BootstrapNavbar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="mb-4"
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          Next.js + Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={pathname}>
            <Nav.Link as={Link} href="/" eventKey="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about" eventKey="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/contact" eventKey="/contact">
              Contact
            </Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} href="/services/web">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/services/mobile">
                Mobile Apps
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="/services/consulting">
                Consulting
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-light">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// ========== PART 3: SERVER COMPONENT WITH CLIENT COMPONENTS ==========
// app/page.tsx (Server Component)
import BootstrapNavbar from '@/components/BootstrapNavbar';
import BootstrapCarousel from '@/components/BootstrapCarousel';
import { Card, Container, Row, Col } from 'react-bootstrap';

// Server component can fetch data
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }
  });
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();
  
  return (
    <>
      <BootstrapNavbar />
      
      <Container className="py-4">
        <BootstrapCarousel />
        
        <h2 className="mt-5 mb-4">Featured Products</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {products.slice(0, 4).map((product: any) => (
            <Col key={product.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

// ========== PART 4: DYNAMIC IMPORTS FOR CLIENT COMPONENTS ==========
// app/components/ClientModal.tsx
'use client';

import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ClientModal() {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Launch Modal
      </Button>
      
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This modal loads client-side only!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// app/page.tsx - using dynamic import
import dynamic from 'next/dynamic';

// Load modal component only on client side
const ClientModal = dynamic(() => import('@/components/ClientModal'), {
  ssr: false, // Don't render on server
  loading: () => <Button disabled>Loading Modal...</Button>
});

export default function Page() {
  return (
    <div>
      <h1>Dynamic Import Example</h1>
      <ClientModal />
    </div>
  );
}

// ========== PART 5: BOOTSTRAP WITH SERVER ACTIONS ==========
// app/actions/formActions.ts
'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export async function submitContactForm(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed'
    };
  }
  
  // Process form data
  const { name, email, message } = validatedFields.data;
  
  // Save to database or send email
  console.log({ name, email, message });
  
  redirect('/thank-you');
}

// app/contact/page.tsx
'use client';

import { useFormState } from 'react-dom';
import { submitContactForm } from '../actions/formActions';
import { Form, Button, Alert } from 'react-bootstrap';

const initialState = {
  message: '',
  errors: null
};

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  
  return (
    <div className="container py-5">
      <h1 className="mb-4">Contact Us</h1>
      
      {state.message && (
        <Alert variant="danger">{state.message}</Alert>
      )}
      
      <Form action={formAction}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            isInvalid={!!state.errors?.name}
          />
          <Form.Control.Feedback type="invalid">
            {state.errors?.name}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email"
            isInvalid={!!state.errors?.email}
          />
          <Form.Control.Feedback type="invalid">
            {state.errors?.email}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5}
            name="message"
            isInvalid={!!state.errors?.message}
          />
          <Form.Control.Feedback type="invalid">
            {state.errors?.message}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </Form>
    </div>
  );
}

// ========== PART 6: CUSTOM BOOTSTRAP THEMING WITH NEXT.JS ==========
// app/styles/bootstrap-custom.scss
// Custom Bootstrap variables
$primary: #4361ee;
$secondary: #6c757d;
$success: #06ffa5;
$danger: #ef233c;
$warning: #ffb703;
$info: #00b4d8;

$font-family-base: 'Inter', system-ui, -apple-system, sans-serif;
$border-radius: 0.5rem;
$border-radius-lg: 0.75rem;
$border-radius-sm: 0.375rem;

$box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
$box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

// Import Bootstrap
@import 'bootstrap/scss/bootstrap';

// app/layout.tsx - import custom theme
import './styles/bootstrap-custom.scss';

// ========== PART 7: LAZY LOADING BOOTSTRAP COMPONENTS ==========
// app/components/LazyCarousel.tsx
'use client';

import dynamic from 'next/dynamic';
import { Spinner } from 'react-bootstrap';

// Lazy load heavy carousel component
const CarouselComponent = dynamic(
  () => import('react-bootstrap/Carousel'),
  {
    ssr: false,
    loading: () => (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Loading carousel...</p>
      </div>
    )
  }
);

export default function LazyCarousel({ items }: { items: any[] }) {
  return (
    <CarouselComponent>
      {items.map((item, idx) => (
        <CarouselComponent.Item key={idx}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.title}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <CarouselComponent.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </CarouselComponent.Caption>
        </CarouselComponent.Item>
      ))}
    </CarouselComponent>
  );
}

// ========== PART 8: BOOTSTRAP WITH NEXT.JS MIDDLEWARE ==========
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add Bootstrap-related headers
  response.headers.set('X-Bootstrap-Version', '5.3.0');
  response.headers.set('X-Using-CDN', 'true');
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

// ========== PART 9: PERFORMANCE OPTIMIZATION ==========
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.example.com', 'images.unsplash.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['react-bootstrap', 'bootstrap'],
  },
  // Custom webpack config for Bootstrap optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

// ========== PART 10: BOOTSTRAP WITH NEXT.JS APP ROUTER - COMPLETE EXAMPLE ==========
// app/dashboard/layout.tsx (Group layout)
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar bg-dark text-white vh-100 p-3">
        <h4>Dashboard</h4>
        <nav className="nav flex-column">
          <a href="/dashboard" className="nav-link text-white">Overview</a>
          <a href="/dashboard/analytics" className="nav-link text-white">Analytics</a>
          <a href="/dashboard/settings" className="nav-link text-white">Settings</a>
        </nav>
      </aside>
      <main className="main-content p-4">
        {children}
      </main>
    </div>
  );
}

// app/dashboard/page.tsx
'use client';

import { Row, Col, Card, Table, Badge, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    users: 0,
    revenue: 0,
    orders: 0
  });
  
  useEffect(() => {
    // Fetch dashboard data
    fetch('/api/dashboard/stats')
      .then(res => res.json())
      .then(setStats);
  }, []);
  
  return (
    <div>
      <h1 className="mb-4">Dashboard Overview</h1>
      
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Total Users</h6>
              <h2 className="display-4">\${stats.users.toLocaleString()}</h2>
              <Badge bg="success">+12% from last month</Badge>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Revenue</h6>
              <h2 className="display-4">$\${stats.revenue.toLocaleString()}</h2>
              <Badge bg="success">+8% from last month</Badge>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h6 className="text-muted">Total Orders</h6>
              <h2 className="display-4">\${stats.orders.toLocaleString()}</h2>
              <Badge bg="warning">+5% from last month</Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Card className="shadow-sm">
        <Card.Header>
          <h5 className="mb-0">Recent Orders</h5>
        </Card.Header>
        <Card.Body>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamic orders would go here */}
              <tr>
                <td>#12345</td>
                <td>John Doe</td>
                <td>$299.99</td>
                <td><Badge bg="success">Completed</Badge></td>
                <td><Button size="sm" variant="outline-primary">View</Button></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}`,
  lineByLine: [
    "Line 4-18: Next.js setup - Import Bootstrap CSS in layout",
    "Line 21-65: Client component - Navbar with useState and Next.js Link",
    "Line 68-106: Server component - Async data fetching with Bootstrap cards",
    "Line 109-138: Dynamic imports - Lazy loading modals with ssr: false",
    "Line 141-195: Server Actions - Form handling with React Bootstrap",
    "Line 198-209: Custom theming - Override Bootstrap variables",
    "Line 212-239: Lazy loading - Heavy carousel component",
    "Line 242-251: Middleware - Adding Bootstrap headers",
    "Line 254-272: Performance - Next.js config optimization",
    "Line 275-343: Complete dashboard - Full example with sidebar and stats"
  ],
  simpleMeaning: "Integrate Bootstrap 5 with Next.js App Router using client components, dynamic imports, and server actions for optimal performance.",
  output: "Fully functional Next.js app with Bootstrap styling that supports SSR, client-side interactivity, and server actions.",
  note: "Use 'use client' for interactive components. Dynamic imports reduce bundle size. Suppress hydration warnings when needed."
},
      
      {
        name: "7. Bootstrap Performance Optimization",
        description: "Comprehensive guide to optimizing Bootstrap 5 for production, reducing bundle size, and improving load times.",
        explanation: `🎯 WHY OPTIMIZE BOOTSTRAP?
Bootstrap full CSS is ~150KB, full JS is ~80KB. Optimization can reduce this by 70-80% for faster page loads.

📦 BUNDLE SIZE BREAKDOWN:
- bootstrap.min.css: 150KB
- bootstrap.min.js: 80KB
- Popper.js: 20KB
- jQuery (v4): 30KB (not needed for v5)
- Total: ~280KB unoptimized

🔧 OPTIMIZATION STRATEGIES:
1. Custom Sass build (remove unused components)
2. PurgeCSS for unused CSS classes
3. Import only needed components
4. CDN with SRI hashes
5. Lazy load below-the-fold components
6. Preload critical CSS
7. Use Bootstrap Icons selectively

📁 SASS PARTIAL IMPORTS:
Instead of @import "bootstrap", import only needed:
- Functions, variables, mixins (always needed)
- Reboot, utilities (core)
- Grid, forms, buttons (common)
- Components by project need

⚡ CRITICAL CSS PATTERNS:
- Extract above-fold CSS
- Load non-critical async
- Use rel="preload" for fonts
- Inline critical styles

📊 MEASUREMENT TOOLS:
- Lighthouse performance score
- Webpack Bundle Analyzer
- Coverage tab in DevTools
- Bundlephobia for packages

🎨 TREE SHAKING:
- React-Bootstrap supports tree shaking
- Use named imports: import { Button, Card }
- Webpack/Next.js automatically optimize`,
        code: `// ========== PART 1: CUSTOM SASS BUILD (SMALLEST) ==========
// custom-bootstrap.scss - Only import what you need
// 1. Required (always include)
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";

// 2. Layout (core)
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/containers";
@import "bootstrap/scss/grid";

// 3. Components (choose what you use)
@import "bootstrap/scss/tables";
@import "bootstrap/scss/forms";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/transitions";
// @import "bootstrap/scss/dropdown"; // Comment if not used
// @import "bootstrap/scss/button-group";
@import "bootstrap/scss/nav";
@import "bootstrap/scss/navbar";
@import "bootstrap/scss/card";
// @import "bootstrap/scss/accordion";
// @import "bootstrap/scss/breadcrumb";
// @import "bootstrap/scss/pagination";
@import "bootstrap/scss/badge";
@import "bootstrap/scss/alert";
// @import "bootstrap/scss/progress";
// @import "bootstrap/scss/list-group";
// @import "bootstrap/scss/close";
// @import "bootstrap/scss/toasts";
// @import "bootstrap/scss/modal";
// @import "bootstrap/scss/tooltip";
// @import "bootstrap/scss/popover";
// @import "bootstrap/scss/carousel";
// @import "bootstrap/scss/spinners";
// @import "bootstrap/scss/offcanvas";

// 4. Helpers & Utilities
@import "bootstrap/scss/helpers";
@import "bootstrap/scss/utilities/api";

// Result: ~40KB instead of 150KB!

// ========== PART 2: CUSTOM VARIABLES FOR SMALLER CSS ==========
// _optimized-variables.scss
// Disable features you don't need
$enable-shadows: false;
$enable-gradients: false;
$enable-rounded: true;  // Keep if using rounded corners
$enable-important-utilities: false;  // Reduce specificity
$enable-smooth-scroll: false;
$enable-caret: true;  // Keep for dropdowns
$enable-validation-icons: false;  // Remove validation icons
$enable-dark-mode: false;  // Disable if not using

// Reduce color palette
$theme-colors: (
  "primary": #4361ee,
  "secondary": #6c757d,
  "success": #06ffa5,
  "danger": #ef233c,
  "warning": #ffb703,
  "info": #00b4d8,
  // Remove light/dark if not needed
);

// Reduce spacing scale
$spacers: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 1rem,
  4: 1.5rem,
  5: 3rem,
  // Remove 6-10 if not needed
);

// Reduce border radius options
$border-radius: 0.5rem;
$border-radius-sm: 0.375rem;
$border-radius-lg: 0.75rem;
// Remove xl, 2xl, pill if not needed

// ========== PART 3: TREE SHAKING WITH REACT-BOOTSTRAP ==========
// Good - named imports only import needed components
import { Button, Card, Navbar, Container } from 'react-bootstrap';

// Bad - imports everything
import Bootstrap from 'react-bootstrap';

// Even better - direct imports (smallest)
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

// ========== PART 4: CDN WITH SRI (SECURITY + CACHING) ==========
<!-- bootstrap.min.css with SRI -->
<link 
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
  rel="stylesheet" 
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
  crossorigin="anonymous"
/>

<!-- bootstrap.bundle.min.js (includes Popper) -->
<script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" 
  crossorigin="anonymous"
></script>

<!-- Or separate JS + Popper -->
<script 
  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
  integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
  crossorigin="anonymous"
></script>
<script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
  integrity="sha384-fbbOQedDUMZZ5KreZpsRE1DMZ5zig8ZX2RRVvAs8SG7p1J3T4yN7OFjBg7Hp8DgU"
  crossorigin="anonymous"
></script>

// ========== PART 5: PURGECSS CONFIGURATION ==========
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      '@fullhuman/postcss-purgecss': {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
          './app/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: [
            /^(nav|navbar|dropdown|modal|tooltip|popover)/,
            /-(show|active|disabled|fade|collapse)/,
            'html', 'body',
          ],
          deep: [/^modal-/, /^tooltip-/, /^popover-/],
        }
      }
    } : {})
  }
};

// ========== PART 6: LAZY LOADING BOOTSTRAP COMPONENTS ==========
// Lazy load Bootstrap JS only when needed
// utils/bootstrap-loader.js
let bootstrapLoaded = false;

export async function loadBootstrap() {
  if (bootstrapLoaded) return;
  
  if (typeof window !== 'undefined') {
    await import('bootstrap');
    bootstrapLoaded = true;
  }
}

// Component that needs Bootstrap JS
// components/ModalTrigger.jsx
'use client';
import { useState, useEffect } from 'react';
import { loadBootstrap } from '@/utils/bootstrap-loader';

export default function ModalTrigger() {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    loadBootstrap().then(() => setIsReady(true));
  }, []);
  
  if (!isReady) return <button className="btn btn-primary">Loading...</button>;
  
  return (
    <button 
      className="btn btn-primary" 
      data-bs-toggle="modal" 
      data-bs-target="#exampleModal"
    >
      Launch Modal
    </button>
  );
}

// ========== PART 7: CRITICAL CSS INLINE ==========
// pages/_document.js or app/layout.js
// Inline critical Bootstrap CSS for above-fold content
const criticalCSS = \`
  .container { width: 100%; padding-right: var(--bs-gutter-x, 0.75rem); padding-left: var(--bs-gutter-x, 0.75rem); margin-right: auto; margin-left: auto; }
  .btn { display: inline-block; font-weight: 400; line-height: 1.5; text-align: center; text-decoration: none; vertical-align: middle; cursor: pointer; padding: 0.375rem 0.75rem; font-size: 1rem; border-radius: 0.375rem; }
  .btn-primary { color: #fff; background-color: #0d6efd; border-color: #0d6efd; }
  @media (min-width: 576px) { .container { max-width: 540px; } }
  @media (min-width: 768px) { .container { max-width: 720px; } }
  @media (min-width: 992px) { .container { max-width: 960px; } }
  @media (min-width: 1200px) { .container { max-width: 1140px; } }
  /* Only include critical styles for above-fold content */
\`;

// ========== PART 8: WEBPACK BUNDLE ANALYZER ==========
// next.config.js with bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // your Next.js config
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        bootstrap: {
          test: /[\\\\/]node_modules[\\\\/](bootstrap|react-bootstrap|@popperjs)[\\\\/]/,
          name: 'bootstrap-vendor',
          chunks: 'all',
          priority: 10
        }
      };
    }
    return config;
  }
});

// ========== PART 9: PREFETCH AND PRELOAD STRATEGIES ==========
// Preload critical Bootstrap CSS
<link rel="preload" href="/css/bootstrap-critical.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="/css/bootstrap-critical.css" /></noscript>

// Load full Bootstrap async
<link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />

// Preconnect to CDN
<link rel="preconnect" href="https://cdn.jsdelivr.net" />

// ========== PART 10: PERFORMANCE MONITORING ==========
// utils/performance-monitor.js
export function measureBootstrapPerformance() {
  if (typeof window === 'undefined') return;
  
  // Measure CSS load time
  const cssLoaded = performance.getEntriesByType('resource')
    .filter(entry => entry.name.includes('bootstrap') && entry.name.includes('.css'));
  
  if (cssLoaded.length) {
    console.log('Bootstrap CSS load time:', cssLoaded[0].duration, 'ms');
  }
  
  // Measure JS load time
  const jsLoaded = performance.getElementsByName('resource')
    .filter(entry => entry.name.includes('bootstrap') && entry.name.includes('.js'));
  
  if (jsLoaded.length) {
    console.log('Bootstrap JS load time:', jsLoaded[0].duration, 'ms');
  }
  
  // Check if Bootstrap is fully loaded
  if (typeof bootstrap !== 'undefined') {
    console.log('Bootstrap version:', bootstrap.Tooltip.VERSION);
  }
}

// Call on client side
if (typeof window !== 'undefined') {
  window.addEventListener('load', measureBootstrapPerformance);
}`,
        lineByLine: [
          "Line 4-41: Custom Sass build - Import only needed components",
          "Line 44-73: Optimized variables - Disable unused features",
          "Line 76-86: Tree shaking - Use named imports or direct imports",
          "Line 89-113: CDN with SRI - Security and caching benefits",
          "Line 116-140: PurgeCSS - Remove unused CSS classes",
          "Line 143-167: Lazy loading - Load Bootstrap JS on demand",
          "Line 170-185: Critical CSS - Inline above-fold styles",
          "Line 188-207: Bundle analyzer - Analyze and optimize bundles",
          "Line 210-218: Preload strategies - Preload critical resources",
          "Line 221-244: Performance monitoring - Measure load times"
        ],
        simpleMeaning: "Optimize Bootstrap by removing unused components, using custom builds, lazy loading, and CDN with proper caching strategies.",
        output: "Smaller bundle size (70-80% reduction), faster load times, and better Lighthouse scores.",
        note: "Always measure before optimizing. Use PurgeCSS for custom classes. Preload critical CSS for above-fold content. Test after each optimization."
      },
      
      {
        name: "8. Bootstrap Accessibility (A11y) Best Practices",
        description: "Complete guide to making Bootstrap websites accessible to all users, including keyboard navigation and screen readers.",
        explanation: `🎯 WHY ACCESSIBILITY MATTERS?
Accessibility ensures everyone can use your website, including people with:
- Visual impairments (blindness, low vision)
- Motor disabilities (keyboard only users)
- Cognitive disabilities
- Hearing impairments

📋 WCAG 2.1 LEVELS:
- A (minimum): Basic accessibility
- AA (standard): Most common requirement
- AAA (advanced): Highest level

🔧 BOOTSTRAP ACCESSIBILITY FEATURES:
- Semantic HTML5 elements
- ARIA attributes built-in
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader announcements

🎨 COLOR CONTRAST REQUIREMENTS:
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- UI components: 3:1 minimum
- Focus indicators: Visible

♿ KEYBOARD ACCESSIBILITY:
- Tab navigation order
- Focus indicators
- Skip navigation links
- Keyboard event handlers
- Modal focus trapping

📢 SCREEN READER PATTERNS:
- aria-label for unlabeled elements
- aria-hidden for decorative content
- role attributes for custom widgets
- aria-live for dynamic content
- sr-only for hidden text

🧪 TESTING TOOLS:
- WAVE (Web Accessibility Evaluation)
- axe DevTools
- Lighthouse Accessibility audit
- NVDA (Windows screen reader)
- VoiceOver (Mac screen reader)`,
        code: `<!-- ========== PART 1: BASIC ACCESSIBILITY STRUCTURE ========== -->
<!-- Use semantic HTML whenever possible -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Accessible Bootstrap Site</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <!-- Skip navigation link -->
  <a href="#main-content" class="visually-hidden-focusable">
    Skip to main content
  </a>
  
  <!-- Main navigation with proper ARIA -->
  <nav class="navbar navbar-expand-lg bg-dark" aria-label="Main navigation">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="logo.png" alt="Company Logo" height="40">
      </a>
      <button class="navbar-toggler" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  <!-- Main content with landmark role -->
  <main id="main-content" tabindex="-1">
    <div class="container py-4">
      <h1>Welcome to Accessible Website</h1>
      <p>This site follows WCAG 2.1 AA accessibility guidelines.</p>
    </div>
  </main>
  
  <!-- Footer with landmark role -->
  <footer class="bg-light py-3" role="contentinfo">
    <div class="container text-center">
      <p>&copy; 2024 Your Company</p>
    </div>
  </footer>
</body>
</html>

<!-- ========== PART 2: ACCESSIBLE FORMS ========== -->
<form class="row g-3 needs-validation" novalidate>
  <!-- Form with proper labels -->
  <div class="col-md-6">
    <label for="firstName" class="form-label">First Name <span aria-hidden="true">*</span></label>
    <input type="text" class="form-control" id="firstName" 
           required aria-required="true"
           aria-describedby="firstNameHelp">
    <div id="firstNameHelp" class="form-text">
      Enter your legal first name as shown on ID.
    </div>
    <div class="invalid-feedback">
      Please provide your first name.
    </div>
  </div>
  
  <!-- Radio group with fieldset -->
  <fieldset class="col-md-12">
    <legend class="form-label">Preferred Contact Method</legend>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="contactMethod" 
             id="contactEmail" value="email" checked>
      <label class="form-check-label" for="contactEmail">Email</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="contactMethod" 
             id="contactPhone" value="phone">
      <label class="form-check-label" for="contactPhone">Phone</label>
    </div>
  </fieldset>
  
  <!-- Checkbox group -->
  <div class="col-md-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="agreeTerms" required>
      <label class="form-check-label" for="agreeTerms">
        I agree to the <a href="/terms" target="_blank">terms and conditions</a>
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  
  <!-- Submit button with ARIA -->
  <div class="col-12">
    <button class="btn btn-primary" type="submit" aria-label="Submit contact form">
      Submit
    </button>
  </div>
</form>

<!-- ========== PART 3: ACCESSIBLE MODALS ========== -->
<!-- Modal with proper ARIA -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" 
        data-bs-target="#accessibleModal" aria-haspopup="dialog">
  Open Accessible Modal
</button>

<div class="modal fade" id="accessibleModal" tabindex="-1" 
     aria-labelledby="modalTitle" aria-describedby="modalDescription" aria-modal="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitle">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" 
                aria-label="Close modal"></button>
      </div>
      <div class="modal-body">
        <p id="modalDescription">This is an accessible modal dialog with proper ARIA attributes.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                aria-label="Cancel and close modal">
          Cancel
        </button>
        <button type="button" class="btn btn-primary" 
                aria-label="Confirm action and close modal">
          Confirm
        </button>
      </div>
    </div>
  </div>
</div>

<!-- ========== PART 4: ACCESSIBLE CAROUSEL ========== -->
<div id="accessibleCarousel" class="carousel slide" data-bs-ride="carousel"
     aria-label="Featured products carousel" role="region">
  
  <!-- Carousel indicators as tabs -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#accessibleCarousel" data-bs-slide-to="0"
            class="active" aria-current="true" aria-label="Slide 1: Product 1"></button>
    <button type="button" data-bs-target="#accessibleCarousel" data-bs-slide-to="1"
            aria-label="Slide 2: Product 2"></button>
    <button type="button" data-bs-target="#accessibleCarousel" data-bs-slide-to="2"
            aria-label="Slide 3: Product 3"></button>
  </div>
  
  <!-- Carousel items with alt text -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="product1.jpg" class="d-block w-100" alt="Product 1: Wireless Headphones with noise cancellation"
           style="height: 400px; object-fit: cover;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Wireless Headphones</h3>
        <p>Premium sound quality with 30-hour battery life</p>
        <button class="btn btn-primary" aria-label="Shop Wireless Headphones">
          Shop Now
        </button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="product2.jpg" class="d-block w-100" alt="Product 2: Smart Watch with fitness tracking"
           style="height: 400px; object-fit: cover;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Smart Watch</h3>
        <p>Track your fitness and stay connected</p>
        <button class="btn btn-primary" aria-label="Shop Smart Watch">
          Shop Now
        </button>
      </div>
    </div>
  </div>
  
  <!-- Carousel controls with accessible labels -->
  <button class="carousel-control-prev" type="button" 
          data-bs-target="#accessibleCarousel" data-bs-slide="prev"
          aria-label="Previous slide">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button class="carousel-control-next" type="button" 
          data-bs-target="#accessibleCarousel" data-bs-slide="next"
          aria-label="Next slide">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>

<!-- ========== PART 5: ACCESSIBLE DROPDOWNS ========== -->
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" 
          id="accessibleDropdown" data-bs-toggle="dropdown" 
          aria-expanded="false" aria-haspopup="true">
    Accessible Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="accessibleDropdown">
    <li><a class="dropdown-item" href="#" aria-label="Edit item">Edit</a></li>
    <li><a class="dropdown-item" href="#" aria-label="Duplicate item">Duplicate</a></li>
    <li><hr class="dropdown-divider" aria-hidden="true"></li>
    <li><a class="dropdown-item text-danger" href="#" aria-label="Delete item permanently">Delete</a></li>
  </ul>
</div>

<!-- ========== PART 6: ACCESSIBLE TOOLTIPS ========== -->
<!-- Tooltips with keyboard support -->
<button type="button" class="btn btn-primary" 
        data-bs-toggle="tooltip" data-bs-placement="top"
        title="This is an accessible tooltip"
        aria-describedby="tooltip-description">
  Hover or focus for tooltip
</button>

<!-- Custom accessible tooltip with description -->
<p id="tooltip-description" class="visually-hidden">
  Additional information about this button appears when focused or hovered
</p>

<!-- ========== PART 7: ACCESSIBLE TABLES ========== -->
<!-- Table with proper headers and captions -->
<table class="table table-striped" aria-label="Employee directory">
  <caption class="visually-hidden">List of employees with their positions and departments</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Department</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">John Doe</th>
      <td>Developer</td>
      <td>Engineering</td>
      <td><a href="mailto:john@example.com" aria-label="Email John Doe">john@example.com</a></td>
    </tr>
  </tbody>
</table>

<!-- ========== PART 8: ACCESSIBLE ALERTS ========== -->
<!-- Alert with ARIA live region -->
<div class="alert alert-success alert-dismissible fade show" 
     role="alert" aria-live="polite">
  <strong>Success!</strong> Your changes have been saved successfully.
  <button type="button" class="btn-close" data-bs-dismiss="alert" 
          aria-label="Close alert message"></button>
</div>

<!-- Dynamic alert container -->
<div id="liveAlert" role="region" aria-live="assertive" aria-atomic="true" 
     class="position-fixed bottom-0 end-0 p-3" style="z-index: 1100">
  <!-- Dynamic alerts appear here -->
</div>

<!-- ========== PART 9: ACCESSIBLE PROGRESS BARS ========== -->
<div role="progressbar" class="progress mb-3" 
     aria-label="File upload progress"
     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 75%">
    <span class="visually-hidden">75% Complete</span>
  </div>
</div>

<!-- With live announcement -->
<div class="progress mb-3">
  <div class="progress-bar" id="uploadProgress" role="progressbar" 
       style="width: 0%" aria-label="Upload progress">
    <span class="visually-hidden" id="progressText">0% complete</span>
  </div>
</div>

<script>
  // Update progress with live announcement
  function updateProgress(percent) {
    const progressBar = document.getElementById('uploadProgress');
    const progressText = document.getElementById('progressText');
    progressBar.style.width = percent + '%';
    progressBar.setAttribute('aria-valuenow', percent);
    progressText.textContent = percent + '% complete';
  }
</script>

<!-- ========== PART 10: COLOR CONTRAST CHECKING ========== -->
<!-- Use Bootstrap's accessible color palette -->
<div class="bg-primary text-white p-3">Good contrast (4.5:1+)</div>
<div class="bg-success text-white p-3">Good contrast (4.5:1+)</div>
<div class="bg-danger text-white p-3">Good contrast (4.5:1+)</div>

<!-- Avoid these combinations -->
<div class="bg-secondary text-muted p-3">Poor contrast - avoid</div>
<div class="bg-light text-white p-3">Poor contrast - avoid</div>

<!-- Custom accessible colors -->
<style>
  /* Ensure custom colors meet contrast requirements */
  .custom-primary-bg {
    background-color: #2563eb; /* Darker blue for better contrast */
  }
  .custom-primary-text {
    color: #1e40af; /* Darker blue text on light backgrounds */
  }
</style>

<!-- ========== PART 11: FOCUS MANAGEMENT ========== -->
<!-- Visible focus indicators (Bootstrap has these by default) -->
<button class="btn btn-outline-primary">I have visible focus ring</button>

<!-- Custom focus styles -->
<style>
  /* Enhance default focus rings */
  .btn:focus-visible,
  .nav-link:focus-visible,
  .form-control:focus-visible {
    outline: none;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
  }
  
  /* Ensure skip link is visible when focused */
  .visually-hidden-focusable:focus-visible {
    position: relative !important;
    width: auto !important;
    height: auto !important;
    padding: 0.5rem 1rem;
    background: white;
    color: black;
    z-index: 1000;
  }
</style>

<!-- ========== PART 12: SCREEN READER UTILITIES ========== -->
<!-- Visually hidden but available to screen readers -->
<p class="visually-hidden">This text is only read by screen readers</p>

<!-- Hide decorative content from screen readers -->
<i class="bi bi-star" aria-hidden="true"></i>

<!-- Live region for dynamic content updates -->
<div aria-live="polite" aria-atomic="true" class="visually-hidden">
  <!-- Screen reader announces changes to this region -->
</div>

<!-- Comprehensive accessibility testing with axe -->
<script src="https://cdn.jsdelivr.net/npm/axe-core@4.7.0/axe.min.js"></script>
<script>
  if (process.env.NODE_ENV === 'development') {
    axe.run().then(results => {
      if (results.violations.length) {
        console.warn('Accessibility violations:', results.violations);
      }
    });
  }
</script>`,
        lineByLine: [
          "Line 2-10: Semantic HTML - lang attribute, viewport, title",
          "Line 13-15: Skip link - Visually hidden focusable for keyboard users",
          "Line 18-43: Navigation - ARIA labels, semantic nav, proper heading structure",
          "Line 46-51: Landmarks - main and footer with proper roles",
          "Line 55-83: Forms - Proper labels, aria-describedby, required attributes",
          "Line 86-98: Radio groups - Fieldset and legend for grouping",
          "Line 101-112: Checkboxes - Proper labeling and validation",
          "Line 118-152: Modals - ARIA modal attributes, labelledby, describedby",
          "Line 158-213: Carousel - ARIA labels, alt text, accessible controls",
          "Line 219-233: Dropdowns - aria-expanded, aria-haspopup",
          "Line 237-247: Tooltips - keyboard accessible, aria-describedby",
          "Line 251-271: Tables - Scope attributes, captions, proper headers",
          "Line 275-288: Alerts - ARIA live regions for announcements",
          "Line 293-319: Progress bars - ARIA progress attributes, live updates",
          "Line 326-347: Color contrast - Accessible color combinations",
          "Line 353-371: Focus management - Visible focus indicators",
          "Line 375-394: Screen reader utilities - sr-only, aria-hidden, live regions"
        ],
        simpleMeaning: "Build Bootstrap websites that work for everyone, including users with disabilities and those using assistive technologies.",
        output: "Fully accessible website that passes WCAG 2.1 AA standards and works with screen readers and keyboard navigation.",
        note: "Test with actual assistive technology (NVDA, VoiceOver). Use semantic HTML before ARIA. Always provide alt text and labels."
      }

    ]
  }
};
// /data/bootstrap/interview.js

export const interview = {
  fresher: [
    {
      question: "What is Bootstrap? Why is it used?",
      answer: "Bootstrap is a popular open-source CSS framework for building responsive, mobile-first websites quickly. It provides pre-designed components, grid system, and JavaScript plugins.",
      example: "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'>\n<button class='btn btn-primary'>Click me</button>",
      output: "Styled button with Bootstrap's primary color",
      note: "Bootstrap includes CSS, JavaScript components, and icons library"
    },
    {
      question: "Explain the Bootstrap grid system and its breakpoints.",
      answer: "Bootstrap grid uses 12 columns. Breakpoints: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px).",
      example: "<div class='container'>\n  <div class='row'>\n    <div class='col-sm-6 col-md-4'>Column 1</div>\n    <div class='col-sm-6 col-md-4'>Column 2</div>\n    <div class='col-sm-6 col-md-4'>Column 3</div>\n  </div>\n</div>",
      output: "On mobile: 1 column; on tablet: 2 columns; on desktop: 3 columns",
      note: "Columns should always be direct children of .row"
    },
    {
      question: "What are the main components of Bootstrap?",
      answer: "Components include: navbar, cards, modals, buttons, forms, alerts, carousels, dropdowns, tooltips, popovers, badges, and spinners.",
      example: "<div class='card' style='width: 18rem;'>\n  <div class='card-body'>\n    <h5 class='card-title'>Card title</h5>\n    <p class='card-text'>Some quick example text</p>\n    <a href='#' class='btn btn-primary'>Go somewhere</a>\n  </div>\n</div>",
      output: "Styled card with title, text, and button",
      note: "Interactive components require Bootstrap JS bundle"
    },
    {
      question: "How do you create a responsive navigation bar?",
      answer: "Use navbar and navbar-expand-* classes with a toggler button for mobile collapse.",
      example: "<nav class='navbar navbar-expand-lg navbar-light bg-light'>\n  <div class='container'>\n    <a class='navbar-brand' href='#'>Brand</a>\n    <button class='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarNav'>\n      <span class='navbar-toggler-icon'></span>\n    </button>\n    <div class='collapse navbar-collapse' id='navbarNav'>\n      <ul class='navbar-nav'>\n        <li class='nav-item'><a class='nav-link' href='#'>Home</a></li>\n        <li class='nav-item'><a class='nav-link' href='#'>About</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>",
      output: "Navbar collapses on mobile, expands on desktop",
      note: "Use navbar-dark bg-dark for dark theme"
    },
    {
      question: "What are Bootstrap container classes?",
      answer: "Container classes: .container (fixed width at each breakpoint), .container-fluid (full width always), .container-{breakpoint} (100% until specified breakpoint).",
      example: "<div class='container'>Fixed width container</div>\n<div class='container-fluid'>Full width container</div>\n<div class='container-md'>100% width until medium breakpoint</div>",
      output: "Different container behaviors based on screen size",
      note: "Containers are required for proper grid alignment"
    },
    {
      question: "How do you create a button in Bootstrap?",
      answer: "Use .btn class with color variants: .btn-primary, .btn-secondary, .btn-success, .btn-danger, .btn-warning, .btn-info.",
      example: "<button class='btn btn-primary'>Primary</button>\n<button class='btn btn-secondary'>Secondary</button>\n<button class='btn btn-success'>Success</button>\n<button class='btn btn-danger'>Danger</button>\n<button class='btn btn-outline-primary'>Outline</button>",
      output: "Styled buttons with different colors and outline options",
      note: "Button classes work on <a>, <button>, and <input> elements"
    },
    {
      question: "How to create button groups in Bootstrap?",
      answer: "Wrap buttons in .btn-group class to create a group. Use .btn-group-vertical for vertical group.",
      example: "<div class='btn-group' role='group'>\n  <button class='btn btn-primary'>Left</button>\n  <button class='btn btn-primary'>Middle</button>\n  <button class='btn btn-primary'>Right</button>\n</div>\n<div class='btn-group-vertical'>\n  <button class='btn btn-secondary'>Top</button>\n  <button class='btn btn-secondary'>Bottom</button>\n</div>",
      output: "Buttons grouped together without gap, vertical stacking",
      note: "Use role='group' for accessibility"
    },
    {
      question: "What is the Bootstrap 5 Navbar component?",
      answer: "Navbar is a responsive navigation header that collapses on mobile. It can contain brand, nav links, forms, and dropdowns.",
      example: "<nav class='navbar navbar-expand-lg bg-dark navbar-dark'>\n  <div class='container'>\n    <a class='navbar-brand' href='#'>MySite</a>\n    <div class='collapse navbar-collapse'>\n      <ul class='navbar-nav ms-auto'>\n        <li class='nav-item'><a class='nav-link' href='#'>Login</a></li>\n        <li class='nav-item'><a class='nav-link' href='#'>Register</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>",
      output: "Dark navbar with right-aligned login/register links",
      note: "ms-auto pushes items to the right"
    },
    {
      question: "How do you create a card in Bootstrap?",
      answer: "Use .card class with .card-body, .card-title, .card-text, .card-header, .card-footer sub-components.",
      example: "<div class='card' style='width: 18rem;'>\n  <img src='image.jpg' class='card-img-top' alt='...'>\n  <div class='card-body'>\n    <h5 class='card-title'>Card title</h5>\n    <p class='card-text'>Some quick example text</p>\n    <a href='#' class='btn btn-primary'>Button</a>\n  </div>\n  <div class='card-footer text-muted'>2 days ago</div>\n</div>",
      output: "Card with image, title, text, button, and footer",
      note: "Card groups can be created with .card-group or grid system"
    },
    {
      question: "What are Bootstrap forms and form controls?",
      answer: "Bootstrap provides .form-control for inputs, .form-label for labels, .form-select for dropdowns, .form-check for checkboxes/radios.",
      example: "<div class='mb-3'>\n  <label class='form-label'>Email</label>\n  <input type='email' class='form-control' placeholder='name@example.com'>\n</div>\n<select class='form-select'>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>\n<div class='form-check'>\n  <input class='form-check-input' type='checkbox'>\n  <label class='form-check-label'>Check me out</label>\n</div>",
      output: "Styled form elements with consistent spacing and focus states",
      note: "Use mb-3 for consistent spacing between form groups"
    },
    {
      question: "How do you create alerts in Bootstrap?",
      answer: "Use .alert class with .alert-primary, .alert-success, .alert-danger, .alert-warning, .alert-info variants.",
      example: "<div class='alert alert-success' role='alert'>\n  Success! Your changes have been saved.\n</div>\n<div class='alert alert-danger alert-dismissible fade show'>\n  Error! Something went wrong.\n  <button type='button' class='btn-close' data-bs-dismiss='alert'></button>\n</div>",
      output: "Colored alert boxes with optional close button",
      note: "Use alert-dismissible with btn-close for dismissible alerts"
    },
    {
      question: "What are Bootstrap badges?",
      answer: "Badges are small count indicators and labels. Use .badge with bg-* classes, and .rounded-pill for pill shape.",
      example: "<h1>Heading <span class='badge bg-primary'>New</span></h1>\n<button class='btn btn-primary'>\n  Notifications <span class='badge bg-secondary'>4</span>\n</button>\n<span class='badge rounded-pill bg-success'>Success</span>",
      output: "Small badges indicating counts or status",
      note: "Use position-absolute for notification badges on icons"
    },
    {
      question: "How to create a modal in Bootstrap?",
      answer: "Modal requires .modal, .modal-dialog, .modal-content, .modal-header, .modal-body, .modal-footer structure.",
      example: "<button type='button' data-bs-toggle='modal' data-bs-target='#myModal'>Open Modal</button>\n<div class='modal fade' id='myModal'>\n  <div class='modal-dialog'>\n    <div class='modal-content'>\n      <div class='modal-header'>\n        <h5 class='modal-title'>Modal Title</h5>\n        <button class='btn-close' data-bs-dismiss='modal'></button>\n      </div>\n      <div class='modal-body'>Modal content</div>\n      <div class='modal-footer'>\n        <button class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>\n        <button class='btn btn-primary'>Save</button>\n      </div>\n    </div>\n  </div>\n</div>",
      output: "Modal popup opens when button is clicked",
      note: "Modal requires Bootstrap JavaScript bundle to function"
    },
    {
      question: "What are Bootstrap tooltips and how to enable them?",
      answer: "Tooltips are small popups that appear on hover. They require manual initialization via JavaScript.",
      example: "<button class='btn btn-secondary' data-bs-toggle='tooltip' data-bs-title='Tooltip text'>\n  Hover me\n</button>\n<script>\n  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"tooltip\"]'))\n  var tooltipList = tooltipTriggerList.map(function (el) { \n    return new bootstrap.Tooltip(el) \n  })\n</script>",
      output: "Tooltip appears on button hover",
      note: "Tooltips are initialized with JavaScript for performance"
    },
    {
      question: "How do you create a dropdown in Bootstrap?",
      answer: "Use .dropdown container with .dropdown-toggle button and .dropdown-menu containing .dropdown-item links.",
      example: "<div class='dropdown'>\n  <button class='btn btn-secondary dropdown-toggle' data-bs-toggle='dropdown'>\n    Dropdown button\n  </button>\n  <ul class='dropdown-menu'>\n    <li><a class='dropdown-item' href='#'>Action</a></li>\n    <li><a class='dropdown-item' href='#'>Another action</a></li>\n    <li><hr class='dropdown-divider'></li>\n    <li><a class='dropdown-item' href='#'>Separated link</a></li>\n  </ul>\n</div>",
      output: "Dropdown menu appears when button is clicked",
      note: "Use dropdown-divider for separating menu items"
    },
    {
      question: "What is the difference between .container and .container-fluid?",
      answer: ".container has fixed max-width at each breakpoint, .container-fluid spans the full width of the viewport always.",
      example: "<div class='container bg-primary text-white p-3'>Fixed width container</div>\n<div class='container-fluid bg-secondary text-white p-3'>Full width container</div>",
      output: "First container has margins on sides, second touches edges",
      note: "Both containers are responsive and work with the grid system"
    },
    {
      question: "How do you create responsive images in Bootstrap?",
      answer: "Use .img-fluid class to make images responsive (max-width:100%; height:auto). Use .img-thumbnail for bordered thumbnail.",
      example: "<img src='image.jpg' class='img-fluid' alt='Responsive image'>\n<img src='image.jpg' class='img-thumbnail' alt='Thumbnail' width='200'>\n<div class='rounded-circle overflow-hidden' style='width:100px;height:100px'>\n  <img src='image.jpg' class='w-100 h-100 object-fit-cover'>\n</div>",
      output: "Image scales with container, circular avatar option",
      note: "Combine with object-fit utilities for avatar images"
    },
    {
      question: "What is Bootstrap's spacing system?",
      answer: "Spacing utilities use m/p for margin/padding, sides (t/b/s/e/x/y), and size scale from 0-5 (0rem to 3rem).",
      example: "<div class='m-2 p-3'>Margin 0.5rem, padding 1rem</div>\n<div class='mt-3 mb-2'>Margin top 1rem, bottom 0.5rem</div>\n<div class='px-4 py-2'>Padding x 1.5rem, y 0.5rem</div>\n<div class='mx-auto' style='width:200px'>Auto horizontal margin</div>",
      output: "Elements with different margins and paddings",
      note: "Scale: 0=0rem, 1=0.25rem, 2=0.5rem, 3=1rem, 4=1.5rem, 5=3rem"
    },
    {
      question: "How do you create a progress bar in Bootstrap?",
      answer: "Use .progress container with .progress-bar inside. Set width percentage inline.",
      example: "<div class='progress'>\n  <div class='progress-bar bg-success' style='width:25%'>25%</div>\n</div>\n<div class='progress'>\n  <div class='progress-bar bg-warning' style='width:50%'>50%</div>\n</div>\n<div class='progress'>\n  <div class='progress-bar progress-bar-striped progress-bar-animated' style='width:75%'>75%</div>\n</div>",
      output: "Progress bars at 25%, 50%, and 75% with striped animation",
      note: "Use progress-bar-striped and progress-bar-animated for effects"
    },
    {
      question: "What are Bootstrap's text utilities?",
      answer: "Text utilities include alignment (text-start/center/end), wrapping (text-wrap/nowrap), transform (text-lowercase/uppercase/capitalize).",
      example: "<p class='text-start'>Left aligned text</p>\n<p class='text-center'>Centered text</p>\n<p class='text-end'>Right aligned text</p>\n<p class='text-uppercase'>Uppercase text</p>\n<p class='text-truncate' style='width:200px'>Long text that will be truncated with ellipsis</p>",
      output: "Text with various alignments and transformations",
      note: "Use text-truncate with a fixed width for ellipsis"
    },
    {
      question: "How do you create a spinner in Bootstrap?",
      answer: "Use .spinner-border for border spinner or .spinner-grow for growing spinner. Add text-* for colors, .spinner-border-sm for small size.",
      example: "<div class='spinner-border text-primary'></div>\n<div class='spinner-border text-danger spinner-border-sm'></div>\n<div class='spinner-grow text-success'></div>\n<button class='btn btn-primary' disabled>\n  <span class='spinner-border spinner-border-sm'></span>\n  Loading...\n</button>",
      output: "Animated loading spinners in different colors and sizes",
      note: "Add role='status' and visually-hidden text for accessibility"
    },
    {
      question: "What are Bootstrap list groups?",
      answer: "List groups are flexible components for displaying lists of items. Use .list-group with .list-group-item.",
      example: "<ul class='list-group'>\n  <li class='list-group-item active'>Active item</li>\n  <li class='list-group-item'>Regular item</li>\n  <li class='list-group-item disabled'>Disabled item</li>\n</ul>\n<div class='list-group'>\n  <a href='#' class='list-group-item list-group-item-action'>Link item</a>\n  <button class='list-group-item list-group-item-action'>Button item</button>\n</div>",
      output: "Styled list with active, disabled, and interactive items",
      note: "Use list-group-item-action for interactive items with hover effect"
    },
    {
      question: "How to create a carousel/slider in Bootstrap?",
      answer: "Carousel requires .carousel container with .carousel-inner, .carousel-item, and controls.",
      example: "<div id='demo' class='carousel slide' data-bs-ride='carousel'>\n  <div class='carousel-inner'>\n    <div class='carousel-item active'>\n      <img src='slide1.jpg' class='d-block w-100'>\n    </div>\n    <div class='carousel-item'>\n      <img src='slide2.jpg' class='d-block w-100'>\n    </div>\n  </div>\n  <button class='carousel-control-prev' data-bs-target='#demo' data-bs-slide='prev'>\n    <span class='carousel-control-prev-icon'></span>\n  </button>\n  <button class='carousel-control-next' data-bs-target='#demo' data-bs-slide='next'>\n    <span class='carousel-control-next-icon'></span>\n  </button>\n</div>",
      output: "Image slideshow with prev/next controls",
      note: "Add data-bs-ride='carousel' for auto-cycling"
    },
    {
      question: "What are Bootstrap's color utility classes?",
      answer: "Color utilities include text-* (text-primary, text-success, text-danger) and bg-* (bg-primary, bg-warning) for backgrounds.",
      example: "<p class='text-primary'>Primary text</p>\n<p class='text-success'>Success text</p>\n<p class='text-danger bg-dark p-2'>Danger text on dark background</p>\n<div class='bg-warning p-3'>Warning background</div>\n<div class='bg-gradient-primary p-3'>Gradient background</div>",
      output: "Text and background in different theme colors",
      note: "Use bg-gradient-* for gradient backgrounds in Bootstrap 5"
    },
    {
      question: "How do you create a sticky footer in Bootstrap?",
      answer: "Use flexbox utilities: d-flex flex-column min-vh-100 on body, mt-auto on footer for push.",
      example: "<body class='d-flex flex-column min-vh-100'>\n  <main class='flex-grow-1'>Content</main>\n  <footer class='bg-dark text-white text-center p-3 mt-auto'>\n    Footer always at bottom\n  </footer>\n</body>",
      output: "Footer sticks to bottom when content is short",
      note: "flex-grow-1 makes main content expand to fill space"
    },
    {
      question: "What are Bootstrap's display utilities?",
      answer: "Display utilities (d-*) control display property: d-none, d-block, d-inline, d-flex, d-grid, d-inline-block.",
      example: "<div class='d-none'>Hidden on all screens</div>\n<div class='d-block d-md-none'>Visible only on mobile</div>\n<div class='d-none d-md-block'>Visible only on tablet and up</div>\n<div class='d-flex justify-content-between'>\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>",
      output: "Elements appear/hide at different breakpoints",
      note: "Combine with breakpoints: d-sm-none, d-md-block, etc."
    },
    {
      question: "How do you create a collapse accordion in Bootstrap?",
      answer: "Use .accordion with .accordion-item, .accordion-header, .accordion-button, .accordion-collapse, .accordion-body.",
      example: "<div class='accordion' id='accordionExample'>\n  <div class='accordion-item'>\n    <h2 class='accordion-header'>\n      <button class='accordion-button' data-bs-toggle='collapse' data-bs-target='#collapse1'>\n        Section 1\n      </button>\n    </h2>\n    <div id='collapse1' class='accordion-collapse collapse show' data-bs-parent='#accordionExample'>\n      <div class='accordion-body'>Content for section 1</div>\n    </div>\n  </div>\n</div>",
      output: "Collapsible accordion sections that open/close",
      note: "data-bs-parent keeps only one section open at a time"
    },
    {
      question: "What are Bootstrap's flexbox utilities?",
      answer: "Flex utilities: d-flex, flex-row/column, justify-content-*, align-items-*, gap-*, flex-wrap, order-*.",
      example: "<div class='d-flex justify-content-between align-items-center p-3'>\n  <div>Left</div>\n  <div>Center</div>\n  <div>Right</div>\n</div>\n<div class='d-flex flex-column gap-2'>\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>\n<div class='d-flex flex-wrap gap-3'>\n  <div class='w-25'>Box 1</div>\n  <div class='w-25'>Box 2</div>\n</div>",
      output: "Flex layouts: space-between, column, and wrapping boxes",
      note: "gap-* adds spacing between flex items"
    },
    {
      question: "How do you size elements in Bootstrap?",
      answer: "Sizing utilities: w-25/50/75/100 (width), h-25/50/75/100 (height), mw-100 (max-width), mh-100 (max-height).",
      example: "<div class='w-50 bg-primary p-2'>50% width</div>\n<div class='w-75 bg-secondary p-2'>75% width</div>\n<div class='w-100 bg-success p-2'>100% width</div>\n<div style='height:200px'>\n  <div class='h-50 bg-warning'>50% height of parent</div>\n</div>",
      output: "Elements with percentage-based widths and heights",
      note: "Viewport units: vw-100, vh-100 for full viewport size"
    },
    {
      question: "What are Bootstrap borders and border utilities?",
      answer: "Border utilities: border (all sides), border-top, border-end, border-bottom, border-start. Add border-0 to remove.",
      example: "<div class='border border-primary p-3 m-2'>All borders blue</div>\n<div class='border-top border-danger p-3'>Top border only</div>\n<div class='border border-3 border-success p-3'>Thick border</div>\n<div class='rounded-circle bg-primary w-25 h-25'></div>\n<div class='rounded-pill bg-secondary p-2 text-center'>Pill shape</div>",
      output: "Elements with different border styles, colors, thickness, and radius",
      note: "border-1/2/3/4/5 for border width, rounded-* for corner radius"
    },
    {
      question: "How do you create a responsive table?",
      answer: "Wrap table in .table-responsive for horizontal scroll on small screens. Use .table classes for styling.",
      example: "<div class='table-responsive'>\n  <table class='table table-striped table-bordered table-hover'>\n    <thead class='table-dark'>\n      <tr><th>Name</th><th>Email</th></tr>\n    </thead>\n    <tbody>\n      <tr><td>John</td><td>john@email.com</td></tr>\n      <tr class='table-success'><td>Jane</td><td>jane@email.com</td></tr>\n    </tbody>\n  </table>\n</div>\n<table class='table table-sm'>Small table</table>",
      output: "Styled table with stripes, borders, hover effect, and responsive scroll",
      note: "Use .table-dark for dark table, .table-striped for zebra striping"
    },
    {
      question: "What are Bootstrap popovers?",
      answer: "Popovers are like tooltips but can contain more content including title and body. They require manual initialization.",
      example: "<button class='btn btn-danger' data-bs-toggle='popover' data-bs-title='Popover Title' data-bs-content='Popover content here'>\n  Click me\n</button>\n<script>\n  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"popover\"]'))\n  var popoverList = popoverTriggerList.map(function (el) {\n    return new bootstrap.Popover(el)\n  })\n</script>",
      output: "Popover appears on click with title and content",
      note: "Use data-bs-html='true' for HTML content"
    },
    {
      question: "How to style form validation in Bootstrap?",
      answer: "Use .is-valid/.is-invalid classes with .valid-feedback/.invalid-feedback for validation messages.",
      example: "<div class='mb-3'>\n  <input type='text' class='form-control is-valid' value='Valid input'>\n  <div class='valid-feedback'>Looks good!</div>\n</div>\n<div class='mb-3'>\n  <input type='text' class='form-control is-invalid' value=''>\n  <div class='invalid-feedback'>Please provide a value.</div>\n</div>\n<form class='needs-validation' novalidate>\n  <button type='submit'>Submit</button>\n</form>",
      output: "Inputs with green/red borders and feedback messages",
      note: "Use novalidate attribute to disable browser validation"
    },
    {
      question: "What are Bootstrap input groups?",
      answer: "Input groups allow adding text, buttons, or dropdowns before/after form inputs using .input-group-text.",
      example: "<div class='input-group mb-3'>\n  <span class='input-group-text'>@</span>\n  <input type='text' class='form-control' placeholder='Username'>\n</div>\n<div class='input-group mb-3'>\n  <input type='text' class='form-control' placeholder='Amount'>\n  <span class='input-group-text'>.00</span>\n</div>\n<div class='input-group'>\n  <button class='btn btn-outline-secondary'>Copy</button>\n  <input type='text' class='form-control' placeholder='Text'>\n</div>",
      output: "Input with prefix/suffix text, buttons, or dropdowns attached",
      note: "Input groups work with all form controls"
    },
    {
      question: "How to create floating labels in Bootstrap?",
      answer: "Wrap form control and label in .form-floating container. The label floats when input is focused or has value.",
      example: "<div class='form-floating mb-3'>\n  <input type='email' class='form-control' id='email' placeholder='name@example.com'>\n  <label for='email'>Email address</label>\n</div>\n<div class='form-floating'>\n  <textarea class='form-control' id='message' placeholder='Leave a comment' style='height:100px'></textarea>\n  <label for='message'>Message</label>\n</div>",
      output: "Labels that float above inputs when focused or filled",
      note: "Placeholder attribute is required for floating labels"
    },
    {
      question: "What are Bootstrap's visibility utilities?",
      answer: "Visibility utilities: visible and invisible (hides element but maintains layout space).",
      example: "<div class='visible bg-primary p-2'>This is visible</div>\n<div class='invisible bg-secondary p-2'>This is invisible but takes space</div>\n<div class='d-none bg-success p-2'>This is hidden and takes no space</div>",
      output: "Invisible element occupies space, hidden element doesn't",
      note: "Use invisible when you need to hide element but preserve layout"
    },
    {
      question: "How to create responsive images with figure?",
      answer: "Use .figure, .figure-img, .figcaption classes for captioned images.",
      example: "<figure class='figure'>\n  <img src='image.jpg' class='figure-img img-fluid rounded' alt='...'>\n  <figcaption class='figure-caption text-center'>A caption for the image</figcaption>\n</figure>\n<figure class='figure w-50'>\n  <img src='image.jpg' class='figure-img img-fluid'>\n  <figcaption class='figure-caption text-end'>Right-aligned caption</figcaption>\n</figure>",
      output: "Image with properly styled caption, responsive sizing",
      note: "Figure caption inherits image width"
    },
    {
      question: "What are Bootstrap's ratios (aspect ratios)?",
      answer: "Ratio utilities maintain aspect ratio for embedded content like videos and iframes.",
      example: "<div class='ratio ratio-16x9'>\n  <iframe src='https://www.youtube.com/embed/...' allowfullscreen></iframe>\n</div>\n<div class='ratio ratio-4x3 mt-3'>\n  <div class='bg-primary d-flex align-items-center justify-content-center'>4:3 Box</div>\n</div>\n<div class='ratio ratio-1x1 mt-3' style='width:150px'>\n  <div class='bg-success rounded-circle'>1:1 Circle</div>\n</div>",
      output: "Content maintains 16:9, 4:3, or 1:1 aspect ratio",
      note: "Available ratios: 1x1, 4x3, 16x9, 21x9"
    },
    {
      question: "How to create Bootstrap's dropdown with forms?",
      answer: "Dropdown can contain forms using .dropdown-menu with form elements inside.",
      example: "<div class='dropdown'>\n  <button class='btn btn-secondary dropdown-toggle' data-bs-toggle='dropdown'>\n    Dropdown with form\n  </button>\n  <form class='dropdown-menu p-4'>\n    <div class='mb-3'>\n      <label class='form-label'>Email</label>\n      <input type='email' class='form-control'>\n    </div>\n    <div class='mb-3'>\n      <label class='form-label'>Password</label>\n      <input type='password' class='form-control'>\n    </div>\n    <button type='submit' class='btn btn-primary'>Sign in</button>\n  </form>\n</div>",
      output: "Dropdown menu containing login form",
      note: "Prevent default form submission to keep dropdown open"
    },
    {
      question: "What are Bootstrap's position utilities?",
      answer: "Position utilities: position-static, relative, absolute, fixed, sticky. Use with top/start/bottom/end values.",
      example: "<div class='position-relative p-5 bg-light'>\n  <div class='position-absolute top-0 start-0 bg-primary p-1'>Top Left</div>\n  <div class='position-absolute top-0 end-0 bg-danger p-1'>Top Right</div>\n  <div class='position-absolute bottom-0 start-0 bg-success p-1'>Bottom Left</div>\n  <div class='position-absolute bottom-0 end-0 bg-warning p-1'>Bottom Right</div>\n</div>\n<div class='position-sticky top-0 bg-dark text-white p-2'>Sticky header</div>",
      output: "Elements positioned at corners of relative container, sticky element",
      note: "Use translate-middle for centering absolutely positioned elements"
    },
    {
      question: "How to use Bootstrap with RTL languages?",
      answer: "Use Bootstrap's RTL version CSS: bootstrap.rtl.min.css, or compile with $enable-rtl: true in Sass.",
      example: "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css' rel='stylesheet'>\n<html dir='rtl'>\n  <body>\n    <div class='text-start'>This is right-aligned in RTL</div>\n    <div class='ms-3'>Start margin becomes right margin</div>\n  </body>\n</html>",
      output: "Layout mirrors for right-to-left languages like Arabic/Hebrew",
      note: "Spacing utilities like ms/me automatically flip direction"
    },
    {
      question: "How to create an offcanvas sidebar?",
      answer: "Offcanvas is a hidden sidebar that slides in from left, right, top, or bottom.",
      example: "<button class='btn btn-primary' data-bs-toggle='offcanvas' data-bs-target='#offcanvas'>\n  Open Sidebar\n</button>\n<div class='offcanvas offcanvas-start' tabindex='-1' id='offcanvas'>\n  <div class='offcanvas-header'>\n    <h5 class='offcanvas-title'>Sidebar</h5>\n    <button class='btn-close' data-bs-dismiss='offcanvas'></button>\n  </div>\n  <div class='offcanvas-body'>\n    <p>Sidebar content here</p>\n  </div>\n</div>",
      output: "Sidebar slides in from left when button clicked",
      note: "Use offcanvas-end for right side, offcanvas-top/bottom for vertical"
    },
    {
      question: "What are Bootstrap's scrollspy feature?",
      answer: "Scrollspy automatically updates navigation links based on scroll position. Use data-bs-spy='scroll' on body.",
      example: "<body data-bs-spy='scroll' data-bs-target='#navbar' data-bs-offset='0'>\n  <nav id='navbar'>\n    <ul class='nav'>\n      <li><a class='nav-link' href='#section1'>Section 1</a></li>\n      <li><a class='nav-link' href='#section2'>Section 2</a></li>\n    </ul>\n  </nav>\n  <div id='section1'>Section 1 content</div>\n  <div id='section2'>Section 2 content</div>\n</body>",
      output: "Navigation links highlight as you scroll to sections",
      note: "Elements need id matching href targets"
    },
    {
      question: "How to create Bootstrap toasts (notifications)?",
      answer: "Toasts are lightweight notifications that can be auto-hidden. Place them in .toast-container.",
      example: "<div class='toast-container position-fixed bottom-0 end-0 p-3'>\n  <div class='toast' role='alert' data-bs-autohide='true' data-bs-delay='3000'>\n    <div class='toast-header'>\n      <strong class='me-auto'>Notification</strong>\n      <button class='btn-close' data-bs-dismiss='toast'></button>\n    </div>\n    <div class='toast-body'>\n      Hello! This is a toast message.\n    </div>\n  </div>\n</div>\n<button onclick=\"new bootstrap.Toast(document.querySelector('.toast')).show()\">Show Toast</button>",
      output: "Toast notification appears at bottom-right corner",
      note: "Toasts need JavaScript to show; can be stacked"
    },
    {
      question: "How to customize Bootstrap's breakpoints?",
      answer: "Override breakpoints in Sass variables before importing Bootstrap, or use custom CSS for specific breakpoints.",
      example: "// custom.scss\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px,\n  xxxl: 1600px\n);\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px,\n  xxl: 1320px,\n  xxxl: 1540px\n);\n\n@import 'bootstrap/scss/bootstrap';",
      output: "Custom breakpoints and container widths at 1600px",
      note: "Custom breakpoints affect responsive utilities like col-lg-"
    },
    {
      question: "How to create a mega menu in Bootstrap?",
      answer: "Mega menu can be created using dropdown menu with custom column layout.",
      example: "<div class='dropdown'>\n  <button class='btn btn-dark dropdown-toggle' data-bs-toggle='dropdown'>\n    Mega Menu\n  </button>\n  <div class='dropdown-menu p-4' style='width: 500px'>\n    <div class='row'>\n      <div class='col-md-4'>\n        <h6>Column 1</h6>\n        <a class='dropdown-item' href='#'>Link 1</a>\n        <a class='dropdown-item' href='#'>Link 2</a>\n      </div>\n      <div class='col-md-4'>\n        <h6>Column 2</h6>\n        <a class='dropdown-item' href='#'>Link 3</a>\n        <a class='dropdown-item' href='#'>Link 4</a>\n      </div>\n      <div class='col-md-4'>\n        <h6>Column 3</h6>\n        <a class='dropdown-item' href='#'>Link 5</a>\n        <a class='dropdown-item' href='#'>Link 6</a>\n      </div>\n    </div>\n  </div>\n</div>",
      output: "Wide dropdown menu with multiple columns",
      note: "Set custom width on .dropdown-menu for mega menu"
    },
    {
      question: "How to style file input in Bootstrap?",
      answer: "Use .form-control for file input or customize with custom CSS. Bootstrap 5 has native file input styling.",
      example: "<div class='mb-3'>\n  <label class='form-label'>Choose file</label>\n  <input class='form-control' type='file'>\n</div>\n<div class='mb-3'>\n  <label class='form-label'>Multiple files</label>\n  <input class='form-control' type='file' multiple>\n</div>\n<div class='mb-3'>\n  <label class='form-label'>File with accept filter</label>\n  <input class='form-control' type='file' accept='image/*'>\n</div>",
      output: "Styled file input with browse button",
      note: "Use accept attribute to filter file types"
    },
    {
      question: "How to create a dropdown with icons?",
      answer: "Add Bootstrap Icons or any icon library inside dropdown items.",
      example: "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css'>\n<div class='dropdown'>\n  <button class='btn btn-secondary dropdown-toggle' data-bs-toggle='dropdown'>\n    Menu with Icons\n  </button>\n  <ul class='dropdown-menu'>\n    <li><a class='dropdown-item' href='#'><i class='bi bi-person me-2'></i>Profile</a></li>\n    <li><a class='dropdown-item' href='#'><i class='bi bi-gear me-2'></i>Settings</a></li>\n    <li><hr class='dropdown-divider'></li>\n    <li><a class='dropdown-item' href='#'><i class='bi bi-box-arrow-right me-2'></i>Logout</a></li>\n  </ul>\n</div>",
      output: "Dropdown menu items with icons before text",
      note: "Use me-2 to add spacing between icon and text"
    },
    {
      question: "How to use Bootstrap with dark mode?",
      answer: "Use Bootstrap's built-in dark theme with data-bs-theme='dark' or .bg-dark with .text-white.",
      example: "<div data-bs-theme='dark'>\n  <div class='bg-primary p-3'>Primary button in dark theme</div>\n  <button class='btn btn-secondary'>Button</button>\n</div>\n<nav class='navbar navbar-dark bg-dark'>\n  <div class='container'>\n    <span class='navbar-brand'>Dark Navbar</span>\n  </div>\n</nav>\n<div class='card bg-dark text-white'>\n  <div class='card-body'>Dark card</div>\n</div>",
      output: "Components with dark theme styling",
      note: "data-bs-theme='dark' applies dark theme to all nested components"
    },
    {
      question: "How to horizontally center a div in Bootstrap?",
      answer: "Use .text-center for inline content, .mx-auto for block elements, or flexbox justify-content-center.",
      example: "<div class='text-center bg-light p-2'>Centered text</div>\n<div class='mx-auto bg-primary text-white p-2' style='width:200px'>Block centered</div>\n<div class='d-flex justify-content-center bg-secondary p-2'>\n  <div>Flex centered</div>\n</div>\n<div class='row justify-content-center'>\n  <div class='col-4 bg-success text-white p-2'>Column centered</div>\n</div>",
      output: "Elements centered horizontally using different methods",
      note: "Use justify-content-center for flex and grid containers"
    }
  ],
  
  experienced: [
    {
      question: "Explain Bootstrap's Sass architecture and customization process.",
      answer: "Bootstrap's Sass source is organized into files that import from 'bootstrap/scss/bootstrap'. Customize by setting variables before import.",
      example: "// custom-bootstrap.scss\n$primary: #ff6b35;\n$border-radius: 0.5rem;\n$font-family-sans-serif: 'Inter', system-ui;\n$enable-shadows: true;\n\n@import 'bootstrap/scss/functions';\n@import 'bootstrap/scss/variables';\n@import 'bootstrap/scss/variables-dark';\n@import 'bootstrap/scss/maps';\n@import 'bootstrap/scss/mixins';\n@import 'bootstrap/scss/root';\n\n// Only import needed components\n@import 'bootstrap/scss/reboot';\n@import 'bootstrap/scss/type';\n@import 'bootstrap/scss/grid';\n@import 'bootstrap/scss/buttons';\n@import 'bootstrap/scss/card';\n\n// Or import all (full bundle)\n// @import 'bootstrap/scss/bootstrap';",
      output: "Custom Bootstrap build with modified colors, fonts, and reduced components",
      note: "Import only needed components to reduce CSS size"
    },
    {
      question: "How to create custom Bootstrap themes using CSS variables?",
      answer: "Bootstrap 5 uses CSS variables for easy runtime theming. Override :root variables in your CSS.",
      example: "<style>\n  :root {\n    --bs-primary: #ff6b35;\n    --bs-primary-rgb: 255, 107, 53;\n    --bs-secondary: #6c757d;\n    --bs-success: #28a745;\n    --bs-info: #17a2b8;\n    --bs-warning: #ffc107;\n    --bs-danger: #dc3545;\n    --bs-light: #f8f9fa;\n    --bs-dark: #343a40;\n    --bs-body-bg: #f0f2f5;\n    --bs-body-color: #1a1d20;\n    --bs-border-radius: 0.75rem;\n  }\n</style>\n<button class='btn btn-primary'>Custom Orange Button</button>\n<div class='card border-0 shadow'><div class='card-body'>Custom themed card</div></div>",
      output: "Bootstrap components use custom colors and border radius without recompiling",
      note: "CSS variables allow runtime theme switching for multi-brand applications"
    },
    {
      question: "How to reduce Bootstrap's bundle size for production?",
      answer: "Use PurgeCSS to remove unused classes, import only needed components, or use Bootstrap's customizer.",
      example: "// postcss.config.js\nmodule.exports = {\n  plugins: [\n    require('@fullhuman/postcss-purgecss')({\n      content: ['./src/**/*.html', './src/**/*.js'],\n      defaultExtractor: content => content.match(/[\\w-/:]+(?<!:)/g) || []\n    }),\n    require('cssnano')\n  ]\n}\n\n// Only import used components\n@import 'bootstrap/scss/functions';\n@import 'bootstrap/scss/variables';\n@import 'bootstrap/scss/mixins';\n@import 'bootstrap/scss/root';\n@import 'bootstrap/scss/reboot';\n@import 'bootstrap/scss/type';\n@import 'bootstrap/scss/grid';\n@import 'bootstrap/scss/buttons';\n@import 'bootstrap/scss/navbar';\n@import 'bootstrap/scss/card';",
      output: "Bootstrap CSS reduced from ~200KB to ~30KB",
      note: "PurgeCSS removes unused classes; only include components you actually use"
    },
    {
      question: "How to create responsive typography scale with Bootstrap?",
      answer: "Customize font size variables in Sass and use RFS (Responsive Font Sizing) for automatic scaling.",
      example: "// custom-typography.scss\n$rfs-base-value: 1.25rem;\n$rfs-factor: 10;\n$enable-rfs: true;\n\n$font-size-base: 1rem;\n$h1-font-size: $font-size-base * 2.5;\n$h2-font-size: $font-size-base * 2;\n$h3-font-size: $font-size-base * 1.75;\n$h4-font-size: $font-size-base * 1.5;\n$h5-font-size: $font-size-base * 1.25;\n$h6-font-size: $font-size-base;\n\n$display-font-sizes: (\n  1: 5rem,\n  2: 4.5rem,\n  3: 4rem,\n  4: 3.5rem,\n  5: 3rem,\n  6: 2.5rem\n);\n\n@import 'bootstrap/scss/bootstrap';\n\n<h1 class='display-1'>Responsive Display</h1>\n<p class='lead'>This text uses RFS for automatic scaling</p>",
      output: "Typography scales smoothly across device sizes using RFS",
      note: "RFS automatically calculates rem values based on viewport width"
    },
    {
      question: "How to create custom Bootstrap utility classes using Utility API?",
      answer: "Use Utility API in Sass to generate custom utility classes for any property.",
      example: "// custom-utilities.scss\n@import 'bootstrap/scss/functions';\n@import 'bootstrap/scss/variables';\n@import 'bootstrap/scss/maps';\n@import 'bootstrap/scss/mixins';\n@import 'bootstrap/scss/utilities';\n\n$utilities: map-merge($utilities, (\n  'opacity': (\n    property: opacity,\n    class: o,\n    values: (\n      0: 0,\n      25: 0.25,\n      50: 0.5,\n      75: 0.75,\n      100: 1,\n    ),\n  ),\n  'cursor': (\n    property: cursor,\n    class: cursor,\n    values: (\n      auto: auto,\n      pointer: pointer,\n      wait: wait,\n      move: move,\n      'not-allowed': not-allowed,\n    ),\n  ),\n  'text-decoration': (\n    property: text-decoration,\n    class: text-decoration,\n    values: (\n      none: none,\n      underline: underline,\n      'line-through': line-through,\n    ),\n  ),\n  'transform': (\n    property: transform,\n    class: transform,\n    values: (\n      scale-up: scale(1.1),\n      scale-down: scale(0.9),\n    ),\n  ),\n));\n\n@import 'bootstrap/scss/utilities/api';\n\n<div class='o-50 cursor-pointer text-decoration-underline transform-scale-up'>\n  Custom utility classes\n</div>",
      output: "New utility classes available: .o-25, .cursor-pointer, .text-decoration-underline",
      note: "Utility API generates responsive, hover, and other variants automatically"
    },
    {
      question: "Explain Bootstrap's theming system with CSS custom properties.",
      answer: "Bootstrap 5 exposes CSS variables for all theme colors, components, and utilities for dynamic theming.",
      example: "<style>\n  [data-theme='dark'] {\n    --bs-primary: #0d6efd;\n    --bs-primary-rgb: 13, 110, 253;\n    --bs-body-bg: #212529;\n    --bs-body-color: #dee2e6;\n    --bs-border-color: #495057;\n  }\n  [data-theme='dark'] .card {\n    background-color: #2b3035;\n  }\n</style>\n\n<div class='container'>\n  <button class='btn btn-primary' onclick=\"document.documentElement.setAttribute('data-theme', 'dark')\">\n    Dark Theme\n  </button>\n  <button class='btn btn-secondary' onclick=\"document.documentElement.removeAttribute('data-theme')\">\n    Light Theme\n  </button>\n  <div class='card mt-3'>\n    <div class='card-body'>\n      <h5 class='card-title'>Dynamic Theming</h5>\n      <p class='card-text'>Theme changes via CSS variables without reload</p>\n    </div>\n  </div>\n</div>",
      output: "Theme changes instantly without page reload using CSS custom properties",
      note: "Override :root CSS variables to modify Bootstrap's appearance at runtime"
    },
    {
      question: "How to create a completely custom Bootstrap build for multi-brand websites?",
      answer: "Use Sass maps to define multiple brand themes and generate theme-specific CSS files.",
      example: "// themes.scss\n$themes: (\n  'brand1': (\n    primary: #ff6b35,\n    secondary: #6c757d,\n    success: #28a745\n  ),\n  'brand2': (\n    primary: #3b82f6,\n    secondary: #8b5cf6,\n    success: #10b981\n  )\n);\n\n@import 'bootstrap/scss/bootstrap';\n\n@each $theme-name, $theme-colors in $themes {\n  [data-theme='#{$theme-name}'] {\n    --bs-primary: #{map-get($theme-colors, primary)};\n    --bs-primary-rgb: #{red(map-get($theme-colors, primary))}, #{green(map-get($theme-colors, primary))}, #{blue(map-get($theme-colors, primary))};\n    --bs-secondary: #{map-get($theme-colors, secondary)};\n    --bs-success: #{map-get($theme-colors, success)};\n  }\n}\n\n// JavaScript to switch themes\ndocument.documentElement.setAttribute('data-theme', 'brand1');",
      output: "Multiple brand color schemes that can be switched dynamically",
      note: "Keep base Bootstrap structure while only changing color variables per brand"
    },
    {
      question: "How to fix Bootstrap's CSS specificity issues with custom styles?",
      answer: "Use higher specificity selectors, !important flag, or CSS layers (@layer). Bootstrap uses low specificity for easy overrides.",
      example: "<style>\n  /* Method 1: Higher specificity */\n  body .btn-primary {\n    background-color: #ff9900;\n    border-color: #ff9900;\n  }\n  \n  /* Method 2: Use id for maximum specificity */\n  #custom .btn-primary {\n    background-color: #ff6600;\n  }\n  \n  /* Method 3: !important (use sparingly) */\n  .btn-custom {\n    background-color: #ff3300 !important;\n  }\n  \n  /* Method 4: CSS layers (modern) */\n  @layer custom {\n    .btn-primary {\n      background-color: #cc4400;\n    }\n  }\n  \n  /* Method 5: More specific selector */\n  .btn.btn-primary {\n    background-color: #aa2200;\n  }\n</style>\n\n<button class='btn btn-primary'>Custom styled button</button>\n<button class='btn btn-primary btn-custom'>Important override</button>",
      output: "Custom styles properly override Bootstrap's default styles",
      note: "Analyze computed styles in devtools to understand specificity conflicts"
    },
    {
      question: "How to implement RTL (Right-to-Left) support in Bootstrap manually?",
      answer: "Either use Bootstrap's RTL CSS or compile with $enable-rtl:true and use CSS logical properties.",
      example: "// Using Bootstrap RTL CDN\n<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css' rel='stylesheet'>\n\n// Or custom CSS for RTL\n[dir='rtl'] .custom-rtl-class {\n  padding-left: 0;\n  padding-right: 1rem;\n  margin-left: auto;\n  margin-right: 0;\n  text-align: right;\n}\n\n<!-- HTML structure -->\n<html dir='rtl' lang='ar'>\n  <body>\n    <div class='container'>\n      <div class='row'>\n        <div class='col-md-6'>نص عربي هنا</div>\n        <div class='col-md-6 text-sm-end'>نص محاذى لليمين</div>\n      </div>\n    </div>\n  </body>\n</html>",
      output: "Layout correctly mirrors for right-to-left languages",
      note: "Bootstrap RTL automatically flips spacing, alignment, and grid"
    },
    {
      question: "How to implement lazy loading for Bootstrap components?",
      answer: "Dynamically initialize Bootstrap components when they enter viewport using Intersection Observer.",
      example: "// Lazy load tooltips\nconst lazyTooltips = () => {\n  const tooltipTriggers = document.querySelectorAll('[data-bs-toggle=\"tooltip\"]');\n  \n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        const el = entry.target;\n        new bootstrap.Tooltip(el);\n        observer.unobserve(el);\n      }\n    });\n  });\n  \n  tooltipTriggers.forEach(el => observer.observe(el));\n};\n\n// Lazy load modals (content loaded on demand)\ndocument.querySelectorAll('[data-bs-toggle=\"modal\"]').forEach(btn => {\n  btn.addEventListener('click', async (e) => {\n    const target = btn.getAttribute('data-bs-target');\n    const modalEl = document.querySelector(target);\n    \n    if (!modalEl.querySelector('.modal-body-loaded')) {\n      const response = await fetch('/api/modal-content');\n      const html = await response.text();\n      modalEl.querySelector('.modal-body').innerHTML = html;\n      modalEl.querySelector('.modal-body').classList.add('modal-body-loaded');\n    }\n    \n    new bootstrap.Modal(modalEl).show();\n  });\n});",
      output: "Bootstrap components initialize only when needed, improving initial load time",
      note: "Use dynamic imports for heavy components like datepickers and rich text editors"
    },
    {
      question: "How to create custom Bootstrap breakpoints for responsive design?",
      answer: "Override $grid-breakpoints and $container-max-widths in Sass to add custom breakpoints.",
      example: "// custom-breakpoints.scss\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px,\n  xxxl: 1600px,\n  ultra: 1920px\n);\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px,\n  xxl: 1320px,\n  xxxl: 1540px,\n  ultra: 1800px\n);\n\n@import 'bootstrap/scss/bootstrap';\n\n// Usage in HTML\n<div class='container-ultra'>Custom ultra container</div>\n<div class='d-none d-ultra-block'>Visible only on ultra screens</div>\n<div class='col-ultra-6'>Half width on ultra screens</div>",
      output: "New breakpoints available: xxxl and ultra for very large screens",
      note: "Custom breakpoints generate responsive utilities automatically"
    },
    {
      question: "How to create a responsive mega menu with Bootstrap?",
      answer: "Combine dropdown with Bootstrap grid system to create multi-column mega menu.",
      example: "<style>\n  .mega-menu {\n    width: 600px !important;\n    padding: 1rem;\n  }\n  @media (max-width: 768px) {\n    .mega-menu {\n      width: 100vw !important;\n    }\n  }\n</style>\n\n<div class='dropdown'>\n  <button class='btn btn-dark dropdown-toggle' data-bs-toggle='dropdown'>\n    Mega Menu\n  </button>\n  <div class='dropdown-menu mega-menu'>\n    <div class='row'>\n      <div class='col-md-4'>\n        <h6 class='dropdown-header'>Products</h6>\n        <a class='dropdown-item' href='#'>Electronics</a>\n        <a class='dropdown-item' href='#'>Clothing</a>\n        <a class='dropdown-item' href='#'>Books</a>\n      </div>\n      <div class='col-md-4'>\n        <h6 class='dropdown-header'>Support</h6>\n        <a class='dropdown-item' href='#'>Help Center</a>\n        <a class='dropdown-item' href='#'>Contact Us</a>\n        <a class='dropdown-item' href='#'>FAQs</a>\n      </div>\n      <div class='col-md-4'>\n        <h6 class='dropdown-header'>Company</h6>\n        <a class='dropdown-item' href='#'>About Us</a>\n        <a class='dropdown-item' href='#'>Careers</a>\n        <a class='dropdown-item' href='#'>Blog</a>\n      </div>\n    </div>\n    <hr class='dropdown-divider'>\n    <div class='row'>\n      <div class='col-12'>\n        <a class='dropdown-item text-center text-primary' href='#'>View All Products →</a>\n      </div>\n    </div>\n  </div>\n</div>",
      output: "Wide mega menu with categories organized in columns",
      note: "Add hover support with CSS for desktop, keep click for touch devices"
    },
    {
      question: "How to integrate Bootstrap with React components?",
      answer: "Use react-bootstrap library or wrap Bootstrap components with React lifecycle methods.",
      example: "npm install react-bootstrap bootstrap\n\n// App.js\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport { Button, Card, Modal, Navbar, Nav, Container } from 'react-bootstrap';\n\nfunction MyComponent() {\n  const [show, setShow] = useState(false);\n  \n  return (\n    <>\n      <Navbar bg='dark' variant='dark'>\n        <Container>\n          <Navbar.Brand href='#home'>React Bootstrap</Navbar.Brand>\n          <Nav className='ms-auto'>\n            <Nav.Link href='#home'>Home</Nav.Link>\n            <Nav.Link href='#features'>Features</Nav.Link>\n          </Nav>\n        </Container>\n      </Navbar>\n      \n      <Container className='mt-4'>\n        <Card style={{ width: '18rem' }}>\n          <Card.Body>\n            <Card.Title>React Bootstrap Card</Card.Title>\n            <Card.Text>Bootstrap components as React components!</Card.Text>\n            <Button variant='primary' onClick={() => setShow(true)}>\n              Open Modal\n            </Button>\n          </Card.Body>\n        </Card>\n      </Container>\n      \n      <Modal show={show} onHide={() => setShow(false)}>\n        <Modal.Header closeButton>\n          <Modal.Title>Modal Title</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>Modal content goes here</Modal.Body>\n        <Modal.Footer>\n          <Button variant='secondary' onClick={() => setShow(false)}>\n            Close\n          </Button>\n          <Button variant='primary' onClick={() => setShow(false)}>\n            Save Changes\n          </Button>\n        </Modal.Footer>\n      </Modal>\n    </>\n  );\n}",
      output: "Bootstrap components fully integrated with React state and lifecycle",
      note: "react-bootstrap provides type-safe, React-friendly Bootstrap components"
    },
    {
      question: "How to create responsive typography using Bootstrap RFS?",
      answer: "RFS (Responsive Font Sizing) automatically scales font sizes based on viewport width.",
      example: "// Enable RFS in Sass\n$enable-rfs: true;\n$rfs-base-value: 1.25rem;\n$rfs-factor: 10;\n\n@import 'bootstrap/scss/bootstrap';\n\n<!-- Use responsive typography -->\n<h1 class='h1'>This font size scales with viewport</h1>\n<p class='lead'>Automatically responsive lead text</p>\n\n<!-- Custom RFS mixin -->\n<style>\n  .custom-heading {\n    @include font-size(3rem); // Uses RFS automatically\n  }\n</style>\n\n<!-- RFS responsive classes -->\n<div class='fs-1'>Responsive text</div>\n<div class='fs-2'>Also scales with screen</div>",
      output: "Font sizes smoothly scale between min and max values based on screen width",
      note: "RFS uses clamp() or media queries depending on browser support"
    },
    {
      question: "How to implement dark mode switching without reloading?",
      answer: "Use Bootstrap 5's data-bs-theme attribute or toggle CSS classes on html element.",
      example: "<button class='btn btn-primary' id='themeToggle'>Toggle Dark Mode</button>\n\n<script>\n  const toggleBtn = document.getElementById('themeToggle');\n  \n  function setTheme(theme) {\n    document.documentElement.setAttribute('data-bs-theme', theme);\n    localStorage.setItem('theme', theme);\n  }\n  \n  function toggleTheme() {\n    const currentTheme = document.documentElement.getAttribute('data-bs-theme');\n    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';\n    setTheme(newTheme);\n  }\n  \n  // Load saved theme\n  const savedTheme = localStorage.getItem('theme');\n  if (savedTheme) {\n    setTheme(savedTheme);\n  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n    setTheme('dark');\n  }\n  \n  // Listen to system preference changes\n  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {\n    if (!localStorage.getItem('theme')) {\n      setTheme(e.matches ? 'dark' : 'light');\n    }\n  });\n  \n  toggleBtn.addEventListener('click', toggleTheme);\n</script>",
      output: "Dark mode toggles instantly without page reload and respects system preference",
      note: "Bootstrap 5.3+ supports data-bs-theme='dark' for automatic dark mode"
    },
    {
      question: "How to create animated components with Bootstrap and CSS transitions?",
      answer: "Combine Bootstrap's transition utilities with custom CSS keyframes for animations.",
      example: "<style>\n  @keyframes slideIn {\n    from {\n      transform: translateX(-100%);\n      opacity: 0;\n    }\n    to {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  }\n  \n  @keyframes fadeInUp {\n    from {\n      transform: translateY(30px);\n      opacity: 0;\n    }\n    to {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n  \n  .animate-slide-in {\n    animation: slideIn 0.5s ease-out;\n  }\n  \n  .animate-fade-up {\n    animation: fadeInUp 0.6s ease-out;\n  }\n  \n  .animate-delay-1 { animation-delay: 0.1s; }\n  .animate-delay-2 { animation-delay: 0.2s; }\n  .animate-delay-3 { animation-delay: 0.3s; }\n  \n  .card {\n    transition: transform 0.3s, box-shadow 0.3s;\n  }\n  \n  .card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 1rem 3rem rgba(0,0,0,0.175);\n  }\n</style>\n\n<div class='container mt-5'>\n  <h1 class='animate-slide-in'>Animated Heading</h1>\n  <div class='row'>\n    <div class='col-md-4 animate-fade-up animate-delay-1'>\n      <div class='card'>\n        <div class='card-body'>\n          <h5 class='card-title'>Card 1</h5>\n          <p class='card-text'>Staggered animation</p>\n        </div>\n      </div>\n    </div>\n    <div class='col-md-4 animate-fade-up animate-delay-2'>\n      <div class='card'>\n        <div class='card-body'>\n          <h5 class='card-title'>Card 2</h5>\n          <p class='card-text'>Staggered animation</p>\n        </div>\n      </div>\n    </div>\n    <div class='col-md-4 animate-fade-up animate-delay-3'>\n      <div class='card'>\n        <div class='card-body'>\n          <h5 class='card-title'>Card 3</h5>\n          <p class='card-text'>Staggered animation</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
      output: "Cards animate in with staggered delay and hover effects",
      note: "Use transform and opacity for smooth, performant animations"
    },
    {
      question: "How to handle Bootstrap's JavaScript events for custom logic?",
      answer: "Listen to Bootstrap events like 'show.bs.modal', 'hidden.bs.modal' for custom actions.",
      example: "<!-- Modal with event handlers -->\n<div class='modal fade' id='analyticsModal'>\n  <div class='modal-dialog'>\n    <div class='modal-content'>\n      <div class='modal-header'>\n        <h5 class='modal-title'>Analytics Modal</h5>\n        <button class='btn-close' data-bs-dismiss='modal'></button>\n      </div>\n      <div class='modal-body'>Loading data...</div>\n    </div>\n  </div>\n</div>\n\n<button class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#analyticsModal'>\n  Open Modal\n</button>\n\n<script>\n  const modalEl = document.getElementById('analyticsModal');\n  \n  // Show event (before modal appears)\n  modalEl.addEventListener('show.bs.modal', function(event) {\n    console.log('Modal is about to show');\n    this.querySelector('.modal-body').innerHTML = 'Loading data...';\n  });\n  \n  // Shown event (after modal appears)\n  modalEl.addEventListener('shown.bs.modal', function(event) {\n    console.log('Modal is fully shown');\n    // Load data via AJAX\n    setTimeout(() => {\n      this.querySelector('.modal-body').innerHTML = '<p>Data loaded successfully!</p>';\n    }, 1000);\n  });\n  \n  // Hide event (before modal hides)\n  modalEl.addEventListener('hide.bs.modal', function(event) {\n    console.log('Modal is about to hide');\n    if (!confirm('Close modal?')) {\n      event.preventDefault(); // Prevent closing\n    }\n  });\n  \n  // Hidden event (after modal hides)\n  modalEl.addEventListener('hidden.bs.modal', function(event) {\n    console.log('Modal is fully hidden');\n    this.querySelector('.modal-body').innerHTML = ''; // Reset content\n  });\n  \n  // Tooltip events\n  const tooltipEl = document.querySelector('[data-bs-toggle=\"tooltip\"]');\n  const tooltip = new bootstrap.Tooltip(tooltipEl);\n  \n  tooltipEl.addEventListener('show.bs.tooltip', () => console.log('Tooltip showing'));\n  tooltipEl.addEventListener('shown.bs.tooltip', () => console.log('Tooltip shown'));\n  tooltipEl.addEventListener('hide.bs.tooltip', () => console.log('Tooltip hiding'));\n  tooltipEl.addEventListener('hidden.bs.tooltip', () => console.log('Tooltip hidden'));\n</script>",
      output: "Custom logic executes before/after Bootstrap component events",
      note: "Available events: show, shown, hide, hidden for modals, tooltips, popovers"
    },
    {
      question: "How to create custom form controls with Bootstrap?",
      answer: "Extend Bootstrap's form controls with custom CSS while maintaining consistency.",
      example: "<style>\n  .custom-switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  .custom-switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: '';\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n  \n  input:checked + .slider {\n    background-color: var(--bs-primary);\n  }\n  \n  input:checked + .slider:before {\n    transform: translateX(26px);\n  }\n  \n  .custom-range {\n    -webkit-appearance: none;\n    width: 100%;\n    height: 8px;\n    background: #ddd;\n    border-radius: 5px;\n    outline: none;\n  }\n  \n  .custom-range::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 20px;\n    height: 20px;\n    background: var(--bs-primary);\n    border-radius: 50%;\n    cursor: pointer;\n  }\n  \n  .custom-range::-webkit-slider-thumb:hover {\n    transform: scale(1.2);\n  }\n</style>\n\n<label class='form-label'>Custom Toggle Switch</label>\n<label class='custom-switch'>\n  <input type='checkbox' id='customSwitch'>\n  <span class='slider'></span>\n</label>\n\n<label class='form-label mt-3'>Custom Range Slider</label>\n<input type='range' class='custom-range' min='0' max='100' value='50'>",
      output: "Custom toggle switch and range slider that match Bootstrap styling",
      note: "Use CSS custom properties (--bs-primary) to maintain theme consistency"
    },
    {
      question: "How to optimize Bootstrap for performance with critical CSS?",
      answer: "Extract critical Bootstrap CSS for above-the-fold content and lazy load remaining.",
      example: "// Critical CSS extraction script\nconst critical = require('critical');\n\ncritical.generate({\n  inline: true,\n  base: 'dist/',\n  src: 'index.html',\n  target: 'index-critical.html',\n  width: 1300,\n  height: 900,\n  dimensions: [{\n    width: 375,\n    height: 700,\n  }],\n  extract: true,\n  inlineImages: false,\n  ignore: {\n    atrule: ['@font-face'],\n    decl: (str) => /background-image/.test(str),\n  },\n});\n\n<!-- In HTML: Inline critical CSS, defer full CSS -->\n<style>\n  /* Critical Bootstrap CSS (grid, buttons, navbar) inlined here */\n</style>\n<link rel='preload' href='bootstrap-full.css' as='style' onload=\"this.onload=null;this.rel='stylesheet'\">\n<noscript><link rel='stylesheet' href='bootstrap-full.css'></noscript>\n\n<!-- Or use Bootstrap CDN with loadCSS -->\n<link rel='preload' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' as='style' onload=\"this.onload=null;this.rel='stylesheet'\">",
      output: "Bootstrap CSS loads without blocking render, improving Core Web Vitals",
      note: "Critical path CSS improves LCP (Largest Contentful Paint)"
    },
    {
      question: "How to implement infinite scroll with Bootstrap grid?",
      answer: "Combine Bootstrap grid with Intersection Observer to load more cards dynamically.",
      example: "<div class='container'>\n  <div class='row' id='cardsContainer'></div>\n  <div id='loading' class='text-center mt-4' style='display:none'>\n    <div class='spinner-border text-primary'></div>\n  </div>\n</div>\n\n<script>\n  let page = 1;\n  let loading = false;\n  let hasMore = true;\n  \n  async function loadMoreCards() {\n    if (loading || !hasMore) return;\n    loading = true;\n    document.getElementById('loading').style.display = 'block';\n    \n    const response = await fetch(`/api/cards?page=${page}&limit=12`);\n    const data = await response.json();\n    \n    if (data.cards.length === 0) {\n      hasMore = false;\n      loading = false;\n      document.getElementById('loading').style.display = 'none';\n      return;\n    }\n    \n    const container = document.getElementById('cardsContainer');\n    data.cards.forEach(card => {\n      const col = document.createElement('div');\n      col.className = 'col-md-4 col-lg-3 mb-4';\n      col.innerHTML = `\n        <div class='card h-100'>\n          <div class='card-body'>\n            <h5 class='card-title'>${card.title}</h5>\n            <p class='card-text'>${card.description}</p>\n            <button class='btn btn-primary btn-sm'>Details</button>\n          </div>\n        </div>\n      `;\n      container.appendChild(col);\n    });\n    \n    page++;\n    loading = false;\n    document.getElementById('loading').style.display = 'none';\n  }\n  \n  // Intersection Observer for infinite scroll\n  const observer = new IntersectionObserver((entries) => {\n    if (entries[0].isIntersecting) {\n      loadMoreCards();\n    }\n  }, { threshold: 0.1 });\n  \n  const sentinel = document.createElement('div');\n  sentinel.id = 'sentinel';\n  document.querySelector('.container').appendChild(sentinel);\n  observer.observe(sentinel);\n  \n  // Initial load\n  loadMoreCards();\n</script>",
      output: "New cards load automatically as user scrolls down using Bootstrap grid",
      note: "Use h-100 on cards for equal height in grid rows"
    },
    {
      question: "How do you load modal content dynamically with Bootstrap?",
      answer: "Fetch content on demand and populate modal body before showing it. Use Bootstrap's JavaScript API for controlling modals.",
      example: "<button class='btn btn-primary' id='openModalBtn'>Open Details</button>\n<div class='modal fade' id='detailsModal'>\n  <div class='modal-dialog'>\n    <div class='modal-content'>\n      <div class='modal-header'>\n        <h5 class='modal-title'>Details</h5>\n        <button class='btn-close' data-bs-dismiss='modal'></button>\n      </div>\n      <div class='modal-body'>Loading...</div>\n    </div>\n  </div>\n</div>\n<script>\n  document.getElementById('openModalBtn').addEventListener('click', async () => {\n    const modalEl = document.getElementById('detailsModal');\n    const modalBody = modalEl.querySelector('.modal-body');\n    const response = await fetch('/api/details');\n    modalBody.innerHTML = await response.text();\n    new bootstrap.Modal(modalEl).show();\n  });\n</script>",
      output: "Modal opens with dynamically loaded content from the server",
      note: "Load heavy content only when needed to improve performance"
    },
    {
      question: "How do you create a sticky sidebar or header with Bootstrap?",
      answer: "Use sticky positioning utilities like .sticky-top and .position-sticky inside a scrollable container.",
      example: "<div class='row'>\n  <div class='col-md-3'>\n    <div class='position-sticky top-0'>\n      <div class='card p-3'>Sticky sidebar</div>\n    </div>\n  </div>\n  <div class='col-md-9'>\n    <div class='p-3'>Content scrolls normally</div>\n  </div>\n</div>",
      output: "Sidebar remains visible while page content scrolls",
      note: "Sticky positioning only works when the parent container has enough height"
    },
    {
      question: "How can you combine Bootstrap with CSS Grid?",
      answer: "Use Bootstrap utilities for spacing and components, and CSS Grid for custom layout structure when needed.",
      example: "<div class='container'>\n  <div class='d-grid gap-3' style='grid-template-columns: repeat(3, minmax(0, 1fr));'>\n    <div class='p-3 bg-light border'>Grid item 1</div>\n    <div class='p-3 bg-light border'>Grid item 2</div>\n    <div class='p-3 bg-light border'>Grid item 3</div>\n  </div>\n</div>",
      output: "Responsive grid layout with Bootstrap spacing utilities",
      note: "Use CSS Grid for layouts that need more control than Bootstrap's row/column system"
    },
    {
      question: "How do you create split buttons in Bootstrap?",
      answer: "Use .btn-group with a main action button and a dropdown toggle button to create split buttons.",
      example: "<div class='btn-group'>\n  <button class='btn btn-primary'>Save</button>\n  <button class='btn btn-primary dropdown-toggle dropdown-toggle-split' data-bs-toggle='dropdown'></button>\n  <ul class='dropdown-menu'>\n    <li><a class='dropdown-item' href='#'>Save and close</a></li>\n    <li><a class='dropdown-item' href='#'>Save as draft</a></li>\n  </ul>\n</div>",
      output: "Split button with primary action and dropdown options",
      note: "Use dropdown-toggle-split for the separated toggle appearance"
    },
    {
      question: "How do you use Bootstrap navs and tabs for multi-section content?",
      answer: "Use .nav and .nav-tabs for tab headers, with .tab-content and .tab-pane for tab panels.",
      example: "<ul class='nav nav-tabs' role='tablist'>\n  <li class='nav-item'><button class='nav-link active' data-bs-toggle='tab' data-bs-target='#tab1'>Tab 1</button></li>\n  <li class='nav-item'><button class='nav-link' data-bs-toggle='tab' data-bs-target='#tab2'>Tab 2</button></li>\n</ul>\n<div class='tab-content p-3 border border-top-0'>\n  <div class='tab-pane fade show active' id='tab1'>Content for tab 1</div>\n  <div class='tab-pane fade' id='tab2'>Content for tab 2</div>\n</div>",
      output: "Tabbed interface with switchable sections",
      note: "Tabs are activated via data-bs-toggle='tab' or JavaScript"
    },
    {
      question: "How do you implement nested dropdowns in Bootstrap?",
      answer: "Bootstrap 5 doesn't support nested dropdowns out of the box, so use custom CSS and JavaScript for proper behavior.",
      example: "<div class='dropdown'>\n  <button class='btn btn-secondary dropdown-toggle' data-bs-toggle='dropdown'>Menu</button>\n  <ul class='dropdown-menu'>\n    <li><a class='dropdown-item' href='#'>Action</a></li>\n    <li class='dropend'>\n      <a class='dropdown-item dropdown-toggle' data-bs-toggle='dropdown' href='#'>More</a>\n      <ul class='dropdown-menu'>\n        <li><a class='dropdown-item' href='#'>Sub action</a></li>\n      </ul>\n    </li>\n  </ul>\n</div>",
      output: "Dropdown menu with nested submenu",
      note: "Use dropend/dropstart classes for nested dropdown direction"
    },
    {
      question: "How do you build a responsive pricing table with Bootstrap cards?",
      answer: "Use Bootstrap grid and cards to create equal-height pricing columns that stack on smaller screens.",
      example: "<div class='row gy-4'>\n  <div class='col-md-4'>\n    <div class='card h-100'>\n      <div class='card-body'>\n        <h5 class='card-title'>Basic</h5>\n        <p class='card-text'>Simple plan</p>\n      </div>\n    </div>\n  </div>\n  <div class='col-md-4'>\n    <div class='card h-100 border-primary'>\n      <div class='card-body'>\n        <h5 class='card-title'>Pro</h5>\n        <p class='card-text'>Most popular</p>\n      </div>\n    </div>\n  </div>\n  <div class='col-md-4'>\n    <div class='card h-100'>\n      <div class='card-body'>\n        <h5 class='card-title'>Enterprise</h5>\n        <p class='card-text'>Advanced plan</p>\n      </div>\n    </div>\n  </div>\n</div>",
      output: "Responsive pricing cards that remain equal height",
      note: "Use h-100 on cards to make them stretch inside row columns"
    },
    {
      question: "How do you create accessible modals with Bootstrap?",
      answer: "Bootstrap's modal component handles focus trapping and ARIA attributes automatically when initialized correctly.",
      example: "<button class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#accessModal'>Open</button>\n<div class='modal fade' id='accessModal' tabindex='-1' aria-labelledby='accessModalLabel' aria-hidden='true'>\n  <div class='modal-dialog'>\n    <div class='modal-content'>\n      <div class='modal-header'>\n        <h5 class='modal-title' id='accessModalLabel'>Accessible Modal</h5>\n        <button class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>\n      </div>\n      <div class='modal-body'>Focusable content</div>\n    </div>\n  </div>\n</div>",
      output: "Modal with proper ARIA labeling and keyboard focus handling",
      note: "Keep tabindex='-1' and aria attributes for accessibility"
    },
    {
      question: "How can you use Bootstrap's utility API to create custom responsive spacing?",
      answer: "Extend Bootstrap's $utilities map in Sass with new spacing classes and compile them into CSS.",
      example: "// custom-spacing.scss\n$utilities: map-merge($utilities, (\n  'gap': (\n    property: gap,\n    class: gap,\n    values: (\n      1: .25rem,\n      2: .5rem,\n      3: 1rem,\n      4: 1.5rem,\n      5: 3rem\n    )\n  )\n));\n@import 'bootstrap/scss/bootstrap';\n\n<div class='d-flex gap-3'>\n  <div class='p-3 bg-light'>A</div>\n  <div class='p-3 bg-light'>B</div>\n</div>",
      output: "New gap utilities available for responsive layouts",
      note: "Utility API generates responsive and breakpoint variants automatically"
    },
    {
      question: "How do you integrate Bootstrap with Vue.js?",
      answer: "Use Bootstrap classes in Vue templates or install a Vue-specific library like bootstrap-vue or @vue-bootstrap.",
      example: "<template>\n  <div class='container mt-4'>\n    <button class='btn btn-primary' @click='show = !show'>Toggle</button>\n    <div v-if='show' class='alert alert-success mt-3'>Visible alert</div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return { show: false };\n  }\n};\n</script>",
      output: "Vue component using Bootstrap classes with reactive state",
      note: "Bootstrap CSS can be imported globally while Vue handles component logic"
    },
    {
      question: "How do you implement Bootstrap toasts in a dynamic notification system?",
      answer: "Create toast elements on demand, append them to a toast container, and call bootstrap.Toast for each instance.",
      example: "<div class='toast-container position-fixed bottom-0 end-0 p-3' id='toastContainer'></div>\n<script>\n  function showToast(message) {\n    const container = document.getElementById('toastContainer');\n    const toastEl = document.createElement('div');\n    toastEl.className = 'toast align-items-center text-bg-primary border-0';\n    toastEl.role = 'alert';\n    toastEl.innerHTML = `\n      <div class='d-flex'>\n        <div class='toast-body'>${message}</div>\n        <button type='button' class='btn-close btn-close-white me-2 m-auto' data-bs-dismiss='toast'></button>\n      </div>`;\n    container.appendChild(toastEl);\n    const toast = new bootstrap.Toast(toastEl, { delay: 2500 });\n    toast.show();\n  }\n  showToast('New message received');\n</script>",
      output: "Toast appears and disappears automatically for notifications",
      note: "Use a toast container to stack multiple notifications"
    },
    {
      question: "How do you build a responsive offcanvas navigation menu?",
      answer: "Use Bootstrap's offcanvas component for mobile navigation and regular navbar markup for desktop fallback.",
      example: "<button class='btn btn-primary' data-bs-toggle='offcanvas' data-bs-target='#navOffcanvas'>Menu</button>\n<div class='offcanvas offcanvas-start' id='navOffcanvas'>\n  <div class='offcanvas-header'>\n    <h5 class='offcanvas-title'>Navigation</h5>\n    <button class='btn-close' data-bs-dismiss='offcanvas'></button>\n  </div>\n  <div class='offcanvas-body'>\n    <ul class='nav flex-column'>\n      <li class='nav-item'><a class='nav-link' href='#'>Home</a></li>\n      <li class='nav-item'><a class='nav-link' href='#'>Services</a></li>\n    </ul>\n  </div>\n</div>",
      output: "Slide-in mobile menu with standard navigation links",
      note: "Offcanvas is ideal for hidden navigation panels on small screens"
    },
    {
      question: "How do you implement a sticky header using Bootstrap utilities?",
      answer: "Apply .sticky-top to a header element so it stays fixed at the top of the viewport while scrolling.",
      example: "<header class='sticky-top bg-white shadow-sm'>\n  <nav class='navbar navbar-expand-lg'>\n    <div class='container'>\n      <a class='navbar-brand' href='#'>Sticky Header</a>\n    </div>\n  </nav>\n</header>",
      output: "Header remains visible at top during page scroll",
      note: "Add z-index or background to prevent content overlap"
    },
    {
      question: "How do you use Bootstrap's responsive utilities for show/hide behavior?",
      answer: "Use display utilities with breakpoint modifiers such as d-none d-md-block to control visibility on different screen sizes.",
      example: "<div class='d-none d-sm-block'>Visible on small screens and up</div>\n<div class='d-block d-sm-none'>Visible only on extra-small screens</div>",
      output: "Elements appear or disappear based on viewport size",
      note: "Combine d- utilities with breakpoints for precise control"
    },
    {
      question: "How do you style Bootstrap forms with custom validation feedback?",
      answer: "Use .is-valid/.is-invalid classes on form controls and add .valid-feedback/.invalid-feedback messages.",
      example: "<form class='needs-validation' novalidate>\n  <div class='mb-3'>\n    <label class='form-label'>Email</label>\n    <input type='email' class='form-control is-invalid' required>\n    <div class='invalid-feedback'>Please enter a valid email.</div>\n  </div>\n  <button class='btn btn-primary' type='submit'>Submit</button>\n</form>",
      output: "Form fields display green or red validation state with messages",
      note: "Use JavaScript to toggle .is-valid/.is-invalid after validation"
    },
    {
      question: "How do you create a responsive image gallery with Bootstrap?",
      answer: "Use Bootstrap row/col classes and .img-fluid for images that resize within the grid.",
      example: "<div class='row g-3'>\n  <div class='col-6 col-md-4'>\n    <img src='image1.jpg' class='img-fluid rounded' alt='Gallery image'>\n  </div>\n  <div class='col-6 col-md-4'>\n    <img src='image2.jpg' class='img-fluid rounded' alt='Gallery image'>\n  </div>\n  <div class='col-6 col-md-4'>\n    <img src='image3.jpg' class='img-fluid rounded' alt='Gallery image'>\n  </div>\n</div>",
      output: "Responsive gallery where images scale and wrap on smaller screens",
      note: "Use gap utilities like g-3 for consistent spacing"
    },
    {
      question: "How do you add custom spacing between Bootstrap components?",
      answer: "Use spacing utilities such as mb-4, px-3, py-2, and gap-* to control margins, padding, and gaps.",
      example: "<div class='mb-4 p-3 bg-light'>Section 1</div>\n<div class='mb-4 p-3 bg-light'>Section 2</div>\n<div class='d-flex gap-2'>\n  <button class='btn btn-primary'>One</button>\n  <button class='btn btn-secondary'>Two</button>\n</div>",
      output: "Components spaced consistently with utility classes",
      note: "Spacing utilities are responsive when combined with breakpoint modifiers"
    },
    {
      question: "How do you use Bootstrap's dropdown placement options?",
      answer: "Use classes like dropstart, dropend, dropup, and dropstart to control where the dropdown menu appears relative to the toggle.",
      example: "<div class='btn-group dropup'>\n  <button class='btn btn-secondary dropdown-toggle' data-bs-toggle='dropdown'>Dropup</button>\n  <ul class='dropdown-menu'>\n    <li><a class='dropdown-item' href='#'>Action</a></li>\n  </ul>\n</div>",
      output: "Dropdown menu appears above, below, or beside the toggle button",
      note: "Placement classes help avoid overflow in constrained layouts"
    },
    {
      question: "How can you use Bootstrap tooltips with custom trigger options?",
      answer: "Initialize tooltips in JavaScript and set options like trigger, placement, and delay.",
      example: "<button id='tooltipBtn' class='btn btn-secondary'>Hover me</button>\n<script>\n  const tooltip = new bootstrap.Tooltip(document.getElementById('tooltipBtn'), {\n    trigger: 'hover focus',\n    placement: 'right',\n    delay: { show: 200, hide: 100 }\n  });\n</script>",
      output: "Tooltip appears on hover and focus with custom placement and delay",
      note: "Use manual initialization for dynamic content or custom options"
    },
    {
      question: "How do you create responsive tables with sticky headers?",
      answer: "Wrap the table in .table-responsive and add .sticky-top to the header row or th cells.",
      example: "<div class='table-responsive' style='max-height: 300px;'>\n  <table class='table'>\n    <thead class='table-light'>\n      <tr>\n        <th class='sticky-top bg-white'>Name</th>\n        <th class='sticky-top bg-white'>Email</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td>John</td><td>john@example.com</td></tr>\n      <tr><td>Jane</td><td>jane@example.com</td></tr>\n    </tbody>\n  </table>\n</div>",
      output: "Scrollable table body with sticky header row",
      note: "Use background on sticky headers to prevent transparency issues"
    },
    {
      question: "How do you use Bootstrap's card groups and decks for consistent heights?",
      answer: "Use .card-group or .row with equal-height cards and utility classes like h-100.",
      example: "<div class='row g-3'>\n  <div class='col-md-4'>\n    <div class='card h-100'>\n      <div class='card-body'>Card 1</div>\n    </div>\n  </div>\n  <div class='col-md-4'>\n    <div class='card h-100'>\n      <div class='card-body'>Card 2 with longer content</div>\n    </div>\n  </div>\n  <div class='col-md-4'>\n    <div class='card h-100'>\n      <div class='card-body'>Card 3</div>\n    </div>\n  </div>\n</div>",
      output: "Cards keep equal height across a row",
      note: "Use h-100 on cards and align-self-stretch if needed"
    },
    {
      question: "How do you implement a mobile-first navbar with Bootstrap?",
      answer: "Use navbar-expand-* classes to define when the navbar should expand and include a toggler for collapsed mobile view.",
      example: "<nav class='navbar navbar-expand-md navbar-light bg-light'>\n  <div class='container-fluid'>\n    <a class='navbar-brand' href='#'>Brand</a>\n    <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>\n      <span class='navbar-toggler-icon'></span>\n    </button>\n    <div class='collapse navbar-collapse' id='navbarNav'>\n      <ul class='navbar-nav ms-auto'>\n        <li class='nav-item'><a class='nav-link' href='#'>Home</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>",
      output: "Navbar collapses on small screens and expands on larger screens",
      note: "Choose breakpoints based on when navigation should switch layout"
    },
    {
      question: "How do you combine Bootstrap utilities with CSS variables for theming?",
      answer: "Override Bootstrap CSS variables in :root or theme selector and use utility classes for layout and spacing.",
      example: "<style>\n  :root {\n    --bs-primary: #6610f2;\n    --bs-body-bg: #f8f9fa;\n  }\n</style>\n<div class='bg-body text-primary p-4'>Themed background and text</div>",
      output: "Bootstrap components adapt to custom theme colors at runtime",
      note: "CSS variables make it easy to switch themes without recompiling Sass"
    },
    {
      question: "How do you use Bootstrap's responsive display utilities with breakpoints?",
      answer: "Combine d-* classes with breakpoint modifiers such as d-sm-none, d-md-flex, d-lg-block.",
      example: "<div class='d-none d-sm-block'>Visible from small screens</div>\n<div class='d-flex d-md-none'>Visible only on mobile</div>",
      output: "Elements show or hide at specific breakpoints",
      note: "Responsive display utilities are useful for adaptive layouts"
    },
    {
      question: "How do you create a search bar inside a Bootstrap navbar?",
      answer: "Use form controls inside the navbar with .d-flex and spacing utilities.",
      example: "<nav class='navbar navbar-light bg-light'>\n  <div class='container-fluid'>\n    <a class='navbar-brand' href='#'>Logo</a>\n    <form class='d-flex'>\n      <input class='form-control me-2' type='search' placeholder='Search'>\n      <button class='btn btn-outline-success' type='submit'>Search</button>\n    </form>\n  </div>\n</nav>",
      output: "Search form integrated into the navigation bar",
      note: "Use me-2 for spacing between input and button"
    },
    {
      question: "How do you implement floating labels with validation states?",
      answer: "Use .form-floating containers and apply .is-valid or .is-invalid to the form controls.",
      example: "<div class='form-floating mb-3'>\n  <input type='text' class='form-control is-valid' id='name' placeholder='Name'>\n  <label for='name'>Name</label>\n  <div class='valid-feedback'>Looks good!</div>\n</div>\n<div class='form-floating'>\n  <input type='email' class='form-control is-invalid' id='email' placeholder='Email'>\n  <label for='email'>Email</label>\n  <div class='invalid-feedback'>Please enter a valid email.</div>\n</div>",
      output: "Floating labels with green/red validation feedback",
      note: "Place placeholder text for floating labels even if it's not visible"
    },
    {
      question: "How do you create a carousel with captions and controls in Bootstrap?",
      answer: "Use .carousel-inner with .carousel-item and add .carousel-caption for overlay text.",
      example: "<div id='carouselExample' class='carousel slide' data-bs-ride='carousel'>\n  <div class='carousel-inner'>\n    <div class='carousel-item active'>\n      <img src='slide1.jpg' class='d-block w-100'>\n      <div class='carousel-caption d-none d-md-block'>\n        <h5>First slide</h5>\n      </div>\n    </div>\n    <div class='carousel-item'>\n      <img src='slide2.jpg' class='d-block w-100'>\n      <div class='carousel-caption d-none d-md-block'>\n        <h5>Second slide</h5>\n      </div>\n    </div>\n  </div>\n  <button class='carousel-control-prev' type='button' data-bs-target='#carouselExample' data-bs-slide='prev'>\n    <span class='carousel-control-prev-icon'></span>\n  </button>\n  <button class='carousel-control-next' type='button' data-bs-target='#carouselExample' data-bs-slide='next'>\n    <span class='carousel-control-next-icon'></span>\n  </button>\n</div>",
      output: "Image carousel with overlay captions and navigation controls",
      note: "Use d-none d-md-block to hide captions on small screens"
    },
    {
      question: "How do you implement a dark theme toggle with Bootstrap 5?",
      answer: "Toggle the data-bs-theme attribute on the html element and store the preference in localStorage.",
      example: "<button class='btn btn-outline-dark' id='themeToggle'>Toggle Theme</button>\n<script>\n  const btn = document.getElementById('themeToggle');\n  const setTheme = theme => document.documentElement.setAttribute('data-bs-theme', theme);\n  btn.addEventListener('click', () => {\n    const theme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';\n    setTheme(theme);\n    localStorage.setItem('theme', theme);\n  });\n  const saved = localStorage.getItem('theme');\n  if (saved) setTheme(saved);\n</script>",
      output: "Page theme toggles between light and dark without reload",
      note: "Bootstrap 5.3+ supports theme switching via data-bs-theme"
    },
    {
      question: "How do you optimize Bootstrap loading with defer or preload?",
      answer: "Preload the stylesheet and defer non-critical CSS or use critical CSS inline, then load full CSS asynchronously.",
      example: "<link rel='preload' href='bootstrap.min.css' as='style' onload=\"this.rel='stylesheet'\">\n<noscript><link rel='stylesheet' href='bootstrap.min.css'></noscript>",
      output: "Bootstrap CSS loads faster without blocking page rendering",
      note: "Use preload for above-the-fold assets and noscript fallback for older browsers"
    },
    {
      question: "How do you build a multi-column dashboard layout with Bootstrap?",
      answer: "Use Bootstrap's grid and card components to create responsive dashboard columns and widgets.",
      example: "<div class='container-fluid'>\n  <div class='row g-4'>\n    <div class='col-xl-3 col-md-6'>\n      <div class='card p-3'>Widget 1</div>\n    </div>\n    <div class='col-xl-3 col-md-6'>\n      <div class='card p-3'>Widget 2</div>\n    </div>\n    <div class='col-xl-3 col-md-6'>\n      <div class='card p-3'>Widget 3</div>\n    </div>\n    <div class='col-xl-3 col-md-6'>\n      <div class='card p-3'>Widget 4</div>\n    </div>\n  </div>\n</div>",
      output: "Responsive dashboard with cards arranged in multiple columns",
      note: "Use row and column classes with gap utilities for consistent spacing"
    }
  ]
};

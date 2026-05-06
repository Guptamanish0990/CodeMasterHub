// /data/bootstrap/questions.js

export const questions = [
  // ========== GRID SYSTEM (1-10) ==========
  {
    line: "col-md-4",
    explanation: "Column takes 4/12 (33.33%) of width on medium screens (≥768px) and above. On smaller screens, it stacks vertically.",
    example: "<div class='row'>\n  <div class='col-md-4'>Column 1</div>\n  <div class='col-md-4'>Column 2</div>\n  <div class='col-md-4'>Column 3</div>\n</div>",
    output: "Three equal columns on tablet/desktop, stacked on mobile"
  },
  {
    line: "col-sm-6 col-lg-4",
    explanation: "Column uses 6/12 (50%) on small screens (≥576px) and 4/12 (33.33%) on large screens (≥992px).",
    example: "<div class='col-sm-6 col-lg-4'>Responsive column</div>",
    output: "Shows 2 columns on tablet, 3 columns on desktop"
  },
  {
    line: "container-fluid",
    explanation: "Creates a full-width container that spans the entire viewport width without any margins.",
    example: "<div class='container-fluid bg-primary text-white p-3'>Full width content</div>",
    output: "Container touches both edges of the screen"
  },
  {
    line: "row-cols-md-3",
    explanation: "Automatically creates 3 columns per row on medium screens without needing individual col classes.",
    example: "<div class='row row-cols-1 row-cols-md-3 g-4'>\n  <div class='col'>Card 1</div>\n  <div class='col'>Card 2</div>\n  <div class='col'>Card 3</div>\n</div>",
    output: "1 column on mobile, 3 columns on tablet/desktop"
  },
  {
    line: "col-auto",
    explanation: "Column takes only as much width as its content needs, not filling remaining space.",
    example: "<div class='row'>\n  <div class='col-auto'>Auto width</div>\n  <div class='col'>Fills rest</div>\n</div>",
    output: "First column fits content, second fills remaining space"
  },
  {
    line: "offset-md-3",
    explanation: "Adds left margin to column, pushing it right by specified number of columns.",
    example: "<div class='row'>\n  <div class='col-md-6 offset-md-3'>Centered column</div>\n</div>",
    output: "Column centered on medium screens (3 column offset each side)"
  },
  {
    line: "order-lg-2",
    explanation: "Changes visual order of columns at specific breakpoints without changing HTML structure.",
    example: "<div class='row'>\n  <div class='col order-lg-2'>Second visually</div>\n  <div class='col order-lg-1'>First visually</div>\n</div>",
    output: "Columns reorder on large screens based on order classes"
  },
  {
    line: "g-4",
    explanation: "Sets gutter (gap) width between columns. Values range from 0-5 (0rem to 3rem).",
    example: "<div class='row g-4'>\n  <div class='col-md-6'>Item 1</div>\n  <div class='col-md-6'>Item 2</div>\n</div>",
    output: "Columns have 1.5rem gap between them (gutter)"
  },
  {
    line: "col-xl-3 col-xxl-2",
    explanation: "Column width adapts at multiple breakpoints: 3/12 on XL screens, 2/12 on XXL screens.",
    example: "<div class='col-xl-3 col-xxl-2'>Adaptive column</div>",
    output: "Width changes progressively at each breakpoint"
  },
  {
    line: "align-items-center",
    explanation: "Vertically centers all columns within a row using flexbox alignment.",
    example: "<div class='row align-items-center' style='height: 200px;'>\n  <div class='col'>Centered vertically</div>\n</div>",
    output: "Content vertically centered in the row"
  },

  // ========== BUTTONS & BUTTON GROUPS (11-18) ==========
  {
    line: "btn btn-primary",
    explanation: "Creates a primary action button with blue background and white text.",
    example: "<button class='btn btn-primary'>Primary Button</button>",
    output: "Blue button with white text, rounded corners, and hover effect"
  },
  {
    line: "btn btn-outline-danger",
    explanation: "Creates an outlined button with red border and text, transparent background.",
    example: "<button class='btn btn-outline-danger'>Delete</button>",
    output: "Red outlined button that fills with red on hover"
  },
  {
    line: "btn-lg",
    explanation: "Makes a button larger than default size. Options: btn-lg (large), btn-sm (small).",
    example: "<button class='btn btn-primary btn-lg'>Large Button</button>\n<button class='btn btn-primary btn-sm'>Small Button</button>",
    output: "Button with increased padding and font size"
  },
  {
    line: "btn-group",
    explanation: "Groups multiple buttons together without gaps, creating a toolbar appearance.",
    example: "<div class='btn-group' role='group'>\n  <button class='btn btn-primary'>Left</button>\n  <button class='btn btn-primary'>Middle</button>\n  <button class='btn btn-primary'>Right</button>\n</div>",
    output: "Buttons attached together with no spacing"
  },
  {
    line: "btn-group-vertical",
    explanation: "Stacks buttons vertically instead of horizontally in a group.",
    example: "<div class='btn-group-vertical'>\n  <button class='btn btn-primary'>Top</button>\n  <button class='btn btn-primary'>Middle</button>\n  <button class='btn btn-primary'>Bottom</button>\n</div>",
    output: "Buttons stacked vertically with proper spacing"
  },
  {
    line: "btn-toolbar",
    explanation: "Groups multiple button groups together into a toolbar.",
    example: "<div class='btn-toolbar'>\n  <div class='btn-group me-2'>...</div>\n  <div class='btn-group'>...</div>\n</div>",
    output: "Multiple button groups in a single toolbar"
  },
  {
    line: "disabled",
    explanation: "Makes button non-interactive and visually appears faded.",
    example: "<button class='btn btn-primary' disabled>Disabled Button</button>",
    output: "Button appears faded and cannot be clicked"
  },
  {
    line: "active",
    explanation: "Shows button in pressed/active state visually without being disabled.",
    example: "<button class='btn btn-primary active'>Active Button</button>",
    output: "Button appears pressed/darker than normal state"
  },

  // ========== FORMS & INPUTS (19-25) ==========
  {
    line: "form-control",
    explanation: "Styles input, textarea, and select elements with consistent height, padding, and border.",
    example: "<input type='text' class='form-control' placeholder='Enter text'>",
    output: "Input with rounded corners, proper padding, and focus ring"
  },
  {
    line: "form-label",
    explanation: "Styles form labels with proper spacing and font weight.",
    example: "<label class='form-label'>Email Address</label>\n<input type='email' class='form-control'>",
    output: "Label with proper margin below and appropriate font size"
  },
  {
    line: "form-select",
    explanation: "Styles select dropdown menus with custom arrow and consistent appearance.",
    example: "<select class='form-select'>\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>",
    output: "Styled dropdown with custom arrow and proper padding"
  },
  {
    line: "form-check-input",
    explanation: "Styles checkboxes and radio buttons with consistent size and appearance.",
    example: "<div class='form-check'>\n  <input class='form-check-input' type='checkbox'>\n  <label class='form-check-label'>Check me</label>\n</div>",
    output: "Properly styled checkbox with adjacent label"
  },
  {
    line: "input-group",
    explanation: "Attaches add-ons (text, buttons) to the beginning or end of inputs.",
    example: "<div class='input-group'>\n  <span class='input-group-text'>$</span>\n  <input type='text' class='form-control'>\n</div>",
    output: "Input with dollar sign prefix inside the input border"
  },
  {
    line: "input-group-text",
    explanation: "Styling for text add-ons placed before or after form controls.",
    example: "<span class='input-group-text'>@</span>",
    output: "Text with gray background, border, and proper padding"
  },
  {
    line: "form-floating",
    explanation: "Creates floating labels that animate up when input is focused or has value.",
    example: "<div class='form-floating'>\n  <input type='email' class='form-control' id='email' placeholder='name@example.com'>\n  <label for='email'>Email address</label>\n</div>",
    output: "Label floats above input when focused or filled"
  },

  // ========== CARDS (26-30) ==========
  {
    line: "card",
    explanation: "Container for flexible content with borders, padding, and background styling.",
    example: "<div class='card'>\n  <div class='card-body'>\n    <h5 class='card-title'>Title</h5>\n    <p class='card-text'>Content</p>\n  </div>\n</div>",
    output: "Styled container with border, rounded corners, and shadow"
  },
  {
    line: "card-img-top",
    explanation: "Places an image at the top of a card with proper rounded corners.",
    example: "<div class='card'>\n  <img src='image.jpg' class='card-img-top' alt='Card image'>\n  <div class='card-body'>...</div>\n</div>",
    output: "Image with rounded top corners matching card border"
  },
  {
    line: "card-header",
    explanation: "Creates a distinct header section at the top of a card.",
    example: "<div class='card'>\n  <div class='card-header'>Featured</div>\n  <div class='card-body'>...</div>\n</div>",
    output: "Card with styled header section separated by border"
  },
  {
    line: "card-footer",
    explanation: "Creates a footer section at the bottom of a card.",
    example: "<div class='card'>\n  <div class='card-body'>...</div>\n  <div class='card-footer text-muted'>2 days ago</div>\n</div>",
    output: "Card with styled footer section for metadata"
  },
  {
    line: "h-100",
    explanation: "Sets height to 100% of parent container, useful for equal height cards.",
    example: "<div class='row'>\n  <div class='col-md-4'><div class='card h-100'>...</div></div>\n</div>",
    output: "All cards in the same row have equal height"
  },

  // ========== NAVIGATION & NAVBAR (31-38) ==========
  {
    line: "navbar navbar-expand-lg",
    explanation: "Creates responsive navbar that expands on large screens and collapses on mobile.",
    example: "<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>\n  <a class='navbar-brand' href='#'>Brand</a>\n  <button class='navbar-toggler' data-bs-toggle='collapse'>...</button>\n</nav>",
    output: "Navbar with hamburger menu on mobile, inline on desktop"
  },
  {
    line: "navbar-toggler",
    explanation: "Hamburger menu button that appears on small screens to toggle navbar collapse.",
    example: "<button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>\n  <span class='navbar-toggler-icon'></span>\n</button>",
    output: "Hamburger icon button for mobile navigation"
  },
  {
    line: "collapse navbar-collapse",
    explanation: "Wraps navbar content that collapses/hides on small screens.",
    example: "<div class='collapse navbar-collapse' id='navbarNav'>\n  <ul class='navbar-nav'>...</ul>\n</div>",
    output: "Content hides behind hamburger menu on mobile"
  },
  {
    line: "nav-tabs",
    explanation: "Creates tabbed navigation with active state underline.",
    example: "<ul class='nav nav-tabs'>\n  <li class='nav-item'><a class='nav-link active' href='#'>Active</a></li>\n  <li class='nav-item'><a class='nav-link' href='#'>Link</a></li>\n</ul>",
    output: "Horizontal tabs with active indicator at bottom"
  },
  {
    line: "nav-pills",
    explanation: "Creates pill-style navigation with rounded active background.",
    example: "<ul class='nav nav-pills'>\n  <li class='nav-item'><a class='nav-link active' href='#'>Active</a></li>\n  <li class='nav-item'><a class='nav-link' href='#'>Link</a></li>\n</ul>",
    output: "Navigation pills with filled active background"
  },
  {
    line: "breadcrumb",
    explanation: "Indicates current page location within hierarchical navigation.",
    example: "<nav aria-label='breadcrumb'>\n  <ol class='breadcrumb'>\n    <li class='breadcrumb-item'><a href='#'>Home</a></li>\n    <li class='breadcrumb-item active'>Current</li>\n  </ol>\n</nav>",
    output: "Hierarchical trail showing navigation path"
  },
  {
    line: "pagination",
    explanation: "Creates pagination navigation with previous/next and page number links.",
    example: "<nav aria-label='Page navigation'>\n  <ul class='pagination'>\n    <li class='page-item'><a class='page-link' href='#'>Previous</a></li>\n    <li class='page-item active'><a class='page-link' href='#'>1</a></li>\n    <li class='page-item'><a class='page-link' href='#'>Next</a></li>\n  </ul>\n</nav>",
    output: "Styled pagination with active page highlighting"
  },
  {
    line: "dropdown-menu",
    explanation: "Container for dropdown items that appears when dropdown toggle is clicked.",
    example: "<div class='dropdown'>\n  <button class='btn dropdown-toggle' data-bs-toggle='dropdown'>Dropdown</button>\n  <ul class='dropdown-menu'>\n    <li><a class='dropdown-item' href='#'>Action</a></li>\n  </ul>\n</div>",
    output: "Hidden menu that appears below button when clicked"
  },

  // ========== MODALS & ALERTS (39-45) ==========
  {
    line: "modal fade",
    explanation: "Creates a modal dialog that fades in and appears over the page.",
    example: "<div class='modal fade' id='myModal'>\n  <div class='modal-dialog'>\n    <div class='modal-content'>...</div>\n  </div>\n</div>",
    output: "Hidden modal that appears with fade animation when triggered"
  },
  {
    line: "modal-dialog-centered",
    explanation: "Vertically centers the modal in the viewport.",
    example: "<div class='modal-dialog modal-dialog-centered'>\n  <div class='modal-content'>...</div>\n</div>",
    output: "Modal appears centered vertically on screen"
  },
  {
    line: "data-bs-dismiss='modal'",
    explanation: "Closes a modal when the element is clicked.",
    example: "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>",
    output: "Modal closes when close button is clicked"
  },
  {
    line: "alert alert-dismissible fade show",
    explanation: "Creates an alert that can be dismissed by user with close button.",
    example: "<div class='alert alert-warning alert-dismissible fade show'>\n  Warning message!\n  <button type='button' class='btn-close' data-bs-dismiss='alert'></button>\n</div>",
    output: "Alert with close button that removes alert when clicked"
  },
  {
    line: "badge",
    explanation: "Creates small count or status indicators that can be attached to buttons or text.",
    example: "<button class='btn btn-primary'>\n  Notifications <span class='badge bg-secondary'>4</span>\n</button>\n<h1>Heading <span class='badge bg-primary'>New</span></h1>",
    output: "Small pill-shaped indicator with count or status"
  },
  {
    line: "progress-bar",
    explanation: "Shows progress of a task or skill level with percentage fill.",
    example: "<div class='progress'>\n  <div class='progress-bar bg-success' style='width: 75%'>75%</div>\n</div>",
    output: "Horizontal progress bar filled to specified percentage"
  },
  {
    line: "spinner-border",
    explanation: "Creates animated loading spinner to indicate processing state.",
    example: "<div class='spinner-border text-primary' role='status'>\n  <span class='visually-hidden'>Loading...</span>\n</div>",
    output: "Animated circular loading indicator"
  },

  // ========== UTILITIES & HELPERS (46-50) ==========
  {
    line: "d-flex justify-content-between",
    explanation: "Creates flex container with space between child elements.",
    example: "<div class='d-flex justify-content-between'>\n  <div>Left</div>\n  <div>Right</div>\n</div>",
    output: "First child on left, last child on right with maximum space between"
  },
  {
    line: "text-truncate",
    explanation: "Truncates long text with ellipsis when it overflows container.",
    example: "<div class='text-truncate' style='width: 200px;'>\n  Very long text that will be truncated with ellipsis\n</div>",
    output: "Text cut off with '...' when longer than container"
  },
  {
    line: "shadow-sm",
    explanation: "Adds small box shadow to element for depth effect.",
    example: "<div class='card shadow-sm'>Card with subtle shadow</div>",
    output: "Element has small, subtle box shadow"
  },
  {
    line: "position-relative",
    explanation: "Sets position relative, enabling absolute positioning of child elements inside.",
    example: "<div class='position-relative'>\n  <div class='position-absolute top-0 end-0'>Top right corner</div>\n</div>",
    output: "Child element positioned absolutely relative to parent"
  },
  {
    line: "visually-hidden",
    explanation: "Hides content visually but keeps it accessible to screen readers.",
    example: "<span class='visually-hidden'>Loading...</span>\n<div class='spinner-border'></div>",
    output: "Text hidden visually but read by screen readers for accessibility"
  }
];

export default questions;
export const problems = {
  fresher: [
    {
      id: 1,
      title: "Replicate a hero section with a heading, description, and a button",
      problem: "Create a responsive hero section with a large heading, descriptive text, and a call-to-action button using Bootstrap.",
      answer: "Use flexbox or grid for layout, large text utilities for heading, and button styling with hover effects.",
      example: `<div class="bg-primary bg-gradient text-white py-5">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <h1 class="display-3 fw-bold mb-4">Welcome to Our Platform</h1>
        <p class="lead mb-4">Build amazing websites with Bootstrap - the most popular CSS framework that speeds up development</p>
        <button class="btn btn-light btn-lg px-5 py-3 fw-semibold shadow-sm">Get Started</button>
      </div>
    </div>
  </div>
</div>`,
      output: "Hero section with gradient background, centered content, responsive text, and interactive button",
      note: "Use display-* classes for large headings, lead class for descriptive text"
    },
    {
      id: 2,
      title: "Create a responsive pricing table with three columns",
      problem: "Design a pricing table that shows three pricing plans side by side on desktop and stacks vertically on mobile using Bootstrap grid.",
      answer: "Use Bootstrap's grid system with row-cols-1 row-cols-md-3 for responsive columns, cards for pricing plans.",
      example: `<div class="container py-5">
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100 text-center shadow-sm">
        <div class="card-header bg-primary text-white py-3">
          <h3 class="mb-0">Basic</h3>
        </div>
        <div class="card-body">
          <h2 class="display-4">$19</h2>
          <p class="text-muted">per month</p>
          <hr>
          <ul class="list-unstyled">
            <li class="mb-2">✓ 5 Projects</li>
            <li class="mb-2">✓ 10GB Storage</li>
            <li class="mb-2">✓ Basic Support</li>
            <li class="text-muted">✗ Advanced Analytics</li>
          </ul>
          <button class="btn btn-outline-primary btn-lg w-100 mt-3">Get Started</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100 text-center border-primary shadow">
        <div class="card-header bg-primary text-white py-3">
          <h3 class="mb-0">Pro</h3>
          <span class="badge bg-warning text-dark mt-2">Popular</span>
        </div>
        <div class="card-body">
          <h2 class="display-4">$49</h2>
          <p class="text-muted">per month</p>
          <hr>
          <ul class="list-unstyled">
            <li class="mb-2">✓ Unlimited Projects</li>
            <li class="mb-2">✓ 100GB Storage</li>
            <li class="mb-2">✓ Priority Support</li>
            <li class="mb-2">✓ Advanced Analytics</li>
          </ul>
          <button class="btn btn-primary btn-lg w-100 mt-3">Get Started</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100 text-center shadow-sm">
        <div class="card-header bg-primary text-white py-3">
          <h3 class="mb-0">Enterprise</h3>
        </div>
        <div class="card-body">
          <h2 class="display-4">$99</h2>
          <p class="text-muted">per month</p>
          <hr>
          <ul class="list-unstyled">
            <li class="mb-2">✓ Unlimited Projects</li>
            <li class="mb-2">✓ 500GB Storage</li>
            <li class="mb-2">✓ 24/7 Support</li>
            <li class="mb-2">✓ Custom Analytics</li>
          </ul>
          <button class="btn btn-outline-primary btn-lg w-100 mt-3">Contact Sales</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
      output: "Three pricing cards displayed in a row on desktop, stacked on mobile",
      note: "Use row-cols-1 row-cols-md-3 for automatic responsive columns"
    },
    {
      id: 3,
      title: "Build a responsive navigation bar with dropdown menu",
      problem: "Create a navbar that collapses on mobile and includes a dropdown menu for additional links.",
      answer: "Use navbar-expand-lg for responsive breakpoint, navbar-toggler for mobile menu, and dropdown components.",
      example: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">MyBrand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Web Design</a></li>
            <li><a class="dropdown-item" href="#">Development</a></li>
            <li><a class="dropdown-item" href="#">SEO</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>`,
      output: "Responsive navbar with dropdown that works on mobile and desktop",
      note: "Add sticky-top class to make navbar stick while scrolling"
    },
    {
      id: 4,
      title: "Design a contact form with validation styling",
      problem: "Create a contact form with name, email, subject, and message fields using Bootstrap form components.",
      answer: "Use form-floating for modern floating labels, input groups for icons, and validation classes.",
      example: `<div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6">
      <div class="card shadow">
        <div class="card-header bg-primary text-white text-center py-3">
          <h3 class="mb-0">Contact Us</h3>
        </div>
        <div class="card-body p-4">
          <form>
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control" placeholder="Enter your name" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control" placeholder="name@example.com" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Subject</label>
              <select class="form-select">
                <option selected>General Inquiry</option>
                <option>Technical Support</option>
                <option>Sales</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Message</label>
              <textarea class="form-control" rows="5" placeholder="Your message here..."></textarea>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="newsletter">
              <label class="form-check-label" for="newsletter">Subscribe to newsletter</label>
            </div>
            <button type="submit" class="btn btn-primary w-100 py-2">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`,
      output: "Styled contact form with responsive layout and proper spacing",
      note: "Use form-label, form-control, form-select, form-check classes for consistent styling"
    },
    {
      id: 5,
      title: "Create an alert component with dismissible close button",
      problem: "Build dismissible alerts that disappear when user clicks the close button.",
      answer: "Use alert-dismissible class with btn-close button, Bootstrap JS handles the dismiss functionality.",
      example: `<div class="container mt-4">
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Your message has been sent successfully.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Warning!</strong> Please check your input before submitting.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error!</strong> Something went wrong. Please try again.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <div class="alert alert-info alert-dismissible fade show" role="alert">
    <strong>Info!</strong> New features have been added to your dashboard.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</div>`,
      output: "Alert boxes with close buttons that remove the alert when clicked",
      note: "alert-dismissible and btn-close classes work with Bootstrap JS bundle"
    },
    {
      id: 6,
      title: "Design a testimonial carousel/slider",
      problem: "Create a carousel that displays customer testimonials with navigation controls.",
      answer: "Use Bootstrap Carousel component with indicators, controls, and slide animations.",
      example: `<div class="container py-5">
  <h2 class="text-center mb-4">What Our Customers Say</h2>
  <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="card mx-auto" style="max-width: 600px;">
          <div class="card-body text-center py-5">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" class="rounded-circle mb-3" width="80" height="80">
            <p class="fs-5 fst-italic">"Excellent service! Bootstrap made our development process so much faster."</p>
            <h5 class="mb-0">Sarah Johnson</h5>
            <small class="text-muted">CEO, TechCorp</small>
            <div class="text-warning mt-2">★★★★★</div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card mx-auto" style="max-width: 600px;">
          <div class="card-body text-center py-5">
            <img src="https://randomuser.me/api/portraits/men/2.jpg" class="rounded-circle mb-3" width="80" height="80">
            <p class="fs-5 fst-italic">"The components are well-designed and responsive. Highly recommended!"</p>
            <h5 class="mb-0">Michael Chen</h5>
            <small class="text-muted">Product Manager</small>
            <div class="text-warning mt-2">★★★★★</div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</div>`,
      output: "Auto-rotating testimonial carousel with previous/next controls",
      note: "Add data-bs-ride='carousel' for auto-cycling"
    },
    {
      id: 7,
      title: "Create a progress bar with percentage display",
      problem: "Build progress bars that fill to specific percentages and display values.",
      answer: "Use progress class with progress-bar, set width via inline style, add text inside for percentage.",
      example: `<div class="container py-5">
  <h2 class="text-center mb-4">Skills Progress</h2>
  <div class="mb-4">
    <div class="d-flex justify-content-between mb-2">
      <span>HTML/CSS</span>
      <span>90%</span>
    </div>
    <div class="progress" style="height: 30px;">
      <div class="progress-bar bg-success" style="width:90%">90%</div>
    </div>
  </div>
  <div class="mb-4">
    <div class="d-flex justify-content-between mb-2">
      <span>JavaScript</span>
      <span>75%</span>
    </div>
    <div class="progress" style="height: 30px;">
      <div class="progress-bar bg-info" style="width:75%">75%</div>
    </div>
  </div>
  <div class="mb-4">
    <div class="d-flex justify-content-between mb-2">
      <span>React</span>
      <span>60%</span>
    </div>
    <div class="progress" style="height: 30px;">
      <div class="progress-bar bg-warning" style="width:60%">60%</div>
    </div>
  </div>
  <div class="mt-4">
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" style="width:70%">
        Loading...
      </div>
    </div>
  </div>
</div>`,
      output: "Progress bars showing different skill percentages with colors",
      note: "Use progress-bar-striped and progress-bar-animated for animated striped effect"
    },
    {
      id: 8,
      title: "Design a login form with email and password fields",
      problem: "Create a centered login form with email, password, remember me checkbox, and login button.",
      answer: "Use min-vh-100 with flex utilities for vertical centering, card component for form container.",
      example: `<div class="container min-vh-100 d-flex align-items-center justify-content-center">
  <div class="row justify-content-center w-100">
    <div class="col-md-6 col-lg-4">
      <div class="card shadow-lg">
        <div class="card-header bg-primary text-white text-center py-3">
          <h3 class="mb-0">Login</h3>
        </div>
        <div class="card-body p-4">
          <form>
            <div class="mb-3">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control" placeholder="Enter email">
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" placeholder="Enter password">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="remember">
              <label class="form-check-label" for="remember">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary w-100 py-2 mb-3">Sign In</button>
            <div class="text-center">
              <a href="#" class="text-decoration-none">Forgot password?</a>
              <span class="mx-2">|</span>
              <a href="#" class="text-decoration-none">Create account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`,
      output: "Centered login card with form fields and remember me option",
      note: "Use min-vh-100 with flex utilities for vertical centering"
    },
    {
      id: 9,
      title: "Create a badge notification system",
      problem: "Build notification badges on buttons and icons to show unread counts.",
      answer: "Use position-relative on parent, position-absolute with translate-middle on badge for positioning.",
      example: `<div class="container py-5">
  <div class="row text-center">
    <div class="col-md-4 mb-4">
      <h5>On Buttons</h5>
      <button class="btn btn-primary position-relative">
        Inbox
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
        </span>
      </button>
    </div>
    <div class="col-md-4 mb-4">
      <h5>On Icons</h5>
      <button type="button" class="btn btn-light position-relative">
        🔔
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          5
        </span>
      </button>
    </div>
    <div class="col-md-4 mb-4">
      <h5>On Avatars</h5>
      <div class="position-relative d-inline-block">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" class="rounded-circle" width="50" height="50">
        <span class="position-absolute bottom-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
      </div>
    </div>
  </div>
</div>`,
      output: "Badges positioned on buttons, icons, and avatars showing notification counts",
      note: "Use translate-middle to center badges on corners"
    },
    {
      id: 10,
      title: "Design a product card with image, title, price, and button",
      problem: "Create a product card component that displays product image, name, price, rating, and add to cart button.",
      answer: "Use card component with card-img-top, card-body, and flex utilities for price layout.",
      example: `<div class="container py-5">
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="badge bg-primary position-absolute top-0 end-0 m-3">New</div>
        <img src="https://picsum.photos/300/200?random=1" class="card-img-top" alt="Product">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title mb-0">Wireless Headphones</h5>
            <div class="text-warning">★★★★☆</div>
          </div>
          <p class="card-text text-muted">High-quality wireless headphones with noise cancellation.</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="h4 text-primary mb-0">$79.99</span>
            <del class="text-muted small">$129.99</del>
            <button class="btn btn-sm btn-outline-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      output: "Product cards with image, rating, price comparison, and add to cart button",
      note: "Position badges absolutely for overlays on cards"
    },
    {
      id: 11,
      title: "Create a responsive footer with columns and social links",
      problem: "Design a responsive footer with multiple columns containing links, contact info, and social media icons.",
      answer: "Use grid system for columns, list-unstyled for link lists, and flex utilities for social icons.",
      example: `<footer class="bg-dark text-white pt-5 pb-4 mt-5">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4">
        <h5 class="text-uppercase mb-4">MyBrand</h5>
        <p>Creating amazing web experiences with Bootstrap.</p>
        <div>
          <a href="#" class="text-white me-3">📘</a>
          <a href="#" class="text-white me-3">🐦</a>
          <a href="#" class="text-white me-3">📷</a>
          <a href="#" class="text-white">🔗</a>
        </div>
      </div>
      <div class="col-md-2 mb-4">
        <h5 class="text-uppercase mb-4">Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white-50 text-decoration-none">Home</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">About</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">Services</a></li>
        </ul>
      </div>
      <div class="col-md-3 mb-4">
        <h5 class="text-uppercase mb-4">Contact</h5>
        <ul class="list-unstyled">
          <li class="mb-2">📍 123 Main St, City</li>
          <li class="mb-2">📧 info@mybrand.com</li>
          <li class="mb-2">📞 +1 234 567 8900</li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="text-center">
      <p class="mb-0">&copy; 2024 MyBrand. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      output: "Responsive footer with company info, links, and social media icons",
      note: "Use opacity utilities like text-white-50 for less prominent links"
    },
    {
      id: 12,
      title: "Create a spinner for loading states",
      problem: "Build loading spinners with different colors and sizes to show loading states.",
      answer: "Use spinner-border or spinner-grow classes with color variants and sizing utilities.",
      example: `<div class="container py-5 text-center">
  <div class="spinner-border text-primary m-2" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-success m-2" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-danger m-2" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-info m-2" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border spinner-border-sm m-2" role="status">
    <span class="visually-hidden">Small...</span>
  </div>
  <button class="btn btn-primary m-2" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
</div>`,
      output: "Different colored and sized spinners for loading states",
      note: "Add role='status' and visually-hidden text for accessibility"
    },
    {
      id: 13,
      title: "Create an accordion FAQ section",
      problem: "Build an FAQ section using Bootstrap accordion component with expandable answers.",
      answer: "Use accordion component with accordion-item, accordion-header, accordion-body structure.",
      example: `<div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="accordion" id="faqAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              What is Bootstrap?
            </button>
          </h2>
          <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Bootstrap is a free and open-source CSS framework for responsive, mobile-first front-end web development.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              How do I install Bootstrap?
            </button>
          </h2>
          <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              You can install Bootstrap via CDN, npm, or manually download. The easiest way is to use the CDN links.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      output: "Accordion FAQ with collapsible sections that open/close when clicked",
      note: "Use data-bs-parent to ensure only one section opens at a time"
    },
    {
      id: 14,
      title: "Create a breadcrumb navigation component",
      problem: "Build a breadcrumb trail that shows the current page location within the website hierarchy.",
      answer: "Use breadcrumb component with breadcrumb-item classes and active for current page.",
      example: `<div class="container mt-4">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" class="text-decoration-none">Home</a></li>
      <li class="breadcrumb-item"><a href="#" class="text-decoration-none">Products</a></li>
      <li class="breadcrumb-item"><a href="#" class="text-decoration-none">Electronics</a></li>
      <li class="breadcrumb-item active" aria-current="page">Smartphones</li>
    </ol>
  </nav>
  <h1>Smartphones</h1>
  <p>Browse our collection of latest smartphones from top brands.</p>
</div>`,
      output: "Breadcrumb navigation showing page hierarchy with active current page",
      note: "Add aria-current='page' to the active item for screen readers"
    },
    {
      id: 15,
      title: "Create a pagination component",
      problem: "Build a pagination component with previous/next buttons and page numbers.",
      answer: "Use pagination component with page-item and page-link classes, disabled for non-clickable states.",
      example: `<div class="container py-5">
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item active"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">4</a></li>
      <li class="page-item"><a class="page-link" href="#">5</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</div>`,
      output: "Pagination with disabled previous button on first page and active current page",
      note: "Use page-item disabled for non-clickable navigation items"
    },
    {
      id: 16,
      title: "Create a responsive image gallery with hover effects",
      problem: "Build an image gallery that displays images in a responsive grid with hover zoom effects.",
      answer: "Use grid system with g-4 for gaps, overflow-hidden on cards, and CSS transitions for hover effects.",
      example: `<div class="container py-5">
  <div class="row g-4">
    <div class="col-md-4 col-sm-6">
      <div class="card overflow-hidden border-0 shadow-sm">
        <img src="https://picsum.photos/400/300?random=1" class="card-img-top" style="transition: transform 0.3s; height: 250px; object-fit: cover;" 
             onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="card overflow-hidden border-0 shadow-sm">
        <img src="https://picsum.photos/400/300?random=2" class="card-img-top" style="transition: transform 0.3s; height: 250px; object-fit: cover;"
             onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="card overflow-hidden border-0 shadow-sm">
        <img src="https://picsum.photos/400/300?random=3" class="card-img-top" style="transition: transform 0.3s; height: 250px; object-fit: cover;"
             onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
      </div>
    </div>
  </div>
</div>`,
      output: "Responsive image grid with zoom effect on hover",
      note: "Use object-fit: cover for consistent image dimensions"
    },
    {
      id: 17,
      title: "Create a tooltip component",
      problem: "Add tooltips to various elements that appear on hover with different positions.",
      answer: "Use data-bs-toggle='tooltip' with data-bs-placement and data-bs-title, initialize with JavaScript.",
      example: `<div class="container py-5 text-center">
  <button class="btn btn-primary m-2" data-bs-toggle="tooltip" data-bs-title="Tooltip on top" data-bs-placement="top">
    Top Tooltip
  </button>
  <button class="btn btn-secondary m-2" data-bs-toggle="tooltip" data-bs-title="Tooltip on right" data-bs-placement="right">
    Right Tooltip
  </button>
  <button class="btn btn-success m-2" data-bs-toggle="tooltip" data-bs-title="Tooltip on bottom" data-bs-placement="bottom">
    Bottom Tooltip
  </button>
  <button class="btn btn-danger m-2" data-bs-toggle="tooltip" data-bs-title="Tooltip on left" data-bs-placement="left">
    Left Tooltip
  </button>
</div>

<script>
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
</script>`,
      output: "Tooltips appearing on hover in different positions (top, right, bottom, left)",
      note: "Tooltips must be initialized with JavaScript to work"
    },
    {
      id: 18,
      title: "Create a toast notification that auto-hides",
      problem: "Build toast notifications that appear and auto-hide after a few seconds.",
      answer: "Use toast component with toast-container for positioning, data-bs-autohide and data-bs-delay attributes.",
      example: `<div class="container py-5 text-center">
  <button class="btn btn-primary" id="showToast">Show Toast</button>
</div>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast bg-success text-white" role="alert" data-bs-autohide="true" data-bs-delay="3000">
    <div class="toast-header bg-success text-white">
      <strong class="me-auto">Notification</strong>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Operation completed successfully!
    </div>
  </div>
</div>

<script>
  document.getElementById('showToast').addEventListener('click', function() {
    var toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();
  });
</script>`,
      output: "Toast notifications that auto-hide after 3 seconds",
      note: "Toast container should be positioned absolutely with position-fixed"
    },
    {
      id: 19,
      title: "Create a sticky header with navbar",
      problem: "Build a navbar that sticks to the top of the page when scrolling.",
      answer: "Use sticky-top class on navbar for Bootstrap's built-in sticky behavior.",
      example: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#">StickyNav</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
<div style="height: 200vh; background: linear-gradient(to bottom, #f8f9fa, #dee2e6); padding: 50px;">
  <h1>Scroll down to see sticky navbar in action!</h1>
  <p>The navbar stays at the top while scrolling.</p>
</div>`,
      output: "Navbar that stays fixed at the top while scrolling",
      note: "Use sticky-top class for Bootstrap's built-in sticky behavior"
    },
    {
      id: 20,
      title: "Create responsive card hover effects",
      problem: "Build cards that have hover effects like scaling, shadow, and transition animations.",
      answer: "Add CSS transitions on cards, use transform: scale() and box-shadow on hover.",
      example: `<div class="container py-5">
  <style>
    .hover-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .hover-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 1rem 3rem rgba(0,0,0,0.175) !important;
    }
  </style>
  <div class="row">
    <div class="col-md-4">
      <div class="card h-100 shadow-sm hover-card">
        <img src="https://picsum.photos/300/200?random=1" class="card-img-top" alt="Card">
        <div class="card-body">
          <h5 class="card-title">Hover Effect Card</h5>
          <p class="card-text">This card lifts up when you hover over it!</p>
          <button class="btn btn-outline-primary">Learn More</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100 shadow-sm hover-card">
        <img src="https://picsum.photos/300/200?random=2" class="card-img-top" alt="Card">
        <div class="card-body">
          <h5 class="card-title">Interactive Card</h5>
          <p class="card-text">Smooth transitions make the UI feel more responsive.</p>
          <button class="btn btn-outline-primary">Learn More</button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100 shadow-sm hover-card">
        <img src="https://picsum.photos/300/200?random=3" class="card-img-top" alt="Card">
        <div class="card-body">
          <h5 class="card-title">Modern Design</h5>
          <p class="card-text">Perfect for product showcases and portfolios.</p>
          <button class="btn btn-outline-primary">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
      output: "Cards with smooth hover lift and shadow effects",
      note: "Use transition property to smooth the animation effects"
    }
  ],
  
  experienced: [
    {
      id: 21,
      title: "Implement a modal that opens when a button is clicked and contains a form",
      problem: "Create a modal popup with a registration form that opens on button click.",
      answer: "Use modal component with modal-dialog-centered for vertical centering, form inside modal-body.",
      example: `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">
  Register Now
</button>

<div class="modal fade" id="registerModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title">Registration Form</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form id="registerForm">
          <div class="mb-3">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" required>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" form="registerForm" class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</div>

<script>
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration submitted!');
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    this.reset();
  });
</script>`,
      output: "Modal popup with registration form opens when button is clicked",
      note: "Use modal-dialog-centered for vertical centering"
    },
    {
      id: 22,
      title: "Create a custom dropdown with search functionality",
      problem: "Build a custom dropdown that allows searching and selecting items.",
      answer: "Use dropdown component with custom search input inside dropdown-menu, filter items with JavaScript.",
      example: `<div class="container py-5">
  <div class="dropdown">
    <button class="btn btn-outline-secondary dropdown-toggle w-100 text-start" type="button" data-bs-toggle="dropdown">
      Select an option...
    </button>
    <div class="dropdown-menu w-100 p-3" style="max-height: 300px; overflow-y: auto;">
      <input type="text" class="form-control form-control-sm mb-2" id="searchDropdown" placeholder="Search...">
      <div id="dropdownItems">
        <div class="dropdown-item" data-value="1">Option 1</div>
        <div class="dropdown-item" data-value="2">Option 2</div>
        <div class="dropdown-item" data-value="3">Option 3</div>
        <div class="dropdown-item" data-value="4">Option 4</div>
        <div class="dropdown-item" data-value="5">Option 5</div>
      </div>
    </div>
  </div>
</div>

<script>
  const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const dropdownItems = document.getElementById('dropdownItems');
  const searchInput = document.getElementById('searchDropdown');
  const dropdownButton = document.querySelector('.dropdown-toggle');

  function renderItems(filter = '') {
    const filtered = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
    dropdownItems.innerHTML = filtered.map(item => 
      '<div class="dropdown-item" data-value="' + item + '">' + item + '</div>'
    ).join('');
  }

  dropdownItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown-item')) {
      dropdownButton.innerHTML = e.target.textContent + ' <span class="float-end">▼</span>';
    }
  });

  searchInput.addEventListener('input', (e) => renderItems(e.target.value));
  renderItems();
</script>`,
      output: "Dropdown with search box that filters items, selection updates button text",
      note: "Add custom styling for better user experience"
    },
    {
      id: 23,
      title: "Create a multi-level dropdown menu",
      problem: "Build a dropdown menu that has nested submenus on hover or click.",
      answer: "Use dropdown-submenu CSS class with absolute positioning for submenus.",
      example: `<style>
  .dropdown-submenu { position: relative; }
  .dropdown-submenu > .dropdown-menu {
    top: 0; left: 100%; margin-top: -6px;
  }
  .dropdown-submenu:hover > .dropdown-menu { display: block; }
</style>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Multi-Level Menu</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Products</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Electronics</a></li>
            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="#">Clothing</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Men</a></li>
                <li><a class="dropdown-item" href="#">Women</a></li>
                <li class="dropdown-submenu">
                  <a class="dropdown-item dropdown-toggle" href="#">Kids</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Boys</a></li>
                    <li><a class="dropdown-item" href="#">Girls</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a class="dropdown-item" href="#">Books</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`,
      output: "Multi-level dropdown menu with nested submenus",
      note: "Add custom CSS for submenu positioning on hover"
    },
    {
      id: 24,
      title: "Create a custom file upload with preview",
      problem: "Build a file upload component that shows image preview before upload.",
      answer: "Use FileReader API to read uploaded file and display preview image.",
      example: `<div class="container py-5">
  <div class="card shadow">
    <div class="card-header bg-primary text-white">
      <h4 class="mb-0">File Upload with Preview</h4>
    </div>
    <div class="card-body">
      <input type="file" class="form-control" id="fileInput" accept="image/*">
      <div id="previewContainer" class="text-center mt-3" style="display: none;">
        <img id="imagePreview" class="img-fluid rounded" style="max-height: 200px;">
        <button class="btn btn-danger btn-sm mt-2" id="removeImage">Remove</button>
      </div>
    </div>
  </div>
</div>

<script>
  const fileInput = document.getElementById('fileInput');
  const previewContainer = document.getElementById('previewContainer');
  const imagePreview = document.getElementById('imagePreview');

  fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(event) {
        imagePreview.src = event.target.result;
        previewContainer.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('removeImage').addEventListener('click', function() {
    fileInput.value = '';
    previewContainer.style.display = 'none';
    imagePreview.src = '';
  });
</script>`,
      output: "File input shows image preview before upload",
      note: "Use FileReader API for client-side image preview"
    },
    {
      id: 25,
      title: "Create a responsive timeline component",
      problem: "Build a vertical timeline that displays events in chronological order.",
      answer: "Use CSS pseudo-elements for timeline line, flexbox for layout, media queries for mobile.",
      example: `<div class="container py-5">
  <style>
    .timeline { position: relative; max-width: 1200px; margin: 0 auto; }
    .timeline::after { content: ''; position: absolute; width: 4px; background: #007bff; top: 0; bottom: 0; left: 50%; }
    .timeline-item { padding: 10px 40px; position: relative; width: 50%; }
    .timeline-item.left { left: 0; }
    .timeline-item.right { left: 50%; }
    .timeline-item.left .timeline-content { text-align: right; }
    .timeline-item::before { content: ''; position: absolute; width: 20px; height: 20px; background: #007bff; border-radius: 50%; top: 20px; }
    .timeline-item.left::before { right: -10px; }
    .timeline-item.right::before { left: -10px; }
    .timeline-content { padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    @media (max-width: 768px) {
      .timeline::after { left: 31px; }
      .timeline-item { width: 100%; padding-left: 70px; }
      .timeline-item.left, .timeline-item.right { left: 0; }
      .timeline-item.left .timeline-content { text-align: left; }
      .timeline-item::before { left: 26px !important; }
    }
  </style>
  <div class="timeline">
    <div class="timeline-item left">
      <div class="timeline-content">
        <h4>2024 - Product Launch</h4>
        <p>Successfully launched our flagship product.</p>
      </div>
    </div>
    <div class="timeline-item right">
      <div class="timeline-content">
        <h4>2023 - Series A Funding</h4>
        <p>Raised $10M to accelerate growth.</p>
      </div>
    </div>
    <div class="timeline-item left">
      <div class="timeline-content">
        <h4>2022 - Office Expansion</h4>
        <p>Opened offices in 3 countries.</p>
      </div>
    </div>
  </div>
</div>`,
      output: "Vertical timeline with alternating left/right layout, responsive on mobile",
      note: "Use CSS pseudo-elements for the connecting line"
    },
    {
      id: 26,
      title: "Create a responsive pricing table with toggle for monthly/yearly",
      problem: "Build a pricing table that switches between monthly and yearly pricing using JavaScript.",
      answer: "Use radio buttons or toggle switch, hide/show price elements with JS, update DOM accordingly.",
      example: `<div class="container py-5">
  <div class="text-center mb-4">
    <div class="btn-group">
      <input type="radio" class="btn-check" name="billing" id="monthly" autocomplete="off" checked>
      <label class="btn btn-outline-primary" for="monthly">Monthly</label>
      <input type="radio" class="btn-check" name="billing" id="yearly" autocomplete="off">
      <label class="btn btn-outline-primary" for="yearly">Yearly <span class="badge bg-success">Save 20%</span></label>
    </div>
  </div>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card text-center shadow-sm">
        <div class="card-body">
          <h3>Basic</h3>
          <h2 class="monthly-price">$19</h2>
          <h2 class="yearly-price" style="display: none;">$15</h2>
          <button class="btn btn-outline-primary mt-3">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const monthlyRadio = document.getElementById('monthly');
  const yearlyRadio = document.getElementById('yearly');
  const monthlyPrices = document.querySelectorAll('.monthly-price');
  const yearlyPrices = document.querySelectorAll('.yearly-price');

  function updatePricing(showMonthly) {
    monthlyPrices.forEach(p => p.style.display = showMonthly ? 'block' : 'none');
    yearlyPrices.forEach(p => p.style.display = showMonthly ? 'none' : 'block');
  }

  monthlyRadio.addEventListener('change', () => updatePricing(true));
  yearlyRadio.addEventListener('change', () => updatePricing(false));
</script>`,
      output: "Pricing cards that toggle between monthly and yearly prices",
      note: "Add animation transitions for smoother price switching"
    }
  ]
};

export default problems;
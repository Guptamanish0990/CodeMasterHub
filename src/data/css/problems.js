export const problems = {
  fresher: [
    {
      title: "Create a 3-Column Card Layout using Flexbox",
      description: "Build a responsive card layout with 3 columns on desktop, 2 on tablet, and 1 on mobile using Flexbox.",
      answer: "Use display: flex with flex-wrap: wrap. Set each card to flex: 1 1 300px (grow, shrink, basis). Use gap for spacing. Media queries for responsive breakpoints.",
      example: ".cards-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n}\n\n.card {\n  flex: 1 1 300px;\n  background: white;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n@media (max-width: 768px) {\n  .card { flex: 1 1 100%; }\n}\n\n@media (min-width: 769px) and (max-width: 1024px) {\n  .card { flex: 1 1 calc(50% - 20px); }\n}",
      output: "Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column with cards properly spaced.",
      note: "Flexbox is one-dimensional - great for card layouts. Use gap instead of margin for consistent spacing."
    },
    {
      title: "Build a Responsive Navigation Bar that Collapses on Mobile",
      description: "Create a navigation bar with logo, nav links, and hamburger menu that works on all devices.",
      answer: "Use Flexbox for desktop layout, media query for mobile, and JavaScript to toggle the mobile menu visibility.",
      example: "<style>\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #333;\n  padding: 1rem;\n  color: white;\n}\n\n.nav-links {\n  display: flex;\n  gap: 2rem;\n  list-style: none;\n}\n\n.hamburger {\n  display: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .nav-links {\n    display: none;\n    flex-direction: column;\n    width: 100%;\n    position: absolute;\n    top: 60px;\n    left: 0;\n    background: #333;\n    padding: 1rem;\n  }\n  \n  .nav-links.active {\n    display: flex;\n  }\n  \n  .hamburger {\n    display: block;\n  }\n}\n</style>\n\n<script>\nfunction toggleMenu() {\n  document.querySelector('.nav-links').classList.toggle('active');\n}\n</script>",
      output: "Desktop: horizontal menu visible. Mobile: hamburger icon appears, clicking shows vertical menu.",
      note: "Mobile-first approach: design for mobile first, then add media queries for larger screens."
    },
    {
      title: "Create a CSS-Only Tooltip on Hover",
      description: "Build a tooltip that appears when hovering over an element, using only CSS (no JavaScript).",
      answer: "Use pseudo-element ::after and pseudo-class :hover. Position absolute relative to parent. Add transition for smooth appearance.",
      example: ".tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  cursor: help;\n}\n\n.tooltip .tooltip-text {\n  visibility: hidden;\n  width: 120px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.tooltip:hover .tooltip-text {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* Arrow */\n.tooltip .tooltip-text::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #333 transparent transparent transparent;\n}",
      output: "Hover over text shows a tooltip with arrow pointing down, fading in smoothly.",
      note: "Use z-index to ensure tooltip appears above other elements. Position: relative on parent is essential."
    },
    {
      title: "Create a Centered Container with Max Width",
      description: "Build a responsive container that centers content horizontally and has a maximum width.",
      answer: "Use margin: 0 auto for horizontal centering, max-width for responsive width, and padding for inner spacing.",
      example: ".container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  width: 100%;\n}\n\n/* Fluid container that expands but stops at max-width */\n.fluid-container {\n  width: 100%;\n  max-width: 1400px;\n  margin-left: auto;\n  margin-right: auto;\n}",
      output: "Container is centered on page, has 20px padding on sides, and doesn't exceed 1200px width.",
      note: "Always set width: 100% along with max-width for truly responsive containers."
    },
    {
      title: "Style a Button with Hover and Active States",
      description: "Create a button with different styles for normal, hover, and active (click) states.",
      answer: "Use pseudo-classes :hover for mouse over and :active for click moment. Add transitions for smooth changes.",
      example: ".btn {\n  background: #3498db;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.btn:hover {\n  background: #2980b9;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(52,152,219,0.3);\n}\n\n.btn:active {\n  transform: translateY(0);\n  background: #1c6ea4;\n}",
      output: "Button darkens on hover, lifts slightly, and darkens more when clicked.",
      note: "Order matters for link states: link, visited, hover, active (LoVe HAte)."
    },
    {
      title: "Create a Simple Hero Section with Background Image",
      description: "Build a full-width hero section with background image, overlay, text, and call-to-action button.",
      answer: "Use background-image with cover size, position relative, and ::before pseudo-element for overlay.",
      example: ".hero {\n  position: relative;\n  height: 80vh;\n  background-image: url('hero.jpg');\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: white;\n}\n\n.hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.5);\n}\n\n.hero-content {\n  position: relative;\n  z-index: 1;\n}\n\n.hero h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n\n.hero button {\n  padding: 12px 30px;\n  background: #3498db;\n  border: none;\n  border-radius: 30px;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n\n.hero button:hover {\n  transform: scale(1.05);\n}",
      output: "Full-width hero with dark overlay, centered white text, and animated button.",
      note: "Use background-attachment: fixed for parallax effect (mobile usage is limited)."
    },
    {
      title: "Create a CSS Grid Image Gallery",
      description: "Build a responsive image gallery using CSS Grid that adapts to different screen sizes.",
      answer: "Use display: grid with grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)). This creates responsive columns automatically.",
      example: ".gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 16px;\n  padding: 20px;\n}\n\n.gallery img {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: transform 0.3s;\n}\n\n.gallery img:hover {\n  transform: scale(1.02);\n}\n\n/* Masonry-style with different heights */\n.gallery-masonry {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 16px;\n  grid-auto-rows: 250px;\n}\n\n.gallery-masonry img:nth-child(odd) {\n  grid-row: span 2;\n}",
      output: "Images arranged in responsive grid, 3-4 columns on desktop, 2 on tablet, 1 on mobile.",
      note: "auto-fill creates as many columns as possible, minmax sets minimum and maximum column width."
    },
    {
      title: "Create a Custom Checkbox and Radio Button",
      description: "Style native checkbox and radio inputs with custom CSS designs.",
      answer: "Hide the default input with opacity:0 or display:none, then style a custom span/div next to it.",
      example: "<style>\n.custom-checkbox {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  gap: 8px;\n}\n\n.custom-checkbox input {\n  display: none;\n}\n\n.checkmark {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #3498db;\n  border-radius: 4px;\n  display: inline-block;\n  position: relative;\n}\n\n.custom-checkbox input:checked + .checkmark {\n  background: #3498db;\n}\n\n.custom-checkbox input:checked + .checkmark::after {\n  content: \"✓\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n.custom-radio .checkmark {\n  border-radius: 50%;\n}\n\n.custom-radio input:checked + .checkmark::after {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  background: #3498db;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n</style>",
      output: "Custom-styled checkboxes and radio buttons with smooth transitions.",
      note: "Use adjacent sibling selector (+) to style elements next to checked input."
    },
    {
      title: "Create a CSS Loading Spinner",
      description: "Build a pure CSS loading spinner/animation without JavaScript.",
      answer: "Use CSS keyframes to rotate an element with border-radius: 50% and transparent borders.",
      example: ".spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* Different sizes */\n.spinner-sm { width: 30px; height: 30px; border-width: 3px; }\n.spinner-lg { width: 70px; height: 70px; border-width: 5px; }\n\n/* Multiple colors */\n.spinner-rainbow {\n  border-color: #f3f3f3;\n  border-top-color: #e74c3c;\n  border-right-color: #3498db;\n  border-bottom-color: #2ecc71;\n  border-left-color: #f39c12;\n}",
      output: "Spinning circle animation that rotates continuously.",
      note: "Use border-top-color for single-color spinner, multiple borders for rainbow effect."
    },
    {
      title: "Create a Card with Hover Effects",
      description: "Design a product card with image, title, description, and button that animates on hover.",
      answer: "Use transitions on transform, box-shadow, and colors. Add hover effects for depth and interactivity.",
      example: ".card {\n  width: 300px;\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  transition: all 0.3s ease;\n}\n\n.card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 24px rgba(0,0,0,0.15);\n}\n\n.card-image {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n\n.card:hover .card-image {\n  transform: scale(1.05);\n}\n\n.card-content {\n  padding: 20px;\n}\n\n.card h3 {\n  margin-bottom: 10px;\n  color: #333;\n}\n\n.card p {\n  color: #666;\n  margin-bottom: 15px;\n}\n\n.card button {\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n\n.card button:hover {\n  background: #2980b9;\n}",
      output: "Card lifts up on hover with shadow, image scales slightly.",
      note: "Keep transitions smooth (0.3s is usually good). Multiple transforms can be combined."
    },
    {
      title: "Create a Responsive Pricing Table",
      description: "Build a pricing table with 3 plans using Flexbox or Grid, responsive for all devices.",
      answer: "Use CSS Grid for comparison table or Flexbox for card layout. Highlight popular plan with different style.",
      example: ".pricing-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n\n.plan {\n  background: white;\n  border-radius: 12px;\n  padding: 30px 20px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  transition: transform 0.3s;\n}\n\n.plan:hover {\n  transform: translateY(-5px);\n}\n\n.plan.popular {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  transform: scale(1.02);\n}\n\n.price {\n  font-size: 36px;\n  font-weight: bold;\n  margin: 20px 0;\n}\n\n.price span {\n  font-size: 16px;\n}\n\n.features {\n  list-style: none;\n  padding: 0;\n  margin: 20px 0;\n}\n\n.features li {\n  padding: 8px 0;\n  border-bottom: 1px solid #eee;\n}\n\n.plan button {\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 10px 30px;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.plan.popular button {\n  background: white;\n  color: #764ba2;\n}\n\n.plan button:hover {\n  transform: scale(1.05);\n}",
      output: "Three pricing cards side by side, popular plan has gradient background and larger size.",
      note: "Use transform scale sparingly on entire cards to avoid blurry text."
    },
    {
      title: "Create a Sticky Header on Scroll",
      description: "Build a navigation header that sticks to the top when user scrolls down.",
      answer: "Use position: sticky with top: 0, plus a z-index to keep it above other content.",
      example: ".header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: white;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  padding: 1rem 0;\n  transition: padding 0.3s;\n}\n\n/* Shrink header on scroll */\n.header.shrink {\n  padding: 0.5rem 0;\n}\n\n/* Add active class with JavaScript on scroll */\nwindow.addEventListener('scroll', function() {\n  const header = document.querySelector('.header');\n  if (window.scrollY > 100) {\n    header.classList.add('shrink');\n  } else {\n    header.classList.remove('shrink');\n  }\n});",
      output: "Header stays at top while scrolling, background remains solid for readability.",
      note: "position: sticky works without JavaScript, but shrunk effect needs JS."
    },
    {
      title: "Create a CSS-Only Dropdown Menu",
      description: "Build a dropdown menu that appears on hover using only CSS (no JavaScript).",
      answer: "Use nested lists with absolute positioning on the dropdown. Show on parent hover.",
      example: ".dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: white;\n  min-width: 160px;\n  box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n  z-index: 1;\n  border-radius: 4px;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  transition: background 0.3s;\n}\n\n.dropdown-content a:hover {\n  background-color: #f1f1f1;\n}\n\n/* Multi-level dropdown */\n.sub-dropdown {\n  position: relative;\n}\n\n.sub-dropdown-content {\n  display: none;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  min-width: 160px;\n  background: white;\n  box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n}\n\n.sub-dropdown:hover .sub-dropdown-content {\n  display: block;\n}",
      output: "Hover over menu item shows dropdown options; multi-level on deeper hover.",
      note: "Pure CSS dropdowns are great but may not work well on touch devices."
    },
    {
      title: "Create a Responsive Footer",
      description: "Build a website footer with multiple columns, social links, and copyright that stacks on mobile.",
      answer: "Use CSS Grid for columns, flexbox for alignment, and media queries for mobile stacking.",
      example: ".footer {\n  background: #2c3e50;\n  color: white;\n  padding: 40px 20px 20px;\n  margin-top: 40px;\n}\n\n.footer-content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.footer-section h3 {\n  margin-bottom: 20px;\n  font-size: 18px;\n}\n\n.footer-section ul {\n  list-style: none;\n  padding: 0;\n}\n\n.footer-section li {\n  margin-bottom: 10px;\n}\n\n.footer-section a {\n  color: #ecf0f1;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.footer-section a:hover {\n  color: #3498db;\n}\n\n.social-links {\n  display: flex;\n  gap: 15px;\n}\n\n.social-links a {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  background: rgba(255,255,255,0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.3s;\n}\n\n.social-links a:hover {\n  background: #3498db;\n}\n\n.copyright {\n  text-align: center;\n  padding-top: 30px;\n  margin-top: 30px;\n  border-top: 1px solid rgba(255,255,255,0.1);\n  font-size: 14px;\n}",
      output: "Footer with 2-4 columns on desktop, stacks to 1 column on mobile with social icons.",
      note: "Use semantic HTML for footer (footer tag) for better accessibility."
    },
    {
      title: "Create a CSS-Only Modal Dialog",
      description: "Build a modal popup that opens with a button using the :target pseudo-class.",
      answer: "Use hidden div with id, open when #id is in URL. Style modal and overlay with CSS.",
      example: "<style>\n.modal {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.5);\n  z-index: 1000;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal:target {\n  display: flex;\n}\n\n.modal-content {\n  background: white;\n  border-radius: 8px;\n  padding: 30px;\n  max-width: 500px;\n  width: 90%;\n  position: relative;\n  animation: slideDown 0.3s ease;\n}\n\n@keyframes slideDown {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.close {\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  font-size: 24px;\n  text-decoration: none;\n  color: #666;\n}\n\n.close:hover {\n  color: black;\n}\n</style>\n\n<a href=\"#modal\" class=\"btn\">Open Modal</a>\n\n<div id=\"modal\" class=\"modal\">\n  <div class=\"modal-content\">\n    <a href=\"#\" class=\"close\">&times;</a>\n    <h2>Modal Title</h2>\n    <p>This is a pure CSS modal dialog!</p>\n  </div>\n</div>",
      output: "Click button opens modal popup with animation; click X or outside to close.",
      note: "Pure CSS modals work but have limitations; JavaScript modals offer more control."
    },
    {
      title: "Create a CSS-Only Accordion",
      description: "Build an FAQ accordion that expands/collapses using the details/summary HTML elements.",
      answer: "Use HTML5 details and summary tags for native accordion, then style with CSS.",
      example: "<style>\ndetails {\n  background: #f8f9fa;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  border: 1px solid #dee2e6;\n}\n\nsummary {\n  padding: 15px 20px;\n  font-weight: bold;\n  cursor: pointer;\n  background: #f1f3f5;\n  border-radius: 8px;\n  user-select: none;\n}\n\ndetails[open] summary {\n  border-radius: 8px 8px 0 0;\n}\n\nsummary::-webkit-details-marker {\n  color: #3498db;\n}\n\nsummary::before {\n  content: \"▶\";\n  display: inline-block;\n  margin-right: 10px;\n  transition: transform 0.3s;\n}\n\ndetails[open] summary::before {\n  transform: rotate(90deg);\n}\n\n.accordion-content {\n  padding: 15px 20px;\n  line-height: 1.6;\n}\n\n/* Custom transition for smooth open/close (limited) */\ndetails[open] .accordion-content {\n  animation: fadeIn 0.3s ease;\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n</style>\n\n<details>\n  <summary>What is HTML?</summary>\n  <div class=\"accordion-content\">\n    HTML is the standard markup language for creating web pages.\n  </div>\n</details>\n\n<details>\n  <summary>What is CSS?</summary>\n  <div class=\"accordion-content\">\n    CSS describes how HTML elements should be displayed.\n  </div>\n</details>",
      output: "Clicking summary expands/collapses content with arrow rotation and fade animation.",
      note: "details/summary works without JavaScript; CSS limitations on open/close animation exist."
    },
    {
      title: "Create an Animated Progress Bar",
      description: "Build a progress bar that animates to a target percentage on page load.",
      answer: "Use CSS transitions with JavaScript to set width, or CSS keyframes for initial load.",
      example: ".progress-container {\n  width: 100%;\n  background: #f0f0f0;\n  border-radius: 10px;\n  margin: 20px 0;\n}\n\n.progress-bar {\n  width: 0%;\n  height: 30px;\n  background: linear-gradient(90deg, #3498db, #2ecc71);\n  border-radius: 10px;\n  text-align: center;\n  line-height: 30px;\n  color: white;\n  transition: width 1.5s ease;\n}\n\n/* Animate on load */\n.progress-bar.animated {\n  width: 75% !important;\n}\n\n<script>\nwindow.addEventListener('load', function() {\n  document.querySelector('.progress-bar').classList.add('animated');\n});\n</script>\n\n<!-- Multiple steps -->\n.step-progress {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.step {\n  width: 40px;\n  height: 40px;\n  background: #f0f0f0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n}\n\n.step.active {\n  background: #3498db;\n  color: white;\n}\n\n.step::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 100%;\n  width: 100%;\n  height: 2px;\n  background: #f0f0f0;\n  z-index: -1;\n}\n\n.step:last-child::after {\n  display: none;\n}\n\n.step.active::after {\n  background: #3498db;\n}",
      output: "Progress bar fills from 0% to 75% smoothly on page load. Step indicator shows progress.",
      note: "Transition works on numeric properties only (width, height, transform, opacity)."
    },
    {
      title: "Create a CSS-Only Testimonial Slider",
      description: "Build a testimonial carousel that slides automatically using CSS animations.",
      answer: "Use overflow: hidden on container and keyframe animation to slide horizontally.",
      example: ".slider-container {\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n\n.slider-track {\n  display: flex;\n  width: 300%;\n  animation: slide 12s infinite;\n}\n\n.testimonial {\n  width: 33.333%;\n  padding: 20px;\n  text-align: center;\n}\n\n@keyframes slide {\n  0%, 20% { transform: translateX(0); }\n  25%, 45% { transform: translateX(-33.333%); }\n  50%, 70% { transform: translateX(-66.666%); }\n  75%, 100% { transform: translateX(0); }\n}\n\n/* Pause on hover */\n.slider-container:hover .slider-track {\n  animation-play-state: paused;\n}\n\n/* Navigation dots */\n.dots {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: #ccc;\n  border-radius: 50%;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\n/* Limited control via :target would need more complexity */",
      output: "Testimonials auto-slide every 4 seconds, pause on hover.",
      note: "CSS-only sliders have limited control; JavaScript recommended for complex sliders."
    },
    {
      title: "Create a CSS Grid Holy Grail Layout",
      description: "Build the classic holy grail layout with header, footer, sidebar, and main content using CSS Grid.",
      answer: "Use grid-template-areas to define the layout, making it responsive with media queries.",
      example: ".holy-grail {\n  display: grid;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main main\"\n    \"footer footer footer\";\n  grid-template-columns: 250px 1fr;\n  min-height: 100vh;\n  gap: 20px;\n  padding: 20px;\n}\n\n.header { grid-area: header; background: #333; color: white; padding: 20px; }\n.sidebar { grid-area: sidebar; background: #f0f0f0; padding: 20px; }\n.main { grid-area: main; padding: 20px; }\n.footer { grid-area: footer; background: #333; color: white; padding: 20px; }\n\n@media (max-width: 768px) {\n  .holy-grail {\n    grid-template-areas:\n      \"header\"\n      \"sidebar\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n}",
      output: "Desktop: header top, sidebar left, main content right, footer bottom. Mobile: stacks vertically.",
      note: "Holy grail layout is a classic pattern for web pages with sidebars."
    },
    {
      title: "Create a CSS-Only Tabs Component",
      description: "Build tabbed interface where clicking tabs shows different content using CSS only.",
      answer: "Use radio buttons and :checked pseudo-class to control visibility of tab panels.",
      example: "<style>\n.tabs {\n  display: flex;\n  gap: 5px;\n  border-bottom: 2px solid #ddd;\n}\n\n.tab-label {\n  padding: 10px 20px;\n  cursor: pointer;\n  background: #f0f0f0;\n  border-radius: 5px 5px 0 0;\n}\n\n.tab-radio {\n  display: none;\n}\n\n.tab-radio:checked + .tab-label {\n  background: #3498db;\n  color: white;\n}\n\n.tab-content {\n  display: none;\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-top: none;\n}\n\n#tab1:checked ~ .tab-content1,\n#tab2:checked ~ .tab-content2,\n#tab3:checked ~ .tab-content3 {\n  display: block;\n}\n</style>\n\n<div class=\"tabs\">\n  <input type=\"radio\" name=\"tabs\" id=\"tab1\" class=\"tab-radio\" checked>\n  <label for=\"tab1\" class=\"tab-label\">Tab 1</label>\n  \n  <input type=\"radio\" name=\"tabs\" id=\"tab2\" class=\"tab-radio\">\n  <label for=\"tab2\" class=\"tab-label\">Tab 2</label>\n  \n  <input type=\"radio\" name=\"tabs\" id=\"tab3\" class=\"tab-radio\">\n  <label for=\"tab3\" class=\"tab-label\">Tab 3</label>\n</div>\n\n<div class=\"tab-content tab-content1\">Content for Tab 1</div>\n<div class=\"tab-content tab-content2\">Content for Tab 2</div>\n<div class=\"tab-content tab-content3\">Content for Tab 3</div>",
      output: "Clicking tabs switches between content panels without JavaScript.",
      note: "CSS-only tabs work but require specific HTML structure and sibling selectors."
    },
    {
      title: "Create a CSS-Only Lightbox Gallery",
      description: "Build an image gallery where clicking images opens larger version in overlay using :target.",
      answer: "Use :target pseudo-class to show hidden lightbox overlay when image link is clicked.",
      example: "<style>\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n\n.gallery img {\n  width: 100%;\n  cursor: pointer;\n}\n\n.lightbox {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.9);\n  z-index: 1000;\n  text-align: center;\n}\n\n.lightbox:target {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.lightbox img {\n  max-width: 90%;\n  max-height: 90%;\n}\n\n.close {\n  position: absolute;\n  top: 20px;\n  right: 40px;\n  color: white;\n  font-size: 40px;\n  text-decoration: none;\n}\n</style>\n\n<div class=\"gallery\">\n  <a href=\"#img1\">\n    <img src=\"thumb1.jpg\" alt=\"Image 1\">\n  </a>\n</div>\n\n<div id=\"img1\" class=\"lightbox\">\n  <a href=\"#\" class=\"close\">&times;</a>\n  <img src=\"large1.jpg\" alt=\"Image 1\">\n</div>",
      output: "Click thumbnail opens larger image in overlay; click close or outside to exit.",
      note: "Url changes with #id, which may affect browser history."
    },
    {
      title: "Create a CSS-Only Notification Toast",
      description: "Build a toast notification that appears and disappears automatically using CSS animations.",
      answer: "Use keyframe animations to fade in, display for time, and fade out, with JavaScript to trigger.",
      example: ".toast {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: #333;\n  color: white;\n  padding: 15px 25px;\n  border-radius: 8px;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s, visibility 0.3s;\n  z-index: 1000;\n}\n\n.toast.show {\n  opacity: 1;\n  visibility: visible;\n}\n\n.toast.success {\n  background: #2ecc71;\n}\n\n.toast.error {\n  background: #e74c3c;\n}\n\n.toast.info {\n  background: #3498db;\n}\n\n/* Slide from right animation */\n.toast.slide {\n  transform: translateX(100%);\n  transition: all 0.3s;\n}\n\n.toast.slide.show {\n  transform: translateX(0);\n}\n\n<script>\nfunction showToast(message, type = 'info') {\n  const toast = document.createElement('div');\n  toast.className = `toast ${type} slide`;\n  toast.textContent = message;\n  document.body.appendChild(toast);\n  \n  setTimeout(() => toast.classList.add('show'), 10);\n  \n  setTimeout(() => {\n    toast.classList.remove('show');\n    setTimeout(() => toast.remove(), 300);\n  }, 3000);\n}\n</script>",
      output: "Toast notification slides in, stays for 3 seconds, then slides out.",
      note: "CSS transitions need JavaScript to add/remove classes at correct times."
    },
    {
      title: "Create a CSS-Only Breadcrumb Navigation",
      description: "Build breadcrumb navigation showing current page location using pseudo-elements.",
      answer: "Use ::before pseudo-element to add separators between breadcrumb items.",
      example: ".breadcrumb {\n  list-style: none;\n  display: flex;\n  padding: 10px;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n\n.breadcrumb li {\n  display: flex;\n  align-items: center;\n}\n\n.breadcrumb li:not(:first-child)::before {\n  content: \"/\";\n  margin: 0 8px;\n  color: #6c757d;\n}\n\n.breadcrumb a {\n  text-decoration: none;\n  color: #3498db;\n}\n\n.breadcrumb a:hover {\n  text-decoration: underline;\n}\n\n.breadcrumb .current {\n  color: #6c757d;\n}\n\n/* Arrow separator */\n.breadcrumb-arrow li:not(:first-child)::before {\n  content: \"→\";\n}\n\n/* Double arrow */\n.breadcrumb-double li:not(:first-child)::before {\n  content: \"»\";\n}\n\n/* Responsive breadcrumb */\n@media (max-width: 768px) {\n  .breadcrumb {\n    flex-wrap: wrap;\n  }\n  \n  .breadcrumb li {\n    margin: 5px 0;\n  }\n}",
      output: "Breadcrumb shows homepage > category > current page with slash separators.",
      note: "Use schema.org markup for better SEO: itemscope itemtype='https://schema.org/BreadcrumbList'"
    },
    {
      title: "Create a CSS Skeleton Loading Screen",
      description: "Build a loading skeleton placeholder that animates while content loads.",
      answer: "Use background gradient with animation to create shimmer effect on placeholder elements.",
      example: ".skeleton {\n  background: #e0e0e0;\n  border-radius: 4px;\n  position: relative;\n  overflow: hidden;\n}\n\n.skeleton::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);\n  animation: shimmer 1.5s infinite;\n}\n\n@keyframes shimmer {\n  0% { transform: translateX(-100%); }\n  100% { transform: translateX(100%); }\n}\n\n.skeleton-title {\n  width: 60%;\n  height: 24px;\n  margin-bottom: 15px;\n}\n\n.skeleton-text {\n  width: 100%;\n  height: 14px;\n  margin-bottom: 10px;\n}\n\n.skeleton-text.short {\n  width: 80%;\n}\n\n.skeleton-avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.skeleton-card {\n  padding: 20px;\n  border: 1px solid #eee;\n  border-radius: 8px;\n  background: white;\n}\n\n.skeleton-image {\n  width: 100%;\n  height: 200px;\n  margin-bottom: 15px;\n}",
      output: "Placeholders with moving gradient shimmer, indicating content is loading.",
      note: "Skeleton screens improve perceived performance and reduce layout shift."
    },
    {
      title: "Create a CSS-Only Number Counter",
      description: "Build an animated counter that counts up to a target number using CSS.",
      answer: "Use steps() in animation to increment counter content property with fixed steps.",
      example: ".counter {\n  font-size: 48px;\n  font-weight: bold;\n  counter-reset: count 0;\n  animation: countUp 2s forwards;\n}\n\n@keyframes countUp {\n  0% { counter-increment: count 0; content: counter(count); }\n  10% { counter-increment: count 1000; }\n  20% { counter-increment: count 2000; }\n  30% { counter-increment: count 3000; }\n  40% { counter-increment: count 4000; }\n  50% { counter-increment: count 5000; }\n  60% { counter-increment: count 6000; }\n  70% { counter-increment: count 7000; }\n  80% { counter-increment: count 8000; }\n  90% { counter-increment: count 9000; }\n  100% { counter-increment: count 10000; }\n}\n\n.counter::after {\n  content: counter(count);\n  animation: inherit;\n}\n\n/* Better with JavaScript */\n.counter-js {\n  font-size: 48px;\n}\n\n<script>\nfunction animateCounter(element, target, duration = 2000) {\n  let start = 0;\n  const increment = target / (duration / 16);\n  const timer = setInterval(() => {\n    start += increment;\n    if (start >= target) {\n      element.textContent = Math.floor(target);\n      clearInterval(timer);\n    } else {\n      element.textContent = Math.floor(start);\n    }\n  }, 16);\n}\n\nwindow.addEventListener('load', () => {\n  const counter = document.querySelector('.counter-js');\n  if (counter) animateCounter(counter, 10000);\n});\n</script>",
      output: "Number counts from 0 to 10000 over 2 seconds.",
      note: "CSS-only counter has limitations; JavaScript counter is more flexible and accurate."
    },
    {
      title: "Create a CSS-Only Star Rating System",
      description: "Build a star rating component where users can select rating by clicking/hovering stars.",
      answer: "Use CSS sibling selectors with radio buttons to style selected stars.",
      example: "<style>\n.rating {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  gap: 5px;\n}\n\n.rating input {\n  display: none;\n}\n\n.rating label {\n  font-size: 30px;\n  color: #ddd;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n\n.rating input:checked ~ label,\n.rating label:hover,\n.rating label:hover ~ label {\n  color: #ffc107;\n}\n\n/* Display rating value */\n.rating-value {\n  margin-left: 10px;\n  font-size: 18px;\n}\n</style>\n\n<div class=\"rating\">\n  <input type=\"radio\" name=\"rating\" id=\"star5\" value=\"5\">\n  <label for=\"star5\" title=\"5 stars\">★</label>\n  \n  <input type=\"radio\" name=\"rating\" id=\"star4\" value=\"4\">\n  <label for=\"star4\" title=\"4 stars\">★</label>\n  \n  <input type=\"radio\" name=\"rating\" id=\"star3\" value=\"3\">\n  <label for=\"star3\" title=\"3 stars\">★</label>\n  \n  <input type=\"radio\" name=\"rating\" id=\"star2\" value=\"2\">\n  <label for=\"star2\" title=\"2 stars\">★</label>\n  \n  <input type=\"radio\" name=\"rating\" id=\"star1\" value=\"1\">\n  <label for=\"star1\" title=\"1 star\">★</label>\n  \n  <span class=\"rating-value\" id=\"ratingValue\">0/5</span>\n</div>\n\n<script>\nconst stars = document.querySelectorAll('.rating input');\nconst ratingDisplay = document.getElementById('ratingValue');\n\nstars.forEach(star => {\n  star.addEventListener('change', function() {\n    ratingDisplay.textContent = `${this.value}/5`;\n  });\n});\n</script>",
      output: "Click on stars selects rating, stars fill with yellow color.",
      note: "flex-direction: row-reverse makes hovering work correctly with sibling selectors."
    },
    {
      title: "Create a CSS-Only Timeline",
      description: "Build a vertical timeline of events with alternating left/right content using CSS Grid.",
      answer: "Use CSS Grid with position relative for line, and transform for alternating positions.",
      example: ".timeline {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px 0;\n}\n\n.timeline::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  width: 2px;\n  height: 100%;\n  background: #ddd;\n  transform: translateX(-50%);\n}\n\n.timeline-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  position: relative;\n}\n\n.timeline-content {\n  width: 45%;\n  padding: 20px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n.timeline-item:nth-child(odd) .timeline-content {\n  margin-right: 55%;\n}\n\n.timeline-item:nth-child(even) .timeline-content {\n  margin-left: 55%;\n}\n\n.timeline-dot {\n  position: absolute;\n  left: 50%;\n  top: 20px;\n  width: 12px;\n  height: 12px;\n  background: #3498db;\n  border: 2px solid white;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  z-index: 1;\n}\n\n.timeline-date {\n  color: #3498db;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n@media (max-width: 768px) {\n  .timeline::before {\n    left: 20px;\n  }\n  \n  .timeline-item {\n    flex-direction: column;\n    align-items: flex-start;\n    padding-left: 40px;\n  }\n  \n  .timeline-dot {\n    left: 20px;\n  }\n  \n  .timeline-content {\n    width: 100%;\n  }\n  \n  .timeline-item:nth-child(odd) .timeline-content,\n  .timeline-item:nth-child(even) .timeline-content {\n    margin: 0;\n  }\n}",
      output: "Desktop: alternating left/right timeline with center line. Mobile: single column on left.",
      note: "Timeline is great for company history, education, or project milestones."
    },
    {
      title: "Create a CSS-Only Image Comparison Slider",
      description: "Build a before/after image slider using CSS resize and overflow properties.",
      answer: "Use two images stacked, with one having overflow: hidden and resize: horizontal.",
      example: ".comparison-slider {\n  position: relative;\n  width: 600px;\n  height: 400px;\n  overflow: hidden;\n}\n\n.comparison-slider img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.comparison-slider .after {\n  width: 50%;\n  resize: horizontal;\n  overflow: auto;\n  cursor: ew-resize;\n  opacity: 0;\n  z-index: 1;\n}\n\n.comparison-slider .after img {\n  width: auto;\n  max-width: none;\n}\n\n/* Better: Use range input */\n.slider-container {\n  position: relative;\n  width: 600px;\n  height: 400px;\n}\n\n.slider-image {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.slider-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.slider-overlay img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.slider-input {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n  z-index: 2;\n}\n\n<script>\nconst slider = document.querySelector('.slider-input');\nconst overlay = document.querySelector('.slider-overlay');\n\nslider.addEventListener('input', function() {\n  overlay.style.width = `${this.value}%`;\n});\n</script>",
      output: "Drag slider to compare before/after images, revealing one image over the other.",
      note: "JavaScript is used for smooth slider control; CSS-only has limitations."
    },
    {
      title: "Create a CSS-Only Parallax Scrolling Effect",
      description: "Build a parallax effect where background moves slower than foreground on scroll.",
      answer: "Use background-attachment: fixed or transform: translateZ with perspective.",
      example: ".parallax {\n  background-image: url('background.jpg');\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  min-height: 500px;\n}\n\n/* Modern 3D parallax */\n.parallax-container {\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  perspective: 1px;\n}\n\n.parallax-background {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: translateZ(-1px) scale(2);\n  background-image: url('background.jpg');\n  background-size: cover;\n  z-index: -1;\n}\n\n.parallax-foreground {\n  position: relative;\n  background: white;\n  z-index: 1;\n}\n\n/* Simple scroll effect */\n.simple-parallax {\n  height: 400px;\n  background-attachment: fixed;\n  background-size: cover;\n}",
      output: "Background image moves slower than content while scrolling.",
      note: "background-attachment: fixed works well but may cause performance issues on mobile."
    },
    {
      title: "Create a CSS-Only Marquee/Scrolling Text",
      description: "Build a horizontal scrolling text marquee using CSS animations.",
      answer: "Use keyframes with transform: translateX and infinite animation on a container.",
      example: ".marquee {\n  width: 100%;\n  overflow: hidden;\n  background: #f0f0f0;\n  white-space: nowrap;\n}\n\n.marquee-content {\n  display: inline-block;\n  animation: marquee 20s linear infinite;\n}\n\n@keyframes marquee {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(-50%); }\n}\n\n/* Pause on hover */\n.marquee:hover .marquee-content {\n  animation-play-state: paused;\n}\n\n/* Vertical marquee */\n.marquee-vertical {\n  height: 200px;\n  overflow: hidden;\n}\n\n.marquee-vertical-content {\n  animation: marqueeVertical 10s linear infinite;\n}\n\n@keyframes marqueeVertical {\n  0% { transform: translateY(0); }\n  100% { transform: translateY(-50%); }\n}\n\n/* Multiple items */\n.marquee-items {\n  display: flex;\n  gap: 50px;\n  animation: marquee 20s linear infinite;\n}\n\n.marquee-items:hover {\n  animation-play-state: paused;\n}",
      output: "Text scrolls horizontally across screen continuously, pauses on hover.",
      note: "Old <marquee> tag is deprecated; use CSS animations instead."
    },
    {
      title: "Create a CSS-Only Flip Card",
      description: "Build a 3D flip card that reveals back side when hovered.",
      answer: "Use transform-style: preserve-3d and backface-visibility with rotateY.",
      example: ".flip-card {\n  width: 300px;\n  height: 200px;\n  perspective: 1000px;\n}\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flip-card-front {\n  background: #3498db;\n  color: white;\n}\n\n.flip-card-back {\n  background: #2ecc71;\n  color: white;\n  transform: rotateY(180deg);\n}\n\n/* Vertical flip */\n.flip-card-vertical:hover .flip-card-inner {\n  transform: rotateX(180deg);\n}\n\n.flip-card-back-vertical {\n  transform: rotateX(180deg);\n}",
      output: "Card flips 180 degrees on hover to show back side.",
      note: "Backface-visibility: hidden hides reverse side when flipped."
    },
    {
      title: "Create a CSS Clip Path Shapes",
      description: "Build various shapes (circle, triangle, polygon) using CSS clip-path property.",
      answer: "Use clip-path with basic-shape values: circle(), ellipse(), polygon().",
      example: ".circle {\n  width: 200px;\n  height: 200px;\n  background: #3498db;\n  clip-path: circle(50%);\n}\n\n.triangle {\n  width: 200px;\n  height: 200px;\n  background: #e74c3c;\n  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n}\n\n.hexagon {\n  width: 200px;\n  height: 200px;\n  background: #2ecc71;\n  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\n}\n\n.star {\n  width: 200px;\n  height: 200px;\n  background: #f39c12;\n  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n}\n\n.heart {\n  width: 200px;\n  height: 200px;\n  background: #e74c3c;\n  clip-path: path(\"M0,0 C10,10 20,5 20,0 Z\"); /* Complex paths require SVG */\n}\n\n/* Animated clip-path */\n.animated-shape {\n  width: 200px;\n  height: 200px;\n  background: linear-gradient(45deg, #3498db, #2ecc71);\n  animation: morph 4s ease infinite;\n}\n\n@keyframes morph {\n  0% { clip-path: circle(50%); }\n  50% { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }\n  100% { clip-path: circle(50%); }\n}\n\n/* Text clip */\n.text-clip {\n  font-size: 80px;\n  font-weight: bold;\n  background: linear-gradient(45deg, #3498db, #e74c3c);\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n}",
      output: "Various shapes displayed using clip-path, animated shape morphs between circle and triangle.",
      note: "clip-path is widely supported in modern browsers; use vendor prefixes for older browsers."
    },
    {
      title: "Create a CSS Glassmorphism Card",
      description: "Build a modern glassmorphism card with blur effect on background.",
      answer: "Use backdrop-filter: blur() on semi-transparent background to create frosted glass effect.",
      example: ".glass-card {\n  background: rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  padding: 30px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  color: white;\n}\n\n.glass-dark {\n  background: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.glass-gradient {\n  background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));\n  backdrop-filter: blur(10px);\n}\n\n.glass-card:hover {\n  backdrop-filter: blur(15px);\n  transform: translateY(-5px);\n  transition: all 0.3s;\n}\n\n/* For dark background support */\n.dark .glass-card {\n  background: rgba(0, 0, 0, 0.3);\n  color: #fff;\n}\n\n/* Safari support */\n@supports (backdrop-filter: blur(10px)) {\n  .glass-card {\n    backdrop-filter: blur(10px);\n  }\n}",
      output: "Card with transparent, blurred background giving modern glass effect.",
      note: "backdrop-filter has good support but may have performance impact; always provide fallback."
    },
    {
      title: "Create a CSS-Only Scroll Snap Gallery",
      description: "Build a horizontal scrolling gallery that snaps to each item using scroll-snap.",
      answer: "Use scroll-snap-type on container and scroll-snap-align on items for smooth snapping.",
      example: ".scroll-gallery {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 20px;\n  padding: 20px;\n  scroll-behavior: smooth;\n}\n\n.gallery-item {\n  flex: 0 0 300px;\n  scroll-snap-align: start;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n.gallery-item img {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n}\n\n/* Vertical scroll snap */\n.vertical-snap {\n  height: 400px;\n  overflow-y: auto;\n  scroll-snap-type: y mandatory;\n}\n\n.snap-section {\n  height: 400px;\n  scroll-snap-align: start;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Scroll snap with margin (for fixed header) */\nhtml {\n  scroll-padding-top: 80px;\n  scroll-behavior: smooth;\n}\n\n.target-section {\n  scroll-margin-top: 80px;\n}\n\n/* Hide scrollbar (optional) */\n.scroll-gallery::-webkit-scrollbar {\n  display: none;\n}\n\n.scroll-gallery {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}",
      output: "Horizontal gallery where scrolling snaps to each image cleanly.",
      note: "scroll-snap improves user experience for carousels and image galleries."
    },
    {
      title: "Create a CSS-Only Color Picker Swatch",
      description: "Build a color swatch picker using radio buttons and CSS to show selected color.",
      answer: "Use hidden radio buttons and labels with background colors, display selected value with pseudo-element.",
      example: "<style>\n.swatch-group {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.swatch {\n  position: relative;\n}\n\n.swatch input {\n  display: none;\n}\n\n.swatch label {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all 0.2s;\n}\n\n.swatch input:checked + label {\n  border-color: #333;\n  transform: scale(1.1);\n  box-shadow: 0 0 0 2px white;\n}\n\n.color-red label { background: #e74c3c; }\n.color-blue label { background: #3498db; }\n.color-green label { background: #2ecc71; }\n.color-yellow label { background: #f39c12; }\n.color-purple label { background: #9b59b6; }\n\n.selected-color {\n  margin-top: 20px;\n  padding: 15px;\n  border-radius: 8px;\n  text-align: center;\n}\n\n#red:checked ~ .selected-color { background: #e74c3c; color: white; }\n#blue:checked ~ .selected-color { background: #3498db; color: white; }\n#green:checked ~ .selected-color { background: #2ecc71; color: white; }\n</style>\n\n<div class=\"swatch-group\">\n  <div class=\"swatch color-red\">\n    <input type=\"radio\" name=\"color\" id=\"red\">\n    <label for=\"red\" aria-label=\"Red\"></label>\n  </div>\n  <div class=\"swatch color-blue\">\n    <input type=\"radio\" name=\"color\" id=\"blue\">\n    <label for=\"blue\" aria-label=\"Blue\"></label>\n  </div>\n  <div class=\"swatch color-green\">\n    <input type=\"radio\" name=\"color\" id=\"green\">\n    <label for=\"green\" aria-label=\"Green\"></label>\n  </div>\n</div>\n\n<div class=\"selected-color\" id=\"colorDisplay\">Selected color will appear here</div>\n\n<script>\nconst radios = document.querySelectorAll('input[name=\"color\"]');\nconst display = document.getElementById('colorDisplay');\n\nradios.forEach(radio => {\n  radio.addEventListener('change', function() {\n    const color = this.id;\n    const colorMap = {\n      red: '#e74c3c',\n      blue: '#3498db',\n      green: '#2ecc71'\n    };\n    display.style.background = colorMap[color];\n    display.textContent = `Selected: ${color.toUpperCase()} color`;\n  });\n});\n</script>",
      output: "Click on color swatches selects color, preview area updates background.",
      note: "For pure CSS display, use general sibling selector (~) to show selected value."
    },
    {
      title: "Create a CSS-Only Animated Gradient Border",
      description: "Build an element with animated gradient border that moves around.",
      answer: "Use pseudo-element with linear-gradient and animation, positioned behind the card.",
      example: ".gradient-border {\n  position: relative;\n  background: #1a1a2e;\n  padding: 30px;\n  border-radius: 12px;\n  color: white;\n}\n\n.gradient-border::before {\n  content: \"\";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  background: linear-gradient(45deg, #ff006e, #ffbe0b, #3a86ff, #ff006e);\n  background-size: 400% 400%;\n  border-radius: 14px;\n  z-index: -1;\n  animation: gradientMove 3s ease infinite;\n}\n\n@keyframes gradientMove {\n  0% { background-position: 0% 50%; }\n  50% { background-position: 100% 50%; }\n  100% { background-position: 0% 50%; }\n}\n\n/* Border only (no background fill) */\n.gradient-border-only {\n  position: relative;\n  background: white;\n  padding: 30px;\n  border-radius: 12px;\n}\n\n.gradient-border-only::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  padding: 2px;\n  background: linear-gradient(45deg, #ff006e, #ffbe0b, #3a86ff);\n  background-size: 400% 400%;\n  border-radius: 12px;\n  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  mask-composite: exclude;\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  animation: gradientMove 3s ease infinite;\n}",
      output: "Animated gradient border that shifts colors around element.",
      note: "Mask technique for border-only requires modern browser support."
    },
    {
      title: "Create a CSS Neon Glow Text Effect",
      description: "Build text with neon glow effect that pulses or changes color.",
      answer: "Use text-shadow with multiple layers and animation for pulse effect.",
      example: ".neon-text {\n  font-size: 60px;\n  color: #00ffcc;\n  text-shadow:\n    0 0 5px #00ffcc,\n    0 0 10px #00ffcc,\n    0 0 20px #00ffcc,\n    0 0 40px #00ffcc;\n  animation: neonPulse 1.5s ease-in-out infinite;\n}\n\n@keyframes neonPulse {\n  0%, 100% {\n    text-shadow:\n      0 0 5px #00ffcc,\n      0 0 10px #00ffcc,\n      0 0 20px #00ffcc,\n      0 0 40px #00ffcc;\n  }\n  50% {\n    text-shadow:\n      0 0 2px #00ffcc,\n      0 0 5px #00ffcc,\n      0 0 10px #00ffcc,\n      0 0 20px #00ffcc;\n  }\n}\n\n/* Multiple color neon */\n.neon-multi {\n  color: #fff;\n  text-shadow:\n    0 0 5px #ff006e,\n    0 0 10px #ff006e,\n    0 0 20px #ffbe0b,\n    0 0 40px #ffbe0b,\n    0 0 80px #3a86ff;\n}\n\n/* Neon button */\n.neon-button {\n  background: none;\n  border: 2px solid #00ffcc;\n  color: #00ffcc;\n  padding: 12px 30px;\n  font-size: 18px;\n  border-radius: 4px;\n  transition: all 0.3s;\n  box-shadow: 0 0 10px #00ffcc;\n}\n\n.neon-button:hover {\n  background: #00ffcc;\n  color: #1a1a2e;\n  box-shadow: 0 0 20px #00ffcc;\n}",
      output: "Bright glowing text with pulsing effect, button glows on hover.",
      note: "Too many text-shadow layers may affect performance; keep reasonable."
    },
    {
      title: "Create a CSS CSS-only Burger Menu Icon Animation",
      description: "Build animated hamburger menu icon that transforms into 'X' when clicked.",
      answer: "Use three spans with transitions and transforms to create animated icon.",
      example: "<style>\n.hamburger {\n  width: 30px;\n  height: 24px;\n  position: relative;\n  cursor: pointer;\n}\n\n.hamburger span {\n  display: block;\n  position: absolute;\n  height: 3px;\n  width: 100%;\n  background: #333;\n  border-radius: 3px;\n  transition: all 0.3s ease;\n}\n\n.hamburger span:nth-child(1) { top: 0; }\n.hamburger span:nth-child(2) { top: 10px; }\n.hamburger span:nth-child(3) { top: 20px; }\n\n.hamburger.active span:nth-child(1) {\n  transform: rotate(45deg);\n  top: 10px;\n}\n\n.hamburger.active span:nth-child(2) {\n  opacity: 0;\n}\n\n.hamburger.active span:nth-child(3) {\n  transform: rotate(-45deg);\n  top: 10px;\n}\n\n/* With JavaScript toggle */\n</style>\n\n<div class=\"hamburger\" id=\"hamburger\">\n  <span></span>\n  <span></span>\n  <span></span>\n</div>\n\n<script>\nconst hamburger = document.getElementById('hamburger');\nhamburger.addEventListener('click', () => {\n  hamburger.classList.toggle('active');\n});\n</script>",
      output: "Three lines transform into X shape when clicked.",
      note: "JavaScript is required to toggle the active class on click."
    },
    {
      title: "Create a CSS-Only Animated Text Typing Effect",
      description: "Build typewriter effect where text appears letter by letter.",
      answer: "Use steps() animation on width and border-right for cursor.",
      example: ".typewriter {\n  font-size: 24px;\n  font-family: monospace;\n  overflow: hidden;\n  white-space: nowrap;\n  border-right: 2px solid;\n  width: 0;\n  animation:\n    typing 3s steps(30, end) forwards,\n    blink 0.75s step-end infinite;\n}\n\n@keyframes typing {\n  from { width: 0; }\n  to { width: 100%; }\n}\n\n@keyframes blink {\n  from, to { border-color: transparent; }\n  50% { border-color: black; }\n}\n\n/* Multi-line typewriter */\n.lines-container {\n  font-size: 20px;\n  font-family: monospace;\n}\n\n.line1 { animation: typeLine1 2s steps(20, end) forwards; }\n.line2 { animation: typeLine2 2s steps(25, end) forwards 2s; }\n\n@keyframes typeLine1 {\n  from { width: 0; }\n  to { width: 100%; }\n}\n\n@keyframes typeLine2 {\n  from { width: 0; }\n  to { width: 100%; }\n}\n\n/* With HTML content */\n.typewriter-html {\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  animation: typing 2s steps(20, end);\n}",
      output: "Text appears letter by letter with blinking cursor at end.",
      note: "steps() must match number of characters for accurate timing."
    },
    {
      title: "Create a CSS-Only Water Wave Effect",
      description: "Build animated water wave effect for backgrounds using SVG and CSS.",
      answer: "Use SVG wave path with CSS animation to create continuous wave motion.",
      example: ".wave-container {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n}\n\n.wave {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"%233498db\" fill-opacity=\"1\" d=\"M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\"></path></svg>');\n  background-size: cover;\n  animation: wave 5s linear infinite;\n}\n\n@keyframes wave {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(-100px); }\n}\n\n/* CSS-only wave (pure CSS) */\n.css-wave {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  background: #3498db;\n}\n\n.css-wave::before,\n.css-wave::after {\n  content: \"\";\n  position: absolute;\n  width: 200%;\n  height: 100%;\n  top: -50%;\n  left: -50%;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 38%;\n  animation: waveMove 10s linear infinite;\n}\n\n.css-wave::after {\n  background: rgba(255, 255, 255, 0.3);\n  animation: waveMove 15s linear infinite reverse;\n}\n\n@keyframes waveMove {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}",
      output: "Animated wave effect moving horizontally across bottom of container.",
      note: "Pure CSS wave is simpler but SVG gives more control over wave shape."
    }
  ],
  experienced: [
    {
      title: "Implement a CSS-Only Image Slider with Keyframe Animations",
      description: "Build a fully functional image slider that auto-rotates using only CSS keyframes.",
      answer: "Use flexbox or grid to line up images horizontally, animate transform: translateX with percentages.",
      example: ".slider {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n\n.slider-track {\n  display: flex;\n  width: 300%;\n  animation: slide 12s infinite;\n}\n\n.slide {\n  width: 33.333%;\n}\n\n.slide img {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n}\n\n@keyframes slide {\n  0%, 25% { transform: translateX(0); }\n  33%, 58% { transform: translateX(-33.333%); }\n  66%, 91% { transform: translateX(-66.666%); }\n  100% { transform: translateX(0); }\n}\n\n/* Pause on hover */\n.slider:hover .slider-track {\n  animation-play-state: paused;\n}\n\n/* Navigation dots (CSS-only) */\n.dots {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: #ccc;\n  border-radius: 50%;\n  margin: 0 5px;\n}\n\n/* Limited control for current dot with :target would need more complexity */",
      output: "Images automatically slide every 4 seconds, pause on hover.",
      note: "CSS-only sliders have limited navigation control; JavaScript recommended for full functionality."
    },
    {
      title: "Build a Dark/Light Theme Toggle Using CSS Variables",
      description: "Create a theme switcher that toggles between dark and light mode using CSS variables and JavaScript.",
      answer: "Define color variables in :root, create dark theme class, use JavaScript to toggle class on body.",
      example: "<style>\n:root {\n  --bg-primary: #ffffff;\n  --bg-secondary: #f5f5f5;\n  --text-primary: #1a1a1a;\n  --text-secondary: #666666;\n  --border-color: #e0e0e0;\n  --card-bg: #ffffff;\n  --shadow: rgba(0,0,0,0.1);\n}\n\n[data-theme=\"dark\"] {\n  --bg-primary: #1a1a1a;\n  --bg-secondary: #2d2d2d;\n  --text-primary: #ffffff;\n  --text-secondary: #b0b0b0;\n  --border-color: #404040;\n  --card-bg: #2d2d2d;\n  --shadow: rgba(255,255,255,0.05);\n}\n\nbody {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: background 0.3s, color 0.3s;\n}\n\n.card {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  box-shadow: 0 2px 8px var(--shadow);\n}\n\n.theme-toggle {\n  padding: 10px 20px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n}\n</style>\n\n<button class=\"theme-toggle\" onclick=\"toggleTheme()\">Toggle Theme</button>\n\n<script>\nfunction toggleTheme() {\n  const html = document.documentElement;\n  const currentTheme = html.getAttribute('data-theme');\n  \n  if (currentTheme === 'dark') {\n    html.removeAttribute('data-theme');\n    localStorage.setItem('theme', 'light');\n  } else {\n    html.setAttribute('data-theme', 'dark');\n    localStorage.setItem('theme', 'dark');\n  }\n}\n\n// Load saved theme\nconst savedTheme = localStorage.getItem('theme');\nif (savedTheme === 'dark') {\n  document.documentElement.setAttribute('data-theme', 'dark');\n}\n</script>",
      output: "Click toggle button switches between light and dark theme with smooth transitions.",
      note: "CSS variables make theming incredibly easy; store preference in localStorage."
    },
    {
      title: "Create a Fully Responsive Grid Gallery Using CSS Grid",
      description: "Build a responsive image gallery using CSS Grid that adapts to different screen sizes automatically.",
      answer: "Use grid-template-columns with repeat(auto-fill, minmax(250px, 1fr)) for responsive columns.",
      example: ".gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n\n.gallery-item {\n  position: relative;\n  overflow: hidden;\n  border-radius: 12px;\n  aspect-ratio: 1 / 1;\n}\n\n.gallery-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s;\n}\n\n.gallery-item:hover img {\n  transform: scale(1.1);\n}\n\n.gallery-overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);\n  color: white;\n  padding: 20px;\n  transform: translateY(100%);\n  transition: transform 0.3s;\n}\n\n.gallery-item:hover .gallery-overlay {\n  transform: translateY(0);\n}\n\n/* Masonry style with different heights */\n.gallery-masonry {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n  grid-auto-rows: 250px;\n}\n\n.gallery-masonry .tall {\n  grid-row: span 2;\n}\n\n.gallery-masonry .wide {\n  grid-column: span 2;\n}\n\n@media (max-width: 768px) {\n  .gallery {\n    gap: 10px;\n  }\n  \n  .gallery-masonry .wide {\n    grid-column: span 1;\n  }\n}",
      output: "Images arranged in responsive grid, overlays appear on hover, masonry variant has varying heights.",
      note: "auto-fill creates as many columns as possible; auto-fit stretches columns to fill space."
    },
    {
      title: "Create a CSS-Only Animated Gradient Background",
      description: "Build a background with animated gradient that shifts colors continuously.",
      answer: "Use linear-gradient with background-size: 200% 200% and keyframes for movement.",
      example: ".animated-bg {\n  background: linear-gradient(45deg, #ff006e, #ffbe0b, #3a86ff, #8338ec);\n  background-size: 400% 400%;\n  animation: gradientShift 10s ease infinite;\n  height: 100vh;\n}\n\n@keyframes gradientShift {\n  0% { background-position: 0% 50%; }\n  50% { background-position: 100% 50%; }\n  100% { background-position: 0% 50%; }\n}\n\n/* Subtle moving gradient */\n.subtle-gradient {\n  background: linear-gradient(90deg, #667eea, #764ba2, #667eea);\n  background-size: 200% 100%;\n  animation: subtleMove 5s linear infinite;\n}\n\n@keyframes subtleMove {\n  0% { background-position: 0% 50%; }\n  100% { background-position: 200% 50%; }\n}\n\n/* Conic gradient animation */\n.conic-bg {\n  background: conic-gradient(from 0deg, #ff006e, #ffbe0b, #3a86ff, #ff006e);\n  background-size: 200% 200%;\n  animation: conicSpin 10s linear infinite;\n}\n\n@keyframes conicSpin {\n  0% { background-position: 0% 0%; }\n  100% { background-position: 100% 100%; }\n}",
      output: "Background smoothly transitions between multiple colors.",
      note: "Large background-size with position animation creates smooth gradient movement."
    },
    {
      title: "Create a CSS 3D Card Flip Gallery",
      description: "Build a 3D gallery where each card flips in 3D space on hover or click.",
      answer: "Use transform-style: preserve-3d and rotateY for flip animation.",
      example: ".gallery-3d {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 30px;\n  padding: 30px;\n  perspective: 1000px;\n}\n\n.card-3d {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  transform-style: preserve-3d;\n  transition: transform 0.6s;\n  cursor: pointer;\n}\n\n.card-3d:hover {\n  transform: rotateY(180deg);\n}\n\n.card-front, .card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 20px;\n}\n\n.card-front {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n}\n\n.card-back {\n  background: white;\n  transform: rotateY(180deg);\n  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n}\n\n/* Vertical flip */\n.card-3d-vertical:hover {\n  transform: rotateX(180deg);\n}\n\n.card-back-vertical {\n  transform: rotateX(180deg);\n}\n\n/* Multiple cards */\n.card-3d:nth-child(1) { transition-delay: 0s; }\n.card-3d:nth-child(2) { transition-delay: 0.1s; }\n.card-3d:nth-child(3) { transition-delay: 0.2s; }",
      output: "Each card flips in 3D revealing back side on hover.",
      note: "backface-visibility: hidden prevents reverse side from showing during flip."
    },
    {
      title: "Create an Animated CSS Loader with Multiple Elements",
      description: "Build a complex loading animation with multiple moving parts (dots, bars, spinner).",
      answer: "Use multiple elements with staggered animations using animation-delay.",
      example: ".loader {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.loader-dot {\n  width: 20px;\n  height: 20px;\n  background: #3498db;\n  border-radius: 50%;\n  animation: bounce 0.6s ease-in-out infinite;\n}\n\n.loader-dot:nth-child(1) { animation-delay: 0s; }\n.loader-dot:nth-child(2) { animation-delay: 0.1s; }\n.loader-dot:nth-child(3) { animation-delay: 0.2s; }\n.loader-dot:nth-child(4) { animation-delay: 0.3s; }\n\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-30px); }\n}\n\n/* Pulsing circles */\n.pulse-loader {\n  position: relative;\n  width: 100px;\n  height: 100px;\n}\n\n.pulse-loader div {\n  position: absolute;\n  border: 4px solid #3498db;\n  border-radius: 50%;\n  animation: pulse 1.5s ease-out infinite;\n}\n\n.pulse-loader div:nth-child(2) { animation-delay: 0.5s; }\n.pulse-loader div:nth-child(3) { animation-delay: 1s; }\n\n@keyframes pulse {\n  0% {\n    top: 50px;\n    left: 50px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    width: 100px;\n    height: 100px;\n    opacity: 0;\n  }\n}\n\n/* Rotating squares */\n.rotate-loader {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  animation: spin 1s linear infinite;\n}\n\n.rotate-loader::before,\n.rotate-loader::after {\n  content: \"\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: #3498db;\n  border-radius: 4px;\n}\n\n.rotate-loader::before {\n  top: 0;\n  left: 0;\n  animation: moveSquare 2s ease infinite;\n}\n\n.rotate-loader::after {\n  bottom: 0;\n  right: 0;\n  animation: moveSquare 2s ease infinite reverse;\n}\n\n@keyframes moveSquare {\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(30px, 0); }\n  50% { transform: translate(30px, 30px); }\n  75% { transform: translate(0, 30px); }\n}\n\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}",
      output: "Animated loading indicators: bouncing dots, pulsing rings, and rotating squares.",
      note: "Staggered animations create more dynamic loading effects."
    },
    {
      title: "Create a CSS-Only Animated Mega Menu",
      description: "Build a full-width mega menu that expands on hover with smooth animation.",
      answer: "Use absolute positioning on dropdown, transform scale for animation.",
      example: ".mega-menu {\n  position: relative;\n}\n\n.mega-menu-content {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background: white;\n  box-shadow: 0 10px 30px rgba(0,0,0,0.1);\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  padding: 30px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-10px);\n  transition: all 0.3s ease;\n  z-index: 100;\n}\n\n.mega-menu:hover .mega-menu-content {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n.mega-menu-section h4 {\n  margin-bottom: 15px;\n  color: #333;\n}\n\n.mega-menu-section ul {\n  list-style: none;\n  padding: 0;\n}\n\n.mega-menu-section li {\n  margin-bottom: 8px;\n}\n\n.mega-menu-section a {\n  text-decoration: none;\n  color: #666;\n  transition: color 0.3s;\n}\n\n.mega-menu-section a:hover {\n  color: #3498db;\n}\n\n@media (max-width: 768px) {\n  .mega-menu-content {\n    grid-template-columns: 1fr;\n    position: static;\n    opacity: 1;\n    visibility: visible;\n    transform: none;\n    box-shadow: none;\n    padding: 10px 0;\n  }\n}",
      output: "Full-width mega menu expands smoothly on hover with multiple columns.",
      note: "Mega menus are great for sites with many categories or products."
    },
    {
      title: "Create a CSS Grid Area Layout with Named Grid Areas",
      description: "Build a complex page layout using named grid areas for better readability.",
      answer: "Use grid-template-areas to name sections, then assign elements to areas.",
      example: ".dashboard {\n  display: grid;\n  grid-template-areas:\n    \"header header header header\"\n    \"sidebar main main main\"\n    \"widget1 widget2 widget3 widget4\"\n    \"footer footer footer footer\";\n  grid-template-columns: 250px 1fr 1fr 1fr;\n  gap: 20px;\n  min-height: 100vh;\n  padding: 20px;\n}\n\n.header { grid-area: header; background: #333; color: white; padding: 20px; }\n.sidebar { grid-area: sidebar; background: #f0f0f0; padding: 20px; }\n.main { grid-area: main; padding: 20px; }\n.widget1 { grid-area: widget1; background: #f8f9fa; padding: 20px; border-radius: 8px; }\n.widget2 { grid-area: widget2; background: #f8f9fa; padding: 20px; border-radius: 8px; }\n.widget3 { grid-area: widget3; background: #f8f9fa; padding: 20px; border-radius: 8px; }\n.widget4 { grid-area: widget4; background: #f8f9fa; padding: 20px; border-radius: 8px; }\n.footer { grid-area: footer; background: #333; color: white; padding: 20px; }\n\n@media (max-width: 768px) {\n  .dashboard {\n    grid-template-areas:\n      \"header\"\n      \"sidebar\"\n      \"main\"\n      \"widget1\"\n      \"widget2\"\n      \"widget3\"\n      \"widget4\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n}",
      output: "Dashboard layout with header, sidebar, main content, four widgets, and footer.",
      note: "Named grid areas make layout code more readable and maintainable."
    },
    {
      title: "Create a CSS Custom Checkbox with Ripple Effect",
      description: "Build a custom checkbox with ripple animation when clicked.",
      answer: "Use pseudo-elements with transform scale for ripple effect on click.",
      example: "<style>\n.custom-checkbox {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  gap: 10px;\n}\n\n.custom-checkbox input {\n  display: none;\n}\n\n.checkmark {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #3498db;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n\n.custom-checkbox input:checked + .checkmark {\n  background: #3498db;\n  border-color: #3498db;\n}\n\n.custom-checkbox input:checked + .checkmark::after {\n  content: \"✓\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 14px;\n}\n\n/* Ripple effect */\n.checkmark::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background: rgba(52,152,219,0.3);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  transition: width 0.3s, height 0.3s;\n}\n\n.custom-checkbox input:active + .checkmark::before {\n  width: 40px;\n  height: 40px;\n}\n\n/* Focus ring for accessibility */\n.custom-checkbox input:focus + .checkmark {\n  box-shadow: 0 0 0 2px rgba(52,152,219,0.5);\n}\n\n/* Disabled state */\n.custom-checkbox input:disabled + .checkmark {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n</style>\n\n<label class=\"custom-checkbox\">\n  <input type=\"checkbox\">\n  <span class=\"checkmark\"></span>\n  Accept terms and conditions\n</label>",
      output: "Custom checkbox with ripple animation when clicked and proper focus indicator.",
      note: "Always maintain accessibility with proper focus styles."
    },
    {
      title: "Create a CSS-Only Pricing Slider Toggle",
      description: "Build a monthly/yearly pricing toggle switch that changes displayed prices.",
      answer: "Use checkbox or radio buttons with CSS to show/hide different price sets.",
      example: "<style>\n.pricing-toggle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 30px;\n}\n\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\ninput:checked + .slider {\n  background-color: #3498db;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n.pricing-plans {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n\n.plan {\n  background: white;\n  border-radius: 12px;\n  padding: 30px;\n  text-align: center;\n  width: 250px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n.price {\n  font-size: 36px;\n  font-weight: bold;\n  margin: 20px 0;\n}\n\n.monthly-price,\n.yearly-price {\n  display: none;\n}\n\n#pricingToggle:checked ~ .pricing-plans .monthly-price {\n  display: inline;\n}\n\n#pricingToggle:checked ~ .pricing-plans .yearly-price {\n  display: none;\n}\n\n.pricing-plans .monthly-price {\n  display: none;\n}\n\n.pricing-plans .yearly-price {\n  display: inline;\n}\n</style>\n\n<div class=\"pricing-toggle\">\n  <span>Monthly</span>\n  <label class=\"toggle-switch\">\n    <input type=\"checkbox\" id=\"pricingToggle\">\n    <span class=\"slider\"></span>\n  </label>\n  <span>Yearly</span>\n</div>\n\n<div class=\"pricing-plans\">\n  <div class=\"plan\">\n    <h3>Basic</h3>\n    <div class=\"price\">\n      <span class=\"monthly-price\">$9.99</span>\n      <span class=\"yearly-price\">$99.99</span>\n    </div>\n  </div>\n</div>\n\n<script>\n// JavaScript to toggle visibility (simpler than CSS-only)\nconst toggle = document.getElementById('pricingToggle');\nconst monthlyPrices = document.querySelectorAll('.monthly-price');\nconst yearlyPrices = document.querySelectorAll('.yearly-price');\n\ntoggle.addEventListener('change', function() {\n  if (this.checked) {\n    monthlyPrices.forEach(p => p.style.display = 'inline');\n    yearlyPrices.forEach(p => p.style.display = 'none');\n  } else {\n    monthlyPrices.forEach(p => p.style.display = 'none');\n    yearlyPrices.forEach(p => p.style.display = 'inline');\n  }\n});\n</script>",
      output: "Toggle switch changes displayed pricing between monthly and yearly.",
      note: "JavaScript makes price switching easier; CSS-only required more complex selectors."
    },
    {
      title: "Create a CSS-Only Animated Page Transition",
      description: "Build smooth page transition effects when navigating between pages.",
      answer: "Use CSS transitions on opacity with JavaScript to trigger class changes.",
      example: "<style>\n.page-transition {\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n\n.page-transition.fade-out {\n  opacity: 0;\n}\n\n/* Slide transition */\n.slide-transition {\n  position: relative;\n  animation: slideIn 0.5s ease;\n}\n\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n/* Scale transition */\n.scale-transition {\n  animation: scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n@keyframes scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n/* Loading indicator */\n.loader-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n}\n\n.loader-overlay.active {\n  opacity: 1;\n  visibility: visible;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n</style>\n\n<script>\ndocument.querySelectorAll('a').forEach(link => {\n  link.addEventListener('click', function(e) {\n    e.preventDefault();\n    const href = this.href;\n    \n    document.body.classList.add('fade-out');\n    \n    setTimeout(() => {\n      window.location.href = href;\n    }, 300);\n  });\n});\n</script>",
      output: "Page fades out before navigation and fades in on new page.",
      note: "Using View Transitions API is modern alternative for page transitions."
    },
    {
      title: "Create a CSS-Only Animated Tooltip with Arrow",
      description: "Build tooltip with arrow pointer that appears on hover with animation.",
      answer: "Use pseudo-elements ::before and ::after for arrow and tooltip text.",
      example: ".tooltip-container {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip-text {\n  visibility: hidden;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  padding: 8px 12px;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  opacity: 0;\n  transition: all 0.3s;\n  pointer-events: none;\n}\n\n.tooltip-text::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #333 transparent transparent transparent;\n}\n\n.tooltip-container:hover .tooltip-text {\n  visibility: visible;\n  opacity: 1;\n  transform: translateX(-50%) translateY(-5px);\n}\n\n/* Top tooltip */\n.tooltip-top .tooltip-text {\n  bottom: 125%;\n  top: auto;\n}\n\n/* Bottom tooltip */\n.tooltip-bottom .tooltip-text {\n  top: 125%;\n  bottom: auto;\n}\n\n.tooltip-bottom .tooltip-text::after {\n  top: auto;\n  bottom: 100%;\n  border-color: transparent transparent #333 transparent;\n}\n\n/* Left tooltip */\n.tooltip-left .tooltip-text {\n  right: 125%;\n  left: auto;\n  bottom: 50%;\n  transform: translateY(50%);\n}\n\n.tooltip-left .tooltip-text::after {\n  left: 100%;\n  top: 50%;\n  border-color: transparent transparent transparent #333;\n}\n\n/* Right tooltip */\n.tooltip-right .tooltip-text {\n  left: 125%;\n  right: auto;\n  bottom: 50%;\n  transform: translateY(50%);\n}\n\n.tooltip-right .tooltip-text::after {\n  right: 100%;\n  left: auto;\n  border-color: transparent #333 transparent transparent;\n}",
      output: "Tooltip with arrow appears smoothly on hover with slight upward movement.",
      note: "position: relative on container is essential for absolute positioning of tooltip."
    }
  ]
};
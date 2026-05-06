  export const problems = {
    fresher: [
      {
        title: "Create a Responsive Navigation Bar",
        description: "Build a navigation bar that works on mobile, tablet, and desktop. On mobile, it should collapse into a hamburger menu.",
        answer: "Use flexbox for layout, media queries for responsiveness, and CSS for the hamburger icon.",
        example: "<nav class='navbar'>\n  <div class='logo'>MySite</div>\n  <ul class='nav-links'>\n    <li><a href='#'>Home</a></li>\n    <li><a href='#'>About</a></li>\n    <li><a href='#'>Services</a></li>\n    <li><a href='#'>Contact</a></li>\n  </ul>\n  <div class='hamburger'>&#9776;</div>\n</nav>\n\n<style>\n  .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #333; color: white; }\n  .nav-links { display: flex; list-style: none; gap: 2rem; }\n  .hamburger { display: none; font-size: 1.5rem; cursor: pointer; }\n  @media (max-width: 768px) { .nav-links { display: none; } .hamburger { display: block; } }\n</style>",
        output: "Desktop: horizontal menu. Mobile: hamburger icon that reveals menu when clicked (with JavaScript)."
      },
      {
        title: "Build a Registration Form with Validation",
        description: "Create a registration form with name, email, password, and confirm password fields. Add HTML5 validation.",
        answer: "Use input types: text, email, password. Add required, pattern, and minlength attributes for validation.",
        example: "<form>\n  <label>Name:</label>\n  <input type='text' required placeholder='Full name'><br>\n  <label>Email:</label>\n  <input type='email' required placeholder='email@example.com'><br>\n  <label>Password:</label>\n  <input type='password' required minlength='6'><br>\n  <label>Confirm Password:</label>\n  <input type='password' required><br>\n  <button type='submit'>Register</button>\n</form>",
        output: "Form with validation: email must contain @, password minimum 6 characters, all fields required."
      },
      {
        title: "Design a Semantic Blog Post Layout",
        description: "Create a blog post page with header, navigation, main article, sidebar, and footer.",
        answer: "Use semantic HTML5 tags: header, nav, main, article, aside, footer for better SEO and accessibility.",
        example: "<header><h1>My Blog</h1><nav><a href='/'>Home</a> <a href='/about'>About</a></nav></header>\n<main>\n  <article>\n    <h2>Blog Post Title</h2>\n    <p>Published on <time>Jan 15, 2024</time></p>\n    <p>Content goes here...</p>\n  </article>\n  <aside>\n    <h3>About Author</h3>\n    <p>John Doe is a web developer.</p>\n  </aside>\n</main>\n<footer>&copy; 2024 My Blog</footer>",
        output: "Professional blog layout with header, navigation, main content, sidebar, and footer."
      },
      {
        title: "Create a Table with Merged Cells",
        description: "Create a weekly class schedule using rowspan and colspan to merge cells.",
        answer: "Use rowspan to merge rows, colspan to merge columns in the table.",
        example: "<table border='1'>\n  <thead><tr><th>Time</th><th>Monday</th><th>Tuesday</th></tr></thead>\n  <tbody>\n    <tr><td rowspan='2'>Morning</td><td>Math</td><td>Science</td></tr>\n    <tr><td>English</td><td>History</td></tr>\n    <tr><td colspan='3'>Lunch Break</td></tr>\n  </tbody>\n</table>",
        output: "Table where morning row spans 2 rows, lunch row spans 3 columns."
      },
      {
        title: "Build a Product Card Component",
        description: "Create a product card with image, title, price, description, and add to cart button.",
        answer: "Use div container with CSS styling: border, border-radius, shadow, hover effects.",
        example: "<div class='card'>\n  <img src='product.jpg' alt='Product' class='card-img'>\n  <div class='card-body'>\n    <h3>Product Name</h3>\n    <p class='price'>$49.99</p>\n    <p>Product description goes here.</p>\n    <button class='btn'>Add to Cart</button>\n  </div>\n</div>\n\n<style>\n  .card { border: 1px solid #ddd; border-radius: 8px; width: 250px; margin: 10px; }\n  .card-img { width: 100%; height: 200px; object-fit: cover; }\n  .card-body { padding: 15px; }\n  .price { color: green; font-weight: bold; }\n  .btn { background: blue; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer; }\n</style>",
        output: "Card displays product image, title, price, description, and a styled button."
      },
      {
        title: "Create a Responsive Image Gallery",
        description: "Build a gallery with 6 images that arranges in 3 columns on desktop, 2 on tablet, 1 on mobile.",
        answer: "Use CSS Grid with media queries for responsive columns.",
        example: "<div class='gallery'>\n  <img src='img1.jpg'><img src='img2.jpg'><img src='img3.jpg'>\n  <img src='img4.jpg'><img src='img5.jpg'><img src='img6.jpg'>\n</div>\n\n<style>\n  .gallery { display: grid; gap: 10px; padding: 10px; }\n  .gallery img { width: 100%; height: 200px; object-fit: cover; }\n  @media (min-width: 1024px) { .gallery { grid-template-columns: repeat(3, 1fr); } }\n  @media (min-width: 600px) and (max-width: 1023px) { .gallery { grid-template-columns: repeat(2, 1fr); } }\n  @media (max-width: 599px) { .gallery { grid-template-columns: 1fr; } }\n</style>",
        output: "Desktop shows 3 columns, tablet 2 columns, mobile 1 column."
      },
      {
        title: "Build a Pricing Table",
        description: "Create a pricing table with 3 plans: Basic, Pro, Premium showing features and prices.",
        answer: "Use flexbox or grid to display cards side by side with different pricing tiers.",
        example: "<div class='pricing'>\n  <div class='plan'><h3>Basic</h3><p class='price'>$9.99/mo</p><ul><li>Feature 1</li><li>Feature 2</li></ul><button>Sign Up</button></div>\n  <div class='plan popular'><h3>Pro</h3><p class='price'>$19.99/mo</p><ul><li>All Basic</li><li>Feature 3</li><li>Feature 4</li></ul><button>Sign Up</button></div>\n  <div class='plan'><h3>Premium</h3><p class='price'>$29.99/mo</p><ul><li>All Pro</li><li>Feature 5</li><li>Feature 6</li></ul><button>Sign Up</button></div>\n</div>",
        output: "Three pricing cards side by side with different features and prices."
      },
      {
        title: "Create an FAQ Section with Details/Summary",
        description: "Build an FAQ section with at least 5 questions using details and summary tags for expand/collapse.",
        answer: "Use `<details>` and `<summary>` tags which provide native expand/collapse without JavaScript.",
        example: "<div class='faq'>\n  <details><summary>What is HTML?</summary><p>HTML is the standard markup language for web pages.</p></details>\n  <details><summary>What is CSS?</summary><p>CSS styles HTML elements.</p></details>\n  <details><summary>What is JavaScript?</summary><p>JavaScript adds interactivity to web pages.</p></details>\n</div>",
        output: "Clicking each question expands to show the answer. No JavaScript needed."
      },
      {
        title: "Create a Responsive Footer",
        description: "Design a footer with logo, quick links, contact info, social media icons, and copyright.",
        answer: "Use flexbox for layout, font icons or emojis for social media, and responsive columns.",
        example: "<footer>\n  <div class='footer-col'><h3>Logo</h3><p>About company</p></div>\n  <div class='footer-col'><h3>Quick Links</h3><a href='#'>Home</a><a href='#'>About</a></div>\n  <div class='footer-col'><h3>Contact</h3><p>Email: info@example.com</p><p>Phone: 123-456-7890</p></div>\n  <div class='footer-col'><h3>Follow Us</h3><div>📘 💙 🐦</div></div>\n  <div class='copyright'>&copy; 2024 Company. All rights reserved.</div>\n</footer>",
        output: "Footer with multiple columns, social icons, and copyright at bottom."
      },
      {
        title: "Create a Login Form",
        description: "Build a login form with username/email, password, remember me checkbox, and login button.",
        answer: "Use form, input fields, checkbox, and submit button with proper labels.",
        example: "<form class='login-form'>\n  <h2>Login</h2>\n  <input type='email' placeholder='Email' required>\n  <input type='password' placeholder='Password' required>\n  <label><input type='checkbox'> Remember me</label>\n  <button type='submit'>Login</button>\n  <a href='#'>Forgot Password?</a>\n</form>",
        output: "Login form with email, password fields, remember me checkbox, and login button."
      },
      {
        title: "Create a Breadcrumb Navigation",
        description: "Build breadcrumb navigation showing: Home > Products > Electronics > Laptops.",
        answer: "Use an ordered list or divs with separators (>, /, or arrow).",
        example: "<nav class='breadcrumb'>\n  <a href='/'>Home</a> >\n  <a href='/products'>Products</a> >\n  <a href='/electronics'>Electronics</a> >\n  <span>Laptops</span>\n</nav>",
        output: "Shows navigation path: Home > Products > Electronics > Laptops."
      },
      {
        title: "Create a Progress Bar",
        description: "Create a progress bar showing 75% completion for a course.",
        answer: "Use the HTML5 `<progress>` tag or create custom progress bar with div and CSS.",
        example: "<label>Course Progress: 75%</label>\n<progress value='75' max='100'>75%</progress>\n\n<!-- OR custom progress bar -->\n<div class='progress-bar'>\n  <div class='progress-fill' style='width: 75%;'></div>\n</div>",
        output: "Shows a progress bar filled 75% of the way."
      },
      {
        title: "Create a Tooltip on Hover",
        description: "When user hovers over an element, show a tooltip with additional information.",
        answer: "Use the title attribute for simple tooltips, or CSS pseudo-elements for custom tooltips.",
        example: "<span title='This is a tooltip'>Hover over me</span>\n\n<style>\n  .tooltip:hover::after { content: 'Tooltip text'; position: absolute; background: black; color: white; padding: 5px; }\n</style>",
        output: "Hovering shows a small popup with tooltip text."
      },
      {
        title: "Create a Toggle Switch",
        description: "Build a CSS-only toggle switch (on/off button) using checkbox and CSS.",
        answer: "Hide default checkbox, style a slider that moves when checked using :checked selector.",
        example: "<label class='switch'>\n  <input type='checkbox'>\n  <span class='slider'></span>\n</label>\n<style>\n  .switch { position: relative; display: inline-block; width: 60px; height: 34px; }\n  .switch input { opacity: 0; width: 0; height: 0; }\n  .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; }\n  .slider:before { position: absolute; content: ''; height: 26px; width: 26px; left: 4px; bottom: 4px; background-color: white; transition: .4s; }\n  input:checked + .slider { background-color: #2196F3; }\n  input:checked + .slider:before { transform: translateX(26px); }\n</style>",
        output: "Clickable toggle switch that moves from left to right when clicked."
      },
      {
        title: "Create a Modal Popup",
        description: "Create a modal that opens when a button is clicked and can be closed.",
        answer: "Use `<dialog>` element or div with hidden/show class using JavaScript.",
        example: "<dialog id='myModal'>\n  <h2>Modal Title</h2>\n  <p>Modal content here...</p>\n  <button onclick='myModal.close()'>Close</button>\n</dialog>\n<button onclick='myModal.showModal()'>Open Modal</button>",
        output: "Click button opens modal popup. Close button closes it."
      },
      {
        title: "Create a Dropdown Menu",
        description: "Build a dropdown menu that appears when hovering over a parent item.",
        answer: "Use nested lists with CSS hover display property.",
        example: "<div class='dropdown'>\n  <button class='dropbtn'>Menu</button>\n  <div class='dropdown-content'>\n    <a href='#'>Option 1</a>\n    <a href='#'>Option 2</a>\n    <a href='#'>Option 3</a>\n  </div>\n</div>\n<style>\n  .dropdown { position: relative; display: inline-block; }\n  .dropdown-content { display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); }\n  .dropdown:hover .dropdown-content { display: block; }\n</style>",
        output: "Hover over 'Menu' button reveals dropdown options."
      },
      {
        title: "Create a Card Deck",
        description: "Display 4 team member cards with photo, name, position, and social icons.",
        answer: "Use CSS Grid or Flexbox to arrange cards in a row that wraps on smaller screens.",
        example: "<div class='team'>\n  <div class='member'><img src='person1.jpg'><h3>John Doe</h3><p>CEO</p><div>📘 💙 🐦</div></div>\n  <div class='member'><img src='person2.jpg'><h3>Jane Smith</h3><p>CTO</p><div>📘 💙 🐦</div></div>\n</div>",
        output: "Cards showing team members with photos, names, positions, and social icons."
      },
      {
        title: "Create a Timeline",
        description: "Build a vertical timeline showing 4 events with dates and descriptions.",
        answer: "Use flexbox or grid with left/right alternating layout or vertical line with dots.",
        example: "<div class='timeline'>\n  <div class='event'><div class='date'>2024</div><div class='content'>Event 1 description</div></div>\n  <div class='event'><div class='date'>2023</div><div class='content'>Event 2 description</div></div>\n</div>",
        output: "Vertical timeline with events listed in chronological order."
      },
      {
        title: "Create a Notification Alert",
        description: "Build alert components for success, error, warning, and info messages with close buttons.",
        answer: "Create colored divs with close button icons.",
        example: "<div class='alert success'>✓ Success message! <span class='close'>&times;</span></div>\n<div class='alert error'>✗ Error message! <span class='close'>&times;</span></div>\n<div class='alert warning'>⚠ Warning message! <span class='close'>&times;</span></div>\n<div class='alert info'>ℹ Info message! <span class='close'>&times;</span></div>\n<style>\n  .alert { padding: 15px; margin: 10px; border-radius: 5px; }\n  .success { background: #d4edda; color: #155724; }\n  .error { background: #f8d7da; color: #721c24; }\n  .warning { background: #fff3cd; color: #856404; }\n  .info { background: #d1ecf1; color: #0c5460; }\n  .close { float: right; cursor: pointer; }\n</style>",
        output: "Four colored alert boxes: green (success), red (error), yellow (warning), blue (info)."
      },
      {
        title: "Create a Star Rating System",
        description: "Build a 5-star rating system where stars can be clicked to select rating.",
        answer: "Use Unicode stars (★ and ☆) with JavaScript for click events.",
        example: "<div class='rating'>★★★★★</div>\n<script>\n  const stars = document.querySelector('.rating');\n  stars.addEventListener('click', (e) => {\n    if (e.target === stars) return;\n    const index = [...stars.children].indexOf(e.target);\n    for(let i = 0; i <= index; i++) stars.children[i].textContent = '★';\n    for(let i = index + 1; i < 5; i++) stars.children[i].textContent = '☆';\n  });\n</script>",
        output: "Five stars that fill when clicked to select rating."
      },
      {
        title: "Create a Counter Display",
        description: "Build a counter with increment, decrement, and reset buttons.",
        answer: "Use HTML for buttons and display, JavaScript for counter logic.",
        example: "<div class='counter'>\n  <button onclick='decrease()'>-</button>\n  <span id='count'>0</span>\n  <button onclick='increase()'>+</button>\n  <button onclick='reset()'>Reset</button>\n</div>\n<script>\n  let count = 0;\n  function increase() { document.getElementById('count').textContent = ++count; }\n  function decrease() { document.getElementById('count').textContent = --count; }\n  function reset() { count = 0; document.getElementById('count').textContent = count; }\n</script>",
        output: "Counter display with buttons to increase, decrease, and reset value."
      },
      {
        title: "Create a Tabs Component",
        description: "Build tabbed interface where clicking each tab shows different content.",
        answer: "Use buttons as tabs and divs for content, show/hide using JavaScript.",
        example: "<div class='tabs'>\n  <button onclick='showTab(0)'>Tab 1</button>\n  <button onclick='showTab(1)'>Tab 2</button>\n  <button onclick='showTab(2)'>Tab 3</button>\n</div>\n<div id='tab1' class='tab-content'>Content 1</div>\n<div id='tab2' class='tab-content' style='display:none'>Content 2</div>\n<div id='tab3' class='tab-content' style='display:none'>Content 3</div>\n<script>\n  function showTab(index) {\n    const tabs = document.querySelectorAll('.tab-content');\n    tabs.forEach((tab, i) => tab.style.display = i === index ? 'block' : 'none');\n  }\n</script>",
        output: "Buttons that switch between different content panels when clicked."
      },
      {
        title: "Create a Loading Spinner",
        description: "Create a CSS-only loading spinner animation.",
        answer: "Use CSS keyframes animations to rotate a circle.",
        example: "<div class='spinner'></div>\n<style>\n  .spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; }\n  @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }\n</style>",
        output: "Spinning circle animation indicating loading state."
      },
      {
        title: "Create a Search Bar with Suggestions",
        description: "Build a search input that shows suggestions as you type.",
        answer: "Use datalist element for native autocomplete suggestions.",
        example: "<input list='suggestions' placeholder='Search...'>\n<datalist id='suggestions'>\n  <option>Apple</option>\n  <option>Banana</option>\n  <option>Orange</option>\n  <option>Grapes</option>\n</datalist>",
        output: "Search box that shows suggestions dropdown while typing."
      },
      {
        title: "Create a Color Picker",
        description: "Build a color picker that shows selected color code.",
        answer: "Use input type='color' and display the selected color value.",
        example: "<input type='color' id='colorPicker' value='#3498db'>\n<p>Selected Color: <span id='colorValue'>#3498db</span></p>\n<script>\n  document.getElementById('colorPicker').addEventListener('input', (e) => {\n    document.getElementById('colorValue').textContent = e.target.value;\n  });\n</script>",
        output: "Color picker that displays the hex code of selected color."
      }
    ],
    experienced: [
      {
        title: "Implement a Custom Web Component",
        description: "Create a reusable `<user-card>` web component with Shadow DOM that displays user info.",
        answer: "Use customElements.define() and attachShadow() to create encapsulated component.",
        example: "class UserCard extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `\n      <style>.card { border: 1px solid; padding: 10px; border-radius: 8px; }</style>\n      <div class='card'><h3>${this.getAttribute('name')}</h3><p>${this.getAttribute('email')}</p></div>\n    `;\n  }\n}\ncustomElements.define('user-card', UserCard);\n\n<!-- Usage -->\n<user-card name='John Doe' email='john@example.com'></user-card>",
        output: "Custom element <user-card> renders a styled card with user info. Shadow DOM prevents style leakage."
      },
      {
        title: "Build an Accessible Modal Dialog",
        description: "Create a modal dialog using ARIA attributes for accessibility.",
        answer: "Use role='dialog', aria-labelledby, aria-modal, and manage focus trapping.",
        example: "<div role='dialog' aria-labelledby='modalTitle' aria-modal='true' hidden id='modal'>\n  <h2 id='modalTitle'>Modal Title</h2>\n  <p>Modal content</p>\n  <button onclick='closeModal()'>Close</button>\n</div>\n<button onclick='openModal()'>Open Modal</button>\n<script>\n  function openModal() { document.getElementById('modal').hidden = false; }\n  function closeModal() { document.getElementById('modal').hidden = true; }\n</script>",
        output: "Accessible modal that screen readers announce properly."
      },
      {
        title: "Create a Custom Video Player",
        description: "Build a video player with custom controls: play/pause, volume, progress bar, fullscreen.",
        answer: "Use HTML5 video API, create custom buttons, and control video properties with JavaScript.",
        example: "<video id='video' src='movie.mp4'></video>\n<div class='controls'>\n  <button onclick='playPause()'>Play/Pause</button>\n  <input type='range' id='progress' value='0'>\n  <button onclick='fullscreen()'>Fullscreen</button>\n</div>\n<script>\n  const video = document.getElementById('video');\n  function playPause() { video.paused ? video.play() : video.pause(); }\n  video.addEventListener('timeupdate', () => {\n    document.getElementById('progress').value = (video.currentTime / video.duration) * 100;\n  });\n</script>",
        output: "Video player with custom-styled controls instead of browser default."
      },
      {
        title: "Implement Infinite Scroll",
        description: "Create infinite scroll that loads new content when user scrolls to bottom.",
        answer: "Use Intersection Observer or scroll event to detect when user reaches bottom and load more content.",
        example: "<div id='content'></div>\n<script>\n  let page = 1;\n  const observer = new IntersectionObserver((entries) => {\n    if(entries[0].isIntersecting) loadMore();\n  });\n  observer.observe(document.getElementById('sentinel'));\n  async function loadMore() {\n    const res = await fetch(`/api/posts?page=${page++}`);\n    const data = await res.json();\n    // Append data to content\n  }\n</script>",
        output: "New content loads automatically as user scrolls down the page."
      },
      {
        title: "Build a Multi-Step Form (Wizard)",
        description: "Create a form with multiple steps, progress indicator, and navigation between steps.",
        answer: "Use different divs for each step, show/hide steps with JavaScript, validate before proceeding.",
        example: "<div id='step1' class='step'>Step 1: Name <input id='name'></div>\n<div id='step2' class='step' style='display:none'>Step 2: Email <input id='email'></div>\n<button onclick='prev()'>Previous</button>\n<button onclick='next()'>Next</button>\n<script>\n  let currentStep = 1;\n  function next() {\n    document.getElementById(`step${currentStep}`).style.display = 'none';\n    currentStep++;\n    document.getElementById(`step${currentStep}`).style.display = 'block';\n  }\n</script>",
        output: "Form that guides user through multiple steps with next/previous navigation."
      },
      {
        title: "Create a Drag-and-Drop File Upload",
        description: "Build file upload area where users can drag and drop files with image preview.",
        answer: "Use drag and drop events (dragenter, dragleave, dragover, drop) and FileReader API for preview.",
        example: "<div id='dropzone' ondragover='allowDrop(event)' ondrop='handleDrop(event)'>Drop files here</div>\n<div id='preview'></div>\n<script>\n  function allowDrop(e) { e.preventDefault(); }\n  function handleDrop(e) {\n    e.preventDefault();\n    const files = e.dataTransfer.files;\n    for(let file of files) {\n      const reader = new FileReader();\n      reader.onload = (e) => {\n        const img = document.createElement('img');\n        img.src = e.target.result;\n        document.getElementById('preview').appendChild(img);\n      };\n      reader.readAsDataURL(file);\n    }\n  }\n</script>",
        output: "Area where users can drag and drop files to upload with preview of images."
      },
      {
        title: "Build a Responsive Data Table with Sorting",
        description: "Create a data table that is responsive on mobile and has sortable columns.",
        answer: "Use CSS overflow for responsiveness, JavaScript for sorting array of objects.",
        example: "<table id='dataTable'>...</table>\n<script>\n  let data = [{name: 'John', age: 25}, {name: 'Alice', age: 30}];\n  function sortTable(column) {\n    data.sort((a,b) => a[column] > b[column] ? 1 : -1);\n    renderTable();\n  }\n</script>",
        output: "Table where clicking column headers sorts the data in ascending/descending order."
      },
      {
        title: "Create an Offline-Capable Webpage (PWA)",
        description: "Build a webpage that works offline using service workers and Cache API.",
        answer: "Create manifest.json, register service worker, cache assets during install.",
        example: "// manifest.json\n{\n  \"name\": \"My App\",\n  \"short_name\": \"App\",\n  \"start_url\": \"/\",\n  \"display\": \"standalone\"\n}\n\n// service-worker.js\nself.addEventListener('install', (event) => {\n  event.waitUntil(caches.open('v1').then(cache => cache.addAll(['/', '/style.css'])));\n});",
        output: "Webpage that loads and works even when user is offline."
      },
      {
        title: "Implement Lazy Loading for Images",
        description: "Create a lazy loading system that loads images only when they come into viewport.",
        answer: "Use Intersection Observer API to detect when images enter viewport and set src attribute.",
        example: "<img data-src='image.jpg' class='lazy'>\n<script>\n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if(entry.isIntersecting) {\n        const img = entry.target;\n        img.src = img.dataset.src;\n        observer.unobserve(img);\n      }\n    });\n  });\n  document.querySelectorAll('.lazy').forEach(img => observer.observe(img));\n</script>",
        output: "Images load only when user scrolls them into view, improving initial page load."
      },
      {
        title: "Create a Voice Search Input",
        description: "Build a search input with microphone button for voice recognition.",
        answer: "Use Web Speech API's SpeechRecognition to convert speech to text.",
        example: "<input id='search' placeholder='Search...'>\n<button onclick='startVoice()'>🎤</button>\n<script>\n  const recognition = new webkitSpeechRecognition();\n  function startVoice() {\n    recognition.start();\n    recognition.onresult = (e) => {\n      document.getElementById('search').value = e.results[0][0].transcript;\n    };\n  }\n</script>",
        output: "Click microphone button, speak, and spoken words appear in search input."
      },
      {
        title: "Build a Custom Select Dropdown",
        description: "Create a custom-styled select dropdown with search functionality.",
        answer: "Hide native select, create div with options, add input for search filtering.",
        example: "<div class='custom-select'>\n  <div class='selected'>Select...</div>\n  <div class='options' style='display:none'>\n    <input type='text' placeholder='Search...'>\n    <div class='option'>Option 1</div>\n    <div class='option'>Option 2</div>\n  </div>\n</div>",
        output: "Stylable dropdown menu with search box to filter options."
      },
      {
        title: "Create a Parallax Scrolling Effect",
        description: "Build parallax scrolling where background moves slower than foreground.",
        answer: "Use CSS background-attachment: fixed or transform: translateY based on scroll position.",
        example: "<div class='parallax' style='background-image: url(bg.jpg); background-attachment: fixed;'></div>\n<div class='content'>Scroll to see parallax effect</div>",
        output: "Background image moves at different speed than content while scrolling."
      },
      {
        title: "Implement a Masonry Grid Layout",
        description: "Create Pinterest-style masonry grid where images arrange in optimal columns.",
        answer: "Use CSS Grid or JavaScript to position images based on height.",
        example: "<div class='masonry'>\n  <div><img src='1.jpg'></div>\n  <div><img src='2.jpg'></div>\n  <div><img src='3.jpg'></div>\n</div>\n<style>\n  .masonry { column-count: 3; column-gap: 20px; }\n  .masonry > div { break-inside: avoid; margin-bottom: 20px; }\n</style>",
        output: "Images arranged in optimal grid layout without gaps, like Pinterest."
      },
      {
        title: "Create a Custom Context Menu",
        description: "Replace browser's default right-click menu with custom HTML menu.",
        answer: "Prevent default contextmenu event, show custom div at mouse coordinates.",
        example: "<div id='area'>Right click here</div>\n<div id='contextMenu' style='display:none; position:absolute; background:white; border:1px solid;'>\n  <div>Option 1</div><div>Option 2</div>\n</div>\n<script>\n  document.getElementById('area').addEventListener('contextmenu', (e) => {\n    e.preventDefault();\n    const menu = document.getElementById('contextMenu');\n    menu.style.display = 'block';\n    menu.style.left = e.pageX + 'px';\n    menu.style.top = e.pageY + 'px';\n  });\n</script>",
        output: "Right-click shows custom menu instead of browser default."
      },
      {
        title: "Build a Resizable Split Pane",
        description: "Create two resizable panels separated by draggable divider.",
        answer: "Use mousedown, mousemove, mouseup events to update panel widths.",
        example: "<div class='container'><div id='left'>Left</div><div id='divider'></div><div id='right'>Right</div></div>\n<script>\n  let isDragging = false;\n  divider.addEventListener('mousedown', () => isDragging = true);\n  window.addEventListener('mousemove', (e) => {\n    if(isDragging) left.style.width = e.pageX + 'px';\n  });\n</script>",
        output: "Two panels with draggable divider to resize them horizontally."
      },
      {
        title: "Create a CSS-Only Carousel",
        description: "Build an image slider/carousel using only HTML and CSS (no JavaScript).",
        answer: "Use overflow: hidden, display: flex, and scroll snap properties.",
        example: "<div class='carousel'>\n  <div class='slides'>\n    <div><img src='1.jpg'></div>\n    <div><img src='2.jpg'></div>\n    <div><img src='3.jpg'></div>\n  </div>\n</div>\n<style>\n  .carousel { overflow: auto; scroll-snap-type: x mandatory; }\n  .slides { display: flex; }\n  .slides > div { scroll-snap-align: start; flex-shrink: 0; width: 100%; }\n</style>",
        output: "Horizontal scroller with snap points for each image, pure CSS."
      },
      {
        title: "Implement Tree View Navigation",
        description: "Create expandable/collapsible tree view for file system or categories.",
        answer: "Use nested lists with checkboxes or details/summary for expand/collapse.",
        example: "<ul>\n  <li><details><summary>Folder 1</summary>\n    <ul><li>File 1</li><li>File 2</li></ul>\n  </details></li>\n  <li><details><summary>Folder 2</summary>\n    <ul><li>File 3</li></ul>\n  </details></li>\n</ul>",
        output: "Hierarchical tree that expands/collapses when clicking folder names."
      },
      {
        title: "Create a Countdown Timer",
        description: "Build a countdown timer to specific date/time with days, hours, minutes, seconds.",
        answer: "Use setInterval to update display based on difference between target date and now.",
        example: "<div id='timer'></div>\n<script>\n  const target = new Date('Dec 31, 2024 23:59:59').getTime();\n  setInterval(() => {\n    const now = new Date().getTime();\n    const diff = target - now;\n    const days = Math.floor(diff / (1000 * 60 * 60 * 24));\n    document.getElementById('timer').innerHTML = `${days} days remaining`;\n  }, 1000);\n</script>",
        output: "Dynamic counter showing time remaining until target date."
      },
      {
        title: "Build a Range Slider with Two Handles",
        description: "Create a price range slider with minimum and maximum handles.",
        answer: "Use two range inputs or create custom slider with mouse events.",
        example: "<input type='range' id='min' min='0' max='100'>\n<input type='range' id='max' min='0' max='100'>\n<p>Min: <span id='minVal'>0</span> Max: <span id='maxVal'>100</span></p>\n<script>\n  const min = document.getElementById('min');\n  const max = document.getElementById('max');\n  min.addEventListener('input', () => {\n    if(parseInt(min.value) > parseInt(max.value)) min.value = max.value;\n    document.getElementById('minVal').innerHTML = min.value;\n  });\n</script>",
        output: "Two sliders that allow selecting minimum and maximum price range."
      },
      {
        title: "Create a Contenteditable Rich Text Editor",
        description: "Build simple WYSIWYG editor using contenteditable attribute.",
        answer: "Use contenteditable='true' on div, execCommand for formatting buttons.",
        example: "<div id='editor' contenteditable='true' style='border:1px solid; padding:10px;'></div>\n<button onclick='document.execCommand(\"bold\")'>Bold</button>\n<button onclick='document.execCommand(\"italic\")'>Italic</button>",
        output: "Editable area with buttons to format text (bold, italic, underline)."
      },
      {
        title: "Implement Intersection Observer for Animations",
        description: "Trigger CSS animations when elements scroll into view.",
        answer: "Use Intersection Observer to add class to elements when they become visible.",
        example: "<div class='fade-in'>Content</div>\n<script>\n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if(entry.isIntersecting) entry.target.classList.add('visible');\n    });\n  });\n  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));\n</script>\n<style>\n  .fade-in { opacity: 0; transition: opacity 1s; }\n  .fade-in.visible { opacity: 1; }\n</style>",
        output: "Elements fade in when they scroll into viewport."
      },
      {
        title: "Create a Fullscreen API Implementation",
        description: "Add button to make any element fullscreen.",
        answer: "Use requestFullscreen() method on element.",
        example: "<div id='content'>Content to make fullscreen</div>\n<button onclick='makeFullscreen()'>Fullscreen</button>\n<script>\n  function makeFullscreen() {\n    const elem = document.getElementById('content');\n    if(elem.requestFullscreen) elem.requestFullscreen();\n  }\n</script>",
        output: "Click button makes specified element go fullscreen; ESC to exit."
      },
      {
        title: "Build a Geolocation Feature",
        description: "Get user's current location and display on map or show coordinates.",
        answer: "Use navigator.geolocation API with getCurrentPosition method.",
        example: "<button onclick='getLocation()'>Get Location</button>\n<p id='location'></p>\n<script>\n  function getLocation() {\n    if(navigator.geolocation) {\n      navigator.geolocation.getCurrentPosition((pos) => {\n        document.getElementById('location').innerHTML = `Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`;\n      });\n    }\n  }\n</script>",
        output: "Shows user's latitude and longitude after allowing location permission."
      },
      {
        title: "Create a Clipboard API Integration",
        description: "Add copy to clipboard functionality for text content.",
        answer: "Use navigator.clipboard.writeText() method.",
        example: "<input id='text' value='Copy this text'>\n<button onclick='copyText()'>Copy</button>\n<script>\n  function copyText() {\n    const text = document.getElementById('text').value;\n    navigator.clipboard.writeText(text);\n    alert('Copied!');\n  }\n</script>",
        output: "Click button copies input text to clipboard."
      },
      {
        title: "Implement a Notification API Demo",
        description: "Show browser notifications when user permits.",
        answer: "Use Notification.requestPermission() and new Notification().",
        example: "<button onclick='notifyMe()'>Notify Me</button>\n<script>\n  function notifyMe() {\n    if(Notification.permission !== 'granted') Notification.requestPermission();\n    else new Notification('Hello!', {body: 'This is a notification'});\n  }\n</script>",
        output: "Browser shows popup notification when button clicked, requesting permission first."
      },
      {
        title: "Create a Screen Orientation Detection",
        description: "Detect and respond to screen orientation changes (portrait/landscape).",
        answer: "Use window.orientation or screen.orientation API with resize event.",
        example: "<p id='orientation'></p>\n<script>\n  function updateOrientation() {\n    const ori = screen.orientation ? screen.orientation.type : (window.orientation === 0 ? 'portrait' : 'landscape');\n    document.getElementById('orientation').innerHTML = `Orientation: ${ori}`;\n  }\n  window.addEventListener('resize', updateOrientation);\n  updateOrientation();\n</script>",
        output: "Displays current screen orientation and updates when device is rotated."
      },
      {
        title: "Build a Battery Status Indicator",
        description: "Show device battery level and charging status.",
        answer: "Use navigator.getBattery() API (Chrome only).",
        example: "<div id='battery'></div>\n<script>\n  if('getBattery' in navigator) {\n    navigator.getBattery().then(battery => {\n      document.getElementById('battery').innerHTML = `Battery: ${battery.level * 100}%, Charging: ${battery.charging}`;\n    });\n  }\n</script>",
        output: "Shows device battery percentage and whether it's charging."
      },
      {
        title: "Create a Network Status Detector",
        description: "Detect if user is online or offline and show status.",
        answer: "Use navigator.onLine property and online/offline events.",
        example: "<p id='status'></p>\n<script>\n  function updateStatus() {\n    document.getElementById('status').innerHTML = navigator.onLine ? 'Online' : 'Offline';\n  }\n  window.addEventListener('online', updateStatus);\n  window.addEventListener('offline', updateStatus);\n  updateStatus();\n</script>",
        output: "Shows 'Online' or 'Offline' that updates when network connection changes."
      }
    ]
  };
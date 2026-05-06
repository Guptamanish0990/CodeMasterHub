// /data/tailwind/problems.js

export const problems = {
  fresher: [
    {
      id: 1,
      title: "Replicate a hero section with a heading, description, and a button",
      problem: "Create a responsive hero section with a large heading, descriptive text, and a call-to-action button using Tailwind CSS.",
      answer: "Use flexbox or grid for layout, large text utilities for heading, and button styling with hover effects.",
      example: "<div class='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4'>\n  <div class='max-w-4xl mx-auto text-center'>\n    <h1 class='text-4xl md:text-6xl font-bold mb-4'>Welcome to Our Platform</h1>\n    <p class='text-lg md:text-xl mb-8 opacity-90'>Build amazing websites with Tailwind CSS - the utility-first framework that speeds up development</p>\n    <button class='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg'>\n      Get Started\n    </button>\n  </div>\n</div>",
      output: "Hero section with gradient background, centered content, responsive text, and interactive button",
      note: "Use hover:scale-105 for subtle button animation, opacity-90 for secondary text"
    },
    {
      id: 2,
      title: "Build a responsive product grid",
      problem: "Create a product grid that shows 1 column on mobile, 2 columns on tablet, and 4 columns on desktop.",
      answer: "Use grid with responsive prefixes: grid-cols-1 (mobile), md:grid-cols-2 (tablet), lg:grid-cols-4 (desktop).",
      example: "<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>\n  <div class='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>\n    <div class='h-48 bg-gray-200'></div>\n    <div class='p-4'>\n      <h3 class='font-semibold text-lg'>Product 1</h3>\n      <p class='text-gray-600 text-sm'>$29.99</p>\n      <button class='mt-2 text-blue-500 hover:text-blue-700'>View Details →</button>\n    </div>\n  </div>\n  <!-- Repeat similar cards -->\n</div>",
      output: "Grid that rearranges based on screen size: 1 column on mobile, 2 on tablet, 4 on desktop",
      note: "Use gap-6 for consistent spacing between cards"
    },
    {
      id: 3,
      title: "Create a card component with hover effects",
      problem: "Design a card that scales up and shows shadow on hover, with smooth transitions.",
      answer: "Combine transform, transition, and shadow utilities on hover.",
      example: "<div class='max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300'>\n  <div class='h-48 bg-gradient-to-r from-blue-400 to-purple-500'></div>\n  <div class='p-6'>\n    <h3 class='text-xl font-bold mb-2'>Card Title</h3>\n    <p class='text-gray-600 mb-4'>This card has a smooth hover effect that scales up and increases shadow.</p>\n    <div class='flex justify-between items-center'>\n      <span class='text-green-600 font-bold'>$49.99</span>\n      <button class='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>Buy Now</button>\n    </div>\n  </div>\n</div>",
      output: "Card scales up (scale-105) and shadow increases on hover",
      note: "Use transition-all duration-300 for smooth animation on all properties"
    },
    {
      id: 4,
      title: "Create a responsive navigation bar",
      problem: "Build a responsive navbar that collapses to hamburger menu on mobile.",
      answer: "Use flex for desktop layout, hidden/show classes for mobile menu toggle with JavaScript.",
      example: "<nav class='bg-white shadow-md'>\n  <div class='max-w-7xl mx-auto px-4'>\n    <div class='flex justify-between items-center py-4'>\n      <div class='text-xl font-bold text-gray-800'>Logo</div>\n      <div class='hidden md:flex space-x-6'>\n        <a href='#' class='text-gray-600 hover:text-blue-500'>Home</a>\n        <a href='#' class='text-gray-600 hover:text-blue-500'>About</a>\n        <a href='#' class='text-gray-600 hover:text-blue-500'>Services</a>\n        <a href='#' class='text-gray-600 hover:text-blue-500'>Contact</a>\n      </div>\n      <button class='md:hidden text-gray-600'>☰</button>\n    </div>\n  </div>\n</nav>",
      output: "Navbar with horizontal links on desktop, hamburger menu on mobile",
      note: "Use JavaScript to toggle mobile menu visibility"
    },
    {
      id: 5,
      title: "Build a pricing card component",
      problem: "Create a pricing card with featured plan highlighted differently.",
      answer: "Use ring, shadow, and transform utilities to highlight the featured plan.",
      example: "<div class='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto p-8'>\n  <div class='bg-white rounded-lg shadow-md p-6'>\n    <h3 class='text-2xl font-bold'>Basic</h3>\n    <p class='text-4xl font-bold mt-4'>$19<span class='text-lg'>/mo</span></p>\n    <ul class='mt-6 space-y-2'>\n      <li class='flex items-center'>✓ 10 Users</li>\n      <li class='flex items-center'>✓ 5GB Storage</li>\n    </ul>\n    <button class='w-full mt-6 bg-gray-500 text-white py-2 rounded hover:bg-gray-600'>Choose Plan</button>\n  </div>\n  <div class='bg-white rounded-lg shadow-xl ring-2 ring-blue-500 transform scale-105 p-6'>\n    <div class='bg-blue-500 text-white text-center py-1 rounded -mt-7 mb-4'>Most Popular</div>\n    <h3 class='text-2xl font-bold'>Pro</h3>\n    <p class='text-4xl font-bold mt-4'>$49<span class='text-lg'>/mo</span></p>\n    <ul class='mt-6 space-y-2'>\n      <li class='flex items-center'>✓ 100 Users</li>\n      <li class='flex items-center'>✓ 50GB Storage</li>\n      <li class='flex items-center'>✓ Priority Support</li>\n    </ul>\n    <button class='w-full mt-6 bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Choose Plan</button>\n  </div>\n</div>",
      output: "Three pricing cards with featured plan scaled up and highlighted with ring",
      note: "Use ring-2 instead of border for better visual effect"
    },
    {
      id: 6,
      title: "Create a testimonial slider/card",
      problem: "Build a testimonial card with avatar, quote, and author info.",
      answer: "Use flex layout with rounded-full for avatar, italic for quote.",
      example: "<div class='max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8'>\n  <div class='flex items-center gap-4 mb-6'>\n    <div class='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold'>JD</div>\n    <div>\n      <h3 class='font-bold text-lg'>John Doe</h3>\n      <p class='text-gray-500'>CEO, Tech Company</p>\n    </div>\n  </div>\n  <p class='text-gray-700 italic text-lg leading-relaxed'>\"Tailwind CSS has completely transformed our development workflow. We build UIs 3x faster now!\"</p>\n  <div class='flex justify-center gap-1 mt-6'>\n    <span class='w-2 h-2 bg-blue-500 rounded-full'></span>\n    <span class='w-2 h-2 bg-gray-300 rounded-full'></span>\n    <span class='w-2 h-2 bg-gray-300 rounded-full'></span>\n  </div>\n</div>",
      output: "Testimonial card with avatar, quote, and navigation dots",
      note: "Use italic for quotes and gradient for avatar background"
    },
    {
      id: 7,
      title: "Build a login form with Tailwind",
      problem: "Create a centered login form with email, password fields and submit button.",
      answer: "Use flex to center form, rounded-lg for inputs, and focus rings for better UX.",
      example: "<div class='min-h-screen flex items-center justify-center bg-gray-100'>\n  <div class='bg-white p-8 rounded-2xl shadow-lg w-96'>\n    <h2 class='text-2xl font-bold text-center mb-6'>Login</h2>\n    <form>\n      <div class='mb-4'>\n        <label class='block text-gray-700 mb-2'>Email</label>\n        <input type='email' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='Enter your email' />\n      </div>\n      <div class='mb-6'>\n        <label class='block text-gray-700 mb-2'>Password</label>\n        <input type='password' class='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='Enter your password' />\n      </div>\n      <button type='submit' class='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition'>Sign In</button>\n    </form>\n  </div>\n</div>",
      output: "Centered login form with styled inputs and submit button",
      note: "Use focus:ring-2 for accessibility focus indicators"
    },
    {
      id: 8,
      title: "Create an avatar stack component",
      problem: "Display multiple user avatars in a stack with overlapping effect.",
      answer: "Use negative margin utilities (-space-x-2) to overlap avatars.",
      example: "<div class='flex -space-x-2'>\n  <div class='w-10 h-10 bg-red-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold'>JD</div>\n  <div class='w-10 h-10 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold'>JS</div>\n  <div class='w-10 h-10 bg-green-400 rounded-full border-2 border-white flex items-center justify-center text-white font-bold'>MK</div>\n  <div class='w-10 h-10 bg-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold'>+2</div>\n</div>",
      output: "Avatars stacked with negative space showing overlap",
      note: "Use border-white to create separation between overlapping avatars"
    },
    {
      id: 9,
      title: "Create a progress bar component",
      problem: "Build a progress bar that fills to 75% with gradient color.",
      answer: "Use w-[percentage] for width, rounded-full for pill shape.",
      example: "<div class='w-full bg-gray-200 rounded-full h-4 overflow-hidden'>\n  <div class='bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full w-3/4 animate-pulse'></div>\n</div>\n<div class='flex justify-between mt-2 text-sm text-gray-600'>\n  <span>Progress</span>\n  <span>75%</span>\n</div>",
      output: "Progress bar filled to 75% with gradient and animation",
      note: "Use overflow-hidden on container for rounded corners"
    },
    {
      id: 10,
      title: "Create a badge/notification component",
      problem: "Display a notification badge with count on an icon.",
      answer: "Use relative positioning on parent, absolute on badge.",
      example: "<div class='relative inline-block'>\n  <svg class='w-8 h-8 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>\n    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'></path>\n  </svg>\n  <span class='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>3</span>\n</div>",
      output: "Notification icon with red badge showing count 3",
      note: "Use absolute positioning to place badge at top-right corner"
    },
    {
      id: 11,
      title: "Create a responsive footer",
      problem: "Build a multi-column footer that stacks on mobile and displays columns on desktop.",
      answer: "Use grid with responsive columns, text utilities for links.",
      example: "<footer class='bg-gray-900 text-white py-12'>\n  <div class='max-w-6xl mx-auto px-4'>\n    <div class='grid grid-cols-1 md:grid-cols-4 gap-8'>\n      <div>\n        <h3 class='text-xl font-bold mb-4'>Logo</h3>\n        <p class='text-gray-400 text-sm'>Building amazing web experiences with Tailwind CSS.</p>\n      </div>\n      <div>\n        <h4 class='font-semibold mb-4'>Products</h4>\n        <ul class='space-y-2 text-gray-400 text-sm'>\n          <li><a href='#' class='hover:text-white'>Features</a></li>\n          <li><a href='#' class='hover:text-white'>Pricing</a></li>\n        </ul>\n      </div>\n      <div>\n        <h4 class='font-semibold mb-4'>Company</h4>\n        <ul class='space-y-2 text-gray-400 text-sm'>\n          <li><a href='#' class='hover:text-white'>About</a></li>\n          <li><a href='#' class='hover:text-white'>Blog</a></li>\n        </ul>\n      </div>\n      <div>\n        <h4 class='font-semibold mb-4'>Contact</h4>\n        <ul class='space-y-2 text-gray-400 text-sm'>\n          <li>hello@example.com</li>\n          <li>+1 234 567 890</li>\n        </ul>\n      </div>\n    </div>\n    <div class='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm'>\n      <p>&copy; 2024 Your Company. All rights reserved.</p>\n    </div>\n  </div>\n</footer>",
      output: "Responsive footer with 4 columns on desktop, stacking on mobile",
      note: "Use text-gray-400 for secondary text to create hierarchy"
    },
    {
      id: 12,
      title: "Create a loading spinner",
      problem: "Build a spinning loader using Tailwind CSS.",
      answer: "Use animate-spin with border utilities to create a loading indicator.",
      example: "<div class='flex items-center justify-center h-64'>\n  <div class='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500'></div>\n</div>\n<div class='text-center text-gray-500 mt-4'>Loading...</div>",
      output: "Spinning circle animation indicating loading state",
      note: "Use border-b-2 and border-t-transparent for a slick spinner"
    },
    {
      id: 13,
      title: "Create a toggle switch",
      problem: "Build a toggle switch (checkbox) with Tailwind styling.",
      answer: "Use appearance-none on checkbox, then style with before and after pseudo-elements.",
      example: "<label class='relative inline-flex items-center cursor-pointer'>\n  <input type='checkbox' class='sr-only peer'>\n  <div class=\"w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all\"></div>\n  <span class='ml-3 text-gray-700'>Toggle me</span>\n</label>",
      output: "Toggle switch that slides from gray to blue when checked",
      note: "Use peer and peer-checked to style based on checkbox state"
    },
    {
      id: 14,
      title: "Create a dropdown menu",
      problem: "Build a dropdown menu that appears on hover.",
      answer: "Use group and group-hover to show/hide dropdown content.",
      example: "<div class='relative inline-block group'>\n  <button class='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>Dropdown</button>\n  <div class='absolute hidden group-hover:block mt-2 w-48 bg-white rounded-lg shadow-lg z-10'>\n    <a href='#' class='block px-4 py-2 hover:bg-gray-100'>Option 1</a>\n    <a href='#' class='block px-4 py-2 hover:bg-gray-100'>Option 2</a>\n    <a href='#' class='block px-4 py-2 hover:bg-gray-100'>Option 3</a>\n  </div>\n</div>",
      output: "Dropdown menu appears when hovering over button",
      note: "Use z-10 to ensure dropdown appears above other content"
    },
    {
      id: 15,
      title: "Create a notification toast",
      problem: "Build a toast notification that appears at bottom-right with success/error variants.",
      answer: "Use fixed positioning with different background colors for variants.",
      example: "<div class='fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in'>\n  <svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>\n    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'></path>\n  </svg>\n  <span>Success! Your changes have been saved.</span>\n  <button class='hover:opacity-80'>×</button>\n</div>\n\n<style>\n@keyframes slideIn {\n  from { transform: translateX(100%); opacity: 0; }\n  to { transform: translateX(0); opacity: 1; }\n}\n.animate-slide-in {\n  animation: slideIn 0.3s ease-out;\n}\n</style>",
      output: "Toast notification sliding in from right with success styling",
      note: "Use fixed positioning to keep toast visible while scrolling"
    },
    {
      id: 16,
      title: "Create a skeleton loader",
      problem: "Build a skeleton loader for a card component.",
      answer: "Use animate-pulse with bg-gray-200 to simulate loading state.",
      example: "<div class='max-w-sm bg-white rounded-lg shadow-md p-4'>\n  <div class='animate-pulse'>\n    <div class='h-48 bg-gray-200 rounded-lg mb-4'></div>\n    <div class='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>\n    <div class='h-4 bg-gray-200 rounded w-1/2 mb-4'></div>\n    <div class='h-10 bg-gray-200 rounded'></div>\n  </div>\n</div>",
      output: "Pulsing skeleton representing loading card content",
      note: "Match skeleton dimensions to actual content to prevent layout shift"
    },
    {
      id: 17,
      title: "Create a responsive image gallery with lightbox",
      problem: "Build a responsive image grid that opens images in a lightbox modal.",
      answer: "Use grid for gallery, fixed positioning for lightbox overlay.",
      example: "<div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>\n  <img src='https://picsum.photos/id/100/400/300' class='w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition' />\n  <img src='https://picsum.photos/id/101/400/300' class='w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition' />\n  <img src='https://picsum.photos/id/102/400/300' class='w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition' />\n  <img src='https://picsum.photos/id/103/400/300' class='w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition' />\n</div>",
      output: "Image grid that's responsive and opens images in lightbox",
      note: "Add JavaScript to handle lightbox open/close functionality"
    },
    {
      id: 18,
      title: "Create a tooltip on hover",
      problem: "Build a tooltip that appears when hovering over an element.",
      answer: "Use group and group-hover with absolute positioning for tooltip.",
      example: "<div class='relative inline-block group'>\n  <button class='bg-blue-500 text-white px-4 py-2 rounded'>Hover me</button>\n  <div class='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap'>\n    This is a tooltip\n    <div class='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900'></div>\n  </div>\n</div>",
      output: "Tooltip appears above button when hovered with arrow pointer",
      note: "Use whitespace-nowrap to prevent tooltip text from wrapping"
    },
    {
      id: 19,
      title: "Create a tag input component",
      problem: "Build a component that displays tags with remove buttons.",
      answer: "Use flex wrap with rounded-full tags, inline-block for tags.",
      example: "<div class='border border-gray-300 rounded-lg p-2'>\n  <div class='flex flex-wrap gap-2'>\n    <span class='bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1'>\n      JavaScript\n      <button class='hover:text-blue-900'>×</button>\n    </span>\n    <span class='bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1'>\n      React\n      <button class='hover:text-blue-900'>×</button>\n    </span>\n    <input type='text' placeholder='Add tag...' class='flex-1 p-2 outline-none' />\n  </div>\n</div>",
      output: "Tag input with existing tags and remove buttons",
      note: "Use flex-wrap to handle multiple tags on different rows"
    },
    {
      id: 20,
      title: "Create a step progress indicator",
      problem: "Build a wizard step indicator showing current step.",
      answer: "Use flex with justify-between, circles for steps, and lines between.",
      example: "<div class='flex items-center justify-between max-w-md mx-auto'>\n  <div class='flex flex-col items-center'>\n    <div class='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center'>1</div>\n    <span class='text-sm mt-2'>Shipping</span>\n  </div>\n  <div class='flex-1 h-0.5 bg-blue-500'></div>\n  <div class='flex flex-col items-center'>\n    <div class='w-10 h-10 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center'>2</div>\n    <span class='text-sm mt-2'>Payment</span>\n  </div>\n  <div class='flex-1 h-0.5 bg-gray-300'></div>\n  <div class='flex flex-col items-center'>\n    <div class='w-10 h-10 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center'>3</div>\n    <span class='text-sm mt-2'>Confirm</span>\n  </div>\n</div>",
      output: "Step indicator showing active step 1, inactive steps 2-3",
      note: "Use different background colors for active vs completed steps"
    },
    {
      id: 21,
      title: "Create a responsive sidebar",
      problem: "Build a sidebar that collapses to icons on mobile and expands on hover.",
      answer: "Use transform transitions with width utilities for sidebar animation.",
      example: "<div class='flex h-screen'>\n  <div class='w-64 bg-gray-900 text-white transition-all duration-300 hover:w-64'>\n    <div class='p-4'>\n      <div class='flex items-center gap-3 mb-8'>\n        <div class='w-8 h-8 bg-blue-500 rounded'></div>\n        <span class='font-bold'>Dashboard</span>\n      </div>\n      <nav class='space-y-2'>\n        <a href='#' class='flex items-center gap-3 p-2 hover:bg-gray-800 rounded'>🏠 Home</a>\n        <a href='#' class='flex items-center gap-3 p-2 hover:bg-gray-800 rounded'>📊 Analytics</a>\n        <a href='#' class='flex items-center gap-3 p-2 hover:bg-gray-800 rounded'>⚙️ Settings</a>\n      </nav>\n    </div>\n  </div>\n  <div class='flex-1 bg-gray-100 p-8'>\n    <h1 class='text-2xl font-bold'>Main Content</h1>\n  </div>\n</div>",
      output: "Sidebar that can be collapsed/expanded",
      note: "Use transition-all for smooth width animation"
    },
    {
      id: 22,
      title: "Create an accordion component",
      problem: "Build an accordion that expands/collapses content on click.",
      answer: "Use details/summary elements or JavaScript toggle with Tailwind classes.",
      example: "<div class='space-y-2'>\n  <div class='border rounded-lg'>\n    <button class='w-full text-left p-4 font-semibold flex justify-between items-center hover:bg-gray-50'>\n      Section 1\n      <span class='text-xl'>▼</span>\n    </button>\n    <div class='p-4 border-t hidden'>\n      <p>Content for section 1 goes here. This is expandable content.</p>\n    </div>\n  </div>\n  <div class='border rounded-lg'>\n    <button class='w-full text-left p-4 font-semibold flex justify-between items-center hover:bg-gray-50'>\n      Section 2\n      <span class='text-xl'>▼</span>\n    </button>\n    <div class='p-4 border-t hidden'>\n      <p>Content for section 2 goes here. This is expandable content.</p>\n    </div>\n  </div>\n</div>",
      output: "Accordion with expandable/collapsible sections",
      note: "Add JavaScript to toggle visibility of content panels"
    },
    {
      id: 23,
      title: "Create a breadcrumb navigation",
      problem: "Build breadcrumb links showing current page location.",
      answer: "Use flex with inline separators and hover effects.",
      example: "<nav class='flex items-center space-x-2 text-sm text-gray-600'>\n  <a href='#' class='hover:text-blue-500'>Home</a>\n  <span>/</span>\n  <a href='#' class='hover:text-blue-500'>Products</a>\n  <span>/</span>\n  <span class='text-gray-900 font-medium'>Product Details</span>\n</nav>",
      output: "Breadcrumb trail: Home / Products / Product Details",
      note: "Use different styling for the current page (no link, bold)"
    },
    {
      id: 24,
      title: "Create a floating action button (FAB)",
      problem: "Build a fixed circular button that stays at bottom-right corner.",
      answer: "Use fixed positioning with bottom-4 and right-4.",
      example: "<button class='fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center'>\n  <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>\n    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 4v16m8-8H4'></path>\n  </svg>\n</button>",
      output: "Circular button fixed at bottom right corner",
      note: "Use shadow-lg for depth, hover:shadow-xl for interactive effect"
    },
    {
      id: 25,
      title: "Create a back to top button",
      problem: "Build a button that appears when scrolling down and scrolls to top.",
      answer: "Use fixed positioning with visibility utilities based on scroll position.",
      example: "<button class='fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-opacity opacity-0 invisible'>\n  <svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>\n    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 10l7-7m0 0l7 7m-7-7v18'></path>\n  </svg>\n</button>\n\n<script>\nwindow.addEventListener('scroll', function() {\n  const button = document.querySelector('.back-to-top');\n  if (window.scrollY > 300) {\n    button.classList.remove('opacity-0', 'invisible');\n  } else {\n    button.classList.add('opacity-0', 'invisible');\n  }\n});\n</script>",
      output: "Button appears after scrolling 300px, scrolls to top when clicked",
      note: "Use opacity and visibility together to hide element but maintain layout"
    }
  ],
  
  experienced: [
    {
      id: 26,
      title: "Customize Tailwind to add a new breakpoint 'xxl' at 1400px",
      problem: "Add a custom breakpoint 'xxl' at 1400px for ultra-wide screens.",
      answer: "Extend screens in tailwind.config.js with new breakpoint values.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      screens: {\n        'xxl': '1400px',\n        '3xl': '1600px',\n      }\n    }\n  }\n}\n\n// Usage in HTML\n<div class='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl'>\n  Responsive text with custom xxl breakpoint\n</div>",
      output: "New xxl breakpoint available for use in responsive prefixes",
      note: "Add breakpoints progressively; don't add too many unnecessary ones"
    },
    {
      id: 27,
      title: "Write a plugin that adds a new utility class '.shadow-glow'",
      problem: "Create a custom Tailwind plugin that adds glow effect utility class.",
      answer: "Use the plugin API with addUtilities to register custom shadow class.",
      example: "// tailwind.config.js\nconst plugin = require('tailwindcss/plugin');\n\nmodule.exports = {\n  plugins: [\n    plugin(function({ addUtilities, theme }) {\n      addUtilities({\n        '.shadow-glow': {\n          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',\n          transition: 'box-shadow 0.3s ease',\n        },\n        '.shadow-glow-hover': {\n          '&:hover': {\n            boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)',\n          }\n        }\n      })\n    })\n  ]\n}\n\n// Usage\n<div class='shadow-glow shadow-glow-hover p-4 bg-white rounded'>\n  Glowing element on hover\n</div>",
      output: "Custom shadow-glow utility available throughout the project",
      note: "Use theme() function to access Tailwind theme values"
    },
    {
      id: 28,
      title: "Implement a dark mode toggle that switches Tailwind dark classes",
      problem: "Create a toggle that switches between light and dark themes using dark: variants.",
      answer: "Set darkMode: 'class' in config and toggle dark class on html element.",
      example: "// tailwind.config.js\nmodule.exports = {\n  darkMode: 'class',\n}\n\n// Dark mode toggle component\n'use client';\nimport { useState, useEffect } from 'react';\n\nexport default function DarkModeToggle() {\n  const [isDark, setIsDark] = useState(false);\n\n  useEffect(() => {\n    const saved = localStorage.getItem('theme');\n    if (saved === 'dark') {\n      setIsDark(true);\n      document.documentElement.classList.add('dark');\n    }\n  }, []);\n\n  const toggle = () => {\n    setIsDark(!isDark);\n    if (!isDark) {\n      document.documentElement.classList.add('dark');\n      localStorage.setItem('theme', 'dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n      localStorage.setItem('theme', 'light');\n    }\n  };\n\n  return (\n    <button onClick={toggle} className='p-2 rounded-lg bg-gray-200 dark:bg-gray-700'>\n      {isDark ? '☀️ Light' : '🌙 Dark'}\n    </button>\n  );\n}\n\n// Using dark mode\n<div className='bg-white dark:bg-gray-900 text-black dark:text-white p-4'>\n  This adapts to dark mode\n</div>",
      output: "Theme toggles between light and dark, preference persists",
      note: "Use localStorage to remember user's theme preference"
    },
    {
      id: 29,
      title: "Create a custom color palette with 10 shades",
      problem: "Add brand colors with multiple shades to Tailwind theme.",
      answer: "Extend colors object with custom color and shade values.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        'brand': {\n          50: '#eff6ff',\n          100: '#dbeafe',\n          200: '#bfdbfe',\n          300: '#93c5fd',\n          400: '#60a5fa',\n          500: '#3b82f6',\n          600: '#2563eb',\n          700: '#1d4ed8',\n          800: '#1e40af',\n          900: '#1e3a8a',\n        }\n      }\n    }\n  }\n}\n\n// Usage\n<div className='bg-brand-500 text-white p-4'>Primary</div>\n<div className='bg-brand-100 text-brand-800 p-4'>Light variant</div>",
      output: "10 custom brand color shades available for use",
      note: "Generate shades using tools like tailwind-shades generator"
    },
    {
      id: 30,
      title: "Create a responsive typography scale",
      problem: "Set up fluid typography that scales with screen size using clamp()",
      answer: "Use arbitrary values with clamp() for responsive typography.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      fontSize: {\n        'fluid-sm': 'clamp(0.8rem, 2vw, 1rem)',\n        'fluid-base': 'clamp(1rem, 4vw, 1.25rem)',\n        'fluid-lg': 'clamp(1.25rem, 5vw, 1.5rem)',\n        'fluid-xl': 'clamp(1.5rem, 6vw, 2rem)',\n        'fluid-2xl': 'clamp(2rem, 8vw, 3rem)',\n      }\n    }\n  }\n}\n\n// Usage\n<h1 class='text-fluid-2xl font-bold'>Fluid Heading</h1>\n<p class='text-fluid-base'>This text scales smoothly with screen size</p>",
      output: "Text that scales continuously between min and max sizes",
      note: "clamp(min, preferred, max) provides true fluid typography"
    },
    {
      id: 31,
      title: "Create a custom container query",
      problem: "Implement container queries using @tailwindcss/container-queries plugin.",
      answer: "Install plugin and use @container and @{breakpoint}: prefixes.",
      example: "// Install\nnpm install @tailwindcss/container-queries\n\n// tailwind.config.js\nmodule.exports = {\n  plugins: [\n    require('@tailwindcss/container-queries'),\n  ]\n}\n\n// Usage\n<div class='@container'>\n  <div class='grid @sm:grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4 gap-4'>\n    {cards.map(card => (\n      <div key={card.id} class='bg-white p-4 rounded shadow'>\n        <h3 class='@[200px]:text-lg @[300px]:text-xl'>{card.title}</h3>\n        <p class='@[200px]:line-clamp-2 @[300px]:line-clamp-3'>{card.content}</p>\n      </div>\n    ))}\n  </div>\n</div>",
      output: "Layout adapts based on container width, not viewport width",
      note: "Perfect for reusable components in different contexts"
    },
    {
      id: 32,
      title: "Optimize Tailwind for production (purge unused styles)",
      problem: "Configure Tailwind to remove unused CSS in production build.",
      answer: "Set content paths correctly in tailwind.config.js for proper purging.",
      example: "// tailwind.config.js\nmodule.exports = {\n  content: [\n    './pages/**/*.{js,ts,jsx,tsx}',\n    './components/**/*.{js,ts,jsx,tsx}',\n    './app/**/*.{js,ts,jsx,tsx}',\n    './src/**/*.{html,js}',\n  ],\n  theme: { extend: {} },\n  plugins: [],\n}\n\n// Build script\n\"scripts\": {\n  \"build:css\": \"tailwindcss -o dist/output.css --minify\"\n}",
      output: "Production CSS contains only used classes (~10-50KB)",
      note: "Test production build locally before deploying"
    },
    {
      id: 33,
      title: "Create a CSS grid using repeat and minmax",
      problem: "Build a responsive card grid that auto-fills based on card width.",
      answer: "Use grid-cols-repeat(auto-fit, minmax(250px, 1fr)) for responsive wrapping.",
      example: "<div class='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-6'>\n  <div class='bg-white rounded-lg shadow p-4'>Card 1</div>\n  <div class='bg-white rounded-lg shadow p-4'>Card 2</div>\n  <div class='bg-white rounded-lg shadow p-4'>Card 3</div>\n  <div class='bg-white rounded-lg shadow p-4'>Card 4</div>\n  <div class='bg-white rounded-lg shadow p-4'>Card 5</div>\n</div>",
      output: "Grid that creates as many columns as fit with min width 280px",
      note: "auto-fit creates new rows when columns don't fit"
    },
    {
      id: 34,
      title: "Implement a responsive sticky header with backdrop blur",
      answer: "Use sticky top-0 with backdrop-blur and bg-opacity for glass effect.",
      example: "<header class='sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50'>\n  <div class='max-w-7xl mx-auto px-4 py-4'>\n    <div class='flex justify-between items-center'>\n      <div class='text-xl font-bold'>Logo</div>\n      <nav class='hidden md:flex space-x-6'>\n        <a href='#' class='hover:text-blue-500'>Home</a>\n        <a href='#' class='hover:text-blue-500'>Products</a>\n        <a href='#' class='hover:text-blue-500'>Contact</a>\n      </nav>\n    </div>\n  </div>\n</header>",
      output: "Header stays at top with frosted glass effect on scroll",
      note: "Use z-50 to ensure header stays above other content"
    },
    {
      id: 35,
      title: "Create a custom keyframe animation",
      problem: "Add a custom bounce animation with specific easing.",
      answer: "Define keyframes in tailwind.config.js under theme.extend.keyframes.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      keyframes: {\n        'bounce-custom': {\n          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },\n          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },\n        }\n      },\n      animation: {\n        'bounce-custom': 'bounce-custom 1s infinite',\n      }\n    }\n  }\n}\n\n// Usage\n<div class='animate-bounce-custom'>Custom bouncing element</div>",
      output: "Custom bounce animation with custom easing applied",
      note: "Use cubic-bezier for precise animation control"
    },
    {
      id: 36,
      title: "Build a responsive video background",
      problem: "Create a hero section with full-width video background.",
      answer: "Use absolute positioning with object-cover for video element.",
      example: "<div class='relative h-screen overflow-hidden'>\n  <video class='absolute top-0 left-0 w-full h-full object-cover' autoplay loop muted>\n    <source src='hero-video.mp4' type='video/mp4' />\n  </video>\n  <div class='relative z-10 flex items-center justify-center h-full bg-black/50'>\n    <div class='text-center text-white px-4'>\n      <h1 class='text-4xl md:text-6xl font-bold mb-4'>Welcome</h1>\n      <p class='text-lg md:text-xl mb-8'>Experience something amazing</p>\n      <button class='bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100'>Get Started</button>\n    </div>\n  </div>\n</div>",
      output: "Hero section with video background and overlay content",
      note: "Use object-cover to ensure video fills container without distortion"
    },
    {
      id: 37,
      title: "Create a masonry grid layout",
      problem: "Build a Pinterest-style masonry grid with varying heights.",
      answer: "Use columns utilities: columns-2 md:columns-3 lg:columns-4.",
      example: "<div class='columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4'>\n  <div class='break-inside-avoid bg-blue-500 text-white p-4 rounded-lg'>Item 1 - short</div>\n  <div class='break-inside-avoid bg-red-500 text-white p-4 rounded-lg'>Item 2 - very tall content that spans more height naturally</div>\n  <div class='break-inside-avoid bg-green-500 text-white p-4 rounded-lg'>Item 3</div>\n  <div class='break-inside-avoid bg-purple-500 text-white p-4 rounded-lg'>Item 4</div>\n  <div class='break-inside-avoid bg-yellow-500 text-white p-4 rounded-lg'>Item 5</div>\n  <div class='break-inside-avoid bg-pink-500 text-white p-4 rounded-lg'>Item 6</div>\n</div>",
      output: "Masonry grid with items arranged in columns, varying heights",
      note: "Use break-inside-avoid to prevent items from breaking across columns"
    },
    {
      id: 38,
      title: "Implement a custom font loading strategy",
      problem: "Load custom fonts with next/font or @font-face and Tailwind.",
      answer: "Next.js: use next/font. Other: add @font-face and extend fontFamily.",
      example: "// Next.js with next/font\nimport { Inter } from 'next/font/google';\nconst inter = Inter({ subsets: ['latin'] });\n\nexport default function Layout({ children }) {\n  return <body className={inter.className}>{children}</body>;\n}\n\n// Or using @font-face in CSS\n@font-face {\n  font-family: 'CustomFont';\n  src: url('/fonts/CustomFont.woff2') format('woff2');\n  font-weight: 400;\n  font-display: swap;\n}\n\n// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      fontFamily: {\n        'custom': ['CustomFont', 'sans-serif'],\n      }\n    }\n  }\n}\n\n// Usage\n<div class='font-custom'>This uses custom font</div>",
      output: "Custom font loaded and available via Tailwind classes",
      note: "Use font-display: swap to prevent FOIT (Flash of Invisible Text)"
    },
    {
      id: 39,
      title: "Create a responsive data table with horizontal scroll",
      problem: "Build a table that scrolls horizontally on mobile devices.",
      answer: "Use overflow-x-auto wrapper with min-w-[table width].",
      example: "<div class='overflow-x-auto shadow-md rounded-lg'>\n  <table class='min-w-[800px] w-full text-sm text-left'>\n    <thead class='bg-gray-50'>\n      <tr>\n        <th class='px-6 py-3'>Name</th>\n        <th class='px-6 py-3'>Email</th>\n        <th class='px-6 py-3'>Department</th>\n        <th class='px-6 py-3'>Role</th>\n        <th class='px-6 py-3'>Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class='border-b hover:bg-gray-50'>\n        <td class='px-6 py-4'>John Doe</td>\n        <td class='px-6 py-4'>john@example.com</td>\n        <td class='px-6 py-4'>Engineering</td>\n        <td class='px-6 py-4'>Frontend</td>\n        <td class='px-6 py-4'><span class='bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs'>Active</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
      output: "Table that scrolls horizontally on mobile, full width on desktop",
      note: "Set min-width to ensure table has minimum width before scrolling"
    },
    {
      id: 40,
      title: "Create a nested dropdown menu",
      problem: "Build a multi-level dropdown with submenus.",
      answer: "Use positioning and hover states for nested dropdowns.",
      example: "<div class='relative inline-block group'>\n  <button class='bg-gray-800 text-white px-4 py-2 rounded'>Menu</button>\n  <div class='absolute hidden group-hover:block mt-2 w-48 bg-white rounded-lg shadow-lg z-10'>\n    <a href='#' class='block px-4 py-2 hover:bg-gray-100'>Item 1</a>\n    <div class='relative group/sub'>\n      <a href='#' class='block px-4 py-2 hover:bg-gray-100'>Item 2 →</a>\n      <div class='absolute left-full top-0 hidden group-hover/sub:block w-48 bg-white rounded-lg shadow-lg ml-1'>\n        <a href='#' class='block px-4 py-2 hover:bg-gray-100'>Subitem 1</a>\n        <a href='#' class='block px-4 py-2 hover:bg-gray-100'>Subitem 2</a>\n      </div>\n    </div>\n    <a href='#' class='block px-4 py-2 hover:bg-gray-100'>Item 3</a>\n  </div>\n</div>",
      output: "Nested dropdown that shows submenu on hover",
      note: "Use group and group-hover for multiple levels of nesting"
    },
    {
      id: 41,
      title: "Implement a carousel/slider with snap points",
      problem: "Create a horizontal scroll carousel with snap scrolling.",
      answer: "Use overflow-x-auto with snap-x snap-mandatory for horizontal scrolling.",
      example: "<div class='overflow-x-auto snap-x snap-mandatory'>\n  <div class='flex'>\n    <div class='flex-none w-full snap-center bg-blue-500 text-white p-8 text-center'>Slide 1</div>\n    <div class='flex-none w-full snap-center bg-red-500 text-white p-8 text-center'>Slide 2</div>\n    <div class='flex-none w-full snap-center bg-green-500 text-white p-8 text-center'>Slide 3</div>\n  </div>\n</div>",
      output: "Horizontally scrollable carousel with snap points",
      note: "Use snap-center to align slides at center when scrolling stops"
    },
    {
      id: 42,
      title: "Create a custom scrollbar styling",
      problem: "Style scrollbar appearance using Tailwind and custom CSS.",
      answer: "Use ::-webkit-scrollbar pseudo-elements with Tailwind @apply.",
      example: "/* globals.css */\n.custom-scrollbar::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.custom-scrollbar::-webkit-scrollbar-track {\n  @apply bg-gray-100 rounded;\n}\n\n.custom-scrollbar::-webkit-scrollbar-thumb {\n  @apply bg-gray-400 rounded hover:bg-gray-500;\n}\n\n// Usage\n<div class='custom-scrollbar overflow-auto h-64'>\n  <div class='space-y-2 p-4'>\n    {Array.from({ length: 20 }).map((_, i) => (\n      <div key={i} class='p-2 bg-gray-100 rounded'>Item {i + 1}</div>\n    ))}\n  </div>\n</div>",
      output: "Custom-styled scrollbar matching design system",
      note: "Scrollbar styling only works in WebKit browsers"
    },
    {
      id: 43,
      title: "Create a responsive hero with curved bottom",
      problem: "Build a hero section with SVG wave separator at bottom.",
      answer: "Use absolute positioning for SVG wave at bottom of hero.",
      example: "<div class='relative bg-gradient-to-r from-blue-600 to-purple-600 text-white'>\n  <div class='py-20 px-4 text-center'>\n    <h1 class='text-5xl font-bold mb-4'>Hero Section</h1>\n    <p class='text-xl mb-8'>With custom wave separator</p>\n  </div>\n  <div class='absolute bottom-0 left-0 w-full overflow-hidden leading-none'>\n    <svg class='relative block w-full h-16' viewBox='0 0 1200 120' preserveAspectRatio='none'>\n      <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' class='fill-white'></path>\n    </svg>\n  </div>\n</div>",
      output: "Hero with curved wave separator at bottom",
      note: "Use leading-none to remove extra space below SVG"
    },
    {
      id: 44,
      title: "Implement a multi-select dropdown",
      problem: "Create a dropdown that allows selecting multiple options.",
      answer: "Use JavaScript to track selected items and display as tags.",
      example: "<div class='relative'>\n  <button class='w-full border rounded-lg p-2 text-left flex justify-between items-center'>\n    Select options\n    <span>▼</span>\n  </button>\n  <div class='absolute hidden mt-1 w-full bg-white border rounded-lg shadow-lg z-10'>\n    <div class='p-2 space-y-1'>\n      <label class='flex items-center gap-2 p-1 hover:bg-gray-100 cursor-pointer'>\n        <input type='checkbox' class='rounded border-gray-300' /> Option 1\n      </label>\n      <label class='flex items-center gap-2 p-1 hover:bg-gray-100 cursor-pointer'>\n        <input type='checkbox' class='rounded border-gray-300' /> Option 2\n      </label>\n      <label class='flex items-center gap-2 p-1 hover:bg-gray-100 cursor-pointer'>\n        <input type='checkbox' class='rounded border-gray-300' /> Option 3\n      </label>\n    </div>\n  </div>\n  <div class='flex flex-wrap gap-2 mt-2'>\n    <!-- Selected tags appear here -->\n  </div>\n</div>",
      output: "Dropdown with checkboxes for multi-selection",
      note: "Add JavaScript to manage selected items and update display"
    },
    {
      id: 45,
      title: "Create a timeline with progress line",
      problem: "Build a vertical timeline with connecting line between events.",
      answer: "Use absolute positioned pseudo-element for connecting line.",
      example: "<div class='relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-300'>\n  <div class='relative mb-8'>\n    <div class='absolute -left-8 top-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white'></div>\n    <div class='bg-white rounded-lg shadow p-4'>\n      <h3 class='font-bold'>Event 1</h3>\n      <p class='text-gray-600 text-sm'>January 2024</p>\n      <p class='mt-2'>Description of event 1</p>\n    </div>\n  </div>\n  <div class='relative mb-8'>\n    <div class='absolute -left-8 top-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white'></div>\n    <div class='bg-white rounded-lg shadow p-4'>\n      <h3 class='font-bold'>Event 2</h3>\n      <p class='text-gray-600 text-sm'>February 2024</p>\n      <p class='mt-2'>Description of event 2</p>\n    </div>\n  </div>\n</div>",
      output: "Vertical timeline with connecting line between events",
      note: "Use border-white to create separation between line and markers"
    },
    {
      id: 46,
      title: "Implement a skeleton loader for image gallery",
      problem: "Create skeleton loaders that match gallery image dimensions.",
      answer: "Use aspect-ratio with animate-pulse for image placeholders.",
      example: "<div class='grid grid-cols-2 md:grid-cols-4 gap-4'>\n  <div class='animate-pulse'>\n    <div class='aspect-square bg-gray-200 rounded-lg mb-2'></div>\n    <div class='h-4 bg-gray-200 rounded w-3/4 mb-1'></div>\n    <div class='h-3 bg-gray-200 rounded w-1/2'></div>\n  </div>\n  <div class='animate-pulse'>\n    <div class='aspect-square bg-gray-200 rounded-lg mb-2'></div>\n    <div class='h-4 bg-gray-200 rounded w-3/4 mb-1'></div>\n    <div class='h-3 bg-gray-200 rounded w-1/2'></div>\n  </div>\n  <div class='animate-pulse'>\n    <div class='aspect-square bg-gray-200 rounded-lg mb-2'></div>\n    <div class='h-4 bg-gray-200 rounded w-3/4 mb-1'></div>\n    <div class='h-3 bg-gray-200 rounded w-1/2'></div>\n  </div>\n</div>",
      output: "Image gallery skeleton loaders with matching dimensions",
      note: "Use same aspect ratio as actual images to prevent layout shift"
    },
    {
      id: 47,
      title: "Create a responsive sidebar with overlay on mobile",
      problem: "Build a sidebar that slides in from left on mobile with backdrop.",
      answer: "Use transform translate-x with transition for slide animation.",
      example: "<div class='fixed inset-0 bg-black/50 z-40 hidden'></div>\n<div class='fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform -translate-x-full transition-transform duration-300 z-50'>\n  <div class='p-4'>\n    <button class='absolute top-4 right-4 text-gray-500'>×</button>\n    <nav class='mt-8 space-y-2'>\n      <a href='#' class='block p-2 hover:bg-gray-100 rounded'>Home</a>\n      <a href='#' class='block p-2 hover:bg-gray-100 rounded'>About</a>\n      <a href='#' class='block p-2 hover:bg-gray-100 rounded'>Services</a>\n    </nav>\n  </div>\n</div>\n<button class='md:hidden fixed bottom-4 left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg z-30'>\n  ☰\n</button>",
      output: "Sidebar that slides in from left with backdrop overlay",
      note: "Add JavaScript to toggle translate-x class and overlay visibility"
    },
    {
      id: 48,
      title: "Implement a parallax scrolling effect",
      problem: "Create a parallax section where background moves slower than content.",
      answer: "Use bg-fixed or transform utilities for parallax effect.",
      example: "<div class='h-screen flex items-center justify-center bg-fixed bg-center bg-cover' style=\"background-image: url('https://picsum.photos/id/104/1920/1080')\">\n  <div class='bg-black/50 p-8 rounded-lg text-white text-center'>\n    <h2 class='text-4xl font-bold mb-4'>Parallax Section</h2>\n    <p class='text-lg'>Background moves slower than content</p>\n  </div>\n</div>\n<div class='h-64 bg-gray-800 flex items-center justify-center text-white'>\n  Normal scrolling content\n</div>\n<div class='h-screen flex items-center justify-center bg-fixed bg-center bg-cover' style=\"background-image: url('https://picsum.photos/id/106/1920/1080')\">\n  <div class='bg-black/50 p-8 rounded-lg text-white text-center'>\n    <h2 class='text-4xl font-bold mb-4'>Another Parallax</h2>\n  </div>\n</div>",
      output: "Parallax effect with background fixed while content scrolls",
      note: "bg-fixed creates parallax but may impact performance on mobile"
    },
    {
      id: 49,
      title: "Create a responsive mega menu",
      problem: "Build a large dropdown menu with multiple columns and sections.",
      answer: "Use absolute positioning with grid for mega menu layout.",
      example: "<div class='relative group'>\n  <button class='bg-gray-800 text-white px-6 py-2 rounded'>Products</button>\n  <div class='absolute hidden group-hover:block mt-2 w-screen max-w-4xl left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg z-10'>\n    <div class='p-6'>\n      <div class='grid grid-cols-4 gap-6'>\n        <div>\n          <h3 class='font-bold text-gray-900 mb-3'>Electronics</h3>\n          <ul class='space-y-2 text-sm'>\n            <li><a href='#' class='text-gray-600 hover:text-blue-500'>Laptops</a></li>\n            <li><a href='#' class='text-gray-600 hover:text-blue-500'>Phones</a></li>\n            <li><a href='#' class='text-gray-600 hover:text-blue-500'>Tablets</a></li>\n          </ul>\n        </div>\n        <div>\n          <h3 class='font-bold text-gray-900 mb-3'>Clothing</h3>\n          <ul class='space-y-2 text-sm'>\n            <li><a href='#' class='text-gray-600 hover:text-blue-500'>Men</a></li>\n            <li><a href='#' class='text-gray-600 hover:text-blue-500'>Women</a></li>\n            <li><a href='#' class='text-gray-600 hover:text-blue-500'>Kids</a></li>\n          </ul>\n        </div>\n        <div>\n          <h3 class='font-bold text-gray-900 mb-3'>Accessories</h3>\n          <ul class='space-y-2 text-sm'>\n            <li><a href='#' class='text-gray-600 hover:text-blue-500'>Bags</a></li>\n            <li><a href='#' class='text-gray-600 hover:text-blue-500'>Watches</a></li>\n          </ul>\n        </div>\n        <div>\n          <div class='bg-blue-50 p-4 rounded-lg'>\n            <p class='text-blue-800 font-semibold'>Sale!</p>\n            <p class='text-sm text-gray-600'>Up to 50% off selected items</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
      output: "Mega menu with multiple columns and sections on hover",
      note: "Use left-1/2 transform -translate-x-1/2 to center mega menu"
    },
    {
      id: 50,
      title: "Create a WhatsApp-style chat bubble",
      problem: "Build a chat interface with message bubbles for sender and receiver.",
      answer: "Use rounded-lg with different colors and alignments for messages.",
      example: "<div class='max-w-md mx-auto bg-gray-100 rounded-lg p-4 h-96 overflow-y-auto space-y-3'>\n  <div class='flex justify-start'>\n    <div class='bg-white rounded-lg rounded-tl-none px-4 py-2 max-w-[70%] shadow'>\n      <p class='text-gray-800'>Hey! How are you?</p>\n      <span class='text-xs text-gray-400'>10:30 AM</span>\n    </div>\n  </div>\n  <div class='flex justify-end'>\n    <div class='bg-blue-500 text-white rounded-lg rounded-tr-none px-4 py-2 max-w-[70%] shadow'>\n      <p>I'm good, thanks! How about you?</p>\n      <span class='text-xs text-blue-200'>10:31 AM</span>\n    </div>\n  </div>\n  <div class='flex justify-start'>\n    <div class='bg-white rounded-lg rounded-tl-none px-4 py-2 max-w-[70%] shadow'>\n      <p class='text-gray-800'>Working on a Tailwind project. It's awesome!</p>\n      <span class='text-xs text-gray-400'>10:32 AM</span>\n    </div>\n  </div>\n</div>\n<div class='max-w-md mx-auto mt-4 flex gap-2'>\n  <input type='text' placeholder='Type a message...' class='flex-1 border rounded-lg px-4 py-2' />\n  <button class='bg-blue-500 text-white px-4 py-2 rounded-lg'>Send</button>\n</div>",
      output: "Chat interface with sender/receiver message bubbles",
      note: "Use rounded-tl-none and rounded-tr-none to create speech bubble effect"
    }
  ]
};

export const tailwindProblems = problems;
// /data/tailwind/interview.js

export const interview = {
  fresher: [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup without writing custom CSS.",
      example: "<button class='bg-blue-500 text-white px-4 py-2 rounded'>Click Me</button>",
      output: "A blue button with white text, padding, and rounded corners",
      note: "Tailwind promotes rapid development and consistent styling"
    },
    {
      question: "How is Tailwind different from Bootstrap?",
      answer: "Bootstrap provides pre-built components with predefined styles, while Tailwind provides utility classes that you combine to build custom components from scratch.",
      example: "<!-- Bootstrap -->\n<button class='btn btn-primary'>Button</button>\n\n<!-- Tailwind -->\n<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>\n  Button\n</button>",
      output: "Both create buttons, but Tailwind gives more control over styling",
      note: "Tailwind is more flexible; Bootstrap is faster for standard designs"
    },
    {
      question: "What are utility classes in Tailwind?",
      answer: "Utility classes are single-purpose CSS classes that do one thing, like text-center for centering text or bg-blue-500 for blue background.",
      example: "<div class='p-4 m-2 bg-red-500 text-white text-center rounded'>\n  This uses multiple utility classes\n</div>",
      output: "Element with padding, margin, red background, white text, centered text, and rounded corners",
      note: "Combine multiple utilities to build complex designs"
    },
    {
      question: "How do you install Tailwind CSS?",
      answer: "Install via npm: npm install -D tailwindcss postcss autoprefixer, then initialize with npx tailwindcss init -p.",
      example: "// Installation commands\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n\n// tailwind.config.js\nmodule.exports = {\n  content: ['./src/**/*.{html,js}'],\n  theme: { extend: {} },\n  plugins: [],\n}",
      output: "Tailwind installed and configured for your project",
      note: "Always configure content paths for proper purging in production"
    },
    {
      question: "What are responsive prefixes in Tailwind?",
      answer: "Responsive prefixes (sm:, md:, lg:, xl:, 2xl:) allow you to apply styles at specific breakpoints.",
      example: "<div class='text-sm md:text-base lg:text-lg xl:text-xl'>\n  Responsive text size\n</div>",
      output: "Text size changes at different screen widths",
      note: "Mobile-first approach: base styles apply to all screens"
    },
    {
      question: "How do you add hover effects in Tailwind?",
      answer: "Use the hover: prefix before any utility class to apply styles on hover.",
      example: "<button class='bg-blue-500 hover:bg-blue-700 transition duration-300'>\n  Hover me\n</button>",
      output: "Button darkens when mouse hovers over it",
      note: "Combine with transition for smooth effects"
    },
    {
      question: "What is the spacing scale in Tailwind?",
      answer: "Tailwind uses a spacing scale from 0-96 where each number corresponds to 0.25rem (4px). So p-4 = 1rem (16px) padding.",
      example: "<div class='p-0 p-1 p-2 p-4 p-8'>\n  Different padding values\n</div>",
      output: "Elements with varying padding based on the scale",
      note: "Scale is customizable in tailwind.config.js"
    },
    {
      question: "How do you set colors in Tailwind?",
      answer: "Use color utilities like text-{color}-{shade} for text, bg-{color}-{shade} for backgrounds, and border-{color}-{shade} for borders.",
      example: "<div class='bg-red-500 text-white border border-blue-500'>\n  Colored element\n</div>",
      output: "Element with red background, white text, blue border",
      note: "Color shades range from 50 (lightest) to 950 (darkest)"
    },
    {
      question: "How do you create a flexbox layout?",
      answer: "Use flex utilities: flex, flex-row, flex-col, justify-*, items-*, gap-*, etc.",
      example: "<div class='flex justify-between items-center gap-4'>\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>",
      output: "Three items spaced evenly, centered vertically with gaps",
      note: "Use gap-* for spacing between flex items"
    },
    {
      question: "How do you create a grid layout?",
      answer: "Use grid utilities: grid, grid-cols-*, gap-*, col-span-*, row-span-*.",
      example: "<div class='grid grid-cols-3 gap-4'>\n  <div>Col 1</div>\n  <div>Col 2</div>\n  <div>Col 3</div>\n</div>",
      output: "Three equal columns with 1rem gaps",
      note: "Combine with responsive prefixes for responsive grids"
    },
    {
      question: "What is dark mode in Tailwind?",
      answer: "Dark mode uses the dark: prefix to apply styles when dark mode is active. Enable with darkMode: 'class' in config.",
      example: "<div class='bg-white dark:bg-gray-900 text-black dark:text-white'>\n  Adapts to dark mode\n</div>",
      output: "Light background in light mode, dark background in dark mode",
      note: "Toggle dark class on html element to switch modes"
    },
    {
      question: "How do you add rounded corners?",
      answer: "Use rounded-* utilities: rounded-sm, rounded, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-full.",
      example: "<div class='rounded-full bg-blue-500 w-16 h-16'></div>",
      output: "A perfect circle",
      note: "rounded-full creates a circle on square elements"
    },
    {
      question: "How do you add shadows?",
      answer: "Use shadow-* utilities: shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-inner.",
      example: "<div class='shadow-lg p-4 bg-white'>\n  Element with large shadow\n</div>",
      output: "Element with a prominent shadow effect",
      note: "Shadow size increases from sm to 2xl"
    },
    {
      question: "What are arbitrary values in Tailwind?",
      answer: "Arbitrary values allow you to use any CSS value using square bracket notation: [value].",
      example: "<div class='top-[117px] w-[calc(100%-2rem)] bg-[#1a365d]'>\n  Custom values\n</div>",
      output: "Element with exact positioning, calculated width, custom color",
      note: "Available in JIT mode (default in v3+)"
    },
    {
      question: "How do you handle typography in Tailwind?",
      answer: "Use text-* for size, font-* for weight, leading-* for line height, tracking-* for letter spacing.",
      example: "<p class='text-lg font-bold leading-relaxed tracking-wide'>\n  Styled text\n</p>",
      output: "Text with large size, bold weight, relaxed line height, wide spacing",
      note: "Use the typography plugin for rich text content"
    },
    {
      question: "What are Tailwind plugins?",
      answer: "Plugins extend Tailwind with additional utilities, components, or base styles. Official plugins include forms, typography, and aspect-ratio.",
      example: "// Install plugin\nnpm install @tailwindcss/forms\n\n// tailwind.config.js\nmodule.exports = {\n  plugins: [require('@tailwindcss/forms')],\n}",
      output: "Form elements automatically styled consistently",
      note: "Plugins save time and add powerful features"
    },
    {
      question: "How do you center an element?",
      answer: "Use flexbox: flex justify-center items-center, or margin: mx-auto for block elements.",
      example: "<div class='flex justify-center items-center h-screen'>\n  <div>Centered content</div>\n</div>",
      output: "Element centered both horizontally and vertically",
      note: "Parent needs height for vertical centering"
    },
    {
      question: "What is the container class?",
      answer: "Container class sets max-width based on current breakpoint and centers content with mx-auto.",
      example: "<div class='container mx-auto px-4'>\n  Centered responsive content\n</div>",
      output: "Content respects max-width and stays centered",
      note: "Add padding with px-* utilities"
    },
    {
      question: "How do you add transitions?",
      answer: "Use transition utilities: transition, duration-*, ease-*, delay-*.",
      example: "<button class='bg-blue-500 hover:bg-blue-700 transition duration-300'>\n  Smooth transition\n</button>",
      output: "Background color changes smoothly on hover",
      note: "Always include transition class for smooth changes"
    },
    {
      question: "What are focus states?",
      answer: "Use focus: prefix to apply styles when element is focused (keyboard navigation).",
      example: "<input class='border focus:border-blue-500 focus:ring-2 focus:ring-blue-200' />",
      output: "Input gets blue border and ring when focused",
      note: "Always provide focus styles for accessibility"
    },
    {
      question: "How do you handle overflow?",
      answer: "Use overflow utilities: overflow-auto, overflow-hidden, overflow-scroll, overflow-visible.",
      example: "<div class='overflow-auto h-32 w-64'>\n  Scrollable content if needed\n</div>",
      output: "Scrollbar appears when content exceeds dimensions",
      note: "Use overflow-x and overflow-y for axis-specific control"
    },
    {
      question: "What is the difference between p-4 and px-4?",
      answer: "p-4 adds padding on all four sides. px-4 adds padding only on left and right (horizontal).",
      example: "<div class='p-4'>Padding on all sides</div>\n<div class='px-4'>Only horizontal padding</div>",
      output: "First has padding everywhere, second only left and right",
      note: "Similar for m-* (margin) and py-* (vertical)"
    },
    {
      question: "How do you set width and height?",
      answer: "Use w-* for width and h-* for height. Options include w-full, w-1/2, w-screen, w-auto, h-32, etc.",
      example: "<div class='w-1/2 h-32 bg-blue-500'>\n  50% width, 8rem height\n</div>",
      output: "Element half of parent width, fixed height",
      note: "Use w-screen for full viewport width"
    },
    {
      question: "What is z-index in Tailwind?",
      answer: "Use z-0, z-10, z-20, z-30, z-40, z-50, z-auto utilities to control stacking order.",
      example: "<div class='relative'>\n  <div class='absolute z-10 bg-blue-500'>Behind</div>\n  <div class='absolute z-20 bg-red-500'>Front</div>\n</div>",
      output: "Red element appears on top of blue element",
      note: "Higher z-index values appear on top"
    },
    {
      question: "How do you add opacity?",
      answer: "Use opacity-{value} utilities: opacity-0, opacity-25, opacity-50, opacity-75, opacity-100.",
      example: "<div class='bg-black opacity-50'>50% transparent</div>",
      output: "Element with 50% opacity (semi-transparent)",
      note: "Combine with bg-opacity or text-opacity for specific properties"
    },
    {
      question: "What is the difference between hidden and invisible?",
      answer: "hidden removes element from layout (display: none). invisible hides element but keeps its space (visibility: hidden).",
      example: "<div class='hidden'>Not in layout</div>\n<div class='invisible'>Hidden but takes space</div>",
      output: "First element completely removed, second invisible but space remains",
      note: "Use invisible to maintain layout while hiding content"
    },
    {
      question: "How do you create responsive breakpoints?",
      answer: "Default breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px, 2xl:1536px. Customize in config.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    screens: {\n      'xs': '475px',\n      'sm': '640px',\n      'md': '768px',\n      'lg': '1024px',\n      'xl': '1280px',\n      '2xl': '1536px',\n    }\n  }\n}",
      output: "Custom breakpoints available for responsive design",
      note: "Breakpoints are mobile-first (min-width)"
    },
    {
      question: "How do you style active links?",
      answer: "Use active: prefix for click state, or combine with client-side routing active class detection.",
      example: "<a href='#' class='text-gray-600 hover:text-blue-500 active:text-blue-700'>\n  Link with states\n</a>",
      output: "Link changes color on hover and when clicked",
      note: "Active state is momentary during click"
    },
    {
      question: "What are Tailwind directives?",
      answer: "Directives are special Tailwind CSS at-rules: @tailwind, @apply, @layer, @variants, @screen.",
      example: "/* app.css */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer components {\n  .btn {\n    @apply px-4 py-2 bg-blue-500 text-white rounded;\n  }\n}",
      output: "Tailwind layers imported and custom component created",
      note: "@apply allows composing utilities into custom classes"
    },
    {
      question: "How do you add custom fonts?",
      answer: "Add custom fonts to tailwind.config.js under theme.extend.fontFamily and include the font in your CSS.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      fontFamily: {\n        'custom': ['Inter', 'sans-serif'],\n      }\n    }\n  }\n}\n\n<!-- Usage -->\n<div class='font-custom'>Custom font text</div>",
      output: "Text rendered with Inter font",
      note: "Use next/font for Next.js projects for better performance"
    },
    {
      question: "How do you handle gradients?",
      answer: "Use bg-gradient-to-{direction} with from-{color} and to-{color} utilities.",
      example: "<div class='bg-gradient-to-r from-blue-500 to-purple-500 p-4'>\n  Horizontal gradient\n</div>",
      output: "Background transitions from blue to purple horizontally",
      note: "Directions: t, tr, r, br, b, bl, l, tl"
    },
    {
      question: "What are aspect ratio utilities?",
      answer: "Aspect ratio utilities (from @tailwindcss/aspect-ratio plugin) maintain proportions: aspect-video, aspect-square, etc.",
      example: "// Install plugin\nnpm install @tailwindcss/aspect-ratio\n\n// Usage\n<div class='aspect-video bg-blue-500'>\n  16:9 aspect ratio\n</div>",
      output: "Element maintains 16:9 ratio regardless of width",
      note: "Useful for responsive videos and images"
    },
    {
      question: "How do you use Tailwind with forms?",
      answer: "Use the @tailwindcss/forms plugin for consistent form element styling across browsers.",
      example: "// Install\nnpm install @tailwindcss/forms\n\n// Config\nmodule.exports = {\n  plugins: [require('@tailwindcss/forms')],\n}\n\n<!-- Form elements styled automatically -->\n<input type='text' class='rounded-md border-gray-300' />",
      output: "Inputs have consistent styling across all browsers",
      note: "Plugin removes default browser styles"
    },
    {
      question: "What is the typography plugin?",
      answer: "The @tailwindcss/typography plugin adds prose classes for styling rich text content like blog posts.",
      example: "// Install\nnpm install @tailwindcss/typography\n\n// Use\n<article class='prose lg:prose-xl'>\n  <h1>Blog Title</h1>\n  <p>Beautifully styled content</p>\n</article>",
      output: "HTML content styled like a book or article",
      note: "Use prose-sm, prose-lg, etc. for different sizes"
    },
    {
      question: "How do you use Tailwind with Next.js?",
      answer: "Tailwind works seamlessly with Next.js. Install Tailwind, configure content paths to include app/ and components/, import CSS in layout.",
      example: "// tailwind.config.js\nmodule.exports = {\n  content: [\n    './app/**/*.{js,ts,jsx,tsx}',\n    './components/**/*.{js,ts,jsx,tsx}',\n  ],\n}\n\n// app/globals.css\n@tailwind base;\n@tailwind components;\n@tailwind utilities;",
      output: "Tailwind fully integrated with Next.js App Router",
      note: "Use next/image with Tailwind for optimized images"
    },
    {
      question: "What are variants in Tailwind?",
      answer: "Variants allow applying utilities in different states: hover, focus, active, disabled, group-hover, etc.",
      example: "<button class='bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50'>\n  Button with variants\n</button>",
      output: "Button responds to hover, focus, and disabled states",
      note: "Variants can be combined: sm:hover:bg-blue-700"
    },
    {
      question: "How do you group hover effects?",
      answer: "Use group class on parent and group-hover: prefix on child to apply styles when parent is hovered.",
      example: "<div class='group bg-gray-100 p-4'>\n  <h3 class='group-hover:text-blue-500'>Title</h3>\n  <p class='group-hover:text-gray-700'>Description</p>\n</div>",
      output: "Text changes color when card is hovered",
      note: "Useful for card hover effects"
    },
    {
      question: "What are Tailwind layers?",
      answer: "Tailwind has three layers: base (resets), components (reusable classes), utilities (single-purpose classes).",
      example: "@layer base {\n  h1 { @apply text-2xl font-bold; }\n}\n\n@layer components {\n  .btn { @apply px-4 py-2 rounded; }\n}\n\n@layer utilities {\n  .scrollbar-hide { scrollbar-width: none; }\n}",
      output: "Custom styles organized in appropriate layers",
      note: "Layers control CSS output order to prevent specificity issues"
    },
    {
      question: "How do you use Tailwind in production?",
      answer: "Build with NODE_ENV=production and Tailwind automatically purges unused styles based on content configuration.",
      example: "// Package.json\n{\n  \"scripts\": {\n    \"build\": \"NODE_ENV=production tailwindcss -o output.css --minify\"\n  }\n}",
      output: "Production CSS contains only used classes (typically 10-50KB)",
      note: "Always verify content paths in production config"
    },
    {
      question: "What is the @apply directive?",
      answer: "@apply allows you to compose Tailwind utility classes into custom CSS classes for reusability.",
      example: ".btn {\n  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700;\n}",
      output: "Custom .btn class with multiple Tailwind utilities",
      note: "Use @layer components to ensure proper order"
    },
    {
      question: "How do you handle SVG icons?",
      answer: "Use Tailwind classes directly on SVGs: w-*, h-*, fill-*, stroke-*, text-*.",
      example: "<svg class='w-6 h-6 text-blue-500 fill-current' viewBox='0 0 24 24'>\n  <path d='M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z' />\n</svg>",
      output: "Blue star icon with proper sizing",
      note: "fill-current uses current text color"
    },
    {
      question: "What are list utilities?",
      answer: "List utilities control list styling: list-none, list-disc, list-decimal, list-inside, list-outside.",
      example: "<ul class='list-disc list-inside'>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
      output: "Bulleted list with markers inside content",
      note: "Use list-outside for markers outside text"
    },
    {
      question: "How do you add box shadows on hover?",
      answer: "Combine hover: with shadow utilities: hover:shadow-lg, hover:shadow-xl, etc.",
      example: "<div class='p-4 shadow hover:shadow-lg transition-shadow'>\n  Shadow grows on hover\n</div>",
      output: "Element shadow increases smoothly on hover",
      note: "Add transition-shadow for smooth effect"
    },
    {
      question: "What are transform utilities?",
      answer: "Transform utilities include scale, rotate, translate, skew. Use transform class then transform-specific classes.",
      example: "<div class='transform hover:scale-110 hover:rotate-6 transition-transform'>\n  Scale and rotate on hover\n</div>",
      output: "Element scales up and rotates slightly when hovered",
      note: "Always include transform class for transforms to work"
    },
    {
      question: "How do you create a sticky header?",
      answer: "Use sticky top-0 utilities to make header stick to top on scroll.",
      example: "<header class='sticky top-0 bg-white shadow-md p-4'>\n  This header sticks to top\n</header>",
      output: "Header remains visible when scrolling down",
      note: "Parent should not have overflow: hidden"
    },
    {
      question: "What is the difference between relative and absolute?",
      answer: "Relative positions element relative to its normal position. Absolute positions element relative to nearest positioned ancestor.",
      example: "<div class='relative h-32 bg-gray-200'>\n  <div class='absolute bottom-0 right-0 bg-blue-500 p-2'>Absolute child</div>\n</div>",
      output: "Child element positioned at bottom-right of parent",
      note: "Use absolute for precise positioning within relative parent"
    },
    {
      question: "How do you handle text overflow?",
      answer: "Use truncate for single line truncation, line-clamp-{n} for multi-line truncation.",
      example: "<div class='truncate w-48'>This long text will be truncated with ellipsis...</div>\n<div class='line-clamp-3'>Multi-line text will be limited to 3 lines and truncated</div>",
      output: "First: single line with ellipsis, Second: 3 lines then ellipsis",
      note: "line-clamp requires @tailwindcss/line-clamp plugin"
    },
    {
      question: "How do you set minimum and maximum dimensions?",
      answer: "Use min-w-*, max-w-*, min-h-*, max-h-* utilities.",
      example: "<div class='min-w-48 max-w-md min-h-32 max-h-96'>\n  Content with constraints\n</div>",
      output: "Element has min/max width and height constraints",
      note: "Useful for responsive containers"
    },
    {
      question: "What are cursor utilities?",
      answer: "Cursor utilities change mouse cursor style: cursor-pointer, cursor-wait, cursor-not-allowed, cursor-move, etc.",
      example: "<button class='cursor-pointer'>Pointer cursor</button>\n<button disabled class='cursor-not-allowed'>Not allowed</button>",
      output: "First shows hand cursor, second shows not-allowed cursor",
      note: "Combine with disabled: for disabled buttons"
    },
    {
      question: "How do you set user select?",
      answer: "Use select-none, select-text, select-all, select-auto to control text selection.",
      example: "<div class='select-none'>Cannot select this text</div>\n<div class='select-text'>This text can be selected</div>",
      output: "First text unselectable, second text selectable",
      note: "Useful for UI elements to prevent accidental selection"
    }
  ],
  
  experienced: [
    {
      question: "How does Tailwind's JIT mode work?",
      answer: "JIT (Just-In-Time) generates CSS on-demand as you author your templates, enabling faster builds, arbitrary values, and live devtools. It's default in Tailwind v3+.",
      example: "// JIT enables arbitrary values\n<div class='top-[117px] w-[calc(100%-2rem)]'></div>\n\n// Dynamic class generation\n<div class={`bg-${color}-500`}></div>",
      output: "Styles generated only when used, no purging needed",
      note: "Cannot be disabled in v3; watch mode scans files and regenerates CSS"
    },
    {
      question: "How do you optimize Tailwind for production?",
      answer: "Configure content paths to scan all template files; Tailwind automatically purges unused styles in production. Resulting CSS is typically 10-50KB.",
      example: "// tailwind.config.js\nmodule.exports = {\n  content: [\n    './src/**/*.{js,ts,jsx,tsx,mdx}',\n    './pages/**/*.{js,ts,jsx,tsx}',\n    './components/**/*.{js,ts,jsx,tsx}',\n  ],\n}\n\n// Build command\nNODE_ENV=production npx tailwindcss -o output.css --minify",
      output: "Production CSS contains only used classes dramatically reducing file size",
      note: "Ensure all template paths are included; missing paths cause missing styles"
    },
    {
      question: "How do you create custom variants?",
      answer: "Use the variants section in config or create custom variants using the plugin API with addVariant.",
      example: "// tailwind.config.js\nmodule.exports = {\n  variants: {\n    extend: {\n      backgroundColor: ['active', 'disabled'],\n    }\n  },\n  plugins: [\n    function({ addVariant }) {\n      addVariant('third-child', '&:nth-child(3)')\n      addVariant('hocus', ['&:hover', '&:focus'])\n    }\n  ]\n}\n\n// Usage\n<div class='third-child:bg-red-500 hocus:bg-blue-500'></div>",
      output: "Custom variants available for use with utilities",
      note: "Use variants.extend to preserve default variants"
    },
    {
      question: "How do you build a custom plugin?",
      answer: "Create a plugin function that registers utilities, components, base styles, or variants using the plugin API.",
      example: "// tailwind.config.js\nconst plugin = require('tailwindcss/plugin')\n\nmodule.exports = {\n  plugins: [\n    plugin(function({ addUtilities, addComponents, addBase, theme }) {\n      addBase({\n        'h1': { fontSize: theme('fontSize.2xl') }\n      })\n      \n      addComponents({\n        '.btn': { padding: `${theme('spacing.2')} ${theme('spacing.4')}` }\n      })\n      \n      addUtilities({\n        '.text-glow': { textShadow: '0 0 10px rgba(0,0,0,0.3)' }\n      })\n    })\n  ]\n}",
      output: "Custom Tailwind plugin with base styles, components, and utilities",
      note: "Plugins can be published to npm for reuse across projects"
    },
    {
      question: "How do you handle dynamic theming with CSS variables?",
      answer: "Define CSS variables in config, set values in CSS, and change them at runtime for dynamic theming.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: 'var(--color-primary)',\n      }\n    }\n  }\n}\n\n// globals.css\n:root { --color-primary: #3b82f6; }\n.theme-dark { --color-primary: #60a5fa; }\n\n// Usage\n<div class='bg-primary'>Dynamic themed element</div>",
      output: "Theme changes at runtime without rebuilding CSS",
      note: "Great for multi-brand applications or user preferences"
    },
    {
      question: "What is the performance impact of Tailwind?",
      answer: "Tailwind produces larger CSS in development (for convenience) but purges to small size (10-50KB) in production. JIT mode improves build speed significantly.",
      example: "// Development CSS: ~3-5MB (all utilities)\n// Production CSS: ~10-50KB (only used utilities)\n// Build time: JIT ~150ms changes vs traditional ~2-3s",
      output: "Excellent production performance with fast development rebuilds",
      note: "JIT mode is key for fast development iteration"
    },
    {
      question: "How do you create responsive variants for custom utilities?",
      answer: "Use addUtilities with responsive variants or use the variants option to generate responsive versions.",
      example: "// Plugin with responsive utilities\nplugin(function({ addUtilities }) {\n  addUtilities({\n    '.custom-utility': { ... },\n    '.custom-utility-lg': { '@media (min-width: 1024px)': { ... } }\n  })\n})\n\n// Or use variants\nmodule.exports = {\n  theme: { extend: { ... } },\n  variants: {\n    extend: {\n      customUtility: ['responsive', 'hover']\n    }\n  }\n}",
      output: "Custom utilities work with responsive prefixes like md:custom-utility",
      note: "Most utilities automatically get responsive variants"
    },
    {
      question: "How do you use Tailwind with CSS-in-JS?",
      answer: "Use twin.macro for full integration, or use @apply in styled-components, or simply use className strings.",
      example: "// With twin.macro\nimport tw from 'twin.macro'\nconst Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded`\n\n// With styled-components\nconst Button = styled.button`\n  @apply bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded;\n`\n\n// Direct class usage\n<div className=\"p-4 bg-gray-100\">Content</div>",
      output: "Tailwind utilities work seamlessly with CSS-in-JS solutions",
      note: "twin.macro provides the best developer experience"
    },
    {
      question: "How do you configure Tailwind for monorepo?",
      answer: "Set content paths to scan all packages, use presets to share configuration, and exclude node_modules.",
      example: "// Root tailwind.config.js\nmodule.exports = {\n  content: [\n    './packages/**/*.{js,ts,jsx,tsx}',\n    './apps/**/*.{js,ts,jsx,tsx}',\n    '!./**/node_modules',\n  ],\n  presets: [require('./tailwind.preset.js')],\n}\n\n// Package-specific config\nmodule.exports = {\n  presets: [require('../../tailwind.config.js')],\n  content: ['./src/**/*.{js,ts,jsx,tsx}'],\n}",
      output: "Tailwind works across all packages in monorepo",
      note: "Use presets to avoid duplicating configuration"
    },
    {
      question: "How do you create a design system with Tailwind?",
      answer: "Extend theme with design tokens, create component classes with @apply, and document available utilities.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: { brand: { 50: '#eff6ff', 500: '#3b82f6' } },\n      spacing: { '18': '4.5rem' },\n      fontSize: { '2.5xl': '1.75rem' },\n      borderRadius: { 'card': '1rem' },\n    }\n  }\n}\n\n// components.css\n@layer components {\n  .card { @apply bg-white rounded-card shadow-md p-6; }\n  .btn-primary { @apply bg-brand-500 text-white hover:bg-brand-600; }\n}",
      output: "Consistent design system with reusable components and tokens",
      note: "Document custom utilities and components for team reference"
    },
    {
      question: "How do you handle RTL support?",
      answer: "Use tailwindcss-rtl plugin or manual rtl: and ltr: variants for bidirectional text support.",
      example: "// Install plugin\nnpm install tailwindcss-rtl\n\n// tailwind.config.js\nmodule.exports = {\n  plugins: [require('tailwindcss-rtl')],\n}\n\n// Usage\n<div class='ml-4 rtl:mr-4 rtl:ml-0'>\n  Margin adapts to RTL\n</div>\n<div class='flex rtl:flex-row-reverse'>\n  Flex direction reverses in RTL\n</div>",
      output: "Layout correctly adapts to right-to-left languages",
      note: "Set dir='rtl' on html element to activate"
    },
    {
      question: "How do you optimize animations for performance?",
      answer: "Use transform and opacity properties (GPU accelerated), avoid animating layout properties like width, height, margin.",
      example: "// Good (GPU accelerated)\n<div class='transition-transform duration-300 hover:scale-105'>Scale</div>\n<div class='transition-opacity duration-300 hover:opacity-75'>Fade</div>\n\n// Bad (CPU intensive)\n<div class='transition-all duration-300 hover:w-64'>Width animation</div>",
      output: "Smooth 60fps animations that don't cause layout thrashing",
      note: "Use will-change-transform for advanced optimizations"
    },
    {
      question: "How do you use Tailwind with CSS Modules?",
      answer: "Import Tailwind utilities using @apply in CSS Modules, or use className with template literals.",
      example: "// Button.module.css\n.btn {\n  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700;\n}\n\n// Component.jsx\nimport styles from './Button.module.css'\n<button className={styles.btn}>Click</button>\n\n// Or use template literals\n<button className={`${styles.base} ${styles.primary}`}>Click</button>",
      output: "Scoped styles with Tailwind utilities using CSS Modules",
      note: "CSS Modules provide local scoping for component styles"
    },
    {
      question: "How do you create accessible components?",
      answer: "Combine Tailwind utilities with ARIA attributes, focus management, and semantic HTML.",
      example: "<button class='focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' aria-label='Close modal'>\n  ×\n</button>\n\n<div role='dialog' aria-modal='true' aria-labelledby='modal-title'>\n  <h2 id='modal-title'>Modal Title</h2>\n</div>\n\n<a href='#main' class='sr-only focus:not-sr-only'>Skip to content</a>",
      output: "Components that work with screen readers and keyboard navigation",
      note: "Always test with keyboard-only navigation and screen readers"
    },
    {
      question: "How do you handle dark mode with system preference?",
      answer: "Use darkMode: 'media' to follow system preference, or combine 'class' with media query listener.",
      example: "// tailwind.config.js\nmodule.exports = {\n  darkMode: 'media' // follows system preference\n}\n\n// Or hybrid approach\nuseEffect(() => {\n  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')\n  const handler = (e) => {\n    if (!localStorage.getItem('theme')) {\n      document.documentElement.classList.toggle('dark', e.matches)\n    }\n  }\n  mediaQuery.addEventListener('change', handler)\n  return () => mediaQuery.removeEventListener('change', handler)\n}, [])",
      output: "Dark mode respects system preference but allows user override",
      note: "Use 'media' for simple apps, 'class' for user-controlled toggle"
    },
    {
      question: "What is Tailwind's hierarchy and specificity?",
      answer: "Utilities have higher specificity than components, which have higher specificity than base styles. Order in CSS file also matters.",
      example: "/* Order in output CSS */\n@tailwind base;      /* Lowest specificity */\n@tailwind components; /* Medium specificity */\n@tailwind utilities;  /* Highest specificity */\n\n/* Custom layer ordering */\n@layer base { }\n@layer components { }\n@layer utilities { }",
      output: "Utilities always override components, which override base styles",
      note: "Use !important modifier only when absolutely necessary"
    },
    {
      question: "How do you integrate Tailwind with Storybook?",
      answer: "Import Tailwind CSS in Storybook preview, configure Tailwind to scan stories, and use Tailwind classes in stories.",
      example: "// .storybook/preview.js\nimport '../src/index.css' // Tailwind CSS\n\nexport const parameters = { /* ... */ }\n\n// Component.stories.jsx\nexport const Primary = {\n  render: () => <button className='bg-blue-500 text-white px-4 py-2 rounded'>Button</button>\n}",
      output: "Tailwind styles work in Storybook components",
      note: "Ensure Tailwind content path includes .storybook folder"
    },
    {
      question: "How do you use Tailwind with React Native?",
      answer: "Use NativeWind or Tailwind React Native, which provide Tailwind-like utilities for React Native.",
      example: "// Install NativeWind\nnpm install nativewind\n\n// tailwind.config.js\nmodule.exports = {\n  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],\n}\n\n// App.js\nimport { styled } from 'nativewind'\nconst StyledView = styled(View)\n\n<StyledView className='bg-blue-500 p-4 rounded'>\n  <Text className='text-white'>React Native with Tailwind</Text>\n</StyledView>",
      output: "Tailwind-like styling for React Native apps",
      note: "NativeWind supports most Tailwind CSS classes"
    },
    {
      question: "How do you create fluid typography with Tailwind?",
      answer: "Use clamp() in arbitrary values or custom font sizes with calc() for responsive typography.",
      example: "// Arbitrary clamp\n<h1 class='text-[clamp(1.5rem,5vw,3rem)]'>\n  Fluid responsive heading\n</h1>\n\n// Custom config\nfontSize: {\n  'fluid-sm': 'clamp(0.8rem, 2vw, 1rem)',\n  'fluid-base': 'clamp(1rem, 4vw, 1.25rem)',\n}\n\n// Using calc\n<div class='text-[calc(1rem+0.5vw)]'>\n  Text that scales with viewport\n</div>",
      output: "Typography scales smoothly between min and max sizes",
      note: "clamp() provides true fluid typography without breakpoints"
    },
    {
      question: "How do you handle print styles?",
      answer: "Use print: variant to apply styles only when printing, similar to responsive prefixes.",
      example: "<div class='bg-white print:bg-transparent'>\n  Background disappears in print\n</div>\n\n<div class='hidden print:block'>\n  Only visible when printing\n</div>\n\n<div class='text-black print:text-black'>\n  Ensure text is black in print\n</div>",
      output: "Optimal styles for printed documents",
      note: "Test print styles with browser print preview"
    },
    {
      question: "How do you deploy Tailwind with CDN?",
      answer: "Tailwind CDN is not recommended for production due to size, but available for prototyping via CDN link.",
      example: "<!-- Development only - NOT for production -->\n<link href='https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css' rel='stylesheet'>\n\n<!-- Better: Generate optimized CSS -->\nnpx tailwindcss -o output.css --minify",
      output: "Full Tailwind CSS loaded via CDN (but very large)",
      note: "Always generate optimized CSS for production"
    },
    {
      question: "How do you use Tailwind with WordPress?",
      answer: "Compile Tailwind CSS separately and enqueue in WordPress, or use the Tailwind CDN for development.",
      example: "// functions.php\nfunction enqueue_tailwind() {\n  wp_enqueue_style('tailwind', get_template_directory_uri() . '/dist/output.css');\n}\nadd_action('wp_enqueue_scripts', 'enqueue_tailwind');\n\n// Build process in package.json\n{\n  \"scripts\": {\n    \"build:css\": \"tailwindcss -i ./src/input.css -o ./dist/output.css --minify\"\n  }\n}",
      output: "Tailwind CSS integrated with WordPress theme",
      note: "Use browser-sync for live reload during development"
    },
    {
      question: "How do you reset CSS with Tailwind?",
      answer: "Tailwind includes Preflight (modern CSS reset) via @tailwind base, which normalizes styles across browsers.",
      example: "/* Preflight is automatically included */\n@tailwind base; /* Includes modern-normalize */\n\n/* Disable Preflight if needed */\nmodule.exports = {\n  corePlugins: {\n    preflight: false,\n  },\n}",
      output: "Consistent base styles across all browsers",
      note: "Preflight removes default margins, sets box-sizing: border-box"
    },
    {
      question: "What are screen functions?",
      answer: "Screen functions (@screen) allow using Tailwind breakpoints in custom CSS, matching responsive utility behavior.",
      example: "/* Custom CSS with Tailwind breakpoints */\n@media screen(sm) {\n  .custom {\n    @apply text-base;\n  }\n}\n\n/* Equivalent to */\n@media (min-width: 640px) {\n  .custom { font-size: 1rem; }\n}\n\n/* Available screen functions */\n@screen sm { }\n@screen md { }\n@screen lg { }\n@screen xl { }\n@screen 2xl { }",
      output: "Custom CSS that follows Tailwind's responsive breakpoints",
      note: "Screen functions are processed at build time"
    },
    {
      question: "How do you configure custom keyframes?",
      answer: "Add custom keyframes to tailwind.config.js under theme.extend.keyframes and animation utilities.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      keyframes: {\n        wiggle: {\n          '0%, 100%': { transform: 'rotate(-3deg)' },\n          '50%': { transform: 'rotate(3deg)' },\n        },\n        slide: {\n          from: { transform: 'translateX(-100%)' },\n          to: { transform: 'translateX(0)' },\n        },\n      },\n      animation: {\n        wiggle: 'wiggle 0.5s ease-in-out infinite',\n        slide: 'slide 0.3s ease-out',\n      }\n    }\n  }\n}\n\n<!-- Usage -->\n<div class='animate-wiggle'>Wiggling element</div>\n<div class='animate-slide'>Sliding element</div>",
      output: "Custom animations available via animate-* utilities",
      note: "Keyframe names should be descriptive and unique"
    },
    {
      question: "How do you debug Tailwind CSS?",
      answer: "Use browser devtools, Tailwind CSS IntelliSense extension, and custom debug utilities for troubleshooting.",
      example: "// Add debug utilities\n@layer utilities {\n  .debug {\n    outline: 1px solid red;\n  }\n  .debug * {\n    outline: 1px solid rgba(255,0,0,0.1);\n  }\n}\n\n// Check class order specificity\n<div class='text-red-500 text-blue-500'>Last class wins (blue)</div>\n\n// Verify content path\ntailwind.config.js -> content array must include all template files",
      output: "Effective debugging workflow for Tailwind issues",
      note: "Use VS Code IntelliSense for class autocomplete and preview"
    },
    {
      question: "How do you handle transitions between pages?",
      answer: "Use CSS transitions with Tailwind classes on route change, or use Framer Motion for complex animations.",
      example: "// Next.js page transitions\nimport { motion } from 'framer-motion'\n\nexport default function Page() {\n  return (\n    <motion.div\n      initial={{ opacity: 0 }}\n      animate={{ opacity: 1 }}\n      exit={{ opacity: 0 }}\n      transition={{ duration: 0.3 }}\n      className='min-h-screen'\n    >\n      Page content\n    </motion.div>\n  )\n}\n\n// CSS transitions\n.page-enter {\n  opacity: 0;\n  transform: translateX(20px);\n}\n.page-enter-active {\n  transition: all 0.3s ease;\n  opacity: 1;\n  transform: translateX(0);\n}",
      output: "Smooth animations between page navigations",
      note: "Framer Motion works well with Tailwind for page transitions"
    },
    {
      question: "How do you use Tailwind with Styled Components?",
      answer: "Use @apply directive within Styled Components template literals, or use twin.macro for better integration.",
      example: "// Styled Components with @apply\nimport styled from 'styled-components'\n\nconst Button = styled.button`\n  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;\n  transition: all 0.3s ease;\n  \n  &:hover {\n    @apply transform scale-105;\n  }\n`\n\n// With twin.macro (recommended)\nimport tw from 'twin.macro'\nconst Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded`",
      output: "Styled Components with Tailwind utilities",
      note: "twin.macro provides full Tailwind support with styled-components"
    },
    {
      question: "How do you create a custom color palette?",
      answer: "Extend colors in tailwind.config.js with custom brand colors and shades.",
      example: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        brand: {\n          50: '#eff6ff',\n          100: '#dbeafe',\n          200: '#bfdbfe',\n          300: '#93c5fd',\n          400: '#60a5fa',\n          500: '#3b82f6',\n          600: '#2563eb',\n          700: '#1d4ed8',\n          800: '#1e40af',\n          900: '#1e3a8a',\n        },\n        primary: '#3b82f6',\n        secondary: '#6b7280',\n        accent: '#8b5cf6',\n      }\n    }\n  }\n}\n\n<!-- Usage -->\n<div class='bg-brand-500 text-white'>Brand primary</div>\n<div class='bg-brand-100 text-brand-800'>Brand light variant</div>",
      output: "Complete custom color palette with 10 shades per color",
      note: "Generate shades using tools like tailwind-shades or ui.shadcn.com/colors"
    },
    {
      question: "How do you use Tailwind with TypeScript?",
      answer: "Tailwind works seamlessly with TypeScript. Install @types/tailwindcss and configure class name intellisense.",
      example: "// Install types\nnpm install -D @types/tailwindcss\n\n// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"types\": [\"tailwindcss\"]\n  }\n}\n\n// Component with typed class names\nconst Button: React.FC<{ variant: 'primary' | 'secondary' }> = ({ variant }) => {\n  const variantClasses = {\n    primary: 'bg-blue-500 hover:bg-blue-600',\n    secondary: 'bg-gray-500 hover:bg-gray-600',\n  }\n  \n  return <button className={`px-4 py-2 rounded ${variantClasses[variant]}`}>Click</button>\n}",
      output: "Type-safe Tailwind classes in TypeScript project",
      note: "Use clsx or classnames for conditional classes with type safety"
    },
    {
      question: "How do you handle pseudo-element styling?",
      answer: "Use before: and after: variants with arbitrary values or custom utilities for pseudo-elements.",
      example: "// Using arbitrary values\n<div class='before:content-[\"✨\"] before:mr-2 after:content-[\"✨\"] after:ml-2'>\n  Decorated text\n</div>\n\n// Custom utilities\n@layer utilities {\n  .content-star::before {\n    content: '⭐';\n    @apply mr-2;\n  }\n}\n\n// Pseudo-element positioning\n<div class='relative before:absolute before:inset-0 before:bg-black before:bg-opacity-50'>\n  <div class='relative z-10'>Content on top</div>\n</div>",
      output: "Pseudo-elements styled with Tailwind utilities",
      note: "content property requires arbitrary values: before:content-['']"
    },
    {
      question: "What are utility-first pros and cons?",
      answer: "Pros: faster development, consistent design, smaller CSS, no context switching. Cons: verbose HTML, learning curve, can be repetitive.",
      example: "// Pros: No custom CSS needed\n<div class='flex items-center justify-between p-4 bg-white shadow-lg rounded-lg'>\n  <h2 class='text-xl font-bold text-gray-900'>Title</h2>\n  <button class='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Button</button>\n</div>\n\n// Cons: HTML can become verbose\n<div class='flex flex-col sm:flex-row md:items-center lg:justify-between xl:space-x-4'>\n  <!-- Many classes -->\n</div>",
      output: "Trade-offs between utility-first and traditional CSS approaches",
      note: "Use @apply for repetitive component patterns to reduce verbosity"
    },
    {
      question: "How do you use Tailwind with Vue.js?",
      answer: "Tailwind works great with Vue. Configure content to scan .vue files and use classes in templates.",
      example: "// tailwind.config.js\nmodule.exports = {\n  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],\n}\n\n// Vue component\n<template>\n  <div class=\"p-4 bg-gray-100 rounded-lg\">\n    <h1 class=\"text-2xl font-bold mb-4\">{{ title }}</h1>\n    <button class=\"bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded\">\n      Click me\n    </button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst title = ref('Vue + Tailwind')\n</script>",
      output: "Tailwind CSS fully integrated with Vue.js components",
      note: "Use v-bind:class for conditional Tailwind classes"
    },
    {
      question: "How do you create a responsive sidebar?",
      answer: "Combine fixed positioning, transforms, and responsive classes for mobile-responsive sidebar.",
      example: "<div class='min-h-screen flex'>\n  <!-- Mobile sidebar (hidden by default, slide in) -->\n  <div class='fixed inset-0 z-40 transform -translate-x-full transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64'>\n    <div class='bg-gray-800 text-white h-full w-64 p-4'>\n      Sidebar content\n    </div>\n  </div>\n  \n  <!-- Main content -->\n  <div class='flex-1 p-4'>\n    <button class='md:hidden mb-4 p-2 bg-blue-500 text-white rounded'>Toggle Sidebar</button>\n    Main content area\n  </div>\n</div>",
      output: "Sidebar that collapses on mobile and expands on desktop",
      note: "Use JavaScript to toggle the -translate-x-full class on mobile"
    },
    {
      question: "How do you implement skeleton loaders?",
      answer: "Use animate-pulse with background colors to create skeleton loading states.",
      example: "<div class='space-y-4'>\n  <!-- Header skeleton -->\n  <div class='h-8 bg-gray-200 rounded animate-pulse w-1/3'></div>\n  \n  <!-- Content skeleton -->\n  <div class='space-y-2'>\n    <div class='h-4 bg-gray-200 rounded animate-pulse'></div>\n    <div class='h-4 bg-gray-200 rounded animate-pulse w-5/6'></div>\n    <div class='h-4 bg-gray-200 rounded animate-pulse w-4/6'></div>\n  </div>\n  \n  <!-- Card skeleton -->\n  <div class='border rounded-lg p-4'>\n    <div class='h-32 bg-gray-200 rounded animate-pulse mb-4'></div>\n    <div class='h-4 bg-gray-200 rounded animate-pulse w-3/4 mb-2'></div>\n    <div class='h-4 bg-gray-200 rounded animate-pulse w-1/2'></div>\n  </div>\n</div>",
      output: "Skeleton loaders that indicate content is loading",
      note: "Combine with conditional rendering to show actual content when loaded"
    },
    {
      question: "How do you implement infinite scroll?",
      answer: "Combine Tailwind styles with Intersection Observer for infinite scroll loading.",
      example: "// Component with infinite scroll\nimport { useEffect, useRef } from 'react'\n\nexport default function InfiniteScroll() {\n  const [items, setItems] = useState([])\n  const [page, setPage] = useState(1)\n  const loaderRef = useRef()\n\n  useEffect(() => {\n    const observer = new IntersectionObserver((entries) => {\n      if (entries[0].isIntersecting) {\n        loadMore()\n      }\n    })\n    if (loaderRef.current) observer.observe(loaderRef.current)\n    return () => observer.disconnect()\n  }, [])\n\n  return (\n    <div className='space-y-4'>\n      {items.map(item => (\n        <div key={item.id} className='bg-white shadow rounded-lg p-4'>\n          {item.content}\n        </div>\n      ))}\n      <div ref={loaderRef} className='py-8 text-center'>\n        <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>\n      </div>\n    </div>\n  )\n}",
      output: "Infinite scrolling content with loading spinner",
      note: "Use custom spinner with Tailwind border utilities"
    },
    {
      question: "How do you create a mega menu?",
      answer: "Use absolute positioning, grid layout, and hover states for large dropdown navigation.",
      example: "<div class='group relative'>\n  <button class='px-4 py-2 bg-gray-800 text-white rounded'>Products</button>\n  \n  <div class='absolute hidden group-hover:block top-full left-0 mt-2 w-screen max-w-md bg-white shadow-lg rounded-lg p-6'>\n    <div class='grid grid-cols-2 gap-6'>\n      <div>\n        <h3 class='font-bold mb-2'>Category 1</h3>\n        <ul class='space-y-1'>\n          <li><a href='#' class='text-gray-600 hover:text-blue-500'>Sub-item 1</a></li>\n          <li><a href='#' class='text-gray-600 hover:text-blue-500'>Sub-item 2</a></li>\n        </ul>\n      </div>\n      <div>\n        <h3 class='font-bold mb-2'>Category 2</h3>\n        <ul class='space-y-1'>\n          <li><a href='#' class='text-gray-600 hover:text-blue-500'>Sub-item 3</a></li>\n          <li><a href='#' class='text-gray-600 hover:text-blue-500'>Sub-item 4</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>",
      output: "Mega menu with categories and sub-items appearing on hover",
      note: "Use group-hover to show dropdown without JavaScript"
    },
    {
      question: "How do you implement toast notifications?",
      answer: "Create toast component with Tailwind styling and fixed positioning.",
      example: "// Toast component\nfunction Toast({ message, type, onClose }) {\n  const bgColor = {\n    success: 'bg-green-500',\n    error: 'bg-red-500',\n    info: 'bg-blue-500',\n  }[type]\n\n  return (\n    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-4 animate-slide-in`}>\n      <span>{message}</span>\n      <button onClick={onClose} className='hover:opacity-80'>×</button>\n    </div>\n  )\n}\n\n// Custom animation\n@keyframes slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.animate-slide-in {\n  animation: slideIn 0.3s ease-out;\n}",
      output: "Toast notifications that slide in from the right",
      note: "Use state management to show/hide toasts globally"
    },
    {
      question: "How do you create a carousel/slider?",
      answer: "Use overflow-auto with snap-mandatory for horizontal scrolling carousel.",
      example: "<div class='relative'>\n  <div class='overflow-x-auto snap-x snap-mandatory scroll-smooth'>\n    <div class='flex gap-4'>\n      {slides.map((slide, i) => (\n        <div key={i} class='flex-none w-full snap-center'>\n          <img src={slide} alt={`Slide ${i + 1}`} class='w-full h-96 object-cover rounded-lg' />\n        </div>\n      ))}\n    </div>\n  </div>\n  \n  <!-- Navigation dots -->\n  <div class='flex justify-center gap-2 mt-4'>\n    {slides.map((_, i) => (\n      <button class='w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors'></button>\n    ))}\n  </div>\n</div>",
      output: "Smooth horizontal scrolling carousel with snap points",
      note: "Use JavaScript for auto-play and enhanced navigation"
    },
    {
      question: "How do you implement drag-and-drop?",
      answer: "Combine Tailwind styling with HTML5 drag-and-drop API or libraries like react-beautiful-dnd.",
      example: "// Styling for draggable items\n<div class='draggable-item' draggable='true'>\n  <div class='bg-white shadow rounded-lg p-4 cursor-move hover:shadow-md transition-shadow'>\n    <div class='flex items-center gap-3'>\n      <div class='cursor-grab active:cursor-grabbing'>⋮⋮</div>\n      <div>Draggable content</div>\n    </div>\n  </div>\n</div>\n\n// Drop zone styling\n<div class='drop-zone min-h-32 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50'>\n  Drop here\n</div>\n\n// Visual feedback during drag\n.dragging {\n  @apply opacity-50 shadow-lg transform scale-105;\n}\n.drag-over {\n  @apply border-blue-500 bg-blue-50;\n}",
      output: "Stylized draggable elements with visual feedback",
      note: "Add cursor-grab and cursor-grabbing for better UX"
    },
    {
      question: "How do you handle data tables?",
      answer: "Use overflow-auto for responsive tables, and Tailwind utilities for styling.",
      example: `<div class='overflow-x-auto shadow-md rounded-lg'>
  <table class='min-w-full divide-y divide-gray-200'>
    <thead class='bg-gray-50'>
      <tr>
        <th class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
        <th class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
        <th class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
      </tr>
    </thead>
    <tbody class='bg-white divide-y divide-gray-200'>
      {users.map(user => (
        <tr key={user.id} class='hover:bg-gray-50 transition-colors'>
          <td class='px-6 py-4 whitespace-nowrap'>{user.name}</td>
          <td class='px-6 py-4 whitespace-nowrap'>{user.email}</td>
          <td class='px-6 py-4 whitespace-nowrap'>
            <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
              Active
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>`,
      output: "Responsive data table with hover effects and status badges",
      note: "Use whitespace-nowrap to prevent text wrapping in columns"
    },
    {
      question: "How do you create a pricing grid?",
      answer: "Use grid layout with responsive columns for pricing cards.",
      example: "<div class='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto p-8'>\n  <!-- Basic Plan -->\n  <div class='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>\n    <div class='p-6 bg-gray-50'>\n      <h3 class='text-2xl font-bold text-center'>Basic</h3>\n      <p class='text-4xl font-bold text-center mt-4'>$19<span class='text-lg font-normal'>/month</span></p>\n    </div>\n    <div class='p-6 space-y-4'>\n      <ul class='space-y-3'>\n        <li class='flex items-center gap-2'>✓ 10 Users</li>\n        <li class='flex items-center gap-2'>✓ 5GB Storage</li>\n        <li class='flex items-center gap-2 text-gray-400'>✗ Support</li>\n      </ul>\n      <button class='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'>\n        Get Started\n      </button>\n    </div>\n  </div>\n  \n  <!-- Pro Plan (Featured) -->\n  <div class='bg-white rounded-lg shadow-xl overflow-hidden ring-2 ring-blue-500 transform scale-105'>\n    <div class='bg-blue-500 text-white p-2 text-center text-sm'>Most Popular</div>\n    <div class='p-6'>\n      <h3 class='text-2xl font-bold text-center'>Pro</h3>\n      <p class='text-4xl font-bold text-center mt-4'>$49<span class='text-lg font-normal'>/month</span></p>\n    </div>\n    <div class='p-6 space-y-4'>\n      <ul class='space-y-3'>\n        <li class='flex items-center gap-2'>✓ 100 Users</li>\n        <li class='flex items-center gap-2'>✓ 50GB Storage</li>\n        <li class='flex items-center gap-2'>✓ Priority Support</li>\n      </ul>\n      <button class='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'>\n        Get Started\n      </button>\n    </div>\n  </div>\n  \n  <!-- Enterprise Plan -->\n  <div class='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>\n    <div class='p-6 bg-gray-50'>\n      <h3 class='text-2xl font-bold text-center'>Enterprise</h3>\n      <p class='text-4xl font-bold text-center mt-4'>$99<span class='text-lg font-normal'>/month</span></p>\n    </div>\n    <div class='p-6 space-y-4'>\n      <ul class='space-y-3'>\n        <li class='flex items-center gap-2'>✓ Unlimited Users</li>\n        <li class='flex items-center gap-2'>✓ 500GB Storage</li>\n        <li class='flex items-center gap-2'>✓ 24/7 Support</li>\n      </ul>\n      <button class='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600'>\n        Get Started\n      </button>\n    </div>\n  </div>\n</div>",
      output: "Responsive pricing grid with featured plan highlighting",
      note: "Use transform scale for featured plan emphasis"
    },
    {
      question: "How do you implement lazy loading?",
      answer: "Use loading='lazy' attribute with Tailwind styling, or Intersection Observer for custom lazy loading.",
      example: "// Native lazy loading\n<img src='image.jpg' loading='lazy' class='w-full h-auto rounded-lg' />\n\n// Custom lazy loading with Intersection Observer\nconst LazyImage = ({ src, alt }) => {\n  const [imageSrc, setImageSrc] = useState(null)\n  const imgRef = useRef()\n\n  useEffect(() => {\n    const observer = new IntersectionObserver((entries) => {\n      if (entries[0].isIntersecting) {\n        setImageSrc(src)\n        observer.disconnect()\n      }\n    })\n    if (imgRef.current) observer.observe(imgRef.current)\n    return () => observer.disconnect()\n  }, [src])\n\n  return (\n    <div ref={imgRef} className='bg-gray-200 rounded-lg'>\n      {imageSrc && (\n        <img src={imageSrc} alt={alt} className='w-full h-auto rounded-lg' />\n      )}\n    </div>\n  )\n}",
      output: "Images load only when they enter viewport",
      note: "Add blur placeholder (bg-gray-200) for better perceived performance"
    },
    {
      question: "How do you create a floating action button?",
      answer: "Use fixed positioning with rounded-full and shadow-xl for FAB.",
      example: "<button class='fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center'>\n  <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>\n    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 4v16m8-8H4'></path>\n  </svg>\n</button>\n\n<!-- Multiple FABs on hover -->\n<div class='fixed bottom-6 right-6 group'>\n  <button class='bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center'>\n    +\n  </button>\n  <div class='absolute bottom-full right-0 mb-2 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all'>\n    <button class='bg-green-500 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center'>📷</button>\n    <button class='bg-red-500 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center'>📄</button>\n  </div>\n</div>",
      output: "Floating action button with hover-expanding options",
      note: "Ensure FAB doesn't overlap important content"
    },
    {
      question: "How do you create a timeline component?",
      answer: "Use flex or grid layout with border utilities for timeline visualization.",
      example: "<div class='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:h-full before:bg-gray-200'>\n  {timelineItems.map((item, i) => (\n    <div key={i} class='relative flex gap-4'>\n      <div class='relative z-10'>\n        <div class='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold'>\n          {i + 1}\n        </div>\n      </div>\n      <div class='flex-1 bg-white rounded-lg shadow-md p-4'>\n        <h3 class='font-bold text-lg'>{item.title}</h3>\n        <p class='text-gray-600 text-sm mb-2'>{item.date}</p>\n        <p class='text-gray-700'>{item.description}</p>\n      </div>\n    </div>\n  ))}\n</div>",
      output: "Vertical timeline with connecting line and markers",
      note: "Use absolute positioning for the connecting line"
    },
    {
      question: "How do you implement a file upload?",
      answer: "Style file input with Tailwind or create custom upload area with drag-and-drop.",
      example: "// Custom file upload area\n<div class='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors'>\n  <input type='file' id='file-upload' class='hidden' onChange={handleFile} />\n  <label htmlFor='file-upload' class='cursor-pointer'>\n    <svg class='mx-auto h-12 w-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>\n      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>\n    </svg>\n    <p class='mt-2 text-sm text-gray-600'>Click to upload or drag and drop</p>\n    <p class='text-xs text-gray-500'>PNG, JPG, PDF up to 10MB</p>\n  </label>\n</div>\n\n// Upload preview\n<div class='mt-4 grid grid-cols-3 gap-4'>\n  {previews.map((preview, i) => (\n    <div key={i} class='relative'>\n      <img src={preview} class='w-full h-32 object-cover rounded-lg' />\n      <button class='absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>×</button>\n    </div>\n  ))}\n</div>",
      output: "Styled file upload with drag-and-drop and preview",
      note: "Add drag-over class for visual feedback during drag"
    },
    {
      question: "How do you create a breadcrumb navigation?",
      answer: "Use flex layout with inline separators for breadcrumb trails.",
      example: "<nav class='flex items-center space-x-2 text-sm text-gray-600'>\n  <a href='/' class='hover:text-blue-500'>Home</a>\n  <span class='text-gray-400'>/</span>\n  <a href='/products' class='hover:text-blue-500'>Products</a>\n  <span class='text-gray-400'>/</span>\n  <span class='text-gray-900 font-medium'>Product Details</span>\n</nav>\n\n<!-- Responsive breadcrumb -->\n<nav class='flex flex-wrap items-center gap-2 text-sm'>\n  <a href='/' class='text-gray-600 hover:text-blue-500'>🏠 Home</a>\n  \n  {breadcrumbs.map((crumb, i) => (\n    <React.Fragment key={i}>\n      <span class='text-gray-400'>→</span>\n      {i === breadcrumbs.length - 1 ? (\n        <span class='text-gray-900 font-medium'>{crumb.label}</span>\n      ) : (\n        <a href={crumb.href} class='text-gray-600 hover:text-blue-500'>\n          {crumb.label}\n        </a>\n      )}\n    </React.Fragment>\n  ))}\n</nav>",
      output: "Breadcrumb navigation showing current location",
      note: "Use schema.org breadcrumb markup for SEO"
    },
    {
      question: "How do you implement a rich text editor?",
      answer: "Style existing editors (TipTap, Quill) with Tailwind classes for consistent theming.",
      example: "// TipTap editor with Tailwind\nimport { useEditor, EditorContent } from '@tiptap/react'\nimport StarterKit from '@tiptap/starter-kit'\n\nconst Editor = () => {\n  const editor = useEditor({\n    extensions: [StarterKit],\n    content: '<p>Rich text content</p>',\n  })\n\n  return (\n    <div class='border border-gray-300 rounded-lg overflow-hidden'>\n      <div class='border-b border-gray-300 p-2 bg-gray-50 flex gap-2'>\n        <button onClick={() => editor.chain().focus().toggleBold().run()} \n                class='p-1 rounded hover:bg-gray-200'>\n          <strong>B</strong>\n        </button>\n        <button onClick={() => editor.chain().focus().toggleItalic().run()}\n                class='p-1 rounded hover:bg-gray-200'>\n          <em>I</em>\n        </button>\n      </div>\n      <EditorContent editor={editor} class='p-4 prose max-w-none' />\n    </div>\n  )\n}",
      output: "Rich text editor with Tailwind-styled toolbar",
      note: "Use typography plugin for content styling"
    },
    {
      question: "How do you create an animated counter?",
      answer: "Combine Tailwind styling with JavaScript animation for count-up effects.",
      example: "// Animated counter component\nconst AnimatedCounter = ({ target, duration = 2000 }) => {\n  const [count, setCount] = useState(0)\n  \n  useEffect(() => {\n    let startTime\n    const animate = (currentTime) => {\n      if (!startTime) startTime = currentTime\n      const progress = Math.min((currentTime - startTime) / duration, 1)\n      setCount(Math.floor(progress * target))\n      if (progress < 1) requestAnimationFrame(animate)\n    }\n    requestAnimationFrame(animate)\n  }, [target, duration])\n  \n  return (\n    <div class='text-center p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white'>\n      <div class='text-5xl font-bold mb-2'>{count.toLocaleString()}+</div>\n      <div class='text-sm opacity-90'>Happy Users</div>\n    </div>\n  )\n}",
      output: "Number that counts up from 0 to target value",
      note: "Use requestAnimationFrame for smooth animation"
    },
    {
      question: "How do you optimize Core Web Vitals with Tailwind?",
      answer: "Use Tailwind utilities for CLS (layout shift) prevention: fixed dimensions, aspect-ratio, and proper spacing.",
      example: "// Prevent CLS with fixed dimensions\n<div class='w-full h-64 relative'>\n  <Image src='/hero.jpg' fill class='object-cover' />\n</div>\n\n// Use aspect-ratio for images\n<div class='aspect-video bg-gray-200'>\n  <img src='/video-thumb.jpg' class='w-full h-full object-cover' />\n</div>\n\n// Optimize LCP with priority\n<div class='relative w-full'>\n  <Image src='/hero.jpg' priority class='w-full h-auto' />\n</div>\n\n// Minimize FID with Tailwind classes\n<button class='bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-shadow'>\n  Large tappable area\n</button>\n\n// Reduce layout shifts with proper spacing\n<div class='space-y-4'>\n  {/* Skeleton loader with same size as actual content */}\n  <div class='h-24 bg-gray-200 rounded animate-pulse'></div>\n</div>",
      output: "Web Vitals optimized Tailwind components",
      note: "Always specify width/height for images to prevent CLS"
    }
  ]
};

// Also export as learning for backward compatibility
export const tailwindInterview = interview;

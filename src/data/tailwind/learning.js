// /data/tailwind/learning.js

export const learning = {
  basic: {
    title: "💨 Tailwind CSS Basics - Complete Beginner's Guide",
    topics: [
      {
        name: "1. What is Tailwind CSS & Setup",
        description: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs without writing custom CSS. It's highly customizable and promotes rapid development.",
        code: "// Installation with Next.js\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n\n// tailwind.config.js\n/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    './app/**/*.{js,ts,jsx,tsx,mdx}',\n    './pages/**/*.{js,ts,jsx,tsx}',\n    './components/**/*.{js,ts,jsx,tsx}',\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n\n// app/globals.css\n@tailwind base;\n@tailwind components;\n@tailwind utilities;",
        lineByLine: [
          "Line 2: npm install -D tailwindcss postcss autoprefixer - Installs Tailwind and dependencies",
          "Line 3: npx tailwindcss init -p - Creates tailwind.config.js and postcss.config.js files",
          "Line 6: content array - Tells Tailwind which files to scan for class names",
          "Line 7-10: Content paths - Include all files where Tailwind classes might be used",
          "Line 11: theme.extend - Where to add custom configurations",
          "Line 15: @tailwind base - Imports Tailwind's base styles (normalize, resets)",
          "Line 16: @tailwind components - Imports component classes",
          "Line 17: @tailwind utilities - Imports utility classes (the main Tailwind features)"
        ],
        simpleMeaning: "Tailwind provides small CSS classes you combine to style elements without writing custom CSS.",
        output: "Tailwind configured and ready to use with all utility classes available",
        note: "Always configure content paths correctly to ensure Tailwind generates only used classes. Run build for production to purge unused styles."
      },
      {
        name: "2. Basic Utility Classes - Spacing & Sizing",
        description: "Tailwind provides spacing utilities (padding, margin) using a scale from 0-96. Sizing utilities include width, height, min-width, max-width, etc.",
        code: "<div class=\"p-4 m-2 w-64 h-32 max-w-full min-h-0\">\n  <!-- Padding: p-4 = 1rem (16px) -->\n  <!-- Margin: m-2 = 0.5rem (8px) -->\n  <!-- Width: w-64 = 16rem (256px) -->\n  <!-- Height: h-32 = 8rem (128px) -->\n</div>\n\n<!-- Spacing scale examples -->\n<div class=\"p-0\">No padding</div>\n<div class=\"p-1\">Padding: 0.25rem (4px)</div>\n<div class=\"p-2\">Padding: 0.5rem (8px)</div>\n<div class=\"p-4\">Padding: 1rem (16px)</div>\n<div class=\"p-8\">Padding: 2rem (32px)</div>\n\n<!-- Directional padding -->\n<div class=\"pt-4 pr-2 pb-4 pl-2\">Top, Right, Bottom, Left padding</div>\n<div class=\"px-4 py-2\">Horizontal (x) and Vertical (y) padding</div>\n\n<!-- Percentage-based widths -->\n<div class=\"w-full\">Width: 100%</div>\n<div class=\"w-1/2\">Width: 50%</div>\n<div class=\"w-1/3\">Width: 33.333%</div>\n<div class=\"w-screen\">Width: 100vw</div>\n<div class=\"min-w-0\">Minimum width: 0</div>\n<div class=\"max-w-md\">Maximum width: 28rem</div>",
        lineByLine: [
          "Line 1: p-4 - Adds padding of 1rem on all sides",
          "Line 1: m-2 - Adds margin of 0.5rem on all sides",
          "Line 1: w-64 - Sets width to 16rem (256px)",
          "Line 1: h-32 - Sets height to 8rem (128px)",
          "Line 9-13: p-0 to p-8 - Shows different padding values in the spacing scale",
          "Line 16: pt-4 pr-2 pb-4 pl-2 - Directional padding (top, right, bottom, left)",
          "Line 17: px-4 py-2 - Horizontal (left+right) and vertical (top+bottom) padding",
          "Line 20-23: Percentage widths - w-full (100%), w-1/2 (50%), w-1/3 (33.33%)",
          "Line 24: w-screen - Full viewport width",
          "Line 25: min-w-0 - Minimum width of 0",
          "Line 26: max-w-md - Maximum width of 28rem (448px)"
        ],
        simpleMeaning: "Use spacing utilities like p-4 (padding) and m-2 (margin) with numbers from 0-96. Use w-* for width and h-* for height.",
        output: "Elements have consistent spacing and sizing based on Tailwind's scale",
        note: "Tailwind uses rem units (1rem = 16px by default). The spacing scale is customizable in tailwind.config.js."
      },
      {
        name: "3. Colors & Backgrounds",
        description: "Tailwind includes a comprehensive color palette with shades from 50 to 950. Background colors, text colors, and border colors use the same naming convention.",
        code: "<!-- Text Colors -->\n<p class=\"text-red-500\">Red text</p>\n<p class=\"text-blue-700\">Dark blue text</p>\n<p class=\"text-gray-400\">Light gray text</p>\n<p class=\"text-white bg-black\">White text on black background</p>\n\n<!-- Background Colors -->\n<div class=\"bg-green-500\">Green background</div>\n<div class=\"bg-yellow-200\">Light yellow background</div>\n<div class=\"bg-purple-900\">Dark purple background</div>\n\n<!-- Background Gradients -->\n<div class=\"bg-gradient-to-r from-blue-500 to-purple-500\">\n  Horizontal gradient\n</div>\n<div class=\"bg-gradient-to-t from-red-500 to-yellow-500\">\n  Vertical gradient (bottom to top)\n</div>\n\n<!-- Border Colors -->\n<div class=\"border border-red-500\">Red border</div>\n<div class=\"border-2 border-blue-300\">2px blue border</div>\n\n<!-- Opacity -->\n<div class=\"bg-black bg-opacity-50\">50% opacity black background</div>\n<div class=\"text-red-500 text-opacity-75\">75% opacity red text</div>",
        lineByLine: [
          "Line 2: text-red-500 - Red text with medium shade (500)",
          "Line 3: text-blue-700 - Darker blue text (700)",
          "Line 4: text-gray-400 - Light gray text (400)",
          "Line 8: bg-green-500 - Green background",
          "Line 9: bg-yellow-200 - Light yellow background",
          "Line 13: bg-gradient-to-r - Horizontal gradient (left to right)",
          "Line 13: from-blue-500 to-purple-500 - Gradient colors",
          "Line 17: bg-gradient-to-t - Vertical gradient (bottom to top)",
          "Line 21: border border-red-500 - Red border with default width",
          "Line 22: border-2 border-blue-300 - 2px thick blue border",
          "Line 25: bg-opacity-50 - 50% opacity on background"
        ],
        simpleMeaning: "Use text-{color}-{shade} for text, bg-{color}-{shade} for backgrounds, and border-{color}-{shade} for borders.",
        output: "Elements with appropriate colors, gradients, and opacity levels",
        note: "Shades: 50 (lightest) to 950 (darkest). 500 is the default base color. Use bg-opacity-* for transparency."
      },
      {
        name: "4. Typography Utilities",
        description: "Tailwind provides comprehensive typography utilities for font size, weight, family, alignment, line height, and text transformation.",
        code: "<!-- Font Sizes -->\n<p class=\"text-xs\">Extra Small (0.75rem)</p>\n<p class=\"text-sm\">Small (0.875rem)</p>\n<p class=\"text-base\">Base (1rem - 16px)</p>\n<p class=\"text-lg\">Large (1.125rem)</p>\n<p class=\"text-xl\">Extra Large (1.25rem)</p>\n<p class=\"text-2xl\">2XL (1.5rem)</p>\n<p class=\"text-4xl\">4XL (2.25rem)</p>\n\n<!-- Font Weights -->\n<p class=\"font-light\">Light weight (300)</p>\n<p class=\"font-normal\">Normal (400)</p>\n<p class=\"font-medium\">Medium (500)</p>\n<p class=\"font-semibold\">Semi-bold (600)</p>\n<p class=\"font-bold\">Bold (700)</p>\n<p class=\"font-extrabold\">Extra bold (800)</p>\n\n<!-- Text Alignment -->\n<p class=\"text-left\">Left aligned text</p>\n<p class=\"text-center\">Centered text</p>\n<p class=\"text-right\">Right aligned text</p>\n<p class=\"text-justify\">Justified text</p>\n\n<!-- Text Transform -->\n<p class=\"uppercase\">uppercase text</p>\n<p class=\"lowercase\">LOWERCASE TEXT</p>\n<p class=\"capitalize\">capitalize each word</p>\n<p class=\"normal-case\">Normal case</p>\n\n<!-- Line Height -->\n<p class=\"leading-none\">Line height: 1</p>\n<p class=\"leading-tight\">Tight: 1.25</p>\n<p class=\"leading-normal\">Normal: 1.5</p>\n<p class=\"leading-loose\">Loose: 2</p>\n\n<!-- Letter Spacing -->\n<p class=\"tracking-tighter\">Tighter letter spacing</p>\n<p class=\"tracking-wide\">Wide letter spacing</p>\n\n<!-- Font Family -->\n<div class=\"font-sans\">Sans-serif font</div>\n<div class=\"font-serif\">Serif font</div>\n<div class=\"font-mono\">Monospace font</div>\n\n<!-- Text Overflow -->\n<div class=\"truncate w-48\">This long text will be truncated with ellipsis...</div>\n<div class=\"line-clamp-3\">This text will be limited to 3 lines and then truncated</div>",
        lineByLine: [
          "Line 2-9: Font sizes - text-xs (12px) to text-4xl (36px)",
          "Line 12-17: Font weights - light (300) to extrabold (800)",
          "Line 20-23: Text alignment - left, center, right, justify",
          "Line 26-29: Text transform - uppercase, lowercase, capitalize",
          "Line 32-35: Line height - leading-none (1) to leading-loose (2)",
          "Line 38-39: Letter spacing - tracking-tighter (tighter) to tracking-wide (wider)",
          "Line 42-44: Font family - sans, serif, mono",
          "Line 47: truncate - Truncates text with ellipsis",
          "Line 48: line-clamp-3 - Limits text to 3 lines"
        ],
        simpleMeaning: "Use text-* for size, font-* for weight, text-* for alignment, and leading-* for line height to style text.",
        output: "Text elements with consistent typography styling",
        note: "Font sizes use rem units. line-clamp requires @tailwindcss/line-clamp plugin. truncate only works with overflow hidden."
      },
      {
        name: "5. Flexbox Layout",
        description: "Tailwind provides comprehensive Flexbox utilities for creating flexible, responsive layouts with ease.",
        code: "<!-- Basic Flex Container -->\n<div class=\"flex\">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>\n\n<!-- Flex Direction -->\n<div class=\"flex flex-row\">Row direction (default)</div>\n<div class=\"flex flex-row-reverse\">Row reverse direction</div>\n<div class=\"flex flex-col\">Column direction</div>\n<div class=\"flex flex-col-reverse\">Column reverse</div>\n\n<!-- Justify Content (Main Axis) -->\n<div class=\"flex justify-start\">Items at start</div>\n<div class=\"flex justify-center\">Items centered</div>\n<div class=\"flex justify-end\">Items at end</div>\n<div class=\"flex justify-between\">Space between items</div>\n<div class=\"flex justify-around\">Space around items</div>\n<div class=\"flex justify-evenly\">Evenly spaced</div>\n\n<!-- Align Items (Cross Axis) -->\n<div class=\"flex items-start h-32\">Items at top</div>\n<div class=\"flex items-center h-32\">Items centered vertically</div>\n<div class=\"flex items-end h-32\">Items at bottom</div>\n<div class=\"flex items-stretch h-32\">Items stretch to fill</div>\n\n<!-- Flex Wrap -->\n<div class=\"flex flex-wrap\">Items wrap to next line</div>\n<div class=\"flex flex-wrap-reverse\">Items wrap in reverse</div>\n<div class=\"flex flex-nowrap\">Items don't wrap (default)</div>\n\n<!-- Individual Flex Items -->\n<div class=\"flex\">\n  <div class=\"flex-1\">Takes remaining space</div>\n  <div class=\"flex-auto\">Auto-sized</div>\n  <div class=\"flex-initial\">Initial size</div>\n  <div class=\"flex-none\">No grow, no shrink</div>\n</div>\n\n<!-- Ordering -->\n<div class=\"flex\">\n  <div class=\"order-2\">Order 2</div>\n  <div class=\"order-1\">Order 1 (appears first)</div>\n  <div class=\"order-3\">Order 3</div>\n</div>\n\n<!-- Gap between items -->\n<div class=\"flex gap-4\">Space of 1rem between items</div>\n<div class=\"flex gap-x-2 gap-y-4\">Horizontal gap 0.5rem, vertical gap 1rem</div>\n\n<!-- Responsive Flex -->\n<div class=\"flex flex-col md:flex-row\">\n  Column on mobile, row on desktop\n</div>",
        lineByLine: [
          "Line 2-6: flex - Creates a flex container with default row direction",
          "Line 9-12: flex-direction - flex-row (row), flex-col (column), and reverse variants",
          "Line 15-20: justify-content - Controls alignment on main axis",
          "Line 23-26: align-items - Controls alignment on cross axis",
          "Line 29-31: flex-wrap - Controls whether items wrap",
          "Line 34-37: Individual flex item properties - flex-1 (grow), flex-none (no grow/shrink)",
          "Line 40-43: order - Reorders flex items visually",
          "Line 46-47: gap - Space between items (gap-4 = 1rem)",
          "Line 50-51: Responsive flex - Changes from column to row on medium screens"
        ],
        simpleMeaning: "Flexbox utilities help arrange items horizontally or vertically with control over alignment, spacing, and order.",
        output: "Responsive flex layouts with proper alignment and spacing",
        note: "Use flex for 1D layouts. Combine justify-* and items-* for complete control. Gap utilities are great for spacing between items."
      },
      {
        name: "6. Grid Layout",
        description: "Tailwind's grid utilities provide powerful CSS Grid features for creating complex, responsive layouts with ease.",
        code: "<!-- Basic Grid Container -->\n<div class=\"grid grid-cols-3 gap-4\">\n  <div>Column 1</div>\n  <div>Column 2</div>\n  <div>Column 3</div>\n</div>\n\n<!-- Defining Columns -->\n<div class=\"grid grid-cols-1\">Single column</div>\n<div class=\"grid grid-cols-2\">Two equal columns</div>\n<div class=\"grid grid-cols-3\">Three equal columns</div>\n<div class=\"grid grid-cols-4\">Four equal columns</div>\n\n<!-- Responsive Grid -->\n<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4\">\n  <!-- 1 column on mobile, 2 on tablet, 4 on desktop -->\n</div>\n\n<!-- Row and Column Span -->\n<div class=\"grid grid-cols-3 gap-2\">\n  <div class=\"col-span-2\">Spans 2 columns</div>\n  <div>Column 3</div>\n  <div class=\"col-span-3\">Spans all 3 columns</div>\n  <div class=\"row-span-2\">Spans 2 rows</div>\n</div>\n\n<!-- Grid Template Rows -->\n<div class=\"grid grid-rows-3 gap-2 h-48\">\n  <div>Row 1</div>\n  <div>Row 2</div>\n  <div>Row 3</div>\n</div>\n\n<!-- Justify Items (Horizontal Alignment) -->\n<div class=\"grid grid-cols-3 justify-items-start\">Items align left</div>\n<div class=\"grid grid-cols-3 justify-items-center\">Items centered</div>\n<div class=\"grid grid-cols-3 justify-items-end\">Items align right</div>\n\n<!-- Align Items (Vertical Alignment) -->\n<div class=\"grid grid-cols-3 h-32 items-start\">Items at top</div>\n<div class=\"grid grid-cols-3 h-32 items-center\">Items centered vertically</div>\n<div class=\"grid grid-cols-3 h-32 items-end\">Items at bottom</div>",
        lineByLine: [
          "Line 2-6: grid grid-cols-3 - Creates 3-column grid with 4-column gap",
          "Line 9-12: grid-cols-1 to grid-cols-4 - Creates equal-width columns",
          "Line 15-17: Responsive grid - Changes number of columns at breakpoints",
          "Line 20-24: col-span-2 - Element spans 2 columns; col-span-3 spans all columns",
          "Line 27-31: grid-rows-3 - Defines 3 equal-height rows",
          "Line 34-36: justify-items - Horizontal alignment of grid items",
          "Line 39-41: items-start/center/end - Vertical alignment of grid items"
        ],
        simpleMeaning: "Grid utilities create powerful 2D layouts with rows and columns, perfect for complex responsive designs.",
        output: "Complex, responsive grid layouts with precise control over item placement",
        note: "Use grid for 2D layouts (both rows and columns). Combine with responsive prefixes for mobile-first designs."
      },
      {
        name: "7. Positioning & Display",
        description: "Tailwind provides utilities for controlling position (static, relative, absolute, fixed, sticky) and display properties.",
        code: "<!-- Display Utilities -->\n<div class=\"block\">Display block (full width)</div>\n<div class=\"inline\">Display inline (width based on content)</div>\n<div class=\"inline-block\">Inline block (inline but block properties)</div>\n<div class=\"hidden\">Hidden (display: none)</div>\n\n<!-- Position Types -->\n<div class=\"relative\">\n  Relative positioned (positions relative to normal flow)\n  <div class=\"absolute top-0 right-0\">Absolute inside relative parent</div>\n</div>\n\n<div class=\"fixed top-0 left-0 w-full\">\n  Fixed positioned (relative to viewport) - Stays on scroll\n</div>\n\n<div class=\"sticky top-0\">\n  Sticky positioned (becomes fixed after scrolling past)\n</div>\n\n<!-- Positioning Coordinates -->\n<div class=\"relative h-32 w-32 bg-gray-200\">\n  <div class=\"absolute top-0 left-0\">Top-Left</div>\n  <div class=\"absolute top-0 right-0\">Top-Right</div>\n  <div class=\"absolute bottom-0 left-0\">Bottom-Left</div>\n  <div class=\"absolute bottom-0 right-0\">Bottom-Right</div>\n  <div class=\"absolute inset-0\">Full coverage</div>\n</div>\n\n<!-- Z-Index -->\n<div class=\"z-0\">z-index: 0</div>\n<div class=\"z-10\">z-index: 10</div>\n<div class=\"z-50\">z-index: 50</div>\n\n<!-- Overflow Control -->\n<div class=\"overflow-auto w-32 h-32\">Auto scroll if needed</div>\n<div class=\"overflow-hidden\">Hide overflow</div>\n<div class=\"overflow-scroll\">Always show scrollbars</div>",
        lineByLine: [
          "Line 2-5: display utilities - block, inline, inline-block, hidden",
          "Line 8-11: relative + absolute - Relative parent with absolute child",
          "Line 13: fixed - Fixed position relative to viewport",
          "Line 16: sticky - Sticky positioning (becomes fixed on scroll)",
          "Line 20-25: position coordinates - top, right, bottom, left utilities",
          "Line 27: inset-0 - Sets all four positions to 0",
          "Line 30-32: z-index utilities - z-0 to z-50 for stacking order",
          "Line 35-37: overflow utilities - overflow-auto, hidden, scroll"
        ],
        simpleMeaning: "Position utilities control element placement and stacking. Display utilities control layout behavior.",
        output: "Elements positioned precisely with proper stacking order and overflow handling",
        note: "Use relative as parent for absolute children. Sticky requires a threshold (top-0)."
      },
      {
        name: "8. Borders & Effects",
        description: "Tailwind provides comprehensive border, shadow, blur, and other effect utilities for styling elements.",
        code: "<!-- Border Radius -->\n<div class=\"rounded-none\">No border radius</div>\n<div class=\"rounded-sm\">Small radius</div>\n<div class=\"rounded\">Default radius (0.25rem)</div>\n<div class=\"rounded-md\">Medium radius</div>\n<div class=\"rounded-lg\">Large radius</div>\n<div class=\"rounded-xl\">Extra large radius</div>\n<div class=\"rounded-2xl\">2XL radius</div>\n<div class=\"rounded-full\">Full circle/ pill shape</div>\n\n<!-- Border Width -->\n<div class=\"border\">1px border on all sides</div>\n<div class=\"border-2\">2px border</div>\n<div class=\"border-t\">Top border only</div>\n\n<!-- Box Shadow -->\n<div class=\"shadow-sm\">Small shadow</div>\n<div class=\"shadow\">Default shadow</div>\n<div class=\"shadow-md\">Medium shadow</div>\n<div class=\"shadow-lg\">Large shadow</div>\n<div class=\"shadow-xl\">Extra large shadow</div>\n<div class=\"shadow-2xl\">2XL shadow</div>\n\n<!-- Opacity -->\n<div class=\"opacity-0\">Fully transparent</div>\n<div class=\"opacity-50\">50% opacity</div>\n<div class=\"opacity-100\">Fully opaque</div>",
        lineByLine: [
          "Line 2-10: border-radius - rounded-sm to rounded-2xl and rounded-full",
          "Line 13-15: border-width - border, border-2, border-t",
          "Line 18-23: box-shadow - shadow-sm to shadow-2xl",
          "Line 26-28: opacity - opacity-0 to opacity-100"
        ],
        simpleMeaning: "Add visual effects like rounded corners, shadows, blur, and opacity to make elements stand out.",
        output: "Elements with beautiful borders, shadows, and transparency",
        note: "Shadow sizes increase from sm to 2xl. Opacity works on any element."
      },
      {
        name: "9. Transitions & Animations",
        description: "Tailwind provides utilities for smooth transitions, transforms, and keyframe animations.",
        code: "<!-- Basic Transitions -->\n<button class=\"transition duration-300 hover:bg-blue-600\">\n  Smooth background change on hover\n</button>\n\n<!-- Transition Duration -->\n<div class=\"transition duration-150\">150ms duration</div>\n<div class=\"transition duration-300\">300ms duration</div>\n<div class=\"transition duration-500\">500ms duration</div>\n\n<!-- Transforms -->\n<div class=\"hover:scale-105\">Scale up on hover</div>\n<div class=\"hover:rotate-12\">Rotate 12 degrees</div>\n<div class=\"hover:translate-x-4\">Move right by 1rem</div>\n<div class=\"hover:translate-y-4\">Move down by 1rem</div>\n\n<!-- Animations -->\n<div class=\"animate-spin\">Infinite spin</div>\n<div class=\"animate-pulse\">Soft pulse</div>\n<div class=\"animate-bounce\">Bounce up and down</div>\n\n<!-- Group Hover (parent hover affects child) -->\n<div class=\"group\">\n  <div class=\"group-hover:scale-110\">Scales when parent hovered</div>\n</div>",
        lineByLine: [
          "Line 2-4: transition duration-300 - Smooth transition with 300ms duration",
          "Line 7-9: transition duration - duration-150, 300, 500 in milliseconds",
          "Line 12-15: transforms - scale, rotate, translate on hover",
          "Line 18-20: animations - animate-spin, pulse, bounce",
          "Line 23-26: group-hover - Child animates when parent is hovered"
        ],
        simpleMeaning: "Add smooth transitions and animations to make interactions feel natural and engaging.",
        output: "Elements transition smoothly on hover with various timing functions and animations",
        note: "Always include transition class for smooth changes. Prefer transforms over layout properties for performance."
      },
      {
        name: "10. Hover, Focus & States",
        description: "Tailwind provides pseudo-class variants for styling elements in different states (hover, focus, active, disabled).",
        code: "<!-- Hover State -->\n<button class=\"bg-blue-500 hover:bg-blue-700\">Darkens on hover</button>\n\n<!-- Focus State -->\n<input class=\"border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200\" />\n\n<!-- Disabled State -->\n<button disabled class=\"disabled:opacity-50 disabled:cursor-not-allowed\">Disabled button</button>\n\n<!-- Checked State -->\n<input type=\"checkbox\" class=\"checked:bg-blue-500\" />\n\n<!-- First/Last Child -->\n<div class=\"space-y-2\">\n  <div class=\"first:rounded-t-lg last:rounded-b-lg\">Styled differently</div>\n  <div>Multiple children</div>\n  <div>Last child gets bottom radius</div>\n</div>\n\n<!-- Dark mode -->\n<div class=\"bg-white dark:bg-gray-800 text-black dark:text-white\">\n  Dark mode styles\n</div>",
        lineByLine: [
          "Line 2: hover:bg-blue-700 - Changes background when mouse hovers",
          "Line 5: focus:border-blue-500 - Blue border when input focused",
          "Line 8: disabled:opacity-50 - Styles for disabled button",
          "Line 11: checked:bg-blue-500 - Styles for checked checkbox",
          "Line 14-18: first:last: - Styles first and last children differently",
          "Line 21-23: dark: - Dark mode variants"
        ],
        simpleMeaning: "Style elements differently when hovered, focused, active, disabled, or in various states.",
        output: "Interactive elements respond visually to user actions with appropriate state styling",
        note: "Always provide focus styles for accessibility. Use focus-visible instead of focus for non-intrusive focus indicators."
      }
    ]
  },
  advanced: {
    title: "🚀 Advanced Tailwind CSS",
    topics: [
      {
        name: "1. Custom Theme Configuration",
        description: "Extend Tailwind's default theme with custom colors, fonts, spacing, breakpoints, and more in tailwind.config.js.",
        code: "// tailwind.config.js\n/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        'brand': '#ff5733',\n        'primary': '#3b82f6',\n        'secondary': '#6b7280',\n      },\n      fontFamily: {\n        'sans': ['Inter', 'system-ui', 'sans-serif'],\n        'display': ['Poppins', 'cursive'],\n      },\n      spacing: {\n        '128': '32rem',\n        '144': '36rem',\n      },\n      borderRadius: {\n        '4xl': '2rem',\n      },\n      animation: {\n        'wiggle': 'wiggle 0.5s ease-in-out infinite',\n      },\n      keyframes: {\n        wiggle: {\n          '0%, 100%': { transform: 'rotate(-3deg)' },\n          '50%': { transform: 'rotate(3deg)' },\n        },\n      },\n    },\n  },\n  plugins: [\n    require('@tailwindcss/forms'),\n    require('@tailwindcss/typography'),\n  ],\n  darkMode: 'class',\n};",
        lineByLine: [
          "Line 4-9: colors - Adding custom color values",
          "Line 10-13: fontFamily - Adding custom fonts like Inter, Poppins",
          "Line 14-16: spacing - Adding custom spacing values beyond default scale",
          "Line 17-19: borderRadius - Adding extra-large border radius options",
          "Line 20-25: animation - Custom animation keyframes for wiggle effect",
          "Line 28-30: plugins - Official Tailwind plugins for forms, typography",
          "Line 31: darkMode - Configuring dark mode strategy"
        ],
        simpleMeaning: "Customize every aspect of Tailwind - colors, fonts, spacing, animations, and add plugins.",
        output: "Tailwind configured with brand colors, custom fonts, and animations",
        note: "Use extend to add to default theme rather than overriding completely. Install plugins via npm first."
      },
      {
        name: "2. Dark Mode Implementation",
        description: "Tailwind's dark mode allows you to style elements differently when dark mode is active, using the dark: variant.",
        code: "// tailwind.config.js\nmodule.exports = {\n  darkMode: 'class', // Use class strategy\n}\n\n// Component with dark mode styles\n<div class=\"bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100\">\n  <h1 class=\"text-2xl font-bold\">Dark Mode Demo</h1>\n  <p class=\"text-gray-600 dark:text-gray-400\">\n    This text adapts to dark mode\n  </p>\n</div>\n\n// Dark mode toggle component\n'use client';\nimport { useState, useEffect } from 'react';\n\nexport default function DarkModeToggle() {\n  const [isDark, setIsDark] = useState(false);\n  \n  useEffect(() => {\n    const saved = localStorage.getItem('theme');\n    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);\n    \n    setIsDark(shouldBeDark);\n    if (shouldBeDark) {\n      document.documentElement.classList.add('dark');\n    }\n  }, []);\n  \n  const toggleDarkMode = () => {\n    const newDark = !isDark;\n    setIsDark(newDark);\n    \n    if (newDark) {\n      document.documentElement.classList.add('dark');\n      localStorage.setItem('theme', 'dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n      localStorage.setItem('theme', 'light');\n    }\n  };\n  \n  return (\n    <button onClick={toggleDarkMode} className=\"p-2 rounded-lg bg-gray-200 dark:bg-gray-700\">\n      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}\n    </button>\n  );\n}",
        lineByLine: [
          "Line 2-4: darkMode: 'class' - Dark mode triggered by .dark class",
          "Line 7-12: dark: variant - Styles for dark mode using dark: prefix",
          "Line 15-43: DarkModeToggle Component - React component for toggling dark mode",
          "Line 17: useState - Tracks dark mode state",
          "Line 19-25: useEffect - Checks localStorage and system preference on mount",
          "Line 29-40: toggleDarkMode - Toggles class and saves preference"
        ],
        simpleMeaning: "Dark mode lets you provide alternative styles for users who prefer dark interfaces, using the dark: variant prefix.",
        output: "Interface switches between light and dark themes seamlessly with preference persistence",
        note: "Use class strategy for user-controlled toggle. Add script to prevent flash of wrong theme."
      },
      {
        name: "3. Arbitrary Values & JIT Mode",
        description: "Tailwind's Just-In-Time (JIT) mode allows using arbitrary values with brackets [value] for one-off styles not in your theme.",
        code: "// Arbitrary values - any valid CSS value\n<div class=\"top-[117px]\">Custom top position</div>\n<div class=\"w-[calc(100%-2rem)]\">Dynamic width calculation</div>\n<div class=\"bg-[#1a365d]\">Custom hex color</div>\n<div class=\"shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]\">\n  Custom box shadow\n</div>\n\n// Arbitrary values with variants\n<div class=\"hover:bg-[#ff0000]\">Red on hover</div>\n<div class=\"md:top-[100px]\">Top at 100px on medium screens</div>\n<div class=\"dark:bg-[#1a1a1a]\">Dark mode custom background</div>\n\n// Negative arbitrary values\n<div class=\"-top-[10px]\">Negative top position</div>\n\n// Important modifier (force specificity)\n<div class=\"![color:red]\">Force red color</div>",
        lineByLine: [
          "Line 2: top-[117px] - Sets top position to exactly 117px",
          "Line 3: w-[calc(100%-2rem)] - Calculates width dynamically",
          "Line 4: bg-[#1a365d] - Uses custom hex color",
          "Line 5-6: shadow-[0_35px...] - Custom shadow values",
          "Line 9-11: Variants with arbitrary values - Works with hover, responsive, dark",
          "Line 14: -top-[10px] - Negative values work too",
          "Line 17: ![color:red] - Important modifier for specificity"
        ],
        simpleMeaning: "Arbitrary values let you use any CSS value with bracket syntax, perfect for one-off styles not in your config.",
        output: "Elements styled with exact pixel values, custom colors, and calculations",
        note: "JIT mode is default in Tailwind v3. Arbitrary values are powerful but use theme values when possible for consistency."
      },
      {
        name: "4. Custom Plugins & @layer",
        description: "Create reusable component classes and utilities using Tailwind's plugin system and @layer directive.",
        code: "// Custom plugin in tailwind.config.js\nconst plugin = require('tailwindcss/plugin');\n\nmodule.exports = {\n  plugins: [\n    plugin(function({ addComponents, addUtilities }) {\n      // Add component classes\n      addComponents({\n        '.btn': {\n          padding: '0.5rem 1rem',\n          borderRadius: '0.25rem',\n          fontWeight: '500',\n          transition: 'all 0.2s ease',\n        },\n        '.btn-primary': {\n          backgroundColor: '#3b82f6',\n          color: 'white',\n          '&:hover': {\n            backgroundColor: '#2563eb',\n          },\n        },\n      });\n      \n      // Add utility classes\n      addUtilities({\n        '.text-shadow': {\n          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',\n        },\n        '.scrollbar-hide': {\n          '-ms-overflow-style': 'none',\n          'scrollbar-width': 'none',\n          '&::-webkit-scrollbar': {\n            display: 'none',\n          },\n        },\n      });\n    }),\n  ],\n};\n\n// Using @layer in CSS files\n/* app/globals.css */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer components {\n  .btn-custom {\n    @apply px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600;\n  }\n}\n\n// Using the custom classes\n<div class=\"btn btn-primary\">Custom button</div>\n<div class=\"text-shadow\">Text with shadow</div>\n<div class=\"btn-custom\">Custom CSS class</div>",
        lineByLine: [
          "Line 2: plugin import - Import Tailwind plugin function",
          "Line 7-20: addComponents - Reusable component classes like .btn",
          "Line 23-33: addUtilities - Adds utility classes for specific effects",
          "Line 38-43: @layer components - Using @layer directive in CSS",
          "Line 46-48: Usage examples - Using custom component classes"
        ],
        simpleMeaning: "Create reusable component classes and custom utilities using Tailwind's plugin API and @layer directive.",
        output: "Custom button components and utility classes available throughout your app",
        note: "Use addComponents for reusable UI components. Use addUtilities for single-purpose helpers."
      },
      {
        name: "5. Container Queries & Responsive Design",
        description: "Container queries allow styling based on parent container size rather than viewport, using @tailwindcss/container-queries plugin.",
        code: "// Install the plugin\nnpm install @tailwindcss/container-queries\n\n// tailwind.config.js\nmodule.exports = {\n  plugins: [\n    require('@tailwindcss/container-queries'),\n  ],\n}\n\n// Basic container query usage\n<div class=\"@container\">\n  <div class=\"@md:flex @md:flex-row\">\n    <div class=\"@md:w-1/2\">\n      Responsive based on container width\n    </div>\n    <div class=\"@md:w-1/2\">\n      Not viewport width\n    </div>\n  </div>\n</div>\n\n// Different container query sizes\n<div class=\"@container\">\n  <div class=\"text-sm @sm:text-base @md:text-lg @lg:text-xl\">\n    Text size changes based on container width\n  </div>\n</div>\n\n// Custom container query sizes\n<div class=\"@container/custom\">\n  <div class=\"@[480px]/custom:grid-cols-2 @[720px]/custom:grid-cols-3\">\n    <!-- Grid changes at 480px and 720px container width -->\n  </div>\n</div>\n\n// Named containers\n<div class=\"@container/sidebar\">\n  <div class=\"@lg/sidebar:block @lg/sidebar:bg-blue-100\">\n    Sidebar content\n  </div>\n</div>",
        lineByLine: [
          "Line 2: npm install - Installs container queries plugin",
          "Line 5-8: plugin config - Adds plugin to Tailwind",
          "Line 11-20: @container - Marks element as container for queries",
          "Line 12: @md:flex - Applies when container is medium size",
          "Line 23-27: Different container query sizes - @sm, @md, @lg",
          "Line 30-34: Custom breakpoints - Using arbitrary values for custom sizes",
          "Line 37-42: Named containers - Multiple named containers with independent queries"
        ],
        simpleMeaning: "Container queries let components respond to their parent container size instead of viewport, perfect for reusable components.",
        output: "Components adapt their layout based on available space in their container",
        note: "Container queries are perfect for component libraries and reusable widgets."
      }
    ]
  }
};

// Also export as problems for backward compatibility
export const tailwind = learning;
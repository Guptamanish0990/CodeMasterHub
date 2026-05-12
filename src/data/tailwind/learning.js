// /data/tailwind/learning.js

export const learning = {
  basic: {
    title: "💨 Tailwind CSS Basics - Complete Beginner's Guide",
    topics: [
      {
        name: "1. What is Tailwind CSS & Setup",
        description: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs without writing custom CSS. Unlike traditional CSS frameworks that give you pre-built components, Tailwind gives you small, single-purpose classes that you combine to build any design.",
        explanation: `🎯 WHAT IS TAILWIND CSS?
Tailwind CSS is different from frameworks like Bootstrap or Material UI. Instead of giving you pre-built components like cards or modals, Tailwind gives you utility classes that you can combine to create anything.

🔧 HOW IT WORKS:
1. You write HTML with Tailwind utility classes
2. Tailwind scans your files for these classes
3. It generates CSS only for the classes you actually use
4. In production, it purges unused CSS to keep file size small

📦 INSTALLATION STEPS:
1. Install Tailwind and its dependencies via npm
2. Initialize Tailwind to create config files
3. Configure content paths to tell Tailwind where to look for classes
4. Add Tailwind directives to your main CSS file
5. Start using Tailwind classes in your HTML

⚙️ WHAT EACH CONFIGURATION DOES:
- content array: Tells Tailwind which files to scan for class names
- theme.extend: Where you add custom colors, fonts, spacing, etc.
- @tailwind base: Imports Tailwind's base styles (CSS resets, normalize)
- @tailwind components: Imports component classes
- @tailwind utilities: Imports the utility classes (the main features)

💡 WHY USE TAILWIND?
- No context switching between HTML and CSS files
- Never think of class names again
- Consistent design system out of the box
- Smaller CSS files because unused styles are purged
- Highly customizable`,
        code: "// Step 1: Install Tailwind CSS\nnpm install -D tailwindcss postcss autoprefixer\n\n// Step 2: Initialize Tailwind (creates tailwind.config.js)\nnpx tailwindcss init -p\n\n// Step 3: Configure tailwind.config.js\n/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    './app/**/*.{js,ts,jsx,tsx,mdx}',\n    './pages/**/*.{js,ts,jsx,tsx}',\n    './components/**/*.{js,ts,jsx,tsx}',\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n\n// Step 4: Add Tailwind directives to your CSS file (app/globals.css)\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n// Step 5: Start using Tailwind classes\n<div class=\"text-center text-2xl font-bold text-blue-500\">\n  Hello Tailwind!\n</div>",
        lineByLine: [
          "Line 2: npm install -D - Installs Tailwind CSS as a dev dependency",
          "Line 5: npx tailwindcss init -p - Creates tailwind.config.js and postcss.config.js",
          "Line 8-13: content array - Tells Tailwind which files to scan for classes (important for production purge)",
          "Line 14-16: theme.extend - Where you add custom configurations",
          "Line 20-22: @tailwind directives - Import the three main layers of Tailwind",
          "Line 25-27: Usage example - Combining multiple utility classes"
        ],
        simpleMeaning: "Tailwind gives you small CSS classes that you combine directly in your HTML to style elements, without writing any custom CSS.",
        output: "Tailwind is fully configured. The text 'Hello Tailwind!' will appear centered, large, bold, and blue.",
        note: "Always configure content paths correctly to ensure Tailwind generates only used classes. Production builds automatically remove unused styles."
      },
      {
        name: "2. Basic Utility Classes - Spacing & Sizing",
        description: "Tailwind provides spacing utilities (padding, margin) using a scale from 0-96. Sizing utilities include width, height, min-width, max-width, and percentage-based widths.",
        explanation: `📏 SPACING UTILITIES (Padding & Margin):
Tailwind uses a spacing scale from 0 to 96. Each number represents a rem value:
- 0 = 0rem (0px)
- 1 = 0.25rem (4px)
- 2 = 0.5rem (8px)
- 4 = 1rem (16px)
- 8 = 2rem (32px)
- 16 = 4rem (64px)
And so on up to 96 = 24rem (384px)

🔤 PADDING (p-*):
- p-4 → padding on all sides: 1rem
- pt-4 → padding-top only
- pr-4 → padding-right only
- pb-4 → padding-bottom only
- pl-4 → padding-left only
- px-4 → padding-left and padding-right
- py-4 → padding-top and padding-bottom

📐 MARGIN (m-*):
Same pattern as padding: m-4, mt-4, mr-4, mb-4, ml-4, mx-4, my-4

📏 WIDTH UTILITIES:
- w-full → width: 100%
- w-1/2 → width: 50%
- w-1/3 → width: 33.333%
- w-2/3 → width: 66.666%
- w-1/4 → width: 25%
- w-3/4 → width: 75%
- w-screen → width: 100vw
- w-64 → width: 16rem (256px)
- w-auto → width: auto

📐 HEIGHT UTILITIES:
- h-full → height: 100%
- h-screen → height: 100vh
- h-32 → height: 8rem (128px)
- h-auto → height: auto

🔄 MIN/MAX UTILITIES:
- min-w-0 → minimum-width: 0
- min-w-full → minimum-width: 100%
- max-w-sm → maximum-width: 24rem
- max-w-md → maximum-width: 28rem
- max-w-lg → maximum-width: 32rem
- max-w-xl → maximum-width: 36rem
- max-w-2xl → maximum-width: 42rem
- max-w-full → maximum-width: 100%`,
        code: "<!-- Basic spacing example -->\n<div class=\"p-4 m-2 w-64 h-32 max-w-full min-h-0\">\n  <!-- p-4 = padding: 1rem (16px) on all sides -->\n  <!-- m-2 = margin: 0.5rem (8px) on all sides -->\n  <!-- w-64 = width: 16rem (256px) -->\n  <!-- h-32 = height: 8rem (128px) -->\n  Content goes here\n</div>\n\n<!-- Spacing scale examples -->\n<div class=\"p-0\">No padding at all</div>\n<div class=\"p-1\">Padding: 0.25rem (4px) on all sides</div>\n<div class=\"p-2\">Padding: 0.5rem (8px) on all sides</div>\n<div class=\"p-4\">Padding: 1rem (16px) on all sides</div>\n<div class=\"p-8\">Padding: 2rem (32px) on all sides</div>\n<div class=\"p-16\">Padding: 4rem (64px) on all sides</div>\n\n<!-- Directional padding (top, right, bottom, left) -->\n<div class=\"pt-4 pr-2 pb-4 pl-2\">\n  Different padding on each side\n</div>\n\n<!-- Shorthand padding (horizontal and vertical) -->\n<div class=\"px-4 py-2\">\n  px-4 = padding-left and right: 1rem\n  py-2 = padding-top and bottom: 0.5rem\n</div>\n\n<!-- Percentage-based widths -->\n<div class=\"w-full bg-blue-200\">Full width (100%)</div>\n<div class=\"w-1/2 bg-green-200\">Half width (50%)</div>\n<div class=\"w-1/3 bg-red-200\">One-third width (33.33%)</div>\n<div class=\"w-2/3 bg-yellow-200\">Two-thirds width (66.66%)</div>\n\n<!-- Viewport and fixed widths -->\n<div class=\"w-screen bg-purple-200\">Full viewport width (100vw)</div>\n<div class=\"w-96 bg-pink-200\">Fixed width: 24rem (384px)</div>\n\n<!-- Min and max widths -->\n<div class=\"min-w-0 max-w-md bg-gray-200\">\n  Minimum width: 0, Maximum width: 28rem\n</div>\n\n<!-- Popular container pattern -->\n<div class=\"max-w-7xl mx-auto px-4\">\n  This container centers content and has responsive max-width\n</div>",
        lineByLine: [
          "Line 2: p-4 - Adds 1rem padding on all sides",
          "Line 2: m-2 - Adds 0.5rem margin on all sides", 
          "Line 2: w-64 - Sets width to 16rem (256px)",
          "Line 2: h-32 - Sets height to 8rem (128px)",
          "Line 9-14: p-0 to p-16 - Shows different padding values in the spacing scale",
          "Line 17-19: pt-4 pr-2 pb-4 pl-2 - Directional padding (top, right, bottom, left)",
          "Line 22-24: px-4 py-2 - Horizontal (left+right) and vertical (top+bottom) padding",
          "Line 27-30: Percentage widths - w-full (100%), w-1/2 (50%), w-1/3 (33.33%)",
          "Line 33: w-screen - Full viewport width",
          "Line 34: w-96 - Fixed width 24rem",
          "Line 37-38: min-w-0 max-w-md - Minimum width 0, maximum width 28rem",
          "Line 41-43: Container pattern - Center content with max width and auto margins"
        ],
        simpleMeaning: "Use p-4 for padding and m-2 for margin with numbers 0-96. For width and height, use w-64, h-32, w-1/2, w-full, etc.",
        output: "Elements have consistent spacing and sizing based on Tailwind's scale. The container centers content with responsive max-width.",
        note: "Tailwind uses rem units (1rem = 16px by default). The spacing scale is completely customizable in tailwind.config.js. Use mx-auto to center block elements."
      },
      {
        name: "3. Colors & Backgrounds",
        description: "Tailwind includes a comprehensive color palette with shades from 50 to 950. Background colors, text colors, and border colors use the same naming convention.",
        explanation: `🎨 TAILWIND COLOR SYSTEM:
Tailwind provides a massive color palette with 22 colors, each having 10-12 shades:
- Shades: 50 (lightest) → 950 (darkest)
- 500 is the default/base shade

🌈 AVAILABLE COLORS:
slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

📝 TEXT COLORS:
- text-red-500 → Red text (medium shade)
- text-blue-900 → Dark blue text
- text-gray-300 → Light gray text
- text-white → White text
- text-black → Black text

🎨 BACKGROUND COLORS:
- bg-blue-500 → Blue background
- bg-gray-100 → Light gray background
- bg-black → Black background
- bg-white → White background
- bg-transparent → Transparent background

🌈 GRADIENTS (the most popular effect):
- bg-gradient-to-r → Horizontal gradient (left to right)
- bg-gradient-to-l → Horizontal (right to left)
- bg-gradient-to-t → Vertical (bottom to top)
- bg-gradient-to-b → Vertical (top to bottom)
- bg-gradient-to-tr → Diagonal (top-right)
- bg-gradient-to-tl → Diagonal (top-left)
- bg-gradient-to-br → Diagonal (bottom-right)
- bg-gradient-to-bl → Diagonal (bottom-left)

Then specify colors:
- from-blue-500 → Starting color
- via-purple-500 → Middle color (optional)
- to-pink-500 → Ending color

🎭 OPACITY:
- bg-opacity-0 to bg-opacity-100 (in steps of 5)
- text-opacity-0 to text-opacity-100
- border-opacity-0 to border-opacity-100

🖌️ BORDER COLORS:
- border border-red-500 → Red border
- border-2 border-blue-300 → 2px blue border
- border-t-red-500 → Top border only in red`,
        code: "<!-- ========== TEXT COLORS ========== -->\n<p class=\"text-red-500\">Red text (medium shade)</p>\n<p class=\"text-blue-700\">Dark blue text</p>\n<p class=\"text-gray-400\">Light gray text</p>\n<p class=\"text-green-600\">Green text for success</p>\n<p class=\"text-yellow-600\">Yellow text for warnings</p>\n<p class=\"text-white bg-black\">White text on black background</p>\n\n<!-- ========== BACKGROUND COLORS ========== -->\n<div class=\"bg-green-500 p-4\">Green background</div>\n<div class=\"bg-yellow-200 p-4\">Light yellow background</div>\n<div class=\"bg-purple-900 text-white p-4\">Dark purple with white text</div>\n<div class=\"bg-gray-100 p-4\">Light gray background</div>\n\n<!-- ========== BACKGROUND GRADIENTS ========== -->\n<!-- Horizontal gradient (left to right) -->\n<div class=\"bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white rounded-lg\">\n  Horizontal gradient from blue to purple\n</div>\n\n<!-- Vertical gradient (bottom to top) -->\n<div class=\"bg-gradient-to-t from-red-500 to-yellow-500 p-8 text-white rounded-lg mt-4\">\n  Vertical gradient from red to yellow\n</div>\n\n<!-- Diagonal gradient with three colors -->\n<div class=\"bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 text-white rounded-lg mt-4\">\n  Diagonal gradient with three colors\n</div>\n\n<!-- Subtle gradient for cards -->\n<div class=\"bg-gradient-to-r from-gray-50 to-gray-200 p-8 rounded-lg mt-4\">\n  Subtle gray gradient for cards\n</div>\n\n<!-- ========== BORDER COLORS ========== -->\n<div class=\"border border-red-500 p-4 mb-4\">\n  Red border with default width (1px)\n</div>\n<div class=\"border-2 border-blue-300 p-4 mb-4\">\n  2px thick blue border\n</div>\n<div class=\"border-l-4 border-green-500 p-4 mb-4\">\n  Left border only (4px thick)\n</div>\n\n<!-- ========== OPACITY ========== -->\n<div class=\"bg-black bg-opacity-50 text-white p-4 mb-4\">\n  50% opacity black background\n</div>\n<div class=\"bg-blue-500 bg-opacity-25 p-4 mb-4\">\n  25% opacity blue background\n</div>\n<p class=\"text-red-500 text-opacity-75\">75% opacity red text</p>",
        lineByLine: [
          "Line 2-6: text colors - red-500, blue-700, gray-400, green-600, yellow-600",
          "Line 7: text-white bg-black - White text on black background",
          "Line 10-13: background colors - bg-green-500, bg-yellow-200, bg-purple-900, bg-gray-100",
          "Line 16-19: bg-gradient-to-r - Horizontal gradient from left to right",
          "Line 22-25: bg-gradient-to-t - Vertical gradient from bottom to top",
          "Line 28-31: bg-gradient-to-br - Diagonal gradient with three colors (blue→purple→pink)",
          "Line 34-37: Subtle gradient - Light gray gradient for cards",
          "Line 40-46: border colors - border-red-500, border-2 border-blue-300, border-l-4",
          "Line 49-52: bg-opacity-50 - 50% opacity background",
          "Line 53: text-opacity-75 - 75% opacity text"
        ],
        simpleMeaning: "Use text-{color}-{shade} for text, bg-{color}-{shade} for backgrounds, and border-{color}-{shade} for borders. Lower numbers = lighter, higher numbers = darker.",
        output: "Elements with appropriate colors, beautiful gradients, and opacity levels. The gradient examples show smooth color transitions.",
        note: "Shades: 50 (lightest) to 950 (darkest). 500 is the default base color. Use bg-opacity-* for transparency. Gradients work great for hero sections and cards."
      },
      {
        name: "4. Typography Utilities",
        description: "Tailwind provides comprehensive typography utilities for font size, weight, family, alignment, line height, and text transformation.",
        explanation: `📝 FONT SIZES (text-*):
- text-xs → 0.75rem (12px) - Extra small
- text-sm → 0.875rem (14px) - Small
- text-base → 1rem (16px) - Base/default
- text-lg → 1.125rem (18px) - Large
- text-xl → 1.25rem (20px) - Extra large
- text-2xl → 1.5rem (24px) - 2XL
- text-3xl → 1.875rem (30px) - 3XL
- text-4xl → 2.25rem (36px) - 4XL
- text-5xl → 3rem (48px) - 5XL
- text-6xl → 3.75rem (60px) - 6XL
- text-7xl → 4.5rem (72px) - 7XL
- text-8xl → 6rem (96px) - 8XL
- text-9xl → 8rem (128px) - 9XL

💪 FONT WEIGHTS (font-*):
- font-thin → 100 - Thin
- font-extralight → 200 - Extra light
- font-light → 300 - Light
- font-normal → 400 - Normal
- font-medium → 500 - Medium
- font-semibold → 600 - Semi-bold
- font-bold → 700 - Bold
- font-extrabold → 800 - Extra bold
- font-black → 900 - Black

📐 TEXT ALIGNMENT:
- text-left → Left align
- text-center → Center align
- text-right → Right align
- text-justify → Justify

🔄 TEXT TRANSFORM:
- uppercase → ALL CAPS
- lowercase → all lowercase
- capitalize → Each Word Capitalized
- normal-case → Normal casing

📏 LINE HEIGHT (leading-*):
- leading-none → 1 - Tightest
- leading-tight → 1.25 - Tight
- leading-snug → 1.375 - Snug
- leading-normal → 1.5 - Normal
- leading-relaxed → 1.625 - Relaxed
- leading-loose → 2 - Loose

✏️ LETTER SPACING (tracking-*):
- tracking-tighter → -0.05em
- tracking-tight → -0.025em
- tracking-normal → 0em (default)
- tracking-wide → 0.025em
- tracking-wider → 0.05em
- tracking-widest → 0.1em

🔤 FONT FAMILY:
- font-sans → Sans-serif (default)
- font-serif → Serif font
- font-mono → Monospace

📦 TEXT OVERFLOW:
- truncate → Truncate with ellipsis (requires fixed width)
- line-clamp-1/2/3/4/5/6 → Limit to specific number of lines`,
        code: "<!-- ========== FONT SIZES ========== -->\n<p class=\"text-xs\">Extra Small (0.75rem / 12px)</p>\n<p class=\"text-sm\">Small (0.875rem / 14px)</p>\n<p class=\"text-base\">Base (1rem / 16px) - default</p>\n<p class=\"text-lg\">Large (1.125rem / 18px)</p>\n<p class=\"text-xl\">Extra Large (1.25rem / 20px)</p>\n<p class=\"text-2xl\">2XL (1.5rem / 24px)</p>\n<p class=\"text-3xl\">3XL (1.875rem / 30px)</p>\n<p class=\"text-4xl\">4XL (2.25rem / 36px)</p>\n<p class=\"text-5xl\">5XL (3rem / 48px)</p>\n\n<!-- ========== FONT WEIGHTS ========== -->\n<p class=\"font-thin\">Thin weight (100)</p>\n<p class=\"font-light\">Light weight (300)</p>\n<p class=\"font-normal\">Normal weight (400)</p>\n<p class=\"font-medium\">Medium weight (500)</p>\n<p class=\"font-semibold\">Semi-bold (600)</p>\n<p class=\"font-bold\">Bold (700)</p>\n<p class=\"font-extrabold\">Extra bold (800)</p>\n<p class=\"font-black\">Black (900)</p>\n\n<!-- ========== TEXT ALIGNMENT ========== -->\n<p class=\"text-left\">Left aligned text - most common for long content</p>\n<p class=\"text-center\">Centered text - good for headings</p>\n<p class=\"text-right\">Right aligned text - for numbers or sidebar</p>\n<p class=\"text-justify\">Justified text - spreads evenly across line</p>\n\n<!-- ========== TEXT TRANSFORM ========== -->\n<p class=\"uppercase\">this becomes UPPERCASE</p>\n<p class=\"lowercase\">THIS BECOMES lowercase</p>\n<p class=\"capitalize\">each word becomes capitalized</p>\n\n<!-- ========== LINE HEIGHT ========== -->\n<p class=\"leading-none mb-2\">Line height 1 - Very tight, no space between lines</p>\n<p class=\"leading-tight mb-2\">Line height 1.25 - Tight spacing</p>\n<p class=\"leading-normal mb-2\">Line height 1.5 - Normal (default)</p>\n<p class=\"leading-loose mb-2\">Line height 2 - Loose spacing</p>\n\n<!-- ========== LETTER SPACING ========== -->\n<p class=\"tracking-tighter\">Tighter letter spacing</p>\n<p class=\"tracking-normal\">Normal letter spacing</p>\n<p class=\"tracking-wider\">Wider letter spacing</p>\n<p class=\"tracking-widest\">Widest letter spacing</p>\n\n<!-- ========== FONT FAMILY ========== -->\n<div class=\"font-sans\">Sans-serif font (clean, modern)</div>\n<div class=\"font-serif\">Serif font (traditional, print-like)</div>\n<div class=\"font-mono\">Monospace font (code, typewriter)</div>\n\n<!-- ========== TEXT OVERFLOW ========== -->\n<div class=\"truncate w-96\">\n  This is a very long text that will be truncated with an ellipsis at the end because it exceeds the maximum width\n</div>\n\n<div class=\"line-clamp-3\">\n  This text will be limited to exactly 3 lines. Any content beyond 3 lines will be truncated with an ellipsis. This is perfect for blog post excerpts or card descriptions.\n</div>\n\n<!-- ========== COMBINING TYPOGRAPHY CLASSES ========== -->\n<h1 class=\"text-4xl font-bold text-center text-blue-600 uppercase tracking-wide\">\n  Styled Heading\n</h1>\n\n<article class=\"prose prose-lg max-w-none\">\n  <h2>Article Title</h2>\n  <p>This is a paragraph with beautiful typography defaults from the Tailwind Typography plugin. It automatically styles headings, paragraphs, lists, blockquotes, and more.</p>\n</article>",
        lineByLine: [
          "Line 2-10: Font sizes - text-xs (12px) to text-5xl (48px)",
          "Line 13-20: Font weights - thin (100) to black (900)",
          "Line 25-28: Text alignment - left, center, right, justify",
          "Line 31-34: Text transform - uppercase, lowercase, capitalize",
          "Line 37-41: Line heights - leading-none (1) to leading-loose (2)",
          "Line 44-47: Letter spacing - tracking-tighter to tracking-widest",
          "Line 50-53: Font families - sans, serif, mono",
          "Line 56-60: truncate - Truncates text with ellipsis when overflow",
          "Line 62-65: line-clamp-3 - Limits text to exactly 3 lines",
          "Line 68-73: Combining classes - Multiple typography utilities together",
          "Line 75-79: prose - Typography plugin for rich text content"
        ],
        simpleMeaning: "Use text-* for size, font-* for weight, text-* for alignment, leading-* for line height, and tracking-* for letter spacing to style all your text.",
        output: "Professional, consistent typography across your entire site. Text sizes scale properly, weights create hierarchy, and line heights ensure readability.",
        note: "Font sizes use rem units (relative to root font size). Use prose class for blog content. truncate only works with overflow hidden and fixed width."
      },
      {
        name: "5. Flexbox Layout",
        description: "Tailwind provides comprehensive Flexbox utilities for creating flexible, responsive layouts with ease.",
        explanation: `🎯 WHAT IS FLEXBOX?
Flexbox is a one-dimensional layout system for arranging items in rows or columns. It's perfect for navigation bars, card grids, and centering content.

📦 FLEX CONTAINER (parent):
flex → Creates a flex container (enables flexbox)

➡️ FLEX DIRECTION (which way items flow):
- flex-row → Items in a row (left to right) - DEFAULT
- flex-row-reverse → Items in a row (right to left)
- flex-col → Items in a column (top to bottom)
- flex-col-reverse → Items in a column (bottom to top)

🎯 JUSTIFY CONTENT (main axis alignment):
- justify-start → Items at start of container
- justify-center → Items centered
- justify-end → Items at end
- justify-between → Space between items (first at start, last at end)
- justify-around → Space around items (equal space on sides)
- justify-evenly → Evenly spaced (equal space between and around)

📏 ALIGN ITEMS (cross axis alignment):
- items-stretch → Stretch to fill container - DEFAULT
- items-start → Align to top (or left in column)
- items-center → Center vertically (or horizontally in column)
- items-end → Align to bottom (or right in column)
- items-baseline → Align by text baseline

🔀 FLEX WRAP (what happens when items don't fit):
- flex-wrap → Items wrap to next line
- flex-wrap-reverse → Items wrap in reverse order
- flex-nowrap → Items stay on one line (can overflow) - DEFAULT

📊 INDIVIDUAL FLEX ITEMS (child properties):
- flex-1 → Grow to fill available space
- flex-auto → Grow and shrink based on content
- flex-initial → Don't grow, can shrink
- flex-none → Don't grow or shrink

🔢 ORDER (visual order):
- order-1 to order-12 → Change order visually (lower = earlier)

📏 GAP (spacing between items):
- gap-4 → Gap between all items (row and column)
- gap-x-2 → Horizontal gap only
- gap-y-4 → Vertical gap only

📱 RESPONSIVE FLEX:
- flex flex-col md:flex-row → Column on mobile, row on desktop`,
        code: "<!-- ========== BASIC FLEX CONTAINER ========== -->\n<div class=\"flex border-2 border-blue-500 p-4\">\n  <div class=\"bg-red-300 p-2\">Item 1</div>\n  <div class=\"bg-green-300 p-2\">Item 2</div>\n  <div class=\"bg-blue-300 p-2\">Item 3</div>\n</div>\n\n<!-- ========== FLEX DIRECTION ========== -->\n<div class=\"flex flex-row space-x-2 mb-4\">\n  <div class=\"bg-red-300 p-2\">Row (default)</div>\n  <div class=\"bg-green-300 p-2\">Left to right</div>\n</div>\n\n<div class=\"flex flex-col space-y-2 mb-4\">\n  <div class=\"bg-red-300 p-2\">Column</div>\n  <div class=\"bg-green-300 p-2\">Top to bottom</div>\n</div>\n\n<!-- ========== JUSTIFY CONTENT (horizontal alignment) ========== -->\n<div class=\"flex justify-start bg-gray-100 p-4 mb-2\">\n  <div class=\"bg-blue-500 text-white p-2\">Start</div>\n  <div class=\"bg-blue-500 text-white p-2\">Items</div>\n</div>\n\n<div class=\"flex justify-center bg-gray-100 p-4 mb-2\">\n  <div class=\"bg-blue-500 text-white p-2\">Centered</div>\n  <div class=\"bg-blue-500 text-white p-2\">Items</div>\n</div>\n\n<div class=\"flex justify-between bg-gray-100 p-4 mb-2\">\n  <div class=\"bg-blue-500 text-white p-2\">Space</div>\n  <div class=\"bg-blue-500 text-white p-2\">Between</div>\n</div>\n\n<!-- ========== ALIGN ITEMS (vertical alignment) ========== -->\n<div class=\"flex items-start bg-gray-100 h-32 p-4 mb-2\">\n  <div class=\"bg-green-500 text-white p-2\">Top aligned</div>\n</div>\n\n<div class=\"flex items-center bg-gray-100 h-32 p-4 mb-2\">\n  <div class=\"bg-green-500 text-white p-2\">Center aligned</div>\n</div>\n\n<!-- ========== COMMON FLEX PATTERNS ========== -->\n<!-- Navigation Bar (most common pattern) -->\n<nav class=\"flex justify-between items-center bg-gray-800 text-white p-4\">\n  <div class=\"text-xl font-bold\">Logo</div>\n  <div class=\"flex space-x-4\">\n    <a href=\"#\" class=\"hover:text-gray-300\">Home</a>\n    <a href=\"#\" class=\"hover:text-gray-300\">About</a>\n    <a href=\"#\" class=\"hover:text-gray-300\">Contact</a>\n  </div>\n  <button class=\"bg-blue-500 px-4 py-2 rounded\">Login</button>\n</nav>\n\n<!-- Center content vertically and horizontally -->\n<div class=\"flex items-center justify-center h-64 bg-gray-100\">\n  <div class=\"text-center\">\n    <h2 class=\"text-2xl font-bold\">Perfectly Centered</h2>\n    <p>Using flex items-center justify-center</p>\n  </div>\n</div>\n\n<!-- Card grid with flex wrap -->\n<div class=\"flex flex-wrap gap-4\">\n  <div class=\"bg-white shadow-lg rounded-lg p-6 w-64\">Card 1</div>\n  <div class=\"bg-white shadow-lg rounded-lg p-6 w-64\">Card 2</div>\n  <div class=\"bg-white shadow-lg rounded-lg p-6 w-64\">Card 3</div>\n  <div class=\"bg-white shadow-lg rounded-lg p-6 w-64\">Card 4</div>\n</div>\n\n<!-- Holy grail layout (header, main content, sidebar, footer) -->\n<div class=\"flex flex-col min-h-screen\">\n  <header class=\"bg-blue-600 text-white p-4\">Header</header>\n  \n  <div class=\"flex flex-1\">\n    <aside class=\"bg-gray-200 w-64 p-4\">Sidebar</aside>\n    <main class=\"flex-1 p-4\">\n      <h1 class=\"text-2xl\">Main Content</h1>\n      <p>This content fills remaining space</p>\n    </main>\n  </div>\n  \n  <footer class=\"bg-gray-800 text-white p-4\">Footer</footer>\n</div>\n\n<!-- Responsive flex (column on mobile, row on desktop) -->\n<div class=\"flex flex-col md:flex-row gap-4\">\n  <div class=\"bg-red-300 p-4 flex-1\">\n    On mobile: full width stacked vertically\n  </div>\n  <div class=\"bg-green-300 p-4 flex-1\">\n    On desktop: side by side horizontally\n  </div>\n  <div class=\"bg-blue-300 p-4 flex-1\">\n    Using md:flex-row breakpoint\n  </div>\n</div>",
        lineByLine: [
          "Line 2-7: flex - Creates a flex container with items in a row by default",
          "Line 10-13: flex-row - Items arranged horizontally (default direction)",
          "Line 16-19: flex-col - Items arranged vertically in a column",
          "Line 22-27: justify-start - Items align to the left/start",
          "Line 29-34: justify-center - Items centered horizontally",
          "Line 36-41: justify-between - Space between items (first at start, last at end)",
          "Line 44-48: items-start - Items align to the top vertically",
          "Line 50-54: items-center - Items center vertically",
          "Line 57-67: Navigation bar - justify-between + items-center creates navbar",
          "Line 70-77: Center content - items-center + justify-center centers both axes",
          "Line 80-86: Flex wrap - flex-wrap allows cards to wrap on small screens",
          "Line 89-105: Holy grail layout - flex-col for page, flex-1 for main area",
          "Line 108-118: Responsive flex - Column on mobile, row on desktop"
        ],
        simpleMeaning: "Flexbox utilities help arrange items horizontally or vertically with control over alignment, spacing, and order. Perfect for navbars, centering, and card grids.",
        output: "Responsive flex layouts including navigation bars, centered content, card grids, and complete page layouts.",
        note: "Use flex for 1D layouts (either row OR column). Use grid for 2D layouts (both rows AND columns). Gap utilities are great for spacing between items."
      },
      {
        name: "6. Grid Layout",
        description: "Tailwind's grid utilities provide powerful CSS Grid features for creating complex, responsive layouts with ease.",
        explanation: `🎯 WHAT IS CSS GRID?
CSS Grid is a two-dimensional layout system that handles both rows AND columns simultaneously. Perfect for complex layouts like dashboards, galleries, and magazine-style designs.

📊 DEFINING COLUMNS:
- grid-cols-1 → 1 column (single column)
- grid-cols-2 → 2 equal columns
- grid-cols-3 → 3 equal columns
- grid-cols-4 → 4 equal columns
- grid-cols-6 → 6 equal columns
- grid-cols-12 → 12 columns (most flexible)

📏 DEFINING ROWS:
- grid-rows-1 → 1 row
- grid-rows-2 → 2 equal rows
- grid-rows-3 → 3 equal rows

📐 COLUMN SPAN (how many columns an item takes):
- col-span-1 → Spans 1 column (default)
- col-span-2 → Spans 2 columns
- col-span-3 → Spans 3 columns
- col-span-full → Spans all columns

📏 ROW SPAN:
- row-span-1 → Spans 1 row (default)
- row-span-2 → Spans 2 rows
- row-span-3 → Spans 3 rows

📍 COLUMN POSITIONING (where an item starts):
- col-start-1 → Starts at column line 1
- col-start-2 → Starts at column line 2
- col-start-auto → Auto position
- col-end-4 → Ends at column line 4

🎯 JUSTIFY ITEMS (horizontal alignment inside grid cells):
- justify-items-start → Items align left in their cells
- justify-items-center → Items center horizontally
- justify-items-end → Items align right
- justify-items-stretch → Items stretch to fill (default)

📏 ALIGN ITEMS (vertical alignment inside grid cells):
- items-start → Items align to top of cells
- items-center → Items center vertically
- items-end → Items align to bottom
- items-stretch → Items stretch to fill (default)

🔀 JUSTIFY CONTENT (alignment of the entire grid):
- justify-start → Grid aligns to left
- justify-center → Grid centered horizontally
- justify-end → Grid aligns to right

🎯 PLACE ITEMS (centering shortcut):
- place-items-center → Centers items both horizontally and vertically

📱 RESPONSIVE GRID:
- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 → Changes columns at breakpoints

🎨 AUTO-FIT & MINMAX (responsive cards):
- grid-cols-[repeat(auto-fit,minmax(250px,1fr))] → Auto-fits as many columns as possible with min 250px`,
        code: "<!-- ========== BASIC GRID ========== -->\n<div class=\"grid grid-cols-3 gap-4 mb-6\">\n  <div class=\"bg-blue-500 text-white p-4 rounded\">Column 1</div>\n  <div class=\"bg-blue-500 text-white p-4 rounded\">Column 2</div>\n  <div class=\"bg-blue-500 text-white p-4 rounded\">Column 3</div>\n</div>\n\n<!-- ========== RESPONSIVE GRID (most common) ========== -->\n<div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6\">\n  <div class=\"bg-green-500 text-white p-4 rounded\">\n    1 column on mobile\n  </div>\n  <div class=\"bg-green-500 text-white p-4 rounded\">\n    2 columns on tablet\n  </div>\n  <div class=\"bg-green-500 text-white p-4 rounded\">\n    4 columns on desktop\n  </div>\n  <div class=\"bg-green-500 text-white p-4 rounded\">\n    Responsive grid\n  </div>\n</div>\n\n<!-- ========== COLUMN SPAN ========== -->\n<div class=\"grid grid-cols-4 gap-2 mb-6\">\n  <div class=\"bg-red-500 text-white p-2 col-span-2\">Spans 2 columns</div>\n  <div class=\"bg-red-500 text-white p-2\">Normal</div>\n  <div class=\"bg-red-500 text-white p-2\">Normal</div>\n  <div class=\"bg-red-500 text-white p-2 col-span-4\">Spans all 4 columns</div>\n  <div class=\"bg-red-500 text-white p-2 col-span-3\">Spans 3 columns</div>\n  <div class=\"bg-red-500 text-white p-2\">Normal</div>\n</div>\n\n<!-- ========== DASHBOARD LAYOUT (12-column grid) ========== -->\n<div class=\"grid grid-cols-12 gap-4 mb-6\">\n  <!-- Sidebar: 3 columns wide on desktop -->\n  <aside class=\"col-span-12 md:col-span-3 bg-purple-500 text-white p-4 rounded\">\n    Sidebar\n  </aside>\n  \n  <!-- Main content: 9 columns wide on desktop -->\n  <main class=\"col-span-12 md:col-span-9\">\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n      <div class=\"bg-pink-500 text-white p-4 rounded\">Widget 1</div>\n      <div class=\"bg-pink-500 text-white p-4 rounded\">Widget 2</div>\n    </div>\n  </main>\n</div>\n\n<!-- ========== CARD GRID WITH AUTO-FIT (responsive cards) ========== -->\n<div class=\"grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 mb-6\">\n  <div class=\"bg-yellow-500 text-white p-6 rounded-lg\">\n    <h3 class=\"text-xl font-bold mb-2\">Card 1</h3>\n    <p>Auto-fits based on container width</p>\n  </div>\n  <div class=\"bg-yellow-500 text-white p-6 rounded-lg\">\n    <h3 class=\"text-xl font-bold mb-2\">Card 2</h3>\n    <p>Minimum 280px width, grows to fill space</p>\n  </div>\n  <div class=\"bg-yellow-500 text-white p-6 rounded-lg\">\n    <h3 class=\"text-xl font-bold mb-2\">Card 3</h3>\n    <p>Creates responsive masonry-like layout</p>\n  </div>\n</div>\n\n<!-- ========== GRID WITH NESTED GRID ========== -->\n<div class=\"grid grid-cols-2 gap-4 mb-6\">\n  <!-- Left side has its own grid -->\n  <div class=\"grid grid-cols-2 gap-2\">\n    <div class=\"bg-indigo-500 text-white p-2\">Nested 1</div>\n    <div class=\"bg-indigo-500 text-white p-2\">Nested 2</div>\n    <div class=\"bg-indigo-500 text-white p-2 col-span-2\">Nested Full Width</div>\n  </div>\n  \n  <!-- Right side is simple -->\n  <div class=\"bg-indigo-500 text-white p-4\">\n    Regular grid item\n  </div>\n</div>\n\n<!-- ========== PRODUCT GRID (e-commerce example) ========== -->\n<div class=\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\">\n  {products.map(product => (\n    <div key={product.id} class=\"bg-white rounded-lg shadow-lg overflow-hidden\">\n      <img src={product.image} alt={product.name} class=\"w-full h-48 object-cover\" />\n      <div class=\"p-4\">\n        <h3 class=\"font-semibold text-lg mb-1\">{product.name}</h3>\n        <p class=\"text-gray-600 mb-2\">${product.price}</p>\n        <button class=\"bg-blue-500 text-white px-4 py-2 rounded w-full\">\n          Add to Cart\n        </button>\n      </div>\n    </div>\n  ))}\n</div>\n\n<!-- ========== MAGAZINE LAYOUT (different spans) ========== -->\n<div class=\"grid grid-cols-3 gap-4 auto-rows-min\">\n  <!-- Featured article spans 2 columns and 2 rows -->\n  <div class=\"bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg col-span-2 row-span-2\">\n    <h2 class=\"text-3xl font-bold mb-4\">Featured Article</h2>\n    <p class=\"text-lg\">This is the main featured content that stands out.</p>\n  </div>\n  \n  <!-- Regular articles -->\n  <div class=\"bg-gray-100 p-4 rounded-lg\">Article 1</div>\n  <div class=\"bg-gray-100 p-4 rounded-lg\">Article 2</div>\n  <div class=\"bg-gray-100 p-4 rounded-lg\">Article 3</div>\n  <div class=\"bg-gray-100 p-4 rounded-lg col-span-2\">Article 4 (wider)</div>\n</div>\n\n<!-- ========== CENTERING WITH GRID ========== -->\n<div class=\"grid place-items-center h-64 bg-gray-100 rounded-lg mb-6\">\n  <div class=\"text-center\">\n    <h3 class=\"text-xl font-bold\">Perfectly Centered</h3>\n    <p>Using grid place-items-center</p>\n  </div>\n</div>",
        lineByLine: [
          "Line 2-7: grid grid-cols-3 - Creates 3 equal columns with gap between items",
          "Line 10-19: Responsive grid - 1 column on mobile, 2 on tablet, 4 on desktop",
          "Line 22-29: col-span - Element spans multiple columns (2, 4, or 3 columns)",
          "Line 32-46: Dashboard layout - 12-column grid with sidebar (3) and main (9)",
          "Line 49-60: Auto-fit cards - Responsive grid that auto-adults column count",
          "Line 63-74: Nested grid - Grid inside a grid item for complex layouts",
          "Line 77-96: Product grid - Real e-commerce product listing with images",
          "Line 99-112: Magazine layout - Different column and row spans for featured content",
          "Line 115-121: place-items-center - Quick centering using grid"
        ],
        simpleMeaning: "Grid utilities create powerful 2D layouts with rows and columns, perfect for complex responsive designs like dashboards and card galleries.",
        output: "Complex, responsive grid layouts including dashboards, product grids, magazine layouts, and card galleries with precise control over item placement.",
        note: "Use grid for 2D layouts (both rows and columns). Use flex for 1D layouts (either row OR column). 12-column grid is most flexible."
      },
      {
        name: "7. Positioning & Display",
        description: "Tailwind provides utilities for controlling position (static, relative, absolute, fixed, sticky) and display properties.",
        explanation: `📦 DISPLAY TYPES (how elements behave):
- block → Takes full width, creates new line (like <div>)
- inline → Width based on content, no line break (like <span>)
- inline-block → Inline but can set width/height
- hidden → display: none (hides element completely)
- flex → Enables flexbox layout
- grid → Enables grid layout
- inline-flex → Inline flex container

📍 POSITION TYPES (where elements are placed):
- static → Default positioning (normal document flow)
- relative → Positioned relative to normal position
- absolute → Positioned relative to nearest positioned ancestor
- fixed → Positioned relative to viewport (stays on scroll)
- sticky → Switches between relative and fixed based on scroll

🎯 POSITIONING COORDINATES (only work with relative/absolute/fixed/sticky):
- top-0 → Sets top: 0px
- top-4 → Sets top: 1rem (16px)
- right-0 → Sets right: 0px
- bottom-0 → Sets bottom: 0px
- left-0 → Sets left: 0px
- inset-0 → Sets top, right, bottom, left all to 0
- inset-x-0 → Sets left and right to 0
- inset-y-0 → Sets top and bottom to 0

📊 Z-INDEX (stacking order):
- z-0 → z-index: 0
- z-10 → z-index: 10
- z-20 → z-index: 20
- z-30 → z-index: 30
- z-40 → z-index: 40
- z-50 → z-index: 50
- z-auto → z-index: auto

📏 OVERFLOW CONTROL (what happens when content is too big):
- overflow-auto → Adds scrollbars only if needed
- overflow-hidden → Clips content, no scrollbars
- overflow-visible → Content can overflow container (default)
- overflow-scroll → Always shows scrollbars
- overflow-x-auto → Horizontal scroll only if needed
- overflow-y-auto → Vertical scroll only if needed

🔧 COMMON POSITIONING PATTERNS:
1. Relative parent + Absolute child → Perfect for badges, tooltips
2. Fixed header → Stays at top when scrolling
3. Sticky sidebar → Scrolls until reaching top, then sticks
4. Full-screen overlay → Fixed + inset-0 covers entire viewport`,
        code: "<!-- ========== DISPLAY UTILITIES ========== -->\n<div class=\"space-y-2 mb-6\">\n  <div class=\"block bg-blue-200 p-2\">block - Takes full width</div>\n  <div class=\"inline bg-green-200 p-2\">inline - Width based on content</div>\n  <div class=\"inline-block bg-yellow-200 p-2 w-32\">inline-block - Can set width but stays inline</div>\n  <div class=\"hidden bg-red-200 p-2\">hidden - This won't show up</div>\n</div>\n\n<!-- ========== RELATIVE + ABSOLUTE (badge on card) ========== -->\n<div class=\"relative bg-white shadow-lg rounded-lg p-6 w-64 mb-6\">\n  <!-- Badge positioned at top-right corner -->\n  <div class=\"absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-lg rounded-bl-lg\">\n    New!\n  </div>\n  \n  <h3 class=\"text-xl font-bold mb-2\">Product Card</h3>\n  <p class=\"text-gray-600\">This card has a badge in top-right corner</p>\n</div>\n\n<!-- ========== ABSOLUTE CENTERING ========== -->\n<div class=\"relative h-64 bg-gray-200 mb-6\">\n  <div class=\"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-4 rounded\">\n    Perfectly centered with absolute positioning!\n  </div>\n</div>\n\n<!-- ========== FIXED POSITION (sticky header - scroll to see) ========== -->\n<nav class=\"fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 z-50\">\n  <div class=\"container mx-auto flex justify-between\">\n    <span class=\"font-bold text-xl\">Fixed Header</span>\n    <div class=\"space-x-4\">\n      <a href=\"#\" class=\"hover:text-gray-300\">Home</a>\n      <a href=\"#\" class=\"hover:text-gray-300\">About</a>\n    </div>\n  </div>\n</nav>\n\n<!-- Add padding to body when using fixed header -->\n<div style=\"padding-top: 70px\">\n  <p>This content scrolls, but header stays at top.</p>\n</div>\n\n<!-- ========== STICKY SIDEBAR ========== -->\n<div class=\"flex gap-6 mb-6\">\n  <!-- Sticky sidebar - sticks when scrolling past -->\n  <aside class=\"sticky top-4 bg-purple-100 p-4 rounded-lg w-64 h-48\">\n    <h3 class=\"font-bold mb-2\">Sticky Sidebar</h3>\n    <p>Stays visible when you scroll</p>\n  </aside>\n  \n  <!-- Long content to demonstrate sticky -->\n  <main class=\"flex-1\">\n    <div class=\"h-96 bg-gray-100 p-4 rounded\">\n      Scroll down to see the sidebar stick!\n    </div>\n    <div class=\"h-96 bg-gray-100 p-4 rounded mt-4\">\n      More content here\n    </div>\n  </main>\n</div>\n\n<!-- ========== FULLSCREEN OVERLAY (modal background) ========== -->\n<div class=\"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50\">\n  <div class=\"bg-white rounded-lg p-8 max-w-md\">\n    <h2 class=\"text-2xl font-bold mb-4\">Modal Title</h2>\n    <p class=\"mb-4\">This is a modal overlay</p>\n    <button class=\"bg-blue-500 text-white px-4 py-2 rounded\">Close</button>\n  </div>\n</div>\n\n<!-- ========== TOOLTIP WITH ABSOLUTE ========== -->\n<div class=\"relative inline-block group mb-6\">\n  <button class=\"bg-blue-500 text-white px-4 py-2 rounded\">Hover me</button>\n  \n  <!-- Tooltip hidden until hover -->\n  <div class=\"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap\">\n    This is a tooltip!\n  </div>\n</div>\n\n<!-- ========== Z-INDEX EXAMPLES ========== -->\n<div class=\"relative h-32 mb-6\">\n  <div class=\"absolute top-0 left-0 w-32 h-32 bg-red-500 z-10\">z-index: 10</div>\n  <div class=\"absolute top-4 left-4 w-32 h-32 bg-green-500 z-20\">z-index: 20 (on top)</div>\n  <div class=\"absolute top-8 left-8 w-32 h-32 bg-blue-500 z-30\">z-index: 30 (top)</div>\n</div>\n\n<!-- ========== OVERFLOW EXAMPLES ========== -->\n<div class=\"grid grid-cols-3 gap-4 mb-6\">\n  <div class=\"bg-gray-200 p-2 h-32 overflow-auto\">\n    This box has overflow-auto. It will show scrollbars if content exceeds the height. Adding lots of text here to demonstrate scrolling behavior.\n  </div>\n  \n  <div class=\"bg-gray-200 p-2 h-32 overflow-hidden\">\n    This box has overflow-hidden. Content that exceeds the height is completely cut off and invisible.\n  </div>\n  \n  <div class=\"bg-gray-200 p-2 h-32 overflow-visible\">\n    This box has overflow-visible. Content will overflow outside the container boundaries and be visible.\n  </div>\n</div>\n\n<!-- ========== DROPDOWN MENU (absolute positioning) ========== -->\n<div class=\"relative inline-block mb-6\">\n  <button class=\"bg-gray-800 text-white px-4 py-2 rounded\">\n    Dropdown Menu ▼\n  </button>\n  \n  <div class=\"absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg w-48 hidden group-hover:block\">\n    <a href=\"#\" class=\"block px-4 py-2 hover:bg-gray-100\">Option 1</a>\n    <a href=\"#\" class=\"block px-4 py-2 hover:bg-gray-100\">Option 2</a>\n    <a href=\"#\" class=\"block px-4 py-2 hover:bg-gray-100\">Option 3</a>\n  </div>\n</div>",
        lineByLine: [
          "Line 2-7: Display utilities - block, inline, inline-block, hidden",
          "Line 10-18: relative + absolute - Badge positioned at top-right of card",
          "Line 21-25: Absolute centering - top-1/2 left-1/2 with transform to center",
          "Line 28-38: fixed - Fixed header that stays at top when scrolling",
          "Line 45-57: sticky - Sidebar that sticks when scrolling past",
          "Line 60-67: Fixed inset-0 - Fullscreen overlay for modals",
          "Line 70-79: Tooltip - Relative parent with absolute tooltip on hover",
          "Line 82-88: z-index - Stacking order demonstration",
          "Line 91-103: overflow - Different overflow behaviors (auto, hidden, visible)",
          "Line 106-118: Dropdown - Absolute positioned dropdown menu"
        ],
        simpleMeaning: "Position utilities control element placement (static, relative, absolute, fixed, sticky). Display utilities control layout behavior (block, inline, flex, grid).",
        output: "Elements positioned precisely with proper stacking order and overflow handling - badges, tooltips, modals, sticky headers, and dropdowns.",
        note: "Use relative as parent for absolute children. Sticky requires a threshold (top-0). Fixed elements are removed from normal flow. Always add z-index when overlapping elements."
      },
      {
        name: "8. Borders & Effects (with blur effects)",
        description: "Tailwind provides comprehensive border, shadow, blur, and other effect utilities for styling elements.",
        explanation: `🟢 BORDER RADIUS (rounded corners):
- rounded-none → No border radius
- rounded-sm → Small radius (0.125rem / 2px)
- rounded → Default radius (0.25rem / 4px)
- rounded-md → Medium radius (0.375rem / 6px)
- rounded-lg → Large radius (0.5rem / 8px)
- rounded-xl → Extra large (0.75rem / 12px)
- rounded-2xl → 2XL radius (1rem / 16px)
- rounded-3xl → 3XL radius (1.5rem / 24px)
- rounded-full → Perfect circle or pill shape

🎯 SPECIFIC CORNERS:
- rounded-t-lg → Top corners only
- rounded-b-lg → Bottom corners only
- rounded-l-lg → Left corners only
- rounded-r-lg → Right corners only
- rounded-tl-lg → Top-left corner only
- rounded-tr-lg → Top-right corner only
- rounded-bl-lg → Bottom-left corner only
- rounded-br-lg → Bottom-right corner only

📏 BORDER WIDTH:
- border → 1px border on all sides
- border-0 → No border
- border-2 → 2px border
- border-4 → 4px border
- border-8 → 8px border
- border-t → Top border only
- border-r → Right border only
- border-b → Bottom border only
- border-l → Left border only

🎨 BORDER COLOR:
- border-gray-300 → Gray border
- border-blue-500 → Blue border
- border-red-500 → Red border

✨ BOX SHADOW:
- shadow-sm → Small shadow
- shadow → Default shadow
- shadow-md → Medium shadow
- shadow-lg → Large shadow
- shadow-xl → Extra large
- shadow-2xl → 2XL shadow
- shadow-inner → Inner shadow (inset)
- shadow-none → No shadow

🎭 OPACITY:
- opacity-0 → Fully transparent
- opacity-25 → 25% opacity
- opacity-50 → 50% opacity
- opacity-75 → 75% opacity
- opacity-100 → Fully opaque

🌀 BLUR EFFECTS (blur the element itself):
- blur-none → No blur
- blur-sm → Small blur (4px)
- blur → Default blur (8px)
- blur-md → Medium blur (12px)
- blur-lg → Large blur (16px)
- blur-xl → Extra large (24px)
- blur-2xl → 2XL blur (40px)
- blur-3xl → 3XL blur (64px)

🪟 BACKDROP BLUR (blur behind the element - frosted glass):
- backdrop-blur-none → No backdrop blur
- backdrop-blur-sm → Small backdrop blur
- backdrop-blur → Default backdrop blur
- backdrop-blur-md → Medium backdrop blur
- backdrop-blur-lg → Large backdrop blur
- backdrop-blur-xl → Extra large backdrop blur
- backdrop-blur-2xl → 2XL backdrop blur

💎 BACKDROP OTHER EFFECTS:
- backdrop-brightness-50 → Half brightness
- backdrop-contrast-125 → Higher contrast
- backdrop-grayscale → Grayscale background
- backdrop-opacity-50 → 50% opacity background`,
        code: "<!-- ========== BORDER RADIUS ========== -->\n<div class=\"flex space-x-2 mb-6\">\n  <div class=\"rounded-none bg-blue-500 text-white p-4\">None</div>\n  <div class=\"rounded-sm bg-blue-500 text-white p-4\">Small</div>\n  <div class=\"rounded bg-blue-500 text-white p-4\">Default</div>\n  <div class=\"rounded-md bg-blue-500 text-white p-4\">Medium</div>\n  <div class=\"rounded-lg bg-blue-500 text-white p-4\">Large</div>\n  <div class=\"rounded-xl bg-blue-500 text-white p-4\">XL</div>\n  <div class=\"rounded-2xl bg-blue-500 text-white p-4\">2XL</div>\n  <div class=\"rounded-full bg-blue-500 text-white p-4 w-16 h-16 flex items-center justify-center\">\n    Full\n  </div>\n</div>\n\n<!-- ========== CORNER-SPECIFIC RADIUS ========== -->\n<div class=\"bg-purple-500 text-white p-8 rounded-t-2xl mb-6\">\n  Only top corners are rounded!\n</div>\n\n<!-- ========== BORDER WIDTH & COLOR ========== -->\n<div class=\"grid grid-cols-3 gap-4 mb-6\">\n  <div class=\"border border-red-500 p-4 rounded\">\n    1px red border\n  </div>\n  <div class=\"border-2 border-blue-500 p-4 rounded\">\n    2px blue border\n  </div>\n  <div class=\"border-4 border-green-500 p-4 rounded\">\n    4px green border\n  </div>\n  <div class=\"border-t-4 border-yellow-500 p-4\">\n    Top border only\n  </div>\n  <div class=\"border-l-8 border-purple-500 p-4\">\n    Left border only (8px)\n  </div>\n  <div class=\"border-b-4 border-pink-500 p-4\">\n    Bottom border only\n  </div>\n</div>\n\n<!-- ========== BOX SHADOW ========== -->\n<div class=\"flex space-x-4 mb-6\">\n  <div class=\"shadow-sm bg-white p-4 rounded\">Small shadow</div>\n  <div class=\"shadow bg-white p-4 rounded\">Default shadow</div>\n  <div class=\"shadow-md bg-white p-4 rounded\">Medium shadow</div>\n  <div class=\"shadow-lg bg-white p-4 rounded\">Large shadow</div>\n  <div class=\"shadow-xl bg-white p-4 rounded\">XL shadow</div>\n  <div class=\"shadow-2xl bg-white p-4 rounded\">2XL shadow</div>\n  <div class=\"shadow-inner bg-white p-4 rounded\">Inner shadow</div>\n</div>\n\n<!-- ========== CARD WITH SHADOW AND ROUNDED CORNERS ========== -->\n<div class=\"max-w-sm rounded-lg shadow-lg overflow-hidden mb-6\">\n  <img src=\"https://picsum.photos/400/200\" alt=\"Card image\" class=\"w-full\" />\n  <div class=\"p-6\">\n    <h3 class=\"text-xl font-bold mb-2\">Card Title</h3>\n    <p class=\"text-gray-600 mb-4\">This is a beautiful card with rounded corners and shadow</p>\n    <button class=\"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\">\n      Learn More\n    </button>\n  </div>\n</div>\n\n<!-- ========== OPACITY ========== -->\n<div class=\"flex space-x-4 mb-6\">\n  <div class=\"bg-red-500 opacity-100 text-white p-4 rounded\">100%</div>\n  <div class=\"bg-red-500 opacity-75 text-white p-4 rounded\">75%</div>\n  <div class=\"bg-red-500 opacity-50 text-white p-4 rounded\">50%</div>\n  <div class=\"bg-red-500 opacity-25 text-white p-4 rounded\">25%</div>\n  <div class=\"bg-red-500 opacity-0 text-white p-4 rounded\">0% (invisible)</div>\n</div>\n\n<!-- ========== BLUR EFFECTS (blur the element) ========== -->\n<div class=\"flex space-x-4 mb-6\">\n  <div class=\"bg-blue-500 text-white p-4 rounded blur-none\">No blur</div>\n  <div class=\"bg-blue-500 text-white p-4 rounded blur-sm\">Small blur</div>\n  <div class=\"bg-blue-500 text-white p-4 rounded blur\">Default blur</div>\n  <div class=\"bg-blue-500 text-white p-4 rounded blur-md\">Medium blur</div>\n  <div class=\"bg-blue-500 text-white p-4 rounded blur-lg\">Large blur</div>\n</div>\n\n<!-- ========== BACKDROP BLUR (frosted glass effect) ========== -->\n<div class=\"relative h-48 mb-6\">\n  <!-- Background image -->\n  <div class=\"absolute inset-0 bg-cover bg-center\" style=\"background-image: url('https://picsum.photos/800/400')\"></div>\n  \n  <!-- Frosted glass overlay -->\n  <div class=\"absolute inset-0 flex items-center justify-center\">\n    <div class=\"backdrop-blur-md bg-white/30 rounded-xl p-8 text-white text-center\">\n      <h2 class=\"text-2xl font-bold mb-2\">Frosted Glass Effect</h2>\n      <p>Using backdrop-blur-md and bg-white/30</p>\n    </div>\n  </div>\n</div>\n\n<!-- ========== MULTIPLE EFFECTS COMBINED ========== -->\n<div class=\"bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl shadow-xl mb-6\">\n  <div class=\"backdrop-blur-sm bg-white/20 rounded-xl p-6 text-white\">\n    <h3 class=\"text-2xl font-bold mb-2\">Glassmorphism Card</h3>\n    <p class=\"mb-4\">Combining gradient background, rounded corners, shadow, and backdrop blur</p>\n    <button class=\"bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30\">\n      Glass Button\n    </button>\n  </div>\n</div>\n\n<!-- ========== HOVER EFFECTS WITH TRANSITIONS ========== -->\n<button class=\"bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300\">\n  Hover me for cool effects!\n</button>",
        lineByLine: [
          "Line 2-13: Border radius values - rounded-none to rounded-full",
          "Line 16-18: Corner-specific radius - rounded-t-2xl for only top corners",
          "Line 21-34: Border width and color - border, border-2, border-4 with colors",
          "Line 37-46: Box shadow - shadow-sm to shadow-2xl and shadow-inner",
          "Line 49-58: Card example - Combining rounded-lg and shadow-lg",
          "Line 61-67: Opacity - opacity-0 to opacity-100",
          "Line 70-76: Blur effects - blur-sm to blur-lg on the element itself",
          "Line 79-92: Backdrop blur - Frosted glass effect with backdrop-blur",
          "Line 95-104: Multiple effects - Glassmorphism combining all effects",
          "Line 107-108: Hover effects - Adding transitions to shadow and scale"
        ],
        simpleMeaning: "Add visual effects like rounded corners, shadows, blur, and opacity to make elements stand out and look modern.",
        output: "Beautiful cards with rounded corners, shadows, and glassmorphism effects. Elements can be made transparent or blurred for modern UI designs.",
        note: "Shadow sizes increase from sm to 2xl. Backdrop blur creates frosted glass effects. Combine multiple effects for glassmorphism design. Use transitions for smooth hover effects."
      },
      {
        name: "9. Transitions & Animations (comprehensive)",
        description: "Tailwind provides utilities for smooth transitions, transforms, and keyframe animations with extensive customization options.",
        explanation: `✨ TRANSITIONS (smooth property changes):
TRANSITION PROPERTIES:
- transition-none → No transitions
- transition-all → All properties transition (use carefully)
- transition-colors → Only colors transition
- transition-opacity → Only opacity transitions
- transition-shadow → Only shadow transitions
- transition-transform → Only transforms transition

⏱️ DURATION (how long animation takes):
- duration-75 → 75ms (very fast)
- duration-100 → 100ms
- duration-150 → 150ms
- duration-200 → 200ms
- duration-300 → 300ms (default)
- duration-500 → 500ms
- duration-700 → 700ms
- duration-1000 → 1 second

🎯 TIMING FUNCTIONS (animation curve):
- ease-linear → Constant speed
- ease-in → Slow start, fast end
- ease-out → Fast start, slow end
- ease-in-out → Slow start and end (default)

⏰ DELAY (wait before starting):
- delay-75 → 75ms delay
- delay-100 → 100ms delay
- delay-150 → 150ms delay
- delay-200 → 200ms delay
- delay-300 → 300ms delay
- delay-500 → 500ms delay
- delay-700 → 700ms delay
- delay-1000 → 1 second delay

🔄 TRANSFORMS (change shape/position):
SCALE:
- scale-0 → scale(0) - invisible
- scale-50 → scale(0.5) - half size
- scale-75 → scale(0.75)
- scale-90 → scale(0.9)
- scale-95 → scale(0.95)
- scale-100 → scale(1) - normal
- scale-105 → scale(1.05)
- scale-110 → scale(1.1)
- scale-125 → scale(1.25)
- scale-150 → scale(1.5)
- scale-x-* → Scale horizontally only
- scale-y-* → Scale vertically only

ROTATE:
- rotate-0 → rotate(0deg)
- rotate-1 → rotate(1deg)
- rotate-2 → rotate(2deg)
- rotate-3 → rotate(3deg)
- rotate-6 → rotate(6deg)
- rotate-12 → rotate(12deg)
- rotate-45 → rotate(45deg)
- rotate-90 → rotate(90deg)
- rotate-180 → rotate(180deg)
- -rotate-* → Negative rotation

TRANSLATE (move):
- translate-x-0 → translateX(0)
- translate-x-1 → 0.25rem
- translate-x-2 → 0.5rem
- translate-x-4 → 1rem
- translate-x-8 → 2rem
- -translate-x-* → Move left
- translate-y-* → Vertical movement

SKEW:
- skew-x-0 → skewX(0)
- skew-x-1 → skewX(1deg)
- skew-x-2 → skewX(2deg)
- skew-x-3 → skewX(3deg)
- skew-x-6 → skewX(6deg)
- skew-x-12 → skewX(12deg)

🎬 BUILT-IN ANIMATIONS:
- animate-none → No animation
- animate-spin → Continuous rotation
- animate-pulse → Soft opacity pulse
- animate-ping → Ripple effect
- animate-bounce → Up and down bounce

🔄 TRANSFORM ORIGIN:
- origin-center → Center (default)
- origin-top → Top center
- origin-top-right → Top right
- origin-right → Right center
- origin-bottom-right → Bottom right
- origin-bottom → Bottom center
- origin-bottom-left → Bottom left
- origin-left → Left center
- origin-top-left → Top left

🎯 GROUP HOVER (parent hover affects child):
- group → Marks parent element
- group-hover:scale-110 → Child scales when parent hovered`,
        code: "<!-- ========== BASIC TRANSITIONS ========== -->\n<button class=\"bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300\">\n  Smooth background change on hover\n</button>\n\n<!-- ========== TRANSITION DURATION ========== -->\n<div class=\"flex space-x-4 mb-6\">\n  <button class=\"bg-green-500 hover:bg-green-700 text-white p-2 rounded transition duration-150\">150ms</button>\n  <button class=\"bg-green-500 hover:bg-green-700 text-white p-2 rounded transition duration-300\">300ms</button>\n  <button class=\"bg-green-500 hover:bg-green-700 text-white p-2 rounded transition duration-500\">500ms</button>\n  <button class=\"bg-green-500 hover:bg-green-700 text-white p-2 rounded transition duration-1000\">1000ms</button>\n</div>\n\n<!-- ========== TRANSITION PROPERTIES ========== -->\n<div class=\"space-y-4 mb-6\">\n  <div class=\"transition-colors duration-300 bg-gray-200 hover:bg-blue-200 p-4 rounded\">\n    Only colors transition\n  </div>\n  <div class=\"transition-transform duration-300 bg-gray-200 hover:scale-105 p-4 rounded\">\n    Only transform transitions\n  </div>\n  <div class=\"transition-all duration-300 bg-gray-200 hover:bg-blue-200 hover:scale-105 hover:shadow-lg p-4 rounded\">\n    All properties transition\n  </div>\n</div>\n\n<!-- ========== TRANSFORMS ========== -->\n<div class=\"grid grid-cols-3 gap-4 mb-6\">\n  <!-- Scale -->\n  <div class=\"bg-purple-500 text-white p-4 rounded text-center hover:scale-110 transition-transform duration-300\">\n    Scale up on hover\n  </div>\n  \n  <!-- Rotate -->\n  <div class=\"bg-purple-500 text-white p-4 rounded text-center hover:rotate-12 transition-transform duration-300\">\n    Rotate on hover\n  </div>\n  \n  <!-- Translate -->\n  <div class=\"bg-purple-500 text-white p-4 rounded text-center hover:translate-x-4 transition-transform duration-300\">\n    Move right on hover\n  </div>\n  \n  <!-- Multiple transforms -->\n  <div class=\"bg-purple-500 text-white p-4 rounded text-center hover:scale-110 hover:rotate-6 transition-transform duration-300\">\n    Scale + Rotate\n  </div>\n  \n  <!-- Axis-specific scale -->\n  <div class=\"bg-purple-500 text-white p-4 rounded text-center hover:scale-x-150 transition-transform duration-300\">\n    Scale horizontally only\n  </div>\n  \n  <!-- Negative translate -->\n  <div class=\"bg-purple-500 text-white p-4 rounded text-center hover:-translate-y-4 transition-transform duration-300\">\n    Move up on hover\n  </div>\n</div>\n\n<!-- ========== TRANSFORM ORIGIN ========== -->\n<div class=\"flex space-x-8 mb-6\">\n  <div class=\"bg-red-500 text-white p-4 rounded origin-top-left hover:scale-150 transition-transform duration-300\">\n    Scale from top-left\n  </div>\n  <div class=\"bg-red-500 text-white p-4 rounded origin-center hover:scale-150 transition-transform duration-300\">\n    Scale from center\n  </div>\n  <div class=\"bg-red-500 text-white p-4 rounded origin-bottom-right hover:scale-150 transition-transform duration-300\">\n    Scale from bottom-right\n  </div>\n</div>\n\n<!-- ========== BUILT-IN ANIMATIONS ========== -->\n<div class=\"flex space-x-8 mb-6 items-center\">\n  <div class=\"animate-spin bg-blue-500 w-12 h-12 rounded-full\"></div>\n  <div class=\"animate-pulse bg-green-500 w-12 h-12 rounded-full\"></div>\n  <div class=\"animate-bounce bg-yellow-500 w-12 h-12 rounded-full\"></div>\n  <div class=\"animate-ping bg-red-500 w-12 h-12 rounded-full\"></div>\n</div>\n\n<!-- ========== CUSTOM ANIMATIONS ========== -->\n<div class=\"animate-[spin_2s_linear_infinite] bg-purple-500 w-16 h-16 rounded-full mb-6\">\n</div>\n\n<!-- ========== GROUP HOVER (parent hover affects child) ========== -->\n<div class=\"group bg-gray-200 p-8 rounded-lg text-center hover:bg-gray-300 transition-colors cursor-pointer mb-6\">\n  <div class=\"bg-blue-500 text-white p-4 rounded-lg inline-block group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300\">\n    I scale and change color when parent is hovered!\n  </div>\n  <p class=\"mt-4 text-gray-600 group-hover:text-gray-800 transition-colors\">\n    Parent hover affects multiple children\n  </p>\n</div>\n\n<!-- ========== CARD WITH HOVER ANIMATIONS ========== -->\n<div class=\"max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300\">\n  <img src=\"https://picsum.photos/400/250\" alt=\"Card\" class=\"w-full hover:scale-105 transition-transform duration-500\" />\n  <div class=\"p-6\">\n    <h3 class=\"text-xl font-bold mb-2 hover:text-blue-500 transition-colors\">Animated Card</h3>\n    <p class=\"text-gray-600 mb-4\">This card has multiple hover animations</p>\n    <button class=\"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 transition-all duration-300\">\n      Hover me too!\n    </button>\n  </div>\n</div>\n\n<!-- ========== LOADING SPINNER ========== -->\n<div class=\"flex space-x-4 mb-6\">\n  <div class=\"animate-spin rounded-full h-10 w-10 border-4 border-blue-200 border-t-blue-600\"></div>\n  <div class=\"animate-spin rounded-full h-10 w-10 border-4 border-green-200 border-t-green-600\"></div>\n  <div class=\"animate-pulse flex space-x-2\">\n    <div class=\"w-2 h-2 bg-blue-500 rounded-full\"></div>\n    <div class=\"w-2 h-2 bg-blue-500 rounded-full\"></div>\n    <div class=\"w-2 h-2 bg-blue-500 rounded-full\"></div>\n  </div>\n</div>\n\n<!-- ========== SMOOTH SCROLL BUTTON ========== -->\n<button class=\"bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300\">\n  ✨ Fancy Animated Button ✨\n</button>",
        lineByLine: [
          "Line 2-4: Basic transition - transition duration-300 for smooth hover effects",
          "Line 7-12: Duration - Different animation speeds (150ms to 1000ms)",
          "Line 15-22: Transition properties - transition-colors, transition-transform, transition-all",
          "Line 25-46: Transforms - scale, rotate, translate, multiple transforms, axis-specific",
          "Line 49-55: Transform origin - Changes where scaling/rotation originates from",
          "Line 58-63: Built-in animations - spin, pulse, bounce, ping",
          "Line 66-68: Custom animation - animate-[spin_2s_linear_infinite] arbitrary syntax",
          "Line 71-77: Group hover - Parent hover affects multiple children simultaneously",
          "Line 80-90: Animated card - Multiple hover effects on different card parts",
          "Line 93-100: Loading spinner - Custom border animation for loading indicator",
          "Line 103-104: Fancy button - Gradient + shadow + scale on hover"
        ],
        simpleMeaning: "Add smooth transitions and animations to make interactions feel natural and engaging. Use transforms for performant animations.",
        output: "Interactive elements with smooth hover effects, spinning loaders, animated cards, and engaging user feedback.",
        note: "Always include transition class for smooth changes. Prefer transforms (scale, translate, rotate) over layout properties for better performance. Use group-hover for parent-child relationships."
      },
      {
        name: "10. Hover, Focus & States (all state variants)",
        description: "Tailwind provides pseudo-class variants for styling elements in different states (hover, focus, active, disabled, checked, etc.).",
        explanation: `🎯 HOVER STATE (when mouse is over element):
- hover:bg-blue-600 → Changes background on hover
- hover:scale-105 → Scales up on hover
- hover:shadow-lg → Adds shadow on hover
- hover:text-white → Changes text color on hover

🎯 FOCUS STATE (when element is focused via keyboard/tab):
- focus:border-blue-500 → Blue border when focused
- focus:ring-2 → Adds focus ring
- focus:ring-blue-200 → Colored focus ring
- focus:outline-none → Removes default outline (use with ring for accessibility)

🎯 FOCUS-VISIBLE (keyboard-only focus - better for accessibility):
- focus-visible:ring-2 → Ring only for keyboard focus (not mouse clicks)

🎯 ACTIVE STATE (while clicking/tapping):
- active:scale-95 → Slight shrink during click
- active:bg-blue-800 → Darker background during click

🎯 DISABLED STATE (when element is disabled):
- disabled:opacity-50 → Semi-transparent when disabled
- disabled:cursor-not-allowed → Changes cursor to not-allowed
- disabled:bg-gray-300 → Gray background when disabled

🎯 CHECKED STATE (for checkboxes and radios):
- checked:bg-blue-500 → Blue background when checked
- checked:border-transparent → Remove border when checked

🎯 VALID/INVALID STATES (form validation):
- valid:border-green-500 → Green border when valid
- invalid:border-red-500 → Red border when invalid

🎯 FIRST/LAST CHILD (first or last child in parent):
- first:rounded-t-lg → Round top corners of first child
- last:rounded-b-lg → Round bottom corners of last child
- first:mt-0 → No margin on first child
- last:mb-0 → No margin on last child

🎯 EVEN/ODD CHILDREN (alternating rows):
- even:bg-gray-50 → Gray background on even rows
- odd:bg-white → White background on odd rows

🎯 DARK MODE:
- dark:bg-gray-800 → Dark background in dark mode
- dark:text-white → White text in dark mode

🎯 PLACEHOLDER STYLING:
- placeholder:text-gray-400 → Gray placeholder text
- placeholder:italic → Italic placeholder

🎯 SELECTION STYLING (text highlight):
- selection:bg-yellow-200 → Yellow highlight background
- selection:text-black → Black highlighted text

🎯 OPEN STATE (for details/dropdown):
- open:bg-gray-100 → Background when open

🎯 EMPTY STATE (when element has no content):
- empty:hidden → Hide empty elements

🎯 FOCUS-WITHIN (parent highlighted when child focused):
- focus-within:shadow-lg → Parent gets shadow when child focused

🎯 TARGET STATE (element matching URL hash):
- target:bg-yellow-100 → Highlight when target of URL

🎯 VISITED LINKS:
- visited:text-purple-600 → Purple text after visiting

🎯 PEER STATES (style sibling based on sibling state):
- peer → Marks element to track
- peer-checked:bg-blue-500 → Style sibling when checkbox checked`,
        code: "<!-- ========== HOVER STATE ========== -->\n<button class=\"bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors\">\n  Hover over me!\n</button>\n\n<!-- ========== FOCUS STATE (accessibility) ========== -->\n<input \n  type=\"text\" \n  class=\"border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none p-2 rounded\"\n  placeholder=\"Click or tab to focus\"\n/>\n\n<!-- ========== FOCUS-VISIBLE (keyboard only) ========== -->\n<button class=\"focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none bg-gray-200 p-2 rounded\">\n  Keyboard-only focus ring\n</button>\n\n<!-- ========== ACTIVE STATE (while clicking) ========== -->\n<button class=\"bg-green-500 active:bg-green-700 active:scale-95 text-white px-4 py-2 rounded transition-all\">\n  Click me (I shrink on click)\n</button>\n\n<!-- ========== DISABLED STATE ========== -->\n<button disabled class=\"bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded\">\n  Disabled Button\n</button>\n\n<!-- ========== CHECKED STATE (checkbox/radio) ========== -->\n<label class=\"flex items-center space-x-2\">\n  <input type=\"checkbox\" class=\"rounded checked:bg-blue-500 checked:border-transparent\" />\n  <span>Check me to see blue background</span>\n</label>\n\n<!-- ========== VALIDATION STATES ========== -->\n<input \n  type=\"email\" \n  required\n  class=\"border-2 p-2 rounded valid:border-green-500 invalid:border-red-500 focus:valid:ring-green-200 focus:invalid:ring-red-200\"\n  placeholder=\"Enter email (valid/invalid states)\"\n/>\n\n<!-- ========== FIRST AND LAST CHILD ========== -->\n<div class=\"space-y-1\">\n  <div class=\"first:rounded-t-lg last:rounded-b-lg bg-gray-100 p-2\">First item</div>\n  <div class=\"bg-gray-100 p-2\">Middle item</div>\n  <div class=\"bg-gray-100 p-2\">Last item gets bottom radius</div>\n</div>\n\n<!-- ========== EVEN AND ODD CHILDREN ========== -->\n<div class=\"space-y-1\">\n  <div class=\"even:bg-gray-50 odd:bg-white p-2\">Row 1 (odd - white)</div>\n  <div class=\"even:bg-gray-50 odd:bg-white p-2\">Row 2 (even - gray)</div>\n  <div class=\"even:bg-gray-50 odd:bg-white p-2\">Row 3 (odd - white)</div>\n  <div class=\"even:bg-gray-50 odd:bg-white p-2\">Row 4 (even - gray)</div>\n</div>\n\n<!-- ========== DARK MODE ========== -->\n<div class=\"bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded\">\n  <h2 class=\"text-xl font-bold\">Dark Mode Demo</h2>\n  <p>This component adapts to dark mode</p>\n</div>\n\n<!-- ========== PLACEHOLDER STYLING ========== -->\n<input \n  type=\"text\" \n  class=\"border p-2 rounded placeholder:text-gray-400 placeholder:italic\"\n  placeholder=\"Custom styled placeholder\"\n/>\n\n<!-- ========== SELECTION STYLING ========== -->\n<div class=\"selection:bg-yellow-200 selection:text-black p-4 bg-gray-100 rounded\">\n  Select this text to see custom highlight color!\n</div>\n\n<!-- ========== OPEN STATE (details element) ========== -->\n<details class=\"open:bg-gray-100 p-2 rounded border\">\n  <summary class=\"cursor-pointer\">Click to expand</summary>\n  <p class=\"mt-2\">This content appears when open!</p>\n</details>\n\n<!-- ========== EMPTY STATE ========== -->\n<div class=\"empty:hidden bg-red-100 p-2\">\n  <!-- If this div has no content, it will be hidden -->\n</div>\n\n<!-- ========== FOCUS WITHIN (parent highlights when child focused) ========== -->\n<div class=\"focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-lg p-4 border rounded transition-all\">\n  <label class=\"block mb-2\">Focus within this div:</label>\n  <input type=\"text\" class=\"border p-2 rounded w-full\" placeholder=\"Click here to highlight parent\" />\n</div>\n\n<!-- ========== TARGET STATE (URL hash target) ========== -->\n<div id=\"section\" class=\"target:bg-yellow-100 p-4 border rounded\">\n  <h3>Target Section</h3>\n  <p>Go to URL with #section to highlight this</p>\n</div>\n\n<!-- ========== PEER STATES (style sibling based on sibling state) ========== -->\n<div>\n  <input type=\"checkbox\" id=\"agree\" class=\"peer\" />\n  <label for=\"agree\" class=\"peer-checked:bg-green-500 peer-checked:text-white block p-2 rounded transition-colors\">\n    I agree to terms\n  </label>\n  <p class=\"text-sm text-gray-500 peer-checked:text-green-600 transition-colors mt-1\">\n    Checkbox affects multiple elements!\n  </p>\n</div>\n\n<!-- ========== COMBINING MULTIPLE STATES ========== -->\n<button class=\"\n  bg-blue-500 \n  hover:bg-blue-700 \n  active:bg-blue-800 \n  focus:ring-2 \n  focus:ring-blue-300 \n  disabled:opacity-50 \n  disabled:cursor-not-allowed\n  text-white px-6 py-2 rounded-lg transition-all\n\">\n  Button with all states styled\n</button>",
        lineByLine: [
          "Line 2-4: hover - Changes background when mouse hovers",
          "Line 7-11: focus - Blue border and ring when input is focused",
          "Line 14-16: focus-visible - Ring only for keyboard (not mouse clicks)",
          "Line 19-21: active - Shrinks and darkens while clicking",
          "Line 24-26: disabled - Opacity and cursor change for disabled elements",
          "Line 29-32: checked - Blue background when checkbox is checked",
          "Line 35-38: valid/invalid - Green/red borders for form validation",
          "Line 41-46: first/last - Rounds corners of first and last children",
          "Line 49-54: even/odd - Alternating row colors for lists/tables",
          "Line 57-60: dark - Dark mode variants for theme switching",
          "Line 63-66: placeholder - Custom styling for input placeholder text",
          "Line 69-71: selection - Custom highlight color for selected text",
          "Line 74-78: open - Styles details element when expanded",
          "Line 81-83: empty - Hides element when it has no content",
          "Line 86-90: focus-within - Parent element highlights when child focused",
          "Line 93-97: target - Element highlighted when matching URL hash",
          "Line 100-107: peer - Checkbox affects multiple sibling elements",
          "Line 110-119: multiple states - Combining all states in one element"
        ],
        simpleMeaning: "Style elements differently when hovered, focused, active, disabled, checked, or in various states and positions for better user interaction.",
        output: "Fully interactive elements that respond visually to every user action - from hover to focus to validation states.",
        note: "Always provide focus styles for accessibility. Use focus-visible instead of focus for non-intrusive focus rings. Combine multiple states for comprehensive styling."
      }
    ]
  },
 


  advanced: {
    title: "🚀 Advanced Tailwind CSS - Professional Techniques",
    topics: [
      {
        name: "1. Custom Theme Configuration - Complete Guide",
        description: "Extend Tailwind's default theme with custom colors, fonts, spacing, breakpoints, animations, shadows, and more in tailwind.config.js for complete design system control.",
        explanation: `🎨 WHY CUSTOMIZE TAILWIND?
Tailwind's default theme is great, but every project needs its own design system. Customizing Tailwind lets you:
- Match your brand colors exactly
- Use your preferred fonts
- Create consistent spacing that matches your design
- Add custom animations for brand personality
- Define breakpoints for your specific devices

🔧 CUSTOM COLORS - Building a Design System:
colors: {
  'brand': '#ff5733',           // Primary brand color
  'brand-dark': '#cc4400',      // Darker variant
  'brand-light': '#ff8866',     // Lighter variant
  'primary': '#3b82f6',         // Main action color
  'secondary': '#6b7280',       // Secondary elements
  'success': '#10b981',         // Success states
  'warning': '#f59e0b',         // Warning states
  'error': '#ef4444',           // Error states
}

📝 CUSTOM FONTS - Typography System:
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'],     // Body text
  'display': ['Poppins', 'cursive'],                // Headings
  'mono': ['Fira Code', 'monospace'],               // Code blocks
}

📏 CUSTOM SPACING - Consistent Rhythm:
spacing: {
  '128': '32rem',    // 512px - Extra large spacing
  '144': '36rem',    // 576px
  '160': '40rem',    // 640px - Hero section padding
}

🎬 CUSTOM ANIMATIONS - Brand Personality:
animation: {
  'wiggle': 'wiggle 0.5s ease-in-out infinite',     // Fun wiggle effect
  'float': 'float 3s ease-in-out infinite',         // Floating animation
  'glow': 'glow 2s ease-in-out infinite',           // Pulsing glow
  'slide-up': 'slide-up 0.3s ease-out',             // Modal animation
  'scale-in': 'scale-in 0.2s ease-out',             // Popup animation
}

🎯 CUSTOM BREAKPOINTS - Device-Specific:
screens: {
  'xs': '475px',     // Extra small devices
  'sm': '640px',     // Tablets
  'md': '768px',     // Small laptops
  'lg': '1024px',    // Desktops
  'xl': '1280px',    // Large desktops
  '2xl': '1536px',   // Extra large
  '3xl': '1920px',   // Ultra wide
}

✨ CUSTOM SHADOWS - Depth System:
boxShadow: {
  'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  'glow': '0 0 15px rgba(59, 130, 246, 0.5)',
  'neon': '0 0 5px theme(colors.blue.500), 0 0 20px theme(colors.blue.500)',
  'soft-xl': '0 20px 27px -10px rgba(0, 0, 0, 0.05)',
}

🖼️ CUSTOM GRADIENTS - Visual Interest:
backgroundImage: {
  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
}

🔌 OFFICIAL PLUGINS - Enhanced Features:
- @tailwindcss/forms → Beautiful form elements
- @tailwindcss/typography → Blog post styling
- @tailwindcss/aspect-ratio → Fixed aspect ratios
- @tailwindcss/container-queries → Responsive components

💡 BEST PRACTICE:
Always use 'extend' to add to the default theme rather than overriding completely. This preserves Tailwind's default utilities while adding your custom ones.`,
        code: "// tailwind.config.js - Complete Advanced Configuration\n/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    './app/**/*.{js,ts,jsx,tsx,mdx}',\n    './pages/**/*.{js,ts,jsx,tsx}',\n    './components/**/*.{js,ts,jsx,tsx}',\n  ],\n  darkMode: 'class',\n  theme: {\n    extend: {\n      // ========== CUSTOM COLORS ==========\n      colors: {\n        'brand': {\n          50: '#fff2ed',\n          100: '#ffe3d9',\n          200: '#ffc7b3',\n          300: '#ffa38a',\n          400: '#ff7659',\n          500: '#ff5733',  // Primary brand color\n          600: '#e6441a',\n          700: '#cc3300',\n          800: '#a82900',\n          900: '#8a2200',\n          950: '#4a1000',\n        },\n        'primary': '#3b82f6',\n        'secondary': '#6b7280',\n        'success': '#10b981',\n        'warning': '#f59e0b',\n        'error': '#ef4444',\n      },\n      \n      // ========== CUSTOM FONTS ==========\n      fontFamily: {\n        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],\n        'display': ['Poppins', 'cursive'],\n        'mono': ['Fira Code', 'Courier New', 'monospace'],\n        'brand': ['Montserrat', 'sans-serif'],\n      },\n      \n      // ========== CUSTOM SPACING ==========\n      spacing: {\n        '128': '32rem',\n        '144': '36rem',\n        '160': '40rem',\n        '192': '48rem',\n        '224': '56rem',\n      },\n      \n      // ========== CUSTOM FONT SIZES ==========\n      fontSize: {\n        'xxs': ['0.625rem', { lineHeight: '0.75rem' }],\n        '3xl': ['2rem', { lineHeight: '2.5rem' }],\n        '4xl': ['2.5rem', { lineHeight: '3rem' }],\n        '5xl': ['3rem', { lineHeight: '3.5rem' }],\n      },\n      \n      // ========== CUSTOM BORDER RADIUS ==========\n      borderRadius: {\n        '4xl': '2rem',\n        '5xl': '2.5rem',\n        '6xl': '3rem',\n      },\n      \n      // ========== CUSTOM ANIMATIONS ==========\n      animation: {\n        'wiggle': 'wiggle 0.5s ease-in-out infinite',\n        'float': 'float 3s ease-in-out infinite',\n        'glow': 'glow 2s ease-in-out infinite',\n        'spin-slow': 'spin 3s linear infinite',\n        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',\n        'slide-up': 'slide-up 0.3s ease-out',\n        'slide-down': 'slide-down 0.3s ease-out',\n        'scale-in': 'scale-in 0.2s ease-out',\n        'fade-in': 'fade-in 0.3s ease-out',\n      },\n      \n      // ========== KEYFRAMES FOR CUSTOM ANIMATIONS ==========\n      keyframes: {\n        wiggle: {\n          '0%, 100%': { transform: 'rotate(-3deg)' },\n          '50%': { transform: 'rotate(3deg)' },\n        },\n        float: {\n          '0%, 100%': { transform: 'translateY(0px)' },\n          '50%': { transform: 'translateY(-10px)' },\n        },\n        glow: {\n          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },\n          '50%': { opacity: 0.7, filter: 'brightness(1.2)' },\n        },\n        'slide-up': {\n          '0%': { transform: 'translateY(100%)', opacity: '0' },\n          '100%': { transform: 'translateY(0)', opacity: '1' },\n        },\n        'slide-down': {\n          '0%': { transform: 'translateY(-100%)', opacity: '0' },\n          '100%': { transform: 'translateY(0)', opacity: '1' },\n        },\n        'scale-in': {\n          '0%': { transform: 'scale(0.9)', opacity: '0' },\n          '100%': { transform: 'scale(1)', opacity: '1' },\n        },\n        'fade-in': {\n          '0%': { opacity: '0' },\n          '100%': { opacity: '1' },\n        },\n      },\n      \n      // ========== CUSTOM BREAKPOINTS ==========\n      screens: {\n        'xs': '475px',\n        '3xl': '1920px',\n        '4xl': '2560px',\n        'portrait': { 'raw': '(orientation: portrait)' },\n        'landscape': { 'raw': '(orientation: landscape)' },\n        'dark-mode': { 'raw': '(prefers-color-scheme: dark)' },\n      },\n      \n      // ========== CUSTOM BACKGROUND IMAGES ==========\n      backgroundImage: {\n        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',\n        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',\n        'hero-pattern': \"url('/images/hero-pattern.svg')\",\n        'noise-pattern': \"url('/images/noise.png')\",\n      },\n      \n      // ========== CUSTOM BOX SHADOWS ==========\n      boxShadow: {\n        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',\n        'glow': '0 0 15px rgba(59, 130, 246, 0.5)',\n        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.6)',\n        'neon': '0 0 5px theme(colors.blue.500), 0 0 20px theme(colors.blue.500)',\n        'neon-pink': '0 0 5px theme(colors.pink.500), 0 0 20px theme(colors.pink.500)',\n        'soft-xl': '0 20px 27px -10px rgba(0, 0, 0, 0.05)',\n        'soft-2xl': '0 30px 40px -15px rgba(0, 0, 0, 0.08)',\n      },\n      \n      // ========== CUSTOM OPACITY ==========\n      opacity: {\n        '15': '0.15',\n        '35': '0.35',\n        '85': '0.85',\n      },\n      \n      // ========== CUSTOM Z-INDEX ==========\n      zIndex: {\n        '60': '60',\n        '70': '70',\n        '80': '80',\n        '90': '90',\n        '100': '100',\n      },\n    },\n  },\n  \n  // ========== TAILWIND OFFICIAL PLUGINS ==========\n  plugins: [\n    require('@tailwindcss/forms'),\n    require('@tailwindcss/typography'),\n    require('@tailwindcss/aspect-ratio'),\n    require('@tailwindcss/container-queries'),\n    require('@tailwindcss/line-clamp'),\n  ],\n};\n\n// ========== USING CUSTOM CONFIGURATION ==========\n// Example component using all custom utilities\n<div class=\"\n  bg-brand-500 \n  font-display \n  p-128 \n  rounded-4xl \n  shadow-neon \n  animate-float\n  text-white\n\">\n  Custom Brand Component\n</div>\n\n// Responsive with custom breakpoints\n<div class=\"grid grid-cols-1 xs:grid-cols-2 3xl:grid-cols-4 gap-4\">\n  Responsive grid with custom breakpoints\n</div>\n\n// Custom animations\n<button class=\"animate-scale-in hover:animate-wiggle\">\n  Animated Button\n</button>\n\n// Custom shadows\n<div class=\"shadow-soft-2xl hover:shadow-neon transition-shadow\">\n  Card with custom shadows\n</div>",
        lineByLine: [
          "Line 4-7: content - Tells Tailwind which files to scan for classes",
          "Line 8: darkMode - Enables dark mode with class strategy",
          "Line 11-28: colors - Full brand color palette with 10 shades",
          "Line 31-36: fontFamily - Custom fonts including Inter, Poppins, Fira Code",
          "Line 39-43: spacing - Extra large spacing values (128rem to 224rem)",
          "Line 46-50: fontSize - Custom font sizes xxs to 5xl",
          "Line 53-57: borderRadius - Extra large radius values",
          "Line 60-68: animation - Custom animations like wiggle, float, glow",
          "Line 71-102: keyframes - Defines the actual animation behavior",
          "Line 105-111: screens - Custom breakpoints xs, 3xl, 4xl, orientation",
          "Line 114-118: backgroundImage - Custom gradients and patterns",
          "Line 121-128: boxShadow - Custom shadows like glow, neon, soft",
          "Line 131-134: opacity - Additional opacity values",
          "Line 137-142: zIndex - Extended z-index values",
          "Line 146-153: plugins - Official Tailwind plugins for enhanced features",
          "Line 156-163: Example usage - Demonstrates all custom utilities"
        ],
        simpleMeaning: "Custom Tailwind configuration lets you create a complete design system that matches your brand perfectly - colors, fonts, spacing, animations, and more.",
        output: "Fully customized Tailwind setup with brand colors, custom fonts, animations, and professional shadows ready to use throughout your app.",
        note: "Always use 'extend' to preserve Tailwind defaults. Install plugins via npm first. Test custom animations thoroughly. Use CSS variables for dynamic theming."
      },
      {
        name: "2. Dark Mode Implementation - Complete Guide",
        description: "Tailwind's dark mode allows you to style elements differently when dark mode is active, using the dark: variant with proper persistence across sessions and flash prevention.",
        explanation: `🌙 WHAT IS DARK MODE?
Dark mode is a color scheme that uses light-colored text and UI elements on dark backgrounds. It reduces eye strain in low-light conditions and saves battery on OLED screens.

🎯 DARK MODE STRATEGIES:
1. 'class' strategy (recommended for manual toggle):
   - You control when dark mode is active by adding/removing 'dark' class
   - Perfect for user-controlled theme switching
   - Works with localStorage to remember preference

2. 'media' strategy (automatic):
   - Follows system preference automatically
   - No user control over theme
   - Good for simple implementations

🔧 HOW TO IMPLEMENT:
1. Configure darkMode: 'class' in tailwind.config.js
2. Add 'dark' class to html element when dark mode is active
3. Use 'dark:' variant in your classes
4. Provide toggle component for user control
5. Save preference to localStorage
6. Add script to prevent FOUT (Flash of Unstyled Theme)

📝 DARK MODE CLASSES:
- dark:bg-gray-900 → Dark background in dark mode
- dark:text-white → White text in dark mode
- dark:border-gray-700 → Darker borders
- dark:hover:bg-gray-800 → Hover state in dark mode

💾 PERSISTENCE STRATEGY:
1. Check localStorage for saved preference on load
2. Check system preference if no saved preference
3. Save user's choice when they toggle
4. Apply theme immediately to avoid flash

🚫 FLASH PREVENTION:
Add inline script in <head> that runs before React hydrates to check localStorage and apply dark class immediately, preventing the flash of wrong theme.

🎨 ACCESSIBILITY:
- Maintain sufficient contrast ratios
- Don't rely on color alone for information
- Test with multiple themes
- Provide manual toggle for user control

📱 SYSTEM PREFERENCE LISTENER:
Listen to matchMedia('(prefers-color-scheme: dark)') to automatically update when user changes OS theme (only if they haven't manually set a preference).`,
        code: "// ========== STEP 1: Configure tailwind.config.js ==========\nmodule.exports = {\n  darkMode: 'class', // Use class strategy for manual toggle\n  // darkMode: 'media' // Use system preference automatically\n  theme: {\n    extend: {},\n  },\n}\n\n// ========== STEP 2: Complete Dark Mode Toggle Component ==========\n// app/components/DarkModeToggle.jsx\n'use client';\nimport { useState, useEffect } from 'react';\n\nexport default function DarkModeToggle() {\n  const [isDark, setIsDark] = useState(false);\n  const [mounted, setMounted] = useState(false);\n  \n  // On mount, check saved preference or system preference\n  useEffect(() => {\n    setMounted(true);\n    const savedTheme = localStorage.getItem('theme');\n    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);\n    \n    setIsDark(shouldBeDark);\n    if (shouldBeDark) {\n      document.documentElement.classList.add('dark');\n    }\n  }, []);\n  \n  // Toggle dark mode\n  const toggleDarkMode = () => {\n    const newDarkMode = !isDark;\n    setIsDark(newDarkMode);\n    \n    if (newDarkMode) {\n      document.documentElement.classList.add('dark');\n      localStorage.setItem('theme', 'dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n      localStorage.setItem('theme', 'light');\n    }\n  };\n  \n  // Listen to system preference changes\n  useEffect(() => {\n    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');\n    const handleChange = (e) => {\n      // Only update if user hasn't manually set a preference\n      if (!localStorage.getItem('theme')) {\n        const shouldBeDark = e.matches;\n        setIsDark(shouldBeDark);\n        if (shouldBeDark) {\n          document.documentElement.classList.add('dark');\n        } else {\n          document.documentElement.classList.remove('dark');\n        }\n      }\n    };\n    \n    mediaQuery.addEventListener('change', handleChange);\n    return () => mediaQuery.removeEventListener('change', handleChange);\n  }, []);\n  \n  // Prevent hydration mismatch\n  if (!mounted) return null;\n  \n  return (\n    <button\n      onClick={toggleDarkMode}\n      className=\"p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors\"\n      aria-label=\"Toggle dark mode\"\n    >\n      {isDark ? (\n        // Sun icon for light mode\n        <svg className=\"w-5 h-5 text-yellow-500\" fill=\"currentColor\" viewBox=\"0 0 20 20\">\n          <path fillRule=\"evenodd\" d=\"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z\" clipRule=\"evenodd\" />\n        </svg>\n      ) : (\n        // Moon icon for dark mode\n        <svg className=\"w-5 h-5 text-gray-700 dark:text-gray-300\" fill=\"currentColor\" viewBox=\"0 0 20 20\">\n          <path d=\"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z\" />\n        </svg>\n      )}\n    </button>\n  );\n}\n\n// ========== STEP 3: Flash Prevention Script (app/layout.js) ==========\n// Add this script to your layout.js <head> to prevent flash of wrong theme\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\" suppressHydrationWarning>\n      <head>\n        <script\n          dangerouslySetInnerHTML={{\n            __html: `\n              (function() {\n                const theme = localStorage.getItem('theme');\n                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n                if (theme === 'dark' || (!theme && prefersDark)) {\n                  document.documentElement.classList.add('dark');\n                }\n              })();\n            `,\n          }}\n        />\n      </head>\n      <body>{children}</body>\n    </html>\n  );\n}\n\n// ========== STEP 4: Dark Mode Styled Components ==========\n// Example page with dark mode styles\n// app/page.jsx\nexport default function HomePage() {\n  return (\n    <div className=\"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300\">\n      <header className=\"bg-gray-100 dark:bg-gray-800 shadow-md\">\n        <nav className=\"container mx-auto px-6 py-4\">\n          <div className=\"flex justify-between items-center\">\n            <h1 className=\"text-2xl font-bold text-gray-800 dark:text-white\">\n              My App\n            </h1>\n            <DarkModeToggle />\n          </div>\n        </nav>\n      </header>\n      \n      <main className=\"container mx-auto px-6 py-8\">\n        <div className=\"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6\">\n          <h2 className=\"text-xl font-semibold text-gray-900 dark:text-white mb-4\">\n            Welcome to Dark Mode\n          </h2>\n          <p className=\"text-gray-600 dark:text-gray-300 mb-4\">\n            This content automatically adapts to your theme preference!\n          </p>\n          <button className=\"bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors\">\n            Interactive Button\n          </button>\n        </div>\n        \n        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">\n          {[1, 2, 3].map(i => (\n            <div key={i} className=\"bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700\">\n              <h3 className=\"text-lg font-medium text-gray-900 dark:text-white\">Card {i}</h3>\n              <p className=\"text-gray-500 dark:text-gray-400 mt-2\">\n                This card looks great in both light and dark mode!\n              </p>\n            </div>\n          ))}\n        </div>\n      </main>\n      \n      <footer className=\"bg-gray-100 dark:bg-gray-800 mt-12 py-6\">\n        <div className=\"container mx-auto px-6 text-center text-gray-600 dark:text-gray-400\">\n          © 2024 My App - Dark Mode Demo\n        </div>\n      </footer>\n    </div>\n  );\n}\n\n// ========== STEP 5: Dark Mode Specific Components ==========\n// Reusable dark mode card component\nconst DarkModeCard = ({ title, children, className = '' }) => (\n  <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all ${className}`}>\n    {title && (\n      <div className=\"border-b border-gray-200 dark:border-gray-700 px-6 py-4\">\n        <h3 className=\"text-lg font-semibold text-gray-900 dark:text-white\">{title}</h3>\n      </div>\n    )}\n    <div className=\"px-6 py-4\">\n      {children}\n    </div>\n  </div>\n);\n\n// Dark mode images (different images for light/dark)\nconst ThemedImage = ({ lightSrc, darkSrc, alt, ...props }) => (\n  <>\n    <img src={lightSrc} alt={alt} className=\"dark:hidden\" {...props} />\n    <img src={darkSrc} alt={alt} className=\"hidden dark:block\" {...props} />\n  </>\n);\n\n// Dark mode specific CSS variables\n// globals.css\n:root {\n  --bg-primary: #ffffff;\n  --text-primary: #111827;\n}\n\n.dark {\n  --bg-primary: #111827;\n  --text-primary: #ffffff;\n}\n\n// Using CSS variables with Tailwind\n<div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>\n  Dynamic theming with CSS variables\n</div>",
        lineByLine: [
          "Line 2-7: darkMode: 'class' - Configures dark mode to use 'dark' class on html element",
          "Line 13-60: DarkModeToggle Component - Complete React component for theme switching",
          "Line 15-16: useState hooks - Tracks dark mode state and mounted status",
          "Line 19-28: useEffect - Checks localStorage and system preference on mount",
          "Line 31-42: toggleDarkMode - Toggles 'dark' class and saves to localStorage",
          "Line 45-59: System preference listener - Updates when OS theme changes",
          "Line 62-63: mounted check - Prevents hydration mismatch between server and client",
          "Line 66-96: Toggle button UI - Sun and moon icons with proper styling",
          "Line 99-121: Flash prevention script - Runs before React hydrates",
          "Line 124-173: Dark mode styles - Example page using dark: variants",
          "Line 176-187: DarkModeCard component - Reusable dark-aware card component",
          "Line 190-196: ThemedImage component - Different images for light/dark modes",
          "Line 199-208: CSS variables - Dynamic theming with CSS custom properties"
        ],
        simpleMeaning: "Dark mode lets you provide alternative styles for users who prefer dark interfaces, using the dark: variant with persistence across sessions and no flash of wrong theme.",
        output: "Fully functional dark mode with toggle button, preference saved to localStorage, system preference detection, and smooth transitions between themes.",
        note: "Always add flash prevention script in <head>. Use mounted state to prevent hydration errors. Provide manual toggle even when using system preference. Test contrast ratios in both modes."
      },
      {
        name: "3. Responsive Design Patterns & Best Practices",
        description: "Master responsive design with Tailwind's mobile-first approach, container queries, and advanced responsive patterns.",
        explanation: `📱 MOBILE-FIRST DESIGN PRINCIPLES:
Tailwind uses mobile-first breakpoints, meaning base styles apply to all screen sizes, and breakpoint prefixes add styles for larger screens.

🎯 RESPONSIVE PATTERNS:
1. Stack to Row Pattern:
   - Mobile: vertical stack (flex-col)
   - Desktop: horizontal row (md:flex-row)

2. Responsive Grid:
   - Mobile: 1 column
   - Tablet: 2 columns  
   - Desktop: 4 columns

3. Responsive Typography:
   - Mobile: smaller text
   - Desktop: progressively larger text

4. Responsive Spacing:
   - Mobile: compact padding
   - Desktop: generous padding

5. Hidden/Visible Pattern:
   - Mobile: show mobile nav
   - Desktop: show desktop nav

🔧 CONTAINER QUERIES:
Container queries allow components to respond to their parent container size, not viewport size.

📐 COMMON BREAKPOINT STRATEGIES:
- xs: 475px (small phones)
- sm: 640px (large phones)
- md: 768px (tablets)
- lg: 1024px (small laptops)
- xl: 1280px (desktops)
- 2xl: 1536px (large screens)

🎨 RESPONSIVE DESIGN SYSTEM:
1. Typography scale based on viewport
2. Spacing scale based on viewport
3. Layout shifts at logical breakpoints
4. Touch targets on mobile (min 44px)
5. Readable line lengths (45-75 characters)`,
        code: "<!-- ========== MOBILE-FIRST GRID PATTERNS ========== -->\n<!-- Basic responsive grid -->\n<div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4\">\n  <div class=\"p-4 bg-blue-100 rounded\">1 column on mobile, 4 on desktop</div>\n  <div class=\"p-4 bg-blue-100 rounded\">Auto-adjusts at each breakpoint</div>\n  <div class=\"p-4 bg-blue-100 rounded\">Perfect for card layouts</div>\n  <div class=\"p-4 bg-blue-100 rounded\">Responsive card grid</div>\n</div>\n\n<!-- ========== RESPONSIVE FLEX PATTERNS ========== -->\n<!-- Stack to row pattern (most common) -->\n<div class=\"flex flex-col md:flex-row gap-4\">\n  <div class=\"flex-1 bg-green-100 p-4 rounded\">\n    On mobile: stacks vertically\n  </div>\n  <div class=\"flex-1 bg-green-100 p-4 rounded\">\n    On desktop: side by side\n  </div>\n</div>\n\n<!-- Responsive navigation bar -->\n<nav class=\"flex flex-wrap justify-between items-center p-4 bg-gray-800 text-white\">\n  <div class=\"text-xl font-bold\">Logo</div>\n  \n  <!-- Mobile menu button (visible on mobile only) -->\n  <button class=\"block md:hidden\">\n    <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"></path>\n    </svg>\n  </button>\n  \n  <!-- Desktop menu (hidden on mobile) -->\n  <div class=\"hidden md:flex space-x-4\">\n    <a href=\"#\" class=\"hover:text-gray-300\">Home</a>\n    <a href=\"#\" class=\"hover:text-gray-300\">About</a>\n    <a href=\"#\" class=\"hover:text-gray-300\">Contact</a>\n  </div>\n</nav>\n\n<!-- ========== RESPONSIVE TYPOGRAPHY ========== -->\n<h1 class=\"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4\">\n  Responsive Heading\n</h1>\n\n<p class=\"text-sm sm:text-base lg:text-lg leading-relaxed\">\n  This text grows with screen size for optimal readability on all devices.\n  Mobile gets smaller text, desktop gets larger text.\n</p>\n\n<!-- ========== RESPONSIVE SPACING ========== -->\n<div class=\"p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16\">\n  <div class=\"space-y-2 sm:space-y-4 md:space-y-6\">\n    <div class=\"bg-yellow-100 p-4 rounded\">Responsive padding and spacing</div>\n    <div class=\"bg-yellow-100 p-4 rounded\">More space on larger screens</div>\n  </div>\n</div>\n\n<!-- ========== RESPONSIVE HIDE/SHOW PATTERNS ========== -->\n<!-- Mobile-only content -->\n<div class=\"block md:hidden\">\n  This content only shows on mobile devices\n</div>\n\n<!-- Desktop-only content -->\n<div class=\"hidden md:block\">\n  This content only shows on desktop devices\n</div>\n\n<!-- Tablet and up content -->\n<div class=\"hidden sm:block\">\n  Shows on tablet and larger screens\n</div>\n\n<!-- ========== RESPONSIVE ORDERING ========== -->\n<div class=\"flex flex-col md:flex-row\">\n  <div class=\"order-2 md:order-1 bg-purple-100 p-4 rounded\">\n    On mobile: appears second\n    On desktop: appears first\n  </div>\n  <div class=\"order-1 md:order-2 bg-purple-200 p-4 rounded\">\n    On mobile: appears first\n    On desktop: appears second\n  </div>\n</div>\n\n<!-- ========== RESPONSIVE WIDTHS ========== -->\n<div class=\"w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto bg-pink-100 p-4 rounded\">\n  Width changes at each breakpoint: 100% → 75% → 66% → 50% → 33%\n</div>\n\n<!-- ========== CONTAINER QUERIES (modern responsive) ========== -->\n<!-- Install: npm install @tailwindcss/container-queries -->\n<div class=\"@container\">\n  <div class=\"flex flex-col @md:flex-row gap-4\">\n    <div class=\"@md:w-1/2 bg-indigo-100 p-4 rounded\">\n      Container query - responds to parent width, not viewport\n    </div>\n    <div class=\"@md:w-1/2 bg-indigo-100 p-4 rounded\">\n      This is perfect for reusable components\n    </div>\n  </div>\n</div>\n\n<!-- ========== RESPONSIVE GRID WITH AUTO-FIT ========== -->\n<div class=\"grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6\">\n  <div class=\"bg-gray-100 p-6 rounded-lg shadow\">Card 1 - Auto adjusts columns</div>\n  <div class=\"bg-gray-100 p-6 rounded-lg shadow\">Card 2 - Based on container width</div>\n  <div class=\"bg-gray-100 p-6 rounded-lg shadow\">Card 3 - Minimum 280px each</div>\n  <div class=\"bg-gray-100 p-6 rounded-lg shadow\">Card 4 - Responsive card grid</div>\n</div>\n\n<!-- ========== RESPONSIVE MULTI-COLUMN LAYOUT ========== -->\n<div class=\"columns-1 sm:columns-2 lg:columns-3 gap-8\">\n  <div class=\"break-inside-avoid mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded\">\n    Column 1 - Masonry-style layout\n  </div>\n  <div class=\"break-inside-avoid mb-6 bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded\">\n    Column 2 - Items flow naturally\n  </div>\n  <div class=\"break-inside-avoid mb-6 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded\">\n    Column 3 - Perfect for galleries\n  </div>\n</div>\n\n<!-- ========== RESPONSIVE ASPECT RATIOS ========== -->\n<div class=\"grid grid-cols-2 gap-4\">\n  <div class=\"aspect-square bg-blue-500 rounded-lg\">\n    1:1 Square on all devices\n  </div>\n  <div class=\"aspect-video bg-green-500 rounded-lg\">\n    16:9 Video aspect ratio\n  </div>\n  <div class=\"aspect-[4/3] bg-purple-500 rounded-lg\">\n    4:3 Traditional photo ratio\n  </div>\n  <div class=\"aspect-[2/1] bg-pink-500 rounded-lg\">\n    2:1 Panoramic ratio\n  </div>\n</div>\n\n<!-- ========== RESPONSIVE FORM LAYOUT ========== -->\n<form class=\"max-w-2xl mx-auto space-y-4\">\n  <div class=\"flex flex-col md:flex-row md:items-center gap-4\">\n    <label class=\"md:w-32 font-medium\">Name:</label>\n    <input type=\"text\" class=\"flex-1 border rounded px-3 py-2\" placeholder=\"Your name\" />\n  </div>\n  \n  <div class=\"flex flex-col md:flex-row md:items-center gap-4\">\n    <label class=\"md:w-32 font-medium\">Email:</label>\n    <input type=\"email\" class=\"flex-1 border rounded px-3 py-2\" placeholder=\"your@email.com\" />\n  </div>\n  \n  <div class=\"flex flex-col md:flex-row md:items-start gap-4\">\n    <label class=\"md:w-32 font-medium\">Message:</label>\n    <textarea class=\"flex-1 border rounded px-3 py-2\" rows=\"4\" placeholder=\"Your message\"></textarea>\n  </div>\n  \n  <div class=\"flex justify-end\">\n    <button class=\"bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600\">\n      Submit\n    </button>\n  </div>\n</form>\n\n<!-- ========== RESPONSIVE TYPOGRAPHY WITH PROSE ========== -->\n<article class=\"prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none\">\n  <h1>Responsive Blog Article</h1>\n  <p>This article uses the Typography plugin with responsive sizes. Text size, line height, and spacing all adjust based on screen size for optimal readability.</p>\n  <h2>Subheading</h2>\n  <p>Content automatically scales for the best reading experience on any device, from mobile phones to ultrawide monitors.</p>\n</article>\n\n<!-- ========== RESPONSIVE POSITIONING ========== -->\n<div class=\"relative h-64 bg-gray-200 rounded\">\n  <div class=\"absolute bottom-4 right-4 sm:top-4 sm:left-4 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-blue-500 text-white p-2 rounded\">\n    Position changes responsively!\n  </div>\n</div>\n\n<!-- ========== RESPONSIVE BORDER RADIUS ========== -->\n<div class=\"rounded-none sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white text-center\">\n  Border radius increases with screen size\n</div>",
        lineByLine: [
          "Line 2-7: Responsive grid - 1 column mobile to 4 columns on desktop",
          "Line 10-17: Stack to row pattern - Mobile: column, desktop: row",
          "Line 20-44: Responsive navigation - Mobile hamburger, desktop horizontal nav",
          "Line 47-53: Responsive typography - Text size grows at each breakpoint",
          "Line 56-63: Responsive spacing - Padding increases with screen size",
          "Line 66-77: Hide/show patterns - Different content per device",
          "Line 80-87: Responsive ordering - Different order on mobile vs desktop",
          "Line 90-92: Responsive widths - Width changes at each breakpoint",
          "Line 95-103: Container queries - Respond to parent container size",
          "Line 106-112: Auto-fit grid - Responsive columns that auto-adjust",
          "Line 115-122: Multi-column masonry - Pinterest-style layout",
          "Line 125-134: Aspect ratios - Fixed ratios that work responsively",
          "Line 137-158: Responsive forms - Label and input layout adapts",
          "Line 161-168: Responsive prose - Typography scales with screen",
          "Line 171-174: Responsive positioning - Position changes at breakpoints",
          "Line 177-179: Responsive border radius - Radius increases with screen"
        ],
        simpleMeaning: "Master responsive design with Tailwind's mobile-first approach. Control layouts across all device sizes with breakpoint prefixes.",
        output: "Fully responsive layouts that adapt seamlessly from mobile phones to ultrawide desktop monitors.",
        note: "Always design mobile-first. Test on real devices. Use relative units (rem, em, vw, vh). Consider touch targets on mobile (minimum 44px)."
      },
      {
        name: "4. Advanced Flexbox Patterns",
        description: "Master complex flexbox layouts including holy grail, sticky footer, masonry, and responsive navigation patterns.",
        explanation: `🎯 ADVANCED FLEXBOX PATTERNS:

1. HOLY GRAIL LAYOUT:
- Header at top
- Footer at bottom  
- Left sidebar, main content, right sidebar in middle
- All columns same height
- Responsive: stack on mobile

2. STICKY FOOTER:
- Footer always at bottom
- Content pushes footer down
- No additional markup needed

3. MASONRY GRID:
- Variable height items
- Natural flow layout
- Perfect for Pinterest-style galleries

4. EQUAL HEIGHT COLUMNS:
- All columns same height
- Height based on tallest column
- Great for card layouts

5. CENTERING TRICKS:
- Perfect centering (horizontal + vertical)
- Absolute centering alternative
- Content-based centering

6. NESTED FLEXBOX:
- Flex container inside flex item
- Complex responsive layouts
- Component-based design

7. FLEX WRAP PATTERNS:
- Wrapping with gap
- Responsive card grids
- Gallery layouts

📏 FLEX PROPERTIES DEEP DIVE:
- flex: 1 1 0% (flex-1) - Grow, shrink, basis
- flex: 0 1 auto (flex-initial) - Don't grow, can shrink
- flex: 0 0 auto (flex-none) - Don't grow or shrink
- flex: 1 1 auto (flex-auto) - Grow and shrink based on content

🎨 ALIGNMENT MASTERCLASS:
- justify-content: Main axis alignment
- align-items: Cross axis alignment (single line)
- align-content: Cross axis alignment (multi-line)
- align-self: Individual item alignment
- place-content: Both axes simultaneously`,
        code: "<!-- ========== HOLY GRAIL LAYOUT ========== -->\n<div class=\"min-h-screen flex flex-col\">\n  <!-- Header -->\n  <header class=\"bg-blue-600 text-white p-4\">\n    <h1 class=\"text-2xl\">Header</h1>\n  </header>\n  \n  <!-- Main content area with sidebar -->\n  <div class=\"flex flex-1 flex-col md:flex-row\">\n    <!-- Left sidebar -->\n    <aside class=\"bg-gray-200 p-4 md:w-64\">\n      <h2 class=\"font-bold\">Left Sidebar</h2>\n      <ul class=\"mt-2 space-y-1\">\n        <li>Navigation</li>\n        <li>Links</li>\n        <li>Menu</li>\n      </ul>\n    </aside>\n    \n    <!-- Main content -->\n    <main class=\"flex-1 p-4 bg-white\">\n      <h2 class=\"text-xl font-bold\">Main Content</h2>\n      <p>This is the primary content area. It takes all remaining space.</p>\n    </main>\n    \n    <!-- Right sidebar -->\n    <aside class=\"bg-gray-200 p-4 md:w-64\">\n      <h2 class=\"font-bold\">Right Sidebar</h2>\n      <div class=\"mt-2\">\n        <p>Ads or related content</p>\n      </div>\n    </aside>\n  </div>\n  \n  <!-- Footer -->\n  <footer class=\"bg-gray-800 text-white p-4 text-center\">\n    <p>Footer - Always at bottom</p>\n  </footer>\n</div>\n\n<!-- ========== STICKY FOOTER WITH CONTENT ========== -->\n<div class=\"flex flex-col min-h-screen\">\n  <div class=\"flex-1\">\n    <!-- Your page content here -->\n    <div class=\"bg-yellow-100 p-8 rounded\">\n      <h2 class=\"text-2xl font-bold\">Main Content</h2>\n      <p>This content pushes the footer down naturally.</p>\n    </div>\n    <div class=\"bg-yellow-100 p-8 rounded mt-4\">\n      <p>More content here...</p>\n    </div>\n  </div>\n  \n  <footer class=\"bg-gray-800 text-white p-4 text-center\">\n    <p>Sticky Footer - Always visible at bottom</p>\n  </footer>\n</div>\n\n<!-- ========== MASONRY GRID WITH FLEX WRAP ========== -->\n<div class=\"flex flex-wrap gap-6\">\n  <div class=\"w-[calc(33.333%-1rem)] bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg shadow text-white\">\n    <h3 class=\"font-bold\">Item 1</h3>\n    <p>Short content</p>\n  </div>\n  <div class=\"w-[calc(33.333%-1rem)] bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg shadow text-white\">\n    <h3 class=\"font-bold\">Item 2</h3>\n    <p>This item has much longer content that takes up more vertical space naturally in the masonry layout.</p>\n  </div>\n  <div class=\"w-[calc(33.333%-1rem)] bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg shadow text-white\">\n    <h3 class=\"font-bold\">Item 3</h3>\n    <p>Medium content here</p>\n  </div>\n  <div class=\"w-[calc(33.333%-1rem)] bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg shadow text-white\">\n    <h3 class=\"font-bold\">Item 4</h3>\n    <p>Another item with some descriptive text about whatever topic is being discussed.</p>\n  </div>\n  <div class=\"w-[calc(33.333%-1rem)] bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-lg shadow text-white\">\n    <h3 class=\"font-bold\">Item 5</h3>\n    <p>Short</p>\n  </div>\n</div>\n\n<!-- ========== EQUAL HEIGHT CARDS ========== -->\n<div class=\"flex flex-wrap -mx-4\">\n  <div class=\"w-full md:w-1/3 px-4 mb-8\">\n    <div class=\"flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden\">\n      <img src=\"https://picsum.photos/400/200\" alt=\"Card\" class=\"w-full\" />\n      <div class=\"flex-1 p-6\">\n        <h3 class=\"text-xl font-bold mb-2\">Card 1</h3>\n        <p class=\"text-gray-600\">All cards in this row have equal height</p>\n      </div>\n      <div class=\"p-6 pt-0\">\n        <button class=\"bg-blue-500 text-white px-4 py-2 rounded\">Button</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"w-full md:w-1/3 px-4 mb-8\">\n    <div class=\"flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden\">\n      <img src=\"https://picsum.photos/400/201\" alt=\"Card\" class=\"w-full\" />\n      <div class=\"flex-1 p-6\">\n        <h3 class=\"text-xl font-bold mb-2\">Card 2 - Longer Title Here</h3>\n        <p class=\"text-gray-600\">This card has more text content than the others, but thanks to flex, all cards remain the same height.</p>\n      </div>\n      <div class=\"p-6 pt-0\">\n        <button class=\"bg-blue-500 text-white px-4 py-2 rounded\">Button</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"w-full md:w-1/3 px-4 mb-8\">\n    <div class=\"flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden\">\n      <img src=\"https://picsum.photos/400/199\" alt=\"Card\" class=\"w-full\" />\n      <div class=\"flex-1 p-6\">\n        <h3 class=\"text-xl font-bold mb-2\">Card 3</h3>\n        <p class=\"text-gray-600\">Short description here</p>\n      </div>\n      <div class=\"p-6 pt-0\">\n        <button class=\"bg-blue-500 text-white px-4 py-2 rounded\">Button</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- ========== PERFECT CENTERING TECHNIQUES ========== -->\n<!-- Method 1: Flex centering (most common) -->\n<div class=\"flex items-center justify-center h-64 bg-gray-100 rounded-lg\">\n  <div class=\"bg-blue-500 text-white p-4 rounded\">Perfectly Centered!</div>\n</div>\n\n<!-- Method 2: Grid centering -->\n<div class=\"grid place-items-center h-64 bg-gray-100 rounded-lg mt-4\">\n  <div class=\"bg-green-500 text-white p-4 rounded\">Grid Centering!</div>\n</div>\n\n<!-- Method 3: Margin auto centering -->\n<div class=\"flex h-64 bg-gray-100 rounded-lg mt-4\">\n  <div class=\"m-auto bg-purple-500 text-white p-4 rounded\">Margin Auto!</div>\n</div>\n\n<!-- ========== NESTED FLEXBOX PATTERNS ========== -->\n<div class=\"flex flex-col lg:flex-row gap-6\">\n  <!-- Sidebar with nested flex -->\n  <div class=\"lg:w-1/4 bg-gray-800 text-white p-4 rounded-lg\">\n    <h3 class=\"font-bold mb-4\">Sidebar</h3>\n    <div class=\"flex flex-col space-y-2\">\n      <a href=\"#\" class=\"hover:bg-gray-700 p-2 rounded\">Dashboard</a>\n      <a href=\"#\" class=\"hover:bg-gray-700 p-2 rounded\">Settings</a>\n      <a href=\"#\" class=\"hover:bg-gray-700 p-2 rounded\">Profile</a>\n    </div>\n  </div>\n  \n  <!-- Main content with nested flex columns -->\n  <div class=\"flex-1\">\n    <div class=\"bg-white rounded-lg shadow p-6\">\n      <h2 class=\"text-2xl font-bold mb-4\">Main Content</h2>\n      \n      <!-- Nested flex grid for stats -->\n      <div class=\"flex flex-wrap -mx-2\">\n        <div class=\"w-full sm:w-1/2 lg:w-1/4 px-2 mb-4\">\n          <div class=\"bg-blue-100 p-4 rounded\">\n            <p class=\"text-sm\">Total Users</p>\n            <p class=\"text-2xl font-bold\">10,234</p>\n          </div>\n        </div>\n        <div class=\"w-full sm:w-1/2 lg:w-1/4 px-2 mb-4\">\n          <div class=\"bg-green-100 p-4 rounded\">\n            <p class=\"text-sm\">Revenue</p>\n            <p class=\"text-2xl font-bold\">$45,678</p>\n          </div>\n        </div>\n        <div class=\"w-full sm:w-1/2 lg:w-1/4 px-2 mb-4\">\n          <div class=\"bg-yellow-100 p-4 rounded\">\n            <p class=\"text-sm\">Growth</p>\n            <p class=\"text-2xl font-bold\">+23%</p>\n          </div>\n        </div>\n        <div class=\"w-full sm:w-1/2 lg:w-1/4 px-2 mb-4\">\n          <div class=\"bg-red-100 p-4 rounded\">\n            <p class=\"text-sm\">Active</p>\n            <p class=\"text-2xl font-bold\">8,901</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- ========== FLEX WRAP WITH GAP (Modern CSS) ========== -->\n<div class=\"flex flex-wrap gap-4\">\n  <div class=\"w-64 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white\">\n    Item 1\n  </div>\n  <div class=\"w-64 h-32 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white\">\n    Item 2\n  </div>\n  <div class=\"w-64 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white\">\n    Item 3\n  </div>\n  <div class=\"w-64 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white\">\n    Item 4\n  </div>\n  <div class=\"w-64 h-32 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg flex items-center justify-center text-white\">\n    Item 5\n  </div>\n  <div class=\"w-64 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white\">\n    Item 6\n  </div>\n</div>\n\n<!-- ========== FLEXBOX NAVIGATION WITH DROPDOWN ========== -->\n<nav class=\"bg-gray-900 text-white\">\n  <div class=\"flex justify-between items-center px-6 py-4\">\n    <div class=\"text-xl font-bold\">FlexNav</div>\n    \n    <div class=\"flex space-x-6\">\n      <a href=\"#\" class=\"hover:text-gray-300\">Home</a>\n      \n      <!-- Dropdown using nested flex -->\n      <div class=\"relative group\">\n        <button class=\"flex items-center space-x-1 hover:text-gray-300\">\n          <span>Products</span>\n          <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\"></path>\n          </svg>\n        </button>\n        <div class=\"absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg hidden group-hover:block\">\n          <a href=\"#\" class=\"block px-4 py-2 hover:bg-gray-700\">Product 1</a>\n          <a href=\"#\" class=\"block px-4 py-2 hover:bg-gray-700\">Product 2</a>\n          <a href=\"#\" class=\"block px-4 py-2 hover:bg-gray-700\">Product 3</a>\n        </div>\n      </div>\n      \n      <a href=\"#\" class=\"hover:text-gray-300\">About</a>\n      <a href=\"#\" class=\"hover:text-gray-300\">Contact</a>\n    </div>\n    \n    <button class=\"bg-blue-500 px-4 py-2 rounded hover:bg-blue-600\">\n      Login\n    </button>\n  </div>\n</nav>",
        lineByLine: [
          "Line 2-33: Holy grail layout - Header, 3 columns, footer with equal heights",
          "Line 36-48: Sticky footer - Footer always at bottom using flex-1",
          "Line 51-67: Masonry grid - Variable height items with flex wrap",
          "Line 70-106: Equal height cards - flex-col h-full ensures equal heights",
          "Line 109-121: Centering techniques - flex, grid, and margin auto methods",
          "Line 124-155: Nested flexbox - Complex dashboard layout with nested flex",
          "Line 158-171: Flex wrap with gap - Modern gap property for spacing",
          "Line 174-197: Navigation with dropdown - Nested flex for dropdown menu"
        ],
        simpleMeaning: "Master advanced flexbox patterns for complex layouts like holy grail, sticky footers, masonry grids, and perfect centering.",
        output: "Professional, complex layouts including dashboards, card grids, navigation systems, and responsive components.",
        note: "Use flex-1 for filling space. Combine with min-h-screen for full-height layouts. Test on multiple devices for responsive behavior."
      }
    ]
  }

};

// Also export as problems for backward compatibility
export const tailwind = learning;
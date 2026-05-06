export const questions = [
  // ========== BASIC LEVEL (1-50) ==========
  {
    line: "* { margin: 0; padding: 0; }",
    explanation: "Universal selector resets default margin and padding for ALL HTML elements, removing browser default spacing.",
    example: "Often used at the beginning of CSS reset files to create consistent spacing across browsers.",
    output: "Removes all default margins and padding from every element on the page."
  },
  {
    line: "@media (max-width: 768px) { ... }",
    explanation: "Media query that applies styles only when screen width is 768px or less (mobile/tablet devices).",
    example: "Use for responsive design to make layout work on smaller screens.",
    output: "Layout changes on phones and tablets, elements may stack vertically."
  },
  {
    line: "::before { content: \"★\"; }",
    explanation: "Pseudo-element inserts content before the element's actual content, without adding HTML.",
    example: "Adds a star before each list item or decorative elements.",
    output: "★ appears before each targeted element."
  },
  {
    line: ".container { display: flex; justify-content: center; align-items: center; }",
    explanation: "Flexbox properties that center child elements both horizontally (justify-content) and vertically (align-items).",
    example: "Perfect for centering content in a div or full-screen section.",
    output: "Child elements become perfectly centered in the container."
  },
  {
    line: "box-sizing: border-box;",
    explanation: "Makes width and height include padding and border in the total element size calculation.",
    example: "Apply to all elements to make layout calculations easier.",
    output: "Element's total width = declared width, not width + padding + border."
  },
  {
    line: ":root { --primary-color: #3498db; }",
    explanation: "Defines a CSS custom property (variable) globally that can be used anywhere in the stylesheet.",
    example: "Great for theming and maintaining consistent colors across the site.",
    output: "Creates a variable named --primary-color with blue value."
  },
  {
    line: "color: var(--primary-color);",
    explanation: "Uses the CSS variable value defined in :root or elsewhere.",
    example: "Changes button color, link color, or any element's color based on theme.",
    output: "Element's color becomes the value of --primary-color variable."
  },
  {
    line: "position: relative;",
    explanation: "Positions element relative to its normal position, allowing offset with top/right/bottom/left.",
    example: "Often used as a container for absolutely positioned children.",
    output: "Element stays in normal flow, but can be shifted from original position."
  },
  {
    line: "position: absolute;",
    explanation: "Removes element from normal document flow and positions it relative to nearest positioned ancestor.",
    example: "Use for tooltips, dropdowns, or absolutely positioned elements.",
    output: "Element is removed from flow; other elements ignore its space."
  },
  {
    line: "position: fixed;",
    explanation: "Positions element relative to the viewport, staying in same place during scroll.",
    example: "Fixed headers, back-to-top buttons, or sticky notifications.",
    output: "Element stays fixed on screen while user scrolls the page."
  },
  {
    line: "position: sticky;",
    explanation: "Hybrid of relative and fixed - behaves as relative until scroll threshold, then becomes fixed.",
    example: "Sticky headers in tables, section headers in long lists.",
    output: "Element sticks to top when scrolled past its container."
  },
  {
    line: "z-index: 10;",
    explanation: "Controls stacking order of positioned elements; higher numbers appear on top.",
    example: "Modals, dropdowns, and popups need higher z-index to appear above content.",
    output: "Element appears above elements with lower z-index values."
  },
  {
    line: "transition: all 0.3s ease;",
    explanation: "Creates smooth animation when CSS properties change over 0.3 seconds with easing.",
    example: "Smooth hover effects for buttons, links, or cards.",
    output: "All animatable properties transition smoothly when they change."
  },
  {
    line: "@keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }",
    explanation: "Defines keyframe animation named 'slideIn' that animates from left to right.",
    example: "Entrance animations for elements appearing on page.",
    output: "Animation moves element from off-screen left to its normal position."
  },
  {
    line: "animation: slideIn 0.5s ease forwards;",
    explanation: "Applies animation to element with duration, timing, and fill-mode to keep end state.",
    example: "Animate elements when they first appear on page load.",
    output: "Element animates using slideIn keyframes and stays in final position."
  },
  {
    line: "transform: translate(50px, 20px);",
    explanation: "Moves element 50px right and 20px down without affecting layout flow.",
    example: "Animated movements, hover effects, or repositioning elements.",
    output: "Element visually shifted, but original layout space remains."
  },
  {
    line: "transform: rotate(45deg);",
    explanation: "Rotates element 45 degrees clockwise around its center.",
    example: "Rotate icons, create diagonal lines, or animated spin effects.",
    output: "Element appears tilted at 45-degree angle."
  },
  {
    line: "transform: scale(1.2);",
    explanation: "Enlarges element by 20% (scale factor of 1.2).",
    example: "Zoom effects on hover for images or cards.",
    output: "Element appears 20% larger in both width and height."
  },
  {
    line: "cursor: pointer;",
    explanation: "Changes mouse cursor to hand icon when hovering over element.",
    example: "Indicates clickable elements like buttons and links.",
    output: "Hand icon appears when hovering over the element."
  },
  {
    line: "opacity: 0.5;",
    explanation: "Makes element 50% transparent, allowing background to show through.",
    example: "Fade effects, disabled elements, or image overlays.",
    output: "Element becomes semi-transparent, background visible through it."
  },
  {
    line: "overflow: hidden;",
    explanation: "Hides any content that overflows the element's bounds.",
    example: "Prevents scrollbars, hides overflowing text, or clears floats.",
    output: "Content extending outside element is clipped and hidden."
  },
  {
    line: "text-overflow: ellipsis;",
    explanation: "Shows '...' when text overflows container with white-space: nowrap.",
    example: "Truncate long titles, filenames, or descriptions.",
    output: "Long text ends with '...' instead of overflowing."
  },
  {
    line: "white-space: nowrap;",
    explanation: "Prevents text from wrapping to next line, keeping it on single line.",
    example: "Navigation menus, horizontal scrolling text, or buttons.",
    output: "Text stays on one line, may cause horizontal overflow."
  },
  {
    line: "flex-direction: column;",
    explanation: "Changes flex container layout from horizontal row to vertical column.",
    example: "Stack elements vertically in mobile layouts.",
    output: "Flex items arrange in column (top to bottom) instead of row."
  },
  {
    line: "flex-wrap: wrap;",
    explanation: "Allows flex items to wrap onto multiple lines when space insufficient.",
    example: "Responsive card grids and image galleries.",
    output: "Items move to next row when container width is too small."
  },
  {
    line: "gap: 20px;",
    explanation: "Sets consistent spacing between flex, grid, or multi-column items.",
    example: "Replaces margin hacks for spacing between layout items.",
    output: "20px gap between items (not at edges)."
  },
  {
    line: "flex: 1;",
    explanation: "Shorthand for flex: 1 1 0 - item can grow and shrink from base 0.",
    example: "Equal-width columns in flex container.",
    output: "Item takes available space and grows proportionally."
  },
  {
    line: "align-self: center;",
    explanation: "Overrides parent's align-items for specific flex/grid item.",
    example: "Individual item different vertical alignment than its siblings.",
    output: "Single item centered vertically, others follow parent alignment."
  },
  {
    line: "grid-template-columns: repeat(3, 1fr);",
    explanation: "Creates 3 equal-width columns using fraction units.",
    example: "Three-column responsive layouts for cards or images.",
    output: "Grid has 3 columns, each taking equal fraction of available space."
  },
  {
    line: "grid-template-areas: 'header header' 'sidebar main' 'footer footer';",
    explanation: "Names grid areas for visual layout mapping.",
    example: "Complex page layouts like dashboards or multi-section designs.",
    output: "Grid areas assigned to specific named regions."
  },
  {
    line: "grid-area: header;",
    explanation: "Assigns element to named grid area defined in parent's grid-template-areas.",
    example: "Placing header, sidebar, main content into grid layout.",
    output: "Element occupies the 'header' area in the grid."
  },
  {
    line: "filter: blur(5px);",
    explanation: "Applies Gaussian blur effect of 5 pixels to element.",
    example: "Background blur effects, image hover effects.",
    output: "Element appears blurred like frosted glass."
  },
  {
    line: "filter: grayscale(100%);",
    explanation: "Converts element to black and white (0% color, 100% grayscale).",
    example: "Black and white images on hover, vintage effects.",
    output: "Element loses all color and appears in grayscale."
  },
  {
    line: "filter: drop-shadow(2px 4px 6px black);",
    explanation: "Adds shadow that follows element's actual shape (including transparency).",
    example: "Better shadows than box-shadow for irregular shapes or PNGs.",
    output: "Shadow that respects transparent areas of element."
  },
  {
    line: "backdrop-filter: blur(10px);",
    explanation: "Blurs the background behind the element, creating glass effect.",
    example: "Glassmorphism UI components like cards and modals.",
    output: "Background behind element is blurred, element itself sharp."
  },
  {
    line: "clip-path: circle(50%);",
    explanation: "Clips element to circular shape with radius 50% of size.",
    example: "Round profile pictures, circular image previews.",
    output: "Element shows only inside circle, rest hidden."
  },
  {
    line: "background: linear-gradient(45deg, red, blue);",
    explanation: "Creates diagonal gradient from red to blue at 45-degree angle.",
    example: "Modern backgrounds, button gradients, hero sections.",
    output: "Smooth color transition from red to blue diagonally."
  },
  {
    line: "background: radial-gradient(circle, white, black);",
    explanation: "Creates circular gradient that radiates from center outward.",
    example: "Spotlight effects, vignettes, or glow effects.",
    output: "White at center fading to black at edges."
  },
  {
    line: "box-shadow: 0 10px 20px rgba(0,0,0,0.2);",
    explanation: "Adds shadow below element with 10px down, 20px blur, 20% opacity black.",
    example: "Card depth, button elevation, modal shadows.",
    output: "Soft shadow appears below element, creating depth illusion."
  },
  {
    line: "text-shadow: 2px 2px 4px rgba(0,0,0,0.3);",
    explanation: "Adds shadow to text with 2px down, 2px right, 4px blur.",
    example: "Headline effects, 3D text, neon text effects.",
    output: "Text has soft gray shadow offset down and right."
  },
  {
    line: "border-radius: 50%;",
    explanation: "Creates perfect circle when width and height are equal.",
    example: "Round profile pictures, circular buttons, badges.",
    output: "Element becomes circular instead of rectangular."
  },
  {
    line: "outline: none;",
    explanation: "Removes default browser focus outline (use cautiously for accessibility).",
    example: "Custom focus styles, but always provide alternative focus indicator.",
    output: "No default blue outline on focus (may harm accessibility)."
  },
  {
    line: "object-fit: cover;",
    explanation: "Scales image or video to fill container, preserving aspect ratio but possibly cropping.",
    example: "Consistent card images, hero backgrounds, profile pictures.",
    output: "Image fills container completely, cropping edges if needed."
  },
  {
    line: "aspect-ratio: 16 / 9;",
    explanation: "Maintains 16:9 width-to-height ratio automatically.",
    example: "Responsive videos, image galleries, consistent card sizes.",
    output: "Element height automatically adjusts based on width."
  },
  {
    line: "scroll-behavior: smooth;",
    explanation: "Enables smooth scrolling animation when navigating within page.",
    example: "Better UX for anchor links and back-to-top buttons.",
    output: "Page scrolls smoothly instead of jumping instantly."
  },
  {
    line: "user-select: none;",
    explanation: "Prevents users from selecting text on the element.",
    example: "Buttons, UI elements, draggable items where text selection is unwanted.",
    output: "Text cannot be highlighted by cursor selection."
  },
  {
    line: "pointer-events: none;",
    explanation: "Makes element ignore all mouse/touch events, passing them to elements below.",
    example: "Click-through overlays, disabled buttons, watermarks.",
    output: "Element is invisible to mouse clicks and hover events."
  },
  {
    line: "will-change: transform;",
    explanation: "Optimizes element for upcoming transform animations, preparing GPU layer.",
    example: "High-performance animations, smooth scrolling, parallax.",
    output: "Browser allocates resources for smoother transform animations."
  },
  {
    line: "contain: layout style paint;",
    explanation: "Isolates element so its changes don't affect rest of page, improving performance.",
    example: "Complex widgets, infinite scroll lists, heavy components.",
    output: "Browser restyles element independently, improving render speed."
  },

  // ========== ADVANCED LEVEL (51-100) ==========
  {
    line: "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
    explanation: "Creates responsive grid where columns automatically adjust to fill available space.",
    example: "Fully responsive card grids that work on any screen size.",
    output: "As many columns as fit, each at least 250px, stretching equally."
  },
  {
    line: "grid-auto-flow: dense;",
    explanation: "Allows grid items to fill empty gaps by reordering visually (not logically).",
    example: "Pinterest-style masonry layouts with varying item sizes.",
    output: "Grid packs items tightly, filling holes left by larger items."
  },
  {
    line: "container-type: inline-size;",
    explanation: "Enables container queries based on parent container width, not viewport.",
    example: "Component-level responsive design independent of page layout.",
    output: "Component responds to its own container size changes."
  },
  {
    line: "@container (min-width: 500px) { .card { display: flex; } }",
    explanation: "Container query that applies styles when parent container is ≥500px wide.",
    example: "Cards that switch layout when container expands, not viewport.",
    output: "Card becomes horizontal flex layout only in wide enough containers."
  },
  {
    line: ":has(img) { border: 2px solid red; }",
    explanation: "Parent selector that selects elements containing specific children.",
    example: "Highlight containers with images, style forms with invalid inputs.",
    output: "Any element containing an image gets red border."
  },
  {
    line: "div:has(p) { background: yellow; }",
    explanation: "Selects div elements that have at least one paragraph child.",
    example: "Style parent based on child content without JavaScript.",
    output: "Divs containing paragraphs get yellow background."
  },
  {
    line: "accent-color: #3498db;",
    explanation: "Sets color for form controls like checkboxes, radios, and range inputs.",
    example: "Brand-colored checkboxes and radio buttons.",
    output: "Form control highlights match brand color instead of browser default."
  },
  {
    line: "scroll-snap-type: x mandatory;",
    explanation: "Forces horizontal scroll container to snap to items.",
    example: "Image carousels, product showcases, horizontal galleries.",
    output: "Scrolling stops precisely at each item boundary."
  },
  {
    line: "scroll-snap-align: start;",
    explanation: "Aligns snap position to start of scroll container for each item.",
    example: "Ensures each item aligns correctly when scrolling stops.",
    output: "Item snaps to top/left edge of scroll container."
  },
  {
    line: "color-scheme: light dark;",
    explanation: "Indicates element supports both light and dark color schemes.",
    example: "Native dark mode support for browser UI elements.",
    output: "Browser scrollbars, form controls adapt to system theme."
  },
  {
    line: "light-dark(white, black);",
    explanation: "Returns different values based on current color scheme (light/dark).",
    example: "Simplifies dark mode styling without media queries.",
    output: "White in light mode, black in dark mode."
  },
  {
    line: "color-mix(in srgb, red 30%, blue);",
    explanation: "Mixes 30% red with 70% blue in sRGB color space.",
    example: "Dynamic color generation, theme variants, hover states.",
    output: "Creates new color that's 30% red, 70% blue."
  },
  {
    line: "width: clamp(200px, 50%, 800px);",
    explanation: "Sets width between 200px and 800px, preferring 50% when possible.",
    example: "Responsive containers that grow but have limits.",
    output: "Width 50% of parent, but never below 200px or above 800px."
  },
  {
    line: "font-size: clamp(16px, 4vw, 32px);",
    explanation: "Responsive font size between 16px and 32px, scaling with viewport.",
    example: "Fluid typography without media queries.",
    output: "Text scales between 16px and 32px as screen size changes."
  },
  {
    line: "view-transition-name: card;",
    explanation: "Names element for View Transitions API, enabling smooth animations between page states.",
    example: "Smooth image gallery transitions, cross-page animations.",
    output: "Element participates in view transitions with given name."
  },
  {
    line: "@property --num { syntax: '<integer>'; inherits: false; initial-value: 0; }",
    explanation: "Registers custom property with type checking and default value.",
    example: "Animating integer values that change smoothly.",
    output: "Number counter can animate using CSS transitions."
  },
  {
    line: "animation-timeline: scroll();",
    explanation: "Links animation to scroll progress instead of time.",
    example: "Scroll-triggered animations, progress indicators.",
    output: "Animation progresses as user scrolls up/down."
  },
  {
    line: "overflow-anchor: auto;",
    explanation: "Prevents scroll position from jumping when content loads above viewport.",
    example: "Social media feeds, comment sections, content lists.",
    output: "Scroll position stays stable when new content loads above."
  },
  {
    line: "content-visibility: auto;",
    explanation: "Skips rendering off-screen elements until needed, improving performance.",
    example: "Long lists, infinite scroll, blog archives.",
    output: "Off-screen elements not rendered, improving initial load time."
  },
  {
    line: "contain-intrinsic-size: 0 500px;",
    explanation: "Provides estimated size for elements using content-visibility: auto.",
    example: "Prevents layout shift while content-visibility optimizes.",
    output: "Browser reserves 500px height before element renders."
  },
  {
    line: "writing-mode: vertical-rl;",
    explanation: "Flows text vertically from right to left (traditional East Asian).",
    example: "Vertical menus, language localization, creative layouts.",
    output: "Text characters stack vertically, reading top to bottom."
  },
  {
    line: "text-orientation: upright;",
    explanation: "Keeps text characters upright in vertical writing modes.",
    example: "Multilingual text, vertical navigation labels.",
    output: "Roman characters remain upright instead of rotated 90°."
  },
  {
    line: "field-sizing: content;",
    explanation: "Makes form fields size based on their content automatically.",
    example: "Auto-expanding textareas, smart input widths.",
    output: "Input/textarea width grows with typing content."
  },
  {
    line: "margin-trim: block;",
    explanation: "Trims margins of children at container edges, preventing unwanted spacing.",
    example: "Cleaner spacing in lists and flex/grid containers.",
    output: "First/last child margins don't add spacing at container edges."
  },
  {
    line: "text-wrap: balance;",
    explanation: "Balances line lengths in multi-line text for better appearance.",
    example: "Headings, cards, captions where orphans look bad.",
    output: "Lines have roughly equal lengths, no short last line."
  },
  {
    line: "text-wrap: pretty;",
    explanation: "Prevents widows and orphans by smarter line breaking.",
    example: "Articles, paragraphs, any body text requiring readability.",
    output: "Better line breaks, no single word on last line."
  },
  {
    line: "scale: 1.5;",
    explanation: "Modern standalone transform property for scaling (without transform prefix).",
    example: "Size changes in animations, hover effects.",
    output: "Element scales to 1.5 times original size."
  },
  {
    line: "translate: 50% 50%;",
    explanation: "Modern standalone transform property for moving elements.",
    example: "Centering techniques, animated movements.",
    output: "Element moves 50% of its width right and 50% down."
  },
  {
    line: "rotate: 45deg;",
    explanation: "Modern standalone transform property for rotation.",
    example: "Spinners, icons, animated elements.",
    output: "Element rotates 45 degrees clockwise."
  },
  {
    line: ":focus-visible { outline: 2px solid blue; }",
    explanation: "Applies focus style only when focused by keyboard, not mouse.",
    example: "Accessible focus indicators that don't annoy mouse users.",
    output: "Keyboard users see blue outline, mouse users don't."
  },
  {
    line: "backface-visibility: hidden;",
    explanation: "Hides the back side of 3D transformed elements.",
    example: "Flip cards, 3D rotations, cube animations.",
    output: "Back of element invisible when flipped away from viewer."
  },
  {
    line: "perspective: 1000px;",
    explanation: "Sets depth for 3D transformed children, creating 3D space.",
    example: "3D galleries, flip cards, product showcases.",
    output: "3D transforms have realistic depth effect."
  },
  {
    line: "transform-style: preserve-3d;",
    explanation: "Maintains 3D positioning of children, allowing complex 3D scenes.",
    example: "3D carousels, nested 3D transformations.",
    output: "Children positioned in 3D space preserve their 3D transforms."
  },
  {
    line: "mix-blend-mode: multiply;",
    explanation: "Multiplies element colors with background, creating darkening effect.",
    example: "Creative image overlays, text effects, design accents.",
    output: "Element blends with background using multiply mode."
  },
  {
    line: "isolation: isolate;",
    explanation: "Creates new stacking context, isolating blend modes from outside.",
    example: "Prevents blend mode from affecting other elements.",
    output: "Blend mode confined to element and its children only."
  },
  {
    line: "shape-outside: circle(50%);",
    explanation: "Makes text wrap around circular shape of floated element.",
    example: "Magazine-style layouts, organic text wrapping.",
    output: "Text flows around circular shape instead of rectangle."
  },
  {
    line: "initial-letter: 3;",
    explanation: "Creates drop cap where first letter spans 3 lines tall.",
    example: "Magazine-style articles, elegant typography.",
    output: "First letter is 3 lines tall, text wraps around it."
  },
  {
    line: "hyphens: auto;",
    explanation: "Automatically hyphenates long words at line breaks.",
    example: "Justified text, narrow columns, multilingual content.",
    output: "Long words break with hyphens for better text flow."
  },
  {
    line: "line-clamp: 3;",
    explanation: "Limits text to 3 lines and adds ellipsis.",
    example: "Card descriptions, preview text, truncated content.",
    output: "Text shows only 3 lines, remaining hidden with '...'"
  },
  {
    line: "color-adjust: economy;",
    explanation: "Allows browser to adjust colors for print to save ink.",
    example: "Print stylesheets, eco-friendly printing.",
    output: "Browser may reduce color intensity for printing economy."
  },
  {
    line: "print-color-adjust: exact;",
    explanation: "Forces browser to print colors exactly as specified.",
    example: "Color-critical print materials, brand colors in print.",
    output: "Printed colors match screen colors exactly."
  },
  {
    line: "forced-color-adjust: none;",
    explanation: "Prevents browser from overriding colors in forced color modes.",
    example: "High contrast mode customization, accessibility.",
    output: "Colors remain as specified even in high-contrast mode."
  },
  {
    line: "math-style: normal;",
    explanation: "Sets math layout to standard mathematical typography.",
    example: "Math equations, scientific content, technical documents.",
    output: "Math elements display with proper mathematical spacing."
  },
  {
    line: "scroll-timeline: --page-scroll block;",
    explanation: "Links animation to scroll progress using named timeline.",
    example: "Scroll-triggered animations, progress indicators.",
    output: "Animation driven by scroll position instead of time."
  },
  {
    line: "view-timeline: --card-view block;",
    explanation: "Creates timeline based on element entering viewport.",
    example: "Reveal animations, entrance effects.",
    output: "Animation progresses as element scrolls into view."
  },
  {
    line: "overlay: auto;",
    explanation: "Controls how top layer elements (modal, popover) display.",
    example: "Custom modal positioning, popover management.",
    output: "Element appears in top layer above page content."
  },
  {
    line: "popover: auto;",
    explanation: "Creates native popover that appears above page content.",
    example: "Tooltips, dropdowns, context menus.",
    output: "Element acts as popover that shows/hides easily."
  },
  {
    line: "anchor-name: --tooltip;",
    explanation: "Names an element as anchor for anchor-positioned elements.",
    example: "Tooltip positioning, popup placement.",
    output: "Other elements can position relative to this anchor."
  },
  {
    line: "position-anchor: --tooltip;",
    explanation: "Positions element relative to named anchor element.",
    example: "Tooltips that follow their anchor, adaptive popups.",
    output: "Element positions automatically near the named anchor."
  },
  {
    line: "calc-size(auto, size + 20px);",
    explanation: "Performs calculations on intrinsic sizes (like auto).",
    example: "Smooth height transitions from auto to fixed.",
    output: "Calculates size based on content height plus padding."
  },
  {
    line: "transition-behavior: allow-discrete;",
    explanation: "Allows transitions on properties with discrete animation behavior.",
    example: "Smooth display: none transitions, dialog animations.",
    output: "Discrete properties animate smoothly between states."
  },
  {
    line: "starting-style: { opacity: 0; }",
    explanation: "Defines starting styles for elements entering the page.",
    example: "Smooth entrance animations, popover fade-ins.",
    output: "Element starts invisible, then fades in."
  }
];
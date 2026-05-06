export const interview = {
  fresher: [
    {
      question: "What is the difference between reset.css and normalize.css?",
      answer: "Reset.css removes all default browser styling (margin, padding, etc.). Normalize.css preserves useful defaults while fixing browser inconsistencies.",
      example: "/* reset.css - removes everything */\n* { margin: 0; padding: 0; box-sizing: border-box; }\n\n/* normalize.css - preserves useful defaults */\nbody { line-height: 1.5; }\nh1 { font-size: 2em; margin: 0.67em 0; }",
      output: "Reset: No margins anywhere. Normalize: Headings still have proper spacing, line-height is readable.",
      note: "Normalize.css is preferred for production websites as it keeps browser usability."
    },
    {
      question: "What is the difference between `opacity` and `rgba()`?",
      answer: "opacity makes entire element (including children) transparent. rgba() only affects background color.",
      example: ".opacity-box { opacity: 0.5; background: red; }\n.rgba-box { background: rgba(255, 0, 0, 0.5); }",
      output: "Opacity box: all content (text, children) is 50% transparent. RGBA box: only background is 50% transparent.",
      note: "Use rgba for semi-transparent backgrounds, opacity for fading entire elements."
    },
    {
      question: "What is the `currentColor` keyword?",
      answer: "`currentColor` uses the element's current text color value for other properties like border or background.",
      example: ".box {\n  color: blue;\n  border: 2px solid currentColor;\n  box-shadow: 0 0 5px currentColor;\n}",
      output: "Border and box-shadow automatically match the blue text color.",
      note: "Great for SVG icons that need to match surrounding text color."
    },
    {
      question: "What is the difference between `:root` and `html` selector?",
      answer: ":root has higher specificity than html and works in SVG and other XML contexts.",
      example: ":root { --primary: blue; }  /* Specificity: 0-0-1 */\nhtml { --primary: red; }   /* Specificity: 0-0-1 but :root overrides */",
      output: ":root selector overrides html selector due to higher specificity.",
      note: "Use :root for CSS variables to ensure highest specificity."
    },
    {
      question: "How do you create a triangle using CSS border?",
      answer: "Set width/height to 0, then use transparent borders with one colored border.",
      example: ".triangle {\n  width: 0;\n  height: 0;\n  border-left: 50px solid transparent;\n  border-right: 50px solid transparent;\n  border-bottom: 100px solid red;\n}",
      output: "Creates a red downward-pointing triangle.",
      note: "Change border-bottom to border-top, left, or right for different directions."
    },
    {
      question: "What is the `outline` property and how is it different from `border`?",
      answer: "outline draws a line around elements outside the border. It doesn't affect layout (no width change) and can't be rounded.",
      example: ".btn { outline: 2px solid blue; outline-offset: 2px; }",
      output: "Blue outline appears outside the element, 2px away from border, without shifting layout.",
      note: "Outline is great for focus states as it doesn't move surrounding elements."
    },
    {
      question: "What is the difference between `rem`, `em`, and `px`?",
      answer: "px = absolute pixels. em = relative to parent. rem = relative to root (html) font-size.",
      example: "html { font-size: 16px; }\n.parent { font-size: 20px; }\n.child-em { font-size: 1.5em; } /* 30px */\n.child-rem { font-size: 1.5rem; } /* 24px */",
      output: "em-based text is 30px (1.5 × parent 20px), rem-based is 24px (1.5 × root 16px).",
      note: "Use rem for global spacing, em for component-relative sizing."
    },
    {
      question: "What is the `object-position` property?",
      answer: "object-position specifies alignment of replaced elements within their box (used with object-fit).",
      example: "img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  object-position: top center;\n}",
      output: "Image covers container, focused on top-center portion.",
      note: "Values can be: top, bottom, left, right, center, percentages, or pixels."
    },
    {
      question: "What is the `pointer-events` property?",
      answer: "pointer-events controls whether an element responds to mouse/touch events.",
      example: ".disabled-link { pointer-events: none; opacity: 0.5; }\n.overlay { pointer-events: auto; }",
      output: "Disabled link becomes unclickable, overlay element catches all clicks.",
      note: "Useful for disabling buttons, creating click-through overlays, or hover effects."
    },
    {
      question: "What is the `user-select` property?",
      answer: "user-select controls whether users can select text on the page.",
      example: ".no-select { user-select: none; }\n.code-block { user-select: all; }",
      output: "Text cannot be selected in first element, clicking code block selects all text.",
      note: "Improves UX for buttons and UI elements where text selection would be annoying."
    },
    {
      question: "What is the difference between `first-child` and `first-of-type`?",
      answer: "first-child selects first child regardless of type. first-of-type selects first occurrence of that element type.",
      example: "div p:first-child { } /* First child (must be p) */\ndiv p:first-of-type { } /* First p regardless of position */",
      output: "first-child only matches if p is the very first child; first-of-type finds first p element.",
      note: "Use first-of-type when you're not sure about element position in parent."
    },
    {
      question: "What is the `caret-color` property?",
      answer: "caret-color changes the color of the text input cursor (caret).",
      example: "input { caret-color: red; }\ntextarea { caret-color: #3498db; }",
      output: "Text input cursor becomes red, textarea cursor becomes blue.",
      note: "Great for brand consistency and improving input visibility."
    },
    {
      question: "What is the `scroll-behavior` property?",
      answer: "scroll-behavior enables smooth scrolling when navigating within page using anchor links.",
      example: "html { scroll-behavior: smooth; }\n/* Then any anchor link scrolls smoothly */",
      output: "Clicking internal links scrolls smoothly to target section instead of jumping instantly.",
      note: "Works for anchor links, back to top buttons, and CSS scroll snapping."
    },
    {
      question: "What is the difference between `inline` and `inline-block`?",
      answer: "Both display inline, but inline-block allows setting width, height, margin, padding like block elements.",
      example: ".inline { display: inline; width: 100px; } /* width ignored */\n.inline-block { display: inline-block; width: 100px; }",
      output: "Inline ignores width, inline-block respects width while staying inline.",
      note: "Use inline-block for buttons, badges, and components in a row."
    },
    {
      question: "What are CSS fallbacks? How do you provide them?",
      answer: "Fallbacks provide alternate values when modern features aren't supported, using multiple values or @supports.",
      example: ".element {\n  background: gray; /* fallback for old browsers */\n  background: linear-gradient(45deg, red, blue);\n  padding: 20px;\n  padding: clamp(10px, 5vw, 30px);\n}",
      output: "New browsers get gradient; old browsers get gray background.",
      note: "Always provide simple fallbacks for modern CSS features for better compatibility."
    },
    {
      question: "What is the `currentColor` value? Give use cases.",
      answer: "currentColor takes the element's current text color value for other properties.",
      example: ".icon {\n  color: blue;\n  fill: currentColor;\n  stroke: currentColor;\n}",
      output: "SVG icon inherits blue color for both fill and stroke automatically.",
      note: "Perfect for SVG icons that need to match surrounding text color."
    },
    {
      question: "How do you center a block element horizontally?",
      answer: "Set margin-left and margin-right to auto, and give it a fixed width.",
      example: ".center-block {\n  width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}",
      output: "Element centers within its parent container.",
      note: "Element must have a defined width for margin: auto to work."
    },
    {
      question: "What is the difference between `visibility: collapse` and `visibility: hidden`?",
      answer: "collapse hides table rows/columns without affecting layout; hidden hides element but keeps space.",
      example: "tr.removed { visibility: collapse; }\ndiv.hidden { visibility: hidden; }",
      output: "Table row collapses, other rows shift. Div becomes invisible but space remains.",
      note: "collapse only works for table elements; otherwise behaves like hidden."
    },
    {
      question: "What is the `word-break` property? When to use it?",
      answer: "word-break controls how text breaks when reaching container boundary.",
      example: ".break-all { word-break: break-all; }\n.keep-all { word-break: keep-all; }\n.break-word { word-break: break-word; }",
      output: "break-all breaks any character, keep-all prevents breaks, break-word breaks only words.",
      note: "Use break-word for better readability, break-all for tight spaces like mobile."
    },
    {
      question: "What is the `text-overflow` property?",
      answer: "text-overflow handles how overflowed text is displayed (ellipsis, clip, custom string).",
      example: ".ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 200px;\n}",
      output: "Long text shows 'This is a very...' with ellipsis.",
      note: "Requires white-space: nowrap and overflow: hidden to work."
    },
    {
      question: "What is CSS `calc()` function? Give example.",
      answer: "calc() performs mathematical calculations with different units.",
      example: ".container {\n  width: calc(100% - 40px);\n  height: calc(100vh - 100px);\n  font-size: calc(16px + 2vw);\n}",
      output: "Width is 100% minus 40px, height is viewport minus header, font scales responsively.",
      note: "Use calc for fluid layouts and combining different unit types."
    },
    {
      question: "What are CSS counters? How do you use them?",
      answer: "CSS counters create auto-incrementing numbers for ordered lists beyond simple numbering.",
      example: "body { counter-reset: section; }\nh2::before {\n  counter-increment: section;\n  content: \"Section \" counter(section) \": \";\n}",
      output: "Each h2 shows as 'Section 1: Title', 'Section 2: Another Title', etc.",
      note: "Great for documentation, legal documents, and multi-level numbering."
    },
    {
      question: "What is the difference between `:empty` and `:blank`?",
      answer: ":empty selects elements with NO children (including whitespace). :blank selects empty or whitespace-only elements.",
      example: "div:empty { display: none; } /* Hides completely empty divs */\ndiv:blank { border: 1px solid red; }",
      output: ":empty hides div with no content, :blank highlights div with spaces or line breaks.",
      note: ":blank is newer and less supported; :empty is widely supported."
    },
    {
      question: "What are CSS combinators? List all five.",
      answer: "Combinators define relationships between selectors: descendant (space), child (>), adjacent sibling (+), general sibling (~), column (||).",
      example: "div p { } /* descendant */\ndiv > p { } /* child */\nh1 + p { } /* adjacent sibling */\nh1 ~ p { } /* general sibling */",
      output: "Different combinators target different element relationships.",
      note: "Combinators reduce need for extra classes and IDs."
    },
    {
      question: "What is the difference between `border-box` and `content-box`?",
      answer: "content-box: width only includes content. border-box: width includes content, padding, and border.",
      example: ".content-box {\n  box-sizing: content-box;\n  width: 200px;\n  padding: 20px;\n  /* Actual width = 240px */\n}\n.border-box {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  /* Actual width = 200px */\n}",
      output: "content-box element is 240px wide, border-box element is 200px wide.",
      note: "Universal selector * { box-sizing: border-box; } is common practice."
    },
    {
      question: "What are CSS `@import` rules and their drawbacks?",
      answer: "@import allows loading CSS files within other CSS files. Drawbacks: slower loading, blocks parallel downloads.",
      example: "@import url('styles.css');\n@import 'fonts.css' screen;",
      output: "styles.css is imported and loaded before remaining CSS.",
      note: "Avoid @import; use <link> tags for better performance."
    },
    {
      question: "What is the difference between `:active` and `:focus`?",
      answer: ":active is when element is being clicked (momentary). :focus is when element is selected (keyboard or click).",
      example: "button:active { transform: scale(0.95); }\ninput:focus { outline: 2px solid blue; }",
      output: "Button shrinks during click, input shows blue outline when focused (stays after click).",
      note: ":focus persists after click; :active only during click."
    },
    {
      question: "What is CSS `filter` property? Give examples.",
      answer: "filter applies graphic effects like blur, brightness, contrast, grayscale, etc.",
      example: "img:hover { filter: grayscale(100%); }\n.blur { filter: blur(5px); }\n.bright { filter: brightness(150%); }",
      output: "Image becomes black & white on hover, second image is blurry, third is brighter.",
      note: "Filters can be combined: filter: brightness(110%) contrast(120%) blur(2px);"
    },
    {
      question: "What is the `:target` pseudo-class?",
      answer: ":target selects element whose ID matches current URL fragment (hash).",
      example: "#section1:target { background: yellow; }\n#section2:target { border: 2px solid red; }",
      output: "When URL ends with #section1, that section gets yellow background.",
      note: "Great for highlighting active content, creating tab interfaces without JavaScript."
    },
    {
      question: "What is the difference between `width: auto` and `width: 100%`?",
      answer: "width: auto respects margin and padding. width: 100% ignores them, potentially causing overflow.",
      example: ".auto { width: auto; margin: 20px; } /* Works fine */\n.percent { width: 100%; margin: 20px; } /* Overflows */",
      output: "auto element fits within parent accounting for margin; percent element overflows by 40px.",
      note: "Use width: auto for safer default behavior with margins and padding."
    },
    {
      question: "What is CSS `all` property?",
      answer: "all resets all CSS properties (inherited and non-inherited) to their initial values.",
      example: ".reset-component {\n  all: initial; /* Resets everything */\n  color: blue; /* Then apply new styles */\n}\n.unset { all: unset; }",
      output: "Element loses all styling, reverts to browser defaults, then blue color applied.",
      note: "Useful for resetting UI components in third-party applications."
    },
    {
      question: "What is the difference between `position: sticky` and `position: fixed`?",
      answer: "sticky acts as relative until reaching threshold, then becomes fixed. fixed is always relative to viewport.",
      example: ".sticky-header { position: sticky; top: 0; }\n.fixed-button { position: fixed; bottom: 20px; right: 20px; }",
      output: "Sticky header scrolls normally then sticks to top. Fixed button always stays at bottom-right.",
      note: "Sticky requires top, bottom, left, or right threshold to work."
    },
    {
      question: "What are CSS `mix-blend-mode` and `background-blend-mode`?",
      answer: "mix-blend-mode blends element with background, background-blend-mode blends multiple backgrounds together.",
      example: ".overlay { mix-blend-mode: multiply; }\n.gradient-bg { background-blend-mode: screen; background: linear-gradient(red, blue), url(image.jpg); }",
      output: "Overlay multiplies with background, gradient and image blend with screen mode.",
      note: "Used for creative image effects, text overlays, and design accents."
    },
    {
      question: "What is the `min-width` and `max-width` properties?",
      answer: "min-width sets minimum width (element won't get smaller), max-width sets maximum width (element won't get larger).",
      example: ".container {\n  min-width: 200px;\n  max-width: 800px;\n  width: 100%;\n}",
      output: "Container always at least 200px, at most 800px, fills available space in between.",
      note: "Essential for responsive design and preventing broken layouts."
    },
    {
      question: "What is CSS `writing-mode` property?",
      answer: "writing-mode changes text direction (horizontal or vertical) for different languages.",
      example: ".vertical { writing-mode: vertical-rl; }\n.horizontal { writing-mode: horizontal-tb; }",
      output: "Text flows vertically right-to-left, traditional Chinese/Japanese style.",
      note: "Useful for vertical navigation menus, language localization, and creative layouts."
    },
    {
      question: "What is the difference between `data-*` attributes and CSS?",
      answer: "data-* store custom data in HTML, accessible via CSS attribute selectors and JavaScript.",
      example: "<div data-status=\"active\">\n  div[data-status=\"active\"] { background: green; }",
      output: "Element with data-status='active' gets green background.",
      note: "Data attributes are ideal for dynamic styling without extra classes."
    },
    {
      question: "What is CSS `gap` property? Where can it be used?",
      answer: "gap sets spacing between grid, flex, and multi-column items.",
      example: ".grid { display: grid; gap: 20px; }\n.flex { display: flex; gap: 10px; flex-wrap: wrap; }\n.columns { column-count: 3; column-gap: 30px; }",
      output: "Grid, flex items, and columns have consistent spacing between them.",
      note: "gap replaces margin hacks for spacing between layout items."
    },
    {
      question: "What is the difference between `:required` and `:optional`?",
      answer: ":required selects form inputs with required attribute. :optional selects inputs without required.",
      example: "input:required { border-color: red; }\ninput:optional { border-color: #ccc; }",
      output: "Required inputs have red border, optional inputs have gray border.",
      note: "Great for form validation styling without JavaScript."
    },
    {
      question: "What is CSS `isolation` property?",
      answer: "isolation creates new stacking context, preventing mix-blend-mode from affecting other elements.",
      example: ".isolated {\n  isolation: isolate;\n  mix-blend-mode: multiply;\n}",
      output: "Blend mode only affects this element and its children, not sibling elements.",
      note: "Useful for isolating blend modes and z-index management."
    },
    {
      question: "What is the difference between `grid-template-rows` and `grid-auto-rows`?",
      answer: "template-rows defines explicit row sizes, auto-rows sets size for implicit rows.",
      example: ".grid {\n  grid-template-rows: 100px 200px;\n  grid-auto-rows: 150px;\n}",
      output: "First two rows are 100px and 200px, any extra rows created are 150px.",
      note: "auto-rows prevents unexpected row sizing when content overflows."
    },
    {
      question: "What are CSS feature queries (`@supports`)?",
      answer: "@supports checks browser support for CSS features before applying styles.",
      example: "@supports (display: grid) {\n  .layout { display: grid; }\n}\n@supports not (backdrop-filter: blur(5px)) {\n  .glass { background: rgba(0,0,0,0.5); }\n}",
      output: "Grid layout used if supported, else fallback. Glass effect uses fallback if backdrop-filter unsupported.",
      note: "Essential for progressive enhancement with modern CSS features."
    },
    {
      question: "What is CSS `conic-gradient()`? Give use case.",
      answer: "conic-gradient creates gradient around a center point (like color wheel or pie chart).",
      example: ".pie-chart {\n  background: conic-gradient(\n    red 0% 25%,\n    blue 25% 50%,\n    green 50% 75%,\n    yellow 75% 100%\n  );\n  border-radius: 50%;\n}",
      output: "Creates a pie chart with four colored slices.",
      note: "Perfect for pie charts, color wheels, and circular progress indicators."
    },
    {
      question: "What is the difference between `:in-range` and `:out-of-range`?",
      answer: ":in-range selects inputs with value within min/max range. :out-of-range selects values outside range.",
      example: "input:in-range { border-color: green; }\ninput:out-of-range { border-color: red; }",
      output: "Valid number (18-99) shows green border; invalid (below 18 or above 99) shows red.",
      note: "Great for number inputs to provide visual validation feedback."
    },
    {
      question: "What is CSS `box-decoration-break`?",
      answer: "box-decoration-break controls how borders, padding, shadows apply to broken inline elements.",
      example: ".highlight {\n  background: yellow;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n  box-decoration-break: clone;\n}",
      output: "Each line of text has its own background and shadow when wrapped.",
      note: "Useful for multi-line highlighted text or styled inline elements."
    }
  ],
  experienced: [
    {
      question: "How do you create a responsive CSS-only modal with backdrop?",
      answer: "Use :target pseudo-class with hidden modal, fixed positioning, and backdrop.",
      example: ".modal {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.5);\n  z-index: 1000;\n}\n.modal:target { display: flex; align-items: center; justify-content: center; }\n.modal-content {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  animation: slideIn 0.3s ease;\n}",
      output: "Clicking link with href='#modal' opens modal with backdrop and slide animation.",
      note: "CSS-only modals lack focus trapping and ESC key support; add JavaScript for better accessibility."
    },
    {
      question: "What is CSS `@property` rule (Houdini API)?",
      answer: "@property registers custom CSS properties with defined syntax, inheritance, and initial value.",
      example: "@property --gradient-angle {\n  syntax: '<angle>';\n  inherits: false;\n  initial-value: 0deg;\n}\n.card {\n  background: linear-gradient(var(--gradient-angle), red, blue);\n  transition: --gradient-angle 0.5s;\n}\n.card:hover { --gradient-angle: 90deg; }",
      output: "Gradient angle animates smoothly on hover.",
      note: "Allows smooth transitions of custom properties that were previously not animatable."
    },
    {
      question: "How do you create a CSS-only image comparison slider?",
      answer: "Use range input to control width of overlapping image with JavaScript or CSS resize.",
      example: ".comparison {\n  position: relative;\n  display: inline-block;\n}\n.comparison img {\n  display: block;\n}\n.comparison .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n.comparison input {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n}",
      output: "Slider controls how much of overlay image is visible, creating before/after effect.",
      note: "JavaScript needed for real-time slider movement; CSS resize property is limited."
    },
    {
      question: "Explain CSS `subgrid` and its use cases.",
      answer: "Subgrid allows nested grid to inherit parent's grid lines for perfect alignment.",
      example: ".grid-parent {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n.grid-child {\n  display: grid;\n  grid-template-columns: subgrid;\n  grid-column: span 2;\n}",
      output: "Child grid uses same column tracks as parent, aligning content perfectly.",
      note: "Excellent for consistent card layouts, forms, and tabular data alignment."
    },
    {
      question: "What are CSS Scroll Snap points and how to implement them?",
      answer: "Scroll snap forces scrolling to stop at defined points using scroll-snap-type and scroll-snap-align.",
      example: ".snap-container {\n  scroll-snap-type: y mandatory;\n  height: 100vh;\n  overflow-y: scroll;\n}\n.snap-section {\n  scroll-snap-align: start;\n  height: 100vh;\n}",
      output: "Each section snaps to top of viewport when scrolling, like a full-page slideshow.",
      note: "Supports both horizontal and vertical snapping for carousels and pagination."
    },
    {
      question: "How do you debug CSS specificity issues?",
      answer: "Use browser DevTools to inspect computed styles, view selector specificity scores, and track overridden styles.",
      example: "In DevTools: Right-click element → Inspect → Styles panel shows applied rules with specificity scores and overridden styles.",
      output: "Shows which rule wins, why, and what rules are crossed out.",
      note: "Chrome and Firefox DevTools show specificity scores and style sources clearly."
    },
    {
      question: "What are CSS Container Queries? How do they differ from Media Queries?",
      answer: "Container queries style elements based on parent container size, not viewport size.",
      example: ".card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n@container card (min-width: 500px) {\n  .card { display: flex; gap: 20px; }\n}",
      output: "Card switches to flex layout only when its parent container is ≥500px wide.",
      note: "Enables true component-level responsiveness independent of viewport."
    },
    {
      question: "Explain the CSS `:has()` selector with complex use cases.",
      answer: ":has() selects parent containing specific children, solving the 'parent selector' problem.",
      example: "section:has(h2) { margin-top: 2rem; }\nform:has(input:invalid) { border: 1px solid red; }\narticle:has(img) { padding: 20px; }\n.card:has(.featured) { border: 2px solid gold; }",
      output: "Sections with h2 get margin, invalid forms get red border, articles with images get padding, cards with featured badge get gold border.",
      note: ":has() is a game-changer for reducing JavaScript selection logic."
    },
    {
      question: "What is `<gradient>` and different gradient types in CSS?",
      answer: "Gradients are smooth color transitions: linear, radial, conic, and repeating.",
      example: ".linear { background: linear-gradient(45deg, red, blue); }\n.radial { background: radial-gradient(circle, yellow, orange); }\n.conic { background: conic-gradient(red, yellow, green, blue, red); }\n.repeating { background: repeating-linear-gradient(red 0px, red 10px, blue 10px, blue 20px); }",
      output: "Different gradient patterns for various design needs.",
      note: "Gradients can be animated and used in background, border-image, and mask."
    },
    {
      question: "How do you create a CSS-only animated page loader?",
      answer: "Use keyframe animations on multiple elements with staggered animation-delay.",
      example: ".loader {\n  display: flex;\n  gap: 10px;\n}\n.loader div {\n  width: 15px;\n  height: 15px;\n  background: #3498db;\n  border-radius: 50%;\n  animation: bounce 0.6s ease-in-out infinite;\n}\n.loader div:nth-child(1) { animation-delay: 0s; }\n.loader div:nth-child(2) { animation-delay: 0.2s; }\n.loader div:nth-child(3) { animation-delay: 0.4s; }\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}",
      output: "Three dots bouncing sequentially, creating loading animation.",
      note: "Pure CSS loaders improve perceived performance and require no JavaScript."
    },
    {
      question: "What is CSS Layers (`@layer`) and how do they manage specificity?",
      answer: "@layer creates logical layers, with later layers overriding earlier regardless of specificity.",
      example: "@layer reset, base, components, utilities;\n@layer base { button { background: gray; } }\n@layer components { .btn-primary { background: blue; } }\n@layer utilities { .bg-red { background: red !important; } }",
      output: "Each layer overrides previous layers, with utilities having highest priority.",
      note: "Layers help manage third-party CSS and prevent specificity wars."
    },
    {
      question: "How do you implement a CSS-only tab component?",
      answer: "Use radio buttons and :checked pseudo-class to hide/show tab content.",
      example: "<div class=\"tabs\">\n  <input type=\"radio\" name=\"tabs\" id=\"tab1\" checked>\n  <label for=\"tab1\">Tab 1</label>\n  <div class=\"tab-content\">Content 1</div>\n  \n  <input type=\"radio\" name=\"tabs\" id=\"tab2\">\n  <label for=\"tab2\">Tab 2</label>\n  <div class=\"tab-content\">Content 2</div>\n</div>\n<style>\n  .tab-content { display: none; }\n  #tab1:checked ~ .tab-content:first-of-type { display: block; }\n  #tab2:checked ~ .tab-content:last-of-type { display: block; }\n</style>",
      output: "Clicking tabs switches content without JavaScript.",
      note: "Radio buttons ensure only one tab active at a time."
    },
    {
      question: "What is CSS `text-wrap` property and its values?",
      answer: "text-wrap controls text wrapping behavior: wrap, nowrap, balance, pretty.",
      example: ".balanced { text-wrap: balance; } /* Balanced line lengths */\n.pretty { text-wrap: pretty; } /* Better orphan prevention */\n.code { text-wrap: nowrap; }",
      output: "balance makes headings look professional, pretty prevents single words on new line.",
      note: "balance is great for headings, pretty for optimal reading experience."
    },
    {
      question: "Explain CSS `trigonometric functions` (sin, cos, tan).",
      answer: "CSS now supports sin(), cos(), tan() for advanced animations and positioning.",
      example: ".circle-motion {\n  animation: orbit 2s infinite linear;\n}\n@keyframes orbit {\n  0% { transform: translate(calc(sin(0deg) * 100px), calc(cos(0deg) * 100px)); }\n  100% { transform: translate(calc(sin(360deg) * 100px), calc(cos(360deg) * 100px)); }\n}",
      output: "Element moves in circular path using trigonometric functions.",
      note: "Enables complex mathematical layouts without JavaScript."
    },
    {
      question: "What are CSS `nth-child` formulas? List common patterns.",
      answer: "nth-child(an+b) formulas target patterns: odd, even, every 3rd, first 3, etc.",
      example: "li:nth-child(odd) { background: #f0f0f0; } /* 1,3,5 */\nli:nth-child(2n) { color: blue; } /* 2,4,6 */\nli:nth-child(3n+1) { font-weight: bold; } /* 1,4,7 */\nli:nth-child(-n+3) { border-top: 1px solid; } /* first 3 */\nli:nth-child(n+4) { color: gray; } /* from 4th onward */",
      output: "Various patterns for zebra striping, grid layouts, and special highlighting.",
      note: "Formulas are powerful for complex repeating patterns without extra classes."
    },
    {
      question: "How do you create a parallax effect with CSS only?",
      answer: "Use background-attachment: fixed or transform: translateZ with perspective.",
      example: ".parallax {\n  background-image: url('bg.jpg');\n  background-attachment: fixed;\n  background-size: cover;\n  height: 100vh;\n}\n/* 3D version */\n.container {\n  height: 100vh;\n  overflow-y: auto;\n  perspective: 1px;\n}\n.parallax-bg {\n  transform: translateZ(-1px) scale(2);\n  background-image: url('bg.jpg');\n}",
      output: "Background moves slower than foreground, creating depth illusion.",
      note: "background-attachment: fixed is simpler but has mobile performance issues."
    },
    {
      question: "What is CSS `color-mix()` function?",
      answer: "color-mix() mixes two colors in specified proportions.",
      example: ".mixed {\n  background: color-mix(in srgb, red 30%, blue);\n  border-color: color-mix(in hsl, #3498db 50%, white);\n}",
      output: "Creates 70% blue + 30% red color, and lighter blue border.",
      note: "Useful for dynamic theming and creating color variants without preprocessors."
    },
    {
      question: "Explain CSS `overflow-anchor` property.",
      answer: "overflow-anchor prevents scroll jumps when content loads above viewport.",
      example: "body { overflow-anchor: auto; } /* Default - prevents jumps */\n.comments { overflow-anchor: none; } /* Allow jumps in this container */",
      output: "Page doesn't jump when images load above current scroll position.",
      note: "Improves user experience on content-heavy pages like social media feeds."
    },
    {
      question: "How do you create a CSS-only accordion component?",
      answer: "Use details and summary HTML elements with CSS styling.",
      example: "details {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\nsummary {\n  padding: 15px;\n  cursor: pointer;\n  font-weight: bold;\n  user-select: none;\n}\ndetails[open] summary {\n  border-bottom: 1px solid #ddd;\n}\nsummary::before {\n  content: '▶';\n  display: inline-block;\n  margin-right: 10px;\n  transition: transform 0.3s;\n}\ndetails[open] summary::before {\n  transform: rotate(90deg);\n}\n.accordion-content {\n  padding: 15px;\n}",
      output: "Clicking summary expands/collapses content with animated arrow.",
      note: "details/summary works without JavaScript and is accessible by default."
    },
    {
      question: "What is CSS `@container` style queries?",
      answer: "Style queries check container's CSS properties, not just its size.",
      example: ".card-container {\n  container-type: inline-size;\n}\n@container style(--theme: dark) {\n  .card { background: #333; color: white; }\n}",
      output: "Card adapts based on custom property --theme value on container.",
      note: "Style queries enable truly reactive components based on parent state."
    },
    {
      question: "How do you implement CSS masonry layout without JavaScript?",
      answer: "Use CSS Grid with grid-template-rows: masonry (experimental) or multi-column layout.",
      example: ".masonry {\n  column-count: 3;\n  column-gap: 20px;\n}\n.masonry-item {\n  break-inside: avoid;\n  margin-bottom: 20px;\n}\n/* Grid version (Firefox) */\n.grid-masonry {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: masonry;\n}",
      output: "Items arrange in optimal columns without gaps, like Pinterest.",
      note: "Grid masonry is experimental; column-count is more widely supported."
    },
    {
      question: "What is CSS `accent-color` property?",
      answer: "accent-color sets color for form controls like checkboxes, radios, range sliders.",
      example: ":root { accent-color: #3498db; }\ninput[type=\"checkbox\"] { accent-color: green; }\ninput[type=\"range\"] { accent-color: red; }",
      output: "Checkboxes, radios, range inputs use custom colors matching brand.",
      note: "Great for consistent form styling without complex overrides."
    },
    {
      question: "Explain CSS `light-dark()` function.",
      answer: "light-dark() returns different values based on current color scheme (light/dark).",
      example: ":root {\n  color-scheme: light dark;\n}\nbody {\n  background: light-dark(white, black);\n  color: light-dark(black, white);\n}\n.button {\n  background: light-dark(#f0f0f0, #333);\n}",
      output: "Automatically switches colors in light vs dark mode.",
      note: "Simplifies dark mode implementation without media queries."
    },
    {
      question: "How do you create CSS-only animated gradient text?",
      answer: "Use linear-gradient background with background-clip: text and text-fill-color: transparent.",
      example: ".gradient-text {\n  background: linear-gradient(45deg, #ff006e, #ffbe0b, #3a86ff);\n  background-size: 200% auto;\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  animation: gradientMove 3s linear infinite;\n}\n@keyframes gradientMove {\n  0% { background-position: 0% 50%; }\n  100% { background-position: 200% 50%; }\n}",
      output: "Text shows animated shifting gradient colors.",
      note: "WebKit prefix needed for background-clip: text on text elements."
    },
    {
      question: "What is CSS `shorthand` properties? List important ones.",
      answer: "Shorthand properties combine multiple properties: background, margin, padding, border, font, flex, grid.",
      example: "/* Longhand */\nmargin-top: 10px; margin-right: 20px; margin-bottom: 10px; margin-left: 20px;\n/* Shorthand */\nmargin: 10px 20px;\n\n/* Background */\nbackground: #f0f0f0 url(image.jpg) no-repeat center center/cover;\n\n/* Border */\nborder: 2px solid black;\n\n/* Flex */\nflex: 1 1 auto;",
      output: "Cleaner, more concise CSS code.",
      note: "Shorthand order matters (e.g., margin: top right bottom left)."
    },
    {
      question: "What are CSS `comparison functions` (min, max, clamp)?",
      answer: "Functions for responsive values: min(smallest), max(largest), clamp(between values).",
      example: ".container {\n  width: min(100%, 800px);\n  font-size: max(16px, 2vw);\n  padding: clamp(10px, 5vw, 30px);\n  margin: clamp(20px, 10%, 80px);\n}",
      output: "Width never exceeds 800px, font never below 16px, padding scales between 10-30px.",
      note: "clamp() is the most powerful for fully responsive sizing."
    },
    {
      question: "How do you implement CSS-only star rating component?",
      answer: "Use flexbox direction reverse and sibling selectors on radio buttons.",
      example: ".rating {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n}\n.rating input { display: none; }\n.rating label {\n  font-size: 30px;\n  color: #ddd;\n  cursor: pointer;\n}\n.rating input:checked ~ label,\n.rating label:hover,\n.rating label:hover ~ label {\n  color: #ffc107;\n}",
      output: "Clicking stars fills them and all previous stars with yellow color.",
      note: "flex-direction: row-reverse makes hover effects work correctly."
    },
    {
      question: "Explain CSS `aspect-ratio` and `contain-intrinsic-size` relationship.",
      answer: "aspect-ratio reserves space, contain-intrinsic-size provides placeholder size for content-visibility.",
      example: ".image-gallery img {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  content-visibility: auto;\n  contain-intrinsic-size: 300px 169px;\n}",
      output: "Images reserve correct aspect ratio space, preventing layout shift when lazy loading.",
      note: "Combination improves CLS (Cumulative Layout Shift) and initial rendering performance."
    },
    {
      question: "What is CSS `variable fonts` and how to use them?",
      answer: "Variable fonts pack multiple font variations (weight, width, slant) in one file.",
      example: "@font-face {\n  font-family: 'Roboto Flex';\n  src: url('RobotoFlex.woff2');\n}\nbody {\n  font-family: 'Roboto Flex';\n  font-weight: 400;\n  font-variation-settings: 'wght' 400, 'wdth' 100;\n}\n.heading {\n  font-variation-settings: 'wght' 700;\n}",
      output: "Uses single font file for all weights, reducing HTTP requests.",
      note: "Variable fonts offer smooth interpolation between weight values."
    },
    {
      question: "How do you create CSS 3D flip card animation?",
      answer: "Use transform-style: preserve-3d and backface-visibility.",
      example: ".flip-card {\n  width: 300px;\n  height: 200px;\n  perspective: 1000px;\n}\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n}\n.flip-card-front { background: #3498db; }\n.flip-card-back {\n  background: #2ecc71;\n  transform: rotateY(180deg);\n}",
      output: "Card flips 180 degrees on hover to show back side.",
      note: "Use rotateX for vertical flip instead of rotateY."
    },
    {
      question: "What are CSS `revert`, `revert-layer`, and `unset` keywords?",
      answer: "unset resets inheritable properties to inherited, non-inheritable to initial; revert restores browser defaults.",
      example: ".reset { all: unset; } /* Resets everything */\n.component { all: revert; } /* Restores browser defaults */\n.custom { background: unset; }",
      output: "Different levels of CSS reset for better style management.",
      note: "revert-layer is for cascading layers; use with caution for complex projects."
    },
    {
      question: "How do you create CSS-only animated notification toast?",
      answer: "Use keyframe animations to slide in, display, and slide out.",
      example: ".toast {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: #333;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transform: translateX(150%);\n  animation: slideIn 0.3s forwards, fadeOut 0.3s 2.7s forwards;\n}\n@keyframes slideIn {\n  to { transform: translateX(0); }\n}\n@keyframes fadeOut {\n  to { opacity: 0; visibility: hidden; }\n}",
      output: "Toast slides in, stays for 3 seconds, then fades out.",
      note: "JavaScript needed to create and remove toasts dynamically."
    },
    {
      question: "Explain CSS `:focus-visible` and `:focus-within`.",
      answer: ":focus-visible matches when focus indicator should be visible (keyboard navigation). :focus-within matches when any child is focused.",
      example: "button:focus-visible { outline: 2px solid blue; } /* Keyboard only */\nform:focus-within { box-shadow: 0 0 0 2px blue; } /* Highlights form when any input focused */",
      output: "Keyboard users see focus ring, mouse users don't. Form highlights when editing.",
      note: ":focus-visible is key for accessible focus indicators without annoying mouse users."
    },
    {
      question: "What is CSS `floating` and its modern alternatives?",
      answer: "Float originally used for text wrapping around images. Modern alternatives: Flexbox, Grid, CSS Shapes.",
      example: "/* Old float */\nimg { float: left; margin-right: 20px; }\n\n/* Modern grid */\n.container { display: grid; grid-template-columns: auto 1fr; gap: 20px; }\n\n/* CSS Shapes */\nimg { shape-outside: circle(50%); margin: 20px; }",
      output: "Grid and flexbox replace most float uses; CSS Shapes enable text wrapping around complex shapes.",
      note: "Float still useful for wrapping text around images in articles."
    },
    {
      question: "How do you implement CSS smooth scrolling with offset for fixed header?",
      answer: "Use scroll-padding-top property to prevent content hiding under fixed header.",
      example: "html {\n  scroll-behavior: smooth;\n  scroll-padding-top: 80px; /* Height of fixed header */\n}\n:target {\n  scroll-margin-top: 80px; /* Alternative per-element */\n}",
      output: "Hash links scroll to sections without hiding under fixed header.",
      note: "scroll-padding-top applies to all scrolls; scroll-margin-top per element."
    },
    {
      question: "What is CSS `color-scheme` and how it helps dark mode?",
      answer: "color-scheme tells browser which color schemes element supports, enabling native UI adaptation.",
      example: ":root {\n  color-scheme: light dark;\n}\n/* Browser automatically adapts scrollbars, form controls */\nselect, input { color-scheme: dark; }",
      output: "Browser UI elements switch to dark mode when system prefers dark.",
      note: "Works with prefers-color-scheme for complete dark mode implementation."
    },
    {
      question: "Explain CSS `logical properties` with RTL example.",
      answer: "Logical properties work for different writing modes, crucial for RTL languages.",
      example: ".container {\n  margin-inline: auto; /* Centers in both LTR and RTL */\n  padding-inline: 20px;\n  border-inline-start: 2px solid red;\n}\n/* For LTR: left border, RTL: right border */",
      output: "Same CSS works for English (LTR) and Arabic (RTL) without changes.",
      note: "Use logical properties for international websites to save time."
    },
    {
      question: "What are CSS `selector lists` and when to use them?",
      answer: "Selector lists group multiple selectors sharing same declaration block.",
      example: "h1, h2, h3 { font-family: 'Arial', sans-serif; }\n.error, .warning, .alert { background: yellow; }\n.btn, button, [type=\"button\"] { cursor: pointer; }",
      output: "Multiple selectors get same styles, reducing code duplication.",
      note: "Long selector lists impact performance; keep them reasonable."
    },
    {
      question: "How do you implement CSS-only number counter animation?",
      answer: "Use CSS steps in animation to increment counter content.",
      example: "@property --num {\n  syntax: '<integer>';\n  initial-value: 0;\n  inherits: false;\n}\n.counter {\n  animation: countUp 2s forwards;\n  counter-reset: num var(--num);\n}\n.counter::after { content: counter(num); }\n@keyframes countUp {\n  from { --num: 0; }\n  to { --num: 100; }\n}",
      output: "Number counts from 0 to 100 over 2 seconds.",
      note: "@property needed for smooth animation of integers."
    },
    {
      question: "What is CSS `glyph-orientation` property?",
      answer: "glyph-orientation controls text character orientation in vertical writing modes.",
      example: ".vertical-text {\n  writing-mode: vertical-rl;\n  glyph-orientation: upright;\n}\n.rotated-text {\n  writing-mode: vertical-rl;\n  glyph-orientation: auto;\n}",
      output: "Characters remain upright in first, rotate 90° in second example.",
      note: "Important for East Asian typography and multilingual layouts."
    }
  ]
};
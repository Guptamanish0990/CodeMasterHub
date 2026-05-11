// /data/css/learning.js

export const learning = {
  basic: {
    title: "🎨 CSS Basics - Complete Beginner's Guide",
    description: "CSS (Cascading Style Sheets) is the language that makes websites beautiful. It controls colors, fonts, spacing, layouts, and animations. This comprehensive guide covers everything from basic syntax to modern CSS features with practical examples. Perfect for beginners starting their web development journey.",
    
    topics: [
      // ==================== TOPIC 1: CSS SYNTAX ====================
      {
        name: "1. CSS SYNTAX & BASIC STRUCTURE",
        description: "CSS (Cascading Style Sheets) tells browsers how HTML elements should look — their colors, sizes, spacing, fonts, and everything visual. A CSS rule has two parts: a selector (which element to style) and a declaration block (what styles to apply). Each declaration contains a property and a value, separated by a colon. Multiple declarations are separated by semicolons.",
        code: `/* Basic CSS Rule Structure */
selector {
    property: value;
    property: value;
}

/* Example */
h1 {
    color: blue;
    font-size: 30px;
    margin: 10px;
    background: lightyellow;
    padding: 8px;
}

/* Multiple elements together */
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: navy;
}`,
        lineByLine: [
          "Line 1: /* ... */ - CSS comment, ignored by browser (explains code)",
          "Line 2: selector { - Targets HTML elements (h1, p, .class, #id)",
          "Line 3: property: value; - One CSS rule (property: how to change, value: what to change to)",
          "Line 4: property: value; - Another CSS rule",
          "Line 5: } - Closes the declaration block",
          "Line 8: h1 { - Targets ALL h1 heading elements",
          "Line 9: color: blue; - Makes text color blue",
          "Line 10: font-size: 30px; - Makes text size 30 pixels",
          "Line 11: margin: 10px; - Adds 10px space outside element",
          "Line 12: background: lightyellow; - Sets background color",
          "Line 13: padding: 8px; - Adds 8px space inside element",
          "Line 14: } - Closes h1 styling",
          "Line 17: h1, h2, h3 { - Targets multiple elements at once",
          "Line 18: font-family: Arial, sans-serif; - Sets font to Arial or generic sans-serif",
          "Line 19: color: navy; - Makes text dark blue",
          "Line 20: } - Closes group styling"
        ],
        simpleMeaning: "CSS selects HTML elements and tells them how to look (colors, sizes, spacing).",
        output: "h1 text becomes blue, 30px large, with 10px margin and light yellow background.",
        note: "Semicolon (;) after every property is required, otherwise the next property won't work. Curly brackets {} are mandatory."
      },
      
      // ==================== TOPIC 2: WAYS TO ADD CSS ====================
      {
        name: "2. 3 WAYS TO ADD CSS",
        description: "There are three ways to add CSS to HTML: Inline (directly on element using style attribute — highest priority but hard to maintain), Internal (inside style tag in head section — applies to whole page), External (separate .css file linked via link tag — best for multiple pages). Professional projects always use external CSS.",
        code: `<!-- 1. Inline CSS — only this element -->
<h1 style="color: red; font-size: 24px;">Inline CSS Example</h1>

<!-- 2. Internal CSS — this whole page -->
<head>
<style>
    .card {
        background: lightblue;
        padding: 20px;
        border-radius: 8px;
    }
    p { color: darkgreen; }
</style>
</head>

<!-- 3. External CSS — separate file (Best) -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>

/* styles.css file content */
body { font-family: Arial; }
h1 { color: navy; }`,
        lineByLine: [
          "Line 1: <!-- ... --> - HTML comment",
          "Line 2: <h1 style=\"color: red; font-size: 24px;\"> - Inline CSS directly in element",
          "Line 5-11: <style> tag - Internal CSS inside HTML head",
          "Line 6: .card { - Class selector (targets elements with class='card')",
          "Line 7: background: lightblue; - Light blue background",
          "Line 8: padding: 20px; - 20px space inside element",
          "Line 9: border-radius: 8px; - Rounds corners",
          "Line 10: } - Closes card styling",
          "Line 11: p { color: darkgreen; } - Targets all paragraphs",
          "Line 14-16: <link rel=\"stylesheet\" href=\"styles.css\"> - Links external CSS file",
          "Line 18-20: External styles.css file content"
        ],
        simpleMeaning: "Inline = on specific element. Internal = whole page. External = separate file (best for multiple pages).",
        output: "Inline affects single element. Internal affects whole page. External affects all pages that link to it.",
        note: "Always use external CSS for professional projects. Maintenance is easy and pages load faster."
      },
      
      // ==================== TOPIC 3: SPECIFICITY ====================
      {
        name: "3. CSS SPECIFICITY — PRIORITY ORDER",
        description: "When multiple CSS rules target the same element, the browser uses specificity to decide which rule applies. Higher score wins: Universal selector (*) = 0, Element selector (div, p) = 1, Class selector (.box) = 10, ID selector (#header) = 100, Inline style = 1000, !important = highest (overrides everything). If scores are equal, the later rule applies (cascade).",
        code: `/* Specificity Score — Higher = Wins */

*              { color: gray; }   /* 0  */
p              { color: black; }  /* 1  */
.my-class      { color: blue; }   /* 10 */
#my-id         { color: green; }  /* 100*/

/* Inline style = 1000 — highest priority */
<p style="color: red;">Text</p>

/* !important overrides everything */
p { color: purple !important; }

/* Combined specificity */
div p          /* 1+1 = 2  */
div.card p     /* 1+10+1 = 12 */
#nav .link     /* 100+10 = 110 */`,
        lineByLine: [
          "Line 4: * { color: gray; } - Universal selector (matches everything) — specificity 0",
          "Line 5: p { color: black; } - Element selector (matches p tags) — specificity 1",
          "Line 6: .my-class { color: blue; } - Class selector — specificity 10",
          "Line 7: #my-id { color: green; } - ID selector — specificity 100",
          "Line 10: <p style=\"color: red;\"> - Inline style — specificity 1000 (highest normal)",
          "Line 13: p { color: purple !important; } - !important overrides everything (use sparingly)",
          "Line 16: div p - Element + element = 1+1 = 2 specificity",
          "Line 17: div.card p - Element + class + element = 1+10+1 = 12",
          "Line 18: #nav .link - ID + class = 100+10 = 110"
        ],
        simpleMeaning: "More specific selectors (ID > class > element) win. Inline beats all. !important beats everything (avoid it).",
        output: "Inline beats internal. ID beats class. Class beats element selector.",
        note: "Use !important only in emergencies. Breaking natural cascade is bad practice. Prefer classes over IDs."
      },
      
      // ==================== TOPIC 4: BASIC SELECTORS ====================
      {
        name: "4. BASIC SELECTORS",
        description: "Selectors tell CSS which HTML elements to style. This is the most important part of CSS. Universal selector (*) targets every element (used for resets). Element/Type selector targets all elements with that tag. Class selector (.) targets all elements with that class — reusable across multiple elements. ID selector (#) targets a unique element — use only once per page. Group selector (,) applies same styles to multiple selectors at once.",
        code: `/* Universal — every element */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Element selector — all p tags */
p {
    color: #333;
    line-height: 1.6;
}

/* Class selector — all .card elements */
.card {
    background: white;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 16px;
}

/* ID selector — only #main-header */
#main-header {
    background: navy;
    color: white;
    padding: 20px;
}

/* Group — all together */
h1, h2, h3, h4 {
    font-family: Arial;
    font-weight: bold;
    color: #1a1a1a;
}`,
        lineByLine: [
          "Line 2: * { - Universal selector (targets EVERY element on page)",
          "Line 3: margin: 0; - Removes all default margins",
          "Line 4: padding: 0; - Removes all default padding",
          "Line 5: box-sizing: border-box; - Includes padding/border in width calculation",
          "Line 9: p { - Element selector (targets all paragraph tags)",
          "Line 10: color: #333; - Dark gray text color",
          "Line 11: line-height: 1.6; - Spacing between lines of text",
          "Line 15: .card { - Class selector (targets elements with class='card')",
          "Line 16: background: white; - White background",
          "Line 17: border: 1px solid #eee; - Thin light gray border",
          "Line 18: border-radius: 8px; - Rounded corners",
          "Line 19: padding: 16px; - Space inside element",
          "Line 23: #main-header { - ID selector (should only appear once per page)",
          "Line 24: background: navy; - Dark blue background",
          "Line 25: color: white; - White text",
          "Line 26: padding: 20px; - 20px padding all sides",
          "Line 30: h1, h2, h3, h4 { - Group selector (applies to all listed)",
          "Line 31: font-family: Arial; - Changes font",
          "Line 32: font-weight: bold; - Makes text bold",
          "Line 33: color: #1a1a1a; - Very dark gray text"
        ],
        simpleMeaning: "* = everything. p = all paragraphs. .class = all with that class. #id = one specific element.",
        output: "Universal affects all, element affects all of that tag, class affects all with that class, ID affects only one.",
        note: "Prefer classes over IDs — they are reusable. Use ID only once per page."
      },
      
      // ==================== TOPIC 5: COMBINATORS ====================
      {
        name: "5. COMBINATOR SELECTORS",
        description: "Combinator selectors target elements based on their relationships with other elements without adding extra classes. Descendant (space) — any nested descendant. Child (>) — only direct children. Adjacent sibling (+) — immediately following sibling. General sibling (~) — all following siblings.",
        code: `/* Descendant (space) — all nested p */
.container p {
    color: blue;
}

/* Child (>) — only direct children */
.nav > li {
    display: inline-block;
}

/* Adjacent Sibling (+) — immediately after */
h2 + p {
    font-size: 18px;
    color: gray;
}

/* General Sibling (~) — all after */
h2 ~ p {
    margin-left: 20px;
}

/* Practical use — nested nav */
nav ul li a {
    text-decoration: none;
    color: white;
}
nav > ul > li > a {
    font-weight: bold;
}`,
        lineByLine: [
          "Line 2: .container p { - Descendant selector (space) — any p inside .container",
          "Line 3: color: blue; - Makes all nested paragraphs blue",
          "Line 8: .nav > li { - Child selector (>) — only direct li children of .nav",
          "Line 9: display: inline-block; - Makes list items horizontal",
          "Line 14: h2 + p { - Adjacent sibling (+) — p immediately AFTER h2",
          "Line 15: font-size: 18px; - Larger font for first paragraph after heading",
          "Line 16: color: gray; - Gray color for that paragraph",
          "Line 21: h2 ~ p { - General sibling (~) — all p AFTER h2 (not just first)",
          "Line 22: margin-left: 20px; - Indents all paragraphs after heading",
          "Line 27: nav ul li a { - Descendant selector — any a inside nav",
          "Line 28: text-decoration: none; - Removes underline from all links",
          "Line 29: color: white; - All links white",
          "Line 31: nav > ul > li > a { - Child selector — only direct a (one level deep)",
          "Line 32: font-weight: bold; - Makes top-level links bold"
        ],
        simpleMeaning: "Space = any descendant. > = direct children only. + = next sibling. ~ = all following siblings.",
        output: "Space selects all nested. > selects only direct children. + selects next sibling. ~ selects all following siblings.",
        note: "Use child selector (>) when you only want direct children — avoids accidentally selecting deeply nested elements."
      },
      
      // ==================== TOPIC 6: PSEUDO-CLASSES ====================
      {
        name: "6. PSEUDO-CLASSES — ELEMENT STATES",
        description: "Pseudo-classes target elements in special states — when mouse hovers, when input is focused, when link is visited, etc. Common ones: :hover (mouse over), :focus (input selected), :active (being clicked), :visited (already clicked link), :first-child/:last-child, :nth-child(n), :not() (exclude matching elements). Link order matters: link, visited, hover, active (LoVe HAte).",
        code: `/* Link states — order matters! */
a:link    { color: blue; }
a:visited { color: purple; }
a:hover   { color: red; text-decoration: underline; }
a:active  { color: green; }

/* Input focus */
input:focus {
    outline: none;
    border: 2px solid blue;
    box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
}

/* Form states */
input:disabled { background: #f0f0f0; color: #999; }
input:checked  { accent-color: green; }

/* Position based */
li:first-child  { font-weight: bold; }
li:last-child   { color: red; }
li:nth-child(odd)  { background: #fafafa; }
li:nth-child(even) { background: white; }

/* Negation */
div:not(.special) { opacity: 0.5; }`,
        lineByLine: [
          "Line 2: a:link - Unvisited link state",
          "Line 3: a:visited - Visited link state (already clicked)",
          "Line 4: a:hover - Mouse hover state",
          "Line 5: a:active - Being clicked state",
          "Line 8: input:focus - When input is selected/clicked",
          "Line 9: outline: none; - Removes default blue outline",
          "Line 10: border: 2px solid blue; - Adds blue border",
          "Line 13: input:disabled - Disabled input state",
          "Line 14: input:checked - Checked checkbox/radio state",
          "Line 17: li:first-child - First list item only",
          "Line 18: li:last-child - Last list item only",
          "Line 19: li:nth-child(odd) - Every odd-numbered item (1,3,5)",
          "Line 20: li:nth-child(even) - Every even-numbered item (2,4,6)",
          "Line 23: div:not(.special) - All divs WITHOUT class='special'"
        ],
        simpleMeaning: ":hover = mouse over. :focus = input selected. :active = being clicked. :first-child = first child.",
        output: "Link changes color on hover. Input gets blue border on focus. Alternating list items have different backgrounds.",
        note: "Remember link pseudo-class order — LoVe HAte (Link, Visited, Hover, Active). Wrong order won't work properly."
      },
      
      // ==================== TOPIC 7: PSEUDO-ELEMENTS ====================
      {
        name: "7. PSEUDO-ELEMENTS",
        description: "Pseudo-elements style specific parts of an element or add content without extra HTML. ::before and ::after inject content before/after element (requires content property). ::first-letter styles first character (drop cap). ::first-line styles first line. ::selection changes highlight color when text is selected.",
        code: `/* Drop cap — first letter large */
p::first-letter {
    font-size: 52px;
    font-weight: bold;
    color: navy;
    float: left;
    margin-right: 6px;
}

/* First line different style */
p::first-line {
    font-weight: bold;
    color: darkblue;
}

/* Add content before element */
.quote::before {
    content: '"';
    font-size: 40px;
    color: #ccc;
}

/* Add content after element */
.price::after {
    content: " ₹";
    color: green;
    font-weight: bold;
}

/* Text selection style */
::selection {
    background: navy;
    color: white;
}`,
        lineByLine: [
          "Line 2: p::first-letter - Targets first letter of every paragraph",
          "Line 3: font-size: 52px; - Makes first letter much larger",
          "Line 4: font-weight: bold; - Makes it bold",
          "Line 5: color: navy; - Dark blue color",
          "Line 6: float: left; - Allows text to wrap around it",
          "Line 10: p::first-line - Targets first line of every paragraph",
          "Line 11: font-weight: bold; - First line bold",
          "Line 16: .quote::before - Adds content BEFORE elements with class='quote'",
          "Line 17: content: '\"'; - REQUIRED — what to insert (double quote)",
          "Line 18: font-size: 40px; - Large quote mark",
          "Line 23: .price::after - Adds content AFTER price elements",
          "Line 24: content: \" ₹\"; - Adds space and rupee symbol",
          "Line 25: color: green; - Green rupee symbol",
          "Line 29: ::selection - When user selects text with mouse",
          "Line 30: background: navy; - Dark blue highlight background",
          "Line 31: color: white; - White selected text"
        ],
        simpleMeaning: "::before/::after add content without extra HTML. ::first-letter styles first character.",
        output: "First letter becomes large drop cap. ::before/::after add content without extra HTML.",
        note: "Use double colon (::) for pseudo-elements. ::before/::after require content property — can be empty string ''."
      },
      
      // ==================== TOPIC 8: COLOR VALUES ====================
      {
        name: "8. COLOR VALUES — 4 WAYS",
        description: "CSS offers multiple ways to define colors. Named colors (red, blue, tomato) — simple cases. HEX (#RRGGBB) — most popular, uses hex values 00-FF. RGB/RGBA — rgb(255,0,0) uses 0-255 values. RGBA adds alpha for transparency. HSL/HSLA — hue (0-360°), saturation (%), lightness (%) — most intuitive for humans.",
        code: `/* 1. Named Colors (147 standard names) */
color: red;
color: blue;
color: tomato;

/* 2. HEX Colors */
color: #FF0000;      /* pure red */
color: #F00;         /* shorthand */
color: #FF000080;    /* 8 digit — 50% transparent */

/* 3. RGB / RGBA */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);   /* 50% transparent */

/* 4. HSL / HSLA */
color: hsl(0, 100%, 50%);      /* red */
color: hsl(120, 100%, 50%);    /* green */
color: hsla(0, 100%, 50%, 0.5);`,
        lineByLine: [
          "Line 2: color: red; - Named color (simple, 147 standard names)",
          "Line 6: #FF0000 - Hex code: FF=red, 00=green, 00=blue",
          "Line 7: #F00 - Shorthand for #FF0000 (each digit doubled)",
          "Line 8: #FF000080 - 8-digit hex: FF=red, 00=green, 00=blue, 80=50% transparency",
          "Line 11: rgb(255, 0, 0) - Red=255(max), Green=0, Blue=0 = pure red",
          "Line 12: rgba(255, 0, 0, 0.5) - Red with 50% transparency",
          "Line 15: hsl(0, 100%, 50%) - Hue 0°=red, 100% saturation, 50% lightness",
          "Line 16: hsl(120, 100%, 50%) - Hue 120°=green",
          "Line 17: hsla(0, 100%, 50%, 0.5) - Red with 50% transparency"
        ],
        simpleMeaning: "Named = color name. HEX = #RRGGBB. RGB = rgb(red,green,blue). HSL = hue,saturation,lightness.",
        output: "Named: tomato. Hex: #FF6347. RGB: rgb(255,99,71). HSL: hsl(9,100%,64%). All produce same tomato color.",
        note: "Use HSL for color shades — just change lightness. RGBA for transparency. HEX is most common."
      },
      
      // ==================== TOPIC 9: NTH-CHILD ====================
      {
        name: "9. PSEUDO-CLASSES — NTH CHILD PATTERNS",
        description: "nth-child selector is very powerful — uses formulas to target elements in patterns. :nth-child(n) — nth position. :nth-child(odd) — positions 1,3,5. :nth-child(even) — positions 2,4,6. :nth-child(3n) — every 3rd element (3,6,9...). :nth-child(3n+1) — starting from 1st, every 3rd. Perfect for alternating row colors, grids, and lists.",
        code: `/* Specific position */
li:nth-child(3) { color: red; }      /* only 3rd */

/* Odd/Even rows */
tr:nth-child(odd)  { background: #f5f5f5; }
tr:nth-child(even) { background: white; }

/* Every 3rd element */
li:nth-child(3n) { border-bottom: 1px solid red; }

/* Starting from 1st, every 3rd */
li:nth-child(3n+1) { font-weight: bold; }

/* Last 2 elements */
li:nth-last-child(-n+2) { color: green; }

/* Only child */
p:only-child { text-align: center; }`,
        lineByLine: [
          "Line 2: li:nth-child(3) - Targets only the 3rd list item",
          "Line 5: tr:nth-child(odd) - Every odd table row (1st,3rd,5th)",
          "Line 6: tr:nth-child(even) - Every even table row (2nd,4th,6th)",
          "Line 9: li:nth-child(3n) - Every 3rd element (3n = 3,6,9,12...)",
          "Line 12: li:nth-child(3n+1) - Starting from 1st, every 3rd (1,4,7,10...)",
          "Line 15: li:nth-last-child(-n+2) - Counts from end: -n+2 = last 2 items",
          "Line 18: p:only-child - Paragraph that is the ONLY child of its parent"
        ],
        simpleMeaning: "odd/even for alternating rows. 3n for every 3rd. 3n+1 for starting from 1st, every 3rd.",
        output: "Every other table row has different background. Every 3rd list item has bottom border. Last 2 items are green.",
        note: "nth-child(2n) = even, nth-child(2n+1) = odd, nth-child(3n) = every 3rd. Formula format is An+B."
      },
      
      // ==================== TOPIC 10: GRADIENTS ====================
      {
        name: "10. GRADIENTS — LINEAR, RADIAL, CONIC",
        description: "Gradients create smooth color transitions between multiple colors without using images. Linear gradient — straight line, direction can be degrees or keywords (to right, to bottom). Radial gradient — circular or elliptical, spreads from center outward. Conic gradient — rotates around a center point (like color wheel).",
        code: `/* Linear Gradient — straight line */
.hero {
    background: linear-gradient(to right, #3498db, #2ecc71);
    background: linear-gradient(135deg, #667eea, #764ba2);
    background: linear-gradient(
        to right,
        red 0%,
        yellow 50%,
        green 100%
    );
}

/* Radial Gradient — from center outward */
.glow {
    background: radial-gradient(circle, #fff, #3498db);
    background: radial-gradient(
        ellipse at top left,
        #f093fb,
        #f5576c
    );
}

/* Conic Gradient — like color wheel */
.pie {
    background: conic-gradient(
        red 0% 25%,
        yellow 25% 50%,
        green 50% 75%,
        blue 75% 100%
    );
    border-radius: 50%;
}`,
        lineByLine: [
          "Line 2: background: linear-gradient(to right, #3498db, #2ecc71) - Horizontal gradient left to right",
          "Line 3: linear-gradient(135deg, #667eea, #764ba2) - Diagonal gradient at 135 degrees",
          "Line 4-8: Multiple color stops - Red at 0%, yellow at 50%, green at 100%",
          "Line 12: radial-gradient(circle, #fff, #3498db) - Circular gradient from center",
          "Line 13-15: radial-gradient(ellipse at top left, ...) - Starts from top-left corner",
          "Line 19-24: conic-gradient - Colors rotate around center point (pie chart)",
          "Line 25: border-radius: 50%; - Makes it a circle (for pie chart)"
        ],
        simpleMeaning: "Linear = straight line gradient. Radial = from center outward. Conic = around center point.",
        output: "Smooth color transitions. Linear moves in straight line. Radial spreads from center.",
        note: "Gradients are backgrounds, not text colors. Use background-clip: text trick for gradient text."
      },
      // ==================== BOX MODEL ====================
{
  name: "11. BOX MODEL — COMPLETE",
  description: "Every HTML element is a box with four layers from inside out: Content — actual text/image (width/height apply here). Padding — space between content and border (background color applies here). Border — outline of the box (width, style, color). Margin — space between this element and others (transparent). The total width calculation differs between box-sizing models: content-box adds padding and border to width, while border-box includes them inside the specified width. Margin collapse happens when vertical margins of adjacent block elements combine into the larger margin. Understanding the box model is essential for creating precise layouts without unexpected spacing or overflow issues. Always use the universal selector to set box-sizing: border-box for consistent sizing across all elements.",
  code: `.box {
    width: 300px;
    padding: 20px;
    border: 2px solid #3498db;
    margin: 20px auto;
    box-sizing: border-box;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Global reset — ALWAYS use at project start */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Margin collapse example */
.box1 { margin-bottom: 30px; }
.box2 { margin-top: 20px; }
/* Result: Gap between them is 30px (largest, not 50px) */`,
  lineByLine: [
    "Line 2: width: 300px; - Content width (with border-box, total width)",
    "Line 3: padding: 20px; - Space INSIDE element, between content and border",
    "Line 4: border: 2px solid #3498db; - Border around element",
    "Line 5: margin: 20px auto; - Space OUTSIDE element, auto centers horizontally",
    "Line 6: box-sizing: border-box; - Includes padding/border in width/height calculation",
    "Line 7: box-shadow: 0 4px 12px rgba(0,0,0,0.15); - Adds shadow outside element",
    "Line 12-15: Global reset removes default margins/padding and sets border-box",
    "Line 19-21: Margin collapse — only larger margin remains, not sum"
  ],
  simpleMeaning: "Content inside, padding around content, border around padding, margin outside border. border-box makes width include padding+border.",
  output: "Elements with consistent sizing. Padding adds space inside without breaking layouts. Margin creates external spacing. Shadows add depth.",
  note: "Always add * { box-sizing: border-box } at project start — it's the #1 CSS best practice. Margin collapses vertically between blocks."
},

// ==================== BORDERS (7) ====================
{
  name: "12. BORDERS — STYLES, RADIUS, SHADOWS",
  description: "Border properties draw lines around elements with extensive customization options. border-style defines line types: solid (continuous), dashed (broken line), dotted (dots), double (two lines), groove/ridge (3D carved effects), inset/outset (pressed/pop-out effects). border-width controls thickness using px, em, rem, or keywords (thin, medium, thick). border-color accepts any color format including transparent. border-radius rounds corners — 50% creates perfect circles, 9999px creates pills. box-shadow adds depth with offset-x, offset-y, blur, spread, and color — inset creates inner shadows. border-image allows using images as borders with slicing. Outline is similar to border but doesn't affect layout (great for focus indicators). Individual side properties give precise control over each edge independently.",
  code: `.card {
    border: 2px solid #3498db;
    border-radius: 12px;
}

/* Circle avatar */
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

/* Pill badge */
.badge {
    border-radius: 9999px;
    padding: 4px 12px;
    background: #e74c3c;
    color: white;
}

/* Dashed border notice */
.notice {
    border: 2px dashed #ff9800;
    background: #fff3e0;
    padding: 15px;
    border-radius: 8px;
}

/* Multiple box shadows */
.elevated {
    box-shadow: 
        0 2px 4px rgba(0,0,0,0.1),
        0 8px 16px rgba(0,0,0,0.1),
        0 16px 32px rgba(0,0,0,0.1);
}

/* Outline for focus (doesn't affect layout) */
button:focus {
    outline: 3px solid #3498db;
    outline-offset: 2px;
}`,
  lineByLine: [
    "Line 2: border: 2px solid #3498db; - Shorthand: width, style, color",
    "Line 3: border-radius: 12px; - Rounded corners (all sides)",
    "Line 8-14: Circle avatar — 50% border-radius makes perfect circle",
    "Line 9-10: width/height must be equal for perfect circle",
    "Line 12: border: 3px solid white; - Adds frame around avatar",
    "Line 13: box-shadow - Adds depth shadow",
    "Line 18-23: Pill badge — 9999px creates fully rounded ends",
    "Line 27-31: Dashed border — great for notices and alerts",
    "Line 35-40: Multiple shadows — each separated by comma",
    "Line 44-47: Outline — similar to border but doesn't affect layout sizing",
    "Line 46: outline-offset: 2px; - Space between element and outline"
  ],
  simpleMeaning: "border draws lines around elements. border-radius rounds corners (50% = circle). box-shadow adds depth. outline doesn't affect layout.",
  output: "Rounded corners on cards and buttons. Circular avatars with border frames. Pill-shaped badges. Dashed borders for notices. Elevation shadows.",
  note: "Use border-radius: 50% for perfect circles, 9999px for pills. Outline is great for focus indicators as it doesn't shift layout."
},

// ==================== TEXT & TYPOGRAPHY (21) ====================
{
  name: "13. TEXT & TYPOGRAPHY",
  description: "Typography properties control text appearance for optimal readability and visual appeal. font-family specifies typeface with fallback options for different operating systems. font-size uses px (absolute), rem (relative to root — best for accessibility), em (relative to parent), vw (viewport width), or clamp() for responsive fluid sizing. font-weight controls boldness from 100 (thin) to 900 (black) — 400 is normal, 700 is bold. line-height sets spacing between lines — use unitless values (1.5) for proper scaling. text-align aligns content left, right, center, or justify. text-decoration adds underline, overline, line-through with optional style and color. text-transform changes case (uppercase, lowercase, capitalize). letter-spacing adjusts character spacing (tracking). text-shadow adds depth with offset, blur, and color. web fonts via @font-face or Google Fonts enable custom typography.",
  code: `/* Base typography setup */
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

/* Responsive heading with clamp() */
h1 {
    font-size: clamp(1.8rem, 5vw, 3.5rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
}

/* Text truncation with ellipsis */
.truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
}

/* Drop cap styling */
.drop-cap::first-letter {
    font-size: 4em;
    font-weight: bold;
    float: left;
    margin-right: 8px;
    line-height: 0.8;
    color: #3498db;
}

/* Text shadow effect */
.shadow-text {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Multiple line truncation (webkit) */
.multiline-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Google Font import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Custom font face */
@font-face {
    font-family: 'CustomFont';
    src: url('fonts/custom.woff2') format('woff2');
    font-weight: normal;
    font-display: swap;
}`,
  lineByLine: [
    "Line 2-6: body typography — system font stack for performance",
    "Line 3: font-family with fallbacks ensures consistency across OS",
    "Line 5: line-height: 1.6 — unitless multiplier of font-size",
    "Line 10-15: clamp() for responsive headings — min, preferred, max",
    "Line 11: clamp(1.8rem, 5vw, 3.5rem) — grows with screen but limited",
    "Line 16: letter-spacing: -0.02em — slightly tighter tracking",
    "Line 20-24: text truncation — single line with ellipsis",
    "Line 21: white-space: nowrap — prevents wrapping",
    "Line 23: text-overflow: ellipsis — adds '...' at the end",
    "Line 28-36: Drop cap — ::first-letter pseudo-element",
    "Line 31: float: left — allows text to wrap around the drop cap",
    "Line 41-43: text-shadow — offset-x, offset-y, blur, color",
    "Line 47-52: Multi-line truncation — shows 3 lines then ellipsis",
    "Line 56: @import — loads Google Fonts (place at top of CSS)",
    "Line 60-65: @font-face — defines custom font files"
  ],
  simpleMeaning: "font-family = typeface choice. font-size = text size. font-weight = boldness. line-height = line spacing. text-align = alignment.",
  output: "Beautiful, readable typography with proper spacing, responsive sizing, drop caps, truncation, and custom fonts.",
  note: "Use rem for font-size (accessibility). Use unitless line-height (1.5). clamp() creates responsive typography without media queries."
},

// ==================== DISPLAY & POSITIONING (18) ====================
{
  name: "14. DISPLAY & POSITIONING",
  description: "Display property controls element layout behavior in document flow. block elements take full width and start new lines (div, p, h1). inline elements take only content width and sit on same line (span, a). inline-block combines inline flow with block sizing capabilities (width/height respected). none removes elements completely (no space, not visible). flex enables one-dimensional flexible layout. grid enables two-dimensional layout system. Position property controls element placement: static (default normal flow), relative (relative to normal position, creates positioning context), absolute (relative to nearest positioned ancestor, removed from flow), fixed (relative to viewport, stays on scroll), sticky (toggles between relative and fixed when scrolling). z-index controls stacking order (only works on positioned elements).",
  code: `/* Display values */
.block { display: block; width: 100%; }
.inline { display: inline; }
.inline-block { 
    display: inline-block; 
    width: 150px; 
    height: 50px;
}
.hidden { display: none; }  /* Completely removed */

/* Position values */
.relative-box {
    position: relative;
    top: 20px;
    left: 10px;
    /* Positioned relative to where it would normally be */
}

.absolute-box {
    position: absolute;
    top: 0;
    right: 0;
    /* Removed from flow, relative to nearest positioned ancestor */
}

.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.sticky-nav {
    position: sticky;
    top: 0;
    background: white;
    /* Sticks when scrolling past, then fixed */
}

/* Perfect centering with absolute + transform */
.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* z-index stack order */
.parent { 
    position: relative; 
    z-index: 1; 
}
.child-absolute { 
    position: absolute; 
    z-index: 10;  /* Higher appears on top */
}`,
  lineByLine: [
    "Line 2: display: block — full width, starts new line",
    "Line 3: display: inline — content width, same line, no width/height control",
    "Line 4-8: display: inline-block — inline behavior + block sizing",
    "Line 10: display: none — completely removed (no space, invisible)",
    "Line 14-18: position: relative — offset from normal position",
    "Line 15: top: 20px — moves DOWN from normal position",
    "Line 16: left: 10px — moves RIGHT from normal position",
    "Line 21-26: position: absolute — removed from flow",
    "Line 22: top: 0, right: 0 — positions at top-right of nearest positioned ancestor",
    "Line 29-37: position: fixed — relative to viewport, stays on scroll",
    "Line 33: z-index: 100 — ensures header stays above other content",
    "Line 40-44: position: sticky — toggles between relative and fixed",
    "Line 48-53: Centering trick — popular for modals and popups",
    "Line 52: transform: translate(-50%, -50%) — centers exactly",
    "Line 57-63: z-index — higher numbers appear on top"
  ],
  simpleMeaning: "block = full width, new line. inline = content width, same line. absolute = removed from flow, relative to positioned parent. fixed = stays on scroll.",
  output: "Elements arranged precisely. Fixed headers stay visible while scrolling. Sticky sections stick at top. Modals perfectly centered.",
  note: "display: none removes space completely. visibility: hidden hides but preserves space. z-index only works on positioned elements (not static)."
},

// ==================== FLEXBOX (16) ====================
{
  name: "15. FLEXBOX — COMPLETE GUIDE",
  description: "Flexbox is a one-dimensional layout system for distributing space along a single axis (row or column). Container properties: display: flex activates flexbox. flex-direction sets main axis direction (row, column, row-reverse, column-reverse). justify-content aligns items on main axis (flex-start, center, flex-end, space-between, space-around, space-evenly). align-items aligns items on cross axis (stretch, flex-start, center, flex-end, baseline). flex-wrap allows items to wrap to multiple lines. gap adds consistent spacing between items. Item properties: flex-grow controls ability to take extra space. flex-shrink controls ability to shrink. flex-basis sets initial size. flex shorthand combines all three. order rearranges visual order without changing HTML. align-self overrides container alignment for individual items.",
  code: `/* Flex Container */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 1rem 2rem;
    background: #2c3e50;
    color: white;
}

/* Responsive card grid with wrapping */
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.card {
    flex: 1 1 300px;  /* grow | shrink | basis */
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Perfect centering (both axes) */
.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Holy Grail Layout with Flex */
.holy-grail {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.holy-grail .content {
    display: flex;
    flex: 1;
}
.sidebar { width: 250px; }
.main { flex: 1; }
.footer { background: #333; color: white; }

/* Media object (image + text) */
.media {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}
.media-img { width: 80px; height: 80px; border-radius: 8px; }
.media-content { flex: 1; }

/* Reorder items */
.item:first-child { order: 2; }
.item:last-child { order: 1; }
/* The last item appears first! */

/* Sticky footer */
.sticky-footer {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.sticky-footer main {
    flex: 1;  /* Pushes footer down */
}`,
  lineByLine: [
    "Line 2-8: Flex container setup",
    "Line 3: justify-content: space-between — pushes items to ends",
    "Line 4: align-items: center — centers vertically",
    "Line 5: gap: 20px — space between flex items",
    "Line 13-21: Card grid with flex-wrap",
    "Line 14: flex-wrap: wrap — allows wrapping to next line",
    "Line 18: flex: 1 1 300px — grow, shrink, basis 300px",
    "Line 26-30: Perfect centering — justify-content + align-items both center",
    "Line 34-45: Holy Grail — header, 3 columns, footer",
    "Line 36: flex-direction: column — vertical layout",
    "Line 37: min-height: 100vh — full viewport height",
    "Line 39-42: Nested flex — sidebar fixed width, main takes rest",
    "Line 49-54: Media object — left image, right text",
    "Line 50: align-items: flex-start — prevents stretching",
    "Line 58-60: Order property — changes visual order only",
    "Line 64-70: Sticky footer — main uses flex: 1 to push footer down"
  ],
  simpleMeaning: "Flex arranges items in rows or columns. justify-content = main axis alignment. align-items = cross axis. flex:1 = take remaining space.",
  output: "Navigation bars with spaced items. Equal-height cards. Perfect centering. Holy grail layouts. Sticky footers. Media objects.",
  note: "Flexbox is one-dimensional (row OR column). Use gap for spacing, not margins. flex:1 for equal-width columns. order changes only visual order."
},

// ==================== CSS GRID (21) ====================
{
  name: "16. CSS GRID — COMPLETE GUIDE",
  description: "CSS Grid is a two-dimensional layout system controlling both rows and columns simultaneously. Container properties: display: grid activates grid. grid-template-columns/rows defines structure using fixed sizes (px), flexible units (fr), percentages, repeat(), or minmax(). grid-template-areas provides visual ASCII-art mapping of layout regions. gap controls spacing between grid cells. justify-items/align-items control content alignment within cells. Item properties: grid-column and grid-row span multiple tracks using span keyword or line numbers. grid-area shorthand combines row-start/col-start/row-end/col-end. auto-fit with minmax() creates responsive grids without media queries. Subgrid allows nested grids to inherit parent track definitions.",
  code: `/* Basic Grid — 3 equal columns */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Named Areas — Holy Grail Layout */
.page {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 250px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 20px;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Responsive Card Grid — Auto-fit */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

/* Spanning multiple tracks */
.featured-card {
    grid-column: span 2;
    grid-row: span 2;
}
/* Or using line numbers */
.wide-item {
    grid-column: 1 / 3;  /* Start at line 1, end at line 3 */
}

/* Dashboard Layout — 12-column grid */
.dashboard {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}
.stat-card { grid-column: span 3; }      /* 3 columns wide */
.chart-large { grid-column: span 6; }   /* 6 columns wide */
.sidebar-chart { grid-column: span 3; } /* 3 columns wide */
.full-width { grid-column: span 12; }   /* Full width */

/* Subgrid — inherit parent grid */
.grid-parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.grid-child {
    display: grid;
    grid-template-columns: subgrid;  /* Matches parent columns */
    grid-column: span 2;
}

/* Masonry-like grid with auto-rows */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 10px;
    gap: 20px;
}
.gallery-item {
    grid-row-end: span 30;  /* Adjust based on image height */
}`,
  lineByLine: [
    "Line 2-5: Basic grid — 3 equal columns using repeat(3, 1fr)",
    "Line 4: 1fr = fractional unit (takes remaining space)",
    "Line 9-18: Grid template areas — visual ASCII layout map",
    "Line 11-14: Each line represents a row; names map to grid areas",
    "Line 15: grid-template-columns: 250px 1fr 1fr — sidebar + 2 main columns",
    "Line 16: grid-template-rows: auto 1fr auto — header auto, main flexible, footer auto",
    "Line 21-26: Auto-fit with minmax — responsive without media queries",
    "Line 23: repeat(auto-fit, minmax(280px, 1fr)) — as many columns as fit, minimum 280px",
    "Line 30-32: Spanning — grid-column: span 2 means across 2 columns",
    "Line 35: grid-column: 1 / 3 — from column line 1 to line 3 (spans 2 columns)",
    "Line 39-48: Dashboard — 12-column grid for layouts",
    "Line 40: repeat(12, 1fr) — 12 equal columns",
    "Line 42-45: Different spans — 3, 6, 12 columns wide",
    "Line 52-58: Subgrid — child grid inherits parent column definitions",
    "Line 56: grid-template-columns: subgrid — matches parent exactly",
    "Line 62-69: Masonry-like — auto-rows: 10px with each item spanning rows"
  ],
  simpleMeaning: "Grid controls rows AND columns simultaneously. fr = fractional unit. grid-template-areas visually maps layout. auto-fit creates responsive grids.",
  output: "Complex page layouts with headers, sidebars, main content, footers. Responsive card grids. Dashboard layouts. Photo galleries.",
  note: "Use Grid for overall page layout, Flexbox for components. auto-fit + minmax creates responsive grids without media queries. Subgrid for nested grid alignment."
},
// ==================== ANIMATIONS & TRANSITIONS (15) ====================
{
  name: "17. ANIMATIONS & TRANSITIONS",
  description: "Transitions smoothly animate property changes between two states on hover or class changes, requiring only property, duration, timing function, and delay. Keyframe animations define complex multi-step animations with @keyframes using percentage points (0% to 100%) or from/to keywords. Animation properties include name, duration, iteration-count (infinite for looping), direction (normal, reverse, alternate), fill-mode (forwards to retain end state), timing-function (ease, linear, cubic-bezier), and play-state (running, paused). Common animations include loading spinners, fade-in entrances, bounce effects, pulse notifications, slide-in menus, and shake error feedback. Both transitions and animations should use transform and opacity for best performance (GPU accelerated), avoiding layout-triggering properties like width, height, or top/left. Use prefers-reduced-motion media query to respect user accessibility preferences.",
  code: `/* ========== TRANSITIONS ========== */
/* Basic button transition */
.button {
    background: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Separate transition properties */
.card {
    transition-property: transform, box-shadow;
    transition-duration: 0.3s, 0.3s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;
}
.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

/* ========== KEYFRAME ANIMATIONS ========== */
/* Fade In Up - page entrance */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.fade-in {
    animation: fadeInUp 0.6s ease forwards;
}

/* Pulse animation - attention grabbing */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
.pulse {
    animation: pulse 2s ease-in-out infinite;
}

/* Loading Spinner */
@keyframes spin {
    to { transform: rotate(360deg); }
}
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f0f0f0;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Shake effect - error feedback */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}
.error-input {
    animation: shake 0.3s ease-in-out;
    border-color: #e74c3c;
}

/* Bounce effect */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
.bounce {
    animation: bounce 0.5s ease-in-out infinite;
}

/* Slide In from left */
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
.slide-left {
    animation: slideInLeft 0.5s ease-out forwards;
}

/* Staggered animations for children */
.staggered > * {
    opacity: 0;
    animation: fadeInUp 0.5s ease forwards;
}
.staggered > *:nth-child(1) { animation-delay: 0s; }
.staggered > *:nth-child(2) { animation-delay: 0.1s; }
.staggered > *:nth-child(3) { animation-delay: 0.2s; }
.staggered > *:nth-child(4) { animation-delay: 0.3s; }

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}`,
  lineByLine: [
    "Line 4-15: Basic transition — all properties animate on hover",
    "Line 13: transition: all 0.3s ease — shorthand for all properties",
    "Line 14-15: Hover changes background, moves up, adds shadow",
    "Line 21-29: Separate transition properties for fine control",
    "Line 35-46: @keyframes fadeInUp — from invisible to visible with upward motion",
    "Line 44: animation-fill-mode: forwards — keeps final state",
    "Line 50-55: Pulse animation — infinite looping for attention",
    "Line 60-67: Loading spinner — infinite rotation",
    "Line 71-80: Shake animation — error feedback for form inputs",
    "Line 85-92: Bounce — playful highlighting effect",
    "Line 97-107: Slide in — off-canvas menus, notifications",
    "Line 111-118: Staggered animations — each child appears sequentially",
    "Line 121-128: prefers-reduced-motion — respects user accessibility settings"
  ],
  simpleMeaning: "Transitions = one-step changes (hover effects). Animations = multi-step sequences (loaders, entrances). Keyframes define the stages.",
  output: "Smooth button hover effects. Loading spinners that spin continuously. Page elements fading in. Pulsing notification badges. Shake on form error.",
  note: "Animate transform and opacity for best performance (GPU accelerated). Use forwards to keep animation end state. Always respect reduced motion preferences."
},

// ==================== TRANSFORMS (19) ====================
{
  name: "18. TRANSFORMS — 2D & 3D",
  description: "Transforms modify element appearance visually without affecting document layout flow. translate(x, y) moves elements by distances (pixels or percentages based on element size). scale(x, y) resizes where 1 is original, >1 enlarges, <1 shrinks. rotate(deg) turns clockwise or counter-clockwise. skew(x, y) slants elements along axes. Multiple transforms combine in one property (translate() rotate() scale()), executing right to left. transform-origin sets pivot point (center, top-left, etc.) for rotations and scales. 3D transforms include rotateX, rotateY, rotateZ, translateZ, requiring perspective on parent. backface-visibility: hidden hides reverse side of 3D elements. transform-style: preserve-3d enables nested 3D transformations. Perfect for hover effects, card flips, zoom effects, and creative animations.",
  code: `/* ========== 2D TRANSFORMS ========== */
/* Translate - Move element */
.card:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease;
}

/* Scale - Zoom effect */
.image-container {
    overflow: hidden;
}
.image-container img {
    transition: transform 0.5s ease;
}
.image-container:hover img {
    transform: scale(1.2);
}

/* Rotate - Rotating icon */
.icon {
    transition: transform 0.3s ease;
}
.icon:hover {
    transform: rotate(180deg);
}

/* Combine multiple transforms (order matters!) */
.multi:hover {
    transform: translateX(20px) rotate(10deg) scale(1.05);
    /* First moves, then rotates, then scales */
}

/* Transform origin - change pivot point */
.rotate-top-left {
    transform-origin: top left;
    transition: transform 0.3s ease;
}
.rotate-top-left:hover {
    transform: rotate(90deg);
}

/* ========== 3D TRANSFORMS ========== */
/* 3D Card Flip */
.card-flip {
    width: 300px;
    height: 200px;
    position: relative;
    perspective: 1000px;
}
.card-flip-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}
.card-flip:hover .card-flip-inner {
    transform: rotateY(180deg);
}
.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card-front {
    background: #3498db;
    color: white;
}
.card-back {
    background: #2c3e50;
    color: white;
    transform: rotateY(180deg);
}

/* 3D Tilt on hover */
.tilt-card {
    transition: transform 0.3s ease;
}
.tilt-card:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
}

/* ========== CENTERING TRICK ========== */
.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Perfect centering without knowing width/height */
}

/* Scale on click (active state) */
.button:active {
    transform: scale(0.95);
    transition: transform 0.05s;
}`,
  lineByLine: [
    "Line 4-7: translateY — moves element up on hover",
    "Line 11-18: Scale on container hover — image zooms inside hidden overflow",
    "Line 22-27: Rotate — icon spins 180 degrees on hover",
    "Line 31-35: Multiple transforms — order matters (right to left execution)",
    "Line 39-45: transform-origin — changes rotation pivot point",
    "Line 50-79: 3D Card Flip — complete 3D flip animation",
    "Line 51: perspective: 1000px — gives depth to 3D",
    "Line 55: transform-style: preserve-3d — enables nested 3D",
    "Line 60: rotateY(180deg) — flips card on Y axis",
    "Line 64: backface-visibility: hidden — hides reverse side",
    "Line 75: card-back transform: rotateY(180deg) — initially flipped",
    "Line 84-87: 3D tilt — perspective with small rotations",
    "Line 92-97: Centering trick — translate(-50%, -50%) centers exactly",
    "Line 101-104: Scale on click — provides tactile feedback"
  ],
  simpleMeaning: "transform changes element visually (move, scale, rotate) without affecting layout. transform-origin = pivot point. 3D transforms add depth.",
  output: "Cards that lift on hover. Images that zoom inside containers. Icons that rotate. 3D card flips. Perfect centering. Click feedback scaling.",
  note: "Order matters in multiple transforms (right to left). Use transform-origin for custom pivot points. 3D transforms need perspective on parent."
},

// ==================== RESPONSIVE DESIGN (13) ====================
{
  name: "19. RESPONSIVE DESIGN — MEDIA QUERIES",
  description: "Responsive design ensures websites work perfectly on all devices using flexible layouts and media queries. Mobile-first approach writes base CSS for smallest screens, then uses min-width media queries to enhance for larger screens. Common breakpoints: 576px (small mobile), 768px (tablet), 992px (desktop), 1200px (large desktop), 1400px (extra large). Fluid layouts use percentages, viewport units, clamp(), and max-width. Responsive images use max-width: 100% and height: auto. Media features include orientation (landscape/portrait), pointer (fine/coarse), hover, resolution, prefers-color-scheme (dark/light mode), prefers-reduced-motion. Container queries (modern) make components responsive to their parent container size rather than viewport.",
  code: `/* ========== MOBILE-FIRST APPROACH ========== */
/* Base styles for mobile (no media query needed) */
.container {
    width: 100%;
    padding: 0 16px;
}
.card-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;
}
h1 {
    font-size: 28px;
}

/* Tablet (min-width: 768px) */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
    .card-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    h1 {
        font-size: 36px;
    }
}

/* Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
    .card-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    h1 {
        font-size: 48px;
    }
}

/* Large Desktop (min-width: 1280px) */
@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
    .card-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* ========== RESPONSIVE NAVIGATION ========== */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}
.nav-links {
    display: flex;
    gap: 20px;
}
.hamburger {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
}
@media (max-width: 768px) {
    .hamburger {
        display: block;
    }
    .nav-links {
        display: none;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: white;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .nav-links.active {
        display: flex;
    }
}

/* ========== RESPONSIVE TYPOGRAPHY ========== */
html {
    font-size: 14px;
}
@media (min-width: 768px) {
    html { font-size: 16px; }
}
@media (min-width: 1024px) {
    html { font-size: 18px; }
}

/* ========== HIDE/SHOW ELEMENTS ========== */
.mobile-only {
    display: block;
}
.desktop-only {
    display: none;
}
@media (min-width: 768px) {
    .mobile-only { display: none; }
    .desktop-only { display: block; }
}

/* ========== DARK MODE ========== */
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a2e;
        color: #eee;
    }
    .card {
        background: #2d2d3d;
    }
}

/* ========== ORIENTATION ========== */
@media (orientation: landscape) {
    .hero {
        height: 100vh;
    }
}
@media (orientation: portrait) {
    .hero {
        height: auto;
        min-height: 100vh;
    }
}

/* ========== CONTAINER QUERIES (Modern) ========== */
.card-container {
    container-type: inline-size;
    container-name: card-container;
}
@container card-container (min-width: 400px) {
    .card {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    .card img {
        width: 150px;
    }
}`,
  lineByLine: [
    "Line 2-12: Mobile-first base — no media query, for smallest screens",
    "Line 4: container width 100% — fills all mobile screens",
    "Line 10: grid-template-columns: 1fr — single column on mobile",
    "Line 15-28: Tablet breakpoint — min-width: 768px",
    "Line 17: max-width: 720px — constrains content width",
    "Line 20: grid-template-columns: repeat(2, 1fr) — two columns on tablet",
    "Line 31-43: Desktop breakpoint — min-width: 1024px",
    "Line 34: max-width: 960px — wider container",
    "Line 37: grid-template-columns: repeat(3, 1fr) — three columns on desktop",
    "Line 47-59: Large desktop — min-width: 1280px",
    "Line 49: max-width: 1200px — maximum width constraint",
    "Line 65-101: Responsive navigation — hamburger menu on mobile",
    "Line 75-90: @media (max-width: 768px) — hides nav links, shows hamburger",
    "Line 106-117: Responsive typography — root font-size scales with screen",
    "Line 122-129: Hide/show elements — different content per device",
    "Line 134-143: Dark mode — respects user system preference",
    "Line 148-157: Orientation — landscape vs portrait layouts",
    "Line 162-174: Container queries — component responsive to own container size"
  ],
  simpleMeaning: "Media queries apply different styles at different screen sizes. Mobile-first = start small, add styles as screen grows. Dark mode respects user preference.",
  output: "Sites that look great on phones, tablets, and desktops. Layouts reorganize, fonts resize, navigation changes to hamburger menu on mobile.",
  note: "Always use mobile-first approach (min-width). Test on real devices. Container queries are the future for component-level responsiveness."
},

// ==================== CSS UNITS (15) ====================
{
  name: "20. CSS UNITS — px, rem, em, vw, vh, %",
  description: "CSS units define measurements for sizes, spacing, and positioning. Absolute units (px, pt, cm, mm, in) are fixed — px (pixels) is most common for screens. Relative units adapt to context: rem (root em) is relative to html font-size — best for accessibility and global spacing. em is relative to parent element's font-size — useful for component scaling but compounds in nested elements. vw/vh are 1% of viewport width/height — perfect for full-screen sections. vmin/vmin take smaller/larger viewport dimension. % is relative to parent element's same property. ch is width of '0' character — great for text containers. lh is line-height unit. fr is fractional unit in CSS Grid. calc() combines multiple units.",
  code: `/* ========== ABSOLUTE UNITS ========== */
.fixed-size {
    width: 200px;      /* Pixels — most common for screens */
    font-size: 16px;
    padding: 10px;
}
.print-only {
    width: 5cm;        /* Centimeters — for print styles */
    margin: 1in;       /* Inches — print only */
}

/* ========== RELATIVE UNITS ========== */
/* rem — relative to root (html) font-size */
html {
    font-size: 16px;   /* 1rem = 16px */
}
.rem-example {
    font-size: 1.5rem;   /* 24px (16 × 1.5) */
    padding: 2rem;       /* 32px */
    margin: 0.5rem;      /* 8px */
}

/* em — relative to parent font-size (compounds!) */
.parent {
    font-size: 20px;     /* 1em = 20px inside parent */
}
.child-em {
    font-size: 1.5em;    /* 30px (20 × 1.5) */
    padding: 1em;        /* 30px (relative to its own font-size) */
}
.nested-em {
    font-size: 1.2em;    /* Compounds: parent's font-size × 1.2 times each level */
}

/* ========== VIEWPORT UNITS ========== */
.full-screen {
    width: 100vw;        /* Full viewport width */
    height: 100vh;       /* Full viewport height */
}
.half-viewport {
    width: 50vw;         /* 50% of screen width */
    height: 50vh;        /* 50% of screen height */
}
.responsive-text {
    font-size: 4vw;      /* Scales with screen width — use with clamp() */
}
.square-vmin {
    width: 50vmin;       /* 50% of the smaller dimension */
    height: 50vmin;      /* Perfect square that fits on any screen */
}

/* ========== PERCENTAGE UNITS ========== */
.percentage {
    width: 100%;         /* Full width of parent */
    padding: 5%;         /* 5% of parent width */
    margin: 0 auto;      /* Auto for centering */
}
.half-parent {
    width: 50%;          /* Half of parent width */
}

/* ========== SPECIALTY UNITS ========== */
/* ch — width of '0' character — optimal reading width */
.article {
    max-width: 70ch;     /* ~70 characters per line — optimal readability */
}
/* fr — fractional unit (Grid only) */
.grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;  /* 1:2:1 ratio */
}
/* lh — line-height unit */
.line-height-unit {
    margin-bottom: 1.5lh;  /* 1.5 × line-height */
}

/* ========== calc() — COMBINE UNITS ========== */
.responsive-container {
    width: calc(100% - 40px);       /* Full width minus 40px */
    padding: calc(2rem + 10px);     /* Combine rem and px */
    margin: calc(50% - 100px);      /* Complex calculations */
}

/* ========== clamp() — RESPONSIVE WITH BOUNDS ========== */
.responsive-heading {
    font-size: clamp(24px, 5vw, 48px);
    /* minimum 24px, preferred 5vw, maximum 48px */
}

/* ========== PRACTICAL PATTERNS ========== */
/* Root font-size scaling for accessibility */
:root {
    font-size: 16px;     /* Base */
}
@media (min-width: 768px) {
    :root { font-size: 18px; }
}
@media (min-width: 1024px) {
    :root { font-size: 20px; }
}

/* Consistent spacing system using rem */
.card {
    padding: 1rem;       /* Scales with root font-size */
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    font-size: 0.875rem; /* 14px typical fallback */
}`,
  lineByLine: [
    "Line 2-8: Absolute units — px is standard for screens",
    "Line 10-12: Print units — cm, mm, in for print stylesheets",
    "Line 16-23: rem — relative to root (html) font-size",
    "Line 17: html font-size: 16px is standard (1rem = 16px)",
    "Line 18: 1.5rem = 24px — scales with user preferences",
    "Line 24-35: em — relative to parent, compounds in nested elements",
    "Line 25: parent font-size: 20px sets context",
    "Line 27: 1.5em = 30px — relative to parent",
    "Line 31: nesting compounds — each level multiplies",
    "Line 39-53: Viewport units — vw (width), vh (height)",
    "Line 40: 100vw = full screen width, 100vh = full screen height",
    "Line 41: vh for full-screen heroes, vw for fluid typography",
    "Line 51: vmin — takes smaller dimension, great for consistent squares",
    "Line 57-63: Percentage units — relative to parent element",
    "Line 57: width: 100% = full parent width",
    "Line 58: padding: 5% = 5% of parent width",
    "Line 67-72: ch unit — optimal reading width (70 characters per line)",
    "Line 74-77: fr unit — fractional unit in CSS Grid only",
    "Line 81-86: calc() — combine different unit types",
    "Line 81: calc(100% - 40px) — full width minus fixed offset",
    "Line 89-93: clamp() — minimum, preferred, maximum values",
    "Line 98-109: Root font-size scaling — responsive without media queries on each element"
  ],
  simpleMeaning: "px = fixed pixels. rem = relative to root font (best for accessibility). vw/vh = viewport percentage. % = parent percentage. em = compounds in nested elements.",
  output: "Consistent spacing across devices. Responsive font sizes that scale with user preferences. Full-screen sections. Proper reading width for articles.",
  note: "Use rem for font sizes (accessibility). Use vw/vh for full-screen elements. clamp() creates responsive typography without media queries."
},

// ==================== CSS FUNCTIONS (14) ====================
{
  name: "21. CSS FUNCTIONS — calc(), clamp(), var(), min(), max()",
  description: "CSS functions provide dynamic value computation directly in stylesheets. calc() performs mathematical operations mixing different units (calc(100% - 50px)), essential for fluid layouts with fixed offsets. var() accesses custom property values with optional fallback, enabling theme systems. clamp() accepts minimum, preferred, and maximum values, creating perfectly responsive sizes without media queries. min() and max() return smallest/largest value from a list. rgb()/rgba()/hsl()/hsla() create colors programmatically. url() loads external resources. attr() retrieves HTML attribute values for pseudo-element content. repeat() and minmax() simplify grid templates. linear-gradient()/radial-gradient()/conic-gradient() create gradient backgrounds. filter functions (blur(), brightness(), contrast()) apply visual effects.",
  code: `/* ========== CALC() — MATH WITH MIXED UNITS ========== */
.container {
    width: calc(100% - 40px);        /* Full width minus padding */
    margin: calc(50% - 150px);       /* Center with offset */
    padding: calc(2rem + 10px);      /* Combine rem and px */
    font-size: calc(16px + 0.5vw);   /* Fluid + base */
}
/* Nested calc (optional) */
.complex {
    width: calc(100% - (20px + 2rem));
}

/* ========== CLAMP() — RESPONSIVE WITH BOUNDARIES ========== */
h1 {
    font-size: clamp(24px, 5vw, 48px);
    /* Never smaller than 24px, grows with 5vw, never larger than 48px */
}
.responsive-padding {
    padding: clamp(16px, 4vw, 32px);
}
.responsive-width {
    width: clamp(200px, 50%, 600px);
}

/* ========== MIN() AND MAX() ========== */
/* min() — chooses smallest value */
.responsive-box {
    width: min(100%, 600px);         /* 100% on small screens, max 600px */
    font-size: max(14px, 2vw);       /* At least 14px, but can be larger */
}
/* Multiple values */
.safe-width {
    width: min(90%, 600px, 80vw);    /* Takes the smallest of all */
}

/* ========== VAR() — CSS VARIABLES ========== */
:root {
    --primary: #3498db;
    --spacing: 1rem;
    --radius: 8px;
}
.button {
    background: var(--primary, blue);       /* Fallback to blue if --primary missing */
    padding: var(--spacing);
    border-radius: var(--radius);
}
/* Dynamic with calc() */
.dynamic {
    width: calc(100% - (var(--spacing) * 2));
}

/* ========== COLOR FUNCTIONS ========== */
.element {
    color: rgb(52, 152, 219);          /* Red, Green, Blue 0-255 */
    background: rgba(0, 0, 0, 0.5);    /* With alpha (opacity) */
    border-color: hsl(210, 100%, 50%); /* Hue, Saturation, Lightness */
}

/* ========== REPEAT() AND MINMAX() — GRID ========== */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);          /* 3 equal columns */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */
}

/* ========== URL() — LOAD RESOURCES ========== */
.hero {
    background-image: url('images/hero.jpg');
    background-image: url('https://example.com/image.png');
    cursor: url('custom-cursor.png'), auto;
}

/* ========== ATTR() — GET HTML ATTRIBUTES ========== */
/* HTML: <div data-tooltip="Click me">Hover</div> */
[data-tooltip]::after {
    content: attr(data-tooltip);
    /* Displays the value of data-tooltip */
}

/* ========== GRADIENT FUNCTIONS ========== */
.gradient {
    background: linear-gradient(135deg, #667eea, #764ba2);
    background: radial-gradient(circle, #fff, #ccc);
    background: conic-gradient(red, blue, green);
}

/* ========== FILTER FUNCTIONS ========== */
.image-effect {
    filter: brightness(1.1) contrast(120%) blur(2px);
    filter: grayscale(50%) sepia(20%);
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
}

/* ========== TRANSFORM FUNCTIONS ========== */
.moved {
    transform: translate(50px, 100px) rotate(45deg) scale(1.2);
}
/* Individual transform functions can also be used separately */`,
  lineByLine: [
    "Line 2-6: calc() — arithmetic with mixed units",
    "Line 3: calc(100% - 40px) — full width minus fixed offset",
    "Line 4: calc(50% - 150px) — centering with offset",
    "Line 5: calc(2rem + 10px) — combine rem (relative) and px (absolute)",
    "Line 12-17: clamp() — three-value responsive (min, ideal, max)",
    "Line 13: clamp(24px, 5vw, 48px) — min 24px, scales with 5vw, max 48px",
    "Line 14: Replaces complex media queries for font sizes",
    "Line 21-28: min() and max() — choose extreme values",
    "Line 22: min(100%, 600px) — container never exceeds 600px",
    "Line 23: max(14px, 2vw) — text at least 14px",
    "Line 33-45: var() — access CSS custom properties",
    "Line 34: :root defines global variables",
    "Line 38: var(--primary, blue) — use blue if --primary undefined",
    "Line 42: calc() with var() — combine variables with math",
    "Line 49-54: Color functions — rgb(), rgba(), hsl()",
    "Line 59-63: repeat() and minmax() — grid helper functions",
    "Line 61: repeat(3, 1fr) — 3 columns of 1fr each",
    "Line 62: repeat(auto-fit, minmax(250px, 1fr)) — responsive grid",
    "Line 68-72: url() — load external images, fonts, cursors",
    "Line 77-81: attr() — get HTML attribute values for pseudo-element content",
    "Line 86-91: Gradient functions — linear, radial, conic",
    "Line 96-100: Filter functions — brightness, contrast, blur, drop-shadow",
    "Line 105-107: Transform functions — translate, rotate, scale"
  ],
  simpleMeaning: "calc() = math with mixed units. clamp(min, ideal, max) = responsive with bounds. var() = use CSS variables. min()/max() = choose extremes.",
  output: "Fluid layouts with calc(). Perfectly responsive font sizes with clamp(). Themeable components with var(). Auto-sizing grids with minmax().",
  note: "clamp() is revolutionary for responsive design, replacing many media queries. Use var() for theming. calc() can mix any unit types."
},

// ==================== FILTERS & EFFECTS (15) ====================
{
  name: "22. FILTERS & EFFECTS — Visual Effects",
  description: "Filter property applies Photoshop-like visual effects to elements. blur(px) adds Gaussian blur for soft focus or frosted glass effects. brightness(%) adjusts lightness (0% = black, 100% = normal, >100% = brighter). contrast(%) controls tonal range. grayscale(%) converts to black-and-white. sepia(%) gives vintage brown tone. hue-rotate(deg) shifts colors around color wheel. invert(%) reverses colors (photo negative). saturate(%) intensifies colors. drop-shadow() creates realistic shadows with blur and spread. backdrop-filter applies filters to area behind element — perfect for glassmorphism when combined with semi-transparent backgrounds. Multiple filters chain in one property. Filters animate smoothly for interactive effects.",
  code: `/* ========== BASIC FILTERS ========== */
img {
    transition: filter 0.3s ease;
}
/* Brightness and contrast on hover */
img:hover {
    filter: brightness(1.1) contrast(120%);
}

/* ========== GRAYSCALE — Black & White ========== */
.grayscale-img {
    filter: grayscale(100%);
    transition: filter 0.5s ease;
}
.grayscale-img:hover {
    filter: grayscale(0%);  /* Returns to color on hover */
}

/* ========== BLUR — Soft Focus ========== */
.blur-effect {
    filter: blur(0);
    transition: filter 0.3s ease;
}
.blur-effect:hover {
    filter: blur(4px);
}

/* ========== SEPIA — Vintage Effect ========== */
.vintage {
    filter: sepia(70%) contrast(120%) brightness(90%);
}

/* ========== DROP-SHADOW — Realistic Shadows ========== */
/* vs box-shadow: drop-shadow follows element shape (including transparency) */
.shadow-effect {
    filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.3));
}
/* Multiple drop-shadows (comma separated) */
.deep-shadow {
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1))
            drop-shadow(0 8px 16px rgba(0,0,0,0.1));
}

/* ========== HUE-ROTATE — Color Shift ========== */
.color-shift {
    transition: filter 0.3s ease;
}
.color-shift:hover {
    filter: hue-rotate(90deg);  /* Shifts all colors 90 degrees */
}

/* ========== MULTIPLE FILTERS COMBINED ========== */
.dramatic {
    filter: brightness(0.9) contrast(150%) saturate(150%) hue-rotate(-5deg);
}

/* ========== BACKDROP-FILTER — Glassmorphism ========== */
/* Applies filters to area BEHIND the element */
.glass-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.3);
}

/* Frosted navigation */
.frosted-nav {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    z-index: 100;
}

/* ========== MODAL WITH BACKDROP BLUR ========== */
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
    z-index: 1000;
}

/* ========== INVERT — Negative Effect ========== */
.invert-effect {
    filter: invert(100%);  /* Makes colors opposite */
}
.invert-effect:hover {
    filter: invert(0);
}

/* ========== SATURATE — Enhance Colors ========== */
.vibrant {
    filter: saturate(150%);  /* 50% more saturated */
}
.desaturated {
    filter: saturate(50%);   /* 50% less saturated */
}

/* ========== COMPLEX HOVER EFFECT ========== */
.image-card {
    transition: filter 0.5s ease;
}
.image-card:hover {
    filter: brightness(1.05) contrast(120%) saturate(110%);
}

/* ========== LOADING SKELETON BLUR ========== */
.skeleton {
    background: #e0e0e0;
    border-radius: 4px;
    filter: blur(2px);
    animation: pulse-skeleton 1.5s infinite;
}
@keyframes pulse-skeleton {
    0%, 100% { filter: blur(2px); opacity: 1; }
    50% { filter: blur(1px); opacity: 0.8; }
}`,
  lineByLine: [
    "Line 2-8: Basic brightness and contrast — brightens images on hover",
    "Line 12-18: Grayscale — removes color, color returns on hover",
    "Line 22-28: Blur — creates soft focus effect",
    "Line 32-34: Sepia — vintage photo effect with contrast and brightness",
    "Line 38-44: drop-shadow — follows element shape (unlike box-shadow)",
    "Line 39: drop-shadow(x-offset, y-offset, blur, color)",
    "Line 42-44: Multiple drop-shadows — comma separated for depth",
    "Line 48-53: hue-rotate — shifts entire color spectrum",
    "Line 57-60: Multiple filters — chain with spaces",
    "Line 64-71: backdrop-filter — glassmorphism effect",
    "Line 65: background: rgba(255,255,255,0.2) — semi-transparent",
    "Line 66: backdrop-filter: blur(10px) — blurs what's behind",
    "Line 74-79: Frosted navigation — sticky header with glass effect",
    "Line 83-91: Modal backdrop — blurs background behind modal",
    "Line 87: backdrop-filter: blur(5px) — adds depth to modals",
    "Line 95-100: Invert — negative effect like photo negative",
    "Line 104-109: Saturate — enhances or reduces color intensity",
    "Line 113-117: Complex hover — multiple filters combined",
    "Line 121-131: Loading skeleton — blur animation for loading states"
  ],
  simpleMeaning: "filter changes image appearance (brightness, blur, grayscale). backdrop-filter blurs what's BEHIND an element (glassmorphism).",
  output: "Images that brighten on hover. Grayscale to color transitions. Frosted glass panels. Vintage photo effects. Realistic drop shadows.",
  note: "Use backdrop-filter for glassmorphism (requires semi-transparent background). Filter can animate smoothly. Combine multiple filters with spaces."
},

// ==================== CSS VARIABLES (Custom Properties) (9) ====================
{
  name: "23. CSS VARIABLES — Custom Properties",
  description: "CSS Variables (Custom Properties) store reusable values that update dynamically throughout stylesheets. Variable names start with two dashes (--name) and are case-sensitive, defined within any selector (:root for global scope). var() function accesses variable values with optional fallback: var(--name, fallback-value). Variables cascade and inherit, allowing component-level overrides without breaking global styles. JavaScript can read variables with getComputedStyle() and update them with setProperty() for dynamic theming. Variables work in media queries for responsive value changes, and in calc() for flexible sizing. Use cases: color schemes (primary, secondary), spacing systems (padding, margins), typography scales, animation timings, and theme switching (light/dark mode).",
  code: `/* ========== GLOBAL VARIABLES (Root scope) ========== */
:root {
    /* Color System */
    --color-primary: #3498db;
    --color-primary-dark: #2980b9;
    --color-secondary: #2ecc71;
    --color-danger: #e74c3c;
    --color-warning: #f39c12;
    --color-text: #333;
    --color-text-light: #666;
    --color-bg: #fff;
    --color-bg-dark: #f5f5f5;
    
    /* Spacing System */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    
    /* Typography */
    --font-family-base: 'Inter', system-ui, sans-serif;
    --font-size-base: 16px;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    
    /* Borders & Effects */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-radius-full: 9999px;
    
    /* Transitions */
    --transition-fast: 0.15s;
    --transition-normal: 0.3s;
    --transition-slow: 0.5s;
    
    /* Z-index layers */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
}

/* ========== USING VARIABLES ========== */
.button {
    background: var(--color-primary);
    color: white;
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--border-radius-md);
    font-family: var(--font-family-base);
    transition: all var(--transition-normal) ease;
}
.button:hover {
    background: var(--color-primary-dark);
}

/* ========== FALLBACK VALUES ========== */
.element {
    color: var(--color-undefined, blue);  /* Uses blue if variable missing */
    padding: var(--space-custom, 20px);    /* Fallback to 20px */
}

/* ========== COMPONENT-LEVEL VARIABLES (Override) ========== */
.card {
    --card-padding: var(--space-lg);
    --card-bg: white;
    --card-shadow: 0 2px 8px rgba(0,0,0,0.1);
    
    padding: var(--card-padding);
    background: var(--card-bg);
    box-shadow: var(--card-shadow);
    border-radius: var(--border-radius-lg);
}
.featured-card {
    --card-padding: var(--space-xl);
    --card-shadow: 0 8px 24px rgba(0,0,0,0.15);
    /* Overrides only for featured cards */
}

/* ========== RESPONSIVE VARIABLES ========== */
:root {
    --container-padding: 16px;
}
@media (min-width: 768px) {
    :root {
        --container-padding: 32px;
        --font-size-base: 18px;
    }
}
@media (min-width: 1024px) {
    :root {
        --container-padding: 48px;
        --font-size-base: 20px;
    }
}
.container {
    padding: 0 var(--container-padding);
}

/* ========== DARK THEME ========== */
[data-theme="dark"] {
    --color-bg: #1a1a2e;
    --color-text: #eee;
    --color-bg-dark: #2d2d3d;
    --color-primary: #2980b9;
}
/* Apply theme */
body {
    background: var(--color-bg);
    color: var(--color-text);
    transition: background var(--transition-normal), color var(--transition-normal);
}

/* ========== CALC() WITH VARIABLES ========== */
.container {
    width: calc(100% - (var(--container-padding) * 2));
}
.spaced-grid {
    gap: calc(var(--space-md) * 2);
}

/* ========== JAVASCRIPT INTERACTION ========== */
/* JavaScript - dynamic update:
   document.documentElement.style.setProperty('--color-primary', '#ff0000');
   document.documentElement.style.setProperty('--space-md', '24px');
*/

/* ========== COMPLEX EXAMPLE - THEME SWITCHER ========== */
:root {
    --bg: #ffffff;
    --text: #333333;
    --card: #f5f5f5;
    --border: #e0e0e0;
}
[data-theme="dark"] {
    --bg: #121212;
    --text: #ffffff;
    --card: #1e1e1e;
    --border: #333333;
}
body {
    background: var(--bg);
    color: var(--text);
}
.card {
    background: var(--card);
    border-color: var(--border);
}`,
  lineByLine: [
    "Line 2-55: Global variables on :root — available everywhere",
    "Line 4-12: Color system — primary, secondary, text, background",
    "Line 15-22: Spacing system — consistent gutters and gaps",
    "Line 25-31: Typography — font family and sizes",
    "Line 34-38: Border radius — consistent rounding",
    "Line 41-44: Transition speeds — consistent animation timing",
    "Line 47-52: Z-index layers — organized stacking",
    "Line 58-65: Using variables — var(--name) syntax",
    "Line 59: background: var(--color-primary) — uses global primary color",
    "Line 60-63: Multiple variables together",
    "Line 70-73: Fallback values — var(--name, fallback)",
    "Line 78-95: Component-level variables — override at component level",
    "Line 79-81: Define component-specific variables",
    "Line 89-93: Override — featured card has different padding and shadow",
    "Line 99-114: Responsive variables — update at breakpoints",
    "Line 100: --container-padding: 16px — mobile default",
    "Line 102-106: Media query updates variable value",
    "Line 115: container uses updated padding",
    "Line 119-128: Dark theme — data attribute selector overrides variables",
    "Line 120-125: [data-theme='dark'] overrides root variables",
    "Line 128-131: Body uses variables for theme switching",
    "Line 135-138: calc() with variables — combine and compute",
    "Line 142-145: JavaScript — dynamic variable updates",
    "Line 149-165: Complete theme switcher example"
  ],
  simpleMeaning: "CSS variables store values (colors, sizes) and reuse everywhere. Change one place, update everywhere. Great for theming and responsive design.",
  output: "Consistent design tokens across whole site. Dark/light mode switching. Responsive values that update at breakpoints. Easy maintenance.",
  note: "Always define global variables on :root. Provide fallback values in var(). Update with JS for dynamic theming. Use with calc()."
},

// ==================== TABLES (6) ====================
{
  name: "24. TABLES — Styling Data Tables",
  description: "Table styling controls data presentation in structured grid formats. border-collapse: collapse removes spacing between table cells for cleaner borders. border-spacing controls gap when collapse not used. caption-side positions table caption (top or bottom). empty-cells controls borders on empty cells. table-layout: fixed improves performance and prevents cell overflow by respecting column widths. nth-child selectors enable zebra striping (alternating row backgrounds) for better readability. Responsive tables use overflow-x: auto wrapper for horizontal scrolling on mobile. th (header) cells use background color, bold font, and text-align: center. Cell padding improves readability. hover effects highlight rows for user interaction. sticky headers keep header row visible while scrolling.",
  code: `/* ========== BASE TABLE STYLES ========== */
.data-table {
    width: 100%;
    border-collapse: collapse;  /* Removes gaps between cells */
    margin: 20px 0;
    font-family: inherit;
}

/* ========== HEADER STYLING ========== */
.data-table th {
    background: #2c3e50;
    color: white;
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* ========== CELL STYLING ========== */
.data-table td {
    padding: 10px 16px;
    border-bottom: 1px solid #e0e0e0;
    vertical-align: middle;  /* Centers content vertically */
}

/* ========== ZEBRA STRIPING (Alternating Rows) ========== */
.data-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

/* ========== HOVER EFFECT ========== */
.data-table tr:hover {
    background-color: #f0f7ff;
    transition: background 0.2s ease;
}

/* ========== RESPONSIVE TABLE (Horizontal Scroll) ========== */
.table-wrapper {
    overflow-x: auto;
    margin: 20px 0;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
}
.table-wrapper table {
    margin: 0;
    min-width: 600px;  /* Forces scroll on mobile */
}

/* ========== FIXED TABLE LAYOUT ========== */
.fixed-table {
    table-layout: fixed;  /* Uses column widths, not content */
    width: 100%;
}
.fixed-table th:first-child { width: 30%; }
.fixed-table th:nth-child(2) { width: 50%; }
.fixed-table th:last-child { width: 20%; }

/* ========== CAPTION STYLING ========== */
caption {
    caption-side: bottom;
    padding: 8px;
    font-size: 0.8rem;
    color: #666;
    font-style: italic;
}

/* ========== STICKY TABLE HEADER ========== */
.sticky-header-table {
    border-collapse: collapse;
    width: 100%;
}
.sticky-header-table th {
    position: sticky;
    top: 0;
    background: #2c3e50;
    z-index: 10;
}
/* Needs parent with overflow: auto and fixed height */
.sticky-container {
    height: 400px;
    overflow-y: auto;
}

/* ========== TABLES WITH BORDERS ========== */
.bordered-table {
    border-collapse: collapse;
    width: 100%;
}
.bordered-table th,
.bordered-table td {
    border: 1px solid #ddd;
    padding: 12px;
}
.bordered-table th {
    background: #f0f0f0;
}

/* ========== COMPACT TABLE (Small padding) ========== */
.compact-table th,
.compact-table td {
    padding: 6px 12px;
}

/* ========== STATUS BADGES INSIDE TABLES ========== */
.status-badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
}
.status-active {
    background: #d4edda;
    color: #155724;
}
.status-inactive {
    background: #f8d7da;
    color: #721c24;
}

/* ========== NUMERIC COLUMN ALIGNMENT ========== */
.numeric {
    text-align: right;
    font-family: monospace;
}`,
  lineByLine: [
    "Line 2-7: Base table — border-collapse removes gaps between cells",
    "Line 10-20: Header styling — dark background, white text, uppercase",
    "Line 12: padding: 12px 16px — comfortable cell spacing",
    "Line 15: text-transform: uppercase — makes headers stand out",
    "Line 24-26: Cell styling — border-bottom for separators",
    "Line 25: vertical-align: middle — centers content vertically",
    "Line 30-33: Zebra striping — nth-child(even) alternates backgrounds",
    "Line 37-40: Hover effect — row highlights on hover",
    "Line 44-51: Responsive wrapper — overflow-x: auto for mobile scrolling",
    "Line 45: overflow-x: auto — enables horizontal scroll on small screens",
    "Line 49: min-width: 600px — forces table to scroll instead of squish",
    "Line 55-60: Fixed layout — respects column widths, better performance",
    "Line 65-70: Caption — bottom caption for table description",
    "Line 75-84: Sticky header — header stays visible while scrolling",
    "Line 77: position: sticky; top: 0 — sticks to top",
    "Line 81: parent with overflow-y: auto — enables scrolling",
    "Line 89-98: Bordered table — borders on all cells",
    "Line 103-106: Compact table — smaller padding for dense data",
    "Line 110-119: Status badges — colored pills for status indicators",
    "Line 124-127: Numeric columns — right-align with monospace font"
  ],
  simpleMeaning: "border-collapse: collapse removes cell gaps. nth-child(even) creates zebra stripes. overflow-x: auto makes tables scroll on mobile.",
  output: "Clean, readable data tables with alternating row colors, hover highlighting, responsive scrolling, and sticky headers.",
  note: "Always wrap tables in overflow-x: auto for responsive design. Use nth-child for zebra striping. Sticky headers enhance usability."
},

// ==================== LISTS (4) ====================
{
  name: "25. LISTS — ul, ol, dl Styling",
  description: "List styling controls unordered (<ul>) bullet lists, ordered (<ol>) numbered lists, and definition (<dl>) lists. list-style-type changes markers: disc, circle, square for unordered; decimal, lower-roman, upper-alpha, lower-alpha for ordered. list-style-image uses custom image as marker. list-style-position controls marker inside/outside content box. ::marker pseudo-element provides granular control over marker color, font, and size independent of list content. Custom markers by setting list-style: none and using ::before pseudo-elements with custom content. Horizontal navigation menus often use display: flex on <ul> with list-style: none. Nested lists require different marker types or reduced margins for hierarchy clarity. Counter properties (counter-reset, counter-increment, counter()) enable custom numbering for complex nested lists.",
  code: `/* ========== BASIC LIST STYLES ========== */
/* Unordered list — bullets */
ul {
    list-style-type: disc;    /* disc, circle, square, none */
    margin-left: 20px;
    padding-left: 0;
}

/* Ordered list — numbers */
ol {
    list-style-type: decimal;  /* decimal, lower-roman, upper-roman, lower-alpha, upper-alpha */
    margin-left: 20px;
}

/* ========== CUSTOM MARKER COLOR using ::marker ========== */
li::marker {
    color: #3498db;
    font-weight: bold;
    font-size: 1.2em;
}
/* Note: ::marker only supports color, font, and content properties */

/* ========== REMOVE MARKERS FOR NAVIGATION ========== */
.nav-menu {
    list-style: none;  /* Removes bullets/numbers */
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}
.nav-menu li {
    padding: 8px 16px;
}

/* ========== CUSTOM ICONS with ::before ========== */
.checklist {
    list-style: none;
    padding: 0;
}
.checklist li {
    margin-bottom: 10px;
}
.checklist li::before {
    content: "✓";        /* Custom checkmark */
    color: #2ecc71;
    font-weight: bold;
    margin-right: 8px;
}

/* Arrow list */
.arrow-list {
    list-style: none;
    padding: 0;
}
.arrow-list li::before {
    content: "→";
    color: #3498db;
    margin-right: 8px;
}

/* ========== HORIZONTAL LIST (Navigation, Tags) ========== */
.horizontal-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 0;
}
.horizontal-list li {
    background: #f0f0f0;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.875rem;
}

/* ========== NESTED LISTS ========== */
.nested-list ul {
    margin-left: 20px;
    list-style-type: circle;
}
.nested-list ul ul {
    list-style-type: square;
}
.nested-list ul ul ul {
    list-style-type: disc;
}

/* ========== INLINE LIST FOR BREADCRUMBS ========== */
.breadcrumb {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
}
.breadcrumb li {
    display: inline-flex;
    align-items: center;
}
.breadcrumb li:not(:last-child)::after {
    content: "/";
    margin: 0 8px;
    color: #999;
}
.breadcrumb a {
    text-decoration: none;
    color: #3498db;
}
.breadcrumb a:hover {
    text-decoration: underline;
}

/* ========== CUSTOM COUNTERS FOR ORDERED LISTS ========== */
.custom-counter {
    list-style: none;
    counter-reset: custom-counter;
    padding: 0;
}
.custom-counter li {
    counter-increment: custom-counter;
    margin-bottom: 10px;
}
.custom-counter li::before {
    content: counter(custom-counter) ". ";
    color: #3498db;
    font-weight: bold;
    margin-right: 8px;
}

/* Roman numeral counter */
.roman-counter {
    list-style: none;
    counter-reset: roman-counter;
}
.roman-counter li {
    counter-increment: roman-counter;
}
.roman-counter li::before {
    content: counter(roman-counter, lower-roman) ". ";
    font-weight: bold;
}

/* ========== DEFINITION LISTS (dl, dt, dd) ========== */
.definition-list {
    margin: 20px 0;
}
.definition-list dt {
    font-weight: bold;
    color: #2c3e50;
    margin-top: 12px;
}
.definition-list dd {
    margin-left: 20px;
    color: #666;
    margin-bottom: 8px;
}

/* ========== HORIZONTAL DEFINITION LIST ========== */
.horizontal-dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px 16px;
}
.horizontal-dl dt {
    font-weight: bold;
    color: #2c3e50;
}
.horizontal-dl dd {
    margin: 0;
    color: #666;
}`,
  lineByLine: [
    "Line 2-7: Unordered list — disc, circle, square bullet types",
    "Line 3: list-style-type: disc — default bullet style",
    "Line 4: margin-left: 20px — indents list",
    "Line 10-14: Ordered list — decimal, roman, alpha numbering",
    "Line 18-22: ::marker pseudo-element — custom marker color",
    "Line 19: li::marker — styles only the marker, not content",
    "Line 20: Limited to color, font, content properties",
    "Line 26-33: Navigation menu — remove markers, use flex",
    "Line 27: list-style: none — removes bullets/numbers",
    "Line 28: display: flex — horizontal navigation",
    "Line 38-46: Custom checkmark — ::before with content",
    "Line 40: list-style: none — remove default markers",
    "Line 44: content: '✓' — custom checkmark symbol",
    "Line 52-56: Arrow list — similar with right arrow",
    "Line 61-72: Horizontal list — tags/chips styling",
    "Line 62: display: flex — horizontal layout",
    "Line 63: flex-wrap: wrap — wraps on small screens",
    "Line 64: gap: 12px — space between items",
    "Line 77-86: Nested lists — different marker types per level",
    "Line 92-106: Breadcrumb — inline separators",
    "Line 96: li:not(:last-child)::after — adds separator except last",
    "Line 97: content: '/' — separator character",
    "Line 112-122: Custom counter — counter() function",
    "Line 113: counter-reset: custom-counter — initializes counter",
    "Line 116: counter-increment: custom-counter — increments",
    "Line 118: content: counter(custom-counter) '. ' — displays count",
    "Line 126-133: Roman numeral counter — counter(, lower-roman)",
    "Line 138-148: Definition list — dt (term), dd (definition)",
    "Line 155-163: Horizontal definition list — grid layout"
  ],
  simpleMeaning: "list-style-type changes bullets/numbers. ::marker styles marker color/size. Remove markers with list-style: none for navigation menus.",
  output: "Styled bullet lists with custom colors. Horizontal navigation menus. Checklist with custom checkmark icons. Breadcrumbs with separators.",
  note: "Use list-style: none and ::before for custom icons. ::marker pseudo-element styles markers but has limited properties (color, font, size)."
},

// ==================== FORMS (11) ====================
{
  name: "26. FORMS — Input Styling",
  description: "Form styling creates user input interfaces that are visually consistent and user-friendly. Input styling includes border, border-radius, padding, font-size, and transition effects for focus states. Pseudo-classes provide interactive feedback: :focus shows active field with custom ring, :valid/:invalid indicates data validation status, :checked styles selected radio/checkbox, :disabled grays out inactive fields, :required indicates mandatory fields. Grouping fields with <fieldset> and <legend> creates semantic sections. Labels associate with inputs via for/id attributes for accessibility. Custom checkboxes and radios hide default appearance and use ::before/::after for custom designs. Select dropdowns styled with appearance: none to remove defaults. Textareas have resize: vertical/horizontal/none/both. Form layout uses Grid or Flexbox for alignment.",
  code: `/* ========== INPUT BASE STYLING ========== */
input, textarea, select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
    transition: all 0.3s ease;
    background: white;
}

/* ========== FOCUS STATE ========== */
input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52,152,219,0.2);
}

/* ========== VALIDATION STATES ========== */
input:valid {
    border-color: #2ecc71;
}
input:invalid {
    border-color: #e74c3c;
}
.invalid-feedback {
    display: none;
    color: #e74c3c;
    font-size: 0.8rem;
    margin-top: 4px;
}
input:invalid + .invalid-feedback {
    display: block;
}

/* ========== DISABLED STATE ========== */
input:disabled, select:disabled, textarea:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.7;
}

/* ========== REQUIRED FIELD INDICATOR ========== */
.required::after {
    content: "*";
    color: #e74c3c;
    margin-left: 4px;
}

/* ========== CHECKBOX & RADIO ========== */
.checkbox-label, .radio-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}
input[type="checkbox"], input[type="radio"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #3498db;  /* Modern way to style checkboxes */
}
/* Custom checkbox (more control) */
.custom-checkbox {
    position: relative;
    cursor: pointer;
}
.custom-checkbox input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}
.custom-checkbox .checkmark {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    margin-right: 8px;
    transition: all 0.2s;
}
.custom-checkbox input:checked + .checkmark {
    background: #3498db;
    border-color: #3498db;
    position: relative;
}
.custom-checkbox input:checked + .checkmark::after {
    content: "✓";
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* ========== CUSTOM SELECT DROPDOWN ========== */
.custom-select {
    appearance: none;  /* Removes default arrow */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 40px;
    cursor: pointer;
}

/* ========== TEXTAREA STYLING ========== */
textarea {
    resize: vertical;   /* vertical, horizontal, both, none */
    min-height: 100px;
}

/* ========== FORM LAYOUT (Grid) ========== */
.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.full-width {
    grid-column: span 2;
}

/* ========== FORM GROUP ========== */
.form-group {
    margin-bottom: 20px;
}
.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
}

/* ========== SUBMIT BUTTON ========== */
button[type="submit"] {
    background: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}
button[type="submit"]:hover {
    background: #2980b9;
    transform: translateY(-2px);
}
button[type="submit"]:active {
    transform: translateY(0);
}

/* ========== FIELD SET & LEGEND ========== */
fieldset {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}
legend {
    padding: 0 10px;
    font-weight: 600;
    color: #3498db;
}

/* ========== INLINE FORM ========== */
.inline-form {
    display: flex;
    gap: 12px;
    align-items: flex-end;
}
.inline-form .form-group {
    flex: 1;
    margin-bottom: 0;
}`,
  lineByLine: [
    "Line 2-11: Input base — consistent padding, border, border-radius",
    "Line 3: width: 100% — full width of container",
    "Line 4: padding: 12px 16px — comfortable tap target",
    "Line 5: border: 2px solid #e0e0e0 — visible but subtle",
    "Line 9: transition: all 0.3s ease — smooth focus transitions",
    "Line 14-19: Focus state — removes default outline, adds custom ring",
    "Line 18: box-shadow: 0 0 0 3px rgba(52,152,219,0.2) — focus ring",
    "Line 23-34: Validation — :valid/:invalid pseudo-classes",
    "Line 28: :invalid — red border for invalid fields",
    "Line 31-34: .invalid-feedback — shows message on :invalid",
    "Line 38-42: Disabled state — gray background, not-allowed cursor",
    "Line 46-49: Required indicator — asterisk after label",
    "Line 53-63: Checkbox/radio — accent-color for modern styling",
    "Line 66-90: Custom checkbox — complete custom styling with ::after",
    "Line 68: opacity: 0 — hides default checkbox",
    "Line 72-78: .checkmark — custom checkbox design",
    "Line 96-102: Custom select — appearance: none removes default arrow",
    "Line 97: data URL for custom arrow icon",
    "Line 108-111: Textarea — resize: vertical allows height adjustment",
    "Line 115-120: Form grid — two-column layout",
    "Line 118: grid-template-columns: 1fr 1fr — equal columns",
    "Line 119: .full-width { grid-column: span 2 } — spans both columns",
    "Line 124-130: Form group — consistent margin and label styling",
    "Line 135-149: Submit button — hover effects, active feedback",
    "Line 146: transform: translateY(-2px) — lift on hover",
    "Line 149: transform: translateY(0) — press feedback",
    "Line 154-162: Fieldset and legend — groups related fields",
    "Line 167-173: Inline form — flex layout for horizontal forms"
  ],
  simpleMeaning: "Form inputs need consistent padding, border, border-radius. :focus adds visual feedback. :valid/:invalid show validation status.",
  output: "Beautiful forms with consistent styling, focus rings, validation colors, custom checkboxes, and responsive layouts.",
  note: "Always style focus states for accessibility. Use Grid/Flexbox for form layout. appearance: none removes default select styling."
},

// ==================== ADVANCED TOPICS (10) ====================
{
  name: "27. ADVANCED TOPICS — Modern CSS Features",
  description: "Advanced CSS includes powerful professional features. Container Queries allow components to respond to their parent container size rather than viewport, enabling true component-level responsiveness. CSS Layers (@layer) manage specificity by ordering entire stylesheet sections, preventing specificity wars. CSS Nesting provides Sass-like syntax for cleaner organization. :has() selector (parent selector) selects elements containing specific children. Trigonometric functions (sin, cos, tan) enable complex geometric calculations. Color functions (color-mix, color-contrast, relative colors) provide advanced color manipulation. Scroll-driven animations link animation progress to scroll position using animation-timeline. View Transitions API creates smooth animated transitions between page states. Subgrid allows nested grids to inherit parent grid definitions. Scope provides style encapsulation without Shadow DOM.",
  code: `/* ========== CONTAINER QUERIES ========== */
/* Define container */
.card-container {
    container-type: inline-size;
    container-name: card;
}
/* Component responds to its own container width */
@container card (min-width: 400px) {
    .card {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    .card img {
        width: 150px;
    }
}
@container card (max-width: 399px) {
    .card {
        display: block;
    }
}

/* ========== CSS LAYERS (Cascade Layers) ========== */
/* Define layer order (lower specificity but higher layer wins) */
@layer reset, theme, components, utilities;

@layer reset {
    * { margin: 0; padding: 0; box-sizing: border-box; }
}

@layer theme {
    :root { --primary: #3498db; }
    body { font-family: system-ui; }
}

@layer components {
    .button {
        background: var(--primary);
        padding: 12px 24px;
    }
}

@layer utilities {
    .text-center { text-align: center; }
}

/* ========== CSS NESTING ========== */
/* Without nesting:
.card { padding: 20px; }
.card .title { font-size: 1.5rem; }
.card:hover { transform: translateY(-5px); }
*/
/* With nesting (Modern CSS) */
.card {
    padding: 20px;
    
    & .title {
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    &:hover {
        transform: translateY(-5px);
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
    }
}

/* ========== :HAS() PARENT SELECTOR ========== */
/* Select card that contains an image */
.card:has(img) {
    padding: 0;
    overflow: hidden;
}
/* Select form group that has an invalid input */
.form-group:has(input:invalid) {
    color: red;
}
/* Select section that has a heading */
section:has(h1, h2, h3) {
    margin-top: 40px;
}
/* Select parent containing checked checkbox */
.checkbox-group:has(input:checked) {
    background: #e8f5e9;
}

/* ========== TRIGONOMETRIC FUNCTIONS ========== */
.rotated-element {
    /* sin(45deg) = 0.707, cos(45deg) = 0.707 */
    transform: translate(
        calc(cos(45deg) * 100px),
        calc(sin(45deg) * 100px)
    );
}
.circular-motion {
    transform: rotate(calc(atan2(100, 100) * 1rad));
}

/* ========== COLOR FUNCTIONS ========== */
.color-mix-example {
    /* Mix red 30% with blue 70% */
    background: color-mix(in srgb, red 30%, blue);
}
.color-contrast-example {
    /* Automatically choose readable color */
    color: color-contrast(var(--bg) vs black, white);
}
.relative-color {
    /* Adjust existing color */
    --primary: #3498db;
    background: oklab(from var(--primary) l c h);
}

/* ========== SCROLL-DRIVEN ANIMATIONS ========== */
@keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.scroll-animate {
    animation: fade-in linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 100%;
}
/* Progress bar based on scroll */
@keyframes grow-progress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
}
.progress-bar {
    animation: grow-progress linear;
    animation-timeline: scroll(block root);
    transform-origin: left;
}

/* ========== SUBGRID ========== */
.subgrid-parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
.subgrid-child {
    display: grid;
    grid-template-columns: subgrid;  /* Inherits parent grid */
    grid-column: span 2;
}
.subgrid-child .item {
    grid-column: span 1;
}

/* ========== VIEW TRANSITIONS API ========== */
/* JavaScript triggers view transitions:
   document.startViewTransition(() => {
       updateDOM()
   });
*/
.view-transition {
    view-transition-name: card;
}
::view-transition-old(card),
::view-transition-new(card) {
    animation-duration: 0.5s;
}

/* ========== NEW MEDIA QUERY RANGE SYNTAX ========== */
/* Old syntax */
/* @media (min-width: 768px) and (max-width: 1024px) {} */
/* New range syntax */
@media (width >= 768px) and (width <= 1024px) {
    .responsive { background: blue; }
}
@media (width < 768px) {
    .mobile { display: block; }
}
@media (width > 1024px) {
    .desktop { display: block; }
}`,
  lineByLine: [
    "Line 1: CSS comment separator for Container Queries section",
    "Line 2-3: Comment explaining Container Queries feature",
    "Line 4-7: .card-container class definition — establishes a container for queries",
    "Line 5: container-type: inline-size — enables container queries based on inline (width) size of container",
    "Line 6: container-name: card — gives the container a name for targeted queries",
    "Line 8: @container card (min-width: 400px) — container query that activates when container width is 400px or more",
    "Line 9-10: .card selector — targets card elements inside this container when query condition is true",
    "Line 10: display: flex — switches card to flex layout when container is wide enough",
    "Line 11: flex-direction: row — arranges card contents horizontally",
    "Line 12: gap: 20px — adds 20px space between flex items",
    "Line 13-14: .card img — targets images inside card when container is wide",
    "Line 14: width: 150px — sets image width to 150px",
    "Line 15-16: @container card (max-width: 399px) — activates when container width is less than 399px",
    "Line 17-18: .card selector — targets cards in narrow container",
    "Line 18: display: block — stacks card contents vertically",
    "Line 22: Comment separator for CSS Layers section",
    "Line 23: Comment explaining Cascade Layers feature",
    "Line 25: @layer reset, theme, components, utilities — defines layer order (first declared = lowest priority)",
    "Line 27-29: @layer reset — defines reset layer",
    "Line 28: * selector — targets all elements, sets reset styles",
    "Line 30: @layer theme — defines theme layer (overrides reset)",
    "Line 31: :root — defines global CSS variables",
    "Line 32: body selector — sets default font for page",
    "Line 33: @layer components — defines components layer (overrides theme)",
    "Line 34-38: .button selector — button component styling using theme variables",
    "Line 35: background: var(--primary) — uses primary color variable",
    "Line 36: padding: 12px 24px — adds button padding",
    "Line 39: @layer utilities — defines utilities layer (highest priority)",
    "Line 40: .text-center — utility class for text alignment",
    "Line 44: Comment separator for CSS Nesting section",
    "Line 45-49: Comment showing traditional (non-nested) CSS syntax",
    "Line 50-67: CSS Nesting example — modern syntax for nested selectors",
    "Line 51: .card — parent selector",
    "Line 52: padding: 20px — padding applies to card",
    "Line 54: & .title — ampersand represents parent (.card), selects .title elements inside",
    "Line 55: font-size: 1.5rem — title font size",
    "Line 56: font-weight: bold — makes title bold",
    "Line 58: &:hover — ampersand plus pseudo-class for hover state",
    "Line 59: transform: translateY(-5px) — moves card up on hover",
    "Line 61: &::before — nested pseudo-element",
    "Line 62: content: '' — required for pseudo-element to appear",
    "Line 63: position: absolute — positions pseudo-element absolutely",
    "Line 64: top: 0 — positions at top of parent",
    "Line 68: Comment separator for :has() Parent Selector section",
    "Line 69: Comment explaining :has() selector feature",
    "Line 71: .card:has(img) — selects card only if it contains an image element",
    "Line 72: padding: 0 — removes padding from cards with images",
    "Line 73: overflow: hidden — hides overflow for image cards",
    "Line 75: .form-group:has(input:invalid) — selects form group containing invalid input",
    "Line 76: color: red — changes text color to red",
    "Line 78: section:has(h1, h2, h3) — selects section that contains any heading",
    "Line 79: margin-top: 40px — adds top margin to sections with headings",
    "Line 81: .checkbox-group:has(input:checked) — selects group containing checked checkbox",
    "Line 82: background: #e8f5e9 — adds green-tinted background when checked",
    "Line 86: Comment separator for Trigonometric Functions section",
    "Line 87: .rotated-element — class for trigonometric transform demo",
    "Line 88: Comment — explains sin(45deg) and cos(45deg) values",
    "Line 89-92: transform: translate() — moves element using trigonometric values",
    "Line 90: calc(cos(45deg) * 100px) — horizontal movement = 0.707 × 100px",
    "Line 91: calc(sin(45deg) * 100px) — vertical movement = 0.707 × 100px",
    "Line 93-95: .circular-motion — class for atan2 demo",
    "Line 94: calc(atan2(100, 100) * 1rad) — calculates angle: 45 degrees in radians",
    "Line 98: Comment separator for Color Functions section",
    "Line 99: .color-mix-example — class for color-mix demo",
    "Line 100: Comment — explains mixing red 30% with blue 70%",
    "Line 101: background: color-mix(in srgb, red 30%, blue) — mixes colors in sRGB space",
    "Line 102-104: .color-contrast-example — automatically chooses readable text color",
    "Line 103: color: color-contrast(var(--bg) vs black, white) — picks highest contrast from options",
    "Line 105-108: .relative-color — relative color syntax demo",
    "Line 106: --primary: #3498db — defines base color variable",
    "Line 107: background: oklab(from var(--primary) l c h) — converts to OKLAB color space",
    "Line 111: Comment separator for Scroll-driven Animations section",
    "Line 112-114: @keyframes fade-in — defines fade-in animation keyframes",
    "Line 113: from { opacity: 0; transform: translateY(20px); } — starting state (invisible, moved down)",
    "Line 114: to { opacity: 1; transform: translateY(0); } — ending state (visible, normal position)",
    "Line 115-119: .scroll-animate — class for scroll-linked animation",
    "Line 116: animation: fade-in linear both — applies animation with linear timing, both fill-mode",
    "Line 117: animation-timeline: view() — links animation progress to scroll position (when element enters view)",
    "Line 118: animation-range: entry 0% entry 100% — animation runs from element entering to fully visible",
    "Line 120-122: @keyframes grow-progress — defines progress bar growth animation",
    "Line 121: from { transform: scaleX(0); } — starting state (0% width)",
    "Line 122: to { transform: scaleX(1); } — ending state (100% width)",
    "Line 123-127: .progress-bar — scroll-triggered progress bar",
    "Line 124: animation: grow-progress linear — applies growth animation with linear timing",
    "Line 125: animation-timeline: scroll(block root) — links to page scroll progress",
    "Line 126: transform-origin: left — ensures progress grows from left to right",
    "Line 130: Comment separator for Subgrid section",
    "Line 131-133: .subgrid-parent — parent grid container",
    "Line 132: grid-template-columns: repeat(4, 1fr) — creates 4 equal-width columns",
    "Line 133: gap: 20px — adds gap between grid items",
    "Line 134-138: .subgrid-child — nested grid using subgrid",
    "Line 135: grid-template-columns: subgrid — inherits parent's column definitions",
    "Line 136: grid-column: span 2 — spans 2 columns of the parent grid",
    "Line 137-138: .subgrid-child .item — items inside subgrid child",
    "Line 138: grid-column: span 1 — each item spans 1 column (inherits parent columns)",
    "Line 142: Comment separator for View Transitions API section",
    "Line 143-146: JavaScript comment — shows how to trigger view transitions from JS",
    "Line 147-149: .view-transition — element that participates in view transition",
    "Line 148: view-transition-name: card — unique name for transition target",
    "Line 150-152: ::view-transition-old(card), ::view-transition-new(card) — pseudo-elements for transition animation",
    "Line 151: animation-duration: 0.5s — transition takes 0.5 seconds",
    "Line 155: Comment separator for New Media Query Range Syntax section",
    "Line 156-157: Comment — shows old syntax for comparison",
    "Line 158-160: @media (width >= 768px) and (width <= 1024px) — new range syntax for tablet",
    "Line 159: .responsive { background: blue; } — styles for tablet devices",
    "Line 161-163: @media (width < 768px) — new range syntax for mobile (less than 768px)",
    "Line 162: .mobile { display: block; } — styles for mobile devices",
    "Line 164-166: @media (width > 1024px) — new range syntax for desktop (greater than 1024px)",
    "Line 165: .desktop { display: block; } — styles for desktop devices"
  ],
  simpleMeaning: "Container queries = components respond to their own size. Layers manage CSS specificity. Nesting = cleaner syntax. :has() = parent selector. scroll-timeline = scroll-linked animations.",
  output: "Truly responsive components that adapt to their container. Organized stylesheets with clear layer hierarchy. Clean nested syntax. Scroll-triggered animations.",
  note: "Container queries are game-changing for component libraries. Use cascade layers to replace !important. Subgrid perfect for complex nested grids. :has() is the parent selector we've always wanted."
},
// ==================== LAYOUT PATTERNS (15) ====================
{
  name: "28. LAYOUT PATTERNS — Proven Layout Solutions",
  description: "Layout patterns are reusable solutions to common web design challenges that work across different screen sizes. Holy Grail Layout features header, footer, and three columns (sidebars + main) with content-first source order and equal heights using Flexbox or Grid. Sticky Footer pushes footer to bottom when content is short using flexbox min-height: 100vh and flex: 1 on main content. Split Screen splits viewport 50/50 horizontally or vertically for hero sections or comparison layouts. Column Drop reorders from 3 columns to 2 to 1 as screen shrinks using media queries. Mostly Fluid uses max-width container with multi-column grid that reduces columns on smaller screens. Layout Shifter reorganizes layout completely at breakpoints (sidebar moves above or below content). Off-Canvas moves secondary content off-screen (translateX) with toggle button. Modal Center overlays content centered with backdrop overlay. Equal Height Cards using flex or grid ensure cards in same row have equal height regardless of content. Masonry Grid arranges items like Pinterest with varying heights using CSS columns or grid auto-rows.",
  code: `/* ========== HOLY GRAIL LAYOUT (Flexbox) ========== */
.holy-grail {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.holy-grail .content {
    display: flex;
    flex: 1;
}
.holy-grail .sidebar-left {
    width: 250px;
    background: #f0f0f0;
}
.holy-grail .main {
    flex: 1;
    padding: 20px;
}
.holy-grail .sidebar-right {
    width: 250px;
    background: #f0f0f0;
}
.holy-grail .footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 20px;
}
/* Holy Grail using Grid (simpler) */
.holy-grail-grid {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar-left main sidebar-right"
        "footer footer footer";
    grid-template-columns: 250px 1fr 250px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
.holy-grail-grid .header { grid-area: header; }
.holy-grail-grid .sidebar-left { grid-area: sidebar-left; }
.holy-grail-grid .main { grid-area: main; }
.holy-grail-grid .sidebar-right { grid-area: sidebar-right; }
.holy-grail-grid .footer { grid-area: footer; }

/* ========== STICKY FOOTER ========== */
.sticky-footer {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.sticky-footer main {
    flex: 1;  /* Pushes footer to bottom when content is short */
}
.sticky-footer footer {
    background: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

/* ========== SPLIT SCREEN (50/50) ========== */
.split-screen {
    display: flex;
    min-height: 100vh;
}
.split-screen .left {
    flex: 1;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
}
.split-screen .right {
    flex: 1;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
}
@media (max-width: 768px) {
    .split-screen {
        flex-direction: column;
    }
    .split-screen .left,
    .split-screen .right {
        min-height: 50vh;
    }
}

/* ========== COLUMN DROP (Responsive Columns) ========== */
.column-drop {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
@media (max-width: 768px) {
    .column-drop {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 480px) {
    .column-drop {
        grid-template-columns: 1fr;
    }
}

/* ========== OFF-CANVAS MENU ========== */
.off-canvas-container {
    position: relative;
    overflow-x: hidden;
}
.off-canvas-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    background: #2c3e50;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1000;
}
.off-canvas-menu.open {
    transform: translateX(0);
}
.off-canvas-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
}
.off-canvas-overlay.active {
    opacity: 1;
    visibility: visible;
}
.off-canvas-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1001;
    background: #3498db;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
}

/* ========== EQUAL HEIGHT CARDS ========== */
.equal-height-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.equal-height-cards .card {
    flex: 1 1 300px;
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
}
.equal-height-cards .card .btn {
    margin-top: auto;  /* Pushes button to bottom */
}
/* Using Grid for equal height (automatic) */
.equal-height-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

/* ========== MASONRY GRID (Pinterest-style) ========== */
.masonry {
    columns: 3 250px;
    column-gap: 20px;
}
.masonry-item {
    break-inside: avoid;
    margin-bottom: 20px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.masonry-item img {
    width: 100%;
    display: block;
}
@media (max-width: 768px) {
    .masonry { columns: 2 200px; }
}
@media (max-width: 480px) {
    .masonry { columns: 1; }
}

/* ========== MODAL CENTER ========== */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
}
.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}
.modal {
    background: white;
    border-radius: 16px;
    padding: 24px;
    max-width: 90%;
    width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    transform: scale(0.9);
    transition: transform 0.3s ease;
}
.modal-overlay.active .modal {
    transform: scale(1);
}

/* ========== PANCAKE STACK (Centered Content) ========== */
.pancake-stack {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.pancake-stack header,
.pancake-stack footer {
    background: #333;
    color: white;
    padding: 20px;
    text-align: center;
}
.pancake-stack main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}

/* ========== BREADCRUMBS ========== */
.breadcrumb {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
}
.breadcrumb li {
    display: inline-flex;
    align-items: center;
}
.breadcrumb li:not(:last-child)::after {
    content: "/";
    margin: 0 8px;
    color: #999;
}
.breadcrumb a {
    text-decoration: none;
    color: #3498db;
}
.breadcrumb a:hover {
    text-decoration: underline;
}
.breadcrumb li:last-child a {
    color: #666;
    pointer-events: none;
}

/* ========== PAGINATION ========== */
.pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
    list-style: none;
    padding: 0;
}
.pagination a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    padding: 0 8px;
    background: #f0f0f0;
    color: #333;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.2s ease;
}
.pagination a:hover {
    background: #3498db;
    color: white;
}
.pagination .active a {
    background: #3498db;
    color: white;
}`,
  lineByLine: [
    "Line 2-28: Holy Grail Layout — header, 3 columns, footer",
    "Line 4: min-height: 100vh — full viewport height",
    "Line 7: nested flex with flex:1 — middle section expands",
    "Line 12,19: fixed width sidebars — 250px each",
    "Line 22-28: Grid version — simpler with grid-template-areas",
    "Line 33-41: Sticky Footer — footer always at bottom",
    "Line 35: flex: 1 on main — pushes footer down",
    "Line 46-67: Split Screen — 50/50 layout",
    "Line 48: flex: 1 on both sides — equal width",
    "Line 58-63: responsive — stacks vertically on mobile",
    "Line 72-83: Column Drop — 3→2→1 columns",
    "Line 73: grid-template-columns: repeat(3, 1fr) — 3 columns desktop",
    "Line 75-78: tablet breakpoint — 2 columns",
    "Line 80-83: mobile breakpoint — 1 column",
    "Line 88-118: Off-Canvas Menu — slides in from left",
    "Line 93: transform: translateX(-100%) — hidden off-screen",
    "Line 97: transform: translateX(0) — visible when open",
    "Line 101-108: overlay — dims background when menu open",
    "Line 123-137: Equal Height Cards — Flexbox with stretch",
    "Line 132: margin-top: auto — pushes button to card bottom",
    "Line 136-137: Grid — automatic equal height",
    "Line 142-160: Masonry Grid — Pinterest-style layout",
    "Line 143: columns: 3 250px — CSS columns with minimum width",
    "Line 144: break-inside: avoid — prevents item splitting across columns",
    "Line 165-188: Modal Center — centered overlay",
    "Line 168-172: fixed overlay covers entire screen",
    "Line 173: display: flex + align/justify center — centers modal",
    "Line 181-184: modal styling with transform scale",
    "Line 193-205: Pancake Stack — centered content between header/footer",
    "Line 211-231: Breadcrumbs — with / separators",
    "Line 217: li:not(:last-child)::after — adds separator except last",
    "Line 236-254: Pagination — centered page links"
  ],
  simpleMeaning: "Layout patterns are proven solutions: Holy Grail (3 columns), Sticky Footer (footer always at bottom), Off-Canvas (hidden sidebar), Masonry (Pinterest-style).",
  output: "Professional website layouts including blog layouts, dashboards, portfolios, galleries, and e-commerce product grids.",
  note: "Flex and Grid handle most modern patterns. Mobile-first responsive patterns reorganize content. Masonry requires columns or Grid with auto-rows."
},

// ==================== ACCESSIBILITY (8) ====================
{
  name: "29. ACCESSIBILITY — Inclusive Design",
  description: "Accessibility (a11y) ensures websites work for all users including those with disabilities using assistive technologies. Focus indicators (outline or box-shadow) are critical for keyboard navigation — never use outline: none without visible replacement. Sufficient color contrast (WCAG 2.1 requires 4.5:1 for normal text, 3:1 for large text) between text and background for readability. prefers-reduced-motion media query disables animations for users with vestibular disorders who experience dizziness from motion. Screen reader only content hides visually but remains accessible via class that positions off-screen. Semantic HTML (buttons for clickable, links for navigation) works better than divs with onclick handlers. ARIA attributes (aria-label, aria-hidden, aria-expanded) provide additional context for screen readers when semantic HTML isn't enough. Focus management ensures focus moves logically through interactive elements. Skip to content link allows keyboard users to bypass navigation blocks.",
  code: `/* ========== FOCUS INDICATORS ========== */
/* NEVER remove outline without replacement! */
button:focus, a:focus, input:focus, textarea:focus, select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52,152,219,0.4);
    border-radius: 4px;
}
/* High contrast focus for dark backgrounds */
.dark-theme :focus {
    outline: 2px solid white;
    outline-offset: 2px;
    box-shadow: none;
}

/* ========== RESPECT REDUCED MOTION ========== */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* ========== SCREEN READER ONLY (Visually hidden but accessible) ========== */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
/* Use: <span class="sr-only">Read this text</span> */

/* ========== SKIP TO CONTENT LINK ========== */
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #2c3e50;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 100;
}
.skip-link:focus {
    top: 0;
}

/* ========== COLOR CONTRAST ========== */
/* Bad contrast (fails WCAG) */
.bad-contrast {
    background: #fff;
    color: #ccc;  /* 1.5:1 ratio — too low */
}
/* Good contrast (passes WCAG AA) */
.good-contrast {
    background: #fff;
    color: #333;  /* 12:1 ratio — excellent */
}
/* Large text needs 3:1 minimum */
.large-text {
    font-size: 24px;
    font-weight: bold;
    color: #666;
    background: #fff;  /* 4:1 ratio — passes for large text */
}

/* ========== ARIA ATTRIBUTES ========== */
/* aria-expanded for expandable content */
[aria-expanded="false"] + .expandable-content {
    display: none;
}
[aria-expanded="true"] + .expandable-content {
    display: block;
}
/* aria-hidden hides decorative content from screen readers */
.decorative-icon {
    aria-hidden: true;
}
/* aria-label provides accessible name */
.close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}
.close-button::before {
    content: "✕";
}
/* aria-label hidden from screen readers but button has accessible name */
.close-button {
    aria-label: "Close";
}

/* ========== FOCUS VISIBLE (Only show focus for keyboard users) ========== */
/* Shows focus ring only when navigating with keyboard, not mouse clicks */
:focus:not(:focus-visible) {
    outline: none;
    box-shadow: none;
}
:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52,152,219,0.4);
    border-radius: 4px;
}

/* ========== HIGH CONTRAST MODE SUPPORT ========== */
@media (forced-colors: active) {
    /* Forced colors mode removes box-shadows, uses system colors */
    .button {
        border: 2px solid ButtonText;
        background: ButtonFace;
        color: ButtonText;
    }
    .button:hover {
        background: Highlight;
        color: HighlightText;
    }
}

/* ========== CARD ACCESSIBILITY ========== */
/* Cards should be focusable and have accessible labels */
.card-link {
    text-decoration: none;
    color: inherit;
}
.card-link:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52,152,219,0.4);
    border-radius: 12px;
}

/* ========== FORM ACCESSIBILITY ========== */
.form-group {
    margin-bottom: 20px;
}
label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
}
input:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52,152,219,0.4);
}
.error-message {
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 4px;
}
/* Associate error messages with inputs */
[aria-invalid="true"] {
    border-color: #e74c3c;
}
[aria-describedby="error-message"] {
    border-color: #e74c3c;
}`,
  lineByLine: [
    "Line 2-10: Focus indicators — always visible for keyboard navigation",
    "Line 5: outline: none — removes default (but we add custom)",
    "Line 6: box-shadow: 0 0 0 3px — custom focus ring",
    "Line 12-16: prefers-reduced-motion — disables animations for sensitive users",
    "Line 14: animation-duration: 0.01ms — effectively disables animations",
    "Line 22-34: sr-only — visually hidden but screen reader accessible",
    "Line 24-33: position absolute + clip — hides visually",
    "Line 39-47: Skip link — keyboard users skip navigation",
    "Line 40: top: -40px — hidden off-screen",
    "Line 46: top: 0 — appears when focused",
    "Line 52-62: Color contrast examples — WCAG requirements",
    "Line 55: bad contrast (1.5:1) — fails",
    "Line 59: good contrast (12:1) — passes",
    "Line 68-76: ARIA attributes — enhance screen reader experience",
    "Line 69-72: aria-expanded — indicates expandable state",
    "Line 82-87: aria-label — provides accessible name",
    "Line 93-100: :focus-visible — only shows focus for keyboard users",
    "Line 94: :focus:not(:focus-visible) — hides mouse focus rings",
    "Line 95-100: :focus-visible — shows keyboard focus rings",
    "Line 105-116: forced-colors — high contrast mode support",
    "Line 121-127: Card accessibility — focusable cards",
    "Line 132-147: Form accessibility — labels, error messages",
    "Line 144: aria-invalid — indicates error state to screen readers"
  ],
  simpleMeaning: "Focus rings help keyboard users. prefers-reduced-motion disables animations for sensitive users. sr-only hides visually but keeps for screen readers.",
  output: "Websites usable by keyboard-only users, screen reader users, and people with motion sensitivity. Proper focus indicators and color contrast.",
  note: "Never use outline: none without replacement. Always test color contrast. Semantic HTML > ARIA. Respect user motion preferences."
},

// ==================== TOOLS & BEST PRACTICES (12) ====================
{
  name: "30. TOOLS & BEST PRACTICES — Professional CSS Development",
  description: "Professional CSS development requires proper tools and methodologies for maintainable, scalable code. CSS Methodologies like BEM (Block Element Modifier, .block__element--modifier) provide naming conventions that prevent conflicts and make component relationships clear. OOCSS (Object-Oriented CSS) separates structure (layout) from skin (colors, borders) for maximum reuse. SMACSS categorizes styles into base, layout, module, state, theme for organization. Preprocessors (Sass/SCSS, Less) add variables, nesting, mixins, functions, and partials to CSS. PostCSS processes CSS with plugins: Autoprefixer adds vendor prefixes, CSS Nano minifies, Stylelint lints for errors. Build tools (Vite, Webpack, Parcel) bundle and optimize CSS for production. Performance optimization includes critical CSS inlining (above-the-fold styles), code splitting, minification, and removing unused CSS with PurgeCSS. CSS-in-JS (Styled Components, Emotion) scopes styles to components dynamically. Utility frameworks (Tailwind CSS, UnoCSS) provide low-level utility classes for rapid development without writing custom CSS.",
  code: `/* ========== BEM NAMING CONVENTION ========== */
/* Block: standalone component */
.card { }
/* Element: part of block (uses __) */
.card__title { }
.card__image { }
.card__content { }
/* Modifier: variation of block/element (uses --) */
.card--featured { }
.card--dark { }
.card__title--large { }

/* Example BEM structure */
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.card__title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 8px;
}
.card__title--featured {
    color: #3498db;
}
.card--dark {
    background: #1a1a2e;
    color: white;
}

/* ========== OOCSS (Separate Structure from Skin) ========== */
/* Structure (reusable layout) */
.box {
    display: block;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
}
/* Skin (visual styles) */
.box-primary {
    background: #3498db;
    color: white;
    border: none;
}
.box-warning {
    background: #f39c12;
    color: white;
    border: none;
}
/* Usage: <div class="box box-primary">Content</div> */

/* ========== CSS CUSTOM PROPERTIES FOR THEMING ========== */
:root {
    --color-primary: #3498db;
    --spacing-unit: 8px;
}
/* Consistent spacing system */
.card {
    padding: calc(var(--spacing-unit) * 2);
    margin-bottom: calc(var(--spacing-unit) * 3);
}

/* ========== COMMENTING & ORGANIZATION ========== */
/* ===== TABLE OF CONTENTS ===== */
/* 1. Reset & Base
 * 2. Typography
 * 3. Layout
 * 4. Components
 * 5. Pages
 * 6. Utilities
 * 7. Media Queries
 */

/* ===== 1. RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== 2. TYPOGRAPHY ===== */
body {
    font-family: 'Inter', system-ui, sans-serif;
    line-height: 1.6;
}

/* ===== 3. LAYOUT ===== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ========== PERFORMANCE BEST PRACTICES ========== */
/* 1. Animate only transform and opacity (GPU accelerated) */
.animate {
    transform: translateX(0);
    opacity: 1;
    transition: transform 0.3s, opacity 0.3s;
}
/* 2. Avoid animating width, height, top, left (causes layout reflow) */
/* BAD: transition: width 0.3s; */
/* GOOD: transition: transform 0.3s; */

/* 3. Use will-change for animations */
.will-animate {
    will-change: transform;
}

/* 4. Critical CSS inlined in <head>, non-critical deferred */
/* Inline above-the-fold styles, load rest asynchronously */

/* ========== MOBILE-FIRST MEDIA QUERIES ========== */
/* Base mobile styles first, then enhance */
.container {
    width: 100%;
    padding: 0 16px;
}
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* ========== UTILITY CLASSES (Reusable) ========== */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.mt-1 { margin-top: 4px; }
.mt-2 { margin-top: 8px; }
.mt-3 { margin-top: 16px; }
.mt-4 { margin-top: 24px; }
.mb-1 { margin-bottom: 4px; }
.mb-2 { margin-bottom: 8px; }
.mb-3 { margin-bottom: 16px; }
.mb-4 { margin-bottom: 24px; }
.p-1 { padding: 4px; }
.p-2 { padding: 8px; }
.p-3 { padding: 16px; }
.p-4 { padding: 24px; }

/* ========== DARK MODE BEST PRACTICE ========== */
@media (prefers-color-scheme: dark) {
    :root {
        --bg: #121212;
        --text: #ffffff;
    }
}
/* Or use class-based toggling */
[data-theme="dark"] {
    --bg: #121212;
    --text: #ffffff;
}
body {
    background: var(--bg);
    color: var(--text);
}

/* ========== SCSS EXAMPLE (Preprocessor) ========== */
/* 
// Variables
$primary: #3498db;
$spacing: 1rem;

// Mixin
@mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

// Nesting
.card {
    @include flex-center;
    padding: $spacing;
    
    &__title {
        font-size: 1.25rem;
    }
}
*/

/* ========== POSTCSS CONFIGURATION ========== */
/*
// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano'),
        require('postcss-preset-env')
    ]
}
*/

/* ========== STYLELINT CONFIGURATION ========== */
/*
// .stylelintrc.json
{
    "extends": "stylelint-config-standard",
    "rules": {
        "indentation": 4,
        "color-hex-length": "short"
    }
}
*/`,
  lineByLine: [
    "Line 2-19: BEM naming convention — .block__element--modifier",
    "Line 3: Block — standalone component (card, button, nav)",
    "Line 6: Element — part of block, uses __ (card__title)",
    "Line 9: Modifier — variation, uses -- (card--featured)",
    "Line 13-23: BEM in practice — clear component structure",
    "Line 28-43: OOCSS — separate structure from skin",
    "Line 29-34: Structure — reusable layout box",
    "Line 37-42: Skin — visual variations (primary, warning)",
    "Line 48-53: CSS variables for consistent theming",
    "Line 56-66: Comment organization — table of contents",
    "Line 70-78: Reset and base section",
    "Line 88-95: Performance best practices",
    "Line 89: animate transform and opacity — GPU accelerated",
    "Line 93: avoid width/height/top/left — causes layout reflow",
    "Line 102-111: Mobile-first media queries",
    "Line 115-127: Utility classes — reusable spacing utilities",
    "Line 132-145: Dark mode — prefers-color-scheme and class-based",
    "Line 150-168: SCSS examples — variables, mixins, nesting",
    "Line 173-181: PostCSS configuration — Autoprefixer, minification",
    "Line 186-195: Stylelint — CSS linting for consistency"
  ],
  simpleMeaning: "BEM naming = .block__element--modifier prevents conflicts. Preprocessors add variables/nesting. PostCSS auto-adds vendor prefixes. Animate only transform/opacity for performance.",
  output: "Maintainable, scalable CSS codebases. Consistent naming, automated optimization, cross-browser compatibility, and performance.",
  note: "Use BEM for team projects. Set up Autoprefixer for cross-browser support. PurgeCSS removes unused styles in production. Always version control CSS."
}



    ]
  },
  
  advanced: {
    title: "🚀 CSS Advanced - Professional Features",
    description: "Master professional CSS techniques including Box Model, Flexbox, Grid, animations, transforms, media queries, CSS variables, filters, and modern CSS functions. Build complex layouts and responsive designs like a pro.",
    
    topics: [
      // ==================== ADVANCED TOPIC 1: BOX MODEL ====================
      {
        name: "1. BOX MODEL — COMPLETE",
        description: "Every HTML element is a box with 4 layers from inside out: Content — actual text/image (width/height apply here). Padding — space between content and border (background color applies here). Border — outline of the box (width, style, color). Margin — space between this element and others (transparent). Key concept: box-sizing: border-box — includes padding and border in width calculation.",
        code: `.box {
    width: 300px;
    padding: 20px;
    border: 2px solid #3498db;
    margin: 20px auto;
    box-sizing: border-box;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`,
        lineByLine: [
          "Line 2: width: 300px; - Content width",
          "Line 3: padding: 20px; - Space INSIDE element, between content and border",
          "Line 4: border: 2px solid #3498db; - Border around element",
          "Line 5: margin: 20px auto; - Space OUTSIDE element, auto centers horizontally",
          "Line 6: box-sizing: border-box; - Includes padding/border in width/height calculation",
          "Line 7: box-shadow: 0 4px 12px rgba(0,0,0,0.15); - Adds shadow outside element"
        ],
        simpleMeaning: "Content inside, padding around content, border around padding, margin outside border.",
        output: "Content inside, padding around content, border around padding, margin outside border. Shadow adds depth.",
        note: "Always add * { box-sizing: border-box } at project start — avoids sizing issues."
      },
      
      // ==================== ADVANCED TOPIC 2: FLEXBOX ====================
      {
        name: "2. FLEXBOX — COMPLETE GUIDE",
        description: "Flexbox is a 1D layout system — aligns items in one direction (row or column) and distributes space. On container: display: flex makes direct children flex items. justify-content — alignment on main axis. align-items — alignment on cross axis. flex-direction — row or column. flex-wrap — allow wrapping. gap — spacing between items.",
        code: `.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
}
.flex-item {
    flex: 1;
}`,
        lineByLine: [
          "Line 2: display: flex; - Enables flexbox",
          "Line 3: flex-direction: row; - Horizontal layout",
          "Line 4: justify-content: center; - Centers on main axis",
          "Line 5: align-items: center; - Centers on cross axis",
          "Line 6: gap: 16px; - Space between items",
          "Line 9: flex: 1; - Item takes remaining space"
        ],
        simpleMeaning: "Flexbox arranges items in rows or columns, distributes space, centers easily.",
        output: "Items align in row or column, space distributes evenly. Centering is very easy.",
        note: "Use justify-content for main axis, align-items for cross axis. Flexbox is for 1D layouts."
      },
      
      // ==================== ADVANCED TOPIC 3: CSS GRID ====================
      {
        name: "3. CSS GRID — COMPLETE GUIDE",
        description: "CSS Grid is a 2D layout system — controls both rows and columns simultaneously. More powerful than Flexbox for complex page layouts. grid-template-columns — define column widths. grid-template-rows — define row heights. fr unit — fraction of remaining space. grid-template-areas — visual map of layout.",
        code: `.page-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`,
        lineByLine: [
          "Line 2: display: grid; - Turns container into grid",
          "Line 3: grid-template-columns: 250px 1fr; - 250px sidebar, remaining main",
          "Line 4: grid-template-rows: auto 1fr auto; - Header auto, flexible main, auto footer",
          "Line 5: gap: 20px; - Space between cells",
          "Line 6-9: grid-template-areas - Visual map of layout",
          "Line 11-14: grid-area: name; - Assigns elements to grid areas"
        ],
        simpleMeaning: "Grid controls rows AND columns simultaneously. Great for overall page layout.",
        output: "Visual map creates header, sidebar, main content, footer layout.",
        note: "Use Grid for overall page layout, Flexbox for components."
      },
      
      // ==================== ADVANCED TOPIC 4: TRANSITIONS ====================
      {
        name: "4. TRANSITIONS — SMOOTH CHANGES",
        description: "Transitions smoothly animate property changes between states — like hover effects. transition-property — which property to animate. transition-duration — how long. transition-timing-function — speed pattern (ease, linear). transition-delay — wait before starting.",
        code: `.btn {
    background: #3498db;
    transition: all 0.3s ease;
}
.btn:hover {
    background: #2980b9;
    transform: translateY(-2px);
}`,
        lineByLine: [
          "Line 4: transition: all 0.3s ease; - All properties animate over 0.3s",
          "Line 7: background: #2980b9; - Changes on hover, animates smoothly",
          "Line 8: transform: translateY(-2px); - Moves up 2px, animates"
        ],
        simpleMeaning: "Transitions animate property changes smoothly — hover effects become fluid.",
        output: "Button smoothly moves up and changes color on hover.",
        note: "Apply transition on original state, not on hover — otherwise mouse out will be abrupt."
      },
      
      // ==================== ADVANCED TOPIC 5: ANIMATIONS ====================
      {
        name: "5. ANIMATIONS — KEYFRAMES",
        description: "CSS animations use @keyframes to define multi-step animations, then apply to elements. @keyframes defines states (0% to 100% or from/to). animation properties: animation-name, animation-duration, animation-iteration-count, animation-direction, animation-fill-mode.",
        code: `@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
.slide-in {
    animation: slideIn 0.5s ease forwards;
}`,
        lineByLine: [
          "Line 2: from { transform: translateX(-100%); } - Start off-screen",
          "Line 3: to { transform: translateX(0); - End at normal position",
          "Line 6: animation: slideIn 0.5s ease forwards; - Applies animation"
        ],
        simpleMeaning: "Keyframes define multi-step animations. Apply them with animation property.",
        output: "slideIn — slides in from left.",
        note: "Use transitions for simple on/off effects. Use animations for complex, looping effects."
      },
      
      // ==================== ADVANCED TOPIC 6: TRANSFORMS ====================
      {
        name: "6. TRANSFORMATIONS — MOVE, ROTATE, SCALE",
        description: "Transform visually changes an element — original DOM position stays same (layout unaffected). translate(x,y) — move. rotate(deg) — rotate. scale(n) — enlarge or shrink. transform-origin — pivot point.",
        code: `.card:hover {
    transform: translateY(-5px) scale(1.02);
}`,
        lineByLine: [
          "Line 2: transform: translateY(-5px) - Moves up 5px",
          "Line 2: scale(1.02) - Makes 2% larger"
        ],
        simpleMeaning: "transform moves or scales an element visually without affecting layout.",
        output: "Element visually moves up and enlarges slightly.",
        note: "Order matters in multiple transforms."
      },
      
      // ==================== ADVANCED TOPIC 7: MEDIA QUERIES ====================
      {
        name: "7. MEDIA QUERIES — RESPONSIVE DESIGN",
        description: "Media queries apply different CSS based on screen size. Mobile-first approach — write CSS for smallest screens first, then add min-width breakpoints. Common breakpoints: 768px (tablets), 1024px (desktops).",
        code: `.container { width: 100%; padding: 16px; }
@media (min-width: 768px) {
    .container { max-width: 750px; margin: 0 auto; }
}`,
        lineByLine: [
          "Line 1: Default mobile styles",
          "Line 2: @media (min-width: 768px) - Tablet breakpoint",
          "Line 3: .container { max-width: 750px; margin: 0 auto; - Wider container"
        ],
        simpleMeaning: "Media queries change styles based on screen size. Mobile-first: start small.",
        output: "Mobile: full width. Tablet: centered with max width.",
        note: "Mobile-first approach is recommended."
      },
      
      // ==================== ADVANCED TOPIC 8: CSS VARIABLES ====================
      {
        name: "8. CSS VARIABLES — CUSTOM PROPERTIES",
        description: "CSS Variables (Custom Properties) store values for reuse. Define with --name, access with var(--name). Global variables on :root. Change in one place, update everywhere. Perfect for theming. JavaScript can read/write them.",
        code: `:root { --primary: #3498db; }
.button { background: var(--primary); }`,
        lineByLine: [
          "Line 1: :root { --primary: #3498db; } - Defines global variable",
          "Line 2: .button { background: var(--primary); } - Uses variable"
        ],
        simpleMeaning: "CSS variables store values in one place, update everywhere automatically.",
        output: "Change variable color once — updates everywhere.",
        note: "Always provide fallback value in var()."
      },
      
      // ==================== ADVANCED TOPIC 9: FILTERS ====================
      {
        name: "9. FILTERS & EFFECTS",
        description: "CSS filter property applies Photoshop-like effects to images. blur() — Gaussian blur. brightness() — 0=black, 1=normal, >1 brighter. grayscale() — black & white. sepia() — vintage effect. backdrop-filter — applies to background behind element (glassmorphism).",
        code: `img:hover { filter: brightness(1.1) contrast(110%); }
.glass-card {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(12px);
}`,
        lineByLine: [
          "Line 1: filter: brightness(1.1) contrast(110%) - Multiple filters combined",
          "Line 3: background: rgba(255,255,255,0.15); - Semi-transparent",
          "Line 4: backdrop-filter: blur(12px); - Blurs content BEHIND the element"
        ],
        simpleMeaning: "Filter adds visual effects like brightness, contrast, blur. backdrop-filter creates glassmorphism.",
        output: "Image becomes brighter with more contrast. Glass card blurs background behind it.",
        note: "backdrop-filter requires parent background to be transparent."
      },
      
      // ==================== ADVANCED TOPIC 10: MODERN FUNCTIONS ====================
      {
        name: "10. MODERN CSS FUNCTIONS — calc(), clamp(), min(), max()",
        description: "Modern CSS has powerful functions for responsive layouts. calc() — mathematical calculations. clamp(min, preferred, max) — three values in one line. Perfect for responsive fonts!",
        code: `.container { width: calc(100% - 40px); }
.responsive-text { font-size: clamp(16px, 4vw, 32px); }`,
        lineByLine: [
          "Line 1: calc(100% - 40px) - Full width minus 40px",
          "Line 2: clamp(16px, 4vw, 32px) - Min 16px, grows 4vw, max 32px"
        ],
        simpleMeaning: "clamp() is the most powerful — min, preferred, max values in one line.",
        output: "font-size: clamp(16px,4vw,32px) — 16px on small screens, grows with viewport, max 32px.",
        note: "clamp() is the most powerful responsive CSS function. Reduces media queries dramatically."
      },
      // ==================== ADVANCED TOPIC 11: CSS FILTER FUNCTIONS ====================
{
  name: "11. CSS FILTER FUNCTIONS — Visual Effects Pipeline",
  description: "CSS filter functions apply Photoshop-like visual effects directly to elements using GPU acceleration for smooth performance. blur() creates Gaussian blur for soft focus or frosted glass effects in glassmorphism designs. brightness() adjusts lightness where 0% is completely black, 100% is original, and values above 100% brighten the image. contrast() controls the difference between light and dark areas — low values create flat, muted looks while high values produce punchy, dramatic images. drop-shadow() renders shadows that follow the exact shape of the element, including transparent areas (unlike box-shadow which always creates rectangular shadows). grayscale() converts colors to black and white at specified percentage for monochrome effects. hue-rotate() shifts all colors around the color wheel, creating psychedelic or color-theme variations. invert() creates photographic negative effects by reversing colors. opacity() controls transparency (similar to opacity property but part of filter chain). saturate() intensifies or desaturates colors — 0% is grayscale, 100% is normal, 200% creates vibrant, hyper-saturated looks. sepia() adds warm, vintage brown tones simulating old photographs. Multiple filters can be chained together with spaces, applied in order from left to right. backdrop-filter applies filters to the content BEHIND the element, enabling the popular glassmorphism trend when combined with semi-transparent backgrounds.",
  code: `/* ========== SINGLE FILTER EXAMPLES ========== */
/* blur() — Creates soft focus or glass effect */
.blur-example {
    filter: blur(0);              /* No blur — sharp original */
    filter: blur(2px);            /* Slight blur — soft focus */
    filter: blur(5px);            /* Medium blur — out of focus */
    filter: blur(10px);           /* Heavy blur — unrecognizable */
    filter: blur(20px);           /* Extreme blur — color fields only */
}

/* brightness() — Adjusts lightness level */
.brightness-example {
    filter: brightness(0);        /* Completely black */
    filter: brightness(0.25);     /* 25% brightness — very dark */
    filter: brightness(0.5);      /* 50% brightness — dim */
    filter: brightness(0.75);     /* 75% brightness — slightly dark */
    filter: brightness(1);        /* 100% — original (normal) */
    filter: brightness(1.25);     /* 125% — slightly brighter */
    filter: brightness(1.5);      /* 150% — noticeably brighter */
    filter: brightness(2);        /* 200% — very bright, washed out */
    filter: brightness(300%);     /* Can also use percentages */
}

/* contrast() — Controls light/dark difference */
.contrast-example {
    filter: contrast(0);          /* Flat gray — no contrast */
    filter: contrast(0.25);       /* Very low contrast — muddy */
    filter: contrast(0.5);        /* Low contrast — soft */
    filter: contrast(0.75);       /* Slightly reduced contrast */
    filter: contrast(1);          /* Original — normal */
    filter: contrast(1.25);       /* Enhanced contrast — punchy */
    filter: contrast(1.5);        /* High contrast — dramatic */
    filter: contrast(2);          /* Very high contrast — harsh */
}

/* drop-shadow() — Shape-aware shadow */
.drop-shadow-example {
    /* Syntax: offset-x offset-y blur color */
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
    
    /* Larger, softer shadow */
    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.2));
    
    /* Colored shadow (red) */
    filter: drop-shadow(5px 5px 5px rgba(255,0,0,0.5));
    
    /* No blur — hard shadow */
    filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.3));
    
    /* Multiple drop-shadows (comma separated) */
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1))
            drop-shadow(0 8px 16px rgba(0,0,0,0.1))
            drop-shadow(0 16px 32px rgba(0,0,0,0.1));
}

/* grayscale() — Convert to black and white */
.grayscale-example {
    filter: grayscale(0);         /* Full color */
    filter: grayscale(0.25);      /* 25% grayscale — subtle desaturation */
    filter: grayscale(0.5);       /* 50% grayscale — half desaturated */
    filter: grayscale(0.75);      /* 75% grayscale — mostly monochrome */
    filter: grayscale(1);         /* 100% grayscale — pure black & white */
}

/* hue-rotate() — Shift all colors */
.hue-rotate-example {
    filter: hue-rotate(0deg);     /* Original colors */
    filter: hue-rotate(30deg);    /* Slight warm shift */
    filter: hue-rotate(90deg);    /* Greens become blues */
    filter: hue-rotate(180deg);   /* Complementary colors (red ↔ cyan) */
    filter: hue-rotate(270deg);   /* Bluish to reddish */
    filter: hue-rotate(360deg);   /* Full circle — back to original */
}

/* invert() — Photographic negative */
.invert-example {
    filter: invert(0);            /* Normal colors */
    filter: invert(0.25);         /* 25% inverted — subtle negative */
    filter: invert(0.5);          /* 50% inverted — grayish */
    filter: invert(0.75);         /* 75% inverted — mostly negative */
    filter: invert(1);            /* 100% inverted — pure negative */
}

/* opacity() — Transparency (similar to opacity property) */
.opacity-filter-example {
    filter: opacity(0.25);        /* 25% opaque — mostly transparent */
    filter: opacity(0.5);         /* 50% opaque — semi-transparent */
    filter: opacity(0.75);        /* 75% opaque — slightly transparent */
    filter: opacity(1);           /* Fully opaque */
}

/* saturate() — Color intensity control */
.saturate-example {
    filter: saturate(0);          /* Completely desaturated (grayscale) */
    filter: saturate(0.25);       /* 25% saturation — muted colors */
    filter: saturate(0.5);        /* 50% saturation — soft colors */
    filter: saturate(0.75);       /* 75% saturation — slightly muted */
    filter: saturate(1);          /* 100% — original */
    filter: saturate(1.5);        /* 150% — vibrant, saturated */
    filter: saturate(2);          /* 200% — hyper-saturated */
}

/* sepia() — Vintage brown tone */
.sepia-example {
    filter: sepia(0);             /* Original colors */
    filter: sepia(0.25);          /* 25% sepia — subtle vintage */
    filter: sepia(0.5);           /* 50% sepia — moderate vintage */
    filter: sepia(0.75);          /* 75% sepia — strong vintage */
    filter: sepia(1);             /* 100% sepia — full vintage/antique */
}

/* ========== MULTIPLE FILTERS (CHAINING) ========== */
/* Filters apply in order from left to right */
.combined-filters {
    /* Brighten and add contrast */
    filter: brightness(1.1) contrast(120%);
    
    /* Vintage Instagram-style effect */
    filter: contrast(110%) brightness(95%) sepia(30%) saturate(110%);
    
    /* Dramatic noir effect */
    filter: grayscale(80%) contrast(150%) brightness(90%);
    
    /* Warm sunset effect */
    filter: hue-rotate(-10deg) saturate(120%) brightness(105%);
    
    /* Cool, moody effect */
    filter: hue-rotate(10deg) saturate(110%) brightness(95%) contrast(110%);
    
    /* Shadow + grayscale + blur (order matters!) */
    filter: drop-shadow(2px 2px 4px black) grayscale(1) blur(1px);
}

/* ========== BACKDROP-FILTER (Glassmorphism) ========== */
/* Applies filters to everything BEHIND the element */
.glass-card {
    /* Semi-transparent background */
    background: rgba(255, 255, 255, 0.2);
    
    /* Blur everything behind the card */
    backdrop-filter: blur(10px);
    
    /* Additional effects */
    backdrop-filter: blur(10px) saturate(180%) brightness(105%);
    
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Frosted navigation bar */
.frosted-nav {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px) saturate(150%);
    z-index: 100;
}

/* Modal with backdrop blur */
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 1000;
}

/* ========== PRACTICAL EXAMPLES ========== */

/* Image gallery hover effects */
.gallery img {
    transition: filter 0.3s ease;
}
.gallery img:hover {
    filter: brightness(1.05) contrast(110%) saturate(105%);
}

/* Dark mode image adjustment */
[data-theme="dark"] img {
    filter: brightness(0.85) contrast(110%);
}

/* Loading skeleton with blur animation */
.skeleton {
    background: #e0e0e0;
    border-radius: 4px;
    filter: blur(2px);
    animation: pulseBlur 1.5s ease-in-out infinite;
}
@keyframes pulseBlur {
    0%, 100% { filter: blur(2px); opacity: 1; }
    50% { filter: blur(1px); opacity: 0.8; }
}

/* Black and white image that colors on hover */
.bw-to-color {
    filter: grayscale(100%);
    transition: filter 0.5s ease;
}
.bw-to-color:hover {
    filter: grayscale(0%);
}

/* Card with drop-shadow and hover lift */
.card-effect {
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
    transition: filter 0.3s ease, transform 0.3s ease;
}
.card-effect:hover {
    filter: drop-shadow(0 12px 24px rgba(0,0,0,0.2));
    transform: translateY(-4px);
}`,
  lineByLine: [
    "Line 1-5: blur() function — applies Gaussian blur with pixel values",
    "blur(2px): Slight blur for soft focus effect",
    "blur(10px): Heavy blur — elements become unrecognizable",
    "Line 8-12: brightness() — 0% = black, 100% = normal, >100% = brighter",
    "brightness(0.5): Reduces brightness to 50% (darker)",
    "brightness(1.5): Increases brightness by 50%",
    "Line 15-19: contrast() — controls difference between light and dark",
    "contrast(0): No contrast — flat gray image",
    "contrast(1.5): 50% higher contrast — more dramatic",
    "Line 22-32: drop-shadow() — shape-aware shadow following element contours",
    "drop-shadow(offset-x offset-y blur color): Standard syntax",
    "Unlike box-shadow, drop-shadow respects transparent areas (PNG transparency)",
    "Multiple drop-shadows create layered depth effect",
    "Line 35-39: grayscale() — converts to black and white",
    "grayscale(0.5): 50% desaturated — half color, half B&W",
    "grayscale(1): Full black and white conversion",
    "Line 42-46: hue-rotate() — shifts all colors around color wheel",
    "hue-rotate(180deg): Complementary colors (red → cyan, blue → yellow)",
    "Line 49-53: invert() creates photographic negative",
    "invert(1): Full negative — all colors reversed",
    "Line 56-60: opacity() filter — transparency",
    "Line 63-67: saturate() — controls color intensity",
    "saturate(0): Grayscale (no color)",
    "saturate(2): Double saturation — hyper-vibrant",
    "Line 70-74: sepia() — vintage brown vintage effect",
    "sepia(1): Full sepia — old photograph look",
    "Line 77-95: Multiple filters chained with spaces, applied left to right",
    "Order matters: drop-shadow then grayscale vs grayscale then drop-shadow produce different results",
    "Line 98-124: backdrop-filter applies filters to background behind element",
    "backdrop-filter: blur(10px) — creates glassmorphism effect",
    "Requires semi-transparent background to see the blur effect",
    "Line 127-155: Practical examples — gallery hover, dark mode, loading skeletons"
  ],
  simpleMeaning: "Filters modify images visually — blur softens, brightness lightens/darkens, grayscale removes color, sepia adds vintage tone. backdrop-filter blurs what's behind (glass effect).",
  output: "Images that brighten on hover, convert to black and white then colorize, or get vintage sepia effects. Frosted glass panels. Modal backgrounds that blur content behind.",
  note: "Use filter for quick image effects without Photoshop. backdrop-filter enables trendy glassmorphism. Multiple filters chain with spaces. Animate filter for smooth transitions."
},

// ==================== ADVANCED TOPIC 12: CSS TRANSFORM FUNCTIONS ====================
{
  name: "12. CSS TRANSFORM FUNCTIONS — 2D & 3D Transformations",
  description: "CSS transform functions modify element appearance in 2D or 3D space without affecting document layout flow, making them perfect for animations and interactive effects. 2D transforms include: translate(x,y) moves elements by offset values (pixels or percentages relative to element size), scale(x,y) resizes where 1=100% (values above 1 enlarge, below 1 shrink, negative values flip), rotate(deg) spins clockwise/counter-clockwise, skew(x,y) slants along axes creating isometric distortion, and matrix() combines all transforms in one 6-value function. 3D transforms add depth: translateZ() moves toward/away from viewer requiring perspective, rotateX/Y/Z rotates around axes creating 3D flips, scaleZ() scales along Z-axis, and matrix3d() provides full 3D transformation control. transform-origin sets pivot point (center, top-left, etc.) for all transforms. transform-style: preserve-3d preserves 3D positioning for children. backface-visibility hides the reverse side of 3D elements. Perspective creates depth perception where higher values = less dramatic effect. Multiple transforms combine in one property, executing right to left (matrix order).",
  code: `/* ========== 2D TRANSLATE — MOVEMENT ========== */
.translate-example {
    /* Basic translate — move element */
    transform: translate(50px, 100px);        /* Move 50px right, 100px down */
    transform: translateX(50px);              /* Move only horizontally */
    transform: translateY(100px);             /* Move only vertically */
    
    /* Percentage values (relative to element's own size) */
    transform: translate(50%, 50%);           /* Move by 50% of width/height */
    transform: translateX(-50%);              /* Center horizontally with position absolute */
    
    /* Smooth hover movement */
    transition: transform 0.3s ease;
}
.translate-example:hover {
    transform: translateY(-10px);              /* Lift up on hover */
}

/* ========== 2D SCALE — RESIZING ========== */
.scale-example {
    /* Uniform scale (same X and Y) */
    transform: scale(1.5);                    /* 150% size */
    transform: scale(2);                      /* Double size */
    transform: scale(0.5);                    /* Half size */
    
    /* Non-uniform scale (different X and Y) */
    transform: scale(2, 0.5);                 /* 200% width, 50% height */
    transform: scaleX(2);                     /* Stretch horizontally only */
    transform: scaleY(0.5);                   /* Shrink vertically only */
    
    /* Negative scale (flips element) */
    transform: scale(-1, 1);                  /* Flip horizontally (mirror) */
    transform: scale(1, -1);                  /* Flip vertically */
    
    transition: transform 0.3s ease;
}
.scale-example:hover {
    transform: scale(1.05);                   /* Slight zoom on hover */
}

/* ========== 2D ROTATE — TURNING ========== */
.rotate-example {
    /* Rotation in degrees */
    transform: rotate(45deg);                 /* Clockwise 45 degrees */
    transform: rotate(-90deg);                /* Counter-clockwise 90 degrees */
    transform: rotate(180deg);                /* Upside down */
    transform: rotate(360deg);                /* Full circle */
    
    /* Other angle units */
    transform: rotate(0.25turn);              /* Quarter turn (90 degrees) */
    transform: rotate(1.57rad);               /* 90 degrees in radians */
    
    transition: transform 0.3s ease;
}
.rotate-example:hover {
    transform: rotate(180deg);                /* Spin on hover */
}

/* ========== 2D SKEW — SLANTING ========== */
.skew-example {
    /* Skew transforms (creates isometric/parallelogram effect) */
    transform: skew(10deg, 5deg);             /* 10deg X-skew, 5deg Y-skew */
    transform: skewX(20deg);                  /* Horizontal slant only */
    transform: skewY(10deg);                  /* Vertical slant only */
    
    transition: transform 0.3s ease;
}

/* ========== 2D MATRIX — COMBINED TRANSFORMS ========== */
.matrix-example {
    /* matrix(a, b, c, d, e, f)
       a = scaleX, b = skewY, c = skewX, d = scaleY, e = translateX, f = translateY */
    
    /* Identity matrix (no transform) */
    transform: matrix(1, 0, 0, 1, 0, 0);
    
    /* translate(50px, 100px) */
    transform: matrix(1, 0, 0, 1, 50, 100);
    
    /* scale(1.5) */
    transform: matrix(1.5, 0, 0, 1.5, 0, 0);
    
    /* rotate(45deg) — sin(45)=0.707, cos(45)=0.707 */
    transform: matrix(0.707, 0.707, -0.707, 0.707, 0, 0);
    
    /* Combined: translate + rotate + scale */
    transform: matrix(1.5, 0.707, -0.707, 1.5, 50, 100);
}

/* ========== TRANSFORM-ORIGIN — PIVOT POINT ========== */
.transform-origin-example {
    /* Change where transforms originate from */
    transform-origin: center;                 /* Default — center of element */
    transform-origin: top left;               /* Top-left corner */
    transform-origin: 0% 0%;                  /* Same as top left */
    transform-origin: 100% 100%;              /* Bottom right corner */
    transform-origin: 50px 100px;             /* Specific pixel coordinates */
    transform-origin: left 20px bottom 30px; /* Offset from edge */
    
    /* Different origins produce different effects for rotate and scale */
    transform: rotate(90deg);
    
    /* Example: Card flip from edge vs center */
    transform-origin: left center;
}

/* ========== 3D TRANSLATE ========== */
.translate3d-example {
    /* 3D movement requires perspective on parent */
    transform: translate3d(10px, 20px, 30px); /* X, Y, Z movement */
    transform: translateZ(50px);              /* Move toward viewer (positive = closer) */
    transform: translateZ(-50px);             /* Move away from viewer */
}

/* ========== 3D ROTATE ========== */
.rotate3d-example {
    /* Rotation around X-axis (top/bottom) */
    transform: rotateX(45deg);                /* Flips forward/backward */
    
    /* Rotation around Y-axis (left/right) */
    transform: rotateY(45deg);                /* Flips left/right (card flip) */
    
    /* Rotation around Z-axis (same as 2D rotate) */
    transform: rotateZ(45deg);                /* 2D rotation */
    
    /* Custom axis rotation */
    transform: rotate3d(1, 1, 0, 45deg);      /* Diagonal axis */
}

/* ========== 3D SCALE ========== */
.scale3d-example {
    transform: scale3d(1.2, 1.2, 1.2);        /* Scale all three dimensions */
    transform: scaleZ(1.5);                   /* Scale along Z-axis only */
}

/* ========== PERSPECTIVE — 3D DEPTH ========== */
/* Perspective on parent container */
.perspective-container {
    perspective: 1000px;                      /* Lower = more dramatic 3D */
    perspective-origin: center center;        /* Where viewer is looking from */
}
/* Or on element directly */
.perspective-element {
    transform: perspective(1000px) rotateX(45deg);
}

/* ========== 3D FLIP CARD (Complete Example) ========== */
.flip-card-container {
    perspective: 1000px;
    width: 300px;
    height: 200px;
}

.flip-card {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;              /* Preserves 3D for children */
    transition: transform 0.6s;
}

.flip-card:hover {
    transform: rotateY(180deg);                /* Full flip on Y axis */
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;               /* Hides reverse side */
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flip-card-front {
    background: #3498db;
    transform: rotateY(0deg);                  /* Front visible initially */
}

.flip-card-back {
    background: #2c3e50;
    transform: rotateY(180deg);                /* Back hidden initially */
}

/* ========== 3D CUBE (Complete Example) ========== */
.cube-container {
    perspective: 800px;
    width: 200px;
    height: 200px;
    margin: 100px auto;
}

.cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spinCube 10s infinite linear;
}

.face {
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(52,152,219,0.8);
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
}

.front  { transform: translateZ(100px); }
.back   { transform: translateZ(-100px) rotateY(180deg); }
.right  { transform: translateX(100px) rotateY(90deg); }
.left   { transform: translateX(-100px) rotateY(-90deg); }
.top    { transform: translateY(-100px) rotateX(90deg); }
.bottom { transform: translateY(100px) rotateX(-90deg); }

@keyframes spinCube {
    from { transform: rotateX(0) rotateY(0); }
    to { transform: rotateX(360deg) rotateY(360deg); }
}

/* ========== PRACTICAL TRANSFORM PATTERNS ========== */

/* Image zoom on container hover */
.image-zoom-container {
    overflow: hidden;
}
.image-zoom-container img {
    transition: transform 0.5s ease;
}
.image-zoom-container:hover img {
    transform: scale(1.2);
}

/* Card hover lift effect */
.card-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

/* Icon spin on hover */
.icon-spin {
    transition: transform 0.3s ease;
    display: inline-block;
}
.icon-spin:hover {
    transform: rotate(180deg);
}

/* Center absolute element (classic trick) */
.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Modal popup animation */
.modal-pop {
    transform: scale(0.8);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
}
.modal-pop.active {
    transform: scale(1);
    opacity: 1;
}

/* 3D tilt on card hover */
.tilt-card {
    transition: transform 0.3s ease;
}
.tilt-card:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
}

/* Button press effect */
.button-press:active {
    transform: scale(0.95);
    transition: transform 0.05s;
}

/* Loading spinner rotation */
@keyframes spinner-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.loading-spinner {
    animation: spinner-rotate 1s linear infinite;
}

/* Staggered animation entrance */
.stagger-item {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
}
.stagger-item:nth-child(1) { animation-delay: 0s; }
.stagger-item:nth-child(2) { animation-delay: 0.1s; }
.stagger-item:nth-child(3) { animation-delay: 0.2s; }
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`,
  lineByLine: [
    "Line 2-11: translate() — moves element by X and Y values",
    "translate(50px, 100px): Moves 50px right, 100px down",
    "translateX(50px): Horizontal movement only",
    "translateY(100px): Vertical movement only",
    "translate(-50%, -50%): Centers element relative to itself (classic centering trick)",
    "Line 15-23: scale() — resizes element (1 = normal, >1 enlarges, <1 shrinks)",
    "scale(1.5): Makes element 50% larger in both dimensions",
    "scale(2, 0.5): Doubles width, halves height",
    "scale(-1, 1): Flips horizontally (mirror image)",
    "Line 26-32: rotate() — turns element around transform-origin",
    "rotate(45deg): Turns clockwise 45 degrees",
    "rotate(-90deg): Turns counter-clockwise 90 degrees",
    "rotate(180deg): Flips upside down",
    "Line 35-37: skew() — slants element (creates parallelogram)",
    "skew(10deg, 5deg): 10-degree slant horizontally, 5 degrees vertically",
    "Line 40-51: matrix() — combines 2D transforms in 6-value function",
    "matrix(a,b,c,d,e,f) where a=scaleX, b=skewY, c=skewX, d=scaleY, e=translateX, f=translateY",
    "Line 54-62: transform-origin — sets pivot point for transforms",
    "transform-origin: center — default (middle of element)",
    "transform-origin: top left — rotation/scale from corner",
    "Line 67-70: translate3d() — moves in 3D space (requires perspective)",
    "translateZ(50px): Moves toward viewer (positive pushes forward)",
    "Line 73-79: rotate3d() — 3D rotation around axes",
    "rotateX(45deg): Rotates around horizontal axis (flips forward/back)",
    "rotateY(45deg): Rotates around vertical axis (card flip effect)",
    "rotate3d(1,1,0,45deg): Custom diagonal axis rotation",
    "Line 82-85: scale3d() — scales in 3D space",
    "Line 88-95: perspective() — creates depth perception",
    "perspective: 1000px — higher = less dramatic 3D effect",
    "Line 98-123: 3D Flip Card — complete interactive example",
    "transform-style: preserve-3d — required for nested 3D",
    "backface-visibility: hidden — hides reverse side of element",
    "rotateY(180deg) on hover — full card flip",
    "Line 126-153: 3D Cube — six faces assembled with transforms",
    "Each face positioned with different translate/rotate combinations",
    "transform-style: preserve-3d enables cube shape",
    "Line 156-213: Practical patterns — zoom, lift, spin, centering, modal pop, tilt"
  ],
  simpleMeaning: "Transforms change element visually — translate moves, scale resizes, rotate turns, skew slants. 3D adds depth with perspective. transform-origin changes pivot point.",
  output: "Cards that lift, zoom, or flip in 3D. Images that scale inside containers. Icons that spin. Perfect centering with translate. 3D cubes and flip cards.",
  note: "Order matters in multiple transforms (right to left execution). Use transform-origin for custom pivot points. 3D transforms need perspective on parent. animate transform for best performance."
},

// ==================== ADVANCED TOPIC 13: CSS GRID FUNCTIONS ====================
{
  name: "13. CSS GRID FUNCTIONS — repeat(), minmax(), fit-content()",
  description: "Grid functions create flexible, responsive layouts without media queries. repeat() simplifies grid definitions by repeating column/row patterns — accepts count (number, auto-fill, or auto-fit) and track listing. auto-fill places as many tracks as possible without expanding container, leaving empty space. auto-fit expands tracks to fill container, collapsing empty tracks. minmax() sets minimum and maximum track sizes — accepts any length, percentage, fr, or auto. Essential for responsive grids where tracks grow/shrink between bounds. fit-content() creates track that grows to content size but never exceeds specified maximum. gap() adds consistent spacing between grid cells (row-gap and column-gap separately). These functions work together with fr unit (fractional unit) distributing remaining space. Used in grid-template-columns, grid-template-rows, and grid-auto-rows. Creates responsive layouts that adapt to container size automatically.",
  code: `/* ========== REPEAT() — REPEATING PATTERNS ========== */
/* Basic repeat with fixed count */
.repeat-basic {
    /* 3 equal columns — explicit listing: 1fr 1fr 1fr */
    grid-template-columns: repeat(3, 1fr);
    
    /* 4 columns with different sizes */
    grid-template-columns: repeat(2, 200px 1fr);
    /* Expands to: 200px 1fr 200px 1fr */
    
    /* Repeating pattern with minmax */
    grid-template-columns: repeat(4, minmax(100px, 1fr));
}

/* repeat() with auto-fill — fills container with as many tracks as possible */
.auto-fill-example {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    /* Creates as many 250px columns as fit, leaves empty space at end */
    /* No media queries needed! Automatically wraps */
}

/* repeat() with auto-fit — expands tracks to fill container */
.auto-fit-example {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* Similar to auto-fill but stretches tracks to fill container */
    /* Collapses empty tracks so grid always fills width */
}

/* ========== MINMAX() — MINIMUM AND MAXIMUM BOUNDS ========== */
.minmax-example {
    /* Column that's at least 200px but can grow to 1fr */
    grid-template-columns: minmax(200px, 1fr);
    
    /* Multiple columns with different bounds */
    grid-template-columns: minmax(100px, auto) minmax(200px, 1fr) minmax(150px, 2fr);
    
    /* Row with minmax (prevents overflow) */
    grid-template-rows: minmax(100px, auto);
    
    /* Nested in repeat for responsive grid */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* minmax() with different value types */
.minmax-types {
    /* Fixed pixel minimum, fractional maximum */
    grid-template-columns: minmax(200px, 1fr);
    
    /* Auto minimum (content size), fixed maximum */
    grid-template-columns: minmax(auto, 300px);
    
    /* Percentage minimum, fractional maximum */
    grid-template-columns: minmax(20%, 2fr);
    
    /* min-content sets to minimum content width (longest word) */
    grid-template-columns: minmax(min-content, 1fr);
    
    /* max-content sets to maximum content width (all content on one line) */
    grid-template-columns: minmax(max-content, auto);
}

/* ========== FIT-CONTENT() — CONTENT-AWARE SIZING ========== */
.fit-content-example {
    /* Track grows to content size but never exceeds 300px */
    grid-template-columns: fit-content(300px);
    
    /* Sidebar that grows with content but has maximum width */
    grid-template-columns: fit-content(250px) 1fr;
    
    /* Multiple fit-content columns */
    grid-template-columns: fit-content(200px) fit-content(300px) 1fr;
}

/* ========== PRACTICAL RESPONSIVE GRID PATTERNS ========== */

/* 1. Responsive Card Grid (Most Common Pattern) */
.responsive-card-grid {
    display: grid;
    gap: clamp(16px, 3vw, 32px);
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    /* Cards are minimum 280px, grow to fill, wrap automatically */
    /* No media queries needed — fully responsive */
}

/* 2. Sidebar + Main Content Layout */
.sidebar-layout {
    display: grid;
    gap: 24px;
    grid-template-columns: minmax(200px, 250px) minmax(300px, 1fr);
    /* Sidebar: 200-250px, Main: at least 300px, grows */
}
@media (max-width: 768px) {
    .sidebar-layout {
        grid-template-columns: 1fr;  /* Stack on mobile */
    }
}

/* 3. Dashboard Grid with Responsive Columns */
.dashboard {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    /* Uses min(100%, 300px) to prevent overflow on small screens */
}

/* 4. Magazine-Style Layout with Fixed and Flexible Columns */
.magazine {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    /* minmax(0, 1fr) prevents overflow from content */
}
.featured-article {
    grid-column: span 2;
    grid-row: span 2;
}

/* 5. Form Layout with Label/Input Pairs */
.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
.full-width {
    grid-column: 1 / -1;  /* Span all columns */
}

/* 6. Product Gallery with Dynamic Columns */
.product-gallery {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

/* 7. Masonry-Like Grid Using auto-rows */
.masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 10px;  /* Base row height */
    gap: 20px;
}
.masonry-item {
    /* Span different number of rows based on content */
    grid-row-end: span 25;  /* Adjust per item */
}

/* 8. Holy Grail Layout with Grid */
.holy-grail {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar-left main sidebar-right"
        "footer footer footer";
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
.holy-grail header { grid-area: header; }
.holy-grail .sidebar-left { grid-area: sidebar-left; }
.holy-grail main { grid-area: main; }
.holy-grail .sidebar-right { grid-area: sidebar-right; }
.holy-grail footer { grid-area: footer; }

/* 9. Responsive Grid with Named Areas */
.responsive-areas {
    display: grid;
    grid-template-areas: 
        "header"
        "content"
        "sidebar"
        "footer";
    grid-template-columns: 1fr;
}
@media (min-width: 768px) {
    .responsive-areas {
        grid-template-areas: 
            "header header"
            "sidebar content"
            "footer footer";
        grid-template-columns: 250px 1fr;
    }
}
@media (min-width: 1024px) {
    .responsive-areas {
        grid-template-areas: 
            "header header header"
            "sidebar content content"
            "footer footer footer";
        grid-template-columns: 250px 1fr 1fr;
    }
}

/* ========== SUBGRID — INHERIT GRID FROM PARENT ========== */
/* Nested grid that inherits parent column definitions */
.parent-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
.child-subgrid {
    display: grid;
    grid-template-columns: subgrid;  /* Inherits parent's columns */
    grid-column: span 2;             /* Takes 2 parent columns */
    gap: 10px;
}

/* ========== ADVANCED MINMAX PATTERNS ========== */
/* Prevent overflow on small screens */
.safe-minmax {
    /* min() inside minmax prevents content bursting */
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
    
    /* Alternative with clamp */
    grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 30%, 350px), 1fr));
}

/* Equal height rows */
.equal-rows {
    grid-auto-rows: 1fr;  /* All rows equal height */
    min-height: 100vh;    /* Needs explicit height for fr to work */
}

/* Content-aware rows */
.content-rows {
    grid-auto-rows: minmax(min-content, max-content);
}

/* ========== GRID GAP FUNCTIONS ========== */
.gap-example {
    /* Regular gap */
    gap: 20px;                     /* Both row and column gap */
    gap: 16px 24px;                /* row-gap column-gap */
    row-gap: 16px;
    column-gap: 24px;
    
    /* Responsive gap with clamp */
    gap: clamp(8px, 2vw, 32px);
}

/* ========== COMPLETE RESPONSIVE TEMPLATE ========== */
.responsive-template {
    display: grid;
    gap: clamp(16px, 3vw, 32px);
    
    /* Mobile-first: 1 column */
    grid-template-columns: 1fr;
    
    /* Tablet: 2 columns */
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    
    /* Desktop: flexible grid */
    @media (min-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    
    /* Large desktop: fixed columns */
    @media (min-width: 1400px) {
        grid-template-columns: repeat(4, minmax(280px, 350px));
    }
}`,
  lineByLine: [
    "Line 2-13: repeat() — simplifies grid track repetition",
    "repeat(3, 1fr): Creates 3 equal columns (same as 1fr 1fr 1fr)",
    "repeat(2, 200px 1fr): Creates 200px 1fr 200px 1fr",
    "repeat(4, minmax(100px, 1fr)): 4 responsive columns",
    "Line 16-22: auto-fill — fills container with as many tracks as possible",
    "repeat(auto-fill, minmax(250px, 1fr)): Creates grid that wraps automatically",
    "Leaves empty space at end if tracks don't perfectly fill",
    "Line 25-31: auto-fit — expands tracks to fill container",
    "Similar to auto-fill but stretches columns, collapses empties",
    "Line 35-46: minmax() — sets minimum and maximum size",
    "minmax(200px, 1fr): At least 200px, can grow to 1fr",
    "minmax(100px, auto): Minimum 100px, auto maximum (based on content)",
    "Line 49-57: minmax value types — different unit combinations",
    "minmax(min-content, 1fr): Minimum based on longest word",
    "minmax(max-content, auto): Maximum to fit all content on one line",
    "Line 61-66: fit-content() — content-aware with maximum",
    "fit-content(300px): Grows to content size but caps at 300px",
    "Perfect for sidebars that shouldn't get too wide",
    "Line 70-91: Responsive Card Grid — most common pattern",
    "repeat(auto-fit, minmax(280px, 1fr)): One line replaces media queries",
    "Cards minimum 280px, grow to fill, wrap when needed",
    "Line 94-101: Sidebar layout — fixed-minimum sidebar, flexible main",
    "Line 105-108: Dashboard with overflow protection",
    "min(min(100%, 300px)): Prevents overflow on tiny screens",
    "Line 112-119: Magazine layout with minmax(0,1fr) prevents overflow",
    "Line 123-127: Form grid with full-width spanning",
    "grid-column: 1 / -1: Spans from first to last column",
    "Line 131-134: Product gallery using auto-fill",
    "Line 138-146: Masonry-like with grid-auto-rows",
    "grid-auto-rows: 10px sets base row height, items span multiple rows",
    "Line 150-159: Holy Grail with grid-template-areas",
    "Line 163-177: Responsive named areas at different breakpoints",
    "Line 181-188: Subgrid — inherits parent grid track definitions",
    "grid-template-columns: subgrid — child uses parent's column structure",
    "Line 192-197: min() inside minmax prevents overflow on small screens",
    "Line 201-203: equal-rows — all rows same height",
    "grid-auto-rows: 1fr — needs min-height on container",
    "Line 207-211: Grid gap with responsive clamp()"
  ],
  simpleMeaning: "repeat() creates multiple grid tracks. minmax() sets flexible bounds. auto-fit/auto-fill makes grids responsive without media queries. subgrid inherits parent grid.",
  output: "Responsive card grids that automatically wrap. Sidebar layouts that adapt. Dashboards with flexible columns. Holy grail layouts. Masonry galleries.",
  note: "auto-fit + minmax() is the most powerful responsive pattern — replaces dozens of media queries. Use minmax(0, 1fr) to prevent content overflow. subgrid perfect for nested layouts."
},

// ==================== ADVANCED TOPIC 14: CSS COMPARISON FUNCTIONS ====================
{
  name: "14. CSS COMPARISON FUNCTIONS — min(), max(), clamp() Deep Dive",
  description: "Comparison functions are the foundation of modern responsive CSS, enabling fluid designs with simple declarations. min() returns the smallest value from comma-separated list — perfect for responsive containers that shouldn't exceed maximum width, or for capping font sizes on large screens. max() returns the largest value — essential for ensuring minimum sizes (accessibility minimum font sizes, minimum padding, minimum widths on small screens). clamp() combines both into one powerful function taking three arguments: minimum, preferred, maximum — the preferred value is used when between bounds, clamped to min when below, max when above. These functions accept mixed units (%, px, rem, vw, vh, fr, ch, em) and can be nested (min(max(), min())). They work anywhere length values are accepted: width, height, font-size, padding, margin, gap, border-radius, grid-template-columns, etc. Together they eliminate hundreds of lines of media queries, creating truly fluid interfaces that scale continuously between defined boundaries.",
  code: `/* ========== MIN() — CHOOSE SMALLEST VALUE ========== */
/* Basic min() usage */
.min-basic {
    /* Responsive container — full width on mobile, capped at 1200px on desktop */
    width: min(100%, 1200px);
    
    /* Font size that never exceeds 48px */
    font-size: min(48px, 8vw);
    
    /* Padding capped at 40px */
    padding: min(40px, 5vw);
    
    /* Gap with maximum of 32px */
    gap: min(32px, 4vw);
    
    /* Border radius caps at 24px */
    border-radius: min(24px, 5vw);
}

/* min() with multiple values */
.min-multiple {
    /* Takes smallest of three values */
    width: min(90%, 600px, 80vw);
    margin: min(20px, 3vw, 2rem);
}

/* min() for responsive containers */
.min-container {
    width: min(100% - 40px, 1200px);
    margin: 0 auto;
    /* Full width minus padding OR max 1200px, whichever smaller */
}

/* min() for responsive typography */
.min-typography {
    /* Grows with screen but caps at 3rem */
    font-size: min(3rem, 8vw);
    
    /* Line height caps at 1.4 */
    line-height: min(1.6, 5vh);
}

/* ========== MAX() — CHOOSE LARGEST VALUE ========== */
/* Basic max() usage */
.max-basic {
    /* At least 250px wide, but can be larger */
    width: max(250px, 20%);
    
    /* Font size never smaller than 14px (accessibility) */
    font-size: max(14px, 2vw);
    
    /* Minimum padding of 12px */
    padding: max(12px, 3vw);
    
    /* Minimum gap of 8px */
    gap: max(8px, 2vw);
    
    /* Minimum border radius of 4px */
    border-radius: max(4px, 1.5vw);
}

/* max() for accessibility */
.max-accessibility {
    /* Ensures text is always readable */
    font-size: max(16px, 1.2vw);
    
    /* Ensures click targets are large enough */
    padding: max(12px, 1.5vh) max(16px, 2vw);
    
    /* Ensures buttons have minimum height */
    min-height: max(44px, 6vh);
}

/* max() for minimum layout constraints */
.max-layout {
    /* Sidebar at least 200px wide */
    width: max(200px, 25%);
    
    /* Minimum container width on large screens */
    min-width: max(300px, 50%);
}

/* ========== CLAMP() — THREE-VALUE RESPONSIVE ========== */
/* clamp(minimum, preferred, maximum) — THE MOST POWERFUL RESPONSIVE FUNCTION */

/* Fluid typography — the killer app */
.clamp-typography {
    /* Never smaller than 16px, never larger than 48px, scales with 4vw */
    font-size: clamp(16px, 4vw, 48px);
    
    /* Responsive line height */
    line-height: clamp(1.3, 4vh, 1.6);
    
    /* Responsive letter spacing */
    letter-spacing: clamp(-0.02em, 0.5vw, 0.05em);
}

/* Fluid spacing */
.clamp-spacing {
    /* Responsive padding */
    padding: clamp(12px, 4vw, 32px);
    
    /* Responsive margin */
    margin: clamp(8px, 3vh, 24px);
    
    /* Responsive gap */
    gap: clamp(8px, 2vw, 24px);
}

/* Fluid containers */
.clamp-container {
    /* Container that grows with screen but has limits */
    width: clamp(280px, 90%, 1400px);
    margin: 0 auto;
    
    /* Inner padding that scales */
    padding: clamp(12px, 3vw, 40px);
    
    /* Border radius that scales */
    border-radius: clamp(4px, 2vw, 20px);
}

/* Fluid grid tracks */
.clamp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 30%, 350px), 1fr));
    gap: clamp(12px, 2vw, 32px);
}

/* ========== NESTED COMPARISON FUNCTIONS ========== */
/* min() inside max() — creating a range */
.nested-min-max {
    /* Ensures value is between two bounds (same as clamp) */
    width: max(min(100%, 1200px), 320px);
    /* At least 320px, at most 1200px, fluid between */
}

/* max() inside min() */
.nested-max-min {
    /* Ensures value stays within bounds */
    font-size: min(max(14px, 2vw), 48px);
    /* Between 14px and 48px, plus fluid */
}

/* clamp() with calc() inside */
.clamp-calc {
    /* Preferred value uses calc for precise control */
    font-size: clamp(16px, calc(14px + 1vw), 32px);
    
    /* More complex fluid formula */
    padding: clamp(12px, calc(8px + 2vw), 40px);
}

/* ========== COMPARISON FUNCTIONS WITH CSS VARIABLES ========== */
:root {
    --min-padding: 12px;
    --max-padding: 48px;
    --fluid-ratio: 4vw;
}
.variable-clamp {
    padding: clamp(var(--min-padding), var(--fluid-ratio), var(--max-padding));
    font-size: clamp(14px, calc(12px + 1vw), calc(var(--max-padding) / 2));
}

/* ========== PRACTICAL PATTERNS WITH COMPARISON FUNCTIONS ========== */

/* 1. Responsive Hero Section (single line, no media queries) */
.hero {
    font-size: clamp(32px, 8vw, 96px);
    padding: clamp(2rem, 15vh, 10rem) clamp(1rem, 5vw, 4rem);
    width: min(90%, 1200px);
    margin: 0 auto;
    border-radius: clamp(8px, 2vw, 32px);
}

/* 2. Responsive Card Component */
.card {
    width: clamp(240px, 100%, 350px);
    padding: clamp(16px, 4vw, 24px);
    border-radius: clamp(8px, 2vw, 16px);
}
.card h3 {
    font-size: clamp(18px, 5vw, 28px);
}
.card p {
    font-size: clamp(14px, 3vw, 18px);
    line-height: clamp(1.4, 4vh, 1.6);
}

/* 3. Responsive Button */
.button {
    padding: clamp(8px, 1.5vh, 14px) clamp(16px, 4vw, 32px);
    font-size: clamp(14px, 2.5vw, 18px);
    border-radius: clamp(4px, 1.5vw, 40px);
    min-width: max(80px, 10vw);
}

/* 4. Responsive Navigation */
.nav {
    padding: clamp(8px, 2vh, 16px) clamp(12px, 4vw, 32px);
}
.nav-links {
    gap: clamp(8px, 3vw, 32px);
}
.nav-links a {
    font-size: clamp(14px, 2.5vw, 18px);
    padding: clamp(4px, 1vh, 8px) clamp(8px, 2vw, 16px);
}

/* 5. Responsive Grid System (completely fluid) */
.fluid-grid {
    display: grid;
    gap: clamp(16px, 3vw, 32px);
    grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 30%, 400px), 1fr));
}

/* 6. Responsive Modal */
.modal {
    width: clamp(280px, 90%, 600px);
    padding: clamp(20px, 5vw, 40px);
    border-radius: clamp(8px, 3vw, 24px);
}
.modal-title {
    font-size: clamp(20px, 6vw, 32px);
    margin-bottom: clamp(12px, 3vh, 24px);
}

/* 7. Comparison Functions vs Media Queries */
/* Before: needed 3+ media queries */
@media (max-width: 480px) { h1 { font-size: 24px; } }
@media (min-width: 481px) and (max-width: 768px) { h1 { font-size: 32px; } }
@media (min-width: 769px) { h1 { font-size: 48px; } }

/* After: single line solves all */
h1 {
    font-size: clamp(24px, 5vw, 48px);
}

/* 8. Advanced: Creating responsive type scale */
:root {
    --font-scale-1: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
    --font-scale-2: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
    --font-scale-3: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
    --font-scale-4: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
    --font-scale-5: clamp(1.5rem, 1.3rem + 1vw, 2rem);
    --font-scale-6: clamp(2rem, 1.7rem + 1.5vw, 3rem);
    --font-scale-7: clamp(3rem, 2.5rem + 2.5vw, 4rem);
}

/* 9. Complete responsive layout using only comparison functions */
.responsive-layout {
    /* Container */
    width: clamp(320px, 90%, 1400px);
    margin: 0 auto;
    
    /* Spacing */
    padding: clamp(16px, 4vw, 48px);
    gap: clamp(20px, 4vh, 60px);
    
    /* Typography scale */
    font-size: var(--font-scale-3);
    
    /* Grid */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(260px, 35%, 400px), 1fr));
    
    /* Borders */
    border-radius: clamp(8px, 2vw, 24px);
}

/* 10. Performance vs Media Queries */
/* Comparison functions are evaluated at runtime, media queries require downloading separate CSS */
/* One clamp() can replace 5-10 media queries */
/* Always preferred when possible for responsive values */`,
  lineByLine: [
    "Line 2-12: min() — returns smallest value from comma-separated list",
    "min(100%, 1200px): Full width on mobile, capped at 1200px on desktop",
    "min(48px, 8vw): Never exceeds 48px, scales fluidly below that",
    "Perfect for capping maximum values",
    "Line 17-20: min() with multiple values — picks smallest of all",
    "Line 23-26: Container with offset and max — min(100% - 40px, 1200px)",
    "Line 32-38: max() — returns largest value, ensures minimums",
    "max(250px, 20%): At least 250px wide, can grow larger",
    "max(14px, 2vw): Accessibility — never smaller than 14px",
    "Essential for minimum size guarantees",
    "Line 44-49: max() for accessibility — ensures readable, clickable elements",
    "min-height: max(44px, 6vh) — WCAG click target minimum",
    "Line 54-58: max() for layout constraints — minimum widths",
    "Line 63-72: clamp(min, preferred, max) — THE MOST POWERFUL FUNCTION",
    "Three values: never below min, never above max, fluid preferred between",
    "font-size: clamp(16px, 4vw, 48px) — perfect responsive typography",
    "Line 77-83: clamp() for spacing — padding, margin, gap all become fluid",
    "padding: clamp(12px, 4vw, 32px) — scales between bounds",
    "Line 88-95: clamp() for containers — width, border-radius become fluid",
    "width: clamp(280px, 90%, 1400px) — never too small, never too large",
    "Line 100-103: clamp() in grid minmax — responsive grid tracks",
    "minmax(clamp(200px, 30%, 350px), 1fr) — each column fluid between bounds",
    "Line 108-115: Nested functions — min(max()) creates same as clamp",
    "max(min(100%, 1200px), 320px) — ensures value between 320-1200px",
    "Line 120-128: clamp() with calc() — complex fluid formulas",
    "calc(14px + 1vw) — base 14px plus viewport percentage",
    "Line 133-139: Variables with clamp — themable responsive values",
    "Line 144-150: Hero section — completely fluid, zero media queries",
    "font-size: clamp(32px, 8vw, 96px) — scales from 32 to 96px",
    "padding: clamp(2rem, 15vh, 10rem) — vertical padding from viewport height",
    "Line 155-163: Responsive card — all properties fluid",
    "width: clamp(240px, 100%, 350px) — card width fluid between bounds",
    "Line 168-174: Responsive button with minimum dimensions",
    "min-width: max(80px, 10vw) — ensures minimum width",
    "Line 179-184: Responsive navigation — gaps and padding scale",
    "Line 189-192: Complete fluid grid system",
    "Line 197-206: Responsive modal — perfect centering with clamp widths",
    "Line 210-221: Comparison vs Media Queries — one clamp() replaces 3+ @media rules",
    "Line 224-235: Responsive type scale using CSS variables with clamp",
    "Complete typography system fluid at all screen sizes",
    "Line 238-253: Complete responsive layout — everything fluid, zero media queries",
    "Line 256-259: Performance benefits — clamp evaluated at runtime, no extra CSS"
  ],
  simpleMeaning: "min() caps maximum values. max() ensures minimum values. clamp() combines both — min, ideal, max in one line. Replace 10+ media queries with one clamp().",
  output: "Perfectly responsive typography that scales fluidly. Containers that adapt to any screen size. Spacing that adjusts smoothly between bounds. No media query spaghetti.",
  note: "clamp() is the most important responsive CSS function — learn it first. Replace max-width patterns with min(). Replace min-width patterns with max(). Master clamp() for fluid typography."
},
// ==================== ADVANCED TOPIC 15: CSS CUSTOM PROPERTIES (Variables) Deep Dive ====================
{
  name: "15. CSS CUSTOM PROPERTIES — Advanced Variables System",
  description: "CSS Custom Properties (CSS Variables) are entity-defined values that can be reused throughout stylesheets, updating dynamically at runtime. Variables are declared with double dash prefix (--name) and accessed with var() function. They follow DOM hierarchy — properties cascade and inherit naturally through element tree. Can be scoped to any selector — :root for global, specific components for local. JavaScript can read/write variables using getComputedStyle() and setProperty(), enabling dynamic theming without recompiling. Variables work in media queries, calc(), and any CSS property. Can store any valid CSS value — colors, lengths, numbers, strings, even entire gradients. Fallback values provide graceful degradation. Update in one place, update everywhere — dramatically improves maintainability. Enable true design token systems and runtime theming. Can be animated with @property (CSS Houdini) for smooth interpolation between values.",
  code: `/* ========== VARIABLE DECLARATION & SCOPE ========== */
/* Global variables (available everywhere) */
:root {
    /* Color system */
    --color-primary: #3498db;
    --color-primary-dark: #2980b9;
    --color-secondary: #2ecc71;
    --color-danger: #e74c3c;
    --color-warning: #f39c12;
    --color-info: #3498db;
    --color-text: #333;
    --color-text-light: #666;
    --color-bg: #fff;
    --color-bg-alt: #f5f5f5;
    
    /* Spacing system (8px grid) */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
    
    /* Typography scale */
    --font-family-base: 'Inter', system-ui, -apple-system, sans-serif;
    --font-family-heading: 'Inter', 'Segoe UI', serif;
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;      /* 16px */
    --font-size-lg: 1.125rem;    /* 18px */
    --font-size-xl: 1.25rem;     /* 20px */
    --font-size-2xl: 1.5rem;     /* 24px */
    --font-size-3xl: 1.875rem;   /* 30px */
    --font-size-4xl: 2.25rem;    /* 36px */
    --font-size-5xl: 3rem;       /* 48px */
    
    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-2xl: 24px;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    
    /* Transitions */
    --transition-fast: 150ms;
    --transition-base: 300ms;
    --transition-slow: 500ms;
    --transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Z-index layers */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
}

/* Component-scoped variables */
.card {
    --card-padding: var(--space-lg);
    --card-bg: white;
    --card-bg-hover: #f9f9f9;
    --card-border-radius: var(--radius-lg);
    --card-shadow: var(--shadow-md);
    --card-shadow-hover: var(--shadow-lg);
    
    padding: var(--card-padding);
    background: var(--card-bg);
    border-radius: var(--card-border-radius);
    box-shadow: var(--card-shadow);
    transition: all var(--transition-base) var(--transition-ease);
}

.card:hover {
    background: var(--card-bg-hover);
    box-shadow: var(--card-shadow-hover);
    transform: translateY(-2px);
}

/* Override for featured card */
.card--featured {
    --card-bg: var(--color-primary);
    --card-shadow-hover: var(--shadow-xl);
    color: white;
}

/* ========== VAR() FUNCTION — ACCESSING VARIABLES ========== */
.button {
    /* Basic variable usage */
    background: var(--color-primary);
    color: white;
    padding: var(--space-sm) var(--space-lg);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-md);
    
    /* With fallback (if variable doesn't exist) */
    background: var(--color-accent, #3498db);
    
    /* Multiple fallbacks */
    background: var(--color-accent, var(--color-primary, blue));
}

/* ========== VARIABLES IN CALC() ========== */
.container {
    width: calc(100% - (var(--space-lg) * 2));
    margin: calc(var(--space-md) / 2);
    padding: calc(var(--space-md) + var(--space-sm));
    gap: calc(var(--space-md) * 1.5);
}

/* ========== RESPONSIVE VARIABLES ========== */
/* Mobile defaults */
:root {
    --container-padding: var(--space-md);
    --font-size-base: 14px;
    --grid-gap: var(--space-md);
}

/* Tablet breakpoint */
@media (min-width: 768px) {
    :root {
        --container-padding: var(--space-xl);
        --font-size-base: 16px;
        --grid-gap: var(--space-lg);
    }
}

/* Desktop breakpoint */
@media (min-width: 1024px) {
    :root {
        --container-padding: var(--space-2xl);
        --font-size-base: 18px;
        --grid-gap: var(--space-xl);
    }
}

/* ========== THEME SWITCHING (Dark/Light Mode) ========== */
/* Light theme (default) */
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f3f4f6;
    --text-primary: #111827;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;
    --card-bg: #ffffff;
    --shadow-color: rgba(0, 0, 0, 0.1);
}

/* Dark theme */
[data-theme="dark"] {
    --bg-primary: #111827;
    --bg-secondary: #1f2937;
    --text-primary: #f9fafb;
    --text-secondary: #9ca3af;
    --border-color: #374151;
    --card-bg: #1f2937;
    --shadow-color: rgba(0, 0, 0, 0.3);
}

/* Apply theme variables */
body {
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background var(--transition-base), color var(--transition-base);
}

.card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
}

/* ========== JAVASCRIPT INTERACTION ========== */
/* Read variable:
   getComputedStyle(element).getPropertyValue('--color-primary')
*/

/* Write variable:
   document.documentElement.style.setProperty('--color-primary', '#ff0000')
*/

/* Dynamic theme switching JS:
   document.documentElement.setAttribute('data-theme', 'dark')
*/

/* ========== ADVANCED VARIABLE PATTERNS ========== */

/* 1. Nested variables (variables referencing other variables) */
:root {
    --brand-hue: 210;
    --brand-saturation: 100%;
    --brand-lightness: 50%;
    --color-primary: hsl(var(--brand-hue), var(--brand-saturation), var(--brand-lightness));
    --color-primary-light: hsl(var(--brand-hue), var(--brand-saturation), calc(var(--brand-lightness) + 10%));
    --color-primary-dark: hsl(var(--brand-hue), var(--brand-saturation), calc(var(--brand-lightness) - 10%));
}

/* 2. Conditional variables with fallbacks */
.element {
    /* Uses custom color if defined, otherwise generates from primary */
    color: var(--element-color, var(--color-primary));
}

/* 3. Component configuration pattern */
.component {
    --component-padding: var(--space-lg);
    --component-margin: var(--space-md);
    --component-bg: white;
    
    padding: var(--component-padding);
    margin: var(--component-margin);
    background: var(--component-bg);
}

.component--compact {
    --component-padding: var(--space-sm);
    --component-margin: var(--space-xs);
}

/* 4. Variable with invalid fallback fallback */
.safe-color {
    color: var(--color-invalid, var(--color-primary, #3498db));
}

/* 5. CSS Properties and Values API (Houdini) — animatable variables */
@property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.animated-gradient {
    --gradient-angle: 0deg;
    background: linear-gradient(var(--gradient-angle), var(--color-primary), var(--color-secondary));
    transition: --gradient-angle var(--transition-slow);
}

.animated-gradient:hover {
    --gradient-angle: 360deg;
}

/* 6. Variable-based type scale system */
:root {
    --ratio: 1.25;
    --font-size-1: calc(var(--font-size-base) * var(--ratio));
    --font-size-2: calc(var(--font-size-1) * var(--ratio));
    --font-size-3: calc(var(--font-size-2) * var(--ratio));
    --font-size-4: calc(var(--font-size-3) * var(--ratio));
    --font-size-5: calc(var(--font-size-4) * var(--ratio));
}

/* 7. Fluid spacing system */
:root {
    --fluid-min-width: 320;
    --fluid-max-width: 1200;
    --fluid-min-value: 16;
    --fluid-max-value: 48;
    
    --fluid-spacing: calc(
        var(--fluid-min-value) * 1px + 
        (var(--fluid-max-value) - var(--fluid-min-value)) * 
        ((100vw - var(--fluid-min-width) * 1px) / 
        (var(--fluid-max-width) - var(--fluid-min-width)))
    );
}

.fluid-element {
    padding: var(--fluid-spacing);
}

/* 8. Complete design token system */
:root {
    /* Breakpoints */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    
    /* Container widths */
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    
    /* Grid columns */
    --grid-cols: 12;
    --grid-gutter: var(--space-lg);
}

/* Responsive container using variables */
.container {
    width: 100%;
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}
@media (max-width: var(--breakpoint-lg)) {
    .container { max-width: var(--container-lg); }
}
@media (max-width: var(--breakpoint-md)) {
    .container { max-width: var(--container-md); }
}`,
  lineByLine: [
    "Variable declaration uses -- prefix, :root for global scope",
    "Color system variables — primary, secondary, semantic colors",
    "Spacing system based on 8px grid for consistency",
    "Typography scale with rem units for accessibility",
    "Border radius consistent across components",
    "Shadow elevation system for depth",
    "Transition timings and easing curves",
    "Z-index management prevents stacking context conflicts",
    "Component-scoped variables — card component overrides defaults",
    "var() function accesses variable values",
    "Fallback values provide graceful degradation",
    "Variables work in calc() for dynamic computations",
    "Media queries can update variables (responsive theming)",
    "Theme switching via data attribute",
    "JS can read/write variables for dynamic theming",
    "Nested variables create derived color systems",
    "Houdini @property enables variable animation"
  ],
  simpleMeaning: "CSS variables store reusable values (colors, sizes). Change one place, update everywhere. Enable themes, responsive design, and dynamic updates.",
  output: "Consistent design system across entire site. Dark/light theme switching. Responsive values that update at breakpoints. Dynamic theming via JavaScript.",
  note: "Use :root for global variables. Provide fallbacks. Variables can be updated in media queries. Use with calc() for fluid values. @property enables animation."
},

// ==================== ADVANCED TOPIC 16: CSS CONTAINER QUERIES ====================
{
  name: "16. CSS CONTAINER QUERIES — Component-Level Responsiveness",
  description: "Container Queries represent the biggest revolution in responsive design since media queries, enabling components to respond to their parent container size rather than viewport size. Traditional media queries can't help when a component appears in different contexts (sidebar vs main content). Container queries solve this by letting components style themselves based on their containing element's dimensions. Use container-type to establish a query container (size, inline-size, block-size, normal). container-name gives the container an identifier for targeted queries. @container syntax similar to @media with conditions (min-width, max-width, etc.). style queries can check computed styles on container. Container query units (cqw, cqh, cqi, cqb, cqmin, cqmax) are percentage units relative to container dimensions. Perfect for component libraries, cards, widgets, and reusable UI elements that need to adapt to any placement.",
  code: `/* ========== ESTABLISHING CONTAINERS ========== */
/* Basic container — enables size queries based on inline size (width) */
.card-container {
    container-type: inline-size;
    /* Any element can become a query container */
}

/* Named container for targeted queries */
.widget-container {
    container-type: inline-size;
    container-name: widget;
}

/* Size container (both width and height) */
.square-container {
    container-type: size;
    container-name: square;
}

/* Inline-size container (width only — most common) */
.flexible-card {
    container-type: inline-size;
    container-name: card;
}

/* ========== BASIC CONTAINER QUERIES ========== */
/* Unnamed container query (affects nearest ancestor with container-type) */
@container (min-width: 400px) {
    .card {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    .card-image {
        width: 150px;
    }
}

@container (max-width: 399px) {
    .card {
        display: block;
    }
    .card-image {
        width: 100%;
    }
}

/* ========== NAMED CONTAINER QUERIES ========== */
/* Target specific container by name */
@container widget (min-width: 500px) {
    .widget-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@container card (min-width: 300px) and (max-width: 600px) {
    .card-title {
        font-size: 1.25rem;
    }
}

/* ========== CONTAINER QUERY UNITS ========== */
/* cqw = 1% of container width
   cqh = 1% of container height
   cqi = 1% of container inline size (width in horizontal writing)
   cqb = 1% of container block size (height in horizontal writing)
   cqmin = min(cqi, cqb)
   cqmax = max(cqi, cqb) */

.responsive-text {
    /* Font size scales with container width */
    font-size: clamp(12px, 5cqi, 24px);
    
    /* Padding proportional to container */
    padding: 2cqi;
    
    /* Border radius based on container */
    border-radius: 1cqmin;
}

/* ========== PRACTICAL CARD COMPONENT ========== */
/* This card adapts to any container it's placed in */
.component-card {
    container-type: inline-size;
    container-name: demo-card;
    background: white;
    border-radius: 12px;
    overflow: hidden;
}

/* Narrow container (< 300px) — stacked layout */
@container demo-card (max-width: 299px) {
    .card-content {
        padding: 16px;
    }
    .card-title {
        font-size: 1.125rem;
    }
    .card-description {
        display: none;  /* Hide description on very narrow */
    }
    .card-button {
        width: 100%;
        text-align: center;
    }
}

/* Medium container (300px - 500px) — horizontal with small image */
@container demo-card (min-width: 300px) and (max-width: 500px) {
    .card-wrapper {
        display: flex;
        gap: 12px;
    }
    .card-image {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
    }
    .card-content {
        flex: 1;
        padding: 12px;
    }
}

/* Wide container (> 500px) — full horizontal layout */
@container demo-card (min-width: 501px) {
    .card-wrapper {
        display: flex;
        gap: 20px;
    }
    .card-image {
        width: 120px;
        height: 120px;
        flex-shrink: 0;
    }
    .card-content {
        flex: 1;
        padding: 20px;
    }
    .card-title {
        font-size: 1.5rem;
    }
    .card-button {
        align-self: flex-start;
    }
}

/* ========== DASHBOARD WIDGET EXAMPLE ========== */
.dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.dashboard-widget {
    container-type: inline-size;
    container-name: widget;
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    padding: 16px;
}

@container widget (min-width: 350px) {
    .widget-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .widget-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    }
}

@container widget (max-width: 349px) {
    .widget-header {
        flex-direction: column;
        gap: 8px;
    }
    .widget-stats {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
}

/* ========== STYLE QUERIES (Check computed styles) ========== */
/* Style queries can check CSS properties on container */
@container style(--theme: dark) {
    .widget {
        background: #1a1a2e;
        color: white;
    }
}

/* Using container style queries for context-aware styling */
.callout {
    container-type: inline-size;
    container-name: callout;
    --variant: info;
}

@container callout style(--variant: info) {
    .callout-icon { content: "ℹ️"; }
    .callout-border { border-left-color: blue; }
}

@container callout style(--variant: warning) {
    .callout-icon { content: "⚠️"; }
    .callout-border { border-left-color: orange; }
}

/* ========== NESTED CONTAINER QUERIES ========== */
/* Containers can be nested, each responding to its own parent */
.outer-container {
    container-type: inline-size;
    container-name: outer;
}

.inner-component {
    container-type: inline-size;
    container-name: inner;
}

@container outer (min-width: 800px) {
    .inner-component {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

@container inner (max-width: 200px) {
    .inner-item {
        font-size: 12px;
    }
}

/* ========== COMPLETE COMPONENT LIBRARY EXAMPLE ========== */
/* Product card that works anywhere — sidebar, main content, grid */
.product-card {
    container-type: inline-size;
    container-name: product;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Base styles (mobile/default) */
.product-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
.product-info {
    padding: 16px;
}
.product-title {
    font-size: 1rem;
    margin-bottom: 8px;
}
.product-price {
    font-weight: bold;
    color: var(--color-primary);
}

/* Medium container — horizontal layout */
@container product (min-width: 300px) {
    .product-card {
        display: flex;
    }
    .product-image {
        width: 120px;
        aspect-ratio: 1 / 1;
    }
    .product-info {
        flex: 1;
    }
}

/* Large container — enhanced horizontal with details */
@container product (min-width: 500px) {
    .product-image {
        width: 180px;
    }
    .product-description {
        display: block;
        font-size: 0.875rem;
        color: #666;
        margin-top: 8px;
    }
    .product-actions {
        display: flex;
        gap: 12px;
        margin-top: 16px;
    }
}

/* ========== CONTAINER QUERIES VS MEDIA QUERIES ========== */
/* Media query (viewport-based) — component can't adapt to placement */
@media (min-width: 768px) {
    .card { display: flex; }  /* Works everywhere same way */
}

/* Container query (container-based) — component adapts to its parent */
.card-container {
    container-type: inline-size;
}
@container (min-width: 400px) {
    .card { display: flex; }  /* Adapts to container, not viewport */
}

/* ========== PRACTICAL USE CASES ========== */

/* 1. Email subscription form that adapts to sidebar or main content */
.subscribe-form {
    container-type: inline-size;
    container-name: form;
}

@container form (min-width: 350px) {
    .form-group {
        display: flex;
        gap: 12px;
    }
    .form-input {
        flex: 1;
    }
}

/* 2. Navigation menu that becomes vertical in narrow containers */
.nav-component {
    container-type: inline-size;
    container-name: nav;
}

@container nav (max-width: 500px) {
    .nav-list {
        flex-direction: column;
        gap: 8px;
    }
}

/* 3. Chart that changes complexity based on available space */
.data-chart {
    container-type: inline-size;
    container-name: chart;
}

@container chart (max-width: 300px) {
    .chart-labels { display: none; }
    .chart-minimal { display: block; }
}`,
  lineByLine: [
    "container-type: inline-size — enables container queries based on width",
    "container-name gives container an identifier for targeted queries",
    "@container (min-width: 400px) — query that activates when container is 400px+",
    "Component styles change based on its parent container, not viewport",
    "Container query units (cqw, cqh, cqi) relative to container size",
    "Nested containers can have independent query contexts",
    "Style queries check computed CSS properties on container",
    "Perfect for component libraries — cards adapt to any placement",
    "Dashboard widgets that reorganize based on available space",
    "Products cards that change layout in sidebar vs main content"
  ],
  simpleMeaning: "Container queries let components respond to their parent size, not screen size. Perfect for reusable components that appear in different contexts.",
  output: "Cards that reorganize themselves naturally in sidebars, main content, or grids. Dashboard widgets that adapt to available space. True component independence.",
  note: "Use container queries for component libraries and widgets. Media queries for entire page layouts. container-type: inline-size is most common."
},

// ==================== ADVANCED TOPIC 17: CSS @LAYER (Cascade Layers) ====================
{
  name: "17. CSS @LAYER — Managing Specificity at Scale",
  description: "Cascade Layers revolutionize CSS specificity management by letting developers control the order of entire stylesheet sections. Traditional CSS specificity wars often lead to !important overrides and complex selector hierarchies. @layer solves this by giving each layer a priority order — styles in later layers override earlier layers regardless of selector specificity. Define layer order with @layer statement before any styles. Layers can be nested for hierarchical organization. Unlayered styles (outside any @layer) have highest priority. Styles in same layer still use normal specificity rules. Perfect for managing frameworks (reset, base, components, utilities) and preventing third-party CSS conflicts. Can be defined across multiple files — import order determines precedence.",
  code: `/* ========== DEFINING LAYER ORDER ========== */
/* The order here determines precedence — later layers override earlier */
@layer reset, theme, components, utilities, overrides;

/* ========== RESET LAYER (Lowest priority) ========== */
@layer reset {
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        line-height: 1.5;
    }
    
    img {
        max-width: 100%;
        display: block;
    }
}

/* ========== THEME LAYER ========== */
@layer theme {
    :root {
        --primary: #3498db;
        --secondary: #2ecc71;
        --text: #333;
    }
    
    body {
        font-family: 'Inter', system-ui, sans-serif;
        color: var(--text);
    }
    
    a {
        color: var(--primary);
        text-decoration: none;
    }
}

/* ========== COMPONENTS LAYER ========== */
@layer components {
    .button {
        display: inline-block;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .button-primary {
        background: var(--primary);
        color: white;
    }
    
    .card {
        background: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .card-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 8px;
    }
}

/* ========== UTILITIES LAYER (Higher priority than components) ========== */
@layer utilities {
    .text-center { text-align: center; }
    .text-large { font-size: 1.25rem; }
    .mt-4 { margin-top: 16px; }
    .mb-4 { margin-bottom: 16px; }
    .p-4 { padding: 16px; }
    .rounded-lg { border-radius: 12px; }
    .shadow-md { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .flex { display: flex; }
    .grid { display: grid; }
}

/* ========== OVERRIDES LAYER (Highest priority) ========== */
@layer overrides {
    /* Emergency fixes that need to override everything */
    .button-primary {
        background: #ff0000 !important;  /* !important still works but avoid */
    }
}

/* ========== NESTED LAYERS ========== */
@layer framework {
    @layer framework.reset {
        * { margin: 0; }
    }
    
    @layer framework.components {
        .btn { padding: 8px 16px; }
    }
}

/* Access nested layer: @layer framework.components */

/* ========== LAYERS WITH IMPORT ========== */
/* In CSS file:
   @import 'reset.css' layer(reset);
   @import 'theme.css' layer(theme);
   @import 'components.css' layer(components);
*/

/* ========== LAYING OUT STYLES WITHOUT @LAYER ========== */
/* Styles declared without @layer have highest priority */
/* They override all layered styles regardless of specificity */

/* This will override any layered .button rule */
.button {
    background: purple !important;  /* Actually don't use !important */
}

/* ========== PRACTICAL EXAMPLE — Framework Integration ========== */
/* Use layers to safely customize frameworks without fighting specificity */

/* Define layer order first */
@layer tailwind, components, custom;

/* Import framework (imaginary) */
@import 'tailwind.css' layer(tailwind);

/* Your components (overrides tailwind) */
@layer components {
    .btn {
        padding: 12px 24px;
        border-radius: 8px;
    }
}

/* Your custom styles (overrides components) */
@layer custom {
    .btn-primary {
        background: #3498db;
    }
}

/* ========== NON-LAYERED STYLES (Emergency Overrides) ========== */
/* These have highest priority for critical fixes */
.fix-urgent {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
}

/* ========== LAYER ORDER SCENARIOS ========== */
/* Scenario 1: Framework reset then custom styles */
@layer reset, base, components;
@layer components { .btn { ... } }
@layer base { .btn { ... } }  /* This overrides components because base is later? Wait, order matters */

/* Actually, order is defined by the initial @layer statement */
/* @layer reset, base, components — components has highest priority */

/* Scenario 2: Conditional layers */
@media (min-width: 768px) {
    @layer responsive {
        .grid { grid-template-columns: repeat(2, 1fr); }
    }
}

/* ========== DEBUGGING LAYERS ========== */
/* In DevTools, you can see which layer a style comes from */
/* Helps debug specificity issues */

/* ========== BEST PRACTICES ========== */
/* 1. Always declare layer order at the top of your CSS */
@layer reset, base, components, utilities;

/* 2. Use meaningful layer names */
@layer typography, layout, components, utilities;

/* 3. Keep layer hierarchy shallow (avoid too many nested layers) */
@layer framework { @layer core, theme; }  /* Fine but can get complex */

/* 4. Use layers for third-party code integration */
@tailwind base layer(tailwind-base);
@tailwind components layer(tailwind-components);
@tailwind utilities layer(tailwind-utilities);

@layer custom {
    /* Your styles override Tailwind */
}`,
  lineByLine: [
    "@layer reset, theme, components, utilities — defines layer order (later = higher priority)",
    "Each @layer block contains styles for that layer",
    "Styles in later layers override earlier layers regardless of specificity",
    "Nested layers provide hierarchical organization",
    "Unlayered styles (outside any @layer) have highest priority",
    "Perfect for managing framework conflicts and scaling CSS",
    "Great for organizing reset, base, components, utilities",
    "Prevents specificity wars and !important abuse"
  ],
  simpleMeaning: "@layer organizes CSS by priority order — later layers override earlier layers regardless of selector specificity. Perfect for managing frameworks and large codebases.",
  output: "Predictable style precedence without specificity calculations. Safe framework customization. Organized stylesheet architecture.",
  note: "Always define layer order first. Put reset first, then base, then components, then utilities. Unlayered styles override all layers."
},

// ==================== ADVANCED TOPIC 18: CSS PERFORMANCE OPTIMIZATION ====================
{
  name: "18. CSS PERFORMANCE OPTIMIZATION",
  description: "CSS performance is critical for fast-loading, smooth-interaction websites. Critical CSS inlining extracts above-the-fold styles and embeds them directly in HTML <head> for immediate rendering. Non-critical CSS loads asynchronously to avoid render blocking. Reduce CSS file size by minification (remove whitespace, comments), compression (gzip/brotli), and removing unused CSS via tools like PurgeCSS. Use CSS containment (contain property) to isolate subtrees, reducing browser reflow/repaint costs. Animate only transform and opacity — these properties use GPU compositing, avoiding expensive layout recalculations. will-change hints browser about upcoming animations for optimization. Reduce selector complexity — browsers match selectors right-to-left, so keep specificity low and avoid deep nesting. Use CSS variables for recurring values to reduce code duplication. Lazy load non-critical stylesheets with media=\"print\" then onload switching. Use content-visibility: auto for off-screen elements — browser skips rendering until needed. Monitor CSS performance with Lighthouse, Chrome DevTools Coverage tab, and Performance panel.",
  code: `/* ========== CRITICAL CSS INLINING ========== */
/* Critical CSS (above-the-fold) — inline in <style> tag in <head> */
/* Non-critical CSS — load asynchronously */

<!-- HTML example -->
<head>
    <!-- Inline critical CSS -->
    <style>
        /* Header, hero section, above-the-fold content */
        header { background: #333; padding: 1rem; }
        .hero { font-size: 2rem; margin-top: 2rem; }
    </style>
    
    <!-- Non-critical CSS loaded asynchronously -->
    <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>

/* ========== CONTAINMENT — REDUCE REFLOW ========== */
/* contain property tells browser which changes won't affect outside */
.element {
    contain: layout;           /* Isolates layout — changes don't affect outside */
    contain: paint;            /* Elements outside container aren't painted */
    contain: size;             /* Size doesn't depend on children */
    contain: content;          /* All containment types except size */
    contain: strict;           /* All containment types */
    
    /* Common patterns */
    contain: layout paint;     /* Good for card components */
    content-visibility: auto;   /* Skips rendering off-screen elements */
}

/* content-visibility — dramatic performance improvement for long lists */
.long-list-item {
    content-visibility: auto;
    contain-intrinsic-size: 0 200px;  /* Estimated size before render */
}

/* ========== ANIMATION PERFORMANCE ========== */
/* GOOD — animating transform and opacity (GPU accelerated) */
.good-animation {
    transition: transform 0.3s ease, opacity 0.3s ease;
}
.good-animation:hover {
    transform: translateY(-10px) scale(1.05);
    opacity: 0.9;
}

/* BAD — animating layout properties (causes repaint/reflow) */
.bad-animation {
    transition: width 0.3s ease, height 0.3s ease, top 0.3s ease, left 0.3s ease;
}
.bad-animation:hover {
    width: 200px;
    height: 200px;
    top: 10px;
    left: 10px;
}

/* will-change — hint browser about upcoming animations */
.will-animate {
    will-change: transform;
    will-change: opacity, transform;
    /* Use sparingly — don't overuse on many elements */
}

/* ========== SELECTOR PERFORMANCE ========== */
/* Good — simple, specific enough, right-to-left friendly */
.good-selector {
    /* Benefits: simple class selector */
}
.nav-item a { }           /* 2 selectors, clear relationship */
.card-title { }           /* Single class */

/* Bad — overly complex selectors */
.bad-selector {
    /* Causes: deep nesting, universal selectors, complex attributes */
}
body div main section article .card { }  /* Too deep */
* > * > * > .something { }               /* Universal selector chain */
[data-attribute="value"] ~ .class + .class { } /* Complex combinators */

/* ========== MINIFICATION ========== */
/* Before minification */
.button {
    background-color: #3498db;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
}

/* After minification (run through build tool) */
.button{background-color:#3498db;color:#fff;padding:12px 24px;border-radius:8px}

/* ========== PURGING UNUSED CSS ========== */
/* Tailwind CSS + PurgeCSS configuration example */
/*
// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: { extend: {} },
    plugins: []
}
*/

/* Unused CSS automatically removed in production */

/* ========== CSS-IN-JS PERFORMANCE ========== */
/* Zero runtime CSS-in-JS (compile-time) — better performance */
/* Linaria, vanilla-extract compile to static CSS at build time */

/* ========== REDUCE REPAINT AREAS ========== */
/* Stacking contexts isolate paint areas */
.stack-context {
    position: relative;     /* Creates new stacking context */
    z-index: 1;
    will-change: transform; /* Also creates stacking context */
}

/* Transform instead of position for movement */
/* GOOD */
.move-gpu {
    transform: translateX(100px);
}

/* BAD — triggers reflow */
.move-cpu {
    left: 100px;  /* position changes cause layout recalculation */
}

/* ========== ASYNC LOADING PATTERNS ========== */
/* Load CSS only when needed (e.g., after interaction) */
<link rel="preload" href="print.css" as="style" media="print" onload="this.media='all'">

/* Load CSS for specific media query */
<link rel="stylesheet" href="mobile.css" media="(max-width: 768px)" onload="this.media='all'">

/* ========== FONT LOADING OPTIMIZATION ========== */
/* Use font-display to control flash of invisible text */
@font-face {
    font-family: 'CustomFont';
    src: url('font.woff2') format('woff2');
    font-display: swap;  /* Show fallback until font loads */
    /* Options: auto, block, swap, fallback, optional */
}

/* Preload critical fonts */
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

/* ========== REDUCE CSS COMPLEXITY ========== */
/* Use CSS Grid and Flexbox instead of complex positioning */
/* Modern layout techniques reduce layout thrashing */

/* Simple grid instead of floats and clearfixes */
.layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* ========== DEVTools COVERAGE ========== */
/* Chrome DevTools → Coverage tab → Record coverage */
/* Shows unused CSS bytes — helps identify what to purge */

/* ========== PRACTICAL PERFORMANCE CHECKLIST ========== */
/*
1. Inline critical CSS
2. Lazy load non-critical CSS
3. Minify CSS files
4. Compress with gzip/brotli
5. Purge unused CSS
6. Use contain and content-visibility
7. Animate only transform/opacity
8. Avoid deep selector nesting
9. Use CSS Grid/Flexbox for layouts
10. Monitor with Lighthouse
*/

/* ========== CONTENT-VISIBILITY EXAMPLE ========== */
/* Dramatically improves scrolling performance on long lists */
.news-feed-item {
    content-visibility: auto;
    contain-intrinsic-size: 0 300px;  /* Estimated height */
    margin-bottom: 20px;
    padding: 20px;
    border-bottom: 1px solid #eee;
}

/* ========== LAYOUT THRASHING PREVENTION ========== */
/* Read layout properties from DOM as few times as possible */
// BAD JavaScript (causes layout thrashing)
/*
elements.forEach(el => {
    const height = el.offsetHeight;  // Read
    el.style.height = height + 10 + 'px';  // Write (invalidates)
    // Next iteration causes browser to recalculate
});

// GOOD JavaScript (batch reads before writes)
const heights = elements.map(el => el.offsetHeight);
elements.forEach((el, i) => {
    el.style.height = heights[i] + 10 + 'px';
});
*/`,
  lineByLine: [
    "Critical CSS inlining eliminates render-blocking CSS",
    "contain property isolates elements, preventing reflow propagation",
    "content-visibility: auto skips rendering off-screen elements",
    "animate only transform and opacity — GPU accelerated",
    "will-change hints browser about coming animations",
    "Simplify selectors — browsers match right-to-left",
    "Minification reduces file size by 30-50%",
    "PurgeCSS removes unused CSS from production",
    "font-display: swap prevents invisible text during font loading",
    "DevTools Coverage tab identifies unused CSS"
  ],
  simpleMeaning: "Optimize CSS by inlining critical styles, animating only transform/opacity, using content-visibility for long lists, and removing unused CSS.",
  output: "Faster page loads, smoother animations, reduced browser reflow, better Core Web Vitals scores (LCP, FCP, CLS).",
  note: "Always measure before optimizing — use Lighthouse and Coverage tab. content-visibility is game-changing for long scrolls. animate only transform/opacity."
},

// ==================== ADVANCED TOPIC 19: CSS @SCOPE (Style Encapsulation) ====================
{
  name: "19. CSS @SCOPE — Encapsulated Style Boundaries",
  description: "@scope rule creates style encapsulation boundaries, limiting selector reach to a specific DOM subtree — prevents styles from leaking out or being affected by outside styles. Similar to Shadow DOM but with simpler syntax. Define donut scope with both start and end boundaries for styles that apply everywhere except excluded subtrees. Scoped styles still cascade through normal rules but respect the boundary. Multiple @scope rules can coexist. Great for component-style encapsulation without Web Components complexity. Especially useful in CMS environments where global styles might interfere. Works with nesting for cleaner organization. The :scope pseudo-class references the scope root element. Can be used with @layer for priority management.",
  code: `/* ========== BASIC @SCOPE ========== */
/* Styles within @scope only apply to matching elements inside .component */
@scope (.component) {
    /* Only applies to .title INSIDE .component */
    .title {
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    /* Only applies to button INSIDE .component */
    button {
        background: #3498db;
        color: white;
        border: none;
        padding: 8px 16px;
    }
    
    /* Nested scope */
    @scope (.nested) {
        .nested-title {
            font-size: 1rem;
        }
    }
}

/* ========== DONUT SCOPE (Exclude subtrees) ========== */
/* Scope applies everywhere EXCEPT within .ignore */
@scope (.container) to (.ignore) {
    /* Styles apply to all .container descendants, but not inside .ignore */
    p {
        margin-bottom: 1rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
}

/* Multiple excluded scopes */
@scope (.main) to (.exclude-1, .exclude-2) {
    /* Styles apply everywhere in .main except .exclude-1 and .exclude-2 */
}

/* ========== :SCOPE PSEUDO-CLASS ========== */
/* References the scope root element */
@scope (.card) {
    /* :scope refers to the .card element itself */
    :scope {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    /* Selects immediate children of the scope root */
    > .card-header {
        font-weight: bold;
        border-bottom: 1px solid #eee;
    }
    
    /* Alternately reference scope root */
    :scope > .card-content {
        padding: 20px;
    }
}

/* ========== PRACTICAL COMPONENT EXAMPLE ========== */
/* Component with complete style isolation */
@scope (.user-card) {
    /* Component root styles */
    :scope {
        display: flex;
        gap: 16px;
        padding: 20px;
        background: white;
        border-radius: 12px;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    
    :scope:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.1);
    }
    
    /* Child styles isolated to this component */
    .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }
    
    .name {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 4px;
    }
    
    .email {
        font-size: 0.875rem;
        color: #666;
    }
    
    /* Nested scope for sub-component */
    @scope (.user-stats) {
        :scope {
            display: flex;
            gap: 12px;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid #eee;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-value {
            font-weight: bold;
            font-size: 1.125rem;
        }
    }
}

/* ========== PREVENTING STYLE LEAKS ========== */
/* Styles inside @scope won't affect elements outside */
@scope (.widget) {
    /* This h2 styling only affects h2 inside .widget */
    h2 {
        font-size: 1.25rem;
        color: #333;
    }
}

/* Outside .widget, h2 remains unstyled by this rule */

/* ========== AVOIDING OUTSIDE STYLE INFLUENCE ========== */
/* @scope also protects from outside styles overriding scoped ones */
/* Useful for CMS widgets that need consistent appearance */

@scope (.embedded-widget) {
    /* Reset inside the widget to prevent outside influence */
    :scope {
        /* Reset common properties */
        font-family: system-ui, sans-serif;
        line-height: 1.5;
        color: #333;
    }
    
    /* Widget elements */
    .title {
        font-size: 1.25rem;
        font-weight: bold;
    }
}

/* ========== @SCOPE WITH NESTING ========== */
@scope (.component) {
    :scope {
        padding: 20px;
    }
    
    & .header {
        font-size: 1.5rem;
        
        & .title {
            color: var(--primary);
        }
    }
    
    &:hover {
        background: #f5f5f5;
    }
}

/* ========== MULTIPLE SCOPES ========== */
/* Different components can have same class names, scoped independently */
@scope (.news-card) {
    .title { font-size: 1.25rem; font-weight: bold; }
    .description { font-size: 0.875rem; color: #666; }
}

@scope (.product-card) {
    .title { font-size: 1rem; font-weight: 600; }
    .description { font-size: 0.75rem; color: #999; }
}

/* ========== SCREEN READER SPECIFIC SCOPE ========== */
@scope (.sr-only) to (.no-sr) {
    /* Styles only apply to elements that aren't inside .no-sr */
    .label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
}

/* ========== DYNAMIC SCOPES ========== */
/* Scope can be defined by any selector, including classes, IDs, attributes */
@scope ([data-scope="sidebar"]) {
    .widget-title {
        font-size: 1rem;
        padding: 8px;
    }
}

@scope ([data-scope="dashboard"]) {
    .widget-title {
        font-size: 1.25rem;
        padding: 16px;
        border-bottom: 2px solid;
    }
}

/* ========== PRACTICAL USE CASE: THEMEABLE WIDGET ========== */
/* Widget that works anywhere without style conflicts */
@scope (.trust-widget) {
    /* Base styles */
    :scope {
        display: block;
        font-family: system-ui;
        background: var(--widget-bg, #f9f9f9);
        border-radius: 8px;
        padding: 16px;
    }
    
    /* Donut scope for nested trusted content */
    @scope to (.trusted-content) {
        /* Sanitize content outside trusted block */
        a {
            color: inherit;
            text-decoration: none;
        }
        
        img {
            max-width: 100%;
            height: auto;
        }
    }
    
    /* Trusted content zone (allowed to use own styles) */
    .trusted-content {
        /* This area can have its own styles */
    }
}`,
  lineByLine: [
    "@scope (.component) — limits styles to elements inside .component",
    "@scope (.container) to (.ignore) — donut scope excludes .ignore subtree",
    ":scope — references the scope root element",
    "Prevents style leakage — only affects within boundary",
    "Also protects from outside styles overriding scoped ones",
    "Multiple components can use same class names, scoped independently",
    "Great for CMS widgets, embedded content, component libraries"
  ],
  simpleMeaning: "@scope creates style boundaries — styles only apply inside the scope, preventing leakage and outside interference. Perfect for component isolation without Shadow DOM.",
  output: "Truly encapsulated components. No more class name conflicts. Styles that stay where they belong. Reusable components anywhere.",
  note: "Use @scope for component-style encapsulation. :scope references the root. Donut scopes (to keyword) exclude subtrees."
},

// ==================== ADVANCED TOPIC 20: CSS @PROPERTY (Houdini Custom Properties) ====================
{
  name: "20. CSS @PROPERTY — Typed CSS Variables with Animation",
  description: "@property (part of CSS Houdini) registers custom properties with specific types, initial values, and inheritance behavior — enabling CSS variable animation and validation. Unlike regular CSS variables (untyped strings), @property variables understand types: <length>, <number>, <percentage>, <color>, <angle>, <time>, <resolution>, <integer>, etc. Initial values provide fallbacks. Inherits determines if property cascades to children. Registered variables can be animated smoothly using transitions and keyframes (unlike regular variables). Enables creating animatable design tokens. Syntax can be a single type or complex via | for multiple types (e.g., '<length> | <percentage>'). Supports + for space-separated lists and # for comma-separated lists (e.g., '<color>#'). Perfect for creating custom animated properties like gradient angles, component states, and design tokens that transition smoothly.",
  code: `/* ========== BASIC @PROPERTY REGISTRATION ========== */
/* Register a color variable that can be animated */

@property --brand-color {
    syntax: '<color>';
    initial-value: #3498db;
    inherits: false;
}

.element {
    background: var(--brand-color);
    transition: --brand-color 0.3s ease;
}

.element:hover {
    --brand-color: #e74c3c;  /* Smoothly animates from blue to red */
}

/* ========== LENGTH PROPERTY ========== */
@property --card-width {
    syntax: '<length>';
    initial-value: 200px;
    inherits: false;
}

.card {
    width: var(--card-width);
    transition: --card-width 0.5s ease;
}

.card:hover {
    --card-width: 300px;  /* Animates width smoothly */
}

/* ========== ANGLE PROPERTY (for gradients) ========== */
@property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.animated-gradient {
    background: linear-gradient(var(--gradient-angle), red, blue);
    transition: --gradient-angle 0.5s ease;
}

.animated-gradient:hover {
    --gradient-angle: 360deg;
}

/* ========== NUMBER PROPERTY ========== */
@property --opacity-level {
    syntax: '<number>';
    initial-value: 1;
    inherits: false;
}

.fade-element {
    opacity: var(--opacity-level);
    transition: --opacity-level 0.3s ease;
}

.fade-element:hover {
    --opacity-level: 0.5;
}

/* ========== PERCENTAGE PROPERTY ========== */
@property --scale-factor {
    syntax: '<percentage>';
    initial-value: 100%;
    inherits: false;
}

.scale-element {
    transform: scale(calc(var(--scale-factor) / 100));
    transition: --scale-factor 0.3s ease;
}

.scale-element:hover {
    --scale-factor: 120%;
}

/* ========== COMPLEX SYNTAX (multiple types) ========== */
@property --responsive-size {
    syntax: '<length> | <percentage>';
    initial-value: 200px;
    inherits: false;
}

.responsive-element {
    width: var(--responsive-size);
}

/* ========== LIST SYNTAX (multiple values) ========== */
@property --shadow-offsets {
    syntax: '<length>#';
    initial-value: 2px 2px 4px;
    inherits: false;
}

.shadow-element {
    box-shadow: var(--shadow-offsets) rgba(0,0,0,0.3);
}

/* Space-separated list */
@property --padding-values {
    syntax: '<length>+';
    initial-value: 8px 16px;
    inherits: false;
}

/* ========== INHERITS BEHAVIOR ========== */
@property --inherited-color {
    syntax: '<color>';
    initial-value: red;
    inherits: true;  /* Children will inherit this variable */
}

@property --non-inherited {
    syntax: '<length>';
    initial-value: 10px;
    inherits: false; /* Children get default, not parent value */
}

/* ========== PRACTICAL ANIMATED COMPONENTS ========== */

/* 1. Animated gradient button */
@property --btn-gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.gradient-button {
    background: linear-gradient(var(--btn-gradient-angle), #667eea, #764ba2);
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    color: white;
    transition: --btn-gradient-angle 0.5s ease;
}

.gradient-button:hover {
    --btn-gradient-angle: 360deg;
}

/* 2. Loading progress bar */
@property --progress-width {
    syntax: '<percentage>';
    initial-value: 0%;
    inherits: false;
}

.progress-bar {
    width: var(--progress-width);
    height: 4px;
    background: #3498db;
    border-radius: 2px;
    transition: --progress-width 0.5s ease;
}

.progress-bar.loading {
    --progress-width: 100%;
}

/* 3. Animated border */
@property --border-hue {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.animated-border {
    border: 2px solid;
    border-image: linear-gradient(var(--border-hue), red, blue, green) 1;
    transition: --border-hue 0.5s ease;
}

.animated-border:hover {
    --border-hue: 360deg;
}

/* 4. Responsive spacing system */
@property --spacing-scale {
    syntax: '<number>';
    initial-value: 1;
    inherits: false;
}

:root {
    --space-unit: 8px;
}

.dynamic-card {
    padding: calc(var(--spacing-scale) * var(--space-unit));
    transition: --spacing-scale 0.3s ease;
}

.dynamic-card.large {
    --spacing-scale: 3;
}

/* 5. Animated appearance/disappearance */
@property --visibility-opacity {
    syntax: '<number>';
    initial-value: 0;
    inherits: false;
}

.fade-transition {
    opacity: var(--visibility-opacity);
    visibility: var(--visibility-opacity) > 0 ? visible : hidden;
    transition: --visibility-opacity 0.3s ease;
}

.fade-transition.visible {
    --visibility-opacity: 1;
}

/* ========== COMBINING @PROPERTY WITH MEDIA QUERIES ========== */
@property --responsive-padding {
    syntax: '<length>';
    initial-value: 16px;
    inherits: false;
}

@media (min-width: 768px) {
    :root {
        --responsive-padding: 24px;
    }
}

.container {
    padding: var(--responsive-padding);
}

/* ========== GRADIENT POSITION ANIMATION ========== */
@property --gradient-position {
    syntax: '<percentage>';
    initial-value: 0%;
    inherits: false;
}

.shimmer {
    background: linear-gradient(
        90deg,
        transparent calc(var(--gradient-position) - 20%),
        rgba(255,255,255,0.5) var(--gradient-position),
        transparent calc(var(--gradient-position) + 20%)
    );
    transition: --gradient-position 1s ease;
}

.shimmer:hover {
    --gradient-position: 100%;
}

/* ========== DEFAULT VALUES VS @PROPERTY ========== */
/* Regular CSS variable (untyped, can't animate) */
:root {
    --color: blue;  /* String value, can't transition */
}

/* Registered property (typed, can animate) */
@property --animated-color {
    syntax: '<color>';
    initial-value: blue;
    inherits: false;
}

/* ========== BROWSER SUPPORT DETECTION ========== */
@supports (background: paint(something)) {
    /* Houdini supported */
    .advanced-feature {
        /* Use @property features */
    }
}

/* Fallback for non-supporting browsers */
.element {
    background: #3498db;  /* Fallback */
    background: var(--dynamic-color, #3498db);
}`,
  lineByLine: [
    "@property registers typed CSS variables with initial values",
    "syntax defines the variable type (color, length, angle, etc.)",
    "initial-value provides default when variable not set",
    "inherits determines if children inherit the value",
    "Registered variables can animate smoothly in transitions",
    "Perfect for animated gradients, counters, design tokens",
    "Multiple types via | (e.g., '<length> | <percentage>')",
    "Lists via + (space-separated) or # (comma-separated)"
  ],
  simpleMeaning: "@property creates typed CSS variables that can be animated smoothly — unlike regular variables. Perfect for animated gradients, transitions, and design tokens.",
  output: "Smoothly animating custom properties. Gradient angles that spin. Colors that transition. Border-radius that animates. Complete design token animation.",
  note: "Regular CSS variables are untyped strings and can't animate. @property variables are typed and fully animatable. Use for gradients, counters, and design tokens."
},
// ==================== ADVANCED TOPIC 15: CSS CUSTOM PROPERTIES (Variables) Deep Dive ====================
{
  name: "15. CSS CUSTOM PROPERTIES — Advanced Variables System",
  description: "CSS Custom Properties (CSS Variables) are entity-defined values that can be reused throughout stylesheets, updating dynamically at runtime. Variables are declared with double dash prefix (--name) and accessed with var() function. They follow DOM hierarchy — properties cascade and inherit naturally through element tree. Can be scoped to any selector — :root for global, specific components for local. JavaScript can read/write variables using getComputedStyle() and setProperty(), enabling dynamic theming without recompiling. Variables work in media queries, calc(), and any CSS property. Can store any valid CSS value — colors, lengths, numbers, strings, even entire gradients. Fallback values provide graceful degradation. Update in one place, update everywhere — dramatically improves maintainability. Enable true design token systems and runtime theming. Can be animated with @property (CSS Houdini) for smooth interpolation between values.",
  code: `/* ========== VARIABLE DECLARATION & SCOPE ========== */
/* Global variables (available everywhere) */
:root {
    /* Color system */
    --color-primary: #3498db;
    --color-primary-dark: #2980b9;
    --color-secondary: #2ecc71;
    --color-danger: #e74c3c;
    --color-warning: #f39c12;
    --color-info: #3498db;
    --color-text: #333;
    --color-text-light: #666;
    --color-bg: #fff;
    --color-bg-alt: #f5f5f5;
    
    /* Spacing system (8px grid) */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
    
    /* Typography scale */
    --font-family-base: 'Inter', system-ui, -apple-system, sans-serif;
    --font-family-heading: 'Inter', 'Segoe UI', serif;
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;      /* 16px */
    --font-size-lg: 1.125rem;    /* 18px */
    --font-size-xl: 1.25rem;     /* 20px */
    --font-size-2xl: 1.5rem;     /* 24px */
    --font-size-3xl: 1.875rem;   /* 30px */
    --font-size-4xl: 2.25rem;    /* 36px */
    --font-size-5xl: 3rem;       /* 48px */
    
    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-2xl: 24px;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    
    /* Transitions */
    --transition-fast: 150ms;
    --transition-base: 300ms;
    --transition-slow: 500ms;
    --transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Z-index layers */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
}

/* Component-scoped variables */
.card {
    --card-padding: var(--space-lg);
    --card-bg: white;
    --card-bg-hover: #f9f9f9;
    --card-border-radius: var(--radius-lg);
    --card-shadow: var(--shadow-md);
    --card-shadow-hover: var(--shadow-lg);
    
    padding: var(--card-padding);
    background: var(--card-bg);
    border-radius: var(--card-border-radius);
    box-shadow: var(--card-shadow);
    transition: all var(--transition-base) var(--transition-ease);
}

.card:hover {
    background: var(--card-bg-hover);
    box-shadow: var(--card-shadow-hover);
    transform: translateY(-2px);
}

/* Override for featured card */
.card--featured {
    --card-bg: var(--color-primary);
    --card-shadow-hover: var(--shadow-xl);
    color: white;
}

/* ========== VAR() FUNCTION — ACCESSING VARIABLES ========== */
.button {
    /* Basic variable usage */
    background: var(--color-primary);
    color: white;
    padding: var(--space-sm) var(--space-lg);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-md);
    
    /* With fallback (if variable doesn't exist) */
    background: var(--color-accent, #3498db);
    
    /* Multiple fallbacks */
    background: var(--color-accent, var(--color-primary, blue));
}

/* ========== VARIABLES IN CALC() ========== */
.container {
    width: calc(100% - (var(--space-lg) * 2));
    margin: calc(var(--space-md) / 2);
    padding: calc(var(--space-md) + var(--space-sm));
    gap: calc(var(--space-md) * 1.5);
}

/* ========== RESPONSIVE VARIABLES ========== */
/* Mobile defaults */
:root {
    --container-padding: var(--space-md);
    --font-size-base: 14px;
    --grid-gap: var(--space-md);
}

/* Tablet breakpoint */
@media (min-width: 768px) {
    :root {
        --container-padding: var(--space-xl);
        --font-size-base: 16px;
        --grid-gap: var(--space-lg);
    }
}

/* Desktop breakpoint */
@media (min-width: 1024px) {
    :root {
        --container-padding: var(--space-2xl);
        --font-size-base: 18px;
        --grid-gap: var(--space-xl);
    }
}

/* ========== THEME SWITCHING (Dark/Light Mode) ========== */
/* Light theme (default) */
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f3f4f6;
    --text-primary: #111827;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;
    --card-bg: #ffffff;
    --shadow-color: rgba(0, 0, 0, 0.1);
}

/* Dark theme */
[data-theme="dark"] {
    --bg-primary: #111827;
    --bg-secondary: #1f2937;
    --text-primary: #f9fafb;
    --text-secondary: #9ca3af;
    --border-color: #374151;
    --card-bg: #1f2937;
    --shadow-color: rgba(0, 0, 0, 0.3);
}

/* Apply theme variables */
body {
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background var(--transition-base), color var(--transition-base);
}

.card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
}

/* ========== JAVASCRIPT INTERACTION ========== */
/* Read variable:
   getComputedStyle(element).getPropertyValue('--color-primary')
*/

/* Write variable:
   document.documentElement.style.setProperty('--color-primary', '#ff0000')
*/

/* Dynamic theme switching JS:
   document.documentElement.setAttribute('data-theme', 'dark')
*/

/* ========== ADVANCED VARIABLE PATTERNS ========== */

/* 1. Nested variables (variables referencing other variables) */
:root {
    --brand-hue: 210;
    --brand-saturation: 100%;
    --brand-lightness: 50%;
    --color-primary: hsl(var(--brand-hue), var(--brand-saturation), var(--brand-lightness));
    --color-primary-light: hsl(var(--brand-hue), var(--brand-saturation), calc(var(--brand-lightness) + 10%));
    --color-primary-dark: hsl(var(--brand-hue), var(--brand-saturation), calc(var(--brand-lightness) - 10%));
}

/* 2. Conditional variables with fallbacks */
.element {
    /* Uses custom color if defined, otherwise generates from primary */
    color: var(--element-color, var(--color-primary));
}

/* 3. Component configuration pattern */
.component {
    --component-padding: var(--space-lg);
    --component-margin: var(--space-md);
    --component-bg: white;
    
    padding: var(--component-padding);
    margin: var(--component-margin);
    background: var(--component-bg);
}

.component--compact {
    --component-padding: var(--space-sm);
    --component-margin: var(--space-xs);
}

/* 4. Variable with invalid fallback fallback */
.safe-color {
    color: var(--color-invalid, var(--color-primary, #3498db));
}

/* 5. CSS Properties and Values API (Houdini) — animatable variables */
@property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.animated-gradient {
    --gradient-angle: 0deg;
    background: linear-gradient(var(--gradient-angle), var(--color-primary), var(--color-secondary));
    transition: --gradient-angle var(--transition-slow);
}

.animated-gradient:hover {
    --gradient-angle: 360deg;
}

/* 6. Variable-based type scale system */
:root {
    --ratio: 1.25;
    --font-size-1: calc(var(--font-size-base) * var(--ratio));
    --font-size-2: calc(var(--font-size-1) * var(--ratio));
    --font-size-3: calc(var(--font-size-2) * var(--ratio));
    --font-size-4: calc(var(--font-size-3) * var(--ratio));
    --font-size-5: calc(var(--font-size-4) * var(--ratio));
}

/* 7. Fluid spacing system */
:root {
    --fluid-min-width: 320;
    --fluid-max-width: 1200;
    --fluid-min-value: 16;
    --fluid-max-value: 48;
    
    --fluid-spacing: calc(
        var(--fluid-min-value) * 1px + 
        (var(--fluid-max-value) - var(--fluid-min-value)) * 
        ((100vw - var(--fluid-min-width) * 1px) / 
        (var(--fluid-max-width) - var(--fluid-min-width)))
    );
}

.fluid-element {
    padding: var(--fluid-spacing);
}

/* 8. Complete design token system */
:root {
    /* Breakpoints */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    
    /* Container widths */
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    
    /* Grid columns */
    --grid-cols: 12;
    --grid-gutter: var(--space-lg);
}

/* Responsive container using variables */
.container {
    width: 100%;
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}
@media (max-width: var(--breakpoint-lg)) {
    .container { max-width: var(--container-lg); }
}
@media (max-width: var(--breakpoint-md)) {
    .container { max-width: var(--container-md); }
}`,
  lineByLine: [
    "Variable declaration uses -- prefix, :root for global scope",
    "Color system variables — primary, secondary, semantic colors",
    "Spacing system based on 8px grid for consistency",
    "Typography scale with rem units for accessibility",
    "Border radius consistent across components",
    "Shadow elevation system for depth",
    "Transition timings and easing curves",
    "Z-index management prevents stacking context conflicts",
    "Component-scoped variables — card component overrides defaults",
    "var() function accesses variable values",
    "Fallback values provide graceful degradation",
    "Variables work in calc() for dynamic computations",
    "Media queries can update variables (responsive theming)",
    "Theme switching via data attribute",
    "JS can read/write variables for dynamic theming",
    "Nested variables create derived color systems",
    "Houdini @property enables variable animation"
  ],
  simpleMeaning: "CSS variables store reusable values (colors, sizes). Change one place, update everywhere. Enable themes, responsive design, and dynamic updates.",
  output: "Consistent design system across entire site. Dark/light theme switching. Responsive values that update at breakpoints. Dynamic theming via JavaScript.",
  note: "Use :root for global variables. Provide fallbacks. Variables can be updated in media queries. Use with calc() for fluid values. @property enables animation."
},

// ==================== ADVANCED TOPIC 16: CSS CONTAINER QUERIES ====================
{
  name: "16. CSS CONTAINER QUERIES — Component-Level Responsiveness",
  description: "Container Queries represent the biggest revolution in responsive design since media queries, enabling components to respond to their parent container size rather than viewport size. Traditional media queries can't help when a component appears in different contexts (sidebar vs main content). Container queries solve this by letting components style themselves based on their containing element's dimensions. Use container-type to establish a query container (size, inline-size, block-size, normal). container-name gives the container an identifier for targeted queries. @container syntax similar to @media with conditions (min-width, max-width, etc.). style queries can check computed styles on container. Container query units (cqw, cqh, cqi, cqb, cqmin, cqmax) are percentage units relative to container dimensions. Perfect for component libraries, cards, widgets, and reusable UI elements that need to adapt to any placement.",
  code: `/* ========== ESTABLISHING CONTAINERS ========== */
/* Basic container — enables size queries based on inline size (width) */
.card-container {
    container-type: inline-size;
    /* Any element can become a query container */
}

/* Named container for targeted queries */
.widget-container {
    container-type: inline-size;
    container-name: widget;
}

/* Size container (both width and height) */
.square-container {
    container-type: size;
    container-name: square;
}

/* Inline-size container (width only — most common) */
.flexible-card {
    container-type: inline-size;
    container-name: card;
}

/* ========== BASIC CONTAINER QUERIES ========== */
/* Unnamed container query (affects nearest ancestor with container-type) */
@container (min-width: 400px) {
    .card {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    .card-image {
        width: 150px;
    }
}

@container (max-width: 399px) {
    .card {
        display: block;
    }
    .card-image {
        width: 100%;
    }
}

/* ========== NAMED CONTAINER QUERIES ========== */
/* Target specific container by name */
@container widget (min-width: 500px) {
    .widget-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@container card (min-width: 300px) and (max-width: 600px) {
    .card-title {
        font-size: 1.25rem;
    }
}

/* ========== CONTAINER QUERY UNITS ========== */
/* cqw = 1% of container width
   cqh = 1% of container height
   cqi = 1% of container inline size (width in horizontal writing)
   cqb = 1% of container block size (height in horizontal writing)
   cqmin = min(cqi, cqb)
   cqmax = max(cqi, cqb) */

.responsive-text {
    /* Font size scales with container width */
    font-size: clamp(12px, 5cqi, 24px);
    
    /* Padding proportional to container */
    padding: 2cqi;
    
    /* Border radius based on container */
    border-radius: 1cqmin;
}

/* ========== PRACTICAL CARD COMPONENT ========== */
/* This card adapts to any container it's placed in */
.component-card {
    container-type: inline-size;
    container-name: demo-card;
    background: white;
    border-radius: 12px;
    overflow: hidden;
}

/* Narrow container (< 300px) — stacked layout */
@container demo-card (max-width: 299px) {
    .card-content {
        padding: 16px;
    }
    .card-title {
        font-size: 1.125rem;
    }
    .card-description {
        display: none;  /* Hide description on very narrow */
    }
    .card-button {
        width: 100%;
        text-align: center;
    }
}

/* Medium container (300px - 500px) — horizontal with small image */
@container demo-card (min-width: 300px) and (max-width: 500px) {
    .card-wrapper {
        display: flex;
        gap: 12px;
    }
    .card-image {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
    }
    .card-content {
        flex: 1;
        padding: 12px;
    }
}

/* Wide container (> 500px) — full horizontal layout */
@container demo-card (min-width: 501px) {
    .card-wrapper {
        display: flex;
        gap: 20px;
    }
    .card-image {
        width: 120px;
        height: 120px;
        flex-shrink: 0;
    }
    .card-content {
        flex: 1;
        padding: 20px;
    }
    .card-title {
        font-size: 1.5rem;
    }
    .card-button {
        align-self: flex-start;
    }
}

/* ========== DASHBOARD WIDGET EXAMPLE ========== */
.dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.dashboard-widget {
    container-type: inline-size;
    container-name: widget;
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    padding: 16px;
}

@container widget (min-width: 350px) {
    .widget-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .widget-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    }
}

@container widget (max-width: 349px) {
    .widget-header {
        flex-direction: column;
        gap: 8px;
    }
    .widget-stats {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
}

/* ========== STYLE QUERIES (Check computed styles) ========== */
/* Style queries can check CSS properties on container */
@container style(--theme: dark) {
    .widget {
        background: #1a1a2e;
        color: white;
    }
}

/* Using container style queries for context-aware styling */
.callout {
    container-type: inline-size;
    container-name: callout;
    --variant: info;
}

@container callout style(--variant: info) {
    .callout-icon { content: "ℹ️"; }
    .callout-border { border-left-color: blue; }
}

@container callout style(--variant: warning) {
    .callout-icon { content: "⚠️"; }
    .callout-border { border-left-color: orange; }
}

/* ========== NESTED CONTAINER QUERIES ========== */
/* Containers can be nested, each responding to its own parent */
.outer-container {
    container-type: inline-size;
    container-name: outer;
}

.inner-component {
    container-type: inline-size;
    container-name: inner;
}

@container outer (min-width: 800px) {
    .inner-component {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

@container inner (max-width: 200px) {
    .inner-item {
        font-size: 12px;
    }
}

/* ========== COMPLETE COMPONENT LIBRARY EXAMPLE ========== */
/* Product card that works anywhere — sidebar, main content, grid */
.product-card {
    container-type: inline-size;
    container-name: product;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Base styles (mobile/default) */
.product-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
.product-info {
    padding: 16px;
}
.product-title {
    font-size: 1rem;
    margin-bottom: 8px;
}
.product-price {
    font-weight: bold;
    color: var(--color-primary);
}

/* Medium container — horizontal layout */
@container product (min-width: 300px) {
    .product-card {
        display: flex;
    }
    .product-image {
        width: 120px;
        aspect-ratio: 1 / 1;
    }
    .product-info {
        flex: 1;
    }
}

/* Large container — enhanced horizontal with details */
@container product (min-width: 500px) {
    .product-image {
        width: 180px;
    }
    .product-description {
        display: block;
        font-size: 0.875rem;
        color: #666;
        margin-top: 8px;
    }
    .product-actions {
        display: flex;
        gap: 12px;
        margin-top: 16px;
    }
}

/* ========== CONTAINER QUERIES VS MEDIA QUERIES ========== */
/* Media query (viewport-based) — component can't adapt to placement */
@media (min-width: 768px) {
    .card { display: flex; }  /* Works everywhere same way */
}

/* Container query (container-based) — component adapts to its parent */
.card-container {
    container-type: inline-size;
}
@container (min-width: 400px) {
    .card { display: flex; }  /* Adapts to container, not viewport */
}

/* ========== PRACTICAL USE CASES ========== */

/* 1. Email subscription form that adapts to sidebar or main content */
.subscribe-form {
    container-type: inline-size;
    container-name: form;
}

@container form (min-width: 350px) {
    .form-group {
        display: flex;
        gap: 12px;
    }
    .form-input {
        flex: 1;
    }
}

/* 2. Navigation menu that becomes vertical in narrow containers */
.nav-component {
    container-type: inline-size;
    container-name: nav;
}

@container nav (max-width: 500px) {
    .nav-list {
        flex-direction: column;
        gap: 8px;
    }
}

/* 3. Chart that changes complexity based on available space */
.data-chart {
    container-type: inline-size;
    container-name: chart;
}

@container chart (max-width: 300px) {
    .chart-labels { display: none; }
    .chart-minimal { display: block; }
}`,
  lineByLine: [
    "container-type: inline-size — enables container queries based on width",
    "container-name gives container an identifier for targeted queries",
    "@container (min-width: 400px) — query that activates when container is 400px+",
    "Component styles change based on its parent container, not viewport",
    "Container query units (cqw, cqh, cqi) relative to container size",
    "Nested containers can have independent query contexts",
    "Style queries check computed CSS properties on container",
    "Perfect for component libraries — cards adapt to any placement",
    "Dashboard widgets that reorganize based on available space",
    "Products cards that change layout in sidebar vs main content"
  ],
  simpleMeaning: "Container queries let components respond to their parent size, not screen size. Perfect for reusable components that appear in different contexts.",
  output: "Cards that reorganize themselves naturally in sidebars, main content, or grids. Dashboard widgets that adapt to available space. True component independence.",
  note: "Use container queries for component libraries and widgets. Media queries for entire page layouts. container-type: inline-size is most common."
},

// ==================== ADVANCED TOPIC 17: CSS @LAYER (Cascade Layers) ====================
{
  name: "17. CSS @LAYER — Managing Specificity at Scale",
  description: "Cascade Layers revolutionize CSS specificity management by letting developers control the order of entire stylesheet sections. Traditional CSS specificity wars often lead to !important overrides and complex selector hierarchies. @layer solves this by giving each layer a priority order — styles in later layers override earlier layers regardless of selector specificity. Define layer order with @layer statement before any styles. Layers can be nested for hierarchical organization. Unlayered styles (outside any @layer) have highest priority. Styles in same layer still use normal specificity rules. Perfect for managing frameworks (reset, base, components, utilities) and preventing third-party CSS conflicts. Can be defined across multiple files — import order determines precedence.",
  code: `/* ========== DEFINING LAYER ORDER ========== */
/* The order here determines precedence — later layers override earlier */
@layer reset, theme, components, utilities, overrides;

/* ========== RESET LAYER (Lowest priority) ========== */
@layer reset {
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        line-height: 1.5;
    }
    
    img {
        max-width: 100%;
        display: block;
    }
}

/* ========== THEME LAYER ========== */
@layer theme {
    :root {
        --primary: #3498db;
        --secondary: #2ecc71;
        --text: #333;
    }
    
    body {
        font-family: 'Inter', system-ui, sans-serif;
        color: var(--text);
    }
    
    a {
        color: var(--primary);
        text-decoration: none;
    }
}

/* ========== COMPONENTS LAYER ========== */
@layer components {
    .button {
        display: inline-block;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .button-primary {
        background: var(--primary);
        color: white;
    }
    
    .card {
        background: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .card-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 8px;
    }
}

/* ========== UTILITIES LAYER (Higher priority than components) ========== */
@layer utilities {
    .text-center { text-align: center; }
    .text-large { font-size: 1.25rem; }
    .mt-4 { margin-top: 16px; }
    .mb-4 { margin-bottom: 16px; }
    .p-4 { padding: 16px; }
    .rounded-lg { border-radius: 12px; }
    .shadow-md { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .flex { display: flex; }
    .grid { display: grid; }
}

/* ========== OVERRIDES LAYER (Highest priority) ========== */
@layer overrides {
    /* Emergency fixes that need to override everything */
    .button-primary {
        background: #ff0000 !important;  /* !important still works but avoid */
    }
}

/* ========== NESTED LAYERS ========== */
@layer framework {
    @layer framework.reset {
        * { margin: 0; }
    }
    
    @layer framework.components {
        .btn { padding: 8px 16px; }
    }
}

/* Access nested layer: @layer framework.components */

/* ========== LAYERS WITH IMPORT ========== */
/* In CSS file:
   @import 'reset.css' layer(reset);
   @import 'theme.css' layer(theme);
   @import 'components.css' layer(components);
*/

/* ========== LAYING OUT STYLES WITHOUT @LAYER ========== */
/* Styles declared without @layer have highest priority */
/* They override all layered styles regardless of specificity */

/* This will override any layered .button rule */
.button {
    background: purple !important;  /* Actually don't use !important */
}

/* ========== PRACTICAL EXAMPLE — Framework Integration ========== */
/* Use layers to safely customize frameworks without fighting specificity */

/* Define layer order first */
@layer tailwind, components, custom;

/* Import framework (imaginary) */
@import 'tailwind.css' layer(tailwind);

/* Your components (overrides tailwind) */
@layer components {
    .btn {
        padding: 12px 24px;
        border-radius: 8px;
    }
}

/* Your custom styles (overrides components) */
@layer custom {
    .btn-primary {
        background: #3498db;
    }
}

/* ========== NON-LAYERED STYLES (Emergency Overrides) ========== */
/* These have highest priority for critical fixes */
.fix-urgent {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
}

/* ========== LAYER ORDER SCENARIOS ========== */
/* Scenario 1: Framework reset then custom styles */
@layer reset, base, components;
@layer components { .btn { ... } }
@layer base { .btn { ... } }  /* This overrides components because base is later? Wait, order matters */

/* Actually, order is defined by the initial @layer statement */
/* @layer reset, base, components — components has highest priority */

/* Scenario 2: Conditional layers */
@media (min-width: 768px) {
    @layer responsive {
        .grid { grid-template-columns: repeat(2, 1fr); }
    }
}

/* ========== DEBUGGING LAYERS ========== */
/* In DevTools, you can see which layer a style comes from */
/* Helps debug specificity issues */

/* ========== BEST PRACTICES ========== */
/* 1. Always declare layer order at the top of your CSS */
@layer reset, base, components, utilities;

/* 2. Use meaningful layer names */
@layer typography, layout, components, utilities;

/* 3. Keep layer hierarchy shallow (avoid too many nested layers) */
@layer framework { @layer core, theme; }  /* Fine but can get complex */

/* 4. Use layers for third-party code integration */
@tailwind base layer(tailwind-base);
@tailwind components layer(tailwind-components);
@tailwind utilities layer(tailwind-utilities);

@layer custom {
    /* Your styles override Tailwind */
}`,
  lineByLine: [
    "@layer reset, theme, components, utilities — defines layer order (later = higher priority)",
    "Each @layer block contains styles for that layer",
    "Styles in later layers override earlier layers regardless of specificity",
    "Nested layers provide hierarchical organization",
    "Unlayered styles (outside any @layer) have highest priority",
    "Perfect for managing framework conflicts and scaling CSS",
    "Great for organizing reset, base, components, utilities",
    "Prevents specificity wars and !important abuse"
  ],
  simpleMeaning: "@layer organizes CSS by priority order — later layers override earlier layers regardless of selector specificity. Perfect for managing frameworks and large codebases.",
  output: "Predictable style precedence without specificity calculations. Safe framework customization. Organized stylesheet architecture.",
  note: "Always define layer order first. Put reset first, then base, then components, then utilities. Unlayered styles override all layers."
},

// ==================== ADVANCED TOPIC 18: CSS PERFORMANCE OPTIMIZATION ====================
{
  name: "18. CSS PERFORMANCE OPTIMIZATION",
  description: "CSS performance is critical for fast-loading, smooth-interaction websites. Critical CSS inlining extracts above-the-fold styles and embeds them directly in HTML <head> for immediate rendering. Non-critical CSS loads asynchronously to avoid render blocking. Reduce CSS file size by minification (remove whitespace, comments), compression (gzip/brotli), and removing unused CSS via tools like PurgeCSS. Use CSS containment (contain property) to isolate subtrees, reducing browser reflow/repaint costs. Animate only transform and opacity — these properties use GPU compositing, avoiding expensive layout recalculations. will-change hints browser about upcoming animations for optimization. Reduce selector complexity — browsers match selectors right-to-left, so keep specificity low and avoid deep nesting. Use CSS variables for recurring values to reduce code duplication. Lazy load non-critical stylesheets with media=\"print\" then onload switching. Use content-visibility: auto for off-screen elements — browser skips rendering until needed. Monitor CSS performance with Lighthouse, Chrome DevTools Coverage tab, and Performance panel.",
  code: `/* ========== CRITICAL CSS INLINING ========== */
/* Critical CSS (above-the-fold) — inline in <style> tag in <head> */
/* Non-critical CSS — load asynchronously */

<!-- HTML example -->
<head>
    <!-- Inline critical CSS -->
    <style>
        /* Header, hero section, above-the-fold content */
        header { background: #333; padding: 1rem; }
        .hero { font-size: 2rem; margin-top: 2rem; }
    </style>
    
    <!-- Non-critical CSS loaded asynchronously -->
    <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>

/* ========== CONTAINMENT — REDUCE REFLOW ========== */
/* contain property tells browser which changes won't affect outside */
.element {
    contain: layout;           /* Isolates layout — changes don't affect outside */
    contain: paint;            /* Elements outside container aren't painted */
    contain: size;             /* Size doesn't depend on children */
    contain: content;          /* All containment types except size */
    contain: strict;           /* All containment types */
    
    /* Common patterns */
    contain: layout paint;     /* Good for card components */
    content-visibility: auto;   /* Skips rendering off-screen elements */
}

/* content-visibility — dramatic performance improvement for long lists */
.long-list-item {
    content-visibility: auto;
    contain-intrinsic-size: 0 200px;  /* Estimated size before render */
}

/* ========== ANIMATION PERFORMANCE ========== */
/* GOOD — animating transform and opacity (GPU accelerated) */
.good-animation {
    transition: transform 0.3s ease, opacity 0.3s ease;
}
.good-animation:hover {
    transform: translateY(-10px) scale(1.05);
    opacity: 0.9;
}

/* BAD — animating layout properties (causes repaint/reflow) */
.bad-animation {
    transition: width 0.3s ease, height 0.3s ease, top 0.3s ease, left 0.3s ease;
}
.bad-animation:hover {
    width: 200px;
    height: 200px;
    top: 10px;
    left: 10px;
}

/* will-change — hint browser about upcoming animations */
.will-animate {
    will-change: transform;
    will-change: opacity, transform;
    /* Use sparingly — don't overuse on many elements */
}

/* ========== SELECTOR PERFORMANCE ========== */
/* Good — simple, specific enough, right-to-left friendly */
.good-selector {
    /* Benefits: simple class selector */
}
.nav-item a { }           /* 2 selectors, clear relationship */
.card-title { }           /* Single class */

/* Bad — overly complex selectors */
.bad-selector {
    /* Causes: deep nesting, universal selectors, complex attributes */
}
body div main section article .card { }  /* Too deep */
* > * > * > .something { }               /* Universal selector chain */
[data-attribute="value"] ~ .class + .class { } /* Complex combinators */

/* ========== MINIFICATION ========== */
/* Before minification */
.button {
    background-color: #3498db;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
}

/* After minification (run through build tool) */
.button{background-color:#3498db;color:#fff;padding:12px 24px;border-radius:8px}

/* ========== PURGING UNUSED CSS ========== */
/* Tailwind CSS + PurgeCSS configuration example */
/*
// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: { extend: {} },
    plugins: []
}
*/

/* Unused CSS automatically removed in production */

/* ========== CSS-IN-JS PERFORMANCE ========== */
/* Zero runtime CSS-in-JS (compile-time) — better performance */
/* Linaria, vanilla-extract compile to static CSS at build time */

/* ========== REDUCE REPAINT AREAS ========== */
/* Stacking contexts isolate paint areas */
.stack-context {
    position: relative;     /* Creates new stacking context */
    z-index: 1;
    will-change: transform; /* Also creates stacking context */
}

/* Transform instead of position for movement */
/* GOOD */
.move-gpu {
    transform: translateX(100px);
}

/* BAD — triggers reflow */
.move-cpu {
    left: 100px;  /* position changes cause layout recalculation */
}

/* ========== ASYNC LOADING PATTERNS ========== */
/* Load CSS only when needed (e.g., after interaction) */
<link rel="preload" href="print.css" as="style" media="print" onload="this.media='all'">

/* Load CSS for specific media query */
<link rel="stylesheet" href="mobile.css" media="(max-width: 768px)" onload="this.media='all'">

/* ========== FONT LOADING OPTIMIZATION ========== */
/* Use font-display to control flash of invisible text */
@font-face {
    font-family: 'CustomFont';
    src: url('font.woff2') format('woff2');
    font-display: swap;  /* Show fallback until font loads */
    /* Options: auto, block, swap, fallback, optional */
}

/* Preload critical fonts */
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

/* ========== REDUCE CSS COMPLEXITY ========== */
/* Use CSS Grid and Flexbox instead of complex positioning */
/* Modern layout techniques reduce layout thrashing */

/* Simple grid instead of floats and clearfixes */
.layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* ========== DEVTools COVERAGE ========== */
/* Chrome DevTools → Coverage tab → Record coverage */
/* Shows unused CSS bytes — helps identify what to purge */

/* ========== PRACTICAL PERFORMANCE CHECKLIST ========== */
/*
1. Inline critical CSS
2. Lazy load non-critical CSS
3. Minify CSS files
4. Compress with gzip/brotli
5. Purge unused CSS
6. Use contain and content-visibility
7. Animate only transform/opacity
8. Avoid deep selector nesting
9. Use CSS Grid/Flexbox for layouts
10. Monitor with Lighthouse
*/

/* ========== CONTENT-VISIBILITY EXAMPLE ========== */
/* Dramatically improves scrolling performance on long lists */
.news-feed-item {
    content-visibility: auto;
    contain-intrinsic-size: 0 300px;  /* Estimated height */
    margin-bottom: 20px;
    padding: 20px;
    border-bottom: 1px solid #eee;
}

/* ========== LAYOUT THRASHING PREVENTION ========== */
/* Read layout properties from DOM as few times as possible */
// BAD JavaScript (causes layout thrashing)
/*
elements.forEach(el => {
    const height = el.offsetHeight;  // Read
    el.style.height = height + 10 + 'px';  // Write (invalidates)
    // Next iteration causes browser to recalculate
});

// GOOD JavaScript (batch reads before writes)
const heights = elements.map(el => el.offsetHeight);
elements.forEach((el, i) => {
    el.style.height = heights[i] + 10 + 'px';
});
*/`,
  lineByLine: [
    "Critical CSS inlining eliminates render-blocking CSS",
    "contain property isolates elements, preventing reflow propagation",
    "content-visibility: auto skips rendering off-screen elements",
    "animate only transform and opacity — GPU accelerated",
    "will-change hints browser about coming animations",
    "Simplify selectors — browsers match right-to-left",
    "Minification reduces file size by 30-50%",
    "PurgeCSS removes unused CSS from production",
    "font-display: swap prevents invisible text during font loading",
    "DevTools Coverage tab identifies unused CSS"
  ],
  simpleMeaning: "Optimize CSS by inlining critical styles, animating only transform/opacity, using content-visibility for long lists, and removing unused CSS.",
  output: "Faster page loads, smoother animations, reduced browser reflow, better Core Web Vitals scores (LCP, FCP, CLS).",
  note: "Always measure before optimizing — use Lighthouse and Coverage tab. content-visibility is game-changing for long scrolls. animate only transform/opacity."
},

// ==================== ADVANCED TOPIC 19: CSS @SCOPE (Style Encapsulation) ====================
{
  name: "19. CSS @SCOPE — Encapsulated Style Boundaries",
  description: "@scope rule creates style encapsulation boundaries, limiting selector reach to a specific DOM subtree — prevents styles from leaking out or being affected by outside styles. Similar to Shadow DOM but with simpler syntax. Define donut scope with both start and end boundaries for styles that apply everywhere except excluded subtrees. Scoped styles still cascade through normal rules but respect the boundary. Multiple @scope rules can coexist. Great for component-style encapsulation without Web Components complexity. Especially useful in CMS environments where global styles might interfere. Works with nesting for cleaner organization. The :scope pseudo-class references the scope root element. Can be used with @layer for priority management.",
  code: `/* ========== BASIC @SCOPE ========== */
/* Styles within @scope only apply to matching elements inside .component */
@scope (.component) {
    /* Only applies to .title INSIDE .component */
    .title {
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    /* Only applies to button INSIDE .component */
    button {
        background: #3498db;
        color: white;
        border: none;
        padding: 8px 16px;
    }
    
    /* Nested scope */
    @scope (.nested) {
        .nested-title {
            font-size: 1rem;
        }
    }
}

/* ========== DONUT SCOPE (Exclude subtrees) ========== */
/* Scope applies everywhere EXCEPT within .ignore */
@scope (.container) to (.ignore) {
    /* Styles apply to all .container descendants, but not inside .ignore */
    p {
        margin-bottom: 1rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
}

/* Multiple excluded scopes */
@scope (.main) to (.exclude-1, .exclude-2) {
    /* Styles apply everywhere in .main except .exclude-1 and .exclude-2 */
}

/* ========== :SCOPE PSEUDO-CLASS ========== */
/* References the scope root element */
@scope (.card) {
    /* :scope refers to the .card element itself */
    :scope {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    /* Selects immediate children of the scope root */
    > .card-header {
        font-weight: bold;
        border-bottom: 1px solid #eee;
    }
    
    /* Alternately reference scope root */
    :scope > .card-content {
        padding: 20px;
    }
}

/* ========== PRACTICAL COMPONENT EXAMPLE ========== */
/* Component with complete style isolation */
@scope (.user-card) {
    /* Component root styles */
    :scope {
        display: flex;
        gap: 16px;
        padding: 20px;
        background: white;
        border-radius: 12px;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    
    :scope:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.1);
    }
    
    /* Child styles isolated to this component */
    .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }
    
    .name {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 4px;
    }
    
    .email {
        font-size: 0.875rem;
        color: #666;
    }
    
    /* Nested scope for sub-component */
    @scope (.user-stats) {
        :scope {
            display: flex;
            gap: 12px;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid #eee;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-value {
            font-weight: bold;
            font-size: 1.125rem;
        }
    }
}

/* ========== PREVENTING STYLE LEAKS ========== */
/* Styles inside @scope won't affect elements outside */
@scope (.widget) {
    /* This h2 styling only affects h2 inside .widget */
    h2 {
        font-size: 1.25rem;
        color: #333;
    }
}

/* Outside .widget, h2 remains unstyled by this rule */

/* ========== AVOIDING OUTSIDE STYLE INFLUENCE ========== */
/* @scope also protects from outside styles overriding scoped ones */
/* Useful for CMS widgets that need consistent appearance */

@scope (.embedded-widget) {
    /* Reset inside the widget to prevent outside influence */
    :scope {
        /* Reset common properties */
        font-family: system-ui, sans-serif;
        line-height: 1.5;
        color: #333;
    }
    
    /* Widget elements */
    .title {
        font-size: 1.25rem;
        font-weight: bold;
    }
}

/* ========== @SCOPE WITH NESTING ========== */
@scope (.component) {
    :scope {
        padding: 20px;
    }
    
    & .header {
        font-size: 1.5rem;
        
        & .title {
            color: var(--primary);
        }
    }
    
    &:hover {
        background: #f5f5f5;
    }
}

/* ========== MULTIPLE SCOPES ========== */
/* Different components can have same class names, scoped independently */
@scope (.news-card) {
    .title { font-size: 1.25rem; font-weight: bold; }
    .description { font-size: 0.875rem; color: #666; }
}

@scope (.product-card) {
    .title { font-size: 1rem; font-weight: 600; }
    .description { font-size: 0.75rem; color: #999; }
}

/* ========== SCREEN READER SPECIFIC SCOPE ========== */
@scope (.sr-only) to (.no-sr) {
    /* Styles only apply to elements that aren't inside .no-sr */
    .label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
}

/* ========== DYNAMIC SCOPES ========== */
/* Scope can be defined by any selector, including classes, IDs, attributes */
@scope ([data-scope="sidebar"]) {
    .widget-title {
        font-size: 1rem;
        padding: 8px;
    }
}

@scope ([data-scope="dashboard"]) {
    .widget-title {
        font-size: 1.25rem;
        padding: 16px;
        border-bottom: 2px solid;
    }
}

/* ========== PRACTICAL USE CASE: THEMEABLE WIDGET ========== */
/* Widget that works anywhere without style conflicts */
@scope (.trust-widget) {
    /* Base styles */
    :scope {
        display: block;
        font-family: system-ui;
        background: var(--widget-bg, #f9f9f9);
        border-radius: 8px;
        padding: 16px;
    }
    
    /* Donut scope for nested trusted content */
    @scope to (.trusted-content) {
        /* Sanitize content outside trusted block */
        a {
            color: inherit;
            text-decoration: none;
        }
        
        img {
            max-width: 100%;
            height: auto;
        }
    }
    
    /* Trusted content zone (allowed to use own styles) */
    .trusted-content {
        /* This area can have its own styles */
    }
}`,
  lineByLine: [
    "@scope (.component) — limits styles to elements inside .component",
    "@scope (.container) to (.ignore) — donut scope excludes .ignore subtree",
    ":scope — references the scope root element",
    "Prevents style leakage — only affects within boundary",
    "Also protects from outside styles overriding scoped ones",
    "Multiple components can use same class names, scoped independently",
    "Great for CMS widgets, embedded content, component libraries"
  ],
  simpleMeaning: "@scope creates style boundaries — styles only apply inside the scope, preventing leakage and outside interference. Perfect for component isolation without Shadow DOM.",
  output: "Truly encapsulated components. No more class name conflicts. Styles that stay where they belong. Reusable components anywhere.",
  note: "Use @scope for component-style encapsulation. :scope references the root. Donut scopes (to keyword) exclude subtrees."
},

// ==================== ADVANCED TOPIC 20: CSS @PROPERTY (Houdini Custom Properties) ====================
{
  name: "20. CSS @PROPERTY — Typed CSS Variables with Animation",
  description: "@property (part of CSS Houdini) registers custom properties with specific types, initial values, and inheritance behavior — enabling CSS variable animation and validation. Unlike regular CSS variables (untyped strings), @property variables understand types: <length>, <number>, <percentage>, <color>, <angle>, <time>, <resolution>, <integer>, etc. Initial values provide fallbacks. Inherits determines if property cascades to children. Registered variables can be animated smoothly using transitions and keyframes (unlike regular variables). Enables creating animatable design tokens. Syntax can be a single type or complex via | for multiple types (e.g., '<length> | <percentage>'). Supports + for space-separated lists and # for comma-separated lists (e.g., '<color>#'). Perfect for creating custom animated properties like gradient angles, component states, and design tokens that transition smoothly.",
  code: `/* ========== BASIC @PROPERTY REGISTRATION ========== */
/* Register a color variable that can be animated */

@property --brand-color {
    syntax: '<color>';
    initial-value: #3498db;
    inherits: false;
}

.element {
    background: var(--brand-color);
    transition: --brand-color 0.3s ease;
}

.element:hover {
    --brand-color: #e74c3c;  /* Smoothly animates from blue to red */
}

/* ========== LENGTH PROPERTY ========== */
@property --card-width {
    syntax: '<length>';
    initial-value: 200px;
    inherits: false;
}

.card {
    width: var(--card-width);
    transition: --card-width 0.5s ease;
}

.card:hover {
    --card-width: 300px;  /* Animates width smoothly */
}

/* ========== ANGLE PROPERTY (for gradients) ========== */
@property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.animated-gradient {
    background: linear-gradient(var(--gradient-angle), red, blue);
    transition: --gradient-angle 0.5s ease;
}

.animated-gradient:hover {
    --gradient-angle: 360deg;
}

/* ========== NUMBER PROPERTY ========== */
@property --opacity-level {
    syntax: '<number>';
    initial-value: 1;
    inherits: false;
}

.fade-element {
    opacity: var(--opacity-level);
    transition: --opacity-level 0.3s ease;
}

.fade-element:hover {
    --opacity-level: 0.5;
}

/* ========== PERCENTAGE PROPERTY ========== */
@property --scale-factor {
    syntax: '<percentage>';
    initial-value: 100%;
    inherits: false;
}

.scale-element {
    transform: scale(calc(var(--scale-factor) / 100));
    transition: --scale-factor 0.3s ease;
}

.scale-element:hover {
    --scale-factor: 120%;
}

/* ========== COMPLEX SYNTAX (multiple types) ========== */
@property --responsive-size {
    syntax: '<length> | <percentage>';
    initial-value: 200px;
    inherits: false;
}

.responsive-element {
    width: var(--responsive-size);
}

/* ========== LIST SYNTAX (multiple values) ========== */
@property --shadow-offsets {
    syntax: '<length>#';
    initial-value: 2px 2px 4px;
    inherits: false;
}

.shadow-element {
    box-shadow: var(--shadow-offsets) rgba(0,0,0,0.3);
}

/* Space-separated list */
@property --padding-values {
    syntax: '<length>+';
    initial-value: 8px 16px;
    inherits: false;
}

/* ========== INHERITS BEHAVIOR ========== */
@property --inherited-color {
    syntax: '<color>';
    initial-value: red;
    inherits: true;  /* Children will inherit this variable */
}

@property --non-inherited {
    syntax: '<length>';
    initial-value: 10px;
    inherits: false; /* Children get default, not parent value */
}

/* ========== PRACTICAL ANIMATED COMPONENTS ========== */

/* 1. Animated gradient button */
@property --btn-gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.gradient-button {
    background: linear-gradient(var(--btn-gradient-angle), #667eea, #764ba2);
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    color: white;
    transition: --btn-gradient-angle 0.5s ease;
}

.gradient-button:hover {
    --btn-gradient-angle: 360deg;
}

/* 2. Loading progress bar */
@property --progress-width {
    syntax: '<percentage>';
    initial-value: 0%;
    inherits: false;
}

.progress-bar {
    width: var(--progress-width);
    height: 4px;
    background: #3498db;
    border-radius: 2px;
    transition: --progress-width 0.5s ease;
}

.progress-bar.loading {
    --progress-width: 100%;
}

/* 3. Animated border */
@property --border-hue {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.animated-border {
    border: 2px solid;
    border-image: linear-gradient(var(--border-hue), red, blue, green) 1;
    transition: --border-hue 0.5s ease;
}

.animated-border:hover {
    --border-hue: 360deg;
}

/* 4. Responsive spacing system */
@property --spacing-scale {
    syntax: '<number>';
    initial-value: 1;
    inherits: false;
}

:root {
    --space-unit: 8px;
}

.dynamic-card {
    padding: calc(var(--spacing-scale) * var(--space-unit));
    transition: --spacing-scale 0.3s ease;
}

.dynamic-card.large {
    --spacing-scale: 3;
}

/* 5. Animated appearance/disappearance */
@property --visibility-opacity {
    syntax: '<number>';
    initial-value: 0;
    inherits: false;
}

.fade-transition {
    opacity: var(--visibility-opacity);
    visibility: var(--visibility-opacity) > 0 ? visible : hidden;
    transition: --visibility-opacity 0.3s ease;
}

.fade-transition.visible {
    --visibility-opacity: 1;
}

/* ========== COMBINING @PROPERTY WITH MEDIA QUERIES ========== */
@property --responsive-padding {
    syntax: '<length>';
    initial-value: 16px;
    inherits: false;
}

@media (min-width: 768px) {
    :root {
        --responsive-padding: 24px;
    }
}

.container {
    padding: var(--responsive-padding);
}

/* ========== GRADIENT POSITION ANIMATION ========== */
@property --gradient-position {
    syntax: '<percentage>';
    initial-value: 0%;
    inherits: false;
}

.shimmer {
    background: linear-gradient(
        90deg,
        transparent calc(var(--gradient-position) - 20%),
        rgba(255,255,255,0.5) var(--gradient-position),
        transparent calc(var(--gradient-position) + 20%)
    );
    transition: --gradient-position 1s ease;
}

.shimmer:hover {
    --gradient-position: 100%;
}

/* ========== DEFAULT VALUES VS @PROPERTY ========== */
/* Regular CSS variable (untyped, can't animate) */
:root {
    --color: blue;  /* String value, can't transition */
}

/* Registered property (typed, can animate) */
@property --animated-color {
    syntax: '<color>';
    initial-value: blue;
    inherits: false;
}

/* ========== BROWSER SUPPORT DETECTION ========== */
@supports (background: paint(something)) {
    /* Houdini supported */
    .advanced-feature {
        /* Use @property features */
    }
}

/* Fallback for non-supporting browsers */
.element {
    background: #3498db;  /* Fallback */
    background: var(--dynamic-color, #3498db);
}`,
  lineByLine: [
    "@property registers typed CSS variables with initial values",
    "syntax defines the variable type (color, length, angle, etc.)",
    "initial-value provides default when variable not set",
    "inherits determines if children inherit the value",
    "Registered variables can animate smoothly in transitions",
    "Perfect for animated gradients, counters, design tokens",
    "Multiple types via | (e.g., '<length> | <percentage>')",
    "Lists via + (space-separated) or # (comma-separated)"
  ],
  simpleMeaning: "@property creates typed CSS variables that can be animated smoothly — unlike regular variables. Perfect for animated gradients, transitions, and design tokens.",
  output: "Smoothly animating custom properties. Gradient angles that spin. Colors that transition. Border-radius that animates. Complete design token animation.",
  note: "Regular CSS variables are untyped strings and can't animate. @property variables are typed and fully animatable. Use for gradients, counters, and design tokens."
},
      // ==================== ADVANCED CSS FUNCTIONS — COMPLETE GUIDE ====================
{
  name: "CSS FUNCTIONS — Complete Advanced Reference",
  description: "CSS functions are powerful tools that compute values dynamically, transform elements, create effects, and enable responsive designs. Mathematical functions (calc, min, max, clamp, abs, sign, round, mod, rem, sin, cos, tan, asin, acos, atan, atan2, pow, sqrt, hypot, log, exp) enable complex calculations. Color functions (rgb, rgba, hsl, hsla, hwb, lab, lch, oklab, oklch, color, color-mix, color-contrast, color() with relative syntax) create dynamic color systems. Filter functions (blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia) apply visual effects. Transform functions (translate, scale, rotate, skew, matrix, perspective, translate3d, scale3d, rotate3d, matrix3d) modify element visuals. Gradient functions (linear-gradient, radial-gradient, conic-gradient, repeating-linear-gradient, repeating-radial-gradient, repeating-conic-gradient) create smooth color transitions. Shape functions (circle, ellipse, inset, polygon, path) define clip paths and shapes. Grid functions (repeat, minmax, fit-content) simplify grid layouts. Reference functions (var, attr, url, env, constant) access external values. Counter functions (counter, counters) enable automatic numbering. Selector functions (is, where, has, not, nth-child, nth-last-child) provide advanced selection capabilities. Each function opens new possibilities for dynamic, responsive, maintainable CSS.",
  code: `/* ========== 1. MATHEMATICAL FUNCTIONS ========== */

/* calc() — Basic arithmetic with mixed units */
.calc-example {
    width: calc(100% - 40px);                    /* Subtraction */
    width: calc(50% + 20px);                     /* Addition */
    width: calc(100vw * 0.8);                    /* Multiplication (one unit type) */
    width: calc(100% / 3);                       /* Division */
    margin: calc(10px + 2rem - 0.5vw);          /* Multiple operations */
    font-size: calc(16px + 0.5vw);               /* Fluid base + viewport */
    padding: calc((var(--spacing) * 2) + 8px);   /* With CSS variables */
    height: calc(100vh - 80px);                  /* Viewport minus header */
    /* Order of operations: (), then * and /, then + and - */
}

/* min() — Returns the smallest value */
.min-example {
    width: min(100%, 1200px);                    /* Responsive container */
    font-size: min(48px, 8vw);                   /* Never exceeds 48px */
    padding: min(40px, 5vw);                     /* Caps at 40px */
    gap: min(32px, 4vw);                         /* Responsive gap with max */
}

/* max() — Returns the largest value */
.max-example {
    width: max(250px, 20%);                      /* At least 250px */
    font-size: max(14px, 2vw);                   /* Accessibility minimum */
    padding: max(12px, 3vw);                     /* Minimum padding */
    height: max(200px, 30vh);                    /* Minimum height guarantee */
}

/* clamp() — Minimum, ideal, maximum (most powerful!) */
.clamp-example {
    font-size: clamp(16px, 4vw, 48px);           /* Responsive typography */
    padding: clamp(12px, 3vw, 32px);             /* Fluid spacing */
    width: clamp(280px, 80%, 1400px);            /* Responsive container */
    gap: clamp(8px, 2vw, 24px);                  /* Fluid gaps */
    border-radius: clamp(4px, 1.5vw, 20px);      /* Responsive corners */
    /* Never below 16px, never above 48px, scales with 4vw between */
}

/* Modern math functions (2023+) */
.round-example {
    width: round(up, 150px, 50px);               /* Round up to nearest 50: 200px */
    width: round(down, 149px, 50px);             /* Round down: 100px */
    width: round(to-zero, -149px, 50px);         /* Round toward zero: -100px */
    width: round(nearest, 147px, 50px);          /* Round to nearest multiple: 150px */
}

.mod-example {
    value: mod(15, 4);                           /* Remainder: 3 (15 ÷ 4 = 3 remainder 3) */
    width: mod(100px, 30px);                     /* 10px remainder */
}

.rem-example {
    value: rem(15, 4);                           /* Same as mod (remainder) */
    width: rem(100px, 30px);                     /* 10px remainder */
}

/* Trigonometric functions */
.sin-cos-tan {
    /* Angles in degrees, gradians, radians, or turns */
    transform: translate(
        calc(cos(45deg) * 100px),                /* 0.707 * 100px = 70.7px */
        calc(sin(45deg) * 100px)                 /* 0.707 * 100px = 70.7px */
    );
    transform: rotate(calc(atan2(100, 100)));    /* Returns 45deg angle */
}

.asin-acos-atan {
    transform: translate(
        calc(asin(0.707) * 100px),               /* arcsin of 0.707 ≈ 45deg */
        calc(acos(0.707) * 100px)                /* arccos of 0.707 ≈ 45deg */
    );
    transform: rotate(calc(atan(1)));            /* arctan of 1 = 45deg */
}

/* Power and exponential functions */
.pow-sqrt-hypot {
    width: calc(pow(10, 2));                     /* 10² = 100 */
    width: sqrt(144);                            /* √144 = 12 */
    width: hypot(3, 4);                          /* √(3² + 4²) = 5 */
}

.exp-log {
    width: exp(1);                               /* e¹ ≈ 2.718 */
    width: log(100, 10);                         /* log₁₀(100) = 2 */
    width: log(e);                               /* natural log, base e */
}

/* abs() and sign() */
.abs-sign {
    width: abs(-50px);                           /* Returns 50px */
    width: abs(50px);                            /* Returns 50px */
    value: sign(-50);                            /* Returns -1 */
    value: sign(0);                              /* Returns 0 */
    value: sign(50);                             /* Returns 1 */
}

/* ========== 2. COLOR FUNCTIONS ========== */

/* RGB/RGBA — Red, Green, Blue, Alpha */
.rgb-example {
    color: rgb(255, 0, 0);                       /* Pure red (0-255) */
    color: rgb(0, 255, 0);                       /* Pure green */
    color: rgb(0, 0, 255);                       /* Pure blue */
    background: rgba(0, 0, 0, 0.5);              /* 50% transparent black */
    color: rgb(255 0 0);                         /* Modern syntax (no commas) */
    color: rgb(255 0 0 / 0.5);                   /* With alpha using slash */
}

/* HSL/HSLA — Hue, Saturation, Lightness, Alpha */
.hsl-example {
    color: hsl(0, 100%, 50%);                    /* Hue 0° = red */
    color: hsl(120, 100%, 50%);                  /* Hue 120° = green */
    color: hsl(240, 100%, 50%);                  /* Hue 240° = blue */
    background: hsla(0, 100%, 50%, 0.5);         /* Semi-transparent red */
    color: hsl(0 100% 50% / 0.5);                /* Modern syntax with alpha */
}

/* HWB — Hue, Whiteness, Blackness */
.hwb-example {
    color: hwb(0, 0%, 0%);                       /* Pure red */
    color: hwb(120, 0%, 0%);                     /* Pure green */
    color: hwb(240, 0%, 0%);                     /* Pure blue */
    color: hwb(0, 50%, 0%);                      /* Light red (50% white) */
    color: hwb(0, 0%, 50%);                      /* Dark red (50% black) */
}

/* LAB — Lightness, A (green-red), B (blue-yellow) */
.lab-example {
    color: lab(50%, 0, 0);                       /* Neutral gray */
    color: lab(50%, 50, 0);                      /* Reddish */
    color: lab(50%, 0, 50);                      /* Yellowish */
    background: lab(30% 20 -30 / 0.5);           /* With alpha */
}

/* LCH — Lightness, Chroma, Hue */
.lch-example {
    color: lch(50%, 0, 0);                       /* Neutral gray */
    color: lch(50%, 50, 0);                      /* Red */
    color: lch(50%, 50, 120);                    /* Green */
    color: lch(50%, 50, 240);                    /* Blue */
    background: lch(70% 40 350 / 0.8);           /* With alpha */
}

/* OKLAB / OKLCH — Improved perceptual color spaces */
.oklab-example {
    color: oklab(0.5, 0, 0);                    /* Neutral */
    color: oklab(0.5, 0.2, 0.1);                /* Warm tone */
    background: oklch(0.6, 0.2, 45deg);          /* Perceptually uniform */
}

/* color() — Wide gamut color space function */
.color-function {
    color: color(display-p3 1 0 0);              /* Display P3 red (more vibrant) */
    color: color(rec2020 0 1 0);                 /* Rec.2020 green (wide gamut) */
    color: color(srgb-linear 0 0 1);             /* sRGB linear blue */
}

/* color-mix() — Mix two colors */
.color-mix {
    background: color-mix(in srgb, red 30%, blue);      /* 30% red, 70% blue */
    background: color-mix(in hsl, red, blue);           /* Equal mix in HSL space */
    background: color-mix(in lch, #3498db 40%, white);  /* 40% blue + 60% white */
    background: color-mix(in oklab, var(--primary), black 20%); /* With variables */
}

/* color-contrast() — Automatically choose readable color */
.color-contrast {
    color: color-contrast(var(--bg) vs black, white, blue);
    /* Picks the color with highest contrast against background */
    color: color-contrast(white vs black, #333, #666);  /* Returns black (highest contrast) */
}

/* Relative color syntax — Modify existing colors */
.relative-color {
    --primary: #3498db;
    /* Lighten by 20% */
    background: oklab(from var(--primary) calc(l + 0.2) c h);
    /* Adjust hue */
    background: hsl(from var(--primary) calc(h + 30) s l);
    /* Change alpha */
    color: rgb(from var(--primary) r g b / 0.5);
    /* Create complementary color */
    background: hsl(from var(--primary) calc(h + 180) s l);
}

/* ========== 3. FILTER FUNCTIONS ========== */

/* blur() — Apply Gaussian blur */
.blur-example {
    filter: blur(0);                             /* No blur */
    filter: blur(2px);                           /* Slight blur */
    filter: blur(10px);                          /* Heavy blur (glassmorphism) */
}

/* brightness() — Adjust lightness */
.brightness-example {
    filter: brightness(0);                       /* Completely black */
    filter: brightness(0.5);                     /* 50% brightness (darker) */
    filter: brightness(1);                       /* Original (100%) */
    filter: brightness(1.5);                     /* 50% brighter */
    filter: brightness(200%);                    /* 200% brightness */
}

/* contrast() — Adjust contrast */
.contrast-example {
    filter: contrast(0);                         /* Flat gray */
    filter: contrast(0.5);                       /* Low contrast */
    filter: contrast(1);                         /* Original */
    filter: contrast(2);                         /* High contrast (punchy) */
}

/* drop-shadow() — Shadow that follows element shape */
.drop-shadow-example {
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
    /* offset-x, offset-y, blur, color */
    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.2));
    /* Multiple shadows */
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)) 
            drop-shadow(0 8px 16px rgba(0,0,0,0.1));
}

/* grayscale() — Convert to black & white */
.grayscale-example {
    filter: grayscale(0);                        /* Full color */
    filter: grayscale(0.5);                      /* 50% grayscale */
    filter: grayscale(1);                        /* 100% grayscale (B&W) */
    filter: grayscale(100%);
}

/* hue-rotate() — Shift all colors */
.hue-rotate-example {
    filter: hue-rotate(0deg);                    /* Original */
    filter: hue-rotate(90deg);                   /* Shift 90 degrees */
    filter: hue-rotate(180deg);                  /* Complementary colors */
    filter: hue-rotate(360deg);                  /* Back to original */
}

/* invert() — Reverse colors */
.invert-example {
    filter: invert(0);                           /* Original */
    filter: invert(0.5);                         /* 50% inverted */
    filter: invert(1);                           /* 100% inverted (negative) */
}

/* opacity() — Transparency (similar to opacity property but part of filter) */
.opacity-example {
    filter: opacity(0.25);                       /* 25% opaque */
    filter: opacity(0.5);                        /* 50% opaque */
    filter: opacity(1);                          /* Fully opaque */
}

/* saturate() — Control color intensity */
.saturate-example {
    filter: saturate(0);                         /* Grayscale */
    filter: saturate(0.5);                       /* Desaturated (50%) */
    filter: saturate(1);                         /* Normal */
    filter: saturate(2);                         /* Vibrant (200%) */
}

/* sepia() — Vintage brown tone */
.sepia-example {
    filter: sepia(0);                            /* Original */
    filter: sepia(0.5);                          /* 50% sepia */
    filter: sepia(1);                            /* Full sepia (vintage) */
}

/* Multiple filters combined */
.multiple-filters {
    filter: brightness(1.1) contrast(120%) saturate(110%);
    filter: grayscale(0.5) blur(2px) sepia(0.3);
    filter: drop-shadow(2px 2px 4px black) brightness(0.9);
}

/* backdrop-filter — Apply filters to background behind element */
.backdrop-filter {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);                 /* Glassmorphism */
    backdrop-filter: brightness(1.2) blur(5px);  /* Multiple filters */
    backdrop-filter: blur(8px) saturate(150%);   /* Frosted glass effect */
}

/* ========== 4. TRANSFORM FUNCTIONS ========== */

/* 2D Transform Functions */
.translate-example {
    transform: translate(50px, 100px);           /* Move X and Y */
    transform: translateX(50px);                 /* Move horizontally */
    transform: translateY(100px);                /* Move vertically */
    transform: translate(50%, 50%);              /* Percentage of self size */
}

.scale-example {
    transform: scale(1.5);                       /* 150% size (both axes) */
    transform: scale(2, 0.5);                    /* X=200%, Y=50% */
    transform: scaleX(2);                        /* Stretch horizontally */
    transform: scaleY(0.5);                      /* Shrink vertically */
}

.rotate-example {
    transform: rotate(45deg);                    /* Clockwise 45 degrees */
    transform: rotate(-90deg);                   /* Counter-clockwise */
    transform: rotate(0.25turn);                 /* Quarter turn */
    transform: rotate(1.57rad);                  /* Radians */
}

.skew-example {
    transform: skew(10deg, 5deg);                /* X-skew, Y-skew */
    transform: skewX(20deg);                     /* Horizontal slant */
    transform: skewY(10deg);                     /* Vertical slant */
}

.matrix-example {
    /* matrix(a, b, c, d, e, f) */
    /* scaleX, skewY, skewX, scaleY, translateX, translateY */
    transform: matrix(1, 0, 0, 1, 50, 100);      /* translate(50, 100) */
    transform: matrix(1.5, 0, 0, 1.5, 0, 0);     /* scale(1.5) */
}

/* 3D Transform Functions */
.translate3d-example {
    transform: translate3d(10px, 20px, 30px);    /* X, Y, Z */
    transform: translateZ(50px);                 /* Move toward viewer */
}

.rotate3d-example {
    transform: rotateX(45deg);                   /* Rotate around X axis */
    transform: rotateY(45deg);                   /* Rotate around Y axis */
    transform: rotateZ(45deg);                   /* Rotate around Z axis (2D rotate) */
    transform: rotate3d(1, 1, 0, 45deg);         /* Custom axis rotation */
}

.scale3d-example {
    transform: scale3d(1.2, 1.2, 1.2);           /* Scale all three axes */
    transform: scaleZ(1.2);                      /* Scale Z-axis */
}

.perspective-example {
    /* perspective() on element (not parent container) */
    transform: perspective(1000px) rotateX(10deg);
    transform: perspective(500px) rotateY(20deg);
}

/* Transform origin — changes pivot point */
.transform-origin {
    transform-origin: center;                    /* Default */
    transform-origin: top left;                  /* Top-left corner */
    transform-origin: 0% 0%;                     /* Same as top left */
    transform-origin: 100% 100%;                 /* Bottom right */
    transform-origin: 50px 100px;                /* Pixel values */
    transform-origin: left 20px bottom 30px;     /* Offset keywords */
}

/* 3D transform styles */
.transform-3d-container {
    transform-style: preserve-3d;                /* Preserve 3D for children */
    perspective: 1000px;                         /* Depth perspective */
    backface-visibility: hidden;                 /* Hide back of element */
}

/* ========== 5. GRADIENT FUNCTIONS ========== */

/* linear-gradient() — Straight line gradient */
.linear-gradient {
    background: linear-gradient(red, blue);               /* Top to bottom */
    background: linear-gradient(to right, red, blue);     /* Left to right */
    background: linear-gradient(45deg, red, blue);        /* Diagonal */
    background: linear-gradient(to bottom right, red, blue);
    background: linear-gradient(red 0%, yellow 50%, green 100%); /* Color stops */
}

/* radial-gradient() — Circular/elliptical from center */
.radial-gradient {
    background: radial-gradient(circle, red, blue);       /* Circular */
    background: radial-gradient(ellipse, red, blue);      /* Elliptical */
    background: radial-gradient(circle at top left, red, blue);
    background: radial-gradient(closest-side, red, blue); /* Size keywords */
    background: radial-gradient(farthest-corner, red, blue);
}

/* conic-gradient() — Rotating around center (pie chart) */
.conic-gradient {
    background: conic-gradient(red, blue);                /* Full circle */
    background: conic-gradient(from 90deg, red, blue);    /* Start at 90deg */
    background: conic-gradient(red 0% 25%, blue 25% 50%, green 50% 100%);
    background: conic-gradient(at 50% 50%, red, blue);    /* Position center */
}

/* repeating-linear-gradient() — Repeat pattern */
.repeating-linear {
    background: repeating-linear-gradient(45deg, red 0px, red 20px, blue 20px, blue 40px);
    background: repeating-linear-gradient(to right, #f0f0f0, #f0f0f0 10px, #e0e0e0 10px, #e0e0e0 20px);
}

/* repeating-radial-gradient() — Radial pattern */
.repeating-radial {
    background: repeating-radial-gradient(circle, red, red 20px, blue 20px, blue 40px);
}

/* repeating-conic-gradient() — Conic pattern */
.repeating-conic {
    background: repeating-conic-gradient(red 0deg, red 10deg, blue 10deg, blue 20deg);
}

/* ========== 6. SHAPE FUNCTIONS (clip-path, offset-path) ========== */

/* circle() — Circular clip shape */
.circle-shape {
    clip-path: circle(50%);                        /* Circle at center */
    clip-path: circle(30% at 50% 50%);             /* Radius 30% at center */
    clip-path: circle(100px at 200px 150px);       /* Pixel circle */
}

/* ellipse() — Elliptical shape */
.ellipse-shape {
    clip-path: ellipse(50% 30% at 50% 50%);        /* X-radius, Y-radius, position */
    clip-path: ellipse(100px 50px at center);
}

/* inset() — Rectangle with optional rounded corners */
.inset-shape {
    clip-path: inset(20px);                        /* 20px from all edges */
    clip-path: inset(20px 30px 40px 50px);         /* Top right bottom left */
    clip-path: inset(20px round 10px);             /* With border-radius */
}

/* polygon() — Custom shape with points */
.polygon-shape {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);  /* Triangle */
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);  /* Rectangle */
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}

/* path() — SVG path for complex shapes */
.path-shape {
    clip-path: path("M0,0 L100,0 L100,100 L0,100 Z");  /* Rectangle */
    clip-path: path("M50,0 A50,50 0 1,1 49,0 Z");      /* Circle */
    offset-path: path("M0,0 Q50,100 100,0");           /* Motion path */
}

/* ========== 7. GRID FUNCTIONS ========== */

/* repeat() — Repeat grid pattern */
.repeat-example {
    grid-template-columns: repeat(3, 1fr);              /* 3 equal columns */
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-template-columns: repeat(auto-fit, 250px);     /* As many as fit */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* minmax() — Minimum and maximum size */
.minmax-example {
    grid-template-columns: minmax(200px, 1fr);          /* Min 200px, max 1fr */
    grid-template-columns: minmax(100px, auto);         /* Min 100px, max auto */
    grid-template-rows: minmax(100px, min-content);
}

/* fit-content() — Size based on content with maximum */
.fit-content-example {
    grid-template-columns: fit-content(300px);          /* Shrink to content, max 300px */
    width: fit-content(80%);                            /* Content width, max 80% */
}

/* ========== 8. REFERENCE FUNCTIONS ========== */

/* var() — CSS Custom Properties */
.var-example {
    :root { --primary: #3498db; --spacing: 1rem; }
    color: var(--primary);                              /* Use variable */
    padding: var(--spacing, 16px);                      /* With fallback */
    margin: calc(var(--spacing) * 2);                   /* In calc() */
}

/* attr() — Get HTML attribute value */
.attr-example {
    /* HTML: <div data-text="Hello"> */
    content: attr(data-text);                           /* Returns "Hello" */
    background: url(attr(data-src url));                /* For URLs */
    width: attr(data-width px);                         /* With unit type */
}

/* url() — Load external resource */
.url-example {
    background-image: url('image.jpg');                 /* Relative path */
    background-image: url('https://example.com/bg.png'); /* Absolute URL */
    background-image: url('data:image/svg+xml,...');    /* Data URI */
    cursor: url('cursor.png'), auto;                    /* Custom cursor */
}

/* env() — Environment variables (safe area insets) */
.env-example {
    padding: env(safe-area-inset-top);                  /* Notch safe area */
    padding: env(safe-area-inset-bottom);
    padding: constant(safe-area-inset-top);             /* Fallback for older iOS */
}

/* ========== 9. COUNTER FUNCTIONS ========== */

/* counter() — Display counter value */
.counter-example {
    /* HTML structure with counter-reset and counter-increment */
    counter-reset: section;                             /* Initialize counter */
    counter-increment: section;                         /* Increment counter */
    content: counter(section);                          /* Display current value */
    content: counter(section, decimal);                 /* With style */
    content: counter(section, upper-roman);             /* Roman numerals */
}

/* counters() — Nested counters */
.counters-example {
    counter-reset: chapter;
    content: counters(chapter, ".");                    /* Hierarchical: 1.1, 1.2 */
    content: counters(chapter, "-", lower-roman);       /* With separator and style */
}

/* ========== 10. SELECTOR FUNCTIONS ========== */

/* :is() — Matches any selector in list */
.is-example {
    :is(header, main, footer) p { }                     /* Same as header p, main p, footer p */
    :is(.card, .post) :is(h2, h3) { }                   /* Nested :is */
    :is(#id, .class, [attr]) { }                        /* Any selector type */
}

/* :where() — Same as :is() but zero specificity */
.where-example {
    :where(header, main, footer) p { }                  /* Zero specificity wins */
    /* Useful for utility styles that should be easily overridden */
}

/* :has() — Parent selector (elements containing children) */
.has-example {
    .card:has(img) { }                                   /* Card containing image */
    section:has(h2, h3) { }                              /* Section with heading */
    .form-group:has(input:invalid) { }                   /* Form with invalid input */
    .parent:has(> .child) { }                           /* Direct child relationship */
}

/* :not() — Excludes matching selectors */
.not-example {
    .menu li:not(:last-child) { }                       /* All except last */
    input:not([type="submit"]) { }                       /* All except submit buttons */
    div:not(.special) { }                                /* All divs without .special */
}

/* :nth-child() — Pattern matching */
.nth-child-example {
    li:nth-child(2) { }                                  /* Second child */
    li:nth-child(odd) { }                                /* Odd children */
    li:nth-child(even) { }                               /* Even children */
    li:nth-child(3n) { }                                 /* Every 3rd (3,6,9) */
    li:nth-child(3n+1) { }                               /* 1st, 4th, 7th... */
    li:nth-child(-n+3) { }                               /* First 3 children */
}

/* :nth-last-child() — From the end */
.nth-last-child-example {
    li:nth-last-child(1) { }                             /* Last child */
    li:nth-last-child(2) { }                             /* Second to last */
    li:nth-last-child(odd) { }                           /* Odd from end */
}

/* ========== 11. EASING FUNCTIONS (for transitions/animations) ========== */

/* cubic-bezier() — Custom easing curve */
.cubic-bezier-example {
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    /* bounce effect */
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    /* ease-out-quad */
}

/* steps() — Discrete step animation */
.steps-example {
    animation-timing-function: steps(4, end);            /* 4 equal steps */
    animation-timing-function: steps(8, start);          /* First step immediate */
}

/* ========== 12. CONDITIONAL FUNCTIONS (media, supports) ========== */

/* @supports — Feature detection (not a function but important) */
@supports (display: grid) {
    .grid-layout { display: grid; }                     /* Only if grid supported */
}
@supports not (display: grid) {
    .fallback { display: flex; }                         /* Fallback */
}
@supports (backdrop-filter: blur(10px)) {
    .glass { backdrop-filter: blur(10px); }              /* Conditional glass */
}

/* ========== PRACTICAL COMBINATIONS ========== */

/* All-in-one responsive design */
.responsive-master {
    /* Fluid typography */
    font-size: clamp(16px, calc(14px + 1.5vw), 32px);
    
    /* Fluid spacing */
    padding: clamp(12px, 3vw, 32px);
    
    /* Responsive container */
    width: min(100%, clamp(280px, 90%, 1400px));
    
    /* Responsive grid */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 30%, 350px), 1fr));
    gap: clamp(12px, 2vw, 32px);
    
    /* Responsive border radius */
    border-radius: clamp(4px, 2vw, 20px);
    
    /* Dynamic theming */
    background: var(--bg-primary, #ffffff);
    color: var(--color-text, #333333);
    
    /* Visual effects */
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
    
    /* Smooth transitions */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Themeable component with relative colors */
.themeable-card {
    --brand: #3498db;
    --brand-light: oklab(from var(--brand) calc(l + 0.15) c h);
    --brand-dark: oklab(from var(--brand) calc(l - 0.15) c h);
    
    background: var(--brand);
    color: color-contrast(var(--brand) vs black, white);
    border-color: var(--brand-light);
}

/* Gradient with responsive angles */
.responsive-gradient {
    background: linear-gradient(
        clamp(0deg, 45deg, 90deg),
        #667eea,
        #764ba2
    );
}`,
  lineByLine: [
    "MATHEMATICAL FUNCTIONS SECTION",
    "calc() — Performs arithmetic with mixed CSS units, supports + - * /",
    "min() — Returns smallest value from comma-separated list",
    "max() — Returns largest value from comma-separated list", 
    "clamp() — Three-value function: minimum, ideal, maximum (most powerful responsive tool)",
    "round() — Rounds value to nearest multiple with direction control",
    "mod() — Returns remainder after division (modulo operation)",
    "rem() — Same as mod() (remainder function)",
    "sin()/cos()/tan() — Trigonometric functions for angles",
    "asin()/acos()/atan() — Inverse trigonometric functions",
    "pow()/sqrt()/hypot() — Power, square root, and Euclidean distance",
    "exp()/log() — Exponential and logarithmic functions",
    "abs() — Absolute value (positive magnitude)",
    "sign() — Returns -1 for negative, 0 for zero, 1 for positive",
    
    "COLOR FUNCTIONS SECTION",
    "rgb()/rgba() — Red, Green, Blue values 0-255, alpha 0-1",
    "hsl()/hsla() — Hue 0-360°, Saturation 0-100%, Lightness 0-100%",
    "hwb() — Hue, Whiteness, Blackness (more intuitive than HSL)",
    "lab() — CIELAB color space (perceptually uniform)",
    "lch() — Lightness, Chroma, Hue (cylindrical version of LAB)",
    "oklab()/oklch() — Improved perceptual color spaces (recommended)",
    "color() — Wide gamut color spaces (Display P3, Rec.2020)",
    "color-mix() — Mixes two colors with percentages in specified color space",
    "color-contrast() — Automatically selects highest contrast color",
    "Relative color syntax — Modifies existing colors using 'from' keyword",
    
    "FILTER FUNCTIONS SECTION",
    "blur() — Gaussian blur in pixels (glassmorphism effect)",
    "brightness() — 0=black, 1=normal, >1=brighter",
    "contrast() — 0=flat gray, 1=normal, >1=higher contrast",
    "drop-shadow() — Shadow that follows element shape (including transparency)",
    "grayscale() — 0=color, 1=black & white",
    "hue-rotate() — Shifts all colors around color wheel",
    "invert() — 0=normal, 1=photographic negative",
    "opacity() — Transparency (similar to opacity property)",
    "saturate() — 0=grayscale, 1=normal, >1=vibrant",
    "sepia() — 0=normal, 1=vintage brown tone",
    "backdrop-filter() — Applies filters to elements behind the current element",
    
    "TRANSFORM FUNCTIONS SECTION",
    "translate()/translateX()/translateY() — Move element in 2D space",
    "scale()/scaleX()/scaleY() — Resize element (1=normal, >1=enlarge, <1=shrink)",
    "rotate() — Rotate element clockwise/counter-clockwise",
    "skew()/skewX()/skewY() — Slant element (isometric effect)",
    "matrix() — Combine all 2D transforms in one function",
    "translate3d()/translateZ() — Move in 3D space",
    "rotate3d()/rotateX()/rotateY()/rotateZ() — 3D rotation",
    "scale3d()/scaleZ() — 3D scaling",
    "perspective() — Depth perception for 3D transforms",
    "transform-origin — Sets pivot point for transformations",
    "transform-style: preserve-3d — Enables nested 3D transforms",
    "backface-visibility — Shows/hides back of 3D elements",
    
    "GRADIENT FUNCTIONS SECTION",
    "linear-gradient() — Smooth transitions along straight line",
    "radial-gradient() — Radiates outward from center (circular/elliptical)",
    "conic-gradient() — Rotates colors around center point (pie chart)",
    "repeating-linear-gradient() — Creates seamless patterns",
    
    "SHAPE FUNCTIONS SECTION",
    "circle() — Circular shape for clip-path",
    "ellipse() — Elliptical shape",
    "inset() — Rectangle with optional rounded corners",
    "polygon() — Custom shape with coordinate points",
    "path() — SVG path data for complex shapes",
    
    "GRID FUNCTIONS SECTION",
    "repeat() — Repeats grid track pattern (for columns/rows)",
    "minmax() — Sets minimum and maximum track size",
    "fit-content() — Sizes to content with maximum limit",
    
    "REFERENCE FUNCTIONS SECTION",
    "var() — Accesses CSS custom property values",
    "attr() — Retrieves HTML attribute values (common for pseudo-elements)",
    "url() — Loads external resources (images, fonts, cursors)",
    "env() — Environment variables (safe area insets for notched devices)",
    
    "COUNTER FUNCTIONS SECTION",
    "counter() — Displays counter value (requires counter-reset/increment)",
    "counters() — Displays nested, hierarchical counters",
    
    "SELECTOR FUNCTIONS SECTION",
    ":is() — Matches any selector in list (reduces repetition)",
    ":where() — Same as :is() but zero specificity",
    ":has() — Parent selector (checks children)",
    ":not() — Excludes matching selectors",
    ":nth-child() — Pattern-based child selection (formulas accepted)",
    ":nth-last-child() — Same but counts from end",
    
    "EASING FUNCTIONS",
    "cubic-bezier() — Custom animation easing curves",
    "steps() — Discrete step animation (for typing effects)",
    
    "CONDITIONAL RULES",
    "@supports — Feature detection (CSS equivalent of Modernizr)"
  ],
  simpleMeaning: "CSS functions are built-in calculators and transformers that compute values — calc() for math, clamp() for responsive limits, var() for variables, filter() for effects, transform() for movement, and gradients for color transitions.",
  output: "Dynamic, responsive designs that adapt to screen size, user preferences, and content. Mathematical precision, custom effects, and complex layouts with minimal code.",
  note: "Master clamp() first — it's the most powerful responsive CSS function. Use calc() for fluid layouts, var() for theming, filter() for images, and transform() for animations. Modern CSS functions eliminate hundreds of lines of JavaScript and media queries."
}
    ]
  }
};

export const cssLearning = learning;
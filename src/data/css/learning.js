// /data/css/learning.js

export const learning = {
  basic: {
    title: "🎨 CSS Basics - Complete Beginner's Guide",
    topics: [
      {
        name: "1. CSS Syntax & Basic Structure",
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
      {
        name: "2. 3 Ways to Add CSS",
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
      {
        name: "3. CSS Specificity — Priority Order",
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
      {
        name: "4. Basic Selectors",
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
      {
        name: "5. Combinator Selectors",
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
      {
        name: "6. Pseudo-classes — Element States",
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
      {
        name: "7. Pseudo-elements",
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
      {
        name: "8. Color Values — 4 Ways",
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
      {
        name: "9. Pseudo-classes — Nth Child Patterns",
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
      {
        name: "10. Gradients — Linear, Radial, Conic",
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
      }
    ]
  },
  advanced: {
    title: "🚀 CSS Advanced - Professional Features",
    topics: [
      {
        name: "1. Box Model — Complete",
        description: "Every HTML element is a box with 4 layers from inside out: Content — actual text/image (width/height apply here). Padding — space between content and border (background color applies here). Border — outline of the box (width, style, color). Margin — space between this element and others (transparent). Key concept: box-sizing: border-box — includes padding and border in width calculation.",
        code: `.box {
    /* Content size */
    width: 300px;
    height: 200px;

    /* Padding — inside space */
    padding: 20px;          /* all sides */
    padding: 10px 20px;     /* top/bottom left/right */
    padding: 10px 20px 15px 25px; /* top right bottom left */

    /* Border */
    border: 2px solid #3498db;
    border-radius: 12px;    /* rounded corners */
    border-top: 4px solid red;   /* only top */

    /* Margin — outside space */
    margin: 20px auto;      /* center horizontally */

    /* Recommended — include padding/border in width */
    box-sizing: border-box;

    /* Shadow */
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`,
        lineByLine: [
          "Line 2: width: 300px; - Content width",
          "Line 3: height: 200px; - Content height",
          "Line 6: padding: 20px; - Space INSIDE element, between content and border",
          "Line 9: border: 2px solid #3498db; - Border around element",
          "Line 10: border-radius: 12px; - Rounds corners",
          "Line 13: margin: 20px auto; - Space OUTSIDE element, auto centers horizontally",
          "Line 16: box-sizing: border-box; - Includes padding/border in width/height calculation",
          "Line 19: box-shadow: 0 4px 12px rgba(0,0,0,0.15); - Adds shadow outside element"
        ],
        simpleMeaning: "Content inside, padding around content, border around padding, margin outside border.",
        output: "Content inside, padding around content, border around padding, margin outside border. Shadow adds depth.",
        note: "Always add * { box-sizing: border-box } at project start — avoids sizing issues."
      },
      {
        name: "2. Flexbox — Complete Guide",
        description: "Flexbox is a 1D layout system — aligns items in one direction (row or column) and distributes space. On container: display: flex makes direct children flex items. justify-content — alignment on main axis. align-items — alignment on cross axis. flex-direction — row or column. flex-wrap — allow wrapping. gap — spacing between items.",
        code: `.flex-container {
    display: flex;

    /* Direction */
    flex-direction: row;          /* default — horizontal */
    flex-direction: column;       /* vertical */

    /* Main axis alignment */
    justify-content: flex-start;  /* default — left */
    justify-content: center;      /* center */
    justify-content: space-between; /* space between items */
    justify-content: space-around;  /* space around items */

    /* Cross axis alignment */
    align-items: stretch;         /* default — fill height */
    align-items: center;          /* center vertically */

    /* Wrapping */
    flex-wrap: wrap;

    /* Gap between items */
    gap: 16px;
}

.flex-item {
    flex: 1;          /* take remaining space */
    align-self: center; /* individual alignment */
}`,
        lineByLine: [
          "Line 1: display: flex; - Turns container into flexbox",
          "Line 4: flex-direction: row; - Items in a row (left to right)",
          "Line 5: flex-direction: column; - Items in a column (top to bottom)",
          "Line 8: justify-content: center; - Centers items on main axis",
          "Line 9: justify-content: space-between; - Even space between items",
          "Line 13: align-items: center; - Centers items vertically (for rows)",
          "Line 16: flex-wrap: wrap; - Items wrap to next line if needed",
          "Line 19: gap: 16px; - Space between items (16px)",
          "Line 23: flex: 1; - Item takes remaining space"
        ],
        simpleMeaning: "Flexbox arranges items in rows or columns, distributes space, centers easily.",
        output: "Items align in row or column, can wrap, space distributes evenly. Centering is very easy.",
        note: "Use justify-content for main axis, align-items for cross axis. Flexbox is for 1D layouts."
      },
      {
        name: "3. CSS Grid — Complete Guide",
        description: "CSS Grid is a 2D layout system — controls both rows and columns simultaneously. More powerful than Flexbox for complex page layouts. grid-template-columns — define column widths. grid-template-rows — define row heights. fr unit — fraction of remaining space. grid-template-areas — visual map of layout using named areas.",
        code: `.page-layout {
    display: grid;
    grid-template-columns: 250px 1fr;   /* sidebar + main */
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    min-height: 100vh;

    grid-template-areas:
        "header  header"
        "sidebar main"
        "footer  footer";
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* Responsive card grid */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
}`,
        lineByLine: [
          "Line 1: display: grid; - Turns container into grid",
          "Line 2: grid-template-columns: 250px 1fr; - 250px sidebar, remaining space main",
          "Line 3: grid-template-rows: auto 1fr auto; - Auto height header, flexible main, auto footer",
          "Line 5: gap: 20px; - Space between grid cells",
          "Line 7-10: grid-template-areas - Visual map of layout",
          "Line 12-15: grid-area: name; - Assigns elements to grid areas",
          "Line 19: grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) - Responsive cards: min 200px, grow to fill"
        ],
        simpleMeaning: "Grid controls rows AND columns simultaneously. Great for overall page layout.",
        output: "Visual map creates header, sidebar, main content, footer layout. Cards automatically wrap responsively.",
        note: "Use Grid for overall page layout, Flexbox for components. auto-fit + minmax makes cards wrap automatically."
      },
      {
        name: "4. Transitions — Smooth Changes",
        description: "Transitions smoothly animate property changes between states — like hover effects. Four parts: transition-property — which property to animate (all, color, transform...). transition-duration — how long (0.3s, 1s). transition-timing-function — speed pattern (ease, linear, ease-in-out). transition-delay — wait before starting.",
        code: `.btn {
    background: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;

    /* Shorthand */
    transition: all 0.3s ease;

    /* Multiple properties */
    transition: background 0.3s ease,
                transform 0.2s ease,
                box-shadow 0.3s ease;
}

.btn:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(52,152,219,0.4);
}

/* Different timing functions */
.ease-demo {
    transition: transform 0.5s ease;      /* slow-fast-slow */
    transition: transform 0.5s linear;    /* constant speed */
}`,
        lineByLine: [
          "Line 9: transition: all 0.3s ease; - All properties animate over 0.3 seconds with ease timing",
          "Line 12-14: transition: background 0.3s, transform 0.2s, box-shadow 0.3s - Multiple transitions",
          "Line 18: background: #2980b9; - Changes on hover, animates smoothly",
          "Line 19: transform: translateY(-2px); - Moves up 2px, animates",
          "Line 20: box-shadow: 0 6px 20px rgba(...); - Shadow effect, animates",
          "Line 24: transition: transform 0.5s ease; - Ease = slow-fast-slow (natural)",
          "Line 25: transition: transform 0.5s linear; - Linear = constant speed (robotic)"
        ],
        simpleMeaning: "Transitions animate property changes smoothly — hover effects become fluid, not sudden.",
        output: "Button smoothly moves up and gains glow on hover.",
        note: "Apply transition on original state, not on hover — otherwise mouse out will be abrupt."
      },
      {
        name: "5. Animations — Keyframes",
        description: "CSS animations use @keyframes to define multi-step animations, then apply to elements. @keyframes defines states (0% to 100% or from/to). Between keyframes can have multiple steps. animation properties: animation-name, animation-duration, animation-iteration-count (infinite possible), animation-direction (alternate), animation-fill-mode (forwards keeps final state).",
        code: `/* Define keyframes */
@keyframes slideIn {
    0%   { transform: translateX(-100%); opacity: 0; }
    60%  { transform: translateX(10px); }
    100% { transform: translateX(0); opacity: 1; }
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-30px); }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}

/* Apply animation */
.slide-in {
    animation: slideIn 0.8s ease forwards;
}

.bouncing {
    animation: bounce 1s ease infinite;
}

.loading-spinner {
    animation: spin 1s linear infinite;
}`,
        lineByLine: [
          "Line 2: @keyframes slideIn { - Defines named animation 'slideIn'",
          "Line 3: 0% { transform: translateX(-100%); opacity: 0; } - Start off-screen left, invisible",
          "Line 4: 60% { transform: translateX(10px); } - Slight overshoot at 60%",
          "Line 5: 100% { transform: translateX(0); opacity: 1; } - End at final position, fully visible",
          "Line 8: @keyframes bounce { - Bouncing animation",
          "Line 9: 0%, 100% { transform: translateY(0); } - Start and end at normal position",
          "Line 10: 50% { transform: translateY(-30px); } - Middle of animation: moved up",
          "Line 13: @keyframes spin { - Rotation animation",
          "Line 14: from { transform: rotate(0deg); } - Start angle",
          "Line 15: to { transform: rotate(360deg); } - End angle (full circle)",
          "Line 19: animation: slideIn 0.8s ease forwards; - Applies animation, keeps final state",
          "Line 22: animation: bounce 1s ease infinite; - Repeats infinitely",
          "Line 25: animation: spin 1s linear infinite; - Continuous rotation"
        ],
        simpleMeaning: "Keyframes define multi-step animations. Apply them with animation property.",
        output: "slideIn — slides in from left. bounce — jumps up and down. spin — rotates continuously.",
        note: "Use transitions for simple on/off effects. Use animations for complex, looping, or multi-step effects."
      },
      {
        name: "6. Transformations — Move, Rotate, Scale",
        description: "Transform visually changes an element — original DOM position stays same (layout unaffected). translate(x,y) — move left/right/up/down. rotate(deg) — rotate clockwise. scale(n) — enlarge or shrink. skew(x,y) — tilt on X or Y axis. transform-origin — pivot point for rotation/scaling.",
        code: `.move {
    transform: translate(50px, 20px); /* right 50, down 20 */
    transform: translateX(100px);
    transform: translateY(-50px);     /* move up */
    transform: translate(-50%, -50%); /* centering trick */
}

.rotate {
    transform: rotate(45deg);
    transform: rotate(-90deg);
    transform-origin: center;         /* default */
    transform-origin: top left;       /* rotate from corner */
}

.scale-demo {
    transform: scale(1.5);            /* 50% larger */
    transform: scaleX(2);             /* double width only */
}

/* Multiple transforms in one line */
.card:hover {
    transform: translateY(-5px) scale(1.02) rotate(1deg);
}`,
        lineByLine: [
          "Line 2: transform: translate(50px, 20px); - Moves element 50px right, 20px down",
          "Line 3: transform: translateX(100px); - Moves 100px right only",
          "Line 4: transform: translateY(-50px); - Moves 50px UP (negative value)",
          "Line 5: transform: translate(-50%, -50%); - Centers element perfectly (needs position)",
          "Line 8: transform: rotate(45deg); - Rotates 45 degrees clockwise",
          "Line 9: transform: rotate(-90deg); - Rotates 90 degrees counter-clockwise",
          "Line 11: transform-origin: top left; - Rotates from top-left corner instead of center",
          "Line 15: transform: scale(1.5); - Makes element 50% larger",
          "Line 16: transform: scaleX(2); - Doubles width only (stretches horizontally)",
          "Line 20: transform: translateY(-5px) scale(1.02) rotate(1deg); - Multiple transforms, order matters"
        ],
        simpleMeaning: "transform moves, rotates, or scales an element visually without affecting layout.",
        output: "Element visually moves, rotates, or scales. Original layout space stays same.",
        note: "Order matters in multiple transforms. rotate then translate vs translate then rotate give different results."
      },
      {
        name: "7. Media Queries — Responsive Design",
        description: "Media queries apply different CSS based on screen size, device orientation, or user preferences. Mobile-first approach — write CSS for smallest screens first, then add min-width breakpoints. Common breakpoints: 480px (small phones), 768px (tablets), 1024px (laptops), 1280px (desktops).",
        code: `/* Mobile first — default for small screens */
.container {
    width: 100%;
    padding: 16px;
    font-size: 15px;
}

/* Tablet — min-width 768px */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
        padding: 24px;
    }
    .grid { grid-template-columns: 1fr 1fr; }
}

/* Desktop — min-width 1024px */
@media (min-width: 1024px) {
    .container { max-width: 960px; }
    .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    body { background: #1a1a2e; color: #eee; }
}

/* Reduced motion — accessibility */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}`,
        lineByLine: [
          "Line 2-5: Default .container styles for mobile devices",
          "Line 8: @media (min-width: 768px) { - Applies when screen >= 768px (tablet)",
          "Line 9-12: Tablet styles — wider container, more padding",
          "Line 13: .grid { grid-template-columns: 1fr 1fr; } - 2 columns on tablet",
          "Line 16: @media (min-width: 1024px) { - Applies when screen >= 1024px (desktop)",
          "Line 17: .container { max-width: 960px; } - Fixed max width on desktop",
          "Line 18: .grid { grid-template-columns: repeat(3, 1fr); } - 3 columns on desktop",
          "Line 21: @media (prefers-color-scheme: dark) { - User has dark mode enabled",
          "Line 22: body { background: #1a1a2e; color: #eee; } - Dark background, light text",
          "Line 25: @media (prefers-reduced-motion: reduce) { - User wants less animation",
          "Line 26-28: Disables all animations and transitions"
        ],
        simpleMeaning: "Media queries change styles based on screen size. Mobile-first: start small, add larger breakpoints.",
        output: "Mobile: full width. Tablet: 2 columns. Desktop: 3 columns. Dark mode applies automatically.",
        note: "Mobile-first approach is recommended — smaller devices don't need to download extra CSS."
      },
      {
        name: "8. CSS Variables — Custom Properties",
        description: "CSS Variables (Custom Properties) store values for reuse throughout stylesheet. Start with -- (double dash). Define in :root for global access. var() function to use — var(--variable-name, fallback-value). Benefits: Change in one place, update everywhere. Perfect for theming. JavaScript can read/write them.",
        code: `/* Global variables in :root */
:root {
    --primary: #3498db;
    --secondary: #2ecc71;
    --text: #2c3e50;
    --bg: #ffffff;
    --spacing: 16px;
    --radius: 8px;
    --shadow: 0 2px 12px rgba(0,0,0,0.1);
}

/* Use variables */
.button {
    background: var(--primary);
    padding: var(--spacing);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

/* Override for dark theme */
[data-theme="dark"] {
    --text: #f0f0f0;
    --bg: #1a1a2e;
    --primary: #5dade2;
}

/* Fallback value if variable undefined */
.element {
    color: var(--text-color, #333);
}`,
        lineByLine: [
          "Line 2: :root { - Global scope (same as html selector)",
          "Line 3: --primary: #3498db; - Defines variable with double dash",
          "Line 4: --secondary: #2ecc71; - Another color variable",
          "Line 5: --text: #2c3e50; - Text color variable",
          "Line 6: --bg: #ffffff; - Background color variable",
          "Line 7: --spacing: 16px; - Spacing value variable",
          "Line 10: background: var(--primary); - Uses variable value",
          "Line 11: padding: var(--spacing); - Uses spacing variable",
          "Line 15: [data-theme=\"dark\"] { - Targets elements with data-theme='dark'",
          "Line 16-18: Overrides variables for dark theme only",
          "Line 22: color: var(--text-color, #333); - Fallback #333 if --text-color undefined"
        ],
        simpleMeaning: "CSS variables store values in one place, update everywhere automatically.",
        output: "Change variable color once — updates everywhere. Dark theme overrides values for specific scope.",
        note: "Always provide fallback value in var(). CSS variables are better than preprocessor variables because they work at runtime."
      },
      {
        name: "9. Filters & Effects",
        description: "CSS filter property applies Photoshop-like effects to images and elements. blur() — Gaussian blur. brightness() — 0=black, 1=normal, >1 brighter. grayscale() — 0% color, 100% B&W. sepia() — vintage effect. hue-rotate() — shift colors. saturate() — color intensity. invert() — negative effect. backdrop-filter — applies filter to background behind element.",
        code: `img {
    filter: grayscale(0%);           /* normal */
}
img:hover {
    filter: grayscale(100%);         /* black & white */
    filter: brightness(1.3);         /* brighter */
    filter: blur(2px);               /* blur effect */
    filter: sepia(80%);              /* vintage */
    filter: hue-rotate(90deg);       /* color shift */
    
    /* Multiple filters together */
    filter: brightness(1.1) contrast(110%) saturate(120%);
}

/* Glassmorphism card */
.glass-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
}`,
        lineByLine: [
          "Line 2: filter: grayscale(0%); - Normal (0% = full color)",
          "Line 5: filter: grayscale(100%); - 100% = black and white",
          "Line 6: filter: brightness(1.3); - 1.3 = 30% brighter",
          "Line 7: filter: blur(2px); - Adds 2px blur to image",
          "Line 8: filter: sepia(80%); - 80% vintage sepia effect",
          "Line 9: filter: hue-rotate(90deg); - Shifts all colors by 90 degrees",
          "Line 12: filter: brightness(1.1) contrast(110%) saturate(120%); - Combines multiple filters",
          "Line 16: background: rgba(255,255,255,0.15); - Semi-transparent white",
          "Line 17: backdrop-filter: blur(12px); - Blurs content BEHIND the element (glass effect)"
        ],
        simpleMeaning: "Filter adds visual effects like blur, grayscale, brightness, sepia, and hue rotation.",
        output: "Image becomes black & white on hover, or brighter, or sepia. Glass card blurs background behind it.",
        note: "backdrop-filter requires parent background to be transparent. Add -webkit- prefix for Safari."
      },
      {
        name: "10. Modern CSS Functions — calc(), clamp(), min(), max()",
        description: "Modern CSS has powerful functions for responsive layouts without complex calculations. calc() — mathematical calculations with mixed units (calc(100% - 40px)). min(a,b) — uses smaller value. max(a,b) — uses larger value. clamp(min, preferred, max) — three values in one. Font responsive in one line! clamp(16px, 4vw, 48px) — 16px min, grows with screen, stops at 48px.",
        code: `/* calc() — mixed unit calculations */
.calc-example {
    width: calc(100% - 40px);
    width: calc((100% - 60px) / 3);
    height: calc(100vh - 100px);
    font-size: calc(16px + 0.5vw);
}

/* min() — use the smaller value (cap size) */
.min-example {
    width: min(100%, 800px);     /* 100% if smaller, else 800px */
    font-size: min(24px, 5vw);   /* responsive but capped */
}

/* max() — use the larger value (ensure minimum) */
.max-example {
    width: max(200px, 50%);      /* 200px if larger, else 50% */
}

/* clamp(min, preferred, max) — best for responsive */
.clamp-example {
    width: clamp(200px, 50%, 800px);
    font-size: clamp(16px, 4vw, 32px);   /* mobile:16px, desktop:32px */
}`,
        lineByLine: [
          "Line 2: width: calc(100% - 40px); - Full width minus 40px (90% of page minus 40px)",
          "Line 3: width: calc((100% - 60px) / 3); - One third of remaining space after subtracting 60px",
          "Line 4: height: calc(100vh - 100px); - Full viewport height minus 100px",
          "Line 5: font-size: calc(16px + 0.5vw); - 16px plus 0.5% of viewport width",
          "Line 9: width: min(100%, 800px); - 100% if that's smaller, otherwise 800px",
          "Line 10: font-size: min(24px, 5vw); - 24px or 5vw, whichever is smaller",
          "Line 14: width: max(200px, 50%); - 200px if that's larger, otherwise 50%",
          "Line 18: width: clamp(200px, 50%, 800px); - Minimum 200px, preferred 50%, maximum 800px",
          "Line 19: font-size: clamp(16px, 4vw, 32px); - 16px on small screens, grows with screen, max 32px"
        ],
        simpleMeaning: "clamp() is the most powerful — min, preferred, max values in one line. Perfect for responsive fonts.",
        output: "font-size: clamp(16px,4vw,32px) — 16px on small screens, grows with viewport, max 32px.",
        note: "clamp() is the most powerful responsive CSS function. Use it for fonts, padding, gaps — reduces media queries dramatically."
      }
    ]
  }
};

export const cssLearning = learning;
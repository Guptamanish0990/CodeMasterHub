export const interview = {
  fresher: [
    {
      question: "What is HTML and what does it stand for?",
      answer: "HTML stands for HyperText Markup Language. It's the standard markup language for creating web pages and web applications.",
      example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>",
      output: "Displays a webpage with 'Hello World' heading.",
      note: "HTML describes the structure of web pages using elements and tags."
    },
    {
      question: "What is the difference between div and span?",
      answer: "`<div>` is a block-level element that takes full width, while `<span>` is an inline element that only takes as much width as needed.",
      example: "<div>This takes full width</div>\n<span>This takes only needed width</span>",
      output: "Div shows on new line, span shows inline.",
      note: "Use div for layout containers, span for inline text styling."
    },
    {
      question: "What is the difference between HTML and XHTML?",
      answer: "XHTML is stricter and more XML-based version of HTML. It requires closing all tags, lowercase tag names, and quoted attributes.",
      example: "<!-- HTML -->\n<br>\n<!-- XHTML -->\n<br />",
      output: "XHTML requires self-closing tags with space and slash.",
      note: "HTML5 is more flexible and commonly used now."
    },
    {
      question: "What is the purpose of the <!DOCTYPE html> declaration?",
      answer: "It tells the browser which version of HTML the page is using. For HTML5, it's simply `<!DOCTYPE html>`.",
      example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Document</title>\n</head>\n<body>\n</body>\n</html>",
      output: "Browser renders page in standards mode.",
      note: "Without it, browser may use 'quirks mode' causing layout issues."
    },
    {
      question: "What are the different heading tags in HTML?",
      answer: "HTML has six heading tags: h1 to h6. h1 is most important (largest), h6 is least important (smallest).",
      example: "<h1>Main Title</h1>\n<h2>Section Title</h2>\n<h3>Subsection Title</h3>\n<h4>Minor Heading</h4>\n<h5>Small Heading</h5>\n<h6>Smallest Heading</h6>",
      output: "Displays text from largest to smallest size.",
      note: "Use only one h1 per page for better SEO."
    },
    {
      question: "How do you create a hyperlink in HTML?",
      answer: "Use the anchor tag `<a>` with the `href` attribute to specify the link destination.",
      example: "<a href=\"https://www.example.com\">Click here to visit Example.com</a>",
      output: "Displays a clickable link that navigates to example.com.",
      note: "Use target='_blank' to open link in new tab."
    },
    {
      question: "How do you insert an image in HTML?",
      answer: "Use the `<img>` tag with `src` attribute for image path and `alt` attribute for description.",
      example: "<img src=\"image.jpg\" alt=\"Description of image\" width=\"300\" height=\"200\">",
      output: "Displays the image on the webpage.",
      note: "alt attribute is REQUIRED for accessibility and SEO."
    },
    {
      question: "What is the difference between `id` and `class` attributes?",
      answer: "`id` is unique (can be used once per page), while `class` can be used multiple times on different elements.",
      example: "<div id=\"header\">Unique header</div>\n<div class=\"box\">Box 1</div>\n<div class=\"box\">Box 2</div>",
      output: "First div has unique ID, other two share same class.",
      note: "Use id for unique elements, class for styling multiple elements."
    },
    {
      question: "What is semantic HTML? Why is it important?",
      answer: "Semantic HTML uses tags that describe the meaning of content (like `<header>`, `<nav>`, `<article>`). It improves accessibility, SEO, and code readability.",
      example: "<header><h1>Website Title</h1></header>\n<nav><a href='/'>Home</a></nav>\n<article>Content here</article>\n<footer>Footer text</footer>",
      output: "Browser renders a proper document structure.",
      note: "Screen readers rely on semantic elements to navigate the page."
    },
    {
      question: "What is the difference between `<strong>` and `<b>` tags?",
      answer: "`<strong>` indicates strong importance (semantic), while `<b>` only makes text bold (visual).",
      example: "<strong>Important content</strong>\n<b>Just bold text</b>",
      output: "Both appear bold, but screen readers emphasize strong tag.",
      note: "Use strong for important content, b for visual bold only."
    },
    {
      question: "What is the difference between `<em>` and `<i>` tags?",
      answer: "`<em>` indicates emphasized text (semantic), while `<i>` only makes text italic (visual).",
      example: "<em>Emphasized text</em>\n<i>Just italic text</i>",
      output: "Both appear italic, but screen readers emphasize em tag.",
      note: "Use em for stress emphasis, i for foreign words or technical terms."
    },
    {
      question: "How do you create an ordered list?",
      answer: "Use `<ol>` (ordered list) with `<li>` (list items). It displays numbers or letters.",
      example: "<ol>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ol>",
      output: "Displays numbered list: 1, 2, 3.",
      note: "Use type attribute to change numbering (A, a, I, i)."
    },
    {
      question: "How do you create an unordered list?",
      answer: "Use `<ul>` (unordered list) with `<li>` (list items). It displays bullet points.",
      example: "<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Orange</li>\n</ul>",
      output: "Displays bullet points: •, •, •.",
      note: "Use CSS to change bullet style (circle, square, none)."
    },
    {
      question: "What is a nested list?",
      answer: "A list inside another list item. Used for multi-level lists.",
      example: "<ul>\n  <li>Fruits\n    <ul>\n      <li>Apple</li>\n      <li>Banana</li>\n    </ul>\n  </li>\n  <li>Vegetables\n    <ul>\n      <li>Carrot</li>\n      <li>Broccoli</li>\n    </ul>\n  </li>\n</ul>",
      output: "Main list items have sub-lists indented below.",
      note: "Can nest any list type inside any other list type."
    },
    {
      question: "How do you create a table in HTML?",
      answer: "Use `<table>` with `<tr>` for rows, `<th>` for headers, and `<td>` for data cells.",
      example: "<table border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n  <tr>\n    <td>Jane</td>\n    <td>30</td>\n  </tr>\n</table>",
      output: "Displays data in rows and columns with headers.",
      note: "Use thead, tbody, tfoot for better structure."
    },
    {
      question: "What is the difference between `colspan` and `rowspan`?",
      answer: "`colspan` merges multiple columns horizontally, `rowspan` merges multiple rows vertically.",
      example: "<table border=\"1\">\n  <tr>\n    <td colspan=\"2\">Merged columns</td>\n  </tr>\n  <tr>\n    <td rowspan=\"2\">Merged rows</td>\n    <td>Data</td>\n  </tr>\n  <tr>\n    <td>More data</td>\n  </tr>\n</table>",
      output: "First row has one cell spanning two columns. First column spans two rows.",
      note: "Colspan spans right, rowspan spans down."
    },
    {
      question: "How do you create a form in HTML?",
      answer: "Use `<form>` element with various input types like text, email, password, submit button.",
      example: "<form action=\"/submit\" method=\"POST\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\">\n  <input type=\"submit\" value=\"Submit\">\n</form>",
      output: "Displays a text input field and submit button.",
      note: "action specifies where to send data, method specifies HTTP method."
    },
    {
      question: "What are different input types in HTML?",
      answer: "Input types include: text, email, password, number, date, radio, checkbox, file, color, range, etc.",
      example: "<input type=\"text\" placeholder=\"Text\">\n<input type=\"email\" placeholder=\"Email\">\n<input type=\"password\" placeholder=\"Password\">\n<input type=\"number\" placeholder=\"Number\">\n<input type=\"date\">\n<input type=\"radio\"> Radio\n<input type=\"checkbox\"> Checkbox\n<input type=\"color\">\n<input type=\"range\">",
      output: "Shows different input controls based on type attribute.",
      note: "Mobile keyboards change based on input type (email shows @, tel shows number pad)."
    },
    {
      question: "What is the purpose of the `label` tag?",
      answer: "`<label>` defines a label for form inputs. Clicking label focuses the associated input.",
      example: "<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\">\n\n<!-- OR wrapping -->\n<label>\n  <input type=\"checkbox\" name=\"agree\"> I agree\n</label>",
      output: "Clicking 'Username:' text focuses the input field.",
      note: "for attribute must match input's id for association."
    },
    {
      question: "How do you create a dropdown menu?",
      answer: "Use `<select>` element with `<option>` elements for each choice.",
      example: "<label for=\"country\">Select Country:</label>\n<select id=\"country\" name=\"country\">\n  <option value=\"usa\">USA</option>\n  <option value=\"uk\">UK</option>\n  <option value=\"india\">India</option>\n</select>",
      output: "Shows dropdown menu with three options.",
      note: "Use multiple attribute to allow multiple selections."
    },
    {
      question: "What is the difference between `GET` and `POST` methods?",
      answer: "GET appends data to URL (visible, cached, limited length). POST sends data in request body (hidden, no size limit).",
      example: "<!-- GET -->\n<form method=\"GET\" action=\"/search\">\n  <input name=\"q\">\n</form>\n<!-- URL becomes /search?q=value -->\n\n<!-- POST -->\n<form method=\"POST\" action=\"/submit\">\n  <input name=\"data\">\n</form>",
      output: "GET shows data in URL, POST hides it.",
      note: "Use GET for search/read operations, POST for sensitive/modifying operations."
    },
    {
      question: "What is the `placeholder` attribute?",
      answer: "Shows hint text inside input field that disappears when user starts typing.",
      example: "<input type=\"text\" placeholder=\"Enter your name\">\n<input type=\"email\" placeholder=\"email@example.com\">",
      output: "Input fields show grey hint text until user types.",
      note: "Not a substitute for labels. Use both for accessibility."
    },
    {
      question: "What is the `required` attribute?",
      answer: "Makes form field mandatory. Form cannot be submitted without filling required fields.",
      example: "<form>\n  <input type=\"text\" required placeholder=\"Name required\">\n  <input type=\"email\" required placeholder=\"Email required\">\n  <input type=\"submit\" value=\"Submit\">\n</form>",
      output: "Browser shows error if trying to submit empty required fields.",
      note: "Works on text, email, password, checkbox, radio, file inputs."
    },
    {
      question: "How do you embed a video in HTML5?",
      answer: "Use the `<video>` element with `src` and `controls` attributes.",
      example: "<video src='movie.mp4' controls width='320' height='240'></video>",
      output: "Shows a video player with play/pause controls.",
      note: "Supports multiple formats using `<source>` elements."
    },
    {
      question: "How do you embed audio in HTML5?",
      answer: "Use the `<audio>` element with `src` and `controls` attributes.",
      example: "<audio src='song.mp3' controls></audio>",
      output: "Shows an audio player with play/pause controls.",
      note: "Supports MP3, WAV, OGG formats."
    },
    {
      question: "What are data attributes?",
      answer: "Custom attributes that store extra information on HTML elements, prefixed with `data-`.",
      example: "<div data-user-id='123' data-role='admin'>User</div>\n<script>\n  const div = document.querySelector('div');\n  console.log(div.dataset.userId); // '123'\n  console.log(div.dataset.role); // 'admin'\n</script>",
      output: "Returns '123' and 'admin' from dataset.",
      note: "Useful for storing state without JavaScript variables."
    },
    {
      question: "What is the difference between `localStorage` and `sessionStorage`?",
      answer: "localStorage persists until manually cleared, sessionStorage clears when tab/browser closes.",
      example: "localStorage.setItem('key', 'value');\nsessionStorage.setItem('temp', 'data');\nconsole.log(localStorage.getItem('key'));\nconsole.log(sessionStorage.getItem('temp'));",
      output: "localStorage data persists after browser restart, sessionStorage doesn't.",
      note: "Both store strings only. Use JSON.stringify/parse for objects."
    },
    {
      question: "What is the `iframe` tag used for?",
      answer: "Embeds another HTML page or external content (YouTube, Google Maps) inside current page.",
      example: "<iframe src=\"https://www.youtube.com/embed/video-id\" width=\"560\" height=\"315\"></iframe>",
      output: "Displays embedded YouTube video or external webpage.",
      note: "Some websites block embedding with X-Frame-Options."
    },
    {
      question: "What is the `target` attribute in links?",
      answer: "Specifies where to open the linked document. `_blank` opens in new tab, `_self` opens in same tab.",
      example: "<a href=\"https://example.com\" target=\"_blank\">Open in new tab</a>\n<a href=\"https://example.com\" target=\"_self\">Open in same tab</a>",
      output: "First link opens new tab, second opens in current tab.",
      note: "Add rel='noopener' for security when using target='_blank'."
    },
    {
      question: "What are HTML entities? Give examples.",
      answer: "Special codes that display characters that would otherwise be interpreted as HTML code.",
      example: "&lt; = < (less than)\n&gt; = > (greater than)\n&amp; = & (ampersand)\n&quot; = \" (double quote)\n&copy; = © (copyright)\n&nbsp; = non-breaking space",
      output: "&lt;div&gt; displays as <div>",
      note: "Always use entities for <, >, &, quotes when displaying as text."
    },
    {
      question: "What is the difference between block-level and inline elements?",
      answer: "Block-level elements take full width and start on new line. Inline elements take only needed width and stay on same line.",
      example: "<!-- Block elements -->\n<div>Block 1</div>\n<div>Block 2</div>\n\n<!-- Inline elements -->\n<span>Span 1</span>\n<span>Span 2</span>",
      output: "Block elements stack vertically, inline elements sit horizontally.",
      note: "Common blocks: div, p, h1-h6, ul, ol, table. Common inlines: span, a, img, strong, em."
    },
    {
      question: "What is the `br` tag used for?",
      answer: "Creates a line break without starting a new paragraph.",
      example: "<p>First line<br>\nSecond line<br>\nThird line</p>",
      output: "Text appears on three separate lines but same paragraph.",
      note: "br is self-closing (<br> or <br/>). Don't use for spacing between paragraphs."
    },
    {
      question: "What is the `hr` tag used for?",
      answer: "Creates a horizontal rule (thematic break) between content sections.",
      example: "<h2>Section 1</h2>\n<p>Content here</p>\n<hr>\n<h2>Section 2</h2>\n<p>More content</p>",
      output: "Shows a horizontal line separating the two sections.",
      note: "Can be styled with CSS (color, width, height)."
    },
    {
      question: "What is the `pre` tag used for?",
      answer: "Displays preformatted text preserving spaces and line breaks. Uses monospace font.",
      example: "<pre>\n  function hello() {\n    console.log('Hello World');\n  }\n</pre>",
      output: "Code appears with exact indentation and line breaks preserved.",
      note: "Perfect for displaying code snippets and ASCII art."
    },
    {
      question: "What is the `code` tag used for?",
      answer: "Marks text as computer code. Uses monospace font.",
      example: "<p>Use <code>console.log()</code> to print values.</p>\n<code>const x = 10;</code>",
      output: "Shows text in monospace font indicating it's code.",
      note: "Often used inside <pre> for multi-line code blocks."
    },
    {
      question: "What is the `blockquote` tag used for?",
      answer: "Indicates a long quotation from an external source. Usually indented.",
      example: "<blockquote cite=\"https://example.com\">\n  <p>The only limit is your imagination.</p>\n  <footer>- Someone</footer>\n</blockquote>",
      output: "Shows indented block with quotation.",
      note: "cite attribute can specify source URL."
    },
    {
      question: "What is the `abbr` tag used for?",
      answer: "Defines abbreviation or acronym. Shows full form on mouse hover.",
      example: "<p>I study <abbr title=\"Hypertext Markup Language\">HTML</abbr> and <abbr title=\"Cascading Style Sheets\">CSS</abbr>.</p>",
      output: "HTML and CSS show dotted underline. Hover shows full form.",
      note: "Helps screen readers and improves accessibility."
    },
    {
      question: "What is the `address` tag used for?",
      answer: "Defines contact information for the author/owner of the document.",
      example: "<address>\n  Written by John Doe.<br>\n  Email: <a href=\"mailto:john@example.com\">john@example.com</a>\n</address>",
      output: "Shows contact information in italic, often in footer.",
      note: "Usually rendered in italic. Can contain email, phone, physical address."
    },
    {
      question: "What is the difference between `<mark>` and `<highlight>`?",
      answer: "`<mark>` highlights text (yellow background). There's no `<highlight>` tag, use `<mark>` instead.",
      example: "<p>Search results: <mark>HTML</mark> found in 0.5 seconds</p>",
      output: "The word 'HTML' appears with yellow highlight.",
      note: "Use for search result highlighting, warnings, or important parts."
    },
    {
      question: "What is the `small` tag used for?",
      answer: "Makes text smaller. Used for copyright, disclaimers, legal text, side comments.",
      example: "<p>Regular text size.</p>\n<small>&copy; 2024 My Company. All rights reserved.</small>",
      output: "Copyright notice appears in smaller font size.",
      note: "Not for just making text smaller (use CSS for that). Has semantic meaning."
    },
    {
      question: "What is the `del` tag used for?",
      answer: "Shows deleted text with strikethrough. Often used with `ins` for edits.",
      example: "<p>Original price: <del>$100</del> <ins>$79</ins> Sale!</p>",
      output: "$100 appears with strikethrough, $79 appears underlined.",
      note: "Common in price changes, document edits, version control."
    },
    {
      question: "What is the `ins` tag used for?",
      answer: "Shows inserted text with underline. Often used with `del` for edits.",
      example: "<p>Original: <del>Old content</del> <ins>New content</ins></p>",
      output: "Old content has strikethrough, New content is underlined.",
      note: "Shows what text was added to the document."
    },
    {
      question: "What is the `sub` tag used for?",
      answer: "Defines subscript text - appears half a character below normal line.",
      example: "<p>Water formula: H<sub>2</sub>O</p>\n<p>Carbon dioxide: CO<sub>2</sub></p>",
      output: "H₂O and CO₂ (the numbers appear below the line).",
      note: "Used for chemical formulas, mathematical equations, footnotes."
    },
    {
      question: "What is the `sup` tag used for?",
      answer: "Defines superscript text - appears half a character above normal line.",
      example: "<p>Math formula: X<sup>2</sup> + Y<sup>2</sup> = Z<sup>2</sup></p>\n<p>Reference<sup>[1]</sup></p>",
      output: "X² + Y² = Z² (the 2 appears above the line).",
      note: "Used for mathematical exponents, ordinal numbers, footnotes."
    },
    {
      question: "What is the `fieldset` tag used for?",
      answer: "Groups related form elements together, drawing a box around them.",
      example: "<fieldset>\n  <legend>Personal Information</legend>\n  <label>Name: <input type=\"text\"></label><br>\n  <label>Email: <input type=\"email\"></label>\n</fieldset>",
      output: "Shows border around grouped form fields with legend on top.",
      note: "Improves form organization and accessibility."
    },
    {
      question: "What is the `legend` tag used for?",
      answer: "Defines a caption for the fieldset element.",
      example: "<fieldset>\n  <legend>Contact Details</legend>\n  <input type=\"text\" placeholder=\"Name\">\n</fieldset>",
      output: "Shows 'Contact Details' as caption inside fieldset border.",
      note: "Must be the first element inside fieldset."
    },
    {
      question: "What is the `datalist` tag used for?",
      answer: "Provides autocomplete suggestions for input fields while allowing custom values.",
      example: "<input list=\"browsers\" placeholder=\"Type or select\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n</datalist>",
      output: "Typing shows suggestions. User can select or type custom value.",
      note: "Different from select. datalist allows custom values, select forces choice."
    },
    {
      question: "What is the `optgroup` tag used for?",
      answer: "Groups options together in a dropdown select menu.",
      example: "<select>\n  <optgroup label=\"German Cars\">\n    <option>BMW</option>\n    <option>Mercedes</option>\n  </optgroup>\n  <optgroup label=\"Japanese Cars\">\n    <option>Toyota</option>\n    <option>Honda</option>\n  </optgroup>\n</select>",
      output: "Shows group labels with indented options inside dropdown.",
      note: "optgroup labels are not selectable - they only group options."
    },
    {
      question: "What is the `button` tag vs `input type='button'`?",
      answer: "`<button>` can contain HTML content (images, icons, text), while `<input type='button'>` only text.",
      example: "<button>Click <strong>Me</strong> <img src='icon.png'></button>\n<input type=\"button\" value=\"Click Me\">",
      output: "Button can have rich content, input only plain text.",
      note: "Always specify type attribute for button (submit, reset, button)."
    },
    {
      question: "What is the `progress` tag used for?",
      answer: "Shows progress of a task (file upload, form completion).",
      example: "<label>File upload:</label>\n<progress value=\"65\" max=\"100\">65%</progress>",
      output: "Shows progress bar filled 65%.",
      note: "value = current progress, max = total. No value = indeterminate (animating)."
    },
    {
      question: "What is the `meter` tag used for?",
      answer: "Shows a measurement within a known range (disk usage, test score).",
      example: "<label>Storage usage:</label>\n<meter value=\"0.6\" min=\"0\" max=\"1\">60%</meter>\n<label>Test score:</label>\n<meter value=\"85\" min=\"0\" max=\"100\">85%</meter>",
      output: "Shows colored gauge based on value.",
      note: "Colors: green (good), yellow (warning), red (critical)."
    },
    {
      question: "What is the `details` and `summary` tags?",
      answer: "Creates expandable/collapsible content without JavaScript.",
      example: "<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content appears when you click.</p>\n</details>",
      output: "Shows summary. Click to expand and see hidden content.",
      note: "Add 'open' attribute to have it expanded by default."
    },
    {
      question: "What is the `dialog` tag used for?",
      answer: "Creates a popup dialog or modal window.",
      example: "<dialog id=\"myDialog\">\n  <p>This is a popup!</p>\n  <button onclick=\"myDialog.close()\">Close</button>\n</dialog>\n<button onclick=\"myDialog.showModal()\">Open Popup</button>",
      output: "Click button opens modal popup. Close button closes it.",
      note: "showModal() = modal with backdrop, show() = without backdrop."
    },
    {
      question: "What is the `picture` tag used for?",
      answer: "Serves different images for different screen sizes (responsive images).",
      example: "<picture>\n  <source media=\"(min-width: 1000px)\" srcset=\"large.jpg\">\n  <source media=\"(min-width: 600px)\" srcset=\"medium.jpg\">\n  <img src=\"small.jpg\" alt=\"Responsive image\">\n</picture>",
      output: "Desktop sees large.jpg, tablet medium.jpg, mobile small.jpg.",
      note: "Improves performance on mobile devices."
    },
    {
      question: "What is the `template` tag used for?",
      answer: "Defines HTML fragment that is not rendered until used by JavaScript.",
      example: "<template id=\"card\">\n  <div class=\"card\">Card content</div>\n</template>\n<button onclick=\"clone()\">Add Card</button>\n<script>\nfunction clone() {\n  const template = document.getElementById('card');\n  const clone = template.content.cloneNode(true);\n  document.body.appendChild(clone);\n}\n</script>",
      output: "Template not visible until button is clicked to clone it.",
      note: "Perfect for creating repeating elements without JavaScript strings."
    }
  ],
  experienced: [
    {
      question: "How do you optimize HTML for performance?",
      answer: "Minify HTML, use async/defer for scripts, lazy load images, reduce DOM size, use preload/preconnect.",
      example: "<img src='image.jpg' loading='lazy' alt='Lazy loaded image'>\n<script src='script.js' defer></script>\n<link rel='preload' href='font.woff2' as='font'>\n<link rel='preconnect' href='https://api.example.com'>",
      output: "Faster page load, better Core Web Vitals.",
      note: "Use Chrome DevTools Lighthouse to audit performance."
    },
    {
      question: "Explain web components and shadow DOM.",
      answer: "Web Components allow creating reusable custom elements. Shadow DOM encapsulates styles and markup, preventing leakage.",
      example: "class MyCard extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `<style>div { border: 1px solid; }</style><div>Card content</div>`;\n  }\n}\ncustomElements.define('my-card', MyCard);\n\n<!-- Usage -->\n<my-card></my-card>",
      output: "<my-card> renders a styled card with isolated CSS.",
      note: "Shadow DOM styles don't affect outside page, and outside styles don't affect shadow DOM."
    },
    {
      question: "What are ARIA attributes? When do you use them?",
      answer: "ARIA (Accessible Rich Internet Applications) attributes improve accessibility for dynamic content and custom components.",
      example: "<div role=\"button\" aria-label=\"Close\" aria-disabled=\"false\" tabindex=\"0\">\n  ✕\n</div>\n<nav aria-label=\"Main navigation\">...</nav>\n<div aria-live=\"polite\">Updated content</div>",
      output: "Screen readers announce roles, states, and live regions correctly.",
      note: "Use native HTML elements when possible; ARIA is for when native isn't enough."
    },
    {
      question: "What is the critical rendering path in HTML?",
      answer: "The sequence browsers follow to convert HTML, CSS, and JS into rendered pixels: constructing DOM tree, CSSOM tree, render tree, layout, paint.",
      example: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <script src=\"script.js\" defer></script>\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>",
      output: "Browser parses HTML, fetches CSS/JS, constructs trees, then paints.",
      note: "Minimize render-blocking resources (CSS in head, async/defer JS)."
    },
    {
      question: "What is the difference between `defer` and `async` in script tags?",
      answer: "Both load scripts asynchronously. defer runs after HTML parsing (in order), async runs as soon as loaded (no order guarantee).",
      example: "<script src=\"script1.js\" defer></script>\n<script src=\"script2.js\" defer></script>\n<!-- Runs script1 then script2 after HTML parsed -->\n\n<script src=\"analytics.js\" async></script>\n<!-- Runs as soon as loaded, order not guaranteed -->",
      output: "defer preserves execution order, async doesn't.",
      note: "Use async for independent scripts (analytics), defer for dependent scripts."
    },
    {
      question: "Explain the concept of HTML sanitization and why it's important.",
      answer: "HTML sanitization removes dangerous code (XSS attacks) from user-generated content to prevent security breaches.",
      example: "// Unsafe - would execute script\nuserInput = \"<img src=x onerror=alert('XSS')>\";\n// Sanitized output\ndiv.textContent = userInput; // Escapes HTML",
      output: "Safe HTML that doesn't execute malicious scripts.",
      note: "Always sanitize user input. Use DOMPurify library or server-side sanitization."
    },
    {
      question: "What is the difference between `localStorage`, `sessionStorage`, and cookies?",
      answer: "localStorage (10MB, persists until cleared), sessionStorage (5MB, clears on tab close), cookies (4KB, sent to server).",
      example: "// localStorage - permanent\nlocalStorage.setItem('theme', 'dark');\n\n// sessionStorage - per session\nsessionStorage.setItem('temp', 'value');\n\n// Cookie - sent to server\ndocument.cookie = \"user=John; max-age=3600\";",
      output: "localStorage persists forever, sessionStorage for tab session, cookies sent to server.",
      note: "Cookies have security flags (HttpOnly, Secure, SameSite) for protection."
    },
    {
      question: "What is the purpose of the `preload`, `prefetch`, and `preconnect` link types?",
      answer: "preload = fetch critical resources early. prefetch = fetch for next navigation. preconnect = pre-establish connection.",
      example: "<!-- Preload critical CSS -->\n<link rel=\"preload\" href=\"critical.css\" as=\"style\">\n\n<!-- Prefetch next page resources -->\n<link rel=\"prefetch\" href=\"page2.html\">\n\n<!-- Preconnect to external domain -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">",
      output: "Resources load faster, improving perceived performance.",
      note: "Don't overuse preload as it competes with other resources."
    },
    {
      question: "Explain HTML5 form validation attributes and constraints.",
      answer: "HTML5 provides built-in validation: required, pattern, min/max, minlength/maxlength, type(email/url/number).",
      example: "<form>\n  <input type=\"email\" required placeholder=\"Email\">\n  <input type=\"url\" placeholder=\"Website\">\n  <input type=\"number\" min=\"18\" max=\"99\" placeholder=\"Age\">\n  <input pattern=\"[A-Za-z]{3,}\" title=\"At least 3 letters\" placeholder=\"Code\">\n  <input type=\"submit\">\n</form>",
      output: "Browser shows validation errors without JavaScript.",
      note: "Never rely only on client-side validation; always validate on server."
    },
    {
      question: "What is the `rel='noopener'` attribute and why is it important?",
      answer: "Prevents new page from accessing the opening page's window object, improving security and performance.",
      example: "<a href=\"https://external-site.com\" target=\"_blank\" rel=\"noopener\">External Link</a>",
      output: "Opens in new tab without exposing the opener page.",
      note: "Always use rel='noopener' with target='_blank' for security."
    },
    {
      question: "Explain the concept of repaint and reflow in browser rendering.",
      answer: "Reflow = recalculating layout of elements (expensive). Repaint = redrawing visible content (cheaper).",
      example: "// Triggers reflow (bad)\nelement.style.width = '200px';\nelement.style.height = '200px';\n\n// Triggers repaint only (good)\nelement.style.backgroundColor = 'red';",
      output: "Reflow is costlier and should be minimized.",
      note: "Batch DOM changes, use CSS classes, and avoid reading layout properties after setting them."
    },
    {
      question: "What are web workers? How do they relate to HTML?",
      answer: "Web Workers run JavaScript in background threads, preventing UI blocking. They can't access DOM directly.",
      example: "// main.js\nconst worker = new Worker('worker.js');\nworker.postMessage({data: [1,2,3,4,5]});\nworker.onmessage = (e) => console.log(e.data);\n\n// worker.js\nself.onmessage = (e) => {\n  const sum = e.data.data.reduce((a,b) => a+b, 0);\n  self.postMessage(sum);\n};",
      output: "Heavy computation runs in background without freezing UI.",
      note: "Use workers for CPU-intensive tasks like image processing, complex calculations."
    },
    {
      question: "What is the `loading='lazy'` attribute and when should you use it?",
      answer: "Defers loading of off-screen images/videos until they're about to be visible, improving initial page load.",
      example: "<img src=\"large-image.jpg\" alt=\"Large image\" loading=\"lazy\" width=\"800\" height=\"600\">\n<iframe src=\"video.html\" loading=\"lazy\"></iframe>",
      output: "Images load only when user scrolls near them.",
      note: "Works automatically in modern browsers. Always specify width/height to prevent layout shift."
    },
    {
      question: "Explain the `contenteditable` attribute.",
      answer: "Makes HTML elements editable by users directly in the browser.",
      example: "<div contenteditable=\"true\">\n  You can edit this text directly in the browser!\n</div>\n<p contenteditable=\"true\">This paragraph is also editable.</p>",
      output: "User can click and edit the text content.",
      note: "Use with JavaScript to save changes or build rich text editors."
    },
    {
      question: "What is the `spellcheck` attribute?",
      answer: "Enables or disables browser's built-in spell checker for editable elements.",
      example: "<textarea spellcheck=\"true\">Mispeled word</textarea>\n<div contenteditable=\"true\" spellcheck=\"false\">No spell check here</div>",
      output: "Misspelled words get red underline in first textarea.",
      note: "Enabled by default on input/textarea/spellcheckable elements."
    },
    {
      question: "What is the `translate` attribute?",
      answer: "Specifies whether element content should be translated when page is localized.",
      example: "<p translate=\"no\">Company Name</p>\n<p translate=\"yes\">This content should be translatable.</p>\n<span translate=\"no\">Brand Name</span>",
      output: "translate='no' content stays unchanged during translation.",
      note: "Use for brand names, technical terms, and code snippets."
    },
    {
      question: "Explain the `sandbox` attribute for iframes.",
      answer: "Restricts capabilities of embedded content for security (scripts, forms, popups, etc.).",
      example: "<iframe src=\"untrusted.html\" sandbox></iframe>\n<!-- Most restrictive -->\n\n<iframe src=\"external.html\" sandbox=\"allow-scripts allow-same-origin\"></iframe>\n<!-- Allows scripts but keeps sandbox -->",
      output: "Embedded content has limited capabilities, preventing malicious actions.",
      note: "Use empty sandbox for maximum security, add permissions as needed."
    },
    {
      question: "What is the `srcdoc` attribute for iframes?",
      answer: "Specifies inline HTML content to embed, instead of using `src` attribute.",
      example: "<iframe srcdoc=\"<h1>Hello World</h1><p>This is inline content</p>\"></iframe>",
      output: "Shows inline HTML inside iframe, no external request needed.",
      note: "Useful for demos and documentation where content is static."
    },
    {
      question: "Explain the `download` attribute for links.",
      answer: "Tells browser to download linked resource instead of navigating to it.",
      example: "<a href=\"document.pdf\" download>Download PDF</a>\n<a href=\"image.jpg\" download=\"my-image.jpg\">Save Image As</a>",
      output: "Clicking link downloads the file instead of opening it.",
      note: "Works only for same-origin URLs or blob: and data: schemes."
    },
    {
      question: "What is the `ping` attribute for links?",
      answer: "Sends POST request with ping data when link is clicked (for tracking).",
      example: "<a href=\"https://example.com\" ping=\"https://analytics.com/track\">Click me</a>",
      output: "Browser sends POST request to ping URL when link is clicked.",
      note: "Controversial due to privacy concerns; may be blocked by browsers/extensions."
    },
    {
      question: "Explain the `referrerpolicy` attribute.",
      answer: "Controls how much referrer information is sent when following links or fetching resources.",
      example: "<a href=\"https://example.com\" referrerpolicy=\"no-referrer\">No referrer</a>\n<img src=\"image.jpg\" referrerpolicy=\"origin\">",
      output: "Limits referrer information based on policy.",
      note: "Policies: no-referrer, same-origin, strict-origin-when-cross-origin (default)."
    },
      {
      question: "What are HTML5 microdata and schema.org?",
      answer: "Microdata adds semantic metadata to HTML. Schema.org provides standard vocabulary for rich search results.",
      example: "<div itemscope itemtype=\"https://schema.org/Person\">\n  <span itemprop=\"name\">John Doe</span>\n  <span itemprop=\"jobTitle\">Professor</span>\n  <span itemprop=\"telephone\">(123) 456-7890</span>\n</div>",
      output: "Google shows rich snippets (star ratings, prices, event dates) in search results.",
      note: "Improves SEO by helping search engines understand content context."
    },
    {
      question: "What is the `is` attribute and custom built-in elements?",
      answer: "The `is` attribute allows extending standard HTML elements with custom behavior.",
      example: "<button is=\"fancy-button\">Click me</button>\n<script>\n  class FancyButton extends HTMLButtonElement {\n    constructor() {\n      super();\n      this.addEventListener('click', () => alert('Fancy!'));\n    }\n  }\n  customElements.define('fancy-button', FancyButton, { extends: 'button' });\n</script>",
      output: "Button has custom behavior while keeping built-in semantics.",
      note: "Upgrade is only supported for autonomous custom elements, not extending built-ins."
    },
    {
      question: "What is the difference between `<slot>` and `<template>`?",
      answer: "`<template>` holds content not rendered until activated. `<slot>` acts as placeholder inside web components.",
      example: "<template id=\"post\">\n  <div class=\"post\">\n    <slot name=\"title\">Default title</slot>\n    <slot name=\"content\">Default content</slot>\n  </div>\n</template>\n<my-post>\n  <span slot=\"title\">My Article</span>\n  <p slot=\"content\">Article content here...</p>\n</my-post>",
      output: "Template defines structure, slot provides insertion points for content.",
      note: "Slots are essential for reusable web components with customizable content."
    },
    {
      question: "What is the `rel='preload'` vs `rel='prefetch'`?",
      answer: "Preload fetches resource for current navigation, prefetch fetches for next navigation (lower priority).",
      example: "<link rel=\"preload\" as=\"image\" href=\"hero.jpg\">\n<link rel=\"preload\" as=\"font\" href=\"font.woff2\" crossorigin>\n<link rel=\"prefetch\" href=\"page2.html\">",
      output: "Preload resources load immediately, prefetch resources load after page is idle.",
      note: "Preload without proper `as` attribute fetches twice."
    },
    {
      question: "What is the `enterkeyhint` attribute?",
      answer: "Specifies action label on mobile keyboard's Enter key (e.g., search, next, done, go).",
      example: "<input type=\"text\" enterkeyhint=\"search\">\n<input type=\"text\" enterkeyhint=\"next\">\n<input type=\"text\" enterkeyhint=\"done\">",
      output: "Mobile keyboard shows 'Search', 'Next', or 'Done' on Enter key.",
      note: "Improves mobile form experience by matching enter key action to user expectation."
    },
    {
      question: "What is the `inputmode` attribute?",
      answer: "Hints at type of virtual keyboard to show, without changing input type.",
      example: "<input type=\"text\" inputmode=\"numeric\" placeholder=\"Numeric keyboard\">\n<input type=\"text\" inputmode=\"email\" placeholder=\"Email keyboard\">\n<input type=\"text\" inputmode=\"url\" placeholder=\"URL keyboard\">",
      output: "Shows numeric, email, or URL keyboard without validating content.",
      note: "Useful when input type validation (number/email) might cause browser quirks."
    },
    {
      question: "Explain the `integrity` attribute with SRI (Subresource Integrity).",
      answer: "SRI checks fetched resource hash matches expected value, preventing CDN tampering.",
      example: "<link rel=\"stylesheet\" href=\"https://cdn.example.com/style.css\"\n  integrity=\"sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC\">\n<script src=\"https://cdn.example.com/script.js\"\n  integrity=\"sha384-...\" crossorigin=\"anonymous\"></script>",
      output: "Browser rejects resource if integrity hash doesn't match.",
      note: "Always use crossorigin attribute with SRI for cross-origin resources."
    },
    {
      question: "What is the `nonce` for inline script/style?",
      answer: "Nonce allows specific inline scripts/styles through Content Security Policy.",
      example: "<meta http-equiv=\"Content-Security-Policy\" content=\"script-src 'nonce-abc123'\">\n<script nonce=\"abc123\">\n  console.log('Allowed inline script');\n</script>",
      output: "Only script with matching nonce executes; others blocked.",
      note: "More secure than 'unsafe-inline', nonce must be unique per request."
    },
    {
      question: "Explain the `capture` attribute for file inputs.",
      answer: "Specifies device camera/microphone capture source for file input.",
      example: "<input type=\"file\" accept=\"image/*\" capture=\"environment\">\n<input type=\"file\" accept=\"image/*\" capture=\"user\">\n<input type=\"file\" accept=\"video/*\" capture>",
      output: "Opens camera (environment = back, user = front) or microphone directly.",
      note: "Works only on mobile devices, desktop falls back to file picker."
    },
    {
      question: "What is the `multiple` attribute and where can it be used?",
      answer: "Allows multiple values/elements selection on inputs and selects.",
      example: "<input type=\"file\" multiple>\n<input type=\"email\" multiple>\n<select multiple size=\"3\">\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>",
      output: "File input selects multiple files, email input accepts multiple comma-separated emails.",
      note: "Use Ctrl/Cmd to select multiple options in select multiple."
    },
    {
      question: "What is the difference between `readonly` and `disabled` attributes?",
      answer: "readonly prevents editing but submits value. disabled prevents interaction and doesn't submit.",
      example: "<input type=\"text\" value=\"Readonly\" readonly>\n<input type=\"text\" value=\"Disabled\" disabled>\n<!-- disabled field not sent in form submission -->",
      output: "Readonly field is focusable and its value submits. Disabled field is greyed out, not focusable.",
      note: "Use readonly for auto-filled fields, disabled for optional or conditional fields."
    },
    {
      question: "What is the `autocomplete` attribute and its values?",
      answer: "Controls browser's autofill behavior for form fields.",
      example: "<input type=\"text\" name=\"full-name\" autocomplete=\"name\">\n<input type=\"email\" name=\"email\" autocomplete=\"email\">\n<input type=\"tel\" name=\"phone\" autocomplete=\"tel\">\n<input type=\"text\" name=\"address\" autocomplete=\"street-address\">\n<input type=\"text\" name=\"credit-card\" autocomplete=\"off\">",
      output: "Browser fills fields based on stored user data.",
      note: "Use off for sensitive fields, proper values help password managers."
    },
    {
      question: "What is the `novalidate` attribute for forms?",
      answer: "Disables browser's built-in form validation, allowing custom validation.",
      example: "<form novalidate>\n  <input type=\"email\" required>\n  <button type=\"submit\">Submit</button>\n</form>\n<script>\n  document.querySelector('form').addEventListener('submit', (e) => {\n    // custom validation logic\n    e.preventDefault();\n  });\n</script>",
      output: "Browser doesn't show default validation messages.",
      note: "Use when implementing custom validation or when you need remote validation."
    },
    {
      question: "What is the `formnovalidate` attribute on submit buttons?",
      answer: "Disables validation on form submit for that specific button, allowing skip-validation actions.",
      example: "<form>\n  <input type=\"email\" required>\n  <button type=\"submit\">Validate</button>\n  <button type=\"submit\" formnovalidate>Save Draft (No Validation)</button>\n</form>",
      output: "First button validates, second bypasses validation.",
      note: "Useful for 'Save Draft' or 'Preview' buttons that don't require validation."
    },
    {
      question: "What is the `formenctype` attribute?",
      answer: "Overrides form's enctype for specific submit button.",
      example: "<form action=\"/upload\" method=\"post\">\n  <input type=\"file\" name=\"photo\">\n  <button type=\"submit\" formenctype=\"multipart/form-data\">Upload File</button>\n  <button type=\"submit\">Submit (Text only)</button>\n</form>",
      output: "First button sends as multipart/form-data, second sends as default application/x-www-form-urlencoded.",
      note: "Values: application/x-www-form-urlencoded, multipart/form-data, text/plain."
    },
    {
      question: "Explain the `crossorigin` attribute for media elements.",
      answer: "Specifies CORS settings when fetching media from different origins.",
      example: "<img src=\"https://cdn.example.com/image.jpg\" crossorigin=\"anonymous\">\n<video src=\"https://cdn.example.com/video.mp4\" crossorigin=\"use-credentials\"></video>",
      output: "Canvas can draw CORS images, error logs show CORS failures.",
      note: "Anonymous sends no credentials, use-credentials sends cookies/auth headers."
    },
    {
      question: "What is the `playsinline` attribute for video?",
      answer: "Forces video to play inline on iOS (not fullscreen automatically).",
      example: "<video src=\"video.mp4\" controls playsinline autoplay muted></video>",
      output: "Video plays inside webpage, not fullscreen, on iPhones.",
      note: "Essential for background videos and seamless user experience on iOS."
    },
    {
      question: "What is the `poster` attribute for video?",
      answer: "Shows an image while video loads or before play.",
      example: "<video src=\"movie.mp4\" poster=\"thumbnail.jpg\" controls width=\"400\" height=\"300\"></video>",
      output: "Shows thumbnail.jpg before video loads or before play.",
      note: "Improves perceived performance and provides visual preview."
    },
    {
      question: "Explain the `preload` attribute for video/audio.",
      answer: "Suggests how much media to load: none (nothing), metadata (only duration/dimensions), auto (full video).",
      example: "<video src=\"movie.mp4\" preload=\"none\">\n<video src=\"hero.mp4\" preload=\"auto\" controls>\n<audio src=\"podcast.mp3\" preload=\"metadata\">",
      output: "preload=\"none\" loads nothing, auto loads entire video, metadata loads minimal info.",
      note: "Don't use auto for many videos on page, it wastes bandwidth."
    }
  ]
};
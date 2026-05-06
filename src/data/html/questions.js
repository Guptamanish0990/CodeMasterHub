export const questions = [
  {
    line: "<!DOCTYPE html>",
    explanation: "Declares the document type as HTML5. Tells the browser to render the page in standards mode.",
    example: "Must be the first line of every HTML document.",
    output: "Browser renders page in standards mode (not quirks mode)."
  },
  {
    line: "<html lang='en'>",
    explanation: "The root element that wraps all content on the page. The lang attribute specifies the language (English).",
    example: "<html lang='en'>...all content...</html>",
    output: "Sets document language to English, helps screen readers and search engines."
  },
  {
    line: "<head>",
    explanation: "Contains meta-information about the document (title, CSS links, character set). Content here is not visible on the page.",
    example: "<head><title>My Page</title><link rel='stylesheet' href='style.css'></head>",
    output: "Nothing visible, but sets up page properties and external resources."
  },
  {
    line: "<title>Page Title</title>",
    explanation: "Sets the title shown in the browser tab, bookmarks, and search engine results.",
    example: "<title>My Awesome Website</title>",
    output: "Browser tab shows 'My Awesome Website'."
  },
  {
    line: "<meta charset='UTF-8'>",
    explanation: "Sets the character encoding to UTF-8, which supports all Unicode characters (emojis, special symbols, international text).",
    example: "<meta charset='UTF-8'>",
    output: "Displays all characters correctly: ©, €, 汉字, 😀."
  },
  {
    line: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
    explanation: "Controls the viewport for responsive design. Makes the page scale properly on mobile devices.",
    example: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
    output: "Page width matches device width, zoom is set to 100%."
  },
  {
    line: "<body>",
    explanation: "Contains all the visible content of the webpage (text, images, videos, buttons, forms).",
    example: "<body><h1>Hello</h1><p>Visible content</p></body>",
    output: "Shows 'Hello' heading and paragraph text on the page."
  },
  {
    line: "<h1>Main Heading</h1>",
    explanation: "The most important heading. Used once per page for the main title. Search engines give it high priority.",
    example: "<h1>Welcome to My Website</h1>",
    output: "Large, bold text at the top of the page."
  },
  {
    line: "<h2>Subheading</h2>",
    explanation: "Second-level heading, smaller than h1. Used for chapter titles or major sections.",
    example: "<h2>About Us</h2><p>Company information...</p>",
    output: "Medium-sized bold text, smaller than h1."
  },
  {
    line: "<p>Paragraph text</p>",
    explanation: "Defines a paragraph of text. Browser adds margin (spacing) above and below automatically.",
    example: "<p>This is a paragraph with multiple sentences.</p>",
    output: "Text block with space above and below."
  },
  {
    line: "<br>",
    explanation: "Line break - moves text to the next line without starting a new paragraph. Self-closing tag.",
    example: "First line<br>Second line<br>Third line",
    output: "Text appears on three separate lines, but still in same paragraph."
  },
  {
    line: "<hr>",
    explanation: "Horizontal rule - creates a thematic break (horizontal line) between content sections.",
    example: "<h2>Section 1</h2><p>Content</p><hr><h2>Section 2</h2>",
    output: "Displays a horizontal line separating the two sections."
  },
  {
    line: "<!-- Comment -->",
    explanation: "HTML comment - not visible on the page. Used to leave notes or temporarily hide code.",
    example: "<!-- This is a comment, not visible on page -->",
    output: "Nothing visible in browser. Only visible in source code."
  },
  {
    line: "<strong>Important text</strong>",
    explanation: "Makes text bold AND indicates strong importance. Screen readers emphasize this, search engines give weight.",
    example: "<p><strong>Warning:</strong> This is critical information.</p>",
    output: "Bold text with semantic meaning."
  },
  {
    line: "<em>Emphasized text</em>",
    explanation: "Makes text italic AND adds emphasis. Screen readers change tone when reading.",
    example: "<p>This is <em>very</em> important.</p>",
    output: "Italic text with semantic meaning."
  },
  {
    line: "<b>Bold text</b>",
    explanation: "Makes text bold (visual only). No semantic meaning. Use for visual styling only.",
    example: "<p>This is <b>bold</b> but not important.</p>",
    output: "Bold text (visual only)."
  },
  {
    line: "<i>Italic text</i>",
    explanation: "Makes text italic (visual only). No semantic meaning. Use for foreign words, technical terms.",
    example: "<p>The word <i>bonjour</i> means hello in French.</p>",
    output: "Italic text (visual only)."
  },
  {
    line: "<mark>Highlighted text</mark>",
    explanation: "Highlights text with a yellow background (like a marker pen). Used for search results or important parts.",
    example: "<p>Search results for 'HTML': <mark>HTML</mark> found in 0.5 seconds.</p>",
    output: "Text appears with yellow background highlight."
  },
  {
    line: "<small>Small text</small>",
    explanation: "Makes text smaller. Used for copyright notices, disclaimers, legal text, footnotes.",
    example: "<small>&copy; 2024 My Company. All rights reserved.</small>",
    output: "Smaller font size text."
  },
  {
    line: "<del>Deleted text</del>",
    explanation: "Shows text that has been deleted (strikethrough). Often used with <ins>.",
    example: "<p>Original price: <del>$100</del> <ins>$79</ins> Sale!</p>",
    output: "$100 appears with a line through it."
  },
  {
    line: "<ins>Inserted text</ins>",
    explanation: "Shows text that has been inserted/added (underline). Often used with <del>.",
    example: "<p><del>Old version</del> <ins>New version</ins></p>",
    output: "Underlined text showing added content."
  },
  {
    line: "H<sub>2</sub>O",
    explanation: "Subscript - text appears half a character below the normal line. Used for chemical formulas.",
    example: "H<sub>2</sub>O, CO<sub>2</sub>",
    output: "H₂O, CO₂ (the numbers appear below the line)."
  },
  {
    line: "X<sup>2</sup>",
    explanation: "Superscript - text appears half a character above the normal line. Used for mathematical exponents.",
    example: "X<sup>2</sup> + Y<sup>2</sup> = Z<sup>2</sup>",
    output: "X² + Y² = Z² (the 2 appears above the line)."
  },
  {
    line: "<u>Underlined text</u>",
    explanation: "Adds an underline to text. Use for emphasis, misspelled words, or proper names.",
    example: "<p>This is <u>underlined</u> for emphasis.</p>",
    output: "Text with underline below it."
  },
  {
    line: "<ul><li>Item</li></ul>",
    explanation: "Unordered list - displays bullet points. Order doesn't matter. li = each list item.",
    example: "<ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>",
    output: "• Apple\n• Banana\n• Orange"
  },
  {
    line: "<ol><li>Step 1</li></ol>",
    explanation: "Ordered list - displays numbers (1,2,3). Order matters. li = each list item.",
    example: "<ol><li>Wake up</li><li>Brush teeth</li><li>Have breakfast</li></ol>",
    output: "1. Wake up\n2. Brush teeth\n3. Have breakfast"
  },
  {
    line: "<dl><dt>Term</dt><dd>Definition</dd></dl>",
    explanation: "Description list - used for glossaries, terms and their definitions. dt = term, dd = description.",
    example: "<dl><dt>HTML</dt><dd>Hypertext Markup Language</dd></dl>",
    output: "HTML (bold)\n  Hypertext Markup Language (indented)"
  },
  {
    line: "<a href='https://google.com'>Link</a>",
    explanation: "Anchor tag - creates a hyperlink to another page, website, email, or phone number.",
    example: "<a href='https://google.com'>Go to Google</a>",
    output: "Clickable 'Go to Google' link that navigates to Google."
  },
  {
    line: "<a href='#section'>Jump to Section</a>",
    explanation: "Internal link - jumps to an element with matching id on the same page.",
    example: "<a href='#footer'>Go to footer</a>",
    output: "Clicking jumps to element with id='footer'."
  },
  {
    line: "<a href='mailto:info@example.com'>Email Us</a>",
    explanation: "Email link - opens the user's default email client with the address filled.",
    example: "<a href='mailto:info@example.com'>Send us an email</a>",
    output: "Clicking opens email client with 'info@example.com' in To field."
  },
  {
    line: "<a href='tel:+1234567890'>Call Us</a>",
    explanation: "Phone link - on mobile devices, opens phone dialer with the number.",
    example: "<a href='tel:+1234567890'>Call customer service</a>",
    output: "Clicking opens phone dialer with the number."
  },
  {
    line: "<a href='https://example.com' target='_blank'>Open in New Tab</a>",
    explanation: "Opens link in a new browser tab instead of the current one.",
    example: "<a href='https://google.com' target='_blank'>Google in new tab</a>",
    output: "Link opens in new tab. Add rel='noopener' for security."
  },
  {
    line: "<img src='photo.jpg' alt='Description'>",
    explanation: "Image tag - displays an image. src = image path, alt = description (required for accessibility).",
    example: "<img src='mountain.jpg' alt='Beautiful mountain view' width='300' height='200'>",
    output: "Image appears. If image fails to load, alt text appears."
  },
  {
    line: "<picture><source media='(min-width: 1000px)' srcset='large.jpg'><img src='small.jpg'></picture>",
    explanation: "Responsive image - serves different images based on screen size.",
    example: "<picture><source media='(min-width: 1000px)' srcset='desktop.jpg'><img src='mobile.jpg'></picture>",
    output: "Desktop sees desktop.jpg, mobile sees mobile.jpg."
  },
  {
    line: "<figure><img src='image.jpg'><figcaption>Caption text</figcaption></figure>",
    explanation: "Groups an image with its caption. The caption is semantically connected to the image.",
    example: "<figure><img src='sunset.jpg'><figcaption>Beautiful sunset at the beach</figcaption></figure>",
    output: "Image appears with caption text below it."
  },
  {
    line: "<video src='movie.mp4' controls></video>",
    explanation: "Video player - embeds a video with built-in controls (play, pause, volume, fullscreen).",
    example: "<video width='400' controls><source src='movie.mp4' type='video/mp4'></video>",
    output: "Video player appears with play/pause, volume, and fullscreen buttons."
  },
  {
    line: "<audio src='song.mp3' controls></audio>",
    explanation: "Audio player - embeds an audio file with built-in play/pause and volume controls.",
    example: "<audio controls><source src='song.mp3' type='audio/mpeg'></audio>",
    output: "Audio player appears with play/pause and volume controls."
  },
  {
    line: "<iframe src='https://youtube.com/embed/video-id'></iframe>",
    explanation: "Inline frame - embeds external content like YouTube videos, Google Maps, or other webpages.",
    example: "<iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' allowfullscreen></iframe>",
    output: "YouTube video appears inside your webpage."
  },
  {
    line: "<div>Container</div>",
    explanation: "Block-level container for grouping elements. Takes full width, starts on new line.",
    example: "<div class='header'><h1>Title</h1><p>Description</p></div>",
    output: "Creates a block container. Nothing visible by default, but groups content."
  },
  {
    line: "<span>Inline text</span>",
    explanation: "Inline container for styling small parts of text. Stays on same line, takes only needed width.",
    example: "<p>This is <span style='color:red'>red text</span> inside a paragraph.</p>",
    output: "Only 'red text' appears in red, rest of paragraph normal."
  },
  {
    line: "<table border='1'><table><th>Name</th></td><td><td>John</td></tr></table>",
    explanation: "Table - displays data in rows and columns. tr = row, th = header cell, td = data cell.",
    example: "<table><tr><th>Name</th><th>Age</th></tr><tr><td>John</td><td>25</td></tr></table>",
    output: "Data displayed in grid format with bold headers."
  },
  {
    line: "<form action='/submit' method='POST'>",
    explanation: "Form container for collecting user input (text, email, password, etc.).",
    example: "<form action='/submit' method='POST'><input type='text' name='name'><button>Submit</button></form>",
    output: "Displays input fields and submit button for user data entry."
  },
  {
    line: "<input type='text' placeholder='Enter name'>",
    explanation: "Text input field - users can type text. placeholder shows hint text inside.",
    example: "<input type='text' placeholder='Full name' required>",
    output: "Text box where users can type their name."
  },
  {
    line: "<label for='name'>Name:</label>",
    explanation: "Label for input field. Clicking the label focuses the associated input.",
    example: "<label for='name'>Name:</label><input id='name' type='text'>",
    output: "Clicking 'Name:' text focuses the input field."
  },
  {
    line: "<select><option>Option 1</option></select>",
    explanation: "Dropdown menu - users can select from a list of options.",
    example: "<select><option>Apple</option><option>Banana</option><option>Orange</option></select>",
    output: "Shows dropdown arrow. Click to see and select options."
  },
  {
    line: "<textarea rows='4' cols='50'></textarea>",
    explanation: "Multi-line text input area for longer text like comments, messages, or reviews.",
    example: "<textarea rows='4' cols='50' placeholder='Enter your message here...'></textarea>",
    output: "Resizable text box that can hold multiple lines of text."
  },
  {
    line: "<button type='submit'>Click Me</button>",
    explanation: "Clickable button. Can submit forms or trigger JavaScript functions.",
    example: "<button type='submit'>Submit Form</button>",
    output: "Button that users can click."
  },
  {
    line: "<input type='radio' name='gender' value='male'> Male",
    explanation: "Radio button - only one can be selected from options with the same name.",
    example: "<input type='radio' name='gender'> Male<input type='radio' name='gender'> Female",
    output: "Circle that can be selected. Only one per group can be checked."
  },
  {
    line: "<input type='checkbox' value='reading'> Reading",
    explanation: "Checkbox - multiple options can be selected at once.",
    example: "<input type='checkbox'> Reading<input type='checkbox'> Music<input type='checkbox'> Sports",
    output: "Square boxes that can be checked/unchecked. Multiple can be selected."
  },
  {
    line: "<input type='date'>",
    explanation: "Date picker - shows a calendar for selecting a date.",
    example: "<input type='date'>",
    output: "Date picker popup appears when clicked."
  },
  {
    line: "<input type='color'>",
    explanation: "Color picker - shows a color selection popup.",
    example: "<input type='color' value='#3498db'>",
    output: "Color picker button. Click to select any color from palette."
  },
  {
    line: "<input type='range' min='0' max='100' value='50'>",
    explanation: "Range slider - users can select a value by dragging a slider.",
    example: "<input type='range' min='0' max='100' value='75'>",
    output: "Slider control that can be dragged left/right to select value."
  },
  {
    line: "<progress value='70' max='100'>70%</progress>",
    explanation: "Progress bar - shows completion progress of a task.",
    example: "<progress value='65' max='100'>65%</progress>",
    output: "Bar filled to 65% showing task progress."
  },
  {
    line: "<meter value='0.6' min='0' max='1'>60%</meter>",
    explanation: "Meter/gauge - shows a static measurement within a known range (disk usage, test score).",
    example: "<meter value='0.8' min='0' max='1' low='0.3' high='0.7'>80%</meter>",
    output: "Colored gauge: green (good), yellow (warning), red (critical)."
  },
  {
    line: "<details><summary>Click to expand</summary><p>Hidden content</p></details>",
    explanation: "Expandable/collapsible section without JavaScript. Summary is always visible.",
    example: "<details><summary>What is HTML?</summary><p>HTML is the standard markup language.</p></details>",
    output: "Shows 'Click to expand'. Click to reveal hidden content."
  },
  {
    line: "<dialog id='modal'>Content</dialog>",
    explanation: "Modal dialog/popup window. Use showModal() to open as modal (with backdrop).",
    example: "<dialog id='myModal'><p>This is a modal dialog</p><button onclick='myModal.close()'>Close</button></dialog>",
    output: "Popup window that disables interaction with rest of page until closed."
  },
  {
    line: "<template id='card'>Content</template>",
    explanation: "HTML template - not rendered until cloned and added with JavaScript. Great for repeating elements.",
    example: "<template id='cardTemplate'><div class='card'>Card content</div></template>",
    output: "Nothing visible. Template content used by JavaScript to create dynamic elements."
  },
  {
    line: "<header>Header content</header>",
    explanation: "Semantic tag for introductory content or navigation. Usually contains logo, title, nav menu.",
    example: "<header><h1>My Site</h1><nav>Home | About</nav></header>",
    output: "Top section of webpage containing site branding and navigation."
  },
  {
    line: "<footer>Footer content</footer>",
    explanation: "Semantic tag for footer content. Typically contains copyright, contact info, legal links.",
    example: "<footer><p>&copy; 2024 My Company</p><a href='/privacy'>Privacy Policy</a></footer>",
    output: "Bottom section of webpage with copyright and footer links."
  },
  {
    line: "<nav>Navigation links</nav>",
    explanation: "Semantic tag for navigation links (primary menu). Helps screen readers identify navigation area.",
    example: "<nav><a href='/'>Home</a> <a href='/about'>About</a> <a href='/contact'>Contact</a></nav>",
    output: "Screen readers announce 'navigation landmark' for this section."
  },
  {
    line: "<main>Main content</main>",
    explanation: "Semantic tag for primary content. Only ONE main per page. Excludes headers, footers, sidebars.",
    example: "<main><article><h1>Blog Post</h1><p>Content...</p></article></main>",
    output: "Screen readers can jump directly to main content. Helps SEO."
  },
  {
    line: "<article>Blog post</article>",
    explanation: "Semantic tag for self-contained, independent content that could be distributed separately.",
    example: "<article><h2>How to Learn HTML</h2><p>Step by step guide...</p></article>",
    output: "Independent content block suitable for syndication."
  },
  {
    line: "<section><h2>Section Title</h2></section>",
    explanation: "Semantic tag for grouping related content with a heading. Each section should have a heading.",
    example: "<section><h2>Our Services</h2><p>Web design, development, SEO</p></section>",
    output: "Logical grouping of related content with section heading."
  },
  {
    line: "<aside>Sidebar content</aside>",
    explanation: "Semantic tag for content tangentially related to main content (sidebars, ads, related links).",
    example: "<aside><h3>Related Articles</h3><ul><li>Link 1</li><li>Link 2</li></ul></aside>",
    output: "Sidebar content displayed beside main content."
  },
  {
    line: "<time datetime='2024-03-15'>March 15, 2024</time>",
    explanation: "Semantic tag for dates and times. Machine-readable datetime attribute helps search engines.",
    example: "<p>Published on <time datetime='2024-03-15'>March 15, 2024</time></p>",
    output: "Shows 'March 15, 2024'. datetime attribute helps search engines understand."
  },
  {
    line: "<abbr title='Hypertext Markup Language'>HTML</abbr>",
    explanation: "Abbreviation tag. Shows full form on mouse hover. Helps screen readers.",
    example: "<p>I study <abbr title='Hypertext Markup Language'>HTML</abbr></p>",
    output: "HTML shows dotted underline. Hover shows 'Hypertext Markup Language'."
  },
  {
    line: "<address>Contact: email@example.com</address>",
    explanation: "Semantic tag for contact information of the author or organization.",
    example: "<address>Written by John Doe.<br>Email: john@example.com</address>",
    output: "Contact information appears in italic, often in footer."
  },
  {
    line: "<blockquote><p>Quote text here</p></blockquote>",
    explanation: "Block quotation - for longer quotes from external sources. Usually indented.",
    example: "<blockquote>The only limit is your imagination.</blockquote>",
    output: "Indented block showing quoted text."
  },
  {
    line: "<q>Short quote</q>",
    explanation: "Inline quotation - for short quotes within a paragraph. Adds quotation marks automatically.",
    example: "<p>He said, <q>Hello world</q> and left.</p>",
    output: "Text appears in quotation marks."
  },
  {
    line: "<pre>Preformatted text</pre>",
    explanation: "Preformatted text - preserves spaces and line breaks exactly as written. Uses monospace font.",
    example: "<pre>\n  function hello() {\n    console.log('Hi');\n  }\n</pre>",
    output: "Code appears with exact indentation and line breaks preserved."
  },
  {
    line: "<code>const x = 10;</code>",
    explanation: "Code snippet - marks text as computer code. Uses monospace font.",
    example: "<p>Use <code>console.log()</code> to print values.</p>",
    output: "Text appears in monospace font indicating it's code."
  },
  {
    line: "<fieldset><legend>Group Title</legend>Form fields here</fieldset>",
    explanation: "Groups related form fields with a border and legend (caption).",
    example: "<fieldset><legend>Personal Info</legend><input type='text' placeholder='Name'></fieldset>",
    output: "Border appears around grouped fields with 'Group Title' on top."
  },
  {
    line: "<input list='countries'><datalist id='countries'><option>India</option></datalist>",
    explanation: "Autocomplete suggestions for input field. Users can type custom value or select from list.",
    example: "<input list='browsers'><datalist id='browsers'><option>Chrome</option><option>Firefox</option></datalist>",
    output: "Typing shows dropdown suggestions. User can select or continue typing."
  },
  {
    line: "<optgroup label='German Cars'><option>BMW</option></optgroup>",
    explanation: "Groups options in dropdown menu. Label is bold/italic and not selectable.",
    example: "<select><optgroup label='Fruits'><option>Apple</option></optgroup></select>",
    output: "Dropdown shows grouped options with indented items."
  }
];
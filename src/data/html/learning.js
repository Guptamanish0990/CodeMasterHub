// /data/html/learning.js - Complete HTML Learning Guide (99 Topics)
// All descriptions are in easy English, 4-5 lines each

export const learning = {
  // ========== BASIC HTML (49 TOPICS) ==========
  basic: {
    title: "🌱 HTML Basics - Complete Beginner's Guide",
    topics: [
      // DOCUMENT STRUCTURE (1-6)
      {
        name: "1. Document Structure Tags",
        description: "These tags make the skeleton of every webpage. DOCTYPE tells browser it's HTML5. html wraps everything. head has hidden info like title and links. body has everything users see like text and images.",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Hello World!</h1>\n    <p>This is my first webpage.</p>\n</body>\n</html>",
        lineByLine: ["Line 1: DOCTYPE - Tells browser this is HTML5", "Line 2: html - Root tag that wraps everything", "Line 3: head - Hidden info (title, meta, links)", "Line 4: meta charset - Supports all languages and emojis", "Line 5: meta viewport - Makes site work on mobile phones", "Line 6: title - Shows on browser tab", "Line 8: body - All visible content goes here", "Line 9: h1 - Main heading", "Line 10: p - Paragraph text"],
        simpleMeaning: "These tags create the basic frame of every webpage - like the foundation of a house.",
        output: "Browser tab shows 'My First Page'. Page shows big heading and a paragraph.",
        note: "DOCTYPE must be first line. Viewport meta is MUST for mobile phones."
      },
      {
        name: "2. DOCTYPE Declaration",
        description: "DOCTYPE tells browser which HTML version to use. Always use <!DOCTYPE html> for HTML5. Without DOCTYPE, browser uses 'quirks mode' which can break your layout. Put this on the very first line of every HTML file.",
        code: "<!DOCTYPE html>  <!-- HTML5 - always use this -->",
        lineByLine: ["Line 1: <!DOCTYPE html> - Browser uses modern rendering mode"],
        simpleMeaning: "DOCTYPE tells browser 'Use modern HTML rules, not old broken ones'.",
        output: "Browser uses standards mode, layout works correctly.",
        note: "Put DOCTYPE on line 1, nothing before it - not even spaces!"
      },
      {
        name: "3. HTML Element",
        description: "The <html> tag wraps everything on your page except DOCTYPE. It's the root element. The lang attribute tells browser what language your page uses. This helps screen readers pronounce words correctly.",
        code: "<html lang=\"en\">  <!-- English -->",
        lineByLine: ["Line 1: <html lang=\"en\"> - Root tag, language = English"],
        simpleMeaning: "html tag is the big box that holds your whole webpage.",
        output: "Browser knows page is in English. Screen readers pronounce correctly.",
        note: "Always add lang attribute for accessibility and better SEO."
      },
      {
        name: "4. Head Element",
        description: "The <head> holds hidden information about your page. Users cannot see anything from head. It contains title (shows on tab), meta tags (for SEO), CSS links, and JavaScript links. Think of it as the control room.",
        code: "<head>\n  <title>My Website</title>\n  <meta charset=\"UTF-8\">\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>",
        lineByLine: ["Line 1: head - Hidden info container", "Line 2: title - Browser tab text", "Line 3: meta charset - Character support", "Line 4: link - Connect CSS file"],
        simpleMeaning: "head holds secret info about your page that users don't see.",
        output: "Nothing visible. But title shows on tab, CSS loads properly.",
        note: "Title is required. Put all CSS links inside head."
      },
      {
        name: "5. Title Tag",
        description: "The <title> shows on browser tabs, bookmarks, and Google search results. It's very important for SEO. Keep under 60 characters. Every page needs a unique title. Put important keywords at the start.",
        code: "<title>My Ecommerce Store - Best Deals</title>",
        lineByLine: ["Line 1: title - Shows on browser tab and Google results"],
        simpleMeaning: "title is the name that appears on your browser tab.",
        output: "Browser tab shows 'My Ecommerce Store - Best Deals'.",
        note: "Keep under 60 chars. Each page needs different title."
      },
      {
        name: "6. Body Element",
        description: "The <body> contains EVERYTHING users see - text, images, videos, buttons, forms. Only one body per page. All visible content must go inside body. Think of body as the stage where the show happens.",
        code: "<body>\n  <h1>Welcome</h1>\n  <p>You can see this text!</p>\n</body>",
        lineByLine: ["Line 1: body - Starts visible area", "Line 2-3: Visible content", "Line 4: /body - Ends visible area"],
        simpleMeaning: "body holds everything users can see on your webpage.",
        output: "All headings, text, images appear on screen.",
        note: "Only ONE body per page. Everything visible goes inside body."
      },

      // HEADING TAGS (7)
      {
        name: "7. Heading Tags (h1 to h6)",
        description: "Headings show titles of different sizes. h1 is biggest and most important. Use h1 only ONCE per page for SEO. h2 is for main sections. h3 to h6 get smaller. Don't skip levels like h1 then h3.",
        code: "<h1>Main Title</h1>\n<h2>Chapter Title</h2>\n<h3>Section Title</h3>",
        lineByLine: ["Line 1: h1 - Most important, use once", "Line 2: h2 - Major sections", "Line 3: h3 - Subsections"],
        simpleMeaning: "Heading tags make titles - h1 biggest, h6 smallest.",
        output: "Big text for h1, smaller for h2, even smaller for h3.",
        note: "Only ONE h1 per page for good SEO."
      },

      // TEXT TAGS (8-16)
      {
        name: "8. Paragraph (p)",
        description: "The p tag creates paragraphs. Browsers add automatic space before and after each paragraph. Use one p tag for each block of text. Don't use multiple br tags for spacing - p handles it automatically.",
        code: "<p>This is first paragraph.</p>\n<p>This is second paragraph with gap.</p>",
        lineByLine: ["Line 1: p - First paragraph", "Line 2: p - Second paragraph with gap"],
        simpleMeaning: "p creates paragraphs with space between them.",
        output: "Two blocks of text with gap in middle.",
        note: "Don't put div or ul inside p - not allowed."
      },
      {
        name: "9. Line Break (br)",
        description: "br creates a new line without adding space. Use for addresses, poems, or song lyrics. It's self-closing - no closing tag needed. Don't use multiple br for paragraph spacing - use CSS margin instead.",
        code: "Address:<br>\n123 Main St<br>\nNew York, NY",
        lineByLine: ["Line 1: br - Line break after 'Address:'", "Line 2: br - Another break after street"],
        simpleMeaning: "br moves text to next line without extra space.",
        output: "Each line appears on new line with no gap.",
        note: "br has no closing tag. Don't use for paragraph spacing."
      },
      {
        name: "10. Horizontal Rule (hr)",
        description: "hr draws a horizontal line that means 'topic changes here'. Use between different sections or scenes. It's self-closing. You can style it with CSS to change width, color, and thickness.",
        code: "<p>Section 1</p>\n<hr>\n<p>Section 2 (different topic)</p>",
        lineByLine: ["Line 1: First section", "Line 2: hr - Thematic break line", "Line 3: Second section"],
        simpleMeaning: "hr draws a line that separates different topics.",
        output: "Two sections separated by a horizontal line.",
        note: "Use for scene changes, topic switches, or section breaks."
      },
      {
        name: "11. Bold (b) and Strong (strong)",
        description: "b makes text bold visually. strong makes text bold AND tells screen readers it's important. Use strong for important words. Use b for styling only. Screen readers speak strong differently.",
        code: "<b>Bold text</b> (visual only)\n<strong>Important text</strong> (bold + meaning)",
        lineByLine: ["Line 1: b - Just bold style", "Line 2: strong - Bold + importance"],
        simpleMeaning: "b = bold look. strong = bold + meaning.",
        output: "Both look bold, but screen readers announce strong differently.",
        note: "Use strong for warnings and important words."
      },
      {
        name: "12. Italic (i) and Emphasis (em)",
        description: "i makes text italic visually. em makes text italic AND adds emphasis. Screen readers change voice tone for em. Use em for words you would stress when speaking. Use i for visual italic only.",
        code: "<i>Italic text</i> (visual only)\n<em>Emphasized text</em> (italic + meaning)",
        lineByLine: ["Line 1: i - Just italic style", "Line 2: em - Italic + emphasis"],
        simpleMeaning: "i = italic look. em = italic + stressed meaning.",
        output: "Both look italic, but screen readers say em differently.",
        note: "Use em for words you would say louder."
      },
      {
        name: "13. Mark (Highlight)",
        description: "mark adds yellow highlight to text like a marker pen. Use for important words you want to stand out. Perfect for search result keywords or important notes. You can change highlight color with CSS.",
        code: "<p>This is <mark>very important</mark> information.</p>",
        lineByLine: ["Line 1: mark - Adds yellow background highlight"],
        simpleMeaning: "mark highlights text with yellow color.",
        output: "Text appears with yellow background (like marker pen).",
        note: "Use for key points or search keywords."
      },
      {
        name: "14. Small Text",
        description: "small makes text smaller than normal (about 80% size). Used for copyright notices, legal disclaimers, and fine print. Not just for styling - it shows text has less importance.",
        code: "<p>Normal text <small>small legal disclaimer</small></p>",
        lineByLine: ["Line 1: small - Makes text smaller"],
        simpleMeaning: "small reduces text size for legal and copyright info.",
        output: "Text appears smaller than surrounding text.",
        note: "Use for copyright, terms, footnotes."
      },
      {
        name: "15. Delete (del) and Insert (ins)",
        description: "del shows strikethrough line for removed text. ins shows underline for added text. Use together to show changes in documents. Perfect for showing price discounts or document edits.",
        code: "<p><del>Old price $100</del> <ins>New price $75</ins></p>",
        lineByLine: ["Line 1: del - Strikethrough, ins - Underline"],
        simpleMeaning: "del strikes through removed text. ins underlines added text.",
        output: "Old price has line through it. New price is underlined.",
        note: "Great for sale prices or document changes."
      },
      {
        name: "16. Subscript (sub) and Superscript (sup)",
        description: "sub puts text below baseline - for chemical formulas like H₂O. sup puts text above baseline - for math exponents like x² or footnotes. Perfect for science and math content.",
        code: "H<sub>2</sub>O (water)\nX<sup>2</sup> (X squared)",
        lineByLine: ["Line 1: sub - Text below line", "Line 2: sup - Text above line"],
        simpleMeaning: "sub = below line (chemistry). sup = above line (math).",
        output: "H₂O with 2 below. X² with 2 above.",
        note: "Use for formulas, math, footnote numbers."
      },

      // LISTS (17-20)
      {
        name: "17. Unordered List (ul)",
        description: "ul creates bullet point list. Order doesn't matter. Each item goes inside li tag. Use for shopping lists, features, or any list without numbers. You can change bullet style with CSS.",
        code: "<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Orange</li>\n</ul>",
        lineByLine: ["Line 1: ul - Bullet list container", "Line 2-4: li - Each item with bullet"],
        simpleMeaning: "ul makes lists with bullet points (•).",
        output: "• Apple\n• Banana\n• Orange",
        note: "Use when order doesn't matter."
      },
      {
        name: "18. Ordered List (ol)",
        description: "ol creates numbered list. Order matters! Each item gets number automatically. Use for recipes, steps, instructions, or rankings. You can change number type (A, a, I, i) using type attribute.",
        code: "<ol>\n  <li>Step 1</li>\n  <li>Step 2</li>\n  <li>Step 3</li>\n</ol>",
        lineByLine: ["Line 1: ol - Numbered list", "Line 2-4: li - Each item with number"],
        simpleMeaning: "ol makes numbered lists (1,2,3).",
        output: "1. Step 1\n2. Step 2\n3. Step 3",
        note: "Use when order matters (recipes, steps)."
      },
      {
        name: "19. Nested Lists",
        description: "Put lists inside other lists for sub-items. Great for menus, outlines, or anything with categories. You can mix ul inside ol or ol inside ul. Sub-items are indented automatically.",
        code: "<ul>\n  <li>Fruits\n    <ul><li>Apple</li><li>Banana</li></ul>\n  </li>\n</ul>",
        lineByLine: ["Line 1: Main list", "Line 2: Main item 'Fruits'", "Line 3: Nested sub-list", "Line 4: Sub-items indented"],
        simpleMeaning: "Lists inside lists for sub-categories.",
        output: "• Fruits\n  ◦ Apple\n  ◦ Banana",
        note: "Great for menus and outlines."
      },
      {
        name: "20. Description List (dl, dt, dd)",
        description: "dl creates term-definition list like a dictionary. dt is the term (word). dd is the definition (description). Perfect for glossaries, FAQs (question/answer), and product specs.",
        code: "<dl>\n  <dt>HTML</dt>\n  <dd>Structures web pages</dd>\n</dl>",
        lineByLine: ["Line 1: dl - Description list", "Line 2: dt - Term", "Line 3: dd - Definition"],
        simpleMeaning: "dl makes term-and-definition lists like a dictionary.",
        output: "HTML\n    Structures web pages",
        note: "Perfect for FAQs, glossaries, product specs."
      },

      // LINKS (21-26)
      {
        name: "21. Anchor Links (a)",
        description: "a tag creates clickable links to other pages or websites. href attribute tells where to go. Text between tags is what user clicks. Use for navigation, buttons, and references.",
        code: "<a href=\"https://google.com\">Go to Google</a>",
        lineByLine: ["Line 1: a - Link tag", "href - Destination URL", "Text - What user clicks"],
        simpleMeaning: "a makes clickable links to other pages.",
        output: "Blue underlined text that takes you to Google.",
        note: "href = where to go. Text = what user sees."
      },
      {
        name: "22. Open Link in New Tab (target)",
        description: "target='_blank' opens link in new browser tab. Always add rel='noopener' for security - prevents new page from messing with your page. Use for external links so users don't leave your site.",
        code: "<a href=\"https://google.com\" target=\"_blank\" rel=\"noopener\">Google (new tab)</a>",
        lineByLine: ["Line 1: target=\"_blank\" - Opens new tab", "rel=\"noopener\" - Security"],
        simpleMeaning: "target opens link in new tab. noopener adds security.",
        output: "Click opens link in new browser tab.",
        note: "ALWAYS add rel='noopener' with target='_blank'."
      },
      {
        name: "23. Email Link (mailto)",
        description: "mailto: opens user's email app with address already filled. Great for 'Contact Us' links. Add subject and body as extra parameters. Works on computers with email client and mobiles with email app.",
        code: "<a href=\"mailto:info@example.com\">Send Email</a>",
        lineByLine: ["Line 1: href=\"mailto:\" - Opens email app"],
        simpleMeaning: "mailto opens email program with address filled.",
        output: "Click opens Gmail/Outlook with recipient ready.",
        note: "Add subject like ?subject=Hello"
      },
      {
        name: "24. Phone Link (tel)",
        description: "tel: creates clickable phone number. On mobile, clicking opens dialer. On desktop, may open calling app. Great for business contact numbers. Include country code with + sign.",
        code: "<a href=\"tel:+1234567890\">Call us: (123) 456-7890</a>",
        lineByLine: ["Line 1: href=\"tel:\" - Opens phone dialer"],
        simpleMeaning: "tel opens phone dialer to call number.",
        output: "On mobile, opens dialer ready to call.",
        note: "Use + and country code for international numbers."
      },
      {
        name: "25. Download Link",
        description: "download attribute makes browser download file instead of opening it. Perfect for PDFs, documents, and images. You can rename file using download='newname.pdf'. Works for same-domain files only.",
        code: "<a href=\"document.pdf\" download>Download PDF</a>",
        lineByLine: ["Line 1: download - Forces download instead of open"],
        simpleMeaning: "download makes file download to computer.",
        output: "Clicking downloads file, doesn't open in browser.",
        note: "Use for PDFs, images, documents."
      },
      {
        name: "26. Internal Page Links (id)",
        description: "Jump to different sections on same page. Use anchor tag with # plus element id. Target element needs id attribute. Great for table of contents and 'back to top' buttons. No page reload needed.",
        code: "<a href=\"#contact\">Jump to Contact</a>\n<h2 id=\"contact\">Contact Us</h2>",
        lineByLine: ["Line 1: href=\"#contact\" - Links to id", "Line 2: id=\"contact\" - Target section"],
        simpleMeaning: "# links jump to sections on same page.",
        output: "Click link, page scrolls to Contact section.",
        note: "Use id on target element. # alone goes to top."
      },

      // IMAGES (27-30)
      {
        name: "27. Images (img)",
        description: "img displays pictures. src = image file path. alt = description for screen readers (REQUIRED!). Always write meaningful alt text. Add width/height to prevent layout jump while loading.",
        code: "<img src=\"photo.jpg\" alt=\"Mountain view\" width=\"300\">",
        lineByLine: ["Line 1: src - Image file", "alt - Description (required)", "width - Size"],
        simpleMeaning: "img shows pictures on webpage.",
        output: "Image appears. If broken, alt text shows.",
        note: "alt is REQUIRED for accessibility. Describe the image."
      },
      {
        name: "28. Responsive Images (srcset)",
        description: "srcset gives browser multiple image sizes. Mobile gets small image, desktop gets large. Saves phone data and speeds up loading. The browser automatically chooses best size for screen.",
        code: "<img src=\"small.jpg\" srcset=\"small.jpg 480w, large.jpg 1200w\" sizes=\"(max-width: 600px) 480px, 1200px\">",
        lineByLine: ["Line 1: srcset - List of images with widths", "sizes - When to use each"],
        simpleMeaning: "srcset gives browser choice of image sizes.",
        output: "Mobile loads small image, desktop loads large.",
        note: "Saves mobile data, loads faster on phones."
      },
      {
        name: "29. Image Maps (map, area)",
        description: "Make different parts of one image clickable to different links. shape='rect' for rectangle, 'circle' for circle, 'poly' for polygon. coords are x,y positions. Great for clickable diagrams or maps.",
        code: "<img src=\"map.jpg\" usemap=\"#worldmap\">\n<map name=\"worldmap\">\n  <area shape=\"rect\" coords=\"34,44,270,350\" href=\"north-america.html\">\n</map>",
        lineByLine: ["Line 1: usemap - Connects image to map", "Line 2: map - Container", "Line 3: area - Clickable region"],
        simpleMeaning: "image maps make different image areas clickable to different links.",
        output: "Clicking different parts of image goes to different pages.",
        note: "Less common now. Use CSS overlays instead."
      },
      {
        name: "30. Figure and Figcaption",
        description: "figure groups an image with its caption. figcaption is the caption text. Screen readers know caption belongs to that image. Better than just using p for caption. Good for SEO too.",
        code: "<figure>\n  <img src=\"diagram.jpg\">\n  <figcaption>Figure 1: System diagram</figcaption>\n</figure>",
        lineByLine: ["Line 1: figure - Groups image and caption", "Line 3: figcaption - Caption text"],
        simpleMeaning: "figure connects image with its caption.",
        output: "Image with caption below it.",
        note: "Semantic way to caption images. Good for SEO."
      },

      // CONTAINERS (31-33)
      {
        name: "31. Div Container",
        description: "div is a block container. Takes full width and starts new line. Use for grouping sections, creating layout columns, or adding background colors. Most common tag for page layout.",
        code: "<div style=\"background: lightblue;\">\n  <h2>Section</h2>\n  <p>Content here</p>\n</div>",
        lineByLine: ["Line 1: div - Block container", "Line 2-3: Content inside div"],
        simpleMeaning: "div creates a box that takes full width.",
        output: "Box with blue background containing heading and text.",
        note: "Use div for layout sections and grouping content."
      },
      {
        name: "32. Span Container",
        description: "span is inline container. Only takes needed width, stays on same line. Use for styling small parts of text inside paragraphs. Perfect for changing color of single word without breaking the line.",
        code: "<p>Normal text <span style=\"color: red;\">red word</span> continues</p>",
        lineByLine: ["Line 1: span - Inline container", "Only 'red word' gets red color"],
        simpleMeaning: "span styles small text parts without breaking line.",
        output: "Only red word changes color, rest of sentence fine.",
        note: "Use span for styling words, not for layout."
      },
      {
        name: "33. Block vs Inline Elements",
        description: "Block elements take full width and start new line (div, h1, p). Inline elements take only what they need and stay on same line (span, a, strong). Remember this for CSS layouts.",
        code: "<div>Div (new line)</div>\n<span>Span (same line)</span>\n<span>Span 2 (same line)</span>",
        lineByLine: ["Line 1: div - Block (new line)", "Line 2-3: span - Inline (same line)"],
        simpleMeaning: "Block elements start new line. Inline elements stay on same line.",
        output: "Divs stack vertically. Spans sit horizontally.",
        note: "Block = full width. Inline = only needed width."
      },

      // TABLES (34-37)
      {
        name: "34. Basic Table (table, tr, td)",
        description: "table shows data in rows and columns. tr = table row. td = table data cell. Use border='1' to see table structure during development. Tables are for DATA, not for page layout anymore.",
        code: "<table border=\"1\">\n  <tr><td>Row1 Cell1</td><td>Row1 Cell2</td></tr>\n  <tr><td>Row2 Cell1</td><td>Row2 Cell2</td></tr>\n</table>",
        lineByLine: ["Line 1: table - Table container", "Line 2: tr - Row", "td - Cell"],
        simpleMeaning: "table arranges data in grid of rows and columns.",
        output: "Grid with 2 rows and 2 columns with borders.",
        note: "Use for spreadsheets, price lists, schedules."
      },
      {
        name: "35. Table Headers (th)",
        description: "th makes header cells bold and centered. Use in first row to label columns. Screen readers announce th as header. Always use th for column labels, not td with bold CSS.",
        code: "<table border=\"1\">\n  <th>Name</th><th>Age</th>\n  <td>John</td><td>25</td>\n</table>",
        lineByLine: ["Line 2: th - Header cell (bold center)", "Line 3: td - Data cell (normal)"],
        simpleMeaning: "th makes column labels bold and centered.",
        output: "Header row bold/center. Data rows normal.",
        note: "th = header. td = data. Always use thead/tbody."
      },
      {
        name: "36. Table Spanning (colspan, rowspan)",
        description: "colspan merges cells across columns (horizontal). rowspan merges cells down rows (vertical). colspan=2 means take space of 2 columns. Great for making complex tables with merged cells.",
        code: "<th colspan=\"2\">Full width header</th>\n<td rowspan=\"2\">Spans 2 rows down</td>",
        lineByLine: ["Line 1: colspan=\"2\" - Merges 2 columns", "Line 2: rowspan=\"2\" - Merges 2 rows"],
        simpleMeaning: "colspan merges cells sideways. rowspan merges cells downward.",
        output: "Header spans full width. Left cell spans 2 rows.",
        note: "colspan = merge across. rowspan = merge down."
      },
      {
        name: "37. Advanced Table Structure",
        description: "thead = header group (column labels). tbody = body group (data rows). tfoot = footer group (summaries like totals). This structure helps screen readers and makes tables easier to maintain.",
        code: "<table>\n  <thead><tr><th>Month</th><th>Sales</th></tr></thead>\n  <tbody><tr><td>Jan</td><td>$10k</td></tr></tbody>\n  <tfoot><tr><td>Total</td><td>$10k</td></tr></tfoot>\n</table>",
        lineByLine: ["Line 2: thead - Header section", "Line 3: tbody - Data rows", "Line 4: tfoot - Footer/total"],
        simpleMeaning: "thead = labels, tbody = data, tfoot = totals.",
        output: "Header, data rows, and footer with total.",
        note: "tfoot goes before tbody but shows at bottom."
      },

      // FORMS (38-45)
      {
        name: "38. Basic Form (form)",
        description: "form collects user input and sends to server. action = where to send data. method = POST (for forms) or GET (for searches). All inputs go inside form tags to be submitted together.",
        code: "<form action=\"/submit\" method=\"POST\">\n  <input type=\"text\" name=\"username\">\n  <button type=\"submit\">Submit</button>\n</form>",
        lineByLine: ["Line 1: action - Where to send", "method - POST for forms", "Line 3: button - Submit button"],
        simpleMeaning: "form collects data and sends to server.",
        output: "Text box and button. Click sends data to server.",
        note: "Always use method='POST' for forms with sensitive data."
      },
      {
        name: "39. Input Types",
        description: "Different input types for different data. text = plain text. password = hidden dots. email = email validation. number = up/down arrows. date = calendar picker. Mobile shows different keyboards for each.",
        code: "<input type=\"text\">\n<input type=\"email\">\n<input type=\"date\">\n<input type=\"checkbox\">",
        lineByLine: ["Line 1: text - Plain text", "Line 2: email - Email keyboard (@ key)", "Line 3: date - Calendar picker", "Line 4: checkbox - Checkbox"],
        simpleMeaning: "Different input types collect different kinds of data.",
        output: "Text box, email box, calendar, checkbox.",
        note: "Mobile shows @ key for email, number pad for tel."
      },
      {
        name: "40. Label Tag",
        description: "label connects text to input. Clicking label focuses the input. For checkbox, clicking label checks it. Always use labels for accessibility. Screen readers announce label when focusing input.",
        code: "<label for=\"username\">Name:</label>\n<input type=\"text\" id=\"username\">",
        lineByLine: ["Line 1: label for=\"username\" - Connects to input", "Line 2: id=\"username\" - Same id"],
        simpleMeaning: "label makes text clickable to focus the input.",
        output: "Clicking 'Name:' text focuses the text box.",
        note: "Always use labels for better UX and accessibility."
      },
      {
        name: "41. Select Dropdown (select, option)",
        description: "select creates dropdown menu of options. option defines each choice. Use selected for default option. Use multiple and size to show multiple options at once. Great for country selection, age ranges.",
        code: "<select>\n  <option>Option 1</option>\n  <option selected>Option 2 (default)</option>\n</select>",
        lineByLine: ["Line 1: select - Dropdown menu", "Line 2: option - Choice", "Line 3: selected - Default option"],
        simpleMeaning: "select creates menu where you pick from list.",
        output: "Click to see dropdown list of options.",
        note: "Use selected for pre-chosen option."
      },
      {
        name: "42. Textarea",
        description: "textarea creates large multi-line text box. rows = height in lines. cols = width in characters. Users can drag to resize. Perfect for comments, reviews, messages, and descriptions.",
        code: "<textarea rows=\"5\" cols=\"50\" placeholder=\"Type your message...\"></textarea>",
        lineByLine: ["Line 1: rows - Height in lines", "cols - Width in chars", "placeholder - Hint text"],
        simpleMeaning: "textarea makes big text box for long messages.",
        output: "Large box that can be resized by dragging corner.",
        note: "Use for comments, messages, product reviews."
      },
      {
        name: "43. Buttons",
        description: "type='submit' sends form data. type='reset' clears all form inputs. type='button' does nothing by default (use with JavaScript). Disabled makes button grey and unclickable.",
        code: "<button type=\"submit\">Submit</button>\n<button type=\"button\" onclick=\"alert('Hi')\">Click</button>\n<button disabled>Disabled</button>",
        lineByLine: ["Line 1: submit - Sends form", "Line 2: button - Custom action", "Line 3: disabled - Grey, can't click"],
        simpleMeaning: "buttons let users submit forms or trigger actions.",
        output: "Clickable buttons that submit or run JavaScript.",
        note: "Always specify type - default is submit."
      },
      {
        name: "44. Fieldset and Legend",
        description: "fieldset draws a box around related form fields. legend gives that box a title. Great for grouping personal info, address, or payment sections. Makes long forms easier to understand.",
        code: "<fieldset>\n  <legend>Personal Info</legend>\n  Name: <input type=\"text\">\n</fieldset>",
        lineByLine: ["Line 1: fieldset - Group box", "Line 2: legend - Box title"],
        simpleMeaning: "fieldset draws box around related form fields.",
        output: "Box with title 'Personal Info' around the fields.",
        note: "Great for organizing long forms."
      },
      {
        name: "45. Datalist (Autocomplete)",
        description: "datalist gives suggestions as user types. User can still type any value (unlike select). Great for search boxes. Shows matching options while typing. Like Google autocomplete.",
        code: "<input list=\"fruits\">\n<datalist id=\"fruits\">\n  <option>Apple</option>\n  <option>Banana</option>\n</datalist>",
        lineByLine: ["Line 1: input list=\"fruits\" - Links to datalist", "Line 2: datalist - Suggestions container"],
        simpleMeaning: "datalist suggests options as you type.",
        output: "Typing 'Ap' shows Apple suggestion.",
        note: "Different from select - user can type custom value."
      },

      // HTML5 ADVANCED (46-49)
      {
        name: "46. Video Element",
        description: "video embeds video player without plugins. controls shows play/pause buttons. Use multiple source tags for different formats. MP4 works everywhere. autoplay needs muted to work in modern browsers.",
        code: "<video width=\"640\" controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  Your browser doesn't support video.\n</video>",
        lineByLine: ["Line 1: video - Video player", "controls - Shows buttons", "Line 2: source - Video file"],
        simpleMeaning: "video adds a player for videos on your page.",
        output: "Video player with play, pause, volume controls.",
        note: "MP4 format has best support. Add multiple sources."
      },
      {
        name: "47. Audio Element",
        description: "audio embeds music player. controls shows play/pause. Use MP3 for best support. loop repeats the audio. Perfect for background music, podcasts, or sound effects.",
        code: "<audio controls>\n  <source src=\"song.mp3\" type=\"audio/mpeg\">\n</audio>",
        lineByLine: ["Line 1: audio - Audio player", "controls - Shows buttons", "Line 2: source - Audio file"],
        simpleMeaning: "audio adds a player for music and podcasts.",
        output: "Audio player with play, pause, volume controls.",
        note: "MP3 format works in all browsers."
      },
      {
        name: "48. Canvas for Graphics",
        description: "canvas is blank drawing area. All graphics are drawn with JavaScript. Great for charts, games, or image editing. Canvas is empty until you draw on it. Needs JavaScript to show anything.",
        code: "<canvas id=\"myCanvas\" width=\"400\" height=\"200\"></canvas>\n<script>\n  const ctx = document.getElementById('myCanvas').getContext('2d');\n  ctx.fillStyle = 'red';\n  ctx.fillRect(20, 20, 60, 40);\n</script>",
        lineByLine: ["Line 1: canvas - Drawing surface", "Line 3: getContext('2d') - Drawing tools", "Line 4: fillRect - Draw rectangle"],
        simpleMeaning: "canvas lets JavaScript draw graphics.",
        output: "Red rectangle appears on canvas.",
        note: "Canvas is blank. All drawing needs JavaScript."
      },
      {
        name: "49. SVG (Scalable Vector Graphics)",
        description: "SVG draws shapes that never get blurry when zoomed. Great for logos, icons, and illustrations. Unlike canvas, SVG shapes are in the DOM and can have events. Stays sharp at any size.",
        code: "<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"red\"/>\n  <text x=\"50\" y=\"55\" fill=\"white\" text-anchor=\"middle\">Hi</text>\n</svg>",
        lineByLine: ["Line 1: svg - Vector container", "Line 2: circle - Circle shape", "Line 3: text - Text inside"],
        simpleMeaning: "SVG draws graphics that never get pixelated when zoomed.",
        output: "Red circle with white 'Hi' text inside.",
        note: "Best for logos, icons, illustrations."
      }
    ]
  },

  // ========== ADVANCED HTML (50 TOPICS) ==========
  advanced: {
    title: "🚀 HTML5 Advanced - Modern Web Features",
    topics: [
      // SEMANTIC HTML (1-7)
      {
        name: "1. Semantic Header",
        description: "header contains intro content like logo and navigation. Can be used multiple times per page. Screen readers announce as banner landmark. Better than div for top section.",
        code: "<header>\n  <img src=\"logo.png\" alt=\"Logo\">\n  <h1>Site Name</h1>\n  <nav>Menu here</nav>\n</header>",
        lineByLine: ["Line 1: header - Top section", "Line 2: Logo image", "Line 3: Main heading", "Line 4: Navigation menu"],
        simpleMeaning: "header is the top section of a page or section.",
        output: "Logo, title, and menu appear at top of page.",
        note: "Can have multiple headers (one per section)."
      },
      {
        name: "2. Semantic Navigation (nav)",
        description: "nav wraps navigation links. Screen readers announce 'navigation region'. Users can jump directly to nav using screen reader shortcuts. Only use for main navigation, not every link on page.",
        code: "<nav>\n  <a href=\"/\">Home</a>\n  <a href=\"/about\">About</a>\n  <a href=\"/contact\">Contact</a>\n</nav>",
        lineByLine: ["Line 1: nav - Navigation container", "Line 2-4: Links inside nav"],
        simpleMeaning: "nav wraps all main navigation links.",
        output: "Horizontal bar of links to different pages.",
        note: "Use for main site navigation only."
      },
      {
        name: "3. Semantic Main",
        description: "main contains main content of page. Use only ONCE per page. Excludes header, footer, sidebars. Screen readers can jump directly to main content. Must for accessibility.",
        code: "<main>\n  <article>\n    <h1>Blog Post</h1>\n    <p>Content here...</p>\n  </article>\n</main>",
        lineByLine: ["Line 1: main - Primary content", "Line 2: article - Blog post inside"],
        simpleMeaning: "main is the most important content of the page.",
        output: "Main content area separate from header/footer.",
        note: "Only ONE main per page for accessibility."
      },
      {
        name: "4. Semantic Article",
        description: "article is self-contained content that makes sense on its own. Blog posts, news articles, forum posts, product cards. Could be copied to another website. Each article can have its own heading.",
        code: "<article>\n  <h2>Article Title</h2>\n  <p>Full article content here...</p>\n</article>",
        lineByLine: ["Line 1: article - Independent content", "Line 2: Heading within article"],
        simpleMeaning: "article is content that stands alone like a newspaper article.",
        output: "Complete content block that makes sense by itself.",
        note: "Great for blog posts, news items, product cards."
      },
      {
        name: "5. Semantic Section",
        description: "section groups related content with a heading. Like a chapter in a book. Each section should have a heading (h2-h6). Don't use as generic container - use div for that.",
        code: "<section>\n  <h2>Our Services</h2>\n  <p>Description of services...</p>\n</section>",
        lineByLine: ["Line 1: section - Related content group", "Line 2: Heading (required)", "Line 3: Content"],
        simpleMeaning: "section groups related content like a book chapter.",
        output: "Two sections with their own headings and content.",
        note: "Each section needs a heading."
      },
      {
        name: "6. Semantic Aside",
        description: "aside contains related but not essential content. Sidebars, ads, related links, pull quotes. Screen readers announce 'complementary' landmark. Not for main content - that's for main.",
        code: "<aside>\n  <h3>Related Articles</h3>\n  <ul><li><a href=\"#\">Link 1</a></li></ul>\n</aside>",
        lineByLine: ["Line 1: aside - Sidebar content", "Line 2: Heading", "Line 3: Related links"],
        simpleMeaning: "aside is sidebar or related content.",
        output: "Sidebar with related links and ads.",
        note: "Content is related but not essential to main."
      },
      {
        name: "7. Semantic Footer",
        description: "footer contains copyright, contact info, privacy links, back to top. Screen readers announce 'content info' landmark. Can have multiple footers (one per section).",
        code: "<footer>\n  <p>&copy; 2024 My Company</p>\n  <p>Contact: info@example.com</p>\n</footer>",
        lineByLine: ["Line 1: footer - Bottom section", "Line 2: Copyright", "Line 3: Contact info"],
        simpleMeaning: "footer is the bottom section of a page.",
        output: "Copyright and contact info at bottom.",
        note: "Can have multiple footers (per section)."
      },

      // MEDIA (8-10)
      {
        name: "8. Picture Element (Responsive Images)",
        description: "picture serves different images for different screens. Desktop gets large image, mobile gets small. Also serves WebP format to modern browsers. Saves mobile data. Better than srcset alone.",
        code: "<picture>\n  <source media=\"(min-width: 1200px)\" srcset=\"large.jpg\">\n  <source media=\"(max-width: 767px)\" srcset=\"small.jpg\">\n  <img src=\"fallback.jpg\" alt=\"Description\">\n</picture>",
        lineByLine: ["Line 2: media - Rule for when to use", "Line 4: img - Fallback for old browsers"],
        simpleMeaning: "picture chooses best image for the device screen.",
        output: "Desktop loads large image, mobile loads small.",
        note: "Saves mobile data. Must include fallback img."
      },
      {
        name: "9. Embedding YouTube Videos",
        description: "Use iframe to embed YouTube videos. Get embed code from YouTube Share button. autoplay=0 prevents auto-play. rel=0 hides related videos. Always add title for accessibility.",
        code: "<iframe width=\"560\" height=\"315\"\n  src=\"https://www.youtube.com/embed/VIDEO_ID?autoplay=0\"\n  title=\"YouTube video\"\n  allowfullscreen>\n</iframe>",
        lineByLine: ["Line 2: src - YouTube embed URL", "Line 3: title - Required for accessibility", "Line 4: allowfullscreen - Enable fullscreen"],
        simpleMeaning: "embed YouTube video that users can play.",
        output: "YouTube video player on your page.",
        note: "Always add title attribute for accessibility."
      },
      {
        name: "10. Embedding Google Maps",
        description: "Use iframe to embed interactive map. Get embed code from Google Maps Share. loading='lazy' loads map only when user scrolls to it. Use for location pages, contact pages, store locators.",
        code: "<iframe\n  src=\"https://www.google.com/maps/embed?pb=LOCATION\"\n  width=\"600\" height=\"450\"\n  loading=\"lazy\">\n</iframe>",
        lineByLine: ["Line 2: src - Map embed URL", "Line 4: loading=\"lazy\" - Load when visible"],
        simpleMeaning: "Google Maps iframe shows location on map.",
        output: "Interactive map showing your location.",
        note: "Get embed code from Google Maps Share button."
      },

      // FORMS ADVANCED (11-15)
      {
        name: "11. Form Validation (required, pattern)",
        description: "required makes field mandatory. pattern uses regex to validate format. Browser shows error message automatically. No JavaScript needed. Use title for custom error message.",
        code: "<input type=\"email\" required>\n<input pattern=\"[0-9]{3}-[0-9]{3}\" title=\"Format: 123-456\">",
        lineByLine: ["Line 1: required - Must fill", "Line 2: pattern - Must match regex", "title - Error message"],
        simpleMeaning: "required and pattern check user input automatically.",
        output: "Browser shows error if input is invalid.",
        note: "Works without JavaScript. Use title for custom message."
      },
      {
        name: "12. Input Attributes (min, max, step)",
        description: "min = minimum value. max = maximum value. step = how much each click changes. Works with number, range, date inputs. Prevents user from entering out-of-range values.",
        code: "<input type=\"number\" min=\"18\" max=\"99\">\n<input type=\"range\" min=\"0\" max=\"100\" step=\"10\">",
        lineByLine: ["Line 1: min/max - Value limits", "Line 2: step - Increment amount"],
        simpleMeaning: "min/max/step limit what values user can enter.",
        output: "Number shows up/down arrows limited to range.",
        note: "Use with number, range, date inputs."
      },
      {
        name: "13. Input Attributes (placeholder, readonly, disabled)",
        description: "placeholder = hint text (disappears when typing). readonly = can't edit but value submits. disabled = grey, can't edit, value NOT submitted. Use for pre-filled or locked fields.",
        code: "<input placeholder=\"Hint\">\n<input value=\"Readonly\" readonly>\n<input value=\"Disabled\" disabled>",
        lineByLine: ["Line 1: placeholder - Hint text", "Line 2: readonly - Can't edit, submits", "Line 3: disabled - Can't edit, no submit"],
        simpleMeaning: "placeholder hints. readonly prevents edit but submits. disabled greys out and no submit.",
        output: "Placeholder shows. Readonly grey but submits. Disabled grey and frozen.",
        note: "readonly for pre-filled data, disabled for deactivated options."
      },
      {
        name: "14. Autocomplete Attribute",
        description: "autocomplete helps browser fill saved values. Use name='email' for email autocomplete. Helps users fill forms faster. Always use for address, name, credit card forms.",
        code: "<input name=\"email\" autocomplete=\"email\">\n<input name=\"address\" autocomplete=\"street-address\">",
        lineByLine: ["Line 1: autocomplete=\"email\" - Browser suggests saved emails", "Line 2: autocomplete=\"street-address\" - Suggests saved address"],
        simpleMeaning: "autocomplete lets browser remember and suggest previous entries.",
        output: "Typing shows saved values from previous forms.",
        note: "Use correct autocomplete value for better UX."
      },
      {
        name: "15. Novalidate Attribute",
        description: "novalidate turns off browser's automatic validation. Use when you want to use custom JavaScript validation instead. Form submits even if required fields are empty.",
        code: "<form novalidate>\n  <input required>\n  <button type=\"submit\">Submit</button>\n</form>",
        lineByLine: ["Line 1: novalidate - Disables HTML5 validation", "Line 2: required ignored", "Line 4: Submits even if empty"],
        simpleMeaning: "novalidate turns off browser validation.",
        output: "Form submits even when required fields empty.",
        note: "Use when implementing custom JavaScript validation."
      },

      // INTERACTIVE ELEMENTS (16-19)
      {
        name: "16. Details and Summary",
        description: "details creates expandable section. summary is clickable heading. No JavaScript needed! Perfect for FAQs, product specifications, help sections. open attribute makes it expanded by default.",
        code: "<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content shown when clicked.</p>\n</details>",
        lineByLine: ["Line 1: details - Expandable container", "Line 2: summary - Clickable heading", "Line 3: Hidden content"],
        simpleMeaning: "details creates click-to-expand sections without JavaScript.",
        output: "Summary text. Click to show/hide hidden content.",
        note: "Perfect for FAQs and product specs."
      },
      {
        name: "17. Dialog (Modal)",
        description: "dialog creates popup windows. showModal() opens with backdrop (grey background). show() opens without backdrop. close() closes. No external libraries needed! Built-in HTML5.",
        code: "<dialog id=\"myDialog\">\n  <p>Popup content</p>\n  <button onclick=\"this.closest('dialog').close()\">Close</button>\n</dialog>\n<button onclick=\"document.getElementById('myDialog').showModal()\">Open</button>",
        lineByLine: ["Line 1: dialog - Popup container", "Line 4: showModal() - Open with backdrop", "Line 3: close() - Close"],
        simpleMeaning: "dialog creates popup windows without extra libraries.",
        output: "Click button to open modal popup. Background greyed.",
        note: "showModal() = modal, show() = non-modal."
      },
      {
        name: "18. Progress Bar",
        description: "progress shows task completion. value = current progress. max = total (default 1). Use with JavaScript to update value. Great for file uploads, form completion indicators.",
        code: "<progress value=\"65\" max=\"100\">65%</progress>\n<progress></progress> <!-- Indeterminate -->",
        lineByLine: ["Line 1: progress with value - Shows 65%", "Line 2: progress without value - Animated (unknown)"],
        simpleMeaning: "progress shows how much of a task is done.",
        output: "Bar filled 65%. Unknown progress shows moving animation.",
        note: "Use for uploads, downloads, form completion."
      },
      {
        name: "19. Meter (Gauge)",
        description: "meter shows measurement with color coding. value between min and max. low/high set warning thresholds. optimum sets ideal value. Green = optimum, yellow = warning, red = critical.",
        code: "<meter value=\"0.6\" min=\"0\" max=\"1\">60%</meter>\n<meter value=\"0.2\" low=\"0.3\" high=\"0.7\">20% (warning)</meter>",
        lineByLine: ["Line 1: value=0.6 - 60% (green)", "Line 2: low=0.3 - Below low triggers warning", "Value 0.2 shows red/yellow"],
        simpleMeaning: "meter shows measurement with colors.",
        output: "Green bar for 60%, red bar for 20%.",
        note: "Good for disk usage, battery, scores."
      },

      // ADVANCED STRUCTURE (20-22)
      {
        name: "20. Template Tag",
        description: "template stores HTML that is not rendered until cloned with JavaScript. Perfect for creating repeating elements. No need for string concatenation in JavaScript. Clone and customize.",
        code: "<template id=\"card\"><div class=\"card\"><h3>Title</h3></div></template>\n<script>\n  const clone = document.getElementById('card').content.cloneNode(true);\n  document.body.appendChild(clone);\n</script>",
        lineByLine: ["Line 1: template - Invisible template", "Line 3: cloneNode - Copy template", "Line 4: append - Add to page"],
        simpleMeaning: "template stores HTML to be reused later with JavaScript.",
        output: "Template invisible until cloned and added.",
        note: "Better than building HTML strings in JavaScript."
      },
      {
        name: "21. Content Editable",
        description: "contenteditable makes any element editable by user. Click and type directly on page. Great for WYSIWYG editors, notes, task lists. Use with JavaScript to save changes.",
        code: "<div contenteditable=\"true\">You can edit this text directly!</div>",
        lineByLine: ["Line 1: contenteditable=\"true\" - Element becomes editable"],
        simpleMeaning: "contenteditable lets users edit text on the page.",
        output: "Click text, cursor appears, type to edit.",
        note: "Used for WYSIWYG editors and notes."
      },
      {
        name: "22. Spellcheck Attribute",
        description: "spellcheck turns red underline on/off for typos. True by default on text inputs and textareas. Turn off for code editors or username fields. Works like Microsoft Word.",
        code: "<textarea spellcheck=\"true\"></textarea>\n<input spellcheck=\"false\">",
        lineByLine: ["Line 1: spellcheck=\"true\" - Underline misspelled words", "Line 2: spellcheck=\"false\" - No underlines"],
        simpleMeaning: "spellcheck underlines misspelled words.",
        output: "Red squiggly line under misspelled words.",
        note: "True by default. Disable for code editors."
      },

      // META TAGS & SEO (23-28)
      {
        name: "23. Meta Description",
        description: "description appears under your page title in Google results. Keep under 160 characters. Include keywords naturally. Different description for each page. Very important for SEO.",
        code: "<meta name=\"description\" content=\"Learn HTML with this free tutorial for beginners. Covers all tags and attributes.\">",
        lineByLine: ["Line 1: name=\"description\" - Search result snippet", "content - Text shown under title in Google"],
        simpleMeaning: "description shows under page title in Google search.",
        output: "Google shows this text below your page title.",
        note: "Keep under 160 characters."
      },
      {
        name: "24. Meta Keywords",
        description: "keywords meta tag is ignored by Google. Some other search engines might use it. Not important for modern SEO. Focus on content quality instead.",
        code: "<meta name=\"keywords\" content=\"HTML, CSS, JavaScript, tutorial\">",
        lineByLine: ["Line 1: keywords - Comma-separated terms (mostly ignored)"],
        simpleMeaning: "keywords told search engines about page topics (mostly useless now).",
        output: "Google ignores this. Don't waste time on it.",
        note: "Not important for SEO anymore."
      },
      {
        name: "25. Meta Robots",
        description: "robots tells search engines how to crawl your page. index,follow = normal (show in search). noindex,nofollow = hide entire page. Use for admin pages, thank you pages, duplicate content.",
        code: "<meta name=\"robots\" content=\"noindex, nofollow\">",
        lineByLine: ["Line 1: noindex - Don't show in search", "nofollow - Don't follow links"],
        simpleMeaning: "robots controls how search engines treat your page.",
        output: "Search engines hide page if noindex is used.",
        note: "Use noindex for admin pages."
      },
      {
        name: "26. Meta Author & Viewport",
        description: "author gives credit to content creator. viewport is MUST for mobile! Makes page width match device screen. Without viewport, mobile users see tiny desktop version.",
        code: "<meta name=\"author\" content=\"John Doe\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        lineByLine: ["Line 1: author - Content creator name", "Line 2: viewport: width=device-width - Match device screen"],
        simpleMeaning: "author is credit. viewport makes pages work on mobile.",
        output: "Author shows in page source. Mobile layout works correctly.",
        note: "viewport meta is REQUIRED for mobile-friendly sites."
      },
      {
        name: "27. Open Graph (Facebook/LinkedIn)",
        description: "OG tags control how page looks when shared on Facebook, LinkedIn, WhatsApp. og:title = big bold text. og:image = thumbnail (1200x630 recommended). Without OG tags, social media guesses (bad).",
        code: "<meta property=\"og:title\" content=\"Great Article\">\n<meta property=\"og:image\" content=\"https://example.com/image.jpg\">\n<meta property=\"og:description\" content=\"Read this amazing article\">",
        lineByLine: ["Line 1: og:title - Bold title on share", "Line 2: og:image - Thumbnail picture", "Line 3: og:description - Text under title"],
        simpleMeaning: "OG tags control social media previews.",
        output: "Facebook shows custom title, image, description when shared.",
        note: "Without OG tags, social media guesses poorly."
      },
      {
        name: "28. Twitter Cards",
        description: "Twitter-specific meta tags. twitter:card='summary_large_image' shows big picture. Use same images as OG tags. Makes tweets with your content look professional.",
        code: "<meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:title\" content=\"Article Title\">\n<meta name=\"twitter:image\" content=\"https://example.com/image.jpg\">",
        lineByLine: ["Line 1: twitter:card - Card type (large image best)", "Line 2: twitter:title - Tweet title", "Line 3: twitter:image - Thumbnail"],
        simpleMeaning: "Twitter cards customize how your page appears in tweets.",
        output: "Tweet shows image, title, description from your page.",
        note: "Use summary_large_image for best results."
      },

      // PERFORMANCE (29-31)
      {
        name: "29. Lazy Loading (loading='lazy')",
        description: "loading='lazy' delays loading images until user scrolls near them. Makes page load much faster. Saves bandwidth. Works automatically - just add attribute. Use for images below the fold.",
        code: "<img src=\"large-image.jpg\" loading=\"lazy\" alt=\"Description\">\n<iframe src=\"video.mp4\" loading=\"lazy\"></iframe>",
        lineByLine: ["Line 1: loading=\"lazy\" - Load when scrolled into view", "Line 2: iframe also supports lazy loading"],
        simpleMeaning: "lazy loading delays off-screen images until needed.",
        output: "Images below the fold load only when user scrolls down.",
        note: "Use for all images below the fold."
      },
      {
        name: "30. Async and Defer Scripts",
        description: "async loads script in background, runs when ready. defer loads in background, runs after HTML parsing. Use async for analytics. Use defer for main app scripts. Both speed up page load.",
        code: "<script async src=\"analytics.js\"></script>\n<script defer src=\"app.js\"></script>\n<script src=\"blocking.js\"></script> <!-- Blocks page -->",
        lineByLine: ["Line 1: async - Load and run anytime", "Line 2: defer - Wait for HTML to finish", "Line 3: no attribute - Blocks page rendering"],
        simpleMeaning: "async/defer prevent scripts from blocking page loading.",
        output: "Page loads faster, scripts load in background.",
        note: "Use defer for main app, async for analytics."
      },
      {
        name: "31. Preload and Preconnect",
        description: "preload loads critical resources early (fonts, hero images). preconnect connects to third-party servers early (Google Fonts, APIs). Makes page load faster by starting early.",
        code: "<link rel=\"preload\" href=\"font.woff2\" as=\"font\">\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">",
        lineByLine: ["Line 1: preload - Load font early", "Line 2: preconnect - Connect to Google Fonts early"],
        simpleMeaning: "preload loads critical assets early. preconnect warms up connections.",
        output: "Fonts and images appear faster. API calls faster.",
        note: "Use preload for fonts, hero images."
      },

      // ACCESSIBILITY (32-35)
      {
        name: "32. ARIA Landmarks (role)",
        description: "ARIA roles tell screen readers about page sections. role='banner' = header. role='navigation' = nav. role='main' = main content. Semantic HTML already has these. Use when custom elements.",
        code: "<div role=\"banner\">Site header</div>\n<nav role=\"navigation\">Menu</nav>\n<div role=\"alert\">Important error message!</div>",
        lineByLine: ["Line 1: role=\"banner\" - Header region", "Line 2: role=\"navigation\" - Navigation area", "Line 3: role=\"alert\" - Urgent message"],
        simpleMeaning: "ARIA roles tell screen readers what each part does.",
        output: "Screen readers announce page structure and can jump between regions.",
        note: "Semantic HTML already has built-in roles."
      },
      {
        name: "33. ARIA Labels",
        description: "aria-label provides hidden description for screen readers. Use when visual label missing. Example: icon buttons with 'X' - aria-label='Close menu' tells screen reader what X means.",
        code: "<button aria-label=\"Close menu\">X</button>\n<input type=\"search\" aria-label=\"Search website\">",
        lineByLine: ["Line 1: aria-label=\"Close menu\" - Screen reader says 'Close menu'", "Line 2: Search input without visible label"],
        simpleMeaning: "aria-label adds hidden description for screen readers.",
        output: "Screen readers announce the label instead of visual content.",
        note: "Use when visual label isn't present."
      },
      {
        name: "34. ARIA Expanded (aria-expanded)",
        description: "aria-expanded tells screen readers if collapsible element is open. true = expanded, false = collapsed. Update with JavaScript when user clicks. Essential for accessible dropdowns.",
        code: "<button aria-expanded=\"false\" onclick=\"toggleMenu()\">Menu</button>\n<div hidden>Hidden menu items</div>",
        lineByLine: ["Line 1: aria-expanded=\"false\" - Initially collapsed", "Line 2: hidden content"],
        simpleMeaning: "aria-expanded tells screen readers if dropdown is open.",
        output: "Screen reader says 'expanded' or 'collapsed' based on state.",
        note: "Essential for accessible dropdown menus."
      },
      {
        name: "35. Skip Navigation Link",
        description: "Hidden link that becomes visible on tab. Lets keyboard users skip long navigation to main content. Required for accessibility compliance. Shows at top of page when tabbed.",
        code: "<a href=\"#main\" class=\"skip-link\">Skip to main content</a>\n<style>.skip-link { position: absolute; top: -40px; } .skip-link:focus { top: 0; }</style>\n<main id=\"main\">Content</main>",
        lineByLine: ["Line 1: Link to main content", "Line 2: CSS hides it normally, shows on focus", "Line 3: Target element with id"],
        simpleMeaning: "Skip link lets keyboard users jump past navigation.",
        output: "Pressing Tab shows 'Skip to main content' link at top.",
        note: "Required for accessibility compliance (WCAG)."
      },

      // INTERNATIONALIZATION (36-38)
      {
        name: "36. Dir Attribute (Text Direction)",
        description: "dir='ltr' = left to right (English). dir='rtl' = right to left (Arabic, Hebrew). Use on html tag for entire page, or on elements for specific content. Important for RTL languages.",
        code: "<html dir=\"rtl\">\n<p dir=\"ltr\">English text in RTL page</p>",
        lineByLine: ["Line 1: dir=\"rtl\" - Entire page right-to-left", "Line 2: dir=\"ltr\" - Override for English"],
        simpleMeaning: "dir controls text direction (left-to-right or right-to-left).",
        output: "Arabic text flows right to left. English stays left to right.",
        note: "Use rtl for Arabic, Hebrew, Urdu."
      },
      {
        name: "37. Lang Attribute",
        description: "lang specifies page language. Helps screen readers pronounce correctly. Helps search engines understand language. Use on html tag. Also works on spans for mixed languages.",
        code: "<html lang=\"en\">\n<p>English <span lang=\"fr\">Bonjour</span> mixed</p>",
        lineByLine: ["Line 1: lang=\"en\" - English page", "Line 2: lang=\"fr\" - French word"],
        simpleMeaning: "lang tells browser and screen readers which language.",
        output: "Screen readers use correct pronunciation for each language.",
        note: "Always specify lang on html element."
      },
      {
        name: "38. Translate Attribute",
        description: "translate='no' prevents Google Translate from translating content. Use for brand names, code examples, technical terms. Prevents awkward translations of proper names.",
        code: "<p translate=\"no\">Brand Name Pro 2024</p>\n<p>This text can be translated</p>",
        lineByLine: ["Line 1: translate=\"no\" - Keep original", "Line 2: No attribute - Will be translated"],
        simpleMeaning: "translate='no' tells Google Translate to skip this content.",
        output: "Brand names and code stay original when page translated.",
        note: "Use for brand names, code, technical terms."
      },

      // DATA & STORAGE (39-44)
      {
        name: "39. Custom Data Attributes (data-*)",
        description: "data-* stores custom data in HTML. Access with JavaScript using dataset. Perfect for storing IDs, configurations. Cleaner than classes hack. Any name starting with data- is valid.",
        code: "<div data-user-id=\"123\" data-role=\"admin\"></div>\n<script>const id = document.querySelector('div').dataset.userId;</script>",
        lineByLine: ["Line 1: data-user-id - Stores user ID in HTML", "Line 2: dataset.userId - Access in JavaScript"],
        simpleMeaning: "data-* stores extra information in HTML tags.",
        output: "Data stored in HTML, accessible via JavaScript dataset.",
        note: "Perfect for storing IDs and configuration."
      },
      {
        name: "40. Output Element",
        description: "output displays calculation result. Use with oninput event. Semantic alternative to span for calculator results. Screen readers announce as calculation result.",
        code: "<form oninput=\"result.value = parseInt(a.value) + parseInt(b.value)\">\n  <input id=\"a\" value=\"50\"> + <input id=\"b\" value=\"25\"> =\n  <output name=\"result\" for=\"a b\">75</output>\n</form>",
        lineByLine: ["Line 1: oninput - Update when values change", "Line 3: output - Shows result"],
        simpleMeaning: "output shows live calculation results.",
        output: "Slider and number input, result updates automatically.",
        note: "Use for calculators, live previews."
      },
      {
        name: "41. Abbreviation (abbr)",
        description: "abbr shows full meaning on hover. Screen readers expand abbreviation. title attribute holds full text. Good for SEO and accessibility. Use for first occurrence of abbreviation.",
        code: "<abbr title=\"Hypertext Markup Language\">HTML</abbr>\n<abbr title=\"Cascading Style Sheets\">CSS</abbr>",
        lineByLine: ["Line 1: title - Full meaning", "abbr - Abbreviated text"],
        simpleMeaning: "abbr shows full meaning of abbreviation on hover.",
        output: "Dotted underline under HTML, hover shows full text.",
        note: "Good for SEO and accessibility."
      },
      {
        name: "42. Address Element",
        description: "address marks contact information for author. Use for email, phone, physical address. Screen readers announce as contact info. Only for contact info, not generic addresses.",
        code: "<address>\n  Written by <a href=\"mailto:john@example.com\">John Doe</a><br>\n  123 Main St, New York\n</address>",
        lineByLine: ["Line 1: address - Contact info container", "Line 2: Email link", "Line 3: Physical address"],
        simpleMeaning: "address marks up contact information.",
        output: "Contact info styled differently (often italic).",
        note: "Only for contact info, not generic addresses."
      },
      {
        name: "43. Citation (cite)",
        description: "cite marks titles of creative works. Books, movies, songs, articles, paintings. Usually italicized. Helps screen readers understand it's a title. Not for author names.",
        code: "<p>My favorite book is <cite>The Great Gatsby</cite>.</p>\n<p>I loved the movie <cite>Inception</cite>.</p>",
        lineByLine: ["Line 1: cite - Book title", "Line 2: cite - Movie title"],
        simpleMeaning: "cite marks titles of creative works.",
        output: "Book and movie titles are italicized.",
        note: "Use for book, movie, song, article titles."
      },
      {
        name: "44. Quote (q and blockquote)",
        description: "q for short inline quotes (adds quotes automatically). blockquote for long block quotes (indented). cite attribute stores source URL. footer inside blockquote for attribution.",
        code: "<q>Short quote</q>\n<blockquote cite=\"https://example.com\">\n  <p>Long quote block...</p>\n  <footer>— Author Name</footer>\n</blockquote>",
        lineByLine: ["Line 1: q - Inline quote with quotes", "Line 2: blockquote - Indented block", "Line 4: footer - Attribution"],
        simpleMeaning: "q for short quotes, blockquote for long quotes.",
        output: "q adds quotes. blockquote indents text.",
        note: "cite attribute stores source URL."
      },

      // ADVANCED INTEGRATION (45-50)
      {
        name: "45. Web Components (Custom Elements)",
        description: "Create your own HTML tags. Define class extending HTMLElement. Use customElements.define. Shadow DOM for encapsulated styles and markup. Reusable components without framework.",
        code: "<script>\nclass UserCard extends HTMLElement {\n  constructor() {\n    super();\n    this.innerHTML = '<div class=\"card\"><h3>' + this.getAttribute('name') + '</h3></div>';\n  }\n}\ncustomElements.define('user-card', UserCard);\n</script>\n<user-card name=\"John\"></user-card>",
        lineByLine: ["Line 2: class UserCard - Component definition", "Line 8: customElements.define - Register tag", "Line 10: <user-card> - Custom tag usage"],
        simpleMeaning: "Web Components let you create your own HTML tags.",
        output: "Custom tag renders styled box with name.",
        note: "Styles are isolated to component."
      },
      {
        name: "46. Shadow DOM",
        description: "Shadow DOM isolates styles and markup from main page. Styles inside shadow DOM don't leak out. Page styles don't leak in. Perfect for widgets and reusable components.",
        code: "<div id=\"host\"></div>\n<script>\n  const host = document.getElementById('host');\n  const shadow = host.attachShadow({mode: 'open'});\n  shadow.innerHTML = '<style>p{color:red}</style><p>Red text</p>';\n</script>",
        lineByLine: ["Line 4: attachShadow - Create shadow root", "Line 5: Styles only affect shadow DOM"],
        simpleMeaning: "Shadow DOM isolates styles so they don't leak.",
        output: "Shadow DOM text is red, outside page unaffected.",
        note: "Used for Web Components and widgets."
      },
      {
        name: "47. Server-Sent Events (EventSource)",
        description: "Receive automatic updates from server. One-way communication (server to client). Great for live scores, notifications, stock prices. No polling needed. Server pushes updates.",
        code: "<script>\nconst events = new EventSource('/updates');\nevents.onmessage = (e) => console.log('Update:', e.data);\n</script>",
        lineByLine: ["Line 2: new EventSource - Connect to server", "Line 3: onmessage - Handle incoming updates"],
        simpleMeaning: "EventSource receives automatic server updates without polling.",
        output: "Live updates appear without refreshing page.",
        note: "One-way (server to client). For two-way, use WebSockets."
      },
      {
        name: "48. Web Workers",
        description: "Run JavaScript in background thread. Doesn't block UI page interactions. Perfect for heavy calculations, image processing, data parsing. Worker runs in separate file.",
        code: "// main.js\nconst worker = new Worker('worker.js');\nworker.postMessage([1,2,3,4,5]);\nworker.onmessage = (e) => console.log('Sum:', e.data);\n\n// worker.js\nself.onmessage = (e) => {\n  const sum = e.data.reduce((a,b) => a+b, 0);\n  self.postMessage(sum);\n};",
        lineByLine: ["Line 2: new Worker - Create background thread", "Line 3: postMessage - Send data", "Line 4: onmessage - Receive result"],
        simpleMeaning: "Web Workers run heavy calculations without freezing page.",
        output: "Page stays responsive during calculation.",
        note: "Use for image processing, large calculations."
      },
      {
        name: "49. Geolocation API",
        description: "Get user's location with permission. Requires HTTPS. Get current position once or watch continuously. Use for store locators, weather apps, delivery tracking.",
        code: "<button onclick=\"getLocation()\">Get Location</button>\n<script>\nfunction getLocation() {\n  navigator.geolocation.getCurrentPosition((pos) => {\n    console.log('Lat:', pos.coords.latitude, 'Lng:', pos.coords.longitude);\n  });\n}\n</script>",
        lineByLine: ["Line 5: getCurrentPosition - Get location once", "Line 6: pos.coords.latitude/longitude - Coordinates"],
        simpleMeaning: "Geolocation gets user's location with permission.",
        output: "Browser asks permission, then shows coordinates.",
        note: "HTTPS required for geolocation."
      },
      {
        name: "50. Local Storage & Session Storage",
        description: "localStorage saves data permanently (until cleared). sessionStorage clears when tab closes. Store up to 5-10MB. Great for themes, preferences, shopping cart. Only strings - use JSON.",
        code: "localStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');\nlocalStorage.removeItem('theme');\nlocalStorage.clear();\n\n// Objects need JSON\nconst user = { name: 'John' };\nlocalStorage.setItem('user', JSON.stringify(user));\nconst saved = JSON.parse(localStorage.getItem('user'));",
        lineByLine: ["Line 1: setItem - Save data", "Line 2: getItem - Retrieve data", "Line 3: removeItem - Delete one item", "Line 4: clear - Delete all"],
        simpleMeaning: "localStorage saves data between browser sessions.",
        output: "Data saved, survives browser restart.",
        note: "5-10MB limit. Use for themes, preferences, cart."
      }
    ]
  }
};

export const htmlLearning = learning;
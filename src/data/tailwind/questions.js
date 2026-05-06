// /data/tailwind/questions.js

export const questions = [
  { 
    line: "flex", 
    explanation: "Creates a flex container, enabling flexbox layout for its children.",
    example: "<div class='flex gap-4'><div>Item 1</div><div>Item 2</div></div>",
    output: "Items arranged in a row with gap between them",
    note: "Use flex-col for vertical layout"
  },
  { 
    line: "grid", 
    explanation: "Creates a grid container for CSS Grid layout.",
    example: "<div class='grid grid-cols-3 gap-4'><div>1</div><div>2</div><div>3</div></div>",
    output: "Three equal columns with gaps between them",
    note: "Combine with grid-cols-* to define columns"
  },
  { 
    line: "p-4", 
    explanation: "Applies padding of 1rem (16px) on all four sides.",
    example: "<div class='p-4 bg-gray-100'>Content with padding</div>",
    output: "Element has 16px padding inside its border",
    note: "Use pt-4, pr-4, pb-4, pl-4 for directional padding"
  },
  { 
    line: "mx-auto", 
    explanation: "Sets horizontal margin to auto, centering block-level elements.",
    example: "<div class='w-64 mx-auto bg-blue-500 text-white text-center'>Centered</div>",
    output: "Element horizontally centered in parent container",
    note: "Requires a defined width (w-*) to work"
  },
  { 
    line: "text-center", 
    explanation: "Centers text horizontally within its container.",
    example: "<div class='text-center'>This text is centered</div>",
    output: "Text aligned to center of parent width",
    note: "Also works on inline and inline-block elements"
  },
  { 
    line: "bg-blue-500", 
    explanation: "Sets background color to Tailwind's blue shade 500.",
    example: "<div class='bg-blue-500 text-white p-4'>Blue background</div>",
    output: "Element has blue background with white text",
    note: "Shades range from 50 (lightest) to 950 (darkest)"
  },
  { 
    line: "rounded-lg", 
    explanation: "Applies large border radius (0.5rem / 8px) to corners.",
    example: "<div class='bg-gray-200 rounded-lg p-4'>Rounded corners</div>",
    output: "Element has rounded corners",
    note: "Use rounded-sm, rounded-md, rounded-xl, rounded-2xl, rounded-full"
  },
  { 
    line: "shadow-md", 
    explanation: "Applies medium box shadow for depth effect.",
    example: "<div class='bg-white shadow-md p-4'>Elevated card</div>",
    output: "Element appears raised with shadow",
    note: "Shadows: shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl"
  },
  { 
    line: "hover:bg-blue-700", 
    explanation: "Changes background color when mouse hovers over element.",
    example: "<button class='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded'>Hover me</button>",
    output: "Button darkens when mouse hovers",
    note: "Apply transition for smooth color change"
  },
  { 
    line: "focus:ring-2", 
    explanation: "Adds a 2px focus ring around focused elements for accessibility.",
    example: "<input class='border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500' />",
    output: "Blue focus ring appears when input is focused",
    note: "Always include focus styles for keyboard navigation"
  },
  { 
    line: "md:flex", 
    explanation: "Applies display: flex only on medium screens (768px) and up.",
    example: "<div class='block md:flex gap-4'><div>Shows block on mobile</div><div>Shows flex on tablet+</div></div>",
    output: "Becomes flex layout on tablets and larger screens",
    note: "Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)"
  },
  { 
    line: "hover:scale-105", 
    explanation: "Scales element to 105% of original size on hover.",
    example: "<div class='bg-blue-500 p-8 rounded hover:scale-105 transition-transform'>Hover to scale</div>",
    output: "Element slightly enlarges when hovered",
    note: "Use with transition-transform for smooth animation"
  },
  { 
    line: "focus:outline-none", 
    explanation: "Removes default browser focus outline (use with caution for accessibility).",
    example: "<button class='focus:outline-none focus:ring-2 focus:ring-blue-500'>Custom focus</button>",
    output: "Default outline removed, custom ring added",
    note: "Always replace with custom focus styles like focus:ring"
  },
  { 
    line: "transition-all", 
    explanation: "Animates all changeable CSS properties over time.",
    example: "<div class='bg-blue-500 hover:bg-blue-700 transition-all duration-300'>Smooth change</div>",
    output: "All property changes animate smoothly",
    note: "Use with duration-* to control animation speed"
  },
  { 
    line: "duration-300", 
    explanation: "Sets transition duration to 300 milliseconds.",
    example: "<button class='transition duration-300 hover:bg-blue-700'>Fast transition</button>",
    output: "Transition completes in 0.3 seconds",
    note: "Options: duration-75, 100, 150, 200, 300, 500, 700, 1000"
  },
  { 
    line: "ease-in-out", 
    explanation: "Applies easing curve that starts slow, speeds up, then slows down.",
    example: "<div class='transition ease-in-out duration-300 hover:translate-x-4'>Smooth animation</div>",
    output: "Animation accelerates then decelerates",
    note: "Other options: ease-linear, ease-in, ease-out"
  },
  { 
    line: "transform", 
    explanation: "Enables transform utilities like scale, rotate, translate, skew.",
    example: "<div class='transform hover:scale-110 hover:rotate-6'>Transform me</div>",
    output: "Element can be transformed smoothly",
    note: "Required for transform utilities to work"
  },
  { 
    line: "translate-x-4", 
    explanation: "Moves element 1rem (16px) to the right on X axis.",
    example: "<div class='transform hover:translate-x-4 transition'>Slide right</div>",
    output: "Element slides right on hover",
    note: "Use -translate-x-4 for left movement"
  },
  { 
    line: "animate-spin", 
    explanation: "Applies infinite rotation animation to element.",
    example: "<div class='animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full'></div>",
    output: "Element spins continuously",
    note: "Commonly used for loading spinners"
  },
  { 
    line: "overflow-hidden", 
    explanation: "Hides any content that extends beyond element's bounds.",
    example: "<div class='w-32 h-32 overflow-hidden bg-gray-200'><div class='w-48 h-48 bg-red-500'></div></div>",
    output: "Excess content clipped and hidden",
    note: "Use overflow-auto for scrollbars when needed"
  },
  { 
    line: "inset-0", 
    explanation: "Sets top, right, bottom, and left positions to 0 simultaneously.",
    example: "<div class='relative h-32'><div class='absolute inset-0 bg-black/50'></div></div>",
    output: "Element covers entire parent area",
    note: "Use inset-x-0 for left/right, inset-y-0 for top/bottom"
  },
  { 
    line: "z-10", 
    explanation: "Sets z-index to 10, controlling stacking order.",
    example: "<div class='relative'><div class='absolute z-10 bg-white'>Above</div><div class='absolute z-0 bg-gray-500'>Below</div></div>",
    output: "Higher z-index elements appear on top",
    note: "Z-index values: z-0, 10, 20, 30, 40, 50, auto"
  },
  { 
    line: "gap-4", 
    explanation: "Adds 1rem (16px) gap between flex or grid items.",
    example: "<div class='flex gap-4'><div>Item 1</div><div>Item 2</div><div>Item 3</div></div>",
    output: "Items spaced with 16px between them",
    note: "Use gap-x-* for horizontal, gap-y-* for vertical"
  },
  { 
    line: "justify-between", 
    explanation: "Distributes flex items with equal space between them.",
    example: "<div class='flex justify-between'><div>Left</div><div>Center</div><div>Right</div></div>",
    output: "First item at start, last at end, space between",
    note: "Other options: justify-start, center, end, around, evenly"
  },
  { 
    line: "items-center", 
    explanation: "Centers flex items vertically on the cross axis.",
    example: "<div class='flex items-center h-32 border'><div>Vertically centered</div></div>",
    output: "Item centered vertically in container",
    note: "Works with both flex and grid layouts"
  },
  { 
    line: "w-1/2", 
    explanation: "Sets width to 50% of parent container.",
    example: "<div class='flex'><div class='w-1/2 bg-blue-500'>Half width</div><div class='w-1/2 bg-red-500'>Other half</div></div>",
    output: "Element takes 50% of parent width",
    note: "Other fractions: w-1/3, w-2/3, w-1/4, w-3/4"
  },
  { 
    line: "h-screen", 
    explanation: "Sets height to 100% of viewport height.",
    example: "<div class='h-screen bg-gradient-to-r from-blue-500 to-purple-500'>Full viewport height hero</div>",
    output: "Element fills entire screen height",
    note: "Use w-screen for full viewport width"
  },
  { 
    line: "opacity-50", 
    explanation: "Sets element opacity to 50% (semi-transparent).",
    example: "<div class='bg-black opacity-50 text-white'>50% transparent background</div>",
    output: "Element semi-transparent",
    note: "Values: opacity-0, 25, 50, 75, 100"
  },
  { 
    line: "cursor-pointer", 
    explanation: "Changes mouse cursor to pointer (hand icon).",
    example: "<div class='cursor-pointer bg-blue-500 p-4 text-white'>Clickable area</div>",
    output: "Cursor changes to hand when hovering",
    note: "Use on clickable elements for better UX"
  },
  { 
    line: "select-none", 
    explanation: "Prevents user from selecting the text content.",
    example: "<div class='select-none bg-gray-100 p-4'>This text cannot be selected</div>",
    output: "Text cannot be highlighted by user",
    note: "Use for UI elements, not regular content"
  },
  { 
    line: "truncate", 
    explanation: "Truncates text with ellipsis when it overflows container.",
    example: "<div class='truncate w-48'>This very long text will be truncated with an ellipsis</div>",
    output: "Long text cut off with ... at end",
    note: "Requires defined width and overflow handling"
  },
  { 
    line: "line-clamp-3", 
    explanation: "Limits text to 3 lines, truncating with ellipsis.",
    example: "<p class='line-clamp-3 w-64'>This long paragraph will show only 3 lines and then truncate with ellipsis at the end of the third line</p>",
    output: "Text limited to exactly 3 lines",
    note: "Requires @tailwindcss/line-clamp plugin"
  },
  { 
    line: "sr-only", 
    explanation: "Hides element visually but keeps it accessible for screen readers.",
    example: "<span class='sr-only'>Read this text aloud</span>",
    output: "Element invisible but screen readers announce it",
    note: "Essential for accessibility"
  },
  { 
    line: "not-sr-only", 
    explanation: "Reverses sr-only, making element visible again.",
    example: "<div class='sr-only not-sr-only md:not-sr-only'>Visible on focus</div>",
    output: "Element visible when focused or on certain breakpoints",
    note: "Often used for skip-to-content links"
  },
  { 
    line: "group-hover:scale-105", 
    explanation: "Scales child element when parent group is hovered.",
    example: "<div class='group'><div class='group-hover:scale-105 transition'>Scales when parent hovered</div></div>",
    output: "Child element scales when parent container is hovered",
    note: "Parent must have group class"
  },
  { 
    line: "peer-checked:bg-blue-500", 
    explanation: "Styles sibling element when checkbox/radio is checked.",
    example: "<label><input type='checkbox' class='peer hidden' /><div class='peer-checked:bg-blue-500 w-6 h-6 border rounded'></div></label>",
    output: "Div changes color when checkbox is checked",
    note: "Use peer class on the input element"
  },
  { 
    line: "dark:bg-gray-900", 
    explanation: "Applies background color only when dark mode is active.",
    example: "<div class='bg-white dark:bg-gray-900 text-black dark:text-white'>Adapts to theme</div>",
    output: "Light mode: white background, dark mode: dark background",
    note: "Requires darkMode: 'class' in config"
  },
  { 
    line: "bg-gradient-to-r", 
    explanation: "Creates horizontal gradient from left to right.",
    example: "<div class='bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white'>Gradient background</div>",
    output: "Background transitions smoothly from blue to purple",
    note: "Use from-*, via-*, to-* for gradient colors"
  },
  { 
    line: "aspect-video", 
    explanation: "Maintains 16:9 aspect ratio.",
    example: "<div class='aspect-video bg-blue-500'><iframe class='w-full h-full' src='...'></iframe></div>",
    output: "Container maintains 16:9 ratio regardless of width",
    note: "Requires @tailwindcss/aspect-ratio plugin"
  },
  { 
    line: "object-cover", 
    explanation: "Makes image fill container while preserving aspect ratio.",
    example: "<div class='w-full h-64'><img src='image.jpg' class='w-full h-full object-cover' /></div>",
    output: "Image covers entire container, may crop edges",
    note: "Other options: object-contain, object-fill"
  },
  { 
    line: "first:rounded-t-lg", 
    explanation: "Applies border radius only to the first child's top corners.",
    example: "<div class='space-y-2'><div class='first:rounded-t-lg bg-gray-200 p-4'>First item</div><div class='bg-gray-200 p-4'>Second</div></div>",
    output: "Only first item has top rounded corners",
    note: "Use last: for last child, odd:even: for alternating"
  },
  { 
    line: "placeholder-gray-400", 
    explanation: "Styles the placeholder text color of input elements.",
    example: "<input placeholder='Enter text' class='placeholder-gray-400 border rounded p-2' />",
    output: "Placeholder text appears in gray color",
    note: "Use placeholder: prefix for many text styles"
  },
  { 
    line: "before:content-['']", 
    explanation: "Adds pseudo-element content using before pseudo-class.",
    example: "<div class='before:content-['★'] before:mr-1'>Star before content</div>",
    output: "Star character appears before text",
    note: "Requires content property for pseudo-elements"
  },
  { 
    line: "file:bg-blue-500", 
    explanation: "Styles the file input button in file upload inputs.",
    example: "<input type='file' class='file:bg-blue-500 file:text-white file:border-0 file:rounded file:px-4 file:py-2' />",
    output: "File button has custom styling",
    note: "Use file: prefix for file input button styling"
  },
  { 
    line: "prose", 
    explanation: "Applies typography styles for rich text content.",
    example: "<article class='prose prose-lg'><h1>Blog Title</h1><p>Beautifully styled content</p></article>",
    output: "HTML content styled like a book/article",
    note: "Requires @tailwindcss/typography plugin"
  },
  { 
    line: "motion-safe:animate-spin", 
    explanation: "Applies animation only if user prefers motion.",
    example: "<div class='motion-safe:animate-spin motion-reduce:animate-none'>Respects motion preference</div>",
    output: "Spins only if user hasn't reduced motion settings",
    note: "Important for accessibility"
  },
  { 
    line: "divide-y", 
    explanation: "Adds horizontal borders between stacked flex/grid children.",
    example: "<div class='divide-y divide-gray-200'><div>Item 1</div><div>Item 2</div><div>Item 3</div></div>",
    output: "Separator lines between each item",
    note: "Use divide-x for vertical between inline items"
  },
  { 
    line: "space-x-4", 
    explanation: "Adds 1rem horizontal space between flex/grid children.",
    example: "<div class='flex space-x-4'><button>Button 1</button><button>Button 2</button><button>Button 3</button></div>",
    output: "Buttons have 16px space between them",
    note: "Use space-y for vertical spacing"
  },
  { 
    line: "snap-x", 
    explanation: "Enables horizontal snap scrolling for carousels.",
    example: "<div class='overflow-x-auto snap-x snap-mandatory'><div class='snap-center w-full'>Slide 1</div><div class='snap-center w-full'>Slide 2</div></div>",
    output: "Scrolling snaps to each slide",
    note: "Combine with snap-mandatory for strict snapping"
  },
  { 
    line: "scroll-smooth", 
    explanation: "Enables smooth scrolling behavior for anchor links.",
    example: "<div class='scroll-smooth'><a href='#section'>Jump smoothly</a><div id='section'>Target section</div></div>",
    output: "Page scrolls smoothly to anchor targets",
    note: "Also works on html element for global smooth scrolling"
  },
  { 
    line: "peer", 
    explanation: "Marks element as peer for sibling styling with peer-* variants.",
    example: "<input type='checkbox' class='peer' /><div class='peer-checked:hidden'>Checkbox checked hides me</div>",
    output: "Div hides when checkbox is checked",
    note: "Peer must be adjacent in DOM"
  },
  { 
    line: "invisible", 
    explanation: "Hides element but preserves its space in layout.",
    example: "<div><div class='invisible bg-red-500'>Hidden but space remains</div><div>Next item</div></div>",
    output: "Element invisible but layout space preserved",
    note: "Different from hidden (display: none)"
  },
  { 
    line: "line-through", 
    explanation: "Adds strike-through line through text.",
    example: "<span class='line-through text-gray-400'>$99.99</span><span class='ml-2'>$49.99</span>",
    output: "Original price crossed out, sale price shown",
    note: "Common for sale/discount pricing"
  }
];

export const tailwindQuestions = questions;
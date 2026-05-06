// /data/reactjs/interview.js

export const interview = {
  fresher: [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces developed by Facebook in 2013. It allows developers to create reusable UI components that manage their own state. React uses a component-based architecture where UI is broken into independent, isolated pieces. It's used for single-page applications (SPAs) and mobile apps (React Native). React updates only the components that change, making it fast and efficient.",
      example: "function Welcome() { return <h1>Hello, React!</h1>; } ReactDOM.render(<Welcome />, document.getElementById('root'));",
      output: "Renders 'Hello, React!' on the webpage",
      note: "React is component-based and uses a declarative approach."
    },
    {
      question: "What is JSX?",
      answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML. It allows you to write HTML-like code directly in JavaScript. JSX gets transpiled to React.createElement calls by tools like Babel. It is not required to use React but is recommended because it makes code more readable and expressive.",
      example: "const element = <h1 className='greeting'>Hello, World!</h1>; // Transpiles to React.createElement('h1', { className: 'greeting' }, 'Hello, World!');",
      output: "Renders an h1 element with class 'greeting'",
      note: "JSX requires className instead of class, and camelCase for event handlers."
    },
    {
      question: "What is the difference between state and props?",
      answer: "Props (properties) are read-only data passed from parent to child components. They cannot be modified by the child component. State is internal, mutable data managed within the component using useState or useReducer. State changes trigger re-renders. Props are for configuration, state is for dynamic data that changes over time.",
      example: "// Props: <Child name='John' /> // State: const [count, setCount] = useState(0);",
      output: "Props are passed from parent; state is internal to component",
      note: "Never mutate state directly - always use the setter function."
    },
    {
      question: "What is the Virtual DOM?",
      answer: "The Virtual DOM is a lightweight JavaScript representation of the actual DOM stored in memory. When state changes, React creates a new Virtual DOM tree, compares it with the previous one (diffing), and then updates only the changed elements in the real DOM (reconciliation). This process batches updates and minimizes expensive DOM manipulations, making React fast.",
      example: "// State change triggers: 1. New Virtual DOM creation 2. Diffing 3. Reconciliation (updates only changed elements)",
      output: "Only the changed element updates in the real DOM",
      note: "Virtual DOM enables React's high performance by minimizing direct DOM manipulation."
    },
    {
      question: "What are React Hooks?",
      answer: "React Hooks are functions that allow functional components to use state and lifecycle features. They were introduced in React 16.8. Common hooks include useState (for state), useEffect (for side effects), useContext (for context), useReducer (for complex state), useRef (for DOM access), useMemo (for memoization), and useCallback (for function memoization).",
      example: "const [count, setCount] = useState(0); useEffect(() => { document.title = `Count: ${count}`; }, [count]);",
      output: "Component has state and side effects",
      note: "Only call hooks at the top level, never inside loops or conditions."
    },
    {
      question: "How does useEffect work?",
      answer: "useEffect is a hook that handles side effects like API calls, timers, and DOM manipulation. It runs after the component renders. The dependency array controls when the effect runs: empty [] = once on mount, [value] = when value changes, no array = after every render. The cleanup function returned from useEffect runs on unmount to prevent memory leaks.",
      example: "useEffect(() => { const timer = setInterval(() => setSeconds(s => s+1), 1000); return () => clearInterval(timer); }, []);",
      output: "Timer starts on mount, cleans up on unmount",
      note: "Always include all state/props used inside useEffect in the dependency array."
    },
    {
      question: "What is conditional rendering in React?",
      answer: "Conditional rendering shows different UI based on conditions. You can use if-else statements outside JSX, ternary operators inside JSX, logical && operators, or switch statements. Key patterns include early returns for loading/error states, ternary for simple conditions, && for render-or-nothing, and element variables for complex logic.",
      example: "{isLoggedIn ? <LogoutButton /> : <LoginButton />} {user.isAdmin && <AdminPanel />}",
      output: "Shows different UI based on conditions",
      note: "Ternary operator is best for simple conditions inside JSX."
    },
    {
      question: "What are keys in React and why are they important?",
      answer: "Keys are special string attributes that help React identify which items have changed, been added, or removed in a list. They give elements a stable identity across re-renders, allowing React to optimize DOM updates. Keys must be unique among siblings and stable. Using array index as key is discouraged for dynamic lists because it can cause bugs with reordering or filtering.",
      example: "{users.map(user => <li key={user.id}>{user.name}</li>)} // Good // {users.map((user, index) => <li key={index}>{user.name}</li>)} // Bad",
      output: "React efficiently updates only changed items",
      note: "Never use index as key for dynamic lists where items can be reordered."
    },
    {
      question: "What is the difference between controlled and uncontrolled components?",
      answer: "Controlled components have form inputs whose values are controlled by React state. The value prop is set from state, and onChange updates state on every change. Uncontrolled components let the DOM handle the input value, accessed via refs using useRef. Controlled components give full control and real-time validation; uncontrolled are simpler for simple forms but offer less control.",
      example: "// Controlled: <input value={value} onChange={e => setValue(e.target.value)} /> // Uncontrolled: <input ref={inputRef} defaultValue='Initial' />",
      output: "Controlled: value controlled by React; Uncontrolled: DOM manages value",
      note: "Controlled components are recommended for most forms."
    },
    {
      question: "How do you handle forms in React?",
      answer: "Forms in React are typically handled using controlled components where input values are stored in state. The onSubmit event on the form element prevents page refresh with e.preventDefault(). Validation can be done in real-time (onChange), on blur (onBlur), or on submit. Multiple inputs can be handled with a single state object using computed property names.",
      example: "const handleChange = (e) => { const { name, value } = e.target; setForm(prev => ({ ...prev, [name]: value })); };",
      output: "Form submits without page refresh; data collected in state",
      note: "Always call e.preventDefault() in onSubmit."
    },
    {
      question: "What is the purpose of React.Fragment?",
      answer: "React.Fragment allows you to group multiple elements without adding an extra wrapper node to the DOM. This is important because React components must return a single parent element. Using fragments prevents unnecessary divs that can break CSS layouts or cause accessibility issues. The short syntax <> </> is cleaner, but the full syntax supports keys.",
      example: "<> <h1>Title</h1> <p>Content</p> </>",
      output: "Renders both elements without wrapper div",
      note: "Use short syntax <> for most cases; use React.Fragment when you need keys."
    },
    {
      question: "What is the children prop?",
      answer: "The children prop is a special prop that contains content nested between a component's opening and closing tags. It enables component composition, allowing you to create wrapper components like cards, modals, and layouts. Children can be strings, elements, arrays, or functions (render props pattern).",
      example: "function Card({ children }) { return <div className='card'>{children}</div>; } <Card><h2>Title</h2><p>Content</p></Card>",
      output: "Card component wraps and displays nested content",
      note: "Children prop is automatically passed; no need to manually pass it."
    },
    {
      question: "What is prop drilling and how can you avoid it?",
      answer: "Prop drilling is passing props through multiple component levels that don't need the data, just to reach deeply nested components. It makes code harder to maintain and refactor. Solutions include Context API (for global data), component composition (lifting content up), and state management libraries like Redux or Zustand.",
      example: "// Bad: App -> Header -> NavBar -> ThemeButton (theme passes through 3 levels) // Good: Using Context API to provide theme directly to ThemeButton",
      output: "Theme button accesses theme directly without prop drilling",
      note: "Context is great for avoiding prop drilling for global data."
    },
    {
      question: "How do you pass data from child to parent component?",
      answer: "To pass data from child to parent, you pass a callback function as a prop from parent to child. The child calls this callback with the data as an argument. This is called 'lifting state up'. The parent then receives the data in its callback and can update its state or perform other actions.",
      example: "function Parent() { const handleChildData = (data) => { console.log(data); }; return <Child onSendData={handleChildData} />; } function Child({ onSendData }) { return <button onClick={() => onSendData('Hello Parent!')}>Send</button>; }",
      output: "Parent receives data from child when button clicked",
      note: "Data flows down, events flow up - this is the React pattern."
    },
    {
      question: "What is the difference between useEffect and useLayoutEffect?",
      answer: "useEffect runs asynchronously after the browser paints, so it doesn't block visual updates. useLayoutEffect runs synchronously before the browser paints, blocking visual updates. useLayoutEffect is useful when you need to measure DOM elements (like height or position) before paint to avoid visual flicker. For most side effects, useEffect is preferred.",
      example: "useLayoutEffect(() => { const height = elementRef.current.offsetHeight; setHeight(height); }, []); // Runs before paint",
      output: "Height measurement applied before browser paints",
      note: "Use useEffect for most side effects; useLayoutEffect for DOM measurements."
    },
    {
      question: "How do you optimize performance in React?",
      answer: "React performance optimization techniques include: React.memo for component memoization, useMemo for expensive calculations, useCallback for stable function references, lazy loading with React.lazy and Suspense, virtualization for long lists (react-window), avoiding inline functions and objects in render, using unique keys for lists, code splitting, and using production builds.",
      example: "const MemoizedComponent = React.memo(MyComponent); const expensiveValue = useMemo(() => computeValue(data), [data]); const handleClick = useCallback(() => doSomething(), []);",
      output: "Component re-renders only when necessary",
      note: "Profile before optimizing; most optimizations have a cost."
    },
    {
      question: "What is React.memo?",
      answer: "React.memo is a higher-order component that memoizes a functional component, preventing re-renders when its props haven't changed. It performs a shallow comparison of props by default. You can provide a custom comparison function as the second argument. React.memo only checks for prop changes; internal state changes still trigger re-renders.",
      example: "const MemoizedComponent = React.memo(MyComponent); const MemoizedWithCompare = React.memo(MyComponent, (prev, next) => prev.id === next.id);",
      output: "Component only re-renders when props actually change",
      note: "Use with useCallback for functions passed as props."
    },
    {
      question: "What are default props in React?",
      answer: "Default props are fallback values for props when the parent component doesn't provide them. They prevent undefined errors and make components more robust. In functional components, default values can be set using default parameter syntax. In class components, use defaultProps property. If a prop is provided by the parent, the default value is overridden automatically.",
      example: "function Greeting({ name = 'Guest' }) { return <h1>Hello, {name}!</h1>; } // Or Greeting.defaultProps = { name: 'Guest' };",
      output: "Shows 'Hello, Guest!' when no name prop provided",
      note: "Default values are used only when prop is undefined, not when null."
    },
    {
      question: "What is the difference between function and class components?",
      answer: "Function components are simpler, have less code, and use hooks for state and lifecycle features. Class components use this.state and this.setState(), have lifecycle methods (componentDidMount, etc.), and require binding event handlers. React team now recommends functional components for all new code. Performance is similar, but functional components are easier to read and test.",
      example: "// Functional: function Welcome({ name }) { return <h1>Hello {name}</h1>; } // Class: class Welcome extends React.Component { render() { return <h1>Hello {this.props.name}</h1>; } }",
      output: "Both display same UI but with different syntax",
      note: "Functional components with hooks are the modern standard."
    },
    {
      question: "What is the purpose of the key prop?",
      answer: "The key prop helps React identify which items in a list have changed, been added, or removed. It gives elements a stable identity across re-renders, allowing React to optimize DOM updates by reusing existing elements rather than recreating them. Keys must be unique among siblings and stable. They are not accessible as props in the child component.",
      example: "{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}",
      output: "React efficiently updates only changed todo items",
      note: "Keys are only used by React itself; they are not passed to components."
    },
    {
      question: "How do you create a React app from scratch?",
      answer: "The easiest way is using Create React App: 'npx create-react-app my-app'. For Vite: 'npm create vite@latest my-app -- --template react'. For Next.js: 'npx create-next-app@latest'. These tools set up a development server with hot reloading, build scripts, and modern tooling. Manual setup requires configuring webpack/babel.",
      example: "npx create-react-app my-app && cd my-app && npm start",
      output: "React app running at http://localhost:3000",
      note: "Create React App is great for learning; Vite is faster for production."
    },
    {
      question: "What is the difference between export default and named exports?",
      answer: "A module can have only one default export but multiple named exports. Default export is imported without curly braces and can have any name. Named exports are imported with curly braces and must use the exact name. Default export is good for the main component of a file; named exports are good for utilities and multiple exports.",
      example: "// Export: export default App; export const helper = () => {}; // Import: import App, { helper } from './App';",
      output: "Default import without braces, named import with braces",
      note: "Use default export for the main component in a file."
    },
    {
      question: "What are inline styles in React?",
      answer: "Inline styles in React are written as objects with camelCase property names. Values are typically strings or numbers (pixels are assumed for numbers). Inline styles are useful for dynamic styling based on state or props, but they can make components harder to maintain and have higher specificity than CSS classes.",
      example: "<div style={{ backgroundColor: 'red', padding: '10px', fontSize: '16px' }}>Hello</div>",
      output: "Div with red background and 10px padding",
      note: "Use camelCase: backgroundColor not background-color."
    },
    {
      question: "How do you conditionally apply classes in React?",
      answer: "You can conditionally apply classes using template literals, ternary operators, classnames library, or array join method. Template literals are great for simple conditions. For complex conditions, use the classnames helper library. Array join method is also useful for building conditional class strings.",
      example: "const buttonClass = `btn ${isActive ? 'btn-active' : 'btn-inactive'} ${disabled ? 'btn-disabled' : ''}`; return <button className={buttonClass}>Click</button>;",
      output: "Button gets different classes based on state",
      note: "classnames library is popular for complex conditional classes."
    },
    {
      question: "What is the difference between .js and .jsx file extensions?",
      answer: "Both are valid for React components. .jsx is used to explicitly indicate that the file contains JSX syntax. Many projects use .jsx for component files and .js for utilities. This improves code readability and helps tooling. Most React developers use .jsx for components and .js for non-component files, but either works.",
      example: "Component.jsx contains JSX; utils.js contains only JavaScript",
      output: "File extension indicates whether file contains JSX",
      note: "Create React App and Vite support both extensions."
    },
    {
      question: "What is a pure component in React?",
      answer: "A pure component is a component that always renders the same output for the same props and state. React.PureComponent does a shallow comparison of props and state and skips re-render if they haven't changed. Function components can be wrapped with React.memo for similar behavior. Pure components improve performance by preventing unnecessary re-renders.",
      example: "class MyComponent extends React.PureComponent { render() { return <div>{this.props.name}</div>; } }",
      output: "Component only re-renders when props or state actually change",
      note: "PureComponent does shallow comparison; use with caution for complex props."
    },
    {
      question: "How do you debug React applications?",
      answer: "React DevTools is the primary tool for debugging React apps. It allows inspecting component hierarchy, props, state, and hooks. Other tools include console.log statements, breakpoints in browser devtools, React Developer Tools profiler for performance, and the 'why-did-you-render' library for detecting unnecessary re-renders. For errors, React error boundaries catch UI errors.",
      example: "React DevTools shows component tree with props and state; console.log('Rendering:', props);",
      output: "Debug information displayed in console and DevTools",
      note: "React DevTools is essential for React development."
    },
    {
      question: "What is the React Developer Tools extension?",
      answer: "React Developer Tools is a browser extension for Chrome, Firefox, and Edge that helps debug React applications. It provides two main panels: Components (shows component hierarchy, props, state, hooks) and Profiler (records performance to identify slow renders). It also allows editing props and state in real-time and inspecting component source code.",
      example: "Open DevTools -> Components tab -> Inspect component to see its props and state",
      output: "Component tree displays with live props and state",
      note: "Install React DevTools from your browser's extension store."
    },
    {
      question: "What is the difference between React and ReactDOM?",
      answer: "React is the core library for creating components and managing state. ReactDOM is the package that provides DOM-specific methods for rendering React components to the web browser. React Native uses React but not ReactDOM. ReactDOM methods include render(), hydrate(), createRoot(), and findDOMNode(). ReactDOM also handles event system and DOM updates.",
      example: "import React from 'react'; import ReactDOM from 'react-dom/client'; const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<App />);",
      output: "React creates components; ReactDOM renders them to DOM",
      note: "ReactDOM is only for web; React Native uses React but not ReactDOM."
    },
    {
      question: "What is the purpose of the 'use strict' directive in React?",
      answer: "React's 'use strict' mode helps catch common coding errors and prevents unsafe actions. It disables features that are confusing or poorly thought out. In React, strict mode can be enabled using <React.StrictMode> component. It runs additional checks and warnings for deprecated APIs, side effects in render, and legacy context API.",
      example: "<React.StrictMode><App /></React.StrictMode>",
      output: "Additional warnings and checks in development mode",
      note: "Strict mode only runs in development, not production."
    },
    {
      question: "How do you handle images in React?",
      answer: "Images in React can be handled by importing them directly (returns the image path), using the public folder (accessed with /image.jpg), or fetching from a URL. For dynamic images, use require() or import. For optimization, use next/image in Next.js or lazy loading with loading='lazy'. Always include alt text for accessibility.",
      example: "import logo from './logo.png'; <img src={logo} alt='Logo' /> // Or <img src='/images/logo.png' alt='Logo' />",
      output: "Image displays correctly in the component",
      note: "Imported images get hashed filenames for cache busting."
    },
    {
      question: "What is the difference between element and component?",
      answer: "An element is a plain object describing what you want to see on the screen - it's the smallest building block. A component is a function or class that accepts props and returns an element tree. Elements describe the UI at a specific point in time; components are reusable blueprints. Elements are immutable; components can have state.",
      example: "// Element: const element = <h1>Hello</h1>; // Component: function Welcome() { return <h1>Hello</h1>; }",
      output: "Element is instantiated from component",
      note: "Elements are returned from components and can be created with JSX."
    },
    {
      question: "What is the purpose of the render method in React?",
      answer: "The render method is the only required method in class components. It examines this.props and this.state and returns one of: React elements, arrays/fragments, portals, string/number, booleans/null. The render method should be pure (no side effects, no state modifications). In functional components, the function body itself is the render.",
      example: "class MyComponent extends React.Component { render() { return <div>{this.props.name}</div>; } }",
      output: "Component returns JSX to render",
      note: "render should be pure and not modify state."
    },
    {
      question: "How do you implement routing in React?",
      answer: "React Router is the standard routing library for React. Install react-router-dom, wrap your app with BrowserRouter, define routes using Routes and Route components, use Link or NavLink for navigation, and use hooks like useParams and useNavigate for dynamic routing and programmatic navigation.",
      example: "<BrowserRouter><Routes><Route path='/' element={<Home />} /><Route path='/user/:id' element={<User />} /></Routes></BrowserRouter>",
      output: "Client-side routing without page refresh",
      note: "React Router v6 uses Routes instead of Switch."
    },
    {
      question: "What is the use of the useParams hook?",
      answer: "useParams is a React Router hook that returns an object of key-value pairs of URL parameters. It's used to access dynamic segments from the current URL. For example, if the route is '/user/:userId' and the URL is '/user/123', useParams() returns { userId: '123' }. The component re-renders when the parameter changes.",
      example: "function UserProfile() { const { userId } = useParams(); return <h1>User ID: {userId}</h1>; }",
      output: "Displays user ID from URL parameter",
      note: "useParams only works inside components under a Route."
    },
    {
      question: "What is the useNavigate hook?",
      answer: "useNavigate is a React Router hook that returns a function for programmatic navigation. It replaces the older useHistory hook. You can navigate to a path: navigate('/home'), go back/forward: navigate(-1) or navigate(1), replace current entry: navigate('/login', { replace: true }), or pass state: navigate('/profile', { state: { from: 'login' } }).",
      example: "const navigate = useNavigate(); const handleClick = () => navigate('/dashboard', { replace: true });",
      output: "Navigates to dashboard when function called",
      note: "useNavigate returns a function; call it to navigate."
    },
    {
      question: "What is React Context?",
      answer: "React Context is a way to pass data through the component tree without prop drilling. It consists of createContext() to create a context object, Provider component to provide the value, and useContext hook to consume it. Context is great for global data like theme, authentication, language preferences, or user data that many components need.",
      example: "const ThemeContext = createContext('light'); <ThemeContext.Provider value='dark'>...</ThemeContext.Provider>; const theme = useContext(ThemeContext);",
      output: "Components access theme without prop drilling",
      note: "Context re-renders all consumers when value changes."
    },
    {
      question: "What are controlled components in forms?",
      answer: "Controlled components are form inputs whose values are controlled by React state. The value prop is set from state, and onChange updates state on every change. This creates a single source of truth (React state), making the input's behavior predictable and easy to validate. Controlled components are recommended for most forms.",
      example: "const [value, setValue] = useState(''); <input value={value} onChange={e => setValue(e.target.value)} />",
      output: "Input value controlled by React state",
      note: "Controlled inputs give you full control over the input value."
    },
    {
      question: "What are uncontrolled components in forms?",
      answer: "Uncontrolled components let the DOM handle the input value internally, and you access it when needed using a ref. Use the useRef hook to create a reference to the input element, then read its value from ref.current.value when needed. Uncontrolled inputs are simpler for simple forms, but you lose real-time validation and control over the input value.",
      example: "const inputRef = useRef(); <input ref={inputRef} defaultValue='Initial' />; const value = inputRef.current.value;",
      output: "Input value accessed via ref when needed",
      note: "Use defaultValue for initial value, not value."
    },
    {
      question: "How do you set up error boundaries in React?",
      answer: "Error boundaries are class components that catch errors in their child component tree. They implement static getDerivedStateFromError() to update state and/or componentDidCatch() to log errors. They display a fallback UI instead of crashing the whole app. Error boundaries catch errors during rendering, lifecycle methods, and constructors, but not in event handlers or async code.",
      example: "class ErrorBoundary extends React.Component { state = { hasError: false }; static getDerivedStateFromError() { return { hasError: true }; } render() { if (this.state.hasError) return <h1>Something went wrong</h1>; return this.props.children; } }",
      output: "Shows fallback UI when error occurs in children",
      note: "Error boundaries only work in class components."
    },
    {
      question: "What is code splitting in React?",
      answer: "Code splitting is a technique to split your bundle into smaller chunks that load on demand, reducing initial load time. React supports code splitting through React.lazy and Suspense. React.lazy takes a function that returns a dynamic import. The lazy component must be rendered inside a Suspense component with a fallback UI.",
      example: "const LazyComponent = React.lazy(() => import('./HeavyComponent')); <Suspense fallback={<div>Loading...</div>}><LazyComponent /></Suspense>",
      output: "Component loads only when needed",
      note: "Route-based code splitting is a common pattern."
    },
    {
      question: "What is the use of the Suspense component?",
      answer: "Suspense is a React component that lets you specify a loading fallback while waiting for lazy-loaded components or data. It works with React.lazy for code splitting. Suspense also works with data fetching libraries that support Suspense. It takes a fallback prop that renders while waiting for the child component to load.",
      example: "<Suspense fallback={<Spinner />}><LazyComponent /></Suspense>",
      output: "Shows Spinner until LazyComponent loads",
      note: "Suspense can be nested for multiple loading boundaries."
    },
    {
      question: "How does React handle events differently from HTML?",
      answer: "React events are named using camelCase (onClick instead of onclick). Event handlers are passed as function references, not strings. React uses synthetic events (cross-browser wrapper) that behave consistently across browsers. Events are delegated to the root for performance. You cannot return false to prevent default; must call e.preventDefault().",
      example: "<button onClick={handleClick}>Click</button> // Not onClick='handleClick()'",
      output: "Event handler called when button clicked",
      note: "Synthetic events are pooled; use e.persist() for async access."
    },
    {
      question: "What is the difference between onInput and onChange in React?",
      answer: "In React, onChange behaves like onInput in native DOM, firing on every keystroke rather than on blur. There's no distinction between onInput and onChange in React - onChange fires immediately. This is different from HTML where onChange fires on blur. This makes React's onChange consistent with user expectations for real-time updates.",
      example: "<input onChange={(e) => console.log(e.target.value)} /> // Fires on every keystroke",
      output: "Console logs on every keystroke, not just on blur",
      note: "React's onChange is more useful than HTML's onChange."
    },
    {
      question: "How do you create a ref in React?",
      answer: "The useRef hook creates a mutable object with a .current property that persists across re-renders. It doesn't cause re-renders when changed. Attach ref to DOM element using ref={refName} to access the DOM node. For class components, use React.createRef(). Refs are useful for focusing inputs, measuring elements, storing interval IDs, and accessing third-party DOM libraries.",
      example: "const inputRef = useRef(null); useEffect(() => inputRef.current.focus(), []); return <input ref={inputRef} />;",
      output: "Input auto-focuses on page load",
      note: "Refs provide a way to access DOM nodes directly."
    },
    {
      question: "What is the difference between ref and state?",
      answer: "State changes trigger re-renders; ref changes do NOT trigger re-renders. State is for data that affects the UI; refs are for values that shouldn't cause re-renders (like interval IDs, previous values, or DOM references). State updates are asynchronous; ref.current updates are synchronous. Use state for UI data, refs for imperative operations.",
      example: "// State: const [count, setCount] = useState(0); setCount(1); // Re-renders // Ref: const countRef = useRef(0); countRef.current = 1; // No re-render",
      output: "State causes re-render; ref does not",
      note: "Refs are perfect for storing values that persist between renders but don't need UI updates."
    },
    {
      question: "How do you forward refs in React?",
      answer: "React.forwardRef creates a component that accepts a ref prop and forwards it to a child DOM element. This is necessary because refs are not automatically passed through components like props. forwardRef is commonly used in reusable component libraries to allow parent components to access underlying DOM nodes for focus, measurements, or animations.",
      example: "const FancyInput = React.forwardRef((props, ref) => <input ref={ref} className='fancy' {...props} />); // Parent: const inputRef = useRef(); <FancyInput ref={inputRef} />",
      output: "Parent can focus or access child's input",
      note: "forwardRef is essential for component libraries."
    },
    {
      question: "What is the useImperativeHandle hook?",
      answer: "useImperativeHandle customizes the instance value exposed when using ref with forwardRef. It gives parent components control over what methods or properties are accessible through the ref. This promotes encapsulation by preventing parent components from manipulating internal DOM nodes directly. It's commonly used to expose focus, reset, or animation methods.",
      example: "const CustomInput = forwardRef((props, ref) => { const inputRef = useRef(); useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus(), clear: () => inputRef.current.value = '' })); return <input ref={inputRef} />; });",
      output: "Parent can call child's focus and clear methods",
      note: "Use with forwardRef to control what ref exposes."
    },
    {
      question: "What is the difference between shallow rendering and full rendering?",
      answer: "Shallow rendering renders only the component itself without its children. It's used for isolated unit testing. Full rendering (mount) renders the complete component tree including children, requiring a DOM environment (like jsdom). Shallow rendering is faster and more focused; full rendering is more realistic but slower.",
      example: "// Shallow: const wrapper = shallow(<MyComponent />); // Full: const wrapper = mount(<MyComponent />);",
      output: "Shallow: only parent rendered; Full: entire tree rendered",
      note: "React Testing Library encourages full rendering."
    },
    {
      question: "How do you test React components using React Testing Library?",
      answer: "React Testing Library tests components from user perspective rather than implementation details. Use render() to render components, screen queries (getByText, getByRole, getByLabelText) to find elements, fireEvent or userEvent to simulate interactions, and expect assertions to verify outcomes. It encourages testing behavior users would see, not internal state.",
      example: "import { render, screen, fireEvent } from '@testing-library/react'; test('button increments', () => { render(<Counter />); const button = screen.getByText('Click'); fireEvent.click(button); expect(screen.getByText('Count: 1')).toBeInTheDocument(); });",
      output: "Test passes, showing green ✓ in console",
      note: "Test what users do, not how components work internally."
    }
  ],
  experienced: [
    {
      question: "Explain React's reconciliation algorithm in detail.",
      answer: "Reconciliation is React's algorithm to update the DOM efficiently. When state changes, React creates a new Virtual DOM tree and compares it with the previous one (diffing). The algorithm assumes different element types produce different trees, and keys help identify which items changed. React then applies minimal updates to the real DOM. The algorithm is O(n) instead of O(n³) due to these heuristics: different node types are replaced, same type elements update attributes, and lists use keys for matching.",
      example: "// Different types: <div> becomes <span> -> Delete and recreate // Same type: <div className='old'> becomes <div className='new'> -> Update className // List items: Use keys to match old and new items",
      output: "Efficient DOM updates with O(n) complexity",
      note: "Keys are crucial for list reconciliation performance."
    },
    {
      question: "What is the difference between useEffect, useLayoutEffect, and useInsertionEffect?",
      answer: "useEffect runs asynchronously after paint (non-blocking). useLayoutEffect runs synchronously before paint (blocking), useful for DOM measurements. useInsertionEffect runs before DOM mutations, used by CSS-in-JS libraries to insert styles. useEffect is for most side effects; useLayoutEffect for measurements; useInsertionEffect for style injection (rarely used directly).",
      example: "useEffect(() => { console.log('After paint'); }); useLayoutEffect(() => { console.log('Before paint'); const height = element.offsetHeight; });",
      output: "useLayoutEffect fires first, then useEffect",
      note: "useLayoutEffect can hurt performance; use useEffect when possible."
    },
    {
      question: "What are the rules of hooks and why are they important?",
      answer: "Rules of hooks are: only call hooks at the top level (not inside loops, conditions, or nested functions); only call hooks from React function components or custom hooks (not regular JavaScript functions). These rules ensure hooks are called in the same order each render, which is essential for React to correctly preserve state between multiple useState and useEffect calls.",
      example: "// Correct: useState called at top level // Incorrect: if (condition) { useState(0); } // Incorrect: function regularFunction() { useState(0); }",
      output: "Hooks maintain state correctly when rules are followed",
      note: "ESLint plugin eslint-plugin-react-hooks enforces these rules."
    },
    {
      question: "How do you implement authentication in React?",
      answer: "Authentication in React typically involves storing JWT tokens in localStorage or cookies, creating authentication context with React Context for global auth state, creating protected routes that redirect unauthenticated users, and making authenticated API requests with Authorization headers. Use interceptors for automatic token refresh and logout on 401 responses.",
      example: "const AuthContext = createContext(); <AuthProvider>...; const { user, login, logout } = useContext(AuthContext); <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />",
      output: "User can login, access protected routes, and logout",
      note: "Store tokens securely; XSS can access localStorage, HTTP-only cookies are safer."
    },
    {
      question: "What is the difference between useMemo and useCallback?",
      answer: "useMemo memoizes the result (return value) of a function; useCallback memoizes the function itself (reference). useMemo(() => computeValue(a, b), [a, b]) returns a memoized value. useCallback(() => doSomething(a, b), [a, b]) returns a memoized function. Use useMemo for expensive calculations; useCallback for functions passed to memoized children.",
      example: "// useMemo: const expensiveValue = useMemo(() => sortLargeArray(data), [data]); // useCallback: const handleClick = useCallback(() => doSomething(data), [data]);",
      output: "useMemo returns memoized value; useCallback returns memoized function",
      note: "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)."
    },
    {
      question: "What is React Server Components?",
      answer: "React Server Components (RSC) are components that run on the server and have zero bundle size. They can directly access backend resources (databases, file systems) without API calls. RSCs cannot use client hooks (useState, useEffect) or browser APIs. They're great for data fetching and heavy dependencies. Next.js App Router uses RSCs by default.",
      example: "// Server Component (runs on server): async function ProductList() { const products = await db.query('SELECT * FROM products'); return <div>{products.map(...)}</div>; } // Client Component: 'use client'; function AddToCart() { const [count, setCount] = useState(0); ... }",
      output: "Server components fetch data; client components handle interactivity",
      note: "RSCs reduce client-side JavaScript and improve performance."
    },
    {
      question: "How do you implement infinite scroll in React?",
      answer: "Infinite scroll can be implemented using Intersection Observer API to detect when user scrolls near the bottom, then fetch more data. Track page number and loading state. Combine with useEffect to fetch initial data and when page changes. Use useCallback for the observer callback to prevent unnecessary recreations. Clean up observer on unmount.",
      example: "const loadMoreRef = useRef(); useEffect(() => { const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting && !loading && hasMore) { setPage(p => p + 1); } }); observer.observe(loadMoreRef.current); return () => observer.disconnect(); }, [loading, hasMore]);",
      output: "Loads more content as user scrolls down",
      note: "Intersection Observer is more performant than scroll events."
    },
    {
      question: "What are the different ways to manage state in React applications?",
      answer: "React state management options include: local state (useState, useReducer), Context API for shared state, Redux for predictable global state with devtools, Zustand for minimal boilerplate, Jotai for atomic state, Recoil for derived state, TanStack Query for server state, and XState for state machines. Choose based on app complexity and team preference.",
      example: "// Local: useState // Context: createContext + useContext // Redux: useSelector + useDispatch // Zustand: const useStore = create(set => ({ count: 0, increment: () => set(s => ({ count: s.count + 1 })) }));",
      output: "Different state management approaches for different needs",
      note: "Start with built-in state; add external libraries as complexity grows."
    },
    {
      question: "Explain the difference between client-side rendering (CSR) and server-side rendering (SSR).",
      answer: "CSR sends a blank HTML with JavaScript bundle; browser downloads JS, then renders content. CSR is faster after initial load but has slower First Paint and poor SEO. SSR renders HTML on the server for each request, sends fully-rendered HTML, then hydrates. SSR has better SEO and faster First Paint but slower Time to Interactive. Next.js supports both.",
      example: "// CSR: React + Vite // SSR: Next.js or Remix // Static: Gatsby or Astro",
      output: "CSR: better interactivity; SSR: better SEO and initial load",
      note: "Next.js App Router supports SSR, SSG, and CSR per component."
    },
    {
      question: "What is hydration in React?",
      answer: "Hydration is the process where React attaches event listeners to existing server-rendered HTML, making it interactive. SSR sends HTML for faster first paint; then React hydrates by walking the DOM tree and attaching handlers. Mismatch between server and client HTML causes hydration errors. Next.js uses hydration with suppression options.",
      example: "// Server renders <div>Hello John</div> // Client hydrates: attaches onClick handlers to the same DOM // Hydration error if client renders <div>Hello Jane</div>",
      output: "DOM becomes interactive after hydration",
      note: "Use suppressHydrationWarning for intentionally different content."
    },
    {
      question: "How do you optimize images in React?",
      answer: "Image optimization in React includes: using next/image in Next.js (automatic optimization, lazy loading, responsive sizes), using native lazy loading (loading='lazy'), using picture and srcset for responsive images, using WebP format, setting image dimensions to prevent layout shift, and using CDN for image delivery.",
      example: "import Image from 'next/image'; <Image src='/photo.jpg' width={800} height={600} alt='Photo' loading='lazy' />",
      output: "Images load efficiently with automatic optimization",
      note: "Next.js Image component automatically optimizes images."
    },
    {
      question: "What is the difference between React.memo and useMemo?",
      answer: "React.memo is a higher-order component that memoizes a component, preventing re-renders when props haven't changed. useMemo is a hook that memoizes a value, preventing expensive recalculations on every render. React.memo works on component level; useMemo works on value level. Use React.memo for components, useMemo for expensive calculations.",
      example: "// React.memo: const MemoizedComponent = React.memo(MyComponent); // useMemo: const expensiveValue = useMemo(() => compute(data), [data]);",
      output: "React.memo prevents component re-render; useMemo prevents recalculation",
      note: "Both are optimization tools; don't overuse."
    },
    {
      question: "How do you handle forms with multiple steps (wizard forms) in React?",
      answer: "Multi-step forms can be handled by storing step index in state, conditionally rendering step components, and storing all form data in a parent component's state. Use a reducer for complex form state with actions like NEXT, PREV, UPDATE_FIELD. Each step can be a separate component receiving formData and onChange handlers as props.",
      example: "const [step, setStep] = useState(1); const [formData, setFormData] = useState({}); const handleNext = () => setStep(s => s + 1); const handleBack = () => setStep(s => s - 1); <Step1 data={formData} onChange={handleChange} visible={step === 1} />",
      output: "User navigates through form steps preserving data",
      note: "Submit all data on final step after validation."
    },
    {
      question: "What is the children pattern in React?",
      answer: "Children pattern is component composition where parent component accepts children prop to render any nested content. This creates flexible, reusable components like cards, modals, and layout components. Children can be React elements, strings, arrays, or functions (render props). Children pattern promotes the composition model React is known for.",
      example: "function Layout({ children, sidebar }) { return <div className='layout'><Aside>{sidebar}</Aside><Main>{children}</Main></div>; } // Usage: <Layout sidebar={<Navigation />}><Content /></Layout>",
      output: "Layout renders sidebar and main content passed as props",
      note: "Children pattern is more flexible than passing everything as props."
    },
    {
      question: "How do you implement drag and drop in React?",
      answer: "Drag and drop can be implemented using native HTML5 drag-and-drop events (onDragStart, onDragOver, onDrop), React DnD library (via hooks), or dnd-kit (modern, touch-friendly). Track dragged item ID, handle drag over to prevent default, and update state on drop. For touch devices, use react-draggable or implement touch events.",
      example: "const [items, setItems] = useState([]); const handleDrop = (e) => { e.preventDefault(); const draggedId = e.dataTransfer.getData('text/plain'); setItems(prev => [prev.find(i => i.id === draggedId), ...prev.filter(i => i.id !== draggedId)]); };",
      output: "Items can be reordered via drag and drop",
      note: "dnd-kit is recommended for cross-platform drag and drop."
    },
    {
      question: "What is the difference between state and ref?",
      answer: "State updates trigger component re-renders; ref updates do NOT trigger re-renders. State is declared with useState/useReducer; refs with useRef. State is for values that affect UI; refs are for values that shouldn't cause re-renders (interval IDs, previous values, DOM nodes). State updates are async batched; ref updates are sync. Use state for UI, refs for imperative operations.",
      example: "const [count, setCount] = useState(0); // Causes re-render // const countRef = useRef(0); // No re-render on update // Use state for displayed values, refs for tracking",
      output: "State changes trigger UI updates; ref changes don't",
      note: "Refs are also useful for accessing DOM elements directly."
    },
    {
      question: "How do you implement offline support in React?",
      answer: "Offline support in React can be implemented using Service Workers (via Workbox or vite-plugin-pwa), IndexedDB for client-side storage, and Cache API. Workbox simplifies service worker configuration. For data synchronization, use background sync API. Show online/offline status using navigator.onLine and online/offline events.",
      example: "import { useRegisterSW } from 'virtual:pwa-register/react'; const { needRefresh, updateServiceWorker } = useRegisterSW(); // Cache API: caches.open('v1').then(cache => cache.addAll(urls));",
      output: "App works offline and syncs when back online",
      note: "Workbox provides ready-to-use service worker strategies."
    },
    {
      question: "What is Concurrent Rendering in React 18?",
      answer: "Concurrent Rendering is a React feature that allows rendering to be interruptible. It can pause rendering to handle urgent updates (like user input) and resume later. This prevents UI blocking during heavy renders. Concurrent features include useTransition (mark non-urgent updates), useDeferredValue (defer re-rendering), and startTransition. Requires createRoot API.",
      example: "const [isPending, startTransition] = useTransition(); const handleSearch = (value) => { setSearchTerm(value); startTransition(() => { setSearchResults(filterData(value)); }); }; // UI stays responsive during filtering",
      output: "UI remains responsive during expensive updates",
      note: "Concurrent features are opt-in; useTransition is the most common."
    },
    {
      question: "How does automatic batching work in React 18?",
      answer: "Automatic batching groups multiple state updates into a single re-render. React 18 batches updates from any source (event handlers, promises, setTimeout, native event handlers), not just React events. This improves performance by reducing unnecessary renders. In React 17, only React events were batched; promises and setTimeout caused multiple re-renders.",
      example: "function handleClick() { setCount(c => c + 1); setFlag(f => !f); setData(d => [...d, newItem]); } // One re-render, not three // setTimeout(() => { setCount(c => c + 1); setFlag(f => !f); }, 1000); // React 18 batches; React 17 didn't",
      output: "All three state updates trigger one re-render",
      note: "flushSync can opt-out of batching for immediate DOM updates."
    },
    {
      question: "What is the useTransition hook?",
      answer: "useTransition is a React hook that marks state updates as non-urgent. It returns `isPending` boolean and `startTransition` function. Updates inside startTransition are interruptible and don't block UI. Use for expensive updates like filtering large lists or switching tabs. The UI remains responsive to user input during the transition.",
      example: "const [isPending, startTransition] = useTransition(); const [tab, setTab] = useState('about'); const [content, setContent] = useState(<About />); const handleTabChange = (newTab) => { setTab(newTab); startTransition(() => { setContent(newTab === 'about' ? <About /> : <Contact />); }); };",
      output: "Tab switches instantly; heavy content loads in background",
      note: "Use with Suspense for data fetching in transitions."
    },
    {
      question: "What is the useDeferredValue hook?",
      answer: "useDeferredValue returns a deferred version of a value that may 'lag behind' the original. React will keep the old value on screen while the new value loads in the background, then update when ready. Used with expensive re-rendering components like large lists. Similar to debouncing but integrates with React scheduling.",
      example: "const [text, setText] = useState(''); const deferredText = useDeferredValue(text); return <ExpensiveList searchTerm={deferredText} />; // List re-renders less frequently as user types",
      output: "UI stays responsive while list updates are deferred",
      note: "useDeferredValue is similar to useTransition but works with values."
    },
    {
      question: "How do you implement a custom hook for debouncing search input?",
      answer: "Create a custom hook useDebounce that delays updating the returned value until after a delay without changes. Use useState for debounced value, useEffect to set timeout, and cleanup to cancel previous timeout. This prevents API calls on every keystroke, reducing server load and improving performance.",
      example: "function useDebounce(value, delay) { const [debouncedValue, setDebouncedValue] = useState(value); useEffect(() => { const timer = setTimeout(() => setDebouncedValue(value), delay); return () => clearTimeout(timer); }, [value, delay]); return debouncedValue; } // Usage: const debouncedSearch = useDebounce(searchTerm, 500); useEffect(() => { if (debouncedSearch) { fetchResults(debouncedSearch); } }, [debouncedSearch]);",
      output: "API calls only after user stops typing for 500ms",
      note: "Clear timeout in cleanup to avoid memory leaks."
    },
    {
      question: "How do you implement WebSocket real-time updates in React?",
      answer: "Implement WebSocket in React using useEffect hook to establish connection, handle message events to update state, and cleanup on unmount. Use useRef to store WebSocket instance to persist across renders. For robust solutions, use libraries like Socket.io-client. Handle reconnection logic and message queuing for offline periods.",
      example: "const [messages, setMessages] = useState([]); const wsRef = useRef(null); useEffect(() => { wsRef.current = new WebSocket('wss://example.com'); wsRef.current.onmessage = (event) => { setMessages(prev => [...prev, JSON.parse(event.data)]); }; return () => wsRef.current.close(); }, []); const sendMessage = (msg) => { wsRef.current.send(JSON.stringify(msg)); };",
      output: "Messages appear in real-time without page refresh",
      note: "Always close WebSocket connection in cleanup function."
    },
    {
      question: "What is Server-Side Rendering (SSR) in React?",
      answer: "SSR renders React components on the server, generates HTML, and sends it to the client. This improves First Contentful Paint, SEO, and performance on slow devices. Next.js and Remix are frameworks that support SSR. The process includes: request -> server fetches data -> renders component -> sends HTML -> client hydrates -> becomes interactive.",
      example: "// Next.js page: export default function Page({ data }) { return <div>{data}</div>; } export async function getServerSideProps() { const data = await fetchData(); return { props: { data } }; }",
      output: "HTML sent from server; user sees content faster",
      note: "SSR adds server load and complexity compared to CSR."
    },
    {
      question: "What is Static Site Generation (SSG) in React?",
      answer: "SSG pre-renders pages at build time, generating static HTML files that can be served from CDN. This provides excellent performance and SEO. Next.js supports SSG with getStaticProps. Use SSG for pages that don't change often (blog posts, documentation). Incremental Static Regeneration (ISR) allows updating static content without full rebuild.",
      example: "export async function getStaticProps() { const data = await fetchData(); return { props: { data }, revalidate: 60 }; } // Revalidates every 60 seconds",
      output: "Static HTML generated at build time",
      note: "ISR combines static generation with dynamic updates."
    },
    {
      question: "How do you handle environment variables in React?",
      answer: "React apps (CRA/Vite) use .env files for environment variables. Variables must be prefixed with REACT_APP_ (CRA) or VITE_ (Vite). Access with process.env.REACT_APP_API_URL or import.meta.env.VITE_API_URL. Environment variables are embedded at build time, not runtime. For runtime variables, use window._env_ or server injection.",
      example: "// .env: REACT_APP_API_URL=https://api.example.com // Code: const apiUrl = process.env.REACT_APP_API_URL;",
      output: "API URL changes per environment (dev, staging, prod)",
      note: "Never store secrets in frontend environment variables."
    },
    {
      question: "What is the difference between React and Vue?",
      answer: "React uses JSX (JavaScript in HTML) and one-way data binding; Vue uses HTML-based templates with directives (v-bind, v-on) and two-way binding with v-model. React uses HOCs and render props for composition; Vue uses mixins and slots. React has larger ecosystem; Vue is easier for beginners. Both are component-based and performant.",
      example: "// React: const App = () => <div onClick={handleClick}>{count}</div> // Vue: <template><div @click=\"handleClick\">{{ count }}</div></template>",
      output: "Both render interactive components",
      note: "React is more flexible; Vue is more approachable for beginners."
    },
    {
      question: "How do you implement SEO in React apps?",
      answer: "React SEO strategies include: SSR (Next.js) for full SEO, SSG (Gatsby) for content sites, React Helmet for managing document head tags, semantic HTML, proper meta tags, Open Graph tags, structured data (JSON-LD), and sitemap generation. For CSR apps, use prerendering or fallback to SSR for SEO-critical pages.",
      example: "import { Helmet } from 'react-helmet'; <Helmet><title>My Page</title><meta name='description' content='...' /><meta property='og:title' content='...' /></Helmet>",
      output: "Search engines can properly index your content",
      note: "Next.js is recommended for SEO-critical React apps."
    },
    {
      question: "What is React Fiber architecture?",
      answer: "React Fiber is the reimplementation of React's core algorithm introduced in React 16. It enables incremental rendering: splitting rendering work into chunks and spreading it over multiple frames. Fiber allows React to pause, abort, or prioritize different types of updates. This enables Concurrent Mode, Suspense, and better user experience during heavy updates.",
      example: "// Before Fiber: Synchronous rendering blocked the thread // After Fiber: Interruptible, prioritized rendering",
      output: "UI remains responsive during large updates",
      note: "Fiber is internal; developers interact with it via concurrent features."
    },
    {
      question: "How do you handle performance monitoring in React?",
      answer: "Performance monitoring in React includes: React DevTools Profiler (records commits with flamegraph and ranked views), why-did-you-render (detects unnecessary re-renders), React.memo instrumentation, Web Vitals (Core Web Vitals metrics), Sentry or Datadog for production monitoring, and Performance API for custom measurements.",
      example: "import { Profiler } from 'react'; <Profiler id='MyComponent' onRender={(id, phase, actualDuration) => console.log(`${id} ${phase}: ${actualDuration}ms`)}><MyComponent /></Profiler>",
      output: "Performance data logged for monitoring",
      note: "Ship Profiler only in development or limited production."
    },
    {
      question: "What is the difference between createRoot and hydrateRoot?",
      answer: "createRoot is used for client-side rendering (CSR). hydrateRoot is used for server-side rendering (SSR) - it attaches event listeners to existing HTML generated on the server. hydrateRoot expects the rendered content to match the server-rendered HTML; mismatches cause hydration warnings. Both are from React 18's new root API.",
      example: "// CSR: const root = createRoot(document.getElementById('root')); root.render(<App />); // SSR: const root = hydrateRoot(document.getElementById('root'), <App />);",
      output: "render for CSR; hydrate for SSR",
      note: "Replace ReactDOM.render with new root API in React 18."
    },
    {
      question: "How do you implement virtual scrolling in React?",
      answer: "Virtual scrolling renders only visible items in a long list (thousands of items). Use react-window (simpler) or react-virtualized (more features). It calculates which items are visible based on scroll position, renders only those, and positions them absolutely. This reduces DOM nodes drastically, improving performance.",
      example: "import { FixedSizeList as List } from 'react-window'; const Row = ({ index, style }) => <div style={style}>Item {index}</div>; <List height={400} itemCount={10000} itemSize={35} width={300}>{Row}</List>",
      output: "Smooth scrolling with only visible items rendered",
      note: "react-window is lighter; react-virtualized has more features."
    },
    {
      question: "What are portals in React?",
      answer: "Portals provide a way to render children into a DOM node that exists outside the parent component's DOM hierarchy. This is essential for overlays, modals, tooltips, and dropdowns that need to break out of their container's CSS constraints (overflow: hidden, z-index issues). Portals maintain React event bubbling and context.",
      example: "function Modal({ children }) { return ReactDOM.createPortal(children, document.getElementById('modal-root')); } // Usage: <Modal><div className='modal'>Content</div></Modal>",
      output: "Modal content renders outside parent div",
      note: "Portals still behave like normal React children in event propagation."
    },
    {
      question: "What is the difference between shallow and deep rendering in tests?",
      answer: "Shallow rendering (enzyme's shallow) renders only the component without its children, isolating the component under test. Deep rendering (mount or React Testing Library's render) renders the full component tree. React Testing Library encourages full rendering for more realistic tests. Shallow testing can miss integration issues but is faster and more focused.",
      example: "// Shallow: const wrapper = shallow(<Parent />); wrapper.find(Child).prop('onClick')(); // Full: render(<Parent />); fireEvent.click(screen.getByRole('button'));",
      output: "Shallow tests isolated component; full tests emulate user behavior",
      note: "React Testing Library prefers full rendering over shallow."
    },
    {
      question: "How do you implement dark mode in React?",
      answer: "Dark mode can be implemented using Context API with ThemeContext, useState for theme value, and useEffect to sync with localStorage and system preference via matchMedia. Use CSS variables for theme colors. Apply theme class to body or root div. For Next.js, use next-themes library which handles SSR hydration.",
      example: "const ThemeContext = createContext(); const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light'); useEffect(() => { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); }, [theme]);",
      output: "App switches between light and dark themes",
      note: "Use prefers-color-scheme media query for system preference detection."
    },
    {
      question: "What is the difference between useCallback and useMemo with examples?",
      answer: "useCallback returns a memoized function reference; useMemo returns a memoized value. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps). useCallback is for functions passed to memoized children; useMemo is for expensive computations. Both accept a function and dependency array, but useCallback returns the function, while useMemo executes it and returns the result.",
      example: "// useCallback: const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]); // useMemo: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
      output: "useCallback returns function; useMemo returns computed value",
      note: "useCallback(fn, deps) === useMemo(() => fn, deps)."
    },
    {
      question: "How do you implement drag and drop file upload in React?",
      answer: "Implement drag and drop file upload using onDragOver and onDrop events. Prevent default to allow drop, read files from e.dataTransfer.files, and upload via FormData. Track drag state for visual feedback. Use FileReader API for preview. Support multiple files and validation by type/size.",
      example: "const [isDragOver, setIsDragOver] = useState(false); const handleDrop = (e) => { e.preventDefault(); const files = e.dataTransfer.files; uploadFiles(files); }; <div onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }} onDragLeave={() => setIsDragOver(false)} onDrop={handleDrop} className={isDragOver ? 'drag-active' : ''}>Drop files here</div>",
      output: "Files can be dragged from OS and dropped for upload",
      note: "Also support click file input as fallback."
    },
    {
      question: "What are Higher-Order Components (HOCs) and when to use them?",
      answer: "HOCs are functions that take a component and return an enhanced component. They're used for cross-cutting concerns like authentication (withAuth), logging (withLogger), data fetching (withData), and styling (withStyles). HOCs are being replaced by hooks for many use cases but are still useful for class components and certain patterns.",
      example: "function withAuth(Component) { return function AuthenticatedComponent(props) { const isAuth = useAuth(); if (!isAuth) return <Login />; return <Component {...props} />; }; } const ProtectedProfile = withAuth(Profile);",
      output: "Profile only renders for authenticated users",
      note: "HOCs don't modify the input component; they compose it."
    },
    {
      question: "What is the render props pattern?",
      answer: "Render props is a pattern where a component receives a function as a prop (usually called render) that returns React elements. The component calls this function to render instead of implementing its own rendering. This provides extreme flexibility, allowing the parent to control rendering. Hooks have largely replaced render props for logic sharing.",
      example: "function MouseTracker({ render }) { const [position, setPosition] = useState({ x: 0, y: 0 }); useEffect(() => { const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY }); window.addEventListener('mousemove', handleMove); return () => window.removeEventListener('mousemove', handleMove); }, []); return render(position); } // Usage: <MouseTracker render={({ x, y }) => <div>Mouse at {x}, {y}</div>} />",
      output: "Parent controls how to render mouse position",
      note: "Children prop can also be used as render prop."
    },
    {
      question: "How do you implement optimistic UI updates?",
      answer: "Optimistic UI updates show expected result immediately while the actual API request happens in background. Update state optimistically before API call, then revert on error. Use try-catch with rollback logic. Libraries like TanStack Query support optimistic updates out of the box. This makes UI feel faster.",
      example: "const [likes, setLikes] = useState(initialLikes); const handleLike = async () => { const previousLikes = likes; setLikes(l => l + 1); // Optimistic update try { await api.like(); } catch { setLikes(previousLikes); // Rollback alert('Failed to like'); } };",
      output: "UI updates instantly; reverts if API fails",
      note: "Show loading state during background request."
    },
    {
      question: "What is the difference between testing-library/react and Enzyme?",
      answer: "React Testing Library (RTL) tests components from user perspective, querying by text, role, label. Enzyme allows testing implementation details (state, props, instance methods). RTL encourages testing what users see and do; Enzyme encourages shallow rendering and component internals. RTL is now the recommended testing approach for React.",
      example: "// RTL: screen.getByText('Submit'); fireEvent.click(button); // Enzyme: wrapper.find(Button).prop('onClick')(); wrapper.state('count');",
      output: "RTL tests behavior; Enzyme tests implementation",
      note: "React Testing Library is the official testing library for React."
    },
    {
      question: "How do you implement internationalization (i18n) in React?",
      answer: "i18n in React is commonly implemented with react-i18next or react-intl. Store translations in JSON files per locale. Use hooks like useTranslation() to access translation function. Support dynamic locale switching, pluralization, date/number formatting, and interpolation. Detect user locale from browser or localStorage.",
      example: "import { useTranslation } from 'react-i18next'; const { t, i18n } = useTranslation(); <button onClick={() => i18n.changeLanguage('es')}>Español</button> <h1>{t('welcome', { name: user.name })}</h1>",
      output: "App content translates based on selected language",
      note: "Use Trans component for translations with HTML markup."
    },
    {
      question: "What is function composition in React?",
      answer: "Function composition combines multiple functions to create a new function. In React, compose utility (from redux or lodash) can combine HOCs: compose(withAuth, withLogger, withTheme)(Component). Modern React uses hooks instead of HOCs. Hooks provide more straightforward composition: useAuth(); useLogger(); useTheme();",
      example: "// HOC composition: const Enhanced = compose(withAuth, withLogger)(Base); // Hook composition: function Component() { useAuth(); useEffect(() => logRerender(), []); const theme = useTheme(); return <div />; }",
      output: "Multiple behaviors applied to component",
      note: "Hooks provide cleaner composition than HOCs."
    },
    {
      question: "How do you handle large forms with many fields in React?",
      answer: "Large forms can be managed using useReducer for centralized state, custom hooks for form logic, useRef for uncontrolled inputs to avoid performance issues, form libraries like Formik or React Hook Form for validation and performance, lazy field registration, and debounced validation for better performance.",
      example: "import { useForm } from 'react-hook-form'; const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' }); // Field: <input {...register('fieldName', { required: true })} />",
      output: "Form handles many fields efficiently with minimal re-renders",
      note: "React Hook Form is optimized for large forms."
    },
    {
      question: "What is the difference between controlled and uncontrolled components in forms?",
      answer: "Controlled components have form input values controlled by React state, updating on every keystroke. Uncontrolled components let the DOM manage the value, accessed via refs. Controlled gives real-time validation, dynamic inputs, and full control but causes more re-renders. Uncontrolled is simpler and more performant for large forms but less flexible.",
      example: "// Controlled: const [value, setValue] = useState(''); <input value={value} onChange={e => setValue(e.target.value)} /> // Uncontrolled: const ref = useRef(); <input ref={ref} defaultValue='' />",
      output: "Controlled: React controls value; Uncontrolled: DOM controls value",
      note: "Controlled is recommended for most forms; uncontrolled for file inputs."
    },
    {
      question: "How do you implement role-based access control (RBAC) in React?",
      answer: "RBAC in React can be implemented using Context API holding user roles/permissions, creating ProtectedRoute components that check permissions before rendering, using custom hooks (useHasPermission), and conditionally rendering UI elements based on user permissions. Store user roles in auth token and decode on client.",
      example: "const PermissionContext = createContext(); const usePermission = (required) => { const { permissions } = useContext(PermissionContext); return permissions.includes(required); }; // Usage: const canEdit = usePermission('edit'); {canEdit && <EditButton />}",
      output: "UI adapts based on user permissions",
      note: "Never rely solely on client-side checks; always validate on server."
    },
    {
      question: "What are React 18's transitions?",
      answer: "Transitions in React 18 mark state updates as non-urgent, allowing React to pause, interrupt, or defer them to keep UI responsive. Use startTransition from useTransition. Transitions are ideal for search results, tab switching, navigation, and any update that doesn't need immediate feedback. Pending state shows user that work is happening.",
      example: "const [isPending, startTransition] = useTransition(); const handleSearch = (value) => { setInputValue(value); startTransition(() => { const results = heavySearch(value); setSearchResults(results); }); }; {isPending && <Spinner />}",
      output: "UI remains responsive during expensive search",
      note: "Transitions are a concurrent rendering feature."
    },
    {
      question: "How do you implement real-time collaboration features in React?",
      answer: "Real-time collaboration can be implemented using WebSockets (Socket.io), Operational Transformation (OT) or Conflict-Free Replicated Data Types (CRDTs). Libraries like Liveblocks, ShareDB, or Yjs handle synchronization. Implement presence (who's online), cursor position sharing, and document editing with undo/redo. Yjs is popular for collaborative editing.",
      example: "// Yjs + WebRTC: const ydoc = new Y.Doc(); const provider = new WebrtcProvider('room', ydoc); const yText = ydoc.getText('shared'); yText.observe(() => setText(yText.toString()));",
      output: "Multiple users can edit the same document",
      note: "Yjs uses CRDTs for conflict-free synchronization."
    },
    {
      question: "What is the difference between state initializer and lazy initialization?",
      answer: "State initializer directly passes value: useState(initialValue). Lazy initialization passes a function: useState(() => initialValue). The function runs only once on first render. Use lazy initialization for expensive computations (sorting large arrays, reading from localStorage, complex calculations) to prevent re-running on every render.",
      example: "// Direct: const [data, setData] = useState(sortLargeArray(items)); // Runs every render! // Lazy: const [data, setData] = useState(() => sortLargeArray(items)); // Runs once",
      output: "Expensive calculation runs only on mount, not on every render",
      note: "lazy initialization improves performance for expensive initial states."
    },
    {
      question: "How do you migrate from React 17 to React 18?",
      answer: "React 18 migration steps: 1) Update packages: react, react-dom to 18. 2) Replace ReactDOM.render with createRoot: const root = createRoot(document.getElementById('root')); root.render(<App />); 3) Enable concurrent features: wrap with <StrictMode>. 4) Update TypeScript types. 5) Test batched updates and transitions. 6) Update testing library to React 18 compatible version.",
      example: "// Before: ReactDOM.render(<App />, document.getElementById('root')); // After: const root = createRoot(document.getElementById('root')); root.render(<App />);",
      output: "App upgraded to React 18 with concurrent features",
      note: "React 18 is backward compatible; most apps upgrade easily."
    }
  ]
};

export const reactExplanations = interview;

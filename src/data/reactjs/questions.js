// /data/reactjs/questions.js

export const questions = [
  {
    line: "function Welcome() { return <h1>Hello</h1>; }",
    explanation: "Defines a React functional component named 'Welcome' that returns JSX. Components always start with a capital letter to distinguish them from HTML tags.",
    example: "Used as <Welcome /> in JSX",
    output: "Renders an h1 element with text 'Hello' on the page"
  },
  {
    line: "const [count, setCount] = useState(0);",
    explanation: "Destructures useState hook result. 'count' holds the current state value (initialized to 0), and 'setCount' is the function to update it. This is the primary way to add state to functional components.",
    example: "setCount(5); // Updates count to 5 and triggers re-render",
    output: "Component re-renders with new count value"
  },
  {
    line: "useEffect(() => { console.log('Mounted'); }, []);",
    explanation: "useEffect with empty dependency array runs only once after the component mounts. The empty array [] tells React this effect has no dependencies, so it never re-runs. Perfect for initial data fetching or subscriptions.",
    example: "Fetch user data on component mount",
    output: "'Mounted' logged to console once when component appears"
  },
  {
    line: "return <div>Hello</div>;",
    explanation: "JSX syntax that looks like HTML but is transpiled to React.createElement('div', null, 'Hello') by Babel. JSX allows writing HTML structures inside JavaScript files.",
    example: "JSX makes React code look familiar like HTML",
    output: "Renders a div element with text 'Hello' to the DOM"
  },
  {
    line: "props.children",
    explanation: "A special prop that contains content nested between a component's opening and closing tags. It enables composition, allowing wrapper components like cards, modals, and layouts to render arbitrary child content.",
    example: "<Card><p>Content</p></Card> - The <p> is children",
    output: "Card component renders the nested paragraph inside it"
  },
  {
    line: "const handleClick = () => { alert('Clicked'); }",
    explanation: "Defines an arrow function event handler that shows a browser alert. In React, event handlers are passed as function references (not strings) to elements using camelCase event names like onClick.",
    example: "<button onClick={handleClick}>Click</button>",
    output: "Shows alert 'Clicked' when button is pressed"
  },
  {
    line: "{isLoggedIn ? <button>Logout</button> : <button>Login</button>}",
    explanation: "Ternary operator for conditional rendering inside JSX. If isLoggedIn is true, renders Logout button; otherwise renders Login button. This is the most common inline conditional pattern.",
    example: "Based on user authentication status",
    output: "Shows Logout when logged in, Login when not"
  },
  {
    line: "const [value, setValue] = useState(() => expensiveComputation());",
    explanation: "Lazy initialization of state using a function. The function runs only once during initial render, not on every render. Useful for expensive calculations like reading from localStorage, sorting large arrays, or other heavy operations.",
    example: "Reading user preferences from localStorage",
    output: "Expensive computation runs only once, not on every re-render"
  },
  {
    line: "useEffect(() => { const timer = setInterval(fn, 1000); return () => clearInterval(timer); }, []);",
    explanation: "useEffect with cleanup function. The interval starts when component mounts, and the returned function clears it when component unmounts. This prevents memory leaks by cleaning up subscriptions, intervals, or event listeners.",
    example: "Timer component that increments every second",
    output: "Timer runs while component is mounted, stops on unmount"
  },
  {
    line: "const MemoizedComp = React.memo(MyComponent);",
    explanation: "React.memo is a higher-order component that memoizes the component, preventing re-renders when its props haven't changed. It performs shallow comparison of props. Useful for components that render frequently with the same props.",
    example: "List items that rarely change",
    output: "Component only re-renders when props actually change"
  },
  {
    line: "{users.map(user => <li key={user.id}>{user.name}</li>)}",
    explanation: "Using map() to render a list of items from an array. The key prop (unique identifier) helps React identify which items have changed, been added, or removed, optimizing re-renders.",
    example: "Rendering a list of users from API response",
    output: "Renders an <li> for each user with their name"
  },
  {
    line: "const context = useContext(ThemeContext);",
    explanation: "useContext hook consumes a context value created by createContext(). It provides a way to access global data (like theme, auth) without prop drilling through multiple component levels.",
    example: "Access current theme (light/dark) anywhere in app",
    output: "Component receives the current theme value from context"
  },
  {
    line: "const [state, dispatch] = useReducer(reducer, initialState);",
    explanation: "useReducer is an alternative to useState for complex state logic. It accepts a reducer function (state, action) => newState and initial state. Returns current state and dispatch function to send actions.",
    example: "Todo list with add, delete, toggle actions",
    output: "State updates predictably based on dispatched actions"
  },
  {
    line: "const memoizedValue = useMemo(() => computeExpensive(a, b), [a, b]);",
    explanation: "useMemo memoizes the result of an expensive calculation. It only recomputes when dependencies (a or b) change. Prevents expensive calculations from running on every render, improving performance.",
    example: "Sorting a large array or filtering thousands of items",
    output: "Cached result returned unless a or b changed"
  },
  {
    line: "const memoizedCallback = useCallback(() => { doSomething(a); }, [a]);",
    explanation: "useCallback returns a memoized version of the function that only changes if dependencies change. Prevents unnecessary re-renders when passing callbacks to memoized child components.",
    example: "Passing event handler to optimized child component",
    output: "Same function reference preserved across renders"
  },
  {
    line: "const inputRef = useRef(null);",
    explanation: "useRef creates a mutable object with a .current property that persists across re-renders. Updating ref.current does NOT trigger re-render. Used for accessing DOM elements directly or storing mutable values like interval IDs.",
    example: "Focusing an input on component mount",
    output: "inputRef.current holds a reference to the DOM node"
  },
  {
    line: "ReactDOM.createPortal(children, domNode);",
    explanation: "Portal renders children into a DOM node that exists outside the parent component's hierarchy. Useful for modals, tooltips, and dropdowns that need to break out of CSS overflow or z-index constraints.",
    example: "Rendering a modal directly under document body",
    output: "Content renders at domNode location, not as parent child"
  },
  {
    line: "{condition && <Component />}",
    explanation: "Logical AND (&&) operator for conditional rendering. If condition is true, it renders Component; if false, React ignores it. Shorter than ternary when you only need render-or-nothing pattern.",
    example: "Show badge only when notification count > 0",
    output: "Component renders only when condition is truthy"
  },
  {
    line: "const LazyComponent = lazy(() => import('./Heavy'));",
    explanation: "React.lazy enables code splitting by dynamically importing components only when needed. The lazy component must be wrapped in Suspense with a fallback UI. Reduces initial bundle size and improves load time.",
    example: "Route-based code splitting for dashboard page",
    output: "Component loads only when it's about to be rendered"
  },
  {
    line: "<Suspense fallback={<Spinner />}><LazyComponent /></Suspense>",
    explanation: "Suspense wraps lazy-loaded components and displays fallback UI while loading. It works with React.lazy for code splitting and can also work with data fetching libraries that support Suspense.",
    example: "Loading spinner shown while lazy component loads",
    output: "Spinner appears until component is fully loaded"
  },
  {
    line: "const [isPending, startTransition] = useTransition();",
    explanation: "useTransition hook marks state updates as non-urgent. startTransition wraps updates that can be interrupted, keeping UI responsive. isPending indicates the transition is in progress.",
    example: "Expensive search/filter operations",
    output: "UI stays responsive; pending indicator shows work in progress"
  },
  {
    line: "const deferredValue = useDeferredValue(value);",
    explanation: "useDeferredValue returns a deferred version of a value that may 'lag behind' the original. React keeps old value on screen while new one loads, updating when ready. Useful for expensive re-rendering components like large lists.",
    example: "Typeahead search with large dataset",
    output: "List updates less frequently, UI stays responsive"
  },
  {
    line: "flushSync(() => { setCount(c => c + 1); setFlag(f => !f); });",
    explanation: "flushSync forces React to synchronously flush all state updates inside the callback immediately, bypassing automatic batching. Use rarely when you need DOM updates to happen right away.",
    example: "Need DOM to update before reading measurements",
    output: "Updates applied synchronously, not batched"
  },
  {
    line: "const [state, setState] = useState({ count: 0, name: '' });",
    explanation: "useState with object state. When updating, you must spread previous state to preserve other properties. React does NOT automatically merge object updates like setState in classes.",
    example: "setState(prev => ({ ...prev, count: prev.count + 1 }));",
    output: "Updates only count while preserving name"
  },
  {
    line: "setState(prev => [...prev, newItem]);",
    explanation: "Functional update for array state using spread operator. Creates a new array with existing items plus new item, preserving immutability. Never mutate state directly - always create new array reference.",
    example: "Adding a new todo to todos array",
    output: "New array created with all previous items plus new item"
  },
  {
    line: "const enhanced = (Component) => (props) => <Component {...props} extra='data' />;",
    explanation: "Higher-Order Component (HOC) pattern - a function that takes a component and returns an enhanced component. Used for cross-cutting concerns like logging, authentication, or data fetching.",
    example: "withAuth(Profile) -> Component that requires login",
    output: "Enhanced component with additional behavior/props"
  },
  {
    line: "const [isLoading, startLoading] = useTransition();",
    explanation: "useTransition returns isPending boolean (renamed to isLoading) and startTransition function. Non-urgent state updates don't block user input, improving perceived performance.",
    example: "Tab switching with heavy content",
    output: "Tab switches instantly; content loads in background"
  },
  {
    line: "const root = createRoot(document.getElementById('root')); root.render(<App />);",
    explanation: "React 18's new root API. Replaces ReactDOM.render. Enables concurrent features like automatic batching, transitions, and Suspense improvements.",
    example: "Entry point for React 18 applications",
    output: "App rendered with concurrent features enabled"
  },
  {
    line: "hydrateRoot(document.getElementById('root'), <App />);",
    explanation: "hydrateRoot is used for server-side rendering. It attaches event listeners to existing server-rendered HTML instead of creating new DOM nodes. Expects content to match server output.",
    example: "Next.js or custom SSR setup",
    output: "Existing HTML becomes interactive without recreating DOM"
  },
  {
    line: "<React.StrictMode><App /></React.StrictMode>",
    explanation: "StrictMode is a development-only wrapper that activates additional checks and warnings. It helps identify unsafe lifecycles, legacy API usage, and unexpected side effects. Runs effects twice to detect issues.",
    example: "Wrap root component for better development experience",
    output: "Additional warnings appear in dev tools console"
  },
  {
    line: "function MyComponent() { 'use client'; return <div />; }",
    explanation: "'use client' directive in Next.js App Router marks the component as a Client Component, meaning it runs on the client with full browser features. Required for components using hooks like useState.",
    example: "Interactive components that need client-side state",
    output: "Component is only rendered on client, not server"
  },
  {
    line: "const { data, loading, error } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });",
    explanation: "useQuery hook from TanStack Query for data fetching. Manages loading, error, and success states automatically. Caches data, handles refetching, and dedupes multiple requests.",
    example: "Fetching todo list with automatic retry",
    output: "Auto-managed loading/error/data states"
  },
  {
    line: "const mutation = useMutation({ mutationFn: postData, onSuccess: () => {} });",
    explanation: "useMutation hook for creating, updating, or deleting data. Handles loading/error states and provides callbacks for success/error. Manages optimistic updates and invalidates queries.",
    example: "Form submission that creates new resource",
    output: "Mutation runs async; UI updates on success"
  },
  {
    line: "class Counter extends React.Component { state = { count: 0 }; render() { return <div>{this.state.count}</div>; } }",
    explanation: "Class component syntax with state initialization. 'this.state' holds component state, and render method returns JSX. Class components are legacy; functional components with hooks are now preferred.",
    example: "Traditional pre-hooks component",
    output: "Renders count from component state"
  },
  {
    line: "componentDidMount() { this.fetchData(); }",
    explanation: "Lifecycle method that runs once after component mounts to the DOM. Perfect for initial data fetching, subscriptions, or DOM measurements. In functional components, useEffect(() => {}, []) replaces this.",
    example: "Fetch user data when component appears",
    output: "fetchData runs exactly once after initial render"
  },
  {
    line: "componentDidUpdate(prevProps, prevState) { if (prevState.count !== this.state.count) { this.handleChange(); } }",
    explanation: "Lifecycle method that runs after state or props update. Used for side effects based on state changes. In functional components, useEffect with dependency array [count] replaces this.",
    example: "Save to localStorage when count changes",
    output: "Effect runs only when specified state changes"
  },
  {
    line: "componentWillUnmount() { this.cleanup(); }",
    explanation: "Lifecycle method that runs just before component unmounts. Used for cleanup: cancelling timers, removing event listeners, aborting requests. In functional components, return cleanup from useEffect.",
    example: "Clear interval to prevent memory leak",
    output: "Cleanup code runs before component is removed"
  },
  {
    line: "getDerivedStateFromProps(props, state) { return { derivedData: props.data }; }",
    explanation: "Static lifecycle method that runs before render, used to update state based on props changes. Rarely needed; consider if state should be computed from props on every render.",
    example: "Resetting state when prop changes",
    output: "State updated based on incoming props"
  },
  {
    line: "shouldComponentUpdate(nextProps, nextState) { return this.props.id !== nextProps.id; }",
    explanation: "Lifecycle method that determines if component should re-render. Returns false to skip render, true to proceed. Used for performance optimization. React.memo or PureComponent are simpler alternatives.",
    example: "Only re-render when id prop changes",
    output: "Component skips re-render if id hasn't changed"
  },
  {
    line: "const ref = createRef(); <div ref={ref} />",
    explanation: "createRef creates a ref object for class components. Access via this.refName.current. For functional components, useRef is preferred. Used to access DOM nodes or store mutable values.",
    example: "Measuring element dimensions in class component",
    output: "ref.current holds the DOM node after mount"
  },
  {
    line: "const Component = forwardRef((props, ref) => <div ref={ref} />);",
    explanation: "forwardRef creates a component that accepts a ref prop and forwards it to a child DOM element. Essential for reusable component libraries where parent needs to access child's DOM node.",
    example: "Custom button that forwards ref to native button",
    output: "Parent component can focus or measure the DOM node"
  },
  {
    line: "useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }));",
    explanation: "useImperativeHandle customizes what ref exposes to parent components. Used with forwardRef to limit what parent can access, promoting encapsulation and preventing direct DOM manipulation.",
    example: "Expose only focus and reset methods, not entire input",
    output: "Parent can call child's focus() but not access everything"
  },
  {
    line: "const theme = useContext(ThemeContext);",
    explanation: "useContext hook consumes context value from nearest Provider above in the component tree. Causes component to re-render whenever context value changes, regardless of shouldComponentUpdate.",
    example: "Access current theme (light/dark) from context",
    output: "Component gets theme value without prop drilling"
  },
  {
    line: "<ThemeContext.Provider value={{ theme, toggleTheme }}>",
    explanation: "Context Provider makes value available to all child components (any depth). When value changes, all consumers re-render. Value can be any type: primitive, object, or function.",
    example: "Providing theme state and toggle function",
    output: "All children can access theme using useContext"
  },
  {
    line: "const [theme, setTheme] = useLocalStorage('theme', 'light');",
    explanation: "Custom hook that synchronizes state with localStorage. Reads initial value from localStorage on first render, and saves any updates back. Returns array like useState for easy use.",
    example: "Persisting user theme preference across sessions",
    output: "Theme persists after page refresh, syncs across tabs"
  },
  {
    line: "const size = useWindowSize();",
    explanation: "Custom hook that tracks window dimensions. Uses useState for width/height and useEffect to add/remove resize event listener. Returns responsive dimension values.",
    example: "Responsive layout that adapts to window size",
    output: "Component re-renders when window is resized"
  },
  {
    line: "const debouncedValue = useDebounce(searchTerm, 500);",
    explanation: "Custom hook that delays updating the returned value until after specified delay without changes. Cancels previous timeout on each new call. Essential for debouncing API calls on search inputs.",
    example: "Search input that only calls API after user stops typing",
    output: "API calls only 500ms after last keystroke"
  },
  {
    line: "const [isOpen, toggle] = useToggle(false);",
    explanation: "Custom hook for boolean state with toggle function. Returns array with current value and toggle function. Simplifies managing modals, dropdowns, and accordions.",
    example: "Modal open/close state",
    output: "toggle() flips isOpen between true and false"
  },
  {
    line: "const { count, increment, decrement } = useCounter(0);",
    explanation: "Custom hook returning counter state and actions as object (instead of array). More explicit than array return. Provides functions to modify state without exposing internal update mechanism.",
    example: "Reusable counter logic across multiple components",
    output: "Components can use increment() and decrement() directly"
  },
  {
    line: "const previousValue = usePrevious(value);",
    explanation: "Custom hook that stores previous value of a variable using useRef. Updates ref after each render, returning previous stored value. Useful for detecting what changed between renders.",
    example: "Show 'count changed from X to Y' notification",
    output: "Access previous value when component updates"
  }
];

export const reactQuestions = questions;
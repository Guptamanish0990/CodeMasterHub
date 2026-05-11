// /data/reactjs/learning.js

export const learning = {
  basic: {
    title: "⚛️ React.js Basics - Complete Guide",
    topics: [
      // TOPIC 1: What is React?
      {
        name: "📌 What is React?",
        description: "React is a JavaScript library for building user interfaces developed by Facebook in 2013. It allows developers to create reusable UI components that manage their own state. React uses a component-based architecture where UI is broken into independent, isolated pieces. It's used for single-page applications (SPAs) and mobile apps (React Native). React updates only the components that change, making it fast and efficient.",
        code: `import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello, React World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
        lineByLine: [
          "Line 1: import React from 'react' - Imports the React library",
          "Line 2: import ReactDOM from 'react-dom/client' - Imports ReactDOM for rendering",
          "Line 4: function App() { - Creates a functional component named App",
          "Line 5: return <h1>Hello, React World!</h1> - Returns JSX to display",
          "Line 6: } - Closes the component",
          "Line 8: const root = ReactDOM.createRoot(...) - Creates a React root",
          "Line 9: root.render(<App />) - Renders the App component to the DOM"
        ],
        simpleMeaning: "React is a library that helps you build interactive user interfaces using reusable components.",
        output: "Renders 'Hello, React World!' on the webpage",
        note: "React is component-based and uses a declarative approach."
      },
      // TOPIC 2: React Folder Structure
      {
        name: "📁 React Folder Structure",
        description: "A typical React app created with Create React App has a specific folder structure. src/ contains all source code including components, styles, and assets. public/ contains static files like index.html. node_modules/ contains dependencies. package.json manages project dependencies and scripts.",
        code: `my-app/
├── node_modules/      # Project dependencies
├── public/            # Static files
│   ├── index.html     # Main HTML file
│   └── favicon.ico    # Browser icon
├── src/               # Source code
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── styles/        # CSS modules
│   ├── App.js         # Main component
│   ├── index.js       # Entry point
│   └── index.css      # Global styles
├── package.json       # Dependencies & scripts
└── README.md          # Project documentation`,
        lineByLine: [
          "Line 1-14: Folder structure hierarchy",
          "Line 2: node_modules/ - Contains all installed npm packages",
          "Line 4-6: public/ - Static files that don't change",
          "Line 5: index.html - The single HTML file where React mounts",
          "Line 8-12: src/ - All React source code",
          "Line 9: components/ - Reusable UI components",
          "Line 10: pages/ - Page-level components for routing",
          "Line 13: package.json - Project configuration and dependencies"
        ],
        simpleMeaning: "React projects have organized folders for components, pages, styles, and static files to keep code manageable.",
        output: "Well-organized project structure that scales with your app",
        note: "You can customize the folder structure based on your needs."
      },
      // TOPIC 3: JSX Syntax
      {
        name: "📌 JSX Syntax",
        description: "JSX is a syntax extension that looks like HTML but allows writing HTML structures in JavaScript files. It gets compiled to React.createElement calls by tools like Babel. JSX requires class to be written as className, for as htmlFor, and uses camelCase for event handlers (onClick).",
        code: `function Greeting() {
  const name = "John";
  const isLoggedIn = true;
  
  return (
    <div className="container">
      <h1>Hello, {name}!</h1>
      <p>Welcome to {5 + 5} React</p>
      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
}`,
        lineByLine: [
          "Line 1: function Greeting() { - Creates component",
          "Line 2: const name = \"John\" - JavaScript variable",
          "Line 3: const isLoggedIn = true - Boolean variable",
          "Line 5: return ( - Returns JSX",
          "Line 6: <div className=\"container\"> - JSX element with className",
          "Line 7: <h1>Hello, {name}!</h1> - {name} embeds JavaScript variable",
          "Line 8: <p>Welcome to {5 + 5} React</p> - {5 + 5} evaluates to 10",
          "Line 9: {isLoggedIn ? <button>Logout</button> : <button>Login</button>} - Conditional rendering"
        ],
        simpleMeaning: "JSX lets you write HTML inside JavaScript files.",
        output: "Renders HTML elements with dynamic content",
        note: "JSX is optional but recommended for React development."
      },
      // TOPIC 4: Functional Components
      {
        name: "📌 Functional Components",
        description: "Functional components are JavaScript functions that accept props as an argument and return JSX. They are simpler, have less boilerplate, and can use hooks for state and lifecycle features. Functional components are the modern standard for React development.",
        code: `function Welcome() {
  return <h1>Hello, Welcome to React!</h1>;
}

const Greeting = ({ name }) => {
  return <p>Hello, {name}!</p>;
}`,
        lineByLine: [
          "Line 1: function Welcome() { - Creates functional component",
          "Line 2: return <h1>Hello, Welcome to React!</h1> - Returns JSX",
          "Line 3: } - Closes component",
          "Line 5: const Greeting = ({ name }) => { - Arrow function component",
          "Line 6: return <p>Hello, {name}!</p> - Returns paragraph with name",
          "Line 7: }; - Closes component"
        ],
        simpleMeaning: "Components are the building blocks of React apps. Each component is a reusable piece of UI.",
        output: "Renders 'Hello, Welcome to React!' and 'Hello, Alice!'",
        note: "Component names must start with a capital letter."
      },
      // TOPIC 5: Class Components
      {
        name: "📌 Class Components",
        description: "Class components are the older way of creating React components using ES6 classes. They require a render() method and can use lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. State is managed with this.state and this.setState().",
        code: `import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  componentDidMount() {
    console.log('Component mounted');
  }
  
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.name}!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}`,
        lineByLine: [
          "Line 1: import React from 'react' - Import React",
          "Line 3: class Welcome extends React.Component - Class component declaration",
          "Line 4-8: constructor(props) - Initializes component",
          "Line 5: super(props) - Calls parent constructor",
          "Line 6-8: this.state = { count: 0 } - Initial state",
          "Line 10-12: componentDidMount() - Lifecycle method runs after mount",
          "Line 14-25: render() - Returns JSX",
          "Line 16: {this.props.name} - Access props",
          "Line 17: {this.state.count} - Access state"
        ],
        simpleMeaning: "Class components use ES6 classes and have lifecycle methods. They're being replaced by functional components with hooks.",
        output: "Displays welcome message with working counter",
        note: "Functional components with hooks are now preferred over class components."
      },
      // TOPIC 6: Props and PropTypes
      {
        name: "📌 Props and PropTypes",
        description: "Props (properties) are read-only data passed from parent to child components. PropTypes is a type-checking tool that validates props during development. Common validators include string, number, bool, array, object, func, and shape with isRequired for mandatory props.",
        code: `import PropTypes from 'prop-types';

function UserCard({ name, age, isAdmin }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Role: {isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdmin: PropTypes.bool
};

UserCard.defaultProps = {
  age: 18,
  isAdmin: false
};`,
        lineByLine: [
          "Line 1: import PropTypes from 'prop-types' - Import PropTypes",
          "Line 3-9: Component accepting props",
          "Line 11-15: PropTypes validation rules",
          "Line 12: name: PropTypes.string.isRequired - Must be string and required",
          "Line 13: age: PropTypes.number - Must be number (optional)",
          "Line 14: isAdmin: PropTypes.bool - Must be boolean",
          "Line 17-19: defaultProps - Default values when props not provided"
        ],
        simpleMeaning: "Props pass data between components. PropTypes validate data types to catch bugs early.",
        output: "Displays user information with proper data types",
        note: "PropTypes only run in development mode."
      },
      // TOPIC 7: useState Hook
      {
        name: "📌 useState Hook",
        description: "useState is a React hook that adds state management to functional components. It returns an array with two elements: current state value and a setter function. When the setter is called, React re-renders the component with the new value.",
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: '', age: 0 });
  const [items, setItems] = useState([]);
  
  const increment = () => {
    setCount(prev => prev + 1);
  };
  
  const updateName = (newName) => {
    setUser(prev => ({ ...prev, name: newName }));
  };
  
  const addItem = (item) => {
    setItems(prev => [...prev, item]);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import { useState } from 'react' - Import useState hook",
          "Line 4: const [count, setCount] = useState(0) - Number state",
          "Line 5: const [user, setUser] = useState({}) - Object state",
          "Line 6: const [items, setItems] = useState([]) - Array state",
          "Line 8-10: increment - Functional update",
          "Line 12-14: updateName - Updates object by spreading previous",
          "Line 16-18: addItem - Adds to array using spread"
        ],
        simpleMeaning: "useState gives components 'memory' to store and update data that changes over time.",
        output: "Counter increments when button is clicked",
        note: "State updates trigger component re-rendering."
      },
      // TOPIC 8: Event Handling
      {
        name: "📌 Event Handling",
        description: "React events use camelCase naming (onClick instead of onclick) and accept function references, not strings. Common events include onClick, onChange, onSubmit, onKeyDown, onMouseEnter, and onMouseLeave.",
        code: `function Button() {
  const handleClick = () => {
    alert('Button was clicked!');
  };
  
  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`,
        lineByLine: [
          "Line 1: function Button() - Creates Button component",
          "Line 2-4: handleClick function - Event handler that shows alert",
          "Line 7: onClick={handleClick} - Attaches click event"
        ],
        simpleMeaning: "Event handlers respond to user interactions like clicks.",
        output: "Shows alert when button is clicked",
        note: "Pass function reference, not function call (no parentheses)."
      },
      // TOPIC 9: Conditional Rendering
      {
        name: "📌 Conditional Rendering",
        description: "Conditional rendering shows different UI based on conditions. Use if-else statements outside JSX, ternary operators inside JSX, or logical && operator.",
        code: `function Status({ isLoggedIn, isLoading, error }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
}`,
        lineByLine: [
          "Line 2-4: if-else - Returns early for loading state",
          "Line 6-8: if-else for error - Shows error message",
          "Line 13-17: Ternary operator - Shows different buttons based on login status"
        ],
        simpleMeaning: "Conditional rendering shows different UI elements based on conditions.",
        output: "Shows loading spinner, error message, login button, or welcome message",
        note: "Ternary operator is best for simple conditions inside JSX."
      },
      // TOPIC 10: Lists and Keys
      {
        name: "📌 Lists and Keys",
        description: "List rendering uses the map() method to transform arrays into JSX elements. Each element needs a unique 'key' prop to help React identify items when they change. Keys must be unique among siblings and stable.",
        code: `function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}`,
        lineByLine: [
          "Line 2-8: map() transforms array into JSX elements",
          "Line 4: key={todo.id} - Unique key helps React optimize re-renders"
        ],
        simpleMeaning: "map() converts arrays into list elements. Keys help React track which items changed.",
        output: "Renders a list of todo items",
        note: "Never use index as key for dynamic lists."
      },
      // TOPIC 11: Fragments
      {
        name: "📌 Fragments",
        description: "Fragments allow you to group multiple elements without adding an extra wrapper node to the DOM. This is important because React components must return a single parent element. Using fragments prevents unnecessary divs that can break CSS layouts.",
        code: `function Component1() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </>
  );
}

function Component2({ items }) {
  return (
    <React.Fragment>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}`,
        lineByLine: [
          "Line 3-8: Short syntax <> </> - Groups elements without extra DOM node",
          "Line 12-20: Full syntax React.Fragment - Supports keys for list rendering",
          "Line 15: key={item.id} - Keys work with full fragment syntax"
        ],
        simpleMeaning: "Fragments group multiple elements without adding extra divs to the DOM.",
        output: "Renders multiple elements side by side without wrapper divs",
        note: "Use short syntax <> for most cases."
      },
      // TOPIC 12: Controlled Components
      {
        name: "📌 Controlled Components",
        description: "Controlled components have form inputs whose values are controlled by React state. The value prop is set from state, and onChange updates state on every change. This creates a single source of truth and makes input behavior predictable.",
        code: `import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}`,
        lineByLine: [
          "Line 4-5: const [email, setEmail] = useState('') - State for form fields",
          "Line 7-10: handleSubmit function - Prevents page refresh",
          "Line 16-17: value={email} onChange={(e) => setEmail(e.target.value)} - Controlled input"
        ],
        simpleMeaning: "Form inputs are controlled by React state, giving full control over data.",
        output: "Form submits without page refresh",
        note: "Always call e.preventDefault() in onSubmit."
      },
      // TOPIC 13: Uncontrolled Components
      {
        name: "📌 Uncontrolled Components",
        description: "Uncontrolled inputs let the DOM handle the input value internally, and you access it when needed using a ref. Use the useRef hook to create a reference to the input element, then read its value from ref.current.value when needed.",
        code: `import { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} defaultValue="" placeholder="Name" />
      <input ref={emailRef} defaultValue="" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}`,
        lineByLine: [
          "Line 1: import { useRef } from 'react' - Import useRef hook",
          "Line 4-5: const nameRef = useRef(null) - Creates refs",
          "Line 8: nameRef.current.value - Accesses current value of input",
          "Line 15: ref={nameRef} - Attaches ref to input element",
          "Line 16: defaultValue=\"\" - Uncontrolled inputs use defaultValue"
        ],
        simpleMeaning: "Uncontrolled components let DOM manage input values. useRef accesses values when needed.",
        output: "Form data only collected on submit",
        note: "Use defaultValue, not value, for uncontrolled inputs."
      },
      // TOPIC 14: Form Validation
      {
        name: "📌 Form Validation",
        description: "Form validation ensures data meets requirements before submission. Validation can be real-time (on each keystroke), on blur (when input loses focus), or on submit. Display error messages conditionally based on validation state.",
        code: `import { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateField = (name, value) => {
    switch (name) {
      case 'username':
        if (value.length < 3) return 'Username must be at least 3 characters';
        return '';
      case 'email':
        if (!value.includes('@')) return 'Valid email required';
        return '';
      case 'password':
        if (value.length < 6) return 'Password must be at least 6 characters';
        return '';
      case 'confirmPassword':
        if (value !== form.password) return 'Passwords do not match';
        return '';
      default: return '';
    }
  };
  
  const errors = Object.keys(form).reduce((acc, field) => {
    const error = validateField(field, form[field]);
    if (error) acc[field] = error;
    return acc;
  }, {});
  
  const isValid = Object.keys(errors).length === 0;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = {};
    Object.keys(form).forEach(field => { allTouched[field] = true; });
    setTouched(allTouched);
    
    if (!isValid) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', form);
    setIsSubmitting(false);
  };
  
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && errors.username && (
          <span>{errors.username}</span>
        )}
      </div>
      
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <span>{errors.email}</span>
        )}
      </div>
      
      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <span>{errors.password}</span>
        )}
      </div>
      
      <div>
        <label>Confirm Password:</label>
        <input
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <span>{errors.confirmPassword}</span>
        )}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}`,
        lineByLine: [
          "Line 4-10: form state - Stores all form field values",
          "Line 12: touched state - Tracks which fields user has interacted with",
          "Line 15-29: validateField function - Returns error message for each field",
          "Line 33-39: errors computed - Collects all validation errors",
          "Line 41: isValid = Object.keys(errors).length === 0 - Checks if form is valid",
          "Line 49-52: handleBlur - Marks field as touched",
          "Line 55-56: Touch all fields on submit - Shows all errors at once",
          "Line 59: Check isValid - Prevents submission if errors exist"
        ],
        simpleMeaning: "Validation checks data quality. Real-time validation shows errors as user types.",
        output: "Shows validation errors and prevents invalid submission",
        note: "Track touched state to avoid showing errors before user interaction."
      },
      // TOPIC 15: Inline Styles
      {
        name: "📌 Inline Styles",
        description: "Inline styles in React are written as objects with camelCase property names. Values are typically strings or numbers (pixels are assumed for numbers). Inline styles are useful for dynamic styling based on state or props.",
        code: `import { useState } from 'react';

function DynamicStyleButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(0);
  
  const baseStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };
  
  const dynamicStyle = {
    backgroundColor: isHovered ? '#0056b3' : '#007bff',
    color: 'white',
    transform: count > 5 ? 'scale(1.1)' : 'scale(1)'
  };
  
  return (
    <button
      style={{ ...baseStyle, ...dynamicStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setCount(count + 1)}
    >
      Click me ({count})
    </button>
  );
}`,
        lineByLine: [
          "Line 1: import { useState } from 'react' - Import for state management",
          "Line 4-5: State for hover and count",
          "Line 7-11: baseStyle - Static styles object",
          "Line 14-18: dynamicStyle - Computed styles based on state",
          "Line 15: backgroundColor: isHovered ? '#0056b3' : '#007bff' - Conditional style",
          "Line 21: style={{ ...baseStyle, ...dynamicStyle }} - Spreading multiple style objects"
        ],
        simpleMeaning: "Inline styles use camelCase objects. Good for dynamic styling.",
        output: "Button changes color on hover and scales after 5 clicks",
        note: "Inline styles have highest specificity. Use camelCase property names."
      },
      // TOPIC 16: CSS Classes
      {
        name: "📌 CSS Classes",
        description: "Using CSS classes is the recommended way to style React components for maintainable styling. The className attribute is used instead of the HTML class attribute because class is a reserved keyword in JavaScript.",
        code: `import './styles.css';
import { useState } from 'react';

function Button({ variant = 'primary', size = 'medium', disabled = false, children }) {
  const buttonClass = \`button button-\${variant} button-\${size} \${disabled ? 'button-disabled' : ''}\`;
  return <button className={buttonClass} disabled={disabled}>{children}</button>;
}

function ClassNameDemo() {
  const [activeTab, setActiveTab] = useState('profile');
  
  const getTabClass = (tabName) => {
    const classes = ['tab'];
    if (activeTab === tabName) classes.push('tab-active');
    return classes.join(' ');
  };
  
  return (
    <div>
      <div className="tabs">
        <button className={getTabClass('profile')} onClick={() => setActiveTab('profile')}>
          Profile
        </button>
        <button className={getTabClass('settings')} onClick={() => setActiveTab('settings')}>
          Settings
        </button>
      </div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button disabled>Disabled Button</Button>
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import './styles.css' - Imports external CSS file",
          "Line 6: const buttonClass = `button button-${variant}` - Template literal for dynamic class",
          "Line 7: className={buttonClass} - Applies dynamic class",
          "Line 14-17: getTabClass function - Returns className based on activeTab",
          "Line 18: classes.join(' ') - Joins classes with space"
        ],
        simpleMeaning: "CSS classes keep styling separate from logic. Use className instead of class.",
        output: "Styled buttons with variants and active tab highlighting",
        note: "Use className, not class. Template literals are great for dynamic class names."
      },
      // TOPIC 17: useEffect Hook
      {
        name: "📌 useEffect Hook",
        description: "useEffect handles side effects like API calls, DOM manipulation, timers, and subscriptions. It runs after the component renders. The dependencies array controls when it runs: empty [] = once on mount, [value] = when value changes.",
        code: `import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return <div>Seconds: {seconds}</div>;
}

function WindowWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return <p>Window width: {width}px</p>;
}`,
        lineByLine: [
          "Line 1: import { useEffect, useState } from 'react' - Import hooks",
          "Line 4: const [seconds, setSeconds] = useState(0) - State for timer",
          "Line 6-12: useEffect(() => {...}, []) - Runs once on mount",
          "Line 7-9: setInterval - Creates timer that runs every second",
          "Line 10: return () => clearInterval(interval) - Cleanup on unmount",
          "Line 18-27: WindowWidthTracker - Event listener with cleanup",
          "Line 20: const handleResize = () => setWidth(window.innerWidth) - Handler",
          "Line 21: window.addEventListener('resize', handleResize) - Adds listener",
          "Line 22: window.removeEventListener('resize', handleResize) - Removes listener"
        ],
        simpleMeaning: "useEffect runs code after rendering. Used for API calls, timers, and event listeners.",
        output: "Timer increments every second. Window width updates on resize.",
        note: "Always cleanup subscriptions to prevent memory leaks."
      },
      // TOPIC 18: useRef Hook
      {
        name: "📌 useRef Hook",
        description: "useRef creates a mutable object with a .current property that persists across re-renders without causing re-renders when changed. Used for accessing DOM elements directly (like focusing inputs) and storing mutable values.",
        code: `import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} type="text" placeholder="Auto-focused input" />;
}

function ClickCounter() {
  const clickCount = useRef(0);
  const [renderCount, setRenderCount] = useState(0);
  
  const handleClick = () => {
    clickCount.current++;
    console.log(\`Clicked \${clickCount.current} times\`);
  };
  
  return (
    <div>
      <p>Render count: {renderCount}</p>
      <p>Click count (ref): {clickCount.current}</p>
      <button onClick={handleClick}>Log Click (no re-render)</button>
      <button onClick={() => setRenderCount(renderCount + 1)}>Force Re-render</button>
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import { useRef, useEffect } from 'react' - Import hooks",
          "Line 4-11: AutoFocusInput - DOM access example",
          "Line 5: const inputRef = useRef(null) - Creates ref",
          "Line 8: inputRef.current.focus() - Focuses input",
          "Line 10: ref={inputRef} - Attaches ref to input",
          "Line 14-29: ClickCounter - Mutable value without re-render",
          "Line 15: const clickCount = useRef(0) - Ref that doesn't cause re-renders",
          "Line 19: clickCount.current++ - Updates ref - NO re-render"
        ],
        simpleMeaning: "useRef accesses DOM nodes directly and stores values that don't trigger re-renders.",
        output: "Input auto-focuses; click count updates without re-rendering",
        note: "Updating ref.current does NOT trigger component re-render."
      },
      // TOPIC 19: useContext Hook
      {
        name: "📌 useContext Hook",
        description: "Context API provides a way to pass data through the component tree without prop drilling. Create context with createContext(), provide value with Provider, and consume with useContext hook. Great for global data like theme, authentication, or language preferences.",
        code: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}`,
        lineByLine: [
          "Line 1: import { createContext, useContext, useState } - Import hooks",
          "Line 3: const ThemeContext = createContext() - Create context",
          "Line 5-11: ThemeProvider - Provider component",
          "Line 6: const [theme, setTheme] = useState('light') - State for theme",
          "Line 9-11: <ThemeContext.Provider value={{ theme, setTheme }}> - Provides value",
          "Line 14-19: ThemedButton - Component that consumes context",
          "Line 15: const { theme, setTheme } = useContext(ThemeContext) - Consumes context"
        ],
        simpleMeaning: "Context API shares data across components without passing props manually.",
        output: "Button toggles theme between light and dark",
        note: "Context is great for global data like theme, auth, language preferences."
      },
      // TOPIC 20: React Router
      {
        name: "📌 React Router",
        description: "React Router enables client-side routing without page reloads. Use BrowserRouter to wrap the app, Routes to contain Route components, Route to map paths to components, Link for navigation without refresh, useParams to access URL parameters.",
        code: `import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Home() { return <h1>Home Page</h1>; }
function About() { return <h1>About Page</h1>; }

function UserProfile() {
  const { userId } = useParams();
  return <h1>User Profile: {userId}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/123">User 123</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}`,
        lineByLine: [
          "Line 1: import router components - Imports necessary components",
          "Line 4-5: Home and About components",
          "Line 7-9: UserProfile - Component using useParams",
          "Line 8: const { userId } = useParams() - Extracts userId from URL",
          "Line 12: <BrowserRouter> - Wraps app for routing",
          "Line 14-16: <Link to=\"/\"> - Navigation links (no page refresh)",
          "Line 18-22: <Routes> and <Route> - Define route mappings"
        ],
        simpleMeaning: "React Router enables client-side navigation between pages without refreshing.",
        output: "Clicking links loads different components without page refresh",
        note: "useParams extracts URL parameters, useNavigate does programmatic navigation."
      }
    ]
  },
  advanced: {
    title: "🚀 React.js Advanced",
    topics: [
      // TOPIC 1: useMemo Hook
      {
        name: "⚡ useMemo Hook",
        description: "useMemo memoizes expensive calculations, recomputing only when dependencies change. This optimization prevents unnecessary recalculations on every render. Perfect for data filtering, sorting, transformations, and complex calculations that don't need to run on every render.",
        code: `import { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [filter, setFilter] = useState('');
  const [numbers] = useState([5, 12, 8, 130, 44, 7, 23, 9, 15]);
  
  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers...');
    return numbers.filter(n => n.toString().includes(filter));
  }, [numbers, filter]);
  
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return filteredNumbers.reduce((acc, num) => acc + num, 0);
  }, [filteredNumbers]);
  
  return (
    <div>
      <input
        placeholder="Filter numbers..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div>Filtered: {filteredNumbers.join(', ') || 'None'}</div>
      <div>Sum: {sum}</div>
    </div>
  );
}

export default ExpensiveCalculation;`,
        lineByLine: [
          "Line 1: Import useState and useMemo from React",
          "Line 4: State for filter input",
          "Line 5: Sample numbers data",
          "Line 8-12: useMemo memoizes filtered results",
          "Line 9: console.log shows when calculation runs",
          "Line 15-19: useMemo for sum calculation",
          "Line 22-33: Component UI"
        ],
        simpleMeaning: "useMemo caches calculation results and only recalculates when dependencies change. Perfect for expensive operations like filtering and sorting.",
        output: "Filtering and sum only recalculate when needed, not on every render.",
        note: "Don't overuse useMemo - use only for expensive calculations. The function runs during rendering, so avoid side effects."
      },
      // TOPIC 2: useCallback Hook
      {
        name: "🔁 useCallback Hook",
        description: "useCallback returns a memoized version of a function that only changes when dependencies change. It prevents unnecessary re-renders of child components that receive the function as a prop. Essential when passing callbacks to optimized child components that rely on reference equality.",
        code: `import { useState, useCallback, memo } from 'react';

const TodoItem = memo(({ todo, onToggle, onDelete }) => {
  console.log(\`TodoItem \${todo.id} rendered\`);
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
});

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false }
  ]);
  const [count, setCount] = useState(0);
  
  const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);
  
  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Parent Rerender: {count}
      </button>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;`,
        lineByLine: [
          "Line 2: Import useState, useCallback, and memo",
          "Line 4-18: TodoItem wrapped in React.memo",
          "Line 5: console.log shows when component re-renders",
          "Line 21-27: Parent component with todo state",
          "Line 29-34: handleToggle using useCallback - empty deps means never changes",
          "Line 38-42: handleDelete - also stable reference",
          "Line 46-49: Button triggers parent re-render",
          "Line 52-59: TodoItem components receive memoized callbacks"
        ],
        simpleMeaning: "useCallback memoizes function references, preventing unnecessary child re-renders. Use when passing functions to memoized child components.",
        output: "Parent re-renders but TodoItem components don't re-render (no console logs). Functions maintain same reference.",
        note: "Always add correct dependencies. Empty array means function never changes. Use with React.memo for maximum benefit."
      },
      // TOPIC 3: useReducer Hook
      {
        name: "🎬 useReducer Hook",
        description: "useReducer is an alternative to useState for managing complex state logic with multiple sub-values or when the next state depends on the previous state. It follows the reducer pattern from Redux, where a reducer function takes the current state and an action, and returns the new state.",
        code: `import { useReducer, useCallback, useMemo, useState } from 'react';

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: 'all'
  });
  const [inputValue, setInputValue] = useState('');
  
  const handleAddTodo = useCallback((e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  }, [inputValue]);
  
  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter(todo => !todo.completed);
      case 'completed':
        return state.todos.filter(todo => todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);
  
  const stats = useMemo(() => ({
    total: state.todos.length,
    active: state.todos.filter(t => !t.completed).length,
    completed: state.todos.filter(t => t.completed).length
  }), [state.todos]);
  
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add todo..."
        />
        <button type="submit">Add</button>
      </form>
      
      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>
          All ({stats.total})
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>
          Active ({stats.active})
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>
          Completed ({stats.completed})
        </button>
      </div>
      
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            />
            <span>{todo.text}</span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`,
        lineByLine: [
          "Line 1: Import useReducer, useCallback, useMemo, useState",
          "Line 3-27: todoReducer handles all state updates",
          "Line 5-13: ADD_TODO action adds new todo",
          "Line 14-21: TOGGLE_TODO toggles completion",
          "Line 22-25: DELETE_TODO removes todo",
          "Line 26-27: SET_FILTER changes view",
          "Line 30-35: useReducer returns state and dispatch",
          "Line 38-46: handleAddTodo dispatches ADD_TODO",
          "Line 49-56: filteredTodos memoized by filter",
          "Line 59-63: stats memoized for performance",
          "Line 66-101: UI with dispatch calls"
        ],
        simpleMeaning: "useReducer manages complex state with multiple related values using actions and a reducer function. Perfect for forms, shopping carts, and todos.",
        output: "Todo app with add, toggle, delete, and filter functionality. State updates are predictable and traceable.",
        note: "useReducer is great when next state depends on previous state. Actions should be predictable and pure."
      },
      // TOPIC 4: Custom Hooks
      {
        name: "🎣 Custom Hooks",
        description: "Custom hooks let you extract component logic into reusable functions. They can use other hooks and follow the same rules as built-in hooks. Perfect for sharing logic across components.",
        code: `import { useState, useEffect } from 'react';

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const abortController = new AbortController();
    
    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) throw Error('Fetch failed');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });
      
    return () => abortController.abort();
  }, [url]);
  
  return { data, loading, error };
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
}

// Using custom hooks
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className={theme}>
      <h1>{user.name}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}`,
        lineByLine: [
          "Line 4: function useFetch(url) { - Custom hook naming starts with 'use'",
          "Line 5-7: State for data, loading, and error",
          "Line 10: const abortController = new AbortController() - Cleanup for fetch",
          "Line 26: return () => abortController.abort() - Cancel fetch on unmount",
          "Line 30-45: useLocalStorage - Hook for persisting state",
          "Line 50-51: Using multiple custom hooks in a component"
        ],
        simpleMeaning: "Custom hooks let you reuse stateful logic across multiple components without duplicating code.",
        output: "Fetches user data and persists theme preference in localStorage",
        note: "Custom hooks must start with 'use' and follow hooks rules"
      },
      // TOPIC 5: Context API with useReducer
      {
        name: "🌐 Context API with useReducer",
        description: "Combining Context API with useReducer creates a powerful state management solution similar to Redux, but built into React. Perfect for medium-sized apps with complex global state.",
        code: `import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  user: null,
  theme: 'light',
  notifications: [],
  loading: false
};

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, loading: false };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [...state.notifications, action.payload] };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

// Create context
const AppContext = createContext();

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  // Action creators
  const login = (userData) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: userData });
    }, 1000);
  };
  
  const logout = () => dispatch({ type: 'LOGOUT' });
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  const addNotification = (message) => 
    dispatch({ type: 'ADD_NOTIFICATION', payload: { id: Date.now(), message } });
  
  const value = {
    state,
    dispatch,
    login,
    logout,
    toggleTheme,
    addNotification
  };
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook for using context
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

// Component using the context
function LoginForm() {
  const { login, state } = useApp();
  const [username, setUsername] = useState('');
  
  return (
    <div>
      {state.loading ? (
        <p>Loading...</p>
      ) : state.user ? (
        <div>
          <p>Welcome, {state.user.name}!</p>
          <button onClick={() => login(null)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={(e) => {
          e.preventDefault();
          login({ name: username, email: \`\${username}@example.com\` });
        }}>
          <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

function ThemeToggle() {
  const { toggleTheme, state } = useApp();
  return (
    <button onClick={toggleTheme}>
      Current theme: {state.theme}
    </button>
  );
}`,
        lineByLine: [
          "Line 1: Combining Context + useReducer for state management",
          "Line 5-10: Initial state structure",
          "Line 13-25: Reducer handles all state changes",
          "Line 28: AppContext created for sharing state",
          "Line 31-56: Provider wraps app and provides actions",
          "Line 59-67: Custom hook for easy context consumption",
          "Line 70-93: Login form using context state and actions",
          "Line 96-102: Theme toggle component"
        ],
        simpleMeaning: "Context + useReducer gives you Redux-like power without extra libraries.",
        output: "App maintains user, theme, notifications state globally with actions to update them",
        note: "This pattern scales better than multiple useState hooks for complex state"
      },
      // TOPIC 6: React.memo
      {
        name: "⚡ React.memo",
        description: "React.memo is a higher-order component that memoizes a functional component, preventing re-renders when its props haven't changed. It performs a shallow comparison of props. Useful for components that render often with the same props.",
        code: `import { useState, memo } from 'react';

const MemoizedChild = memo(({ name, onClick }) => {
  console.log(\`Child \${name} rendered\`);
  return (
    <div>
      <p>Hello {name}!</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');
  
  const handleClick = () => {
    console.log('Button clicked');
  };
  
  return (
    <div>
      <p>Parent count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <button onClick={() => setName(name === 'John' ? 'Jane' : 'John')}>
        Change Name
      </button>
      <MemoizedChild name={name} onClick={handleClick} />
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import { useState, memo } from 'react' - Import memo",
          "Line 3: const MemoizedChild = memo(({ name, onClick }) => { - Memoized component",
          "Line 4: console.log(`Child ${name} rendered`) - Logs when rendered",
          "Line 12-15: State declarations",
          "Line 17-19: handleClick function - Stable reference"
        ],
        simpleMeaning: "React.memo prevents unnecessary re-renders when props haven't changed.",
        output: "Child only re-renders when name changes, not when parent count changes",
        note: "Use with useCallback for functions passed as props."
      },
      // TOPIC 7: Lazy Loading (Code Splitting)
      {
        name: "⏳ Lazy Loading",
        description: "React.lazy and Suspense enable code splitting by dynamically importing components only when needed. This reduces initial bundle size and improves load time. Lazy components must be rendered inside a Suspense component with a fallback UI.",
        code: `import { lazy, Suspense, useState } from 'react';

const LazyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  const [showHeavy, setShowHeavy] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowHeavy(!showHeavy)}>
        {showHeavy ? 'Hide' : 'Show'} Heavy Component
      </button>
      {showHeavy && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import { lazy, Suspense, useState } from 'react' - Import lazy and Suspense",
          "Line 3: const LazyComponent = lazy(() => import('./HeavyComponent')) - Lazy loads component",
          "Line 8: <button onClick={() => setShowHeavy(!showHeavy)}> - Toggle button",
          "Line 11: <Suspense fallback={<div>Loading...</div>}> - Shows loading UI while loading",
          "Line 12: <LazyComponent /> - Renders lazy component when condition is true"
        ],
        simpleMeaning: "Lazy loading loads components only when needed, reducing initial page load time.",
        output: "Heavy component loads only when 'Show' button is clicked",
        note: "Lazy loading only works with default exports."
      },
      // TOPIC 8: Error Boundaries
      {
        name: "🛡️ Error Boundaries",
        description: "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app. They catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.",
        code: `import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });
    
    // Send to error tracking service (e.g., Sentry, LogRocket)
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <details>
            <summary>Error details</summary>
            <p>{this.state.error?.toString()}</p>
          </details>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <WidgetThatMightCrash />
    </ErrorBoundary>
  );
}`,
        lineByLine: [
          "Line 4: class ErrorBoundary extends React.Component - Must be class component",
          "Line 9: static getDerivedStateFromError(error) - Catch error, update state",
          "Line 13: componentDidCatch(error, errorInfo) - Log errors side effects",
          "Line 21-37: Render fallback UI when error occurs",
          "Line 50-56: Wrap components that might crash"
        ],
        simpleMeaning: "Error boundaries catch crashes in components, show fallback UI instead of blank screen.",
        output: "When a component crashes, only that component shows an error message. The rest of the app continues working normally.",
        note: "Error boundaries don't catch errors in event handlers or async code - use try/catch for those"
      },
      // TOPIC 9: Portals
      {
        name: "🚪 Portals",
        description: "Portals let you render children outside the parent component's DOM hierarchy. Great for modals, tooltips, and dropdowns that need to break out of overflow/stacking contexts.",
        code: `import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        maxHeight: '80vh',
        overflow: 'auto'
      }} onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root') // Portal destination
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This modal renders outside the React root!</p>
      </Modal>
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import { createPortal } from 'react-dom' - Import portal function",
          "Line 7-28: Portal renders modal at different DOM location",
          "Line 30: document.getElementById('modal-root') - Portal destination",
          "Line 33-45: Component using portal"
        ],
        simpleMeaning: "Portals let you render components outside their normal DOM parent, useful for modals and tooltips.",
        output: "Modal covers entire screen despite parent overflow constraints",
        note: "Portal events still bubble through React tree, even though DOM location is different"
      },
      // TOPIC 10: useTransition Hook
      {
        name: "🔄 useTransition Hook",
        description: "useTransition marks state updates as non-urgent, keeping the UI responsive during expensive updates. It's great for search inputs, tab switching, and large list filtering.",
        code: `import { useState, useTransition, useMemo } from 'react';

function SearchList() {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  
  // Large dataset (simulated)
  const allItems = Array.from({ length: 20000 }, (_, i) => \`Item \${i}\`);
  
  const filteredItems = useMemo(() => {
    if (!searchQuery) return allItems;
    return allItems.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Urgent update
  
    startTransition(() => {
      setSearchQuery(value); // Non-urgent update
    });
  };
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search 20,000 items..."
      />
      {isPending && <div>Loading results...</div>}
      <ul style={{ maxHeight: '400px', overflow: 'auto' }}>
        {filteredItems.slice(0, 100).map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`,
        lineByLine: [
          "Line 4: const [isPending, startTransition] = useTransition() - Get transition state and function",
          "Line 9: useMemo memoizes filtered results",
          "Line 19: startTransition(() => { - Wrap non-urgent update",
          "Line 20: setSearchQuery(value) - This update can be interrupted",
          "Line 27: {isPending && <div>...</div>} - Show loading indicator",
          "Line 29: .slice(0, 100) - Only render first 100 items"
        ],
        simpleMeaning: "useTransition keeps the UI responsive by marking some updates as lower priority.",
        output: "Input feels snappy while search results load asynchronously",
        note: "useTransition only works with state updates, not API calls"
      },
      // TOPIC 11: HOCs (Higher Order Components)
      {
        name: "🎨 HOCs (Higher Order Components)",
        description: "HOCs are functions that take a component and return an enhanced component. They're useful for cross-cutting concerns like authentication, logging, or data fetching.",
        code: `import { useState, useEffect } from 'react';

// HOC for adding loading state
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// HOC for authentication check
function withAuth(WrappedComponent) {
  return function WithAuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);
    
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
      setChecking(false);
    }, []);
    
    if (checking) return <div>Checking authentication...</div>;
    if (!isAuthenticated) return <div>Please log in</div>;
    
    return <WrappedComponent {...props} />;
  };
}

// Basic component
function UserProfile({ user }) {
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

// Apply HOCs
const EnhancedUserProfile = withAuth(withLoading(UserProfile));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  
  return (
    <EnhancedUserProfile 
      isLoading={isLoading}
      user={{ name: 'John Doe', email: 'john@example.com' }}
    />
  );
}`,
        lineByLine: [
          "Line 4-11: withLoading HOC - Adds loading UI",
          "Line 14-33: withAuth HOC - Handles authentication",
          "Line 36-45: Basic component that receives enhanced props",
          "Line 48: Apply multiple HOCs to a component",
          "Line 51-60: Using enhanced component"
        ],
        simpleMeaning: "HOCs are component factories that add features to existing components without changing their code.",
        output: "UserProfile gets auth protection and loading state automatically",
        note: "Hooks are often simpler alternatives to HOCs, but HOCs still useful for wrapper components"
      },
      // TOPIC 12: Refs & DOM Manipulation
      {
        name: "🔗 Refs & DOM Manipulation",
        description: "Refs can do much more than just get DOM elements - they're great for values that shouldn't trigger re-renders, measuring elements, and managing animations.",
        code: `import { useRef, useState, useEffect } from 'react';

function AdvancedRefExample() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [text, setText] = useState('');
  
  // Track render count without causing re-renders
  renderCount.current++;
  
  // Auto-scroll to bottom of chat
  const chatContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  
  const addMessage = () => {
    setMessages(prev => [...prev, \`Message \${prev.length + 1} at \${new Date().toLocaleTimeString()}\`]);
  };
  
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]); // Scroll on new messages
  
  // Measure element size
  const measureRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const measureElement = () => {
    if (measureRef.current) {
      const rect = measureRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height
      });
    }
  };
  
  // Focus management
  const inputRefs = useRef([]);
  const focusNext = (index) => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  
  return (
    <div>
      <p>Component rendered {renderCount.current} times</p>
      
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
      <button onClick={() => inputRef.current?.focus()}>
        Focus Input
      </button>
      
      {/* Auto-scroll chat */}
      <div>
        <div 
          ref={chatContainerRef}
          style={{ height: '200px', overflow: 'auto', border: '1px solid #ccc' }}
        >
          {messages.map((msg, i) => <div key={i}>{msg}</div>)}
        </div>
        <button onClick={addMessage}>Add Message</button>
      </div>
      
      {/* Measure element */}
      <div>
        <div ref={measureRef} style={{ padding: '20px', background: '#f0f0f0' }}>
          Resize me!
        </div>
        <button onClick={measureElement}>Measure Size</button>
        {dimensions.width > 0 && (
          <p>Width: {dimensions.width}px, Height: {dimensions.height}px</p>
        )}
      </div>
      
      {/* Focus management */}
      <div>
        {[0, 1, 2].map(i => (
          <input
            key={i}
            ref={el => inputRefs.current[i] = el}
            type="text"
            placeholder={\`Input \${i + 1}\`}
            onKeyDown={(e) => e.key === 'Enter' && focusNext(i)}
          />
        ))}
        <small>Press Enter to focus next input</small>
      </div>
    </div>
  );
}`,
        lineByLine: [
          "Line 1: useRef for DOM access and mutable values",
          "Line 8: renderCount.current++ - Track renders without state",
          "Line 17-21: Auto-scroll effect when messages change",
          "Line 27-35: Measure DOM element size",
          "Line 38-42: Input refs array for focus management"
        ],
        simpleMeaning: "Refs can do much more than just get DOM elements - they're great for values that shouldn't trigger re-renders.",
        output: "Shows render count, auto-scrolling chat, element measurement, and keyboard navigation",
        note: "Refs don't cause re-renders - perfect for values that update frequently or need persistence"
      },
      // TOPIC 13: React Router Advanced
      {
        name: "🎬 React Router Advanced",
        description: "React Router enables navigation between different views in your React app. It provides declarative routing with components like BrowserRouter, Routes, Route, and Link, plus hooks for navigation and URL parameters.",
        code: `import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  NavLink,
  useParams, 
  useNavigate, 
  useLocation,
  Navigate,
  Outlet
} from 'react-router-dom';

// Layout component with Outlet for nested routes
function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/" style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black',
          fontWeight: isActive ? 'bold' : 'normal'
        })}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

// Home component with navigation
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

// About component with query params
function About() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name') || 'Guest';
  
  return (
    <div>
      <h1>About Page</h1>
      <p>Hello, {name}!</p>
    </div>
  );
}

// Product detail with URL params
function ProductDetail() {
  const { id } = useParams();
  return <h1>Product ID: {id}</h1>;
}

// Protected route component
function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuth(!!token);
  }, []);
  
  if (!isAuth) return <Navigate to="/" replace />;
  return children;
}

// Main App with router configuration
function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="dashboard" element={
            <ProtectedRoute>
              <div>Dashboard Content</div>
            </ProtectedRoute>
          } />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`,
        lineByLine: [
          "Line 1-9: Import router components",
          "Line 12-24: Layout with NavLink and Outlet",
          "Line 27-33: Home with useNavigate",
          "Line 36-44: About with useLocation for query params",
          "Line 47-49: Product detail with useParams",
          "Line 52-62: ProtectedRoute component for auth",
          "Line 65-74: Route configuration with nesting"
        ],
        simpleMeaning: "React Router lets you create multi-page experiences in a single-page React app.",
        output: "Complete navigation system with nested routes, protected routes, and 404 handling",
        note: "React Router v6 uses Routes instead of Switch, and element instead of component/render"
      },
      // /data/reactjs/learning.js (Advanced Topics Addition)

// ==================== REACT 19 NEW FEATURES ====================
{
  name: "🚀 React 19 New Features",
  description: "React 19 introduces several powerful features including the 'use' API for promises and context, Server Components, Asset Loading (preload, prefetchDNS, preconnect, preinit), Document Metadata management, and Actions with useOptimistic, useFormStatus, and useActionState hooks.",
  code: `import { use, Suspense, useOptimistic, useFormStatus, useActionState, preload, prefetchDNS, preconnect, preinit } from 'react';

// ========== 'use' API - Promise and Context Resolution ==========
// Promise resolution without useEffect or useState
function UserProfile({ userPromise }) {
  // 'use' unwraps the promise - no useEffect needed!
  const user = use(userPromise);
  return <div>{user.name}</div>;
}

// Context with 'use' (alternative to useContext)
const ThemeContext = createContext();
function ThemedButton() {
  const theme = use(ThemeContext);
  return <button style={{ background: theme }}>Click</button>;
}

// ========== useOptimistic - Optimistic UI Updates ==========
function MessageList({ messages, sendMessage }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { id: Date.now(), text: newMessage, sending: true }]
  );
  
  const handleSend = async (formData) => {
    const message = formData.get('message');
    addOptimisticMessage(message);
    await sendMessage(message);
  };
  
  return (
    <div>
      {optimisticMessages.map(msg => (
        <div key={msg.id} style={{ opacity: msg.sending ? 0.5 : 1 }}>
          {msg.text} {msg.sending && '⌛'}
        </div>
      ))}
      <form action={handleSend}>
        <input name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

// ========== useFormStatus - Form Submission Status ==========
function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
      {pending && <Spinner />}
    </button>
  );
}

// ========== useActionState - Form State Management ==========
function SignupForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const email = formData.get('email');
      try {
        await api.signup(email);
        return { success: true, message: 'Signed up!' };
      } catch (error) {
        return { success: false, message: error.message };
      }
    },
    { success: null, message: '' }
  );
  
  return (
    <form action={formAction}>
      <input type="email" name="email" required />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Signing up...' : 'Sign Up'}
      </button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}

// ========== Asset Loading ==========
function App() {
  // Preload critical resources
  preload('/hero-image.jpg', { as: 'image' });
  preload('/font.woff2', { as: 'font', type: 'font/woff2' });
  
  // Preconnect to external origins
  preconnect('https://api.example.com');
  
  // Prefetch DNS
  prefetchDNS('https://analytics.example.com');
  
  // Preinit for early initialization
  preinit('/analytics.js', { as: 'script' });
  
  return <div>App</div>;
}

// ========== Document Metadata ==========
import { Metadata } from 'react';
export const metadata = {
  title: 'My App',
  description: 'React 19 Demo',
  openGraph: {
    title: 'My App',
    images: ['/og-image.png']
  }
};`,
  lineByLine: [
    "Line 5-10: 'use' API - Direct promise resolution without useEffect",
    "Line 13-16: 'use' API with Context - alternative to useContext",
    "Line 19-37: useOptimistic - Immediate UI updates before server response",
    "Line 40-48: useFormStatus - Access form submission state",
    "Line 51-70: useActionState - Handle form actions with state",
    "Line 73-80: Asset loading APIs - preload, preconnect, prefetchDNS, preinit"
  ],
  simpleMeaning: "React 19 brings built-in solutions for promises, forms, asset loading, and metadata management.",
  output: "Simpler data fetching, optimistic UI updates, better form handling, and automatic resource hints.",
  note: "'use' API only works in Server Components or Client Components with Suspense. useOptimistic requires React 19."
},

// ==================== REACT SERVER COMPONENTS ====================
{
  name: "🌐 React Server Components (RSC)",
  description: "React Server Components allow you to render components on the server, reducing client-side JavaScript and enabling direct database access. They can be async and have zero bundle size impact. 'use server' directive marks Server Actions for client invocation.",
  code: `// ========== SERVER COMPONENT ==========
// app/products/page.js (Server Component by default)
import { db } from '@/lib/db';

async function ProductList() {
  // Direct database access - runs only on server
  const products = await db.product.findMany();
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ========== CLIENT COMPONENT ==========
// app/components/ProductCard.js
'use client';
import { useState } from 'react';

export function ProductCard({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => setIsInCart(true)}>
        {isInCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

// ========== SERVER ACTIONS ==========
// app/actions.js
'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addToCart(productId, userId) {
  // Runs on server, can be called from client
  await db.cart.create({
    data: { productId, userId }
  });
  revalidatePath('/cart'); // Revalidate cache
  return { success: true };
}

// Client component using Server Action
// app/components/AddToCartButton.js
'use client';
import { addToCart } from '../actions';

export function AddToCartButton({ productId, userId }) {
  return (
    <form action={addToCart.bind(null, productId, userId)}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}

// ========== STREAMING WITH SUSPENSE ==========
import { Suspense } from 'react';

// Slow data fetching - streams when ready
async function SlowComponent() {
  const data = await fetchSlowData();
  return <div>{data}</div>;
}

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SlowComponent />
    </Suspense>
  );
}`,
  lineByLine: [
    "Line 5-15: Server Component - runs only on server, zero client JS",
    "Line 7: async function - Server Components can be async",
    "Line 8: Direct database access - no API layer needed",
    "Line 18-35: Client Component - 'use client' directive for interactivity",
    "Line 39-53: Server Actions - 'use server' marks server-executable functions",
    "Line 41: revalidatePath - Next.js cache revalidation",
    "Line 56-66: Client component using Server Action via form action",
    "Line 69-79: Streaming with Suspense - progressive rendering"
  ],
  simpleMeaning: "Server Components render on the server with zero client JS. Server Actions let client components call server functions directly.",
  output: "Faster initial load, smaller bundle size, direct database access, and progressive UI streaming.",
  note: "Server Components can't use useState, useEffect, or browser APIs. Use 'use client' for interactive components."
},

// ==================== REACT COMPILER (React Forget) ====================
{
  name: "⚡ React Compiler (React Forget)",
  description: "React Compiler is an automatic memoization tool that eliminates manual useMemo, useCallback, and React.memo. It analyzes your code and automatically adds memoization where needed, improving performance without developer effort.",
  code: `// ========== BEFORE: Manual Memoization ==========
import { useMemo, useCallback, memo } from 'react';

// Manual memo - developer has to think about dependencies
const ExpensiveComponent = memo(({ items, onItemClick }) => {
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => a - b);
  }, [items]);
  
  const handleClick = useCallback((id) => {
    onItemClick(id);
  }, [onItemClick]);
  
  return <div onClick={handleClick}>{sortedItems}</div>;
});

// ========== AFTER: With React Compiler ==========
// No manual memoization needed - compiler handles everything
function OptimizedComponent({ items, onItemClick }) {
  // Compiler automatically memoizes this calculation
  const sortedItems = [...items].sort((a, b) => a - b);
  
  // Compiler automatically memoizes this function
  const handleClick = (id) => {
    onItemClick(id);
  };
  
  return <div onClick={handleClick}>{sortedItems}</div>;
}

// ========== COMPILER DIRECTIVES ==========
// Enable for specific component
// @react-memo
function MyComponent({ data }) {
  return <div>{data}</div>;
}

// Disable for specific component (rare cases)
// @react-no-memo
function AlwaysReRenderComponent({ counter }) {
  return <div>{counter}</div>;
}`,
  lineByLine: [
    "Line 5-21: Before React Compiler - manual memoization required",
    "Line 8: React.memo for component memoization",
    "Line 9: useMemo for expensive calculations",
    "Line 16: useCallback for function stability",
    "Line 27-34: After Compiler - no manual memoization needed",
    "Line 37: @react-memo directive - explicit opt-in",
    "Line 43: @react-no-memo directive - disable compiler for specific component"
  ],
  simpleMeaning: "React Compiler automatically optimizes your components without manual useMemo, useCallback, or React.memo.",
  output: "Better performance without extra code. Components only re-render when needed. No manual dependency management.",
  note: "React Compiler is currently experimental. Works best with functional components following React rules."
},

// ==================== SUSPENSE FOR DATA FETCHING ====================
{
  name: "⏳ Suspense for Data Fetching",
  description: "Suspense lets components 'wait' for data before rendering, showing a fallback UI. It works with any data fetching library that supports Suspense (React Query, SWR, Relay, or custom).",
  code: `import { Suspense, use } from 'react';

// ========== DATA FETCHING WITH SUSPENSE ==========
// Resource wrapper (creates Suspense-compatible promise)
function createResource(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    }
  };
}

// API function
async function fetchUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}

// Component that reads data using Resource
function UserProfile({ userId }) {
  const [userResource] = useState(() => createResource(fetchUser(userId)));
  const user = userResource.read(); // Throws promise if not ready
  return <div>{user.name}</div>;
}

// Using Suspense boundary
function App() {
  return (
    <Suspense fallback={<div>Loading user...</div>}>
      <UserProfile userId={123} />
    </Suspense>
  );
}

// ========== MULTIPLE SUSPENSE BOUNDARIES ==========
function Dashboard() {
  return (
    <div>
      <Suspense fallback={<div>Loading profile...</div>}>
        <UserProfile />
      </Suspense>
      <Suspense fallback={<div>Loading posts...</div>}>
        <UserPosts />
      </Suspense>
      <Suspense fallback={<div>Loading comments...</div>}>
        <UserComments />
      </Suspense>
    </div>
  );
}

// ========== NESTED SUSPENSE ==========
function NestedSuspenseExample() {
  return (
    <Suspense fallback={<GlobalSpinner />}>
      <Layout>
        <Suspense fallback={<SidebarSpinner />}>
          <Sidebar />
        </Suspense>
        <Suspense fallback={<ContentSpinner />}>
          <MainContent />
        </Suspense>
      </Layout>
    </Suspense>
  );
}

// ========== TRANSITIONS WITH SUSPENSE ==========
function SearchPage() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    startTransition(() => {
      // Show stale content while new content loads
      setSearchQuery(value);
    });
  };
  
  return (
    <div>
      <input onChange={handleSearch} />
      {isPending && <div>Loading...</div>}
      <Suspense fallback={<div>Searching...</div>}>
        <SearchResults query={searchQuery} />
      </Suspense>
    </div>
  );
}`,
  lineByLine: [
    "Line 5-28: Resource wrapper - creates Suspense-compatible data source",
    "Line 8-20: Promise with status tracking",
    "Line 23-27: Resource.read() - throws promise when loading",
    "Line 31-42: Component using Resource pattern",
    "Line 45-50: Suspense boundary with fallback UI",
    "Line 53-65: Multiple independent Suspense boundaries",
    "Line 68-76: Nested Suspense for granular loading",
    "Line 79-102: useTransition with Suspense for smooth UI updates"
  ],
  simpleMeaning: "Suspense lets components 'pause' rendering while loading data, showing a fallback UI until ready.",
  output: "Smooth loading states, parallel data fetching, and nested loading UIs without waterfall requests.",
  note: "Suspense requires a data fetching library that supports it (React Query, SWR, or custom Resource)."
},

// ==================== USE OPTIMISTIC HOOK ====================
{
  name: "✨ useOptimistic Hook",
  description: "useOptimistic allows optimistic UI updates - showing the result immediately while the actual request happens in background. If the request fails, the UI reverts automatically. Perfect for likes, comments, form submissions, and any action where you want instant feedback.",
  code: `import { useOptimistic, useRef } from 'react';

// ========== BASIC USE OPTIMISTIC ==========
function LikeButton({ initialLikes, onLike }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (currentState, newLike) => currentState + 1
  );
  
  const handleLike = async () => {
    addOptimisticLike(null); // Trigger optimistic update
    try {
      await onLike(); // Actual server request
    } catch (error) {
      // On error, optimistic value reverts automatically
      console.error('Failed to like');
    }
  };
  
  return (
    <button onClick={handleLike}>
      ❤️ {optimisticLikes} likes
    </button>
  );
}

// ========== COMPLEX OPTIMISTIC UPDATE ==========
function TodoList({ todos, onAddTodo, onToggleTodo, onDeleteTodo }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, action) => {
      switch (action.type) {
        case 'ADD':
          return [...state, { id: Date.now(), text: action.text, completed: false, optimistic: true }];
        case 'TOGGLE':
          return state.map(todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed, optimistic: true }
              : todo
          );
        case 'DELETE':
          return state.filter(todo => todo.id !== action.id);
        default:
          return state;
      }
    }
  );
  
  const handleAddTodo = async (formData) => {
    const text = formData.get('todo');
    addOptimisticTodo({ type: 'ADD', text });
    try {
      await onAddTodo(text);
    } catch (error) {
      // Optimistic update reverts
      console.error('Failed to add todo');
    }
  };
  
  const handleToggleTodo = async (id) => {
    addOptimisticTodo({ type: 'TOGGLE', id });
    try {
      await onToggleTodo(id);
    } catch (error) {
      // Reverts automatically
    }
  };
  
  const handleDeleteTodo = async (id) => {
    addOptimisticTodo({ type: 'DELETE', id });
    try {
      await onDeleteTodo(id);
    } catch (error) {
      // Reverts automatically
    }
  };
  
  return (
    <div>
      <form action={handleAddTodo}>
        <input name="todo" placeholder="Add todo..." />
        <button type="submit">Add</button>
      </form>
      
      {optimisticTodos.map(todo => (
        <div key={todo.id} style={{ opacity: todo.optimistic ? 0.5 : 1 }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          {todo.optimistic && <span className="spinner" />}
        </div>
      ))}
    </div>
  );
}

// ========== USE OPTIMISTIC IN FORM ==========
function CommentSection({ comments, onAddComment }) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, { ...newComment, optimistic: true }]
  );
  const formRef = useRef(null);
  
  const handleSubmit = async (formData) => {
    const comment = {
      id: Date.now(),
      text: formData.get('comment'),
      author: 'Current User',
      timestamp: new Date().toISOString()
    };
    
    addOptimisticComment(comment);
    formRef.current?.reset();
    
    try {
      await onAddComment(comment);
    } catch (error) {
      // Optimistic comment will disappear on error
      console.error('Failed to post comment');
    }
  };
  
  return (
    <div>
      <form ref={formRef} action={handleSubmit}>
        <textarea name="comment" placeholder="Write a comment..." />
        <button type="submit">Post Comment</button>
      </form>
      
      {optimisticComments.map(comment => (
        <div key={comment.id} className="comment">
          <strong>{comment.author}</strong>
          <p>{comment.text}</p>
          <small>{new Date(comment.timestamp).toLocaleString()}</small>
          {comment.optimistic && <span className="sending">⌛ Sending...</span>}
        </div>
      ))}
    </div>
  );
}`,
  lineByLine: [
    "Line 5-15: Basic useOptimistic - optimistic counter update",
    "Line 6: useOptimistic(initialState, reducer)",
    "Line 8: reducer updates optimistic state",
    "Line 11-13: Optimistic update on user action",
    "Line 16-20: Error handling - optimistic value reverts",
    "Line 25-51: Complex reducer handling multiple action types",
    "Line 32-35: ADD action with optimistic flag",
    "Line 36-41: TOGGLE action with optimistic flag",
    "Line 67-70: Visual feedback (opacity) for optimistic items",
    "Line 74-111: Form handling with optimistic comments",
    "Line 85: formRef.current?.reset() - clear form after optimistic update"
  ],
  simpleMeaning: "useOptimistic shows UI updates instantly while server request runs in background, reverting if request fails.",
  output: "Instant UI feedback for likes, comments, todos. No waiting for server response. Automatic rollback on error.",
  note: "Optimistic updates should be idempotent. Always handle errors - optimistic state reverts automatically."
},

// ==================== USE FORM STATUS HOOK ====================
{
  name: "📝 useFormStatus Hook",
  description: "useFormStatus provides access to form submission state from within a form component, without passing props through components. It returns pending, data, method, and action properties. Perfect for submit buttons, loading indicators, and form validation during submission.",
  code: `import { useFormStatus, useActionState } from 'react';

// ========== BASIC USE FORM STATUS ==========
function SubmitButton({ children }) {
  const { pending, data, method, action } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending} className={pending ? 'loading' : ''}>
      {pending ? 'Submitting...' : children}
      {pending && <Spinner />}
    </button>
  );
}

function SignupForm() {
  return (
    <form action={handleSignup}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <SubmitButton>Sign Up</SubmitButton>
    </form>
  );
}

// ========== ADVANCED FORM STATUS USAGE ==========
function RegisterForm() {
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (formData) => {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    setMessage(result.message);
  };
  
  return (
    <form action={handleSubmit}>
      <FormField name="username" label="Username" />
      <FormField name="email" label="Email" type="email" />
      <FormField name="password" label="Password" type="password" />
      <SubmitButton>Register</SubmitButton>
      {message && <div className="message">{message}</div>}
    </form>
  );
}

function FormField({ name, label, type = 'text' }) {
  const { pending } = useFormStatus();
  
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        disabled={pending}
        required
      />
    </div>
  );
}

// ========== MULTIPLE SUBMIT BUTTONS ==========
function MultiActionForm() {
  const [result, setResult] = useState('');
  
  const saveAsDraft = async (formData) => {
    setResult('Draft saved');
    await api.saveDraft(formData);
  };
  
  const publish = async (formData) => {
    setResult('Published');
    await api.publish(formData);
  };
  
  return (
    <form>
      <input name="title" />
      <textarea name="content" />
      
      <div className="buttons">
        <SubmitButton formAction={saveAsDraft}>Save Draft</SubmitButton>
        <SubmitButton formAction={publish}>Publish</SubmitButton>
      </div>
      
      {result && <div className="result">{result}</div>}
    </form>
  );
}

// ========== FORM STATUS WITH VALIDATION ==========
function ValidatedForm() {
  const { pending } = useFormStatus();
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (formData) => {
    // Validate before submission
    const newErrors = {};
    const email = formData.get('email');
    const age = formData.get('age');
    
    if (email && !email.includes('@')) {
      newErrors.email = 'Invalid email';
    }
    if (age && (age < 18 || age > 120)) {
      newErrors.age = 'Age must be between 18 and 120';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    await api.submit(formData);
  };
  
  return (
    <form action={handleSubmit}>
      <div>
        <input name="email" type="email" placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input name="age" type="number" placeholder="Age" />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}`,
  lineByLine: [
    "Line 4-9: useFormStatus destructuring",
    "Line 5: pending - boolean indicating active submission",
    "Line 6: data - FormData of current submission",
    "Line 7: method - HTTP method (get/post)",
    "Line 8: action - form action function",
    "Line 11-18: SubmitButton with loading state",
    "Line 37-47: FormField component using useFormStatus",
    "Line 39: pending status within child component",
    "Line 42: disabled={pending} - disable during submission",
    "Line 56-82: Multiple submit buttons with different actions",
    "Line 85-118: Form validation with useFormStatus"
  ],
  simpleMeaning: "useFormStatus gives any component access to the parent form's submission state without props.",
  output: "Submit buttons show loading state. Form fields disable during submission. Multiple actions with different buttons.",
  note: "useFormStatus only works inside a component that is a child of a <form> element."
},

// ==================== USE ACTION STATE HOOK ====================
{
  name: "🎬 useActionState Hook",
  description: "useActionState manages form submission state including pending status, errors, and returned data. It replaces manual loading and error state management for forms. Returns [state, formAction, isPending] where formAction is the action to pass to <form action={formAction}>.",
  code: `import { useActionState } from 'react';
import { submitForm, validateForm } from './actions';

// ========== BASIC USE ACTION STATE ==========
function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Simulate API call
      try {
        const response = await submitForm({ name, email, message });
        return { success: true, message: 'Message sent!', data: response };
      } catch (error) {
        return { success: false, message: error.message };
      }
    },
    { success: null, message: '', data: null }
  );
  
  return (
    <form action={formAction}>
      <input name="name" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
      {state.message && (
        <div className={state.success ? 'success' : 'error'}>
          {state.message}
        </div>
      )}
    </form>
  );
}

// ========== WITH VALIDATION ==========
function RegistrationForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      // Validate
      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');
      
      const validationErrors = {};
      if (!username || username.length < 3) {
        validationErrors.username = 'Username must be at least 3 characters';
      }
      if (!email || !email.includes('@')) {
        validationErrors.email = 'Valid email required';
      }
      if (!password || password.length < 6) {
        validationErrors.password = 'Password must be at least 6 characters';
      }
      
      if (Object.keys(validationErrors).length > 0) {
        return { success: false, errors: validationErrors };
      }
      
      try {
        await api.register({ username, email, password });
        return { success: true, errors: {} };
      } catch (error) {
        return { success: false, errors: { form: error.message } };
      }
    },
    { success: null, errors: {} }
  );
  
  return (
    <form action={formAction}>
      <div>
        <input name="username" placeholder="Username" />
        {state.errors?.username && <span className="error">{state.errors.username}</span>}
      </div>
      <div>
        <input name="email" type="email" placeholder="Email" />
        {state.errors?.email && <span className="error">{state.errors.email}</span>}
      </div>
      <div>
        <input name="password" type="password" placeholder="Password" />
        {state.errors?.password && <span className="error">{state.errors.password}</span>}
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Registering...' : 'Register'}
      </button>
      {state.errors?.form && <div className="error">{state.errors.form}</div>}
      {state.success && <div className="success">Registration successful!</div>}
    </form>
  );
}

// ========== PAGINATION WITH USE ACTION STATE ==========
function PaginatedList({ initialPage = 1, pageSize = 10 }) {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const page = parseInt(formData.get('page'));
      const data = await fetchPage(page, pageSize);
      return { ...prevState, data, currentPage: page, totalPages: data.totalPages };
    },
    { data: [], currentPage: initialPage, totalPages: 1 }
  );
  
  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="page" value={state.currentPage - 1} />
        <button type="submit" disabled={state.currentPage === 1 || isPending}>
          Previous
        </button>
      </form>
      
      <div className="items">
        {isPending && <div className="loading">Loading...</div>}
        {state.data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      
      <form action={formAction}>
        <input type="hidden" name="page" value={state.currentPage + 1} />
        <button type="submit" disabled={state.currentPage === state.totalPages || isPending}>
          Next
        </button>
      </form>
    </div>
  );
}`,
  lineByLine: [
    "Line 5-19: useActionState basic syntax",
    "Line 6: [state, formAction, isPending] = useActionState(reducer, initialState)",
    "Line 7-17: Reducer function receives prevState and formData",
    "Line 9-12: Extract form data using formData.get()",
    "Line 14-16: Return new state with success flag and message",
    "Line 24-28: Use formAction in <form action={formAction}>",
    "Line 31-33: isPending for loading states",
    "Line 34-39: Display state.message with conditional styling",
    "Line 46-87: Registration with validation",
    "Line 50-64: Client-side validation before API call",
    "Line 66-72: API call on valid data",
    "Line 90-115: Pagination using useActionState for navigation"
  ],
  simpleMeaning: "useActionState manages form state, pending status, and errors in one hook. Perfect for form submission patterns.",
  output: "Forms with built-in loading states, error handling, and success messages. Reduced boilerplate code.",
  note: "useActionState requires React 19. The reducer function receives previous state and form data, returns next state."
},

// ==================== REACT SERVER ACTIONS ADVANCED ====================
{
  name: "⚙️ Advanced Server Actions",
  description: "Server Actions are async functions that run on the server, called directly from client components. They can be used for mutations, data fetching, and form submissions. Support progressive enhancement - work without JavaScript.",
  code: `// ========== SERVER ACTION BASICS ==========
// app/actions.ts
'use server';

import { revalidatePath, redirect } from 'next/cache';
import { z } from 'zod';

// Schema validation
const PostSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(10),
  category: z.enum(['tech', 'design', 'business'])
});

export async function createPost(formData: FormData) {
  // Validate
  const validated = PostSchema.parse({
    title: formData.get('title'),
    content: formData.get('content'),
    category: formData.get('category')
  });
  
  // Create in database
  const post = await db.post.create({
    data: validated
  });
  
  // Revalidate cache
  revalidatePath('/posts');
  revalidatePath(\`/posts/\${post.id}\`);
  
  // Redirect
  redirect(\`/posts/\${post.id}\`);
}

// ========== SERVER ACTIONS WITH ERROR HANDLING ==========
'use server';

export async function updateUserSettings(formData: FormData) {
  try {
    const settings = {
      theme: formData.get('theme'),
      notifications: formData.get('notifications') === 'on',
      language: formData.get('language')
    };
    
    await db.user.update({
      where: { id: currentUserId },
      data: settings
    });
    
    revalidatePath('/settings');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Client component using Server Action with error handling
'use client';
import { updateUserSettings } from './actions';

function SettingsForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const result = await updateUserSettings(formData);
      if (result.success) {
        return { message: 'Settings saved!' };
      }
      return { error: result.error };
    },
    { message: '', error: '' }
  );
  
  return (
    <form action={formAction}>
      {/* form fields */}
      <button type="submit" disabled={isPending}>
        Save Settings
      </button>
      {state.message && <div className="success">{state.message}</div>}
      {state.error && <div className="error">{state.error}</div>}
    </form>
  );
}

// ========== SERVER ACTIONS WITH OPTIMISTIC UPDATES ==========
'use client';
import { likePost } from './actions';

function LikeButton({ initialLikes, postId }) {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    initialLikes,
    (current) => current + 1
  );
  
  const handleLike = async () => {
    setOptimisticLikes(null);
    await likePost(postId);
  };
  
  return (
    <form action={handleLike}>
      <button type="submit">❤️ {optimisticLikes}</button>
    </form>
  );
}

// ========== SERVER ACTIONS WITH USE TRANSITION ==========
'use client';
import { searchPosts } from './actions';

function SearchBar() {
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();
  
  const handleSearch = (formData) => {
    startTransition(async () => {
      const searchResults = await searchPosts(formData);
      setResults(searchResults);
    });
  };
  
  return (
    <div>
      <form action={handleSearch}>
        <input name="query" placeholder="Search posts..." />
        <button type="submit">Search</button>
      </form>
      {isPending && <div>Searching...</div>}
      {results.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}`,
  lineByLine: [
    "Line 3-5: 'use server' directive - marks Server Action",
    "Line 7: revalidatePath - Next.js cache revalidation",
    "Line 9-14: Zod schema for validation",
    "Line 17-24: FormData extraction and validation",
    "Line 27-29: Database operation",
    "Line 32-33: Cache revalidation",
    "Line 35: redirect - navigation after action",
    "Line 41-57: Server Action with error handling and return values",
    "Line 60-79: Client component with useActionState",
    "Line 84-100: Optimistic updates with Server Action",
    "Line 105-128: useTransition with Server Action for search"
  ],
  simpleMeaning: "Server Actions are functions that run on the server, called directly from client components for mutations and data fetching.",
  output: "Type-safe server mutations with validation, error handling, optimistic updates, and cache revalidation.",
  note: "Server Actions require 'use server' directive. Can be used in Server Components or called from Client Components."
},

// ==================== REACT 19 USE HOOK ADVANCED ====================
{
  name: "🎯 use Hook - Advanced Patterns",
  description: "The 'use' hook is a new React API that unwraps promises and contexts. Unlike useEffect, it works in loops and conditionals. Can be used with Suspense for data fetching, context consumption, and handling promises in Server Components.",
  code: `import { use, Suspense, createContext } from 'react';

// ========== BASIC USE HOOK WITH PROMISES ==========
function UserProfile({ userPromise }) {
  // 'use' unwraps the promise directly
  const user = use(userPromise);
  return <div>{user.name}</div>;
}

function App() {
  const userPromise = fetchUser(123);
  
  return (
    <Suspense fallback={<div>Loading user...</div>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}

// ========== USE WITH MULTIPLE PROMISES ==========
function UserDashboard({ userPromise, postsPromise, statsPromise }) {
  // Can use 'use' multiple times
  const user = use(userPromise);
  const posts = use(postsPromise);
  const stats = use(statsPromise);
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Posts: {posts.length}</p>
      <p>Views: {stats.totalViews}</p>
    </div>
  );
}

function Dashboard() {
  // Create promises in parallel
  const userPromise = fetchUser(123);
  const postsPromise = fetchUserPosts(123);
  const statsPromise = fetchUserStats(123);
  
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <UserDashboard 
        userPromise={userPromise}
        postsPromise={postsPromise}
        statsPromise={statsPromise}
      />
    </Suspense>
  );
}

// ========== USE HOOK IN CONDITIONALS AND LOOPS ==========
function ConditionalData({ showData, dataPromise }) {
  // 'use' works in conditionals (unlike other hooks!)
  if (showData) {
    const data = use(dataPromise);
    return <div>{data}</div>;
  }
  return <div>Data hidden</div>;
}

function DynamicList({ promises }) {
  // 'use' works in loops
  const results = promises.map(promise => use(promise));
  return <div>{results.join(', ')}</div>;
}

// ========== USE WITH CONTEXT ==========
const ThemeContext = createContext();
const UserContext = createContext();

function ThemedUserProfile() {
  // 'use' can consume context (alternative to useContext)
  const theme = use(ThemeContext);
  const user = use(UserContext);
  
  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function AppWithContext() {
  const theme = { background: '#333', color: '#fff' };
  const user = { name: 'John', email: 'john@example.com' };
  
  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <ThemedUserProfile />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

// ========== CACHING WITH USE HOOK ==========
// Create a cache for promises
const promiseCache = new Map();

function getCachedPromise(key, fetchFn) {
  if (!promiseCache.has(key)) {
    promiseCache.set(key, fetchFn());
  }
  return promiseCache.get(key);
}

function CachedUserProfile({ userId }) {
  const userPromise = getCachedPromise(\`user-\${userId}\`, () => fetchUser(userId));
  const user = use(userPromise);
  return <div>{user.name}</div>;
}

// ========== USE WITH STALE-WHILE-REVALIDATE ==========
function DataWithRevalidate({ fetchPromise, revalidatePromise }) {
  const data = use(fetchPromise);
  
  // Prefetch revalidated data in background
  const revalidatedData = use(revalidatePromise);
  
  return (
    <div>
      <div>Current: {data.value}</div>
      <div>Revalidated: {revalidatedData.value}</div>
    </div>
  );
}`,
  lineByLine: [
    "Line 5-9: use hook unwraps promises directly",
    "Line 6: const user = use(userPromise) - suspends until promise resolves",
    "Line 12-17: Suspense boundary for loading fallback",
    "Line 23-33: Multiple use calls for parallel promises",
    "Line 49-54: use hook works in conditionals",
    "Line 56-60: use hook works in loops",
    "Line 66-76: use hook for context consumption",
    "Line 86-94: Promise caching with use hook",
    "Line 97-108: Stale-while-revalidate pattern"
  ],
  simpleMeaning: "The 'use' hook unwraps promises and contexts anywhere - even in conditionals and loops.",
  output: "Simpler data fetching without useEffect. Context consumption without useContext. Works with Suspense.",
  note: "'use' is the only hook that works in conditionals and loops. Must be wrapped in Suspense for promises."
},

// ==================== REACT COMPILER DEEP DIVE ====================
{
  name: "⚡ React Compiler Deep Dive",
  description: "React Compiler (formerly React Forget) automatically memoizes components, eliminating manual useMemo, useCallback, and React.memo. It analyzes your code and adds memoization automatically, improving performance without developer effort.",
  code: `// ========== BEFORE REACT COMPILER ==========
import { useMemo, useCallback, memo, useState } from 'react';

// Manual memoization - error-prone and verbose
const ProductList = memo(({ products, onProductClick, filter }) => {
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.name.includes(filter));
  }, [products, filter]);
  
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => a.price - b.price);
  }, [filteredProducts]);
  
  const handleClick = useCallback((id) => {
    onProductClick(id);
  }, [onProductClick]);
  
  return (
    <div>
      {sortedProducts.map(product => (
        <div key={product.id} onClick={() => handleClick(product.id)}>
          {product.name} - {\`$\${product.price}\`}
        </div>
      ))}
    </div>
  );
});

// ========== AFTER REACT COMPILER ==========
// No manual memoization needed - compiler handles everything
function ProductList({ products, onProductClick, filter }) {
  // Compiler automatically memoizes these calculations
  const filteredProducts = products.filter(p => p.name.includes(filter));
  const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  
  // Compiler automatically memoizes this function
  const handleClick = (id) => {
    onProductClick(id);
  };
  
  return (
    <div>
      {sortedProducts.map(product => (
        <div key={product.id} onClick={() => handleClick(product.id)}>
          {product.name} - {\`$\${product.price}\`}
        </div>
      ))}
    </div>
  );
}

// ========== COMPILER WITH PROP DRILLING ==========
function Dashboard({ data }) {
  // Compiler optimizes derived state
  const stats = {
    total: data.length,
    active: data.filter(d => d.active).length,
    avgValue: data.reduce((sum, d) => sum + d.value, 0) / data.length
  };
  
  // These will be automatically memoized
  const handleRefresh = () => {
    fetchNewData();
  };
  
  const handleExport = () => {
    exportData(data);
  };
  
  return (
    <div>
      <StatsPanel stats={stats} />
      <ControlPanel onRefresh={handleRefresh} onExport={handleExport} />
      <DataList items={data} />
    </div>
  );
}

// ========== COMPILER WITH HOOKS ==========
function SearchComponent({ items, searchTerm }) {
  const [filter, setFilter] = useState('');
  
  // Compiler optimizes these hooks
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.includes(searchTerm) && item.category.includes(filter)
    );
  }, [items, searchTerm, filter]);
  
  // Compiler handles useCallback automatically
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  
  return <ItemList items={filteredItems} onFilterChange={handleFilterChange} />;
}

// ========== COMPILER DIRECTIVES ==========
// @react-memo - force memoization
function AlwaysMemoized({ data }) {
  return <div>{data}</div>;
}

// @react-no-memo - skip memoization (rare cases)
function AlwaysRender({ counter }) {
  return <div>{counter}</div>;
}`,
  lineByLine: [
    "Line 4-30: Before Compiler - manual memoization required",
    "Line 7: React.memo for component memoization",
    "Line 9-11: useMemo for filtered products",
    "Line 14-16: useMemo for sorted products",
    "Line 19-21: useCallback for click handler",
    "Line 23: Fixed price display using template literal escape",
    "Line 36-55: After Compiler - no manual memoization",
    "Line 39-40: Calculations automatically memoized",
    "Line 43-45: Functions automatically memoized",
    "Line 61-88: Compiler with hooks - useCallback/useMemo still work but optional",
    "Line 93-99: Compiler directives for fine-grained control"
  ],
  simpleMeaning: "React Compiler automatically adds memoization, eliminating manual useMemo, useCallback, and React.memo.",
  output: "Better performance without extra code. Components only re-render when needed. No manual dependency arrays.",
  note: "React Compiler is currently experimental. Works best with functional components following React rules."
},

// ==================== STATE MANAGEMENT WITH ZUSTAND ADVANCED ====================
{
  name: "🐻 Zustand Advanced State Management",
  description: "Zustand is a small, fast, and scalable state management library. It uses hooks and doesn't require providers. Supports middleware, persistence, Immer integration, and TypeScript.",
  code: `import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { subscribeWithSelector } from 'zustand/middleware';

// ========== BASIC STORE ==========
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

// ========== PERSISTENT STORE (localStorage) ==========
const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setTheme: (theme) => set({ theme })
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme }) // Only persist theme
    }
  )
);

// ========== STORE WITH SELECTORS ==========
const useTodoStore = create((set, get) => ({
  todos: [],
  filter: 'all',
  
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, completed: false }]
  })),
  
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  
  // Selectors (derived state)
  get activeTodos: () => get().todos.filter(t => !t.completed),
  get completedTodos: () => get().todos.filter(t => t.completed),
  get filteredTodos: () => {
    const { todos, filter } = get();
    if (filter === 'active') return get().activeTodos;
    if (filter === 'completed') return get().completedTodos;
    return todos;
  }
}));

// Component using store with selectors
function TodoStats() {
  const activeCount = useTodoStore((state) => state.activeTodos.length);
  const completedCount = useTodoStore((state) => state.completedTodos.length);
  const totalCount = useTodoStore((state) => state.todos.length);
  
  return (
    <div>
      <span>Total: {totalCount}</span>
      <span>Active: {activeCount}</span>
      <span>Completed: {completedCount}</span>
    </div>
  );
}

// ========== IMMER MIDDLEWARE (Mutable syntax) ==========
const useImmerStore = create(
  immer((set) => ({
    user: { name: 'John', address: { city: 'NYC', zip: '10001' }, hobbies: [] },
    updateName: (name) => set((state) => {
      state.user.name = name; // Mutable update!
    }),
    updateCity: (city) => set((state) => {
      state.user.address.city = city;
    }),
    addHobby: (hobby) => set((state) => {
      state.user.hobbies.push(hobby);
    })
  }))
);

// ========== SUBSCRIBE WITH SELECTOR ==========
const useSubscribableStore = create(
  subscribeWithSelector((set) => ({
    count: 0,
    text: 'hello',
    increment: () => set((state) => ({ count: state.count + 1 })),
    setText: (text) => set({ text })
  }))
);

// Subscribe to specific state changes
useSubscribableStore.subscribe(
  (state) => state.count,
  (count) => console.log(\`Count changed to \${count}\`)
);

// ========== ASYNC ACTIONS ==========
const useAsyncStore = create((set, get) => ({
  user: null,
  loading: false,
  error: null,
  
  fetchUser: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(\`/api/users/\${id}\`);
      const user = await response.json();
      set({ user, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  updateUser: async (data) => {
    const { user } = get();
    set({ loading: true });
    try {
      const response = await fetch(\`/api/users/\${user.id}\`, {
        method: 'PUT',
        body: JSON.stringify(data)
      });
      const updated = await response.json();
      set({ user: updated, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

// ========== SLICE PATTERN (Modular stores) ==========
const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null })
});

const createCartSlice = (set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) => set((state) => ({ 
    cart: state.cart.filter(item => item.id !== id) 
  }))
});

const useRootStore = create((...a) => ({
  ...createUserSlice(...a),
  ...createCartSlice(...a)
}));`,
  lineByLine: [
    "Line 6-12: Basic store creation with Zustand",
    "Line 15-29: Persistent store with localStorage middleware",
    "Line 32-57: Store with selectors (derived state)",
    "Line 60-71: Component using multiple selectors",
    "Line 74-87: Immer middleware - mutable update syntax",
    "Line 90-102: subscribeWithSelector - granular subscriptions",
    "Line 105-140: Async actions with loading/error states",
    "Line 143-160: Slice pattern for modular stores"
  ],
  simpleMeaning: "Zustand provides simple, scalable state management without providers or boilerplate.",
  output: "Global state with persistence, computed values, async actions, and TypeScript support.",
  note: "Zustand is great for both simple and complex state management. No Context providers needed!"
},

// ==================== REACT QUERY ADVANCED PATTERNS ====================
{
  name: "📊 React Query Advanced Patterns",
  description: "React Query handles server-state with automatic caching, background refetching, optimistic updates, and infinite queries. Eliminates manual loading/error states.",
  code: `import { useQuery, useMutation, useQueryClient, useInfiniteQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ========== OPTIMISTIC UPDATES ==========
function TodoList() {
  const queryClient = useQueryClient();
  
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });
  
  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      
      // Snapshot previous value
      const previousTodos = queryClient.getQueryData(['todos']);
      
      // Optimistically update cache
      queryClient.setQueryData(['todos'], (old) => [...old, { ...newTodo, id: Date.now() }]);
      
      // Return context with snapshot
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      // Rollback on error
      queryClient.setQueryData(['todos'], context.previousTodos);
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });
  
  return <div>{/* render todos */}</div>;
}

// ========== INFINITE QUERIES ==========
function InfinitePosts() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1
  });
  
  if (status === 'pending') return <div>Loading...</div>;
  if (status === 'error') return <div>Error</div>;
  
  return (
    <div>
      {data.pages.map((page, i) => (
        <div key={i}>
          {page.items.map(item => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      ))}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more'}
      </button>
    </div>
  );
}

// ========== DEPENDENT QUERIES ==========
function UserProfile({ userId }) {
  // This query only runs when userId exists
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId
  });
  
  // This depends on user data
  const { data: posts } = useQuery({
    queryKey: ['user-posts', user?.id],
    queryFn: () => fetchUserPosts(user.id),
    enabled: !!user?.id
  });
  
  return <div>{/* render */}</div>;
}

// ========== PARALLEL QUERIES ==========
function Dashboard() {
  const usersQuery = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const postsQuery = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });
  const settingsQuery = useQuery({ queryKey: ['settings'], queryFn: fetchSettings });
  
  if (usersQuery.isLoading || postsQuery.isLoading || settingsQuery.isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <UserList users={usersQuery.data} />
      <PostList posts={postsQuery.data} />
      <Settings settings={settingsQuery.data} />
    </div>
  );
}

// ========== PREFETCHING ==========
function PrefetchExample() {
  const queryClient = useQueryClient();
  
  const prefetchUser = () => {
    queryClient.prefetchQuery({
      queryKey: ['user', 123],
      queryFn: () => fetchUser(123)
    });
  };
  
  return (
    <div>
      <button onMouseEnter={prefetchUser}>View Profile</button>
    </div>
  );
}

// ========== PERSISTENT CACHE ==========
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persister,
  maxAge: 1000 * 60 * 60 * 24, // 24 hours
});`,
  lineByLine: [
    "Line 10-47: Optimistic updates with rollback on error",
    "Line 20: onMutate - before mutation runs",
    "Line 23: queryClient.cancelQueries - stop pending requests",
    "Line 29: queryClient.setQueryData - optimistic update",
    "Line 50-91: Infinite queries for pagination",
    "Line 96-112: Dependent queries - second query runs after first completes",
    "Line 115-131: Parallel queries - multiple independent queries",
    "Line 134-146: Prefetching on hover for faster navigation"
  ],
  simpleMeaning: "React Query handles all server-state problems - caching, background refetching, optimistic updates, and infinite scroll.",
  output: "Posts load with caching, background refetch, optimistic mutations, infinite scroll works smoothly.",
  note: "React Query eliminates most useState/useEffect for data fetching. Use with TypeScript for type safety."
},
// /data/reactjs/learning.js - COMPLETE ADVANCED TOPICS SECTION

// ==================== REACT 19 NEW FEATURES ====================
{
  name: "🚀 React 19 New Features",
  description: "React 19 introduces several powerful features including the 'use' API for promises and context, Server Components, Asset Loading (preload, prefetchDNS, preconnect, preinit), Document Metadata management, and Actions with useOptimistic, useFormStatus, and useActionState hooks.",
  code: `import { use, Suspense, useOptimistic, useFormStatus, useActionState, preload, prefetchDNS, preconnect, preinit } from 'react';

// ========== 'use' API - Promise Resolution ==========
function UserProfile({ userPromise }) {
  const user = use(userPromise);
  return <div>{user.name}</div>;
}

function App() {
  const userPromise = fetchUser(123);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}

// ========== useOptimistic - Optimistic UI Updates ==========
function MessageList({ messages, sendMessage }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { id: Date.now(), text: newMessage, sending: true }]
  );
  
  const handleSend = async (formData) => {
    const message = formData.get('message');
    addOptimisticMessage(message);
    await sendMessage(message);
  };
  
  return (
    <div>
      {optimisticMessages.map(msg => (
        <div key={msg.id} style={{ opacity: msg.sending ? 0.5 : 1 }}>
          {msg.text} {msg.sending && '⌛'}
        </div>
      ))}
      <form action={handleSend}>
        <input name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

// ========== useFormStatus - Form Submission Status ==========
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

// ========== useActionState - Form State Management ==========
function SignupForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const email = formData.get('email');
      try {
        await api.signup(email);
        return { success: true, message: 'Signed up!' };
      } catch (error) {
        return { success: false, message: error.message };
      }
    },
    { success: null, message: '' }
  );
  
  return (
    <form action={formAction}>
      <input type="email" name="email" required />
      <SubmitButton />
      {state.message && <p>{state.message}</p>}
    </form>
  );
}

export default function React19Demo() {
  return <SignupForm />;
}`,
  lineByLine: [
    "Line 1: Import React 19 hooks and APIs",
    "Line 4-8: 'use' API unwraps promises directly",
    "Line 11-16: Suspense boundary for loading states",
    "Line 19-38: useOptimistic for instant UI feedback",
    "Line 41-47: useFormStatus for button loading states",
    "Line 50-69: useActionState for form management"
  ],
  simpleMeaning: "React 19 brings built-in solutions for promises, forms, asset loading, and metadata management.",
  output: "Simpler data fetching, optimistic UI updates, better form handling, and automatic resource hints.",
  note: "'use' API only works in Server Components or Client Components with Suspense."
},

// ==================== REACT SERVER COMPONENTS ====================
{
  name: "🌐 React Server Components (RSC)",
  description: "React Server Components allow you to render components on the server, reducing client-side JavaScript and enabling direct database access. They can be async and have zero bundle size impact. 'use server' directive marks Server Actions for client invocation.",
  code: `// ========== SERVER COMPONENT ==========
// This component runs ONLY on the server
import { db } from '@/lib/db';

async function ProductList() {
  // Direct database access - no API needed!
  const products = await db.product.findMany();
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ========== CLIENT COMPONENT ==========
'use client';
import { useState } from 'react';

function ProductCard({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => setIsInCart(true)}>
        {isInCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

// ========== SERVER ACTIONS ==========
'use server';
import { revalidatePath } from 'next/cache';

export async function addToCart(productId, userId) {
  await db.cart.create({
    data: { productId, userId }
  });
  revalidatePath('/cart');
  return { success: true };
}

// Client component using Server Action
'use client';
import { addToCart } from '../actions';

function AddToCartButton({ productId, userId }) {
  return (
    <form action={addToCart.bind(null, productId, userId)}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}

// ========== STREAMING WITH SUSPENSE ==========
import { Suspense } from 'react';

async function SlowComponent() {
  const data = await fetchSlowData();
  return <div>{data}</div>;
}

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SlowComponent />
    </Suspense>
  );
}

export default function RSCDemo() {
  return <Page />;
}`,
  lineByLine: [
    "Line 5-15: Server Component - runs only on server, zero client JS",
    "Line 7: async function - Server Components can be async",
    "Line 8: Direct database access - no API layer needed",
    "Line 18-33: Client Component - 'use client' directive for interactivity",
    "Line 36-48: Server Actions - 'use server' marks server-executable functions",
    "Line 51-60: Client component using Server Action via form action",
    "Line 63-73: Streaming with Suspense - progressive rendering"
  ],
  simpleMeaning: "Server Components render on the server with zero client JS. Server Actions let client components call server functions directly.",
  output: "Faster initial load, smaller bundle size, direct database access, and progressive UI streaming.",
  note: "Server Components can't use useState, useEffect, or browser APIs. Use 'use client' for interactive components."
},

// ==================== REACT COMPILER (React Forget) ====================
{
  name: "⚡ React Compiler (React Forget)",
  description: "React Compiler is an automatic memoization tool that eliminates manual useMemo, useCallback, and React.memo. It analyzes your code and automatically adds memoization where needed, improving performance without developer effort.",
  code: `import { useState } from 'react';

// ========== BEFORE REACT COMPILER ==========
import { useMemo, useCallback, memo } from 'react';

const ProductListManual = memo(({ products, onProductClick, filter }) => {
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.name.includes(filter));
  }, [products, filter]);
  
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => a.price - b.price);
  }, [filteredProducts]);
  
  const handleClick = useCallback((id) => {
    onProductClick(id);
  }, [onProductClick]);
  
  return (
    <div>
      {sortedProducts.map(product => (
        <div key={product.id} onClick={() => handleClick(product.id)}>
          {product.name} - {product.price}
        </div>
      ))}
    </div>
  );
});

// ========== AFTER REACT COMPILER ==========
// No manual memoization needed - compiler handles everything
function ProductList({ products, onProductClick, filter }) {
  const filteredProducts = products.filter(p => p.name.includes(filter));
  const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  
  const handleClick = (id) => {
    onProductClick(id);
  };
  
  return (
    <div>
      {sortedProducts.map(product => (
        <div key={product.id} onClick={() => handleClick(product.id)}>
          {product.name} - {product.price}
        </div>
      ))}
    </div>
  );
}

// ========== COMPILER DIRECTIVES ==========
// @react-memo - force memoization
function AlwaysMemoized({ data }) {
  return <div>{data}</div>;
}

// @react-no-memo - skip memoization (rare cases)
function AlwaysRender({ counter }) {
  return <div>{counter}</div>;
}

export default function ReactCompilerDemo() {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Keyboard', price: 79 }
  ];
  
  return <ProductList products={products} onProductClick={console.log} filter="lap" />;
}`,
  lineByLine: [
    "Line 5-30: Before Compiler - manual memoization required",
    "Line 8: React.memo for component memoization",
    "Line 9-11: useMemo for filtered products",
    "Line 14-16: useMemo for sorted products",
    "Line 19-21: useCallback for click handler",
    "Line 35-54: After Compiler - no manual memoization needed",
    "Line 38-39: Calculations automatically memoized by compiler",
    "Line 41-43: Functions automatically memoized by compiler",
    "Line 58-69: Compiler directives for fine-grained control",
    "Line 72-81: Demo component with sample data"
  ],
  simpleMeaning: "React Compiler automatically adds memoization, eliminating manual useMemo, useCallback, and React.memo.",
  output: "Better performance without extra code. Components only re-render when needed. No manual dependency arrays.",
  note: "React Compiler is currently experimental. Works best with functional components following React rules."
},

// ==================== SUSPENSE FOR DATA FETCHING ====================
{
  name: "⏳ Suspense for Data Fetching",
  description: "Suspense lets components 'wait' for data before rendering, showing a fallback UI. It works with any data fetching library that supports Suspense (React Query, SWR, Relay, or custom).",
  code: `import { Suspense, use } from 'react';

// ========== RESOURCE WRAPPER ==========
function createResource(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    }
  };
}

// ========== API FUNCTION ==========
async function fetchUser(id) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { id, name: 'John Doe', email: 'john@example.com' };
}

// ========== COMPONENT USING RESOURCE ==========
function UserProfile({ userId }) {
  const [userResource] = useState(() => createResource(fetchUser(userId)));
  const user = userResource.read();
  return <div>{user.name}</div>;
}

// ========== USING SUSPENSE BOUNDARY ==========
function App() {
  return (
    <Suspense fallback={<div>Loading user...</div>}>
      <UserProfile userId={123} />
    </Suspense>
  );
}

// ========== MULTIPLE SUSPENSE BOUNDARIES ==========
function Dashboard() {
  return (
    <div>
      <Suspense fallback={<div>Loading profile...</div>}>
        <UserProfile />
      </Suspense>
      <Suspense fallback={<div>Loading posts...</div>}>
        <UserPosts />
      </Suspense>
      <Suspense fallback={<div>Loading comments...</div>}>
        <UserComments />
      </Suspense>
    </div>
  );
}

// ========== NESTED SUSPENSE ==========
function NestedSuspenseExample() {
  return (
    <Suspense fallback={<GlobalSpinner />}>
      <Layout>
        <Suspense fallback={<SidebarSpinner />}>
          <Sidebar />
        </Suspense>
        <Suspense fallback={<ContentSpinner />}>
          <MainContent />
        </Suspense>
      </Layout>
    </Suspense>
  );
}

export default function SuspenseDemo() {
  return <App />;
}`,
  lineByLine: [
    "Line 4-27: Resource wrapper - creates Suspense-compatible data source",
    "Line 8-20: Promise with status tracking",
    "Line 23-26: Resource.read() - throws promise when loading",
    "Line 30-33: API function simulation",
    "Line 36-43: Component using Resource pattern",
    "Line 46-52: Suspense boundary with fallback UI",
    "Line 55-66: Multiple independent Suspense boundaries",
    "Line 69-77: Nested Suspense for granular loading"
  ],
  simpleMeaning: "Suspense lets components 'pause' rendering while loading data, showing a fallback UI until ready.",
  output: "Smooth loading states, parallel data fetching, and nested loading UIs without waterfall requests.",
  note: "Suspense requires a data fetching library that supports it (React Query, SWR, or custom Resource)."
},

// ==================== USE OPTIMISTIC HOOK ====================
{
  name: "✨ useOptimistic Hook",
  description: "useOptimistic allows optimistic UI updates - showing the result immediately while the actual request happens in background. If the request fails, the UI reverts automatically. Perfect for likes, comments, form submissions, and any action where you want instant feedback.",
  code: `import { useOptimistic, useRef } from 'react';

// ========== BASIC USE OPTIMISTIC ==========
function LikeButton({ initialLikes, onLike }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (currentState, newLike) => currentState + 1
  );
  
  const handleLike = async () => {
    addOptimisticLike(null);
    try {
      await onLike();
    } catch (error) {
      console.error('Failed to like');
    }
  };
  
  return (
    <button onClick={handleLike}>
      ❤️ {optimisticLikes} likes
    </button>
  );
}

// ========== COMPLEX OPTIMISTIC UPDATE ==========
function TodoList({ todos, onAddTodo, onToggleTodo, onDeleteTodo }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, action) => {
      switch (action.type) {
        case 'ADD':
          return [...state, { id: Date.now(), text: action.text, completed: false, optimistic: true }];
        case 'TOGGLE':
          return state.map(todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed, optimistic: true }
              : todo
          );
        case 'DELETE':
          return state.filter(todo => todo.id !== action.id);
        default:
          return state;
      }
    }
  );
  
  const handleAddTodo = async (formData) => {
    const text = formData.get('todo');
    addOptimisticTodo({ type: 'ADD', text });
    try {
      await onAddTodo(text);
    } catch (error) {
      console.error('Failed to add todo');
    }
  };
  
  const handleToggleTodo = async (id) => {
    addOptimisticTodo({ type: 'TOGGLE', id });
    try {
      await onToggleTodo(id);
    } catch (error) {}
  };
  
  const handleDeleteTodo = async (id) => {
    addOptimisticTodo({ type: 'DELETE', id });
    try {
      await onDeleteTodo(id);
    } catch (error) {}
  };
  
  return (
    <div>
      <form action={handleAddTodo}>
        <input name="todo" placeholder="Add todo..." />
        <button type="submit">Add</button>
      </form>
      
      {optimisticTodos.map(todo => (
        <div key={todo.id} style={{ opacity: todo.optimistic ? 0.5 : 1 }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          {todo.optimistic && <span className="spinner">⌛</span>}
        </div>
      ))}
    </div>
  );
}

// ========== USE OPTIMISTIC IN FORM ==========
function CommentSection({ comments, onAddComment }) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, { ...newComment, optimistic: true }]
  );
  const formRef = useRef(null);
  
  const handleSubmit = async (formData) => {
    const comment = {
      id: Date.now(),
      text: formData.get('comment'),
      author: 'Current User',
      timestamp: new Date().toISOString()
    };
    
    addOptimisticComment(comment);
    formRef.current?.reset();
    
    try {
      await onAddComment(comment);
    } catch (error) {
      console.error('Failed to post comment');
    }
  };
  
  return (
    <div>
      <form ref={formRef} action={handleSubmit}>
        <textarea name="comment" placeholder="Write a comment..." />
        <button type="submit">Post Comment</button>
      </form>
      
      {optimisticComments.map(comment => (
        <div key={comment.id} className="comment">
          <strong>{comment.author}</strong>
          <p>{comment.text}</p>
          <small>{new Date(comment.timestamp).toLocaleString()}</small>
          {comment.optimistic && <span className="sending">⌛ Sending...</span>}
        </div>
      ))}
    </div>
  );
}

export default function OptimisticDemo() {
  return <LikeButton initialLikes={100} onLike={() => Promise.resolve()} />;
}`,
  lineByLine: [
    "Line 4-15: Basic useOptimistic - optimistic counter update",
    "Line 6: useOptimistic(initialState, reducer)",
    "Line 8: reducer updates optimistic state",
    "Line 11-13: Optimistic update on user action",
    "Line 24-55: Complex reducer handling multiple action types",
    "Line 30-33: ADD action with optimistic flag",
    "Line 34-40: TOGGLE action with optimistic flag",
    "Line 63-67: Visual feedback for optimistic items",
    "Line 72-106: Form handling with optimistic comments"
  ],
  simpleMeaning: "useOptimistic shows UI updates instantly while server request runs in background, reverting if request fails.",
  output: "Instant UI feedback for likes, comments, todos. No waiting for server response. Automatic rollback on error.",
  note: "Optimistic updates should be idempotent. Always handle errors - optimistic state reverts automatically."
},

// ==================== USE FORM STATUS HOOK ====================
{
  name: "📝 useFormStatus Hook",
  description: "useFormStatus provides access to form submission state from within a form component, without passing props through components. It returns pending, data, method, and action properties. Perfect for submit buttons, loading indicators, and form validation during submission.",
  code: `import { useFormStatus, useActionState } from 'react';

// ========== BASIC USE FORM STATUS ==========
function SubmitButton({ children }) {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending} className={pending ? 'loading' : ''}>
      {pending ? 'Submitting...' : children}
    </button>
  );
}

function SignupForm() {
  const handleSubmit = async (formData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted', Object.fromEntries(formData));
  };
  
  return (
    <form action={handleSubmit}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <SubmitButton>Sign Up</SubmitButton>
    </form>
  );
}

// ========== FORM FIELD WITH STATUS ==========
function FormField({ name, label, type = 'text' }) {
  const { pending } = useFormStatus();
  
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        disabled={pending}
        required
      />
    </div>
  );
}

function RegistrationForm() {
  const handleSubmit = async (formData) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Registered:', Object.fromEntries(formData));
  };
  
  return (
    <form action={handleSubmit}>
      <FormField name="username" label="Username" />
      <FormField name="email" label="Email" type="email" />
      <FormField name="password" label="Password" type="password" />
      <SubmitButton>Register</SubmitButton>
    </form>
  );
}

// ========== MULTIPLE SUBMIT BUTTONS ==========
function MultiActionForm() {
  const [result, setResult] = useState('');
  
  const saveAsDraft = async (formData) => {
    setResult('Draft saved');
    await new Promise(resolve => setTimeout(resolve, 500));
  };
  
  const publish = async (formData) => {
    setResult('Published');
    await new Promise(resolve => setTimeout(resolve, 500));
  };
  
  return (
    <form>
      <input name="title" placeholder="Title" />
      <textarea name="content" placeholder="Content" />
      
      <div className="buttons">
        <SubmitButton formAction={saveAsDraft}>Save Draft</SubmitButton>
        <SubmitButton formAction={publish}>Publish</SubmitButton>
      </div>
      
      {result && <div className="result">{result}</div>}
    </form>
  );
}

// ========== FORM VALIDATION WITH STATUS ==========
function ValidatedForm() {
  const { pending } = useFormStatus();
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (formData) => {
    const newErrors = {};
    const email = formData.get('email');
    const age = formData.get('age');
    
    if (email && !email.includes('@')) {
      newErrors.email = 'Invalid email';
    }
    if (age && (age < 18 || age > 120)) {
      newErrors.age = 'Age must be between 18 and 120';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Form submitted!');
  };
  
  return (
    <form action={handleSubmit}>
      <div>
        <input name="email" type="email" placeholder="Email" />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input name="age" type="number" placeholder="Age" />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default function FormStatusDemo() {
  return <SignupForm />;
}`,
  lineByLine: [
    "Line 4-9: useFormStatus destructuring",
    "Line 5: pending - boolean indicating active submission",
    "Line 11-16: SubmitButton with loading state",
    "Line 19-29: Simple form using SubmitButton",
    "Line 32-45: FormField component using useFormStatus",
    "Line 39: disabled={pending} - disable during submission",
    "Line 48-60: Registration form with multiple fields",
    "Line 63-91: Multiple submit buttons with different actions",
    "Line 94-128: Form validation with useFormStatus"
  ],
  simpleMeaning: "useFormStatus gives any component access to the parent form's submission state without props.",
  output: "Submit buttons show loading state. Form fields disable during submission. Multiple actions with different buttons.",
  note: "useFormStatus only works inside a component that is a child of a <form> element."
},

// ==================== USE ACTION STATE HOOK ====================
{
  name: "🎬 useActionState Hook",
  description: "useActionState manages form submission state including pending status, errors, and returned data. It replaces manual loading and error state management for forms. Returns [state, formAction, isPending] where formAction is the action to pass to <form action={formAction}>.",
  code: `import { useActionState } from 'react';

// ========== BASIC USE ACTION STATE ==========
function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true, message: 'Message sent!' };
      } catch (error) {
        return { success: false, message: error.message };
      }
    },
    { success: null, message: '' }
  );
  
  return (
    <form action={formAction}>
      <input name="name" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
      {state.message && (
        <div className={state.success ? 'success' : 'error'}>
          {state.message}
        </div>
      )}
    </form>
  );
}

// ========== WITH VALIDATION ==========
function RegistrationForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');
      
      const validationErrors = {};
      if (!username || username.length < 3) {
        validationErrors.username = 'Username must be at least 3 characters';
      }
      if (!email || !email.includes('@')) {
        validationErrors.email = 'Valid email required';
      }
      if (!password || password.length < 6) {
        validationErrors.password = 'Password must be at least 6 characters';
      }
      
      if (Object.keys(validationErrors).length > 0) {
        return { success: false, errors: validationErrors };
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, errors: {} };
    },
    { success: null, errors: {} }
  );
  
  return (
    <form action={formAction}>
      <div>
        <input name="username" placeholder="Username" />
        {state.errors?.username && <span className="error">{state.errors.username}</span>}
      </div>
      <div>
        <input name="email" type="email" placeholder="Email" />
        {state.errors?.email && <span className="error">{state.errors.email}</span>}
      </div>
      <div>
        <input name="password" type="password" placeholder="Password" />
        {state.errors?.password && <span className="error">{state.errors.password}</span>}
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Registering...' : 'Register'}
      </button>
      {state.success && <div className="success">Registration successful!</div>}
    </form>
  );
}

// ========== PAGINATION WITH USE ACTION STATE ==========
function PaginatedList({ initialPage = 1, pageSize = 10 }) {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const page = parseInt(formData.get('page'));
      await new Promise(resolve => setTimeout(resolve, 500));
      const data = Array.from({ length: pageSize }, (_, i) => ({
        id: (page - 1) * pageSize + i + 1,
        name: \`Item \${(page - 1) * pageSize + i + 1}\`
      }));
      return { ...prevState, data, currentPage: page, totalPages: 10 };
    },
    { data: [], currentPage: initialPage, totalPages: 1 }
  );
  
  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="page" value={state.currentPage - 1} />
        <button type="submit" disabled={state.currentPage === 1 || isPending}>
          Previous
        </button>
      </form>
      
      <div className="items">
        {isPending && <div className="loading">Loading...</div>}
        {state.data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      
      <form action={formAction}>
        <input type="hidden" name="page" value={state.currentPage + 1} />
        <button type="submit" disabled={state.currentPage === state.totalPages || isPending}>
          Next
        </button>
      </form>
    </div>
  );
}

export default function ActionStateDemo() {
  return <ContactForm />;
}`,
  lineByLine: [
    "Line 4-19: useActionState basic syntax",
    "Line 5: [state, formAction, isPending] = useActionState(reducer, initialState)",
    "Line 6-15: Reducer function receives prevState and formData",
    "Line 24-27: Use formAction in <form action={formAction}>",
    "Line 28-30: isPending for loading states",
    "Line 46-97: Registration with validation",
    "Line 50-64: Client-side validation before API call",
    "Line 100-125: Pagination using useActionState for navigation"
  ],
  simpleMeaning: "useActionState manages form state, pending status, and errors in one hook. Perfect for form submission patterns.",
  output: "Forms with built-in loading states, error handling, and success messages. Reduced boilerplate code.",
  note: "useActionState requires React 19. The reducer function receives previous state and form data, returns next state."
},

// ==================== REACT SERVER ACTIONS ADVANCED ====================
{
  name: "⚙️ Advanced Server Actions",
  description: "Server Actions are async functions that run on the server, called directly from client components. They can be used for mutations, data fetching, and form submissions. Support progressive enhancement - work without JavaScript.",
  code: `// ========== SERVER ACTION WITH VALIDATION ==========
// app/actions.js
'use server';

import { revalidatePath, redirect } from 'next/cache';
import { z } from 'zod';

const PostSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(10),
  category: z.enum(['tech', 'design', 'business'])
});

export async function createPost(formData) {
  const validated = PostSchema.parse({
    title: formData.get('title'),
    content: formData.get('content'),
    category: formData.get('category')
  });
  
  const post = { id: Date.now(), ...validated };
  
  revalidatePath('/posts');
  redirect(\`/posts/\${post.id}\`);
}

// ========== SERVER ACTION WITH ERROR HANDLING ==========
'use server';

export async function updateUserSettings(formData) {
  try {
    const settings = {
      theme: formData.get('theme'),
      notifications: formData.get('notifications') === 'on',
      language: formData.get('language')
    };
    
    await new Promise(resolve => setTimeout(resolve, 500));
    revalidatePath('/settings');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// ========== CLIENT COMPONENT USING SERVER ACTION ==========
'use client';
import { useActionState } from 'react';
import { updateUserSettings } from './actions';

function SettingsForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const result = await updateUserSettings(formData);
      if (result.success) {
        return { message: 'Settings saved!' };
      }
      return { error: result.error };
    },
    { message: '', error: '' }
  );
  
  return (
    <form action={formAction}>
      <div>
        <label>Theme:</label>
        <select name="theme" defaultValue="light">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      
      <div>
        <label>
          <input type="checkbox" name="notifications" defaultChecked />
          Enable Notifications
        </label>
      </div>
      
      <div>
        <label>Language:</label>
        <select name="language" defaultValue="en">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
      
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving...' : 'Save Settings'}
      </button>
      
      {state.message && <div className="success">{state.message}</div>}
      {state.error && <div className="error">{state.error}</div>}
    </form>
  );
}

// ========== OPTIMISTIC UPDATE WITH SERVER ACTION ==========
'use client';
import { useOptimistic } from 'react';
import { likePost } from './actions';

function LikeButton({ initialLikes, postId }) {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    initialLikes,
    (current) => current + 1
  );
  
  const handleLike = async () => {
    setOptimisticLikes(null);
    await likePost(postId);
  };
  
  return (
    <form action={handleLike}>
      <button type="submit">❤️ {optimisticLikes} likes</button>
    </form>
  );
}

export default function ServerActionsDemo() {
  return <SettingsForm />;
}`,
  lineByLine: [
    "Line 3-5: 'use server' directive - marks Server Action",
    "Line 7: revalidatePath - Next.js cache revalidation",
    "Line 9-13: Zod schema for validation",
    "Line 16-23: FormData extraction and validation",
    "Line 26-27: Cache revalidation and redirect",
    "Line 31-50: Server Action with error handling",
    "Line 55-79: Client component with useActionState",
    "Line 84-100: Optimistic updates with Server Action"
  ],
  simpleMeaning: "Server Actions are functions that run on the server, called directly from client components for mutations and data fetching.",
  output: "Type-safe server mutations with validation, error handling, optimistic updates, and cache revalidation.",
  note: "Server Actions require 'use server' directive. Can be used in Server Components or called from Client Components."
},

// ==================== REACT QUERY ADVANCED PATTERNS ====================
{
  name: "📊 React Query Advanced Patterns",
  description: "React Query handles server-state with automatic caching, background refetching, optimistic updates, and infinite queries. Eliminates manual loading/error states.",
  code: `import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';

// ========== OPTIMISTIC UPDATES ==========
function TodoList() {
  const queryClient = useQueryClient();
  
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });
  
  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData(['todos']);
      queryClient.setQueryData(['todos'], (old) => [...old, { ...newTodo, id: Date.now() }]);
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });
  
  return <div>{/* render todos */}</div>;
}

// ========== INFINITE QUERIES ==========
function InfinitePosts() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1
  });
  
  if (status === 'pending') return <div>Loading...</div>;
  if (status === 'error') return <div>Error</div>;
  
  return (
    <div>
      {data.pages.map((page, i) => (
        <div key={i}>
          {page.items.map(item => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      ))}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more'}
      </button>
    </div>
  );
}

// ========== DEPENDENT QUERIES ==========
function UserProfile({ userId }) {
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId
  });
  
  const { data: posts } = useQuery({
    queryKey: ['user-posts', user?.id],
    queryFn: () => fetchUserPosts(user.id),
    enabled: !!user?.id
  });
  
  return <div>{/* render */}</div>;
}

// ========== PARALLEL QUERIES ==========
function Dashboard() {
  const usersQuery = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const postsQuery = useQuery({ queryKey: ['posts'], queryFn: fetchPosts });
  const settingsQuery = useQuery({ queryKey: ['settings'], queryFn: fetchSettings });
  
  if (usersQuery.isLoading || postsQuery.isLoading || settingsQuery.isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <UserList users={usersQuery.data} />
      <PostList posts={postsQuery.data} />
      <Settings settings={settingsQuery.data} />
    </div>
  );
}

// ========== PREFETCHING ==========
function PrefetchExample() {
  const queryClient = useQueryClient();
  
  const prefetchUser = () => {
    queryClient.prefetchQuery({
      queryKey: ['user', 123],
      queryFn: () => fetchUser(123)
    });
  };
  
  return (
    <div>
      <button onMouseEnter={prefetchUser}>View Profile</button>
    </div>
  );
}

export default function ReactQueryDemo() {
  return <InfinitePosts />;
}`,
  lineByLine: [
    "Line 4-28: Optimistic updates with rollback on error",
    "Line 12: onMutate - before mutation runs",
    "Line 13: queryClient.cancelQueries - stop pending requests",
    "Line 15: queryClient.setQueryData - optimistic update",
    "Line 31-61: Infinite queries for pagination",
    "Line 64-77: Dependent queries - second query runs after first completes",
    "Line 80-96: Parallel queries - multiple independent queries",
    "Line 99-111: Prefetching on hover for faster navigation"
  ],
  simpleMeaning: "React Query handles all server-state problems - caching, background refetching, optimistic updates, and infinite scroll.",
  output: "Posts load with caching, background refetch, optimistic mutations, infinite scroll works smoothly.",
  note: "React Query eliminates most useState/useEffect for data fetching. Use with TypeScript for type safety."
},

// ==================== STATE MANAGEMENT WITH ZUSTAND ====================
{
  name: "🐻 Zustand State Management",
  description: "Zustand is a small, fast, and scalable state management library. It uses hooks and doesn't require providers. Supports middleware, persistence, Immer integration, and TypeScript.",
  code: `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ========== BASIC STORE ==========
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

// ========== PERSISTENT STORE ==========
const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setTheme: (theme) => set({ theme })
    }),
    {
      name: 'theme-storage',
    }
  )
);

// ========== STORE WITH SELECTORS ==========
const useTodoStore = create((set, get) => ({
  todos: [],
  filter: 'all',
  
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, completed: false }]
  })),
  
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  
  get activeTodos: () => get().todos.filter(t => !t.completed),
  get completedTodos: () => get().todos.filter(t => t.completed),
}));

// ========== COMPONENT USING STORE ==========
function TodoStats() {
  const activeCount = useTodoStore((state) => state.activeTodos.length);
  const completedCount = useTodoStore((state) => state.completedTodos.length);
  const totalCount = useTodoStore((state) => state.todos.length);
  
  return (
    <div>
      <span>Total: {totalCount}</span>
      <span>Active: {activeCount}</span>
      <span>Completed: {completedCount}</span>
    </div>
  );
}

// ========== ASYNC ACTIONS ==========
const useAsyncStore = create((set, get) => ({
  user: null,
  loading: false,
  error: null,
  
  fetchUser: async (id) => {
    set({ loading: true, error: null });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ user: { id, name: 'John Doe' }, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

// ========== SLICE PATTERN ==========
const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null })
});

const createCartSlice = (set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) => set((state) => ({ 
    cart: state.cart.filter(item => item.id !== id) 
  }))
});

const useRootStore = create((...a) => ({
  ...createUserSlice(...a),
  ...createCartSlice(...a)
}));

function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();
  
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default function ZustandDemo() {
  return <Counter />;
}`,
  lineByLine: [
    "Line 4-10: Basic Zustand store creation",
    "Line 13-25: Persistent store with localStorage middleware",
    "Line 28-47: Store with selectors (derived state)",
    "Line 50-59: Component using multiple selectors",
    "Line 62-75: Async actions with loading/error states",
    "Line 78-91: Slice pattern for modular stores",
    "Line 94-102: Counter component using store"
  ],
  simpleMeaning: "Zustand provides simple, scalable state management without providers or boilerplate.",
  output: "Global state with persistence, computed values, async actions, and slice pattern for modularity.",
  note: "Zustand is great for both simple and complex state management. No Context providers needed!"
},
// /data/reactjs/learning.js - ADDITIONAL ADVANCED TOPICS

// ==================== USE DEBUG VALUE HOOK ====================
{
  name: "🐛 useDebugValue Hook",
  description: "useDebugValue is used to display labels for custom hooks in React DevTools. It helps debug custom hooks by adding helpful information in the DevTools inspector. Only call it inside custom hooks. Can accept a formatting function for expensive computations.",
  code: `import { useDebugValue, useState, useEffect } from 'react';

// Custom hook with useDebugValue
function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);
  
  useDebugValue(isOnline === null ? 'Loading' : isOnline ? 'Online' : 'Offline');
  
  useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline);
    };
    
    // Simulate subscription
    const subscription = subscribeToFriendStatus(friendId, handleStatusChange);
    return () => unsubscribeFromFriendStatus(subscription);
  }, [friendId]);
  
  return isOnline;
}

// useDebugValue with formatting function (avoids expensive computation unless DevTools is open)
function useExpensiveValue(value) {
  useDebugValue(value, (val) => {
    // This only runs when DevTools is open
    return \`Processed: \${expensiveComputation(val)}\`;
  });
  
  return value;
}

// Custom hook for form field with debugging
function useFormField(initialValue, fieldName) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(null);
  
  useDebugValue({
    fieldName,
    value,
    touched,
    hasError: !!error,
    error
  });
  
  const handleChange = (e) => {
    setValue(e.target.value);
    setTouched(true);
  };
  
  const handleBlur = () => {
    setTouched(true);
  };
  
  const setFieldError = (errorMessage) => {
    setError(errorMessage);
  };
  
  return {
    value,
    touched,
    error,
    handleChange,
    handleBlur,
    setFieldError,
    reset: () => {
      setValue(initialValue);
      setTouched(false);
      setError(null);
    }
  };
}

function LoginForm() {
  const email = useFormField('', 'email');
  const password = useFormField('', 'password');
  
  const validate = () => {
    if (!email.value.includes('@')) {
      email.setFieldError('Invalid email');
    }
    if (password.value.length < 6) {
      password.setFieldError('Password too short');
    }
  };
  
  return (
    <form>
      <input
        type="email"
        value={email.value}
        onChange={email.handleChange}
        onBlur={email.handleBlur}
        placeholder="Email"
      />
      {email.touched && email.error && <span>{email.error}</span>}
      
      <input
        type="password"
        value={password.value}
        onChange={password.handleChange}
        onBlur={password.handleBlur}
        placeholder="Password"
      />
      {password.touched && password.error && <span>{password.error}</span>}
      
      <button type="button" onClick={validate}>Validate</button>
    </form>
  );
}

export default function DebugValueDemo() {
  return <LoginForm />;
}`,
  lineByLine: [
    "Line 4: useDebugValue adds label in React DevTools",
    "Line 8: useDebugValue('Online') - Shows 'Online' in DevTools",
    "Line 11-17: useDebugValue with conditional values",
    "Line 20-24: useDebugValue with formatting function - only runs when DevTools open",
    "Line 29-47: Custom hook for form field with useDebugValue",
    "Line 37: useDebugValue with object - shows multiple values in DevTools"
  ],
  simpleMeaning: "useDebugValue adds custom labels to custom hooks in React DevTools, making debugging easier.",
  output: "In React DevTools, custom hooks show descriptive labels instead of generic 'Custom Hook'.",
  note: "Only use useDebugValue inside custom hooks. The formatting function only runs when DevTools is open."
},

// ==================== USE ID HOOK ====================
{
  name: "🆔 useId Hook",
  description: "useId generates unique, stable IDs for accessibility attributes (aria-labelledby, htmlFor). It works on both client and server (hydration-safe). Perfect for connecting labels to inputs, describing elements for screen readers, and generating unique keys.",
  code: `import { useId, useState } from 'react';

// ========== BASIC USE ID ==========
function FormField({ label, type = 'text' }) {
  const id = useId();
  
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} />
    </div>
  );
}

function RegistrationForm() {
  return (
    <form>
      <FormField label="Username" />
      <FormField label="Email" type="email" />
      <FormField label="Password" type="password" />
    </form>
  );
}

// ========== MULTIPLE ELEMENTS WITH SAME ID BASE ==========
function AccordionSection({ title, children }) {
  const id = useId();
  const buttonId = \`\${id}-button\`;
  const panelId = \`\${id}-panel\`;
  
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div>
      <button
        id={buttonId}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isExpanded}
      >
        {children}
      </div>
    </div>
  );
}

// ========== LIST ELEMENTS WITH UNIQUE KEYS ==========
function DynamicList({ items }) {
  const id = useId();
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={\`\${id}-\${index}\`}>
          <input type="checkbox" id={\`\${id}-checkbox-\${index}\`} />
          <label htmlFor={\`\${id}-checkbox-\${index}\`}>{item}</label>
        </li>
      ))}
    </ul>
  );
}

// ========== ACCESSIBLE TOOLTIP ==========
function Tooltip({ children, content }) {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div>
      <span
        aria-describedby={isVisible ? id : undefined}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      {isVisible && (
        <div
          id={id}
          role="tooltip"
          style={{
            position: 'absolute',
            background: '#333',
            color: '#fff',
            padding: '8px',
            borderRadius: '4px',
            marginTop: '4px'
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

// ========== PREFIXED IDS FOR COMPONENT INSTANCES ==========
function TodoList() {
  const componentId = useId();
  const [items, setItems] = useState([]);
  
  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: \`Item \${items.length + 1}\`
    };
    setItems([...items, newItem]);
  };
  
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, idx) => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={\`\${componentId}-check-\${idx}\`}
            />
            <label htmlFor={\`\${componentId}-check-\${idx}\`}>
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function UseIdDemo() {
  return (
    <div>
      <RegistrationForm />
      <AccordionSection title="Section 1">
        <p>Content for section 1</p>
      </AccordionSection>
      <Tooltip content="This is helpful!">
        <span>Hover me</span>
      </Tooltip>
    </div>
  );
}`,
  lineByLine: [
    "Line 4: useId generates unique, stable ID",
    "Line 8: id = useId() - each call gets unique ID",
    "Line 11: <label htmlFor={id}> - connects label to input",
    "Line 21-36: AccordionSection with multiple IDs from same base",
    "Line 28: buttonId = `${id}-button` - derived IDs",
    "Line 44: DynamicList with unique IDs for each item",
    "Line 66: Tooltip with aria-describedby for accessibility"
  ],
  simpleMeaning: "useId generates unique, stable IDs for accessibility attributes, safe for server rendering.",
  output: "Connected labels and inputs, accessible accordions, tooltips with proper ARIA attributes.",
  note: "useId is hydration-safe - same ID on client and server. Perfect for generating IDs for accessibility."
},

// ==================== USE INSERTION EFFECT HOOK ====================
{
  name: "💉 useInsertionEffect Hook",
  description: "useInsertionEffect runs before DOM mutations, specifically designed for CSS-in-JS libraries to inject styles. It fires synchronously before useLayoutEffect and useEffect, making it ideal for inserting global styles or dynamic CSS rules without causing layout thrashing.",
  code: `import { useInsertionEffect, useLayoutEffect, useEffect, useState } from 'react';

// ========== BASIC USE INSERTION EFFECT ==========
function StyleInjector({ css }) {
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [css]);
  
  return null;
}

function ThemedComponent({ theme }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const css = \`
    .themed-button {
      background: \${theme === 'light' ? '#fff' : '#333'};
      color: \${theme === 'light' ? '#333' : '#fff'};
      padding: 10px 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .themed-button:hover {
      background: \${theme === 'light' ? '#f0f0f0' : '#444'};
      transform: scale(1.05);
    }
  \`;
  
  return (
    <div>
      <StyleInjector css={css} />
      <button
        className="themed-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Themed Button {isHovered && '🐱'}
      </button>
    </div>
  );
}

// ========== DYNAMIC KEYFRAMES INJECTION ==========
function AnimationInjector({ duration = '1s', animationName = 'fadeIn' }) {
  const css = \`
    @keyframes \${animationName} {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animated {
      animation: \${animationName} \${duration} ease-out forwards;
    }
  \`;
  
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [duration, animationName]);
  
  return null;
}

function AnimatedBox() {
  return (
    <div>
      <AnimationInjector duration="0.5s" animationName="slideUp" />
      <div className="animated" style={{
        padding: '20px',
        background: '#3498db',
        color: 'white',
        borderRadius: '8px'
      }}>
        This box animates on mount!
      </div>
    </div>
  );
}

// ========== COMPARING HOOKS ORDER ==========
function HookOrderDemo() {
  const [count, setCount] = useState(0);
  
  useInsertionEffect(() => {
    console.log('1. useInsertionEffect - Before DOM mutations');
    // Best for injecting styles
  });
  
  useLayoutEffect(() => {
    console.log('2. useLayoutEffect - After DOM mutations, before paint');
    // Best for reading layout, measuring DOM
  });
  
  useEffect(() => {
    console.log('3. useEffect - After paint, asynchronous');
    // Best for side effects, API calls, subscriptions
  });
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

// ========== CSS-IN-JS LIBRARY IMPLEMENTATION ==========
function createStyledComponent(Component, styles) {
  return function StyledComponent({ children, ...props }) {
    const styleId = useId();
    const css = typeof styles === 'function' ? styles(props) : styles;
    
    useInsertionEffect(() => {
      const style = document.createElement('style');
      style.setAttribute('data-styled-id', styleId);
      style.textContent = \`.styled-\${styleId} { \${css} }\`;
      document.head.appendChild(style);
      
      return () => {
        const existing = document.querySelector(\`[data-styled-id="\${styleId}"]\`);
        if (existing) existing.remove();
      };
    }, [css, styleId]);
    
    return <Component className={\`styled-\${styleId}\`} {...props}>{children}</Component>;
  };
}

const StyledButton = createStyledComponent('button', \`
  background: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #2980b9;
  }
\`);

const StyledCard = createStyledComponent('div', (props) => \`
  background: \${props.dark ? '#333' : '#fff'};
  color: \${props.dark ? '#fff' : '#333'};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
\`);

export default function InsertionEffectDemo() {
  return (
    <div>
      <h3>Dynamic Styled Components</h3>
      <StyledCard dark>
        <p>This card has dynamic styles injected!</p>
        <StyledButton>Click Me</StyledButton>
      </StyledCard>
      <HookOrderDemo />
    </div>
  );
}`,
  lineByLine: [
    "Line 4-15: StyleInjector - injects CSS dynamically",
    "Line 6: useInsertionEffect runs before DOM mutations",
    "Line 8-10: Create style element and insert into head",
    "Line 25-40: ThemedComponent with dynamic CSS injection",
    "Line 43-67: AnimationInjector - injects keyframes dynamically",
    "Line 70-88: HookOrderDemo - shows execution order of hooks",
    "Line 91-115: CSS-in-JS library implementation",
    "Line 118-122: StyledButton and StyledCard using the pattern"
  ],
  simpleMeaning: "useInsertionEffect injects styles before DOM mutations, preventing layout thrashing in CSS-in-JS libraries.",
  output: "Styles are injected synchronously before browser paints. Hooks execute in correct order: insertion, layout, effect.",
  note: "useInsertionEffect is primarily for CSS-in-JS library authors. Most apps should use useEffect or useLayoutEffect."
},

// ==================== USE SYNC EXTERNAL STORE HOOK ====================
{
  name: "📡 useSyncExternalStore Hook",
  description: "useSyncExternalStore subscribes to external stores (Redux, Zustand, browser APIs) and ensures UI consistency during concurrent rendering. It's recommended for external state management libraries and subscribing to browser APIs like online status, localStorage, or media queries.",
  code: `import { useSyncExternalStore, useCallback } from 'react';

// ========== BROWSER ONLINE STATUS ==========
function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    // Subscribe to changes
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    // Get current value on client
    () => navigator.onLine,
    // Get server snapshot (fallback)
    () => true
  );
  
  return isOnline;
}

function NetworkStatus() {
  const isOnline = useOnlineStatus();
  
  return (
    <div style={{ color: isOnline ? 'green' : 'red' }}>
      Status: {isOnline ? '🟢 Online' : '🔴 Offline'}
    </div>
  );
}

// ========== LOCAL STORAGE STORE ==========
function createLocalStorageStore(key, initialValue) {
  let listeners = [];
  
  const getSnapshot = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };
  
  const setValue = (value) => {
    const newValue = typeof value === 'function' ? value(getSnapshot()) : value;
    localStorage.setItem(key, JSON.stringify(newValue));
    // Notify all listeners
    for (const listener of listeners) {
      listener();
    }
  };
  
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  
  return { getSnapshot, subscribe, setValue };
}

function useLocalStorageStore(key, initialValue) {
  const store = useMemo(
    () => createLocalStorageStore(key, initialValue),
    [key, initialValue]
  );
  
  const value = useSyncExternalStore(store.subscribe, store.getSnapshot);
  
  return [value, store.setValue];
}

function ThemeToggle() {
  const [theme, setTheme] = useLocalStorageStore('theme', 'light');
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

// ========== WINDOW DIMENSIONS STORE ==========
function useWindowSize() {
  const getSnapshot = useCallback(() => ({
    width: window.innerWidth,
    height: window.innerHeight
  }), []);
  
  const subscribe = useCallback((callback) => {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }, []);
  
  const size = useSyncExternalStore(subscribe, getSnapshot, () => ({
    width: 0,
    height: 0
  }));
  
  return size;
}

function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      <p>Window: {width} x {height}</p>
      {width < 768 && <MobileView />}
      {width >= 768 && width < 1024 && <TabletView />}
      {width >= 1024 && <DesktopView />}
    </div>
  );
}

// ========== CUSTOM EXTERNAL STORE ==========
function createStore(initialState) {
  let state = initialState;
  let listeners = [];
  
  const getState = () => state;
  
  const setState = (updater) => {
    const nextState = typeof updater === 'function' ? updater(state) : updater;
    if (nextState !== state) {
      state = nextState;
      for (const listener of listeners) {
        listener();
      }
    }
  };
  
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  
  return { getState, setState, subscribe };
}

const counterStore = createStore({ count: 0, step: 1 });

function useCounter() {
  const count = useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getState
  );
  return count;
}

function Counter() {
  const state = useCounter();
  
  const increment = () => {
    counterStore.setState(prev => ({ ...prev, count: prev.count + prev.step }));
  };
  
  const decrement = () => {
    counterStore.setState(prev => ({ ...prev, count: prev.count - prev.step }));
  };
  
  const setStep = (step) => {
    counterStore.setState(prev => ({ ...prev, step }));
  };
  
  return (
    <div>
      <h3>Counter: {state.count}</h3>
      <p>Step: {state.step}</p>
      <button onClick={increment}>+{state.step}</button>
      <button onClick={decrement}>-{state.step}</button>
      <input
        type="number"
        value={state.step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
    </div>
  );
}

export default function SyncExternalStoreDemo() {
  return (
    <div>
      <NetworkStatus />
      <ThemeToggle />
      <ResponsiveComponent />
      <Counter />
    </div>
  );
}`,
  lineByLine: [
    "Line 4-16: useOnlineStatus - subscribes to browser online/offline events",
    "Line 7: useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)",
    "Line 22-59: LocalStorage store implementation",
    "Line 24: listeners array for subscription management",
    "Line 51-56: useLocalStorageStore custom hook",
    "Line 59-79: useWindowSize with useSyncExternalStore",
    "Line 85-130: Custom store creation with subscription pattern",
    "Line 133-160: Counter component using custom external store"
  ],
  simpleMeaning: "useSyncExternalStore subscribes to external stores and ensures UI consistency during concurrent rendering.",
  output: "Components stay in sync with browser APIs, localStorage, and custom stores. Works with React 18+ concurrent features.",
  note: "useSyncExternalStore is primarily for library authors and when integrating with external stores not built with React."
},

// ==================== PURE COMPONENT & SHOULD COMPONENT UPDATE ====================
{
  name: "🏛️ PureComponent & shouldComponentUpdate",
  description: "PureComponent automatically implements shouldComponentUpdate with shallow prop and state comparison. It prevents unnecessary re-renders when props and state haven't changed. Class components can also implement shouldComponentUpdate manually for custom comparison logic.",
  code: `import { PureComponent, Component, useState } from 'react';

// ========== REGULAR COMPONENT (Always re-renders) ==========
class RegularCounter extends Component {
  render() {
    console.log('RegularCounter rendered');
    return <div>Count: {this.props.count}</div>;
  }
}

// ========== PURE COMPONENT (Only re-renders when props change) ==========
class PureCounter extends PureComponent {
  render() {
    console.log('PureCounter rendered');
    return <div>Count: {this.props.count}</div>;
  }
}

// ========== MANUAL SHOULD COMPONENT UPDATE ==========
class OptimizedCounter extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Only update if count actually changed
    return this.props.count !== nextProps.count;
  }
  
  render() {
    console.log('OptimizedCounter rendered');
    return <div>Count: {this.props.count}</div>;
  }
}

// ========== DEEP COMPARISON EXAMPLE ==========
class DeepCompareComponent extends Component {
  shouldComponentUpdate(nextProps) {
    // Deep compare for arrays/objects
    return JSON.stringify(this.props.items) !== JSON.stringify(nextProps.items);
  }
  
  render() {
    console.log('DeepCompareComponent rendered');
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

// ========== COMPARISON DEMO ==========
function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  const [items] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
  
  return (
    <div>
      <h2>Performance Demo</h2>
      <p>Count: {count} | Other State: {otherState}</p>
      
      <button onClick={() => setCount(c => c + 1)}>
        Increment Count (changes prop)
      </button>
      
      <button onClick={() => setOtherState(s => s + 1)}>
        Increment Other State (no prop change)
      </button>
      
      <div>
        <h3>Regular Component:</h3>
        <RegularCounter count={count} />
      </div>
      
      <div>
        <h3>Pure Component:</h3>
        <PureCounter count={count} />
      </div>
      
      <div>
        <h3>Optimized Component (manual):</h3>
        <OptimizedCounter count={count} />
      </div>
      
      <div>
        <h3>Deep Compare Component:</h3>
        <DeepCompareComponent items={items} />
      </div>
    </div>
  );
}

// ========== FUNCTIONAL COMPONENT EQUIVALENT ==========
// React.memo is the functional equivalent of PureComponent
const MemoizedFunction = React.memo(({ count }) => {
  console.log('MemoizedFunction rendered');
  return <div>Count: {count}</div>;
});

// React.memo with custom comparison
const CustomMemoized = React.memo(
  ({ user }) => <div>{user.name}</div>,
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return prevProps.user.id === nextProps.user.id;
  }
);

export default function PureComponentDemo() {
  return <PerformanceDemo />;
}`,
  lineByLine: [
    "Line 4-8: Regular Component - re-renders every time parent updates",
    "Line 11-15: PureComponent - shallow comparison of props",
    "Line 18-27: shouldComponentUpdate - manual re-render control",
    "Line 22: return this.props.count !== nextProps.count",
    "Line 30-41: Deep compare example with JSON.stringify",
    "Line 44-79: Comparison demo showing render behavior",
    "Line 82-86: React.memo - functional component equivalent",
    "Line 89-95: React.memo with custom comparison function"
  ],
  simpleMeaning: "PureComponent and shouldComponentUpdate prevent unnecessary re-renders by comparing props and state.",
  output: "Components only re-render when their actual data changes, improving performance.",
  note: "PureComponent does shallow comparison. For deep comparisons, use shouldComponentUpdate or React.memo with custom comparators."
},

// ==================== REACT STRICT MODE ====================
{
  name: "⚠️ React Strict Mode",
  description: "Strict Mode is a development-only tool that helps identify potential problems in React applications. It runs additional checks and warnings for unsafe lifecycle methods, legacy ref API, unexpected side effects, and deprecated patterns. It double-invokes certain functions (render, useState, useReducer, useEffect) to detect side effects.",
  code: `import { StrictMode, useState, useEffect } from 'react';

// ========== COMPONENT WITH SIDE EFFECTS ==========
function EffectDemo() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Effect ran');
    // In Strict Mode, this runs twice in development
    // Helps detect missing cleanup functions
    return () => {
      console.log('Cleanup ran');
    };
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

// ========== PROBLEMATIC PATTERNS DETECTED BY STRICT MODE ==========
// 1. Unsafe lifecycle methods (deprecated)
class UnsafeComponent extends React.Component {
  // Warning: componentWillMount is deprecated
  componentWillMount() {
    console.log('Will mount - unsafe');
  }
  
  render() {
    return <div>Component</div>;
  }
}

// 2. Legacy string ref API
class LegacyRefComponent extends React.Component {
  componentDidMount() {
    // Warning: String refs are deprecated
    console.log(this.refs.myInput);
  }
  
  render() {
    return <input ref="myInput" />;
  }
}

// 3. FindDOMNode usage
class FindDOMNodeComponent extends React.Component {
  componentDidMount() {
    // Warning: findDOMNode is deprecated
    const node = ReactDOM.findDOMNode(this);
    console.log(node);
  }
  
  render() {
    return <div>Component</div>;
  }
}

// ========== WRAPPING APP WITH STRICT MODE ==========
function App() {
  const [enabled, setEnabled] = useState(true);
  
  return (
    <div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} Strict Mode
      </button>
      
      {enabled ? (
        <StrictMode>
          <ProblematicComponent />
        </StrictMode>
      ) : (
        <ProblematicComponent />
      )}
    </div>
  );
}

// ========== DOUBLE INVOCATION DETECTION ==========
function DoubleInvocationDemo() {
  // In Strict Mode, this console.log runs twice
  console.log('Component rendered');
  
  const [value, setValue] = useState(() => {
    // Initializer also runs twice
    console.log('useState initializer');
    return 0;
  });
  
  useEffect(() => {
    console.log('useEffect');
    return () => console.log('cleanup');
  }, []);
  
  return <div>Value: {value}</div>;
}

// ========== IDENTIFYING SIDE EFFECTS ==========
function SideEffectDetection() {
  // ❌ BAD: Direct DOM manipulation (Strict Mode reveals this)
  // document.title = 'My App';
  
  // ✅ GOOD: Use useEffect for side effects
  useEffect(() => {
    document.title = 'My App';
  }, []);
  
  return <div>Strict Mode helps find these issues!</div>;
}

export default function StrictModeDemo() {
  return (
    <StrictMode>
      <div>
        <h1>Strict Mode Demo</h1>
        <p>Check console for warnings and double invocations</p>
        <EffectDemo />
        <DoubleInvocationDemo />
        <SideEffectDetection />
      </div>
    </StrictMode>
  );
}`,
  lineByLine: [
    "Line 4-19: EffectDemo - useEffect runs twice in Strict Mode",
    "Line 7: console.log runs twice to detect missing cleanup",
    "Line 22-31: Unsafe lifecycle methods trigger warnings",
    "Line 34-45: Legacy string ref API triggers warnings",
    "Line 48-58: findDOMNode usage triggers warnings",
    "Line 61-76: Wrapping app sections with Strict Mode",
    "Line 79-96: Double invocation detection in development",
    "Line 99-111: Direct DOM manipulation detection"
  ],
  simpleMeaning: "Strict Mode helps find bugs by double-invoking functions and warning about deprecated APIs in development.",
  output: "Console warnings about unsafe patterns, double invocations to detect side effects, and deprecated API usage.",
  note: "Strict Mode only runs in development, not production. It helps catch issues early in development cycle."
},

// ==================== REACT PROFILER API ====================
{
  name: "📊 React Profiler API",
  description: "Profiler measures how often components render and how long they take. It helps identify performance bottlenecks by tracking render times, commit phases, and prop/state changes. Perfect for finding slow components and optimizing re-renders.",
  code: `import { Profiler, useState, useCallback } from 'react';

// ========== BASIC PROFILER USAGE ==========
function onRenderCallback(
  id,           // The profiler id
  phase,        // "mount" or "update"
  actualDuration, // Time spent rendering
  baseDuration,   // Estimated time without memoization
  startTime,      // When React started rendering
  commitTime,     // When React committed
  interactions    // Set of interactions
) {
  console.log(\`\${id} - \${phase} phase:\`);
  console.log(\`  Actual duration: \${actualDuration.toFixed(2)}ms\`);
  console.log(\`  Base duration: \${baseDuration.toFixed(2)}ms\`);
}

function SlowComponent() {
  const [count, setCount] = useState(0);
  
  // Simulate expensive render
  const expensiveValue = (() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) sum += i;
    return sum;
  })();
  
  return (
    <div>
      <h3>Expensive Component</h3>
      <p>Sum: {expensiveValue}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment: {count}
      </button>
    </div>
  );
}

function App() {
  return (
    <Profiler id="SlowComponent" onRender={onRenderCallback}>
      <SlowComponent />
    </Profiler>
  );
}

// ========== MULTIPLE PROFILERS ==========
function MultipleProfilers() {
  return (
    <div>
      <Profiler id="ListComponent" onRender={onRenderCallback}>
        <ExpensiveList />
      </Profiler>
      
      <Profiler id="ChartComponent" onRender={onRenderCallback}>
        <ExpensiveChart />
      </Profiler>
      
      <Profiler id="TableComponent" onRender={onRenderCallback}>
        <DataTable />
      </Profiler>
    </div>
  );
}

// ========== ANALYZING MEMOIZATION EFFECTIVENESS ==========
function MemoizationAnalysis() {
  const [data, setData] = useState(Array.from({ length: 1000 }, (_, i) => i));
  const [count, setCount] = useState(0);
  
  const processedData = useMemo(() => {
    console.log('Processing data...');
    return data.filter(n => n % 2 === 0).map(n => n * n);
  }, [data]);
  
  return (
    <Profiler id="MemoizedComponent" onRender={(id, phase, actualDuration, baseDuration) => {
      console.log(\`\${id} - \${phase}: \${actualDuration.toFixed(2)}ms (base: \${baseDuration.toFixed(2)}ms)\`);
      if (baseDuration > actualDuration * 1.5) {
        console.log(\`✅ Memoization is effective! Saved \${(baseDuration - actualDuration).toFixed(2)}ms\`);
      }
    }}>
      <div>
        <p>Processed count: {processedData.length}</p>
        <button onClick={() => setCount(c => c + 1)}>
          Re-render: {count}
        </button>
        <button onClick={() => setData([...data, data.length])}>
          Change Data
        </button>
      </div>
    </Profiler>
  );
}

// ========== PROFILER WITH USE TRANSITION ==========
function SlowList({ items }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

function TransitionProfiler() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const [items, setItems] = useState([]);
  
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    startTransition(() => {
      const filtered = largeDataset.filter(item =>
        item.name.includes(value)
      );
      setItems(filtered);
    });
  };
  
  return (
    <Profiler id="SearchTransition" onRender={onRenderCallback}>
      <div>
        <input value={query} onChange={handleSearch} />
        {isPending && <div>Loading...</div>}
        <SlowList items={items} />
      </div>
    </Profiler>
  );
}

// ========== CUSTOM PROFILER HOOK ==========
function useProfiler(componentName) {
  const renderTimes = useRef([]);
  
  const onRender = useCallback((id, phase, actualDuration) => {
    renderTimes.current.push({ timestamp: Date.now(), duration: actualDuration });
    
    // Keep last 10 renders
    if (renderTimes.current.length > 10) {
      renderTimes.current.shift();
    }
    
    const avgDuration = renderTimes.current.reduce((sum, r) => sum + r.duration, 0) / renderTimes.current.length;
    
    if (avgDuration > 16) { // 16ms = 60fps threshold
      console.warn(\`\${componentName} is slow! Average render time: \${avgDuration.toFixed(2)}ms\`);
    }
  }, [componentName]);
  
  return onRender;
}

function OptimizedApp() {
  const onRender = useProfiler('MainComponent');
  
  return (
    <Profiler id="MainComponent" onRender={onRender}>
      <AppContent />
    </Profiler>
  );
}

export default function ProfilerDemo() {
  return <App />;
}`,
  lineByLine: [
    "Line 4-12: onRenderCallback receives timing information",
    "Line 8: actualDuration - actual time spent rendering",
    "Line 9: baseDuration - estimated time without memoization",
    "Line 15-34: SlowComponent with expensive calculation",
    "Line 37-50: Wrapping component with Profiler",
    "Line 53-66: Multiple profilers for different components",
    "Line 69-94: Analyzing memoization effectiveness",
    "Line 97-125: Profiler with useTransition",
    "Line 128-153: Custom profiler hook for monitoring"
  ],
  simpleMeaning: "Profiler measures component render times to identify performance bottlenecks and verify memoization effectiveness.",
  output: "Console logs showing render times, identifying slow components, and suggesting optimizations.",
  note: "Profiler adds overhead, so only use in development or for performance monitoring in production with sampling."
}
    ]
  }
};

export const reactExplanations = learning;
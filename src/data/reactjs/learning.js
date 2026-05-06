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
      // TOPIC 2: Virtual DOM
      {
        name: "📌 Virtual DOM",
        description: "Virtual DOM is a lightweight copy of the actual DOM stored in memory. When state changes, React creates a new virtual DOM tree and compares it with the previous one (diffing). React then calculates the most efficient way to update the real DOM (reconciliation). This process batches updates and minimizes expensive DOM manipulations.",
        code: `import { useState } from 'react';

function VirtualDOMDemo() {
  const [count, setCount] = useState(0);
  
  // When state changes:
  // 1. React creates new Virtual DOM
  // 2. Compares with previous Virtual DOM (diffing)
  // 3. Updates only changed elements (reconciliation)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import { useState } from 'react' - Imports useState hook",
          "Line 3: function VirtualDOMDemo() { - Creates component",
          "Line 4: const [count, setCount] = useState(0) - Creates state",
          "Line 7-9: Comments explaining Virtual DOM process",
          "Line 11-16: Return JSX with button that updates state",
          "Line 15: onClick={() => setCount(count + 1)} - Updates state when clicked"
        ],
        simpleMeaning: "Virtual DOM is like a blueprint. React compares the new blueprint with the old one and only updates what changed.",
        output: "Only the changed element updates in the real DOM",
        note: "Virtual DOM enables React's high performance."
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
      // TOPIC 5: Props and PropTypes
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
      // TOPIC 6: useState Hook
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
      // TOPIC 7: Event Handling
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
      // TOPIC 8: Conditional Rendering
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
      // TOPIC 9: Lists and Keys
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
      // TOPIC 10: Fragments
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
      // TOPIC 11: Controlled Components
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
      // TOPIC 12: Uncontrolled Components (useRef)
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
      // TOPIC 13: Form Validation
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
      // TOPIC 14: Inline Styles
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
      // TOPIC 15: CSS Classes
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
      // TOPIC 16: Dynamic className
      {
        name: "📌 Dynamic className",
        description: "Dynamic class names allow you to change a component's styling based on state or props. You can use template literals, string concatenation, or helper functions to conditionally apply CSS classes.",
        code: `import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function DynamicClassNameDemo() {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('idle');
  const [selectedItem, setSelectedItem] = useState(null);
  
  const buttonClass = isActive ? 'btn-active' : 'btn-inactive';
  
  const cardClass = \`card \${isActive ? 'card-expanded' : 'card-collapsed'}\`;
  
  const statusClass = classNames(
    'status-badge',
    status === 'loading' && 'status-loading',
    status === 'success' && 'status-success',
    status === 'error' && 'status-error'
  );
  
  const getItemClass = (itemId) => {
    const classes = ['list-item'];
    if (selectedItem === itemId) classes.push('list-item-selected');
    return classes.join(' ');
  };
  
  return (
    <div>
      <button className={buttonClass} onClick={() => setIsActive(!isActive)}>
        Toggle Active
      </button>
      
      <div className={cardClass}>
        <p>Dynamic Card</p>
      </div>
      
      <div className={statusClass}>Status: {status}</div>
      
      <ul>
        {[1, 2, 3].map(item => (
          <li
            key={item}
            className={getItemClass(item)}
            onClick={() => setSelectedItem(item)}
          >
            Item {item}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
        lineByLine: [
          "Line 4-6: classNames helper function - Filters falsy values and joins with space",
          "Line 13: const buttonClass = isActive ? 'btn-active' : 'btn-inactive' - Simple ternary",
          "Line 15: const cardClass = `card ${isActive ? 'card-expanded' : 'card-collapsed'}` - Template literal",
          "Line 17-21: statusClass using classNames helper",
          "Line 24-27: getItemClass function - Array method for conditional classes"
        ],
        simpleMeaning: "Dynamic className lets you toggle CSS classes based on state and conditions.",
        output: "Different styling for active states, status badges, and selected items",
        note: "Use classNames helper for complex conditions, template literals for simple ones."
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
        name: "📌 useMemo Hook",
        description: "useMemo caches the result of an expensive calculation so it's only recomputed when its dependencies change. Prevents expensive calculations from running on every render. Use for computationally heavy operations like sorting large arrays.",
        code: `import { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);
  
  const expensiveResult = useMemo(() => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result + number;
  }, [number]);
  
  return (
    <div>
      <p>Expensive result: {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import { useState, useMemo } from 'react' - Import hooks",
          "Line 4-5: State declarations",
          "Line 7-13: useMemo for expensive calculation",
          "Line 8: console.log('Running expensive calculation...') - Shows when runs",
          "Line 13: }, [number] - Only re-runs when number changes"
        ],
        simpleMeaning: "useMemo remembers calculation results. Only recalculates when dependencies change.",
        output: "Expensive calculation runs only when number changes",
        note: "Use useMemo for computationally heavy operations."
      },
      // TOPIC 2: useCallback Hook
      {
        name: "📌 useCallback Hook",
        description: "useCallback returns a memoized version of a function that only changes if its dependencies change. Essential when passing callbacks to child components optimized with React.memo to prevent unnecessary re-renders.",
        code: `import { useState, useCallback, memo } from 'react';

const ChildButton = memo(({ onClick, label }) => {
  console.log(\`\${label} rendered\`);
  return <button onClick={onClick}>{label}</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return (
    <div>
      <ChildButton onClick={handleClick} label="Memoized" />
      <p>Count: {count}</p>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State
      </button>
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import { useState, useCallback, memo } from 'react' - Import hooks",
          "Line 3-6: ChildButton - Memoized component with React.memo",
          "Line 9: const [count, setCount] = useState(0) - State",
          "Line 12-14: handleClick - useCallback memoized function",
          "Line 13: setCount(prev => prev + 1) - Updates state",
          "Line 14: }, [] - Empty array = function never changes"
        ],
        simpleMeaning: "useCallback memoizes functions to prevent child components from re-rendering unnecessarily.",
        output: "Child component doesn't re-render unnecessarily",
        note: "Use with React.memo for optimal performance."
      },
      // TOPIC 3: useReducer Hook
      {
        name: "📌 useReducer Hook",
        description: "useReducer is an alternative to useState for managing complex state logic that involves multiple sub-values or transitions. It accepts a reducer function (state, action) => newState and an initial state, returning [state, dispatch].",
        code: `import { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>Set to 10</button>
    </div>
  );
}`,
        lineByLine: [
          "Line 1: import { useReducer } from 'react' - Import useReducer hook",
          "Line 3-13: counterReducer - Reducer function with switch statement",
          "Line 4: switch (action.type) - Determines action type",
          "Line 5-6: case 'INCREMENT' - Returns new state with incremented count",
          "Line 7-8: case 'DECREMENT' - Returns new state with decremented count",
          "Line 9-10: case 'RESET' - Returns state with count reset to 0",
          "Line 11-12: case 'SET' - Returns state with count set to payload value",
          "Line 17: const [state, dispatch] = useReducer(counterReducer, { count: 0 }) - Hook usage",
          "Line 22-25: dispatch({ type: 'INCREMENT' }) - Dispatches actions"
        ],
        simpleMeaning: "useReducer manages complex state with predictable actions.",
        output: "Counter with increment, decrement, reset, and set to specific value",
        note: "Great for state machines, forms with many fields, or complex state transitions."
      },
      // TOPIC 4: Custom Hooks
      {
        name: "📌 Custom Hooks",
        description: "Custom hooks extract component logic into reusable functions starting with 'use' prefix. They can call other hooks and share stateful logic across components. Great for data fetching, form handling, localStorage sync, and animations.",
        code: `import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}

function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}`,
        lineByLine: [
          "Line 1: import { useState, useEffect } from 'react' - Import hooks",
          "Line 3-12: useLocalStorage custom hook - Syncs state with localStorage",
          "Line 5-9: Lazy initialization - Reads from localStorage on first render",
          "Line 14-21: setValue function - Updates both state and localStorage",
          "Line 23: return [storedValue, setValue] - Returns array like useState",
          "Line 26-34: useDebounce custom hook - Delays value updates",
          "Line 29: const handler = setTimeout(...) - Sets timeout",
          "Line 30: return () => clearTimeout(handler) - Clears timeout on change",
          "Line 37-43: ThemeSwitcher - Component using the custom hook"
        ],
        simpleMeaning: "Custom hooks let you reuse stateful logic across multiple components.",
        output: "Theme persists in localStorage even after page refresh",
        note: "Custom hook names must start with 'use'."
      },
      // TOPIC 5: React.memo
      {
        name: "📌 React.memo",
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
      // TOPIC 6: Lazy Loading (Code Splitting)
      {
        name: "📌 Lazy Loading",
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
      }
    ]
  }
};

export const reactExplanations = learning;
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
      },
      // Additional topics to add to learningData.react.basic.topics or learningData.react.advanced.topics

// ==================== BASIC LEVEL ADDITIONS ====================

{
  name: "🎨 Styling in React",
  description: "React offers multiple styling options: inline styles, CSS modules, styled-components, and regular CSS. Each approach has different use cases and benefits.",
  code: `// Method 1: Inline Styles
function InlineStyle() {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px'
  };
  return <button style={buttonStyle}>Click me</button>;
}

// Method 2: CSS Modules (styles.module.css)
// .button { background: blue; color: white; }
import styles from './styles.module.css';
function CSSModule() {
  return <button className={styles.button}>Click me</button>;
}

// Method 3: Styled Components
import styled from 'styled-components';
const StyledButton = styled.button\`
  background: blue;
  color: white;
  padding: 10px 20px;
  &:hover { background: darkblue; }
\`;
function StyledComponent() {
  return <StyledButton>Click me</StyledButton>;
}`,
  lineByLine: [
    "Line 4-9: Define inline style object with camelCase properties",
    "Line 12: Use CSS modules with .module.css extension",
    "Line 17: Styled-components uses template literals for CSS",
    "Line 19: &:hover - Nesting pseudo-classes in styled-components"
  ],
  simpleMeaning: "React components can be styled using inline objects, imported CSS files, or CSS-in-JS libraries.",
  output: "All three methods produce a blue button with white text",
  note: "Inline styles don't support pseudo-classes like :hover without JavaScript"
},

{
  name: "🎭 Fragment",
  description: "Fragments allow grouping multiple elements without adding extra DOM nodes. This solves the common 'adjacent JSX elements must be wrapped' error.",
  code: `// Without Fragment (adds unnecessary div)
function WithoutFragment() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// With Fragment (cleaner DOM)
function WithFragment() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}

// Explicit Fragment syntax (when you need keys)
function ListItems() {
  return (
    <>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </>
  );
}`,
  lineByLine: [
    "Line 3-7: Wrapped with div (adds extra node to DOM)",
    "Line 12-16: Using shorthand <> syntax for Fragment",
    "Line 20: React.Fragment with key for mapping",
    "Line 21-24: Multiple elements grouped without wrapper"
  ],
  simpleMeaning: "Fragments let you return multiple elements from a component without adding extra HTML tags.",
  output: "All elements render without an extra wrapper div in the DOM",
  note: "Fragment shorthand <></> doesn't support keys - use <React.Fragment> when keys are needed"
},

{
  name: "🔧 Controlled vs Uncontrolled Components",
  description: "Controlled components have their state controlled by React, while uncontrolled components manage their own state using refs. Controlled components are preferred for form validation and dynamic inputs.",
  code: `import { useState, useRef } from 'react';

// Controlled Component (React manages state)
function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Controlled:', { name, email });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Uncontrolled Component (DOM manages state)
function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Uncontrolled:', {
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}`,
  lineByLine: [
    "Line 4-6: State for controlled inputs",
    "Line 14-17: Input value controlled by React state",
    "Line 24-25: Refs for uncontrolled components",
    "Line 28-31: Access values directly from DOM via refs",
    "Line 37-38: Inputs without value/onChange (DOM manages state)"
  ],
  simpleMeaning: "Controlled components give React full control over form data; uncontrolled components let the DOM handle it.",
  output: "Both forms log the entered data, but controlled components can validate in real-time",
  note: "Controlled components cause re-renders on every keystroke - fine for most cases"
},

// ==================== ADVANCED LEVEL ADDITIONS ====================

{
  name: "🚀 Custom Hooks",
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

{
  name: "⏸️ useDeferredValue Hook",
  description: "useDeferredValue returns a deferred version of a value that may be stale but updates later. It's useful when you want to show stale content while fresh content loads.",
  code: `import { useState, useDeferredValue, useMemo } from 'react';

function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);
  
  // Simulate heavy product list
  const products = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: \`Product \${i}\`,
    category: ['Electronics', 'Clothing', 'Books'][i % 3]
  }));
  
  const filteredProducts = useMemo(() => {
    console.log('Filtering with:', deferredSearchTerm);
    if (!deferredSearchTerm) return products;
    return products.filter(product =>
      product.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
    );
  }, [deferredSearchTerm]);
  
  const immediateFiltered = useMemo(() => {
    console.log('immediate:', searchTerm);
    if (!searchTerm) return products;
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>Immediate (may lag)</h3>
          <p>Showing {immediateFiltered.length} products</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Deferred (smooth UI)</h3>
          <p>Showing {filteredProducts.length} products</p>
        </div>
      </div>
    </div>
  );
}`,
  lineByLine: [
    "Line 4: const deferredSearchTerm = useDeferredValue(searchTerm) - Creates deferred version",
    "Line 13-18: useMemo with deferred value for heavy filtering",
    "Line 20-26: Alternative filtering with immediate value",
    "Line 35-43: Compare immediate vs deferred rendering",
    "Console shows which filtering runs when"
  ],
  simpleMeaning: "useDeferredValue lets you show stale data while expensive updates happen in background.",
  output: "Search feels smooth; heavy filtering doesn't block typing",
  note: "Use useDeferredValue when you can show stale content, useTransition for loading indicators"
},

{
  name: "📡 useSyncExternalStore",
  description: "useSyncExternalStore subscribes to external stores (Redux, Zustand, browser APIs) and ensures UI consistency during concurrent rendering. It's recommended for external state management.",
  code: `import { useSyncExternalStore } from 'react';

// External store (could be Redux, Zustand, or browser API)
let listeners = [];
let networkStatus = 'online';
let count = 0;

const networkStore = {
  subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return networkStatus;
  },
  // Method to update store
  setStatus(status) {
    networkStatus = status;
    listeners.forEach(listener => listener());
  }
};

// Browser online status store using useSyncExternalStore
function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    () => navigator.onLine, // Current value
    () => true // Server snapshot (default)
  );
  return isOnline;
}

// Counter store with suspense support
let counterValue = 0;
let counterListeners = [];

const counterStore = {
  subscribe(listener) {
    counterListeners.push(listener);
    return () => {
      counterListeners = counterListeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return counterValue;
  },
  increment() {
    counterValue++;
    counterListeners.forEach(listener => listener());
  }
};

function NetworkStatus() {
  const isOnline = useOnlineStatus();
  const network = useSyncExternalStore(
    networkStore.subscribe,
    networkStore.getSnapshot
  );
  
  return (
    <div style={{ color: isOnline ? 'green' : 'red' }}>
      Status: {isOnline ? '🟢 Online' : '🔴 Offline'}
      Network store: {network}
    </div>
  );
}

function Counter() {
  const counter = useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getSnapshot
  );
  
  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => counterStore.increment()}>
        Increment
      </button>
    </div>
  );
}`,
  lineByLine: [
    "Line 1: import { useSyncExternalStore } from 'react' - Import hook",
    "Line 4-16: External store with subscribe and getSnapshot methods",
    "Line 24-37: useOnlineStatus - Tracking browser API changes",
    "Line 40-56: Counter store with proper subscription pattern",
    "Line 59-68: Using useSyncExternalStore with custom store",
    "Line 71-81: Counter component using external store"
  ],
  simpleMeaning: "useSyncExternalStore connects React components to external data sources safely.",
  output: "Components update when external stores change, works with concurrent features",
  note: "Required for external stores when using React 18+ concurrent features"
},

{
  name: "🎨 Portals",
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

function Tooltip({ children, text }) {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  
  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX
      });
    }
  };
  
  const handleMouseEnter = () => {
    updatePosition();
    setShow(true);
  };
  
  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      {show && createPortal(
        <div style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          backgroundColor: '#333',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 9999
        }}>
          {text}
        </div>,
        document.body
      )}
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* This div could have overflow:hidden, but modal still works */}
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      
      <Tooltip text="This tooltip breaks out!">
        <span>Hover over me</span>
      </Tooltip>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Content</h2>
        <p>This modal is rendered outside the React root!</p>
        <p>It appears even if parent has overflow: hidden</p>
      </Modal>
    </div>
  );
}`,
  lineByLine: [
    "Line 1: import { createPortal } from 'react-dom' - Import portal function",
    "Line 7-28: Portal renders modal at different DOM location",
    "Line 30: document.getElementById('modal-root') - Portal destination",
    "Line 33-65: Tooltip using portal to avoid clipping",
    "Line 68-71: Even with overflow:hidden, portals work",
    "Line 84: document.body - Portal to body element"
  ],
  simpleMeaning: "Portals let you render components outside their normal DOM parent, useful for modals and tooltips.",
  output: "Modal covers entire screen despite parent overflow; tooltip shows above everything",
  note: "Portal events still bubble through React tree, even though DOM location is different"
},

{
  name: "🧩 Error Boundaries",
  description: "Error boundaries catch JavaScript errors in child components, preventing app crashes. They display fallback UI instead of broken components. Only class components can be error boundaries.",
  code: `import React from 'react';

// Error Boundary Component (must be class component)
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
    // Log error to service
    console.error('Error caught:', error, errorInfo);
    this.setState({ errorInfo });
    
    // Send to error reporting service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          backgroundColor: '#ffebee',
          border: '1px solid #f44336',
          borderRadius: '8px',
          margin: '10px'
        }}>
          <h2>Something went wrong</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <summary>Error details</summary>
            <p>{this.state.error?.toString()}</p>
            <pre>{this.state.errorInfo?.componentStack}</pre>
          </details>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Component that might crash
function BuggyCounter() {
  const [count, setCount] = useState(0);
  
  if (count === 5) {
    throw new Error('I crashed at count 5!');
  }
  
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment to crash at 5
      </button>
    </div>
  );
}

function SafeComponent() {
  return <div>This component always works fine</div>;
}

function App() {
  const [errorBoundaryKey, setErrorBoundaryKey] = useState(0);
  
  const resetErrorBoundary = () => {
    setErrorBoundaryKey(prev => prev + 1);
  };
  
  return (
    <div>
      <h1>Error Boundary Demo</h1>
      
      {/* Individual error boundary for specific component */}
      <ErrorBoundary key={errorBoundaryKey}>
        <BuggyCounter />
      </ErrorBoundary>
      
      {/* This component won't affect others */}
      <SafeComponent />
      
      <button onClick={resetErrorBoundary}>
        Reset Error Boundary
      </button>
    </div>
  );
}`,
  lineByLine: [
    "Line 4: class ErrorBoundary extends React.Component - Must be class component",
    "Line 9: static getDerivedStateFromError(error) - Catch error, update state",
    "Line 13: componentDidCatch(error, errorInfo) - Log errors side effects",
    "Line 21-37: Render fallback UI when error occurs",
    "Line 43: throw new Error('I crashed at count 5!') - Simulated crash",
    "Line 67: key={errorBoundaryKey} - Reset boundary by changing key"
  ],
  simpleMeaning: "Error boundaries catch crashes in components, show fallback UI instead of blank screen.",
  output: "Counter crashes at 5 but only affects that component; others work normally",
  note: "Error boundaries don't catch errors in event handlers or async code - use try/catch for those"
},

{
  name: "⚡ React.memo & Optimization",
  description: "React.memo prevents unnecessary re-renders by memoizing components. Combined with useCallback and useMemo, it optimizes performance for expensive components.",
  code: `import { useState, useCallback, useMemo, memo } from 'react';

// Regular component (re-renders every time parent updates)
const RegularChild = ({ value, onClick }) => {
  console.log('Regular child rendered');
  return <button onClick={() => onClick(value)}>Value: {value}</button>;
};

// Memoized component (only re-renders when props change)
const MemoizedChild = memo(({ value, onClick }) => {
  console.log('Memoized child rendered');
  return <button onClick={() => onClick(value)}>Value: {value}</button>;
});

// Complex component for useMemo example
function ExpensiveList({ numbers }) {
  const processedNumbers = useMemo(() => {
    console.log('Processing numbers...');
    return numbers
      .filter(n => n % 2 === 0)
      .map(n => n * n)
      .sort((a, b) => a - b);
  }, [numbers]); // Only recompute when numbers change
  
  return (
    <div>
      <h4>Processed Numbers:</h4>
      <ul>
        {processedNumbers.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  
  // useCallback prevents child re-renders
  const handleRegularClick = useCallback((value) => {
    console.log('Regular clicked:', value);
  }, []);
  
  const handleMemoizedClick = useCallback((value) => {
    console.log('Memoized clicked:', value);
  }, []);
  
  const addItem = () => {
    setItems(prev => [...prev, prev.length + 1]);
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Performance Optimization Demo</h2>
      
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here (causes re-renders)"
        />
        <button onClick={() => setCount(c => c + 1)}>
          Parent Count: {count}
        </button>
        <button onClick={addItem}>
          Add Number: {items.length}
        </button>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div>
          <h3>Regular Component</h3>
          <RegularChild value={count} onClick={handleRegularClick} />
        </div>
        <div>
          <h3>Memoized Component</h3>
          <MemoizedChild value={count} onClick={handleMemoizedClick} />
        </div>
      </div>
      
      <ExpensiveList numbers={items} />
      
      <p>
        <small>
          Regular component re-renders on every parent update.<br/>
          Memoized component only re-renders when 'count' or 'onClick' changes.<br/>
          ExpensiveList only processes when 'items' array changes.
        </small>
      </p>
    </div>
  );
}`,
  lineByLine: [
    "Line 10: const MemoizedChild = memo(...) - Wrap component in memo",
    "Line 19: useMemo with expensive calculation",
    "Line 38-42: useCallback for stable function references",
    "Line 49-52: State changes that trigger re-renders",
    "Line 69-71: Compare regular vs memoized component behavior",
    "Line 80-82: Explanation of optimization benefits"
  ],
  simpleMeaning: "React.memo and hooks like useCallback/useMemo prevent unnecessary work, making apps faster.",
  output: "Console shows when each component re-renders - memoized renders less often",
  note: "Only optimize when needed - premature optimization can complicate code"
},

{
  name: "🔄 Refs & DOM Manipulation",
  description: "Beyond just accessing DOM elements, refs can store mutable values, measure elements, trigger animations, and integrate with non-React libraries.",
  code: `import { useRef, useEffect, useState } from 'react';

function AdvancedRefExample() {
  // Different use cases for refs
  const videoRef = useRef(null);
  const intervalRef = useRef(null);
  const renderCount = useRef(0);
  const [text, setText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  
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
  
  // Video controls with ref
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Timer with ref to store interval ID
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let seconds = 0;
    intervalRef.current = setInterval(() => {
      seconds++;
      console.log(\`Timer: \${seconds}s\`);
    }, 1000);
  };
  
  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
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
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Advanced Refs Demo</h2>
      <p>Component rendered {renderCount.current} times</p>
      
      {/* Video element ref */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Video Control</h3>
        <video 
          ref={videoRef} 
          width="100%" 
          controls={false}
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        />
        <button onClick={toggleVideo}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      
      {/* Auto-scroll chat */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Auto-scroll Chat</h3>
        <div 
          ref={chatContainerRef}
          style={{ 
            height: '200px', 
            overflow: 'auto', 
            border: '1px solid #ccc',
            padding: '10px'
          }}
        >
          {messages.map((msg, i) => (
            <div key={i}>{msg}</div>
          ))}
        </div>
        <button onClick={addMessage}>Add Message</button>
      </div>
      
      {/* Measure element */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Element Measurement</h3>
        <div 
          ref={measureRef}
          style={{ 
            padding: '20px', 
            background: '#f0f0f0',
            resize: 'both',
            overflow: 'auto',
            minWidth: '100px',
            minHeight: '100px'
          }}
        >
          Resize me!
        </div>
        <button onClick={measureElement}>Measure Size</button>
        {dimensions.width > 0 && (
          <p>Width: {Math.round(dimensions.width)}px, Height: {Math.round(dimensions.height)}px</p>
        )}
      </div>
      
      {/* Focus management */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Focus Management</h3>
        {[0, 1, 2].map(i => (
          <input
            key={i}
            ref={el => inputRefs.current[i] = el}
            type="text"
            placeholder={\`Input \${i + 1}\`}
            onKeyDown={(e) => {
              if (e.key === 'Enter') focusNext(i);
            }}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
        ))}
        <small>Press Enter to focus next input</small>
      </div>
      
      {/* Timer controls */}
      <div>
        <h3>Timer with Ref</h3>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <small>Check console for timer output</small>
      </div>
    </div>
  );
}`,
  lineByLine: [
    "Line 1: useRef for DOM access and mutable values",
    "Line 10: renderCount.current++ - Track renders without state",
    "Line 17-21: Auto-scroll effect when messages change",
    "Line 28-34: Video control with ref",
    "Line 37-45: Store interval ID in ref for cleanup",
    "Line 51-59: Measure DOM element size",
    "Line 62-66: Input refs array for focus management",
    "Line 81: ref={videoRef} - Attach ref to DOM element"
  ],
  simpleMeaning: "Refs can do much more than just get DOM elements - they're great for values that shouldn't trigger re-renders.",
  output: "Shows render count, auto-scrolling chat, element measurement, keyboard navigation, and timer management",
  note: "Refs don't cause re-renders - perfect for values that update frequently or need persistence"
},

{
  name: "🌐 Server Components (React 19)",
  description: "React Server Components let you render components on the server, reducing client-side JavaScript and improving initial load time. They can directly access backend resources.",
  code: `// Note: This requires Next.js 14+ or React 19 with server support

// ServerComponent.server.js (or .server.jsx extension)
import db from 'database'; // Can import server-only modules
import { Suspense } from 'react';

// This component runs ONLY on the server
async function UserList() {
  // Direct database access (no API needed!)
  const users = await db.users.findMany();
  
  return (
    <div>
      <h2>Users from Database</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Server Component with async data fetching
async function ProductDetails({ productId }) {
  // Direct file system access
  const fs = require('fs').promises;
  const productData = await fs.readFile(\`./data/products/\${productId}.json\`, 'utf8');
  const product = JSON.parse(productData);
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div className="price">Price: {product.price}</div>
    </div>
  );
}

// Client Component (can be interactive)
'use client';
import { useState } from 'react';

function AddToCartButton({ productId }) {
  const [added, setAdded] = useState(false);
  
  const handleAddToCart = async () => {
    // This runs on client
    const response = await fetch('/api/add-to-cart', {
      method: 'POST',
      body: JSON.stringify({ productId })
    });
    if (response.ok) setAdded(true);
  };
  
  return (
    <button onClick={handleAddToCart}>
      {added ? '✓ Added to Cart' : 'Add to Cart'}
    </button>
  );
}

// Combining Server and Client Components
async function ProductPage({ productId }) {
  // ProductDetails runs on server - zero client JS
  // AddToCartButton runs on client - interactive
  
  return (
    <div>
      {/* Server Component - no JS sent to client */}
      <ProductDetails productId={productId} />
      
      {/* Client Component - interactive but loaded on demand */}
      <Suspense fallback={<div>Loading cart...</div>}>
        <AddToCartButton productId={productId} />
      </Suspense>
    </div>
  );
}

// Server Component with streaming
async function StreamingData() {
  // Data streams as it becomes available
  const slowData = await fetch('https://slow-api.com/data', {
    next: { revalidate: 60 } // Caching strategy
  });
  const data = await slowData.json();
  
  return <div>Streamed content: {data.content}</div>;
}`,
  lineByLine: [
    "Line 3: .server.jsx extension indicates Server Component",
    "Line 4: import db from 'database' - Server-only imports allowed",
    "Line 7: async function UserList() - Async components possible",
    "Line 8: const users = await db.users.findMany() - Direct DB access",
    "Line 25: 'use client' directive - Marks Client Component",
    "Line 42: ProductDetails runs only on server, zero JS sent",
    "Line 45: AddToCartButton component - interactive but loaded as separate client bundle",
    "Line 51: Suspense wraps client component for streaming",
    "Line 56: Data streaming as it becomes available"
  ],
  simpleMeaning: "Server Components run only on the server, reducing client-side JavaScript and improving performance.",
  output: "Page loads faster with less JavaScript; database access happens securely on server",
  note: "Server Components can't use hooks or browser APIs - use 'use client' for interactive features"
},
// ==================== INTERMEDIATE LEVEL TOPICS ====================

{
  name: "🔄 Context with useReducer",
  description: "Combining Context API with useReducer creates a powerful state management solution similar to Redux, but built into React. Perfect for medium-sized apps.",
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

{
  name: "🎯 Render Props Pattern",
  description: "Render props is a pattern for sharing code between components using a prop whose value is a function. It's an alternative to HOCs for code reuse.",
  code: `import { useState } from 'react';

// Mouse tracker with render prop
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// Data fetcher with render prop
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);
  
  return render({ data, loading, error });
}

// Toggle component with render prop
function Toggle({ render, initialOn = false }) {
  const [on, setOn] = useState(initialOn);
  
  const toggle = () => setOn(!on);
  const setOn_ = () => setOn(true);
  const setOff = () => setOn(false);
  
  return render({ on, toggle, setOn: setOn_, setOff });
}

// Using different components with render props
function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>
      
      {/* Mouse position tracker */}
      <MouseTracker 
        render={({ x, y }) => (
          <div>
            <h3>Mouse Position</h3>
            <p>X: {x}, Y: {y}</p>
          </div>
        )}
      />
      
      {/* Data fetcher */}
      <DataFetcher 
        url="https://jsonplaceholder.typicode.com/posts/1"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading post...</p>;
          if (error) return <p>Error: {error}</p>;
          return (
            <div>
              <h3>{data?.title}</h3>
              <p>{data?.body}</p>
            </div>
          );
        }}
      />
      
      {/* Toggle component - reusable for different UIs */}
      <Toggle
        render={({ on, toggle, setOn, setOff }) => (
          <div>
            <h3>Toggle Demo</h3>
            <p>Status: {on ? 'ON' : 'OFF'}</p>
            <button onClick={toggle}>Toggle</button>
            <button onClick={setOn}>Turn On</button>
            <button onClick={setOff}>Turn Off</button>
            
            {on && (
              <div style={{ 
                padding: '20px', 
                background: 'green', 
                color: 'white',
                marginTop: '10px'
              }}>
                Content visible when ON!
              </div>
            )}
          </div>
        )}
      />
      
      {/* Same Toggle component, different UI */}
      <Toggle
        render={({ on, toggle }) => (
          <div>
            <label>
              <input type="checkbox" checked={on} onChange={toggle} />
              Subscribe to newsletter
            </label>
            {on && <input type="email" placeholder="Enter your email" />}
          </div>
        )}
      />
    </div>
  );
}`,
  lineByLine: [
    "Line 4-14: MouseTracker accepts render prop function",
    "Line 13: {render(position)} - Calls render function with data",
    "Line 17-36: DataFetcher handles API calls",
    "Line 35: render({ data, loading, error }) - Passes multiple values",
    "Line 39-46: Toggle component with render prop",
    "Line 54-60: Using MouseTracker with render prop",
    "Line 63-76: DataFetcher renders different UI based on state",
    "Line 79-98: Toggle renders complete UI with controls",
    "Line 101-111: Same Toggle used for form checkbox pattern"
  ],
  simpleMeaning: "Render props let components share logic by letting the parent decide what to render.",
  output: "Shows mouse position, fetches and displays post, and reusable toggle UI in multiple contexts",
  note: "Hooks (useState, useEffect) often replace render props, but pattern is still useful"
},

{
  name: "🎣 Compound Components",
  description: "Compound components are a pattern where multiple components work together implicitly using Context. Perfect for components like Select, Tabs, or Menu with shared state.",
  code: `import React, { useState, useContext } from 'react';

// Tabs component - manages active tab state
const TabsContext = createContext();

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

// TabList - container for tab buttons
function TabList({ children }) {
  return (
    <div className="tab-list" style={{ display: 'flex', gap: '10px', borderBottom: '1px solid #ccc' }}>
      {children}
    </div>
  );
}

// Tab - individual tab button
function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;
  
  return (
    <button
      onClick={() => setActiveIndex(index)}
      style={{
        padding: '10px 20px',
        background: isActive ? '#007bff' : 'transparent',
        color: isActive ? 'white' : '#333',
        border: 'none',
        cursor: 'pointer',
        borderBottom: isActive ? '2px solid #007bff' : 'none'
      }}
    >
      {children}
    </button>
  );
}

// TabPanels - container for panels
function TabPanels({ children }) {
  return <div className="tab-panels">{children}</div>;
}

// TabPanel - individual panel shown when active
function TabPanel({ index, children }) {
  const { activeIndex } = useContext(TabsContext);
  
  if (activeIndex !== index) return null;
  
  return (
    <div className="tab-panel" style={{ padding: '20px' }}>
      {children}
    </div>
  );
}

// Another example: Select component
const SelectContext = createContext();

function Select({ children, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  
  const handleSelect = (val) => {
    setSelectedValue(val);
    onChange?.(val);
    setIsOpen(false);
  };
  
  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, selectedValue, handleSelect }}>
      <div className="select" style={{ position: 'relative' }}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

function SelectTrigger({ children }) {
  const { isOpen, setIsOpen, selectedValue } = useContext(SelectContext);
  
  const displayText = children || selectedValue || 'Select an option';
  
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        background: 'white',
        cursor: 'pointer',
        width: '200px',
        textAlign: 'left'
      }}
    >
      {displayText} {isOpen ? '▲' : '▼'}
    </button>
  );
}

function SelectOptions({ children }) {
  const { isOpen } = useContext(SelectContext);
  
  if (!isOpen) return null;
  
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'white',
      border: '1px solid #ccc',
      marginTop: '5px',
      zIndex: 1000
    }}>
      {children}
    </div>
  );
}

function SelectOption({ value, children }) {
  const { handleSelect, selectedValue } = useContext(SelectContext);
  
  return (
    <div
      onClick={() => handleSelect(value)}
      style={{
        padding: '10px',
        cursor: 'pointer',
        background: selectedValue === value ? '#f0f0f0' : 'white',
        borderBottom: '1px solid #eee'
      }}
      onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
      onMouseLeave={(e) => e.target.style.background = selectedValue === value ? '#f0f0f0' : 'white'}
    >
      {children || value}
    </div>
  );
}

// Usage examples
function App() {
  const [selectedFruit, setSelectedFruit] = useState('apple');
  
  return (
    <div>
      <h1>Tabs Example</h1>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab index={0}>Profile</Tab>
          <Tab index={1}>Settings</Tab>
          <Tab index={2}>Notifications</Tab>
        </TabList>
        <TabPanels>
          <TabPanel index={0}>
            <h3>Profile Content</h3>
            <p>Your profile information goes here.</p>
          </TabPanel>
          <TabPanel index={1}>
            <h3>Settings Content</h3>
            <p>Adjust your application settings.</p>
          </TabPanel>
          <TabPanel index={2}>
            <h3>Notifications</h3>
            <p>Manage your notification preferences.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
      <h1 style={{ marginTop: '40px' }}>Select Component</h1>
      <Select value={selectedFruit} onChange={setSelectedFruit}>
        <SelectTrigger>
          {selectedFruit === 'apple' ? '🍎 Apple' : 
           selectedFruit === 'banana' ? '🍌 Banana' : 
           selectedFruit === 'orange' ? '🍊 Orange' : 'Select fruit'}
        </SelectTrigger>
        <SelectOptions>
          <SelectOption value="apple">🍎 Apple</SelectOption>
          <SelectOption value="banana">🍌 Banana</SelectOption>
          <SelectOption value="orange">🍊 Orange</SelectOption>
        </SelectOptions>
      </Select>
      <p>Selected: {selectedFruit}</p>
    </div>
  );
}`,
  lineByLine: [
    "Line 4: TabsContext for sharing active tab state",
    "Line 6-12: Tabs component provides context",
    "Line 15-20: TabList - presentational container",
    "Line 23-40: Tab - consumes context to show active state",
    "Line 43-47: TabPanels container",
    "Line 50-58: TabPanel shows only when active",
    "Line 61-150: Select component using same pattern",
    "Line 160-175: Usage is declarative and intuitive",
    "Users don't need to pass props between components manually"
  ],
  simpleMeaning: "Compound components share state automatically, making APIs clean and declarative.",
  output: "Tabs and Select components work without manual prop passing, with complete type safety",
  note: "Popular libraries like Reach UI and Headless UI use this pattern extensively"
},

{
  name: "📱 HOCs (Higher Order Components)",
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

// HOC for adding authentication check
function withAuth(WrappedComponent) {
  return function WithAuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);
    
    useEffect(() => {
      // Check authentication status
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
      setChecking(false);
    }, []);
    
    if (checking) {
      return <div>Checking authentication...</div>;
    }
    
    if (!isAuthenticated) {
      return (
        <div>
          <h2>Please log in</h2>
          <button onClick={() => {
            localStorage.setItem('authToken', 'dummy-token');
            setIsAuthenticated(true);
          }}>
            Mock Login
          </button>
        </div>
      );
    }
    
    return <WrappedComponent {...props} />;
  };
}

// HOC for logging props
function withLogger(WrappedComponent) {
  return function WithLoggerComponent(props) {
    useEffect(() => {
      console.log(\`\${WrappedComponent.name} rendered with props:\`, props);
    }, [props]);
    
    return <WrappedComponent {...props} />;
  };
}

// HOC for data fetching
function withDataFetching(url) {
  return function(WrappedComponent) {
    return function WithDataFetchingComponent(props) {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      
      useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setData(data);
            setLoading(false);
          })
          .catch(err => {
            setError(err.message);
            setLoading(false);
          });
      }, [url]);
      
      if (loading) return <div>Fetching data...</div>;
      if (error) return <div>Error: {error}</div>;
      
      return <WrappedComponent data={data} {...props} />;
    };
  };
}

// HOC for adding resize detection
function withResizeDetection(WrappedComponent) {
  return function WithResizeComponent(props) {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return <WrappedComponent windowSize={windowSize} {...props} />;
  };
}

// Basic component
function UserProfile({ user, windowSize }) {
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Window: {windowSize?.width} x {windowSize?.height}</p>
    </div>
  );
}

function Dashboard({ data }) {
  return (
    <div>
      <h3>Dashboard</h3>
      <ul>
        {data?.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Compose multiple HOCs
// Note: In real apps, use compose function from libraries like 'recompose' or 'lodash'
const compose = (...hocs) => (Component) => 
  hocs.reduceRight((comp, hoc) => hoc(comp), Component);

// Apply HOCs
const EnhancedUserProfile = compose(
  withAuth,           // First check auth
  withResizeDetection, // Then add resize
  withLogger,         // Then log props
  withLoading         // Finally add loading
)(UserProfile);

const EnhancedDashboard = withDataFetching('https://jsonplaceholder.typicode.com/posts')(Dashboard);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  
  return (
    <div>
      <h1>HOC Patterns Demo</h1>
      
      <h2>Enhanced User Profile</h2>
      <EnhancedUserProfile 
        isLoading={isLoading}
        user={{ name: 'John Doe', email: 'john@example.com' }}
      />
      
      <h2>Data Fetching HOC</h2>
      <EnhancedDashboard />
    </div>
  );
}`,
  lineByLine: [
    "Line 4-11: withLoading HOC - Adds loading UI",
    "Line 14-45: withAuth HOC - Handles authentication",
    "Line 48-56: withLogger HOC - Logs props changes",
    "Line 59-77: withDataFetching HOC - Fetch and provides data",
    "Line 80-96: withResizeDetection HOC - Tracks window size",
    "Line 99-110: Basic components that receive enhanced props",
    "Line 119-121: Compose utility for multiple HOCs",
    "Line 124-130: Apply multiple HOCs to a component",
    "Line 139-146: Using enhanced components"
  ],
  simpleMeaning: "HOCs are component factories that add features to existing components without changing their code.",
  output: "UserProfile gets auth protection, resize detection, logging, and loading state; Dashboard gets data fetching",
  note: "Hooks are often simpler alternatives to HOCs, but HOCs still useful for wrapper components"
},

{
  name: "🎬 React Router DOM (Navigation)",
  description: "React Router enables navigation between different views in your React app. It provides declarative routing with components like BrowserRouter, Routes, Route, and Link.",
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
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <NavLink to="/" style={({ isActive }) => ({
          margin: '0 10px',
          color: isActive ? 'blue' : 'black',
          fontWeight: isActive ? 'bold' : 'normal'
        })}>Home</NavLink>
        
        <NavLink to="/about" style={({ isActive }) => ({
          margin: '0 10px',
          color: isActive ? 'blue' : 'black'
        })}>About</NavLink>
        
        <NavLink to="/products" style={({ isActive }) => ({
          margin: '0 10px',
          color: isActive ? 'blue' : 'black'
        })}>Products</NavLink>
        
        <NavLink to="/dashboard" style={({ isActive }) => ({
          margin: '0 10px',
          color: isActive ? 'blue' : 'black'
        })}>Dashboard</NavLink>
      </nav>
      
      {/* Outlet renders the matched child route */}
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
}

// Home component
function Home() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/about')}>
        Go to About
      </button>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
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
      <p>Current path: {location.pathname}</p>
    </div>
  );
}

// Products list component
function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' }
  ];
  
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={\`/products/\${product.id}\`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Product detail component with URL params
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const products = {
        1: { id: 1, name: 'Product 1', price: '$10', description: 'First product' },
        2: { id: 2, name: 'Product 2', price: '$20', description: 'Second product' },
        3: { id: 3, name: 'Product 3', price: '$30', description: 'Third product' }
      };
      setProduct(products[id]);
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) return <div>Loading product...</div>;
  if (!product) return <div>Product not found</div>;
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => navigate('/products')}>Back to Products</button>
    </div>
  );
}

// Dashboard with nested routes
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ width: '200px', borderRight: '1px solid #ccc' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/dashboard/settings">Settings</Link>
            <Link to="/dashboard/analytics">Analytics</Link>
          </nav>
        </div>
        <div style={{ flex: 1 }}>
          <Outlet /> {/* Nested routes render here */}
        </div>
      </div>
    </div>
  );
}

function DashboardProfile() {
  return (
    <div>
      <h2>Profile</h2>
      <p>User profile information goes here</p>
    </div>
  );
}

function DashboardSettings() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h2>Settings</h2>
      <button onClick={() => navigate('/')}>
        Save and go home
      </button>
    </div>
  );
}

function DashboardAnalytics() {
  return (
    <div>
      <h2>Analytics</h2>
      <p>Your dashboard analytics</p>
    </div>
  );
}

// Protected route component
function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [checking, setChecking] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuth(!!token);
    setChecking(false);
  }, []);
  
  if (checking) return <div>Checking auth...</div>;
  
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

// 404 Not Found component
function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}

// Main App with router configuration
function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index route (default for /) */}
          <Route index element={<Home />} />
          
          {/* Simple routes */}
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          
          {/* Nested routes */}
          <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard/profile" replace />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSettings />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
          </Route>
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`,
  lineByLine: [
    "Line 1-9: Import router components",
    "Line 12-37: Layout with NavLink for active styling",
    "Line 40-52: Home with useNavigate for programmatic navigation",
    "Line 55-66: About with useLocation for query params",
    "Line 85-115: Product detail with useParams",
    "Line 118-148: Dashboard with nested routes and Outlet",
    "Line 179-198: ProtectedRoute component for auth",
    "Line 201-212: 404 page",
    "Line 215-235: Route configuration with nesting"
  ],
  simpleMeaning: "React Router lets you create multi-page experiences in a single-page React app.",
  output: "Complete navigation system with nested routes, protected routes, 404 handling, and dynamic params",
  note: "React Router v6 uses Routes instead of Switch, and element instead of component/render"
},

{
  name: "🐘 State Management with Zustand",
  description: "Zustand is a minimal state management library that's simpler than Redux with less boilerplate. It uses hooks and doesn't require providers.",
  code: `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Basic store
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

// Store with multiple values
const useUserStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  
  fetchUser: async (id) => {
    set({ isLoading: true });
    try {
      const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
      const user = await response.json();
      set({ user, isLoading: false, error: null });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  updateUser: (updates) => set((state) => ({
    user: { ...state.user, ...updates }
  })),
  
  clearUser: () => set({ user: null, error: null })
}));

// Store with persist middleware (saves to localStorage)
const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      })),
      setTheme: (theme) => set({ theme })
    }),
    {
      name: 'theme-storage', // unique name for localStorage key
    }
  )
);

// Store with slices (combining stores)
const useTodoStore = create((set) => ({
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
  
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  
  setFilter: (filter) => set({ filter }),
  
  get filteredTodos() {
    const { todos, filter } = this.getState();
    if (filter === 'active') return todos.filter(t => !t.completed);
    if (filter === 'completed') return todos.filter(t => t.completed);
    return todos;
  }
}));

// Zustand with async actions and derived state
const useWeatherStore = create((set, get) => ({
  weatherData: null,
  unit: 'celsius',
  history: [],
  
  fetchWeather: async (city) => {
    const { unit, history } = get();
    // Simulated API call
    const mockWeather = {
      city,
      temperature: unit === 'celsius' ? 22 : 71,
      condition: 'Sunny',
      humidity: 65
    };
    
    set({ 
      weatherData: mockWeather,
      history: [...history, { city, timestamp: new Date(), data: mockWeather }]
    });
  },
  
  toggleUnit: () => {
    const { weatherData, unit } = get();
    set({ unit: unit === 'celsius' ? 'fahrenheit' : 'celsius' });
    
    // Convert existing data if needed
    if (weatherData) {
      const newTemp = unit === 'celsius' 
        ? (weatherData.temperature * 9/5) + 32 
        : (weatherData.temperature - 32) * 5/9;
      
      set({ 
        weatherData: { ...weatherData, temperature: Math.round(newTemp) }
      });
    }
  },
  
  clearHistory: () => set({ history: [] })
}));

// Components using Zustand stores
function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();
  
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function UserProfile({ userId }) {
  const { user, isLoading, error, fetchUser, updateUser, clearUser } = useUserStore();
  
  useEffect(() => {
    if (userId) fetchUser(userId);
  }, [userId, fetchUser]);
  
  if (isLoading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user selected</div>;
  
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <input
        value={user.name}
        onChange={(e) => updateUser({ name: e.target.value })}
        placeholder="Update name"
      />
      <button onClick={clearUser}>Clear User</button>
    </div>
  );
}

function ThemeSwitcher() {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  
  return (
    <div style={{ 
      padding: '10px', 
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      margin: '10px' 
    }}>
      <h3>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}

function TodoApp() {
  const [text, setText] = useState('');
  const { todos, filter, addTodo, toggleTodo, deleteTodo, setFilter } = useTodoStore();
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Todo List ({todos.filter(t => !t.completed).length} remaining)</h3>
      
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && text.trim()) {
              addTodo(text);
              setText('');
            }
          }}
          placeholder="Add todo..."
        />
      </div>
      
      <div style={{ margin: '10px 0', display: 'flex', gap: '10px' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              margin: '0 10px'
            }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WeatherApp() {
  const [city, setCity] = useState('');
  const { weatherData, unit, fetchWeather, toggleUnit, clearHistory } = useWeatherStore();
  
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Weather App</h3>
      
      <div>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={() => city && fetchWeather(city)}>Get Weather</button>
        <button onClick={toggleUnit}>Switch to {unit === 'celsius' ? 'Fahrenheit' : 'Celsius'}</button>
      </div>
      
      {weatherData && (
        <div style={{ marginTop: '10px' }}>
          <h4>{weatherData.city}</h4>
          <p>Temperature: {weatherData.temperature}°{unit === 'celsius' ? 'C' : 'F'}</p>
          <p>Condition: {weatherData.condition}</p>
          <p>Humidity: {weatherData.humidity}%</p>
        </div>
      )}
      
      <button onClick={clearHistory}>Clear History</button>
    </div>
  );
}

// Main app combining all stores
function ZustandDemo() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Zustand State Management Demo</h1>
      
      <Counter />
      
      <ThemeSwitcher />
      
      <UserProfile userId={1} />
      
      <TodoApp />
      
      <WeatherApp />
    </div>
  );
}`,
  lineByLine: [
    "Line 4-10: Basic Zustand store creation",
    "Line 13-33: Async store with API calls",
    "Line 36-48: Persistent store with localStorage",
    "Line 51-74: Todo store with derived filtering",
    "Line 77-108: Store with get() for cross-state access",
    "Line 111-142: Components using stores (no Provider needed!)",
    "Line 145-292: Multiple components using different stores",
    "No context providers needed - stores are self-contained"
  ],
  simpleMeaning: "Zustand provides simple, scalable state management with less code than Redux.",
  output: "Multiple independent stores working together without provider boilerplate",
  note: "Zustand is great for both simple and complex state management without overhead"
},

{
  name: "📊 React Query (TanStack Query)",
  description: "React Query handles server-state management with automatic caching, background refetching, and optimistic updates. It eliminates the need for manual loading/error states.",
  code: `import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: true,
    },
  },
});

// API service
const api = {
  getPosts: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  },
  
  getPost: async (id) => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`);
    return res.json();
  },
  
  createPost: async (newPost) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: { 'Content-Type': 'application/json' }
    });
    return res.json();
  },
  
  updatePost: async ({ id, ...data }) => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    return res.json();
  },
  
  deletePost: async (id) => {
    await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
      method: 'DELETE'
    });
    return id;
  }
};

// Posts list component with query
function PostsList() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  
  const { 
    data: posts, 
    isLoading, 
    error, 
    isFetching,
    refetch 
  } = useQuery({
    queryKey: ['posts'],
    queryFn: api.getPosts,
    // enabled: true, // can conditionally enable
    // select: (data) => data.slice(0, 10), // transform data
  });
  
  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Posts ({posts?.length})</h3>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      {isFetching && <small>Background refresh...</small>}
      
      <ul>
        {posts?.slice(0, 10).map(post => (
          <li key={post.id}>
            <button onClick={() => setSelectedPostId(post.id)}>
              {post.title}
            </button>
          </li>
        ))}
      </ul>
      
      {selectedPostId && <PostDetail id={selectedPostId} />}
    </div>
  );
}

// Single post with dependent queries
function PostDetail({ id }) {
  const { data: post, isLoading, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => api.getPost(id),
    enabled: !!id, // Only run when id exists
    staleTime: 1000 * 60, // 1 minute
  });
  
  const { data: comments } = useQuery({
    queryKey: ['comments', id],
    queryFn: async () => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}/comments\`);
      return res.json();
    },
    enabled: !!id,
  });
  
  if (isLoading) return <div>Loading post...</div>;
  if (isError) return <div>Error loading post</div>;
  
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      
      <h5>Comments ({comments?.length})</h5>
      <ul>
        {comments?.slice(0, 3).map(comment => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Mutation for creating posts
function CreatePostForm() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const mutation = useMutation({
    mutationFn: api.createPost,
    onSuccess: (newPost) => {
      // Invalidate and refetch posts query
      queryClient.invalidateQueries(['posts']);
      
      // Or update cache directly (optimistic update)
      queryClient.setQueryData(['posts'], (old) => [newPost, ...old]);
      
      setTitle('');
      setBody('');
    },
    onError: (error) => {
      console.error('Failed to create post:', error);
    }
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, body, userId: 1 });
  };
  
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Create New Post</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        required
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Creating...' : 'Create Post'}
      </button>
      {mutation.isError && <div style={{ color: 'red' }}>Error: {mutation.error?.message}</div>}
    </form>
  );
}

// Infinite scrolling with useInfiniteQuery
function InfinitePosts() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${pageParam}&_limit=10\`);
      return res.json();
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });
  
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error loading posts</div>;
  
  return (
    <div>
      <h3>Infinite Posts</h3>
      {data.pages.map((page, i) => (
        <div key={i}>
          {page.map(post => (
            <div key={post.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #eee' }}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ))}
      
      <button 
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage 
          ? 'Loading more...' 
          : hasNextPage 
            ? 'Load More' 
            : 'Nothing more to load'}
      </button>
    </div>
  );
}

// Parallel queries
function ParallelQueries() {
  const userQuery = useQuery({
    queryKey: ['user', 1],
    queryFn: () => fetch('/api/user/1').then(res => res.json())
  });
  
  const settingsQuery = useQuery({
    queryKey: ['settings'],
    queryFn: () => fetch('/api/settings').then(res => res.json())
  });
  
  const notificationsQuery = useQuery({
    queryKey: ['notifications'],
    queryFn: () => fetch('/api/notifications').then(res => res.json())
  });
  
  const isLoading = userQuery.isLoading || settingsQuery.isLoading || notificationsQuery.isLoading;
  const isError = userQuery.isError || settingsQuery.isError || notificationsQuery.isError;
  
  if (isLoading) return <div>Loading user data...</div>;
  if (isError) return <div>Error loading data</div>;
  
  // Use useQueries for variable number of queries
  const users = [1, 2, 3];
  const usersQueries = useQueries({
    queries: users.map(id => ({
      queryKey: ['user', id],
      queryFn: () => fetch(\`/api/users/\${id}\`).then(res => res.json()),
    }))
  });
  
  const isLoadingAny = usersQueries.some(query => query.isLoading);
  if (isLoadingAny) return <div>Loading users...</div>;
  
  return (
    <div>
      <h3>User Data</h3>
      <p>User: {userQuery.data?.name}</p>
      <p>Settings: {settingsQuery.data?.theme}</p>
      <p>Notifications: {notificationsQuery.data?.length}</p>
      
      <h3>Multiple Users</h3>
      {usersQueries.map((query, i) => (
        <div key={i}>{query.data?.name}</div>
      ))}
    </div>
  );
}

// Main app with provider
function ReactQueryDemo() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1>React Query Demo</h1>
        
        <CreatePostForm />
        
        <PostsList />
        
        <hr style={{ margin: '40px 0' }} />
        
        <InfinitePosts />
      </div>
      
      {/* Optional devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}`,
  lineByLine: [
    "Line 1-3: Import React Query essentials",
    "Line 6-13: Configure QueryClient with defaults",
    "Line 16-52: API service functions",
    "Line 55-96: useQuery for fetching and caching",
    "Line 99-129: Dependent queries with enabled option",
    "Line 132-165: useMutation with optimistic updates",
    "Line 182-228: useInfiniteQuery for pagination",
    "Line 231-273: Parallel and dynamic queries",
    "Line 276-287: Provider setup with devtools"
  ],
  simpleMeaning: "React Query handles all server-state problems automatically - caching, refetching, and synchronization.",
  output: "Posts load with caching, background refetch, mutations update cache, infinite scroll works smoothly",
  note: "React Query eliminates most useState/useEffect for data fetching"
},
// ==================== MORE ADVANCED REACT TOPICS ====================

{
  name: "🎭 React Spring Animations",
  description: "React Spring is a spring-physics based animation library that creates natural-looking animations with minimal code. It's perfect for enter/exit animations, gestures, and transitions.",
  code: `import { useSpring, animated, useTransition, useTrail, useChain, config } from 'react-spring';
import { useState, useRef } from 'react';

// Basic spring animation
function FadeInBox() {
  const [isVisible, setIsVisible] = useState(false);
  
  const fade = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    config: config.gentle,
    from: { opacity: 0, transform: 'translateY(-20px)' }
  });
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Fade
      </button>
      <animated.div style={{
        ...fade,
        padding: '20px',
        background: '#007bff',
        color: 'white',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        I fade and slide smoothly!
      </animated.div>
    </div>
  );
}

// Multiple staggered animations with useTrail
function StaggeredList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.wobbly,
    delay: 200
  });
  
  return (
    <div>
      {trail.map((props, index) => (
        <animated.div
          key={index}
          style={{
            ...props,
            padding: '10px',
            margin: '10px 0',
            background: '#28a745',
            color: 'white',
            borderRadius: '4px'
          }}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
}

// Enter/Exit animations with useTransition
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const transitions = useTransition(todos, {
    from: { opacity: 0, transform: 'translateX(-100px)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(100px)' },
    config: config.stiff,
    keys: item => item.id
  });
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        {transitions((style, item) => (
          <animated.div
            style={{
              ...style,
              padding: '10px',
              margin: '5px 0',
              background: '#ffc107',
              display: 'flex',
              justifyContent: 'space-between',
              borderRadius: '4px'
            }}
          >
            <span>{item.text}</span>
            <button onClick={() => removeTodo(item.id)}>×</button>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

// Chained animations with useChain
function ChainedAnimations() {
  const [show, setShow] = useState(false);
  
  const springRef = useRef();
  const springProps = useSpring({
    ref: springRef,
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: show ? 1 : 0, transform: show ? 'scale(1)' : 'scale(0.8)' },
    config: config.stiff
  });
  
  const trailRef = useRef();
  const trailProps = useTrail(3, {
    ref: trailRef,
    from: { opacity: 0, y: 20 },
    to: { opacity: show ? 1 : 0, y: show ? 0 : 20 },
    config: config.slow
  });
  
  useChain(show ? [springRef, trailRef] : [trailRef, springRef], [0, 0.5]);
  
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Animate Chain
      </button>
      
      <animated.div
        style={{
          ...springProps,
          marginTop: '20px',
          padding: '20px',
          background: '#dc3545',
          color: 'white',
          borderRadius: '8px'
        }}
      >
        Main Box
      </animated.div>
      
      {trailProps.map((props, index) => (
        <animated.div
          key={index}
          style={{
            ...props,
            margin: '10px 0',
            padding: '10px',
            background: '#17a2b8',
            color: 'white',
            borderRadius: '4px'
          }}
        >
          Staggered Item {index + 1}
        </animated.div>
      ))}
    </div>
  );
}

// Gesture animations (drag, rotate, scale)
function DraggableBox() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });
  
  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        width: '100px',
        height: '100px',
        background: '#6610f2',
        borderRadius: '8px',
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}
    >
      Drag me!
    </animated.div>
  );
}

// Scroll animations
function ScrollAnimation() {
  const [ref, springs] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.molasses,
    delay: 200
  }), []);
  
  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <div style={{ height: '200vh' }}>
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Scroll down to see animation</p>
        </div>
        
        <animated.div
          ref={ref}
          style={{
            ...springs,
            padding: '40px',
            background: '#e83e8c',
            color: 'white',
            borderRadius: '8px',
            margin: '20px'
          }}
        >
          I appear when scrolled into view!
        </animated.div>
      </div>
    </div>
  );
}`,
  lineByLine: [
    "Line 4-16: Basic spring with toggle animation",
    "Line 19-42: useTrail for staggered animations",
    "Line 45-85: useTransition for enter/exit animations",
    "Line 88-130: useChain for sequenced animations",
    "Line 133-152: useDrag for drag gestures",
    "Line 155-179: Scroll-triggered animations"
  ],
  simpleMeaning: "React Spring creates fluid, natural animations using spring physics instead of duration-based easing.",
  output: "Smooth toggle animation, staggered list items, animated todo list with enter/exit, draggable box",
  note: "React Spring works with React Native too and has better performance than CSS transitions"
},

{
  name: "📝 Formik Form Management",
  description: "Formik simplifies form handling in React with built-in validation, error messages, and form state management. It reduces boilerplate code for complex forms.",
  code: `import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

// Basic Formik form with Yup validation
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  age: Yup.number()
    .min(18, 'Must be at least 18 years old')
    .max(100, 'Must be 100 or less')
    .required('Age is required'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept terms and conditions')
});

function RegistrationForm() {
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      age: '',
      terms: false,
      newsletter: false
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form data:', values);
        setSubmitStatus('success');
        resetForm();
        setTimeout(() => setSubmitStatus(null), 3000);
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setSubmitting(false);
      }
    }
  });
  
  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Registration Form</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{
            width: '100%',
            padding: '8px',
            border: formik.touched.email && formik.errors.email ? '1px solid red' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.email}</div>
        ) : null}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          style={{
            width: '100%',
            padding: '8px',
            border: formik.touched.password && formik.errors.password ? '1px solid red' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.password}</div>
        ) : null}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          style={{
            width: '100%',
            padding: '8px',
            border: formik.touched.confirmPassword && formik.errors.confirmPassword ? '1px solid red' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.confirmPassword}</div>
        ) : null}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          style={{
            width: '100%',
            padding: '8px',
            border: formik.touched.age && formik.errors.age ? '1px solid red' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {formik.touched.age && formik.errors.age ? (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.age}</div>
        ) : null}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            name="terms"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.terms}
          />
          I accept the terms and conditions
        </label>
        {formik.touched.terms && formik.errors.terms ? (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.terms}</div>
        ) : null}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            name="newsletter"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.newsletter}
          />
          Subscribe to newsletter
        </label>
      </div>
      
      <button
        type="submit"
        disabled={formik.isSubmitting}
        style={{
          width: '100%',
          padding: '10px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: formik.isSubmitting ? 'not-allowed' : 'pointer'
        }}
      >
        {formik.isSubmitting ? 'Submitting...' : 'Register'}
      </button>
      
      {submitStatus === 'success' && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#d4edda', color: '#155724', borderRadius: '4px' }}>
          Registration successful!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>
          Registration failed. Please try again.
        </div>
      )}
      
      <div style={{ marginTop: '15px', fontSize: '12px', color: '#666' }}>
        <strong>Form State:</strong><br/>
        Dirty: {formik.dirty ? 'Yes' : 'No'}<br/>
        Valid: {formik.isValid ? 'Yes' : 'No'}<br/>
        Touched: {Object.keys(formik.touched).join(', ') || 'None'}
      </div>
    </form>
  );
}

// Form with custom validation and field arrays
function DynamicForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      skills: ['']
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = 'Required';
      if (!values.email) errors.email = 'Required';
      if (!/^\\S+@\\S+\\.\\S+$/.test(values.email)) errors.email = 'Invalid email';
      if (values.skills.some(skill => !skill.trim())) {
        errors.skills = 'All skills must be filled';
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log('Submitted:', values);
    }
  });
  
  const addSkill = () => {
    formik.setFieldValue('skills', [...formik.values.skills, '']);
  };
  
  const removeSkill = (index) => {
    const newSkills = formik.values.skills.filter((_, i) => i !== index);
    formik.setFieldValue('skills', newSkills);
  };
  
  const updateSkill = (index, value) => {
    const newSkills = [...formik.values.skills];
    newSkills[index] = value;
    formik.setFieldValue('skills', newSkills);
  };
  
  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h2>Dynamic Form</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Name</label>
        <input
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          style={{ width: '100%', padding: '8px' }}
        />
        {formik.errors.name && formik.touched.name && (
          <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.name}</div>
        )}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Email</label>
        <input
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{ width: '100%', padding: '8px' }}
        />
        {formik.errors.email && formik.touched.email && (
          <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>
        )}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Skills</label>
        {formik.values.skills.map((skill, index) => (
          <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <input
              value={skill}
              onChange={(e) => updateSkill(index, e.target.value)}
              style={{ flex: 1, padding: '8px' }}
              placeholder="Skill"
            />
            <button type="button" onClick={() => removeSkill(index)} style={{ padding: '8px 12px' }}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addSkill} style={{ padding: '8px 16px' }}>
          Add Skill
        </button>
        {formik.errors.skills && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.skills}</div>
        )}
      </div>
      
      <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
}

// Form with field-level validation
function FieldLevelValidation() {
  const formik = useFormik({
    initialValues: {
      username: '',
      website: '',
      bio: ''
    },
    onSubmit: values => {
      console.log(values);
    }
  });
  
  const validateField = (field, value) => {
    switch (field) {
      case 'username':
        if (value.length < 3) return 'Username must be at least 3 characters';
        if (value.length > 20) return 'Username must be less than 20 characters';
        if (!/^[a-zA-Z0-9]+$/.test(value)) return 'Username can only contain letters and numbers';
        return null;
      case 'website':
        if (value && !/^https?:\\/\\/.+/.test(value)) return 'Website must start with http:// or https://';
        return null;
      case 'bio':
        if (value.length > 200) return 'Bio cannot exceed 200 characters';
        return null;
      default:
        return null;
    }
  };
  
  const handleFieldChange = (field, value) => {
    formik.setFieldValue(field, value);
    const error = validateField(field, value);
    formik.setFieldError(field, error);
  };
  
  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Field-Level Validation</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Username *</label>
        <input
          value={formik.values.username}
          onChange={(e) => handleFieldChange('username', e.target.value)}
          placeholder="alice123"
          style={{ width: '100%', padding: '8px' }}
        />
        {formik.errors.username && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.username}</div>
        )}
        <small>3-20 characters, letters and numbers only</small>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Website</label>
        <input
          value={formik.values.website}
          onChange={(e) => handleFieldChange('website', e.target.value)}
          placeholder="https://example.com"
          style={{ width: '100%', padding: '8px' }}
        />
        {formik.errors.website && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.website}</div>
        )}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Bio</label>
        <textarea
          value={formik.values.bio}
          onChange={(e) => handleFieldChange('bio', e.target.value)}
          placeholder="Tell us about yourself..."
          rows={4}
          style={{ width: '100%', padding: '8px', resize: 'vertical' }}
        />
        {formik.errors.bio && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.bio}</div>
        )}
        <small>{formik.values.bio.length}/200 characters</small>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}`,
  lineByLine: [
    "Line 1-4: Import Formik and Yup",
    "Line 7-20: Yup validation schema",
    "Line 23-77: useFormik hook with initial values and validation",
    "Line 79-123: Form inputs with error display",
    "Line 125-152: Submit handling with loading state",
    "Line 219-307: Dynamic form fields with array",
    "Line 310-386: Custom field-level validation"
  ],
  simpleMeaning: "Formik manages form state, validation, and submission, saving you from writing repetitive form handling code.",
  output: "Complete registration form with validation, error messages, submit status, and form state tracking",
  note: "Formik works great with Yup for schema validation, but supports custom validation too"
},

{
  name: "🌍 i18n (Internationalization) with react-i18next",
  description: "React i18next provides multi-language support for React apps with lazy loading translations, interpolation, and pluralization.",
  code: `// i18n.js - Configuration file
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our app",
      description: "This is a multi-language React application",
      buttons: {
        save: "Save",
        cancel: "Cancel",
        delete: "Delete",
        submit: "Submit"
      },
      messages: {
        success: "Operation completed successfully!",
        error: "An error occurred. Please try again.",
        loading: "Loading...",
        noData: "No data available"
      },
      navigation: {
        home: "Home",
        about: "About",
        contact: "Contact",
        settings: "Settings"
      },
      user: {
        greeting: "Hello, {{name}}!",
        profile: "Profile",
        logout: "Logout",
        login: "Login"
      },
      pluralization: {
        item: "{{count}} item",
        item_plural: "{{count}} items",
        notification: "You have {{count}} new notification",
        notification_plural: "You have {{count}} new notifications"
      },
      dates: {
        today: "Today",
        yesterday: "Yesterday",
        format: "{{date, datetime}}"
      }
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a nuestra aplicación",
      description: "Esta es una aplicación React multilingüe",
      buttons: {
        save: "Guardar",
        cancel: "Cancelar",
        delete: "Eliminar",
        submit: "Enviar"
      },
      messages: {
        success: "¡Operación completada con éxito!",
        error: "Ocurrió un error. Por favor, inténtelo de nuevo.",
        loading: "Cargando...",
        noData: "No hay datos disponibles"
      },
      navigation: {
        home: "Inicio",
        about: "Acerca de",
        contact: "Contacto",
        settings: "Configuración"
      },
      user: {
        greeting: "¡Hola, {{name}}!",
        profile: "Perfil",
        logout: "Cerrar sesión",
        login: "Iniciar sesión"
      },
      pluralization: {
        item: "{{count}} artículo",
        item_plural: "{{count}} artículos",
        notification: "Tienes {{count}} nueva notificación",
        notification_plural: "Tienes {{count}} nuevas notificaciones"
      },
      dates: {
        today: "Hoy",
        yesterday: "Ayer",
        format: "{{date, datetime}}"
      }
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue dans notre application",
      description: "Ceci est une application React multilingue",
      buttons: {
        save: "Enregistrer",
        cancel: "Annuler",
        delete: "Supprimer",
        submit: "Soumettre"
      },
      messages: {
        success: "Opération réussie!",
        error: "Une erreur s'est produite. Veuillez réessayer.",
        loading: "Chargement...",
        noData: "Aucune donnée disponible"
      },
      navigation: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        settings: "Paramètres"
      },
      user: {
        greeting: "Bonjour, {{name}}!",
        profile: "Profil",
        logout: "Déconnexion",
        login: "Connexion"
      },
      pluralization: {
        item: "{{count}} article",
        item_plural: "{{count}} articles",
        notification: "Vous avez {{count}} nouvelle notification",
        notification_plural: "Vous avez {{count}} nouvelles notifications"
      },
      dates: {
        today: "Aujourd'hui",
        yesterday: "Hier",
        format: "{{date, datetime}}"
      }
    }
  },
  de: {
    translation: {
      welcome: "Willkommen in unserer App",
      description: "Dies ist eine mehrsprachige React-Anwendung",
      buttons: {
        save: "Speichern",
        cancel: "Abbrechen",
        delete: "Löschen",
        submit: "Absenden"
      },
      messages: {
        success: "Vorgang erfolgreich abgeschlossen!",
        error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        loading: "Laden...",
        noData: "Keine Daten verfügbar"
      },
      navigation: {
        home: "Startseite",
        about: "Über uns",
        contact: "Kontakt",
        settings: "Einstellungen"
      },
      user: {
        greeting: "Hallo, {{name}}!",
        profile: "Profil",
        logout: "Abmelden",
        login: "Anmelden"
      },
      pluralization: {
        item: "{{count}} Artikel",
        item_plural: "{{count}} Artikel",
        notification: "Sie haben {{count}} neue Benachrichtigung",
        notification_plural: "Sie haben {{count}} neue Benachrichtigungen"
      },
      dates: {
        today: "Heute",
        yesterday: "Gestern",
        format: "{{date, datetime}}"
      }
    }
  }
};

// Initialize i18n
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;

// Language Switcher Component
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language);
  
  return (
    <div style={{ position: 'relative' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '8px 12px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span>{currentLanguage?.flag}</span>
        <span>{currentLanguage?.name}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          marginTop: '5px',
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 1000
        }}>
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                width: '100%',
                border: 'none',
                background: i18n.language === lang.code ? '#e3f2fd' : 'white',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Main App Component
function InternationalizedApp() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('John');
  const [items, setItems] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const addItem = () => {
    setItems([...items, { id: Date.now(), name: "New Item" }]);
  };
  
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  return (
    <div style={{ 
      direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>{t('welcome')}</h1>
        <LanguageSwitcher />
      </div>
      
      <p>{t('description')}</p>
      
      {/* User greeting with interpolation */}
      <div style={{ margin: '20px 0', padding: '10px', background: '#f0f0f0', borderRadius: '4px' }}>
        <h3>{t('user.greeting', { name: userName })}</h3>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder={t('user.profile')}
          style={{ padding: '5px', marginRight: '10px' }}
        />
      </div>
      
      {/* Navigation example */}
      <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <a href="#">{t('navigation.home')}</a>
        <a href="#">{t('navigation.about')}</a>
        <a href="#">{t('navigation.contact')}</a>
        <a href="#">{t('navigation.settings')}</a>
      </nav>
      
      {/* Buttons example */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Buttons</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button>{t('buttons.save')}</button>
          <button>{t('buttons.cancel')}</button>
          <button style={{ background: '#dc3545', color: 'white' }}>{t('buttons.delete')}</button>
          <button style={{ background: '#28a745', color: 'white' }}>{t('buttons.submit')}</button>
        </div>
      </div>
      
      {/* Pluralization example */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Pluralization</h3>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ marginRight: '10px', padding: '5px 10px' }}
        >
          Add
        </button>
        <button 
          onClick={() => setCount(Math.max(0, count - 1))}
          style={{ padding: '5px 10px' }}
        >
          Remove
        </button>
        <p>{t('pluralization.item', { count })}</p>
        <p>{t('pluralization.notification', { count: count * 2 })}</p>
      </div>
      
      {/* Dynamic list example */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Dynamic List</h3>
        <button onClick={addItem} style={{ marginBottom: '10px', padding: '5px 10px' }}>
          {t('buttons.save')} Item
        </button>
        {items.length === 0 ? (
          <p>{t('messages.noData')}</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id} style={{ marginBottom: '5px' }}>
                {item.name}
                <button 
                  onClick={() => removeItem(item.id)}
                  style={{ marginLeft: '10px', padding: '2px 8px', background: '#dc3545', color: 'white' }}
                >
                  {t('buttons.delete')}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Messages example */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Messages</h3>
        <div style={{ padding: '10px', background: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '10px' }}>
          ✅ {t('messages.success')}
        </div>
        <div style={{ padding: '10px', background: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>
          ❌ {t('messages.error')}
        </div>
        <div style={{ marginTop: '10px', padding: '10px', background: '#e2e3e5', borderRadius: '4px' }}>
          ⏳ {t('messages.loading')}
        </div>
      </div>
      
      {/* Date formatting example */}
      <div>
        <h3>Date Formatting</h3>
        <p>{t('dates.today')}: {t('dates.format', { date: currentDate })}</p>
        <button onClick={() => setCurrentDate(new Date())}>
          Update Date
        </button>
      </div>
    </div>
  );
}`,
  lineByLine: [
    "Line 1-6: Import i18n dependencies",
    "Line 9-140: Translation resources in multiple languages",
    "Line 143-152: i18n initialization configuration",
    "Line 155-212: Language switcher component",
    "Line 215-294: Main app using translations",
    "Line 226: t('user.greeting', { name: userName }) - Interpolation",
    "Line 261-264: Pluralization handling",
    "Line 286: Date formatting with i18n"
  ],
  simpleMeaning: "i18n helps you create multilingual React apps that automatically detect user's language preferences.",
  output: "Complete multilingual app with language switcher, pluralization, date formatting, and dynamic content translation",
  note: "i18n supports lazy loading translations for better performance"
},

{
  name: "📊 Recharts Data Visualization",
  description: "Recharts is a composable chart library built on D3 components. It's easy to use and customizable for various data visualization needs.",
  code: `import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ComposedChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, RadialBarChart, RadialBar
} from 'recharts';
import { useState } from 'react';

// Sample data
const salesData = [
  { month: 'Jan', sales: 4000, profit: 2400, customers: 300 },
  { month: 'Feb', sales: 3000, profit: 1398, customers: 280 },
  { month: 'Mar', sales: 5000, profit: 3800, customers: 350 },
  { month: 'Apr', sales: 2780, profit: 2908, customers: 320 },
  { month: 'May', sales: 1890, profit: 1800, customers: 250 },
  { month: 'Jun', sales: 2390, profit: 2200, customers: 290 },
  { month: 'Jul', sales: 3490, profit: 3000, customers: 340 }
];

const pieData = [
  { name: 'Electronics', value: 400, color: '#0088FE' },
  { name: 'Clothing', value: 300, color: '#00C49F' },
  { name: 'Books', value: 200, color: '#FFBB28' },
  { name: 'Home', value: 150, color: '#FF8042' }
];

const radarData = [
  { subject: 'Performance', A: 120, B: 110, fullMark: 150 },
  { subject: 'Quality', A: 98, B: 130, fullMark: 150 },
  { subject: 'Support', A: 86, B: 130, fullMark: 150 },
  { subject: 'Features', A: 99, B: 100, fullMark: 150 },
  { subject: 'Price', A: 85, B: 90, fullMark: 150 }
];

// Line Chart Component
function SalesLineChart() {
  const [showSales, setShowSales] = useState(true);
  const [showProfit, setShowProfit] = useState(true);
  
  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>Monthly Sales & Profit</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '15px' }}>
          <input
            type="checkbox"
            checked={showSales}
            onChange={() => setShowSales(!showSales)}
          /> Sales
        </label>
        <label>
          <input
            type="checkbox"
            checked={showProfit}
            onChange={() => setShowProfit(!showProfit)}
          /> Profit
        </label>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          {showSales && (
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
          )}
          {showProfit && (
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="profit"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Bar Chart Component
function BarChartComponent() {
  const [chartData, setChartData] = useState(salesData);
  
  const sortData = () => {
    const sorted = [...chartData].sort((a, b) => b.sales - a.sales);
    setChartData(sorted);
  };
  
  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '20px' }}>
      <h3>Sales by Month</h3>
      
      <button onClick={sortData} style={{ marginBottom: '10px', padding: '5px 10px' }}>
        Sort by Sales
      </button>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8">
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.sales > 4000 ? '#ff7300' : '#8884d8'} />
            ))}
          </Bar>
          <Bar dataKey="profit" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Pie Chart with Donut
function DonutChart() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };
  
  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '20px' }}>
      <h3>Product Categories</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            onMouseEnter={onPieEnter}
            label={({ name, percent }) => \`\${name}: \${(percent * 100).toFixed(0)}%\`}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.color}
                stroke={activeIndex === index ? '#000' : 'none'}
                strokeWidth={activeIndex === index ? 3 : 0}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      
      {activeIndex !== null && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <strong>{pieData[activeIndex].name}</strong>
          : {pieData[activeIndex].value} units
        </div>
      )}
    </div>
  );
}

// Area Chart with Gradient
function AreaChartComponent() {
  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '20px' }}>
      <h3>Customer Growth</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={salesData}>
          <defs>
            <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="customers"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorCustomers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// Radar Chart
function RadarChartComponent() {
  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '20px' }}>
      <h3>Product Comparison</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Product A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Product B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Composed Chart (Multiple chart types)
function ComposedChartComponent() {
  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '20px' }}>
      <h3>Sales Analysis (Combined View)</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={salesData}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="profit" stroke="#ff7300" />
          <Scatter dataKey="customers" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

// Radial Bar Chart (Gauge style)
function RadialBarComponent() {
  const data = [
    { name: 'Completion', value: 75, fill: '#8884d8' }
  ];
  
  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '20px' }}>
      <h3>Project Completion</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="80%"
          barSize={20}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"
            label={{ position: 'insideStart', fill: '#fff' }}
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{ top: '50%', right: 0, transform: 'translateY(-50%)' }}
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>75%</div>
        <div>Project Progress</div>
      </div>
    </div>
  );
}

// Realtime Updating Chart
function RealtimeChart() {
  const [data, setData] = useState([
    { time: 0, value: 0 }
  ]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newTime = prev.length;
        const newValue = Math.random() * 100;
        const newData = [...prev, { time: newTime, value: newValue }];
        if (newData.length > 20) newData.shift();
        return newData;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '20px' }}>
      <h3>Realtime Data Stream</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ff7300"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Interactive Dashboard
function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState('sales');
  
  const metrics = {
    sales: { data: salesData, key: 'sales', color: '#8884d8', title: 'Sales Performance' },
    profit: { data: salesData, key: 'profit', color: '#82ca9d', title: 'Profit Analysis' },
    customers: { data: salesData, key: 'customers', color: '#ffc658', title: 'Customer Growth' }
  };
  
  const currentMetric = metrics[selectedMetric];
  
  return (
    <div>
      <h2>Analytics Dashboard</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {Object.keys(metrics).map(metric => (
          <button
            key={metric}
            onClick={() => setSelectedMetric(metric)}
            style={{
              padding: '10px 20px',
              background: selectedMetric === metric ? '#007bff' : '#f0f0f0',
              color: selectedMetric === metric ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {metric.charAt(0).toUpperCase() + metric.slice(1)}
          </button>
        ))}
      </div>
      
      <div style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3>{currentMetric.title}</h3>
        
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={currentMetric.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={currentMetric.key} fill={currentMetric.color}>
              {currentMetric.data.map((entry, index) => (
                <Cell key={index} fill={entry[currentMetric.key] > 3500 ? '#ff7300' : currentMetric.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <strong>Average {currentMetric.key}:</strong>{' '}
          {(currentMetric.data.reduce((sum, item) => sum + item[currentMetric.key], 0) / currentMetric.data.length).toFixed(0)}
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
        <SalesLineChart />
        <DonutChart />
        <AreaChartComponent />
        <RadarChartComponent />
      </div>
      
      <RealtimeChart />
    </div>
  );
}`,
  lineByLine: [
    "Line 1-15: Import Recharts components",
    "Line 18-59: Line chart with toggle lines",
    "Line 62-100: Bar chart with conditional coloring",
    "Line 103-154: Donut pie chart with hover effects",
    "Line 157-180: Area chart with gradient",
    "Line 183-202: Radar chart for comparison",
    "Line 205-221: Composed chart (bar + line + scatter)",
    "Line 224-258: Radial bar gauge chart",
    "Line 261-286: Realtime updating chart",
    "Line 289-361: Interactive dashboard"
  ],
  simpleMeaning: "Recharts provides beautiful, interactive charts that are easy to customize and responsive.",
  output: "Complete dashboard with line, bar, pie, area, radar, and realtime charts with interactivity",
  note: "All Recharts components are responsive and support animations out of the box"
},

{
  name: "📱 React Virtualized (Large Lists)",
  description: "React Virtualized renders only visible items in large lists, dramatically improving performance for big datasets (thousands of rows).",
  code: `import { 
  List, 
  Grid, 
  Table, 
  Column, 
  AutoSizer,
  WindowScroller,
  InfiniteLoader,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized';
import 'react-virtualized/styles.css';

// Basic Virtualized List
function VirtualizedList() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // Generate 10,000 items
    const generatedItems = Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: \`Item \${i}\`,
      description: \`This is description for item \${i}\`,
      value: Math.floor(Math.random() * 1000)
    }));
    setItems(generatedItems);
  }, []);
  
  // Row renderer
  const rowRenderer = ({ index, key, style }) => {
    const item = items[index];
    
    return (
      <div key={key} style={style}>
        <div style={{
          padding: '10px',
          borderBottom: '1px solid #eee',
          background: index % 2 === 0 ? '#f9f9f9' : 'white'
        }}>
          <strong>{item.name}</strong>
          <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#666' }}>
            {item.description} - Value: {item.value}
          </p>
        </div>
      </div>
    );
  };
  
  return (
    <div style={{ height: '500px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            rowCount={items.length}
            rowHeight={80}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
}

// Table with Virtualization
function VirtualizedTable() {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState('id');
  const [sortDirection, setSortDirection] = useState('ASC');
  
  useEffect(() => {
    const generatedData = Array.from({ length: 5000 }, (_, i) => ({
      id: i,
      name: \`Product \${i}\`,
      category: ['Electronics', 'Clothing', 'Books', 'Home'][i % 4],
      price: Math.floor(Math.random() * 1000) + 10,
      stock: Math.floor(Math.random() * 500),
      rating: (Math.random() * 5).toFixed(1)
    }));
    setData(generatedData);
  }, []);
  
  const sortData = (dataKey) => {
    const newDirection = sortBy === dataKey && sortDirection === 'ASC' ? 'DESC' : 'ASC';
    setSortBy(dataKey);
    setSortDirection(newDirection);
    
    const sorted = [...data].sort((a, b) => {
      if (a[dataKey] < b[dataKey]) return newDirection === 'ASC' ? -1 : 1;
      if (a[dataKey] > b[dataKey]) return newDirection === 'ASC' ? 1 : -1;
      return 0;
    });
    setData(sorted);
  };
  
  return (
    <div style={{ height: '600px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            width={width}
            height={height}
            headerHeight={50}
            rowHeight={40}
            rowCount={data.length}
            rowGetter={({ index }) => data[index]}
            sort={({ sortBy, sortDirection }) => {
              sortData(sortBy);
            }}
          >
            <Column
              label="ID"
              dataKey="id"
              width={80}
              sortable={true}
              className="virtualized-column"
            />
            <Column
              label="Product Name"
              dataKey="name"
              width={250}
              sortable={true}
            />
            <Column
              label="Category"
              dataKey="category"
              width={150}
              sortable={true}
            />
            <Column
              label="Price ($)"
              dataKey="price"
              width={120}
              sortable={true}
              cellRenderer={({ cellData }) => \`$\${cellData}\`}
            />
            <Column
              label="Stock"
              dataKey="stock"
              width={100}
              sortable={true}
              cellRenderer={({ cellData }) => (
                <span style={{ color: cellData < 50 ? 'red' : 'green' }}>
                  {cellData}
                </span>
              )}
            />
            <Column
              label="Rating"
              dataKey="rating"
              width={100}
              sortable={true}
              cellRenderer={({ cellData }) => '⭐'.repeat(Math.floor(cellData))}
            />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
}

// Grid (2D Virtualization)
function VirtualizedGrid() {
  const cellData = Array.from({ length: 1000 }, (_, row) =>
    Array.from({ length: 50 }, (_, col) => \`Cell \${row},\${col}\`)
  );
  
  const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    const value = cellData[rowIndex][columnIndex];
    
    return (
      <div key={key} style={style}>
        <div style={{
          padding: '8px',
          border: '1px solid #eee',
          background: (rowIndex + columnIndex) % 2 === 0 ? '#f9f9f9' : 'white',
          fontSize: '12px'
        }}>
          {value}
        </div>
      </div>
    );
  };
  
  return (
    <div style={{ height: '500px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            cellRenderer={cellRenderer}
            columnCount={50}
            columnWidth={100}
            height={height}
            rowCount={1000}
            rowHeight={40}
            width={width}
          />
        )}
      </AutoSizer>
    </div>
  );
}

// Infinite Loading List
function InfiniteLoadingList() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  
  const loadMoreItems = async (startIndex, stopIndex) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newItems = Array.from({ length: stopIndex - startIndex + 1 }, (_, i) => ({
      id: startIndex + i,
      name: \`Item \${startIndex + i}\`,
      content: \`Content for item \${startIndex + i}. This is dynamically loaded.\`
    }));
    
    setItems(prev => {
      const updated = [...prev];
      newItems.forEach(item => {
        updated[item.id] = item;
      });
      return updated;
    });
    
    setLoadedCount(items.length);
    if (items.length >= 5000) setHasMore(false);
  };
  
  const isRowLoaded = ({ index }) => !!items[index];
  
  const rowRenderer = ({ index, key, style }) => {
    const item = items[index];
    
    if (!item) {
      return (
        <div key={key} style={style}>
          <div style={{ padding: '10px', textAlign: 'center' }}>
            Loading...
          </div>
        </div>
      );
    }
    
    return (
      <div key={key} style={style}>
        <div style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <h4>{item.name}</h4>
          <p style={{ margin: 0 }}>{item.content}</p>
        </div>
      </div>
    );
  };
  
  return (
    <div style={{ height: '500px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreItems}
        rowCount={5000}
        threshold={10}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ height, width }) => (
              <List
                ref={registerChild}
                width={width}
                height={height}
                rowCount={5000}
                rowHeight={100}
                rowRenderer={rowRenderer}
                onRowsRendered={onRowsRendered}
              />
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
}

// Variable Height List (dynamic row heights)
function VariableHeightList() {
  const [items, setItems] = useState([]);
  
  // Create cache for measuring cell heights
  const cache = new CellMeasurerCache({
    defaultHeight: 50,
    fixedWidth: true
  });
  
  useEffect(() => {
    const generatedItems = Array.from({ length: 500 }, (_, i) => ({
      id: i,
      title: \`Section \${i}\`,
      content: \`This is content for section \${i}. \${'Lorem ipsum '.repeat(Math.floor(Math.random() * 5) + 1)}\`
    }));
    setItems(generatedItems);
  }, []);
  
  const rowRenderer = ({ index, key, parent, style }) => {
    const item = items[index];
    
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        {({ measure, registerChild }) => (
          <div ref={registerChild} style={style}>
            <div style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{item.title}</h3>
              <p style={{ margin: 0 }}>{item.content}</p>
            </div>
          </div>
        )}
      </CellMeasurer>
    );
  };
  
  return (
    <div style={{ height: '500px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            rowCount={items.length}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
            deferredMeasurementCache={cache}
          />
        )}
      </AutoSizer>
    </div>
  );
}

// Window Scroller (scrolls with page)
function WindowScrollerExample() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const generatedItems = Array.from({ length: 2000 }, (_, i) => ({
      id: i,
      title: \`Post \${i}\`,
      content: \`Content for post \${i}. \${'Text '.repeat(20)}\`
    }));
    setItems(generatedItems);
  }, []);
  
  const rowRenderer = ({ index, key, style }) => {
    const item = items[index];
    
    return (
      <div key={key} style={style}>
        <div style={{
          padding: '20px',
          margin: '10px',
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      </div>
    );
  };
  
  return (
    <WindowScroller>
      {({ height, isScrolling, onChildScroll, scrollTop }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              autoHeight
              width={width}
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
              rowCount={items.length}
              rowHeight={150}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
}

// Performance Comparison Demo
function PerformanceDemo() {
  const [useVirtualization, setUseVirtualization] = useState(true);
  const [renderTime, setRenderTime] = useState(null);
  
  const RegularList = () => {
    const [items] = useState(() => 
      Array.from({ length: 10000 }, (_, i) => \`Item \${i}\`)
    );
    
    const startTime = performance.now();
    const result = (
      <div style={{ height: '500px', overflow: 'auto' }}>
        {items.map(item => (
          <div key={item} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
            {item}
          </div>
        ))}
      </div>
    );
    const endTime = performance.now();
    setRenderTime((endTime - startTime).toFixed(2));
    
    return result;
  };
  
  const VirtualizedListDemo = () => {
    const [items] = useState(() => 
      Array.from({ length: 10000 }, (_, i) => \`Item \${i}\`)
    );
    
    const startTime = performance.now();
    const rowRenderer = ({ index, key, style }) => (
      <div key={key} style={{ ...style, padding: '10px', borderBottom: '1px solid #eee' }}>
        {items[index]}
      </div>
    );
    const endTime = performance.now();
    setRenderTime((endTime - startTime).toFixed(2));
    
    return (
      <div style={{ height: '500px' }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={items.length}
              rowHeight={50}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </div>
    );
  };
  
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setUseVirtualization(!useVirtualization)}
          style={{ padding: '10px 20px', marginRight: '10px' }}
        >
          Switch to {useVirtualization ? 'Regular' : 'Virtualized'} List
        </button>
        <span>Render Time: {renderTime}ms</span>
      </div>
      
      <div>
        <h3>{useVirtualization ? 'Virtualized' : 'Regular'} List (10,000 items)</h3>
        {useVirtualization ? <VirtualizedListDemo /> : <RegularList />}
      </div>
      
      <div style={{ marginTop: '20px', padding: '10px', background: '#e3f2fd', borderRadius: '4px' }}>
        <strong>Performance Tip:</strong> Virtualized lists only render visible items (typically 10-20),
        while regular lists render all 10,000 items at once. This saves memory and improves scroll performance.
      </div>
    </div>
  );
}`,
  lineByLine: [
    "Line 1-9: Import React Virtualized components",
    "Line 12-57: Basic virtualized list with 10,000 items",
    "Line 60-150: Virtualized table with sorting",
    "Line 153-186: 2D grid virtualization",
    "Line 189-256: Infinite loader for paginated data",
    "Line 259-304: Variable height rows (dynamic content)",
    "Line 307-350: Window scroller for page-level scrolling",
    "Line 353-403: Performance comparison demo"
  ],
  simpleMeaning: "React Virtualized makes huge lists scroll smoothly by rendering only what's visible.",
  output: "10,000 items render instantly and scroll smoothly with constant 60fps performance",
  note: "For extremely large datasets (100k+), consider also using react-window which is lighter weight"
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
      },
      {
          name: "📌 JSX",
          description: "JSX allows you to write HTML-like syntax in JavaScript. It gets transformed into React.createElement calls, making UI code more readable and intuitive.",
          code: `function Welcome() {
  return <h1>Hello, {name}!</h1>;
}

// JSX vs plain JS:
// JSX: <div className="box">Hello</div>
// JS: React.createElement('div', { className: 'box' }, 'Hello')`,
          lineByLine: [
            "Line 1: function Welcome() { - Define a React component",
            "Line 2: return <h1>Hello, {name}!</h1>; - JSX syntax with JavaScript expression in curly braces",
            "Line 4: // JSX vs plain JS: - Comment showing the difference"
          ],
          simpleMeaning: "JSX lets you write HTML inside JavaScript files for React components.",
          output: "Renders: Hello, John! (if name='John')",
          note: "JSX requires 'className' instead of 'class' and 'htmlFor' instead of 'for'"
        },
        {
          name: "⚛️ Components",
          description: "React components are reusable building blocks. They can be functional or class-based, accepting props and returning JSX.",
          code: `// Functional Component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Welcome, {this.props.user}!</h1>;
  }
}

// Usage
<Greeting name="Alice" />
<Welcome user="Bob" />`,
          lineByLine: [
            "Line 2: function Greeting({ name }) { - Destructuring props",
            "Line 3: return <h1>Hello, {name}!</h1>; - Return JSX",
            "Line 6: class Welcome extends React.Component { - Class component syntax",
            "Line 7: render() { - Required render method for class components"
          ],
          simpleMeaning: "Components are like custom HTML elements that can be reused throughout your app.",
          output: "Hello, Alice! Welcome, Bob!",
          note: "Functional components are now preferred over class components"
        },
        {
          name: "📦 Props",
          description: "Props (properties) pass data from parent to child components. They are read-only and help make components dynamic and reusable.",
          code: `function UserCard({ name, age, isAdmin }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      {isAdmin && <span>👑 Admin</span>}
    </div>
  );
}

// Parent component
function App() {
  return (
    <div>
      <UserCard name="John" age={25} isAdmin={true} />
      <UserCard name="Jane" age={30} isAdmin={false} />
    </div>
  );
}`,
          lineByLine: [
            "Line 1: function UserCard({ name, age, isAdmin }) { - Destructure props",
            "Line 4: <h3>{name}</h3> - Display prop value",
            "Line 6: {isAdmin && <span>👑 Admin</span>} - Conditional rendering",
            "Line 13-14: <UserCard name='John' age={25} /> - Passing props"
          ],
          simpleMeaning: "Props are like function arguments that pass data into components.",
          output: "John (with admin badge if true)\nJane (no admin badge)",
          note: "Never modify props directly - they are read-only!"
        },
        {
          name: "💾 State",
          description: "State is data that changes over time within a component. Unlike props, state is managed internally and can be updated using setState or useState hook.",
          code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`,
          lineByLine: [
            "Line 1: import { useState } from 'react' - Import useState hook",
            "Line 3: const [count, setCount] = useState(0) - Declare state variable",
            "Line 7: <p>You clicked {count} times</p> - Display current state",
            "Line 8: onClick={() => setCount(count + 1)} - Update state",
            "Line 11: onClick={() => setCount(0)} - Reset state to 0"
          ],
          simpleMeaning: "State keeps track of changing data in your component, like a counter or form input.",
          output: "You clicked 3 times (after clicking 3 times)",
          note: "State updates are asynchronous and may be batched"
        },
        {
          name: "🪝 useEffect Hook",
          description: "useEffect handles side effects like data fetching, subscriptions, or manually changing the DOM. It runs after the component renders.",
          code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // Re-run when userId changes
  
  if (loading) return <div>Loading...</div>;
  return <div>Welcome, {user.name}!</div>;
}`,
          lineByLine: [
            "Line 1: import { useState, useEffect } - Import hooks",
            "Line 6: useEffect(() => { - Effect runs after render",
            "Line 7-12: fetch API data and update state",
            "Line 13: }, [userId]) - Dependency array, effect re-runs when userId changes",
            "Line 15: if (loading) return <div>Loading...</div> - Loading state"
          ],
          simpleMeaning: "useEffect runs code after rendering, perfect for API calls and subscriptions.",
          output: "Loading... then Welcome, John!",
          note: "Empty dependency array [] means effect runs only once after initial render"
        },
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
        },
        {
          name: "🎯 Event Handling",
          description: "React events are named using camelCase and you pass functions as event handlers. Synthetic events wrap browser events for cross-b compatibility.",
          code: `function Form() {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted: ' + inputValue);
  };
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}`,
          lineByLine: [
            "Line 4: const handleSubmit = (e) => { - Event handler function",
            "Line 5: e.preventDefault(); - Prevent default form submission",
            "Line 9: const handleChange = (e) => { - Change handler",
            "Line 10: setInputValue(e.target.value) - Update state with input value",
            "Line 16: onSubmit={handleSubmit} - Attach event handler"
          ],
          simpleMeaning: "Event handlers let you respond to user actions like clicks, typing, and form submissions.",
          output: "Typing shows value in real-time; Submit shows alert with entered text",
          note: "Return false doesn't prevent default behavior - use e.preventDefault() instead"
        },
        {
          name: "🔗 Conditional Rendering",
          description: "React allows rendering different UI based on conditions using if statements, ternary operators, or logical && operators.",
          code: `function UserStatus({ isLoggedIn, username }) {
  // Method 1: if statement
  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }
  
  // Method 2: ternary operator
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h3>Welcome back, {username}!</h3>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <h3>Please log in</h3>
          <button>Login</button>
        </div>
      )}
      {/* Method 3: && operator */}
      {isLoggedIn && <p>You have 3 notifications</p>}
    </div>
  );
}`,
          lineByLine: [
            "Line 3: if (isLoggedIn === null) - Check loading state",
            "Line 8: {isLoggedIn ? ( - Ternary operator",
            "Line 9-12: Show welcome UI if logged in",
            "Line 13-16: Show login UI if not logged in",
            "Line 19: {isLoggedIn && <p>...</p>} - Logical AND operator"
          ],
          simpleMeaning: "Conditional rendering shows different content based on conditions like login status.",
          output: "Shows welcome message if logged in, login prompt if not, loading if checking status",
          note: "Don't use && operator with numbers 0 - it will render 0 on screen"
        },
        {
          name: "📝 Lists and Keys",
          description: "When rendering lists, each item needs a unique 'key' prop. Keys help React identify which items changed, added, or removed for efficient re-rendering.",
          code: `function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Usage
const todos = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Build a project', completed: false }
];`,
          lineByLine: [
            "Line 3: {todos.map(todo => ( - Iterate over array",
            "Line 4: <li key={todo.id}> - Unique key for each item",
            "Line 5: <input type='checkbox' /> - Checkbox input",
            "Line 6: style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} - Conditional styling",
            "Line 7: {todo.text} - Display todo text"
          ],
          simpleMeaning: "Keys uniquely identify each item in a list for better performance.",
          output: "Checkbox with 'Learn React' (checked, strikethrough) and 'Build a project' (unchecked)",
          note: "Don't use array index as key if list order can change - use unique IDs instead"
        },
        {
          name: "🌐 API Calls with Fetch",
          description: "React components can fetch data from APIs using fetch or axios. useEffect is commonly used to trigger API calls when components mount.",
          code: `import { useState, useEffect } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw Error('Network error');
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message));
  }, []);
  
  if (error) return <div>Error: {error}</div>;
  if (users.length === 0) return <div>Loading...</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
}`,
          lineByLine: [
            "Line 6: useEffect(() => { - Effect for API call",
            "Line 7: fetch('https://...') - Make API request",
            "Line 8-9: Check response and parse JSON",
            "Line 11: .then(data => setUsers(data)) - Update state with data",
            "Line 12: .catch(err => setError(err.message)) - Handle errors",
            "Line 13: }, []) - Empty array ensures one API call"
          ],
          simpleMeaning: "API calls fetch data from servers to display in your React app.",
          output: "List of users with names and emails after loading",
          note: "Always handle loading and error states for better user experience"
        }
      ]
    },
    advanced: {
      topics: [
        {
          name: "⚡ useMemo Hook",
          description: "useMemo memoizes expensive calculations, recomputing only when dependencies change. This optimization prevents unnecessary recalculations on every render.",
          code: `import { useState, useMemo } from 'react';

function ExpensiveCalculator({ numbers }) {
  const [count, setCount] = useState(0);
  
  const expensiveSum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((sum, num) => {
      // Simulate expensive operation
      for (let i = 0; i < 1000000; i++) {}
      return sum + num;
    }, 0);
  }, [numbers]); // Only recalculates when 'numbers' changes
  
  return (
    <div>
      <p>Sum: {expensiveSum}</p>
      <button onClick={() => setCount(count + 1)}>
        Re-render: {count}
      </button>
    </div>
  );
}`,
          lineByLine: [
            "Line 1: import { useState, useMemo } from 'react' - Import useMemo",
            "Line 5: const expensiveSum = useMemo(() => { - Memoize value",
            "Line 6: console.log('Calculating sum...') - Shows when calculation runs",
            "Line 7-10: Expensive calculation (simulated)",
            "Line 11: }, [numbers]) - Dependencies array",
            "Line 15: <p>Sum: {expensiveSum}</p> - Display memoized value"
          ],
          simpleMeaning: "useMemo prevents expensive calculations from running on every render, only when needed.",
          output: "Sum calculation runs only when numbers array changes, not when button is clicked",
          note: "Don't use useMemo for simple calculations - it adds overhead"
        },
        {
          name: "🔁 useCallback Hook",
          description: "useCallback returns a memoized version of a function that only changes when dependencies change. It prevents unnecessary re-renders of child components that receive the function as a prop.",
          code: `import { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount(c => c + 1);
  }, []); // Function never changes
  
  return (
    <div>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <ChildButton onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

const ChildButton = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});`,
          lineByLine: [
            "Line 7: const handleClick = useCallback(() => { - Memoize function",
            "Line 10: }, []) - Empty deps means function never changes",
            "Line 18: <ChildButton onClick={handleClick} /> - Pass memoized function",
            "Line 24: const ChildButton = React.memo(...) - Memoized child component",
            "Line 25: console.log('Child rendered') - Shows when child actually renders"
          ],
          simpleMeaning: "useCallback prevents functions from being recreated on every render, optimizing child components.",
          output: "Child component doesn't re-render when typing in input, only when button is clicked",
          note: "Use useCallback when passing functions to memoized child components"
        },
        {
          name: "📦 useRef Hook",
          description: "useRef creates mutable references that persist across renders without causing re-renders. It's useful for accessing DOM elements directly or storing mutable values.",
          code: `import { useRef, useEffect, useState } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [text, setText] = useState('');
  
  // Increment on every render (doesn't trigger re-render)
  renderCount.current++;
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Auto-focused input"
      />
      <p>Component rendered {renderCount.current} times</p>
      <button onClick={() => inputRef.current.focus()}>
        Focus Input Again
      </button>
    </div>
  );
}`,
          lineByLine: [
            "Line 3: const inputRef = useRef(null) - Create ref for DOM element",
            "Line 4: const renderCount = useRef(0) - Ref for mutable value",
            "Line 8: renderCount.current++ - Update ref (no re-render)",
            "Line 10: useEffect(() => { - Effect runs once",
            "Line 11: inputRef.current.focus() - Access DOM element directly",
            "Line 18: ref={inputRef} - Attach ref to element"
          ],
          simpleMeaning: "useRef lets you access DOM elements or keep values that don't trigger re-renders.",
          output: "Input auto-focuses on load; button re-focuses it; render count increases but doesn't cause re-render cycles",
          note: "Ref updates don't cause re-renders - use state when you need UI updates"
        },
        {
          name: "🎬 useReducer Hook",
          description: "useReducer is an alternative to useState for complex state logic with multiple sub-values or when next state depends on previous state. It follows the reducer pattern from Redux.",
          code: `import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +{state.step}
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -{state.step}
      </button>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ 
          type: 'setStep', 
          payload: Number(e.target.value) 
        })}
      />
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
}`,
          lineByLine: [
            "Line 3: const initialState = { count: 0, step: 1 } - Initial state object",
            "Line 5: function reducer(state, action) { - Reducer function",
            "Line 6-15: switch(action.type) - Handle different actions",
            "Line 20: const [state, dispatch] = useReducer(reducer, initialState) - Initialize useReducer",
            "Line 26: dispatch({ type: 'increment' }) - Dispatch action",
            "Line 38: dispatch({ type: 'setStep', payload: Number(e.target.value) }) - Action with payload"
          ],
          simpleMeaning: "useReducer manages complex state with actions like a mini-Redux inside your component.",
          output: "Counter that increments/decrements by step value; step can be changed; all state managed by reducer",
          note: "Use useReducer when state logic is complex or involves multiple sub-values"
        },
        {
          name: "🌐 Context API",
          description: "Context provides a way to pass data through the component tree without prop drilling. It's great for theme, authentication, and language preferences.",
          code: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '10px 20px'
      }}
    >
      Current theme: {theme}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API Demo</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}`,
          lineByLine: [
            "Line 3: const ThemeContext = createContext() - Create context",
            "Line 5: function ThemeProvider({ children }) { - Provider component",
            "Line 12: <ThemeContext.Provider value={{ theme, toggleTheme }}> - Provide value",
            "Line 19: const { theme, toggleTheme } = useContext(ThemeContext) - Consume context",
            "Line 22-28: Use theme values in component"
          ],
          simpleMeaning: "Context shares data across many components without passing props manually at each level.",
          output: "Button shows current theme and toggles between light/dark when clicked",
          note: "Context triggers re-renders for all consumers when value changes"
        },
         

        
      // ==================== ADVANCED REACT TOPIC: ERROR BOUNDARIES ====================
{
  name: "🛡️ Error Boundaries — Graceful Error Handling",
  description: "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app. They catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. Error boundaries do NOT catch errors in event handlers, asynchronous code, server-side rendering, or errors thrown in the error boundary itself. Implement getDerivedStateFromError() to render fallback UI and componentDidCatch() to log errors. You can wrap different parts of your app with separate error boundaries. Error boundaries work like try-catch but for React components. Useful for isolating crashes in widgets, third-party components, and critical features.",
  code: `// ========== BASIC ERROR BOUNDARY ==========
import React from 'react';

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
}

// ========== WITH RESET FUNCTIONALITY ==========
class ResettableErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorKey: 0 };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  reset = () => {
    this.setState({ hasError: false, error: null, errorKey: this.state.errorKey + 1 });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback?.(this.reset) || (
        <div className="error-container">
          <h3>Something went wrong</h3>
          <button onClick={this.reset}>Try again</button>
        </div>
      );
    }

    return <React.Fragment key={this.state.errorKey}>{this.props.children}</React.Fragment>;
  }
}

// ========== SPECIFIC ERROR BOUNDARIES ==========
// API Error Boundary
class ApiErrorBoundary extends React.Component {
  state = { hasError: false, statusCode: null };

  static getDerivedStateFromError(error) {
    const statusCode = error.response?.status || 500;
    return { hasError: true, statusCode };
  }

  render() {
    if (this.state.hasError) {
      if (this.state.statusCode === 404) {
        return <NotFoundFallback />;
      }
      if (this.state.statusCode === 401) {
        return <UnauthorizedFallback onLogin={this.props.onLogin} />;
      }
      return <ServerErrorFallback />;
    }
    return this.props.children;
  }
}

// Chart Error Boundary (for data visualization)
class ChartErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="chart-fallback">
          <p>Unable to load chart</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ========== WITH ERROR REPORTING ==========
class SentryErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Send to error tracking service
    fetch('/api/log-error', {
      method: 'POST',
      body: JSON.stringify({
        error: error.toString(),
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <DefaultErrorFallback />;
    }
    return this.props.children;
  }
}

// ========== HIGHER-ORDER COMPONENT FOR ERROR BOUNDARY ==========
function withErrorBoundary(WrappedComponent, FallbackComponent) {
  return function WithErrorBoundary(props) {
    return (
      <ErrorBoundary fallback={FallbackComponent}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

// Usage
const SafeWidget = withErrorBoundary(Widget, () => <div>Widget failed to load</div>);

// ========== NESTED ERROR BOUNDARIES ==========
function Dashboard() {
  return (
    <ErrorBoundary fallback={<DashboardFallback />}>
      <Header />
      <div className="dashboard-grid">
        <ErrorBoundary fallback={<WidgetFallback name="Analytics" />}>
          <AnalyticsWidget />
        </ErrorBoundary>
        <ErrorBoundary fallback={<WidgetFallback name="Users" />}>
          <UsersWidget />
        </ErrorBoundary>
        <ErrorBoundary fallback={<WidgetFallback name="Revenue" />}>
          <RevenueWidget />
        </ErrorBoundary>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}`,
  lineByLine: [
    "ErrorBoundary class component with getDerivedStateFromError and componentDidCatch",
    "getDerivedStateFromError updates state to show fallback UI",
    "componentDidCatch logs errors to external service",
    "Resettable boundary includes reset function to recover from errors",
    "Different boundaries for different error types (API, Chart, etc.)",
    "Nested boundaries isolate failures to specific components"
  ],
  simpleMeaning: "Error boundaries catch crashes in components and show fallback UI instead of breaking the whole app. Like try-catch for React components.",
  output: "When a component crashes, only that component shows an error message. The rest of the app continues working normally.",
  note: "Error boundaries only catch errors during rendering, not in event handlers or async code. Use multiple boundaries for different parts of your app."
},

// ==================== ADVANCED REACT TOPIC: PORTALS ====================
{
  name: "🚪 Portals — Rendering Outside DOM Hierarchy",
  description: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. The portal still behaves like a normal React child in terms of context and event bubbling, even though it renders elsewhere. Perfect for modals, tooltips, dropdowns, popovers, and toast notifications that need to break out of parent CSS constraints (overflow: hidden, z-index stacking, etc.). createPortal(child, container) takes a React child and a DOM element to render into. Portal events bubble up through React tree, not DOM tree. Great for accessibility when modals need to be at end of body. Works with Server-Side Rendering with proper checks. Portal can be used with context, redux, and all React features normally.",
  code: `// ========== BASIC PORTAL ==========
import { createPortal } from 'react-dom';

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Portal destination
  );
}

// In index.html
// <div id="root"></div>
// <div id="modal-root"></div>

// Usage
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This content renders in #modal-root but belongs to App component</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

// ========== TOOLTIP PORTAL ==========
function Tooltip({ children, content, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  
  const showTooltip = () => {
    const rect = triggerRef.current.getBoundingClientRect();
    let top = rect.top - 10;
    let left = rect.left + rect.width / 2;
    
    switch (position) {
      case 'top':
        top = rect.top - 10;
        break;
      case 'bottom':
        top = rect.bottom + 10;
        break;
      case 'left':
        left = rect.left - 10;
        top = rect.top + rect.height / 2;
        break;
      case 'right':
        left = rect.right + 10;
        top = rect.top + rect.height / 2;
        break;
    }
    
    setCoords({ top, left });
    setIsVisible(true);
  };
  
  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      
      {isVisible && createPortal(
        <div
          className="tooltip"
          style={{
            position: 'fixed',
            top: coords.top,
            left: coords.left,
            transform: 'translateX(-50%)'
          }}
        >
          {content}
        </div>,
        document.body
      )}
    </>
  );
}

// ========== TOAST NOTIFICATION SYSTEM ==========
// ToastContext.js
const ToastContext = createContext();

let toastId = 0;

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  
  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = toastId++;
    setToasts(prev => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, duration);
  }, []);
  
  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {createPortal(
        <div className="toast-container">
          {toasts.map(toast => (
            <div key={toast.id} className={\`toast toast-\${toast.type}\`}>
              {toast.message}
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}

// Usage
function DeleteButton() {
  const { addToast } = useToast();
  
  const handleDelete = async () => {
    try {
      await deleteItem();
      addToast('Item deleted successfully', 'success');
    } catch (error) {
      addToast('Failed to delete item', 'error');
    }
  };
  
  return <button onClick={handleDelete}>Delete</button>;
}

// ========== DROPDOWN MENU PORTAL ==========
function Dropdown({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  
  const updatePosition = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current?.offsetHeight || 0;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      
      let top = rect.bottom + window.scrollY;
      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        top = rect.top + window.scrollY - dropdownHeight;
      }
      
      setPosition({
        top,
        left: rect.left + window.scrollX
      });
    }
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }
    
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, updatePosition]);
  
  const handleClickOutside = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        triggerRef.current && !triggerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, handleClickOutside]);
  
  return (
    <>
      <div ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && createPortal(
        <div
          ref={dropdownRef}
          className="dropdown-menu"
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            zIndex: 1000
          }}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  );
}

// ========== PORTAL WITH SSR SUPPORT ==========
function SafePortal({ children, selector = '#portal-root' }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  if (!mounted) return null;
  
  const container = document.querySelector(selector);
  if (!container) return null;
  
  return createPortal(children, container);
}

// ========== CONTEXT MENU PORTAL ==========
function ContextMenu({ children, onAction }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setVisible(true);
  };
  
  const handleClick = () => setVisible(false);
  
  useEffect(() => {
    if (visible) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [visible]);
  
  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      {visible && createPortal(
        <div
          className="context-menu"
          style={{
            position: 'fixed',
            top: position.y,
            left: position.x,
            zIndex: 9999
          }}
        >
          <button onClick={() => { onAction('edit'); setVisible(false); }}>
            Edit
          </button>
          <button onClick={() => { onAction('delete'); setVisible(false); }}>
            Delete
          </button>
        </div>,
        document.body
      )}
    </div>
  );
}`,
  lineByLine: [
    "createPortal(children, container) renders content outside parent DOM hierarchy",
    "Modal portal renders overlay in #modal-root while belonging to App component",
    "Tooltip portal calculates position relative to trigger element",
    "Toast system portals multiple notifications to body container",
    "Dropdown portal handles positioning and click-outside detection",
    "Context menu portal renders at mouse coordinates"
  ],
  simpleMeaning: "Portals let you render components outside their normal DOM parent — perfect for modals, tooltips, and dropdowns that need to break out of overflow: hidden containers.",
  output: "Modals that appear above everything. Tooltips at correct positions. Toasts that stack at screen corners. Dropdowns that don't get cut off.",
  note: "Portal content still participates in React event bubbling and context. Always manage focus for accessibility. Position portals dynamically with getBoundingClientRect."
},

// ==================== ADVANCED REACT TOPIC: REFS ====================
{
  name: "🔗 Refs — Direct DOM Access and Mutable Values",
  description: "Refs provide a way to access DOM nodes or React elements directly, bypassing the normal declarative React flow. useRef creates a mutable object that persists for the full lifetime of the component. Refs are perfect for focusing inputs, measuring element dimensions, integrating with non-React libraries, storing previous values, and managing timers. forwardRef allows parent components to pass refs down to child components. useImperativeHandle customizes the instance value exposed to parent components when using refs. Refs don't cause re-renders when mutated (unlike state). Use ref callbacks for dynamic refs (multiple elements). Refs are essential for animations, scroll management, media playback, and form validation without uncontrolled components.",
  code: `// ========== BASIC REF USAGE ==========
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  return <input ref={inputRef} type="text" placeholder="Auto-focused" />;
}

// ========== MEASURING DOM ELEMENTS ==========
function ResizableBox() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);
  
  useEffect(() => {
    if (elementRef.current) {
      const { width, height } = elementRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
    
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });
    
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }
    
    return () => resizeObserver.disconnect();
  }, []);
  
  return (
    <div ref={elementRef} className="resizable-box">
      <p>Width: {Math.round(dimensions.width)}px</p>
      <p>Height: {Math.round(dimensions.height)}px</p>
    </div>
  );
}

// ========== STORING PREVIOUS VALUES ==========
function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

function CounterWithPrevious() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// ========== FORWARD REF ==========
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  
  // Expose custom methods to parent via ref
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    clear: () => { if (inputRef.current) inputRef.current.value = ''; },
    getValue: () => inputRef.current?.value
  }));
  
  return <input ref={inputRef} {...props} className="fancy-input" />;
});

function ParentComponent() {
  const fancyInputRef = useRef(null);
  
  return (
    <div>
      <FancyInput ref={fancyInputRef} placeholder="Type something" />
      <button onClick={() => fancyInputRef.current?.focus()}>Focus</button>
      <button onClick={() => fancyInputRef.current?.clear()}>Clear</button>
      <button onClick={() => console.log(fancyInputRef.current?.getValue())}>
        Log Value
      </button>
    </div>
  );
}

// ========== ANIMATION WITH REFS ==========
function AnimatedBox() {
  const boxRef = useRef(null);
  const animationRef = useRef(null);
  
  const startAnimation = () => {
    let startTime = null;
    const duration = 1000;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const x = progress * 200;
      
      if (boxRef.current) {
        boxRef.current.style.transform = \`translateX(\${x}px)\`;
      }
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(animate);
  };
  
  const resetAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (boxRef.current) {
      boxRef.current.style.transform = 'translateX(0px)';
    }
  };
  
  return (
    <div>
      <div ref={boxRef} className="animated-box" />
      <button onClick={startAnimation}>Animate</button>
      <button onClick={resetAnimation}>Reset</button>
    </div>
  );
}

// ========== VIDEO PLAYER CONTROLS ==========
function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };
  
  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
    }
  };
  
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };
  
  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="controls">
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

// ========== DYNAMIC REFS (Multiple Elements) ==========
function DynamicList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const itemRefs = useRef({});
  
  const scrollToItem = (id) => {
    itemRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const addItem = () => {
    const newId = \`Item \${items.length + 1}\`;
    setItems([...items, newId]);
  };
  
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <div className="item-list">
        {items.map((item, index) => (
          <div
            key={index}
            ref={el => itemRefs.current[index] = el}
            className="list-item"
          >
            {item}
            <button onClick={() => scrollToItem(index)}>Scroll to this</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========== FOCUS TRAP FOR MODALS ==========
function FocusTrap({ children, isActive }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!isActive) return;
    
    const focusableElements = containerRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];
    
    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();
    
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isActive]);
  
  return <div ref={containerRef}>{children}</div>;
}

// ========== CLICK OUTSIDE HOOK ==========
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useClickOutside(dropdownRef, () => setIsOpen(false));
  
  return (
    <div ref={dropdownRef} className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      )}
    </div>
  );
}`,
  lineByLine: [
    "useRef creates mutable reference that persists across renders, doesn't cause re-renders",
    "forwardRef allows parent components to pass refs to child components",
    "useImperativeHandle customizes what parent can access via ref",
    "Refs can store previous values, DOM elements, timers, animation frames",
    "Dynamic refs with object mapping for multiple elements",
    "Click outside detection using ref and event listeners"
  ],
  simpleMeaning: "Refs give you direct access to DOM elements and let you store mutable values that don't trigger re-renders. Perfect for focus, animations, and integrating with non-React code.",
  output: "Inputs that auto-focus. Elements you can measure. Video players with custom controls. Click-outside detection for dropdowns.",
  note: "Use refs for DOM access, not for state. forwardRef is needed for passing refs through components. useImperativeHandle for controlled ref exposure."
},

// ==================== ADVANCED REACT TOPIC: HIGHER-ORDER COMPONENTS ====================
{
  name: "🎨 Higher-Order Components (HOC) — Component Composition Pattern",
  description: "Higher-Order Component is a function that takes a component and returns a new component with additional props, behavior, or styling. HOCs are pure functions with no side effects, used for cross-cutting concerns like authentication, logging, data fetching, and styling. Common HOC pattern: withAuth, withLogging, withTheme, withDataFetching. HOCs don't modify the input component; they compose it. HOCs can accept configuration parameters (currying). HOCs can be chained for multiple enhancements. Be careful with display names for debugging. Don't use HOCs inside render methods (causes unmount/remount). HOCs can be combined with hooks for modern React. Popular HOCs: React.memo (memoization), connect (Redux), withRouter (React Router).",
  code: `// ========== BASIC HOC ==========
function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log(\`Component \${WrappedComponent.name} mounted\`);
      return () => console.log(\`Component \${WrappedComponent.name} unmounted\`);
    }, []);
    
    useEffect(() => {
      console.log(\`Component \${WrappedComponent.name} updated with props:\`, props);
    });
    
    return <WrappedComponent {...props} />;
  };
}

// Usage
const LoggedButton = withLogger(Button);

// ========== AUTHENTICATION HOC ==========
function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const { user, isLoading } = useAuth();
    
    if (isLoading) {
      return <div>Loading authentication...</div>;
    }
    
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    
    return <WrappedComponent {...props} user={user} />;
  };
}

const ProtectedDashboard = withAuth(Dashboard);

// ========== DATA FETCHING HOC ==========
function withDataFetching(url, options = {}) {
  return function (WrappedComponent) {
    return function WithDataFetching(props) {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      
      useEffect(() => {
        let isMounted = true;
        
        const fetchData = async () => {
          try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (isMounted) {
              setData(result);
              setLoading(false);
            }
          } catch (err) {
            if (isMounted) {
              setError(err.message);
              setLoading(false);
            }
          }
        };
        
        fetchData();
        
        return () => { isMounted = false; };
      }, [url]);
      
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
      
      return <WrappedComponent {...props} data={data} />;
    };
  };
}

// Usage
const UserList = withDataFetching('/api/users')(({ data }) => (
  <ul>{data?.map(user => <li key={user.id}>{user.name}</li>)}</ul>
));

// ========== THEME HOC ==========
function withTheme(WrappedComponent) {
  return function WithTheme(props) {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    return (
      <WrappedComponent
        {...props}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  };
}

const ThemedButton = withTheme(Button);

// ========== CHAINING HOCS ==========
const enhance = compose(
  withLogger,
  withAuth,
  withTheme,
  withDataFetching('/api/data')
);

const EnhancedComponent = enhance(BaseComponent);

// ========== HOC WITH CONFIGURATION ==========
function withStyles(styles) {
  return function (WrappedComponent) {
    return function WithStyles(props) {
      return (
        <div style={styles}>
          <WrappedComponent {...props} />
        </div>
      );
    };
  };
}

const StyledCard = withStyles({
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
})(Card);

// ========== LOADING HOC ==========
function withLoading(LoadingComponent) {
  return function (WrappedComponent) {
    return function WithLoading({ isLoading, ...props }) {
      if (isLoading) {
        return <LoadingComponent />;
      }
      return <WrappedComponent {...props} />;
    };
  };
}

const Spinner = () => <div className="spinner">Loading...</div>;
const ButtonWithLoading = withLoading(Spinner)(Button);

// ========== MEMOIZATION HOC ==========
// React.memo is a built-in HOC
const MemoizedComponent = React.memo(MyComponent, (prevProps, nextProps) => {
  // Return true if props are equal (skip re-render)
  return prevProps.id === nextProps.id;
});

// ========== DISPLAY NAME FOR DEBUGGING ==========
function setDisplayName(WrappedComponent, hocName) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return \`\${hocName}(\${displayName})\`;
}

function withSubscription(WrappedComponent, selectData) {
  function WithSubscription(props) {
    // HOC implementation
  }
  
  WithSubscription.displayName = setDisplayName(WrappedComponent, 'withSubscription');
  return WithSubscription;
}`,
  lineByLine: [
    "HOC takes a component and returns enhanced component",
    "withAuth checks authentication before rendering protected routes",
    "withDataFetching handles loading, error, data states automatically",
    "withTheme injects theme and toggle function as props",
    "compose chains multiple HOCs for clean composition",
    "HOCs can accept configuration parameters via currying",
    "React.memo is built-in HOC for performance optimization"
  ],
  simpleMeaning: "Higher-Order Components wrap components to add extra functionality — like authentication, data fetching, logging, or styling. Reusable logic across components.",
  output: "Components automatically get authentication checks, data loading states, theme capabilities, and logging without duplicating code.",
  note: "HOCs are functions that take component and return new component. Don't use HOCs inside render. Use displayName for debugging. Prefer hooks for new code."
}
    ]
  }
};

export const reactExplanations = learning;
// This is pure data export - NO React imports, NO "use client"
export const problems = {
  fresher: [
    {
      question: "Simple Counter App with Increment/Decrement",
      answer: "Use createSlice to create counter slice with reducers for increment, decrement, and reset. Configure store using configureStore. Use useDispatch and useSelector in React component. Redux Toolkit uses Immer internally allowing direct state mutation in reducers.",
      example: `// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
    reset: (state) => { state.value = 0; }
  }
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export const store = configureStore({ reducer: { counter: counterSlice.reducer } });

// Counter Component
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './store';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+ Increment</button>
      <button onClick={() => dispatch(decrement())}>- Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default Counter;`,
      output: "Counter starts at 0, increment adds 1, decrement subtracts 1, reset goes to 0, +5 adds 5"
    },
    {
      question: "Todo List with Add/Remove Actions",
      answer: "Create todos slice with addTodo, removeTodo, toggleTodo reducers. Each todo has id, text, completed properties. Use nanoid for unique IDs. Use prepare callback to auto-generate IDs for new todos.",
      example: `// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => { state.push(action.payload); },
      prepare: (text) => ({ payload: { id: nanoid(), text, completed: false } })
    },
    removeTodo: (state, action) => state.filter(todo => todo.id !== action.payload),
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    editTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },
    clearCompleted: (state) => state.filter(todo => !todo.completed)
  }
});

export const { addTodo, removeTodo, toggleTodo, editTodo, clearCompleted } = todoSlice.actions;
export const store = configureStore({ reducer: { todos: todoSlice.reducer } });

// Todo Component
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, clearCompleted } from './store';

function TodoApp() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const remainingCount = todos.filter(t => !t.completed).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add new todo..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
            <span>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{remainingCount} items remaining</p>
      {todos.some(t => t.completed) && <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>}
    </div>
  );
}`,
      output: "Add todos, mark complete (strikethrough), delete todos, clear completed items, see remaining count"
    },
    {
      question: "Theme Switcher (Light/Dark Mode)",
      answer: "Create theme slice with theme state. Use redux to store theme preference. Apply theme class to body. Persist preference using localStorage middleware. Use CSS variables for easy theme switching across components.",
      example: `// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'light' },
  reducers: {
    toggleTheme: (state) => { state.mode = state.mode === 'light' ? 'dark' : 'light'; },
    setTheme: (state, action) => { state.mode = action.payload; }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: { theme: themeReducer },
  preloadedState: { theme: { mode: localStorage.getItem('theme') || 'light' } }
});

// ThemeProvider Component
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from './themeSlice';

function ThemeProvider({ children }) {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <div className={\`app \${theme}\`}>{children}</div>;
}

// ThemeSwitcher Component
function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}

// styles.css
/*
[data-theme="light"] { --bg: #ffffff; --text: #333333; --card: #f5f5f5; }
[data-theme="dark"] { --bg: #1a1a1a; --text: #ffffff; --card: #2d2d2d; }
body { background: var(--bg); color: var(--text); transition: all 0.3s; }
*/`,
      output: "Toggle button switches between light/dark themes, preference persists after page reload"
    },
    {
      question: "User List with Add User Form",
      answer: "Create users slice with CRUD operations. Use prepare callback for user creation. Implement edit mode for updating users. Show user list in table format. Use nanoid for generating unique IDs instead of Date.now() for better uniqueness.",
      example: `// usersSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUser: {
      reducer: (state, action) => { state.users.push(action.payload); },
      prepare: (user) => ({ payload: { id: nanoid(), ...user, createdAt: new Date().toISOString() } })
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(u => u.id === action.payload.id);
      if (index !== -1) state.users[index] = { ...state.users[index], ...action.payload };
    },
    deleteUser: (state, action) => { state.users = state.users.filter(u => u.id !== action.payload); }
  }
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

// UserManager Component
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, deleteUser } from './usersSlice';

function UserManager() {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'user' });
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(updateUser({ id: editingId, ...formData }));
      setEditingId(null);
    } else {
      dispatch(addUser(formData));
    }
    setFormData({ name: '', email: '', role: 'user' });
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setFormData({ name: user.name, email: user.email, role: user.role });
  };

  return (
    <div>
      <h1>User Management</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
        </select>
        <button type="submit">{editingId ? 'Update' : 'Add'} User</button>
        {editingId && <button onClick={() => { setEditingId(null); setFormData({ name: '', email: '', role: 'user' }); }}>Cancel</button>}
      </form>
      
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Actions</th></tr></thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td><button onClick={() => handleEdit(user)}>Edit</button><button onClick={() => dispatch(deleteUser(user.id))}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
      output: "Add new users, edit existing users, delete users, form auto-updates for editing"
    },
    {
      question: "Shopping Cart with Redux",
      answer: "Create cart slice with addItem, removeItem, updateQuantity, clearCart reducers. Store items with id, name, price, quantity. Calculate derived data (total) in reducers instead of selectors for performance.",
      example: `// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0, totalAmount: 0 },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
      }
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.totalPrice = item.quantity * item.price;
        state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
        state.totalAmount = state.items.reduce((sum, i) => sum + i.totalPrice, 0);
      }
    },
    clearCart: (state) => { state.items = []; state.totalQuantity = 0; state.totalAmount = 0; }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// ProductList Component
const products = [
  { id: 1, name: 'Laptop', price: 999, image: '💻' },
  { id: 2, name: 'Mouse', price: 29, image: '🖱️' },
  { id: 3, name: 'Keyboard', price: 79, image: '⌨️' }
];

function ProductList() {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px' }}>{product.image}</div>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

// Cart Component
function Cart() {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) return <p>Your cart is empty</p>;

  return (
    <div style={{ marginTop: '30px', borderTop: '2px solid #ddd', paddingTop: '20px' }}>
      <h2>Shopping Cart ({totalQuantity} items)</h2>
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '10px' }}>
          <span>{item.name}</span>
          <span>Price: {item.price}</span>
          <input type="number" min="1" value={item.quantity} onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))} style={{ width: '60px' }} />
          <span>Total: {item.totalPrice}</span>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3>Total Amount: {totalAmount}</h3>
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        <button style={{ marginLeft: '10px', background: '#28a745' }}>Checkout</button>
      </div>
    </div>
  );
}`,
      output: "Add products to cart, update quantities, remove items, view total amount"
    },
    {
      question: "Product List with Add to Cart",
      answer: "Use Redux for cart state management. Create product slice with product data. Cart slice stores items with quantities. Implement add to cart with existing item check. Store product prices as numbers to avoid floating-point precision issues.",
      example: `// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalItems: 0, totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity || 1;
        existing.totalPrice = existing.quantity * existing.price;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1, totalPrice: action.payload.price });
      }
      state.totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
      state.totalPrice = state.items.reduce((sum, i) => sum + i.totalPrice, 0);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
      state.totalPrice = state.items.reduce((sum, i) => sum + i.totalPrice, 0);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.totalPrice = item.quantity * item.price;
        state.totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
        state.totalPrice = state.items.reduce((sum, i) => sum + i.totalPrice, 0);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Products Component
const products = [
  { id: 1, name: 'Laptop', price: 999, image: '💻' },
  { id: 2, name: 'Mouse', price: 29, image: '🖱️' },
  { id: 3, name: 'Keyboard', price: 79, image: '⌨️' },
  { id: 4, name: 'Monitor', price: 299, image: '🖥️' }
];

function Products() {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  const addToCartWithQuantity = (product) => {
    const quantity = quantities[product.id] || 1;
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <div style={{ fontSize: '48px' }}>{product.image}</div>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <div>
            <label>Quantity: </label>
            <input 
              type="number" 
              min="1" 
              value={quantities[product.id] || 1}
              onChange={(e) => setQuantities({ ...quantities, [product.id]: parseInt(e.target.value) })}
              style={{ width: '60px', marginRight: '10px' }}
            />
            <button onClick={() => addToCartWithQuantity(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}`,
      output: "Products displayed with quantity selector, add to cart with selected quantity, cart updates accordingly"
    },
    {
      question: "User Authentication State",
      answer: "Create auth slice with user, token, isAuthenticated, loading, error states. Handle login, logout, register actions. Persist token in localStorage. Add loading and error handling. Always store tokens securely and handle token expiration.",
      example: `// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    error: null
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;

// Login Component
function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h1>Login</h1>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px' }}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
}`,
      output: "User can login/logout, authentication state persists after page reload, loading and error states handled"
    },
    {
      question: "Book List with Filters",
      answer: "Use Redux for books data and filter state. Create filter slice for selected filters. Use useSelector with memoized selectors (createSelector). Implement search, category filter, price range. Use createSelector for memoized derived data to prevent unnecessary re-renders.",
      example: `// booksSlice.js
import { createSlice, createSelector } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [
      { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'fiction', price: 15, rating: 4.5 },
      { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'non-fiction', price: 20, rating: 4.8 },
      { id: 3, title: 'Dune', author: 'Frank Herbert', category: 'sci-fi', price: 18, rating: 4.7 },
      { id: 4, title: 'Becoming', author: 'Michelle Obama', category: 'biography', price: 22, rating: 4.9 },
      { id: 5, title: '1984', author: 'George Orwell', category: 'fiction', price: 12, rating: 4.6 }
    ]
  },
  reducers: {}
});

const filterSlice = createSlice({
  name: 'filters',
  initialState: { category: 'all', search: '', priceRange: [0, 50], sortBy: 'title' },
  reducers: {
    setCategory: (state, action) => { state.category = action.payload; },
    setSearch: (state, action) => { state.search = action.payload; },
    setPriceRange: (state, action) => { state.priceRange = action.payload; },
    setSortBy: (state, action) => { state.sortBy = action.payload; },
    resetFilters: (state) => {
      state.category = 'all';
      state.search = '';
      state.priceRange = [0, 50];
      state.sortBy = 'title';
    }
  }
});

export const { setCategory, setSearch, setPriceRange, setSortBy, resetFilters } = filterSlice.actions;

// Selectors
export const selectFilteredBooks = createSelector(
  [(state) => state.books.books, (state) => state.filters],
  (books, filters) => {
    let filtered = [...books];
    
    if (filters.category !== 'all') {
      filtered = filtered.filter(b => b.category === filters.category);
    }
    
    if (filters.search) {
      filtered = filtered.filter(b => 
        b.title.toLowerCase().includes(filters.search.toLowerCase()) || 
        b.author.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    filtered = filtered.filter(b => b.price >= filters.priceRange[0] && b.price <= filters.priceRange[1]);
    
    if (filters.sortBy === 'title') filtered.sort((a, b) => a.title.localeCompare(b.title));
    if (filters.sortBy === 'price') filtered.sort((a, b) => a.price - b.price);
    if (filters.sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    
    return filtered;
  }
);

export const selectCategories = createSelector(
  [(state) => state.books.books],
  (books) => ['all', ...new Set(books.map(b => b.category))]
);

export const selectPriceRange = createSelector(
  [(state) => state.books.books],
  (books) => {
    const prices = books.map(b => b.price);
    return [Math.min(...prices), Math.max(...prices)];
  }
);

export const store = configureStore({
  reducer: { books: booksSlice.reducer, filters: filterSlice.reducer }
});`,
      output: "Filter books by category, search by title/author, filter by price range, sort by various criteria"
    }
  ],
  
  experienced: [
    {
      question: "Notification System with Auto-Dismiss",
      answer: "Create notification slice with addNotification, removeNotification reducers. Each notification has id, message, type, timeout. Auto-dismiss after duration. Auto-dismiss timers should be cleaned up to prevent memory leaks.",
      example: `// notificationSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    addNotification: {
      reducer: (state, action) => { state.push(action.payload); },
      prepare: (message, type = 'info', duration = 5000) => ({ 
        payload: { id: nanoid(), message, type, duration, timestamp: Date.now() } 
      })
    },
    removeNotification: (state, action) => { 
      return state.filter(n => n.id !== action.payload); 
    }
  }
});

export const { addNotification, removeNotification } = notificationSlice.actions;

// Notification Component
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Notifications() {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    const timers = notifications.map(notification => {
      return setTimeout(() => { 
        dispatch(removeNotification(notification.id)); 
      }, notification.duration);
    });
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [notifications, dispatch]);

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      {notifications.map(notification => (
        <div key={notification.id} style={{
          padding: '12px 20px', marginBottom: '10px', borderRadius: '5px', 
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          background: notification.type === 'success' ? '#d4edda' : 
                      notification.type === 'error' ? '#f8d7da' : 
                      notification.type === 'warning' ? '#fff3cd' : '#d1ecf1',
          color: notification.type === 'success' ? '#155724' : 
                  notification.type === 'error' ? '#721c24' : 
                  notification.type === 'warning' ? '#856404' : '#0c5460'
        }}>
          <strong>{notification.type.toUpperCase()}: </strong>
          {notification.message}
          <button onClick={() => dispatch(removeNotification(notification.id))} style={{ 
            marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' 
          }}>×</button>
        </div>
      ))}
    </div>
  );
}`,
      output: "Notifications appear and auto-dismiss after set duration with different colors for success/error/warning/info"
    },
    {
      question: "Middleware for Logging Actions",
      answer: "Create custom middleware function. Log action type, payload, previous state, and next state. Use for debugging and analytics. Only include logger middleware in development environment for performance.",
      example: `// loggerMiddleware.js
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('Action:', action);
  console.log('Previous State:', store.getState());
  const result = next(action);
  console.log('Next State:', store.getState());
  console.groupEnd();
  return result;
};

// analyticsMiddleware.js
const analyticsMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.includes('add') || action.type.includes('remove') || action.type.includes('purchase')) {
    console.log('📊 Analytics event:', { 
      action: action.type, 
      payload: action.payload, 
      timestamp: new Date().toISOString(),
      state: store.getState()
    });
  }
  return result;
};

// errorMiddleware.js
const errorMiddleware = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    console.error('🔥 Reducer error:', error);
    console.error('Failed action:', action);
    store.dispatch({ type: 'error/occurred', payload: error.message });
    return action;
  }
};

// performanceMiddleware.js
const performanceMiddleware = (store) => (next) => (action) => {
  const start = performance.now();
  const result = next(action);
  const end = performance.now();
  const duration = end - start;
  
  if (duration > 5) {
    console.warn(\`⚠️ Slow action: \${action.type} took \${duration.toFixed(2)}ms\`);
  }
  return result;
};

// Configure store with custom middleware
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const isDev = process.env.NODE_ENV === 'development';

const middleware = [];
if (isDev) {
  middleware.push(loggerMiddleware, performanceMiddleware);
}
middleware.push(analyticsMiddleware, errorMiddleware);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});`,
      output: "Console logs show action details, previous state, and next state for every dispatch"
    }
  ]
};

export default problems;
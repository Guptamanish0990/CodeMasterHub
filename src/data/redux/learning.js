export const learning = {
  basic: {
    title: "🔄 REDUX: COMPLETE STATE MANAGEMENT DOCUMENTATION",
    description: "Comprehensive Redux guide covering everything from core concepts to advanced patterns. Redux is a predictable state container for JavaScript applications, commonly used with React, Angular, Vue, and vanilla JS. This documentation includes 15+ topics with practical code examples, line-by-line explanations, and real-world use cases. Perfect for beginners learning state management and experienced developers mastering Redux Toolkit, Thunks, Sagas, and RTK Query.",
    
    topics: [
      {
        name: "1. STORE & REDUCER - Core Concepts",
        description: "Store holds the entire application state. Reducer is a pure function that takes current state and action, returns new state. Actions are plain objects with type property. Store.dispatch() sends actions. Store.getState() returns current state. Create store using createStore() from Redux.",
        code: `// Import Redux
const { createStore } = require('redux');

// Reducer function (pure function)
const counterReducer = (state = 0, action) => {
    // Check action type and return new state
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
};

// Create store with reducer
const store = createStore(counterReducer);

// Get initial state
console.log('Initial state:', store.getState());

// Subscribe to state changes
store.subscribe(() => {
    console.log('State changed to:', store.getState());
});

// Dispatch actions
store.dispatch({ type: 'INCREMENT' });  // state: 1
store.dispatch({ type: 'INCREMENT' });  // state: 2
store.dispatch({ type: 'DECREMENT' });  // state: 1
store.dispatch({ type: 'RESET' });      // state: 0

// Multiple reducers with combineReducers
const { combineReducers } = require('redux');

const userReducer = (state = null, action) => {
    if (action.type === 'SET_USER') {
        return action.payload;
    }
    return state;
};

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const mainStore = createStore(rootReducer);`,
        lineByLine: [
          "Line 1: const { createStore } = require('redux') - Imports createStore function from Redux",
          "Line 2: // Reducer function - Pure function that calculates new state",
          "Line 3: const counterReducer = (state = 0, action) => {} - Reducer with initial state 0",
          "Line 4: switch (action.type) - Checks action type to determine state change",
          "Line 5: case 'INCREMENT': return state + 1 - Increases state by 1",
          "Line 6: case 'DECREMENT': return state - 1 - Decreases state by 1",
          "Line 7: case 'RESET': return 0 - Resets state to 0",
          "Line 8: default: return state - Returns unchanged state for unknown actions",
          "Line 9: const store = createStore(counterReducer) - Creates store with reducer",
          "Line 10: store.getState() - Returns current state value",
          "Line 11: store.subscribe(() => {}) - Listens for state changes",
          "Line 12: store.dispatch({ type: 'INCREMENT' }) - Sends action to reducer",
          "Line 13: combineReducers() - Combines multiple reducers",
          "Line 14: const rootReducer = combineReducers({...}) - Creates root reducer with multiple slices"
        ],
        simpleMeaning: "Store is like a central database for your app. Reducer is like a cashier - takes current state and action, returns new state. Dispatch is like placing an order. Subscribe listens for changes. One store, many reducers (one per feature).",
        output: "Initial state: 0, State changed to: 1, State changed to: 2, State changed to: 1, State changed to: 0",
        note: "Reducers must be pure functions (no side effects, same input = same output). Never mutate state directly - always return new object. Use combineReducers for multiple state slices."
      },
      
      {
        name: "2. DISPATCH ACTIONS - Sending Events",
        description: "Actions are plain JavaScript objects with type property describing what happened. Action creators are functions that return action objects. Dispatch sends actions to store. Actions can have payload (extra data). Types are usually constants to avoid typos.",
        code: `// Action type constants (prevents typos)
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_BY_VALUE = 'ADD_BY_VALUE';
const SET_USER = 'SET_USER';

// Action creators (functions that return action objects)
const increment = () => ({
    type: INCREMENT
});

const decrement = () => ({
    type: DECREMENT
});

const addByValue = (amount) => ({
    type: ADD_BY_VALUE,
    payload: amount  // Additional data for the action
});

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

// Reducer handling payload
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case ADD_BY_VALUE:
            return state + action.payload;  // Use payload value
        default:
            return state;
    }
};

const userReducer = (state = null, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        default:
            return state;
    }
};

// Usage with action creators
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    count: counterReducer,
    user: userReducer
});

const store = createStore(rootReducer);

// Dispatch using action creators
store.dispatch(increment());      // count: 1
store.dispatch(increment());      // count: 2
store.dispatch(addByValue(5));    // count: 7
store.dispatch(decrement());      // count: 6
store.dispatch(setUser({ name: 'John', age: 30 }));  // user: {name: 'John', age: 30}

// Dynamic action creation
const createAction = (type, payload) => ({ type, payload });
store.dispatch(createAction('CUSTOM_ACTION', { data: 'test' }));

// Batch dispatch pattern
const batchActions = (actions) => {
    actions.forEach(action => store.dispatch(action));
};

batchActions([increment(), increment(), addByValue(10)]);`,
        lineByLine: [
          "Line 1: const INCREMENT = 'INCREMENT' - Action type constant (prevents typos)",
          "Line 2: const DECREMENT = 'DECREMENT' - Another action type constant",
          "Line 3: const ADD_BY_VALUE = 'ADD_BY_VALUE' - Action with payload example",
          "Line 4: const SET_USER = 'SET_USER' - User action type",
          "Line 7: const increment = () => ({ type: INCREMENT }) - Action creator returning INCREMENT action",
          "Line 8: { type: INCREMENT } - Action object with type property",
          "Line 9: const addByValue = (amount) => ({ type: ADD_BY_VALUE, payload: amount }) - Action with payload",
          "Line 10: payload: amount - Extra data for the action",
          "Line 11: switch (action.type) - Reducer checking action type",
          "Line 12: case ADD_BY_VALUE: return state + action.payload - Using payload value",
          "Line 13: store.dispatch(increment()) - Dispatching action using creator"
        ],
        simpleMeaning: "Actions are like messages sent to the store. 'I want to increment counter' or 'Add 5 to counter'. Action creators are factories that build these messages. Dispatch delivers the message. Payload carries extra info like how much to add.",
        output: "count: 1, count: 2, count: 7, count: 6, user: { name: 'John', age: 30 }",
        note: "Always use action type constants to avoid typos. Action creators are optional but recommended. Keep actions serializable (no functions, promises). Use payload convention for action data."
      },
      
      {
        name: "3. SUBSCRIBE - Listening to State Changes",
        description: "Subscribe method registers a listener function that runs whenever state changes. Unsubscribe by calling returned function. Used for side effects (localStorage, APIs, logging). React-Redux handles subscription automatically. Multiple subscribers can listen.",
        code: `// Basic subscription
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC': return state + 1;
        default: return state;
    }
};

const store = createStore(reducer);

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
    console.log('State updated:', store.getState());
});

// Dispatch actions (triggers subscriber)
store.dispatch({ type: 'INC' });  // Logs: State updated: 1
store.dispatch({ type: 'INC' });  // Logs: State updated: 2

// Unsubscribe (stop listening)
unsubscribe();
store.dispatch({ type: 'INC' });  // No log (unsubscribed)

// Multiple subscribers
const logToFile = () => {
    console.log('File: state is', store.getState());
};

const updateUI = () => {
    console.log('UI: refreshing with', store.getState());
};

const saveToStorage = () => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
};

store.subscribe(logToFile);
store.subscribe(updateUI);
store.subscribe(saveToStorage);

// Selective subscription (only when condition met)
let previousState = store.getState();
store.subscribe(() => {
    const currentState = store.getState();
    if (currentState.count !== previousState.count) {
        console.log('Count changed!');
    }
    previousState = currentState;
});

// Real-world: Persist state to localStorage
const persistState = () => {
    const state = store.getState();
    localStorage.setItem('redux_state', JSON.stringify(state));
};
store.subscribe(persistState);`,
        lineByLine: [
          "Line 1: const store = createStore(reducer) - Creates Redux store",
          "Line 2: const unsubscribe = store.subscribe(() => {}) - Registers listener, returns unsubscribe function",
          "Line 3: console.log('State updated:', store.getState()) - Logs current state on each change",
          "Line 4: store.dispatch({ type: 'INC' }) - Triggers state change and subscriber",
          "Line 5: unsubscribe() - Stops the listener from running",
          "Line 6: store.subscribe(logToFile) - Multiple independent subscribers",
          "Line 7: localStorage.setItem('state', JSON.stringify(store.getState())) - Persists state",
          "Line 8: let previousState = store.getState() - Tracks previous state for conditional subscription"
        ],
        simpleMeaning: "Subscribe is like having a notification system. When state changes, all subscribers get notified. Like followers on social media - post a change, everyone sees it. Unsubscribe to stop notifications. React-Redux handles this for React components.",
        output: "State updated: 1, State updated: 2, File: state is 2, UI: refreshing with 2",
        note: "Call unsubscribe to prevent memory leaks. Avoid expensive operations in subscribers. React-Redux connect() and useSelector() use subscribe internally."
      }
    ]
  },
  
  advanced: {
    title: "🚀 ADVANCED REDUX: MASTERING STATE MANAGEMENT",
    description: "Advanced Redux techniques including Redux Toolkit (modern Redux), Async Thunks for side effects, RTK Query for data fetching, middleware, selectors for derived data, and performance optimization. Master these to build scalable, maintainable applications with predictable state management.",
    
    topics: [
      {
        name: "4. REDUX TOOLKIT - Modern Redux",
        description: "Redux Toolkit (RTK) is the official, recommended way to write Redux. Simplifies store setup, reduces boilerplate, includes immer for immutable updates, and thunk for async actions. Features: configureStore, createSlice, createAsyncThunk, and createEntityAdapter.",
        code: `// Install: npm install @reduxjs/toolkit react-redux

import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';

// Create slice (combines actions + reducer)
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,  // Immer handles immutability
        decrement: (state) => state - 1,
        addByAmount: (state, action) => state + action.payload,
        reset: () => 0
    }
});

// Extract action creators and reducer
export const { increment, decrement, addByAmount, reset } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

// Multiple slices
const userSlice = createSlice({
    name: 'user',
    initialState: { name: '', email: '', loading: false },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        clearUser: (state) => {
            state.name = '';
            state.email = '';
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setUser, clearUser, setLoading } = userSlice.actions;

// Configure store (automatically adds thunk middleware, devtools)
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userSlice.reducer
    }
});

// Use in components
// dispatch(increment());
// dispatch(addByAmount(5));
// const count = useSelector(state => state.counter);

// createAction - simple action creator without slice
const customAction = createAction('custom/action');
store.dispatch(customAction({ data: 'test' }));

// createReducer - alternative way (if not using createSlice)
const todoReducer = createReducer([], (builder) => {
    builder
        .addCase('ADD_TODO', (state, action) => {
            state.push(action.payload);
        })
        .addCase('REMOVE_TODO', (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        });
});

// createSelector - memoized selectors
import { createSelector } from '@reduxjs/toolkit';

const selectCount = (state) => state.counter;
const doubleCountSelector = createSelector(
    [selectCount],
    (count) => count * 2
);`,
        lineByLine: [
          "Line 1: import { configureStore, createSlice } from '@reduxjs/toolkit' - Imports RTK functions",
          "Line 2: const counterSlice = createSlice({}) - Creates slice with name, state, reducers",
          "Line 3: name: 'counter' - Slice name for action prefix (counter/increment)",
          "Line 4: initialState: 0 - Initial state value",
          "Line 5: reducers: { increment: (state) => state + 1 } - Reducer functions",
          "Line 6: (state) => state + 1 - Immer allows direct mutation (safe)",
          "Line 7: addByAmount: (state, action) => state + action.payload - Reducer with payload",
          "Line 8: export const { increment, decrement } = counterSlice.actions - Exports action creators",
          "Line 9: const store = configureStore({ reducer }) - Creates store with good defaults",
          "Line 10: createSelector() - Creates memoized selectors for performance"
        ],
        simpleMeaning: "Redux Toolkit is Redux made easy. No more switch statements, action constants, or immutable code. Just create slice with name, state, and reducers. It automatically generates actions, handles immutability, and sets up store with best practices. Less code, fewer bugs.",
        output: "Store configured with counter and user slices. Actions: increment, decrement, addByAmount, setUser. State updates handled immutably.",
        note: "Redux Toolkit is the official standard for Redux 2.0+. Includes Immer for mutable syntax, Thunk for async, and DevTools integration. Use createSlice for all reducers."
      },
      
      {
        name: "5. ASYNC THUNK - Handling Side Effects",
        description: "createAsyncThunk handles async operations (API calls). Generates pending, fulfilled, and rejected action types. Use extraReducers to handle these states. Thunk middleware (included in configureStore) allows dispatching functions that perform async work.",
        code: `// Async thunk for API calls
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create async thunk
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',  // Action type prefix
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;  // This becomes action.payload on fulfilled
        } catch (error) {
            return rejectWithValue(error.message);  // Custom error payload
        }
    }
);

export const addUser = createAsyncThunk(
    'users/addUser',
    async (userData, { dispatch, getState, rejectWithValue }) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Slice with loading states
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        loading: false,
        error: null,
        currentUser: null
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch Users - Pending
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Fetch Users - Fulfilled
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            // Fetch Users - Rejected
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            // Add User - Pending
            .addCase(addUser.pending, (state) => {
                state.loading = true;
            })
            // Add User - Fulfilled
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.list.push(action.payload);
            })
            // Add User - Rejected
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearError } = usersSlice.actions;
export default usersSlice.reducer;

// Usage in component
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from './usersSlice';

function UserList() {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector(state => state.users);
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div>
            {list.map(user => <div key={user.id}>{user.name}</div>)}
            <button onClick={() => dispatch(addUser({ name: 'New User' }))}>
                Add User
            </button>
        </div>
    );
}

// Thunk with getState access
export const updateIfNeeded = createAsyncThunk(
    'data/updateIfNeeded',
    async (_, { getState, dispatch }) => {
        const state = getState();
        const lastUpdated = state.data.lastUpdated;
        const now = Date.now();
        
        if (now - lastUpdated > 60000) {  // Update if older than 1 minute
            const response = await fetch('/api/data');
            return response.json();
        }
        return state.data.list;  // Return existing data
    }
);

// Manual thunk (without createAsyncThunk)
const manualThunk = () => async (dispatch, getState) => {
    dispatch({ type: 'FETCH_START' });
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
};`,
        lineByLine: [
          "Line 1: import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' - Imports thunk creator",
          "Line 2: export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {}) - Creates async thunk",
          "Line 3: 'users/fetchUsers' - Base action type (pending, fulfilled, rejected variants)",
          "Line 4: async () => {} - Async function containing side effect",
          "Line 5: rejectWithValue(error.message) - Returns custom error payload",
          "Line 6: extraReducers: (builder) => {} - Handles async action states",
          "Line 7: builder.addCase(fetchUsers.pending, (state) => {}) - Loading state",
          "Line 8: builder.addCase(fetchUsers.fulfilled, (state, action) => {}) - Success state",
          "Line 9: action.payload - Contains returned data from async function",
          "Line 10: builder.addCase(fetchUsers.rejected, (state, action) => {}) - Error state",
          "Line 11: useDispatch() - React hook to get dispatch function",
          "Line 12: dispatch(fetchUsers()) - Dispatches async thunk"
        ],
        simpleMeaning: "Async Thunk handles API calls and other async work. Instead of fighting Redux's synchronous nature, thunk lets you dispatch functions that can wait for promises. It automatically creates pending/fulfilled/rejected states - perfect for showing loaders and errors.",
        output: "Loading → Fetched 10 users → User list displayed → Add User → New user added to list",
        note: "Always handle loading and error states. Use rejectWithValue for custom error messages. Thunks can access getState() for conditional logic. configureStore includes thunk middleware automatically."
      },
      
      {
        name: "6. MIDDLEWARE - Customizing Dispatch",
        description: "Middleware intercepts actions before they reach reducer. Used for logging, crash reporting, async operations, routing, etc. Middleware functions have access to dispatch and getState. configureStore supports custom middleware array.",
        code: `// Basic logging middleware
const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    console.log('Previous state:', store.getState());
    
    const result = next(action);  // Pass action to next middleware/reducer
    
    console.log('Next state:', store.getState());
    return result;
};

// Redux Thunk middleware (handles function actions)
const thunkMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        // It's a thunk - call it with dispatch and getState
        return action(store.dispatch, store.getState);
    }
    return next(action);
};

// Error handling middleware
const errorMiddleware = (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (error) {
        console.error('Caught error in middleware:', error);
        store.dispatch({ type: 'ERROR_OCCURRED', payload: error.message });
        throw error;  // Re-throw to maintain error flow
    }
};

// Performance monitoring middleware
const performanceMiddleware = (store) => (next) => (action) => {
    const start = performance.now();
    const result = next(action);
    const end = performance.now();
    
    if (end - start > 50) {  // Slow action > 50ms
        console.warn(\`Action \${action.type} took \${end - start}ms\`);
    }
    
    return result;
};

// Redux Persist middleware (save to localStorage)
const persistMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('redux_state', JSON.stringify(state));
    return result;
};

// Apply middleware
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware, thunkMiddleware, errorMiddleware)
);

// Redux Toolkit with custom middleware
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(loggerMiddleware, errorMiddleware)
});

// API call middleware (pattern)
const apiMiddleware = (store) => (next) => async (action) => {
    if (!action.meta || action.meta.type !== 'api') {
        return next(action);
    }
    
    const { url, method = 'GET', onSuccess, onError } = action.payload;
    
    store.dispatch({ type: 'API_REQUEST_START', meta: action.meta });
    
    try {
        const response = await fetch(url, { method });
        const data = await response.json();
        
        store.dispatch({ type: 'API_REQUEST_SUCCESS', payload: data });
        
        if (onSuccess) {
            store.dispatch(onSuccess(data));
        }
    } catch (error) {
        store.dispatch({ type: 'API_REQUEST_ERROR', payload: error });
        
        if (onError) {
            store.dispatch(onError(error));
        }
    }
    
    store.dispatch({ type: 'API_REQUEST_END' });
};

// Usage
store.dispatch({
    type: 'FETCH_DATA',
    meta: { type: 'api' },
    payload: {
        url: '/api/users',
        onSuccess: (data) => ({ type: 'USERS_LOADED', payload: data })
    }
});`,
        lineByLine: [
          "Line 1: const loggerMiddleware = (store) => (next) => (action) => {} - Middleware signature",
          "Line 2: console.log('Dispatching:', action) - Logs action before processing",
          "Line 3: const result = next(action) - Passes to next middleware/reducer",
          "Line 4: console.log('Next state:', store.getState()) - Logs updated state",
          "Line 5: return result - Returns result for chaining",
          "Line 8-13: thunkMiddleware - Handles function actions (async)",
          "Line 9: if (typeof action === 'function') - Detects thunk",
          "Line 10: action(store.dispatch, store.getState) - Calls function with dispatch",
          "Line 16-24: errorMiddleware - Catches errors in action processing",
          "Line 27-36: performanceMiddleware - Measures action execution time",
          "Line 39-44: persistMiddleware - Auto-saves state to localStorage",
          "Line 47-50: applyMiddleware() - Applies middleware chain",
          "Line 53-56: configureStore with custom middleware - RTK approach"
        ],
        simpleMeaning: "Middleware is like security checkpoint for actions. Before action reaches reducer, middleware can log it, modify it, delay it, or stop it. Useful for async operations, error handling, logging, and analytics. Like airport security for your redux actions.",
        output: "Action logged → Performance measured → Error handled → State persisted",
        note: "Middleware order matters - they execute in sequence. Thunk middleware is included in configureStore. Use middleware for side effects, not business logic."
      },
      
      {
        name: "7. SELECTORS & RESELECT - Derived Data",
        description: "Selectors are functions that extract and optionally compute derived data from Redux state. Reselect (or createSelector in RTK) creates memoized selectors that only recompute when inputs change. Improves performance by avoiding unnecessary recalculations.",
        code: `// Basic selector (no memoization)
const selectTodos = (state) => state.todos;
const selectFilter = (state) => state.filter;

// Derived selector without memoization (recomputes every time)
const selectVisibleTodos = (state) => {
    const todos = selectTodos(state);
    const filter = selectFilter(state);
    
    if (filter === 'COMPLETED') {
        return todos.filter(todo => todo.completed);
    }
    if (filter === 'ACTIVE') {
        return todos.filter(todo => !todo.completed);
    }
    return todos;
};

// Memoized selector with Reselect
import { createSelector } from 'reselect';  // or from '@reduxjs/toolkit'

const selectTodos = (state) => state.todos;
const selectFilter = (state) => state.filter;

const selectVisibleTodos = createSelector(
    [selectTodos, selectFilter],  // Input selectors
    (todos, filter) => {          // Output function (only recomputes when inputs change)
        switch (filter) {
            case 'COMPLETED': return todos.filter(todo => todo.completed);
            case 'ACTIVE': return todos.filter(todo => !todo.completed);
            default: return todos;
        }
    }
);

// Complex derived data with multiple inputs
const selectSearchTerm = (state) => state.searchTerm;
const selectSortBy = (state) => state.sortBy;

const selectProcessedTodos = createSelector(
    [selectTodos, selectFilter, selectSearchTerm, selectSortBy],
    (todos, filter, searchTerm, sortBy) => {
        // Apply filter
        let result = todos;
        
        if (filter === 'COMPLETED') {
            result = result.filter(todo => todo.completed);
        } else if (filter === 'ACTIVE') {
            result = result.filter(todo => !todo.completed);
        }
        
        // Apply search
        if (searchTerm) {
            result = result.filter(todo => 
                todo.text.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        // Apply sorting
        if (sortBy === 'DATE') {
            result = [...result].sort((a, b) => a.date - b.date);
        } else if (sortBy === 'PRIORITY') {
            result = [...result].sort((a, b) => b.priority - a.priority);
        }
        
        return result;
    }
);

// Selector composition
const selectTodoStats = createSelector(
    [selectTodos],
    (todos) => ({
        total: todos.length,
        completed: todos.filter(t => t.completed).length,
        active: todos.filter(t => !t.completed).length,
        percentComplete: todos.length > 0 
            ? (todos.filter(t => t.completed).length / todos.length) * 100 
            : 0
    })
);

// Parameterized selectors (factory pattern)
const makeSelectTodoById = () => {
    return createSelector(
        [selectTodos, (state, todoId) => todoId],
        (todos, todoId) => todos.find(todo => todo.id === todoId)
    );
};

// Usage in component
import { useSelector } from 'react-redux';

function TodoList() {
    const visibleTodos = useSelector(selectVisibleTodos);
    const stats = useSelector(selectTodoStats);
    const todoById = useSelector(state => makeSelectTodoById()(state, 1));
    
    return (
        <div>
            <div>Total: {stats.total} | Completed: {stats.completed}</div>
            {visibleTodos.map(todo => <div key={todo.id}>{todo.text}</div>)}
        </div>
    );
}

// Selector with props (inline - not memoized per component)
// Not recommended for performance
const selectTodoByPropId = (state, props) => 
    state.todos.find(todo => todo.id === props.id);

// Better: use createSelector factory per component instance
function TodoItem({ id }) {
    const todo = useSelector(state => 
        state.todos.find(todo => todo.id === id)
    );
    return <div>{todo.text}</div>;
}`,
        lineByLine: [
          "Line 1: const selectTodos = (state) => state.todos - Simple selector",
          "Line 2: const selectFilter = (state) => state.filter - Another simple selector",
          "Line 5-13: selectVisibleTodos - Derives filtered data (recomputes every time)",
          "Line 16-26: createSelector([selectTodos, selectFilter], (todos, filter) => {}) - Memoized selector",
          "Line 17: Input selectors - Only recomputes when these change",
          "Line 18: Output function - Computes derived data",
          "Line 29-48: Complex selector - Multiple inputs and transformations",
          "Line 51-61: Selector composition - Reuses other selectors",
          "Line 64-70: Parameterized selector - Factory pattern for dynamic selects",
          "Line 73: useSelector(selectVisibleTodos) - Using selector in component"
        ],
        simpleMeaning: "Selectors are like queries for your Redux state. Instead of computing filtered data in every component, create a selector that does it once. Reselect remembers the last result - if inputs didn't change, it returns cached result instantly. Much faster!",
        output: "Visible todos filtered by status, sorted by date, searched by term. Stats: total, completed, active, percent complete. Only recomputed when data changes.",
        note: "Always use createSelector for expensive computations. Selectors can be composed and reused. Memoization prevents unnecessary recalculations. Parameterized selectors need memoization per component instance."
      },
      
      {
        name: "8. REACT-REDUX HOOKS - Connect Components",
        description: "React-Redux provides hooks to connect React components to Redux store. useSelector extracts data from store (subscribes to changes). useDispatch returns dispatch function. useStore returns store instance. Hooks are simpler than connect() HOC.",
        code: `// Install: npm install react-redux @reduxjs/toolkit

import React from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { increment, decrement, addByAmount } from './counterSlice';

// Basic usage
function Counter() {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(addByAmount(5))}>+5</button>
        </div>
    );
}

// Multiple selectors
function UserProfile() {
    const name = useSelector((state) => state.user.name);
    const email = useSelector((state) => state.user.email);
    const isLoading = useSelector((state) => state.user.loading);
    const dispatch = useDispatch();
    
    if (isLoading) return <div>Loading...</div>;
    
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

// Equality function (custom comparison)
function TodoList() {
    const todos = useSelector(
        (state) => state.todos,
        (left, right) => left.length === right.length  // Custom compare
    );
    // Only re-renders if todos length changes, not content
    
    return <div>{todos.length} todos</div>;
}

// Shallow equality with multiple values
import { shallowEqual } from 'react-redux';

function Dashboard() {
    const { user, settings, notifications } = useSelector(
        (state) => ({
            user: state.user,
            settings: state.settings,
            notifications: state.notifications
        }),
        shallowEqual  // Only re-render if any property changed
    );
    
    return <div>Dashboard content</div>;
}

// useDispatch with async actions
function AsyncActions() {
    const dispatch = useDispatch();
    
    const handleFetch = async () => {
        try {
            await dispatch(fetchUserData()).unwrap();
            console.log('Success');
        } catch (error) {
            console.error('Failed:', error);
        }
    };
    
    return <button onClick={handleFetch}>Fetch Data</button>;
}

// useStore (rarely needed)
function StoreInspector() {
    const store = useStore();
    const state = store.getState();
    
    return <pre>{JSON.stringify(state, null, 2)}</pre>;
}

// useSelector with props
function TodoItem({ id }) {
    const todo = useSelector((state) => 
        state.todos.find(todo => todo.id === id)
    );
    
    if (!todo) return null;
    return <div>{todo.text}</div>;
}

// Reselect with useSelector
import { createSelector } from '@reduxjs/toolkit';

const selectVisibleTodos = createSelector(
    (state) => state.todos,
    (state) => state.filter,
    (todos, filter) => {
        // Filter logic
        return todos.filter(t => t.status === filter);
    }
);

function FilteredTodoList() {
    const visibleTodos = useSelector(selectVisibleTodos);
    return <div>{visibleTodos.length} items</div>;
}

// Conditional dispatch
function ConditionalDispatch() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    
    const handleAction = () => {
        if (isAuthenticated) {
            dispatch(performAction());
        } else {
            dispatch(showLoginModal());
        }
    };
    
    return <button onClick={handleAction}>Action</button>;
}`,
        lineByLine: [
          "Line 1: import { useSelector, useDispatch } from 'react-redux' - Imports Redux hooks",
          "Line 2: const count = useSelector((state) => state.counter) - Extracts counter value",
          "Line 3: const dispatch = useDispatch() - Returns dispatch function",
          "Line 4: dispatch(increment()) - Dispatches increment action",
          "Line 6: Multiple selectors - Each useSelector subscribes separately",
          "Line 7: Custom equality function - Prevents unnecessary re-renders",
          "Line 8: shallowEqual - Compares object properties shallowly",
          "Line 9: async dispatch with unwrap() - Handles promise resolution",
          "Line 10: useStore() - Gets store instance (rarely needed)",
          "Line 11: Selector with props - Computes based on component props"
        ],
        simpleMeaning: "React-Redux hooks connect your React components to Redux store. useSelector pulls data from store (auto-subscribes). useDispatch sends actions. Like two-way radio - listen to channel (useSelector) and transmit messages (useDispatch). Simpler than older connect() pattern.",
        output: "Counter increments, user profile loads, todos filtered, async handled with loading states.",
        note: "useSelector subscribes to store - component re-renders when selected data changes. Use shallowEqual for objects with multiple values. Avoid dispatching in useEffect without dependencies."
      },
      
      {
        name: "9. REDUX DEVTOOLS - Debugging",
        description: "Redux DevTools Extension provides time-travel debugging, action inspection, state diffing, and performance monitoring. Configure with devTools option in configureStore. Supports features like jumping to past states, importing/exporting state, and dispatching custom actions.",
        code: `// Redux Toolkit automatically enables DevTools in development
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'  // Auto-enabled
});

// Custom DevTools configuration
const store = configureStore({
    reducer: rootReducer,
    devTools: {
        name: 'My App',                    // Instance name
        trace: true,                       // Track action stack traces
        traceLimit: 25,                    // Stack trace limit
        maxAge: 50,                        // Number of actions to keep
        serialize: {                       // Serialize non-serializable data
            options: {
                undefined: true,
                function: (fn) => fn.toString()
            }
        },
        actionSanitizer: (action) => {    // Clean sensitive data
            if (action.type === 'LOGIN') {
                return { ...action, payload: '***HIDDEN***' };
            }
            return action;
        },
        stateSanitizer: (state) => {       // Clean state before logging
            if (state.auth) {
                return { ...state, auth: { ...state.auth, token: '***' } };
            }
            return state;
        }
    }
});

// Manual DevTools connection (Vanilla JS)
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
        features: {
            pause: true,      // Pause recording
            export: true,     // Export state
            import: true,     // Import state
            jump: true,       // Jump to state
            persist: true,    // Persist state
            lock: true,       // Lock state
            reorder: true,    // Reorder actions
            test: true        // Test generators
        }
    })
);

// Programmatic DevTools actions
// window.__REDUX_DEVTOOLS_EXTENSION__.disconnect();  // Disconnect
// window.__REDUX_DEVTOOLS_EXTENSION__.send(action, state);  // Send custom

// DevTools features in browser
// 1. Time Travel: Jump to any past state
// 2. Action Inspector: See every action with diff
// 3. State Explorer: Browse full state tree
// 4. Chart: Visualize action frequency
// 5. Import/Export: Save/load action sequences
// 6. Dispatch: Test actions directly

// Custom action debugging middleware
const actionLogger = (store) => (next) => (action) => {
    console.group(\`Action: \${action.type}\`);
    console.log('Payload:', action.payload);
    console.log('Previous State:', store.getState());
    const result = next(action);
    console.log('Next State:', store.getState());
    console.groupEnd();
    return result;
};

// Configure store with multiple DevTools features
const store = configureStore({
    reducer: rootReducer,
    devTools: {
        name: 'Production App',
        trace: true,
        traceLimit: 25,
        actionsBlacklist: ['REFRESH_TOKEN'], // Don't log these actions
        actionsDenylist: ['HEARTBEAT'],
        actionsWhitelist: ['USER_LOGIN', 'ORDER_PLACED'], // Only log these
        features: {
            pause: true,
            export: true,
            test: true
        }
    },
    middleware: (getDefault) => getDefault().concat(actionLogger)
});

// Detect DevTools in component
function DevToolsStatus() {
    const [isDevToolsActive, setIsDevToolsActive] = React.useState(false);
    
    React.useEffect(() => {
        if (window.__REDUX_DEVTOOLS_EXTENSION__) {
            setIsDevToolsActive(true);
        }
    }, []);
    
    return isDevToolsActive ? 'DevTools connected' : 'DevTools not detected';
}`,
        lineByLine: [
          "Line 1: configureStore({ devTools: true }) - Enables DevTools automatically",
          "Line 2: name: 'My App' - Identifies store in DevTools",
          "Line 3: trace: true - Shows which component dispatched action",
          "Line 4: maxAge: 50 - Limits stored action history",
          "Line 5: actionSanitizer - Hides sensitive data in actions",
          "Line 6: stateSanitizer - Hides sensitive data in state",
          "Line 7: window.__REDUX_DEVTOOLS_EXTENSION__ - Manual connection",
          "Line 8: features - Enables specific DevTools features",
          "Line 9: actionsBlacklist/Whitelist - Filters logged actions"
        ],
        simpleMeaning: "Redux DevTools is like a time machine for your app state. See every action, inspect state changes, travel back in time to any previous state, even export and replay action sequences. Essential for debugging complex state issues.",
        output: "DevTools shows action history, state diffs, time travel controls, performance charts, and import/export options.",
        note: "DevTools automatically enabled in development with Redux Toolkit. Never expose sensitive data in actions. Use actionSanitizer for production logging. DevTools adds minimal performance overhead."
      }
    ]
  }
};

export default learning;
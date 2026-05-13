// /data/redux/learning.js – Complete Redux Documentation (30+ topics)

export const learning = {
  basic: {
    title: "🔄 REDUX BASICS: FUNDAMENTALS",
    description: "Comprehensive Redux guide covering core concepts: store, reducers, actions, dispatch, subscribe, middleware, and devtools. Perfect for beginners.",
    topics: [
      {
        name: "1. Redux Principles & Architecture",
        description: "Redux follows three core principles: Single source of truth (one store), State is read-only (only actions can change state), Changes are made with pure functions (reducers). The data flow is unidirectional: action -> reducer -> store -> view -> action.",
        code: `// Redux data flow
// 1. Store holds the state
// 2. View dispatches an action
// 3. Reducer updates the state immutably
// 4. Store notifies subscribers
// 5. View re-renders

// Example counter implementation
const { createStore } = require('redux');

// Reducer (pure function)
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};

// Store
const store = createStore(counterReducer);

// Dispatch action
store.dispatch({ type: 'INCREMENT' });`,
        lineByLine: [
          "Line 1: Single source of truth – one store",
          "Line 2: State is read-only – only actions trigger changes",
          "Line 3: Reducers are pure functions (no side effects)",
          "Line 4: Unidirectional data flow: action → reducer → store → view",
          "Line 6: createStore creates the Redux store",
          "Line 7: Reducer function with initial state and action",
          "Line 8: switch on action.type",
          "Line 9: Return new state (immutable)",
          "Line 12: dispatch sends action to reducer"
        ],
        simpleMeaning: "Redux is a predictable state container. One store holds the entire app state. You can only change state by dispatching actions. Reducers specify how state changes.",
        output: "State updates from 0 to 1 after dispatch",
        note: "Redux works with any UI layer, not just React."
      },
      {
        name: "2. Store, Reducer, Actions - Deep Dive",
        description: "Store holds state, reducer defines state transitions, actions are plain objects with type. Use createStore to instantiate store. getState reads state, dispatch sends actions, subscribe listens to changes.",
        code: `const { createStore } = require('redux');

// Initial state
const initialState = { count: 0, user: null };

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'SET_USER':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

// Create store
const store = createStore(rootReducer);

// Get state
console.log(store.getState()); // { count: 0, user: null }

// Subscribe
const unsubscribe = store.subscribe(() => {
    console.log('State changed:', store.getState());
});

// Dispatch actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'SET_USER', payload: { name: 'John' } });

// Unsubscribe
unsubscribe();`,
        lineByLine: [
          "Line 2: createStore imports",
          "Line 5: initial state object",
          "Line 8-15: reducer handles multiple actions",
          "Line 9: spread operator for immutable update",
          "Line 11: payload from action",
          "Line 18: createStore with reducer",
          "Line 21: getState returns current state",
          "Line 24: subscribe registers listener",
          "Line 25: listener runs on every state change",
          "Line 28: dispatch sends action",
          "Line 32: unsubscribe stops listening"
        ],
        simpleMeaning: "Store is the state container. Reducer tells how state changes. Actions are messages. Subscribe watches for changes.",
        output: "State changed: { count: 1, user: null } then { count: 1, user: { name: 'John' } }",
        note: "Always return a new object from reducer. Never mutate state directly."
      },
      {
        name: "3. Action Creators & Action Types",
        description: "Action creators are functions that return action objects. Action type constants prevent typos and make refactoring easier. Actions should have a type and optionally a payload. Use payload convention for extra data.",
        code: `// Action types as constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_BY = 'ADD_BY';
const SET_USER = 'SET_USER';

// Action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const addBy = (amount) => ({ type: ADD_BY, payload: amount });
const setUser = (user) => ({ type: SET_USER, payload: user });

// Reducer using action creators
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case ADD_BY:
            return state + action.payload;
        default:
            return state;
    }
};

// Dispatch using action creators
store.dispatch(increment());
store.dispatch(addBy(5));
store.dispatch(setUser({ id: 1, name: 'Alice' }));`,
        lineByLine: [
          "Line 2-5: Action type constants (prevents typos)",
          "Line 8-11: Action creators – functions returning action objects",
          "Line 10: Action with payload",
          "Line 14-21: Reducer using constants",
          "Line 18: action.payload for value",
          "Line 24-26: Dispatching actions using creators"
        ],
        simpleMeaning: "Action types are constants. Action creators are factories for actions. Use them to avoid typos and keep code DRY.",
        output: "State increments by 1, then by 5, user set to Alice.",
        note: "Action creators are optional but highly recommended. Use PascalCase or UPPER_SNAKE_CASE for types."
      },
      {
        name: "4. combineReducers - Multiple Reducers",
        description: "combineReducers merges multiple reducers into one root reducer. Each reducer manages its own slice of state. Useful for modularity and separation of concerns.",
        code: `import { createStore, combineReducers } from 'redux';

// Reducer for counter slice
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};

// Reducer for user slice
const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER': return action.payload;
        case 'CLEAR_USER': return null;
        default: return state;
    }
};

// Root reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const store = createStore(rootReducer);

// State shape: { counter: 0, user: null }
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'SET_USER', payload: { name: 'Bob' } });

console.log(store.getState()); // { counter: 1, user: { name: 'Bob' } }`,
        lineByLine: [
          "Line 4: counterReducer manages counter slice",
          "Line 11: userReducer manages user slice",
          "Line 18: combineReducers merges them",
          "Line 19-20: Each reducer gets its own state slice",
          "Line 22: createStore with root reducer",
          "Line 25-26: Dispatching actions updates respective slices",
          "Line 28: State is an object with both slices"
        ],
        simpleMeaning: "combineReducers lets you split state management across multiple reducers. Each reducer handles its own part of the state tree.",
        output: "State: { counter: 1, user: { name: 'Bob' } }",
        note: "Each reducer is responsible for its own slice. Action types can clash but reducers only respond to relevant types."
      },
      {
        name: "5. Middleware - Customizing Dispatch",
        description: "Middleware intercepts actions before they reach the reducer. Used for logging, crash reporting, async operations, routing, etc. Middleware has access to dispatch and getState.",
        code: `// Logger middleware
const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    console.log('Previous state:', store.getState());
    const result = next(action);
    console.log('Next state:', store.getState());
    return result;
};

// Thunk middleware (handles function actions)
const thunkMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    return next(action);
};

// Apply middleware
import { createStore, applyMiddleware } from 'redux';
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunkMiddleware));

// Using thunk for async
const fetchUser = (id) => async (dispatch) => {
    dispatch({ type: 'FETCH_USER_START' });
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        const user = await response.json();
        dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
    } catch (error) {
        dispatch({ type: 'FETCH_USER_ERROR', payload: error.message });
    }
};

store.dispatch(fetchUser(1));`,
        lineByLine: [
          "Line 2-7: logger middleware logs actions and state",
          "Line 10-14: thunk middleware detects function actions",
          "Line 11: if action is a function, call it with dispatch and getState",
          "Line 17: applyMiddleware composes middleware chain",
          "Line 18-19: thunk allows async actions",
          "Line 21-28: async action creator using thunk",
          "Line 22: dispatch start action",
          "Line 24-25: await API call",
          "Line 26: dispatch success action",
          "Line 31: dispatch the thunk"
        ],
        simpleMeaning: "Middleware intercepts actions to add side effects like logging, async calls, or crash reporting. Thunk middleware allows dispatching functions instead of plain actions.",
        output: "Logger prints actions; async action dispatches loading, success, or error states.",
        note: "Redux Toolkit includes thunk by default. Middleware order matters."
      },
      {
        name: "6. Redux DevTools Integration",
        description: "Redux DevTools Extension provides time‑travel debugging, action inspection, state diffing, and performance monitoring. In development, it's automatically enabled. You can also configure it manually.",
        code: `// Redux Toolkit automatically enables DevTools
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({ reducer: rootReducer });

// Manual configuration for vanilla Redux
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Custom DevTools options
const store = configureStore({
    reducer: rootReducer,
    devTools: {
        name: 'My App',
        trace: true,               // Show action stack traces
        maxAge: 50,                // Limit action history
        actionSanitizer: (action) => {
            // Hide sensitive data
            if (action.type === 'LOGIN') {
                return { ...action, password: '***' };
            }
            return action;
        }
    }
});`,
        lineByLine: [
          "Line 2: RTK auto‑enables DevTools",
          "Line 5-6: Manual enabling for vanilla Redux",
          "Line 9-15: Custom configuration",
          "Line 10-11: trace shows which component dispatched action",
          "Line 12: maxAge limits history",
          "Line 13-14: actionSanitizer hides sensitive data"
        ],
        simpleMeaning: "Redux DevTools lets you inspect every action, travel in time, and debug state changes easily.",
        output: "DevTools shows action history, state diffs, and performance charts.",
        note: "Always enable DevTools in development. Use sanitizers to protect sensitive data."
      }
    ]
  },
  advanced: {
    title: "🚀 ADVANCED REDUX: MASTERING STATE MANAGEMENT",
    description: "Deep dive into Redux Toolkit, async thunks, selectors, entity adapters, RTK Query, normalization, persistence, testing, and performance optimization.",
    topics: [
      {
        name: "7. Redux Toolkit (RTK) - configureStore & createSlice",
        description: "Redux Toolkit is the official, recommended way to write Redux. configureStore sets up store with good defaults (thunk, devtools). createSlice automatically generates actions and reducers with Immer for immutable updates.",
        code: `import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        addBy: (state, action) => state + action.payload,
        reset: () => 0
    }
});

// Extract actions and reducer
export const { increment, decrement, addBy, reset } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

// Create store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        // other slices
    }
});

// Use in component
// dispatch(increment());`,
        lineByLine: [
          "Line 5: createSlice defines name, initialState, reducers",
          "Line 6: name becomes prefix for action types (counter/increment)",
          "Line 8: Immer allows direct mutation (e.g., state += 1)",
          "Line 9: action.payload available",
          "Line 14: actions generated automatically",
          "Line 16: reducer is the slice reducer",
          "Line 19: configureStore combines reducers and adds middleware"
        ],
        simpleMeaning: "Redux Toolkit simplifies Redux with less boilerplate. createSlice auto‑generates actions and reducers. Immer lets you write mutable code that produces immutable updates.",
        output: "Store configured with counter slice. Actions: increment, decrement, addBy, reset.",
        note: "Always use Redux Toolkit for new projects. It's the standard since Redux 2.0."
      },
      {
        name: "8. createAsyncThunk - Async Actions",
        description: "createAsyncThunk simplifies handling async logic. It generates pending, fulfilled, and rejected action types. Use extraReducers to handle these states. You can also access getState for conditional fetching.",
        code: `import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/users');
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: { items: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default usersSlice.reducer;`,
        lineByLine: [
          "Line 5: createAsyncThunk with action type prefix and async function",
          "Line 7: async function throws error -> catches",
          "Line 8: await API call",
          "Line 9: return data (becomes action.payload on fulfilled)",
          "Line 11: rejectWithValue (custom error payload)",
          "Line 19: extraReducers handles async states",
          "Line 21-23: pending state (loading, clear error)",
          "Line 24-27: fulfilled state (loading false, set data)",
          "Line 28-31: rejected state (loading false, set error)"
        ],
        simpleMeaning: "createAsyncThunk handles API calls automatically. It dispatches pending, fulfilled, and rejected actions. Use extraReducers to manage loading and error states.",
        output: "Loading → Fetched users → Display list. On error, show error message.",
        note: "Thunk can also read getState() for conditional fetching, e.g., avoid refetch if data is fresh."
      },
      {
        name: "9. Selectors & Reselect (createSelector)",
        description: "Selectors are functions that extract data from state. createSelector memoizes derived data, recomputing only when inputs change. This improves performance and avoids unnecessary recalculations.",
        code: `import { createSelector } from '@reduxjs/toolkit';

// Basic selectors
const selectTodos = (state) => state.todos;
const selectFilter = (state) => state.filter;

// Memoized selector
const selectVisibleTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
        switch (filter) {
            case 'COMPLETED': return todos.filter(t => t.completed);
            case 'ACTIVE': return todos.filter(t => !t.completed);
            default: return todos;
        }
    }
);

// Composed selectors
const selectCompletedCount = createSelector(
    [selectTodos],
    (todos) => todos.filter(t => t.completed).length
);

// Parameterized selector (factory)
const makeSelectTodoById = () => createSelector(
    [selectTodos, (state, id) => id],
    (todos, id) => todos.find(todo => todo.id === id)
);

// Usage in component
// const visibleTodos = useSelector(selectVisibleTodos);`,
        lineByLine: [
          "Line 2: createSelector from RTK",
          "Line 5-6: input selectors",
          "Line 9: output selector (only runs when inputs change)",
          "Line 10-13: derived filtering logic",
          "Line 18-20: composed selector using another selector",
          "Line 23-26: factory function for parameterized selector"
        ],
        simpleMeaning: "Selectors compute derived data. createSelector caches the result; if inputs haven't changed, it returns the cached result instead of recalculating.",
        output: "Visible todos filtered, computed counts. No re‑computation if todos/filter unchanged.",
        note: "Always memoize expensive computations. Use createSelector to avoid performance issues."
      },
      {
        name: "10. Redux Persist - Saving State to Storage",
        description: "redux-persist saves the Redux store to localStorage, AsyncStorage, or other engines. It automatically rehydrates the state when the app loads. Useful for persisting user sessions, preferences, or drafts.",
        code: `// Install: npm install redux-persist
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'settings'], // only these reducers persist
    blacklist: ['temp'] // exclude these
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefault) =>
        getDefault({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
});

const persistor = persistStore(store);

// In your app, wrap with PersistGate
// import { PersistGate } from 'redux-persist/integration/react';
// <PersistGate loading={null} persistor={persistor}>
//   <App />
// </PersistGate>`,
        lineByLine: [
          "Line 4: persistReducer from redux‑persist",
          "Line 5: storage engine (localStorage)",
          "Line 8-11: config – key, storage, whitelist, blacklist",
          "Line 13: wrap rootReducer with persistReducer",
          "Line 15-20: configureStore with serialization check ignored for persist actions",
          "Line 22: persistor for controlling persistence",
          "Line 25: PersistGate delays rendering until rehydration"
        ],
        simpleMeaning: "redux‑persist automatically saves and restores the Redux state. User stays logged in, settings remembered across page reloads.",
        output: "State saved to localStorage; on reload, state is rehydrated.",
        note: "Avoid persisting sensitive data (e.g., tokens with short expiration). Use whitelist to persist only needed slices."
      },
      {
        name: "11. RTK Query - Data Fetching & Caching",
        description: "RTK Query is a powerful data fetching and caching solution built into Redux Toolkit. It automatically manages loading states, caching, deduplication, and invalidation. Define API endpoints with createApi.",
        code: `import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define API service
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['User', 'Post'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
            providesTags: ['User']
        }),
        getUserById: builder.query({
            query: (id) => \`users/\${id}\`,
            providesTags: (result, error, id) => [{ type: 'User', id }]
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: 'users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        updateUser: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: \`users/\${id}\`,
                method: 'PATCH',
                body: patch
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'User', id }]
        })
    })
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useAddUserMutation,
    useUpdateUserMutation
} = api;

// In component
function UserList() {
    const { data: users, isLoading, error } = useGetUsersQuery();
    const [addUser] = useAddUserMutation();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
            <button onClick={() => addUser({ name: 'New' })}>Add</button>
        </div>
    );
}`,
        lineByLine: [
          "Line 4: createApi defines API service",
          "Line 5: reducerPath (store key), baseQuery (fetch wrapper)",
          "Line 6: tagTypes for cache invalidation",
          "Line 8-10: query endpoint – GET request",
          "Line 9: query function returns URL",
          "Line 10: providesTags tells RTK Query to cache with these tags",
          "Line 12-14: query with parameter",
          "Line 16-22: mutation – POST request",
          "Line 21: invalidatesTags triggers refetch of related queries",
          "Line 28: auto‑generated React hooks"
        ],
        simpleMeaning: "RTK Query handles all data fetching, caching, and loading/error states. Write zero fetching logic – just define endpoints.",
        output: "Auto‑generated hooks: useGetUsersQuery, useAddUserMutation, etc. Cache is managed automatically.",
        note: "RTK Query deduplicates requests, caches responses, and refetches when tags invalidate."
      },
      {
        name: "12. Normalization with Normalizr & Entity Adapter",
        description: "Normalization flattens nested data to avoid duplication and improve update performance. Normalizr converts nested JSON to normalized shape. createEntityAdapter provides pre‑built reducers and selectors for normalized data.",
        code: `import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';

// Normalizr schema
const userSchema = new schema.Entity('users');
const articleSchema = new schema.Entity('articles', {
    author: userSchema
});

// Sample nested data
const nestedData = {
    id: 1,
    title: 'Article',
    author: { id: 1, name: 'John' }
};

// Normalize
const normalized = normalize(nestedData, articleSchema);
// Result: { entities: { users: { 1: { id:1, name:'John' } }, articles: { 1: { id:1, title:'Article', author:1 } } }, result: 1 }

// Entity adapter for users
const usersAdapter = createEntityAdapter();
const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {
        usersReceived: (state, action) => {
            usersAdapter.setAll(state, action.payload);
        },
        userAdded: usersAdapter.addOne,
        userUpdated: usersAdapter.updateOne,
        userRemoved: usersAdapter.removeOne
    }
});

// Selectors
const { selectAll: selectAllUsers, selectById: selectUserById } = usersAdapter.getSelectors(state => state.users);`,
        lineByLine: [
          "Line 4: createEntityAdapter provides CRUD reducers",
          "Line 6-8: Normalizr schemas – user and article",
          "Line 15-16: normalize converts nested data to flat entities",
          "Line 19: usersAdapter instance",
          "Line 21: initialState with { ids: [], entities: {} }",
          "Line 23: setAll replaces entire collection",
          "Line 25-27: addOne, updateOne, removeOne",
          "Line 30: getSelectors creates selectors (selectAll, selectById)"
        ],
        simpleMeaning: "Normalization avoids nested data in Redux, making updates easier. Entity adapter provides ready‑to‑use reducers and selectors for collections.",
        output: "State becomes flat { users: { ids: [1], entities: {1:{...}} } }. Updates are simple.",
        note: "Use normalizr when API returns deeply nested data. Entity adapter eliminates boilerplate for CRUD operations."
      },
      {
        name: "13. Redux with TypeScript",
        description: "Typed Redux ensures type safety for actions, state, and dispatch. Define RootState and AppDispatch types. Use typed hooks (useAppSelector, useAppDispatch). Action creators and reducers benefit from TypeScript's inference.",
        code: `// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// State type
export interface RootState {
    counter: number;
    user: { name: string } | null;
}

// Action types
type Action = 
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'SET_USER'; payload: { name: string } };

// Reducer with typed state and action
const counterReducer = (state: number = 0, action: Action): number => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};

// Store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: (state = null, action: Action) => 
            action.type === 'SET_USER' ? action.payload : state
    }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Usage in component
// const dispatch = useAppDispatch();
// const count = useAppSelector(state => state.counter);
// dispatch({ type: 'INCREMENT' });`,
        lineByLine: [
          "Line 4: import hooks",
          "Line 7-10: RootState interface",
          "Line 13-17: Action union type (discriminated union)",
          "Line 19-24: Reducer with typed state and action",
          "Line 31-34: Store creation",
          "Line 36-37: AppDispatch and typed hooks",
          "Line 40: useAppSelector for typed state"
        ],
        simpleMeaning: "TypeScript catches errors early. Typed hooks provide autocompletion and type safety for state and dispatch.",
        output: "Full type safety in Redux code. No more 'any' for state or actions.",
        note: "Use `createSlice` from RTK – it infers types automatically, reducing manual typing."
      },
      {
        name: "14. Redux Performance Optimization",
        description: "Optimize Redux performance by memoizing selectors, avoiding unnecessary re‑renders, using shallow equality checks, splitting reducers, and leveraging RTK Query’s caching.",
        code: `// 1. Memoized selectors with createSelector
const selectTodos = (state) => state.todos;
const selectFilter = (state) => state.filter;
const selectVisibleTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => filter === 'active' ? todos.filter(t => !t.completed) : todos
);

// 2. Shallow equality in useSelector
import { shallowEqual } from 'react-redux';
const { user, settings } = useSelector(state => ({
    user: state.user,
    settings: state.settings
}), shallowEqual); // only re‑renders if user or settings reference changed

// 3. Avoid unnecessary dispatch inside effects
useEffect(() => {
    if (!state.data) dispatch(fetchData());
}, [dispatch, state.data]); // dependency array includes data to prevent duplicate fetches

// 4. Use batched updates (React 18+ or redux-batched-actions)
import { batch } from 'react-redux';
const handleClick = () => {
    batch(() => {
        dispatch(action1());
        dispatch(action2());
    });
};

// 5. Reducer performance – use createSlice (Immer) which is efficient
const slice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            // direct mutation – Immer produces immutable update
            state.push(action.payload);
        }
    }
});`,
        lineByLine: [
          "Line 2-7: createSelector memoizes derived data",
          "Line 10-14: shallowEqual prevents re‑renders when nested object properties change",
          "Line 16-18: Guard against unnecessary dispatches",
          "Line 20-23: batch multiple dispatches to reduce re‑renders",
          "Line 25-30: Immer produces efficient immutable updates"
        ],
        simpleMeaning: "Memoize selectors, use shallow equality, batch updates, and avoid useless dispatches to keep Redux fast.",
        output: "Fewer re‑renders, faster updates, better user experience.",
        note: "Redux is already performant; most optimizations prevent wasted renders, not state updates."
      },
      {
        name: "15. Testing Redux",
        description: "Test Redux reducers and async thunks in isolation. Use `@testing-library/react` to test components with Redux. Mock API calls and assert dispatched actions.",
        code: `// test counter reducer
import counterReducer from './counterSlice';

test('increment action', () => {
    const previousState = 0;
    const newState = counterReducer(previousState, { type: 'INCREMENT' });
    expect(newState).toBe(1);
});

// test async thunk
import { fetchUser } from './userSlice';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('fetchUser dispatches success', () => {
    const store = mockStore({});
    const mockUser = { id: 1, name: 'John' };
    jest.spyOn(api, 'getUser').mockResolvedValue(mockUser);

    return store.dispatch(fetchUser(1)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'FETCH_USER_PENDING' });
        expect(actions[1]).toEqual({ type: 'FETCH_USER_FULFILLED', payload: mockUser });
    });
});

// test component with Redux
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserList from './UserList';

test('displays users', () => {
    const store = configureStore({
        reducer: { users: () => ({ items: [{ id: 1, name: 'Alice' }] }) }
    });
    render(
        <Provider store={store}>
            <UserList />
        </Provider>
    );
    expect(screen.getByText('Alice')).toBeInTheDocument();
});`,
        lineByLine: [
          "Line 2-6: Unit test for reducer – pure function test",
          "Line 9-21: Async thunk test with mock store",
          "Line 10: redux‑mock‑store creates store for testing",
          "Line 18: mock API response",
          "Line 21-23: assert dispatched actions sequence",
          "Line 25-35: Component test with Provider wrapper"
        ],
        simpleMeaning: "Test reducers as pure functions. Test async thunks by checking dispatched actions. Wrap components with Provider for integration tests.",
        output: "Tests ensure reducers produce correct state, thunks dispatch expected actions, components render correctly.",
        note: "Mock API calls to avoid real network requests. Use `redux-mock-store` for thunk testing."
      }
    ]
  }
};

export default learning;
export const interview = {
  fresher: [
    {
      question: "What is Redux? Explain its three core principles.",
      answer: "Redux is a predictable state container for JavaScript applications. Three principles: 1. Single source of truth - entire app state stored in single store object tree. 2. State is read-only - only way to change state is by dispatching actions. 3. Changes with pure functions - reducers specify how state transforms based on actions.",
      example: "const store = createStore(reducer);\nconst state = store.getState();\nstore.dispatch({ type: 'INCREMENT' });",
      output: "State changes only through dispatched actions",
      note: "Redux Toolkit is now the official way to write Redux"
    },
    {
      question: "What is an action? A reducer? A store?",
      answer: "Action: Plain JavaScript object with 'type' property describing what happened. Reducer: Pure function taking current state and action, returning new state without mutation. Store: Object that holds application state, created by createStore().",
      example: "// Action\n{ type: 'ADD_TODO', payload: 'Learn Redux' }\n// Reducer\nfunction todoReducer(state = [], action) {\n  if (action.type === 'ADD_TODO') {\n    return [...state, action.payload];\n  }\n  return state;\n}\n// Store\nconst store = createStore(todoReducer);",
      output: "Store initialized, actions dispatched, state updated immutably",
      note: "Never mutate state directly - always return new object/array"
    },
    {
      question: "What is the purpose of combineReducers?",
      answer: "combineReducers merges multiple reducers into one root reducer. Each reducer manages its own slice of state. Makes state management modular and maintainable.",
      example: "import { combineReducers, createStore } from 'redux';\nconst rootReducer = combineReducers({\n  todos: todoReducer,\n  filter: filterReducer,\n  user: userReducer\n});\nconst store = createStore(rootReducer);\n// store.getState() returns { todos: [], filter: 'all', user: {} }",
      output: "Store has state.todos, state.filter, state.user slices",
      note: "Keys in combineReducers become slice names in state"
    },
    {
      question: "How do you connect React with Redux?",
      answer: "Use Provider component from react-redux to wrap app, then useSelector to read state, useDispatch to send actions. Provider passes store down via Context API.",
      example: "import { Provider, useSelector, useDispatch } from 'react-redux';\n// Wrap app\n<Provider store={store}><App /></Provider>\n// Component\nconst count = useSelector(state => state.counter);\nconst dispatch = useDispatch();\n<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>",
      output: "Component reads state and dispatches actions to update store",
      note: "Hooks are simpler than legacy connect HOC. Use in functional components only."
    },
    {
      question: "What is a pure function in Redux context?",
      answer: "Pure function returns same output for same inputs, no side effects, no mutation of arguments. Redux reducers must be pure - they calculate new state based on previous state and action, without API calls, localStorage, or random values.",
      example: "// Pure reducer (good)\nconst reducer = (state = 0, action) => {\n  if (action.type === 'INC') return state + 1;\n  return state;\n};\n// Impure reducer (bad - mutates state)\nconst impureReducer = (state = [], action) => {\n  state.push(action.payload); // Mutates!\n  return state;\n};",
      output: "Pure reducer predictable, testable, debuggable",
      note: "Redux Toolkit's createSlice uses Immer to allow mutable code while keeping reducers pure"
    },
    {
      question: "What is the difference between store.dispatch() and store.subscribe()?",
      answer: "dispatch() sends actions to reducers to update state. subscribe() registers listeners that run whenever state changes. dispatch triggers reducers → state update → subscribers run.",
      example: "const unsubscribe = store.subscribe(() => {\n  console.log('State changed:', store.getState());\n});\nstore.dispatch({ type: 'INCREMENT' }); // Triggers subscriber\nunsubscribe(); // Stop listening",
      output: "dispatch updates state, subscribe runs on every update",
      note: "React-Redux uses subscribe internally; rarely need to use directly"
    },
    {
      question: "What are action creators? Why use them?",
      answer: "Action creators are functions that return action objects. They encapsulate action creation logic, reduce typos, and support dynamic payloads. Recommended pattern for reusability.",
      example: "// Without action creator\nstore.dispatch({ type: 'ADD_TODO', payload: 'Task 1' });\n// With action creator\nconst addTodo = (text) => ({ type: 'ADD_TODO', payload: text });\nstore.dispatch(addTodo('Task 1'));\n// Async action creator (returns function with thunk)\nconst fetchTodo = (id) => async (dispatch) => {\n  const res = await fetch(`/api/todo/${id}`);\n  dispatch(addTodo(res.data));\n};",
      output: "Encapsulated, reusable, testable action creation",
      note: "Redux Toolkit's createSlice automatically generates action creators"
    },
    {
      question: "What is the role of middleware in Redux?",
      answer: "Middleware intercepts actions before they reach reducer. Used for async operations (thunk, saga), logging, crash reporting, routing, and modifying actions. Middleware forms pipeline: action → middleware1 → middleware2 → reducer.",
      example: "const logger = store => next => action => {\n  console.log('Dispatching:', action);\n  const result = next(action); // Pass to next middleware/reducer\n  console.log('Next state:', store.getState());\n  return result;\n};\nconst store = createStore(reducer, applyMiddleware(logger));",
      output: "Middleware logs every action and state change",
      note: "configureStore includes thunk middleware by default"
    },
    {
      question: "How do you handle async operations in Redux?",
      answer: "Use middleware like Redux Thunk (standard) or Redux Saga. Thunk allows action creators to return functions. Redux Toolkit's createAsyncThunk simplifies async logic with pending/fulfilled/rejected states.",
      example: "// Redux Thunk\nconst fetchUser = (id) => async (dispatch) => {\n  dispatch({ type: 'FETCH_START' });\n  try {\n    const res = await fetch(`/api/user/${id}`);\n    const data = await res.json();\n    dispatch({ type: 'FETCH_SUCCESS', payload: data });\n  } catch (error) {\n    dispatch({ type: 'FETCH_ERROR', error });\n  }\n};\n// Redux Toolkit\nconst fetchUser = createAsyncThunk('user/fetch', async (id) => {\n  const res = await fetch(`/api/user/${id}`);\n  return res.json();\n});",
      output: "Handles async API calls with loading/error states",
      note: "createAsyncThunk generates pending/fulfilled/rejected action types automatically"
    },
    {
      question: "What is the difference between action and reducer?",
      answer: "Action describes what happened (event). Reducer describes how state changes in response (calculation). Action = intent, Reducer = implementation. Multiple actions can be handled by one reducer.",
      example: "// Action (what happened)\n{ type: 'ADD_TODO', payload: 'Learn Redux' }\n// Reducer (how state changes)\nconst reducer = (state = [], action) => {\n  if (action.type === 'ADD_TODO') {\n    return [...state, action.payload];\n  }\n  return state;\n};",
      output: "Action dispatched, reducer updates state based on action type",
      note: "Reducers must be pure - same input always produces same output"
    },
    {
      question: "Why is immutability important in Redux?",
      answer: "Immutability ensures predictable state updates, enables time-travel debugging, allows React-Redux to detect changes efficiently (shallow equality), and prevents accidental side effects.",
      example: "// Bad - mutates state\nstate.todos.push(newTodo);\nreturn state;\n// Good - returns new array\nreturn [...state.todos, newTodo];\n// Good - using Immer (Redux Toolkit)\nstate.todos.push(newTodo); // Immer makes it immutable",
      output: "State updates are traceable and React re-renders optimized",
      note: "Redux Toolkit includes Immer for writing mutable-looking code safely"
    },
    {
      question: "What is a slice in Redux Toolkit?",
      answer: "Slice is a collection of reducer logic and actions for a feature. Created with createSlice() which accepts name, initialState, reducers. Automatically generates action creators and action types.",
      example: "const counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: {\n    increment: state => state + 1,\n    decrement: state => state - 1,\n    addByAmount: (state, action) => state + action.payload\n  }\n});\n// Generated action creators\ncounterSlice.actions.increment(); // { type: 'counter/increment' }\n// Generated reducer\ncounterSlice.reducer",
      output: "Single file contains actions, reducers, and state for a feature",
      note: "Slices are the recommended way to organize Redux state in modern Redux"
    },
    {
      question: "How do you access Redux state in a React component?",
      answer: "Use useSelector hook from react-redux. Selector function receives entire Redux state, returns selected data. Component automatically re-renders when selected data changes.",
      example: "import { useSelector } from 'react-redux';\nfunction Counter() {\n  // Select single value\n  const count = useSelector(state => state.counter);\n  // Select multiple values with object\n  const { user, loading } = useSelector(state => ({\n    user: state.user,\n    loading: state.loading\n  }));\n  return <div>{count}</div>;\n}",
      output: "Component receives current Redux state and updates on changes",
      note: "Use shallowEqual comparison when selecting multiple values as object"
    },
    {
      question: "What is the Provider component?",
      answer: "Provider makes Redux store available to all nested components via React Context. Must wrap the entire app. Takes store as prop.",
      example: "import { Provider } from 'react-redux';\nimport { store } from './store';\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n);",
      output: "All components can access Redux store via hooks",
      note: "Provider is typically placed at the root of React application"
    },
    {
      question: "What is the difference between useSelector and connect?",
      answer: "useSelector is modern hook API (React 16.8+), simpler and more flexible. connect is older HOC (Higher-Order Component), more verbose, works with class components. Both provide Redux state to components.",
      example: "// Modern hook\nconst count = useSelector(state => state.counter);\nconst dispatch = useDispatch();\n// Legacy HOC\nconnect(state => ({ count: state.counter }), { increment })(Component);",
      output: "useSelector is simpler, connect works with class components",
      note: "Hooks are recommended for new code. connect still used in class components."
    },
    {
      question: "What happens when you dispatch an action?",
      answer: "Action is sent to store, passes through middleware chain, then reaches root reducer, which computes new state. All subscribers (including React components) are notified and re-render if needed.",
      example: "store.dispatch({ type: 'INCREMENT' });\n// Flow:\n// 1. Action goes to middleware\n// 2. Reaches root reducer\n// 3. New state computed\n// 4. Subscribers run\n// 5. React components re-render",
      output: "State updates and UI reflects changes",
      note: "Dispatch is synchronous by default; async actions need middleware"
    },
    {
      question: "What is the typical folder structure for Redux?",
      answer: "Feature-based structure: each feature has its own folder with slice file. Alternative: ducks pattern (actions/reducers in same file). Modern Redux Toolkit uses slices per feature.",
      example: "src/\n  features/\n    counter/\n      counterSlice.js\n      Counter.js\n    todos/\n      todosSlice.js\n      TodoList.js\n  app/\n    store.js\n    rootReducer.js\n  utils/\n    api.js",
      output: "Organized, scalable, easy to maintain structure",
      note: "Feature-based organization recommended over file-type separation"
    },
    {
      question: "How do you debug Redux applications?",
      answer: "Use Redux DevTools Extension (time-travel debugging, action inspection). Add logger middleware. Use Redux Toolkit's built-in DevTools integration. console.log actions and state changes.",
      example: "// Redux Toolkit automatically enables DevTools\nconst store = configureStore({ reducer });\n// Custom logger middleware\nconst logger = store => next => action => {\n  console.log('action:', action);\n  console.log('prev state:', store.getState());\n  const result = next(action);\n  console.log('next state:', store.getState());\n  return result;\n};",
      output: "Time-travel debugging, action inspection, state diffing",
      note: "Redux DevTools is essential for debugging complex state issues"
    },
    {
      question: "What is the difference between store.getState() and useSelector?",
      answer: "store.getState() returns current state snapshot, doesn't subscribe to changes. useSelector is React hook that subscribes and triggers re-render when selected state changes.",
      example: "// Outside React (vanilla)\nconst state = store.getState();\n// Inside React component\nconst count = useSelector(state => state.counter); // Subscribes",
      output: "useSelector updates component on state changes, getState doesn't",
      note: "Never use store.getState() directly in React components"
    },
    {
      question: "What are selectors? Why are they useful?",
      answer: "Selectors are functions that extract specific pieces of state. They encapsulate state structure, reduce duplication, and can be memoized for performance (Reselect).",
      example: "// Basic selector\nconst selectTodos = state => state.todos;\nconst selectFilter = state => state.filter;\n// Derived selector with memoization\nconst selectVisibleTodos = createSelector(\n  [selectTodos, selectFilter],\n  (todos, filter) => filter === 'active' \n    ? todos.filter(t => !t.completed) \n    : todos\n);",
      output: "Reusable, maintainable, performant state access",
      note: "createSelector memoizes results, preventing unnecessary recalculations"
    },
    {
      question: "What is the payload convention in Redux actions?",
      answer: "Flux Standard Action (FSA) convention: action object should have type, payload, error, meta fields. payload contains action data, meta contains non-action data.",
      example: "// FSA compliant actions\n{ type: 'ADD_TODO', payload: { id: 1, text: 'Learn Redux' } }\n{ type: 'FETCH_ERROR', error: true, payload: 'Network error' }\n{ type: 'ACTION_META', payload: 'data', meta: { timestamp: Date.now() } }\n// Redux Toolkit createSlice follows this pattern",
      output: "Standardized action structure across codebase",
      note: "Not required but recommended for consistency"
    },
    {
      question: "How do you reset the Redux store to initial state?",
      answer: "Create root reducer that handles special 'RESET_APP' action. Use reducer composition to reset slices. Or replace reducer with fresh one using store.replaceReducer().",
      example: "const rootReducer = (state, action) => {\n  if (action.type === 'RESET_APP') {\n    state = undefined; // Reset to initial state\n  }\n  return appReducer(state, action);\n};\n// Or reset specific slice\nconst todoReducer = (state = initialState, action) => {\n  if (action.type === 'RESET_TODOS') return initialState;\n  // other logic\n};",
      output: "Store returns to initial state on RESET action",
      note: "Reset is useful for user logout or clearing cached data"
    },
    {
      question: "What is the difference between Redux and Context API?",
      answer: "Redux: predictable state updates, DevTools, middleware support, performance optimized. Context API: simpler setup, built into React, no middleware, can cause unnecessary re-renders without memoization.",
      example: "Redux for complex global state, frequent updates, async. Context for theme, auth, simple shared state.",
      output: "Redux for complex apps, Context for simple scenarios",
      note: "Many apps use both: Redux for app state, Context for DI"
    },
    {
      question: "How do you structure Redux state for performance?",
      answer: "Normalize nested data (like database). Keep state minimal, avoid duplication. Use selectors to compute derived data. Split state into slices. Use memoized selectors for expensive computations.",
      example: "// Bad (nested)\n{ users: [{ id: 1, posts: [{ id, title }] }] }\n// Good (normalized)\n{\n  users: { 1: { id: 1, name: 'John' } },\n  posts: { 1: { id: 1, title: 'Post', userId: 1 } }\n}",
      output: "Faster updates, easier to maintain, less duplication",
      note: "Normalize deeply nested data using normalizr library"
    },
    {
      question: "What is the purpose of extraReducers in createSlice?",
      answer: "extraReducers handles actions not generated by the slice (e.g., async thunk actions, actions from other slices). Used for responding to external actions.",
      example: "const todoSlice = createSlice({\n  name: 'todos',\n  initialState: [],\n  reducers: { addTodo: (state, action) => { state.push(action.payload); } },\n  extraReducers: (builder) => {\n    builder\n      .addCase(fetchTodos.pending, (state) => { state.loading = true; })\n      .addCase(fetchTodos.fulfilled, (state, action) => {\n        state.loading = false;\n        state.items = action.payload;\n      });\n  }\n});",
      output: "Slice can respond to actions from other slices or async thunks",
      note: "Use extraReducers for async thunk states (pending/fulfilled/rejected)"
    },
    {
      question: "What is the significance of the 'type' field in actions?",
      answer: "type field uniquely identifies the action. Reducers use it to determine how to update state. Type should be string constant, preferably in format 'feature/actionName'.",
      example: "// Good\n{ type: 'todos/addTodo', payload: 'Learn Redux' }\n{ type: 'counter/increment' }\n// Bad\n{ type: 'ADD' } // Too generic",
      output: "Actions recognizable, debuggable, and organized by feature",
      note: "Redux Toolkit actions use format 'sliceName/reducerName'"
    },
    {
      question: "How do you handle errors in Redux actions?",
      answer: "Use try/catch in thunks, dispatch error actions. Redux Toolkit's createAsyncThunk automatically handles errors with rejectWithValue. Display errors via selector in component.",
      example: "const fetchUser = createAsyncThunk(\n  'user/fetch',\n  async (id, { rejectWithValue }) => {\n    try {\n      const res = await fetch(`/api/user/${id}`);\n      if (!res.ok) throw new Error('Failed to fetch');\n      return res.json();\n    } catch (err) {\n      return rejectWithValue(err.message);\n    }\n  }\n);\n// Slice handles rejected case\nextraReducers: (builder) => {\n  builder.addCase(fetchUser.rejected, (state, action) => {\n    state.error = action.payload; // Error message\n  });\n}",
      output: "Consistent error state in Redux store",
      note: "Always display user-friendly error messages, not raw error objects"
    },
    {
      question: "What is the difference between synchronous and asynchronous actions?",
      answer: "Synchronous actions dispatch immediately, update state right away. Asynchronous actions need middleware (thunk, saga), dispatch multiple actions over time (pending, success, error).",
      example: "// Synchronous\nstore.dispatch({ type: 'INCREMENT' }); // Immediate\n// Asynchronous with thunk\nconst incrementAsync = () => async (dispatch) => {\n  await delay(1000);\n  dispatch({ type: 'INCREMENT' });\n};",
      output: "Async actions handle API calls, debouncing, complex workflows",
      note: "createAsyncThunk simplifies common async patterns"
    },
    {
      question: "How do you persist Redux state to localStorage?",
      answer: "Subscribe to store changes and save state to localStorage. On app load, read persisted state and pass as preloadedState to createStore/configureStore.",
      example: "// Save state\nstore.subscribe(() => {\n  localStorage.setItem('reduxState', JSON.stringify(store.getState()));\n});\n// Load state\nconst persistedState = localStorage.getItem('reduxState')\n  ? JSON.parse(localStorage.getItem('reduxState'))\n  : undefined;\nconst store = configureStore({\n  reducer,\n  preloadedState: persistedState\n});",
      output: "State persists across page reloads",
      note: "Don't persist sensitive data (tokens, passwords). Use redux-persist library for advanced features."
    },
    {
      question: "What is the difference between useDispatch and useStore?",
      answer: "useDispatch returns dispatch function to send actions. useStore returns entire store object (rarely needed). useSelector is preferred for reading state.",
      example: "const dispatch = useDispatch();\nconst store = useStore();\nconst state = store.getState(); // Not recommended\n// Better\nconst state = useSelector(s => s);",
      output: "useDispatch for sending actions, useSelector for reading state",
      note: "useStore is rarely needed - useSelector covers most use cases"
    },
    {
      question: "How do you reorganize state when adding new features?",
      answer: "Add new slices using combineReducers or additional reducers in configureStore. Update selectors accordingly. Use feature-based folder structure. Migrate data gradually.",
      example: "// Add new slice\nconst store = configureStore({\n  reducer: {\n    existing: existingReducer,\n    newFeature: newFeatureReducer  // Add here\n  }\n});\n// Update selectors\nconst selectNewData = (state) => state.newFeature.data;",
      output: "State extended without breaking existing features",
      note: "Redux's modular nature makes incremental updates straightforward"
    },
    {
      question: "What is the purpose of the root reducer?",
      answer: "Root reducer combines all feature reducers into one. Created with combineReducers or manually. Single reducer passed to createStore.",
      example: "// Using combineReducers\nconst rootReducer = combineReducers({\n  todos: todoReducer,\n  user: userReducer\n});\n// Manual root reducer\nconst rootReducer = (state = {}, action) => ({\n  todos: todoReducer(state.todos, action),\n  user: userReducer(state.user, action)\n});",
      output: "Single reducer managing entire application state",
      note: "createStore expects one root reducer"
    },
    {
      question: "How do you test Redux reducers?",
      answer: "Reducers are pure functions - easy to test. Provide initial state and action, expect new state. Test edge cases (undefined state, unknown action).",
      example: "test('counter reducer increments', () => {\n  const state = 0;\n  const action = { type: 'INCREMENT' };\n  const newState = counterReducer(state, action);\n  expect(newState).toBe(1);\n});\ntest('unknown action returns same state', () => {\n  const state = 5;\n  const action = { type: 'UNKNOWN' };\n  expect(counterReducer(state, action)).toBe(state);\n});",
      output: "Reliable reducer logic verified",
      note: "Test reducers in isolation, not connected to React"
    },
    {
      question: "What is the difference between action and event in Redux?",
      answer: "Action describes state change intention (what should happen). Event describes what already happened. In Redux, actions are the only way to describe state changes.",
      example: "// Action (intention)\n{ type: 'ADD_TODO', payload: 'Task' }\n// Event (past occurrence)\n{ type: 'TODO_ADDED', payload: 'Task' }",
      output: "Actions are commands; events are records",
      note: "Both are valid patterns; actions more common in Redux"
    },
    {
      question: "How do you share Redux state between multiple React apps?",
      answer: "Use global Redux store accessible across apps (microfrontends). Share store instance or use events. More common: use separate stores per app and coordinate via API.",
      example: "// Share store instance\nwindow.globalStore = store;\n// App2 uses same store\nconst dispatch = window.globalStore.dispatch;\nconst state = window.globalStore.getState();",
      output: "Multiple apps access same Redux state",
      note: "Better to use API for communication between separate apps"
    },
    {
      question: "What is the Redux data flow?",
      answer: "Unidirectional flow: View dispatches action → action sent to store → store passes to middleware → root reducer updates state → store notifies subscribers → view re-renders. One-way data flow makes debugging easy.",
      example: "1. User clicks button → 2. dispatch(action) → 3. Middleware intercepts → 4. Reducer updates state → 5. Store emits change → 6. React components re-render",
      output: "Predictable, traceable data flow",
      note: "Redux flow is similar to Flux but with single store"
    },
    {
      question: "What are meta reducers (higher-order reducers)?",
      answer: "Meta reducers are functions that take reducer and return enhanced reducer. Useful for adding common functionality (undo/redo, reset, logging) to multiple reducers.",
      example: "const undoable = (reducer) => {\n  return (state = { past: [], present: null }, action) => {\n    if (action.type === 'UNDO') {\n      const previous = state.past[state.past.length - 1];\n      return { ...state, present: previous };\n    }\n    const newPresent = reducer(state.present, action);\n    return { ...state, present: newPresent };\n  };\n};\nconst undoableTodos = undoable(todoReducer);",
      output: "Reusable enhancement for multiple reducers",
      note: "Similar concept to middleware but for reducers"
    },
    {
      question: "How do you handle optimistic updates with Redux?",
      answer: "Update UI immediately (optimistic), then revert if API call fails. Dispatch optimistic action, then API call, then confirm or rollback with error action.",
      example: "const addTodoOptimistic = (text) => async (dispatch, getState) => {\n  // Optimistic update\n  dispatch({ type: 'ADD_TODO', payload: { id: tempId, text, pending: true } });\n  try {\n    const res = await api.addTodo(text);\n    // Confirm with real data\n    dispatch({ type: 'UPDATE_TODO', payload: { id: tempId, serverId: res.id, pending: false } });\n  } catch (error) {\n    // Rollback\n    dispatch({ type: 'REMOVE_TODO', payload: tempId });\n    dispatch({ type: 'SHOW_ERROR', payload: 'Failed to add todo' });\n  }\n};",
      output: "UI updates instantly, then syncs with server",
      note: "Handle rollback properly to avoid state inconsistency"
    },
    {
      question: "What is the difference between Redux Toolkit and plain Redux?",
      answer: "Redux Toolkit reduces boilerplate (no action constants, switch statements). Includes defaults: thunk middleware, DevTools, Immer for immutable updates. configureStore replaces createStore.",
      example: "// Plain Redux\nconst INCREMENT = 'INCREMENT';\nconst increment = () => ({ type: INCREMENT });\nconst reducer = (state = 0, action) => {\n  switch (action.type) {\n    case INCREMENT: return state + 1;\n    default: return state;\n  }\n};\nconst store = createStore(reducer);\n// Redux Toolkit\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: { increment: state => state + 1 }\n});\nconst store = configureStore({ reducer: counterSlice.reducer });",
      output: "50-80% less code, same functionality",
      note: "RTK is official recommended way since 2019"
    },
    {
      question: "How do you handle WebSocket events in Redux?",
      answer: "Create middleware that connects to WebSocket, dispatches actions on incoming messages. Dispatch actions to send messages. Keep connection status in store.",
      example: "const websocketMiddleware = (store) => {\n  let socket = null;\n  return next => action => {\n    if (action.type === 'WS_CONNECT') {\n      socket = new WebSocket(action.payload);\n      socket.onmessage = (event) => {\n        store.dispatch({ type: 'WS_MESSAGE', payload: event.data });\n      };\n    }\n    if (action.type === 'WS_SEND' && socket) {\n      socket.send(action.payload);\n    }\n    return next(action);\n  };\n};",
      output: "Real-time bidirectional communication in Redux",
      note: "Handle reconnection, error states, and close gracefully"
    },
    {
      question: "What is the purpose of createEntityAdapter in RTK?",
      answer: "createEntityAdapter provides normalized state management for collections. Generates reducers, selectors for CRUD operations (add, update, remove, upsert). Reduces boilerplate for entity management.",
      example: "import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';\nconst todosAdapter = createEntityAdapter();\nconst todoSlice = createSlice({\n  name: 'todos',\n  initialState: todosAdapter.getInitialState(),\n  reducers: {\n    addTodo: todosAdapter.addOne,\n    addTodos: todosAdapter.addMany,\n    updateTodo: todosAdapter.updateOne,\n    removeTodo: todosAdapter.removeOne,\n  }\n});\n// Selectors\nconst { selectAll, selectById, selectTotal } = todosAdapter.getSelectors();",
      output: "Efficient normalized state with selectors and update helpers",
      note: "Great for managing lists of entities (users, posts, products)"
    },
    {
      question: "How do you debounce actions in Redux?",
      answer: "Create middleware that debounces action dispatching. Or use lodash debounce in thunks. Redux Toolkit's createAsyncThunk can be debounced.",
      example: "const debounceMiddleware = () => {\n  let timeout;\n  return store => next => action => {\n    if (action.meta && action.meta.debounce) {\n      clearTimeout(timeout);\n      timeout = setTimeout(() => next(action), action.meta.debounce);\n    } else {\n      return next(action);\n    }\n  };\n};\n// Usage\nstore.dispatch({\n  type: 'SEARCH',\n  payload: query,\n  meta: { debounce: 300 }\n});",
      output: "Actions dispatched only after pause, reducing API calls",
      note: "Use debouncing for search inputs, resize events"
    },
    {
      question: "What is the difference between Redux and Zustand?",
      answer: "Redux: boilerplate-heavy, single store, middleware ecosystem, DevTools, widely used. Zustand: minimal API, multiple stores, React hooks only, simpler for smaller apps.",
      example: "// Redux Toolkit\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: { increment: state => state + 1 }\n});\n// Zustand\nconst useStore = create(set => ({\n  count: 0,\n  increment: () => set(state => ({ count: state.count + 1 }))\n}));\nconst { count, increment } = useStore();",
      output: "Zustand simpler, Redux more powerful for large apps",
      note: "Both are valid; choose based on project complexity"
    },
    {
      question: "How do you handle authentication state in Redux?",
      answer: "Store token, user info, loading, error states. Use thunk for login/logout. Check auth before API calls. Clear token on logout. Persist token in localStorage.",
      example: "const authSlice = createSlice({\n  name: 'auth',\n  initialState: { user: null, token: null, loading: false },\n  reducers: {\n    loginStart: (state) => { state.loading = true; },\n    loginSuccess: (state, action) => {\n      state.user = action.payload.user;\n      state.token = action.payload.token;\n      state.loading = false;\n    },\n    logout: (state) => {\n      state.user = null;\n      state.token = null;\n      localStorage.removeItem('token');\n    }\n  }\n});\nconst login = (credentials) => async (dispatch) => {\n  dispatch(loginStart());\n  try {\n    const res = await api.login(credentials);\n    localStorage.setItem('token', res.token);\n    dispatch(loginSuccess(res));\n  } catch (error) {\n    dispatch(loginFailure(error.message));\n  }\n};",
      output: "User authentication managed centrally in store",
      note: "Never store sensitive data in Redux unnecessarily"
    },
    {
      question: "What are dynamic reducers and when to use them?",
      answer: "Dynamic reducers are added to store after initial creation. Used for code splitting, lazy loading features, plugin systems. Allows adding reducers without reloading page.",
      example: "function injectReducer(store, { key, reducer }) {\n  store.asyncReducers[key] = reducer;\n  store.replaceReducer(createRootReducer(store.asyncReducers));\n}\n// Usage\ninjectReducer(store, { key: 'newFeature', reducer: newFeatureReducer });",
      output: "Reducers loaded on demand, reducing bundle size",
      note: "Redux Toolkit doesn't support this out of box; need custom implementation"
    },
    {
      question: "How do you migrate legacy Redux to Redux Toolkit?",
      answer: "Gradual migration: keep existing reducers, add RTK slices for new features. Use configureStore to replace createStore. Convert one reducer at a time. Mix plain and RTK reducers.",
      example: "// Before: legacy reducers\nconst legacyReducer = combineReducers({ old1, old2 });\nconst store = createStore(legacyReducer);\n// After: mixed\nconst newSlice = createSlice({ name: 'new', initialState, reducers });\nconst store = configureStore({\n  reducer: {\n    ...legacyReducersFromOld,\n    new: newSlice.reducer\n  }\n});",
      output: "Gradual migration without breaking existing code",
      note: "RTK works with plain Redux reducers - can migrate incrementally"
    },
    {
      question: "What is the purpose of batch actions?",
      answer: "Batch actions group multiple dispatches into single notification. Prevents multiple re-renders. React's batchUpdates or redux-batched-actions library.",
      example: "import { batch } from 'react-redux';\nfunction handleMultipleUpdates() {\n  batch(() => {\n    dispatch(updateUser(user));\n    dispatch(updateSettings(settings));\n    dispatch(setLoading(false));\n  });\n} // Components re-render only once",
      output: "Performance optimization, fewer re-renders",
      note: "React 18 automatically batches state updates in event handlers"
    },
    {
      question: "How do you handle form state with Redux?",
      answer: "Use controlled components with local state, sync to Redux on submit. Or use Redux-Form (legacy) or React Hook Form with Redux. Reduce unnecessary dispatch on every keystroke.",
      example: "// Local state for typing\nconst [formData, setFormData] = useState({});\nconst handleSubmit = () => {\n  dispatch(submitForm(formData)); // Only dispatch on submit\n};",
      output: "Better performance, fewer Redux updates",
      note: "Don't dispatch on every keystroke - causes performance issues"
    },
    {
      question: "What is the Redux performance anti-pattern to avoid?",
      answer: "Avoid storing large data that changes infrequently. Don't dispatch actions unnecessarily (e.g., on every keystroke). Avoid deeply nested state. Use memoized selectors.",
      example: "// Bad - dispatch on every keystroke\n<input onChange={e => dispatch(updateSearch(e.target.value))} />\n// Good - debounce or use local state\nconst [search, setSearch] = useState('');\nuseEffect(() => {\n  const timer = setTimeout(() => dispatch(updateSearch(search)), 500);\n  return () => clearTimeout(timer);\n}, [search]);",
      output: "Redux store remains performant with large data",
      note: "Use React profiler to identify unnecessary re-renders"
    },
    {
      question: "What is the future of Redux after React's Context API improvements?",
      answer: "Redux still valuable for complex apps with frequent updates, middleware needs, DevTools, and performance optimization. Context API better for simple state, but causes re-renders without memoization.",
      example: "Use Context for: theme, auth, localization. Use Redux for: complex async, frequent updates, large app state, middleware requirements, time-travel debugging.",
      output: "Redux remains relevant for complex state management",
      note: "Redux Toolkit ensures Redux stays modern and relevant"
    }
  ],
  
  experienced: [
    {
      question: "What is Redux Thunk? How does it work?",
      answer: "Redux Thunk is middleware that allows action creators to return functions (not objects). Inside these functions, you can perform async operations and dispatch multiple actions. Thunk receives dispatch and getState as arguments.",
      example: "const fetchUser = (id) => async (dispatch, getState) => {\n  dispatch({ type: 'FETCH_START' });\n  try {\n    const res = await fetch(`/api/user/${id}`);\n    const data = await res.json();\n    dispatch({ type: 'FETCH_SUCCESS', payload: data });\n  } catch (error) {\n    dispatch({ type: 'FETCH_ERROR', error });\n  }\n};\n// Usage\ndispatch(fetchUser(123));\n\n// Conditional dispatch based on state\nconst incrementIfOdd = () => (dispatch, getState) => {\n  const { counter } = getState();\n  if (counter % 2 === 1) {\n    dispatch({ type: 'INCREMENT' });\n  }\n};",
      output: "Dispatches pending, success, or error actions for async flow",
      note: "Redux Toolkit includes thunk by default. Most common async middleware."
    },
    {
      question: "What are the benefits of Redux Toolkit over plain Redux?",
      answer: "Reduces boilerplate by 50-80%, includes Immer for mutable updates, automatically adds thunk and DevTools, eliminates switch statements, provides createAsyncThunk for async, and includes RTK Query for data fetching.",
      example: "// Plain Redux\nconst INCREMENT = 'counter/increment';\nconst increment = () => ({ type: INCREMENT });\nconst reducer = (state = 0, action) => {\n  switch (action.type) {\n    case INCREMENT: return state + 1;\n    default: return state;\n  }\n};\n// Redux Toolkit (80% less code)\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: { increment: state => state + 1 }\n});",
      output: "Simplified Redux with less code, same power",
      note: "Official recommendation for all new Redux projects since 2019"
    },
    {
      question: "How does createAsyncThunk work internally?",
      answer: "createAsyncThunk generates three action types (pending, fulfilled, rejected). Executes async callback, dispatches pending action first, then fulfilled on success or rejected on error. Handles promise lifecycle automatically.",
      example: "// Custom implementation\nconst createAsyncThunk = (typePrefix, payloadCreator) => {\n  return (arg) => async (dispatch) => {\n    dispatch({ type: `${typePrefix}/pending` });\n    try {\n      const result = await payloadCreator(arg);\n      dispatch({ type: `${typePrefix}/fulfilled`, payload: result });\n      return result;\n    } catch (error) {\n      dispatch({ type: `${typePrefix}/rejected`, error });\n      throw error;\n    }\n  };\n};",
      output: "Simplifies async action creation with lifecycle states",
      note: "Uses Flux Standard Action pattern internally"
    },
    {
      question: "What is Redux Saga and when would you use it?",
      answer: "Redux Saga is middleware using ES6 generators for side effects. Handles complex async flows, race conditions, cancellation, debouncing, and parallel tasks. More powerful than thunk but more complex.",
      example: "import { takeEvery, call, put, delay } from 'redux-saga/effects';\nfunction* fetchUser(action) {\n  try {\n    yield put({ type: 'FETCH_START' });\n    const user = yield call(api.fetchUser, action.payload);\n    yield put({ type: 'FETCH_SUCCESS', payload: user });\n  } catch (error) {\n    yield put({ type: 'FETCH_ERROR', error });\n  }\n}\nfunction* watchFetchUser() {\n  yield takeEvery('FETCH_USER_REQUEST', fetchUser);\n}\n// Debounce example\nfunction* debouncedSearch() {\n  yield delay(500);\n  yield call(api.search, query);\n}",
      output: "Handles complex async workflows, cancellations, race conditions",
      note: "Use thunk for simple async, saga for complex flows"
    },
    {
      question: "Explain Reselect and how memoization works.",
      answer: "Reselect creates memoized selectors that only recompute when inputs change. Uses function composition: input selectors → output selector. Caches previous result, returns cached value if inputs unchanged.",
      example: "import { createSelector } from 'reselect';\nconst selectTodos = state => state.todos;\nconst selectFilter = state => state.filter;\n// Memoized selector\nconst selectVisibleTodos = createSelector(\n  [selectTodos, selectFilter],\n  (todos, filter) => {\n    console.log('Computing...'); // Only runs when todos or filter changes\n    return filter === 'completed' \n      ? todos.filter(t => t.completed) \n      : todos.filter(t => !t.completed);\n  }\n);\n// First call: computes\nconst visible1 = selectVisibleTodos(state);\n// Second call with same state: returns cached result\nconst visible2 = selectVisibleTodos(state); // No recomputation",
      output: "Prevents expensive recalculations, improves performance",
      note: "Reselect is built into Redux Toolkit's createSelector"
    },
    {
      question: "How do you implement undo/redo functionality in Redux?",
      answer: "Store past, present, future arrays. On action, push current state to past. On undo, pop from past to present, push current to future. Redux-undo library provides this pattern.",
      example: "const undoable = (reducer) => {\n  return (state = { past: [], present: reducer(undefined, {}), future: [] }, action) => {\n    if (action.type === 'UNDO') {\n      if (state.past.length === 0) return state;\n      const previous = state.past[state.past.length - 1];\n      return {\n        past: state.past.slice(0, -1),\n        present: previous,\n        future: [state.present, ...state.future]\n      };\n    }\n    if (action.type === 'REDO') {\n      if (state.future.length === 0) return state;\n      const next = state.future[0];\n      return {\n        past: [...state.past, state.present],\n        present: next,\n        future: state.future.slice(1)\n      };\n    }\n    const newPresent = reducer(state.present, action);\n    if (newPresent === state.present) return state;\n    return {\n      past: [...state.past, state.present],\n      present: newPresent,\n      future: []\n    };\n  };\n};",
      output: "Time-travel state management for undo/redo features",
      note: "Use redux-undo library for production implementation"
    },
    {
      question: "What is the difference between createSelector and createDraftSafeSelector?",
      answer: "createSelector is standard memoization. createDraftSafeSelector is used with Redux Toolkit's createSlice, works with Immer drafts. Allows selectors to receive Immer proxy objects safely.",
      example: "// Standard selector\nconst selectItems = createSelector(\n  state => state.items,\n  items => items.filter(i => i.active)\n);\n// Draft-safe selector (used in RTK)\nconst selectDraftItems = createDraftSafeSelector(\n  state => state.items,\n  items => items.filter(i => i.active)\n); // Works with Immer drafts",
      output: "createDraftSafeSelector handles Immer proxy objects correctly",
      note: "Use createDraftSafeSelector inside createSlice reducers"
    },
    {
      question: "How does RTK Query handle caching and invalidation?",
      answer: "RTK Query caches data by endpoint and arguments. Uses providesTags/invalidatesTags for cache invalidation. Automatically refetches when tags invalidated. Implements auto garbage collection.",
      example: "const api = createApi({\n  reducerPath: 'api',\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  tagTypes: ['Post', 'User'],\n  endpoints: (builder) => ({\n    getPosts: builder.query({\n      query: () => 'posts',\n      providesTags: (result) => \n        result ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post'] : ['Post']\n    }),\n    addPost: builder.mutation({\n      query: (post) => ({ url: 'posts', method: 'POST', body: post }),\n      invalidatesTags: ['Post'] // Refetches getPosts\n    })\n  })\n});",
      output: "Automatic caching, deduplication, and refetching",
      note: "RTK Query eliminates manual loading/error state management"
    },
    {
      question: "Explain normalization in Redux and best practices.",
      answer: "Normalization stores entities in objects keyed by ID, with separate arrays for IDs. Avoids nesting, duplication, and deep updates. Use normalizr library for complex data. Redux Toolkit's createEntityAdapter implements this.",
      example: "// Denormalized (bad)\n{\n  posts: [\n    { id: 1, title: 'Post', comments: [{ id: 1, text: 'Comment' }] }\n  ]\n}\n// Normalized (good)\n{\n  posts: { 1: { id: 1, title: 'Post', comments: [1] } },\n  comments: { 1: { id: 1, text: 'Comment', postId: 1 } },\n  allPosts: [1],\n  allComments: [1]\n}\n// createEntityAdapter version\nconst postsAdapter = createEntityAdapter();\nconst state = postsAdapter.getInitialState();\n// state: { ids: [], entities: {} }",
      output: "Easier updates, no duplication, better performance",
      note: "Normalize data at the boundary when fetching from API"
    },
    {
      question: "How does store.replaceReducer() work and when to use it?",
      answer: "replaceReducer() swaps root reducer dynamically. Used for code splitting (adding reducers lazily), hot reloading reducers during development, and dynamic module loading.",
      example: "// Dynamic reducer injection\nconst asyncReducers = {};\nexport const injectReducer = (key, reducer) => {\n  asyncReducers[key] = reducer;\n  store.replaceReducer(combineReducers({ ...staticReducers, ...asyncReducers }));\n};\n// Later, load feature\nexport const loadFeature = () => import('./feature').then(module => {\n  injectReducer('feature', module.default);\n});\n// Hot reloading\nif (module.hot) {\n  module.hot.accept('./reducers', () => {\n    const newRootReducer = require('./reducers').default;\n    store.replaceReducer(newRootReducer);\n  });\n}",
      output: "Dynamic reducer replacement at runtime",
      note: "configureStore in RTK doesn't directly support this pattern"
    },
    {
      question: "What is the difference between middleware and enhancer?",
      answer: "Middleware intercepts actions (dispatch pipeline). Enhancer wraps store creation, can modify store methods (dispatch, getState). Middleware is more common; enhancers for advanced cases like DevTools.",
      example: "// Middleware (action interception)\nconst logger = store => next => action => {\n  console.log(action);\n  return next(action);\n};\n// Enhancer (store creation)\nconst loggerEnhancer = (createStore) => (reducer, preloadedState) => {\n  const store = createStore(reducer, preloadedState);\n  const originalDispatch = store.dispatch;\n  store.dispatch = (action) => {\n    console.log(action);\n    return originalDispatch(action);\n  };\n  return store;\n};\nconst store = createStore(reducer, enhancer);",
      output: "Middleware for action pipeline, Enhancer for store shaping",
      note: "configureStore handles enhancers internally; rarely write manually"
    },
    {
      question: "How do you handle large state trees efficiently?",
      answer: "Normalize state to avoid nesting. Use memoized selectors (Reselect). Implement pagination/scrolling (don't load all data). Use immutable data structures (Immer). Code split reducers. Use createEntityAdapter.",
      example: "// Paginated state\nconst paginatedReducer = (state = { items: [], nextPage: 1, hasMore: true }, action) => {\n  if (action.type === 'LOAD_MORE') {\n    return {\n      ...state,\n      items: [...state.items, ...action.payload],\n      nextPage: state.nextPage + 1,\n      hasMore: action.payload.length > 0\n    };\n  }\n  return state;\n};\n// Virtual scrolling with only visible items\nconst selectVisibleItems = createSelector(\n  [selectAllItems, (state, start, end) => ({ start, end })],\n  (items, { start, end }) => items.slice(start, end)\n);",
      output: "Efficient rendering even with thousands of items",
      note: "Don't store large data sets in Redux unnecessarily"
    },
    {
      question: "What are the best practices for structuring Redux state?",
      answer: "Keep state minimal, normalize nested data, use slices per domain, avoid duplication, keep UI state separate from domain data, use selectors for derived data, use createEntityAdapter for collections.",
      example: "// Good structure\n{\n  // Domain data (normalized)\n  books: { ids: [], entities: {} },\n  authors: { ids: [], entities: {} },\n  // UI state (local to features)\n  ui: {\n    filters: { showOnlyAvailable: false },\n    pagination: { page: 1, itemsPerPage: 10 }\n  },\n  // Session state\n  auth: { user: null, token: null }\n}",
      output: "Maintainable, performant, and scalable state",
      note: "Avoid storing component state in Redux (local state is fine)"
    },
    {
      question: "How does Redux handle concurrency and race conditions?",
      answer: "Use cancelable actions or takeLatest pattern (Saga). Thunks with abort controllers. Track latest request ID. createAsyncThunk has built-in condition option to ignore stale requests.",
      example: "// Thunk with abort signal\nconst fetchUser = (id, { signal }) => \n  fetch(`/api/user/${id}`, { signal }).then(r => r.json());\nconst fetchUserThunk = createAsyncThunk(\n  'user/fetch',\n  async (id, { signal }) => await fetchUser(id, { signal })\n);\n// Only dispatch if condition passed\nconst fetchUserThunk = createAsyncThunk(\n  'user/fetch',\n  async (id) => await fetch(`/api/user/${id}`),\n  { condition: (id, { getState }) => {\n    const { lastRequestId } = getState().users;\n    return lastRequestId !== id; // Ignore stale\n  }}\n);",
      output: "Prevents stale data from out-of-order responses",
      note: "AbortController cancels fetch requests automatically"
    },
    {
      question: "Explain the difference between optimistic update and pessimistic update in Redux.",
      answer: "Optimistic: update UI immediately before API response, rollback on error (perceived speed). Pessimistic: update UI only after API success (data consistency). Choose based on operation criticality.",
      example: "// Optimistic\nconst likePostOptimistic = (postId) => async (dispatch) => {\n  const previousState = getState().posts[postId];\n  dispatch({ type: 'LIKE_POST', payload: postId }); // Immediate UI\n  try {\n    await api.likePost(postId);\n    // Keep optimistic update\n  } catch (error) {\n    dispatch({ type: 'UNLIKE_POST', payload: postId }); // Rollback\n    dispatch({ type: 'SHOW_ERROR', payload: 'Failed to like' });\n  }\n};\n// Pessimistic\nconst likePostPessimistic = (postId) => async (dispatch) => {\n  try {\n    await api.likePost(postId);\n    dispatch({ type: 'LIKE_POST', payload: postId }); // Update after success\n  } catch (error) {\n    dispatch({ type: 'SHOW_ERROR', payload: 'Failed to like' });\n  }\n};",
      output: "Optimistic for better UX, Pessimistic for critical data",
      note: "Handle rollbacks gracefully to maintain data integrity"
    },
    {
      question: "What is Redux DevTools' time-travel debugging and how does it work?",
      answer: "Time-travel debugging lets you jump to any previous state by replaying or reversing actions. DevTools stores action history. Patch-based state diffs enable efficient storage and navigation.",
      example: "// DevTools stores actions\nconst actions = [\n  { type: 'INCREMENT' }, // state: 1\n  { type: 'INCREMENT' }, // state: 2\n  { type: 'DECREMENT' }  // state: 1\n];\n// Time travel to state 1 (after first action)\nstore.dispatch({ type: 'JUMP_TO_STATE', index: 1 });\n// DevTools recomputes state by applying actions up to index",
      output: "Debug by examining any past state without replaying entire app",
      note: "Immutability is essential for time-travel to work correctly"
    },
    {
      question: "How do you implement request cancellation in Redux Thunk?",
      answer: "Use AbortController with fetch. Store abort controllers in state or local variable. CreateAsyncThunk also supports signal.",
      example: "const fetchUsers = createAsyncThunk(\n  'users/fetch',\n  async (_, { signal }) => {\n    const response = await fetch('/api/users', { signal });\n    return response.json();\n  }\n);\n// Component\nuseEffect(() => {\n  const promise = dispatch(fetchUsers());\n  return () => {\n    promise.abort(); // Cancel on unmount\n  };\n}, [dispatch]);\n// Manual thunk with abort\nconst fetchUsersManual = () => async (dispatch) => {\n  const abortController = new AbortController();\n  try {\n    const response = await fetch('/api/users', { signal: abortController.signal });\n    dispatch({ type: 'FETCH_SUCCESS', payload: await response.json() });\n  } catch (error) {\n    if (error.name !== 'AbortError') {\n      dispatch({ type: 'FETCH_ERROR', error });\n    }\n  }\n  return () => abortController.abort();\n};",
      output: "Cancel in-flight requests when component unmounts or new request starts",
      note: "Prevents memory leaks and state updates on unmounted components"
    },
    {
      question: "Explain createAsyncThunk's condition option.",
      answer: "condition option prevents thunk from dispatching if condition fails. Used for debouncing, preventing duplicate requests, or skipping based on state. Receives thunkArg and getState.",
      example: "const fetchUsers = createAsyncThunk(\n  'users/fetch',\n  async (_, { getState }) => {\n    const { users } = getState();\n    const response = await fetch('/api/users');\n    return response.json();\n  },\n  {\n    condition: (_, { getState }) => {\n      const { users } = getState();\n      // Don't fetch if already loading or data stale less than 5 seconds\n      if (users.loading) return false;\n      if (users.lastFetched && Date.now() - users.lastFetched < 5000) return false;\n      return true;\n    }\n  }\n);",
      output: "Prevents unnecessary dispatches, improves performance",
      note: "Reduces network requests and race conditions"
    },
    {
      question: "What are the performance implications of useSelector?",
      answer: "useSelector runs selector on every action. If selector returns new reference, component re-renders. Use shallowEqual or createSelector to prevent unnecessary re-renders.",
      example: "// Bad - returns new object on every action\nconst data = useSelector(state => ({\n  user: state.user,\n  name: state.user.name\n})); // Re-renders on EVERY action\n// Good - selects primitive\nconst user = useSelector(state => state.user); // Re-renders only when user changes\n// Good - shallow equality\nconst data = useSelector(state => ({\n  user: state.user,\n  name: state.user.name\n}), shallowEqual); // Only re-renders when values change\n// Best - memoized selector\nconst selectUserData = createSelector(\n  state => state.user,\n  user => ({ user, name: user.name })\n);\nconst data = useSelector(selectUserData);",
      output: "Optimized re-renders, better performance",
      note: "Use React DevTools Profiler to identify unnecessary re-renders"
    },
    {
      question: "How does Redux Toolkit persist state with redux-persist?",
      answer: "redux-persist stores Redux state in localStorage/AsyncStorage. Configure with persistConfig, persistReducer, PersistGate. Works with Redux Toolkit's configureStore.",
      example: "import { persistStore, persistReducer } from 'redux-persist';\nimport storage from 'redux-persist/lib/storage';\nimport { configureStore } from '@reduxjs/toolkit';\nconst persistConfig = {\n  key: 'root',\n  storage,\n  whitelist: ['user', 'settings'], // Only persist user and settings\n  blacklist: ['temporary'] // Don't persist temporary\n};\nconst persistedReducer = persistReducer(persistConfig, rootReducer);\nconst store = configureStore({\n  reducer: persistedReducer,\n  middleware: (getDefault) => getDefault({\n    serializableCheck: false // Disable for redux-persist\n  })\n});\nconst persistor = persistStore(store);\n// In React\nimport { PersistGate } from 'redux-persist/integration/react';\n<Provider store={store}>\n  <PersistGate loading={<Loading />} persistor={persistor}>\n    <App />\n  </PersistGate>\n</Provider>",
      output: "State persists across browser refreshes and sessions",
      note: "Don't persist sensitive or large data. Use sessionStorage for temporary persistence."
    },
    {
      question: "What is the purpose of serializableCheck middleware?",
      answer: "serializableCheck ensures non-serializable values (functions, promises, class instances) aren't stored in Redux state. Prevents bugs with DevTools, persistence, and time-travel debugging.",
      example: "// configureStore enables serializableCheck by default\nconst store = configureStore({\n  reducer,\n  middleware: (getDefault) => getDefault({\n    serializableCheck: {\n      ignoredActions: ['persist/PERSIST'], // Ignore redux-persist actions\n      ignoredActionPaths: ['meta.arg', 'payload.timestamp'],\n      ignoredPaths: ['form.data.date']\n    }\n  })\n});\n// Bad - storing non-serializable\nstore.dispatch({ type: 'SET_DATE', payload: new Date() }); // Warning!\n// Good - store timestamp instead\nstore.dispatch({ type: 'SET_DATE', payload: Date.now() });",
      output: "Ensures Redux state is serializable for DevTools and persistence",
      note: "Disable only when necessary (e.g., redux-persist). Never store functions in state."
    },
    {
      question: "How do you handle environment-specific Redux logic?",
      answer: "Use process.env.NODE_ENV to conditionally enable middleware (logger only in dev). Configure different store setups for development/production. Use __DEV__ flag.",
      example: "const middleware = [thunk];\nif (process.env.NODE_ENV === 'development') {\n  middleware.push(logger);\n}\nconst store = configureStore({\n  reducer,\n  middleware: (getDefault) => getDefault().concat(middleware),\n  devTools: process.env.NODE_ENV !== 'production'\n});\n// Different preloaded state\nconst preloadedState = process.env.NODE_ENV === 'test' \n  ? require('./testState.json') \n  : undefined;",
      output: "Optimal setup for each environment (dev/production/test)",
      note: "Don't include sensitive data in production builds"
    },
    {
      question: "What is the difference between dispatch and batch dispatch?",
      answer: "Regular dispatch causes multiple re-renders for multiple actions. Batch dispatch groups actions, causing single re-render. React's unstable_batchedUpdates or redux-batched-actions.",
      example: "// Without batch - 3 re-renders\nstore.dispatch(updateUser(user));\nstore.dispatch(updateSettings(settings));\nstore.dispatch(setLoading(false));\n// With batch - 1 re-render\nimport { batch } from 'react-redux';\nbatch(() => {\n  store.dispatch(updateUser(user));\n  store.dispatch(updateSettings(settings));\n  store.dispatch(setLoading(false));\n});\n// Redux Toolkit's batch (same as React's)\nimport { batch } from '@reduxjs/toolkit';",
      output: "Improved performance with multiple dispatches",
      note: "React 18 automatically batches state updates in event handlers"
    },
    {
      question: "Explain Redux's subscribe() memoization pattern.",
      answer: "Store.subscribe can be used with memoization to selectively run callbacks. Compare previous and current state to avoid unnecessary work.",
      example: "let previousState = store.getState();\nstore.subscribe(() => {\n  const currentState = store.getState();\n  // Only run if specific slice changed\n  if (currentState.user !== previousState.user) {\n    saveUserToStorage(currentState.user);\n  }\n  if (currentState.settings !== previousState.settings) {\n    saveSettings(currentState.settings);\n  }\n  previousState = currentState;\n});",
      output: "Efficient subscription callbacks without Redux DevTools overhead",
      note: "React-Redux implements similar memoization for useSelector"
    },
    {
      question: "How do you implement a Redux store with TypeScript?",
      answer: "Define types for RootState, AppDispatch. Use TypedUseSelectorHook. Type actions and reducers. Redux Toolkit has great TS support with infered types.",
      example: "// store.ts\nimport { configureStore } from '@reduxjs/toolkit';\nimport { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';\n\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer\n  }\n});\n\nexport type RootState = ReturnType<typeof store.getState>;\nexport type AppDispatch = typeof store.dispatch;\n\n// hooks.ts\nexport const useAppDispatch: () => AppDispatch = useDispatch;\nexport const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n\n// slice.ts\ninterface CounterState {\n  value: number;\n}\nconst initialState: CounterState = { value: 0 };\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState,\n  reducers: {\n    increment: (state) => { state.value += 1; },\n    incrementByAmount: (state, action: PayloadAction<number>) => {\n      state.value += action.payload;\n    }\n  }\n});",
      output: "Fully typed Redux with TypeScript inference",
      note: "Redux Toolkit eliminates most manual type annotations"
    },
    {
      question: "What are the limitations of Redux?",
      answer: "Boilerplate heavy (mitigated by RTK). Requires learning curve. Not ideal for very simple apps or local component state. Synchronous by default (async needs middleware). Cannot store non-serializable data easily.",
      example: "// When NOT to use Redux\n// 1. Simple form state in one component\nconst [formData, setFormData] = useState({}); // useState is fine\n// 2. Theme toggling\nconst ThemeContext = React.createContext(); // Context is fine\n// 3. Data fetching cache\nReact Query or SWR are better for API caching\n// When TO use Redux\n// 1. Complex global state across many components\n// 2. Frequent state updates\n// 3. Time-travel debugging needed\n// 4. Already using Redux pattern",
      output: "Redux is powerful but not always necessary",
      note: "Consider alternatives: Zustand, Jotai, Recoil, Context API"
    },
    {
      question: "How do you test Redux async thunks?",
      answer: "Use redux-mock-store to test thunk logic. Mock API calls. Test pending, fulfilled, rejected actions. Verify dispatch calls.",
      example: "import configureMockStore from 'redux-mock-store';\nimport thunk from 'redux-thunk';\nconst middlewares = [thunk];\nconst mockStore = configureMockStore(middlewares);\n\ndescribe('fetchUser thunk', () => {\n  it('dispatches success on API success', async () => {\n    const user = { id: 1, name: 'John' };\n    const api = jest.spyOn(api, 'fetchUser').mockResolvedValue(user);\n    const store = mockStore({ user: null });\n    \n    await store.dispatch(fetchUser(1));\n    \n    expect(store.getActions()).toEqual([\n      fetchUser.pending(),\n      fetchUser.fulfilled(user)\n    ]);\n  });\n});\n// Test component using Redux hooks\nimport { render } from '@testing-library/react';\nimport { Provider } from 'react-redux';\nconst renderWithRedux = (component, { store } = {}) => {\n  return render(<Provider store={store || createMockStore()}>{component}</Provider>);\n};",
      output: "Thunks and Redux-connected components tested in isolation",
      note: "Test reducer logic separately from thunks for isolation"
    },
    {
      question: "What is Redux Observable and when to use it?",
      answer: "Redux Observable uses RxJS epics for side effects. Handles complex async flows, cancellations, debouncing, throttling, and streams. More powerful than thunk or saga for reactive programming.",
      example: "import { ofType } from 'redux-observable';\nimport { map, switchMap, catchError, debounceTime } from 'rxjs/operators';\nimport { of } from 'rxjs';\n\nconst searchEpic = (action$, state$) => action$.pipe(\n  ofType('SEARCH'),\n  debounceTime(500),\n  switchMap(action =>\n    fetch(`/api/search?q=${action.payload}`).then(r => r.json()).pipe(\n      map(results => ({ type: 'SEARCH_SUCCESS', payload: results })),\n      catchError(error => of({ type: 'SEARCH_ERROR', error }))\n    )\n  )\n);",
      output: "Reactive async workflows with RxJS power",
      note: "High learning curve (RxJS), overkill for simple apps"
    },
    {
      question: "Explain middleware composition and ordering in Redux.",
      answer: "Middleware execute in order they're applied. Each middleware calls next(action). Early middleware can modify, delay, or terminate actions before they reach reducer.",
      example: "const middlewareA = store => next => action => {\n  console.log('A before');\n  const result = next(action); // Calls middlewareB\n  console.log('A after');\n  return result;\n};\nconst middlewareB = store => next => action => {\n  console.log('B before');\n  const result = next(action); // Calls reducer\n  console.log('B after');\n  return result;\n};\n// Order: applyMiddleware(middlewareA, middlewareB)\n// Dispatch flow: Action → A before → B before → reducer → B after → A after\n// Result: Action transformed in middleware A, then B, then reaches reducer",
      output: "Predictable side effect pipeline",
      note: "Order matters: logger should be last to log final state"
    },
    {
      question: "How do you handle large forms with Redux?",
      answer: "Use local state for form input changes, only dispatch on submit. Or use Formik, React Hook Form with Redux sync. Avoid dispatching on every keystroke for performance.",
      example: "// Form component\nfunction MyForm() {\n  const [localForm, setLocalForm] = useState({ name: '', email: '' });\n  const dispatch = useDispatch();\n  \n  const handleChange = (e) => {\n    setLocalForm({ ...localForm, [e.target.name]: e.target.value });\n  };\n  \n  const handleSubmit = () => {\n    dispatch(submitForm(localForm)); // Dispatch only on submit\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input name=\"name\" value={localForm.name} onChange={handleChange} />\n      <input name=\"email\" value={localForm.email} onChange={handleChange} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n// With React Hook Form + Redux\nconst { register, handleSubmit } = useForm();\nonSubmit: (data) => dispatch(submitForm(data));",
      output: "Performant form management without Redux overhead",
      note: "Don't store form state in Redux unless shared across components"
    },
    {
      question: "What is the difference between Redux Toolkit's listener and middleware?",
      answer: "createListenerMiddleware is higher-level than manual middleware. Provides pattern matching, lifecycle handling, and automatic unsubscribe. Built on top of middleware.",
      example: "import { createListenerMiddleware } from '@reduxjs/toolkit';\nconst listenerMiddleware = createListenerMiddleware();\n\nlistenerMiddleware.startListening({\n  actionCreator: increment,\n  effect: async (action, listenerApi) => {\n    console.log('Increment happened');\n    const state = listenerApi.getState();\n    if (state.counter > 10) {\n      await listenerApi.delay(1000);\n      listenerApi.dispatch(reset());\n    }\n  }\n});\n\nconst store = configureStore({\n  reducer,\n  middleware: (getDefault) => getDefault().prepend(listenerMiddleware.middleware)\n});",
      output: "Easy side effects without thunk or saga complexity",
      note: "Listener middleware is great for analytics, toast notifications"
    },
    {
      question: "How do you implement Redux with Next.js?",
      answer: "Use wrapper like next-redux-wrapper for SSR. Configure store per request. Hydrate state from server. Use getServerSideProps with store.dispatch.",
      example: "import { createWrapper, HYDRATE } from 'next-redux-wrapper';\nimport { configureStore } from '@reduxjs/toolkit';\n\nconst makeStore = () => configureStore({\n  reducer: (state, action) => {\n    if (action.type === HYDRATE) {\n      return { ...state, ...action.payload }; // Hydrate client state\n    }\n    return rootReducer(state, action);\n  }\n});\n\nexport const wrapper = createWrapper(makeStore);\n\n// In page\nexport const getServerSideProps = wrapper.getServerSideProps(\n  (store) => async (context) => {\n    await store.dispatch(fetchUser());\n    return { props: {} };\n  }\n);",
      output: "Redux state initialized on server and hydrated on client",
      note: "Next.js 13+ App Router has different patterns; use Redux Toolkit"
    },
    {
      question: "Explain the concept of action serialization in Redux.",
      answer: "Actions must be serializable (plain objects with primitive values, arrays). Non-serializable values (functions, dates, symbols) break DevTools, persistence, time-travel.",
      example: "// Non-serializable (bad)\nconst action = {\n  type: 'INCREMENT',\n  callback: () => console.log('done'),  // Function - not serializable\n  date: new Date()  // Date - not serializable (store timestamp instead)\n};\n// Serializable (good)\nconst action = {\n  type: 'INCREMENT',\n  meta: { callbackId: 'log-done' }, // Use ID mapping\n  timestamp: Date.now() // Store timestamp instead of Date\n};",
      output: "DevTools and persistence work correctly",
      note: "Redux Toolkit's serializableCheck warns about non-serializable values"
    },
    {
      question: "How does Redux Toolkit's createDynamicMiddleware work?",
      answer: "createDynamicMiddleware allows adding/removing middleware at runtime. Useful for code splitting, feature toggles, and dynamic functionality.",
      example: "import { createDynamicMiddleware } from '@reduxjs/toolkit';\nconst dynamicMiddleware = createDynamicMiddleware();\nconst store = configureStore({\n  reducer,\n  middleware: (getDefault) => getDefault().prepend(dynamicMiddleware.middleware)\n});\n// Later, dynamically add middleware\nconst featureMiddleware = (store) => (next) => (action) => {\n  console.log('Feature middleware');\n  return next(action);\n};\ndynamicMiddleware.addMiddleware(featureMiddleware);\n// Remove middleware when feature unloads\ndynamicMiddleware.removeMiddleware(featureMiddleware);",
      output: "Runtime middleware management for code splitting",
      note: "Useful for plugin architectures and modals"
    },
    {
      question: "What are the memory leak risks with Redux and how to prevent them?",
      answer: "Storing large data without cleanup, accumulating actions in DevTools, not unsubscribing from store (rare with hooks), keeping references to destroyed components.",
      example: "// Use selectors to avoid storing computed data\n// Bad\nconst [expensiveData, setExpensiveData] = useState();\nuseEffect(() => {\n  const computed = computeExpensive(store.getState());\n  setExpensiveData(computed); // Stores duplicate in component state\n}, []);\n// Good\nconst expensiveData = useSelector(state => computeExpensive(state)); // No duplication\n\n// Clean up large state on logout\nconst logout = () => {\n  store.dispatch({ type: 'RESET_STATE' });\n  // Reset all reducers\n};\n\n// Limit DevTools history\nconfigureStore({\n  reducer,\n  devTools: { maxAge: 50 } // Keep only 50 actions\n});",
      output: "Memory-efficient Redux applications",
      note: "Clean up subscriptions in useEffect return (though useSelector handles this)"
    },
    {
      question: "How do you implement undo/redo with Redux Toolkit?",
      answer: "Use redux-undo library or custom higher-order reducer. redux-undo wraps reducer, tracks past/present/future states.",
      example: "import undoable from 'redux-undo';\nconst undoableReducer = undoable(counterReducer, {\n  limit: 10, // Limit history size\n  filter: (action) => action.type !== 'IGNORE_ACTION', // Don't undo certain actions\n  undoType: 'UNDO',\n  redoType: 'REDO'\n});\nconst store = configureStore({ reducer: undoableReducer });\n// Dispatch undo/redo\nstore.dispatch({ type: 'UNDO' });\nstore.dispatch({ type: 'REDO' });\n// Access history\nconst { past, present, future } = useSelector(state => state.counter);",
      output: "Full undo/redo functionality with minimal code",
      note: "Works with Redux Toolkit seamlessly"
    },
    {
      question: "Explain Redux Toolkit's createApi endpoints with transformResponse.",
      answer: "transformResponse modifies API response before it's cached. Useful for normalizing data, date parsing, or converting response format.",
      example: "const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (builder) => ({\n    getUser: builder.query({\n      query: (id) => `users/${id}`,\n      transformResponse: (response) => {\n        // Convert date strings to Date objects\n        return {\n          ...response,\n          createdAt: new Date(response.createdAt),\n          fullName: `${response.firstName} ${response.lastName}`\n        };\n      }\n    }),\n    getPosts: builder.query({\n      query: () => 'posts',\n      transformResponse: (response, meta, arg) => {\n        // Add computed fields\n        return response.map(post => ({\n          ...post,\n          excerpt: post.body.substring(0, 100),\n          commentCount: post.comments?.length || 0\n        }));\n      }\n    })\n  })\n});",
      output: "Clean data in cache without modifying original response",
      note: "transformResponse runs for both successful queries and mutations"
    },
    {
      question: "What are the differences between thunk and saga error handling?",
      answer: "Thunk uses try/catch, saga uses try/catch with effects or error channel. Saga errors can be caught in parent sagas, thunk errors handled locally.",
      example: "// Thunk error handling\nexport const fetchUser = createAsyncThunk(\n  'user/fetch',\n  async (id, { rejectWithValue }) => {\n    try {\n      const res = await fetch(`/api/user/${id}`);\n      if (!res.ok) throw new Error('Failed');\n      return res.json();\n    } catch (err) {\n      return rejectWithValue(err.message);\n    }\n  }\n);\n// Saga error handling\nfunction* fetchUser(action) {\n  try {\n    const user = yield call(api.fetchUser, action.payload);\n    yield put({ type: 'FETCH_SUCCESS', payload: user });\n  } catch (error) {\n    yield put({ type: 'FETCH_ERROR', error: error.message });\n  }\n}",
      output: "Both handle errors, saga has more patterns for retries/fallbacks",
      note: "Saga can use error channel for global error handling"
    },
    {
      question: "How do you optimize Redux for mobile devices?",
      answer: "Limit state size, use lazy loading, normalize data, implement pagination, use memoized selectors, batch dispatches, reduce re-renders.",
      example: "// Paginate data\nconst loadMore = () => async (dispatch, getState) => {\n  const { page, hasMore, loading } = getState().items;\n  if (!hasMore || loading) return;\n  dispatch({ type: 'SET_LOADING', payload: true });\n  const newItems = await fetchItems(page);\n  dispatch({ type: 'ADD_ITEMS', payload: newItems });\n  dispatch({ type: 'INCREMENT_PAGE' });\n};\n// Virtual scroll with only visible items\nconst selectVisibleItems = createSelector(\n  [selectAllItems, (state, scrollTop, viewHeight) => ({ scrollTop, viewHeight })],\n  (items, { scrollTop, viewHeight }) => {\n    const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);\n    const endIndex = startIndex + Math.ceil(viewHeight / ITEM_HEIGHT);\n    return items.slice(startIndex, endIndex);\n  }\n);",
      output: "Smooth 60fps scrolling, minimal memory usage",
      note: "Consider using React Native's FlatList with limited data"
    },
    {
      question: "How does @reduxjs/toolkit implement immer internally?",
      answer: "Immer uses ES6 Proxy to detect mutations. Wraps state in draft proxy, records changes, produces immutable state. createSlice uses produce internally.",
      example: "// Simplified immer\nfunction produce(baseState, recipe) {\n  const draft = new Proxy(baseState, {\n    set(target, prop, value) {\n      // Record mutation\n      target[prop] = value;\n      return true;\n    }\n  });\n  recipe(draft);\n  return freezeCopy(draft); // Return immutable copy\n}\n// Redux Toolkit usage\nconst slice = createSlice({\n  name: 'todos',\n  initialState: [],\n  reducers: {\n    addTodo: (state, action) => {\n      state.push(action.payload); // Proxy records mutation\n    } // produce returns immutable state\n  }\n});",
      output: "Mutable syntax with immutable results",
      note: "Immer only works with plain objects and arrays (no class instances)"
    },
    {
      question: "What is the difference between RTK Query's useQuery and useLazyQuery?",
      answer: "useQuery fetches immediately on component mount. useLazyQuery provides trigger function to fetch manually (on button click, after form submit).",
      example: "// useQuery - automatic fetch\nfunction AutoFetch() {\n  const { data } = useGetPostsQuery(); // Fetches immediately\n  return <div>{data?.length} posts</div>;\n}\n// useLazyQuery - manual fetch\nfunction ManualFetch() {\n  const [trigger, { data, isLoading }] = useLazyGetPostsQuery();\n  return (\n    <div>\n      <button onClick={() => trigger()} disabled={isLoading}>\n        Load Posts\n      </button>\n      {data && <div>{data.length} posts</div>}\n    </div>\n  );\n}\n// Conditional fetch with useQuery\nfunction ConditionalFetch({ userId }) {\n  const { data } = useGetUserQuery(userId, { skip: !userId }); // Fetch only when userId exists\n  return <div>{data?.name}</div>;\n}",
      output: "Flexible data fetching timing control",
      note: "useLazyQuery doesn't fetch on mount, only when trigger called"
    },
    {
      question: "How do you implement Redux with Server-Side Rendering?",
      answer: "Create store on each request, dispatch actions to populate state, serialize state, send to client, client uses preloadedState. next-redux-wrapper simplifies this.",
      example: "// Server\nimport { createStore } from 'redux';\nconst store = createStore(reducer);\nawait store.dispatch(fetchData());\nconst preloadedState = store.getState();\nconst html = renderToString(<Provider store={store}><App /></Provider>);\nres.send(`\n  <div id=\"root\">${html}</div>\n  <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}</script>\n`);\n// Client\nconst preloadedState = window.__PRELOADED_STATE__;\ndelete window.__PRELOADED_STATE__;\nconst store = createStore(reducer, preloadedState); // Hydrate",
      output: "Pre-rendered HTML with populated state",
      note: "Use next-redux-wrapper for Next.js, useReducer for client hydration"
    },
    {
      question: "What are the trade-offs between Redux Thunk and Redux Observable?",
      answer: "Thunk: simpler, easier to learn, less boilerplate, limited cancellation. Observable: more powerful (cancellation, debouncing, race conditions), complex (RxJS), heavier.",
      example: "// Thunk (simple)\nconst fetchUser = (id) => async (dispatch) => {\n  const user = await api.fetchUser(id);\n  dispatch(setUser(user));\n};\n// Observable (powerful)\nconst fetchUserEpic = action$ => action$.pipe(\n  ofType('FETCH_USER'),\n  debounceTime(300), // Debounce rapid requests\n  switchMap(({ payload: id }) => from(api.fetchUser(id)).pipe(\n    map(user => setUser(user)),\n    catchError(error => of(fetchUserError(error)))\n  ))\n);",
      output: "Thunk for simple async, Observable for complex streams",
      note: "RTK Query replaces many use cases for both"
    },
    {
      question: "How do you handle WebSocket reconnection in Redux?",
      answer: "Middleware that manages WebSocket lifecycle. On disconnect, attempt reconnect with exponential backoff. Dispatch connection status actions.",
      example: "let reconnectAttempts = 0;\nconst MAX_RECONNECT_ATTEMPTS = 5;\nfunction reconnect(store) {\n  if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {\n    store.dispatch({ type: 'WS_MAX_RECONNECT' });\n    return;\n  }\n  const delay = Math.min(1000 * 2 ** reconnectAttempts, 30000);\n  setTimeout(() => {\n    console.log(\`Reconnecting attempt \${reconnectAttempts + 1}...\`);\n    initializeWebSocket(store);\n    reconnectAttempts++;\n  }, delay);\n}\nfunction initializeWebSocket(store) {\n  const ws = new WebSocket('wss://api.example.com');\n  ws.onopen = () => {\n    reconnectAttempts = 0;\n    store.dispatch({ type: 'WS_CONNECTED' });\n  };\n  ws.onclose = () => {\n    store.dispatch({ type: 'WS_DISCONNECTED' });\n    reconnect(store);\n  };\n  ws.onmessage = (event) => {\n    store.dispatch({ type: 'WS_MESSAGE', payload: event.data });\n  };\n}",
      output: "Resilient real-time connections",
      note: "Use exponential backoff to avoid server overload"
    },
    {
      question: "Explain Redux Toolkit's createEntityAdapter selectors generation.",
      answer: "createEntityAdapter generates selectors: selectIds, selectEntities, selectAll, selectTotal, selectById. Works with different state shapes via selectId option.",
      example: "const usersAdapter = createEntityAdapter({\n  selectId: (user) => user.userId, // Custom ID field\n  sortComparer: (a, b) => a.name.localeCompare(b.name) // Sort by name\n});\nconst initialState = usersAdapter.getInitialState({\n  loading: false,\n  error: null\n});\nconst usersSlice = createSlice({\n  name: 'users',\n  initialState,\n  reducers: {\n    usersReceived: (state, action) => {\n      usersAdapter.setAll(state, action.payload);\n    }\n  }\n});\n// Generated selectors\n// Without custom selectId\nconst { selectAll, selectById, selectTotal } = usersAdapter.getSelectors();\n// With nested state\nconst selectors = usersAdapter.getSelectors((state) => state.users);\nconst allUsers = selectors.selectAll(storeState);\nconst userById = (id) => selectors.selectById(storeState, id);",
      output: "Standardized entity management with selectors",
      note: "selectById uses the selectId function to find entity by ID"
    },
    {
      question: "How do you implement infinite scroll with RTK Query?",
      answer: "Use useInfiniteQuery or custom merge function. RTK Query supports pagination with merge and forceRefetch options.",
      example: "const api = createApi({\n  endpoints: (builder) => ({\n    getPosts: builder.query({\n      query: ({ page = 1, limit = 10 }) => `posts?_page=${page}&_limit=${limit}`,\n      serializeQueryArgs: ({ endpointName }) => endpointName,\n      merge: (currentCache, newItems, { arg }) => {\n        if (arg.page === 1) {\n          return newItems; // Reset on first page\n        }\n        currentCache.push(...newItems); // Append to cache\n      },\n      forceRefetch: ({ currentArg, previousArg }) => {\n        return currentArg?.page !== previousArg?.page; // Refetch when page changes\n      }\n    })\n  })\n});\nfunction InfiniteScrollList() {\n  const [page, setPage] = useState(1);\n  const { data, isFetching } = useGetPostsQuery({ page, limit: 20 });\n  \n  useEffect(() => {\n    const handleScroll = () => {\n      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {\n        if (!isFetching) setPage(p => p + 1);\n      }\n    };\n    window.addEventListener('scroll', handleScroll);\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, [isFetching]);\n  \n  return <div>{data?.map(item => <div key={item.id}>{item.title}</div>)}</div>;\n}",
      output: "Infinite scrolling with automatic pagination",
      note: "Using useInfiniteQuery hook simplifies this pattern"
    },
    {
      question: "What are the best practices for migrating existing state to Redux?",
      answer: "Gradual migration: start with new features in Redux, keep existing state in local state/context. Move one feature at a time. Use Redux Toolkit for new code.",
      example: "// Step 1: Create Redux store alongside existing state\nconst store = configureStore({ reducer: newFeatureReducer });\n<Provider store={store}><LegacyApp /></Provider>\n// Step 2: Migrate one feature\n// Before: const [todos, setTodos] = useState([]);\n// After: const todos = useSelector(state => state.todos);\n// Step 3: Remove old state when fully migrated\n// Step 4: Add more features incrementally\n// Migration assistant\nconst stateTransition = {\n  localToRedux(localState) {\n    store.dispatch(initializeFromLocal(localState));\n  },\n  reduxToLocal(storeState) {\n    localStorage.setItem('backup', JSON.stringify(storeState));\n  }\n};",
      output: "Smooth transition without breaking existing functionality",
      note: "Run both systems in parallel initially, validate results"
    },
    {
      question: "How does Redux compare to Zustand for performance?",
      answer: "Zustand avoids unnecessary re-renders better by default (selector equality). Redux needs memoized selectors or shallowEqual. Both are fast; Zustand has smaller bundle size.",
      example: "// Redux - needs memoization for performance\nconst selectUser = createSelector(\n  state => state.user,\n  user => user\n);\nconst user = useSelector(selectUser);\n// Zustand - automatically prevents re-renders\nconst user = useStore(state => state.user); // Only re-renders when user changes\n// Zustand with multiple selectors\nconst { user, settings } = useStore(state => ({\n  user: state.user,\n  settings: state.settings\n}), shallow); // Or use separate selectors",
      output: "Both frameworks achieve excellent performance",
      note: "Zustand has less boilerplate, Redux more ecosystem"
    },
    {
      question: "How do you implement rate limiting in Redux actions?",
      answer: "Middleware that tracks action timestamps. Throttle/debounce middleware. Saga with throttle/debounce effects.",
      example: "const rateLimitMiddleware = (store) => (next) => (action) => {\n  const now = Date.now();\n  const lastCall = store.getState().lastApiCall[action.meta?.endpoint] || 0;\n  if (now - lastCall < 1000) {\n    console.warn('Rate limited:', action.type);\n    return;\n  }\n  store.dispatch({ type: 'RECORD_API_CALL', payload: { endpoint: action.meta.endpoint, time: now } });\n  return next(action);\n};\n// Redux Toolkit's listener middleware\nlistenerMiddleware.startListening({\n  actionCreator: fetchData,\n  effect: async (action, listenerApi) => {\n    const state = listenerApi.getState();\n    const lastFetch = state.lastFetch;\n    if (Date.now() - lastFetch < 5000) return; // Skip\n    listenerApi.dispatch(setLastFetch(Date.now()));\n    // Continue with fetch\n  }\n});",
      output: "Prevents API abuse and excessive updates",
      note: "Also implement rate limiting on server side for security"
    },
    {
      question: "What are the future directions of Redux?",
      answer: "Redux Toolkit is the primary focus. RTK Query for data fetching. Listener middleware for side effects. More integration with React Server Components. Reducing boilerplate further.",
      example: "// Future patterns (already possible)\n// 1. RTK Query for all API calls\nconst { data } = useGetPostsQuery();\n// 2. Listener middleware for side effects\nlistenerMiddleware.startListening({\n  actionCreator: addTodo,\n  effect: () => console.log('Todo added')\n});\n// 3. Auto-memoized selectors\nconst selectFilteredTodos = createSelector(/* ... */);\n// 4. Reduced boilerplate with createSlice\nconst slice = createSlice({ reducers: { increment: state => state + 1 } });",
      output: "Redux evolves with React ecosystem",
      note: "Redux Toolkit ensures Redux stays modern and relevant for years to come"
    }
  ]
};

export default interview;
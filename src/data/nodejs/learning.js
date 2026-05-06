// /data/nodejs/learning.js

export const learning = {
  basic: {
    title: "🚀 Node.js Basics - Complete Beginner's Guide",
    topics: [
      // ========== INTRODUCTION & SETUP (1-5) ==========
      {
        name: "1. What is Node.js & Installation",
        description: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows running JavaScript on the server-side. It's event-driven, non-blocking, and ideal for I/O-heavy applications. Install from nodejs.org (LTS version recommended).",
        code: `// Check Node.js version
// node --version

// Check npm version
// npm --version

// First Node.js program
console.log('Hello, Node.js!');

// Run with: node app.js

// Node.js REPL (Read-Eval-Print Loop)
// Type 'node' in terminal to enter REPL
// > 2 + 2
// 4
// > .exit to leave`,
        lineByLine: [
          "Line 2: node --version - Checks installed Node.js version",
          "Line 5: npm --version - Checks npm (Node Package Manager) version",
          "Line 8: console.log('Hello, Node.js!') - Basic output statement",
          "Line 11: node app.js - Command to run JavaScript file",
          "Line 14-17: REPL - Interactive environment for testing code"
        ],
        simpleMeaning: "Node.js lets you run JavaScript code on the server, not just in browsers",
        output: "Hello, Node.js!",
        note: "Always download LTS (Long Term Support) version for stability"
      },
      {
        name: "2. Creating an HTTP Server",
        description: "Node.js has built-in http module to create web servers without external libraries. The server listens on a port and responds to requests with status codes, headers, and body content.",
        code: `// Import the built-in http module
const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
    // Set response status code and headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send response body and end the response
    res.end('Hello, World!');
});

// Start listening on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Alternative: Basic routing
const server2 = http.createServer((req, res) => {
    const url = req.url;
    
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server2.listen(3001);`,
        lineByLine: [
          "Line 2: const http = require('http') - Imports Node's HTTP module",
          "Line 5: createServer((req, res) => {...}) - Creates server with callback for each request",
          "Line 6: req - Request object containing client request data (URL, headers, body)",
          "Line 6: res - Response object used to send data back to client",
          "Line 8: writeHead(200, { 'Content-Type': 'text/plain' }) - Sets status code and headers",
          "Line 11: res.end('Hello, World!') - Sends response and ends the connection",
          "Line 14: server.listen(3000, callback) - Starts server on port 3000",
          "Line 18-29: Basic routing - Different responses based on URL path",
          "Line 19: req.url - Contains the requested URL path (e.g., '/', '/about')"
        ],
        simpleMeaning: "HTTP server listens for web requests and sends back responses",
        output: "Visiting http://localhost:3000 shows 'Hello, World!'",
        note: "Node.js server stays running until manually stopped (Ctrl+C)"
      },
      {
        name: "3. File System (fs) Module - Reading Files",
        description: "The fs module provides file system operations. It supports both synchronous (blocking) and asynchronous (non-blocking) methods. Asynchronous methods are preferred for production to avoid blocking the event loop.",
        code: `const fs = require('fs');

// ========== ASYNCHRONOUS METHODS (Non-blocking - Recommended) ==========

// Read file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
console.log('This runs while file is being read');

// Write file asynchronously
const content = 'Hello, Node.js!';
fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
});

// Append to file
fs.appendFile('log.txt', 'New log entry\\n', (err) => {
    if (err) console.error(err);
    console.log('Content appended');
});

// ========== SYNCHRONOUS METHODS (Blocking - Use carefully) ==========

try {
    // Read file synchronously
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('Sync read:', data);
    
    // Write file synchronously
    fs.writeFileSync('sync-output.txt', 'Sync write');
    
    // Check if file exists
    const exists = fs.existsSync('example.txt');
    console.log('File exists:', exists);
} catch (err) {
    console.error('Error:', err);
}

// Get file information
fs.stat('example.txt', (err, stats) => {
    if (err) return;
    console.log('File size:', stats.size, 'bytes');
    console.log('Is file:', stats.isFile());
    console.log('Is directory:', stats.isDirectory());
    console.log('Created:', stats.birthtime);
});`,
        lineByLine: [
          "Line 1: const fs = require('fs') - Imports File System module",
          "Line 5: fs.readFile('example.txt', 'utf8', callback) - Asynchronously reads file",
          "Line 6-10: Callback function - Executes after file read completes",
          "Line 7: err - Contains error if file doesn't exist or can't be read",
          "Line 11: console.log after fs.readFile - Shows non-blocking behavior",
          "Line 14-21: fs.writeFile - Creates or overwrites file asynchronously",
          "Line 24-28: fs.appendFile - Adds content to end of file",
          "Line 32-40: Synchronous methods - Block execution until complete",
          "Line 33: fs.readFileSync - Returns data directly instead of callback",
          "Line 38: fs.existsSync - Checks if file exists (returns boolean)",
          "Line 43-49: fs.stat - Gets file metadata (size, dates, type)"
        ],
        simpleMeaning: "File System module lets you read, write, and manage files on the server",
        output: "File content: Hello World!\\nThis runs while file is being read\\nFile written successfully!",
        note: "Use asynchronous methods for production to avoid blocking the server"
      },
      {
        name: "4. Working with Directories",
        description: "Node.js fs module provides methods for directory operations: creating, reading, removing, and renaming directories. Useful for organizing files, creating upload folders, and managing file structures.",
        code: `const fs = require('fs');
const path = require('path');

// Create directory (asynchronous)
fs.mkdir('uploads', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created: uploads');
});

// Create nested directories with recursive option
fs.mkdir('uploads/images/2024', { recursive: true }, (err) => {
    if (err) console.error(err);
    else console.log('Nested directories created');
});

// Read directory contents
fs.readdir('uploads', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Files in uploads:', files);
    
    // Get details for each file
    files.forEach(file => {
        const filePath = path.join('uploads', file);
        fs.stat(filePath, (err, stats) => {
            if (err) return;
            const type = stats.isDirectory() ? 'Directory' : 'File';
            console.log(\`\${type}: \${file}\`);
        });
    });
});

// Synchronous directory operations
try {
    // Create directory
    fs.mkdirSync('backup', { recursive: true });
    
    // Check if directory exists
    if (fs.existsSync('uploads')) {
        console.log('Uploads directory exists');
    }
    
    // Read directory
    const items = fs.readdirSync('uploads');
    console.log('Items:', items);
    
    // Remove empty directory
    fs.rmdirSync('empty-folder');
    
    // Remove directory with contents (recursive)
    // fs.rmSync('folder-to-delete', { recursive: true, force: true });
} catch (err) {
    console.error('Sync operation error:', err);
}

// Watch directory for changes
fs.watch('uploads', (eventType, filename) => {
    console.log(\`Event: \${eventType}, File: \${filename}\`);
});

// Get current working directory
console.log('Current directory:', process.cwd());

// Change directory
// process.chdir('/new/path');

// Get home directory
console.log('Home directory:', process.env.HOME || process.env.USERPROFILE);`,
        lineByLine: [
          "Line 2: const path = require('path') - Path module for cross-platform paths",
          "Line 5: fs.mkdir('uploads', { recursive: true }, callback) - Creates directory",
          "Line 6: recursive: true - Creates parent directories if they don't exist",
          "Line 15-20: Nested directories - Creates full path including missing parents",
          "Line 23: fs.readdir('uploads', callback) - Reads directory contents",
          "Line 28: files - Array of file/directory names",
          "Line 30-38: For each file - Gets details using fs.stat",
          "Line 31: path.join('uploads', file) - Safely joins path segments",
          "Line 47-61: Synchronous operations - Block until complete",
          "Line 59: fs.rmdirSync - Removes empty directory",
          "Line 62: fs.rmSync with recursive - Removes directory and all contents",
          "Line 66: fs.watch - Watches directory for changes",
          "Line 71: process.cwd() - Gets current working directory",
          "Line 77: process.env.HOME - Gets user's home directory"
        ],
        simpleMeaning: "Directory operations let you create, read, and manage folders on the server",
        output: "Directory created: uploads\\nFiles in uploads: ['images']\\nUploads directory exists",
        note: "Use { recursive: true } to create nested directories in one operation"
      },
      {
        name: "5. Path Module for Cross-Platform Paths",
        description: "The path module provides utilities for working with file and directory paths across different operating systems (Windows vs Linux/Mac). It handles differences in path separators (\\ vs /) and provides methods for joining, resolving, and parsing paths.",
        code: `const path = require('path');

// Path joining (cross-platform safe)
const fullPath = path.join('users', 'john', 'documents', 'file.txt');
console.log('Joined path:', fullPath);
// Windows: users\\john\\documents\\file.txt
// Linux/Mac: users/john/documents/file.txt

// Get path components
const filePath = '/home/user/projects/app.js';

console.log('Directory name:', path.dirname(filePath));    // /home/user/projects
console.log('Base name:', path.basename(filePath));       // app.js
console.log('Extension:', path.extname(filePath));        // .js
console.log('File name without extension:', path.basename(filePath, '.js')); // app

// Resolve absolute path
const absolutePath = path.resolve('docs', 'readme.md');
console.log('Absolute path:', absolutePath);

// Parse path into components
const parsed = path.parse('/home/user/projects/app.js');
console.log('Parsed:', parsed);
// {
//   root: '/',
//   dir: '/home/user/projects',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }

// Format object to path string
const formatted = path.format({
    dir: '/home/user/projects',
    base: 'app.js'
});
console.log('Formatted:', formatted); // /home/user/projects/app.js

// Normalize path (resolves . and ..)
const normalized = path.normalize('/home/user/../user2/./project');
console.log('Normalized:', normalized); // /home/user2/project

// Check if path is absolute
console.log('Is absolute:', path.isAbsolute('/home/file.txt'));  // true
console.log('Is absolute:', path.isAbsolute('./file.txt'));      // false

// Get relative path between two absolute paths
const from = '/home/user/projects';
const to = '/home/user/documents/file.txt';
const relative = path.relative(from, to);
console.log('Relative path:', relative); // ../documents/file.txt

// Platform-specific separators
console.log('Platform separator:', path.sep);    // Windows: '\\', Others: '/'
console.log('Path delimiter:', path.delimiter);   // Windows: ';', Others: ':'

// Combine path with current working directory
const cwdPath = path.resolve('data', 'config.json');
console.log('From CWD:', cwdPath);`,
        lineByLine: [
          "Line 1: const path = require('path') - Imports Path module",
          "Line 4: path.join('users', 'john', 'documents', 'file.txt') - Joins path segments",
          "Line 5-7: Cross-platform - Handles Windows vs Unix path separators automatically",
          "Line 11: path.dirname(filePath) - Gets directory portion of path",
          "Line 12: path.basename(filePath) - Gets filename with extension",
          "Line 13: path.extname(filePath) - Gets file extension including dot",
          "Line 14: basename with extension parameter - Removes extension",
          "Line 17: path.resolve('docs', 'readme.md') - Resolves to absolute path",
          "Line 20-29: path.parse() - Breaks path into components object",
          "Line 32-35: path.format() - Reconstructs path from parsed components",
          "Line 38: path.normalize() - Removes redundant . and .. segments",
          "Line 42-43: path.isAbsolute() - Checks if path is absolute",
          "Line 46-49: path.relative() - Gets relative path between two absolute paths",
          "Line 52: path.sep - Platform-specific path separator",
          "Line 53: path.delimiter - Platform-specific PATH delimiter"
        ],
        simpleMeaning: "Path module helps build file paths that work on Windows, Mac, and Linux without modification",
        output: "Joined path: users/john/documents/file.txt\\nDirectory name: /home/user/projects\\nBase name: app.js",
        note: "Always use path.join() instead of string concatenation for paths"
      },
      {
        name: "6. URL Module - Parsing and Formatting URLs",
        description: "The url module provides utilities for URL parsing and formatting. It breaks URLs into components like protocol, hostname, port, pathname, query parameters, and hash. Useful for handling request URLs in HTTP servers.",
        code: `const url = require('url');

// Parse URL string into object
const urlString = 'https://example.com:8080/products/search?q=laptop&page=2#results';
const parsedUrl = url.parse(urlString, true); // true parses query string

console.log('Protocol:', parsedUrl.protocol);     // 'https:'
console.log('Hostname:', parsedUrl.hostname);     // 'example.com'
console.log('Port:', parsedUrl.port);             // '8080'
console.log('Pathname:', parsedUrl.pathname);     // '/products/search'
console.log('Query:', parsedUrl.query);           // { q: 'laptop', page: '2' }
console.log('Hash:', parsedUrl.hash);             // '#results'

// Access query parameters
const searchTerm = parsedUrl.query.q;    // 'laptop'
const pageNumber = parsedUrl.query.page; // '2'

// Format URL object back to string
const urlObject = {
    protocol: 'https:',
    hostname: 'api.example.com',
    port: '3000',
    pathname: '/v1/users',
    query: { id: 123, fields: 'name,email' }
};
const formattedUrl = url.format(urlObject);
console.log('Formatted URL:', formattedUrl);

// WHATWG URL API (modern alternative)
const myUrl = new URL('https://example.com:8080/path?name=John&age=30#section');

console.log('Origin:', myUrl.origin);           // 'https://example.com:8080'
console.log('Pathname:', myUrl.pathname);       // '/path'
console.log('Search params:', myUrl.searchParams); // URLSearchParams object

// Manipulating URL parameters
myUrl.searchParams.append('city', 'New York');
myUrl.searchParams.set('age', '31');
myUrl.searchParams.delete('name');
console.log('Modified URL:', myUrl.toString());

// Iterate over search parameters
myUrl.searchParams.forEach((value, key) => {
    console.log(\`\${key}: \${value}\`);
});

// Check if parameter exists
if (myUrl.searchParams.has('age')) {
    console.log('Age parameter present');
}

// Get all values for a parameter
const allValues = myUrl.searchParams.getAll('hobby');
console.log('Hobbies:', allValues);

// Building URL dynamically
const baseUrl = 'https://api.example.com';
const endpoint = '/users';
const params = new URLSearchParams({
    limit: 10,
    offset: 0,
    sort: 'desc'
});

const fullApiUrl = \`\${baseUrl}\${endpoint}?\${params}\`;
console.log('API URL:', fullApiUrl);`,
        lineByLine: [
          "Line 1: const url = require('url') - Imports URL module",
          "Line 4: const parsedUrl = url.parse(urlString, true) - Parses URL into object",
          "Line 5: true parameter - Parses query string into object instead of string",
          "Line 7-12: URL components - Access different parts of the URL",
          "Line 9: parsedUrl.query - Query parameters as object (with parse true)",
          "Line 16-19: URL components - Manual construction for formatting",
          "Line 20: url.format(urlObject) - Converts object back to URL string",
          "Line 24: new URL() - Modern WHATWG URL API (preferred)",
          "Line 28: myUrl.searchParams - Returns URLSearchParams object for query manipulation",
          "Line 31-33: Manipulating parameters - append, set, delete methods",
          "Line 36: forEach iteration - Loop through all query parameters",
          "Line 40: has() - Checks if parameter exists",
          "Line 46-50: URLSearchParams - Building query strings dynamically",
          "Line 51: Template literal - Constructs full URL with query string"
        ],
        simpleMeaning: "URL module helps break down web addresses into parts and build URLs dynamically",
        output: "Protocol: https:\\nHostname: example.com\\nQuery: { q: 'laptop', page: '2' }\\nModified URL: https://example.com:8080/path?age=31&city=New+York",
        note: "Use WHATWG URL API for modern applications; parse with true to get query objects"
      },
      {
        name: "7. Query String Module",
        description: "The querystring module parses and stringifies URL query strings. It converts between query string format and JavaScript objects. Useful for handling form data, API parameters, and URL encoding/decoding.",
        code: `const querystring = require('querystring');

// Parse query string to object
const queryString = 'name=John&age=25&city=New+York&hobby=coding&hobby=reading';
const parsed = querystring.parse(queryString);
console.log('Parsed:', parsed);
// Output: { name: 'John', age: '25', city: 'New York', hobby: ['coding', 'reading'] }

// Access values
console.log('Name:', parsed.name);           // 'John'
console.log('Age:', parsed.age);             // '25'
console.log('City:', parsed.city);           // 'New York' (plus decoded)
console.log('Hobbies:', parsed.hobby);       // ['coding', 'reading'] (array for duplicates)

// Parse with custom delimiter
const customQuery = 'name:John;age:25;city:London';
const customParsed = querystring.parse(customQuery, ';', ':');
console.log('Custom delimiter:', customParsed);

// Stringify object to query string
const obj = {
    name: 'Alice',
    age: 30,
    city: 'Los Angeles',
    tags: ['node', 'javascript', 'api']
};

const stringified = querystring.stringify(obj);
console.log('Stringified:', stringified);
// Output: name=Alice&age=30&city=Los%20Angeles&tags=node&tags=javascript&tags=api

// Custom encoding/decoding
const encoded = querystring.escape('Hello World! How are you?');
console.log('Encoded:', encoded); // 'Hello%20World%21%20How%20are%20you%3F'

const decoded = querystring.unescape('Hello%20World%21');
console.log('Decoded:', decoded); // 'Hello World!'

// Parse URL encoded form data (from HTTP request body)
const formData = 'email=user%40example.com&message=Hello%20World';
const parsedForm = querystring.parse(formData);
console.log('Form data:', parsedForm); // { email: 'user@example.com', message: 'Hello World' }

// Handle nested objects (querystring doesn't support nesting)
// For nested objects, use qs module (npm install qs)
// const qs = require('qs');
// const nestedQuery = qs.parse('user[name]=John&user[age]=25');
// console.log(nestedQuery); // { user: { name: 'John', age: 25 } }

// Extract query string from URL
const fullUrl = 'https://example.com/search?q=nodejs&sort=recent&page=2';
const queryPart = fullUrl.split('?')[1];
const queryParams = querystring.parse(queryPart);
console.log('URL query params:', queryParams); // { q: 'nodejs', sort: 'recent', page: '2' }`,
        lineByLine: [
          "Line 1: const querystring = require('querystring') - Imports Query String module",
          "Line 4: 'name=John&age=25&city=New+York' - Example query string",
          "Line 5: querystring.parse(queryString) - Converts query string to object",
          "Line 6: Plus signs (+) become spaces automatically",
          "Line 7: Duplicate keys become arrays (hobby appears twice)",
          "Line 15-17: Custom delimiter and separator - Can use any characters",
          "Line 19: querystring.parse(customQuery, ';', ':') - Parses with custom separators",
          "Line 22-26: Object to stringify - Contains string, number, and array",
          "Line 28: querystring.stringify(obj) - Converts object to query string",
          "Line 29: Spaces become %20, arrays repeat key for each value",
          "Line 33-34: querystring.escape() - URL encodes special characters",
          "Line 37-38: querystring.unescape() - Decodes URL encoded string",
          "Line 41: URL encoded form data - Common in POST requests",
          "Line 42-43: Decodes %40 to @ and %20 to space",
          "Line 46-49: Note about nested objects - querystring doesn't support nesting",
          "Line 52-55: Extracting query from full URL - Split and parse"
        ],
        simpleMeaning: "Query String module converts between URL parameters and JavaScript objects",
        output: "Parsed: { name: 'John', age: '25', city: 'New York', hobby: ['coding', 'reading'] }\\nStringified: name=Alice&age=30&city=Los%20Angeles&tags=node&tags=javascript&tags=api",
        note: "Use 'qs' module for nested objects and complex query strings"
      },
      {
        name: "8. Events Module and Event Emitter",
        description: "Node.js has a built-in events module that implements the observer pattern. EventEmitter allows objects to emit named events and attach listeners. Core modules like HTTP servers, streams, and file watchers extend EventEmitter.",
        code: `const EventEmitter = require('events');

// Create event emitter instance
const myEmitter = new EventEmitter();

// ========== BASIC EVENT HANDLING ==========

// Register event listener
myEmitter.on('greet', (name) => {
    console.log(\`Hello, \${name}!\`);
});

// Emit event
myEmitter.emit('greet', 'John');

// Multiple listeners for same event
myEmitter.on('greet', (name) => {
    console.log(\`Welcome to the system, \${name}\`);
});

myEmitter.emit('greet', 'Alice');
// Output both listeners

// ========== ONCE (Single execution) ==========
myEmitter.once('onceEvent', () => {
    console.log('This runs only once');
});

myEmitter.emit('onceEvent'); // Runs
myEmitter.emit('onceEvent'); // Ignored

// ========== EVENT WITH MULTIPLE ARGUMENTS ==========
myEmitter.on('data', (id, name, status) => {
    console.log(\`ID: \${id}, Name: \${name}, Status: \${status}\`);
});

myEmitter.emit('data', 1, 'Product', 'active');

// ========== ERROR HANDLING ==========
myEmitter.on('error', (err) => {
    console.error('Error event caught:', err.message);
});

myEmitter.emit('error', new Error('Something went wrong'));

// ========== REMOVING LISTENERS ==========
function specificHandler() {
    console.log('Specific handler called');
}

myEmitter.on('test', specificHandler);
myEmitter.emit('test'); // Calls handler

myEmitter.off('test', specificHandler); // Remove specific listener
myEmitter.emit('test'); // No output

// Remove all listeners
myEmitter.removeAllListeners('test');

// ========== GET LISTENER INFO ==========
function handler1() { console.log('Handler 1'); }
function handler2() { console.log('Handler 2'); }

myEmitter.on('info', handler1);
myEmitter.on('info', handler2);

console.log('Listener count:', myEmitter.listenerCount('info')); // 2
console.log('Event names:', myEmitter.eventNames()); // ['info']

const listeners = myEmitter.listeners('info');
console.log('Listeners:', listeners.length); // 2

// ========== EXTENDING EVENTEMITTER IN CLASS ==========
class Logger extends EventEmitter {
    log(message) {
        console.log('Logging:', message);
        this.emit('logged', { message, timestamp: new Date() });
    }
    
    error(message) {
        console.error('Error:', message);
        this.emit('error', new Error(message));
    }
}

const logger = new Logger();
logger.on('logged', (data) => {
    console.log(\`Event at \${data.timestamp}: \${data.message}\`);
});

logger.log('User login successful');

// ========== ASYNC EVENT HANDLERS ==========
myEmitter.on('async-event', async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async handler completed:', data);
});

myEmitter.emit('async-event', 'Async data');

// ========== MAX LISTENERS WARNING ==========
// Default max listeners is 10
myEmitter.setMaxListeners(20);
console.log('Max listeners:', myEmitter.getMaxListeners());

// ========== PREPEND LISTENER (add to front) ==========
myEmitter.on('order', () => console.log('Second listener'));
myEmitter.prependListener('order', () => console.log('First listener'));
myEmitter.emit('order'); // First, then Second

// ========== ONCE WITH PREPEND ==========
myEmitter.prependOnceListener('once', () => console.log('First once'));
myEmitter.once('once', () => console.log('Second once'));
myEmitter.emit('once'); // Executes both, but first added first`,
        lineByLine: [
          "Line 1: const EventEmitter = require('events') - Imports events module",
          "Line 4: new EventEmitter() - Creates event emitter instance",
          "Line 7: myEmitter.on('greet', callback) - Registers event listener",
          "Line 8: console.log(\"Hello, \${name}!\") - Executes when event emitted",
          "Line 12: myEmitter.emit('greet', 'John') - Triggers event with data",
          "Line 16-18: Multiple listeners - All execute when event emitted",
          "Line 22-26: once() - Listener executes only once then auto-removes",
          "Line 31-34: Multiple arguments - Pass multiple values to listeners",
          "Line 38-42: Error handling - Special 'error' event convention",
          "Line 46-55: Removing specific listeners - off() or removeListener()",
          "Line 58-59: removeAllListeners() - Removes all listeners for event",
          "Line 64-71: Listener inspection - Count, names, and listeners array",
          "Line 75-85: Extending EventEmitter - Classes that can emit events",
          "Line 87-90: super() - Call parent constructor",
          "Line 91-96: Custom methods - Emit events from class methods",
          "Line 99-105: Async event handlers - Use async/await in listeners",
          "Line 108-110: setMaxListeners() - Increase limit (default 10)",
          "Line 113-117: prependListener() - Add listener to beginning of queue",
          "Line 120-124: prependOnceListener() - One-time listener at beginning"
        ],
        simpleMeaning: "Event Emitter lets objects send and receive events, like clicking a button in JavaScript",
        output: "Hello, John!\\nWelcome to the system, Alice\\nLogging: User login successful\\nEvent at ...: User login successful",
        note: "Always handle 'error' events to prevent crashes"
      },
      {
        name: "9. NPM (Node Package Manager)",
        description: "NPM is the default package manager for Node.js. It installs, manages, and publishes packages. It uses package.json to track dependencies and scripts. More than 1 million packages available for reusing code.",
        code: `// ========== BASIC NPM COMMANDS ==========

// Initialize new project
// npm init -y
// Creates package.json with default values

// Install a package
// npm install express
// or npm i express

// Install as development dependency
// npm install --save-dev nodemon
// or npm i -D nodemon

// Install globally
// npm install -g pm2

// Install all dependencies from package.json
// npm install

// Uninstall package
// npm uninstall express

// Update packages
// npm update

// List installed packages
// npm list
// npm list --depth=0

// View package info
// npm view express
// npm view express version

// Install specific version
// npm install express@4.18.2

// ========== PACKAGE.JSON EXAMPLE ==========
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "My Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0"
  },
  "keywords": ["node", "express"],
  "author": "Your Name",
  "license": "MIT"
}

// ========== USING INSTALLED PACKAGES ==========
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// ========== SEMANTIC VERSIONING ==========
// Version format: MAJOR.MINOR.PATCH
// ^4.18.2 - Compatible with 4.x.x (any minor/patch)
// ~4.18.2 - Compatible with 4.18.x (any patch)
// 4.18.2 - Exact version
// >=4.18.0 - Greater than or equal to 4.18.0
// latest - Most recent version

// ========== CREATE YOUR OWN PACKAGE ==========
// npm init
// Write code
// npm login
// npm publish

// ========== PRIVATE PACKAGES ==========
// For private packages, use npm private packages or GitHub Packages

// ========== NPM CACHE ==========
// npm cache clean --force

// ========== NPM AUDIT ==========
// npm audit
// npm audit fix
// npm audit fix --force

// ========== NPM OUTDATED ==========
// npm outdated

// ========== NPM RUN SCRIPTS ==========
// npm run dev
// npm run test
// npm run build

// ========== NPM LINK (development) ==========
// In package directory: npm link
// In app directory: npm link package-name

console.log('NPM manages project dependencies');`,
        lineByLine: [
          "Line 5: npm init -y - Creates package.json with defaults (yes to all prompts)",
          "Line 8: npm install express - Installs package and adds to dependencies",
          "Line 11: --save-dev flag - Installs as devDependency (only for development)",
          "Line 14: -g flag - Installs package globally (available system-wide)",
          "Line 17: npm install - Installs all dependencies from package.json",
          "Line 26-45: package.json - Configuration file for Node.js projects",
          "Line 31-34: scripts - Custom npm commands like npm run dev",
          "Line 35-38: dependencies - Production packages",
          "Line 39-42: devDependencies - Development-only packages",
          "Line 49-56: Semantic versioning - Controls which updates are allowed",
          "Line 59-64: Publishing packages - Share code with community",
          "Line 70: npm audit - Checks for security vulnerabilities",
          "Line 74: npm outdated - Shows packages with newer versions",
          "Line 77: npm run <script> - Executes custom script commands"
        ],
        simpleMeaning: "NPM is like an app store for JavaScript code, letting you install and use thousands of packages",
        output: "NPM manages project dependencies",
        note: "Always commit package-lock.json to ensure consistent installations"
      },
      {
        name: "10. Environment Variables with dotenv",
        description: "Environment variables store configuration outside code (API keys, database URLs, passwords). The dotenv package loads variables from .env file into process.env. Never commit .env file to version control.",
        code: `// Install dotenv: npm install dotenv

// ========== .env FILE ==========
// API_KEY=abc123xyz789
// DB_URL=mongodb://localhost:27017/myapp
// PORT=3000
// NODE_ENV=production
// SECRET_KEY=super-secret-key-2024
// ADMIN_EMAIL=admin@example.com

// ========== LOAD ENVIRONMENT VARIABLES ==========
require('dotenv').config();

// Access environment variables
const apiKey = process.env.API_KEY;
const dbUrl = process.env.DB_URL;
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';

console.log('API Key:', apiKey);
console.log('Database URL:', dbUrl);
console.log('Server port:', port);
console.log('Environment:', nodeEnv);

// ========== CONDITIONAL CONFIGURATION ==========
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

if (isProduction) {
    console.log('Running in production mode');
    // Use production database, enable caching, etc.
} else if (isDevelopment) {
    console.log('Running in development mode');
    // Use local database, enable debug logging
}

// ========== WITH DEFAULT VALUES ==========
const config = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    apiUrl: process.env.API_URL || 'https://api.default.com',
    timeout: parseInt(process.env.TIMEOUT) || 5000,
    debug: process.env.DEBUG === 'true'
};

// ========== VALIDATE REQUIRED VARIABLES ==========
const requiredEnvVars = ['API_KEY', 'DB_URL', 'SECRET_KEY'];

requiredEnvVars.forEach(varName => {
    if (!process.env[varName]) {
        console.error(\`ERROR: Missing required environment variable: \${varName}\`);
        if (isProduction) {
            process.exit(1);
        }
    }
});

// ========== DIFFERENT .env FILES ==========
// .env.development - for development
// .env.production - for production
// .env.test - for testing

// Load different file based on environment
const envFile = \`.env.\${process.env.NODE_ENV}\`;
require('dotenv').config({ path: envFile });

// ========== TYPED ENVIRONMENT VARIABLES ==========
const config2 = {
    // Numbers
    port: parseInt(process.env.PORT, 10) || 3000,
    maxConnections: parseInt(process.env.MAX_CONNECTIONS, 10) || 100,
    
    // Booleans
    debug: process.env.DEBUG === 'true',
    enableCors: process.env.ENABLE_CORS !== 'false',
    
    // Arrays
    allowedHosts: process.env.ALLOWED_HOSTS?.split(',') || ['localhost'],
    
    // Objects (JSON)
    dbConfig: process.env.DB_CONFIG ? JSON.parse(process.env.DB_CONFIG) : {}
};

console.log('Configuration loaded:', config2);

// ========== USING IN EXPRESS APP ==========
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});

// ========== .gitignore ==========
// Add .env to .gitignore
// .env
// .env.*
// !.env.example

// ========== .env.example (commit to git) ==========
// API_KEY=your_api_key_here
// DB_URL=mongodb://localhost:27017/dbname
// PORT=3000
// NODE_ENV=development`,
        lineByLine: [
          "Line 2: npm install dotenv - Installs dotenv package",
          "Line 5-11: .env file - Stores key-value pairs, never commit this file",
          "Line 14: require('dotenv').config() - Loads .env into process.env",
          "Line 17-20: process.env.VAR_NAME - Access environment variables",
          "Line 18: || 3000 - Provides default value if not set",
          "Line 24-26: NODE_ENV - Standard environment indicator",
          "Line 41-46: Validation - Check required variables exist",
          "Line 49-51: Multiple env files - Different config for each environment",
          "Line 55: load different file based on NODE_ENV",
          "Line 60-70: Typed variables - Convert to correct JavaScript types",
          "Line 63: parseInt() - Convert string to number",
          "Line 67: split(',') - Convert comma-separated string to array",
          "Line 70: JSON.parse() - Parse JSON string to object",
          "Line 74-78: Express usage - Use env vars for server config",
          "Line 81-85: .gitignore - Prevents committing sensitive data",
          "Line 88-92: .env.example - Template file that can be committed"
        ],
        simpleMeaning: "Environment variables keep sensitive information like passwords out of your code",
        output: "API Key: abc123xyz789\\nDatabase URL: mongodb://localhost:27017/myapp\\nServer port: 3000\\nEnvironment: development",
        note: "Always add .env to .gitignore; create .env.example as a template"
      }
    ]
  },
  advanced: {
    title: "⚙️ Advanced Node.js - Expert Level",
    topics: [
      {
        name: "1. Express.js Framework - Routing",
        description: "Express is the most popular web framework for Node.js. It simplifies routing, middleware, and request/response handling. Features: route parameters, query strings, body parsing, static file serving, and template engines.",
        code: `const express = require('express');
const app = express();

// ========== BASIC ROUTING ==========
// GET request
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// POST request
app.post('/api/users', (req, res) => {
    res.status(201).json({ message: 'User created' });
});

// PUT request
app.put('/api/users/:id', (req, res) => {
    res.json({ message: \`User \${req.params.id} updated\` });
});

// DELETE request
app.delete('/api/users/:id', (req, res) => {
    res.json({ message: \`User \${req.params.id} deleted\` });
});

// ========== ROUTE PARAMETERS ==========
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.json({ productId, name: \`Product \${productId}\` });
});

// Multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
    const { userId, postId } = req.params;
    res.json({ userId, postId });
});

// ========== QUERY STRINGS ==========
app.get('/search', (req, res) => {
    const { q, page = 1, limit = 10 } = req.query;
    res.json({ query: q, page, limit });
});

// ========== ROUTE GROUPS ==========
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.json({ users: ['Alice', 'Bob'] });
});

userRouter.get('/:id', (req, res) => {
    res.json({ id: req.params.id, name: \`User \${req.params.id}\` });
});

userRouter.post('/', (req, res) => {
    res.status(201).json({ message: 'User created' });
});

app.use('/api/users', userRouter);

// ========== CHAINED ROUTES ==========
app.route('/api/products/:id')
    .get((req, res) => {
        res.json({ id: req.params.id, action: 'GET' });
    })
    .put((req, res) => {
        res.json({ id: req.params.id, action: 'PUT' });
    })
    .delete((req, res) => {
        res.json({ id: req.params.id, action: 'DELETE' });
    });

// ========== REGULAR EXPRESSIONS IN ROUTES ==========
// Match routes with .jpg or .png extension
app.get(/.*\\.(jpg|png|gif)$/, (req, res) => {
    res.send('Image file requested');
});

// ========== CUSTOM RESPONSE METHODS ==========
app.get('/custom-response', (req, res) => {
    // Send JSON
    res.json({ success: true });
    
    // Send status code only
    res.sendStatus(204);
    
    // Send file
    res.sendFile('index.html', { root: __dirname });
    
    // Redirect
    res.redirect(301, '/new-location');
    
    // Set headers and send
    res.set('X-Custom-Header', 'value').send('OK');
});

// ========== HANDLING 404 ==========
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});`,
        lineByLine: [
          "Line 1: const express = require('express') - Imports Express framework",
          "Line 2: const app = express() - Creates Express application",
          "Line 6: app.get('/', callback) - Handles HTTP GET requests to root path",
          "Line 7: req - Request object with params, query, body, headers",
          "Line 8: res - Response object for sending data back",
          "Line 9: res.send() - Sends response (auto-sets Content-Type)",
          "Line 14-17: POST request - Creates new resource",
          "Line 15: res.status(201) - Sets HTTP status code (Created)",
          "Line 16: res.json() - Sends JSON response",
          "Line 19-21: PUT request - Updates existing resource",
          "Line 20: req.params.id - Accesses route parameter",
          "Line 24-26: DELETE request - Removes resource",
          "Line 30-33: Route parameters - :id captures URL segment",
          "Line 36-38: Multiple parameters - Captures multiple values",
          "Line 40: req.params - Destructuring for cleaner code",
          "Line 43-47: Query strings - ?q=search&page=2",
          "Line 44: req.query - Contains parsed query parameters",
          "Line 45: default values - page = 1, limit = 10",
          "Line 50: express.Router() - Creates modular route handlers",
          "Line 52-55: Router routes - Same methods as app",
          "Line 60: app.use('/api/users', userRouter) - Mounts router at path",
          "Line 63-72: app.route() - Chain multiple HTTP methods",
          "Line 78-81: Regex routes - Pattern matching URLs",
          "Line 85: res.sendFile() - Serves static files",
          "Line 88: res.redirect() - Redirects to another URL",
          "Line 91: chained methods - Set headers and send",
          "Line 94-96: 404 handler - Catches unmatched routes"
        ],
        simpleMeaning: "Express simplifies building web servers with easy routing and request handling",
        output: "Server running on port 3000\\nGET / → 'Home Page'\\nGET /products/123 → { productId: '123', name: 'Product 123' }",
        note: "Order matters - put specific routes before generic ones"
      },
      {
        name: "2. Express Middleware",
        description: "Middleware functions have access to request and response objects. They can modify requests, end responses, or call next middleware. Used for logging, authentication, parsing, compression, error handling, and security.",
        code: `const express = require('express');
const app = express();

// ========== APPLICATION-LEVEL MIDDLEWARE ==========

// Logger middleware (custom)
app.use((req, res, next) => {
    const start = Date.now();
    console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
    
    // Log after response finishes
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(\`Response status: \${res.statusCode}, Duration: \${duration}ms\`);
    });
    
    next(); // Pass control to next middleware
});

// Built-in middleware for JSON parsing
app.use(express.json());

// Built-in middleware for URL encoded data (forms)
app.use(express.urlencoded({ extended: true }));

// Built-in middleware for serving static files
app.use(express.static('public'));

// ========== ROUTE-SPECIFIC MIDDLEWARE ==========

// Middleware for specific route
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token || token !== 'secret-token') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    req.user = { id: 1, name: 'John' };
    next();
};

app.get('/api/protected', authenticate, (req, res) => {
    res.json({ message: 'Protected data', user: req.user });
});

// Multiple middleware functions
const validateId = (req, res, next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ error: 'Invalid ID' });
    }
    req.validId = id;
    next();
};

const fetchUser = (req, res, next) => {
    // Simulate database fetch
    req.user = { id: req.validId, name: \`User \${req.validId}\` };
    next();
};

app.get('/api/users/:id', validateId, fetchUser, (req, res) => {
    res.json(req.user);
});

// ========== ERROR-HANDLING MIDDLEWARE ==========

// Error handler (must have 4 parameters)
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    
    res.status(status).json({ error: message });
});

// ========== THIRD-PARTY MIDDLEWARE ==========
const morgan = require('morgan'); // HTTP request logger
const helmet = require('helmet'); // Security headers
const cors = require('cors');     // CORS support
const compression = require('compression'); // Response compression
const rateLimit = require('express-rate-limit'); // Rate limiting

// Security headers
app.use(helmet());

// CORS
app.use(cors());

// Compression
app.use(compression());

// Request logging
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests
});
app.use('/api/', limiter);

// ========== ASYNC MIDDLEWARE ==========
const asyncMiddleware = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/async-data', asyncMiddleware(async (req, res) => {
    const data = await fetchDataFromDatabase();
    res.json(data);
}));

// ========== CONDITIONAL MIDDLEWARE ==========
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
    app.use(require('express-status-monitor')());
}

// ========== MIDDLEWARE ORDER ==========
// 1. Security middleware (helmet, cors)
// 2. Parsing middleware (json, urlencoded)
// 3. Logging middleware (morgan)
// 4. Compression middleware
// 5. Static files
// 6. Routes
// 7. Error handling (last)

console.log('Express middleware configured');`,
        lineByLine: [
          "Line 2: app.use(middleware) - Registers middleware for all routes",
          "Line 6-14: Custom logger - Logs all requests and response time",
          "Line 9: new Date().toISOString() - Timestamp for logging",
          "Line 12: res.on('finish') - Event when response is sent",
          "Line 13: duration calculation - Performance monitoring",
          "Line 16: next() - Proceeds to next middleware/route",
          "Line 19: express.json() - Parses JSON request bodies into req.body",
          "Line 22: express.urlencoded({ extended: true }) - Parses form data",
          "Line 25: express.static('public') - Serves static files from folder",
          "Line 30-39: authenticate middleware - Checks authorization token",
          "Line 31: req.headers.authorization - Reads Authorization header",
          "Line 34: return res.status(401) - Stops execution if unauthorized",
          "Line 36: req.user = { id: 1, name: 'John' } - Adds data to request",
          "Line 42: Route with middleware - authenticate runs before handler",
          "Line 47-52: validateId middleware - Validates route parameter",
          "Line 48: parseInt(req.params.id) - Converts string to number",
          "Line 50: return res.status(400) - Stops if invalid",
          "Line 55-59: fetchUser middleware - Fetches data after validation",
          "Line 62: Multiple middleware - Executes in order",
          "Line 67-73: Error handler - 4 parameters identifies as error middleware",
          "Line 68: err.stack - Error stack trace for debugging",
          "Line 75: res.status(err.status || 500) - Uses error status or 500",
          "Line 79-86: Third-party middleware examples",
          "Line 79: morgan - HTTP request logger for production",
          "Line 80: helmet - Adds security HTTP headers",
          "Line 81: cors - Enables Cross-Origin Resource Sharing",
          "Line 82: compression - Compresses responses (gzip)",
          "Line 83-89: rateLimit - Prevents API abuse",
          "Line 95-98: asyncMiddleware wrapper - Handles async errors",
          "Line 96: Promise.resolve(fn(...)).catch(next) - Catches async errors",
          "Line 101-104: Conditional middleware - Only in production",
          "Line 107-114: Middleware order - Recommended sequence"
        ],
        simpleMeaning: "Middleware are like assembly line stations that process requests before reaching final destination",
        output: "[2024-01-15T14:30:00.000Z] GET /api/data\\nResponse status: 200, Duration: 45ms\\nExpress middleware configured",
        note: "Call next() to pass control to next middleware, or send response to stop"
      },
      {
        name: "3. Express Error Handling",
        description: "Proper error handling in Express prevents crashes and provides useful feedback. Use try-catch in async handlers, error-handling middleware, 404 handler, and custom error classes. Always handle promise rejections and uncaught exceptions.",
        code: `const express = require('express');
const app = express();

// ========== CUSTOM ERROR CLASS ==========
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

// ========== ASYNC ERROR HANDLING WRAPPER ==========
const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

// ========== ROUTES WITH ERROR HANDLING ==========

// Throwing custom errors
app.get('/api/users/:id', catchAsync(async (req, res) => {
    const userId = parseInt(req.params.id);
    
    if (isNaN(userId)) {
        throw new AppError('Invalid user ID', 400);
    }
    
    const user = await findUserById(userId);
    
    if (!user) {
        throw new AppError('User not found', 404);
    }
    
    res.json(user);
}));

// Validation errors
app.post('/api/users', catchAsync(async (req, res) => {
    const { name, email, age } = req.body;
    
    if (!name || name.length < 2) {
        throw new AppError('Name must be at least 2 characters', 400);
    }
    
    if (!email || !email.includes('@')) {
        throw new AppError('Valid email is required', 400);
    }
    
    if (age && (age < 0 || age > 150)) {
        throw new AppError('Age must be between 0 and 150', 400);
    }
    
    const newUser = await createUser({ name, email, age });
    res.status(201).json(newUser);
}));

// Database error simulation
async function findUserById(id) {
    // Simulate database error
    if (id === 999) {
        throw new Error('Database connection failed');
    }
    
    if (id === 1) {
        return { id: 1, name: 'John', email: 'john@example.com' };
    }
    
    return null;
}

async function createUser(data) {
    return { id: Date.now(), ...data };
}

// ========== 404 HANDLER (NOT FOUND) ==========
app.use((req, res, next) => {
    next(new AppError(\`Cannot find \${req.originalUrl} on this server\`, 404));
});

// ========== GLOBAL ERROR HANDLING MIDDLEWARE ==========
app.use((err, req, res, next) => {
    // Set default values
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';
    
    // Log error for debugging
    console.error('Error:', {
        message: err.message,
        stack: err.stack,
        url: req.originalUrl,
        method: req.method,
        ip: req.ip,
        timestamp: new Date().toISOString()
    });
    
    // Send different responses based on environment
    const isProduction = process.env.NODE_ENV === 'production';
    
    if (isProduction) {
        // Don't leak error details in production
        if (err.isOperational) {
            res.status(err.statusCode).json({
                status: 'fail',
                message: err.message
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Something went wrong'
            });
        }
    } else {
        // Development: send full error details
        res.status(err.statusCode).json({
            status: 'fail',
            message: err.message,
            stack: err.stack,
            error: err
        });
    }
});

// ========== HANDLING UNCAUGHT EXCEPTIONS ==========
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.error(err.name, err.message, err.stack);
    process.exit(1);
});

// ========== HANDLING UNHANDLED REJECTIONS ==========
process.on('unhandledRejection', (err) => {
    console.error('UNHANDLED REJECTION! 💥 Shutting down...');
    console.error(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

// ========== GRACEFUL SHUTDOWN ==========
const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
});

process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        console.log('💥 Process terminated!');
    });
});

// ========== EXPRESS VALIDATION ERRORS ==========
const { body, validationResult } = require('express-validator');

app.post('/api/validate',
    body('email').isEmail(),
    body('age').isInt({ min: 0, max: 150 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    (req, res) => {
        res.json({ message: 'Validation passed' });
    }
);

// ========== TRY-CATCH IN SYNC CODE ==========
app.get('/sync-error', (req, res) => {
    try {
        const data = JSON.parse('invalid json');
        res.json(data);
    } catch (err) {
        res.status(400).json({ error: 'Invalid JSON' });
    }
});

console.log('Error handling configured');`,
        lineByLine: [
          "Line 6-13: AppError class - Custom error with status code",
          "Line 7: extends Error - Inherits from native Error",
          "Line 10: isOperational flag - Distinguishes expected vs programming errors",
          "Line 11: captureStackTrace - Removes constructor from stack trace",
          "Line 16-20: catchAsync wrapper - Catches promise rejections",
          "Line 18: fn(...).catch(next) - Forwards errors to Express error handler",
          "Line 25-41: Route with error handling - Throwing AppError",
          "Line 29-30: Validation - Checks for invalid ID",
          "Line 33-35: Throw custom error with appropriate status code",
          "Line 46-57: POST route with multiple validations",
          "Line 50-53: Individual field validations",
          "Line 60-69: Database error simulation - Different error types",
          "Line 75: 404 handler - Catches unmatched routes",
          "Line 78: next(new AppError(...)) - Passes to error handler",
          "Line 83-114: Global error handler - Processes all errors",
          "Line 84: err.statusCode || 500 - Default status",
          "Line 88-94: Error logging - Records details for debugging",
          "Line 97-112: Environment-specific responses",
          "Line 98: isProduction - Checks environment",
          "Line 100-105: Operational errors - Known errors, safe to show",
          "Line 106-111: Programming errors - Generic message only",
          "Line 118-123: uncaughtException - Catches synchronous errors",
          "Line 126-133: unhandledRejection - Catches async promise errors",
          "Line 128: server.close() - Graceful shutdown before exit",
          "Line 136-145: Graceful shutdown - Handles SIGTERM signal",
          "Line 148-162: express-validator - Input validation middleware"
        ],
        simpleMeaning: "Error handling catches problems and sends helpful responses without crashing the server",
        output: "GET /api/users/invalid → { error: 'Invalid user ID', status: 'fail' }\\nGET /api/users/999 → { error: 'Something went wrong', status: 'error' }",
        note: "Always handle promise rejections to prevent server crashes"
      }
    ]
  }
};

export default learning;
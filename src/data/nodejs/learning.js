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
      },
      {
        name: "4. Streams - Readable and Writable",
        description: "Streams are efficient for handling large amounts of data piece by piece. Types: Readable (read data), Writable (write data), Duplex (both), Transform (modify data). Use for file processing, network requests, and big data transformation.",
        code: `const fs = require('fs');
const { Readable, Writable, Transform, pipeline } = require('stream');

// ========== READABLE STREAM ==========
// Create readable stream from file
const readableStream = fs.createReadStream('largefile.txt', {
    encoding: 'utf8',
    highWaterMark: 64 * 1024 // 64KB chunks
});

// Event handlers
readableStream.on('data', (chunk) => {
    console.log(\`Received chunk of size: \${chunk.length} bytes\`);
});

readableStream.on('end', () => {
    console.log('No more data');
});

readableStream.on('error', (err) => {
    console.error('Stream error:', err);
});

// ========== WRITABLE STREAM ==========
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('First line\\n');
writableStream.write('Second line\\n');
writableStream.end('Last line');

writableStream.on('finish', () => {
    console.log('Write completed');
});

// ========== PIPE (Connect streams) ==========
// Copy file using pipes
const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('destination.txt');

readStream.pipe(writeStream);

readStream.on('end', () => {
    console.log('File copied via pipe');
});

// ========== TRANSFORM STREAM (Modify data) ==========
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const upperChunk = chunk.toString().toUpperCase();
        callback(null, upperChunk);
    }
});

fs.createReadStream('input.txt')
    .pipe(upperCaseTransform)
    .pipe(fs.createWriteStream('output-upper.txt'));

// ========== CUSTOM READABLE STREAM ==========
class CounterStream extends Readable {
    constructor(max, options) {
        super(options);
        this.current = 1;
        this.max = max;
    }
    
    _read() {
        if (this.current <= this.max) {
            this.push(\`Number: \${this.current}\\n\`);
            this.current++;
        } else {
            this.push(null); // End of stream
        }
    }
}

const counter = new CounterStream(5);
counter.pipe(process.stdout);

// ========== CUSTOM WRITABLE STREAM ==========
class LoggerStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(\`[LOG] \${chunk.toString().trim()}\`);
        callback();
    }
}

const logger = new LoggerStream();
logger.write('First message');
logger.write('Second message');
logger.end();

// ========== PIPELINE (Better error handling) ==========
const { pipeline } = require('stream');
const zlib = require('zlib');

pipeline(
    fs.createReadStream('input.txt'),
    zlib.createGzip(),
    fs.createWriteStream('input.txt.gz'),
    (err) => {
        if (err) {
            console.error('Pipeline failed:', err);
        } else {
            console.log('Pipeline succeeded');
        }
    }
);

// ========== STREAM BACKPRESSURE ==========
// Slow consumer example
const slowWritable = new Writable({
    write(chunk, encoding, callback) {
        setTimeout(() => {
            console.log('Processed:', chunk.toString());
            callback();
        }, 100);
    }
});

const fastReadable = fs.createReadStream('largefile.txt');
fastReadable.pipe(slowWritable); // Automatically handles backpressure

// ========== DUPLEX AND TRANSFORM ==========
const { Duplex } = require('stream');

class EchoDuplex extends Duplex {
    _read(size) {
        // No-op (push data from external source)
    }
    
    _write(chunk, encoding, callback) {
        console.log('Received:', chunk.toString());
        callback();
    }
}

const echo = new EchoDuplex();
process.stdin.pipe(echo).pipe(process.stdout);

console.log('Stream examples completed');`,
        lineByLine: [
          "Line 2: const { Readable, Writable, Transform, pipeline } = require('stream') - Import stream classes",
          "Line 5-7: fs.createReadStream - Creates readable file stream",
          "Line 8: highWaterMark - Controls chunk size (64KB)",
          "Line 10-13: data event - Fired for each chunk of data",
          "Line 15-17: end event - Stream finished reading",
          "Line 20-23: error event - Handle stream errors",
          "Line 26-32: Writable stream - Write data to file",
          "Line 28: write() method - Write chunk to stream",
          "Line 29: end() method - Signal end of stream",
          "Line 31-33: finish event - Called after end()",
          "Line 36-43: pipe() method - Connects readable to writable",
          "Line 47-56: Transform stream - Modifies data passing through",
          "Line 58-61: pipe chain - Read → transform → write",
          "Line 64-77: Custom Readable - Implement _read() method",
          "Line 66: this.push(null) - Signals end of stream",
          "Line 82-89: Custom Writable - Implement _write() method",
          "Line 93-105: pipeline() - Better error handling than pipe()",
          "Line 96: zlib.createGzip() - Compress stream, demonstrates transform",
          "Line 108-118: Backpressure - Slow consumer automatically pauses source",
          "Line 121-131: Duplex stream - Both readable and writable"
        ],
        simpleMeaning: "Streams process data piece by piece, saving memory for large files",
        output: "Received chunk of size: 65536 bytes\\nFile copied via pipe\\nPipeline succeeded",
        note: "Always handle 'error' events on streams to prevent crashes"
      },
      {
        name: "5. Buffers and Binary Data",
        description: "Buffer class handles binary data directly in memory. Used for file I/O, network protocols, cryptography, and image processing. Buffers have fixed size and can be created from strings, arrays, or allocated with specified length.",
        code: `// ========== CREATING BUFFERS ==========
// From string
const bufFromString = Buffer.from('Hello Node.js', 'utf8');
console.log('From string:', bufFromString.toString());

// From array of bytes
const bufFromArray = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
console.log('From array:', bufFromArray.toString());

// Allocate uninitialized (may contain old data)
const bufUnsafe = Buffer.allocUnsafe(10);
console.log('Unsafe buffer length:', bufUnsafe.length);

// Allocate zero-filled
const bufSafe = Buffer.alloc(10);
console.log('Allocated buffer:', bufSafe);

// ========== READING AND WRITING ==========
const buffer = Buffer.alloc(5);
buffer.write('Hello', 0, 'utf8');
console.log('Written buffer:', buffer.toString());

// Read specific bytes
console.log('First byte:', buffer[0]);
console.log('Second byte:', buffer[1]);

// Write number as integer
const numBuffer = Buffer.alloc(4);
numBuffer.writeUInt32BE(123456789, 0); // Big-endian
console.log('Number buffer:', numBuffer.readUInt32BE(0));

// ========== BUFFER METHODS ==========
const b1 = Buffer.from('Hello');
const b2 = Buffer.from('World');

// Concatenate
const combined = Buffer.concat([b1, b2]);
console.log('Concatenated:', combined.toString());

// Compare
console.log('Compare:', Buffer.compare(b1, b2));

// Copy
const target = Buffer.alloc(b1.length);
b1.copy(target);
console.log('Copied:', target.toString());

// Slice (shallow reference, not copy)
const slice = b1.slice(0, 2);
slice[0] = 65; // Modifies original buffer
console.log('Original after slice modification:', b1.toString());

// ========== ENCODINGS ==========
const utf8Str = 'Café';
const bufUtf8 = Buffer.from(utf8Str, 'utf8');
console.log('UTF-8 bytes:', bufUtf8); // 'Café' in UTF-8

const base64Str = bufUtf8.toString('base64');
console.log('Base64:', base64Str);

const backToUtf8 = Buffer.from(base64Str, 'base64').toString('utf8');
console.log('Decoded base64:', backToUtf8);

// Hex encoding
const hexStr = Buffer.from('Node.js', 'utf8').toString('hex');
console.log('Hex:', hexStr);
console.log('From hex:', Buffer.from(hexStr, 'hex').toString());

// ========== JSON AND BUFFERS ==========
const buf = Buffer.from('JSON serialization');
const json = buf.toJSON();
console.log('JSON representation:', json);

// ========== PERFORMANCE COMPARISON ==========
console.time('String concat');
let str = '';
for (let i = 0; i < 100000; i++) {
    str += 'a';
}
console.timeEnd('String concat');

console.time('Buffer concat');
const buffers = [];
for (let i = 0; i < 100000; i++) {
    buffers.push(Buffer.from('a'));
}
const resultBuffer = Buffer.concat(buffers);
console.timeEnd('Buffer concat');

// ========== BINARY FILE PROCESSING ==========
const fs = require('fs');
// Read binary file into buffer
const imageBuffer = fs.readFileSync('image.jpg');
console.log('Image size:', imageBuffer.length, 'bytes');

// Write buffer to file
fs.writeFileSync('copy.jpg', imageBuffer);

// ========== INSPECT BUFFER ==========
const sample = Buffer.from('Test Buffer');
console.log('Buffer length:', sample.length);
console.log('Buffer hex:', sample.toString('hex'));
console.log('Buffer JSON:', sample.toJSON());`,
        lineByLine: [
          "Line 2-4: Buffer.from(string, encoding) - Creates buffer from string",
          "Line 3: toString() - Converts buffer back to string",
          "Line 6: Buffer.from(array) - Creates buffer from byte array",
          "Line 9: Buffer.allocUnsafe(size) - Fast but may contain old data",
          "Line 13: Buffer.alloc(size) - Zero-filled, safer",
          "Line 17-18: buffer.write() - Writes string to buffer",
          "Line 21-22: buffer[index] - Access individual bytes",
          "Line 25-27: writeUInt32BE() - Writes 32-bit integer (big-endian)",
          "Line 28: readUInt32BE() - Reads 32-bit integer",
          "Line 32-34: Buffer.concat() - Combines multiple buffers",
          "Line 37: Buffer.compare() - Compares two buffers",
          "Line 40-41: copy() - Copies data to another buffer",
          "Line 44-46: slice() - Creates shallow reference (affects original)",
          "Line 50-53: Buffer encoding - UTF-8 to Base64",
          "Line 56-57: Base64 to UTF-8 - Common for data serialization",
          "Line 60-61: Hex encoding - Human-readable representation",
          "Line 64-66: toJSON() - Convert to JSON-friendly format",
          "Line 69-73: Performance - Buffer concatenation faster than string +=",
          "Line 78-79: fs.readFileSync - Returns buffer for binary files",
          "Line 82-87: Buffer inspection methods"
        ],
        simpleMeaning: "Buffers handle raw binary data efficiently, like images, network packets, or file chunks",
        output: "From string: Hello Node.js\\nFrom array: Hello\\nAllocated buffer: <Buffer 00 00 00 00 00>\\nWritten buffer: Hello\\nNumber buffer: 123456789",
        note: "Use Buffer.alloc() instead of new Buffer() (deprecated)"
      },
      {
        name: "6. Child Processes (spawn, exec, fork)",
        description: "Child processes allow running system commands, other Node.js scripts, or any executable. spawn() for streaming output, exec() for buffered output, execFile() for executables, fork() for Node.js modules. Useful for parallel processing, system integration, and task delegation.",
        code: `const { spawn, exec, execFile, fork } = require('child_process');
const path = require('path');

// ========== SPAWN (Streaming output) ==========
// Run 'ls -la' command
const ls = spawn('ls', ['-la']);

ls.stdout.on('data', (data) => {
    console.log(\`stdout: \${data}\`);
});

ls.stderr.on('data', (data) => {
    console.error(\`stderr: \${data}\`);
});

ls.on('close', (code) => {
    console.log(\`Child process exited with code \${code}\`);
});

// Real-time output processing
const find = spawn('find', ['.', '-name', '*.js']);
let fileCount = 0;
find.stdout.on('data', (data) => {
    fileCount += data.toString().split('\\n').length - 1;
});
find.on('close', () => {
    console.log(\`Found \${fileCount} JS files\`);
});

// ========== EXEC (Buffered output) ==========
exec('git log --oneline -5', (error, stdout, stderr) => {
    if (error) {
        console.error(\`exec error: \${error}\`);
        return;
    }
    console.log(\`Git log: \${stdout}\`);
});

// Large output warning (exec has buffer limit)
exec('cat largefile.txt', { maxBuffer: 1024 * 1024 * 10 }, (err, stdout) => {
    if (err) console.error(err);
    else console.log('File read');
});

// ========== EXECFILE (For executables) ==========
execFile('node', ['--version'], (err, stdout) => {
    if (err) throw err;
    console.log('Node version:', stdout);
});

// ========== FORK (Node.js child process) ==========
// parent.js
const child = fork(path.join(__dirname, 'child.js'));

child.on('message', (msg) => {
    console.log('Parent received:', msg);
});

child.send({ hello: 'from parent' });

// child.js
process.on('message', (msg) => {
    console.log('Child received:', msg);
    process.send({ reply: 'from child' });
});

// ========== SPAWN WITH OPTIONS ==========
const python = spawn('python', ['script.py'], {
    cwd: '/path/to/workdir',
    env: { ...process.env, CUSTOM_VAR: 'value' },
    shell: true,
    timeout: 5000
});

// ========== PIPE BETWEEN CHILDREN ==========
const cat = spawn('cat', ['data.txt']);
const grep = spawn('grep', ['pattern']);

cat.stdout.pipe(grep.stdin);
grep.stdout.on('data', (data) => {
    console.log('Matched:', data.toString());
});

// ========== DETACHED PROCESS ==========
const detached = spawn('node', ['longtask.js'], {
    detached: true,
    stdio: 'ignore'
});
detached.unref(); // Allow parent to exit independently

// ========== HANDLE SIGNALS ==========
const sleeper = spawn('sleep', ['30']);
sleeper.on('close', (code, signal) => {
    console.log(\`Process ended with signal \${signal}\`);
});
setTimeout(() => {
    sleeper.kill('SIGTERM');
}, 1000);

// ========== PROMISIFY CHILD PROCESS (util.promisify) ==========
const util = require('util');
const execPromise = util.promisify(exec);

async function runCommand() {
    try {
        const { stdout } = await execPromise('echo "Hello"');
        console.log('Async exec:', stdout);
    } catch (err) {
        console.error(err);
    }
}
runCommand();

console.log('Child process examples configured');`,
        lineByLine: [
          "Line 1: const { spawn, exec, execFile, fork } = require('child_process') - Import methods",
          "Line 5-6: spawn('ls', ['-la']) - Runs command with arguments array",
          "Line 8-10: stdout event - Streams output as it arrives (non‑buffered)",
          "Line 12-14: stderr event - Handles error output",
          "Line 16-18: close event - Process exit with code (0 = success)",
          "Line 21-26: Real-time counting - Process output line by line",
          "Line 29-35: exec() - Buffers entire output, better for small commands",
          "Line 38-42: maxBuffer option - Prevents truncation for large output",
          "Line 45-48: execFile() - Executes file directly (no shell), safer",
          "Line 51-55: fork() - Specialised for Node.js modules",
          "Line 53-54: message event - Inter‑process communication",
          "Line 56: child.send() - Sends data to child process",
          "Line 59-63: child.js - Receives messages with process.on('message')",
          "Line 66-72: spawn options - cwd, env, shell, timeout",
          "Line 75-80: Pipe between children - cat | grep",
          "Line 83-88: Detached process - Runs independently after parent exits",
          "Line 85: detached: true - Process not tied to parent",
          "Line 86: stdio: 'ignore' - Discards parent's stdio",
          "Line 91-96: kill() - Sends signal to process",
          "Line 99-108: promisify exec - Async/await style"
        ],
        simpleMeaning: "Child processes let Node.js run other programs and scripts simultaneously",
        output: "stdout: file1.txt\\nfile2.js\\nChild process exited with code 0\\nGit log: abc123 Fix bug\\nNode version: v18.15.0",
        note: "Use spawn() for long-running processes with large output to avoid memory issues"
      },
      {
        name: "7. Cluster Module for Load Balancing",
        description: "Cluster module enables creating child processes (workers) that share server ports. Used for utilising multi-core systems, improving performance, and increasing availability. Master process manages workers, which handle incoming connections.",
        code: `const cluster = require('cluster');
const http = require('http');
const os = require('os');
const process = require('process');

// ========== BASIC CLUSTER SETUP ==========
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(\`Master \${process.pid} is running\`);
    
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    
    // Handle worker exit and restart
    cluster.on('exit', (worker, code, signal) => {
        console.log(\`Worker \${worker.process.pid} died. Restarting...\`);
        cluster.fork();
    });
    
    // Log worker online
    cluster.on('online', (worker) => {
        console.log(\`Worker \${worker.process.pid} is online\`);
    });
    
    // Message from worker
    cluster.on('message', (worker, message) => {
        console.log(\`Master received: \${JSON.stringify(message)}\`);
    });
    
} else {
    // Worker processes share HTTP server
    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end(\`Hello from worker \${process.pid}\\n\`);
        
        // Send message to master
        process.send({ worker: process.pid, url: req.url });
    });
    
    server.listen(3000, () => {
        console.log(\`Worker \${process.pid} started\`);
    });
}

// ========== ADVANCED CLUSTER WITH HEALTH CHECKS ==========
if (cluster.isMaster) {
    const workers = [];
    
    // Fork workers with custom settings
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork({
            WORKER_ID: i,
            MAX_CONNECTIONS: 1000
        });
        workers.push(worker);
    }
    
    // Health check every 10 seconds
    setInterval(() => {
        workers.forEach(worker => {
            worker.send({ type: 'health_check' });
        });
    }, 10000);
    
    // Graceful shutdown
    process.on('SIGTERM', () => {
        console.log('Master received SIGTERM, shutting down workers');
        for (const id in cluster.workers) {
            cluster.workers[id].kill();
        }
        process.exit(0);
    });
    
} else {
    // Worker with health check response
    process.on('message', (msg) => {
        if (msg.type === 'health_check') {
            process.send({ workerId: process.env.WORKER_ID, status: 'ok' });
        }
    });
    
    const server = http.createServer((req, res) => {
        res.end(\`Worker \${process.pid}\`);
    });
    
    server.listen(3000);
}

// ========== ZERO-DOWNTIME RESTART ==========
if (cluster.isMaster) {
    // Restart workers one by one
    const restartWorker = (worker) => {
        console.log(\`Restarting worker \${worker.process.pid}\`);
        worker.disconnect(); // Stop accepting new connections
        worker.on('disconnect', () => {
            worker.kill();
            const newWorker = cluster.fork();
            newWorker.on('listening', () => {
                console.log(\`New worker \${newWorker.process.pid} started\`);
            });
        });
    };
    
    // Example rolling restart on schedule
    setInterval(() => {
        const workers = Object.values(cluster.workers);
        workers.forEach((worker, index) => {
            setTimeout(() => restartWorker(worker), index * 5000);
        });
    }, 60000);
}

// ========== STICKY SESSIONS (using external balancer) ==========
// For sticky sessions, use a reverse proxy like nginx or use sticky-session package

// ========== PM2 ALTERNATIVE ==========
// PM2 is a production process manager that uses clustering behind the scenes:
// pm2 start app.js -i max

console.log('Cluster module ready');`,
        lineByLine: [
          "Line 1-4: Import cluster, http, os, process",
          "Line 8: os.cpus().length - Number of CPU cores",
          "Line 10: cluster.isMaster - True for master process",
          "Line 14-16: cluster.fork() - Creates worker process",
          "Line 19-21: exit event - Restart failed workers",
          "Line 24-26: online event - Worker started successfully",
          "Line 29-32: message event - IPC from workers",
          "Line 37-46: Worker code - Creates HTTP server",
          "Line 40: process.pid - Unique worker ID",
          "Line 43: process.send() - Send message to master",
          "Line 52-55: Worker with custom environment variables",
          "Line 58-62: Health check - Send message to workers",
          "Line 65-68: Graceful shutdown - Kill all workers",
          "Line 73-77: Worker message handler - Respond to health check",
          "Line 87-100: Rolling restart - Zero downtime",
          "Line 89: worker.disconnect() - Stop new connections",
          "Line 91-96: Create new worker after old one exits",
          "Line 101-106: Scheduled rolling restart",
          "Line 113-115: PM2 alternative - Production grade"
        ],
        simpleMeaning: "Cluster mode uses all CPU cores to handle more traffic, like having multiple workers on same port",
        output: "Master 12345 is running\\nWorker 12346 started\\nWorker 12347 started\\nHello from worker 12346",
        note: "Cluster does not automatically share state (e.g., sessions); use Redis or database"
      },
      {
        name: "8. Crypto Module (Encryption, Hashing, HMAC)",
        description: "Crypto module provides cryptographic functionality: hashing (SHA, MD5), HMAC, encryption (AES, DES), random bytes, and key generation. Used for password hashing, data integrity, secure communication, and random token generation.",
        code: `const crypto = require('crypto');

// ========== HASHING (One-way) ==========
// SHA-256 hash
const hash = crypto.createHash('sha256');
hash.update('Hello, Node.js!');
const hexDigest = hash.digest('hex');
console.log('SHA-256:', hexDigest);

// Multiple updates
const hash2 = crypto.createHash('sha512');
hash2.update('First chunk');
hash2.update('Second chunk');
console.log('Hash with chunks:', hash2.digest('base64'));

// ========== HMAC (Hash-based Message Authentication Code) ==========
const secret = 'my-secret-key';
const hmac = crypto.createHmac('sha256', secret);
hmac.update('Important data');
const hmacDigest = hmac.digest('hex');
console.log('HMAC:', hmacDigest);

// ========== RANDOM BYTES ==========
// Synchronous
const randomBytes = crypto.randomBytes(16); // 16 bytes = 128 bits
console.log('Random bytes (hex):', randomBytes.toString('hex'));

// Asynchronous
crypto.randomBytes(32, (err, buf) => {
    if (err) throw err;
    console.log('Async random:', buf.toString('base64'));
});

// Random int (secure)
crypto.randomInt(1, 100, (err, n) => {
    if (err) throw err;
    console.log('Random int:', n);
});

// ========== SYMMETRIC ENCRYPTION (AES) ==========
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // 256 bits
const iv = crypto.randomBytes(16); // Initialization vector

// Encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Sensitive data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

// Decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);

// ========== ASYMMETRIC ENCRYPTION (RSA) ==========
// Generate key pair
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

console.log('Public key (first 50 chars):', publicKey.substring(0, 50));

// Encrypt with public key
const encryptedRSA = crypto.publicEncrypt(publicKey, Buffer.from('Secret message'));
console.log('RSA encrypted (base64):', encryptedRSA.toString('base64'));

// Decrypt with private key
const decryptedRSA = crypto.privateDecrypt(privateKey, encryptedRSA);
console.log('RSA decrypted:', decryptedRSA.toString());

// ========== PBKDF2 FOR PASSWORD HASHING ==========
const password = 'user_password';
const salt = crypto.randomBytes(16).toString('hex');

crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log('PBKDF2 hash:', derivedKey.toString('hex'));
});

// ========== CONSTANT TIME COMPARISON ==========
const a = crypto.randomBytes(32);
const b = crypto.randomBytes(32);
const equal = crypto.timingSafeEqual(a, b);
console.log('Timing safe equal:', equal);

// ========== CREATE HASH FROM FILE ==========
const fs = require('fs');
const hashStream = crypto.createHash('sha256');
const input = fs.createReadStream('file.txt');
input.on('readable', () => {
    const data = input.read();
    if (data) hashStream.update(data);
    else console.log('File hash:', hashStream.digest('hex'));
});`,
        lineByLine: [
          "Line 1: const crypto = require('crypto') - Imports crypto module",
          "Line 4-7: crypto.createHash('sha256') - Creates hash object",
          "Line 5: update() - Feeds data into hash (can be called multiple times)",
          "Line 6: digest('hex') - Finalises hash and returns hex string",
          "Line 10-12: Multiple updates - Supports streaming data",
          "Line 15-20: HMAC - Keyed hash for message authentication",
          "Line 23-28: crypto.randomBytes() - Generates cryptographically strong random bytes",
          "Line 26: randomBytes(16) - 128 bits suitable for ID",
          "Line 31-35: randomInt() - Random integer in range",
          "Line 38-47: AES encryption - Symmetric (same key for encrypt/decrypt)",
          "Line 39: aes-256-cbc algorithm - 256-bit key, CBC mode",
          "Line 40: randomBytes(32) - Secret key",
          "Line 41: randomBytes(16) - Initialization vector (unique per encryption)",
          "Line 55-68: RSA encryption - Asymmetric (public/private keys)",
          "Line 57-63: generateKeyPairSync - Creates RSA 2048-bit keys",
          "Line 66-68: publicEncrypt/privateDecrypt - Encrypt with public, decrypt with private",
          "Line 71-76: PBKDF2 - Password hashing with salt and iterations",
          "Line 73: salt - Random per user, prevents rainbow tables",
          "Line 74: iterations - 100,000+ slows brute force",
          "Line 79-83: timingSafeEqual - Prevents timing attacks",
          "Line 86-91: Stream hashing - Process large files without loading entire into memory"
        ],
        simpleMeaning: "Crypto module secures data with encryption, hashing, and random generation",
        output: "SHA-256: 102...\\nHMAC: ae7...\\nRandom bytes (hex): f3a...\\nEncrypted: 5c3...\\nDecrypted: Sensitive data",
        note: "Never use MD5 or SHA1 for security; use SHA-256 or SHA-512"
      },
      {
        name: "9. WebSocket with ws Library",
        description: "WebSocket provides full-duplex communication between client and server. The ws library is fast and simple. Used for real-time chat, notifications, live data feeds, and multiplayer games.",
        code: `// Install: npm install ws

// ========== SERVER (socket-server.js) ==========
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

// Store connected clients
const clients = new Set();

server.on('connection', (ws, req) => {
    const clientId = Date.now();
    clients.add(ws);
    console.log(\`Client \${clientId} connected from \${req.socket.remoteAddress}\`);
    
    // Send welcome message
    ws.send(JSON.stringify({ type: 'welcome', message: 'Connected to server' }));
    
    // Handle incoming messages
    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data);
            console.log(\`Received from \${clientId}:\`, message);
            
            // Broadcast to all clients (except sender)
            if (message.broadcast) {
                clients.forEach(client => {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({
                            type: 'broadcast',
                            from: clientId,
                            payload: message.payload
                        }));
                    }
                });
            } else {
                ws.send(JSON.stringify({ type: 'echo', data: message.data }));
            }
        } catch (err) {
            console.error('Invalid JSON:', err);
        }
    });
    
    // Handle disconnection
    ws.on('close', () => {
        clients.delete(ws);
        console.log(\`Client \${clientId} disconnected\`);
    });
    
    // Handle errors
    ws.on('error', (err) => {
        console.error(\`WebSocket error for client \${clientId}:\`, err);
    });
});

// Optional: Heartbeat to keep connections alive
const interval = setInterval(() => {
    clients.forEach(ws => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.ping();
        }
    });
}, 30000);

server.on('close', () => {
    clearInterval(interval);
});

console.log('WebSocket server running on port 8080');

// ========== CLIENT (frontend or Node.js client) ==========
// Browser client example
/* 
const socket = new WebSocket('ws://localhost:8080');
socket.onopen = () => {
    console.log('Connected');
    socket.send(JSON.stringify({ data: 'Hello server' }));
};
socket.onmessage = (event) => {
    console.log('Server:', JSON.parse(event.data));
};
*/

// Node.js client example
const wsClient = new WebSocket('ws://localhost:8080');

wsClient.on('open', () => {
    console.log('Client connected');
    wsClient.send(JSON.stringify({ data: 'Ping' }));
});

wsClient.on('message', (data) => {
    console.log('Client received:', JSON.parse(data));
});

wsClient.on('close', () => {
    console.log('Client disconnected');
});

// ========== SECURE WEB SOCKET (wss) ==========
const fs = require('fs');
const https = require('https');

const wssServer = new WebSocket.Server({
    server: https.createServer({
        key: fs.readFileSync('private-key.pem'),
        cert: fs.readFileSync('certificate.pem')
    }).listen(8443)
});

// ========== ROOM / TOPIC SUPPORT ==========
const rooms = new Map();

server.on('connection', (ws) => {
    ws.on('message', (data) => {
        const { action, room, payload } = JSON.parse(data);
        
        if (action === 'join') {
            if (!rooms.has(room)) rooms.set(room, new Set());
            rooms.get(room).add(ws);
            ws.room = room;
        } else if (action === 'message') {
            const roomClients = rooms.get(room);
            if (roomClients) {
                roomClients.forEach(client => {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(payload));
                    }
                });
            }
        }
    });
    
    ws.on('close', () => {
        if (ws.room && rooms.has(ws.room)) {
            rooms.get(ws.room).delete(ws);
            if (rooms.get(ws.room).size === 0) rooms.delete(ws.room);
        }
    });
});`,
        lineByLine: [
          "Line 4: new WebSocket.Server({ port: 8080 }) - Creates WebSocket server",
          "Line 7: clients Set - Tracks all connected clients",
          "Line 9-12: connection event - Fires when client connects",
          "Line 10: req - HTTP request object (access remote address, headers)",
          "Line 15: ws.send() - Sends message to client",
          "Line 18: ws.on('message') - Handles incoming messages",
          "Line 20: JSON.parse() - Parse message from client",
          "Line 23-33: Broadcast to all other clients",
          "Line 25: ws.readyState === WebSocket.OPEN - Checks if connection still open",
          "Line 34-36: Echo back to sender",
          "Line 39-42: close event - Remove client from set",
          "Line 45-48: error event - Log errors",
          "Line 51-57: Heartbeat ping - Keeps connection alive",
          "Line 68-73: Node.js client example",
          "Line 76-83: Secure WebSocket (wss) with TLS",
          "Line 86-109: Room support (chat rooms, topics)"
        ],
        simpleMeaning: "WebSocket enables real-time two-way communication between server and clients",
        output: "WebSocket server running on port 8080\\nClient connected\\nClient received: { type: 'welcome', message: 'Connected to server' }",
        note: "Handle connection errors and implement reconnection logic on client side"
      },
      {
        name: "10. Database Integration (MongoDB with Mongoose)",
        description: "Mongoose is ODM for MongoDB. It provides schema validation, middleware, and query building. Used for data persistence, relationships, and aggregation in Node.js apps.",
        code: `// Install: npm install mongoose

const mongoose = require('mongoose');
const { Schema } = mongoose;

// ========== CONNECTION ==========
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error:', err));

// Connection events
mongoose.connection.on('connected', () => console.log('Mongoose connected'));
mongoose.connection.on('error', (err) => console.log('Mongoose error:', err));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

// ========== SCHEMA DEFINITION ==========
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [50, 'Name cannot exceed 50 characters'],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\\S+@\\S+\\.\\S+$/, 'Please enter a valid email']
    },
    age: {
        type: Number,
        min: [0, 'Age cannot be negative'],
        max: [150, 'Age cannot exceed 150']
    },
    address: {
        street: String,
        city: String,
        zipCode: String
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt automatically
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// ========== VIRTUALS ==========
userSchema.virtual('fullAddress').get(function() {
    if (!this.address) return '';
    return \`\${this.address.street}, \${this.address.city}\`;
});

// ========== INSTANCE METHODS ==========
userSchema.methods.getProfile = function() {
    return {
        name: this.name,
        email: this.email,
        age: this.age
    };
};

// ========== STATIC METHODS ==========
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email: email.toLowerCase() });
};

// ========== MIDDLEWARE (pre/post hooks) ==========
userSchema.pre('save', function(next) {
    console.log(\`Saving user: \${this.name}\`);
    // Hash password here if exists
    next();
});

userSchema.post('save', function(doc) {
    console.log(\`User \${doc.name} saved successfully\`);
});

// ========== MODEL ==========
const User = mongoose.model('User', userSchema);

// ========== CRUD OPERATIONS ==========
// Create
const createUser = async () => {
    try {
        const user = new User({
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            tags: ['admin', 'developer']
        });
        const saved = await user.save();
        console.log('Created user:', saved._id);
    } catch (err) {
        console.error('Create error:', err.errors);
    }
};

// Read (find)
const findUsers = async () => {
    // All users
    const all = await User.find();
    console.log(\`Total users: \${all.length}\`);
    
    // With filter
    const adults = await User.find({ age: { $gte: 18 } }).limit(10).sort('-createdAt');
    
    // Single user
    const user = await User.findById('...');
    
    // Chain queries
    const search = await User.find({ name: /john/i })
        .select('name email')
        .populate('posts'); // for references
};

// Update
const updateUser = async (id) => {
    // Find and update
    const updated = await User.findByIdAndUpdate(id, {
        $set: { age: 31 },
        $push: { tags: 'experienced' }
    }, { new: true }); // Return updated document
    
    // Increment age
    await User.updateOne({ _id: id }, { $inc: { age: 1 } });
};

// Delete
const deleteUser = async (id) => {
    const deleted = await User.findByIdAndDelete(id);
    console.log('Deleted:', deleted?.name);
};

// ========== AGGREGATION PIPELINE ==========
const pipeline = [
    { $match: { age: { $gte: 18 } } },
    { $group: { _id: '$address.city', count: { $sum: 1 }, avgAge: { $avg: '$age' } } },
    { $sort: { count: -1 } }
];
const stats = await User.aggregate(pipeline);

// ========== TRANSACTIONS (MongoDB 4.0+) ==========
const session = await mongoose.startSession();
session.startTransaction();
try {
    const user = await User.create([{ name: 'Alice', email: 'alice@example.com' }], { session });
    // Other operations...
    await session.commitTransaction();
} catch (err) {
    await session.abortTransaction();
    throw err;
} finally {
    session.endSession();
}

// ========== DISCONNECT ==========
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});`,
        lineByLine: [
          "Line 4: const mongoose = require('mongoose') - Import Mongoose",
          "Line 7-10: mongoose.connect() - Connect to MongoDB database",
          "Line 8-9: Options - New parser and unified topology",
          "Line 13-15: Connection event listeners",
          "Line 18-54: Schema definition - Shape of documents",
          "Line 20: type - MongoDB data type",
          "Line 21: required - Validation rule (can be function)",
          "Line 24: trim - Removes surrounding spaces",
          "Line 28: unique - Ensures email uniqueness",
          "Line 29: lowercase - Automatically converts email to lowercase",
          "Line 30: match - Regular expression validation",
          "Line 36-39: Nested object address",
          "Line 40: tags - Array of strings",
          "Line 42-44: createdAt - Default to current timestamp",
          "Line 46-57: Virtuals - Computed fields",
          "Line 60-65: Instance methods - Operate on document",
          "Line 68-71: Static methods - Operate on collection",
          "Line 74-82: Middleware (pre/post hooks) - Run on save, update, remove",
          "Line 85: Model - Interface to collection",
          "Line 89-96: Create document - new Model() + save()",
          "Line 100-113: Read queries - find, findOne, findById",
          "Line 107: $gte - Query operator",
          "Line 108: limit() and sort() - Chainable methods",
          "Line 111: populate() - Reference another collection",
          "Line 116-125: Update - findByIdAndUpdate, updateOne",
          "Line 119: $set, $push - Update operators",
          "Line 128-131: Delete - findByIdAndDelete",
          "Line 134-142: Aggregation pipeline - Complex data processing",
          "Line 145-154: Transactions - ACID compliance",
          "Line 157-160: Graceful shutdown"
        ],
        simpleMeaning: "Mongoose connects Node.js to MongoDB, providing schema validation and powerful querying",
        output: "MongoDB connected\\nCreated user: 65a1b2c3...\\nTotal users: 5",
        note: "Always handle connection errors and validate data with schema"
      },
      {
        name: "11. Authentication with JWT (JSON Web Tokens)",
        description: "JWT is a stateless authentication mechanism. Server signs token with secret; client stores token and sends with each request. Used for API authentication, single sign-on, and mobile apps.",
        code: `// Install: npm install jsonwebtoken bcryptjs

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express');
const app = express();
app.use(express.json());

// Secret key (store in environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'refresh-secret-key';

// ========== USER MODEL (simulated) ==========
const users = [];
let nextId = 1;

// ========== PASSWORD HASHING ==========
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

// ========== TOKEN GENERATION ==========
function generateAccessToken(userId) {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '15m' });
}

function generateRefreshToken(userId) {
    return jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: '7d' });
}

// ========== REGISTRATION ==========
app.post('/api/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        
        // Check if user exists
        if (users.find(u => u.email === email)) {
            return res.status(400).json({ error: 'User already exists' });
        }
        
        // Hash password
        const hashedPassword = await hashPassword(password);
        
        // Create user
        const user = {
            id: nextId++,
            email,
            name,
            passwordHash: hashedPassword,
            createdAt: new Date()
        };
        users.push(user);
        
        // Generate tokens
        const accessToken = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id);
        
        res.status(201).json({
            user: { id: user.id, email: user.email, name: user.name },
            accessToken,
            refreshToken
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ========== LOGIN ==========
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const isValid = await verifyPassword(password, user.passwordHash);
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const accessToken = generateAccessToken(user.id);
        const refreshToken = generateRefreshToken(user.id);
        
        res.json({
            user: { id: user.id, email: user.email, name: user.name },
            accessToken,
            refreshToken
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ========== REFRESH TOKEN ==========
app.post('/api/refresh', (req, res) => {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
        return res.status(401).json({ error: 'Refresh token required' });
    }
    
    try {
        const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
        const user = users.find(u => u.id === decoded.userId);
        if (!user) {
            return res.status(401).json({ error: 'Invalid refresh token' });
        }
        
        const newAccessToken = generateAccessToken(user.id);
        res.json({ accessToken: newAccessToken });
    } catch (err) {
        res.status(403).json({ error: 'Invalid or expired refresh token' });
    }
});

// ========== AUTHENTICATION MIDDLEWARE ==========
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }
    
    const token = authHeader.split(' ')[1]; // Bearer <token>
    if (!token) {
        return res.status(401).json({ error: 'Malformed token' });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired' });
        }
        return res.status(403).json({ error: 'Invalid token' });
    }
}

// ========== PROTECTED ROUTE ==========
app.get('/api/profile', authenticate, (req, res) => {
    const user = users.find(u => u.id === req.userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json({ id: user.id, email: user.email, name: user.name });
});

// ========== LOGOUT (client removes tokens) ==========
app.post('/api/logout', authenticate, (req, res) => {
    // On server side, optionally add token to blacklist
    res.json({ message: 'Logged out successfully' });
});

// ========== BLACKLIST (using Redis) ==========
// For production, implement token blacklist with Redis or database
const tokenBlacklist = new Set();

function addToBlacklist(token) {
    const decoded = jwt.decode(token);
    const expiry = decoded.exp * 1000;
    tokenBlacklist.add(token);
    setTimeout(() => tokenBlacklist.delete(token), expiry - Date.now());
}

// Modified authenticate with blacklist check
function authenticateWithBlacklist(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (tokenBlacklist.has(token)) {
        return res.status(401).json({ error: 'Token revoked' });
    }
    authenticate(req, res, next);
}

// ========== START SERVER ==========
app.listen(3000, () => {
    console.log('Auth server running on port 3000');
});`,
        lineByLine: [
          "Line 2-3: Install jsonwebtoken and bcryptjs",
          "Line 7-8: JWT secret - Use environment variables",
          "Line 13-16: Simulated user storage (use database in production)",
          "Line 19-23: Password hashing with bcrypt",
          "Line 20: genSalt(10) - Cost factor",
          "Line 21: hash(password, salt) - One-way hash",
          "Line 24-26: compare(password, hash) - Verify",
          "Line 29-32: generateAccessToken - Short expiration (15 min)",
          "Line 34-36: generateRefreshToken - Longer expiration (7 days)",
          "Line 39-54: Registration - Hash password, create user, return tokens",
          "Line 40-43: Validation",
          "Line 51-53: Return tokens to client",
          "Line 57-76: Login - Verify credentials, return tokens",
          "Line 58-62: Find user by email",
          "Line 64-66: Verify password with bcrypt",
          "Line 79-95: Refresh token endpoint - Get new access token",
          "Line 80-81: Validate refresh token",
          "Line 84-87: Decode and verify user exists",
          "Line 91-93: Issue new access token",
          "Line 98-116: Authentication middleware",
          "Line 100-103: Check Authorization header",
          "Line 104-107: Extract Bearer token",
          "Line 110-115: Verify JWT, catch specific errors",
          "Line 113: TokenExpiredError - Different status",
          "Line 119-127: Protected route example",
          "Line 130-134: Logout (client discards tokens)",
          "Line 137-148: Token blacklist with Redis",
          "Line 140-144: Store expired tokens for revocation"
        ],
        simpleMeaning: "JWT provides stateless authentication: server signs token, client sends it with each request",
        output: "POST /api/login → { accessToken, refreshToken, user: {...} }\\nGET /api/profile → { id, email, name }",
        note: "Store refresh token securely (httpOnly cookie) and implement logout blacklist"
      }
    ]
  }
};

export default learning;
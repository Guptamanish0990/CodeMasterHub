// /data/nodejs/interview.js

export const interview = {
  fresher: [
    {
      question: "What is Node.js and how does it differ from traditional web servers?",
      answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It is event‑driven, non‑blocking, and single‑threaded. Traditional servers (e.g., Apache) spawn a new thread per request, while Node.js handles many concurrent connections with a single thread using an event loop, making it ideal for I/O‑heavy applications like APIs, real‑time services, and streaming.",
      example: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  // Simulate async database call\n  setTimeout(() => {\n    res.end('Hello from Node.js');\n  }, 10);\n});\n\nserver.listen(3000);\nconsole.log('Server running on port 3000');",
      output: "Server running on port 3000\n(Concurrent requests are handled without blocking the event loop.)",
      note: "Node.js is not recommended for CPU‑intensive tasks; use worker threads or child processes for those."
    },
    {
      question: "Explain the event loop in Node.js and its phases.",
      answer: "The event loop is a mechanism that allows Node.js to perform non‑blocking I/O operations despite being single‑threaded. It has several phases: timers (setTimeout/setInterval), pending callbacks (I/O errors), idle/prepare (internal), poll (retrieve new I/O events), check (setImmediate), and close callbacks. Microtasks (process.nextTick, Promises) are processed between phases, giving them higher priority.",
      example: "console.log('1');\n\nsetTimeout(() => console.log('2'), 0);\nsetImmediate(() => console.log('3'));\nPromise.resolve().then(() => console.log('4'));\nprocess.nextTick(() => console.log('5'));\n\nconsole.log('6');",
      output: "1\n6\n5\n4\n2\n3 (order may vary between 2 and 3)",
      note: "nextTick runs before Promises in the same phase; setImmediate runs after I/O in the check phase."
    },
    {
      question: "What is the purpose of `package.json` and `package-lock.json`?",
      answer: "`package.json` holds project metadata (name, version, scripts, dependencies, and devDependencies). It defines the project structure. `package-lock.json` locks the exact version of every installed package and its dependencies, ensuring reproducible installs across different environments. Always commit `package-lock.json` to version control.",
      example: "// package.json\n{\n  \"name\": \"my-api\",\n  \"version\": \"1.0.0\",\n  \"main\": \"index.js\",\n  \"scripts\": { \"start\": \"node index.js\" },\n  \"dependencies\": { \"express\": \"^4.18.2\" }\n}\n\n// package-lock.json (auto-generated) contains resolved URLs, integrity hashes, and exact versions.",
      output: "Both files together ensure `npm install` installs identical dependency trees everywhere.",
      note: "Use `npm ci` in CI environments for faster, reproducible installs using lock files."
    },
    {
      question: "What are core modules in Node.js? Give examples.",
      answer: "Core modules are built‑in modules that come with Node.js, requiring no installation. Examples: `fs` (file system), `http` (HTTP server/client), `path` (path manipulation), `os` (operating system info), `events` (event emitter), `stream`, `crypto`, `child_process`, `util`, `url`, and `querystring`. They can be imported using `require('module_name')`.",
      example: "const fs = require('fs');\nconst path = require('path');\nconst os = require('os');\n\nconsole.log('Platform:', os.platform());\nconst filePath = path.join(__dirname, 'data.txt');\nfs.readFile(filePath, 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});",
      output: "Platform: win32 (or linux/darwin)\nFile content...",
      note: "Core modules are available without `npm install`, making them ideal for basic utilities."
    },
    {
      question: "How do you handle errors in Node.js applications?",
      answer: "Errors can be handled using error‑first callbacks, `try/catch` in synchronous code, `.catch()` on promises, `try/catch` with `async/await`, and event emitters (`error` event). For uncaught errors, use `process.on('uncaughtException')` and `process.on('unhandledRejection')`. In Express, use error‑handling middleware with four parameters.",
      example: "// Promise with catch\nconst fs = require('fs').promises;\nfs.readFile('missing.txt')\n  .catch(err => console.error('Read failed:', err.message));\n\n// Async/await\ntry {\n  await fs.readFile('data.json', 'utf8');\n} catch (err) {\n  console.error(err);\n}\n\n// Global handlers\nprocess.on('unhandledRejection', (reason, promise) => {\n  console.error('Unhandled Rejection:', reason);\n});",
      output: "Read failed: ENOENT: no such file or directory",
      note: "Always handle promise rejections; unhandled rejections will crash future Node.js versions."
    },
    {
      question: "What is middleware in Express.js? How does it work?",
      answer: "Middleware functions are functions that have access to the request (req), response (res), and the next middleware function (next). They can modify req/res, end the request, or call next() to pass control. Order matters. Built‑in middleware includes `express.json()`, `express.static()`, and third‑party like `morgan`, `cors`, `helmet`.",
      example: "const express = require('express');\nconst app = express();\n\n// Logger middleware\napp.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next();\n});\n\n// Authentication middleware for a route\napp.use('/admin', (req, res, next) => {\n  if (!req.headers.authorization) {\n    return res.status(401).json({ error: 'Unauthorized' });\n  }\n  next();\n});\n\napp.get('/', (req, res) => res.send('Home'));\napp.listen(3000);",
      output: "GET / (logged to console)",
      note: "Call `next()` only once; omitting it will hang the request."
    },
    {
      question: "Explain the difference between `require` and `import` in Node.js.",
      answer: "`require` is CommonJS (default), synchronous, dynamic, and returns a module.exports object. `import` is ES6 modules (enabled with `type: module` or `.mjs`), asynchronous, static (but supports dynamic `import()`), and allows tree shaking. Modern Node.js supports both; however, for new projects, ES modules are recommended.",
      example: "// CommonJS\nconst fs = require('fs');\nconst myModule = require('./my-module');\n\n// ES modules (package.json: { \"type\": \"module\" })\nimport fs from 'fs';\nimport myModule from './my-module.js';\n\n// Dynamic import (works in both)\nasync function load() {\n  const lodash = await import('lodash');\n  console.log(lodash.camelCase('hello world'));\n}",
      output: "helloWorld",
      note: "ES modules are the official standard; use `.mjs` extension or `\"type\":\"module\"` to enable them."
    },
    {
      question: "What is the `fs` module and its common methods?",
      answer: "The `fs` module provides file system operations. Common methods: `readFile`, `writeFile`, `appendFile`, `readdir`, `mkdir`, `stat`, `rename`, `unlink`, `readFileSync`, and `createReadStream`. Asynchronous versions (callback and promise) are preferred over synchronous to avoid blocking the event loop.",
      example: "const fs = require('fs').promises;\n\nasync function fileDemo() {\n  await fs.writeFile('test.txt', 'Hello');\n  const data = await fs.readFile('test.txt', 'utf8');\n  console.log(data);\n  const stats = await fs.stat('test.txt');\n  console.log(`Size: ${stats.size} bytes`);\n}\n\nfileDemo().catch(console.error);",
      output: "Hello\nSize: 5 bytes",
      note: "Use `fs.promises` for promise‑based API to avoid callback hell."
    },
    {
      question: "What is the `path` module used for?",
      answer: "The `path` module provides utilities for working with file and directory paths across different operating systems. It handles platform‑specific path separators (`\\` on Windows, `/` on Linux/Mac). Key methods: `path.join()`, `path.resolve()`, `path.basename()`, `path.dirname()`, `path.extname()`, `path.parse()`, and `path.relative()`.",
      example: "const path = require('path');\n\nconst file = '/home/user/docs/report.txt';\nconsole.log(path.dirname(file));   // '/home/user/docs'\nconsole.log(path.basename(file));  // 'report.txt'\nconsole.log(path.extname(file));   // '.txt'\n\nconst fullPath = path.join(__dirname, 'data', 'config.json');\nconsole.log(fullPath);",
      output: "/home/user/docs\nreport.txt\n.txt\n/current/working/dir/data/config.json",
      note: "Always use `path.join()` instead of string concatenation to avoid platform issues."
    },
    {
      question: "What are environment variables and how do you use them in Node.js?",
      answer: "Environment variables store configuration values outside the code (e.g., API keys, database URLs). In Node.js, they are accessed via `process.env`. The `dotenv` package loads variables from a `.env` file for development. Never commit `.env` to version control.",
      example: "// .env file\nPORT=5000\nDB_URL=mongodb://localhost:27017/mydb\n\n// index.js\nrequire('dotenv').config();\nconst port = process.env.PORT || 3000;\nconst dbUrl = process.env.DB_URL;\n\nconsole.log(`Server running on port ${port}`);",
      output: "Server running on port 5000",
      note: "Add `.env` to `.gitignore`; use `.env.example` as a template."
    },
    {
      question: "What is the `events` module and how do you create custom event emitters?",
      answer: "The `events` module provides the `EventEmitter` class, which implements the observer pattern. You can emit named events and attach listeners. Create a custom event emitter by extending `EventEmitter` or using `new EventEmitter()`. Core modules like HTTP servers and streams are built on this.",
      example: "const EventEmitter = require('events');\n\nclass Logger extends EventEmitter {\n  log(message) {\n    console.log(message);\n    this.emit('logged', { message, timestamp: new Date() });\n  }\n}\n\nconst logger = new Logger();\nlogger.on('logged', (data) => {\n  console.log(`Logged at ${data.timestamp}: ${data.message}`);\n});\n\nlogger.log('User action');",
      output: "User action\nLogged at ...: User action",
      note: "Always handle `error` events; otherwise, errors will crash the process."
    },
    {
      question: "What is the difference between `process.cwd()` and `__dirname`?",
      answer: "`process.cwd()` returns the current working directory from which the Node.js process was started. `__dirname` returns the directory of the currently executing script. They differ when the script is invoked from a different directory (e.g., `node app/start.js` from `/home/user`).",
      example: "// script located at /home/user/project/app.js\n// Run from /home/user\n\nconsole.log('CWD:', process.cwd());      // /home/user\nconsole.log('__dirname:', __dirname);   // /home/user/project",
      output: "CWD: /home/user\n__dirname: /home/user/project",
      note: "Use `__dirname` for paths relative to the script; use `process.cwd()` for paths relative to where the command was executed."
    },
    {
      question: "What are streams? Name the types of streams in Node.js.",
      answer: "Streams are objects that allow reading or writing data piece by piece, without loading the whole content into memory. Types: Readable (read data), Writable (write data), Duplex (both readable and writable), and Transform (modifies data as it passes through). Examples: `fs.createReadStream`, `fs.createWriteStream`, `zlib.createGzip`.",
      example: "const fs = require('fs');\nconst zlib = require('zlib');\n\nconst readStream = fs.createReadStream('large.txt');\nconst writeStream = fs.createWriteStream('output.txt');\nconst gzip = zlib.createGzip();\n\n// Pipe example: read -> gzip -> write\nreadStream.pipe(gzip).pipe(writeStream);\n\nreadStream.on('end', () => console.log('Done'));",
      output: "Done",
      note: "Streams are memory‑efficient and ideal for processing large files."
    },
    {
      question: "What is the difference between `readFile` and `createReadStream`?",
      answer: "`fs.readFile` loads the entire file into memory before invoking the callback, which can cause high memory usage for large files. `fs.createReadStream` reads the file in chunks, emitting 'data' events, which is memory‑efficient and allows processing as data arrives.",
      example: "const fs = require('fs');\n\n// readFile (loads whole file)\nfs.readFile('data.bin', (err, data) => {\n  console.log(`Read ${data.length} bytes`);\n});\n\n// createReadStream (chunked)\nlet total = 0;\nconst stream = fs.createReadStream('data.bin');\nstream.on('data', (chunk) => total += chunk.length);\nstream.on('end', () => console.log(`Total ${total} bytes`));",
      output: "Read 1048576 bytes\nTotal 1048576 bytes",
      note: "For large files (>100MB), always prefer streams."
    },
    {
      question: "How do you create a simple HTTP server in Node.js?",
      answer: "Use the built‑in `http` module. Call `http.createServer()` with a request listener, and then `listen()` on a port. The listener receives request (`req`) and response (`res`) objects.",
      example: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello World\\n');\n});\n\nserver.listen(3000, () => {\n  console.log('Server listening on port 3000');\n});",
      output: "Server listening on port 3000\n(Visiting http://localhost:3000 shows 'Hello World')",
      note: "For real applications, use Express.js to simplify routing and middleware."
    },
    {
      question: "What is NPM? List some common NPM commands.",
      answer: "NPM (Node Package Manager) is the default package manager for Node.js. It installs, updates, and manages dependencies and project scripts. Common commands: `npm init -y`, `npm install`, `npm install <package>`, `npm install --save-dev <package>`, `npm uninstall`, `npm update`, `npm list`, `npm run <script>`, `npm publish`, `npm audit`, and `npm outdated`.",
      example: "# Initialize a new project\nnpm init -y\n\n# Install express as runtime dependency\nnpm install express\n\n# Install nodemon as dev dependency\nnpm install -D nodemon\n\n# Run a script defined in package.json\nnpm start",
      output: "Packages installed and scripts executed.",
      note: "Always commit `package-lock.json` to ensure reproducible builds."
    },
    {
      question: "What is the purpose of the `os` module?",
      answer: "The `os` module provides operating system‑related utility methods and system information. Useful for getting CPU cores, memory, platform, network interfaces, uptime, and user home directory. Often used to adjust concurrency (e.g., number of workers in a cluster).",
      example: "const os = require('os');\n\nconsole.log('Platform:', os.platform());\nconsole.log('CPU cores:', os.cpus().length);\nconsole.log('Total memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');\nconsole.log('Free memory:', (os.freemem() / 1024 / 1024).toFixed(2), 'MB');\nconsole.log('Hostname:', os.hostname());",
      output: "Platform: linux\nCPU cores: 8\nTotal memory: 15.62 GB\nFree memory: 2048.45 MB\nHostname: dev-machine",
      note: "`os.cpus()` returns an array of CPU objects; the length indicates core count."
    },
    {
      question: "What are child processes and how do you spawn them?",
      answer: "Child processes allow you to run external commands or other scripts from Node.js. Methods: `exec()` (buffers output, good for smaller output), `execFile()` (executes a file directly, no shell), `spawn()` (streams output, good for large data), and `fork()` (spawns a new Node.js process with IPC).",
      example: "const { spawn } = require('child_process');\n\nconst ls = spawn('ls', ['-la', '/usr']);\n\nls.stdout.on('data', (data) => {\n  console.log(`Output: ${data}`);\n});\n\nls.on('close', (code) => {\n  console.log(`Process exited with code ${code}`);\n});",
      output: "Output: (directory listing)\nProcess exited with code 0",
      note: "Use `spawn` for long‑running processes with large output; use `exec` for short commands."
    },
    {
      question: "What is the `crypto` module used for?",
      answer: "The `crypto` module provides cryptographic functionality including hashing (SHA, MD5), HMAC, encryption/decryption (AES), random byte generation, and digital signatures. It is used for password hashing, token generation, and secure data transmission.",
      example: "const crypto = require('crypto');\n\n// Hash a password\nconst hash = crypto.createHash('sha256').update('myPassword').digest('hex');\nconsole.log('Hash:', hash);\n\n// Generate random bytes\nconst randomBytes = crypto.randomBytes(16).toString('hex');\nconsole.log('Random token:', randomBytes);\n\n// HMAC\nconst hmac = crypto.createHmac('sha256', 'secret_key').update('message').digest('hex');",
      output: "Hash: 7f7f2c1e...\nRandom token: a1b2c3...",
      note: "Never use MD5 or SHA1 for security; prefer SHA‑256 or SHA‑512."
    },
    {
      question: "What is the purpose of the `URL` module?",
      answer: "The `URL` module (WHATWG API) helps parse, construct, and manipulate URLs. It provides the `URL` class, which gives easy access to properties like `protocol`, `hostname`, `pathname`, `searchParams`, and `hash`. It also supports serializing and modifying query parameters.",
      example: "const myUrl = new URL('https://example.com:8080/path?name=John&age=30#section');\n\nconsole.log(myUrl.hostname);      // example.com\nconsole.log(myUrl.port);          // 8080\nconsole.log(myUrl.pathname);      // /path\nconsole.log(myUrl.searchParams.get('name')); // John\n\nmyUrl.searchParams.set('age', '31');\nconsole.log(myUrl.toString());",
      output: "example.com\n8080\n/path\nJohn\nhttps://example.com:8080/path?name=John&age=31#section",
      note: "Use `URL` over manual string manipulation for reliability."
    },
    {
      question: "What is the `querystring` module?",
      answer: "The `querystring` module parses and stringifies URL query strings. It converts between a query string (`name=John&age=25`) and a JavaScript object. It also handles URL encoding/decoding. For nested objects, use the `qs` module instead.",
      example: "const querystring = require('querystring');\n\nconst obj = { name: 'John', age: 30, tags: ['node', 'js'] };\nconst str = querystring.stringify(obj);\nconsole.log(str); // name=John&age=30&tags=node&tags=js\n\nconst parsed = querystring.parse(str);\nconsole.log(parsed.name, parsed.age, parsed.tags);",
      output: "name=John&age=30&tags=node&tags=js\nJohn 30 [ 'node', 'js' ]",
      note: "`querystring` does not handle nested objects; use `qs` for complex structures."
    },
    {
      question: "What is the `assert` module?",
      answer: "The `assert` module provides a set of assertion functions for testing invariants. Commonly used in unit tests, it throws an `AssertionError` when the condition is false. It provides methods like `assert.ok()`, `assert.equal()`, `assert.deepEqual()`, `assert.throws()`, and `assert.rejects()`.",
      example: "const assert = require('assert');\n\nassert.ok(5 > 3, 'Five is greater than three');\nassert.strictEqual(1 + 1, 2);\nassert.deepEqual([1, [2]], [1, [2]]);\n\nassert.throws(() => {\n  throw new Error('Wrong value');\n}, /Wrong/);\n\nconsole.log('All assertions passed');",
      output: "All assertions passed",
      note: "In production, assertions are often disabled (use `node --fips`? normally they are not removed). Use dedicated test frameworks like Mocha, Jest, or Ava for comprehensive testing."
    },
    {
      question: "How do you handle command‑line arguments in Node.js?",
      answer: "Command‑line arguments are available via `process.argv`. The first two entries are the Node.js executable and the script path. For parsing named arguments, use the `minimist` or `yargs` packages, or the built‑in `util.parseArgs` (Node.js 18.3+).",
      example: "// script.js\nconst args = process.argv.slice(2);\nconsole.log('Arguments:', args);\n\n// Using minimist\nconst minimist = require('minimist');\nconst argv = minimist(process.argv.slice(2));\nconsole.log(`Name: ${argv.name}, Age: ${argv.age}`);\n\n// Run: node script.js hello world --name=John --age=30",
      output: "Arguments: ['hello', 'world', '--name=John', '--age=30']\nName: John, Age: 30",
      note: "For production CLI tools, prefer `yargs` or `commander` for better help messages."
    },
    {
      question: "What is the `readline` module used for?",
      answer: "The `readline` module provides an interface for reading input line by line from a readable stream (e.g., `process.stdin`). It is commonly used for building interactive CLI applications, prompting users for input, and processing text files line by line.",
      example: "const readline = require('readline');\n\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\n\nrl.question('What is your name? ', (name) => {\n  console.log(`Hello, ${name}!`);\n  rl.close();\n});",
      output: "What is your name? Alice\nHello, Alice!",
      note: "Always call `rl.close()` to exit the process gracefully."
    },
    {
      question: "What is the `util` module and some of its useful methods?",
      answer: "The `util` module provides utility functions that assist with debugging, type checking, and promisifying callbacks. Important methods: `util.promisify()` (converts callback‑style functions to promise‑based), `util.inspect()` (pretty‑prints objects), `util.types` (type checking like `isDate`, `isMap`), and `util.format()` (printf‑like string formatting).",
      example: "const util = require('util');\nconst fs = require('fs');\n\nconst readFile = util.promisify(fs.readFile);\nreadFile('file.txt', 'utf8').then(console.log);\n\nconst obj = { a: 1, b: { c: 2 } };\nconsole.log(util.inspect(obj, { depth: 2, colors: true }));\n\nconsole.log(util.format('Hello %s, you are %d years old.', 'Alice', 25));",
      output: "file content\n{ a: 1, b: { c: 2 } }\nHello Alice, you are 25 years old.",
      note: "In Node.js 10+, `util.promisify` is the preferred way to convert callback APIs."
    },
    {
      question: "Explain the concept of callback hell and how to avoid it.",
      answer: "Callback hell (or pyramid of doom) occurs when multiple nested callbacks make code difficult to read and maintain. It can be avoided by using Promises, async/await, modularizing code, or using control‑flow libraries like `async`.",
      example: "// Callback hell\nfs.readFile('a.txt', (err, data1) => {\n  if (err) throw err;\n  fs.readFile(data1, (err, data2) => {\n    if (err) throw err;\n    fs.writeFile('out.txt', data2, (err) => {\n      if (err) throw err;\n      console.log('Done');\n    });\n  });\n});\n\n// Using async/await\nconst fsp = require('fs').promises;\nasync function process() {\n  const data1 = await fsp.readFile('a.txt');\n  const data2 = await fsp.readFile(data1);\n  await fsp.writeFile('out.txt', data2);\n  console.log('Done');\n}\nprocess().catch(console.error);",
      output: "Done",
      note: "Async/await is the most readable solution; always handle promise rejections."
    },
    {
      question: "How do you perform unit testing in Node.js?",
      answer: "Node.js has built‑in `assert` module, but popular testing frameworks include Jest, Mocha, and Ava. For example, Mocha works with assertion libraries like `chai`. Tests are usually placed in a `test/` directory and run via `npm test`. Mocking can be done with `sinon` or built‑in `jest.mock`.",
      example: "// test/math.test.js\nconst assert = require('assert');\nconst { add } = require('../math');\n\ndescribe('Math functions', function() {\n  it('should add two numbers correctly', function() {\n    assert.strictEqual(add(2,3), 5);\n  });\n});\n\n// package.json script\n\"scripts\": { \"test\": \"mocha\" }",
      output: "✓ should add two numbers correctly\n1 passing",
      note: "Jest is widely used for its zero‑configuration experience."
    },
    {
      question: "What is the difference between `setImmediate` and `process.nextTick`?",
      answer: "`process.nextTick` queues a callback to be executed in the same phase of the event loop, before any I/O or timers. It can lead to recursion if used excessively. `setImmediate` queues the callback in the check phase, which runs after I/O (poll) phase. `nextTick` has higher priority than `setImmediate`.",
      example: "process.nextTick(() => console.log('nextTick'));\nsetImmediate(() => console.log('setImmediate'));\nsetTimeout(() => console.log('setTimeout'), 0);\nconsole.log('main');",
      output: "main\nnextTick\nsetTimeout\nsetImmediate (order between setTimeout and setImmediate may vary)",
      note: "Use `setImmediate` to defer I/O‑intensive callbacks; avoid recursive `nextTick` as it can starve the event loop."
    },
    {
      question: "What is the `cluster` module used for?",
      answer: "The `cluster` module enables multiple Node.js processes (workers) to share server ports, allowing you to utilise all CPU cores. It improves throughput for HTTP servers. The master process forks workers, and workers handle incoming connections. For zero‑downtime restarts, workers can be recycled one by one.",
      example: "const cluster = require('cluster');\nconst http = require('http');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n  for (let i = 0; i < numCPUs; i++) cluster.fork();\n  cluster.on('exit', (worker) => console.log(`Worker ${worker.process.pid} died`));\n} else {\n  http.createServer((req, res) => res.end('Hello')).listen(3000);\n}",
      output: "Workers listening on port 3000 collectively.",
      note: "Worker processes do not share memory; use a separate shared store (e.g., Redis) for session data."
    },
    {
      question: "How do you enable debugging in Node.js?",
      answer: "Debugging can be done using the built‑in `--inspect` flag (`node --inspect app.js`), then attach Chrome DevTools or VS Code. You can also use the `debug` module for logging, or use the `console.log` with caution. For production, use structured logging with `pino` or `winston`.",
      example: "// app.js\nfunction add(a, b) {\n  debugger;  // Execution will pause here when inspector attached\n  return a + b;\n}\nconsole.log(add(2,3));\n\n// Run with `node --inspect-brk app.js` to break on first line.",
      output: "Opening Chrome DevTools at chrome://inspect allows you to set breakpoints and inspect variables.",
      note: "Use `--inspect` for development; avoid leaving `debugger` statements in production code."
    }
  ],

  experienced: [
    {
      question: "Explain the event loop in depth. What are microtasks and macrotasks?",
      answer: "The event loop is a loop that processes phases: timers, pending callbacks, idle, poll, check, close. Microtasks (nextTick, Promise callbacks) are executed between phases, before the next phase starts. Macrotasks (setTimeout, setImmediate, I/O) are processed in their respective phases. Microtasks have higher priority than macrotasks. This ordering ensures that promise callbacks are handled as soon as possible.",
      example: "setTimeout(() => console.log('timer'), 0);\nPromise.resolve().then(() => console.log('promise'));\nprocess.nextTick(() => console.log('nextTick'));\nsetImmediate(() => console.log('immediate'));\nconsole.log('sync');",
      output: "sync\nnextTick\npromise\ntimer\nimmediate (order of timer/immediate may vary but both after microtasks)",
      note: "Recursive `process.nextTick` can block the event loop, while `setImmediate` allows I/O to be processed."
    },
    {
      question: "How do you manage memory leaks in Node.js?",
      answer: "Memory leaks occur when references to unused objects are not released. Common causes: global variables, event listeners not removed, closures, and unmanaged caches. Tools: `node --inspect` with Chrome heap snapshots, `clinic` (clinic.js), `heapdump`, `memwatch-next`. Strategies: use `weak` references, clear intervals/timeouts, remove listeners with `.off()`, limit cache size, and use streaming for large data.",
      example: "const EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\n// Potential leak: listener never removed\nfunction leakyHandler() { console.log('leak'); }\nemitter.on('data', leakyHandler);\n\n// Correct way: remove listener when done\nemitter.once('data', leakyHandler);  // auto-removes\n\n// For custom caches, use Map with weak keys\nconst wm = new WeakMap(); // keys are objects that can be garbage collected",
      output: "No output; memory usage remains stable.",
      note: "Use `process.memoryUsage()` and diff its values over time to detect leaks."
    },
    {
      question: "How does the event loop handle `setImmediate` vs `setTimeout(...,0)`?",
      answer: "`setImmediate` callbacks are executed in the check phase of the event loop, after the poll phase (I/O). `setTimeout(...,0)` callbacks are executed in the timers phase, but the minimum delay is 1ms. In the main module (outside any I/O cycle), the order is unpredictable due to timer precision. Inside an I/O callback, `setImmediate` always runs before `setTimeout(...,0)`.",
      example: "const fs = require('fs');\n\nfs.readFile(__filename, () => {\n  setTimeout(() => console.log('timeout'), 0);\n  setImmediate(() => console.log('immediate'));\n});\n\n// Output guarantees 'immediate' before 'timeout' inside I/O",
      output: "immediate\ntimeout",
      note: "Use `setImmediate` when you want to defer work after I/O; use `setTimeout` for time‑based scheduling."
    },
    {
      question: "What are the security best practices in Node.js applications?",
      answer: "Key practices: keep dependencies updated (npm audit), use Helmet.js to set secure headers, validate/sanitize user input (express‑validator), avoid eval() and similar functions, use environment variables for secrets, enable rate limiting, set proper CORS policies, use HTTPS, implement CSRF protection, and store passwords using bcrypt or scrypt. Additionally, avoid revealing stack traces in production and use a process manager (PM2) to restart on failures.",
      example: "const express = require('express');\nconst helmet = require('helmet');\nconst rateLimit = require('express-rate-limit');\nconst app = express();\n\napp.use(helmet());\napp.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));\napp.use(express.json());\n\n// Input validation\napp.post('/login', (req, res) => {\n  const { email } = req.body;\n  if (!email || !email.includes('@')) {\n    return res.status(400).json({ error: 'Invalid email' });\n  }\n  // proceed\n});",
      output: "HTTP headers secured, rate limiting active, input validated.",
      note: "Run a security audit regularly: `npm audit` and use Snyk or similar tools."
    },
    {
      question: "Explain the concept of backpressure in Node.js streams.",
      answer: "Backpressure occurs when data is produced faster than the consumer can process it. Readable streams pause automatically when the internal buffer is full and the writable side cannot keep up. This prevents memory overflow. You can handle backpressure by listening to `drain` events on writable streams, or by using `.pipe()` which manages backpressure automatically.",
      example: "const fs = require('fs');\nconst readStream = fs.createReadStream('large.dat');\nconst writeStream = fs.createWriteStream('copy.dat');\n\n// Pipe handles backpressure automatically\nreadStream.pipe(writeStream);\n\n// Manual handling\nwriteStream.on('drain', () => {\n  readStream.resume();\n});\nreadStream.on('readable', () => {\n  let chunk;\n  while ((chunk = readStream.read()) !== null) {\n    if (!writeStream.write(chunk)) {\n      readStream.pause();\n      break;\n    }\n  }\n});",
      output: "File copied without consuming excessive memory.",
      note: "Always use `.pipe()` or `.pipeline()` for error‑safe stream handling."
    },
    {
      question: "How do you create a custom transform stream?",
      answer: "A transform stream inherits from `stream.Transform` and overrides the `_transform` method. It receives a chunk of data, optionally transforms it, and pushes the result. You can also implement `_flush` to finalize processing. Transform streams are useful for compression, encryption, or data modification.",
      example: "const { Transform } = require('stream');\n\nclass UpperCaseTransform extends Transform {\n  _transform(chunk, encoding, callback) {\n    const upper = chunk.toString().toUpperCase();\n    this.push(upper);\n    callback();\n  }\n}\n\nconst upper = new UpperCaseTransform();\nprocess.stdin.pipe(upper).pipe(process.stdout);",
      output: "Input 'hello' becomes 'HELLO'",
      note: "Use `callback(error, transformedChunk)` to also push data; avoid blocking the event loop in `_transform`."
    },
    {
      question: "Explain the performance overhead of `console.log` in production.",
      answer: "`console.log` is a synchronous operation that writes to stdout, which can block the event loop, especially when logging large amounts of data. In high‑throughput applications, this can cause significant performance degradation. For production, use asynchronous logging libraries like `pino`, `bunyan`, or `winston` that write to disk asynchronously and offer log levels.",
      example: "const pino = require('pino');\nconst logger = pino({ level: 'info' });\n\nlogger.info('Application started'); // Asynchronous\n// vs console.log which is synchronous and blocking",
      output: "Log messages written to stdout asynchronously.",
      note: "In performance‑critical code, avoid logging inside hot loops; use sampling or dynamic log levels."
    },
    {
      question: "What is the `worker_threads` module and when to use it?",
      answer: "The `worker_threads` module allows running JavaScript code in parallel on separate CPU cores, similar to Web Workers. It is ideal for CPU‑intensive tasks (e.g., image processing, heavy calculations) without blocking the main event loop. Unlike child processes, workers can share memory via SharedArrayBuffer.",
      example: "const { Worker, isMainThread } = require('worker_threads');\n\nif (isMainThread) {\n  const worker = new Worker(__filename);\n  worker.on('message', (result) => console.log(result));\n} else {\n  // heavy computation\n  let sum = 0;\n  for (let i = 0; i < 1e9; i++) sum += i;\n  parentPort.postMessage(sum);\n}",
      output: "500000000500000000",
      note: "Workers are heavy; prefer a thread pool. Use `workerData` to pass initial data."
    },
    {
      question: "How do you debug memory leaks using heap snapshots?",
      answer: "Start Node.js with the `--inspect` flag, then open Chrome DevTools. Take a heap snapshot, perform actions suspected of causing leaks, take another snapshot, and compare. The comparison shows objects that were created but not freed. Look for unexpected retention (e.g., large arrays, detached DOM nodes, global variables).",
      example: "// Run: node --inspect --expose-gc app.js\n// Then in DevTools, manually trigger garbage collection (coverage) and take snapshots.\n\nconst leaks = [];\nsetInterval(() => {\n  leaks.push(new Array(1000000)); // intentional leak\n}, 1000);",
      output: "DevTools will show growing array allocations and their retainers.",
      note: "Use the `--expose-gc` flag to manually call `global.gc()` for more accurate snapshots."
    },
    {
      question: "Explain the Node.js module resolution algorithm.",
      answer: "When you `require('module')`, Node.js searches: 1) built‑in core modules, 2) if starts with './' or '../', resolves relative to current file (with added .js / .json / .node extensions), 3) if starts with '/', absolute path, 4) else looks in `node_modules` folders up the directory tree to the root. It also respects `package.json` `main` field, and `exports` field in newer versions.",
      example: "// Given file: /home/user/proj/app.js\nrequire('./lib')             → /home/user/proj/lib.js or /home/user/proj/lib/index.js\nrequire('express')          → looks for node_modules/express in current and parent dirs\n\n// With package.json exports\n// { \"exports\": { \".\": \"./index.js\", \"./feature\": \"./feature.js\" } }",
      output: "Module loaded correctly.",
      note: "Modern Node.js uses `exports` field for subpath exports; it prevents exposing internal files."
    },
    {
      question: "What is the purpose of the `exports` field in package.json?",
      answer: "The `exports` field defines the public entry points of a package, making other files inaccessible. It enforces encapsulation and allows conditional exports for different environments (e.g., `import` vs `require`). It also supports subpath exports (`./feature`) and browser‑specific targets.",
      example: "{\n  \"name\": \"my-package\",\n  \"exports\": {\n    \".\": \"./index.js\",\n    \"./feature\": \"./src/feature.js\",\n    \"./package.json\": \"./package.json\"\n  }\n}",
      output: "Only `require('my-package')` and `require('my-package/feature')` are allowed.",
      note: "Once `exports` is defined, only the paths listed are accessible; other files inside the package become private."
    },
    {
      question: "How does the Node.js `vm` module work and what are its use cases?",
      answer: "The `vm` module allows you to compile and run code in a separate V8 context (sandbox). It can isolate scripts, preventing them from accessing global objects. Use cases: executing untrusted code, implementing custom REPLs, or safely evaluating expressions. However, it is not a complete security sandbox; always consider using it with care and additional measures.",
      example: "const vm = require('vm');\n\nconst sandbox = { console, message: 'Hello' };\nconst script = new vm.Script('console.log(message); message = \"changed\"');\nscript.runInNewContext(sandbox);\nconsole.log(sandbox.message); // 'changed'",
      output: "Hello\nchanged",
      note: "The vm module does not provide full isolation; it's not recommended for secure execution of untrusted code without additional measures (like `worker_threads` or separate processes)."
    },
    {
      question: "What are the differences between `spawn`, `exec`, and `fork`?",
      answer: "`spawn`: launches a new process, streams data via stdout/stderr, suitable for large outputs. `exec`: spawns a shell, buffers the entire output, good for small outputs. `execFile`: directly executes a file (no shell), slightly more efficient. `fork`: specialised `spawn` that creates a new Node.js process with an IPC channel and allows `send`/`on('message')` communication.",
      example: "const { spawn, exec, fork } = require('child_process');\n\n// spawn stream\nconst ls = spawn('ls', ['-lh']);\nls.stdout.on('data', (d) => console.log(d.toString()));\n\n// exec buffers\nexec('ls -lh', (err, stdout) => console.log(stdout));\n\n// fork\nconst child = fork('child.js');\nchild.send('hello');\nchild.on('message', (m) => console.log(m));",
      output: "Directory listing, then buffered output, then IPC messages.",
      note: "Use `exec` for short commands; `spawn` for long‑running; `fork` for Node.js subprocesses."
    },
    {
      question: "Explain the use of `async_hooks` for context propagation.",
      answer: "The `async_hooks` module allows tracking asynchronous resources throughout their lifecycle. It can be used to propagate context (e.g., request ID) across asynchronous operations without manually passing parameters. `AsyncLocalStorage` (built on async_hooks) provides an easier API for storing context per asynchronous chain.",
      example: "const { AsyncLocalStorage } = require('async_hooks');\nconst als = new AsyncLocalStorage();\n\nfunction log(message) {\n  const store = als.getStore();\n  console.log(`[${store?.requestId || 'unknown'}] ${message}`);\n}\n\nasync function handleRequest(reqId) {\n  als.run({ requestId: reqId }, async () => {\n    log('start');\n    await new Promise(r => setTimeout(r, 10));\n    log('end');\n  });\n}\n\nhandleRequest('123');",
      output: "[123] start\n[123] end",
      note: "`AsyncLocalStorage` is stable and recommended over direct `async_hooks` usage."
    },
    {
      question: "What is the difference between `process.nextTick` and `setImmediate`?",
      answer: "`process.nextTick` queues a callback to be executed in the current phase of the event loop, before any I/O or timers. Recursive `nextTick` can starve the event loop. `setImmediate` queues the callback in the check phase, which runs after I/O callbacks. In general, `setImmediate` is preferred when you want to defer but not block.",
      example: "let count = 0;\nfunction nextTickStarve() {\n  process.nextTick(() => {\n    count++;\n    if (count < 10) nextTickStarve();\n    else console.log('done');\n  });\n}\nnextTickStarve(); // runs synchronously\n\nsetImmediate(() => console.log('immediate'));",
      output: "done\nimmediate",
      note: "Use `setImmediate` for recursion that must yield to I/O."
    },
    {
      question: "How do you handle graceful shutdown of a Node.js server?",
      answer: "Graceful shutdown involves stopping new connections, finishing existing requests, closing the server, and disconnecting from databases. Listen for `SIGTERM` and `SIGINT` signals. Call `server.close()` to stop accepting new connections and wait for existing connections to finish.",
      example: "const express = require('express');\nconst app = express();\nconst server = app.listen(3000);\n\nprocess.on('SIGTERM', () => {\n  console.log('SIGTERM received, closing server');\n  server.close(() => {\n    console.log('Server closed');\n    // Close DB connections\n    process.exit(0);\n  });\n});",
      output: "SIGTERM received, closing server\nServer closed",
      note: "Set a timeout to force close connections that are taking too long."
    },
    {
      question: "What is the role of the `--max-old-space-size` flag?",
      answer: "This V8 flag sets the maximum heap size for Node.js. By default, it's around 1.4 GB for 64‑bit systems. You can increase it for memory‑intensive applications (e.g., `node --max-old-space-size=4096 app.js` for 4 GB). It helps prevent out‑of‑memory crashes but may cause garbage collector overhead.",
      example: "# Run with 4 GB heap\nnode --max-old-space-size=4096 app.js",
      output: "Application can use up to 4 GB of heap memory.",
      note: "Increasing heap size may increase garbage collection pauses; monitor GC activity with `--trace-gc`."
    },
    {
      question: "How do you profile CPU usage in Node.js?",
      answer: "Use built‑in `--cpu-prof` flag to generate a CPU profile, then load it into Chrome DevTools to analyse. Alternatively, use the `inspector` module and start profiling programmatically. For production, use `clinic flame` or `0x`.",
      example: "# Generate CPU profile\nnode --cpu-prof --cpu-prof-dir ./profiles app.js\n\n# Interactive flamegraph\nnpm install -g clinic\nclinic flame -- node app.js",
      output: "Flamegraph showing function call frequencies and hot paths.",
      note: "Profiling should be done on a representative workload; avoid profiling in production unless there is a performance issue."
    },
    {
      question: "Explain the Node.js REPL and how to customize it.",
      answer: "REPL (Read‑Eval‑Print‑Loop) is an interactive shell for testing JavaScript code. It can be started by running `node`. You can customise it by loading `.node_repl_history` and using `repl.start()` with custom eval functions. You can also access Node.js internals by creating a custom REPL context.",
      example: "const repl = require('repl');\nconst local = repl.start('> ');\nlocal.context.myVar = 42;\n\n// Add custom commands\nlocal.defineCommand('say', {\n  help: 'Say something',\n  action(name) {\n    console.log(`Hello ${name}`);\n    this.displayPrompt();\n  }\n});",
      output: "> .say World\nHello World",
      note: "The REPL is useful for debugging and exploring APIs."
    },
    {
      question: "What is the difference between `http` and `https` modules?",
      answer: "Both create servers and make requests. `https` module uses TLS/SSL encryption. It requires key and certificate options when creating a server. For requests, `https.get` and `https.request` work similarly but connect to port 443 by default and validate certificates (unless `rejectUnauthorized` is set to false).",
      example: "const https = require('https');\nconst fs = require('fs');\n\nconst options = {\n  key: fs.readFileSync('key.pem'),\n  cert: fs.readFileSync('cert.pem')\n};\n\nhttps.createServer(options, (req, res) => {\n  res.end('Secure!');\n}).listen(443);",
      output: "Server using TLS",
      note: "For development, use `rejectUnauthorized: false` only temporarily; never in production."
    },
    {
      question: "How do you implement a simple rate limiter in Express?",
      answer: "Use the `express-rate-limit` middleware. It stores request counts in memory. For distributed systems, use Redis store. The limiter can be applied globally or to specific routes, setting windowMs and max requests.",
      example: "const rateLimit = require('express-rate-limit');\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100,\n  message: 'Too many requests',\n  standardHeaders: true,\n  legacyHeaders: false\n});\n\napp.use('/api/', limiter);",
      output: "After 100 requests within 15 minutes, client receives 429 status.",
      note: "In production, store counters in Redis or database for multiple server instances."
    },
    {
      question: "Explain the concept of zero‑downtime deployment in Node.js.",
      answer: "Zero‑downtime deployment ensures that new version of an application is deployed without service interruption. Strategies: rolling updates (using cluster or PM2) – start new workers, stop old ones after they finish requests. Blue‑green deployment (two identical environments), canary releases, or using a reverse proxy (nginx) to switch traffic.",
      example: "// PM2 ecosystem.config.js\nmodule.exports = {\n  apps: [{\n    name: 'app',\n    script: 'server.js',\n    instances: 2,\n    exec_mode: 'cluster',\n    kill_timeout: 5000  // wait for existing connections\n  }]\n};\n\n// Rolling update: pm2 reload app",
      output: "PM2 restarts workers one by one, keeping the service online.",
      note: "Ensure that your application handles `SIGTERM` gracefully by closing connections."
    },
    {
      question: "How do you handle large file uploads without using too much memory?",
      answer: "Instead of buffering the entire file in memory, use streams and the `busboy` or `multer` library with memory limits. Stream the upload directly to disk or cloud storage. Set limits on file size and number of files. For very large files, consider using `multipart` parser with streaming.",
      example: "const multer = require('multer');\nconst upload = multer({ dest: 'uploads/', limits: { fileSize: 1024*1024*100 } });\n\napp.post('/upload', upload.single('file'), (req, res) => {\n  res.send('File saved');\n});",
      output: "File streamed to disk, memory usage stays low.",
      note: "Always validate file types and scan for malware before storing."
    },
    {
      question: "What is the `diagnostic_channel` module?",
      answer: "The `diagnostic_channel` module (experimental) provides a way to publish events that can be subscribed to for diagnostics, monitoring, and instrumentation. It allows creating named channels and publishing messages. Tools like APM agents can subscribe to channels without modifying application code.",
      example: "const dc = require('diagnostic_channel');\nconst channel = dc.channel('http:request');\n\nchannel.subscribe((message) => {\n  console.log(`Request: ${message.method} ${message.url}`);\n});\n\n// In your code\nif (channel.hasSubscribers) {\n  channel.publish({ method: 'GET', url: '/' });\n}",
      output: "Request: GET /",
      note: "Keep channel names unique; use this for internal instrumentation, not for business logic."
    },
    {
      question: "Explain the concept of 'exports' vs 'module.exports' in CommonJS.",
      answer: "`module.exports` is the object that is returned when a module is required. `exports` is a reference to `module.exports`. Assigning a new value to `exports` does not affect `module.exports`. To export a function or a class, assign directly to `module.exports`. For adding properties, use `exports.prop = value`.",
      example: "// foo.js\nmodule.exports = function() { console.log('direct'); };\nexports.another = () => {}; // will not be exported\n\n// bar.js\nexports.hello = () => console.log('hello'); // works\nmodule.exports = 'string'; // overwrites previous exports",
      output: "Only the value assigned to `module.exports` is returned from `require`.",
      note: "Always prefer returning a single object: either set `module.exports = { ... }` or attach properties to `exports`."
    },
    {
      question: "How does Node.js handle child process IPC latency?",
      answer: "IPC (Inter‑Process Communication) uses OS‑specific mechanisms (pipes, domain sockets, or signals). Latency is very low (microseconds). To reduce latency, avoid sending large messages; send references or use `SharedArrayBuffer` for data. For high‑frequency messages, consider reusing worker processes or using a pool.",
      example: "// parent sends small JSON messages\nconst child = fork('child.js');\nsetInterval(() => child.send({ ping: Date.now() }), 10); // 100 messages/sec",
      output: "Messages delivered with low latency.",
      note: "If latency becomes an issue, profile with `process.hrtime` to measure round‑trip time."
    },
    {
      question: "What is the `v8` module and how can it be used?",
      answer: "The `v8` module exposes V8 engine internals: heap statistics, heap snapshots, serialization, code caching, and setting flags. It's useful for memory profiling and performance tuning. You can get heap stats, write snapshots, and even use `v8.serialize()`/`v8.deserialize()` for structured cloning.",
      example: "const v8 = require('v8');\nconst stats = v8.getHeapStatistics();\nconsole.log(`Used heap: ${(stats.used_heap_size / 1024 / 1024).toFixed(2)} MB`);\n\nconst snapshot = v8.getHeapSnapshot();\nconst chunks = [];\nsnapshot.on('data', c => chunks.push(c));\nsnapshot.on('end', () => {\n  const snapshotBuf = Buffer.concat(chunks);\n  require('fs').writeFileSync('heap.heapsnapshot', snapshotBuf);\n});",
      output: "Used heap: 12.34 MB\nheap.heapsnapshot written",
      note: "Heap snapshots can be loaded into Chrome DevTools for analysis."
    },
    {
      question: "Explain the use of `diagnostic` commands in Node.js (e.g., `node --diagnostic`).",
      answer: "Node.js provides diagnostic flags: `--report` generates a diagnostic report on demand or on event (e.g., fatal error). The report includes environment, process, heap, and resource usage. Other flags include `--trace-sync-io`, `--trace-warnings`, `--trace-unhandled`, and `--trace-exit`. They help in debugging production issues.",
      example: "# Generate report on demand\nnode --report-on-signal --report-signal=SIGUSR2 app.js\nkill -USR2 <pid>\n\n# Generate report when process exits\nnode --report-uncaught-exception app.js",
      output: "Diagnostic report written to file (e.g., report.20250115.123456.12345.json)",
      note: "Diagnostic reports can contain sensitive information; restrict access appropriately."
    },
    {
      question: "How do you implement distributed tracing in Node.js?",
      answer: "Distributed tracing tracks requests across multiple services. Use OpenTelemetry (OTel) SDK, which provides instrumentation for HTTP, databases, and other libraries. Propagate trace context via HTTP headers (e.g., `traceparent`). Export traces to a collector like Jaeger or Zipkin. For AWS, use X‑Ray SDK.",
      example: "const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');\nconst { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');\nconst { JaegerExporter } = require('@opentelemetry/exporter-jaeger');\n\nconst provider = new NodeTracerProvider();\nprovider.addSpanProcessor(new SimpleSpanProcessor(new JaegerExporter()));\nprovider.register();\n\nconst tracer = provider.getTracer('my-service');\ntracer.startActiveSpan('operation', span => {\n  // do work\n  span.end();\n});",
      output: "Traces sent to Jaeger",
      note: "Automated instrumentation is available via `@opentelemetry/instrumentation-http`."
    },
    {
      question: "What is the purpose of `--require` or `-r` flag in Node.js?",
      answer: "The `-r` flag preloads a module before the main script is executed. It is used to apply instrumentation, environment setup (e.g., `dotenv/config`), or monkey patching. Multiple modules can be loaded by repeating the flag.",
      example: "# Load dotenv before app.js\nnode -r dotenv/config app.js\n\n# Load ts-node/register for TypeScript\nnode -r ts-node/register script.ts\n\n# Combine\nnode -r ./instrumentation.js -r dotenv/config app.js",
      output: "The required modules execute before your application code.",
      note: "Order matters; modules are loaded in the order specified."
    },
    {
      question: "Explain the `perf_hooks` module for performance measurement.",
      answer: "The `perf_hooks` module provides performance measurement APIs similar to the Web Performance API. It includes `performance.now()` for high‑resolution timestamps, `performance.mark()` and `performance.measure()` for user‑defined metrics, and `PerformanceObserver` to collect metrics asynchronously. It is useful for micro‑benchmarking and monitoring.",
      example: "const { performance, PerformanceObserver } = require('perf_hooks');\n\nconst obs = new PerformanceObserver((list) => {\n  console.log(list.getEntries());\n});\nobs.observe({ entryTypes: ['measure'] });\n\nperformance.mark('start');\n// some code\nperformance.mark('end');\nperformance.measure('myTask', 'start', 'end');",
      output: "PerformanceMeasure object with duration.",
      note: "Use `performance.now()` for precise timing instead of `Date.now()`."
    }
  ]
};

export default interview;
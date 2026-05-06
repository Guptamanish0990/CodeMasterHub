export const questions = [
  { 
    line: "require('fs')", 
    explanation: "Imports the built‑in file system module for file operations.", 
    example: "const fs = require('fs');\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});", 
    output: "Allows reading/writing files, creating directories, and watching file changes." 
  },
  { 
    line: "process.argv", 
    explanation: "Array of command‑line arguments when executing Node.js script.", 
    example: "// Run: node app.js --name John 25\nconsole.log(process.argv);\n// ['node', 'app.js', '--name', 'John', '25']", 
    output: "Access CLI arguments: process.argv[2] returns '--name'" 
  },
  { 
    line: "setTimeout(() => {}, 0);", 
    explanation: "Schedules a callback to run after minimum delay (0ms) but after current execution stack.", 
    example: "console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nconsole.log('End');\n// Output: Start, End, Timeout", 
    output: "Callback runs after current stack and I/O operations complete." 
  },
  { 
    line: "process.nextTick()", 
    explanation: "Defers execution of callback to next iteration of event loop (microtask queue, highest priority).", 
    example: "console.log('Start');\nprocess.nextTick(() => console.log('NextTick'));\nconsole.log('End');\n// Output: Start, End, NextTick", 
    output: "Runs before setTimeout and setImmediate, can starve I/O if used recursively." 
  },
  { 
    line: "setImmediate()", 
    explanation: "Schedules callback to run in check phase of event loop, after I/O operations.", 
    example: "setImmediate(() => console.log('Immediate'));\nsetTimeout(() => console.log('Timeout'), 0);\n// Order depends on event loop phase", 
    output: "Useful for breaking up long-running operations." 
  },
  { 
    line: "Buffer.alloc()", 
    explanation: "Creates a new buffer with specified size, filled with zeros (safe, slower).", 
    example: "const buf = Buffer.alloc(10);\nconsole.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>\nbuf.write('Hello');\nconsole.log(buf.toString()); // 'Hello'", 
    output: "Creates zero-filled buffer, safer than Buffer.allocUnsafe()." 
  },
  { 
    line: "Buffer.from()", 
    explanation: "Creates buffer from string, array, or another buffer.", 
    example: "const buf1 = Buffer.from('Hello');\nconst buf2 = Buffer.from([72, 101, 108, 108, 111]);\nconst buf3 = Buffer.from('48656c6c6f', 'hex');\nconsole.log(buf1.toString()); // 'Hello'", 
    output: "Converts various data types to Buffer objects." 
  },
  { 
    line: "fs.promises.readFile()", 
    explanation: "Promise-based file reading (modern async/await approach).", 
    example: "const fs = require('fs').promises;\nasync function read() {\n  const data = await fs.readFile('file.txt', 'utf8');\n  console.log(data);\n}", 
    output: "Returns Promise instead of using callbacks." 
  },
  { 
    line: "fs.createReadStream()", 
    explanation: "Creates readable stream for large files (memory efficient).", 
    example: "const stream = fs.createReadStream('large.log', { encoding: 'utf8' });\nstream.on('data', (chunk) => {\n  console.log(`Received ${chunk.length} bytes`);\n});", 
    output: "Reads file in chunks without loading entire file into memory." 
  },
  { 
    line: "path.join()", 
    explanation: "Joins path segments using platform-specific separator.", 
    example: "const path = require('path');\nconst fullPath = path.join(__dirname, 'data', 'users.json');\n// Linux: /current/dir/data/users.json\n// Windows: C:\\current\\dir\\data\\users.json", 
    output: "Creates cross-platform paths safely." 
  },
  { 
    line: "path.resolve()", 
    explanation: "Resolves sequence of paths to absolute path.", 
    example: "const path = require('path');\nconsole.log(path.resolve('docs', 'readme.md'));\n// /current/working/dir/docs/readme.md", 
    output: "Returns absolute path from rightmost argument." 
  },
  { 
    line: "os.cpus()", 
    explanation: "Returns array with CPU core information.", 
    example: "const os = require('os');\nconst cpus = os.cpus();\nconsole.log(`CPU Cores: ${cpus.length}`);\nconsole.log(`Model: ${cpus[0].model}`);", 
    output: "Used to determine optimal number of cluster workers." 
  },
  { 
    line: "os.totalmem()", 
    explanation: "Returns total system memory in bytes.", 
    example: "const os = require('os');\nconst totalGB = os.totalmem() / 1024 / 1024 / 1024;\nconsole.log(`Total RAM: ${totalGB.toFixed(2)} GB`);", 
    output: "Helps monitor memory usage and configure limits." 
  },
  { 
    line: "cluster.fork()", 
    explanation: "Creates child worker process to utilize multiple CPU cores.", 
    example: "const cluster = require('cluster');\nif (cluster.isMaster) {\n  for (let i = 0; i < require('os').cpus().length; i++) {\n    cluster.fork();\n  }\n}", 
    output: "Each worker runs in separate process with own event loop." 
  },
  { 
    line: "crypto.createHash()", 
    explanation: "Creates hash object for generating cryptographic hashes.", 
    example: "const crypto = require('crypto');\nconst hash = crypto.createHash('sha256');\nhash.update('password');\nconsole.log(hash.digest('hex'));", 
    output: "Used for password hashing, data integrity, and digital signatures." 
  },
  { 
    line: "crypto.randomBytes()", 
    explanation: "Generates cryptographically strong random bytes.", 
    example: "crypto.randomBytes(16, (err, buffer) => {\n  if (err) throw err;\n  const token = buffer.toString('hex');\n  console.log(`Secure token: ${token}`);\n});", 
    output: "Used for generating secure tokens, salts, and keys." 
  },
  { 
    line: "util.promisify()", 
    explanation: "Converts callback-based function to promise-based.", 
    example: "const util = require('util');\nconst fs = require('fs');\nconst readFile = util.promisify(fs.readFile);\nasync function read() {\n  const data = await readFile('file.txt', 'utf8');\n  console.log(data);\n}", 
    output: "Enables async/await with legacy callback APIs." 
  },
  { 
    line: "events.EventEmitter", 
    explanation: "Class for implementing event-driven architecture.", 
    example: "const EventEmitter = require('events');\nclass MyEmitter extends EventEmitter {}\nconst emitter = new MyEmitter();\nemitter.on('event', () => console.log('Event fired'));\nemitter.emit('event');", 
    output: "Allows creating, emitting, and listening to custom events." 
  },
  { 
    line: "child_process.exec()", 
    explanation: "Executes shell command and buffers output.", 
    example: "const { exec } = require('child_process');\nexec('ls -la', (error, stdout, stderr) => {\n  if (error) console.error(error);\n  console.log(stdout);\n});", 
    output: "Good for short commands with small output." 
  },
  { 
    line: "child_process.spawn()", 
    explanation: "Executes command with streaming output (better for large data).", 
    example: "const { spawn } = require('child_process');\nconst ls = spawn('ls', ['-la']);\nls.stdout.on('data', (data) => console.log(data.toString()));", 
    output: "Streams output in real-time, memory efficient." 
  },
  { 
    line: "process.env", 
    explanation: "Object containing user environment variables.", 
    example: "const port = process.env.PORT || 3000;\nconst nodeEnv = process.env.NODE_ENV || 'development';\nconsole.log(`Running on port ${port} in ${nodeEnv} mode`);", 
    output: "Access configuration from environment variables." 
  },
  { 
    line: "__dirname", 
    explanation: "Directory name of current module (absolute path).", 
    example: "console.log(__dirname);\n// /home/user/project/src\nconst configPath = path.join(__dirname, 'config.json');", 
    output: "Always returns absolute path to current script's directory." 
  },
  { 
    line: "require('http').createServer()", 
    explanation: "Creates HTTP server instance.", 
    example: "const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello World\\n');\n});\nserver.listen(3000);", 
    output: "Starts web server listening on specified port." 
  },
  { 
    line: "stream.pipe()", 
    explanation: "Connects readable and writable streams for automatic data flow.", 
    example: "const fs = require('fs');\nconst readStream = fs.createReadStream('input.txt');\nconst writeStream = fs.createWriteStream('output.txt');\nreadStream.pipe(writeStream);", 
    output: "Automatically handles backpressure and data flow." 
  },
  { 
    line: "zlib.createGzip()", 
    explanation: "Creates transform stream for gzip compression.", 
    example: "const zlib = require('zlib');\nconst fs = require('fs');\nconst gzip = zlib.createGzip();\nconst source = fs.createReadStream('data.txt');\nconst dest = fs.createWriteStream('data.txt.gz');\nsource.pipe(gzip).pipe(dest);", 
    output: "Compresses data on the fly for storage or network transfer." 
  },
  { 
    line: "readline.createInterface()", 
    explanation: "Creates interface for reading input line by line.", 
    example: "const readline = require('readline');\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\nrl.question('What is your name? ', (answer) => {\n  console.log(`Hello ${answer}`);\n  rl.close();\n});", 
    output: "Used for CLI applications and interactive prompts." 
  },
  { 
    line: "querystring.parse()", 
    explanation: "Parses URL query string into object.", 
    example: "const querystring = require('querystring');\nconst url = 'name=John&age=25&hobby=coding&hobby=reading';\nconst parsed = querystring.parse(url);\nconsole.log(parsed.name); // 'John'\nconsole.log(parsed.hobby); // ['coding', 'reading']", 
    output: "Converts query string to JavaScript object." 
  },
  { 
    line: "crypto.timingSafeEqual()", 
    explanation: "Compares buffers in constant time (prevents timing attacks).", 
    example: "const crypto = require('crypto');\nconst userHash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512');\nconst storedHash = Buffer.from(hashFromDB, 'hex');\nconst isValid = crypto.timingSafeEqual(userHash, storedHash);", 
    output: "Used for secure password verification." 
  },
  { 
    line: "performance.now()", 
    explanation: "Returns high-resolution timestamp in milliseconds.", 
    example: "const { performance } = require('perf_hooks');\nconst start = performance.now();\n// Some operation\nconst end = performance.now();\nconsole.log(`Operation took ${end - start}ms`);", 
    output: "Precise timing for performance measurement." 
  },
  { 
    line: "worker_threads.Worker", 
    explanation: "Creates worker thread for parallel CPU-intensive tasks.", 
    example: "const { Worker } = require('worker_threads');\nconst worker = new Worker('./worker-script.js');\nworker.on('message', (result) => {\n  console.log(`Result from worker: ${result}`);\n});\nworker.postMessage({ task: 'calculate', data: 1000000 });", 
    output: "Executes JavaScript in parallel without blocking event loop." 
  },
  { 
    line: "console.time() / console.timeEnd()", 
    explanation: "Measures time taken by code block.", 
    example: "console.time('loop');\nfor (let i = 0; i < 1000000; i++) {}\nconsole.timeEnd('loop'); // loop: 5.234ms", 
    output: "Simple performance profiling built into Node.js." 
  },
  { 
    line: "require('dns').lookup()", 
    explanation: "Performs DNS resolution of hostname to IP address.", 
    example: "const dns = require('dns');\ndns.lookup('google.com', (err, address, family) => {\n  console.log(`IP Address: ${address}`); // 142.250.185.46\n});", 
    output: "Resolves domain names to IP addresses." 
  },
  { 
    line: "process.memoryUsage()", 
    explanation: "Returns memory usage statistics of Node.js process.", 
    example: "const memory = process.memoryUsage();\nconsole.log({\n  rss: `${memory.rss / 1024 / 1024} MB`,\n  heapTotal: `${memory.heapTotal / 1024 / 1024} MB`,\n  heapUsed: `${memory.heapUsed / 1024 / 1024} MB`\n});", 
    output: "Monitors memory consumption for debugging leaks." 
  },
  { 
    line: "require('url').parse()", 
    explanation: "Parses URL string into components.", 
    example: "const url = require('url');\nconst myUrl = url.parse('https://example.com:8080/path?query=123#hash');\nconsole.log(myUrl.hostname); // 'example.com'\nconsole.log(myUrl.port); // '8080'\nconsole.log(myUrl.pathname); // '/path'", 
    output: "Breaks URL into protocol, host, port, path, query, and hash." 
  },
  { 
    line: "process.exit()", 
    explanation: "Terminates Node.js process with specified exit code.", 
    example: "if (error) {\n  console.error('Fatal error occurred');\n  process.exit(1); // Non-zero indicates failure\n}", 
    output: "0 = success, non-zero = error/failure." 
  },
  { 
    line: "require('assert')", 
    explanation: "Provides assertion functions for testing.", 
    example: "const assert = require('assert');\nassert.strictEqual(5, 5, 'Numbers should be equal');\nassert.deepStrictEqual({a:1}, {a:1}, 'Objects should match');\nassert.throws(() => { throw new Error('Fail'); }, /Fail/);", 
    output: "Throws AssertionError when condition fails." 
  },
  { 
    line: "stream.Transform", 
    explanation: "Base class for transform streams (modify data passing through).", 
    example: "const { Transform } = require('stream');\nconst upperCaseTransform = new Transform({\n  transform(chunk, encoding, callback) {\n    this.push(chunk.toString().toUpperCase());\n    callback();\n  }\n});\nprocess.stdin.pipe(upperCaseTransform).pipe(process.stdout);", 
    output: "Modifies data as it flows through the pipeline." 
  }
];
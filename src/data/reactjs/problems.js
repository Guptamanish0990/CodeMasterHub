// /data/reactjs/problems.js

export const problems = {
  fresher: [
    {
      question: "Write a function that reverses a string (e.g., 'hello' → 'olleh').",
      answer: "Use split(), reverse(), and join() methods, or use a loop to build reversed string from end to start.",
      example: `function reverseString(str) {
  return str.split('').reverse().join('');
}

// Alternative without built-in methods
function reverseStringManual(str) {
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,
      output: "reverseString('hello') → 'olleh'\nreverseString('JavaScript') → 'tpircSavaJ'"
    },
    {
      question: "Create a program that finds the largest number in an array.",
      answer: "Use Math.max() with spread operator, or loop through array keeping track of max value.",
      example: `function findLargest(arr) {
  return Math.max(...arr);
}

// Alternative without built-in methods
function findLargestManual(arr) {
  if(arr.length === 0) return null;
  let max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) max = arr[i];
  }
  return max;
}`,
      output: "findLargest([3, 7, 2, 9, 1]) → 9\nfindLargest([-5, -2, -10]) → -2"
    },
    {
      question: "Write a function that checks if a string is a palindrome.",
      answer: "A palindrome reads the same forward and backward. Compare string with its reverse after cleaning non-alphanumeric characters.",
      example: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Alternative with two pointers
function isPalindromeTwoPointers(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = cleaned.length - 1;
  while(left < right) {
    if(cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}`,
      output: "isPalindrome('racecar') → true\nisPalindrome('hello') → false\nisPalindrome('A man, a plan, a canal: Panama') → true"
    },
    {
      question: "Write a function that counts the number of vowels in a string.",
      answer: "Use regex or loop through string and check if character is vowel (a, e, i, o, u).",
      example: `function countVowels(str) {
  const matches = str.toLowerCase().match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

// Alternative with loop
function countVowelsLoop(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for(let char of str.toLowerCase()) {
    if(vowels.has(char)) count++;
  }
  return count;
}`,
      output: "countVowels('hello world') → 3\ncountVowels('JavaScript') → 3\ncountVowels('rhythm') → 0"
    },
    {
      question: "Create a function that returns the factorial of a number (n!).",
      answer: "Factorial of n = n * (n-1) * ... * 1. Use recursion or iteration. 0! = 1.",
      example: `function factorial(n) {
  if(n < 0) return undefined;
  if(n === 0 || n === 1) return 1;
  let result = 1;
  for(let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive approach
function factorialRecursive(n) {
  if(n < 0) return undefined;
  if(n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}`,
      output: "factorial(5) → 120\nfactorial(0) → 1\nfactorial(7) → 5040"
    },
    {
      question: "Write a function that removes duplicates from an array.",
      answer: "Use Set, filter with indexOf, or reduce to create array with unique values.",
      example: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Alternative with filter
function removeDuplicatesFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Alternative with reduce
function removeDuplicatesReduce(arr) {
  return arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
}`,
      output: "removeDuplicates([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]\nremoveDuplicates(['a', 'b', 'a', 'c']) → ['a', 'b', 'c']"
    },
    {
      question: "Create a program that prints the Fibonacci sequence up to n terms.",
      answer: "Fibonacci: 0, 1, 1, 2, 3, 5, 8... Each number is sum of previous two.",
      example: `function fibonacci(n) {
  if(n <= 0) return [];
  if(n === 1) return [0];
  if(n === 2) return [0, 1];
  
  const sequence = [0, 1];
  for(let i = 2; i < n; i++) {
    sequence.push(sequence[i-1] + sequence[i-2]);
  }
  return sequence;
}

// Get nth Fibonacci number
function fibonacciNth(n) {
  if(n <= 1) return n;
  let prev = 0, curr = 1;
  for(let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}`,
      output: "fibonacci(7) → [0, 1, 1, 2, 3, 5, 8]\nfibonacciNth(7) → 13"
    },
    {
      question: "Write a function that checks if a number is prime or not.",
      answer: "Prime numbers are greater than 1 and divisible only by 1 and itself. Check divisibility up to sqrt(n).",
      example: `function isPrime(n) {
  if(n <= 1) return false;
  if(n === 2) return true;
  if(n % 2 === 0) return false;
  
  const limit = Math.sqrt(n);
  for(let i = 3; i <= limit; i += 2) {
    if(n % i === 0) return false;
  }
  return true;
}`,
      output: "isPrime(7) → true\nisPrime(10) → false\nisPrime(2) → true\nisPrime(1) → false"
    },
    {
      question: "Create a function that finds the second largest number in an array.",
      answer: "Track largest and second largest while iterating. Handle duplicates carefully.",
      example: `function secondLargest(arr) {
  if(arr.length < 2) return null;
  
  let largest = -Infinity;
  let second = -Infinity;
  
  for(let num of arr) {
    if(num > largest) {
      second = largest;
      largest = num;
    } else if(num > second && num !== largest) {
      second = num;
    }
  }
  
  return second === -Infinity ? null : second;
}`,
      output: "secondLargest([3, 7, 2, 9, 1]) → 7\nsecondLargest([5, 5, 5]) → null\nsecondLargest([10]) → null"
    },
    {
      question: "Write a function that capitalizes the first letter of each word in a sentence.",
      answer: "Split sentence into words, capitalize first letter of each word, then join back.",
      example: `function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => {
    if(word.length === 0) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

// Alternative with regex
function capitalizeWordsRegex(sentence) {
  return sentence.replace(/\\b\\w/g, char => char.toUpperCase());
}`,
      output: "capitalizeWords('hello world') → 'Hello World'\ncapitalizeWords('javaScript is awesome') → 'Javascript Is Awesome'"
    },
    {
      question: "Create a program that calculates the sum of all numbers from 1 to n.",
      answer: "Use mathematical formula n*(n+1)/2 for O(1), or loop for O(n).",
      example: `function sumToN(n) {
  if(n < 0) return 0;
  return n * (n + 1) / 2;
}

// Loop version
function sumToNLoop(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}`,
      output: "sumToN(10) → 55\nsumToN(100) → 5050\nsumToN(0) → 0"
    },
    {
      question: "Write a function that checks if two strings are anagrams.",
      answer: "Anagrams have same characters in different order. Sort strings or count character frequencies.",
      example: `function isAnagram(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  const clean2 = str2.toLowerCase().replace(/[^a-z]/g, '');
  
  if(clean1.length !== clean2.length) return false;
  
  const charCount = {};
  
  for(let char of clean1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for(let char of clean2) {
    if(!charCount[char]) return false;
    charCount[char]--;
  }
  
  return true;
}`,
      output: "isAnagram('listen', 'silent') → true\nisAnagram('hello', 'world') → false\nisAnagram('Debit Card', 'Bad Credit') → true"
    }
  ],
  
  experienced: [
    {
      question: "Implement a debounce function that delays execution until after a pause.",
      answer: "Debounce ensures a function is called only after a specified delay of inactivity. Useful for search inputs, resize events.",
      example: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// With immediate execution option
function debounceImmediate(func, delay, immediate = false) {
  let timeoutId;
  return function(...args) {
    const callNow = immediate && !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if(!immediate) func.apply(this, args);
    }, delay);
    if(callNow) func.apply(this, args);
  };
}`,
      output: "Function executes only after user stops typing for specified delay"
    },
    {
      question: "Write a memoization function that caches results of expensive calls.",
      answer: "Memoization caches function results based on arguments to avoid recomputation. Uses closure to store cache.",
      example: `function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if(cache.has(key)) {
      console.log('Returning cached result for:', key);
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// For single argument (faster)
function memoizeSimple(fn) {
  const cache = {};
  return (arg) => {
    if(cache[arg] !== undefined) return cache[arg];
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}`,
      output: "Returns cached result on repeated calls with same arguments"
    },
    {
      question: "Build a simple event emitter class with on/emit/off methods.",
      answer: "Event emitter implements publish-subscribe pattern. Maintains object of event names to callback arrays.",
      example: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if(!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return this;
  }
  
  emit(event, ...args) {
    if(!this.events[event]) return false;
    this.events[event].forEach(callback => callback(...args));
    return true;
  }
  
  off(event, callback) {
    if(!this.events[event]) return this;
    if(!callback) {
      delete this.events[event];
    } else {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
    return this;
  }
  
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
    return this;
  }
}`,
      output: "Can subscribe to, emit, and unsubscribe from events"
    },
    {
      question: "Implement a deep clone function that handles nested objects and arrays.",
      answer: "Deep clone recursively copies all levels, handling arrays, objects, dates, regex, and circular references.",
      example: `function deepClone(obj, hash = new WeakMap()) {
  // Handle null, undefined, primitives
  if(obj === null || typeof obj !== 'object') return obj;
  
  // Handle circular references
  if(hash.has(obj)) return hash.get(obj);
  
  // Handle Date
  if(obj instanceof Date) return new Date(obj);
  
  // Handle RegExp
  if(obj instanceof RegExp) return new RegExp(obj);
  
  // Handle Array
  if(Array.isArray(obj)) {
    const cloneArr = [];
    hash.set(obj, cloneArr);
    obj.forEach((item, index) => {
      cloneArr[index] = deepClone(item, hash);
    });
    return cloneArr;
  }
  
  // Handle Object
  const cloneObj = {};
  hash.set(obj, cloneObj);
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}

// Using structuredClone (modern browsers)
function deepCloneModern(obj) {
  return structuredClone(obj);
}`,
      output: "Creates independent copy of nested objects"
    },
    {
      question: "Write a throttle function that limits execution to once per interval.",
      answer: "Throttle ensures function executes at most once per specified time interval. Useful for scroll events, game loops.",
      example: `function throttle(func, limit) {
  let inThrottle;
  let lastFunc;
  let lastRan;
  
  return function(...args) {
    const context = this;
    
    if(!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    } else {
      // Optional: trailing execution
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if(Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Simple version (no trailing)
function throttleSimple(func, limit) {
  let waiting = false;
  return function(...args) {
    if(!waiting) {
      func.apply(this, args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}`,
      output: "Function executes at most once per specified interval"
    },
    {
      question: "Create a Promise.all() polyfill from scratch.",
      answer: "Promise.all takes array of promises, returns promise that resolves when all resolve or rejects if any rejects.",
      example: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      return reject(new TypeError('Argument must be an array'));
    }
    
    if(promises.length === 0) {
      return resolve([]);
    }
    
    const results = [];
    let completed = 0;
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
          
          if(completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// Promise.race polyfill
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}`,
      output: "Promise.all returns array of resolved values, rejects if any promise fails"
    },
    {
      question: "Implement a curry function that converts f(a,b,c) to f(a)(b)(c).",
      answer: "Currying transforms function with multiple arguments into sequence of single-argument functions.",
      example: `function curry(fn) {
  return function curried(...args) {
    if(args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

// Example with placeholder support (advanced)
function curryPlaceholder(fn) {
  return function curried(...args) {
    const complete = args.length >= fn.length && !args.slice(0, fn.length).includes(curryPlaceholder.placeholder);
    
    if(complete) {
      return fn.apply(this, args);
    }
    
    return function(...nextArgs) {
      const merged = args.map(arg => 
        arg === curryPlaceholder.placeholder && nextArgs.length ? nextArgs.shift() : arg
      ).concat(nextArgs);
      return curried.apply(this, merged);
    };
  };
}
curryPlaceholder.placeholder = Symbol('_');`,
      output: "curriedAdd(1)(2)(3) → 6"
    },
    {
      question: "Build a function that flattens a deeply nested array (any depth).",
      answer: "Use recursion or reduce to flatten array elements at any depth.",
      example: `function flattenDeep(arr) {
  const result = [];
  for(let item of arr) {
    if(Array.isArray(item)) {
      result.push(...flattenDeep(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Using reduce
function flattenDeepReduce(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flattenDeepReduce(item) : item);
  }, []);
}

// Iterative version with stack
function flattenDeepIterative(arr) {
  const stack = [...arr];
  const result = [];
  while(stack.length) {
    const next = stack.pop();
    if(Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }
  return result;
}`,
      output: "flattenDeep([1, [2, [3, [4, 5]]]]) → [1, 2, 3, 4, 5]"
    },
    {
      question: "Write a function that implements binary search on a sorted array.",
      answer: "Binary search divides array in half repeatedly until target is found or range exhausted.",
      example: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if(arr[mid] === target) return mid;
    if(arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}

// Recursive version
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if(left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if(arr[mid] === target) return mid;
  if(arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
  return binarySearchRecursive(arr, target, left, mid - 1);
}

// Find first occurrence
function binarySearchFirst(arr, target) {
  let left = 0, right = arr.length - 1;
  let result = -1;
  
  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if(arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}`,
      output: "binarySearch([1, 2, 3, 4, 5, 6, 7], 5) → 4\nbinarySearch([1, 2, 3, 4, 5], 10) → -1"
    },
    {
      question: "Build a LRU (Least Recently Used) cache implementation.",
      answer: "LRU cache evicts least recently used items when capacity is reached. Combine Map or Object with doubly linked list.",
      example: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if(!this.cache.has(key)) return -1;
    
    // Refresh: delete and re-add to put at end (most recent)
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  put(key, value) {
    if(this.cache.has(key)) {
      this.cache.delete(key);
    }
    
    this.cache.set(key, value);
    
    if(this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
  
  keys() {
    return Array.from(this.cache.keys());
  }
}

// More efficient with Map (maintains insertion order)
class LRUCacheOptimized {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    const value = this.cache.get(key);
    if(value === undefined) return -1;
    
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  put(key, value) {
    if(this.cache.has(key)) {
      this.cache.delete(key);
    }
    
    this.cache.set(key, value);
    
    if(this.cache.size > this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }
}`,
      output: "LRU cache evicts least recently used items when capacity is exceeded"
    }
  ]
};

// Also export as learning for backward compatibility
export const learning = problems;
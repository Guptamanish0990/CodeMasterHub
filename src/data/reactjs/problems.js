// /data/js/problems.js

export const problems = {
  fresher: [
    // ==================== STRING PROBLEMS (10) ====================
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
      question: "Write a function that checks if a string is a palindrome.",
      answer: "A palindrome reads the same forward and backward. Compare string with its reverse after cleaning non-alphanumeric characters.",
      example: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}`,
      output: "isPalindrome('racecar') → true\nisPalindrome('hello') → false\nisPalindrome('A man, a plan, a canal: Panama') → true"
    },
    {
      question: "Write a function that counts the number of vowels in a string.",
      answer: "Use regex or loop through string and check if character is vowel (a, e, i, o, u).",
      example: `function countVowels(str) {
  const matches = str.toLowerCase().match(/[aeiou]/g);
  return matches ? matches.length : 0;
}`,
      output: "countVowels('hello world') → 3\ncountVowels('JavaScript') → 3\ncountVowels('rhythm') → 0"
    },
    {
      question: "Write a function that capitalizes the first letter of each word in a sentence.",
      answer: "Split sentence into words, capitalize first letter of each word, then join back.",
      example: `function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => {
    if(word.length === 0) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}`,
      output: "capitalizeWords('hello world') → 'Hello World'\ncapitalizeWords('javaScript is awesome') → 'Javascript Is Awesome'"
    },
    {
      question: "Write a function that returns the first non-repeating character in a string.",
      answer: "Count character frequencies, then find first character with count = 1.",
      example: `function firstNonRepeating(str) {
  const frequency = new Map();
  for(const char of str) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }
  for(const char of str) {
    if(frequency.get(char) === 1) return char;
  }
  return null;
}`,
      output: "firstNonRepeating('swiss') → 'w'\nfirstNonRepeating('aabbcc') → null"
    },
    {
      question: "Write a function that checks if two strings are anagrams.",
      answer: "Anagrams have same characters in different order. Sort strings or count character frequencies.",
      example: `function isAnagram(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/[^a-z]/g, '');
  const clean2 = str2.toLowerCase().replace(/[^a-z]/g, '');
  if(clean1.length !== clean2.length) return false;
  return clean1.split('').sort().join('') === clean2.split('').sort().join('');
}`,
      output: "isAnagram('listen', 'silent') → true\nisAnagram('hello', 'world') → false"
    },
    {
      question: "Write a function that removes duplicate characters from a string.",
      answer: "Use Set to store unique characters, then join back.",
      example: `function removeDuplicates(str) {
  return [...new Set(str)].join('');
}`,
      output: "removeDuplicates('hello') → 'helo'\nremoveDuplicates('aabbcc') → 'abc'"
    },
    {
      question: "Write a function that finds the longest word in a sentence.",
      answer: "Split sentence into words, then find word with maximum length.",
      example: `function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  for(const word of words) {
    if(word.length > longest.length) longest = word;
  }
  return longest;
}`,
      output: "longestWord('The quick brown fox jumps over the lazy dog') → 'jumps'"
    },
    {
      question: "Write a function that truncates a string to a specified length and adds '...'.",
      answer: "If string length exceeds limit, slice and add ellipsis.",
      example: `function truncateString(str, maxLength) {
  if(str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}`,
      output: "truncateString('Hello world!', 5) → 'Hello...'\ntruncateString('Hi', 5) → 'Hi'"
    },
    {
      question: "Write a function that converts a string to title case (first letter capital, rest lower).",
      answer: "Split into words, capitalize first letter of each, make rest lowercase.",
      example: `function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}`,
      output: "toTitleCase('hello WORLD') → 'Hello World'\ntoTitleCase('javaScript is FUN') → 'Javascript Is Fun'"
    },

    // ==================== ARRAY PROBLEMS (12) ====================
    {
      question: "Create a program that finds the largest number in an array.",
      answer: "Use Math.max() with spread operator, or loop through array keeping track of max value.",
      example: `function findLargest(arr) {
  return Math.max(...arr);
}`,
      output: "findLargest([3, 7, 2, 9, 1]) → 9\nfindLargest([-5, -2, -10]) → -2"
    },
    {
      question: "Write a function that removes duplicates from an array.",
      answer: "Use Set, filter with indexOf, or reduce to create array with unique values.",
      example: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}`,
      output: "removeDuplicates([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]"
    },
    {
      question: "Create a function that finds the second largest number in an array.",
      answer: "Track largest and second largest while iterating. Handle duplicates carefully.",
      example: `function secondLargest(arr) {
  if(arr.length < 2) return null;
  let largest = -Infinity, second = -Infinity;
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
      output: "secondLargest([3, 7, 2, 9, 1]) → 7\nsecondLargest([5, 5, 5]) → null"
    },
    {
      question: "Write a function that returns the intersection of two arrays.",
      answer: "Use Set to store elements of first array, then filter second array for common elements.",
      example: `function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  return [...new Set(arr2.filter(item => set1.has(item)))];
}`,
      output: "arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]) → [3, 4]"
    },
    {
      question: "Write a function that finds the most frequent element in an array.",
      answer: "Use Map to count frequencies, then find element with highest count.",
      example: `function mostFrequent(arr) {
  const frequency = new Map();
  let maxCount = 0, mostFrequentElement = null;
  for(const element of arr) {
    const count = (frequency.get(element) || 0) + 1;
    frequency.set(element, count);
    if(count > maxCount) {
      maxCount = count;
      mostFrequentElement = element;
    }
  }
  return mostFrequentElement;
}`,
      output: "mostFrequent([1, 2, 2, 3, 2, 4, 2]) → 2"
    },
    {
      question: "Write a function that rotates an array by k positions to the right.",
      answer: "Use slice and spread, or reverse method. k can be larger than array length.",
      example: `function rotateArray(arr, k) {
  const n = arr.length;
  if(n === 0) return arr;
  k = k % n;
  if(k === 0) return arr;
  return [...arr.slice(-k), ...arr.slice(0, n - k)];
}`,
      output: "rotateArray([1, 2, 3, 4, 5], 2) → [4, 5, 1, 2, 3]"
    },
    {
      question: "Write a function that checks if two arrays are equal (same elements in same order).",
      answer: "Compare length first, then each element. Use JSON.stringify or loop comparison.",
      example: `function arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}`,
      output: "arraysEqual([1, 2, 3], [1, 2, 3]) → true\narraysEqual([1, 2, 3], [1, 3, 2]) → false"
    },
    {
      question: "Write a function that merges two sorted arrays into one sorted array.",
      answer: "Use two-pointer technique, compare elements and add smaller one to result.",
      example: `function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  while(i < arr1.length) result.push(arr1[i++]);
  while(j < arr2.length) result.push(arr2[j++]);
  return result;
}`,
      output: "mergeSortedArrays([1, 3, 5], [2, 4, 6]) → [1, 2, 3, 4, 5, 6]"
    },
    {
      question: "Write a function that finds the missing number in an array of 1 to n.",
      answer: "Use sum formula n*(n+1)/2 and subtract actual sum to find missing number.",
      example: `function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = n * (n + 1) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}`,
      output: "findMissingNumber([1, 2, 3, 5, 6, 7, 8]) → 4"
    },
    {
      question: "Write a function that moves all zeros to the end of an array.",
      answer: "Use two-pointer technique: one for reading, one for writing non-zero elements.",
      example: `function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return arr;
}`,
      output: "moveZerosToEnd([0, 1, 0, 3, 12]) → [1, 3, 12, 0, 0]"
    },
    {
      question: "Write a function that finds the maximum subarray sum (Kadane's Algorithm).",
      answer: "Kadane's algorithm tracks current sum and max sum. Reset current sum if it becomes negative.",
      example: `function maxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`,
      output: "maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]) → 6"
    },
    {
      question: "Write a function that finds the product of all elements except the current index.",
      answer: "Use prefix and suffix products to avoid division.",
      example: `function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  let prefix = 1;
  for(let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for(let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
}`,
      output: "productExceptSelf([1, 2, 3, 4]) → [24, 12, 8, 6]"
    },

    // ==================== NUMBER PROBLEMS (8) ====================
    {
      question: "Create a function that returns the factorial of a number (n!).",
      answer: "Factorial of n = n * (n-1) * ... * 1. Use recursion or iteration. 0! = 1.",
      example: `function factorial(n) {
  if(n < 0) return undefined;
  if(n === 0 || n === 1) return 1;
  let result = 1;
  for(let i = 2; i <= n; i++) result *= i;
  return result;
}`,
      output: "factorial(5) → 120\nfactorial(0) → 1\nfactorial(7) → 5040"
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
      output: "isPrime(7) → true\nisPrime(10) → false\nisPrime(2) → true"
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
}`,
      output: "fibonacci(7) → [0, 1, 1, 2, 3, 5, 8]"
    },
    {
      question: "Create a function that calculates the sum of all numbers from 1 to n.",
      answer: "Use mathematical formula n*(n+1)/2 for O(1), or loop for O(n).",
      example: `function sumToN(n) {
  if(n < 0) return 0;
  return n * (n + 1) / 2;
}`,
      output: "sumToN(10) → 55\nsumToN(100) → 5050"
    },
    {
      question: "Write a function that reverses a number (e.g., 12345 → 54321).",
      answer: "Convert to string, reverse, then convert back to number.",
      example: `function reverseNumber(num) {
  const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
  return num < 0 ? -reversed : reversed;
}`,
      output: "reverseNumber(12345) → 54321\nreverseNumber(-12345) → -54321"
    },
    {
      question: "Write a function that checks if a number is a perfect square.",
      answer: "Take square root and check if it's an integer.",
      example: `function isPerfectSquare(num) {
  const root = Math.sqrt(num);
  return root === Math.floor(root);
}`,
      output: "isPerfectSquare(16) → true\nisPerfectSquare(14) → false"
    },
    {
      question: "Write a function that finds the greatest common divisor (GCD) of two numbers.",
      answer: "Use Euclidean algorithm: repeatedly subtract or use modulo.",
      example: `function gcd(a, b) {
  while(b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}`,
      output: "gcd(48, 18) → 6\ngcd(100, 25) → 25"
    },
    {
      question: "Write a function that converts a number to its Roman numeral representation.",
      answer: "Use mapping of values to Roman symbols and subtract largest possible values.",
      example: `function toRoman(num) {
  const romanMap = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  for(const [value, symbol] of romanMap) {
    while(num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}`,
      output: "toRoman(49) → 'XLIX'\ntoRoman(2024) → 'MMXXIV'"
    },

    // ==================== RECURSION & LOOP PROBLEMS (5) ====================
    {
      question: "Write a recursive function to calculate the sum of digits of a number.",
      answer: "Base case: number < 10. Recursive case: last digit + sum of remaining digits.",
      example: `function sumOfDigits(n) {
  if(n < 0) n = Math.abs(n);
  if(n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}`,
      output: "sumOfDigits(12345) → 15\nsumOfDigits(987) → 24"
    },
    {
      question: "Write a recursive function to check if a number is a palindrome.",
      answer: "Compare first and last digits recursively.",
      example: `function isNumberPalindrome(n) {
  if(n < 0) return false;
  const str = n.toString();
  function check(left, right) {
    if(left >= right) return true;
    if(str[left] !== str[right]) return false;
    return check(left + 1, right - 1);
  }
  return check(0, str.length - 1);
}`,
      output: "isNumberPalindrome(12321) → true\nisNumberPalindrome(12345) → false"
    },
    {
      question: "Write a function that generates all possible substrings of a string.",
      answer: "Use nested loops: outer for start, inner for end indices.",
      example: `function getAllSubstrings(str) {
  const substrings = [];
  for(let start = 0; start < str.length; start++) {
    for(let end = start + 1; end <= str.length; end++) {
      substrings.push(str.slice(start, end));
    }
  }
  return substrings;
}`,
      output: "getAllSubstrings('abc') → ['a', 'ab', 'abc', 'b', 'bc', 'c']"
    },
    {
      question: "Write a function that finds all prime numbers up to n (Sieve of Eratosthenes).",
      answer: "Mark non-primes as false starting from 2's multiples, remaining true are prime.",
      example: `function sieveOfEratosthenes(n) {
  if(n < 2) return [];
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for(let i = 2; i * i <= n; i++) {
    if(isPrime[i]) {
      for(let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.reduce((primes, val, idx) => {
    if(val) primes.push(idx);
    return primes;
  }, []);
}`,
      output: "sieveOfEratosthenes(30) → [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]"
    },
    {
      question: "Write a function that validates a bracket string (parentheses, curly, square braces).",
      answer: "Use stack to match opening and closing brackets. Must be properly nested and ordered.",
      example: `function isValidBrackets(str) {
  const stack = [];
  const bracketPairs = { ')': '(', '}': '{', ']': '[' };
  const opening = new Set(['(', '{', '[']);
  for(const char of str) {
    if(opening.has(char)) stack.push(char);
    else if(bracketPairs[char]) {
      if(stack.length === 0 || stack.pop() !== bracketPairs[char]) return false;
    }
  }
  return stack.length === 0;
}`,
      output: "isValidBrackets('(){}[]') → true\nisValidBrackets('({[})') → false"
    }
  ],

  experienced: [
    // ==================== FUNCTIONAL PROGRAMMING (5) ====================
    {
      question: "Implement a debounce function that delays execution until after a pause.",
      answer: "Debounce ensures a function is called only after a specified delay of inactivity. Useful for search inputs, resize events.",
      example: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}`,
      output: "Function executes only after user stops typing for specified delay"
    },
    {
      question: "Write a throttle function that limits execution to once per interval.",
      answer: "Throttle ensures function executes at most once per specified time interval. Useful for scroll events, game loops.",
      example: `function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if(!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false; }, limit);
    }
  };
}`,
      output: "Function executes at most once per specified interval"
    },
    {
      question: "Write a memoization function that caches results of expensive calls.",
      answer: "Memoization caches function results based on arguments to avoid recomputation. Uses closure to store cache.",
      example: `function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if(cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}`,
      output: "Returns cached result on repeated calls with same arguments"
    },
    {
      question: "Implement a curry function that converts f(a,b,c) to f(a)(b)(c).",
      answer: "Currying transforms function with multiple arguments into sequence of single-argument functions.",
      example: `function curry(fn) {
  return function curried(...args) {
    if(args.length >= fn.length) return fn.apply(this, args);
    return function(...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}`,
      output: "curriedAdd(1)(2)(3) → 6"
    },
    {
      question: "Implement a pipe/compose function for function composition.",
      answer: "Pipe executes functions left to right; compose executes right to left.",
      example: `function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}`,
      output: "pipe(add2, multiply3)(5) → 21\ncompose(multiply3, add2)(5) → 21"
    },

    // ==================== PROMISES & ASYNC (4) ====================
    {
      question: "Create a Promise.all() polyfill from scratch.",
      answer: "Promise.all takes array of promises, returns promise that resolves when all resolve or rejects if any rejects.",
      example: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) return reject(new TypeError('Argument must be an array'));
    if(promises.length === 0) return resolve([]);
    const results = [];
    let completed = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
          if(completed === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
}`,
      output: "Promise.all returns array of resolved values, rejects if any promise fails"
    },
    {
      question: "Implement a Promise.race() polyfill.",
      answer: "Promise.race resolves or rejects as soon as any promise settles.",
      example: `function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}`,
      output: "Promise.race resolves/rejects with first settled promise"
    },
    {
      question: "Implement a retry function for failed API calls.",
      answer: "Retry function attempts an async operation multiple times with delay between attempts.",
      example: `async function retry(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (error) {
    if(retries === 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay * 2);
  }
}`,
      output: "Retries failed async operations up to specified attempts"
    },
    {
      question: "Implement a timeout wrapper for promises.",
      answer: "Race the original promise against a timeout promise.",
      example: `function withTimeout(promise, timeoutMs, timeoutMessage = 'Operation timed out') {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
  });
  return Promise.race([promise, timeoutPromise]);
}`,
      output: "Promise rejects if it takes longer than specified timeout"
    },

    // ==================== DATA STRUCTURES (4) ====================
    {
      question: "Build a simple event emitter class with on/emit/off methods.",
      answer: "Event emitter implements publish-subscribe pattern. Maintains object of event names to callback arrays.",
      example: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    if(!this.events[event]) this.events[event] = [];
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
    if(!callback) delete this.events[event];
    else this.events[event] = this.events[event].filter(cb => cb !== callback);
    return this;
  }
}`,
      output: "Can subscribe to, emit, and unsubscribe from events"
    },
    {
      question: "Build a LRU (Least Recently Used) cache implementation.",
      answer: "LRU cache evicts least recently used items when capacity is reached. Combine Map with doubly linked list.",
      example: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if(!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    if(this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if(this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}`,
      output: "LRU cache evicts least recently used items when capacity is exceeded"
    },
    {
      question: "Implement a function that performs a topological sort on a directed graph.",
      answer: "Use Kahn's algorithm (BFS) with indegree counting.",
      example: `function topologicalSort(vertices, edges) {
  const adjList = new Map();
  const inDegree = new Map();
  for(const v of vertices) {
    adjList.set(v, []);
    inDegree.set(v, 0);
  }
  for(const [from, to] of edges) {
    adjList.get(from).push(to);
    inDegree.set(to, inDegree.get(to) + 1);
  }
  const queue = [];
  for(const [v, degree] of inDegree) {
    if(degree === 0) queue.push(v);
  }
  const result = [];
  while(queue.length) {
    const v = queue.shift();
    result.push(v);
    for(const neighbor of adjList.get(v)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if(inDegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }
  return result.length === vertices.length ? result : null;
}`,
      output: "Topological order of directed acyclic graph"
    },
    {
      question: "Implement a Trie (Prefix Tree) for efficient string search.",
      answer: "Trie stores strings in tree structure where each node represents a character.",
      example: `class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for(const char of word) {
      if(!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for(const char of word) {
      if(!node.children.has(char)) return false;
      node = node.children.get(char);
    }
    return node.isEnd;
  }
  startsWith(prefix) {
    let node = this.root;
    for(const char of prefix) {
      if(!node.children.has(char)) return false;
      node = node.children.get(char);
    }
    return true;
  }
}`,
      output: "Trie provides O(n) search and prefix matching"
    },

    // ==================== ALGORITHMS (5) ====================
    {
      question: "Implement a function that finds the longest palindrome substring in a given string.",
      answer: "Use expand around center technique for O(n²) time. Check both odd and even length palindromes.",
      example: `function longestPalindrome(s) {
  if(s.length === 0) return '';
  let start = 0, maxLength = 1;
  function expandAroundCenter(left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if(currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }
      left--;
      right++;
    }
  }
  for(let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLength);
}`,
      output: "longestPalindrome('babad') → 'bab' or 'aba'\nlongestPalindrome('cbbd') → 'bb'"
    },
    {
      question: "Implement the binary search algorithm on a sorted array.",
      answer: "Binary search divides array in half repeatedly until target is found or range exhausted.",
      example: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] === target) return mid;
    if(arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
      output: "binarySearch([1, 2, 3, 4, 5, 6, 7], 5) → 4"
    },
    {
      question: "Implement the quicksort algorithm.",
      answer: "Quicksort picks a pivot, partitions array around it, then recursively sorts subarrays.",
      example: `function quickSort(arr) {
  if(arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
      output: "quickSort([3, 6, 8, 10, 1, 2, 1]) → [1, 1, 2, 3, 6, 8, 10]"
    },
    {
      question: "Implement a function to find the median of two sorted arrays in O(log(min(n,m))).",
      answer: "Binary search on the smaller array, partition both arrays to find median.",
      example: `function findMedianSortedArrays(nums1, nums2) {
  if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  const m = nums1.length, n = nums2.length;
  let left = 0, right = m;
  while(left <= right) {
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = Math.floor((m + n + 1) / 2) - partition1;
    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === m ? Infinity : nums1[partition1];
    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n ? Infinity : nums2[partition2];
    if(maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if((m + n) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if(maxLeft1 > minRight2) {
      right = partition1 - 1;
    } else {
      left = partition1 + 1;
    }
  }
  return 0;
}`,
      output: "findMedianSortedArrays([1, 3], [2]) → 2\nfindMedianSortedArrays([1, 2], [3, 4]) → 2.5"
    },
    {
      question: "Implement a function that solves the N-Queens problem.",
      answer: "Backtracking algorithm: place queens column by column, check conflicts using sets.",
      example: `function solveNQueens(n) {
  const result = [];
  const queens = new Array(n).fill(-1);
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  function backtrack(row) {
    if(row === n) {
      const board = buildBoard();
      result.push(board);
      return;
    }
    for(let col = 0; col < n; col++) {
      if(cols.has(col) || diag1.has(row + col) || diag2.has(row - col)) continue;
      queens[row] = col;
      cols.add(col);
      diag1.add(row + col);
      diag2.add(row - col);
      backtrack(row + 1);
      cols.delete(col);
      diag1.delete(row + col);
      diag2.delete(row - col);
      queens[row] = -1;
    }
  }
  function buildBoard() {
    const board = [];
    for(let i = 0; i < n; i++) {
      let row = '';
      for(let j = 0; j < n; j++) {
        row += queens[i] === j ? 'Q' : '.';
      }
      board.push(row);
    }
    return board;
  }
  backtrack(0);
  return result;
}`,
      output: "solveNQueens(4) → 2 solutions"
    },

    // ==================== OBJECT & DEEP CLONING (2) ====================
    {
      question: "Implement a deep clone function that handles nested objects and arrays.",
      answer: "Deep clone recursively copies all levels, handling arrays, objects, dates, regex, and circular references.",
      example: `function deepClone(obj, hash = new WeakMap()) {
  if(obj === null || typeof obj !== 'object') return obj;
  if(hash.has(obj)) return hash.get(obj);
  if(obj instanceof Date) return new Date(obj);
  if(obj instanceof RegExp) return new RegExp(obj);
  if(Array.isArray(obj)) {
    const cloneArr = [];
    hash.set(obj, cloneArr);
    obj.forEach((item, index) => {
      cloneArr[index] = deepClone(item, hash);
    });
    return cloneArr;
  }
  const cloneObj = {};
  hash.set(obj, cloneObj);
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}`,
      output: "Creates independent copy of nested objects"
    },
    {
      question: "Implement a function that flattens a deeply nested object into dot notation.",
      answer: "Recursively traverse object and build keys with dot notation.",
      example: `function flattenObject(obj, prefix = '', result = {}) {
  for(const key in obj) {
    if(obj.hasOwnProperty(key)) {
      const newKey = prefix ? \`\${prefix}.\${key}\` : key;
      if(obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}`,
      output: "flattenObject({a: {b: {c: 1}}, d: 2}) → {'a.b.c': 1, d: 2}"
    },

    // ==================== STRING ALGORITHMS (2) ====================
    {
      question: "Implement a function that finds the longest common prefix among an array of strings.",
      answer: "Take first string as reference, compare character by character with all other strings.",
      example: `function longestCommonPrefix(strs) {
  if(strs.length === 0) return '';
  for(let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for(let j = 1; j < strs.length; j++) {
      if(i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}`,
      output: "longestCommonPrefix(['flower', 'flow', 'flight']) → 'fl'"
    },
    {
      question: "Implement the KMP string matching algorithm.",
      answer: "KMP precomputes prefix function to avoid unnecessary comparisons.",
      example: `function KMPSearch(pattern, text) {
  function computeLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let length = 0;
    let i = 1;
    while(i < pattern.length) {
      if(pattern[i] === pattern[length]) {
        length++;
        lps[i] = length;
        i++;
      } else if(length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
    return lps;
  }
  const lps = computeLPS(pattern);
  const result = [];
  let i = 0, j = 0;
  while(i < text.length) {
    if(pattern[j] === text[i]) { i++; j++; }
    if(j === pattern.length) {
      result.push(i - j);
      j = lps[j - 1];
    } else if(i < text.length && pattern[j] !== text[i]) {
      if(j !== 0) j = lps[j - 1];
      else i++;
    }
  }
  return result;
}`,
      output: "KMPSearch('ab', 'ababcabab') → [0, 2, 5, 7]"
    },

    // ==================== RATE LIMITING & CACHING (2) ====================
    {
      question: "Implement a rate limiter (API request throttling).",
      answer: "Rate limiter tracks timestamps of requests, allows only specified number in window.",
      example: `class RateLimiter {
  constructor(maxRequests, timeWindowMs) {
    this.maxRequests = maxRequests;
    this.timeWindowMs = timeWindowMs;
    this.requests = [];
  }
  allowRequest() {
    const now = Date.now();
    this.requests = this.requests.filter(timestamp => now - timestamp < this.timeWindowMs);
    if(this.requests.length < this.maxRequests) {
      this.requests.push(now);
      return true;
    }
    return false;
  }
}`,
      output: "Rate limiter allows maxRequests per timeWindowMs"
    },
    {
      question: "Implement a cache with TTL (time to live).",
      answer: "Store items with expiration timestamps, automatically remove expired items.",
      example: `class TTLCache {
  constructor(defaultTTL = 60000) {
    this.cache = new Map();
    this.defaultTTL = defaultTTL;
  }
  set(key, value, ttl = this.defaultTTL) {
    const expiresAt = Date.now() + ttl;
    this.cache.set(key, { value, expiresAt });
  }
  get(key) {
    const item = this.cache.get(key);
    if(!item) return undefined;
    if(Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }
    return item.value;
  }
}`,
      output: "Cache items automatically expire after TTL"
    }
  ]
};

export const learning = problems;
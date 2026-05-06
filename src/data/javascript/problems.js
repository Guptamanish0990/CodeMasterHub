export const problems = {
  // ====================== 25 FRESHER CODING PROBLEMS ======================
  fresher: [
    {
      question: "Write a function that reverses a string (e.g., 'hello' → 'olleh').",
      answer: "Use split(), reverse(), and join() methods, or use a loop to build reversed string from end to start.",
      solution: `function reverseString(str) {
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
      output: `reverseString('hello') → 'olleh'
reverseString('JavaScript') → 'tpircSavaJ'`,
      note: "💡 Time complexity: O(n). Space complexity: O(n)."
    },
    {
      question: "Create a program that finds the largest number in an array.",
      answer: "Use Math.max() with spread operator, or loop through array keeping track of max value.",
      solution: `function findLargest(arr) {
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
      output: `findLargest([3, 7, 2, 9, 1]) → 9
findLargest([-5, -2, -10]) → -2`,
      note: "💡 Time complexity: O(n). Edge case: empty array returns null."
    },
    {
      question: "Write a function that checks if a string is a palindrome.",
      answer: "A palindrome reads the same forward and backward. Compare string with its reverse after cleaning non-alphanumeric characters.",
      solution: `function isPalindrome(str) {
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
      output: `isPalindrome('racecar') → true
isPalindrome('hello') → false
isPalindrome('A man, a plan, a canal: Panama') → true`,
      note: "💡 Time complexity: O(n). Ignores spaces, punctuation, and case."
    },
    {
      question: "Write a function that counts the number of vowels in a string.",
      answer: "Use regex or loop through string and check if character is vowel (a, e, i, o, u).",
      solution: `function countVowels(str) {
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
      output: `countVowels('hello world') → 3
countVowels('JavaScript') → 3
countVowels('rhythm') → 0`,
      note: "💡 Time complexity: O(n). Both uppercase and lowercase vowels are counted."
    },
    {
      question: "Create a function that returns the factorial of a number (n!).",
      answer: "Factorial of n = n * (n-1) * ... * 1. Use recursion or iteration. 0! = 1.",
      solution: `function factorial(n) {
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
      output: `factorial(5) → 120
factorial(0) → 1
factorial(7) → 5040`,
      note: "💡 Time complexity: O(n). Recursive version has O(n) space complexity."
    },
    {
      question: "Write a function that removes duplicates from an array.",
      answer: "Use Set, filter with indexOf, or reduce to create array with unique values.",
      solution: `function removeDuplicates(arr) {
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
      output: `removeDuplicates([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]
removeDuplicates(['a', 'b', 'a', 'c']) → ['a', 'b', 'c']`,
      note: "💡 Time complexity: O(n). Set is most efficient for primitive values."
    },
    {
      question: "Create a program that prints the Fibonacci sequence up to n terms.",
      answer: "Fibonacci: 0, 1, 1, 2, 3, 5, 8... Each number is sum of previous two.",
      solution: `function fibonacci(n) {
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
      output: `fibonacci(7) → [0, 1, 1, 2, 3, 5, 8]
fibonacciNth(7) → 13`,
      note: "💡 Time complexity: O(n). Space complexity: O(1) for nth number."
    },
    {
      question: "Write a function that checks if a number is prime or not.",
      answer: "Prime numbers are greater than 1 and divisible only by 1 and itself. Check divisibility up to sqrt(n).",
      solution: `function isPrime(n) {
  if(n <= 1) return false;
  if(n === 2) return true;
  if(n % 2 === 0) return false;
  
  const limit = Math.sqrt(n);
  for(let i = 3; i <= limit; i += 2) {
    if(n % i === 0) return false;
  }
  return true;
}`,
      output: `isPrime(7) → true
isPrime(10) → false
isPrime(2) → true
isPrime(1) → false`,
      note: "💡 Time complexity: O(√n). Only check odd numbers up to square root."
    },
    {
      question: "Create a function that finds the second largest number in an array.",
      answer: "Track largest and second largest while iterating. Handle duplicates carefully.",
      solution: `function secondLargest(arr) {
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
      output: `secondLargest([3, 7, 2, 9, 1]) → 7
secondLargest([5, 5, 5]) → null
secondLargest([10]) → null`,
      note: "💡 Time complexity: O(n). Returns null if no second largest exists."
    },
    {
      question: "Write a function that capitalizes the first letter of each word in a sentence.",
      answer: "Split sentence into words, capitalize first letter of each word, then join back.",
      solution: `function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => {
    if(word.length === 0) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

// Alternative with regex
function capitalizeWordsRegex(sentence) {
  return sentence.replace(/\\b\\w/g, char => char.toUpperCase());
}`,
      output: `capitalizeWords('hello world') → 'Hello World'
capitalizeWords('javaScript is awesome') → 'Javascript Is Awesome'`,
      note: "💡 Time complexity: O(n). Handles multiple spaces and empty strings."
    },
    {
      question: "Create a program that calculates the sum of all numbers from 1 to n.",
      answer: "Use mathematical formula n*(n+1)/2 for O(1), or loop for O(n).",
      solution: `function sumToN(n) {
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
      output: `sumToN(10) → 55
sumToN(100) → 5050
sumToN(0) → 0`,
      note: "💡 Time complexity: O(1) using formula. Formula is more efficient."
    },
    {
      question: "Write a function that checks if two strings are anagrams.",
      answer: "Anagrams have same characters in different order. Sort strings or count character frequencies.",
      solution: `function isAnagram(str1, str2) {
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
      output: `isAnagram('listen', 'silent') → true
isAnagram('hello', 'world') → false
isAnagram('Debit Card', 'Bad Credit') → true`,
      note: "💡 Time complexity: O(n). Ignores spaces, punctuation, and case."
    },
    {
      question: "Create a function that returns the number of times a character appears in a string.",
      answer: "Loop through string and count matches, or use regex or split method.",
      solution: `function countCharacter(str, char) {
  let count = 0;
  for(let c of str) {
    if(c === char) count++;
  }
  return count;
}

// Using regex
function countCharacterRegex(str, char) {
  const regex = new RegExp(char, 'g');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}`,
      output: `countCharacter('hello world', 'l') → 3
countCharacter('JavaScript', 'a') → 2
countCharacter('mississippi', 's') → 4`,
      note: "💡 Time complexity: O(n). Case-sensitive by default."
    },
    {
      question: "Write a function that finds the missing number in an array from 1 to n.",
      answer: "Use sum formula n*(n+1)/2 minus array sum, or XOR method.",
      solution: `function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = n * (n + 1) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// XOR method (handles large numbers better)
function findMissingNumberXOR(arr) {
  const n = arr.length + 1;
  let xor1 = 0, xor2 = 0;
  
  for(let i = 1; i <= n; i++) xor1 ^= i;
  for(let num of arr) xor2 ^= num;
  
  return xor1 ^ xor2;
}`,
      output: `findMissingNumber([1, 2, 3, 5]) → 4
findMissingNumber([2, 3, 4, 5]) → 1
findMissingNumber([1, 2, 3, 4]) → 5`,
      note: "💡 Time complexity: O(n). Assumes exactly one number missing."
    },
    {
      question: "Create a program that sorts an array in ascending order (without built-in sort).",
      answer: "Implement bubble sort, selection sort, or insertion sort manually.",
      solution: `function bubbleSort(arr) {
  const result = [...arr];
  for(let i = 0; i < result.length - 1; i++) {
    for(let j = 0; j < result.length - i - 1; j++) {
      if(result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}

function selectionSort(arr) {
  const result = [...arr];
  for(let i = 0; i < result.length - 1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < result.length; j++) {
      if(result[j] < result[minIndex]) minIndex = j;
    }
    if(minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  return result;
}`,
      output: `bubbleSort([3, 1, 4, 1, 5]) → [1, 1, 3, 4, 5]
selectionSort([5, 2, 8, 1, 9]) → [1, 2, 5, 8, 9]`,
      note: "💡 Time complexity: O(n²) for bubble/selection sort. Not for large arrays."
    },
    {
      question: "Write a function that returns the average of all numbers in an array.",
      answer: "Sum all numbers and divide by array length. Handle empty array edge case.",
      solution: `function average(arr) {
  if(arr.length === 0) return 0;
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}`,
      output: `average([1, 2, 3, 4, 5]) → 3
average([10, 20, 30]) → 20
average([]) → 0`,
      note: "💡 Time complexity: O(n). Returns 0 for empty arrays."
    },
    {
      question: "Create a function that removes falsy values (false, null, 0, '', undefined, NaN) from an array.",
      answer: "Use filter with Boolean constructor or explicit truthy check.",
      solution: `function removeFalsy(arr) {
  return arr.filter(Boolean);
}

// Explicit version
function removeFalsyExplicit(arr) {
  return arr.filter(item => {
    return item !== false && item !== null && item !== 0 && 
           item !== '' && item !== undefined && !Number.isNaN(item);
  });
}`,
      output: `removeFalsy([0, 1, false, 2, '', 3, null, undefined, NaN]) → [1, 2, 3]
removeFalsy(['a', '', 'b', null, 'c']) → ['a', 'b', 'c']`,
      note: "💡 Time complexity: O(n). Boolean constructor removes all falsy values."
    },
    {
      question: "Write a function that reverses the order of words in a sentence.",
      answer: "Split sentence into words, reverse array, then join back.",
      solution: `function reverseWords(sentence) {
  return sentence.split(' ').filter(word => word.length > 0).reverse().join(' ');
}

// Preserve multiple spaces
function reverseWordsPreserve(sentence) {
  return sentence.split(/\\s+/).reverse().join(' ');
}`,
      output: `reverseWords('Hello World') → 'World Hello'
reverseWords('The quick brown fox') → 'fox brown quick The'`,
      note: "💡 Time complexity: O(n). Handles extra spaces with filter."
    },
    {
      question: "Create a program that finds the common elements between two arrays.",
      answer: "Use filter with includes, or Set for better performance.",
      solution: `function findCommon(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
}

// Without Set (O(n²))
function findCommonBasic(arr1, arr2) {
  const common = [];
  for(let item of arr1) {
    if(arr2.includes(item) && !common.includes(item)) {
      common.push(item);
    }
  }
  return common;
}`,
      output: `findCommon([1, 2, 3, 4], [3, 4, 5, 6]) → [3, 4]
findCommon(['a', 'b', 'c'], ['b', 'c', 'd']) → ['b', 'c']`,
      note: "💡 Time complexity: O(n) with Set, O(n²) without. Returns unique common elements."
    },
    {
      question: "Write a function that converts Celsius to Fahrenheit and vice versa.",
      answer: "C to F: (C × 9/5) + 32. F to C: (F - 32) × 5/9.",
      solution: `function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Combined converter
function convertTemperature(value, from) {
  if(from === 'C') return { celsius: value, fahrenheit: (value * 9/5) + 32 };
  if(from === 'F') return { celsius: (value - 32) * 5/9, fahrenheit: value };
  return null;
}`,
      output: `celsiusToFahrenheit(0) → 32
celsiusToFahrenheit(100) → 212
fahrenheitToCelsius(32) → 0
fahrenheitToCelsius(212) → 100`,
      note: "💡 Use toFixed() for rounding: celsiusToFahrenheit(37).toFixed(1) → '98.6'"
    },
    {
      question: "Create a function that generates a random number between min and max.",
      answer: "Use Math.random() and scale to desired range. Include/exclude max accordingly.",
      solution: `function randomBetween(min, max, inclusiveMax = true) {
  if(inclusiveMax) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

// For decimal numbers
function randomDecimal(min, max) {
  return Math.random() * (max - min) + min;
}`,
      output: `randomBetween(1, 10) → random integer between 1-10
randomBetween(5, 10, false) → random integer between 5-9
randomDecimal(1.5, 2.5) → random decimal between 1.5-2.5`,
      note: "💡 Math.random() returns [0,1). Not cryptographically secure."
    },
    {
      question: "Write a function that checks if a year is a leap year.",
      answer: "Leap year: divisible by 4, but not by 100 unless also divisible by 400.",
      solution: `function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// Verbose version for understanding
function isLeapYearDetailed(year) {
  if(year % 400 === 0) return true;
  if(year % 100 === 0) return false;
  if(year % 4 === 0) return true;
  return false;
}`,
      output: `isLeapYear(2020) → true
isLeapYear(1900) → false
isLeapYear(2000) → true
isLeapYear(2023) → false`,
      note: "💡 Check: 2024 is leap year, 2100 is not, 2400 is leap year."
    },
    {
      question: "Create a function that returns the sum of all even numbers in an array.",
      answer: "Filter even numbers then reduce, or loop and accumulate.",
      solution: `function sumEven(arr) {
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

// Alternative with filter
function sumEvenFilter(arr) {
  return arr.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);
}`,
      output: `sumEven([1, 2, 3, 4, 5, 6]) → 12 (2+4+6)
sumEven([10, 15, 20, 25]) → 30 (10+20)
sumEven([1, 3, 5]) → 0`,
      note: "💡 Time complexity: O(n). Use modulo operator to check even numbers."
    },
    {
      question: "Write a function that flattens a nested array (one level deep).",
      answer: "Use flat() method, concat with spread, or reduce.",
      solution: `function flattenOneLevel(arr) {
  return arr.flat();
}

// Without flat() method
function flattenOneLevelManual(arr) {
  return [].concat(...arr);
}

// With reduce
function flattenOneLevelReduce(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? item : [item]);
  }, []);
}`,
      output: `flattenOneLevel([1, [2, 3], [4, 5]]) → [1, 2, 3, 4, 5]
flattenOneLevel([[1, 2], [3, 4], [5]]) → [1, 2, 3, 4, 5]`,
      note: "💡 For deep flattening: arr.flat(Infinity) or recursive function."
    },
    {
      question: "Create a function that finds the most frequent element in an array.",
      answer: "Use object to count frequencies, then find max count.",
      solution: `function mostFrequent(arr) {
  if(arr.length === 0) return null;
  
  const frequency = {};
  let maxCount = 0;
  let mostFrequentItem = arr[0];
  
  for(let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
    if(frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequentItem = item;
    }
  }
  
  return mostFrequentItem;
}

// Return all most frequent elements
function mostFrequentAll(arr) {
  if(arr.length === 0) return [];
  
  const freq = {};
  let maxCount = 0;
  
  for(let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    maxCount = Math.max(maxCount, freq[item]);
  }
  
  return Object.keys(freq).filter(key => freq[key] === maxCount).map(Number);
}`,
      output: `mostFrequent([1, 3, 2, 3, 4, 3, 5]) → 3
mostFrequent(['a', 'b', 'a', 'c', 'a', 'b']) → 'a'
mostFrequentAll([1, 2, 2, 3, 3]) → ['2', '3']`,
      note: "💡 Time complexity: O(n). Handles ties in mostFrequentAll()."
    }
  ],

  // ====================== 25 EXPERIENCED CODING PROBLEMS ======================
  experienced: [
    {
      question: "Implement a debounce function that delays execution until after a pause.",
      answer: "Debounce ensures a function is called only after a specified delay of inactivity. Useful for search inputs, resize events.",
      solution: `function debounce(func, delay) {
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
      output: `const debouncedSearch = debounce(() => console.log('Searching...'), 500);
// Only logs once after user stops typing for 500ms`,
      note: "💡 Used in search bars, autocomplete, window resize listeners."
    },
    {
      question: "Write a memoization function that caches results of expensive calls.",
      answer: "Memoization caches function results based on arguments to avoid recomputation. Uses closure to store cache.",
      solution: `function memoize(fn) {
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
}

// Example usage
const expensiveFib = memoize(function(n) {
  if(n <= 1) return n;
  return expensiveFib(n - 1) + expensiveFib(n - 2);
});`,
      output: `expensiveFib(40) → 102334155 (computes once)
expensiveFib(40) → 102334155 (returns from cache)`,
      note: "💡 Time complexity: O(1) for cached calls. Trades memory for speed."
    },
    {
      question: "Build a simple event emitter class with on/emit/off methods.",
      answer: "Event emitter implements publish-subscribe pattern. Maintains object of event names to callback arrays.",
      solution: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if(!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return this; // For chaining
  }
  
  emit(event, ...args) {
    if(!this.events[event]) return false;
    this.events[event].forEach(callback => {
      callback(...args);
    });
    return true;
  }
  
  off(event, callback) {
    if(!this.events[event]) return this;
    if(!callback) {
      // Remove all callbacks for this event
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
  
  removeAllListeners() {
    this.events = {};
    return this;
  }
}`,
      output: `const emitter = new EventEmitter();
emitter.on('click', () => console.log('Clicked!'));
emitter.emit('click'); // 'Clicked!'
emitter.once('once', () => console.log('Once only'));
emitter.emit('once'); // 'Once only'
emitter.emit('once'); // (no output)`,
      note: "💡 Core pattern for Node.js EventEmitter and many libraries."
    },
    {
      question: "Implement a deep clone function that handles nested objects and arrays.",
      answer: "Deep clone recursively copies all levels, handling arrays, objects, dates, regex, and circular references.",
      solution: `function deepClone(obj, hash = new WeakMap()) {
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
      output: `const original = { a: 1, b: { c: 2 }, date: new Date() };
const cloned = deepClone(original);
cloned.b.c = 99;
console.log(original.b.c); // 2 (unchanged)`,
      note: "💡 structuredClone() is native, but deepClone() works in all environments."
    },
    {
      question: "Write a throttle function that limits execution to once per interval.",
      answer: "Throttle ensures function executes at most once per specified time interval. Useful for scroll events, game loops.",
      solution: `function throttle(func, limit) {
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
      output: `const throttledScroll = throttle(() => console.log('Scrolled'), 1000);
// Called at most once per second even on rapid scroll events`,
      note: "💡 Difference: throttle = at most once per interval, debounce = after pause."
    },
    {
      question: "Create a Promise.all() polyfill from scratch.",
      answer: "Promise.all takes array of promises, returns promise that resolves when all resolve or rejects if any rejects.",
      solution: `function promiseAll(promises) {
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
      output: `promiseAll([Promise.resolve(1), Promise.resolve(2)]) → Promise that resolves to [1, 2]
promiseAll([Promise.reject('error')]) → Promise that rejects with 'error'`,
      note: "💡 Order is preserved, empty array resolves to empty array."
    },
    {
      question: "Implement a curry function that converts f(a,b,c) to f(a)(b)(c).",
      answer: "Currying transforms function with multiple arguments into sequence of single-argument functions.",
      solution: `function curry(fn) {
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
      output: `const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6`,
      note: "💡 Useful for function composition and partial application."
    },
    {
      question: "Build a function that flattens a deeply nested array (any depth).",
      answer: "Use recursion or reduce to flatten array elements at any depth.",
      solution: `function flattenDeep(arr) {
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
      output: `flattenDeep([1, [2, [3, [4, 5]]]]) → [1, 2, 3, 4, 5]
flattenDeep([[1, 2], [3, [4, [5, 6]]]]) → [1, 2, 3, 4, 5, 6]`,
      note: "💡 Time complexity: O(n). Recursive version may cause stack overflow for huge depth."
    },
    {
      question: "Write a function that detects and removes circular references in an object.",
      answer: "Use WeakSet or Map to track visited objects during traversal.",
      solution: `function removeCircularReferences(obj, seen = new WeakSet()) {
  if(obj === null || typeof obj !== 'object') return obj;
  
  // Handle circular reference
  if(seen.has(obj)) {
    return '[Circular Reference]';
  }
  
  seen.add(obj);
  
  if(Array.isArray(obj)) {
    return obj.map(item => removeCircularReferences(item, seen));
  }
  
  const result = {};
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      result[key] = removeCircularReferences(obj[key], seen);
    }
  }
  
  return result;
}

// Detect if object has circular references
function hasCircularReference(obj, seen = new WeakSet()) {
  if(obj === null || typeof obj !== 'object') return false;
  
  if(seen.has(obj)) return true;
  seen.add(obj);
  
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      if(hasCircularReference(obj[key], seen)) return true;
    }
  }
  return false;
}`,
      output: `const obj = { a: 1 };
obj.self = obj; // Circular reference
const cleaned = removeCircularReferences(obj);
// cleaned = { a: 1, self: '[Circular Reference]' }`,
      note: "💡 JSON.stringify() throws error on circular references. This solves that."
    },
    {
      question: "Implement a simple Observable pattern (like RxJS).",
      answer: "Observable represents data stream. Subscribers receive next, error, and complete notifications.",
      solution: `class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }
  
  subscribe(observer) {
    const safeObserver = {
      next: observer.next?.bind(observer) || (() => {}),
      error: observer.error?.bind(observer) || (() => {}),
      complete: observer.complete?.bind(observer) || (() => {})
    };
    return this._subscribe(safeObserver);
  }
  
  map(transform) {
    return new Observable(observer => {
      return this.subscribe({
        next: (value) => observer.next(transform(value)),
        error: (err) => observer.error(err),
        complete: () => observer.complete()
      });
    });
  }
  
  filter(predicate) {
    return new Observable(observer => {
      return this.subscribe({
        next: (value) => {
          if(predicate(value)) observer.next(value);
        },
        error: (err) => observer.error(err),
        complete: () => observer.complete()
      });
    });
  }
  
  static fromEvent(element, eventType) {
    return new Observable(observer => {
      const handler = (event) => observer.next(event);
      element.addEventListener(eventType, handler);
      return {
        unsubscribe: () => element.removeEventListener(eventType, handler)
      };
    });
  }
  
  static of(...values) {
    return new Observable(observer => {
      values.forEach(value => observer.next(value));
      observer.complete();
      return { unsubscribe: () => {} };
    });
  }
}`,
      output: `Observable.of(1, 2, 3)
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .subscribe({ next: console.log }); // 4`,
      note: "💡 Core pattern for reactive programming libraries."
    },
    {
      question: "Create a function that groups array elements by a given property.",
      answer: "Use reduce to build object with keys as group values and arrays as grouped items.",
      solution: `function groupBy(arr, key) {
  return arr.reduce((grouped, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if(!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(item);
    return grouped;
  }, {});
}

// Type-safe version with Map
function groupByMap(arr, key) {
  const map = new Map();
  
  for(const item of arr) {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if(!map.has(groupKey)) {
      map.set(groupKey, []);
    }
    map.get(groupKey).push(item);
  }
  
  return map;
}`,
      output: `const users = [
  { name: 'John', city: 'NYC' },
  { name: 'Jane', city: 'LA' },
  { name: 'Bob', city: 'NYC' }
];
groupBy(users, 'city');
// { NYC: [{name:'John'}, {name:'Bob'}], LA: [{name:'Jane'}] }`,
      note: "💡 Time complexity: O(n). Useful for data aggregation."
    },
    {
      question: "Write a function that implements binary search on a sorted array.",
      answer: "Binary search divides array in half repeatedly until target is found or range exhausted.",
      solution: `function binarySearch(arr, target) {
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
      output: `binarySearch([1, 2, 3, 4, 5, 6, 7], 5) → 4
binarySearch([1, 2, 3, 4, 5], 10) → -1
binarySearchFirst([1, 2, 2, 2, 3], 2) → 1`,
      note: "💡 Time complexity: O(log n). Requires sorted array."
    },
    {
      question: "Build a LRU (Least Recently Used) cache implementation.",
      answer: "LRU cache evicts least recently used items when capacity is reached. Combine Map or Object with doubly linked list.",
      solution: `class LRUCache {
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
  
  // Get all keys in order (least to most recent)
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
      output: `const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)`,
      note: "💡 Map maintains insertion order, making it perfect for LRU."
    },
    {
      question: "Implement a function that returns unique elements from multiple arrays.",
      answer: "Combine arrays, use Set to get unique values, or merge with custom comparator.",
      solution: `function uniqueFromArrays(...arrays) {
  const combined = arrays.flat();
  return [...new Set(combined)];
}

// With custom equality (for objects)
function uniqueFromArraysDeep(...arrays) {
  const combined = arrays.flat();
  const seen = new Map();
  
  for(const item of combined) {
    const key = JSON.stringify(item);
    if(!seen.has(key)) {
      seen.set(key, item);
    }
  }
  
  return Array.from(seen.values());
}

// Preserve order of first occurrence
function uniqueFromArraysOrdered(...arrays) {
  const combined = arrays.flat();
  const result = [];
  const seen = new Set();
  
  for(const item of combined) {
    if(!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  
  return result;
}`,
      output: `uniqueFromArrays([1, 2], [2, 3], [3, 4]) → [1, 2, 3, 4]
uniqueFromArrays(['a', 'b'], ['b', 'c'], ['c', 'd']) → ['a', 'b', 'c', 'd']`,
      note: "💡 Set ensures uniqueness. JSON.stringify for object comparison."
    },
    {
      question: "Write a function that performs a deep comparison of two objects.",
      answer: "Recursively compare objects, arrays, and primitives. Check same number of keys and values.",
      solution: `function deepEqual(obj1, obj2) {
  // Same reference or both primitives
  if(obj1 === obj2) return true;
  
  // Handle null or not objects
  if(obj1 === null || obj2 === null) return false;
  if(typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  
  // Handle Arrays
  if(Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if(keys1.length !== keys2.length) return false;
  
  for(let key of keys1) {
    if(!keys2.includes(key)) return false;
    if(!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

// Version with Date and RegExp support
function deepEqualAdvanced(obj1, obj2) {
  if(obj1 === obj2) return true;
  
  if(obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  
  if(obj1 instanceof RegExp && obj2 instanceof RegExp) {
    return obj1.toString() === obj2.toString();
  }
  
  if(obj1 === null || obj2 === null) return false;
  if(typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if(keys1.length !== keys2.length) return false;
  
  for(let key of keys1) {
    if(!keys2.includes(key) || !deepEqualAdvanced(obj1[key], obj2[key])) {
      return false;
    }
  }
  
  return true;
}`,
      output: `deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }) → true
deepEqual({ a: 1 }, { a: 2 }) → false`,
      note: "💡 Used in testing frameworks and React.memo comparisons."
    },
    {
      question: "Create a function that finds all permutations of a string.",
      answer: "Use recursion/backtracking to generate all unique rearrangements of characters.",
      solution: `function permutations(str) {
  const result = [];
  
  function backtrack(current, remaining) {
    if(remaining.length === 0) {
      result.push(current);
      return;
    }
    
    const used = new Set();
    for(let i = 0; i < remaining.length; i++) {
      const char = remaining[i];
      if(used.has(char)) continue; // Skip duplicates
      used.add(char);
      
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      backtrack(current + char, newRemaining);
    }
  }
  
  backtrack('', str);
  return result;
}

// For array permutations
function arrayPermutations(arr) {
  const result = [];
  
  function backtrack(start) {
    if(start === arr.length) {
      result.push([...arr]);
      return;
    }
    
    const seen = new Set();
    for(let i = start; i < arr.length; i++) {
      if(seen.has(arr[i])) continue;
      seen.add(arr[i]);
      
      [arr[start], arr[i]] = [arr[i], arr[start]];
      backtrack(start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }
  
  backtrack(0);
  return result;
}`,
      output: `permutations('abc') → ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
permutations('aab') → ['aab', 'aba', 'baa'] (no duplicates)`,
      note: "💡 Time complexity: O(n!). Avoid for large strings."
    },
    {
      question: "Implement a promise-based delay function (sleep/delay).",
      answer: "Return Promise that resolves after specified milliseconds.",
      solution: `function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// With value resolution
function delayWithValue(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

// Async/await usage
async function example() {
  console.log('Start');
  await delay(2000);
  console.log('After 2 seconds');
}

// Reject after delay
function delayReject(ms, errorMessage) {
  return new Promise((_, reject) => 
    setTimeout(() => reject(new Error(errorMessage)), ms)
  );
}

// With progress reporting
function delayProgress(ms, onProgress) {
  return new Promise((resolve) => {
    const interval = ms / 10;
    let elapsed = 0;
    
    const timer = setInterval(() => {
      elapsed += interval;
      onProgress(Math.min(100, (elapsed / ms) * 100));
    }, interval);
    
    setTimeout(() => {
      clearInterval(timer);
      resolve();
    }, ms);
  });
}`,
      output: `await delay(1000); // Waits 1 second
const result = await delayWithValue(500, 'Done'); // 'Done' after 500ms`,
      note: "💡 Essential for testing async code and creating timeouts."
    },
    {
      question: "Write a function that implements retry logic for failed API calls.",
      answer: "Retry async function with exponential backoff and max retries.",
      solution: `async function retry(fn, maxRetries = 3, delay = 1000, backoff = 2) {
  let lastError;
  let currentDelay = delay;
  
  for(let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch(error) {
      lastError = error;
      
      if(i === maxRetries) {
        throw new Error(\`Failed after \${maxRetries} retries: \${error.message}\`);
      }
      
      console.log(\`Retry \${i + 1}/\${maxRetries} after \${currentDelay}ms\`);
      await new Promise(resolve => setTimeout(resolve, currentDelay));
      currentDelay *= backoff; // Exponential backoff
    }
  }
}

// With custom retry condition
async function retryWithCondition(fn, options = {}) {
  const {
    maxRetries = 3,
    initialDelay = 1000,
    backoff = 2,
    shouldRetry = (error) => true
  } = options;
  
  let lastError;
  let currentDelay = initialDelay;
  
  for(let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch(error) {
      lastError = error;
      
      if(!shouldRetry(error) || i === maxRetries) {
        throw error;
      }
      
      await new Promise(resolve => setTimeout(resolve, currentDelay));
      currentDelay *= backoff;
    }
  }
}

// Usage example
async function fetchWithRetry(url) {
  return retry(async () => {
    const response = await fetch(url);
    if(!response.ok) throw new Error(\`HTTP \${response.status}\`);
    return response.json();
  }, 3, 1000);
}`,
      output: `fetchWithRetry('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(err => console.error('Failed after retries:', err));`,
      note: "💡 Exponential backoff prevents overwhelming failing services."
    },
    {
      question: "Build a function that converts an object to a query string (for APIs).",
      answer: "Encode object key-value pairs into URL query string format.",
      solution: `function objectToQueryString(obj, prefix = '') {
  const params = [];
  
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      const value = obj[key];
      const fullKey = prefix ? \`\${prefix}[\${key}]\` : key;
      
      if(value !== null && typeof value === 'object' && !Array.isArray(value)) {
        // Nested object
        params.push(objectToQueryString(value, fullKey));
      } else if(Array.isArray(value)) {
        // Array
        value.forEach((item, index) => {
          if(typeof item === 'object' && item !== null) {
            params.push(objectToQueryString(item, \`\${fullKey}[\${index}]\`));
          } else {
            params.push(\`\${encodeURIComponent(fullKey)}[\${index}]=\${encodeURIComponent(item)}\`);
          }
        });
      } else {
        // Primitive
        params.push(\`\${encodeURIComponent(fullKey)}=\${encodeURIComponent(value)}\`);
      }
    }
  }
  
  return params.join('&');
}

// Simple version (no nested support)
function objectToQueryStringSimple(obj) {
  return Object.entries(obj)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if(Array.isArray(value)) {
        return value.map(v => \`\${encodeURIComponent(key)}=\${encodeURIComponent(v)}\`).join('&');
      }
      return \`\${encodeURIComponent(key)}=\${encodeURIComponent(value)}\`;
    })
    .join('&');
}

// Reverse: query string to object
function queryStringToObject(queryString) {
  const obj = {};
  const params = new URLSearchParams(queryString);
  
  for(let [key, value] of params) {
    if(obj[key]) {
      obj[key] = Array.isArray(obj[key]) ? [...obj[key], value] : [obj[key], value];
    } else {
      obj[key] = value;
    }
  }
  
  return obj;
}`,
      output: `objectToQueryString({ name: 'John', age: 30, tags: ['js', 'react'] })
// 'name=John&age=30&tags=js&tags=react'`,
      note: "💡 URLSearchParams is native but objectToQueryString gives more control."
    },
    {
      question: "Create a function that implements the debounce with immediate execution option.",
      answer: "Immediate debounce executes first call immediately, then ignores subsequent calls until delay passes.",
      solution: `function debounceImmediate(func, delay, immediate = false) {
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
}

// Lodash-style debounce (leading + trailing)
function debounceFull(func, delay, options = { leading: false, trailing: true }) {
  let timeoutId;
  let lastArgs;
  let lastThis;
  
  function invoke() {
    func.apply(lastThis, lastArgs);
    lastArgs = lastThis = null;
  }
  
  function trailingCall() {
    timeoutId = null;
    if(options.trailing && lastArgs) {
      invoke();
    }
  }
  
  return function(...args) {
    lastArgs = args;
    lastThis = this;
    
    if(timeoutId) {
      clearTimeout(timeoutId);
    } else if(options.leading) {
      invoke();
    }
    
    timeoutId = setTimeout(trailingCall, delay);
  };
}`,
      output: `const debounced = debounceImmediate(() => console.log('Called'), 1000, true);
// First call fires immediately, subsequent calls within 1 second are ignored`,
      note: "💡 Useful for button clicks (prevent double submission) and form validation."
    },
    {
      question: "Write a function that implements a simple pub/sub (publish-subscribe) system.",
      answer: "Pub/Sub pattern decouples publishers from subscribers using a central event bus.",
      solution: `class PubSub {
  constructor() {
    this.events = {};
  }
  
  subscribe(event, callback) {
    if(!this.events[event]) {
      this.events[event] = [];
    }
    
    const token = Symbol(event);
    this.events[event].push({ token, callback });
    return token;
  }
  
  publish(event, data) {
    if(!this.events[event]) return false;
    
    this.events[event].forEach(subscriber => {
      subscriber.callback(data);
    });
    return true;
  }
  
  unsubscribe(token) {
    for(let event in this.events) {
      const index = this.events[event].findIndex(sub => sub.token === token);
      if(index !== -1) {
        this.events[event].splice(index, 1);
        return true;
      }
    }
    return false;
  }
  
  unsubscribeAll(event) {
    if(event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
  }
  
  once(event, callback) {
    const token = this.subscribe(event, (data) => {
      callback(data);
      this.unsubscribe(token);
    });
    return token;
  }
}

// Singleton instance
const pubsub = new PubSub();`,
      output: `const token = pubsub.subscribe('userLogin', (user) => {
  console.log(\`User \${user.name} logged in\`);
});
pubsub.publish('userLogin', { name: 'John' }); // 'User John logged in'
pubsub.unsubscribe(token); // Remove subscription`,
      note: "💡 Core pattern for cross-component communication without tight coupling."
    },
    {
      question: "Implement a function that finds the longest substring without repeating characters.",
      answer: "Use sliding window with two pointers and Set/Map for tracking characters.",
      solution: `function longestSubstringWithoutRepeating(str) {
  if(str.length === 0) return '';
  
  let left = 0;
  let maxLength = 0;
  let start = 0;
  const seen = new Map();
  
  for(let right = 0; right < str.length; right++) {
    const char = str[right];
    
    if(seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1;
    }
    
    seen.set(char, right);
    
    const currentLength = right - left + 1;
    if(currentLength > maxLength) {
      maxLength = currentLength;
      start = left;
    }
  }
  
  return str.substring(start, start + maxLength);
}

// Get length only (faster)
function lengthOfLongestSubstring(str) {
  let left = 0;
  let maxLength = 0;
  const seen = new Set();
  
  for(let right = 0; right < str.length; right++) {
    while(seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }
    seen.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}`,
      output: `longestSubstringWithoutRepeating('abcabcbb') → 'abc' (length 3)
longestSubstringWithoutRepeating('bbbbb') → 'b' (length 1)
longestSubstringWithoutRepeating('pwwkew') → 'wke' (length 3)`,
      note: "💡 Time complexity: O(n). Sliding window technique."
    },
    {
      question: "Write a function that implements the two-sum problem (returns indices).",
      answer: "Use Map to store complement values and indices for O(n) solution.",
      solution: `function twoSum(nums, target) {
  const map = new Map();
  
  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if(map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return []; // No solution found
}

// Return all pairs
function twoSumAll(nums, target) {
  const map = new Map();
  const pairs = [];
  
  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if(map.has(complement)) {
      map.get(complement).forEach(index => {
        pairs.push([index, i]);
      });
    }
    
    if(!map.has(nums[i])) {
      map.set(nums[i], [i]);
    } else {
      map.get(nums[i]).push(i);
    }
  }
  
  return pairs;
}

// Two pointers (sorted array version)
function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while(left < right) {
    const sum = nums[left] + nums[right];
    if(sum === target) return [left, right];
    if(sum < target) left++;
    else right--;
  }
  
  return [];
}`,
      output: `twoSum([2, 7, 11, 15], 9) → [0, 1]
twoSum([3, 2, 4], 6) → [1, 2]
twoSum([3, 3], 6) → [0, 1]`,
      note: "💡 LeetCode #1. Map approach is O(n), two pointers requires sorted array."
    },
    {
      question: "Create a function that merges two sorted arrays into one sorted array.",
      answer: "Use two-pointer technique to merge sorted arrays in O(n+m) time.",
      solution: `function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;
  
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  // Add remaining elements
  while(i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  
  while(j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  
  return result;
}

// In-place merge (for merging into first array)
function mergeInPlace(arr1, m, arr2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  
  while(j >= 0) {
    if(i >= 0 && arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }
    k--;
  }
  
  return arr1;
}`,
      output: `mergeSortedArrays([1, 3, 5], [2, 4, 6]) → [1, 2, 3, 4, 5, 6]
mergeSortedArrays([1, 2, 3], [4, 5, 6]) → [1, 2, 3, 4, 5, 6]`,
      note: "💡 Time complexity: O(n+m). Used in merge sort algorithm."
    },
    {
      question: "Implement a function that formats a number as currency (e.g., 1234567 → '1,234,567').",
      answer: "Use Intl.NumberFormat or manual string manipulation with regex.",
      solution: `function formatCurrency(value, locale = 'en-US', currency = 'USD') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
}

// Manual formatting (thousands separator)
function formatNumberCommas(num) {
  return num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
}

// For decimal numbers
function formatCurrencyManual(num, decimalPlaces = 2) {
  const [integer, decimal] = num.toFixed(decimalPlaces).split('.');
  const formattedInteger = integer.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
  return decimal ? \`\${formattedInteger}.\${decimal}\` : formattedInteger;
}

// Indian numbering system (lakhs, crores)
function formatIndianCurrency(num) {
  const [integer, decimal] = num.toFixed(2).split('.');
  const lastThree = integer.slice(-3);
  const otherNumbers = integer.slice(0, -3);
  const formatted = otherNumbers.replace(/\\B(?=(\\d{2})+(?!\\d))/g, ',');
  const result = otherNumbers ? \`\${formatted},\${lastThree}\` : lastThree;
  return decimal ? \`₹\${result}.\${decimal}\` : \`₹\${result}\`;
}`,
      output: `formatCurrency(1234567.89) → '$1,234,567.89'
formatNumberCommas(1234567) → '1,234,567'
formatCurrencyManual(1234567.89) → '1,234,567.89'
formatIndianCurrency(1234567.89) → '₹12,34,567.89'`,
      note: "💡 Intl.NumberFormat is preferred for production (handles all locales)."
    }
  ]
};
// /data/python/questions.js

export const questions = [
  // ========== BASIC SYNTAX & VARIABLES (1-10) ==========
  {
    line: "name = 'Alice'; age = 25; print(f'{name} is {age} years old')",
    explanation: "Variables store data without type declaration. f-strings embed variables directly in strings using curly braces. Python is dynamically typed.",
    example: "city = 'New York'\npopulation = 8419000\nprint(f\"{city} has {population} people\")",
    output: "Alice is 25 years old"
  },
  {
    line: "type(variable)",
    explanation: "type() function returns the data type of a variable. Useful for debugging and type checking.",
    example: "print(type(42))\nprint(type('hello'))\nprint(type([1, 2, 3]))",
    output: "<class 'int'>\n<class 'str'>\n<class 'list'>"
  },
  {
    line: "isinstance(obj, Class)",
    explanation: "Checks if an object is an instance of a specific class or type. Returns True or False.",
    example: "isinstance(5, int) → True\nisinstance('hello', int) → False",
    output: "True\nFalse"
  },
  {
    line: "int('123'); float('3.14'); str(42)",
    explanation: "Type conversion (casting) functions convert between data types. int() to integer, float() to decimal, str() to string.",
    example: "num_str = '456'\nnum_int = int(num_str)\nnum_float = float(num_str)",
    output: "456 (integer)\n456.0 (float)\n'456' (string)"
  },
  {
    line: "input('Enter name: ')",
    explanation: "input() reads user input from keyboard. Always returns a string. Convert to other types using int() or float().",
    example: "name = input('What is your name? ')\nage = int(input('Enter age: '))",
    output: "Prompts user for input, returns entered text as string"
  },
  {
    line: "print('Hello', 'World', sep='-', end='!\\n')",
    explanation: "print() displays output. sep changes separator between items (default space). end changes line ending (default newline).",
    example: "print('A', 'B', 'C', sep='|', end='DONE')",
    output: "A|B|CDONE"
  },
  {
    line: "x, y = 10, 20; x, y = y, x",
    explanation: "Tuple unpacking allows multiple assignment. Swapping variables without temporary variable.",
    example: "a, b = 5, 10\na, b = b, a  # Swap",
    output: "After swap: a=10, b=5"
  },
  {
    line: "None",
    explanation: "None represents absence of value (like null in other languages). Used for optional values or uninitialized variables.",
    example: "result = None\nif result is None: print('No result yet')",
    output: "No result yet"
  },
  {
    line: "del variable",
    explanation: "del statement deletes a variable or removes an item from a list/dictionary.",
    example: "x = 10\ndel x\n# print(x) would raise NameError",
    output: "Variable removed from memory"
  },
  {
    line: "global variable",
    explanation: "global keyword allows modifying a global variable inside a function. Without it, assignment creates a local variable.",
    example: "count = 0\ndef increment():\n    global count\n    count += 1",
    output: "count incremented globally"
  },

  // ========== OPERATORS (11-15) ==========
  {
    line: "// (floor division) and % (modulus)",
    explanation: "// divides and rounds down to integer. % returns remainder after division.",
    example: "7 // 3 → 2\n7 % 3 → 1\n-7 // 3 → -3 (floor division rounds down)",
    output: "2\n1\n-3"
  },
  {
    line: "** (exponentiation)",
    explanation: "** operator raises a number to a power. Same as pow() function.",
    example: "2 ** 3 → 8\n5 ** 2 → 25\n10 ** 0 → 1",
    output: "8\n25\n1"
  },
  {
    line: "and, or, not (logical operators)",
    explanation: "and returns first False or last True, or returns first True or last False, not inverts boolean.",
    example: "True and False → False\nTrue or False → True\nnot True → False",
    output: "False\nTrue\nFalse"
  },
  {
    line: "in, not in (membership operators)",
    explanation: "in checks if value exists in sequence (list, string, tuple, dict). not in checks for absence.",
    example: "'apple' in ['apple', 'banana'] → True\n'x' not in 'hello' → True",
    output: "True\nTrue"
  },
  {
    line: "is, is not (identity operators)",
    explanation: "is compares object identity (memory location). == compares values. Use is for None and singleton checks.",
    example: "a = [1, 2]; b = [1, 2]\na is b → False\na == b → True\nNone is None → True",
    output: "False\nTrue\nTrue"
  },

  // ========== CONTROL FLOW (16-20) ==========
  {
    line: "if condition: ... elif condition: ... else: ...",
    explanation: "Conditional execution based on boolean conditions. elif checks additional conditions, else runs when all false.",
    example: "score = 85\nif score >= 90: grade = 'A'\nelif score >= 80: grade = 'B'\nelse: grade = 'C'",
    output: "grade = 'B'"
  },
  {
    line: "ternary operator: value_if_true if condition else value_if_false",
    explanation: "One-line conditional expression for simple if-else. Cannot contain elif.",
    example: "age = 20\nstatus = 'Adult' if age >= 18 else 'Minor'",
    output: "status = 'Adult'"
  },
  {
    line: "for item in iterable: ...",
    explanation: "For loop iterates over sequences (list, string, range, dict). Executes body for each item.",
    example: "fruits = ['apple', 'banana']\nfor fruit in fruits:\n    print(fruit)",
    output: "apple\nbanana"
  },
  {
    line: "range(start, stop, step)",
    explanation: "Generates sequence of numbers. start (default 0), stop (exclusive), step (default 1). Memory efficient.",
    example: "list(range(5)) → [0,1,2,3,4]\nlist(range(2,10,2)) → [2,4,6,8]",
    output: "[0, 1, 2, 3, 4]\n[2, 4, 6, 8]"
  },
  {
    line: "while condition: ...",
    explanation: "While loop repeats as long as condition is True. Must ensure condition eventually becomes False.",
    example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1",
    output: "0\n1\n2\n3\n4"
  },

  // ========== BREAK/CONTINUE/ELSE (21-23) ==========
  {
    line: "break",
    explanation: "break exits the nearest enclosing loop immediately. Used to stop loop when condition is met.",
    example: "for i in range(10):\n    if i == 5:\n        break\n    print(i)",
    output: "0\n1\n2\n3\n4"
  },
  {
    line: "continue",
    explanation: "continue skips the rest of current iteration and moves to next loop iteration.",
    example: "for i in range(5):\n    if i % 2 == 0:\n        continue\n    print(i)",
    output: "1\n3"
  },
  {
    line: "else with loops",
    explanation: "else clause executes only if loop completes normally (without break). Useful for search patterns.",
    example: "for i in range(5):\n    if i == 10:\n        break\nelse:\n    print('No break occurred')",
    output: "No break occurred"
  },

  // ========== FUNCTIONS (24-28) ==========
  {
    line: "def func(param1, param2=default): ... return value",
    explanation: "def defines function. Parameters can have default values. return sends value back (None if no return).",
    example: "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'",
    output: "greet('Alice') → 'Hello, Alice!'\ngreet('Bob', 'Hi') → 'Hi, Bob!'"
  },
  {
    line: "*args and **kwargs",
    explanation: "*args collects extra positional arguments as tuple. **kwargs collects keyword arguments as dictionary.",
    example: "def func(*args, **kwargs):\n    print(args, kwargs)\nfunc(1,2,3, name='Alice')",
    output: "(1, 2, 3) {'name': 'Alice'}"
  },
  {
    line: "lambda x: expression",
    explanation: "Anonymous one-line function. Cannot contain statements or multiple expressions. Used with map, filter, sort.",
    example: "square = lambda x: x ** 2\nlist(map(lambda x: x*2, [1,2,3]))",
    output: "[2, 4, 6]"
  },
  {
    line: "return multiple values",
    explanation: "Function can return multiple values as tuple. Unpack using tuple assignment.",
    example: "def min_max(arr):\n    return min(arr), max(arr)\nminimum, maximum = min_max([1,5,3])",
    output: "minimum=1, maximum=5"
  },
  {
    line: "docstring (function documentation)",
    explanation: "Triple-quoted string immediately after function definition. Access with help() or .__doc__.",
    example: "def add(a, b):\n    '''Return sum of a and b'''\n    return a + b\nprint(add.__doc__)",
    output: "Return sum of a and b"
  },

  // ========== LISTS & TUPLES (29-33) ==========
  {
    line: "list comprehension: [expr for item in iterable if condition]",
    explanation: "Concise way to create lists. More readable and faster than for loops for simple transformations.",
    example: "squares = [x**2 for x in range(10)]\nevens = [x for x in range(20) if x % 2 == 0]",
    output: "[0,1,4,9,16,25,36,49,64,81]\n[0,2,4,6,8,10,12,14,16,18]"
  },
  {
    line: "list slicing: [start:stop:step]",
    explanation: "Extracts sublist from list. start inclusive, stop exclusive. Negative indices count from end.",
    example: "nums = [0,1,2,3,4,5]\nnums[2:5] → [2,3,4]\nnums[::-1] → [5,4,3,2,1,0]",
    output: "[2, 3, 4]\n[5, 4, 3, 2, 1, 0]"
  },
  {
    line: "list methods: append(), extend(), insert(), remove(), pop()",
    explanation: "append() adds to end, extend() adds multiple, insert() at index, remove() by value, pop() removes and returns.",
    example: "fruits = ['apple']\nfruits.append('banana')\nfruits.extend(['orange', 'grape'])",
    output: "['apple', 'banana', 'orange', 'grape']"
  },
  {
    line: "tuple unpacking",
    explanation: "Assign tuple elements to variables. Number of variables must match tuple length.",
    example: "point = (10, 20)\nx, y = point\nprint(f'x={x}, y={y}')",
    output: "x=10, y=20"
  },
  {
    line: "enumerate(iterable, start=0)",
    explanation: "Returns index-value pairs for iterable. Useful when need both index and value in loop.",
    example: "fruits = ['apple', 'banana']\nfor i, fruit in enumerate(fruits, 1):\n    print(f'{i}: {fruit}')",
    output: "1: apple\n2: banana"
  },

  // ========== DICTIONARIES & SETS (34-38) ==========
  {
    line: "dict comprehension: {key_expr: value_expr for item in iterable}",
    explanation: "Creates dictionary from iterable. Keys must be unique and immutable.",
    example: "squares = {x: x**2 for x in range(5)}",
    output: "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    line: "dict methods: get(), keys(), values(), items()",
    explanation: "get() returns default if key missing. keys() returns view of keys, values() of values, items() of (key,value) pairs.",
    example: "d = {'a': 1, 'b': 2}\nd.get('c', 0) → 0\nfor k, v in d.items():\n    print(k, v)",
    output: "0\na 1\nb 2"
  },
  {
    line: "set comprehension: {expr for item in iterable if condition}",
    explanation: "Creates set (unique, unordered). Automatically removes duplicates.",
    example: "unique_squares = {x**2 for x in [1,2,2,3,3]}",
    output: "{1, 4, 9}"
  },
  {
    line: "set operations: union(|), intersection(&), difference(-), symmetric diff(^)",
    explanation: "Union combines sets, intersection finds common, difference in first not second, symmetric in either not both.",
    example: "A = {1,2,3}; B = {3,4,5}\nA | B → {1,2,3,4,5}\nA & B → {3}\nA - B → {1,2}",
    output: "{1,2,3,4,5}\n{3}\n{1,2}"
  },
  {
    line: "zip(*iterables)",
    explanation: "Aggregates elements from multiple iterables into tuples. Stops at shortest iterable.",
    example: "names = ['Alice', 'Bob']\nages = [25, 30]\nlist(zip(names, ages)) → [('Alice',25), ('Bob',30)]",
    output: "[('Alice', 25), ('Bob', 30)]"
  },

  // ========== STRINGS (39-42) ==========
  {
    line: "string methods: upper(), lower(), strip(), split(), join()",
    explanation: "upper() uppercase, lower() lowercase, strip() removes whitespace, split() breaks into list, join() combines list.",
    example: "text = '  Hello World  '\ntext.strip() → 'Hello World'\ntext.split() → ['Hello', 'World']",
    output: "'Hello World'\n['Hello', 'World']"
  },
  {
    line: "f-strings: f'{variable:format}'",
    explanation: "Formatted string literals. Embed variables and expressions. Supports formatting like .2f for decimals.",
    example: "pi = 3.14159\nprint(f'Pi: {pi:.2f}')\nprint(f'Percent: {0.25:.1%}')",
    output: "Pi: 3.14\nPercent: 25.0%"
  },
  {
    line: "str.join(iterable)",
    explanation: "Joins iterable elements into string using separator. More efficient than + for multiple strings.",
    example: "words = ['Hello', 'World']\n'-'.join(words) → 'Hello-World'\n''.join(['a','b','c']) → 'abc'",
    output: "'Hello-World'\n'abc'"
  },
  {
    line: "string slicing [start:stop:step]",
    explanation: "Extracts substring. start inclusive, stop exclusive. Negative step reverses.",
    example: "text = 'Python'\ntext[0:3] → 'Pyt'\ntext[::-1] → 'nohtyP'",
    output: "'Pyt'\n'nohtyP'"
  },

  // ========== EXCEPTIONS & FILE HANDLING (43-46) ==========
  {
    line: "try: ... except Exception as e: ... else: ... finally: ...",
    explanation: "try block contains risky code. except handles specific errors. else runs if no error. finally always runs.",
    example: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')",
    output: "Cannot divide by zero"
  },
  {
    line: "raise Exception('message')",
    explanation: "Manually raises exception. Can create custom exception classes inheriting from Exception.",
    example: "def validate_age(age):\n    if age < 0:\n        raise ValueError('Age cannot be negative')",
    output: "ValueError: Age cannot be negative"
  },
  {
    line: "with open('file.txt', 'r') as f:",
    explanation: "Context manager automatically closes file after block. Modes: 'r'(read), 'w'(write), 'a'(append), 'rb'(binary).",
    example: "with open('data.txt', 'w') as f:\n    f.write('Hello')",
    output: "File automatically closed even if error occurs"
  },
  {
    line: "f.read(), f.readline(), f.readlines()",
    explanation: "read() reads entire file, readline() reads one line, readlines() returns list of lines.",
    example: "with open('file.txt') as f:\n    content = f.read()\n    lines = f.readlines()",
    output: "Entire file content as string, or list of lines"
  },

  // ========== ADVANCED FEATURES (47-50) ==========
  {
    line: "@decorator",
    explanation: "Decorator modifies function behavior without changing source code. Applied with @ syntax.",
    example: "@timer\ndef slow_function():\n    time.sleep(1)\n# timer decorator adds execution time logging",
    output: "Function wrapped with additional functionality"
  },
  {
    line: "yield (generator)",
    explanation: "Generator produces values lazily using yield. More memory efficient than returning list.",
    example: "def count_up_to(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1",
    output: "Values produced one at a time when iterated"
  },
  {
    line: "map(function, iterable)",
    explanation: "Applies function to every element of iterable. Returns iterator (lazy).",
    example: "numbers = [1, 2, 3]\nsquared = list(map(lambda x: x**2, numbers))",
    output: "[1, 4, 9]"
  },
  {
    line: "filter(function, iterable)",
    explanation: "Keeps elements where function returns True. Returns iterator.",
    example: "numbers = [1, 2, 3, 4, 5]\nevens = list(filter(lambda x: x % 2 == 0, numbers))",
    output: "[2, 4]"
  },
  {
    line: "if __name__ == '__main__':",
    explanation: "Runs code only when script executed directly (not imported as module). Used for testing.",
    example: "if __name__ == '__main__':\n    print('This runs only when script is main program')",
    output: "Code executes only when file is run directly, not when imported"
  },
  {
    line: "assert condition, 'message'",
    explanation: "Assertion for debugging. Raises AssertionError if condition is False. Can be disabled with -O flag.",
    example: "def divide(a, b):\n    assert b != 0, 'Cannot divide by zero'\n    return a / b",
    output: "AssertionError: Cannot divide by zero if b == 0"
  }
];

export default questions;
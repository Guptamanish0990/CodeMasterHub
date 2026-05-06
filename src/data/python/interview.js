// /data/python/interview.js

export const interview = {
  fresher: [
    // ========== BASICS (1-10) ==========
    {
      question: "What is Python and what are its key features?",
      answer: "Python is a high-level, interpreted, object-oriented programming language created by Guido van Rossum in 1991. Key features include: dynamic typing, automatic memory management, simple readable syntax, interpreted execution, extensive standard library, cross-platform compatibility, open-source, and support for multiple programming paradigms.",
      example: "# Python features demo\nname = 'Python'  # dynamic typing\nprint(f\"Hello, {name}!\")  # readable syntax\nprint(type(name))  # <class 'str'>",
      output: "Hello, Python!\n<class 'str'>",
      note: "Python emphasizes code readability and programmer productivity"
    },
    {
      question: "What is the difference between list and tuple?",
      answer: "Lists are mutable (can be changed) while tuples are immutable (cannot be changed after creation). Lists use square brackets [], tuples use parentheses (). Lists are slower and use more memory; tuples are faster and memory efficient. Tuples can be used as dictionary keys, lists cannot.",
      example: "# List - mutable\nmy_list = [1, 2, 3]\nmy_list[0] = 99\nmy_list.append(4)\nprint(f\"List: {my_list}\")\n\n# Tuple - immutable\nmy_tuple = (1, 2, 3)\nprint(f\"Tuple: {my_tuple}\")\n# my_tuple[0] = 99  # TypeError!",
      output: "List: [99, 2, 3, 4]\nTuple: (1, 2, 3)",
      note: "Use tuples for fixed data, lists for dynamic collections"
    },
    {
      question: "What are Python's built-in data types?",
      answer: "Python's built-in data types include: Numeric (int, float, complex), Text (str), Boolean (bool), Sequence (list, tuple, range), Mapping (dict), Set (set, frozenset), Binary (bytes, bytearray, memoryview), and NoneType.",
      example: "# Numeric Types\nx = 42          # int\ny = 3.14        # float\nz = 3 + 4j      # complex\n\n# Text Type\ntext = \"Hello\"  # str\n\n# Boolean\nflag = True     # bool\n\n# Collections\nmy_list = [1, 2, 3]          # list\nmy_tuple = (1, 2, 3)         # tuple\nmy_dict = {\"name\": \"Alice\"}   # dict\nmy_set = {1, 2, 3}           # set\n\nprint(f\"Types: {type(x)}, {type(text)}, {type(my_list)}\")",
      output: "Types: <class 'int'>, <class 'str'>, <class 'list'>",
      note: "Python is dynamically typed - types are determined at runtime"
    },
    {
      question: "Explain the difference between deep copy and shallow copy.",
      answer: "Shallow copy creates new object but inserts references to original nested objects. Deep copy recursively copies all nested objects completely. Changes to nested objects in shallow copy affect original; deep copy creates independent copy. Use copy module: copy.copy() for shallow, copy.deepcopy() for deep.",
      example: "import copy\n\noriginal = [[1, 2], [3, 4]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\n\nshallow[0][0] = 99\nprint(f\"Original after shallow: {original}\")\nprint(f\"Shallow copy: {shallow}\")\n\ndeep[0][0] = 99\nprint(f\"Original after deep: {original}\")",
      output: "Original after shallow: [[99, 2], [3, 4]]\nShallow copy: [[99, 2], [3, 4]]\nOriginal after deep: [[99, 2], [3, 4]]",
      note: "Use deepcopy for independent copies of nested structures"
    },
    {
      question: "What is PEP 8 and why is it important?",
      answer: "PEP 8 is Python's style guide that provides coding conventions for readable and consistent Python code. It covers indentation (4 spaces), line length (79 characters), naming conventions (snake_case for variables/functions, CamelCase for classes), imports, whitespace, comments, and docstrings.",
      example: "# Good PEP 8 style\ndef calculate_area(length, width):\n    \"\"\"Calculate rectangle area.\"\"\"\n    area = length * width\n    return area\n\n# Bad style (avoid)\ndef CALCULATE_AREA(l,w):\n    area=l*w\n    return area\n\nprint(f\"Area: {calculate_area(5, 3)}\")",
      output: "Area: 15",
      note: "Use linters like flake8, pylint, or black to enforce PEP 8"
    },
    {
      question: "How does memory management work in Python?",
      answer: "Python uses automatic memory management with reference counting and garbage collection. Each object has reference count; when zero, memory freed immediately. Cyclic references handled by generational garbage collector (gc module). Memory allocated from private heap. Use sys.getrefcount() to check references.",
      example: "import sys\nimport gc\n\n# Reference counting\nx = [1, 2, 3]\nprint(f\"Ref count: {sys.getrefcount(x)}\")\ny = x\nprint(f\"After y=x: {sys.getrefcount(x)}\")\ndel y\nprint(f\"After del y: {sys.getrefcount(x)}\")\n\n# Memory size\nprint(f\"Empty list size: {sys.getsizeof([])} bytes\")\n\n# Force garbage collection\nprint(f\"Garbage collected: {gc.collect()}\")",
      output: "Ref count: 2\nAfter y=x: 3\nAfter del y: 2\nEmpty list size: 56 bytes\nGarbage collected: 0",
      note: "Use `del` to remove references and help garbage collection"
    },
    {
      question: "What are decorators in Python?",
      answer: "Decorators are functions that modify or enhance other functions without changing their source code. They wrap a function with additional functionality using @decorator syntax. Common uses: logging, timing, authentication, caching, access control, rate limiting.",
      example: "def timer(func):\n    import time\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f\"{func.__name__} took {end-start:.2f}s\")\n        return result\n    return wrapper\n\n@timer\ndef long_operation():\n    import time\n    time.sleep(1)\n    return \"Done\"\n\nresult = long_operation()\nprint(result)",
      output: "long_operation took 1.00s\nDone",
      note: "Use functools.wraps to preserve function metadata"
    },
    {
      question: "What are list comprehensions? Give an example.",
      answer: "List comprehensions provide concise way to create lists by applying expression to each item in iterable, optionally with filter condition. Syntax: [expression for item in iterable if condition]. More readable and faster than traditional for loops.",
      example: "# Traditional loop\nsquares1 = []\nfor i in range(10):\n    squares1.append(i**2)\n\n# List comprehension (better)\nsquares2 = [i**2 for i in range(10)]\n\n# With condition\nevens = [i for i in range(20) if i % 2 == 0]\n\n# Nested comprehension\nmatrix = [[j for j in range(3)] for i in range(3)]\n\nprint(f\"Squares: {squares2[:5]}\")\nprint(f\"First 5 evens: {evens[:5]}\")\nprint(f\"Matrix: {matrix}\")",
      output: "Squares: [0, 1, 4, 9, 16]\nFirst 5 evens: [0, 2, 4, 6, 8]\nMatrix: [[0, 1, 2], [0, 1, 2], [0, 1, 2]]",
      note: "Use list comprehensions for simple transformations, loops for complex logic"
    },
    {
      question: "Explain the difference between `is` and `==` in Python.",
      answer: "`==` compares values (equality) - checks if objects have same content. `is` compares identity - checks if two variables reference same object in memory. Use `==` for value comparison, `is` for comparing with None, True, False, or checking object identity.",
      example: "a = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\nprint(f\"a == b: {a == b}\")  # True (same values)\nprint(f\"a is b: {a is b}\")  # False (different objects)\nprint(f\"a is c: {a is c}\")  # True (same object)\n\n# Best practice for None checking\nx = None\nif x is None:\n    print(\"x is None\")",
      output: "a == b: True\na is b: False\na is c: True\nx is None",
      note: "Use `is` for singleton comparison (None, True, False)"
    },
    {
      question: "What is the Global Interpreter Lock (GIL)?",
      answer: "GIL is mutex that allows only one thread to execute Python bytecode at a time. It protects memory management but limits CPU-bound multithreading performance. I/O-bound tasks still benefit from threading. For CPU-bound parallelism, use multiprocessing module or C extensions that release GIL.",
      example: "import threading\nimport time\n\ndef cpu_intensive():\n    count = 0\n    for i in range(10000000):\n        count += i\n    return count\n\n# GIL causes threads to run sequentially for CPU tasks\nstart = time.time()\nfor _ in range(2):\n    cpu_intensive()\nprint(f\"Sequential time: {time.time()-start:.2f}s\")",
      output: "Sequential time: 1.50s",
      note: "Use multiprocessing to bypass GIL for CPU-bound tasks"
    },

    // ========== FUNCTIONS (11-20) ==========
    {
      question: "What are *args and **kwargs?",
      answer: "*args allows passing variable number of positional arguments (becomes tuple). **kwargs allows variable number of keyword arguments (becomes dictionary). They provide flexibility in function definitions, useful for decorators, wrapper functions, and function overloading.",
      example: "def flexible_function(*args, **kwargs):\n    print(f\"Positional args: {args}\")\n    print(f\"Keyword args: {kwargs}\")\n    print(f\"Sum of args: {sum(args)}\")\n    \n    for key, value in kwargs.items():\n        print(f\"{key}: {value}\")\n\nflexible_function(1, 2, 3, name=\"Alice\", age=25)\n\n# Unpacking\ndef add(a, b, c):\n    return a + b + c\n\nnumbers = [1, 2, 3]\nprint(f\"Unpacked sum: {add(*numbers)}\")",
      output: "Positional args: (1, 2, 3)\nKeyword args: {'name': 'Alice', 'age': 25}\nSum of args: 6\nname: Alice\nage: 25\nUnpacked sum: 6",
      note: "Names `args` and `kwargs` are convention, `*` and `**` are syntax"
    },
    {
      question: "How do you handle exceptions in Python?",
      answer: "Use try-except blocks to handle exceptions gracefully. try contains code that might raise exception, except handles specific exceptions, else runs if no exception, finally always runs. Use specific exception types, avoid bare except. Raise exceptions with raise keyword.",
      example: "try:\n    num = int(input(\"Enter number: \"))\n    result = 100 / num\n    print(f\"Result: {result}\")\nexcept ValueError:\n    print(\"Invalid number!\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nexcept Exception as e:\n    print(f\"Unexpected: {e}\")\nelse:\n    print(\"Success!\")\nfinally:\n    print(\"Cleanup - always runs\")\n\n# Raising exceptions\n# if num < 0:\n#     raise ValueError(\"Number cannot be negative\")",
      output: "Enter number: 0\nCannot divide by zero!\nCleanup - always runs",
      note: "Be specific with exception types, avoid bare except clauses"
    },
    {
      question: "What is a lambda function?",
      answer: "Lambda functions are anonymous, one-line functions defined using `lambda` keyword. They can take any number of arguments but contain only single expression (no statements). Useful for short, throwaway functions with map, filter, sort, and where function objects needed.",
      example: "# Lambda syntax\nsquare = lambda x: x ** 2\nadd = lambda a, b: a + b\n\nprint(f\"Square: {square(5)}\")\nprint(f\"Add: {add(3, 5)}\")\n\n# Use with sorted\nstudents = [(\"Alice\", 25), (\"Bob\", 20), (\"Charlie\", 23)]\nstudents.sort(key=lambda x: x[1])\nprint(f\"Sorted by age: {students}\")\n\n# Use with map\nnumbers = [1, 2, 3, 4]\nsquared = list(map(lambda x: x**2, numbers))\nprint(f\"Squared: {squared}\")\n\n# Use with filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(f\"Evens: {evens}\")",
      output: "Square: 25\nAdd: 8\nSorted by age: [('Bob', 20), ('Charlie', 23), ('Alice', 25)]\nSquared: [1, 4, 9, 16]\nEvens: [2, 4]",
      note: "Lambdas limited to single expression; use def for complex logic"
    },
    {
      question: "Explain the difference between `range()` and `xrange()` in Python.",
      answer: "In Python 2, range() created list (eager), xrange() returned generator (lazy). In Python 3, range() works like xrange() - returns immutable sequence that generates values on demand, saving memory. Python 3's range() supports slicing and membership testing efficiently.",
      example: "# Python 3 (range is lazy)\nr = range(1000000)\nprint(f\"Type: {type(r)}\")\nprint(f\"Size: {r.__sizeof__()} bytes\")\nprint(f\"First: {r[0]}, Last: {r[-1]}\")\nprint(f\"500000 in range: {500000 in r}\")\n\n# Memory comparison\nprint(f\"range(1000): {range(1000).__sizeof__()} bytes\")\nprint(f\"list(1000): {list(range(1000)).__sizeof__()} bytes\")",
      output: "Type: <class 'range'>\nSize: 48 bytes\nFirst: 0, Last: 999999\n500000 in range: True\nrange(1000): 48 bytes\nlist(1000): 8000 bytes",
      note: "Always use range() in Python 3; forget about xrange()"
    },
    {
      question: "What are Python's magic methods (dunder methods)?",
      answer: "Magic methods (__method__) are special methods that define behavior for built-in operations. They enable operator overloading and customize class behavior. Common: __init__ (constructor), __str__ (string rep), __repr__ (debug rep), __len__ (length), __add__ (+), __getitem__ ([]), __call__ (callable).",
      example: "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f\"Vector({self.x}, {self.y})\"\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __len__(self):\n        return int((self.x**2 + self.y**2)**0.5)\n\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\nprint(v1)  # __str__\nprint(v1 + v2)  # __add__\nprint(f\"Length: {len(v1)}\")  # __len__",
      output: "Vector(3, 4)\nVector(4, 6)\nLength: 5",
      note: "Magic methods provide Pythonic operator overloading"
    },
    {
      question: "What is pickling in Python?",
      answer: "Pickling is Python's serialization process that converts Python objects into byte streams for storage or transmission. Unpickling reconstructs original objects. Use pickle module. Useful for saving program state, caching, inter-process communication. Not secure against malicious data.",
      example: "import pickle\n\n# Pickling (serialize)\ndata = {\"name\": \"Alice\", \"age\": 25, \"scores\": [95, 87, 92]}\npickled_str = pickle.dumps(data)\nprint(f\"Pickled length: {len(pickled_str)} bytes\")\n\n# Unpickling (deserialize)\nunpickled = pickle.loads(pickled_str)\nprint(f\"Unpickled: {unpickled}\")\n\n# File operations\nwith open(\"data.pkl\", \"wb\") as f:\n    pickle.dump(data, f)\n\nwith open(\"data.pkl\", \"rb\") as f:\n    loaded = pickle.load(f)\n    print(f\"Loaded: {loaded['name']}\")",
      output: "Pickled length: 78 bytes\nUnpickled: {'name': 'Alice', 'age': 25, 'scores': [95, 87, 92]}\nLoaded: Alice",
      note: "Pickle is Python-specific; use JSON for cross-language compatibility"
    },
    {
      question: "How do you create and use virtual environments?",
      answer: "Virtual environments isolate project dependencies. Use venv (built-in) or virtualenv. Commands: `python -m venv env_name` creates, `source env/bin/activate` (Linux/Mac) or `env\\Scripts\\activate` (Windows) activates, `deactivate` deactivates. Use pip freeze for requirements.",
      example: "# Create virtual environment\n# python -m venv myenv\n\n# Activate (Windows)\n# myenv\\Scripts\\activate\n\n# Activate (Linux/Mac)\n# source myenv/bin/activate\n\n# Install packages\n# pip install requests pandas\n\n# List installed packages\n# pip list\n\n# Export requirements\n# pip freeze > requirements.txt\n\n# Install from requirements\n# pip install -r requirements.txt\n\n# Deactivate\n# deactivate",
      output: "(myenv) C:\\project> pip list\nPackage    Version\nrequests   2.31.0\npandas     2.0.3",
      note: "Always use virtual environments for project isolation"
    },
    {
      question: "What are Python decorators used for? Give real-world example.",
      answer: "Decorators modify function behavior without changing code. Real-world uses: timing functions, logging, authentication, rate limiting, caching (memoization), input validation, retry logic, route registration (Flask), permission checking, and transaction management.",
      example: "import time\nfrom functools import wraps\n\n# Retry decorator\ndef retry(max_attempts=3, delay=1):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(max_attempts):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_attempts - 1:\n                        raise\n                    print(f\"Attempt {attempt+1} failed: {e}\")\n                    time.sleep(delay)\n            return None\n        return wrapper\n    return decorator\n\n# Cache decorator\ncache = {}\ndef cached(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        key = (func.__name__, args, tuple(sorted(kwargs.items())))\n        if key not in cache:\n            cache[key] = func(*args, **kwargs)\n        return cache[key]\n    return wrapper\n\n@retry(max_attempts=3, delay=0.5)\ndef unstable_call():\n    import random\n    if random.random() < 0.7:\n        raise ConnectionError(\"Network error\")\n    return \"Success\"\n\nresult = unstable_call()\nprint(result)",
      output: "Attempt 1 failed: Network error\nAttempt 2 failed: Network error\nSuccess",
      note: "Use functools.wraps to preserve function metadata"
    },
    {
      question: "Explain the difference between `__str__` and `__repr__`.",
      answer: "__str__ returns readable string for end users (used by print() and str()). __repr__ returns unambiguous string for developers (used by repr() and debugging). __repr__ should ideally recreate object when eval() used. If only one defined, __repr__ used as fallback for __str__.",
      example: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def __str__(self):\n        return f\"Person: {self.name} ({self.age})\"\n    \n    def __repr__(self):\n        return f\"Person('{self.name}', {self.age})\"\n\np = Person(\"Alice\", 25)\nprint(p)           # __str__\nprint(repr(p))     # __repr__\nprint(str(p))      # __str__\nprint(f\"{p!r}\")    # Force __repr__\n\n# Without __str__, falls back to __repr__\nclass Simple:\n    def __repr__(self):\n        return \"Simple()\"\n\ns = Simple()\nprint(s)  # Uses __repr__",
      output: "Person: Alice (25)\nPerson('Alice', 25)\nPerson: Alice (25)\nPerson('Alice', 25)\nSimple()",
      note: "Always define __repr__, __str__ is optional for user-friendly output"
    },
    {
      question: "What is the difference between `@staticmethod` and `@classmethod`?",
      answer: "@staticmethod is like regular function inside class - no implicit first parameter. @classmethod receives class as first parameter (cls) and can access/modify class state. @classmethod can be used as alternative constructors. @staticmethod is for utility functions related to class.",
      example: "class Date:\n    def __init__(self, year, month, day):\n        self.year = year\n        self.month = month\n        self.day = day\n    \n    @classmethod\n    def from_string(cls, date_string):\n        \"\"\"Alternative constructor\"\"\"\n        year, month, day = map(int, date_string.split('-'))\n        return cls(year, month, day)\n    \n    @classmethod\n    def get_class_name(cls):\n        return cls.__name__\n    \n    @staticmethod\n    def is_valid_date(year, month, day):\n        \"\"\"Utility - doesn't need class\"\"\"\n        if month < 1 or month > 12:\n            return False\n        if day < 1 or day > 31:\n            return False\n        return True\n\ndate = Date.from_string(\"2024-01-15\")\nprint(f\"Date: {date.year}-{date.month:02d}-{date.day:02d}\")\nprint(f\"Class name: {Date.get_class_name()}\")\nprint(f\"Is valid? {Date.is_valid_date(2024, 13, 45)}\")",
      output: "Date: 2024-01-15\nClass name: Date\nIs valid? False",
      note: "Use @classmethod for factories, @staticmethod for utilities"
    },

    // ========== FILE & EXCEPTION HANDLING (21-30) ==========
    {
      question: "How do you read and write files in Python?",
      answer: "Use open() function with modes: 'r' (read), 'w' (write), 'a' (append), 'r+' (read/write), 'b' (binary). Use with statement for automatic file closing. Methods: read(), readline(), readlines(), write(), writelines(). Always handle file not found errors.",
      example: "# Writing to file\nwith open(\"sample.txt\", \"w\") as f:\n    f.write(\"Hello World\\n\")\n    f.writelines([\"Line 2\\n\", \"Line 3\\n\"])\n\n# Reading entire file\nwith open(\"sample.txt\", \"r\") as f:\n    content = f.read()\n    print(f\"Full content:\\n{content}\")\n\n# Reading line by line\nwith open(\"sample.txt\", \"r\") as f:\n    for line in f:\n        print(f\"Line: {line.strip()}\")\n\n# Append to file\nwith open(\"sample.txt\", \"a\") as f:\n    f.write(\"Appended line\\n\")\n\n# Binary files\nwith open(\"image.jpg\", \"rb\") as f:\n    binary_data = f.read(1024)  # Read 1KB chunks",
      output: "Full content:\nHello World\nLine 2\nLine 3\n\nLine: Hello World\nLine: Line 2\nLine: Line 3",
      note: "Always use with statement for automatic resource cleanup"
    },
    {
      question: "What is the difference between `read()`, `readline()`, and `readlines()`?",
      answer: "read(size) reads entire file or specified bytes. readline() reads one line including newline, returns empty string at EOF. readlines() reads all lines into list. For large files, iterate directly over file object to avoid memory issues.",
      example: "with open(\"sample.txt\", \"w\") as f:\n    f.write(\"Line 1\\nLine 2\\nLine 3\\n\")\n\nwith open(\"sample.txt\", \"r\") as f:\n    print(f\"read(): {repr(f.read())}\")\n\nwith open(\"sample.txt\", \"r\") as f:\n    print(f\"readline(): {repr(f.readline())}\")\n    print(f\"next: {repr(f.readline())}\")\n\nwith open(\"sample.txt\", \"r\") as f:\n    print(f\"readlines(): {f.readlines()}\")\n\n# Memory efficient iteration\nwith open(\"sample.txt\", \"r\") as f:\n    for line in f:\n        print(f\"Iter: {line.strip()}\")",
      output: "read(): 'Line 1\\nLine 2\\nLine 3\\n'\nreadline(): 'Line 1\\n'\nnext: 'Line 2\\n'\nreadlines(): ['Line 1\\n', 'Line 2\\n', 'Line 3\\n']\nIter: Line 1\nIter: Line 2\nIter: Line 3",
      note: "Use iteration for large files to avoid loading entire file into memory"
    },
    {
      question: "How do you handle multiple exceptions in one except block?",
      answer: "Use tuple of exception types in except clause: `except (ValueError, TypeError)`. Use multiple except blocks for different handling. Use `except Exception as e` to catch all exceptions. Use `raise from` for exception chaining. Order blocks from specific to general.",
      example: "def safe_divide(a, b):\n    try:\n        result = a / b\n        return result\n    except (ZeroDivisionError, TypeError) as e:\n        print(f\"Math error: {e}\")\n        return None\n\nprint(safe_divide(10, 0))\nprint(safe_divide(10, 'a'))\n\n# Multiple except blocks\nvalue = None\ntry:\n    result = 100 / value\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")\nexcept TypeError:\n    print(\"Type error occurred\")\nexcept Exception as e:\n    print(f\"Unexpected: {e}\")\n\n# Exception chaining\ntry:\n    raise ValueError(\"Original error\")\nexcept ValueError as e:\n    raise RuntimeError(\"Wrapper\") from e",
      output: "Math error: division by zero\nNone\nMath error: unsupported operand type\nNone\nType error occurred",
      note: "Order except blocks from most specific to most general"
    },
    {
      question: "What is the purpose of `else` and `finally` in try-except?",
      answer: "else clause runs if no exception occurred in try block - for code that shouldn't run if exception occurs. finally clause always runs regardless of exception - for cleanup operations (closing files, releasing resources). else after except, finally after else.",
      example: "def divide_numbers(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        print(\"Error: Division by zero\")\n        return None\n    else:\n        print(f\"Division successful: {result}\")\n        return result\n    finally:\n        print(\"Cleanup: This always executes\")\n\nprint(divide_numbers(10, 2))\nprint(\"---\")\nprint(divide_numbers(10, 0))\n\n# File operation with finally\nfile = None\ntry:\n    file = open(\"data.txt\", \"r\")\nexcept FileNotFoundError:\n    print(\"File not found\")\nelse:\n    print(\"File opened successfully\")\nfinally:\n    if file:\n        file.close()\n        print(\"File closed\")",
      output: "Division successful: 5.0\nCleanup: This always executes\n5.0\n---\nError: Division by zero\nCleanup: This always executes\nNone\nFile not found",
      note: "Use else for code that depends on try block success"
    },
    {
      question: "How do you create custom exceptions in Python?",
      answer: "Create custom exception by inheriting from Exception class. Add custom attributes and methods as needed. Use __init__ for custom error messages. Raise custom exceptions with raise keyword. Follow naming convention ending with 'Error'.",
      example: "class ValidationError(Exception):\n    \"\"\"Raised when validation fails\"\"\"\n    def __init__(self, message, field=None):\n        self.message = message\n        self.field = field\n        super().__init__(message)\n\nclass AgeError(Exception):\n    pass\n\ndef validate_age(age):\n    if not isinstance(age, int):\n        raise ValidationError(\"Age must be integer\", field=\"age\")\n    if age < 0:\n        raise AgeError(\"Age cannot be negative\")\n    if age > 150:\n        raise ValidationError(f\"Age {age} exceeds 150\", field=\"age\")\n    return True\n\ntry:\n    validate_age(-5)\nexcept AgeError as e:\n    print(f\"Age error: {e}\")\nexcept ValidationError as e:\n    print(f\"Validation error in {e.field}: {e.message}\")\n\ntry:\n    validate_age(200)\nexcept ValidationError as e:\n    print(f\"Validation error in {e.field}: {e.message}\")",
      output: "Age error: Age cannot be negative\nValidation error in age: Age 200 exceeds 150",
      note: "Custom exceptions should inherit from Exception, not BaseException"
    },
    {
      question: "What are context managers and the `with` statement?",
      answer: "Context managers manage resources (files, locks, connections) by automatically setting up and tearing down. Use `with` statement. Create custom context managers using class with __enter__/__exit__ methods or contextlib.contextmanager decorator. Ensures cleanup even with exceptions.",
      example: "# Class-based context manager\nclass ManagedFile:\n    def __init__(self, filename):\n        self.filename = filename\n    \n    def __enter__(self):\n        self.file = open(self.filename, 'w')\n        return self.file\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.file.close()\n        if exc_type:\n            print(f\"Exception: {exc_val}\")\n        return False\n\nwith ManagedFile(\"test.txt\") as f:\n    f.write(\"Hello World\")\n\n# Generator-based context manager\nfrom contextlib import contextmanager\n\n@contextmanager\ndef timed_operation(name):\n    import time\n    start = time.time()\n    print(f\"Starting {name}\")\n    try:\n        yield\n    finally:\n        elapsed = time.time() - start\n        print(f\"{name} took {elapsed:.2f}s\")\n\nwith timed_operation(\"Sleep\"):\n    import time\n    time.sleep(1)\n\n# Multiple context managers\nwith open(\"source.txt\", \"r\") as src, open(\"dest.txt\", \"w\") as dst:\n    dst.write(src.read())",
      output: "Starting Sleep\nSleep took 1.00s",
      note: "Always use `with` instead of manual try/finally"
    },
    {
      question: "How do you work with JSON data in Python?",
      answer: "Use json module: json.dumps() converts Python object to JSON string, json.loads() parses JSON string to Python object. json.dump() writes to file, json.load() reads from file. Handles dicts, lists, strings, numbers, booleans, null. Use custom encoder for complex objects.",
      example: "import json\n\n# Python to JSON\ndata = {\n    \"name\": \"Alice\",\n    \"age\": 30,\n    \"is_student\": False,\n    \"courses\": [\"Python\", \"SQL\"],\n    \"address\": {\"city\": \"NYC\", \"zip\": 10001}\n}\n\njson_string = json.dumps(data, indent=2)\nprint(\"JSON:\")\nprint(json_string)\n\n# JSON to Python\nparsed = json.loads(json_string)\nprint(f\"Name: {parsed['name']}, City: {parsed['address']['city']}\")\n\n# File operations\nwith open(\"data.json\", \"w\") as f:\n    json.dump(data, f, indent=2)\n\nwith open(\"data.json\", \"r\") as f:\n    loaded = json.load(f)\n    print(f\"Loaded: {loaded['name']}\")",
      output: "JSON:\n{\n  \"name\": \"Alice\",\n  \"age\": 30,\n  \"is_student\": false,\n  \"courses\": [\"Python\", \"SQL\"],\n  \"address\": {\n    \"city\": \"NYC\",\n    \"zip\": 10001\n  }\n}\nName: Alice, City: NYC\nLoaded: Alice",
      note: "JSON keys become strings; use custom encoder for complex objects"
    },
    {
      question: "How do you work with CSV files in Python?",
      answer: "Use csv module for reading/writing CSV files. csv.reader() returns iterator of rows, csv.writer() writes rows. Use DictReader/DictWriter for dictionary-based access. Handle different delimiters, quoting, and newlines. Specify newline='' for cross-platform compatibility.",
      example: "import csv\n\n# Writing CSV\nwith open(\"users.csv\", \"w\", newline='') as f:\n    writer = csv.writer(f)\n    writer.writerow([\"Name\", \"Age\", \"City\"])\n    writer.writerows([\n        [\"Alice\", 25, \"NYC\"],\n        [\"Bob\", 30, \"LA\"],\n        [\"Charlie\", 35, \"Chicago\"]\n    ])\n\n# Reading CSV\nwith open(\"users.csv\", \"r\") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(f\"Row: {row}\")\n\n# Using DictWriter\nwith open(\"users_dict.csv\", \"w\", newline='') as f:\n    fieldnames = [\"Name\", \"Age\", \"City\"]\n    writer = csv.DictWriter(f, fieldnames=fieldnames)\n    writer.writeheader()\n    writer.writerow({\"Name\": \"Alice\", \"Age\": 25, \"City\": \"NYC\"})\n\n# Using DictReader\nwith open(\"users_dict.csv\", \"r\") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(f\"{row['Name']} lives in {row['City']}\")",
      output: "Row: ['Name', 'Age', 'City']\nRow: ['Alice', '25', 'NYC']\nRow: ['Bob', '30', 'LA']\nRow: ['Charlie', '35', 'Chicago']\nAlice lives in NYC\nBob lives in LA",
      note: "Use newline='' to prevent blank lines on Windows"
    },
    {
      question: "How do you use the `os` and `sys` modules?",
      answer: "os module provides OS interface: file/directory operations, environment variables, process management. sys module provides system-specific parameters: command-line arguments (argv), Python path, interpreter settings, exiting. Use os.path for cross-platform path handling.",
      example: "import os\nimport sys\n\n# os module\nprint(f\"Current dir: {os.getcwd()}\")\nprint(f\"Files: {os.listdir('.')[:3]}\")\n\nos.makedirs(\"test_dir\", exist_ok=True)\nprint(f\"Dir exists: {os.path.exists('test_dir')}\")\n\n# Environment\nprint(f\"PATH: {os.environ.get('PATH', 'N/A')[:50]}...\")\n\n# Path manipulation\npath = \"/home/user/file.txt\"\nprint(f\"Dirname: {os.path.dirname(path)}\")\nprint(f\"Basename: {os.path.basename(path)}\")\nprint(f\"Join: {os.path.join('folder', 'sub', 'file.txt')}\")\n\n# sys module\nprint(f\"Python: {sys.version[:50]}\")\nprint(f\"Platform: {sys.platform}\")\nprint(f\"Args: {sys.argv}\")\nprint(f\"Path entries: {len(sys.path)}\")",
      output: "Current dir: /home/user\nFiles: ['.', '..', 'file.txt']\nDir exists: True\nDirname: /home/user\nBasename: file.txt\nJoin: folder/sub/file.txt\nPlatform: linux",
      note: "Use os.path.join() for cross-platform path handling"
    },
    {
      question: "How do you use the `datetime` module?",
      answer: "datetime module provides classes for date, time, datetime, timedelta. Create objects with now(), today(), or constructors. Format with strftime() (converts to string), parse with strptime() (string to datetime). Perform arithmetic with timedelta. Use pytz for timezone handling.",
      example: "from datetime import datetime, date, timedelta\n\n# Current datetime\nnow = datetime.now()\nprint(f\"Now: {now}\")\nprint(f\"Date: {now.date()}, Time: {now.time()}\")\n\n# Creating datetime\nnew_year = datetime(2024, 1, 1, 0, 0, 0)\nprint(f\"New Year: {new_year}\")\n\n# Date arithmetic\ndelta = new_year - now\nprint(f\"Days until New Year: {delta.days}\")\n\n# timedelta operations\nfuture = now + timedelta(days=30, hours=5)\nprint(f\"30 days, 5 hours from now: {future}\")\n\n# Formatting\nformatted = now.strftime(\"%Y-%m-%d %H:%M:%S\")\nprint(f\"Formatted: {formatted}\")\n\n# Parsing\nparsed = datetime.strptime(\"2024-01-15\", \"%Y-%m-%d\")\nprint(f\"Parsed: {parsed}\")\n\n# Components\nprint(f\"Year: {now.year}, Month: {now.month}, Day: {now.day}\")",
      output: "Now: 2024-01-15 14:30:00.123456\nDate: 2024-01-15, Time: 14:30:00.123456\nNew Year: 2024-01-01 00:00:00\nDays until New Year: -14\nFormatted: 2024-01-15 14:30:00\nParsed: 2024-01-15 00:00:00",
      note: "datetime objects are immutable; operations return new objects"
    },

    // ========== OOP (31-40) ==========
    {
      question: "What is object-oriented programming in Python?",
      answer: "OOP organizes code using objects with data (attributes) and behavior (methods). Principles: Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (many forms). Python supports classes, objects, inheritance, multiple inheritance, and method overriding.",
      example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return f\"{self.name} says Woof!\"\n\nclass Cat(Animal):\n    def speak(self):\n        return f\"{self.name} says Meow!\"\n\ndog = Dog(\"Buddy\")\ncat = Cat(\"Whiskers\")\nprint(dog.speak())\nprint(cat.speak())\n\n# Polymorphism\nanimals = [Dog(\"Rex\"), Cat(\"Luna\")]\nfor animal in animals:\n    print(animal.speak())",
      output: "Buddy says Woof!\nWhiskers says Meow!\nRex says Woof!\nLuna says Meow!",
      note: "Python supports multiple inheritance and method overriding"
    },
    {
      question: "Explain inheritance and method overriding in Python.",
      answer: "Inheritance allows class to inherit attributes/methods from parent class. Method overriding means child class provides its own implementation of parent method. Use super() to call parent method. Supports single and multiple inheritance.",
      example: "class Vehicle:\n    def __init__(self, brand):\n        self.brand = brand\n    \n    def start(self):\n        return \"Vehicle starting\"\n\nclass Car(Vehicle):\n    def __init__(self, brand, model):\n        super().__init__(brand)  # Call parent\n        self.model = model\n    \n    def start(self):  # Override\n        return f\"{self.brand} {self.model} engine starting\"\n    \n    def honk(self):\n        return \"Beep!\"\n\n# Multiple inheritance\nclass Electric:\n    def charge(self):\n        return \"Charging...\"\n\nclass ElectricCar(Car, Electric):\n    pass\n\ncar = Car(\"Toyota\", \"Camry\")\nprint(car.start())\nprint(car.honk())\n\ne_car = ElectricCar(\"Tesla\", \"Model 3\")\nprint(e_car.start())\nprint(e_car.charge())\nprint(ElectricCar.__mro__)",
      output: "Toyota Camry engine starting\nBeep!\nTesla Model 3 engine starting\nCharging...\n(<class '__main__.ElectricCar'>, <class '__main__.Car'>, <class '__main__.Vehicle'>, <class '__main__.Electric'>, <class 'object'>)",
      note: "super() calls parent class method following MRO"
    },
    {
      question: "What is encapsulation and how is it achieved in Python?",
      answer: "Encapsulation bundles data and methods, hiding internal state. Achieved using naming conventions: _protected (single underscore), __private (double underscore triggers name mangling). Use properties (@property) for controlled access.",
      example: "class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner          # public\n        self._branch = \"Main\"       # protected\n        self.__balance = balance    # private (name mangled)\n    \n    @property\n    def balance(self):\n        \"\"\"Getter\"\"\"\n        return self.__balance\n    \n    @balance.setter\n    def balance(self, amount):\n        \"\"\"Setter with validation\"\"\"\n        if amount < 0:\n            raise ValueError(\"Balance cannot be negative\")\n        self.__balance = amount\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n    \n    def withdraw(self, amount):\n        if 0 < amount <= self.__balance:\n            self.__balance -= amount\n\nacc = BankAccount(\"Alice\", 1000)\nprint(f\"Owner: {acc.owner}\")\nprint(f\"Balance: {acc.balance}\")\nacc.deposit(500)\nprint(f\"After deposit: {acc.balance}\")\n# print(acc.__balance)  # AttributeError\n# print(acc._BankAccount__balance)  # Name mangling",
      output: "Owner: Alice\nBalance: 1000\nAfter deposit: 1500",
      note: "Name mangling makes __private attributes harder to access"
    },
    {
      question: "What are class methods, static methods, and instance methods?",
      answer: "Instance methods receive self (instance), can modify instance state. Class methods receive cls (class), can modify class state. Static methods receive neither, act like regular functions. Use @classmethod and @staticmethod decorators.",
      example: "class Employee:\n    company = \"TechCorp\"\n    raise_rate = 1.05\n    \n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    \n    # Instance method\n    def apply_raise(self):\n        self.salary *= self.raise_rate\n    \n    # Class method\n    @classmethod\n    def change_raise_rate(cls, new_rate):\n        cls.raise_rate = new_rate\n    \n    @classmethod\n    def from_string(cls, emp_str):\n        name, salary = emp_str.split('-')\n        return cls(name, float(salary))\n    \n    # Static method\n    @staticmethod\n    def is_workday(day):\n        return day.lower() not in ['saturday', 'sunday']\n\nemp1 = Employee(\"Alice\", 50000)\nemp2 = Employee.from_string(\"Bob-60000\")\n\nprint(f\"Raise rate: {Employee.raise_rate}\")\nEmployee.change_raise_rate(1.10)\nprint(f\"New raise rate: {Employee.raise_rate}\")\n\nemp1.apply_raise()\nprint(f\"{emp1.name}'s salary: {emp1.salary}\")\n\nprint(f\"Monday workday? {Employee.is_workday('monday')}\")",
      output: "Raise rate: 1.05\nNew raise rate: 1.1\nAlice's salary: 55000.0\nMonday workday? True",
      note: "Class methods are alternative constructors; static methods are utilities"
    },
    {
      question: "What are properties and how do you use them?",
      answer: "Properties allow controlled attribute access using getters/setters. Use @property decorator for getter, @property.setter for setter, @property.deleter for deleter. Provides encapsulation without changing API.",
      example: "class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError(\"Below absolute zero\")\n        self._celsius = value\n    \n    @property\n    def fahrenheit(self):\n        return (self._celsius * 9/5) + 32\n    \n    @fahrenheit.setter\n    def fahrenheit(self, value):\n        self.celsius = (value - 32) * 5/9\n    \n    @property\n    def kelvin(self):\n        return self._celsius + 273.15\n\ntemp = Temperature(25)\nprint(f\"Celsius: {temp.celsius}\")\nprint(f\"Fahrenheit: {temp.fahrenheit}\")\nprint(f\"Kelvin: {temp.kelvin}\")\n\ntemp.fahrenheit = 100\nprint(f\"After setting Fahrenheit: {temp.celsius}°C\")",
      output: "Celsius: 25\nFahrenheit: 77.0\nKelvin: 298.15\nAfter setting Fahrenheit: 37.77777777777778°C",
      note: "Properties maintain backward compatibility when changing internal implementation"
    },
    {
      question: "What is method resolution order (MRO) in Python?",
      answer: "MRO determines method lookup order in multiple inheritance. Python uses C3 linearization algorithm creating consistent order respecting hierarchy. Access via __mro__ attribute or mro() method. super() follows MRO. Helps resolve diamond inheritance problems.",
      example: "class A:\n    def method(self):\n        return \"A\"\n\nclass B(A):\n    def method(self):\n        return \"B\"\n\nclass C(A):\n    def method(self):\n        return \"C\"\n\nclass D(B, C):\n    def method(self):\n        return super().method()\n\nclass E(C, B):\n    def method(self):\n        return super().method()\n\n# Diamond inheritance\nclass X:\n    def value(self):\n        return \"X\"\n\nclass Y(X):\n    def value(self):\n        return \"Y\"\n\nclass Z(X):\n    def value(self):\n        return \"Z\"\n\nclass W(Y, Z):\n    pass\n\nprint(f\"D MRO: {[c.__name__ for c in D.__mro__]}\")\nprint(f\"D.method(): {D().method()}\")\nprint(f\"E MRO: {[c.__name__ for c in E.__mro__]}\")\nprint(f\"E.method(): {E().method()}\")\nprint(f\"W MRO: {[c.__name__ for c in W.__mro__]}\")\nprint(f\"W.value(): {W().value()}\")",
      output: "D MRO: ['D', 'B', 'C', 'A', 'object']\nD.method(): B\nE MRO: ['E', 'C', 'B', 'A', 'object']\nE.method(): C\nW MRO: ['W', 'Y', 'Z', 'X', 'object']\nW.value(): Y",
      note: "super() follows MRO, not just parent class"
    },
    {
      question: "What are abstract base classes (ABC) in Python?",
      answer: "ABCs define interfaces that subclasses must implement. Use abc module: ABCMeta, abstractmethod. Cannot instantiate abstract class. Useful for defining contracts, enforcing method implementation, and providing default implementations.",
      example: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n    \n    @abstractmethod\n    def perimeter(self):\n        pass\n    \n    def description(self):\n        return f\"Area: {self.area()}, Perimeter: {self.perimeter()}\"\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n    \n    def perimeter(self):\n        return 2 * (self.width + self.height)\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14159 * self.radius ** 2\n    \n    def perimeter(self):\n        return 2 * 3.14159 * self.radius\n\nrect = Rectangle(5, 3)\ncircle = Circle(4)\nprint(f\"Rectangle: {rect.description()}\")\nprint(f\"Circle: {circle.description()}\")\n\n# shape = Shape()  # TypeError: Can't instantiate abstract class",
      output: "Rectangle: Area: 15, Perimeter: 16\nCircle: Area: 50.26544, Perimeter: 25.13272",
      note: "ABCs provide interface enforcement and can have concrete methods"
    },
    {
      question: "What is the difference between `__new__` and `__init__`?",
      answer: "__new__ creates new instance (class method), called before __init__. __init__ initializes instance (instance method). __new__ returns instance, __init__ returns None. Use __new__ for singleton, immutable types, or controlling instance creation.",
      example: "class Singleton:\n    _instance = None\n    \n    def __new__(cls, *args, **kwargs):\n        if cls._instance is None:\n            print(\"Creating instance\")\n            cls._instance = super().__new__(cls)\n        return cls._instance\n    \n    def __init__(self, value):\n        print(f\"Initializing with {value}\")\n        self.value = value\n\n# Singleton behavior\ns1 = Singleton(\"first\")\ns2 = Singleton(\"second\")\nprint(f\"s1 is s2: {s1 is s2}\")\nprint(f\"s1.value: {s1.value}, s2.value: {s2.value}\")\n\n# Immutable tuple example\nclass ImmutablePoint:\n    def __new__(cls, x, y):\n        obj = super().__new__(cls)\n        obj._x = x\n        obj._y = y\n        return obj\n    \n    @property\n    def x(self):\n        return self._x\n    \n    @property\n    def y(self):\n        return self._y\n\np = ImmutablePoint(3, 4)\nprint(f\"Point: ({p.x}, {p.y})\")",
      output: "Creating instance\nInitializing with first\nInitializing with second\ns1 is s2: True\ns1.value: second, s2.value: second\nPoint: (3, 4)",
      note: "__new__ rarely needed; use __init__ for most cases"
    },
    {
      question: "Explain polymorphism in Python.",
      answer: "Polymorphism allows objects of different classes to respond to same method call. Achieved through duck typing (objects implement same method) or inheritance (method overriding). Python's dynamic typing makes polymorphism natural.",
      example: "class Bird:\n    def sound(self):\n        return \"Chirp\"\n\nclass Cat:\n    def sound(self):\n        return \"Meow\"\n\nclass Dog:\n    def sound(self):\n        return \"Woof\"\n\n# Duck typing - no inheritance needed\ndef make_sound(animal):\n    print(animal.sound())\n\nmake_sound(Bird())\nmake_sound(Cat())\nmake_sound(Dog())\n\n# With inheritance\nclass Shape:\n    def area(self):\n        pass\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    \n    def area(self):\n        return self.side ** 2\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14 * self.radius ** 2\n\nshapes = [Square(5), Circle(3)]\nfor shape in shapes:\n    print(f\"Area: {shape.area()}\")",
      output: "Chirp\nMeow\nWoof\nArea: 25\nArea: 28.26",
      note: "Duck typing: 'If it walks like a duck and quacks like a duck'"
    },
    {
      question: "What are slots in Python classes?",
      answer: "__slots__ restricts instance attributes to predefined list, saving memory by preventing __dict__ creation. Useful for many instances (memory optimization). Trade-off: no dynamic attribute addition, slower attribute access sometimes.",
      example: "import sys\n\nclass RegularPoint:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nclass SlotPoint:\n    __slots__ = ('x', 'y')\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n# Memory comparison\nregular = RegularPoint(1, 2)\nslot = SlotPoint(1, 2)\nprint(f\"Regular size: {sys.getsizeof(regular)} bytes\")\nprint(f\"Slot size: {sys.getsizeof(slot)} bytes\")\nprint(f\"Regular has __dict__: {hasattr(regular, '__dict__')}\")\nprint(f\"Slot has __dict__: {hasattr(slot, '__dict__')}\")\n\n# Slot limitation\ntry:\n    slot.z = 3\nexcept AttributeError as e:\n    print(f\"Error: {e}\")\n\n# Creating many instances\nimport time\nstart = time.time()\nregular_instances = [RegularPoint(i, i) for i in range(100000)]\nregular_time = time.time() - start\n\nstart = time.time()\nslot_instances = [SlotPoint(i, i) for i in range(100000)]\nslot_time = time.time() - start\nprint(f\"Regular creation: {regular_time:.3f}s\")\nprint(f\"Slot creation: {slot_time:.3f}s\")",
      output: "Regular size: 56 bytes\nSlot size: 48 bytes\nRegular has __dict__: True\nSlot has __dict__: False\nError: 'SlotPoint' object has no attribute 'z'",
      note: "Use __slots__ for memory optimization when creating many instances"
    },

    // ========== MODULES & PACKAGES (41-50) ==========
    {
      question: "How do you create and import modules in Python?",
      answer: "Module = Python file with .py extension. Import using: import module, from module import function, from module import * (avoid), import module as alias. Use __name__ == '__main__' for script execution detection.",
      example: "# math_utils.py (create separate file)\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\ndef subtract(a, b):\n    return a - b\n\nif __name__ == \"__main__\":\n    print(\"Running as script\")\n\n# main.py (importing)\n# import math_utils\n# from math_utils import add, multiply\n# import math_utils as mu\n\n# Using imported module\n# result = math_utils.add(5, 3)\n# result = add(5, 3)\n# result = mu.add(5, 3)\n\nprint(\"Module imported successfully\")\n\n# Built-in modules\nimport math\nimport random\nimport datetime\n\nprint(f\"PI: {math.pi}\")\nprint(f\"Random: {random.randint(1, 10)}\")\nprint(f\"Now: {datetime.datetime.now()}\")",
      output: "Module imported successfully\nPI: 3.141592653589793\nRandom: 7\nNow: 2024-01-15 14:30:00.123456",
      note: "Use __name__ guard to prevent code execution on import"
    },
    {
      question: "How do you create packages in Python?",
      answer: "Package = directory with __init__.py file (can be empty). Organize related modules. Use dot notation for submodules. __init__.py can define package-level variables, imports, and __all__ list.",
      example: "# Package structure\n# mypackage/\n#     __init__.py\n#     module1.py\n#     module2.py\n#     subpackage/\n#         __init__.py\n#         module3.py\n\n# __init__.py\n__all__ = ['module1', 'module2']\n__version__ = '1.0.0'\n\n# Importing\n# import mypackage.module1\n# from mypackage import module2\n# from mypackage.subpackage import module3\n# from mypackage import *\n\nprint(\"Package structure example\")\nprint(\"Use __init__.py to mark directory as package\")",
      output: "Package structure example\nUse __init__.py to mark directory as package",
      note: "__init__.py can be empty in Python 3.3+ (namespace packages)"
    },
    {
      question: "What is the difference between `import module` and `from module import function`?",
      answer: "import module imports entire module (namespace), access via module.function. from module import function imports specific function into current namespace. from module import * imports all (not recommended). import module as alias creates shortcut.",
      example: "# Import entire module\nimport math\nprint(f\"math.sqrt: {math.sqrt(16)}\")\n\n# Import specific function\nfrom math import sqrt, pi\nprint(f\"sqrt: {sqrt(16)}, pi: {pi}\")\n\n# Import with alias\nimport math as m\nprint(f\"m.sqrt: {m.sqrt(16)}\")\n\n# from module import * (avoid - pollutes namespace)\n# from math import *\n\n# Import for side effects\nimport sys\nprint(f\"sys.path has {len(sys.path)} entries\")\n\n# Relative imports (within package)\n# from . import module\n# from ..subpackage import module",
      output: "math.sqrt: 4.0\nsqrt: 4.0, pi: 3.141592653589793\nm.sqrt: 4.0\nsys.path has 8 entries",
      note: "Use import module for clarity; from import for frequent access"
    },
    {
      question: "How do you handle circular imports in Python?",
      answer: "Circular imports occur when two modules import each other. Solutions: restructure code, import inside function/class, use import at end of module, use importlib, or use lazy imports. Best practice: avoid circular dependencies.",
      example: "# module_a.py\n# import module_b  # Would cause circular import\n\n# Solution 1: Import inside function\ndef use_module_b():\n    import module_b\n    return module_b.func()\n\n# Solution 2: Import at end\n# class ClassA:\n#     pass\n# import module_b\n\n# Solution 3: Use importlib\n# import importlib\n# module_b = importlib.import_module('module_b')\n\nprint(\"Avoid circular imports by restructuring\")\n\n# Example of breaking circular dependency\nclass User:\n    def __init__(self, name):\n        self.name = name\n        self.posts = []\n    \n    def add_post(self, post):\n        self.posts.append(post)\n\nclass Post:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n\n# No circular import needed - Pass author object\nuser = User(\"Alice\")\npost = Post(\"Hello\", user)\nuser.add_post(post)\nprint(f\"{user.name} wrote '{post.title}'\")",
      output: "Avoid circular imports by restructuring\nAlice wrote 'Hello'",
      note: "Circular imports often indicate design issues; refactor when possible"
    },
    {
      question: "What are namespace packages in Python?",
      answer: "Namespace packages allow splitting package across multiple directories without __init__.py. Created using pkgutil or native namespace packages (PEP 420). Useful for large projects, plugins, and distributed packages.",
      example: "# PEP 420 native namespace packages (Python 3.3+)\n# Directory structure:\n# project1/\n#     mynamespace/\n#         module1.py\n# project2/\n#     mynamespace/\n#         module2.py\n\n# Both directories on sys.path\n# import mynamespace.module1\n# import mynamespace.module2\n\n# Using pkgutil style\n# __init__.py in mynamespace:\n# from pkgutil import extend_path\n# __path__ = extend_path(__path__, __name__)\n\nprint(\"Namespace packages allow splitting packages across directories\")\n\n# Example structure\ndef demonstrate():\n    return \"Namespace packages enable plugin systems\"\n\nprint(demonstrate())",
      output: "Namespace packages allow splitting packages across directories\nNamespace packages enable plugin systems",
      note: "Use native namespace packages for new projects (no __init__.py)"
    },
    {
      question: "How do you use the `if __name__ == '__main__'` guard?",
      answer: "Guard prevents code execution when module imported. Code runs only when script executed directly. Useful for testing, CLI interfaces, and preventing side effects on import. Allows module to be used as both script and importable module.",
      example: "# mymodule.py\ndef main():\n    print(\"Running as script\")\n    # Your main logic here\n\nif __name__ == '__main__':\n    main()\n\n# When imported, main() not called\n# When run directly: python mymodule.py\n\nprint(\"Module loaded\")\n\n# Example with arguments\nimport sys\n\ndef process_data(data):\n    return f\"Processing: {data}\"\n\nif __name__ == '__main__':\n    if len(sys.argv) > 1:\n        result = process_data(sys.argv[1])\n        print(result)\n    else:\n        print(\"Usage: python script.py <data>\")\nelse:\n    # Provide function for import\n    __all__ = ['process_data']",
      output: "Module loaded",
      note: "Essential for modules that can be run as scripts or imported"
    },
    {
      question: "How do you create executable Python scripts?",
      answer: "Add shebang line (#!/usr/bin/env python3) at top, make file executable (chmod +x), and use if __name__ guard. Create console scripts via setuptools entry_points. Use argparse for command-line arguments.",
      example: "#!/usr/bin/env python3\n\"\"\"Example executable script.\"\"\"\nimport argparse\n\ndef main():\n    parser = argparse.ArgumentParser(description='Example script')\n    parser.add_argument('--name', default='World', help='Name to greet')\n    parser.add_argument('--count', type=int, default=1, help='Number of times')\n    args = parser.parse_args()\n    \n    for _ in range(args.count):\n        print(f\"Hello, {args.name}!\")\n\nif __name__ == '__main__':\n    main()\n\n# Make executable: chmod +x script.py\n# Run: ./script.py --name Alice --count 3\n# Run: python script.py --help",
      output: "Hello, World!",
      note: "Use argparse for professional command-line interface"
    },
    {
      question: "How do you manage Python dependencies using pip?",
      answer: "pip is Python package installer. Install: pip install package_name. List: pip list. Freeze requirements: pip freeze > requirements.txt. Install from requirements: pip install -r requirements.txt. Use -U for upgrade, uninstall to remove.",
      example: "# Install package\n# pip install requests\n# pip install pandas==1.5.0\n# pip install 'package>=1.0,<2.0'\n\n# Install multiple packages\n# pip install requests pandas numpy\n\n# Upgrade package\n# pip install -U requests\n\n# Uninstall\n# pip uninstall requests\n\n# List installed\n# pip list\n# pip show requests\n\n# Requirements file\n# pip freeze > requirements.txt\n# pip install -r requirements.txt\n\n# Install from git\n# pip install git+https://github.com/user/repo.git\n\n# Install from wheel\n# pip install package.whl\n\nprint(\"pip commands for dependency management\")",
      output: "pip commands for dependency management",
      note: "Always use virtual environments with pip"
    },
    {
      question: "What are Python wheels and eggs?",
      answer: "Wheels (.whl) are modern distribution format for Python packages, replacing eggs (.egg). Wheels are built distribution that installs faster than source distributions. Eggs are legacy format (deprecated). Use pip wheel to build wheels.",
      example: "# Build wheel\n# python setup.py bdist_wheel\n\n# Install wheel\n# pip install package.whl\n\n# Wheel benefits:\n# - Faster installation (no compilation)\n# - Cached in pip cache\n# - Binary distributions available\n\n# Setup.py example\n# from setuptools import setup\n# setup(\n#     name='mypackage',\n#     version='1.0.0',\n#     packages=['mypackage'],\n#     install_requires=['requests>=2.0'],\n# )\n\nprint(\"Wheel is current binary distribution format\")\nprint(\"Egg is deprecated legacy format\")",
      output: "Wheel is current binary distribution format\nEgg is deprecated legacy format",
      note: "Wheels are preferred over source distributions for end users"
    },
    {
      question: "How do you create a Python package for PyPI?",
      answer: "Use setuptools with setup.py or pyproject.toml. Structure: package directory, __init__.py, setup.py, README, LICENSE. Build with `python -m build`. Upload with twine: `twine upload dist/*`. Use PyPI test server for testing.",
      example: "# Project structure\n# mypackage/\n#     __init__.py\n#     module.py\n# tests/\n#     test_module.py\n# setup.py\n# README.md\n# LICENSE\n\n# setup.py example\nfrom setuptools import setup, find_packages\n\nsetup(\n    name='mypackage',\n    version='1.0.0',\n    author='Your Name',\n    description='Package description',\n    packages=find_packages(),\n    install_requires=['requests>=2.0'],\n    python_requires='>=3.8',\n    classifiers=[\n        'Programming Language :: Python :: 3',\n        'License :: OSI Approved :: MIT License',\n    ],\n)\n\n# Build and upload\n# python -m pip install build twine\n# python -m build\n# twine upload dist/*\n\nprint(\"Package ready for PyPI\")",
      output: "Package ready for PyPI",
      note: "Test on test.pypi.org before uploading to PyPI"
    }
  ],

  experienced: [
    // Question 51-100 (experienced level) would go here
    // Due to length constraints, I'll include a sample of experienced questions
    {
      question: "What is the GIL and how do you work around its limitations?",
      answer: "Global Interpreter Lock allows only one thread to execute Python bytecode at a time, limiting CPU-bound multithreading. Solutions: Use multiprocessing for CPU-bound (bypasses GIL), asyncio for I/O-bound, C extensions that release GIL (NumPy), Jython/IronPython (no GIL), subprocess module, or concurrent.futures.",
      example: "import multiprocessing as mp\nimport threading\nimport time\n\ndef cpu_intensive(n):\n    count = 0\n    for i in range(n):\n        count += i\n    return count\n\n# Multiprocessing bypasses GIL\nwith mp.Pool(processes=4) as pool:\n    results = pool.map(cpu_intensive, [10000000] * 4)\n    print(f\"Multiprocessing: {len(results)} results\")\n\n# GIL limits CPU threading\ndef io_task(name, delay):\n    time.sleep(delay)\n    return f\"{name} done\"\n\nthreads = [threading.Thread(target=io_task, args=(f\"T{i}\", 1)) for i in range(3)]\nstart = time.time()\nfor t in threads: t.start()\nfor t in threads: t.join()\nprint(f\"Threading time: {time.time()-start:.2f}s\")\n\n# ProcessPoolExecutor\nfrom concurrent.futures import ProcessPoolExecutor\nwith ProcessPoolExecutor(max_workers=4) as executor:\n    futures = [executor.submit(cpu_intensive, 10000000) for _ in range(4)]\n    results = [f.result() for f in futures]",
      output: "Multiprocessing: 4 results\nThreading time: 1.00s",
      note: "Choose concurrency model based on task type (I/O vs CPU bound)"
    },
    {
      question: "Explain Python's memory management and garbage collection in detail.",
      answer: "Python uses reference counting (primary) and generational garbage collection (for cycles). Reference counting: each object has reference count; when zero, immediately deallocated. Generational GC: handles reference cycles. Three generations: gen0 (youngest), gen1, gen2 (oldest). GC thresholds control collection frequency.",
      example: "import sys\nimport gc\n\n# Reference counting\na = [1, 2, 3]\nprint(f\"Initial refcount: {sys.getrefcount(a)}\")\nb = a\nprint(f\"After b=a: {sys.getrefcount(a)}\")\ndel b\nprint(f\"After del b: {sys.getrefcount(a)}\")\n\n# Generational GC\nprint(f\"GC thresholds: {gc.get_threshold()}\")\nprint(f\"GC stats: {gc.get_stats()}\")\n\n# Create reference cycle\nclass Node:\n    def __init__(self):\n        self.ref = None\n\nx = Node()\ny = Node()\nx.ref = y\ny.ref = x  # Cycle!\n\nprint(f\"Unreachable: {gc.collect()}\")\n\n# Object sizes\nprint(f\"Int: {sys.getsizeof(0)} bytes\")\nprint(f\"List: {sys.getsizeof([])} bytes\")\nprint(f\"Dict: {sys.getsizeof({})} bytes\")",
      output: "Initial refcount: 2\nAfter b=a: 3\nAfter del b: 2\nGC thresholds: (700, 10, 10)\nUnreachable: 2\nInt: 28 bytes\nList: 56 bytes\nDict: 64 bytes",
      note: "Reference counting is deterministic; GC is non-deterministic"
    },
   // /data/python/interview.js (continued - experienced questions 53-102)

    {
      question: "What are metaclasses in Python and when would you use them?",
      answer: "Metaclasses are 'classes of classes' that control class creation and behavior. They intercept class definition via __new__ and __init__. Used in ORMs (Django models), singleton pattern, API frameworks, abstract base classes, automatic registration, and code validation.",
      example: "# Singleton metaclass\nclass SingletonMeta(type):\n    _instances = {}\n\n    def __call__(cls, *args, **kwargs):\n        if cls not in cls._instances:\n            cls._instances[cls] = super().__call__(*args, **kwargs)\n        return cls._instances[cls]\n\nclass Database(metaclass=SingletonMeta):\n    def __init__(self):\n        print(\"Initializing database...\")\n\ndb1 = Database()\ndb2 = Database()\nprint(f\"Same: {db1 is db2}\")\n\n# Metaclass for automatic registration\nclass PluginMeta(type):\n    plugins = []\n\n    def __new__(cls, name, bases, attrs):\n        new_class = super().__new__(cls, name, bases, attrs)\n        if name != \"Plugin\":\n            cls.plugins.append(new_class)\n        return new_class\n\nclass Plugin(metaclass=PluginMeta):\n    pass\n\nclass PDFPlugin(Plugin):\n    pass\n\nclass CSVPlugin(Plugin):\n    pass\n\nprint(f\"Registered: {[p.__name__ for p in PluginMeta.plugins]}\")",
      output: "Initializing database...\nSame: True\nRegistered: ['PDFPlugin', 'CSVPlugin']",
      note: "Metaclasses are complex; use sparingly for framework-level code"
    },
    {
      question: "Explain the descriptor protocol and its use cases.",
      answer: "Descriptors define how attribute access works via __get__, __set__, __delete__. Types: data descriptor (with __set__) and non-data descriptor (only __get__). Used in @property, @staticmethod, @classmethod, ORM fields, validation, and type checking.",
      example: "# Validation descriptor\nclass PositiveNumber:\n    def __set_name__(self, owner, name):\n        self.name = name\n    \n    def __get__(self, obj, objtype=None):\n        return obj.__dict__.get(self.name, 0)\n    \n    def __set__(self, obj, value):\n        if value <= 0:\n            raise ValueError(f\"{self.name} must be positive\")\n        obj.__dict__[self.name] = value\n\nclass Order:\n    quantity = PositiveNumber()\n    price = PositiveNumber()\n    \n    def __init__(self, quantity, price):\n        self.quantity = quantity\n        self.price = price\n    \n    @property\n    def total(self):\n        return self.quantity * self.price\n\norder = Order(5, 19.99)\nprint(f\"Order: {order.quantity} × ${order.price} = ${order.total}\")\n\ntry:\n    Order(-1, 10)\nexcept ValueError as e:\n    print(f\"Error: {e}\")",
      output: "Order: 5 × $19.99 = $99.95\nError: quantity must be positive",
      note: "Descriptors power many Python features including @property"
    },
    {
      question: "Explain coroutines and the asyncio module in depth.",
      answer: "asyncio enables concurrent programming using async/await syntax. Coroutines defined with `async def`, can pause with `await`. Event loop manages execution. Ideal for I/O-bound tasks (network, file, database). Key concepts: event loop, coroutines, tasks, futures, and awaitables.",
      example: "import asyncio\nimport time\n\n# Basic coroutine\nasync def task(name, delay):\n    print(f\"Task {name} starting\")\n    await asyncio.sleep(delay)\n    print(f\"Task {name} completed after {delay}s\")\n    return f\"Result from {name}\"\n\nasync def run_concurrent():\n    results = await asyncio.gather(\n        task(\"A\", 2),\n        task(\"B\", 1),\n        task(\"C\", 3)\n    )\n    print(f\"Results: {results}\")\n\n# Queue for producer-consumer\nasync def producer(queue, count):\n    for i in range(count):\n        await asyncio.sleep(0.5)\n        await queue.put(f\"Item {i}\")\n        print(f\"Produced: {i}\")\n    await queue.put(None)\n\nasync def consumer(queue):\n    while True:\n        item = await queue.get()\n        if item is None:\n            break\n        print(f\"Consumed: {item}\")\n        await asyncio.sleep(0.3)\n\nasync def producer_consumer():\n    queue = asyncio.Queue()\n    await asyncio.gather(producer(queue, 5), consumer(queue))\n\n# Timeout handling\nasync def slow_op():\n    await asyncio.sleep(5)\n    return \"Done\"\n\nasync def with_timeout():\n    try:\n        result = await asyncio.wait_for(slow_op(), timeout=2)\n        print(result)\n    except asyncio.TimeoutError:\n        print(\"Timeout!\")\n\nasyncio.run(with_timeout())",
      output: "Timeout!",
      note: "asyncio is not parallel; use multiprocessing for CPU-bound tasks"
    },
    {
      question: "What are Python's concurrency models and when to use each?",
      answer: "Three main models: threading (I/O-bound concurrency, GIL-limited), multiprocessing (CPU-bound parallelism, bypasses GIL), asyncio (single-threaded concurrent I/O with async/await). Choose: I/O-bound → threading or asyncio, CPU-bound → multiprocessing, high-concurrency I/O → asyncio.",
      example: "import threading\nimport multiprocessing as mp\nimport asyncio\nimport time\n\n# Threading for I/O\ndef io_task(name, delay):\n    time.sleep(delay)\n    return f\"{name} done\"\n\n# Multiprocessing for CPU\ndef cpu_task(n):\n    count = 0\n    for i in range(n):\n        count += i\n    return count\n\n# asyncio for concurrent I/O\nasync def async_task(name, delay):\n    await asyncio.sleep(delay)\n    return f\"{name} done\"\n\n# ThreadPoolExecutor\nfrom concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor\n\nwith ThreadPoolExecutor(max_workers=5) as executor:\n    urls = ['https://httpbin.org/get'] * 3\n    results = list(executor.map(lambda x: x, urls))\n\nwith ProcessPoolExecutor(max_workers=4) as executor:\n    futures = [executor.submit(cpu_task, 10000000) for _ in range(4)]\n    results = [f.result() for f in futures]\n\nprint(\"All models work together\")",
      output: "All models work together",
      note: "Match concurrency model to task type for optimal performance"
    },
    {
      question: "Explain MRO (Method Resolution Order) and how it works.",
      answer: "MRO determines method lookup order in multiple inheritance. Python uses C3 linearization algorithm creating consistent order respecting hierarchy. Access via __mro__ attribute or mro() method. super() follows MRO. Resolves diamond inheritance problems.",
      example: "class A:\n    def method(self):\n        return \"A\"\n\nclass B(A):\n    def method(self):\n        return \"B\"\n\nclass C(A):\n    def method(self):\n        return \"C\"\n\nclass D(B, C):\n    pass\n\nclass E(C, B):\n    pass\n\n# Diamond inheritance\nclass X:\n    def value(self):\n        return \"X\"\n\nclass Y(X):\n    def value(self):\n        return \"Y\"\n\nclass Z(X):\n    def value(self):\n        return \"Z\"\n\nclass W(Y, Z):\n    pass\n\nprint(f\"D MRO: {[c.__name__ for c in D.__mro__]}\")\nprint(f\"D.method(): {D().method()}\")\nprint(f\"E MRO: {[c.__name__ for c in E.__mro__]}\")\nprint(f\"E.method(): {E().method()}\")\nprint(f\"W MRO: {[c.__name__ for c in W.__mro__]}\")\nprint(f\"W.value(): {W().value()}\")",
      output: "D MRO: ['D', 'B', 'C', 'A', 'object']\nD.method(): B\nE MRO: ['E', 'C', 'B', 'A', 'object']\nE.method(): C\nW MRO: ['W', 'Y', 'Z', 'X', 'object']\nW.value(): Y",
      note: "super() follows MRO, not just parent class"
    },
    {
      question: "What are weak references and when should you use them?",
      answer: "Weak references don't increase reference count, allowing garbage collection. Use weakref module: weakref.ref, WeakKeyDictionary, WeakValueDictionary, WeakSet. Prevents memory leaks in caches, event handlers, parent-child relationships, and observer patterns.",
      example: "import weakref\nimport gc\n\nclass Resource:\n    def __init__(self, name):\n        self.name = name\n    \n    def __del__(self):\n        print(f\"{self.name} collected\")\n\n# Weak reference\nr = Resource(\"weak\")\nweak = weakref.ref(r)\nprint(f\"Weak ref: {weak()}\")\ndel r\ngc.collect()\nprint(f\"After delete: {weak()}\")\n\n# WeakValueDictionary\ncache = weakref.WeakValueDictionary()\nobj = Resource(\"cached\")\ncache['key'] = obj\nprint(f\"Cache size: {len(cache)}\")\ndel obj\ngc.collect()\nprint(f\"Cache after: {len(cache)}\")\n\n# WeakSet\nweak_set = weakref.WeakSet()\nobj1, obj2 = Resource(\"s1\"), Resource(\"s2\")\nweak_set.add(obj1)\nweak_set.add(obj2)\nprint(f\"Set size: {len(weak_set)}\")\ndel obj1\ngc.collect()\nprint(f\"Set after: {len(weak_set)}\")",
      output: "Weak ref: <__main__.Resource object>\nweak collected\nAfter delete: None\ncached collected\nCache size: 1\nCache after: 0\nSet size: 2\ns1 collected\nSet after: 1",
      note: "Weak references prevent memory leaks in caches and callbacks"
    },
    {
      question: "How do you profile and optimize Python code?",
      answer: "Use profiling tools: cProfile (built-in), line_profiler (line-by-line), memory_profiler, timeit. Optimize: use built-in functions, list comprehensions, local variables, avoid function overhead in loops, appropriate data structures, caching, __slots__, Cython/Numba, multiprocessing.",
      example: "import cProfile\nimport timeit\nimport math\n\n# Timeit for micro-benchmarks\ndef test_list_comp():\n    return [i**2 for i in range(1000)]\n\ndef test_loop():\n    result = []\n    for i in range(1000):\n        result.append(i**2)\n    return result\n\nprint(f\"List comp: {timeit.timeit(test_list_comp, number=10000):.3f}s\")\nprint(f\"Loop: {timeit.timeit(test_loop, number=10000):.3f}s\")\n\n# Optimization techniques\nvalues = list(range(1000))\n\ndef slow_calc():\n    result = []\n    for x in values:\n        result.append(math.sqrt(x))\n    return result\n\ndef fast_calc():\n    result = []\n    sqrt = math.sqrt\n    append = result.append\n    for x in values:\n        append(sqrt(x))\n    return result\n\nprint(f\"Slow: {timeit.timeit(slow_calc, number=1000):.3f}s\")\nprint(f\"Fast: {timeit.timeit(fast_calc, number=1000):.3f}s\")\n\n# cProfile example\ndef expensive():\n    total = 0\n    for i in range(1000000):\n        total += i\n    return total\n\nprofiler = cProfile.Profile()\nprofiler.enable()\nfor _ in range(10):\n    expensive()\nprofiler.disable()\nprint(\"Profiling complete\")",
      output: "List comp: 0.234s\nLoop: 0.456s\nSlow: 0.345s\nFast: 0.298s\nProfiling complete",
      note: "Profile before optimizing; 80% of time spent in 20% of code"
    },
    {
      question: "Explain the Python data model and how it enables duck typing.",
      answer: "Python's data model defines protocols (__methods__) enabling objects to behave like built-in types. Duck typing: 'If it walks like duck and quacks like duck' - type checking based on behavior/methods, not inheritance. Objects implement protocols to work with language features.",
      example: "class MyList:\n    def __init__(self, items):\n        self._items = list(items)\n    \n    def __len__(self):\n        return len(self._items)\n    \n    def __getitem__(self, index):\n        return self._items[index]\n    \n    def __setitem__(self, index, value):\n        self._items[index] = value\n    \n    def __iter__(self):\n        return iter(self._items)\n\ndef process_sequence(seq):\n    \"\"\"Works with any sequence-like object\"\"\"\n    print(f\"Length: {len(seq)}\")\n    print(f\"First: {seq[0]}\")\n    for item in seq:\n        print(f\"Item: {item}\")\n\nmy_seq = MyList([1, 2, 3])\nprocess_sequence(my_seq)\nprocess_sequence([1, 2, 3])\nprocess_sequence((1, 2, 3))\n\n# Numeric protocol\nclass Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\nv1, v2 = Vector(1, 2), Vector(3, 4)\nprint(f\"Add: ({v1.x + v2.x}, {v1.y + v2.y})\")",
      output: "Length: 3\nFirst: 1\nItem: 1,2,3\nAdd: (4, 6)",
      note: "Duck typing enables polymorphism without inheritance"
    },
    {
      question: "What are context managers and how do you create custom ones?",
      answer: "Context managers manage resources using `with` statement. Create using class with __enter__/__exit__ or contextlib.contextmanager decorator. Ensure cleanup even with exceptions. Used for files, locks, database connections, timing, and temporary changes.",
      example: "from contextlib import contextmanager\nimport time\n\n# Class-based\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    \n    def __exit__(self, *args):\n        self.end = time.time()\n        print(f\"Elapsed: {self.end - self.start:.2f}s\")\n\nwith Timer() as timer:\n    time.sleep(1)\n\n# Generator-based\n@contextmanager\ndef managed_resource(*args, **kwargs):\n    print(\"Acquiring resource\")\n    resource = args[0]\n    try:\n        yield resource\n    finally:\n        print(\"Releasing resource\")\n\nwith managed_resource(\"db_connection\") as conn:\n    print(f\"Using {conn}\")\n\n# Multiple context managers\nwith open('file1.txt', 'w') as f1, open('file2.txt', 'w') as f2:\n    f1.write('data')\n    f2.write('data')\n\nprint(\"Context managers ensure cleanup\")",
      output: "Elapsed: 1.00s\nAcquiring resource\nUsing db_connection\nReleasing resource\nContext managers ensure cleanup",
      note: "Always use `with` for resource management"
    },
    {
      question: "Explain the difference between deep copy and shallow copy with examples.",
      answer: "Shallow copy creates new object but inserts references to original nested objects. Deep copy recursively copies all nested objects completely. Import copy module. Use copy.copy() for shallow, copy.deepcopy() for deep. Deep copy handles circular references and custom objects.",
      example: "import copy\n\noriginal = [1, [2, 3], {'a': 4}]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\n\n# Modify nested structure\nshallow[1][0] = 99\nprint(f\"Original after shallow: {original}\")\nprint(f\"Shallow: {shallow}\")\n\ndeep[1][0] = 999\nprint(f\"Original after deep: {original}\")\nprint(f\"Deep: {deep}\")\n\n# Custom object\nclass Person:\n    def __init__(self, name, friend=None):\n        self.name = name\n        self.friend = friend\n\nalice = Person(\"Alice\")\nbob = Person(\"Bob\", alice)\nalice.friend = bob  # Circular reference\n\nbob_copy = copy.deepcopy(bob)\nprint(f\"Bob copy friend: {bob_copy.friend.name}\")\n\n# Performance comparison\nimport time\ndata = [[i] for i in range(1000)]\nstart = time.time()\ncopy.deepcopy(data)\ndeep_time = time.time() - start\nprint(f\"Deep copy 1000 items: {deep_time:.4f}s\")",
      output: "Original after shallow: [1, [99, 3], {'a': 4}]\nShallow: [1, [99, 3], {'a': 4}]\nOriginal after deep: [1, [99, 3], {'a': 4}]\nDeep: [1, [999, 3], {'a': 4}]\nBob copy friend: Alice\nDeep copy 1000 items: 0.0123s",
      note: "Use deepcopy for independent copies of nested structures"
    },
    {
      question: "What are decorators and how do they work internally?",
      answer: "Decorators are functions that modify other functions. Internally: @decorator syntactic sugar for func = decorator(func). Decorator returns wrapper function. Use functools.wraps to preserve metadata. Support stacking multiple decorators, parameters, and classes.",
      example: "from functools import wraps\nimport time\n\n# Simple decorator\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f\"{func.__name__}: {end-start:.2f}s\")\n        return result\n    return wrapper\n\n# Decorator with parameters\ndef repeat(times):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n# Multiple decorators\n@timer\n@repeat(3)\ndef greet(name):\n    print(f\"Hello, {name}!\")\n    return f\"Greeted {name}\"\n\n# Class decorator\ndef add_method(cls):\n    def new_method(self):\n        return \"Added by decorator\"\n    cls.new_method = new_method\n    return cls\n\n@add_method\nclass MyClass:\n    pass\n\nprint(greet(\"Alice\"))\nprint(MyClass().new_method())\nprint(f\"Function name: {greet.__name__}\")",
      output: "Hello, Alice!\nHello, Alice!\nHello, Alice!\ngreet: 0.00s\nGreeted Alice\nAdded by decorator\nFunction name: greet",
      note: "Use functools.wraps to preserve function metadata"
    },
    {
      question: "What are generators and how are they different from iterators?",
      answer: "Generators are functions using `yield` that produce values lazily, remembering state. All generators are iterators, but not all iterators are generators. Generators are memory-efficient, single-use, can represent infinite sequences. Use generator expressions for simple cases.",
      example: "# Generator function\ndef fibonacci(limit):\n    a, b = 0, 1\n    while a < limit:\n        yield a\n        a, b = b, a + b\n\n# Generator expression\nsquares = (x**2 for x in range(1000000))\n\n# Custom iterator class\nclass CountDown:\n    def __init__(self, start):\n        self.current = start\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        value = self.current\n        self.current -= 1\n        return value\n\n# Memory comparison\nimport sys\nlist_nums = [x for x in range(10000)]\ngen_nums = (x for x in range(10000))\nprint(f\"List: {sys.getsizeof(list_nums)} bytes\")\nprint(f\"Generator: {sys.getsizeof(gen_nums)} bytes\")\n\n# Generator methods\nfib = fibonacci(50)\nprint(f\"Next: {next(fib)}\")\n\n# send() to generator\ndef accumulator():\n    total = 0\n    while True:\n        value = yield total\n        if value:\n            total += value\n\nacc = accumulator()\nnext(acc)\nprint(f\"Accumulated: {acc.send(10)}\")\nprint(f\"Accumulated: {acc.send(20)}\")",
      output: "List: 85176 bytes\nGenerator: 112 bytes\nNext: 0\nAccumulated: 10\nAccumulated: 30",
      note: "Use generators for large datasets and infinite sequences"
    },
    {
      question: "How do you implement caching with functools.lru_cache?",
      answer: "lru_cache decorator caches function results based on arguments. Uses Least Recently Used eviction policy. Set maxsize for cache size, typed for different types. Useful for expensive pure functions, recursive algorithms, API calls. Use cache_clear() and cache_info() for management.",
      example: "from functools import lru_cache\nimport time\n\n# Basic caching\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n# Without caching\ndef fib_slow(n):\n    if n < 2:\n        return n\n    return fib_slow(n-1) + fib_slow(n-2)\n\n# Performance comparison\nstart = time.time()\nresult1 = fibonacci(35)\nprint(f\"Cached: {time.time()-start:.4f}s, Result: {result1}\")\nstart = time.time()\nresult2 = fib_slow(35)\nprint(f\"Uncached: {time.time()-start:.4f}s, Result: {result2}\")\n\n# Cache info\nprint(f\"Cache info: {fibonacci.cache_info()}\")\n\n# Clear cache\nfibonacci.cache_clear()\nprint(f\"After clear: {fibonacci.cache_info()}\")\n\n# With typed parameter\n@lru_cache(maxsize=100, typed=True)\ndef multiply(a, b):\n    return a * b\n\nprint(multiply(5, 3))   # Cache miss\nprint(multiply(5.0, 3)) # Cache miss (typed=True)\nprint(multiply(5, 3))   # Cache hit\n\n# Practical use: API calls\n@lru_cache(maxsize=50)\ndef get_user(user_id):\n    print(f\"Fetching user {user_id} from database\")\n    return {\"id\": user_id, \"name\": f\"User{user_id}\"}\n\nfor i in [1, 2, 1, 3, 2, 1]:\n    user = get_user(i)",
      output: "Cached: 0.0001s, Result: 9227465\nUncached: 2.3456s, Result: 9227465\nCache info: CacheInfo(hits=33, misses=36, maxsize=128, currsize=36)\nAfter clear: CacheInfo(hits=0, misses=0, maxsize=128, currsize=0)\n15\n15\n15\nFetching user 1 from database\nFetching user 2 from database\nFetching user 3 from database",
      note: "lru_cache is great for memoization of pure functions"
    },
    {
      question: "Explain the `with` statement and contextlib utilities.",
      answer: "`with` statement manages resources using context managers. contextlib provides utilities: contextmanager (decorator), closing (auto-close), suppress (ignore exceptions), redirect_stdout, ExitStack (multiple managers), nullcontext (no-op), and AsyncExitStack (async).",
      example: "from contextlib import contextmanager, closing, suppress, redirect_stdout, ExitStack\nimport io\n\n# suppress - ignore specific exceptions\nwith suppress(FileNotFoundError, ZeroDivisionError):\n    open('nonexistent.txt')\n    1/0\nprint(\"Exceptions suppressed\")\n\n# closing - auto-close object\nclass Resource:\n    def close(self):\n        print(\"Resource closed\")\n\nwith closing(Resource()):\n    print(\"Using resource\")\n\n# redirect_stdout - capture output\nf = io.StringIO()\nwith redirect_stdout(f):\n    print(\"Captured text\")\nprint(f\"Captured: {f.getvalue()}\")\n\n# ExitStack - multiple managers\nwith ExitStack() as stack:\n    files = [stack.enter_context(open(f'file{i}.txt', 'w')) for i in range(3)]\n    for f in files:\n        f.write('data')\n\n# nullcontext - conditional context\nfrom contextlib import nullcontext\nshould_profile = False\nwith (profile() if should_profile else nullcontext()):\n    # code here\n    pass\n\nprint(\"All contextlib utilities work\")",
      output: "Exceptions suppressed\nUsing resource\nResource closed\nCaptured: Captured text\n\nAll contextlib utilities work",
      note: "contextlib simplifies custom context manager creation"
    },
    {
      question: "How do you handle circular imports in Python projects?",
      answer: "Circular imports occur when modules import each other. Solutions: restructure code (extract common to third module), import inside function/class (lazy import), move import to end of module, use importlib, use type checking imports (if TYPE_CHECKING), or use dependency injection.",
      example: "# Bad: circular import\n# module_a.py\n# from module_b import func_b\n\n# module_b.py  \n# from module_a import func_a\n\n# Solution 1: Import inside function\ndef use_module_b():\n    from module_b import func_b\n    return func_b()\n\n# Solution 2: Import at end\nclass ClassA:\n    pass\n\n# from module_b import func_b\n\n# Solution 3: Use TYPE_CHECKING for type hints\nfrom typing import TYPE_CHECKING\nif TYPE_CHECKING:\n    from module_b import ClassB\n\ndef process(b: 'ClassB'):  # Forward reference\n    pass\n\n# Solution 4: Dependency injection\nclass User:\n    def __init__(self, name, post_service=None):\n        self.name = name\n        self.post_service = post_service\n\nclass PostService:\n    def create_post(self, user, title):\n        return f\"{user.name} created '{title}'\"\n\nuser = User(\"Alice\", PostService())\nprint(user.post_service.create_post(user, \"Hello\"))\n\n# Refactored structure\n# models.py - contains User, Post classes\n# services.py - contains business logic\n# utils.py - contains helper functions\n\nprint(\"Circular imports resolved\")",
      output: "Alice created 'Hello'\nCircular imports resolved",
      note: "Circular imports often indicate need for refactoring"
    },
    {
      question: "What are typing hints and how do you use them?",
      answer: "Type hints provide optional static typing. Use typing module: List, Dict, Optional, Union, Any, Callable, TypeVar, Generic, Protocol. Enable runtime checks with isinstance. Use mypy for static checking. Improves code documentation and IDE support.",
      example: "from typing import List, Dict, Optional, Union, Callable, TypeVar, Generic\nfrom dataclasses import dataclass\n\n# Basic hints\ndef greet(name: str) -> str:\n    return f\"Hello, {name}\"\n\n# Complex types\ndef process_items(items: List[str], config: Dict[str, int]) -> Optional[str]:\n    if items:\n        return items[0]\n    return None\n\n# Union and Optional\nUserID = Union[int, str]\n\ndef get_user(uid: UserID) -> dict:\n    return {\"id\": uid, \"name\": \"User\"}\n\n# Type alias\nVector = List[float]\ndef scale(v: Vector, factor: float) -> Vector:\n    return [x * factor for x in v]\n\n# Callable\ndef apply(f: Callable[[int, int], int], a: int, b: int) -> int:\n    return f(a, b)\n\nprint(apply(lambda x, y: x + y, 5, 3))\n\n# Generic\nT = TypeVar('T')\nclass Stack(Generic[T]):\n    def __init__(self) -> None:\n        self._items: List[T] = []\n    \n    def push(self, item: T) -> None:\n        self._items.append(item)\n    \n    def pop(self) -> T:\n        return self._items.pop()\n\nstack = Stack[int]()\nstack.push(1)\nprint(stack.pop())\n\n# Dataclass with types\n@dataclass\nclass Point:\n    x: float\n    y: float\n    \n    def distance(self) -> float:\n        return (self.x**2 + self.y**2)**0.5\n\np = Point(3, 4)\nprint(f\"Distance: {p.distance()}\")",
      output: "8\n1\nDistance: 5.0",
      note: "Type hints don't affect runtime; use mypy for static checking"
    },
    {
      question: "How do you implement lazy evaluation in Python?",
      answer: "Lazy evaluation delays computation until result needed. Implement using generators, generator expressions, custom iterators, property decorator with caching, or custom lazy classes. Useful for large datasets, expensive computations, infinite sequences, and optimization.",
      example: "# Generator for lazy sequence\ndef lazy_range(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nfor num in lazy_range(1000000):\n    if num > 10:\n        break\n    print(num, end=' ')\nprint()\n\n# Lazy property with caching\nclass LazyProperty:\n    def __init__(self, func):\n        self.func = func\n        self.name = func.__name__\n    \n    def __get__(self, obj, type=None):\n        if obj is None:\n            return self\n        value = self.func(obj)\n        obj.__dict__[self.name] = value\n        return value\n\nclass DataProcessor:\n    def __init__(self, data):\n        self.data = data\n    \n    @LazyProperty\n    def expensive_computation(self):\n        print(\"Computing...\")\n        return sum(i**2 for i in self.data)\n\nprocessor = DataProcessor(range(1000))\nprint(\"After creation, computation not done\")\nprint(f\"Result: {processor.expensive_computation}\")\nprint(f\"Cached: {processor.expensive_computation}\")\n\n# Lazy list using custom class\nclass LazyList:\n    def __init__(self, generator_func):\n        self._generator = generator_func\n        self._items = []\n    \n    def __getitem__(self, index):\n        while len(self._items) <= index:\n            try:\n                self._items.append(next(self._generator))\n            except StopIteration:\n                raise IndexError(\"Index out of range\")\n        return self._items[index]\n\ndef infinite_numbers():\n    i = 0\n    while True:\n        yield i\n        i += 1\n\nlazy_list = LazyList(infinite_numbers())\nprint(f\"First 5: {[lazy_list[i] for i in range(5)]}\")\n\n# Lazy dictionary\nfrom collections import defaultdict\nlazy_dict = defaultdict(lambda: \"Computed on demand\")\nprint(lazy_dict['missing'])  # Computes default",
      output: "0 1 2 3 4 5 6 7 8 9 10 \nAfter creation, computation not done\nComputing...\nResult: 332833500\nCached: 332833500\nFirst 5: [0, 1, 2, 3, 4]\nComputed on demand",
      note: "Lazy evaluation optimizes memory and startup time"
    },
    {
      question: "Explain Python's descriptor protocol with practical examples.",
      answer: "Descriptor protocol defines attribute access: __get__, __set__, __delete__. Types: data descriptor (has __set__), non-data descriptor (only __get__). Used in @property, @staticmethod, @classmethod, ORM fields, type checking, validation, and lazy loading.",
      example: "# Validation descriptor\nclass ValidatedAttribute:\n    def __set_name__(self, owner, name):\n        self.name = name\n    \n    def __get__(self, obj, objtype=None):\n        return obj.__dict__.get(self.name)\n    \n    def __set__(self, obj, value):\n        self.validate(value)\n        obj.__dict__[self.name] = value\n    \n    def validate(self, value):\n        pass\n\nclass PositiveInt(ValidatedAttribute):\n    def validate(self, value):\n        if not isinstance(value, int):\n            raise TypeError(f\"{self.name} must be int\")\n        if value <= 0:\n            raise ValueError(f\"{self.name} must be positive\")\n\nclass NonEmptyString(ValidatedAttribute):\n    def validate(self, value):\n        if not isinstance(value, str):\n            raise TypeError(f\"{self.name} must be string\")\n        if not value.strip():\n            raise ValueError(f\"{self.name} cannot be empty\")\n\nclass Product:\n    id = PositiveInt()\n    name = NonEmptyString()\n    \n    def __init__(self, id, name):\n        self.id = id\n        self.name = name\n\n# Lazy loading descriptor\nclass LazyProperty:\n    def __init__(self, func):\n        self.func = func\n        self.name = func.__name__\n    \n    def __get__(self, obj, type=None):\n        if obj is None:\n            return self\n        value = self.func(obj)\n        obj.__dict__[self.name] = value\n        return value\n\nclass Report:\n    def __init__(self, data):\n        self.data = data\n    \n    @LazyProperty\n    def processed_data(self):\n        print(\"Processing...\")\n        return [x**2 for x in self.data if x % 2 == 0]\n\nproduct = Product(5, \"Laptop\")\nprint(f\"Product: {product.id}, {product.name}\")\n\ntry:\n    Product(-1, \"Invalid\")\nexcept ValueError as e:\n    print(f\"Error: {e}\")\n\nreport = Report([1,2,3,4,5,6])\nprint(\"First access:\")\nprint(report.processed_data)\nprint(\"Second access (cached):\")\nprint(report.processed_data)",
      output: "Product: 5, Laptop\nError: id must be positive\nFirst access:\nProcessing...\n[4, 16, 36]\nSecond access (cached):\n[4, 16, 36]",
      note: "Descriptors provide reusable attribute behavior"
    },
    {
      question: "What are coroutine-based async patterns in Python?",
      answer: "asyncio provides coroutine-based async patterns: async/await, tasks, futures, event loops. Patterns include: gather for concurrent tasks, wait for conditions, as_completed for iteration, shields for cancellation protection, queues for producer-consumer, and locks for synchronization.",
      example: "import asyncio\n\n# Gather pattern\nasync def fetch(url, delay):\n    await asyncio.sleep(delay)\n    return f\"Data from {url}\"\n\nasync def gather_example():\n    results = await asyncio.gather(\n        fetch(\"api1\", 2),\n        fetch(\"api2\", 1),\n        fetch(\"api3\", 3)\n    )\n    print(f\"Gather: {results}\")\n\n# as_completed pattern\nasync def as_completed_example():\n    tasks = [fetch(f\"api{i}\", i) for i in range(1, 4)]\n    for coro in asyncio.as_completed(tasks):\n        result = await coro\n        print(f\"Completed: {result}\")\n\n# Queue pattern\nasync def producer(queue, n):\n    for i in range(n):\n        await queue.put(f\"Item {i}\")\n        await asyncio.sleep(0.5)\n    await queue.put(None)\n\nasync def consumer(queue):\n    while True:\n        item = await queue.get()\n        if item is None:\n            break\n        print(f\"Consumed: {item}\")\n\nasync def queue_example():\n    queue = asyncio.Queue()\n    await asyncio.gather(producer(queue, 5), consumer(queue))\n\n# Shield pattern (prevent cancellation)\nasync def important_task():\n    await asyncio.sleep(2)\n    return \"Important result\"\n\nasync def shield_example():\n    task = asyncio.create_task(important_task())\n    try:\n        result = await asyncio.shield(task)\n        print(f\"Shielded: {result}\")\n    except asyncio.CancelledError:\n        print(\"Task shielded from cancellation\")\n        await task\n\n# Timeout pattern\nasync def timeout_example():\n    try:\n        result = await asyncio.wait_for(fetch(\"slow\", 5), timeout=2)\n    except asyncio.TimeoutError:\n        print(\"Operation timed out\")\n\nasyncio.run(gather_example())",
      output: "Gather: ['Data from api1', 'Data from api2', 'Data from api3']",
      note: "asyncio patterns improve concurrent I/O operations"
    },
    {
      question: "How do you implement dependency injection in Python?",
      answer: "Dependency injection provides dependencies to objects rather than creating them internally. Implement using constructor injection, setter injection, or method injection. Use frameworks like dependency-injector, FastAPI's Depends, or manual DI with containers and factories.",
      example: "# Constructor injection (manual)\nclass Database:\n    def query(self):\n        return \"Data from DB\"\n\nclass Logger:\n    def log(self, msg):\n        print(f\"LOG: {msg}\")\n\nclass UserService:\n    def __init__(self, db: Database, logger: Logger):\n        self.db = db\n        self.logger = logger\n    \n    def get_users(self):\n        self.logger.log(\"Fetching users\")\n        return self.db.query()\n\n# Simple container\nclass Container:\n    def __init__(self):\n        self._instances = {}\n    \n    def register(self, name, builder):\n        self._instances[name] = builder\n    \n    def resolve(self, name):\n        return self._instances[name](self)\n\ncontainer = Container()\ncontainer.register('db', lambda c: Database())\ncontainer.register('logger', lambda c: Logger())\ncontainer.register('user_service', lambda c: UserService(c.resolve('db'), c.resolve('logger')))\n\nservice = container.resolve('user_service')\nprint(service.get_users())\n\n# Using dataclasses for config\nfrom dataclasses import dataclass\n\n@dataclass\nclass Config:\n    db_url: str\n    api_key: str\n\nclass ApiClient:\n    def __init__(self, config: Config):\n        self.config = config\n\nconfig = Config(\"postgres://localhost\", \"secret-key\")\nclient = ApiClient(config)\nprint(f\"API Client using DB: {config.db_url}\")",
      output: "LOG: Fetching users\nData from DB\nAPI Client using DB: postgres://localhost",
      note: "DI improves testability and loose coupling"
    },
    {
      question: "What are Python's asynchronous context managers and iterators?",
      answer: "Async context managers use __aenter__/__aexit__ for async resource management. Async iterators use __aiter__/__anext__ for async iteration. Use `async with` and `async for` syntax. Useful for async file I/O, database connections, network streams.",
      example: "import asyncio\n\n# Async context manager\nclass AsyncDatabase:\n    async def __aenter__(self):\n        print(\"Connecting to database\")\n        await asyncio.sleep(0.5)\n        self.conn = \"DB Connection\"\n        return self\n    \n    async def __aexit__(self, exc_type, exc_val, exc_tb):\n        print(\"Closing database connection\")\n        await asyncio.sleep(0.5)\n    \n    async def query(self, sql):\n        await asyncio.sleep(0.3)\n        return f\"Result for: {sql}\"\n\n# Async iterator\nclass AsyncCounter:\n    def __init__(self, limit):\n        self.limit = limit\n        self.count = 0\n    \n    def __aiter__(self):\n        return self\n    \n    async def __anext__(self):\n        await asyncio.sleep(0.2)\n        if self.count >= self.limit:\n            raise StopAsyncIteration\n        self.count += 1\n        return self.count\n\n# Async generator (simpler)\nasync def async_range(limit):\n    for i in range(limit):\n        await asyncio.sleep(0.1)\n        yield i\n\n# Usage\nasync def demo():\n    # Async context manager\n    async with AsyncDatabase() as db:\n        result = await db.query(\"SELECT * FROM users\")\n        print(f\"Query result: {result}\")\n    \n    # Async iterator\n    async for num in AsyncCounter(5):\n        print(f\"AsyncCounter: {num}\")\n    \n    # Async generator\n    async for i in async_range(3):\n        print(f\"AsyncRange: {i}\")\n\n# Run\nasyncio.run(demo())\n\n# Real-world: aiofiles\n# import aiofiles\n# async with aiofiles.open('file.txt', 'r') as f:\n#     content = await f.read()",
      output: "Connecting to database\nQuery result: Result for: SELECT * FROM users\nClosing database connection\nAsyncCounter: 1\nAsyncCounter: 2\nAsyncCounter: 3\nAsyncCounter: 4\nAsyncCounter: 5\nAsyncRange: 0\nAsyncRange: 1\nAsyncRange: 2",
      note: "Async context managers and iterators integrate with asyncio"
    },
    {
      question: "How do you optimize Python code using Cython or Numba?",
      answer: "Cython compiles Python to C for speed (5-100x faster). Numba uses JIT compilation for numerical code. Use Cython for wrapping C libraries, Numba for array operations. Install: pip install cython numba. Use @njit decorator for Numba, .pyx files for Cython.",
      example: "# Numba example\nfrom numba import jit, njit\nimport time\nimport numpy as np\n\n@njit\ndef sum_squares_numba(arr):\n    total = 0\n    for i in range(len(arr)):\n        total += arr[i] ** 2\n    return total\n\ndef sum_squares_python(arr):\n    total = 0\n    for i in range(len(arr)):\n        total += arr[i] ** 2\n    return total\n\n# Performance comparison\narr = np.arange(1000000)\nstart = time.time()\nresult_numba = sum_squares_numba(arr)\nnumba_time = time.time() - start\n\nstart = time.time()\nresult_python = sum_squares_python(arr)\npython_time = time.time() - start\n\nprint(f\"Numba: {numba_time:.4f}s\")\nprint(f\"Python: {python_time:.4f}s\")\nprint(f\"Speedup: {python_time/numba_time:.1f}x\")\n\n# Cython example (in setup.py)\n# from setuptools import setup\n# from Cython.Build import cythonize\n# setup(ext_modules=cythonize(\"my_module.pyx\"))\n\n# my_module.pyx\n# def fast_function(int n):\n#     cdef int i\n#     cdef long total = 0\n#     for i in range(n):\n#         total += i * i\n#     return total\n\nprint(\"Cython and Numba accelerate numerical code\")",
      output: "Numba: 0.0023s\nPython: 0.0456s\nSpeedup: 19.8x\nCython and Numba accelerate numerical code",
      note: "Numba works best with NumPy arrays; Cython for general C extensions"
    },
    {
      question: "What is the difference between multiprocessing, threading, and asyncio?",
      answer: "Multiprocessing: true parallelism (multiple processes), bypasses GIL, best for CPU-bound tasks. Threading: concurrent I/O (single process, multiple threads), GIL limits CPU performance. Asyncio: single-threaded concurrent I/O with async/await, best for high-concurrency I/O (thousands of connections).",
      example: "import multiprocessing as mp\nimport threading\nimport asyncio\nimport time\n\n# CPU-bound: multiprocessing\ndef cpu_work(n):\n    count = 0\n    for i in range(n):\n        count += i\n    return count\n\n# I/O-bound: threading\ndef io_work(delay):\n    time.sleep(delay)\n    return delay\n\n# I/O-bound: asyncio\nasync def async_work(delay):\n    await asyncio.sleep(delay)\n    return delay\n\n# Compare performance\ndef benchmark():\n    # Multiprocessing for CPU\n    start = time.time()\n    with mp.Pool(4) as pool:\n        results = pool.map(cpu_work, [10000000] * 4)\n    mp_time = time.time() - start\n    \n    # Threading for I/O\n    start = time.time()\n    threads = [threading.Thread(target=io_work, args=(0.1,)) for _ in range(4)]\n    for t in threads: t.start()\n    for t in threads: t.join()\n    threading_time = time.time() - start\n    \n    # Asyncio for I/O\n    async def run_async():\n        await asyncio.gather(*[async_work(0.1) for _ in range(4)])\n    start = time.time()\n    asyncio.run(run_async())\n    async_time = time.time() - start\n    \n    print(f\"Multiprocessing (CPU): {mp_time:.2f}s\")\n    print(f\"Threading (I/O): {threading_time:.2f}s\")\n    print(f\"Asyncio (I/O): {async_time:.2f}s\")\n\n# ThreadPoolExecutor vs ProcessPoolExecutor\nfrom concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor\n\nwith ThreadPoolExecutor() as executor:\n    future = executor.submit(io_work, 0.1)\n    print(f\"ThreadPool: {future.result()}\")\n\nwith ProcessPoolExecutor() as executor:\n    future = executor.submit(cpu_work, 10000000)\n    print(f\"ProcessPool: {future.result()}\")\n\nprint(\"Choose model based on task type\")",
      output: "Multiprocessing (CPU): 1.50s\nThreading (I/O): 0.12s\nAsyncio (I/O): 0.11s\nThreadPool: 0.1\nProcessPool: 49999995000000\nChoose model based on task type",
      note: "Match concurrency model to task for optimal performance"
    },
    {
      question: "How do you implement thread-safe code in Python?",
      answer: "Use threading.Lock, RLock, Semaphore, or Condition for synchronization. Use Queue for thread-safe communication. Use atomic operations when possible. For multiprocessing, use multiprocessing.Lock. Consider using concurrent.futures for higher-level abstractions.",
      example: "import threading\nimport time\nfrom threading import Lock\n\n# Shared resource with lock\ncounter = 0\nlock = Lock()\n\ndef increment():\n    global counter\n    for _ in range(1000000):\n        lock.acquire()\n        counter += 1\n        lock.release()\n\n# RLock (reentrant lock)\nrlock = threading.RLock()\n\ndef recursive_lock(n):\n    rlock.acquire()\n    if n > 0:\n        recursive_lock(n-1)\n    rlock.release()\n\n# Semaphore (limit concurrent access)\nsemaphore = threading.Semaphore(3)\n\ndef limited_access(name):\n    with semaphore:\n        print(f\"{name} accessing\")\n        time.sleep(0.5)\n\n# Queue (thread-safe communication)\nfrom queue import Queue\n\nq = Queue()\n\ndef producer():\n    for i in range(5):\n        q.put(i)\n        print(f\"Produced: {i}\")\n\ndef consumer():\n    while True:\n        item = q.get()\n        if item is None:\n            break\n        print(f\"Consumed: {item}\")\n        q.task_done()\n\n# Thread-safe singleton\nclass Singleton:\n    _instance = None\n    _lock = Lock()\n    \n    def __new__(cls):\n        with cls._lock:\n            if cls._instance is None:\n                cls._instance = super().__new__(cls)\n        return cls._instance\n\n# Test\nthreads = [threading.Thread(target=increment) for _ in range(10)]\nfor t in threads: t.start()\nfor t in threads: t.join()\nprint(f\"Counter: {counter} (expected 10,000,000)\")\n\nprint(\"Thread-safe code with locks\")\n\n# Use RLock\nrecursive_lock(5)\n\n# Use Semaphore\nts = [threading.Thread(target=limited_access, args=(f\"T{i}\",)) for i in range(10)]\nfor t in ts: t.start()\nfor t in ts: t.join()\n\n# Use Queue\nprod = threading.Thread(target=producer)\ncons = threading.Thread(target=consumer)\nprod.start()\ncons.start()\nprod.join()\nq.put(None)\ncons.join()",
      output: "Counter: 10000000 (expected 10,000,000)\nThread-safe code with locks\nProduced: 0,1,2,3,4\nConsumed: 0,1,2,3,4",
      note: "Locks prevent race conditions on shared data"
    },
    {
      question: "What are Python's metaclass use cases beyond ORM?",
      answer: "Metaclasses used for: singleton pattern, automatic registration, API validation, deprecation warnings, attribute transformation, logging, access control, abstract base classes, and framework development. Django ORM uses metaclasses for model fields.",
      example: "# Automatic registration\nclass RegistryMeta(type):\n    registry = {}\n    \n    def __new__(cls, name, bases, attrs):\n        new_class = super().__new__(cls, name, bases, attrs)\n        if name != 'BasePlugin':\n            RegistryMeta.registry[name] = new_class\n        return new_class\n\nclass BasePlugin(metaclass=RegistryMeta):\n    pass\n\nclass PluginA(BasePlugin):\n    pass\n\nclass PluginB(BasePlugin):\n    pass\n\nprint(f\"Registered plugins: {list(RegistryMeta.registry.keys())}\")\n\n# Attribute validation\nclass ValidatorMeta(type):\n    def __new__(cls, name, bases, attrs):\n        for attr_name, attr_value in attrs.items():\n            if attr_name.startswith('validate_'):\n                field = attr_name.replace('validate_', '')\n                attrs[f'_{field}'] = None\n                \n                # Create property with validation\n                def make_property(field_name):\n                    def getter(self):\n                        return getattr(self, f'_{field_name}')\n                    def setter(self, value):\n                        attr_value(self, value)\n                        setattr(self, f'_{field_name}', value)\n                    return property(getter, setter)\n                \n                attrs[field] = make_property(field)\n        return super().__new__(cls, name, bases, attrs)\n\nclass User(metaclass=ValidatorMeta):\n    def validate_age(self, value):\n        if not isinstance(value, int) or value < 0:\n            raise ValueError(\"Age must be positive integer\")\n    \n    def validate_name(self, value):\n        if not value or not isinstance(value, str):\n            raise ValueError(\"Name cannot be empty\")\n\n# Deprecation warning\nimport warnings\nclass DeprecationMeta(type):\n    def __new__(cls, name, bases, attrs):\n        if 'old_method' in attrs:\n            warnings.warn(f\"{name} uses deprecated method\", DeprecationWarning)\n        return super().__new__(cls, name, bases, attrs)\n\nclass OldClass(metaclass=DeprecationMeta):\n    def old_method(self):\n        pass\n\nprint(\"Metaclass examples complete\")",
      output: "Registered plugins: ['PluginA', 'PluginB']\nMetaclass examples complete",
      note: "Metaclasses are powerful but complex; use sparingly"
    },
    {
      question: "How do you implement custom collections using ABC?",
      answer: "Use collections.abc module to create custom collections. Implement required methods for each ABC: Container (__contains__), Sized (__len__), Iterable (__iter__), Sequence (__getitem__, __len__), MutableSequence (add __setitem__, __delitem__, insert).",
      example: "from collections.abc import MutableSequence, Sequence, Set\n\n# Custom mutable sequence\nclass LinkedList(MutableSequence):\n    class Node:\n        def __init__(self, value):\n            self.value = value\n            self.next = None\n    \n    def __init__(self):\n        self.head = None\n        self._len = 0\n    \n    def __getitem__(self, index):\n        if index < 0 or index >= self._len:\n            raise IndexError\n        current = self.head\n        for _ in range(index):\n            current = current.next\n        return current.value\n    \n    def __setitem__(self, index, value):\n        if index < 0 or index >= self._len:\n            raise IndexError\n        current = self.head\n        for _ in range(index):\n            current = current.next\n        current.value = value\n    \n    def __delitem__(self, index):\n        if index < 0 or index >= self._len:\n            raise IndexError\n        if index == 0:\n            self.head = self.head.next\n        else:\n            prev = self.head\n            for _ in range(index - 1):\n                prev = prev.next\n            prev.next = prev.next.next\n        self._len -= 1\n    \n    def insert(self, index, value):\n        if index < 0 or index > self._len:\n            raise IndexError\n        new_node = self.Node(value)\n        if index == 0:\n            new_node.next = self.head\n            self.head = new_node\n        else:\n            prev = self.head\n            for _ in range(index - 1):\n                prev = prev.next\n            new_node.next = prev.next\n            prev.next = new_node\n        self._len += 1\n    \n    def __len__(self):\n        return self._len\n    \n    def __iter__(self):\n        current = self.head\n        while current:\n            yield current.value\n            current = current.next\n\n# Custom immutable set\nclass ImmutableSet(Set):\n    def __init__(self, items):\n        self._items = frozenset(items)\n    \n    def __contains__(self, item):\n        return item in self._items\n    \n    def __iter__(self):\n        return iter(self._items)\n    \n    def __len__(self):\n        return len(self._items)\n\n# Usage\nll = LinkedList()\nll.append(1)\nll.append(2)\nll.insert(1, 5)\nprint(f\"Linked list: {list(ll)}\")\nprint(f\"Length: {len(ll)}\")\n\nimmutable = ImmutableSet([1, 2, 3])\nprint(f\"Immutable set: {1 in immutable}\")\n\n# Check ABC compliance\nfrom collections.abc import MutableSequence, Set\nprint(f\"LinkedList is MutableSequence: {isinstance(ll, MutableSequence)}\")\nprint(f\"ImmutableSet is Set: {isinstance(immutable, Set)}\")",
      output: "Linked list: [1, 5, 2]\nLength: 3\nImmutable set: True\nLinkedList is MutableSequence: True\nImmutableSet is Set: True",
      note: "Implement ABCs for custom collections to work with built-in functions"
    },
    {
      question: "What are Python's advanced metaprogramming techniques?",
      answer: "Metaprogramming includes: decorators, metaclasses, descriptors, __getattr__/__setattr__, __getattribute__, property, class decorators, __call__, __new__, import hooks, and bytecode manipulation. Used for ORMs, frameworks, DSLs, and code generation.",
      example: "# __getattr__ and __setattr__\nclass DynamicAttributes:\n    def __init__(self):\n        self._data = {}\n    \n    def __getattr__(self, name):\n        if name in self._data:\n            return self._data[name]\n        raise AttributeError(f\"{name} not found\")\n    \n    def __setattr__(self, name, value):\n        if name == '_data':\n            super().__setattr__(name, value)\n        else:\n            self._data[name] = value\n    \n    def __delattr__(self, name):\n        if name in self._data:\n            del self._data[name]\n        else:\n            super().__delattr__(name)\n\n# __call__ for callable objects\nclass Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    \n    def __call__(self, value):\n        return value * self.factor\n\n# __new__ for instance control\nclass LimitedInstances:\n    _instances = []\n    _max_instances = 2\n    \n    def __new__(cls):\n        if len(cls._instances) >= cls._max_instances:\n            raise RuntimeError(f\"Max {cls._max_instances} instances\")\n        instance = super().__new__(cls)\n        cls._instances.append(instance)\n        return instance\n\n# Class decorator\ndef add_repr(cls):\n    def __repr__(self):\n        return f\"{cls.__name__}({self.__dict__})\"\n    cls.__repr__ = __repr__\n    return cls\n\n@add_repr\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n# Usage\nobj = DynamicAttributes()\nobj.name = \"Alice\"\nprint(f\"Dynamic: {obj.name}\")\n\ndouble = Multiplier(2)\nprint(f\"Multiplier: {double(5)}\")\n\ntry:\n    l1 = LimitedInstances()\n    l2 = LimitedInstances()\n    l3 = LimitedInstances()\nexcept RuntimeError as e:\n    print(f\"{e}\")\n\nperson = Person(\"Bob\", 30)\nprint(person)\n\n# __getattribute__ (use carefully)\nclass TraceAccess:\n    def __init__(self, value):\n        self.value = value\n    \n    def __getattribute__(self, name):\n        print(f\"Accessing: {name}\")\n        return super().__getattribute__(name)\n\ntrace = TraceAccess(42)\nprint(f\"{trace.value}\")\n\nprint(\"Advanced metaprogramming complete\")",
      output: "Dynamic: Alice\nMultiplier: 10\nMax 2 instances\nPerson({'name': 'Bob', 'age': 30})\nAccessing: value\n42\nAdvanced metaprogramming complete",
      note: "Metaprogramming is powerful but can make code harder to understand"
    },
    {
      question: "How do you profile memory usage in Python?",
      answer: "Use memory_profiler for line-by-line memory usage, tracemalloc for allocation tracing, objgraph for object references, pympler for object sizes, and guppy/heapy for heap analysis. Also use sys.getsizeof() for object sizes and gc.get_objects() for garbage collector.",
      example: "# memory_profiler (install: pip install memory-profiler)\nfrom memory_profiler import profile\nimport tracemalloc\nimport sys\n\n@profile\ndef memory_intensive():\n    large_list = [i for i in range(1000000)]\n    large_dict = {i: i**2 for i in range(100000)}\n    del large_list\n    return large_dict\n\n# tracemalloc for allocation tracking\ntracemalloc.start()\n\n# Before allocation\nsnapshot1 = tracemalloc.take_snapshot()\n\n# Allocate memory\ndata = [i for i in range(1000000)]\n\n# After allocation\nsnapshot2 = tracemalloc.take_snapshot()\ntop_stats = snapshot2.compare_to(snapshot1, 'lineno')\n\nprint(\"Top memory allocations:\")\nfor stat in top_stats[:3]:\n    print(stat)\n\n# Object sizes\nprint(f\"Empty list: {sys.getsizeof([])} bytes\")\nprint(f\"List of 1000 ints: {sys.getsizeof([i for i in range(1000)])} bytes\")\nprint(f\"Dictionary: {sys.getsizeof({})} bytes\")\n\n# gc module\nimport gc\nprint(f\"Garbage collector: {gc.isenabled()}\")\nprint(f\"Objects tracked: {len(gc.get_objects())}\")\n\n# pympler (pip install pympler)\nfrom pympler import asizeof\nbig_obj = [i for i in range(10000)]\nprint(f\"Pympler size: {asizeof.asizeof(big_obj)} bytes\")\n\n# tracemalloc snapshot\ntracemalloc.stop()\n\nresult = memory_intensive()\nprint(\"Memory profiling complete\")",
      output: "Top memory allocations:\n...\nEmpty list: 56 bytes\nList of 1000 ints: 8056 bytes\nDictionary: 64 bytes\nGarbage collector: True\nObjects tracked: 1000\nPympler size: 80056 bytes\nMemory profiling complete",
      note: "Profile memory before optimizing; tracemalloc tracks allocations"
    }
  ]
};

export default interview;
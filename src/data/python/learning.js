// /data/python/learning.js

export const learning = {
  basic: {
    title: "🐍 PYTHON COMPLETE DOCUMENTATION",
    description: "Comprehensive reference covering Python from basics to advanced: introduction, I/O, variables, operators, keywords, data types, conditionals, loops, functions, data structures (strings, lists, tuples, dicts, sets, arrays), collections (Counter, heapq, deque, OrderedDict, defaultdict), DSA, OOP, iterators, exceptions, file handling, databases (MongoDB, MySQL), modules, and libraries.",
    topics: [
      {
        name: "1. Introduction to Python",
        description: "Python is an interpreted, high‑level, dynamically typed language created by Guido van Rossum in 1991. It emphasises code readability with significant whitespace. Python supports multiple programming paradigms: procedural, object‑oriented, and functional. It comes with a vast standard library (batteries included) and is used for web development, data science, AI, automation, scripting, and more. The interpreter reads and executes code line by line, making debugging easy. Python's dynamic typing means you don't have to declare variable types; the interpreter infers them at runtime.",
        code: "print('Hello, Python!')\nname = input('Enter your name: ')\nprint(f'Welcome, {name}!')",
        lineByLine: ["print() outputs text to the console.", "input() reads a line of user input as a string.", "f‑string embeds the variable `name` into the output string."],
        simpleMeaning: "Python is an easy‑to‑learn, versatile language.",
        output: "Hello, Python!\\nEnter your name: Alice\\nWelcome, Alice!",
        note: "Always use Python 3.x (3.10+ recommended). VS Code with the Python extension, PyCharm, or Jupyter Notebook are great for beginners.",
        answer: "Q: Is Python compiled or interpreted? A: Python is interpreted. The source code is compiled to bytecode (.pyc) which is then executed by the Python Virtual Machine, making it platform‑independent."
      },
      {
        name: "2. Applications of Python",
        description: "Python's versatility makes it a top choice for many domains: Web Development (Django, Flask, FastAPI), Data Science & Analytics (Pandas, NumPy, SciPy), Artificial Intelligence & Machine Learning (TensorFlow, PyTorch, scikit‑learn), Automation & Scripting (automating repetitive tasks), Game Development (Pygame), Desktop GUI Applications (Tkinter, PyQt, Kivy), Cybersecurity (penetration testing tools), Internet of Things (Raspberry Pi, MicroPython), Scientific Computing, Financial Analysis, and even Mobile Apps (Kivy, BeeWare). Major companies like Google, Netflix, Spotify, Instagram, and NASA rely on Python.",
        code: "# Quick data analysis example\nimport pandas as pd\ndata = {'Name': ['Alice', 'Bob'], 'Age': [25, 30]}\ndf = pd.DataFrame(data)\nprint(df)",
        lineByLine: ["import pandas (third‑party library for data manipulation)", "create a dictionary with two keys, each holding a list", "convert dictionary to a pandas DataFrame (table)", "print the table – shows two rows, two columns"],
        simpleMeaning: "Python is used everywhere – from websites to artificial intelligence.",
        output: "   Name  Age\\n0 Alice   25\\n1   Bob   30",
        note: "Install required libraries with `pip install pandas` (or any other library).",
        answer: "Q: What is the most popular Python web framework? A: Django (full‑stack) and Flask (micro‑framework) are the most widely used; FastAPI is rising for asynchronous APIs."
      },
      {
        name: "3. Input and Output",
        description: "`print()` is the primary output function; it can take multiple arguments and accepts separators (`sep`) and end characters (`end`). `input()` reads a line from the user and always returns a string. For numeric input, convert using `int()` or `float()`. String formatting methods: f‑strings (Python 3.6+, fastest and most readable), `.format()` method, and `%`‑style formatting (legacy). Use escape sequences like `\\n` for newline, `\\t` for tab.",
        code: "name = input('What is your name? ')\nprint(f'Hello, {name}')\nprint('Hello, {}'.format(name))",
        lineByLine: ["prompt user and store input in `name`", "f‑string embedding", "`.format()` method – placeholder `{}` is replaced by `name`"],
        simpleMeaning: "`input()` gets data from the user, `print()` shows output.",
        output: "What is your name? Alice\\nHello, Alice\\nHello, Alice",
        note: "`input()` always returns a string. Convert with `int()` if you need a number.",
        answer: "Q: How do you print without a newline? A: Use `print('text', end='')` to avoid the automatic newline."
      },
      {
        name: "4. Variables",
        description: "Variables are names that refer to values. Python is dynamically typed – a variable can hold any type, and its type can change. Rules: must start with a letter or underscore, case‑sensitive, can contain letters, digits, underscores (no spaces). Convention: use `snake_case` for variable names. Assignment uses `=`. Multiple assignment: `a, b = 1, 2` swaps values easily. Constants (by convention) are written in `UPPER_CASE` but Python does not enforce constancy.",
        code: "x = 5\nname = 'Alice'\npi = 3.14\nprint(x, name, pi)",
        lineByLine: ["assign integer 5 to `x`", "string 'Alice' to `name`", "float 3.14 to `pi`", "print all three values"],
        simpleMeaning: "Variables are containers for storing data values.",
        output: "5 Alice 3.14",
        note: "Variable names cannot start with a number; avoid reserved keywords like `if`, `for`, `while`.",
        answer: "Q: Can a variable change its type? A: Yes, Python is dynamically typed: `x = 10; x = 'hello'` is allowed."
      },
      {
        name: "5. Operators",
        description: "Operators perform operations on operands. Arithmetic: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (float division), `//` (floor division – integer result), `%` (modulo – remainder), `**` (exponentiation). Comparison: `==` (equal), `!=` (not equal), `>`, `<`, `>=`, `<=` (return booleans). Logical: `and`, `or`, `not` (short‑circuit). Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`. Membership: `in`, `not in`. Identity: `is`, `is not` (compare object identity).",
        code: "a, b = 10, 3\nprint(a + b, a - b, a * b, a / b, a // b, a % b, a ** b)\nprint(a > b, a == b)\nprint((a > 5) and (b < 5))",
        lineByLine: ["assign 10 to `a`, 3 to `b` (multiple assignment)", "arithmetic operations – prints results separated by spaces", "comparison operators – `True` or `False`", "logical `and` – both conditions must be true"],
        simpleMeaning: "Operators let you perform calculations and make comparisons.",
        output: "13 7 30 3.3333333333333335 3 1 1000\\nTrue False\\nTrue",
        note: "`/` always returns a float; `//` returns an integer (floor). Use `%` to check divisibility.",
        answer: "Q: What is the difference between `==` and `is`? A: `==` compares values, while `is` compares object identity (memory address)."
      },
      {
        name: "6. Keywords",
        description: "Keywords are reserved words that have special meaning in Python. They cannot be used as variable names. Full list: `False`, `None`, `True`, `and`, `as`, `assert`, `async`, `await`, `break`, `class`, `continue`, `def`, `del`, `elif`, `else`, `except`, `finally`, `for`, `from`, `global`, `if`, `import`, `in`, `is`, `lambda`, `nonlocal`, `not`, `or`, `pass`, `raise`, `return`, `try`, `while`, `with`, `yield`. Use `keyword.kwlist` to see them programmatically.",
        code: "# Using a keyword correctly\nif True:\n    pass  # `pass` is a keyword that does nothing",
        lineByLine: ["`if` keyword starts a conditional block", "`True` is a boolean keyword", "`pass` is a placeholder – required to avoid IndentationError"],
        simpleMeaning: "Keywords are the building blocks of Python syntax; you cannot rename them.",
        output: "(no output)",
        note: "`pass` is useful for stubbing functions, classes, or loops that you plan to implement later.",
        answer: "Q: Can I use `class` as a variable name? A: No, `class` is a keyword and will raise a SyntaxError."
      },
      {
        name: "7. Data Types",
        description: "Data types classify values and determine what operations are possible. Immutable types: `int`, `float`, `complex`, `str`, `bool`, `tuple`, `frozenset`, `bytes`. Mutable types: `list`, `dict`, `set`, `bytearray`. Use `type()` to check the type of a value. Casting: `int()`, `float()`, `str()`, `bool()`, `list()`, `tuple()`, `dict()`, `set()`. Python also has `NoneType` (only value `None`) representing absence of value.",
        code: "print(type(42), type(3.14), type('text'), type(True), type(None))",
        lineByLine: ["`type(42)` → <class 'int'>", "`type(3.14)` → float", "`type('text')` → str", "`type(True)` → bool", "`type(None)` → NoneType"],
        simpleMeaning: "Data types tell Python what kind of data you're working with.",
        output: "<class 'int'> <class 'float'> <class 'str'> <class 'bool'> <class 'NoneType'>",
        note: "Use `isinstance(obj, type)` for type checking (preferred over `type()` when inheritance matters).",
        answer: "Q: Are Python strings mutable? A: No, strings are immutable. Methods like `upper()` return a new string."
      },
      {
        name: "8. Conditional Statements",
        description: "Conditional statements control the flow of execution based on conditions. `if` executes a block if the condition is true. `elif` (else if) checks another condition if previous ones were false. `else` runs when all conditions are false. Indentation (4 spaces) is mandatory to define blocks. The ternary operator: `value_if_true if condition else value_if_false`. Use parentheses for complex conditions.",
        code: "x = 10\nif x > 0:\n    print('positive')\nelif x == 0:\n    print('zero')\nelse:\n    print('negative')",
        lineByLine: ["assign 10 to `x`", "check if `x` is positive – true, so execute `print('positive')`", "`elif` and `else` skipped"],
        simpleMeaning: "Choose which code to run based on a condition.",
        output: "positive",
        note: "You can have as many `elif` blocks as needed. Use `if`‑`elif`‑`else` instead of multiple `if`s when only one branch should run.",
        answer: "Q: What is the difference between `if` and `elif`? A: `elif` is only checked if all previous `if`/`elif` conditions were false; multiple `if`s would check every condition regardless."
      },
      {
        name: "9. Loops",
        description: "Loops repeat code execution. `for` iterates over any iterable (list, tuple, string, range, dict, etc.). `while` repeats as long as a condition remains true. `break` exits the loop entirely. `continue` skips the rest of the current iteration and moves to the next. An `else` clause on a loop runs only if the loop completed normally (no `break`). The `enumerate()` function provides index and value when iterating. `zip()` allows parallel iteration.",
        code: "for i in range(3):\n    print(i)\n\ncount = 0\nwhile count < 2:\n    print(count)\n    count += 1",
        lineByLine: ["`range(3)` produces 0,1,2 – loop variable `i` takes each value", "print `i`", "`count` initialised to 0", "while `count` < 2, execute body", "print current `count`", "increment `count` to avoid infinite loop"],
        simpleMeaning: "Loops repeat actions – `for` for known number of iterations, `while` when condition‑based.",
        output: "0\\n1\\n2\\n0\\n1",
        note: "Use `range(start, stop, step)` for more control. `break` and `continue` work in both loop types.",
        answer: "Q: How do you loop over both index and value? A: Use `for idx, val in enumerate(some_list):`."
      },
      {
        name: "10. Functions",
        description: "Functions are reusable blocks of code defined with `def`. A function may take parameters and can return a value (default `None`). Use docstrings (`'''...'''` or `\"\"\"...\"\"\"`) to document the function. Parameters can be positional, keyword, or have default values. Return a value with `return` (exits the function). Functions are first‑class objects – can be assigned, passed, returned.",
        code: "def add(a, b=5):\n    '''Return sum of a and b (b defaults to 5)'''\n    return a + b\n\nprint(add(3))\nprint(add(3, 7))",
        lineByLine: ["`def` defines function `add` with parameters `a` (required) and `b` (default 5)", "docstring describing the function", "`return` sends the sum back to the caller", "call with one argument – `b` uses default 5", "call with two arguments – `b` is overridden to 7"],
        simpleMeaning: "Functions bundle code for reuse, accepting inputs and returning outputs.",
        output: "8\\n10",
        note: "Use keyword arguments for clarity: `add(b=7, a=3)`. Default parameters must come after non‑default.",
        answer: "Q: What is the purpose of a docstring? A: It documents the function and can be accessed via `help(add)` or `add.__doc__`."
      },
      {
        name: "11. `pass` in Functions",
        description: "`pass` is a null operation – it does nothing. It is used as a placeholder when syntax requires a statement but you don't want any action. Common uses: stubbing a function that will be implemented later, creating an empty class, or as a placeholder in loops that will be filled in later. `pass` is also useful during development to avoid `IndentationError` while planning code structure.",
        code: "def placeholder():\n    pass  # TODO: implement later\n\nplaceholder()",
        lineByLine: ["function `placeholder` defined", "`pass` does nothing – allows the function to be defined without body", "calling the function does nothing (no error)"],
        simpleMeaning: "`pass` is a placeholder that tells Python to do nothing.",
        output: "(no output)",
        note: "`pass` differs from comments; it is an actual statement. Use it when you need an indented block but no code.",
        answer: "Q: Can I use `...` (Ellipsis) instead of `pass`? A: Yes, `...` also works as a placeholder, but `pass` is more conventional for empty blocks."
      },
      {
        name: "12. Global and Local Variables",
        description: "Variables defined inside a function are local (cannot be accessed outside). Variables defined at the top level are global (module‑level). To modify a global variable inside a function, use the `global` keyword. Inside nested functions, use `nonlocal` to modify a variable from the enclosing (non‑global) scope. Avoid modifying globals unnecessarily because it can lead to side effects and harder debugging.",
        code: "x = 10  # global\ndef outer():\n    y = 20  # enclosing\n    def inner():\n        nonlocal y\n        global x\n        y = 30\n        x = 40\n    inner()\n    print('y after inner:', y)\nouter()\nprint('x after outer:', x)",
        lineByLine: ["global variable `x`", "`outer` function defines `y`", "`inner` function", "`nonlocal y` allows modification of `y` in the enclosing scope", "`global x` allows modification of global `x`", "change `y` to 30", "change `x` to 40", "call inner", "print changed `y`", "after outer finishes, print changed `x`"],
        simpleMeaning: "Scope determines where a variable is visible. Use `global` and `nonlocal` to rebind variables in outer scopes.",
        output: "y after inner: 30\\nx after outer: 40",
        note: "Reading a global variable does not require `global`; only rebinding (assignment) does.",
        answer: "Q: What is the difference between `global` and `nonlocal`? A: `global` refers to module‑level variables; `nonlocal` refers to variables in the nearest enclosing (non‑global) scope."
      },
      {
        name: "13. Recursion",
        description: "Recursion occurs when a function calls itself. A recursive function must have a base case that stops recursion, and a recursive case that progresses toward the base case. Recursion is elegant for problems that can be broken into smaller, similar subproblems (e.g., factorial, Fibonacci, tree traversal). Python has a recursion depth limit (default ~1000) to prevent stack overflow. Use `sys.setrecursionlimit()` to increase it, but be cautious.",
        code: "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)\n\nprint(factorial(5))",
        lineByLine: ["define `factorial(n)`", "base case: if `n` ≤ 1, return 1", "recursive case: `n * factorial(n-1)`", "call factorial(5) → 5 * 4 * 3 * 2 * 1 = 120"],
        simpleMeaning: "Recursion solves problems by breaking them into smaller versions of the same problem.",
        output: "120",
        note: "Iterative solutions are often more efficient in Python. Use recursion when it improves clarity (e.g., tree algorithms).",
        answer: "Q: What happens if there is no base case? A: The function will call itself indefinitely, eventually causing a `RecursionError` due to stack overflow."
      },
      {
        name: "14. *args and **kwargs",
        description: "`*args` allows a function to accept any number of positional arguments; the arguments are collected into a tuple named `args`. `**kwargs` accepts any number of keyword arguments; they are collected into a dictionary named `kwargs`. These are commonly used in decorators and when the number of arguments is unknown. The names `args` and `kwargs` are conventions; you can use any name after `*` or `**`.",
        code: "def show_args(*args, **kwargs):\n    print('args:', args)\n    print('kwargs:', kwargs)\n\nshow_args(1, 2, name='Alice', age=25)",
        lineByLine: ["function that takes variable positional and keyword arguments", "print the tuple of positional args", "print the dict of keyword args", "call: `1,2` become `args`; `name='Alice', age=25` become `kwargs`"],
        simpleMeaning: "`*args` and `**kwargs` let your function accept any number of arguments.",
        output: "args: (1, 2)\\nkwargs: {'name': 'Alice', 'age': 25}",
        note: "`*args` must come before `**kwargs` in the function definition. You can also use them to unpack arguments: `func(*list, **dict)`.",
        answer: "Q: Can I use a different name instead of `args` and `kwargs`? A: Yes, the syntax is `*custom_name` and `**custom_name`; the names are conventions."
      },
      {
        name: "15. First Class Functions",
        description: "In Python, functions are first‑class objects. This means you can assign them to variables, pass them as arguments to other functions, return them from functions, and store them in data structures. This property enables functional programming patterns, decorators, and callbacks. Functions are objects of type `function` and have attributes like `__name__`, `__doc__`, etc.",
        code: "def square(x):\n    return x**2\n\ndef apply(func, value):\n    return func(value)\n\nprint(apply(square, 5))",
        lineByLine: ["define function `square`", "define `apply` that takes a function `func` and a value, calls `func` with the value", "pass `square` (the function object, not its result) to `apply`", "`apply` calls `square(5)` and returns 25"],
        simpleMeaning: "Functions are treated like any other object – they can be passed around.",
        output: "25",
        note: "This concept is the basis for higher‑order functions like `map`, `filter`, and decorators.",
        answer: "Q: How do you check if an object is callable? A: Use `callable(obj)`; it returns `True` for functions, methods, classes, and any object implementing `__call__`."
      },
      {
        name: "16. Lambda Functions",
        description: "Lambda functions are anonymous, single‑expression functions defined using the `lambda` keyword. Syntax: `lambda parameters: expression`. They are limited to one expression (no statements). Lambdas are often used with `map`, `filter`, `sorted`, and other higher‑order functions. They are useful for short, throwaway functions that would be overkill to define with `def`. However, for complex logic, a named function is more readable.",
        code: "square = lambda x: x**2\nprint(square(5))\n\nnums = [1,2,3]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)",
        lineByLine: ["lambda that squares its argument, assigned to `square`", "call the lambda", "list of numbers", "`map` applies lambda to each element; convert to list", "print `[1,4,9]`"],
        simpleMeaning: "Lambda creates a small, unnamed function on the fly.",
        output: "25\\n[1,4,9]",
        note: "Avoid using lambda for complex logic; define a normal function instead for readability.",
        answer: "Q: Can a lambda have multiple statements? A: No, a lambda body must be a single expression. Use `def` for multiple statements."
      },
      {
        name: "17. Map, Reduce, Filter",
        description: "`map(function, iterable)` applies the function to every element of the iterable and returns an iterator. `filter(function, iterable)` returns an iterator of elements for which the function returns true. `reduce(function, iterable)` (from `functools`) cumulatively applies the function to the items, reducing them to a single value. These are functional programming tools. Often, list comprehensions are more readable than `map`/`filter`.",
        code: "from functools import reduce\nnums = [1,2,3,4]\nsquared = list(map(lambda x: x**2, nums))\nevens = list(filter(lambda x: x%2==0, nums))\nproduct = reduce(lambda a,b: a*b, nums)\nprint(squared, evens, product)",
        lineByLine: ["import `reduce`", "list of numbers", "`map` squares each element", "`filter` keeps even numbers", "`reduce` multiplies all numbers (1*2*3*4=24)", "print results"],
        simpleMeaning: "Map transforms, filter selects, reduce combines.",
        output: "[1,4,9,16] [2,4] 24",
        note: "List comprehensions can replace `map`/`filter`: `[x**2 for x in nums]`, `[x for x in nums if x%2==0]`.",
        answer: "Q: What is the advantage of `reduce`? A: It combines a sequence into a single value (e.g., sum, product, max) without explicit loops."
      },
      {
        name: "18. Inner Function",
        description: "An inner function (nested function) is defined inside another function. It has access to the outer function's variables (closure). Inner functions are useful for encapsulating helper logic that should not be accessible outside the outer function, and for creating closures that retain state. Decorators are a common use case for inner functions.",
        code: "def outer(msg):\n    def inner():\n        print(msg)\n    return inner\n\nfunc = outer('Hello')\nfunc()",
        lineByLine: ["`outer` takes `msg`", "`inner` is defined inside `outer`", "`inner` accesses `msg` from the outer scope (closure)", "`outer` returns the `inner` function object (without calling it)", "`func` now holds the closure", "calling `func()` executes `inner`, printing 'Hello'"],
        simpleMeaning: "Inner functions are functions defined inside other functions; they remember the outer function's variables even after the outer returns.",
        output: "Hello",
        note: "Inner functions are the foundation of decorators and factory functions.",
        answer: "Q: What is a closure? A: A closure is an inner function that captures variables from its enclosing scope and keeps them alive after the outer function has finished."
      },
      {
        name: "19. Decorators",
        description: "Decorators are functions that modify the behaviour of other functions (or classes). They are applied using the `@decorator_name` syntax, which is syntactic sugar for `function = decorator(function)`. Decorators are used for logging, timing, access control, caching, and more. To preserve metadata (like `__name__`, `__doc__`), use `functools.wraps` inside the decorator. Decorators can also accept arguments (nested decorator factories).",
        code: "def timer(func):\n    import time\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f'{func.__name__} took {time.time()-start:.4f}s')\n        return result\n    return wrapper\n\n@timer\ndef slow():\n    import time\n    time.sleep(1)\n    return 'Done'\n\nprint(slow())",
        lineByLine: ["define decorator `timer`", "inner `wrapper` accepts any arguments", "record start time", "call original function", "print elapsed time", "return result", "`@timer` is equivalent to `slow = timer(slow)`", "decorated function `slow`", "after calling, timing is printed"],
        simpleMeaning: "Decorators add extra behaviour (like timing) to functions without changing their code.",
        output: "slow took 1.0012s\\nDone",
        note: "Always use `functools.wraps` inside decorators to avoid breaking introspection.",
        answer: "Q: Can you stack multiple decorators? A: Yes; `@deco1\\n@deco2\\ndef f():` applies `deco2` first, then `deco1` (bottom‑to‑top)."
      },
      {
        name: "20. Strings",
        description: "Strings are immutable sequences of Unicode characters. They can be created with single quotes (`'`), double quotes (`\"`), or triple quotes for multiline strings. Strings support indexing, slicing, and many methods. Common methods: `lower()`, `upper()`, `strip()`, `split()`, `join()`, `replace()`, `find()`, `count()`, `startswith()`, `endswith()`, `format()`, f‑strings. Slicing syntax: `[start:stop:step]`. Join is efficient for concatenating many strings.",
        code: "s = '  Hello Python  '\nprint(s.strip())\nprint(s.upper())\nprint(s.replace('Python', 'World'))\nwords = s.strip().split()\nprint('-'.join(words))",
        lineByLine: ["string with leading/trailing spaces", "`strip()` removes whitespace", "`upper()` converts to uppercase", "`replace()` substitutes substring", "`split()` breaks into list of words (by whitespace)", "`join()` concatenates list with `-` as separator"],
        simpleMeaning: "Strings are text that you can clean, split, join, and transform.",
        output: "Hello Python\\n  HELLO PYTHON  \\n  Hello World  \\n['Hello','Python']\\nHello-Python",
        note: "Strings are immutable – all methods return a new string; they do not modify the original.",
        answer: "Q: How do you efficiently concatenate many strings? A: Use `''.join(list_of_strings)` – it is much faster than using `+` in a loop."
      },
      {
        name: "21. Lists",
        description: "Lists are ordered, mutable collections that can hold any type of elements. They are defined with square brackets `[]`. Lists support indexing, slicing, and various methods: `append()`, `insert()`, `extend()`, `remove()`, `pop()`, `sort()`, `reverse()`, `index()`, `count()`, `copy()`. List comprehensions provide a concise way to create lists. Lists are zero‑indexed (`list[0]` is first) and support negative indexing (`list[-1]` last).",
        code: "fruits = ['apple', 'banana', 'cherry']\nfruits.append('orange')\nfruits.insert(1, 'kiwi')\nfruits.remove('banana')\nprint(fruits)\nprint([x**2 for x in range(5)])",
        lineByLine: ["create list of strings", "append adds to the end", "insert at position 1", "remove first occurrence of 'banana'", "print updated list", "list comprehension squares numbers 0‑4"],
        simpleMeaning: "Lists store multiple items in order; you can add, remove, or change items.",
        output: "['apple','kiwi','cherry','orange']\\n[0,1,4,9,16]",
        note: "Use `pop()` to remove and return the last element; use `del fruits[0]` to delete by index.",
        answer: "Q: What is the difference between `append` and `extend`? A: `append` adds a single element, `extend` adds each element of an iterable to the list."
      },
      {
        name: "22. Tuples",
        description: "Tuples are ordered, immutable collections. They are defined with parentheses `()`. Like lists, they support indexing and slicing, but cannot be modified after creation (no `append`, `insert`, etc.). Tuples are faster than lists and can be used as dictionary keys (because they are hashable). Tuples are often used for fixed data (e.g., coordinates, database records). Unpacking: `a, b = (1, 2)`. A single‑element tuple requires a trailing comma: `(1,)`.",
        code: "rgb = (255, 128, 0)\nprint(rgb[1])\nr, g, b = rgb\nprint(r, g, b)",
        lineByLine: ["create tuple of three integers", "access element at index 1", "tuple unpacking assigns each value to a variable", "print unpacked values"],
        simpleMeaning: "Tuples are like lists but cannot be changed – good for fixed data.",
        output: "128\\n255 128 0",
        note: "Named tuples (`collections.namedtuple`) add field names.",
        answer: "Q: Why use a tuple instead of a list? A: Tuples are immutable, making them lighter and safe to use as dictionary keys. They also clearly indicate the data size and structure."
      },
      {
        name: "23. Dictionaries",
        description: "Dictionaries store key‑value pairs. Keys must be immutable (strings, numbers, tuples) and unique. Values can be any type. Defined with curly braces `{}` or `dict()`. Access values with `dict[key]` or `get(key, default)` (avoids KeyError). Methods: `keys()`, `values()`, `items()`, `update()`, `pop()`, `popitem()`. Dictionary comprehensions: `{k: v for ...}`. From Python 3.7+, dictionaries preserve insertion order.",
        code: "person = {'name': 'Alice', 'age': 25}\nperson['city'] = 'New York'\nprint(person.get('country', 'USA'))\nfor k, v in person.items():\n    print(f'{k}: {v}')",
        lineByLine: ["create dict with two keys", "add new key‑value pair", "`get()` returns default if key missing", "iterate over `items()` (key‑value pairs)", "print each"],
        simpleMeaning: "Dictionary maps keys to values – like a phonebook.",
        output: "USA\\nname: Alice\\nage: 25\\ncity: New York",
        note: "Use `in` to check key existence: `if 'name' in person:`.",
        answer: "Q: What happens if you use a key that already exists? A: The old value is overwritten; keys are unique."
      },
      {
        name: "24. Sets",
        description: "Sets are unordered collections of unique, immutable elements. Defined with curly braces `{}` or `set()`. Duplicates are automatically removed. Sets support mathematical operations: union (`|`), intersection (`&`), difference (`-`), symmetric difference (`^`). Methods: `add()`, `remove()`, `discard()` (no error if not present), `pop()`, `union()`, `intersection()`, etc. Set comprehensions: `{x for x in ...}`.",
        code: "set_a = {1, 2, 3, 3}\nset_b = {3, 4, 5}\nprint(set_a)\nprint(set_a | set_b)\nprint(set_a & set_b)",
        lineByLine: ["set with duplicate 3 – only one stored", "second set", "print unique elements in `set_a`", "union (all elements)", "intersection (common elements)"],
        simpleMeaning: "Sets store unique items, perfect for removing duplicates and comparing groups.",
        output: "{1,2,3}\\n{1,2,3,4,5}\\n{3}",
        note: "Set elements must be immutable (no lists or dicts). To make a set of lists, use tuple of lists.",
        answer: "Q: How do you remove all duplicates from a list? A: `unique = list(set(mylist))` (order not preserved). For order preservation, use `dict.fromkeys(mylist)` or loop."
      },
      {
        name: "25. Arrays",
        description: "The `array` module provides arrays of homogeneous numeric types (type codes: 'i' for signed int, 'f' for float, 'd' for double, etc.). Compared to lists, arrays are more memory‑efficient for large numeric data but support fewer methods. For heavy numerical work, the NumPy library is far more powerful. You can also use `bytearray` for mutable bytes.",
        code: "from array import array\narr = array('i', [1,2,3,4])\narr.append(5)\nprint(arr[2])",
        lineByLine: ["import array module", "create array of signed integers from a list", "append an element (like list)", "access element at index 2"],
        simpleMeaning: "Arrays are efficient numeric containers, but for heavy work use NumPy.",
        output: "3",
        note: "Type code 'i' is machine integer; 'l' for long, 'f' for float. Use `array.typecodes` to see all.",
        answer: "Q: Why use array instead of list for numbers? A: Arrays use less memory and are faster for numeric operations, but they cannot store mixed types."
      },
      {
        name: "26. List Comprehensions",
        description: "List comprehensions provide a concise, readable way to create lists. Syntax: `[expression for item in iterable if condition]`. They are often faster than equivalent `for` loops. Can be nested: `[expr for sublist in list_of_lists for item in sublist]`. Use comprehensions for simple transformations; for complex logic, use explicit loops.",
        code: "squares = [x**2 for x in range(10)]\nevens = [x for x in range(20) if x % 2 == 0]\nprint(squares[:3], evens[:3])",
        lineByLine: ["list of squares 0‑9", "list of even numbers up to 18 (only those satisfying condition)", "print first three of each"],
        simpleMeaning: "List comprehensions create lists in one readable line.",
        output: "[0,1,4] [0,2,4]",
        note: "Avoid nested comprehensions that are hard to read; use loops instead for clarity.",
        answer: "Q: Are list comprehensions always faster than loops? A: Usually yes for simple operations, but the difference may be negligible. Prioritise readability."
      },
      {
        name: "27. Collections – Counter",
        description: "`Counter` is a dict subclass for counting hashable objects. It maps elements to their counts. You can create it from any iterable. It supports most dictionary operations plus methods like `most_common(n)`, `elements()`, and arithmetic (`+`, `-`, `&`, `|`) between counters.",
        code: "from collections import Counter\ncnt = Counter('abracadabra')\nprint(cnt)\nprint(cnt.most_common(2))",
        lineByLine: ["import Counter", "count characters in the string", "print Counter dictionary (character → count)", "`most_common(2)` returns the two most frequent letters"],
        simpleMeaning: "Counter counts frequencies of items.",
        output: "Counter({'a':5, 'b':2, 'r':2, 'c':1, 'd':1})\\n[('a',5), ('b',2)]",
        note: "You can also do `cnt['a'] += 1` even if key doesn't exist (default is 0).",
        answer: "Q: How do you get the total count of all items? A: Use `sum(cnt.values())`."
      },
      {
        name: "28. Collections – heapq",
        description: "`heapq` provides heap queue (priority queue) algorithms. A heap is a binary tree where the smallest element is always at the root. Useful for implementing priority queues, sorting a stream, or finding the n smallest/largest items. Operations: `heapify(list)` transforms a list into a heap in‑place, `heappush(heap, item)`, `heappop(heap)` returns the smallest element, `heappushpop`, `heapreplace`, `nlargest`, `nsmallest`.",
        code: "import heapq\nnums = [5,1,3,7,2]\nheapq.heapify(nums)\nprint(heapq.heappop(nums))\nprint(nums[:2])",
        lineByLine: ["import heapq", "list of numbers", "transform into a heap (O(n))", "pop the smallest element (1)", "the heap now has remaining elements in heap order"],
        simpleMeaning: "Heap provides efficient min‑element access, ideal for priority queues.",
        output: "1\\n[2,3]",
        note: "Heap elements are not fully sorted; but `heap[0]` is always the smallest.",
        answer: "Q: How to get the three largest numbers from a heap? A: Use `heapq.nlargest(3, heap)` – works on any iterable."
      },
      {
        name: "29. Collections – deque",
        description: "`deque` (double‑ended queue) supports O(1) appends and pops from both ends, unlike list which is O(n) for pop(0) and insert(0). It is ideal for queues and stacks. Methods: `append()`, `appendleft()`, `pop()`, `popleft()`, `extend()`, `extendleft()`, `rotate()`. You can also specify a max length: `deque(maxlen=n)`. Deques are thread‑safe.",
        code: "from collections import deque\nd = deque([1,2,3])\nd.appendleft(0)\nd.append(4)\nprint(d)\nprint(d.popleft())",
        lineByLine: ["import deque", "create deque from list", "add 0 to the left", "add 4 to the right", "print deque: deque([0,1,2,3,4])", "pop and return leftmost element (0)"],
        simpleMeaning: "Deque is a fast double‑ended queue.",
        output: "deque([0,1,2,3,4])\\n0",
        note: "For thread‑safe queues, also see `queue.Queue`.",
        answer: "Q: When should I use deque instead of list? A: Use deque when you need efficient appends/pops from both ends (e.g., queue, sliding window)."
      },
      {
        name: "30. Collections – OrderedDict",
        description: "`OrderedDict` is a dictionary that remembers the order in which keys were inserted. Before Python 3.7, standard dictionaries did not preserve order; since 3.7 they do. However, `OrderedDict` still provides extra methods like `move_to_end()` and a more predictable equality (order‑sensitive). It is useful when order matters (e.g., configuration files, JSON serialisation that should preserve order).",
        code: "from collections import OrderedDict\nod = OrderedDict()\nod['a'] = 1\nod['b'] = 2\nod['c'] = 3\nfor k, v in od.items():\n    print(k, v)",
        lineByLine: ["import OrderedDict", "create empty OrderedDict", "add items in order", "iterate – order is preserved"],
        simpleMeaning: "OrderedDict remembers the insertion order of keys.",
        output: "a 1\\nb 2\\nc 3",
        note: "In modern Python, `dict` also preserves order, but `OrderedDict` offers additional methods and order‑sensitive equality.",
        answer: "Q: How do you move an existing key to the end? A: Use `od.move_to_end('key')`. To move to the beginning, pass `last=False`."
      },
      {
        name: "31. Collections – defaultdict",
        description: "`defaultdict` is a dict subclass that returns a default value when a missing key is accessed. You specify a factory function (e.g., `int`, `list`, `set`, or a custom function) when creating it. This avoids KeyError and simplifies grouping or counting code. For example: `dd = defaultdict(list)` then `dd['group'].append(item)` works even if 'group' doesn't exist.",
        code: "from collections import defaultdict\ndd = defaultdict(int)\ndd['a'] += 1\nprint(dd['a'], dd['b'])",
        lineByLine: ["import defaultdict", "create with default factory `int` (returns 0)", "increment `dd['a']` – even though it didn't exist, it is created with 0 then incremented to 1", "accessing `dd['b']` returns default 0"],
        simpleMeaning: "defaultdict returns a default value for missing keys, eliminating KeyError.",
        output: "1 0",
        note: "The factory must be callable without arguments. Use `lambda` for custom defaults: `defaultdict(lambda: 'missing')`.",
        answer: "Q: What is the difference between `defaultdict` and `dict.get()`? A: `defaultdict` provides a permanent default for all missing keys; `get()` only handles one lookup at a time."
      },
      {
        name: "32. DSA with Python – Overview",
        description: "Python’s standard library and built‑in data structures enable efficient implementation of common data structures and algorithms. Use lists for stacks (`append`/`pop`) and simple sequences, `deque` for queues, `heapq` for priority queues, `bisect` for binary search on sorted lists, `set` for membership tests, `dict` for hash maps. Algorithms: sorting (`sorted()`, `list.sort()`), searching (linear, binary), recursion, dynamic programming. For advanced DSA, consider `bisect`, `array`, `collections`, and third‑party libraries like `sortedcontainers`.",
        code: "# Stack using list\nstack = [1,2,3]\nstack.append(4)\nstack.pop()\nprint(stack)\n\n# Queue using deque\nfrom collections import deque\nq = deque([1,2,3])\nq.append(4)\nq.popleft()\nprint(list(q))",
        lineByLine: ["create list as stack", "push 4", "pop", "stack after pop: [1,2,3]", "create deque as queue", "append to right", "pop from left", "convert to list"],
        simpleMeaning: "Python provides built‑in building blocks for common data structures and algorithms.",
        output: "[1,2,3]\\n[2,3,4]",
        note: "For performance‑critical DSA, consider using third‑party libraries like `numpy` for arrays or `sortedcontainers` for sorted structures.",
        answer: "Q: How do you implement a binary search on a list? A: Use the `bisect` module: `index = bisect.bisect_left(sorted_list, value)`."
      },
      {
        name: "33. Python OOP – Classes and Objects",
        description: "Object‑oriented programming (OOP) models real‑world entities. A class is a blueprint; an object is an instance of that class. The `__init__` method is the constructor, called when an object is created. `self` is the first parameter of instance methods and refers to the current instance. Instance attributes belong to the object, class attributes belong to the class and are shared by all instances.",
        code: "class Dog:\n    species = 'Canine'\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return f'{self.name} says Woof!'\n\nd = Dog('Buddy')\nprint(d.bark())\nprint(d.species)",
        lineByLine: ["`class` keyword defines class Dog", "class attribute `species`", "constructor: initialises instance attribute `name`", "instance method `bark`", "create instance `d` of Dog with name 'Buddy'", "call `bark()` method", "access class attribute via instance"],
        simpleMeaning: "Class is a blueprint; objects are concrete instances.",
        output: "Buddy says Woof!\\nCanine",
        note: "Class attributes can be accessed via `Dog.species` as well. Modifying a class attribute changes it for all instances.",
        answer: "Q: What is the purpose of `self`? A: `self` refers to the instance itself, allowing access to its attributes and methods inside the class definition."
      },
      {
        name: "34. `self` as Default Argument",
        description: "`self` is not a keyword; it is a convention for the first parameter of instance methods. You can name it anything (e.g., `this`, `obj`), but using `self` is heavily recommended for readability. When you call a method on an instance, Python automatically passes the instance as the first argument. The name `self` is used by convention and understood by Python developers.",
        code: "class Example:\n    def __init__(this, val):\n        this.val = val\n    def print_val(this):\n        print(this.val)\n\ne = Example(42)\ne.print_val()",
        lineByLine: ["class Example", "`__init__` uses `this` instead of `self`", "assign instance attribute `val`", "method uses `this`", "create instance", "call method – prints 42"],
        simpleMeaning: "The first parameter of instance methods can be named anything; `self` is just a convention.",
        output: "42",
        note: "Always use `self` to follow the convention and avoid confusion.",
        answer: "Q: What would happen if you omit `self` from a method? A: The method becomes a regular function that expects no instance; calling it on an instance will cause a `TypeError`."
      },
      {
        name: "35. Polymorphism",
        description: "Polymorphism means 'many forms'. In Python, it allows the same interface (method name) to have different implementations on different classes. You can write code that works with objects of different types as long as they support the required method (duck typing). Polymorphism is achieved through method overriding and duck typing. It makes code more flexible and reusable.",
        code: "class Cat:\n    def speak(self): return 'Meow'\nclass Dog:\n    def speak(self): return 'Woof'\n\ndef make_sound(animal):\n    print(animal.speak())\n\nmake_sound(Cat())\nmake_sound(Dog())",
        lineByLine: ["Cat class with `speak` method", "Dog class with `speak` method", "function `make_sound` expects any object with a `speak` method", "call with cat instance → prints 'Meow'", "call with dog instance → prints 'Woof'"],
        simpleMeaning: "Polymorphism allows the same operation to work on different types.",
        output: "Meow\\nWoof",
        note: "Python's duck typing says: 'If it walks like a duck and quacks like a duck, it's a duck' – you don't need explicit inheritance.",
        answer: "Q: Is polymorphism only achieved through inheritance? A: No, in Python duck typing allows unrelated classes to be used polymorphically if they share a method signature."
      },
      {
        name: "36. Inheritance",
        description: "Inheritance allows a class (child) to reuse attributes and methods from another class (parent). Syntax: `class Child(Parent):`. The child can override methods, add new methods, or extend parent methods using `super()`. Multiple inheritance is supported (a class can inherit from several parents). `super()` returns a proxy object that delegates method calls to the parent class.",
        code: "class Animal:\n    def speak(self): return '??'\n\nclass Dog(Animal):\n    def speak(self): return 'Woof'\n\nd = Dog()\nprint(d.speak())",
        lineByLine: ["parent class `Animal` with `speak` method", "child class `Dog` inherits from `Animal`", "`Dog` overrides `speak`", "create instance of `Dog`", "call `speak` – uses override from `Dog`"],
        simpleMeaning: "Inheritance lets you create specialised classes based on general ones.",
        output: "Woof",
        note: "Use `super().__init__()` to call the parent constructor. The `isinstance()` and `issubclass()` functions test relationships.",
        answer: "Q: What is the difference between overriding and overloading? A: Overriding is redefining a parent method in a child class; Python does not support method overloading (multiple methods with same name but different parameters) natively."
      },
      {
        name: "37. Abstraction",
        description: "Abstraction hides implementation details and provides a simplified interface. In Python, abstraction can be achieved through abstract base classes (ABCs) using the `abc` module. An abstract method is declared with `@abstractmethod` and must be implemented by any concrete subclass. Abstract classes cannot be instantiated. Abstraction helps enforce a consistent interface across subclasses.",
        code: "from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): pass\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14 * self.r**2\n\nc = Circle(5)\nprint(c.area())",
        lineByLine: ["import ABC and abstractmethod", "`Shape` is an abstract base class", "`area` is an abstract method", "`Circle` inherits from `Shape`", "implement `area`", "create instance", "call `area`"],
        simpleMeaning: "Abstraction hides complex implementation and shows only essential features.",
        output: "78.5",
        note: "If a subclass does not implement all abstract methods, it remains abstract and cannot be instantiated.",
        answer: "Q: Why use abstract classes instead of regular classes? A: Abstract classes enforce that subclasses implement specific methods, ensuring a consistent interface."
      },
      {
        name: "38. Encapsulation",
        description: "Encapsulation bundles data (attributes) and methods that operate on that data, hiding internal details. In Python, public attributes are written normally, protected attributes start with a single underscore `_` (convention, not enforced), and private attributes start with a double underscore `__` which triggers name mangling (`_ClassName__attribute`). Encapsulation helps prevent accidental modification and keeps the interface clean.",
        code: "class BankAccount:\n    def __init__(self):\n        self._balance = 0\n    def deposit(self, amount):\n        self._balance += amount\n    def get_balance(self):\n        return self._balance\n\nacc = BankAccount()\nacc.deposit(100)\nprint(acc.get_balance())",
        lineByLine: ["class `BankAccount`", "protected attribute `_balance`", "`deposit` method modifies it", "`get_balance` returns the protected value", "create instance", "deposit 100", "print balance"],
        simpleMeaning: "Encapsulation hides internal state and exposes controlled access through methods.",
        output: "100",
        note: "Name mangling makes `__pin` accessible as `_BankAccount__pin`, but it's still not truly private. It's a convention for 'stay away'.",
        answer: "Q: What is the difference between `_` and `__`? A: `_` indicates protected (convention); `__` triggers name mangling to avoid accidental overriding in subclasses."
      },
      {
        name: "39. Iterators",
        description: "An iterator is an object that implements the iterator protocol: `__iter__()` (returns itself) and `__next__()` (returns next value or raises `StopIteration`). Iterables (lists, tuples, strings) provide an `__iter__` method that returns an iterator. You can obtain an iterator with `iter(obj)` and get values with `next(iterator)`. `for` loops work by calling `iter()` and repeatedly `next()` behind the scenes.",
        code: "nums = [1, 2, 3]\nit = iter(nums)\nprint(next(it))\nprint(next(it))\nprint(next(it))",
        lineByLine: ["list of numbers", "get iterator from the list", "`next()` returns 1 and advances", "returns 2", "returns 3; further `next()` would raise StopIteration"],
        simpleMeaning: "Iterators produce values one at a time, on demand.",
        output: "1\\n2\\n3",
        note: "You can create your own iterator by defining `__iter__` and `__next__` in a class. Generators (using `yield`) are a simpler way.",
        answer: "Q: What happens when an iterator is exhausted? A: Subsequent calls to `next(iterator)` raise a `StopIteration` exception, which is what `for` loops catch to exit."
      },
      {
        name: "40. Exception Handling",
        description: "Exception handling allows you to respond to runtime errors gracefully. The `try` block contains code that might raise an exception. `except` catches specific exceptions; you can have multiple `except` blocks. `else` runs if no exception occurred. `finally` always executes (useful for cleanup). Use `raise` to manually trigger exceptions. Always catch specific exceptions before general ones (e.g., `except ValueError:` before `except Exception:`).",
        code: "try:\n    x = int(input('Number: '))\n    print(10/x)\nexcept ValueError:\n    print('Invalid integer')\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nelse:\n    print('No error')\nfinally:\n    print('Cleanup')",
        lineByLine: ["try block", "convert input to int (may raise ValueError)", "division (may raise ZeroDivisionError)", "catch ValueError", "catch ZeroDivisionError", "else runs if no exception", "finally always runs"],
        simpleMeaning: "Exception handling prevents crashes by catching and handling errors.",
        output: "Number: 0\\nCannot divide by zero\\nCleanup",
        note: "Avoid bare `except:` because it catches even `KeyboardInterrupt` and `SystemExit`. Use `except Exception as e:` if you must catch everything.",
        answer: "Q: What is the purpose of `else` in try‑except? A: `else` runs only if no exception occurred, separating normal code from error‑handling logic."
      },
      {
        name: "41. Built‑in Exceptions",
        description: "Python provides many built‑in exceptions. Common ones: `ValueError` (invalid argument value), `TypeError` (wrong type), `IndexError` (sequence index out of range), `KeyError` (dict key missing), `NameError` (variable not found), `AttributeError` (attribute doesn't exist), `FileNotFoundError`, `ZeroDivisionError`, `ImportError`, `EOFError`, `StopIteration`. You can view the exception hierarchy in the documentation. Base classes: `BaseException` (rarely used), `Exception` (most user exceptions inherit from it).",
        code: "try:\n    {}['missing']\nexcept KeyError as e:\n    print(f'KeyError: {e}')",
        lineByLine: ["dictionary access with missing key", "catch specific KeyError", "print the error"],
        simpleMeaning: "Built‑in exceptions cover common error situations and are organised in a hierarchy.",
        output: "KeyError: 'missing'",
        note: "You can also define your own exceptions by subclassing `Exception`.",
        answer: "Q: What is the difference between `ImportError` and `ModuleNotFoundError`? A: `ModuleNotFoundError` is a subclass of `ImportError` and is raised when a module is not found; `ImportError` is broader."
      },
      {
        name: "42. User‑defined Exceptions",
        description: "You can create your own exception classes by inheriting from `Exception` (or one of its subclasses). Custom exceptions make your code more readable and allow you to handle domain‑specific errors. It is conventional to name them with 'Error' suffix. They can have custom attributes and methods. To raise a custom exception, use `raise MyError('message')`.",
        code: "class NegativeAgeError(Exception):\n    pass\n\ndef set_age(age):\n    if age < 0:\n        raise NegativeAgeError('Age cannot be negative')\n\nset_age(-5)",
        lineByLine: ["define custom exception `NegativeAgeError` (empty body)", "function that checks age", "if negative, raise custom exception with message", "call function with invalid age → exception raised"],
        simpleMeaning: "Custom exceptions let you signal error conditions specific to your application.",
        output: "Traceback ... NegativeAgeError: Age cannot be negative",
        note: "You can add attributes to the exception class to carry more information (e.g., `self.age = age`).",
        answer: "Q: Why use custom exceptions instead of built‑in exceptions? A: Custom exceptions make your API clearer and allow catching only your domain errors, ignoring unrelated runtime errors."
      },
      {
        name: "43. File Handling",
        description: "File handling is done with the `open()` function, which returns a file object. Modes: `'r'` (read text, default), `'w'` (write – overwrites), `'a'` (append), `'x'` (exclusive creation, fails if file exists), `'b'` (binary mode), `'t'` (text mode, default). Always use a `with` statement to ensure the file is closed automatically, even if an exception occurs. Methods: `read()`, `readline()`, `readlines()`, `write()`, `writelines()`. For binary files, read and write bytes.",
        code: "with open('test.txt', 'w') as f:\n    f.write('Hello\\nSecond line')\nwith open('test.txt', 'r') as f:\n    print(f.read())",
        lineByLine: ["open file in write mode (creates/overwrites)", "write two lines (use \\n for newline)", "auto‑closed after `with` block", "open same file for reading", "read entire content and print"],
        simpleMeaning: "Save data to disk and read it back later.",
        output: "Hello\\nSecond line",
        note: "`'w'` overwrites existing content; use `'a'` to append. Always handle `FileNotFoundError` when reading.",
        answer: "Q: What is the advantage of `with open()` over `f = open()` and `f.close()`? A: The `with` statement guarantees that the file is closed even if an exception occurs, preventing resource leaks."
      },
      {
        name: "44. Read Files",
        description: "To read a file, use mode `'r'`. `read(size)` reads `size` bytes (or entire file if omitted). `readline()` reads one line (including newline). `readlines()` reads all lines into a list. For large files, iterate directly over the file object: `for line in f:` (memory efficient). Use `.strip()` to remove trailing newline.",
        code: "with open('test.txt', 'r') as f:\n    for line in f:\n        print(line.strip())",
        lineByLine: ["open file for reading", "iterate line by line", "print each line without trailing newline"],
        simpleMeaning: "Read files line by line to save memory.",
        output: "Hello\\nSecond line",
        note: "If the file does not exist, `FileNotFoundError` is raised. Use `try‑except` to handle that.",
        answer: "Q: How do you read a file into a list of lines? A: Use `lines = f.readlines()` or `list(f)`."
      },
      {
        name: "45. Write/Create Files",
        description: "Write to a file using `'w'` (overwrites) or `'a'` (appends). Use `f.write(string)` or `f.writelines(list_of_strings)` (does not add newlines automatically; you must include them). To create a file only if it does not exist, use `'x'` mode (raises `FileExistsError` otherwise). Always close the file (preferably with `with`).",
        code: "with open('new.txt', 'w') as f:\n    f.write('Line 1\\n')\n    f.write('Line 2\\n')\n\nwith open('new.txt', 'a') as f:\n    f.write('Appended line\\n')",
        lineByLine: ["open in write mode (creates new.txt)", "write first line (manually add newline)", "write second line", "close after block", "open in append mode", "write a line; it will be added at the end"],
        simpleMeaning: "Create or overwrite files with `'w'`, add to existing files with `'a'`.",
        output: "(creates new.txt with three lines)",
        note: "`'w'` will erase existing content. To avoid accidental overwrites, check file existence with `os.path.exists()` before writing.",
        answer: "Q: How do you write a list of strings to a file with newlines? A: Use `f.write('\\n'.join(list_of_strings))` or loop and write each line with `+ '\\n'`."
      },
      {
        name: "46. OS Module",
        description: "The `os` module provides functions for interacting with the operating system: `os.getcwd()` (current working directory), `os.chdir(path)`, `os.listdir(path)` (list files), `os.mkdir()`, `os.rmdir()`, `os.remove()` (delete file), `os.rename()`, `os.path` submodule for path operations (`exists`, `isdir`, `isfile`, `join`, `split`). `os.environ` gives environment variables. Use `os.system` to run shell commands (but prefer `subprocess`).",
        code: "import os\nprint(os.getcwd())\nos.mkdir('test_dir', exist_ok=True)\nprint(os.listdir('.'))",
        lineByLine: ["import os", "print current directory", "create directory (suppress error if exists)", "list contents of current directory"],
        simpleMeaning: "OS module lets you interact with the file system and environment.",
        output: "/home/user\\n['test_dir', ...]",
        note: "For cross‑platform path operations, use `os.path.join()` instead of manual string concatenation.",
        answer: "Q: What is the difference between `os.remove()` and `os.unlink()`? A: They are identical; `unlink` is an alias for `remove`."
      },
      {
        name: "47. pathlib Module",
        description: "`pathlib` offers an object‑oriented interface to file system paths. Introduced in Python 3.4. The `Path` class has methods like `.cwd()`, `.home()`, `.mkdir()`, `.glob()`, `.read_text()`, `.write_text()`, `.exists()`, `.is_dir()`, `.iterdir()`. It is cleaner and more portable than `os.path`. Prefer `pathlib` for new code.",
        code: "from pathlib import Path\np = Path('test_dir')\np.mkdir(exist_ok=True)\n(p / 'file.txt').write_text('Hello')\nprint((p / 'file.txt').read_text())",
        lineByLine: ["import Path", "create Path object for directory 'test_dir'", "create directory (ignore if exists)", "concatenate path with `/` operator and write text to file", "read the text back"],
        simpleMeaning: "pathlib makes file path operations intuitive and cross‑platform.",
        output: "Hello",
        note: "The `/` operator works for path concatenation. Use `Path.cwd()` for current directory.",
        answer: "Q: What is the advantage of pathlib over os.path? A: pathlib provides an object‑oriented API, automatic handling of path separators, and methods that are easier to chain."
      },
      {
        name: "48. Directory Management",
        description: "Create directories with `os.mkdir(dirname)` (fails if parent missing) or `os.makedirs(dirname, exist_ok=True)` (creates parent directories). Remove empty directories with `os.rmdir()`; remove non‑empty directories with `shutil.rmtree()`. List directory contents: `os.listdir()` or `Path.iterdir()`. Rename: `os.rename()`. Get path info: `os.path.getsize()`, `os.path.getmtime()`, etc.",
        code: "import os, shutil\nos.mkdir('test')\nprint(os.path.isdir('test'))\nshutil.rmtree('test')",
        lineByLine: ["import os and shutil", "create directory 'test'", "check if it is a directory", "remove recursively (works even if non‑empty)"],
        simpleMeaning: "Manage directories – create, list, delete, rename.",
        output: "True",
        note: "`shutil.rmtree` is irreversible; use with caution. For safe deletion, move to a temporary location first.",
        answer: "Q: How do you get the size of all files in a directory recursively? A: Use `os.walk` and sum `os.path.getsize()`."
      },
     {
  name: "49. MongoDB Introduction",
  description: "MongoDB is a NoSQL document database that stores data in JSON‑like documents (BSON). Use PyMongo (official driver) to connect. Connection string: `mongodb://host:port/`. Database and collection are created on first use. CRUD operations: `insert_one()`, `insert_many()`, `find_one()`, `find()`, `update_one()`, `update_many()`, `delete_one()`, `delete_many()`. Use filters (dictionaries) for queries. Indexes can be created with `create_index()`.",
  code: "from pymongo import MongoClient\nclient = MongoClient('mongodb://localhost:27017/')\ndb = client['testdb']\ncollection = db['users']\ncollection.insert_one({'name': 'Alice', 'age': 25})\nprint(collection.find_one({'name': 'Alice'}))",
  lineByLine: ["import MongoClient", "connect to local MongoDB instance", "get database 'testdb' (created on first use)", "get collection 'users'", "insert a document", "find and print the document (includes `_id`)"],
  simpleMeaning: "MongoDB stores data as flexible JSON documents.",
  output: "{'_id': ObjectId('...'), 'name': 'Alice', 'age': 25}",
  note: "Install pymongo: `pip install pymongo`. Start MongoDB server with `mongod`.",
  answer: 'Q: How do you build a query in PyMongo? A: Use dictionaries: `{"field": value}` for equality, `{"age": {"$gt": 18}}` for greater than.'
},
      {
        name: "50. MySQL Introduction",
        description: "MySQL is a popular relational database. The `mysql‑connector‑python` driver allows Python to interact with it. Connect using `mysql.connector.connect()`. Execute SQL statements with a `cursor`. For queries, use `cursor.execute(query)`, then `fetchall()` or `fetchone()`. Use placeholder `%s` for parameterised queries – never concatenate user input directly to avoid SQL injection. Commit changes with `conn.commit()` after INSERT/UPDATE/DELETE.",
        code: "import mysql.connector\nconn = mysql.connector.connect(host='localhost', user='root', password='', database='test')\ncursor = conn.cursor()\ncursor.execute('SELECT * FROM users')\nrows = cursor.fetchall()\nprint(rows)\nconn.close()",
        lineByLine: ["import connector", "establish connection (adjust credentials)", "create cursor", "execute SELECT query", "fetch all rows as list of tuples", "print rows", "close connection"],
        simpleMeaning: "Python can interact with MySQL relational databases.",
        output: "[(1, 'Alice'), (2, 'Bob')]",
        note: "Install driver: `pip install mysql-connector-python`. Use environment variables for credentials in production.",
        answer: "Q: How do you prevent SQL injection in MySQL Python? A: Use parameterised queries: `cursor.execute('INSERT INTO users VALUES (%s, %s)', (name, age))`."
      },
      {
        name: "51. Packages and Libraries",
        description: "A package is a directory containing multiple modules and an `__init__.py` file. It allows hierarchical organisation. A library is a collection of packages/modules that provide functionality. Python’s standard library is large; third‑party libraries are installed with `pip`. Popular packages: `numpy`, `pandas`, `requests`, `flask`, `django`, `matplotlib`, `scikit‑learn`, `tensorflow`, `pytorch`. You can create your own package by creating a directory with `__init__.py` and placing modules inside.",
        code: "# Example: create your own package\n# mypackage/\n#   __init__.py\n#   module1.py\n\n# In module1.py:\ndef hello():\n    return 'Hello from package'\n\n# Then import:\n# from mypackage import module1\n# print(module1.hello())",
        lineByLine: ["directory structure", "`__init__.py` can be empty", "module with a function", "import syntax", "use the function"],
        simpleMeaning: "Packages organise code into directories; libraries are collections of packages.",
        output: "(no output)",
        note: "`__init__.py` makes a directory a package. It can also contain package‑initialisation code.",
        answer: "Q: What is the difference between a module and a package? A: A module is a single `.py` file; a package is a directory containing modules and an `__init__.py` file."
      },
      {
        name: "52. Built‑in Modules",
        description: "Python comes with a rich standard library. Frequently used modules: `math` (mathematical functions), `random` (random numbers), `datetime` (dates/times), `json` (JSON serialisation), `re` (regular expressions), `os` (operating system interface), `sys` (system‑specific parameters), `collections` (special container types), `itertools` (iterator tools), `functools` (higher‑order functions), `argparse` (command‑line parsing), `logging`, `sqlite3`, `csv`, `xml`, `email`, etc. Use `import module` and then `module.function()`. Use `from module import name` to import specific parts.",
        code: "import math, random, datetime\nprint(math.pi)\nprint(random.randint(1,10))\nprint(datetime.datetime.now())",
        lineByLine: ["import multiple modules", "access math.pi constant", "generate random integer between 1 and 10", "get current date and time"],
        simpleMeaning: "Built‑in modules provide ready‑to‑use functionality for many common tasks.",
        output: "3.141592653589793\\n7\\n2025-01-15 14:30:00",
        note: "Use `help(module)` or `dir(module)` to explore what it offers.",
        answer: "Q: What is the difference between `sys` and `os`? A: `sys` deals with Python interpreter and runtime (e.g., `sys.argv`, `sys.path`), while `os` deals with operating system (files, processes, environment)."
      },
      {
        name: "53. DSA Libraries",
        description: "The standard library includes several modules that help implement data structures and algorithms efficiently: `heapq` (priority queue), `bisect` (binary search on sorted lists), `array` (numeric arrays), `collections.deque` (double‑ended queue), `collections.Counter` (frequency counting), `queue` (thread‑safe queues), `functools.lru_cache` (memoisation), `itertools` (combinatoric iterators). For advanced DSA, third‑party libraries like `sortedcontainers` (sorted lists/dicts), `networkx` (graphs), `numpy` (arrays), `pandas` (data structures) are also available.",
        code: "import bisect\narr = [1,3,5]\npos = bisect.bisect_left(arr, 4)\nprint(pos)",
        lineByLine: ["import bisect", "sorted list", "find insertion point for 4 (should be index 2)", "print position"],
        simpleMeaning: "Built‑in DSA libraries simplify common tasks like binary search and priority queues.",
        output: "2",
        note: "`bisect_left` returns the leftmost position to insert the value; `bisect_right` gives the rightmost.",
        answer: "Q: How do you maintain a sorted list while inserting elements? A: Use `bisect.insort(sorted_list, value)`."
      },
      {
        name: "54. GUI Libraries",
        description: "Python offers several GUI libraries. Tkinter is built‑in, lightweight, and good for simple applications. PyQt/PySide are more powerful (bindings to Qt). Kivy is cross‑platform and suitable for mobile apps. wxPython is another alternative. Example with Tkinter: create a window, add widgets (Label, Button, Entry), arrange with geometry managers (`pack`, `grid`, `place`), and start the event loop (`mainloop()`).",
        code: "import tkinter as tk\nroot = tk.Tk()\nroot.title('My App')\nlabel = tk.Label(root, text='Hello, Tkinter!')\nlabel.pack()\nroot.mainloop()",
        lineByLine: ["import tkinter as tk", "create main window", "set window title", "create a label widget", "pack the label (add to window with default layout)", "start the GUI event loop"],
        simpleMeaning: "GUI libraries let you build desktop applications with windows, buttons, and text.",
        output: "(window opens showing the label)",
        note: "Tkinter comes with Python, so no extra install. For production apps, consider PyQt for better aesthetics and features.",
        answer: "Q: What is the difference between `pack()`, `grid()`, and `place()`? A: `pack` arranges widgets in blocks; `grid` uses row/column coordinates; `place` uses absolute positioning."
      }
    ]
  },
  advanced: {
  title: "🐍 ADVANCED PYTHON",
  description: "Deep dive into professional Python: concurrency (threading, multiprocessing, asyncio), decorators, context managers, metaprogramming, advanced OOP, performance profiling, unit testing, packaging, C extensions, design patterns, and working with large datasets using NumPy/Pandas.",
  topics: [
    {
      name: "1. Threading (Concurrent I/O)",
      description: "Threading allows multiple threads to run concurrently within a single process. It is useful for I/O‑bound tasks (network calls, file I/O) but limited by Python's GIL (Global Interpreter Lock) for CPU‑bound work. Use `threading.Thread` and protect shared data with `threading.Lock`.",
      code: "import threading, time\n\ndef worker(name):\n    print(f'{name} started')\n    time.sleep(1)\n    print(f'{name} finished')\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, args=(f'Thread-{i}',))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\nprint('All done')",
      lineByLine: [
        "import threading and time",
        "worker function prints, sleeps, prints",
        "create empty list for threads",
        "loop to create 3 threads",
        "each thread targets worker with a name argument",
        "start the thread",
        "wait for all threads to finish with join()",
        "print final message"
      ],
      simpleMeaning: "Threads let you run multiple I/O tasks simultaneously.",
      output: "Thread-0 started\\nThread-1 started\\nThread-2 started\\n... (after 1s) finished messages\\nAll done",
      note: "For CPU‑bound tasks, use `multiprocessing` to bypass the GIL.",
      answer: "Q: What is the GIL? A: The Global Interpreter Lock prevents multiple threads from executing Python bytecode at once, limiting threading for CPU work."
    },
    {
      name: "2. Multiprocessing (Parallel CPU)",
      description: "Multiprocessing spawns separate processes, each with its own Python interpreter and memory space. It bypasses the GIL and achieves true parallelism for CPU‑heavy tasks. Use `multiprocessing.Process`, `Pool`, `Queue`, or `Lock`. Always protect the entry point with `if __name__ == '__main__'` to avoid infinite spawning on Windows.",
      code: "from multiprocessing import Process, cpu_count\nimport os\n\ndef square(n):\n    print(f'Process {os.getpid()}: {n*n}')\n\nif __name__ == '__main__':\n    numbers = [1,2,3,4]\n    processes = []\n    for n in numbers:\n        p = Process(target=square, args=(n,))\n        p.start()\n        processes.append(p)\n    for p in processes:\n        p.join()\n    print('CPU count:', cpu_count())",
      lineByLine: [
        "import Process and cpu_count",
        "function that prints its PID and square",
        "main guard (required for Windows)",
        "list of numbers",
        "create a process for each number",
        "start process",
        "collect process objects",
        "wait for all processes to finish",
        "print number of CPU cores"
      ],
      simpleMeaning: "Multiprocessing uses separate processes to run CPU tasks in parallel.",
      output: "Process 1234: 1\\nProcess 1235: 4\\nProcess 1236: 9\\nProcess 1237: 16\\nCPU count: 8",
      note: "Use `Pool` for a pool of worker processes: `with Pool(4) as p: results = p.map(square, numbers)`.",
      answer: "Q: How does multiprocessing differ from threading? A: Processes have separate memory and bypass the GIL, making them suitable for CPU‑bound tasks, while threads share memory and are good for I/O."
    },
    {
      name: "3. asyncio (Async/Await)",
      description: "asyncio provides single‑threaded concurrent code using coroutines (`async def`), the event loop, and `await`. Ideal for high‑concurrency I/O (web scraping, chat servers, many network calls). Use `asyncio.run()` to start the loop, `asyncio.create_task()` to schedule coroutines, and `asyncio.gather()` to run them concurrently. Avoid blocking calls inside async functions; use `await asyncio.sleep()` instead of `time.sleep()`.",
      code: "import asyncio\n\nasync def fetch_data(name, delay):\n    print(f'Fetching {name}...')\n    await asyncio.sleep(delay)\n    print(f'{name} done')\n    return f'{name} result'\n\nasync def main():\n    results = await asyncio.gather(\n        fetch_data('A', 2),\n        fetch_data('B', 1),\n        fetch_data('C', 3)\n    )\n    print(results)\n\nasyncio.run(main())",
      lineByLine: [
        "import asyncio",
        "async coroutine that simulates network delay with await asyncio.sleep",
        "prints start, sleeps non‑blocking, prints done, returns result",
        "main coroutine",
        "asyncio.gather runs all tasks concurrently",
        "wait for all results and print them",
        "start the event loop"
      ],
      simpleMeaning: "asyncio runs many I/O operations concurrently without threads.",
      output: "Fetching A...\\nFetching B...\\nFetching C...\\nB done\\nA done\\nC done\\n['A result', 'B result', 'C result']",
      note: "Install `aiohttp` for async HTTP requests. Use `asyncio.Queue` for producer‑consumer patterns.",
      answer: "Q: When should you use asyncio instead of threading? A: asyncio is lighter and scales better for thousands of network connections; threading is simpler for small numbers of I/O tasks."
    },
    {
      name: "4. Advanced Decorators (with arguments, class decorators)",
      description: "Decorators can also accept arguments. This requires a nested decorator factory: an outer function that takes the arguments and returns the actual decorator. Class decorators modify or enhance classes. The `functools.wraps` decorator preserves the original function’s metadata. Decorators are extensively used in frameworks (Flask routes, Django middleware).",
      code: "def repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet(name):\n    print(f'Hello, {name}!')\n\ngreet('Alice')",
      lineByLine: [
        "outer `repeat` takes the number of times",
        "inner `decorator` takes the function",
        "wrapper calls the function `times` times",
        "return wrapper",
        "return decorator",
        "apply decorator with argument `3`",
        "define function to be decorated",
        "call decorated function – prints 'Hello, Alice!' three times"
      ],
      simpleMeaning: "Decorators can accept arguments to customise their behaviour.",
      output: "Hello, Alice!\\nHello, Alice!\\nHello, Alice!",
      note: "Class decorators can add methods or attributes to a class. Use `@dataclass` (Python 3.7+) as a built‑in class decorator.",
      answer: "Q: How do you preserve the function's `__name__` and docstring? A: Use `@functools.wraps(func)` inside the innermost wrapper."
    },
    {
      name: "5. Context Managers (Custom)",
      description: "Context managers are used with the `with` statement to set up and tear down resources. You can create your own by implementing `__enter__` and `__exit__` methods in a class, or by using the `contextlib.contextmanager` decorator with a generator that yields exactly once. The `__exit__` method receives exception details; return `True` to suppress an exception.",
      code: "from contextlib import contextmanager\n\n@contextmanager\ndef managed_file(filename):\n    try:\n        f = open(filename, 'w')\n        yield f\n    finally:\n        f.close()\n\nwith managed_file('test.txt') as f:\n    f.write('Hello, context manager!')",
      lineByLine: [
        "import contextmanager",
        "decorator to create context manager from generator",
        "function that accepts a filename",
        "open file (setup)",
        "yield the file object – this is the value assigned after `as`",
        "finally block ensures cleanup (close) even if exception occurs",
        "use the context manager in a `with` statement",
        "write to the file – automatically closed after the block"
      ],
      simpleMeaning: "Context managers guarantee cleanup, even on exceptions.",
      output: "(creates test.txt with the text)",
      note: "You can also use `@contextmanager` for locking, database transactions, and temporary changes.",
      answer: "Q: What is the difference between a context manager and a `try/finally`? A: Context managers encapsulate the setup/cleanup, making code reusable and reducing duplication."
    },
    {
      name: "6. Metaclasses",
      description: "A metaclass is the class of a class. It defines how a class behaves. By default, classes are instances of `type`. You can create a custom metaclass by subclassing `type` and overriding `__new__` or `__init__`. Metaclasses are used in frameworks like Django (models) and SQLAlchemy to add functionality to classes at creation time. Use sparingly – they can be complex.",
      code: "class Meta(type):\n    def __new__(cls, name, bases, dct):\n        dct['version'] = 1.0\n        return super().__new__(cls, name, bases, dct)\n\nclass MyClass(metaclass=Meta):\n    pass\n\nprint(MyClass.version)",
      lineByLine: [
        "define a metaclass inheriting from `type`",
        "`__new__` is called before the class is created",
        "add a `version` attribute to the class dictionary",
        "call the superclass (`type`) to create the class",
        "use the metaclass with `metaclass=Meta`",
        "empty class",
        "the `version` attribute is automatically added by the metaclass and printed"
      ],
      simpleMeaning: "Metaclasses customise class creation, adding attributes or methods to classes.",
      output: "1.0",
      note: "A simpler alternative to metaprogramming is class decorators, which are easier to understand.",
      answer: "Q: Why would you use a metaclass? A: To enforce coding standards, automatically register subclasses, or add methods to all classes in a framework."
    },
    {
      name: "7. Descriptors",
      description: "Descriptors are objects that define how attribute access is handled. They implement `__get__`, `__set__`, and `__delete__`. Descriptors power `@property`, `@classmethod`, `@staticmethod`, and ORM fields. A descriptor is a class attribute that has any of these special methods. Use them to create reusable, validated attributes.",
      code: "class PositiveNumber:\n    def __set_name__(self, owner, name):\n        self.name = name\n    def __get__(self, obj, objtype=None):\n        return obj.__dict__.get(self.name, 0)\n    def __set__(self, obj, value):\n        if value <= 0:\n            raise ValueError('Must be positive')\n        obj.__dict__[self.name] = value\n\nclass Order:\n    quantity = PositiveNumber()\n\no = Order()\no.quantity = 10\nprint(o.quantity)",
      lineByLine: [
        "descriptor class",
        "`__set_name__` captures the attribute name (Python 3.6+)",
        "`__get__` retrieves value from instance dict",
        "`__set__` validates value must be positive",
        "store validated value",
        "class `Order` with a descriptor attribute `quantity`",
        "set value – goes through `__set__`",
        "get value – goes through `__get__`"
      ],
      simpleMeaning: "Descriptors control attribute access, enabling validation and computed attributes.",
      output: "10",
      note: "`property` is a built‑in descriptor. You can also use descriptors for type checking.",
      answer: "Q: What is the difference between a descriptor and a property? A: A descriptor is reusable across attributes; a property is tied to one attribute of a class."
    },
    {
      name: "8. Generators vs Iterators (Advanced)",
      description: "Generators are a simple way to create iterators using `yield`. They are lazy and memory‑efficient. Generator expressions: `(expr for item in iterable)`. The `itertools` module provides many powerful generators (`chain`, `cycle`, `permutations`, `combinations`, `groupby`, `accumulate`, `islice`). Generators can be bidirectional (`send`), receive values, and handle exceptions (`throw`).",
      code: "def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci()\nfor _ in range(10):\n    print(next(fib), end=' ')",
      lineByLine: [
        "infinite generator",
        "initial values",
        "infinite loop",
        "yield current value",
        "update for next",
        "create generator object",
        "get first 10 values using `next()`"
      ],
      simpleMeaning: "Generators produce values lazily, ideal for infinite sequences or large datasets.",
      output: "0 1 1 2 3 5 8 13 21 34",
      note: "Use `itertools.islice(fib, 10)` to limit infinite generators.",
      answer: "Q: How do you pass values back into a generator? A: Use `.send(value)`. The yielded expression receives the value, and the generator continues."
    },
    {
      name: "9. Unit Testing with unittest & pytest",
      description: "Testing ensures code correctness. `unittest` is built‑in and follows xUnit style. `pytest` is third‑party, more concise, and powerful. Write test functions starting with `test_`, use `assert` statements in pytest, or `self.assertEqual()` in unittest. Use fixtures for setup/teardown, mocks for dependencies, and parameterisation for multiple test cases. Run `pytest` in the terminal.",
      code: "import unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2,3), 5)\n        self.assertEqual(add(-1,1), 0)\n\nif __name__ == '__main__':\n    unittest.main()",
      lineByLine: [
        "import unittest",
        "function to test",
        "test case class inheriting from TestCase",
        "test method starts with 'test_'",
        "assertion to check result",
        "run tests if script is executed directly"
      ],
      simpleMeaning: "Unit tests automatically verify that your code works as expected.",
      output: "OK",
      note: "Install pytest: `pip install pytest`. Write `def test_add(): assert add(2,3) == 5`.",
      answer: "Q: What is the difference between unittest and pytest? A: pytest has simpler syntax, better fixtures, and automatic discovery."
    },
    {
      name: "10. Profiling & Optimisation",
      description: "Profiling finds performance bottlenecks. Use `cProfile` (built‑in) for deterministic profiling, `line_profiler` for line‑by‑line timings, and `memory_profiler` for memory usage. The `timeit` module benchmarks small code snippets. Optimisation strategies: use built‑in functions, avoid attribute lookup in loops, choose appropriate data structures (set/dict for fast lookups), use list comprehensions, and consider C extensions or `numba` for heavy computations.",
      code: "import cProfile\n\ndef slow_function():\n    total = 0\n    for i in range(100000):\n        total += i**2\n    return total\n\ncProfile.run('slow_function()')",
      lineByLine: [
        "import cProfile",
        "function that computes sum of squares",
        "loop with many iterations",
        "run profiler on the function call",
        "prints statistics: number of calls, time per call, etc."
      ],
      simpleMeaning: "Profilers identify which parts of your code are slow.",
      output: "         100004 function calls ...\\n   ...",
      note: "Use `python -m cProfile -o output.stats script.py` then `snakeviz` to visualise.",
      answer: "Q: What is the most common optimisation mistake? A: Premature optimisation – profile first, then optimise the hot spots."
    },
    {
      name: "11. Type Hints & Static Analysis (mypy)",
      description: "Type hints (PEP 484) annotate variable and function types. They are ignored at runtime but enable static type checking with `mypy`. Type hints improve code readability and catch bugs early. Use `Optional`, `Union`, `List`, `Dict`, `Tuple`, `Callable` from `typing`. For advanced use: `TypeVar`, `Generic`, `Protocol`. Run `mypy your_script.py`.",
      code: "from typing import List, Optional\n\ndef process_items(items: List[str], limit: Optional[int] = None) -> List[str]:\n    if limit is None:\n        return items\n    return items[:limit]\n\nresult = process_items(['a','b','c'], 2)\nprint(result)",
      lineByLine: [
        "import List and Optional from typing",
        "function expects list of strings, optional integer limit, returns list of strings",
        "if limit not given, return whole list",
        "otherwise return slice",
        "call with valid arguments – mypy will check types",
        "print result"
      ],
      simpleMeaning: "Type hints document code and allow optional static type checking.",
      output: "['a', 'b']",
      note: "Install mypy: `pip install mypy`. Use `# type: ignore` to suppress false positives.",
      answer: "Q: Do type hints affect performance? A: No, they are stripped at runtime; only used by type checkers."
    },
    {
      name: "12. Working with NumPy (Numerical Computing)",
      description: "NumPy provides N‑dimensional arrays and vectorised operations, much faster than Python lists. Key features: broadcasting, universal functions, linear algebra, random number generation, and integration with C/Fortran. Use `np.array` to create arrays. Indexing, slicing, and conditional operations are vectorised. NumPy is the foundation of pandas, SciPy, scikit‑learn, and TensorFlow.",
      code: "import numpy as np\n\narr = np.array([1,2,3,4,5])\nprint(arr.mean(), arr.std())\n\nmatrix = np.arange(12).reshape(3,4)\nprint(matrix)\n\nprint(matrix[matrix > 5])",
      lineByLine: [
        "import numpy as np",
        "create a 1‑D array",
        "compute mean and standard deviation (vectorised)",
        "create a 1‑D array 0..11 and reshape to 3x4",
        "print the matrix",
        "boolean indexing – prints all elements greater than 5"
      ],
      simpleMeaning: "NumPy provides efficient array operations and mathematical functions.",
      output: "3.0 1.414...\\n[[ 0  1  2  3]\\n [ 4  5  6  7]\\n [ 8  9 10 11]]\\n[ 6  7  8  9 10 11]",
      note: "Install NumPy: `pip install numpy`. Avoid looping over NumPy arrays; use vectorised operations.",
      answer: "Q: What is broadcasting? A: Broadcasting allows operations between arrays of different shapes without copying data."
    },
    {
      name: "13. Pandas for Data Analysis",
      description: "Pandas provides high‑level data structures: Series (1D labelled) and DataFrame (2D table). Ideal for data cleaning, transformation, aggregation, and analysis. Common operations: reading CSV/Excel (`pd.read_csv`), handling missing data (`dropna`, `fillna`), grouping (`groupby`), merging (`merge`), and plotting (matplotlib backend).",
      code: "import pandas as pd\n\ndata = {'Name': ['Alice', 'Bob', 'Charlie'],\n        'Age': [25, 30, 35],\n        'Salary': [50000, 60000, 70000]}\ndf = pd.DataFrame(data)\nprint(df)\nprint(df['Age'].mean())\nprint(df[df['Salary'] > 55000])",
      lineByLine: [
        "import pandas as pd",
        "dictionary with three lists",
        "create DataFrame",
        "print table",
        "compute mean of Age column",
        "filter rows where Salary > 55000"
      ],
      simpleMeaning: "Pandas simplifies data manipulation and analysis.",
      output: "      Name  Age  Salary\\n0    Alice   25   50000\\n1      Bob   30   60000\\n2  Charlie   35   70000\\n30.0\\n    Name  Age  Salary\\n1    Bob   30   60000\\n2 Charlie   35   70000",
      note: "Install pandas: `pip install pandas`. Use `df.describe()` for summary statistics.",
      answer: "Q: What is the difference between `df.loc` and `df.iloc`? A: `loc` labels; `iloc` integer positions."
    },
    {
      name: "14. Design Patterns in Python",
      description: "Design patterns are reusable solutions to common problems. Python's dynamic nature simplifies many patterns. Common patterns: Singleton (ensure one instance), Factory (create objects without specifying class), Observer (event handling), Strategy (algorithm swapping), Decorator (already covered), and MVC (Model‑View‑Controller). Use modules to implement Singleton (modules are only imported once). Factory can be a function returning class instances.",
      code: "class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\ns1 = Singleton()\ns2 = Singleton()\nprint(s1 is s2)",
      lineByLine: [
        "class with class variable `_instance`",
        "`__new__` controls instance creation",
        "if no instance yet, create one",
        "return the single instance",
        "create two instances",
        "they are the same object"
      ],
      simpleMeaning: "Design patterns provide proven solutions for code organisation.",
      output: "True",
      note: "In Python, a module is naturally a singleton. Use `functools.lru_cache` for memoisation.",
      answer: "Q: Why might you avoid the Singleton pattern? A: It introduces global state, making testing and concurrency harder."
    },
    {
      name: "15. Packaging and Distribution (setuptools)",
      description: "To share your code, package it with `setuptools`. Structure: a directory with `setup.py` (or `pyproject.toml`), your module, and `README.md`. `setup.py` contains metadata (name, version, dependencies). Build distributions with `python -m build`. Upload to PyPI with `twine`. Install your package with `pip`. Use `if __name__ == '__main__'` to make your module executable.",
      code: "# setup.py example\nfrom setuptools import setup, find_packages\n\nsetup(\n    name='mypackage',\n    version='0.1.0',\n    packages=find_packages(),\n    install_requires=['requests>=2.25'],\n    entry_points={\n        'console_scripts': [\n            'mycommand=mypackage.cli:main',\n        ],\n    },\n)",
      lineByLine: [
        "import setup and find_packages",
        "call setup with metadata",
        "package name",
        "version",
        "automatically find sub‑packages",
        "dependencies",
        "create command‑line script entry point",
        "maps `mycommand` to function `main` in `mypackage.cli`"
      ],
      simpleMeaning: "Packaging allows you to distribute and install your Python code easily.",
      output: "(no output – commands to build: `python -m build`; upload: `twine upload dist/*`)",
      note: "Modern packaging uses `pyproject.toml`. Read the Python Packaging User Guide.",
      answer: "Q: What is the difference between `install_requires` and `requirements.txt`? A: `install_requires` lists runtime dependencies for your package; `requirements.txt` is for development/pinning versions."
    },
    {
  name: "16. Logging Best Practices",
  description: "The `logging` module is superior to `print()` for production applications. It provides levels (DEBUG, INFO, WARNING, ERROR, CRITICAL), timestamps, and flexible output (console, file, network). Use `getLogger(__name__)` to create module‑specific loggers. Configure with `dictConfig` for complex setups. Avoid using `print()` in libraries; always use logging.",
  code: "import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',\n    handlers=[\n        logging.FileHandler('app.log'),\n        logging.StreamHandler()\n    ]\n)\n\nlogger = logging.getLogger(__name__)\n\ndef divide(a, b):\n    try:\n        result = a / b\n        logger.info(f'Divided {a} by {b} = {result}')\n        return result\n    except ZeroDivisionError:\n        logger.exception('Division by zero attempted')\n        raise\n\ndivide(10, 2)\ndivide(10, 0)",
  lineByLine: [
    "import logging module",
    "basicConfig sets global configuration",
    "level=INFO means DEBUG messages are ignored",
    "format includes timestamp, logger name, level, message",
    "handlers: write to file 'app.log' and also print to console",
    "create a logger named after the current module",
    "function that performs division",
    "log an info message on success",
    "if ZeroDivisionError, log exception with stack trace using logger.exception",
    "re‑raise the exception",
    "call with valid divisor – logs info",
    "call with zero – logs error and raises"
  ],
  simpleMeaning: "Use logging instead of print for professional, configurable debugging.",
  output: "2025-01-15 14:30:00 - __main__ - INFO - Divided 10 by 2 = 5.0\\n2025-01-15 14:30:00 - __main__ - ERROR - Division by zero attempted\\nTraceback (most recent call last): ...",
  note: "Never put sensitive data in logs. Use `rotating file handlers` to manage log size.",
  answer: "Q: How do you log variable contents without causing security issues? A: Sanitise or mask sensitive fields before logging, or use structured logging with `extra` parameters."
},
{
  name: "17. Configuration Management (configparser, dotenv, pydantic)",
  description: "Externalise configuration to avoid hard‑coding. `configparser` handles .ini files; `python‑dotenv` reads .env files; `pydantic` provides type validation. Use environment variables for deployment secrets. This example shows `configparser` to read database settings, with fallbacks.",
  code: "# config.ini\n# [database]\n# host = localhost\n# port = 5432\n# user = admin\n\nimport configparser\n\nconfig = configparser.ConfigParser()\nconfig.read('config.ini')\n\nhost = config.get('database', 'host', fallback='localhost')\nport = config.getint('database', 'port', fallback=5432)\n\nprint(f'Connecting to {host}:{port}')",
  lineByLine: [
    "create ConfigParser instance",
    "read the config file (missing file is ignored)",
    "get 'host' from section 'database', fallback to localhost if missing",
    "get 'port' as integer with fallback",
    "print the loaded configuration"
  ],
  simpleMeaning: "Store configuration separately from code for easier maintenance and security.",
  output: "Connecting to localhost:5432",
  note: "Use `pydantic‑settings` for type‑checked configs with environment variable support.",
  answer: "Q: Why not use JSON for configuration? A: JSON is fine, but INI or .env files are more human‑friendly for simple key‑value pairs."
},
{
  name: "18. C Extensions with ctypes and Cython",
  description: "Speed up Python by calling C libraries or compiling Python‑like code to C. `ctypes` calls external C functions from shared libraries. `Cython` translates Python‑like code to C extension modules. Use when pure Python is too slow for numeric or low‑level operations. For example, `ctypes` can call `sin` from the system math library.",
  code: "import ctypes\nimport math\n\nlibm = ctypes.CDLL('libm.so.6')  # Linux; on Windows use 'msvcrt.dll'\nlibm.sin.argtypes = (ctypes.c_double,)\nlibm.sin.restype = ctypes.c_double\n\nangle = math.pi / 2\nresult = libm.sin(angle)\nprint(f'sin({angle}) = {result:.2f}')",
  lineByLine: [
    "import ctypes and math",
    "load the shared math library (system dependent)",
    "tell ctypes the argument type (double) and return type",
    "call the sin function from C",
    "print the result"
  ],
  simpleMeaning: "ctypes lets Python call C functions, making high‑performance libraries accessible.",
  output: "sin(1.5707963267948966) = 1.00",
  note: "Cython is more complex but can speed up pure Python loops 10‑100x. For most numeric work, use NumPy first.",
  answer: "Q: When is ctypes preferable over Cython? A: When you already have a C library and just want to call it without compiling anything."
},
{
  name: "19. Working with Context Variables (contextvars)",
  description: "`contextvars` provides context‑local variables that are independent of threads/`asyncio` tasks. Useful for storing request‑scoped data in web apps (e.g., current user, request ID). Unlike thread‑local, they work with async code. Each context has its own copy of the variable, and child contexts inherit values unless explicitly changed.",
  code: "import contextvars\nimport asyncio\n\nuser_id = contextvars.ContextVar('user_id', default='anonymous')\n\nasync def handle_request():\n    print(f'Request user: {user_id.get()}')\n\nasync def main():\n    # Set context for user Alice\n    token = user_id.set('alice123')\n    await handle_request()\n    user_id.reset(token)\n\n    # Default context\n    await handle_request()\n\nasyncio.run(main())",
  lineByLine: [
    "import contextvars and asyncio",
    "create a context variable with default value 'anonymous'",
    "async function that reads the current user_id",
    "set the context variable for the current context, returns a token",
    "call handler – prints 'alice123'",
    "reset to previous value (default)",
    "call again – prints 'anonymous'",
    "run the async main"
  ],
  simpleMeaning: "Context variables store values that follow the execution flow, even across async tasks.",
  output: "Request user: alice123\\nRequest user: anonymous",
  note: "In web frameworks like FastAPI, you can set a context variable per request using middleware.",
  answer: "Q: How do contextvars differ from thread‑local? A: thread‑local works only with threads; contextvars also work with asyncio tasks and can be nested."
},
{
  name: "20. Memory Optimisation with `__slots__` and `weakref`",
  description: "`__slots__` reduces memory overhead for classes by preventing the creation of `__dict__` and `__weakref__`. Each instance saves memory, important for millions of objects. `weakref` allows references to objects without preventing garbage collection, useful for caches and observers (avoid memory leaks).",
  code: "class WithoutSlots:\n    def __init__(self, a, b):\n        self.a = a\n        self.b = b\n\nclass WithSlots:\n    __slots__ = ('a', 'b')\n    def __init__(self, a, b):\n        self.a = a\n        self.b = b\n\nimport sys\nobj1 = WithoutSlots(1,2)\nobj2 = WithSlots(1,2)\nprint(f'Without slots: {sys.getsizeof(obj1.__dict__) + sys.getsizeof(obj1)} bytes')\nprint(f'With slots: {sys.getsizeof(obj2)} bytes')",
  lineByLine: [
    "class without __slots__ – each instance has a __dict__",
    "class with __slots__ – only specified attributes allowed",
    "__slots__ tuple lists the allowed attribute names",
    "create instances",
    "measure memory: WithoutSlots includes __dict__ size",
    "WithSlots has no __dict__, much smaller",
    "print comparison"
  ],
  simpleMeaning: "__slots__ dramatically reduces memory for many objects.",
  output: "Without slots: 112 bytes\\nWith slots: 56 bytes (approx)",
  note: " __slots__ prevents adding new attributes dynamically; useful in embedded systems or large datasets.",
  answer: "Q: What are the drawbacks of __slots__? A: No dynamic attributes, less flexible; may break some introspection tools."
},
{
  name: "21. Advanced itertools (cycle, permutations, combinations, groupby)",
  description: "The `itertools` module provides powerful iterators for combinatorial and looping tasks. `cycle` repeats an iterable infinitely. `permutations` and `combinations` generate all orderings/combinations. `groupby` groups consecutive identical keys. `chain` flattens multiple iterables. `product` computes Cartesian product.",
  code: "from itertools import permutations, combinations, groupby\n\ndata = ['A', 'B', 'C']\nprint('Permutations:')\nfor p in permutations(data, 2):\n    print(p, end=' ')\n\nprint('\\nCombinations:')\nfor c in combinations(data, 2):\n    print(c, end=' ')\n\nwords = ['apple', 'apple', 'banana', 'cherry', 'cherry']\nprint('\\nGrouped:')\nfor key, group in groupby(words):\n    print(f'{key}: {list(group)}')",
  lineByLine: [
    "import specific functions from itertools",
    "list of letters",
    "permutations of length 2 (order matters)",
    "print each permutation",
    "combinations of length 2 (order does not matter)",
    "list with consecutive duplicates",
    "groupby groups consecutive identical items",
    "prints key and the group iterator materialised as a list"
  ],
  simpleMeaning: "itertools provides memory‑efficient tools for advanced iteration patterns.",
  output: "Permutations: ('A','B') ('A','C') ('B','A') ('B','C') ('C','A') ('C','B') \\nCombinations: ('A','B') ('A','C') ('B','C') \\nGrouped: apple: ['apple','apple']\\nbanana: ['banana']\\ncherry: ['cherry','cherry']",
  note: "Use `groupby` with sorted data to group non‑consecutive duplicates.",
  answer: "Q: Is `itertools.cycle` dangerous? A: It never ends, so always pair with `islice` or break condition."
},
{
  name: "22. functools: partial, lru_cache, wraps, singledispatch",
  description: "`functools` provides higher‑order functions. `partial` freezes arguments of a function. `lru_cache` memoises function results (improves recursion speed). `wraps` copies metadata for decorators. `singledispatch` creates generic functions (function overloading).",
  code: "from functools import partial, lru_cache, singledispatch\n\n@lru_cache(maxsize=128)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(35))\n\npower2 = partial(pow, exp=2)\nprint(power2(5))\n\n@singledispatch\ndef process(arg):\n    return f'default: {arg}'\n\n@process.register(int)\ndef _(arg):\n    return f'integer: {arg}'\n\n@process.register(str)\ndef _(arg):\n    return f'string: {arg}'\n\nprint(process(10))\nprint(process('hello'))",
  lineByLine: [
    "import needed functions",
    "decorator caches results of fib",
    "fibonacci recursion (will be fast after caching)",
    "partial creates a new function that squares numbers (pow(x,2))",
    "use partial to square 5",
    "singledispatch defines a generic function",
    "default implementation",
    "register for int",
    "register for str",
    "calls the int overload",
    "calls the str overload"
  ],
  simpleMeaning: "functools provides utilities to manipulate and optimise functions.",
  output: "9227465\\n25\\ninteger: 10\\nstring: hello",
  note: "`lru_cache` is great for recursive or expensive functions. Use `maxsize=None` for unbounded cache.",
  answer: "Q: What is the difference between `partial` and `lambda`? A: `partial` freezes arguments without rewriting the function; `lambda` creates a new anonym function, more flexible but less efficient."
},
{
  name: "23. Dataclasses vs NamedTuples vs attrs",
  description: "For storing structured data, Python offers `dataclass` (mutable, default values, type hints), `NamedTuple` (immutable, lightweight), and `attrs` (third‑party, more features). `dataclass` (Python 3.7+) reduces boilerplate for classes that mainly hold data. Use `frozen=True` for immutability, `order=True` for sorting.",
  code: "from dataclasses import dataclass\nfrom typing import List\n\n@dataclass\nclass Person:\n    name: str\n    age: int = 0\n    hobbies: List[str] = None\n\np1 = Person('Alice', 25)\np2 = Person('Bob')\nprint(p1)\nprint(p2.name)\n\n# Immutable version\n@dataclass(frozen=True)\nclass Point:\n    x: int\n    y: int\n\ntry:\n    p = Point(1,2)\n    p.x = 3\nexcept AttributeError as e:\n    print(f'Error: {e}')",
  lineByLine: [
    "import dataclass and List",
    "decorator automatically generates __init__, __repr__, __eq__",
    "field with default value",
    "field with default None (needs careful initialisation)",
    "create instances",
    "auto‑generated __repr__ prints",
    "access attribute",
    "frozen=True makes attributes read‑only",
    "assigning to frozen attribute raises AttributeError"
  ],
  simpleMeaning: "Dataclasses reduce boilerplate for simple data containers.",
  output: "Person(name='Alice', age=25, hobbies=None)\\nBob\\nError: cannot assign to field 'x'",
  note: "For performance‑critical code, plain tuples or NamedTuples may be faster.",
  answer: "Q: When would you use NamedTuple instead of dataclass? A: When you need immutability and tuple‑like unpacking (e.g., coordinates)."
},
{
  name: "24. Regular Expressions Performance",
  description: "Compile regex patterns with `re.compile` for reuse. Use raw strings `r'...'` to avoid escaping backslashes. Avoid catastrophic backtracking by being specific (e.g., `[^a]*` instead of `.*`). Use `re.search` instead of `re.match` if you want to find anywhere. Prefer `str` methods (`str.split`, `str.replace`) for simple operations – they are faster.",
  code: "import re\nimport time\n\n# Compile once\npattern = re.compile(r'\\b\\w+@\\w+\\.\\w+\\b')\n\ndef find_emails(text):\n    return pattern.findall(text)\n\nsample = 'Emails: alice@example.com, bob@test.org, charlie@domain.com'\nstart = time.perf_counter()\nfor _ in range(100000):\n    emails = find_emails(sample)\nend = time.perf_counter()\nprint(f'Time: {(end-start):.4f}s')\nprint(f'Found {len(emails)} emails')",
  lineByLine: [
    "import re and time",
    "compile regex once and reuse (improves speed)",
    "pattern to match email addresses",
    "function using the compiled pattern",
    "sample text",
    "benchmark loop",
    "call find_emails many times",
    "print elapsed time"
  ],
  simpleMeaning: "Compiled regex is much faster when used repeatedly.",
  output: "Time: 0.35s (approx) Found 3 emails",
  note: "For very large texts, use `re.finditer` to avoid building a result list.",
  answer: "Q: What causes catastrophic backtracking? A: Nested quantifiers like `(a+)+` on long strings can cause exponential runtime."
},
{
  name: "25. Working with Large Files and mmap",
  description: "For very large files (GB), use `mmap` to map the file into memory, allowing random access without loading the whole file. Useful for pattern searching, indexing, or processing logs. `mmap` behaves like a mutable string/bytes object. Works on both Unix and Windows.",
  code: "import mmap\n\n# Create a large file (write 10 MB)\nwith open('large.bin', 'wb') as f:\n    f.write(b'X' * 10_000_000)\n\n# Memory‑map the file\nwith open('large.bin', 'r+b') as f:\n    with mmap.mmap(f.fileno(), 0) as mm:\n        print(f'File size: {len(mm)} bytes')\n        # Find all occurrences of b'XXX'\n        count = mm.count(b'XXX')\n        print(f'Occurrences of \"XXX\": {count}')\n        # Modify region\n        mm[0:5] = b'Hello'\n        mm.flush()\n        # Print first 10 bytes\n        print(mm[:10])",
  lineByLine: [
    "import mmap",
    "create a 10 MB binary file (for demo)",
    "open file in read/write binary mode",
    "create memory mapping (fd, length 0 = whole file)",
    "get file size",
    "count occurrences of a pattern efficiently",
    "modify a slice of the mapped memory",
    "ensure changes are written to disk",
    "read first 10 bytes"
  ],
  simpleMeaning: "mmap lets you work with huge files as if they were a byte array in memory.",
  output: "File size: 10000000 bytes\\nOccurrences of 'XXX': 3333333\\nb'HelloXXXXX'",
  note: "Use `mmap` for random access; for sequential processing, streaming may be simpler.",
  answer: "Q: Is mmap always the fastest? A: For random access and repeated scanning, yes. For simple linear reading, traditional file reads may be simpler and almost as fast."
}
  ]
}
};

// Helper functions (same as before)
export const getTopic = (category, topicName) => {
  const cat = learning[category];
  if (!cat) return null;
  return cat.topics.find(t => t.name === topicName) || null;
};

export const searchTopics = (keyword) => {
  const results = [];
  const lower = keyword.toLowerCase();
  for (const cat of ["basic"]) {
    for (const topic of learning[cat].topics) {
      if (topic.name.toLowerCase().includes(lower) ||
          (topic.description && topic.description.toLowerCase().includes(lower))) {
        results.push({ ...topic, category: cat });
      }
    }
  }
  return results;
};

export const getAllTopicNames = () => {
  const topics = [];
  for (const cat of ["basic"]) {
    for (const topic of learning[cat].topics) {
      topics.push({ name: topic.name, category: cat });
    }
  }
  return topics;
};

export const getTopicByName = (name) => {
  for (const cat of ["basic"]) {
    const topic = learning[cat]?.topics?.find(t => t.name === name);
    if (topic) return { ...topic, category: cat };
  }
  return null;
};

export const python = learning;

console.log("Complete Python Documentation Loaded!");
console.log(`Total topics: ${learning.basic.topics.length}`);
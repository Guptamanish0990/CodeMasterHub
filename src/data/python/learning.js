export const learning = {
  basic: {
    title: "🐍 PYTHON: COMPLETE DOCUMENTATION",
    description: "Comprehensive Python programming guide covering everything from basics to advanced concepts with practical examples and detailed explanations. Python is a high-level, interpreted programming language known for its simplicity and readability. This documentation includes 20+ topics with real-world examples, line-by-line code explanations, and practical use cases. Perfect for beginners learning Python and experienced developers looking for a quick reference. Topics range from variables, data types, and control flow to advanced concepts like decorators, generators, OOP, and async programming. Each topic includes code examples, expected output, and important notes for best practices.",
    topics: [
      {
        name: "1. INTRODUCTION TO PYTHON",
        description: "Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and first released in 1991. It emphasizes code readability with its notable use of significant whitespace. Python supports multiple programming paradigms including procedural, object-oriented, and functional programming. Key Features: Dynamic typing (no explicit type declaration), Automatic memory management, Comprehensive standard library (200+ built-in modules), Cross-platform compatibility (Windows, Mac, Linux all work), Open source and free to use. Python is widely used in: Web Development (Django, Flask, FastAPI), Data Science (Pandas, NumPy, SciPy), Artificial Intelligence (TensorFlow, PyTorch, LangChain), Machine Learning (Scikit-learn, XGBoost), Automation & Scripting, Cybersecurity & Penetration Testing, Game Development (Pygame), Desktop Applications (Tkinter, PyQt, Kivy), Mobile Applications (Kivy, BeeWare), Cloud Computing (AWS SDK, Azure SDK, Google Cloud SDK), Internet of Things (Raspberry Pi, MicroPython), Scientific Computing, Financial Analysis, and Network Programming. Major companies using Python include Google, Netflix, Spotify, Instagram, Facebook, Amazon, NASA, and Dropbox.",
        code: `# Python version check
import sys
print(f"Python version: {sys.version}")

# Simple Python demo
print("Hello, Python!")
name = "Python"
print(f"{name} is awesome!")

# Python features demonstration
print("\\nPython Features:")
print("✓ Dynamic typing - no type declaration needed")
print("✓ Interpreted - runs line by line")
print("✓ Object-oriented - supports classes and objects")
print("✓ Rich standard library - 200+ built-in modules")`,
        lineByLine: ["Line 1-2: Import sys module to access system functions", "Line 3: Print Python version", "Line 5: Print hello message", "Line 6: Create variable 'name'", "Line 7: Use f-string to print formatted message", "Line 10-14: Print Python's key features"],
        simpleMeaning: "Python is an easy-to-learn programming language used almost everywhere - web development, data science, AI, automation, gaming, and cybersecurity. Its syntax is simple like English, making it perfect for beginners.",
        output: `Python version: 3.12.0
Hello, Python!
Python is awesome!

Python Features:
✓ Dynamic typing - no type declaration needed
✓ Interpreted - runs line by line
✓ Object-oriented - supports classes and objects
✓ Rich standard library - 200+ built-in modules`,
        note: "Python 3.10+ recommended. Python 2 is deprecated since January 2020. Always use Python 3 for new projects. Popular IDEs: VS Code, PyCharm, Jupyter Notebook."
      },
      
      {
  name: "📝 PRINT & VARIABLES",

  description: "Variables store data values in computer memory. Python is dynamically typed - no need to declare variable types explicitly. Variables are created when you assign a value to them. Print() function displays output to console and is one of the most frequently used functions for debugging and user interaction.",

  code: `# Variable assignment
student_name = 'Alice'
student_age = 25
item_price = 99.99
is_enrolled = True
temp_value = None

# Multiple assignment
pos_x, pos_y, pos_z = 10, 20, 30

# Same value to multiple variables
val_a = val_b = val_c = 100

# Type checking
print(f"Type of student_name: {type(student_name)}")
print(f"Type of student_age: {type(student_age)}")
print(f"Type of item_price: {type(item_price)}")

# Print with f-strings
print(f"{student_name} is {student_age} years old")
print("Item Price: $" + str(item_price))
print(f"Is enrolled: {is_enrolled}")
print(f"Coordinates: {pos_x}, {pos_y}, {pos_z}")

# Print with custom separator and end
print("Apple", "Banana", "Orange", sep=", ", end="!\\n")
print("Multiple", "items", sep=" | ")

# Variable reassignment
dynamic_data = 123
print(f"Initial data: {dynamic_data}, type: {type(dynamic_data)}")

dynamic_data = "Now text"
print(f"Changed data: {dynamic_data}, type: {type(dynamic_data)}")`,

  lineByLine: [
    "Line 1-5: Different variable types",
    "Line 8: Multiple assignment",
    "Line 11: Same value assignment",
    "Line 14-16: type() function",
    "Line 19-22: Print statements",
    "Line 25-26: sep and end usage",
    "Line 29-33: Dynamic typing example"
  ],

  simpleMeaning: "Variables are like boxes that store values. print() shows output on screen.",

  output: `Type of student_name: <class 'str'>
Type of student_age: <class 'int'>
Type of item_price: <class 'float'>
Alice is 25 years old
Item Price: $99.99
Is enrolled: True
Coordinates: 10, 20, 30
Apple, Banana, Orange!
Multiple | items
Initial data: 123, type: <class 'int'>
Changed data: Now text, type: <class 'str'>`,

  note: "Use snake_case for variables. Python is case-sensitive."
},
      {
        name: "📊 DATA TYPES",
        description: "Python has several built-in data types that determine what kind of data a variable can store and what operations can be performed. Numeric types include int (integers like 42), float (decimals like 3.14), and complex (numbers with imaginary part like 3+4j). Text type is str (string) for character sequences. Boolean type has only two values: True and False. Sequence types include list (mutable ordered collection), tuple (immutable ordered collection), and range (sequence of numbers). Mapping type is dict (key-value pairs). Set types include set (unordered unique items) and frozenset (immutable set). Binary types include bytes, bytearray, and memoryview. Use type() function to check a variable's data type. Python also supports type conversion (type casting) between different data types using functions like int(), float(), str(), list(), tuple(), dict(), set().",
        code: `# Numeric Types
integer_value = 42
float_value = 3.14159
complex_value = 3 + 4j

# Text Type
text_string = "Hello, Python!"

# Boolean Type
true_flag = True

# Sequence Types
my_list = [1, 2, 3, 4, 5]
my_tuple = (1, 2, 3)

# Mapping Type
my_dict = {"name": "Alice", "age": 25}

# Set Types
my_set = {1, 2, 3, 4, 5}

# Type Checking
print(f"Type of integer: {type(integer_value)}")
print(f"Type of text: {type(text_string)}")
print(f"Type of my_list: {type(my_list)}")

# Type Conversion
number_string = "123"
converted_int = int(number_string)
print(f"Converted string to int: {converted_int}")

float_val = 3.99
int_val = int(float_val)
print(f"Float to int (truncated): {int_val}")

num_value = 456
str_value = str(num_value)
print(f"Integer to string: {str_value}")`,
        lineByLine: ["Line 1-5: Numeric types - int, float, complex", "Line 8: String type - text in quotes", "Line 11: Boolean - only True or False", "Line 14-17: Sequence types - list, tuple, range", "Line 20: Dictionary - key-value pairs", "Line 23-25: Set types - set, frozenset", "Line 28-30: type() function shows data type", "Line 33-41: Type conversion functions"],
        simpleMeaning: "Data types tell what kind of data is stored in a variable - number, text, list, or dictionary. Like different containers for different items.",
        output: `Type of integer: <class 'int'>
Type of text: <class 'str'>
Type of my_list: <class 'list'>
Converted string to int: 123
Float to int (truncated): 3
Integer to string: 456`,
        note: "Python is dynamically typed - variables can change type. Lists are mutable, tuples are immutable. Sets automatically remove duplicates."
      },

      {
        name: "➕ OPERATORS IN PYTHON",
        description: "Operators are special symbols that perform operations on variables and values. Python supports comprehensive operator types: Arithmetic operators for mathematical calculations; Assignment operators to assign values; Comparison operators to compare values; Logical operators to combine boolean conditions; Identity operators to compare object memory locations; Membership operators to check if value exists in sequence.",
        code: `# Arithmetic Operators
num1, num2 = 10, 3
print(f"Addition: {num1 + num2}")
print(f"Division: {num1 / num2}")
print(f"Floor Division: {num1 // num2}")
print(f"Modulus: {num1 % num2}")
print(f"Power: {num1 ** num2}")

# Comparison Operators
print(f"Is equal: {num1 == num2}")
print(f"Greater than: {num1 > num2}")

# Logical Operators
flag_x, flag_y = True, False
print(f"AND: {flag_x and flag_y}")
print(f"OR: {flag_x or flag_y}")

# Membership Operator
fruit_list = ["apple", "banana"]
print(f"apple in fruits: {'apple' in fruit_list}")`,
        lineByLine: ["Line 2-10: Arithmetic operators for calculations", "Line 4: Addition adds numbers", "Line 5: Division returns float", "Line 6: Floor division returns integer", "Line 7: Modulus gives remainder", "Line 8: Exponentiation for power", "Line 11-13: Comparison operators return boolean", "Line 16-19: Logical operators combine conditions", "Line 22-23: Membership checks if value exists"],
        simpleMeaning: "Operators perform mathematical or logical operations on numbers and variables, like a calculator.",
        output: `Addition: 13
Division: 3.3333333333333335
Floor Division: 3
Modulus: 1
Power: 1000
Is equal: False
Greater than: True
AND: False
OR: True
apple in fruits: True`,
        note: "Use // for integer division, / for float division. 'and' returns first False, 'or' returns first True."
      },

      {
        name: "🎮 CONTROL FLOW (if-elif-else)",
        description: "Conditional statements control program execution flow based on conditions being True or False. The 'if' statement executes code block when condition is True. 'elif' checks additional conditions when previous conditions were False. 'else' executes when all conditions are False. Python uses indentation (typically 4 spaces) to define code blocks. The ternary operator provides a concise one-line if-else. Control flow is essential for decision making in programs - user authentication, input validation, game logic, error handling, and business rules implementation.",
        code: `# Grade calculator
student_marks = 85

if student_marks >= 90:
    student_grade = "A+"
    print("Excellent!")
elif student_marks >= 80:
    student_grade = "A"
    print("Very Good!")
elif student_marks >= 70:
    student_grade = "B"
    print("Good!")
elif student_marks >= 60:
    student_grade = "C"
    print("Average")
else:
    student_grade = "F"
    print("Failed")

print(f"Grade: {student_grade}")

# Ternary operator
user_age = 20
status_message = "Adult" if user_age >= 18 else "Minor"
print(f"Status: {status_message}")

# Multiple conditions
current_year = 2024
is_leap_year = (current_year % 400 == 0) or (current_year % 4 == 0 and current_year % 100 != 0)
print(f"Is {current_year} a leap year? {'Yes' if is_leap_year else 'No'}")`,
        lineByLine: ["Line 2-20: if-elif-else ladder checks conditions in order", "Line 4: First condition checks highest range", "Line 6-8: elif runs if first condition false", "Line 18-20: else runs if all conditions false", "Line 23-24: Ternary operator - one-line if-else", "Line 27-29: Multiple conditions with logical operators"],
        simpleMeaning: "Control flow makes decisions - if condition is true do one thing, otherwise do another. Like traffic lights - if green go, if red stop.",
        output: `Very Good!
Grade: A
Status: Adult
Is 2024 a leap year? Yes`,
        note: "Use elif for multiple conditions (not multiple ifs). Indentation matters - use 4 spaces consistently. Ternary operator is concise for simple conditions."
      },

      {
        name: "📋 LISTS",
        description: "Lists are one of Python's most versatile and commonly used data structures. They are ordered, mutable (changeable) collections that can hold items of different types. Lists are defined using square brackets [] with items separated by commas. Key features: zero-indexed (first element is at index 0), support negative indexing (-1 is last element), support slicing [start:stop:step] to create sublists, have many built-in methods for manipulation. List methods include: append() adds at end, insert() at specific index, extend() adds multiple items, remove() deletes first occurrence, pop() removes and returns item, sort() orders items, reverse() reverses order. List comprehension provides a concise way to create lists using [expression for item in iterable if condition].",
        code: `# Creating lists
empty_list = []
fruit_items = ["apple", "banana", "orange", "mango"]
number_list = [1, 2, 3, 4, 5]
mixed_items = [1, "hello", 3.14, True]

# Accessing elements (indexing)
print(f"First fruit: {fruit_items[0]}")
print(f"Last fruit: {fruit_items[-1]}")
print(f"Third fruit: {fruit_items[2]}")

# List slicing [start:stop:step]
print(f"Slicing 1-3: {fruit_items[1:3]}")
print(f"First 3: {fruit_items[:3]}")
print(f"Last 2: {fruit_items[-2:]}")
print(f"Reverse: {fruit_items[::-1]}")

# List methods for manipulation
fruit_items.append("grape")
print(f"After append: {fruit_items}")
fruit_items.insert(1, "kiwi")
print(f"After insert: {fruit_items}")
fruit_items.remove("banana")
print(f"After remove: {fruit_items}")
popped_item = fruit_items.pop()
print(f"Popped: {popped_item}, List: {fruit_items}")

# Sorting and reversing
number_list = [3, 1, 4, 1, 5, 9, 2]
number_list.sort()
print(f"Sorted: {number_list}")
number_list.reverse()
print(f"Reversed: {number_list}")

# List comprehension
square_numbers = [x**2 for x in range(10)]
print(f"Squares: {square_numbers}")

even_numbers = [x for x in range(20) if x % 2 == 0]
print(f"Even numbers: {even_numbers[:10]}...")`,
        lineByLine: ["Line 1-6: Different ways to create lists", "Line 2: Empty list", "Line 3: List of strings", "Line 4: List of integers", "Line 5: Mixed types in one list", "Line 9-12: Access by index - 0 is first, -1 is last", "Line 15-20: Slicing creates sublists", "Line 23-36: List methods modify the list", "Line 23: append() adds at the end", "Line 25: insert() adds at specific position", "Line 27: remove() deletes first matching value", "Line 29: pop() removes and returns last element", "Line 32-35: sort() and reverse() modify list in place", "Line 38-41: List comprehension - compact way to create lists"],
        simpleMeaning: "Lists are containers that store multiple items in sequence. You can change items (mutable). Like a drawer where you can keep different things - numbers, text, anything. Index helps you find any item.",
        output: `First fruit: apple
Last fruit: mango
Third fruit: orange
Slicing 1-3: ['banana', 'orange']
First 3: ['apple', 'banana', 'orange']
Last 2: ['orange', 'mango']
Reverse: ['mango', 'orange', 'banana', 'apple']
After append: ['apple', 'banana', 'orange', 'mango', 'grape']
After insert: ['apple', 'kiwi', 'banana', 'orange', 'mango', 'grape']
After remove: ['apple', 'kiwi', 'orange', 'mango', 'grape']
Popped: grape, List: ['apple', 'kiwi', 'orange', 'mango']
Sorted: [1, 1, 2, 3, 4, 5, 9]
Reversed: [9, 5, 4, 3, 2, 1, 1]
Squares: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
Even numbers: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]...`,
        note: "Lists are zero-indexed (first element is index 0). Slicing [start:stop] includes start but excludes stop. List comprehensions are faster than loops for simple operations."
      },

      {
        name: "🔄 LOOPS (for & while)",
        description: "Loops are fundamental programming constructs that repeat code execution. Python has two main loop types: 'for' loop iterates over sequences (lists, tuples, strings, dictionaries, ranges) executing code block for each item. 'while' loop continues executing as long as condition remains True. The 'break' statement exits the entire loop immediately, 'continue' skips the rest of current iteration and moves to next. The 'else' clause with loops executes only if loop completes normally (without break). The range() function generates number sequences - range(stop), range(start, stop), range(start, stop, step). The enumerate() function adds counter to iteration, zip() allows parallel iteration over multiple sequences.",
        code: `# For loop with range()
print("For loop with range:")
for counter in range(5):
    print(f"Number: {counter}")

# Range with start, stop, step
print("\\nRange with step:")
for even_num in range(2, 10, 2):
    print(f"Even: {even_num}")

# For loop through list
print("\\nLoop through list:")
fruit_list = ["apple", "banana", "orange"]
for fruit_item in fruit_list:
    print(f"I like {fruit_item}")

# enumerate() - get index and value together
print("\\nEnumerate:")
for idx, fruit_item in enumerate(fruit_list):
    print(f"{idx}: {fruit_item}")

# While loop
print("\\nWhile loop:")
count_value = 1
while count_value <= 5:
    print(f"Count: {count_value}")
    count_value += 1

# Break - exit loop completely
print("\\nBreak example:")
for num in range(10):
    if num == 5:
        break
    print(f"Break at 5: {num}")

# Continue - skip current iteration
print("\\nContinue example:")
for num in range(10):
    if num % 2 == 0:
        continue
    print(f"Odd number: {num}")

# Nested loops
print("\\nMultiplication table:")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}×{j}={i*j}", end="  ")
    print()`,
        lineByLine: ["Line 2-5: for loop with range(stop) iterates 0 to stop-1", "Line 8-11: range(start, stop, step) gives more control", "Line 14-17: Iterate directly through list items", "Line 20-23: enumerate() returns index and value as tuple", "Line 26-30: while loop continues while condition is True", "Line 33-38: break immediately exits the entire loop", "Line 41-46: continue skips current iteration moves to next", "Line 49-56: Nested loops - inner loop completes all iterations for each outer iteration"],
        simpleMeaning: "Loops repeat tasks. For loop when you know how many times (like going through all list items). While loop when condition-based (like waiting for user to type 'quit'). Break stops the loop, continue skips one iteration.",
        output: `For loop with range:
Number: 0
Number: 1
Number: 2
Number: 3
Number: 4

Range with step:
Even: 2
Even: 4
Even: 6
Even: 8

Loop through list:
I like apple
I like banana
I like orange

Enumerate:
0: apple
1: banana
2: orange

While loop:
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5

Break example:
Break at 5: 0
Break at 5: 1
Break at 5: 2
Break at 5: 3
Break at 5: 4

Continue example:
Odd number: 1
Odd number: 3
Odd number: 5
Odd number: 7
Odd number: 9

Multiplication table:
1×1=1  1×2=2  1×3=3  
2×1=2  2×2=4  2×3=6  
3×1=3  3×2=6  3×3=9`,
        note: "Use 'break' to exit loop early, 'continue' to skip current iteration. 'range(start, stop, step)' gives more control. While loops need manual counter increment to avoid infinite loops."
      },

      {
        name: "⚙️ FUNCTIONS",
        description: "Functions are reusable blocks of organized code that perform specific tasks. They help break down complex problems into smaller, manageable pieces. Use 'def' keyword to define a function, followed by name and parentheses. Functions can accept parameters (inputs) and return values (outputs). Key concepts: parameters are variables listed in function definition, arguments are values passed when calling; default parameters have preset values if argument not provided; *args collects variable positional arguments as tuple; **kwargs collects variable keyword arguments as dictionary; return statement sends value back to caller. Docstrings (triple-quoted strings) document function purpose. Recursion allows functions to call themselves (useful for factorial, Fibonacci). Best practices: keep functions small and focused, use descriptive names, include docstrings, avoid modifying global variables.",
        code: `# Basic function
def greet():
    """Simple greeting function"""
    print("Hello, World!")

# Function with parameters
def greet_person(person_name):
    """Greet a specific person"""
    return f"Hello, {person_name}!"

# Function with default parameter
def calculate_power(base_value, exponent=2):
    """Calculate power with default exponent of 2"""
    return base_value ** exponent

# Function with multiple return values
def get_min_max(number_list):
    """Return both minimum and maximum from list"""
    return min(number_list), max(number_list)

# Function with *args
def sum_all(*args):
    """Sum any number of arguments"""
    return sum(args)

# Calling functions
greet()
print(greet_person("Alice"))
print(f"Square of 5: {calculate_power(5)}")
print(f"5 cubed: {calculate_power(5, 3)}")
print(f"Power with named args: {calculate_power(exponent=4, base_value=2)}")

# Unpacking multiple return values
min_val, max_val = get_min_max([1, 5, 3, 9, 2])
print(f"Min: {min_val}, Max: {max_val}")

# Variable arguments
print(f"Sum of 1,2,3: {sum_all(1, 2, 3)}")
print(f"Sum of 1,2,3,4,5: {sum_all(1, 2, 3, 4, 5)}")

# Recursion example - factorial
def factorial(num):
    """Calculate factorial using recursion"""
    if num <= 1:
        return 1
    return num * factorial(num - 1)

print(f"Factorial of 5: {factorial(5)}")`,
        lineByLine: ["Line 1-4: Basic function with docstring", "Line 7-10: Function with parameter and return value", "Line 13-16: Default parameter value", "Line 19-22: Multiple return values as tuple", "Line 25-28: *args for variable arguments", "Line 31-37: Different ways to call functions", "Line 40-42: Unpack multiple return values", "Line 45-48: *args allows any number of arguments", "Line 51-58: Recursion with base and recursive cases"],
        simpleMeaning: "Functions are reusable code blocks that perform specific tasks. Call them multiple times without rewriting. Like a recipe - write once, use many times. Parameters are inputs, return value is output.",
        output: `Hello, World!
Hello, Alice!
Square of 5: 25
5 cubed: 125
Power with named args: 16
Min: 1, Max: 9
Sum of 1,2,3: 6
Sum of 1,2,3,4,5: 15
Factorial of 5: 120`,
        note: "Use descriptive function names. Functions can have default parameters, *args for variable arguments, **kwargs for keyword arguments. Return multiple values as tuple. Docstrings are important documentation."
      },

      {
        name: "📝 STRINGS",
        description: "Strings are sequences of characters used to represent text in Python. They are immutable - once created, individual characters cannot be changed, but you can create new strings through operations. Strings can be created using single quotes ('), double quotes (\"), triple quotes for multiline strings. Python provides extensive string methods for manipulation: case conversion (upper(), lower(), title()), whitespace handling (strip()), searching (find(), index(), count()), substitution (replace()), splitting/joining (split(), join()), formatting (format(), f-strings), character checking (isalpha(), isdigit(), isalnum()). Escape sequences allow special characters (\\n newline, \\t tab). String slicing [start:stop:step] creates substrings. f-strings are the most readable and fastest formatting method.",
        code: `# String creation
sample_text = "  Hello Python World  "

# Case conversion
print(f"Strip: '{sample_text.strip()}'")
print(f"Lowercase: {sample_text.lower()}")
print(f"Uppercase: {sample_text.upper()}")
print(f"Title: {sample_text.title()}")

# Search and replace
print(f"Find 'Python': {sample_text.find('Python')}")
print(f"Replace: {sample_text.replace('Python', 'Java')}")

# Split and join
words_list = sample_text.strip().split()
print(f"Split: {words_list}")
joined_string = "-".join(words_list)
print(f"Joined: {joined_string}")

# Character checking
print(f"isalpha(): {'abc'.isalpha()}")
print(f"isdigit(): {'123'.isdigit()}")
print(f"isalnum(): {'abc123'.isalnum()}")

# String slicing
text_sample = "Python Programming"
print(f"Original: {text_sample}")
print(f"[0:6]: {text_sample[0:6]}")
print(f"[:6]: {text_sample[:6]}")
print(f"[7:]: {text_sample[7:]}")
print(f"[::-1]: {text_sample[::-1]}")

# String formatting with f-strings
user_name, user_age = "Alice", 25
print(f"f-string: {user_name} is {user_age} years old")
print(f"Expression: {user_name.upper()} will be {user_age + 1} next year")`,
        lineByLine: ["Line 2: String with extra spaces", "Line 5-9: Case conversion methods", "Line 6: strip() removes whitespace", "Line 7: lower() converts to lowercase", "Line 8: upper() converts to uppercase", "Line 12-14: Search and replace methods", "Line 13: find() returns index or -1", "Line 14: replace() substitutes substring", "Line 17-20: Split and join operations", "Line 23-26: Character checking methods", "Line 29-35: String slicing with different variations", "Line 38-40: f-string formatting with expressions"],
        simpleMeaning: "Strings are text data. You can make them small, capital, split, join, replace - like in a text editor. Strings cannot be changed (immutable), a new string is created for each operation. f-strings are easiest for using variables.",
        output: `Strip: 'Hello Python World'
Lowercase:   hello python world  
Uppercase:   HELLO PYTHON WORLD  
Title:   Hello Python World  
Find 'Python': 8
Replace:   Hello Java World  
Split: ['Hello', 'Python', 'World']
Joined: Hello-Python-World
isalpha(): True
isdigit(): True
isalnum(): True
Original: Python Programming
[0:6]: Python
[:6]: Python
[7:]: Programming
[::-1]: gnimmargorP nohtyP
f-string: Alice is 25 years old
Expression: ALICE will be 26 next year`,
        note: "Strings are immutable - methods return new strings, they don't modify original. f-strings (Python 3.6+) are fastest and most readable. Use strip() to clean user input. Use split() to parse CSV or user input."
      },

      {
        name: "📖 DICTIONARIES",
        description: "Dictionaries are powerful data structures that store key-value pairs. Keys must be unique and immutable (strings, numbers, tuples), values can be any type (including lists, other dictionaries). Dictionaries maintain insertion order from Python 3.7+. They provide O(1) average time complexity for lookup, insertion, and deletion. Use curly braces {} or dict() constructor. Access values using square brackets [] (raises KeyError if key missing) or get() method (returns None or default). Methods: keys() returns view of keys, values() returns view of values, items() returns view of (key, value) pairs. Dictionary comprehensions provide concise creation. Dictionaries are ideal for counting frequencies, caching, mapping relationships, configuration settings, JSON data parsing.",
        code: `# Creating dictionaries
person_info = {
    "person_name": "Alice",
    "person_age": 25,
    "person_city": "New York",
    "person_hobbies": ["reading", "coding"]
}

# Accessing values
print(f"Using []: {person_info['person_name']}")
print(f"Using get(): {person_info.get('person_age')}")
print(f"Get with default: {person_info.get('country', 'USA')}")

# Adding and updating
person_info["email_id"] = "alice@email.com"
person_info["person_age"] = 26
print(f"After update - Age: {person_info['person_age']}")

# Removing items
removed_email = person_info.pop("email_id")
print(f"Removed email: {removed_email}")
last_item = person_info.popitem()
print(f"Last item removed: {last_item}")

# Looping through dictionary
print("\\nLooping through items:")
for key_name, value_data in person_info.items():
    print(f"  {key_name} = {value_data}")

# Checking key existence
if "person_name" in person_info:
    print("\\nName exists in dictionary")

# Dictionary comprehension
square_dict = {x: x**2 for x in range(5)}
print(f"Squares dict: {square_dict}")`,
        lineByLine: ["Line 1-7: Dictionary with nested structure", "Line 2: string key with string value", "Line 5: List as value", "Line 10-13: Accessing dictionary values safely", "Line 11: Square bracket access", "Line 12: get() method safe access", "Line 16-18: Adding new key and updating existing key", "Line 21-25: Removing items with pop() and popitem()", "Line 28-30: Loop through key-value pairs", "Line 33-34: Check key existence with 'in' operator", "Line 37-38: Dictionary comprehension"],
        simpleMeaning: "Dictionary is like a real dictionary - word (key) and meaning (value) pairs. You can quickly get the value using the key. Like a phonebook where you find number using name. Keys must be unique, values can repeat.",
        output: `Using []: Alice
Using get(): 25
Get with default: USA
After update - Age: 26
Removed email: alice@email.com
Last item removed: ('person_hobbies', ['reading', 'coding'])

Looping through items:
  person_name = Alice
  person_age = 26
  person_city = New York

Name exists in dictionary
Squares dict: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`,
        note: "Keys must be immutable (can't use list as key). Use get() instead of [] to avoid KeyError. Python 3.7+ preserves insertion order. Dictionary comprehension is efficient for creating dictionaries."
      }
    ]
  },
  
  advanced: {
    title: "🚀 ADVANCED PYTHON CONCEPTS",
    description: "Master advanced Python programming concepts including decorators for function enhancement, generators for memory-efficient iteration, comprehensive exception handling for robust applications, object-oriented programming (OOP) principles with classes and inheritance, file handling for data persistence, modules and packages for code organization, lambda functions for functional programming, working with JSON data, API integration using requests library, and asynchronous programming with async/await. These advanced topics will help you write more efficient, maintainable, and professional Python code.",
    topics: [
      {
  name: "⚠️ EXCEPTION HANDLING",

  description: "Exception handling is crucial for building robust, production-ready applications that gracefully handle errors without crashing. Python's try-except-finally blocks provide structured error management. The try block contains code that might raise exceptions, except blocks handle specific exception types, else block executes only if no exception occurs, finally block always executes (useful for cleanup). Common built-in exceptions: ValueError, TypeError, IndexError, KeyError, FileNotFoundError, ZeroDivisionError.",

  code: `# Basic exception handling
try:
    input_number = int(input("Enter a number: "))
    calculation_result = 100 / input_number
    print(f"Result: {calculation_result}")

except ValueError:
    print("Error: Please enter a valid integer!")

except ZeroDivisionError:
    print("Error: Cannot divide by zero!")

except Exception as error:
    print(f"Unexpected error: {error}")

else:
    print("Operation completed successfully!")

finally:
    print("This always runs - cleanup here")


# Raising exceptions manually
def validate_user_age(age_value):
    if not isinstance(age_value, int):
        raise TypeError(
            f"Age must be integer, got {type(age_value).__name__}"
        )

    if age_value < 0:
        raise ValueError("Age cannot be negative")

    if age_value > 150:
        raise ValueError("Age cannot exceed 150")

    return age_value


# Custom exception class
class InsufficientFundsError(Exception):
    """Raised when account balance is insufficient"""

    def __init__(self, current_balance, requested_amount):
        self.current_balance = current_balance
        self.requested_amount = requested_amount

        self.error_message = (
            "Insufficient funds: Balance $" +
            str(current_balance) +
            ", Need $" +
            str(requested_amount - current_balance) +
            " more"
        )

        super().__init__(self.error_message)


# Using custom exception
class BankAccount:
    def __init__(self, account_owner, initial_balance=0):
        self.account_owner = account_owner
        self.account_balance = initial_balance

    def withdraw_money(self, amount_to_withdraw):
        if amount_to_withdraw > self.account_balance:
            raise InsufficientFundsError(
                self.account_balance,
                amount_to_withdraw
            )

        self.account_balance -= amount_to_withdraw
        return self.account_balance


# Testing custom exception
user_account = BankAccount("Alice", 100)

try:
    user_account.withdraw_money(200)

except InsufficientFundsError as error:
    print(f"Withdrawal failed: {error}")
    print(
        "Balance: $" +
        str(error.current_balance) +
        ", Requested: $" +
        str(error.requested_amount)
    )`,

  lineByLine: [
    "Line 1-18: Complete try-except-else-finally structure",
    "Line 3-5: Code that may raise exceptions",
    "Line 7-8: Handle invalid integer input",
    "Line 10-11: Handle divide by zero",
    "Line 13-14: Handle unexpected exceptions",
    "Line 16: else runs only if no error occurs",
    "Line 19: finally always runs",
    "Line 23-36: Manual exception raising",
    "Line 40-58: Custom exception class",
    "Line 62-76: BankAccount class",
    "Line 80-92: Using custom exception"
  ],

  simpleMeaning: "Exception handling stops program crashes by handling errors safely. It is like having a backup plan when something goes wrong.",

  output: `Enter a number: 0
Error: Cannot divide by zero!
This always runs - cleanup here

Withdrawal failed: Insufficient funds: Balance $100, Need $100 more
Balance: $100, Requested: $200`,

  note: "Avoid using ${} inside JavaScript template literals because Next.js treats it as JavaScript interpolation and throws ReferenceError. Use string concatenation instead."
},

      {
        name: "📁 FILE HANDLING",
        description: "File handling enables Python programs to read from and write to files, allowing data persistence beyond program execution. Working with files is essential for many applications: configuration files, data processing, logging, user data storage. The open() function returns a file object with modes: 'r' (read - default), 'w' (write - overwrites), 'a' (append - adds to end), 'x' (exclusive creation - fails if exists). Adding 'b' for binary mode, 't' for text mode (default). Always use 'with' statement for file operations - it automatically closes files even if exceptions occur. Reading methods: read() reads entire file, readline() reads one line, readlines() reads all lines into list. Writing methods: write() writes string, writelines() writes list of strings. For structured data: CSV files (csv module), JSON files (json module).",
        code: `# Writing to file
with open('sample.txt', 'w') as file:
    file.write("Hello, World!\\n")
    file.write("Second line of text\\n")
    file.write("Third line here\\n")
print("File written successfully")

# Appending to file
with open('sample.txt', 'a') as file:
    file.write("This line is appended\\n")
print("Content appended")

# Reading entire file
with open('sample.txt', 'r') as file:
    file_content = file.read()
    print("\\n--- Complete file content ---")
    print(file_content)

# Reading line by line
print("\\n--- Reading line by line ---")
with open('sample.txt', 'r') as file:
    for line_num, line_text in enumerate(file, 1):
        print(f"Line {line_num}: {line_text.strip()}")`,
        lineByLine: ["Line 1-6: Writing to file with 'w' mode overwrites", "Line 2: 'with' statement auto-closes file", "Line 3-5: write() adds string content", "Line 9-12: Appending with 'a' mode preserves content", "Line 15-19: Reading entire file with read()", "Line 22-26: Line by line iteration (memory efficient)", "Line 23: enumerate() adds line numbers", "Line 24: strip() removes newline characters"],
        simpleMeaning: "File handling lets you create, read, update, and delete files on your computer. Like Notepad - you can save text, open it later, add more text. 'r' is for reading, 'w' for writing (deletes old content), 'a' for appending (keeps old content).",
        output: `File written successfully
Content appended

--- Complete file content ---
Hello, World!
Second line of text
Third line here
This line is appended

--- Reading line by line ---
Line 1: Hello, World!
Line 2: Second line of text
Line 3: Third line here
Line 4: This line is appended`,
        note: "Always use 'with' statement - it auto-closes files even if errors occur. Use 'w' carefully (erases existing content). Use 'a' to append without overwriting. Always handle FileNotFoundError when reading files."
      },

      {
        name: "🎨 DECORATORS",
        description: "Decorators are powerful Python features that modify or enhance functions without changing their source code. They follow the principle of 'open-closed' - open for extension, closed for modification. Decorators are functions that take another function as argument, wrap it with additional functionality, and return the wrapped function. Common use cases: logging, timing, authentication, rate limiting, caching/memoization, input validation. The @decorator syntax is syntactic sugar for function = decorator(function). Decorators can accept arguments (nested decorators), stack (multiple decorators applied bottom to top), and preserve function metadata with functools.wraps. Decorators are extensively used in web frameworks (Flask, Django) and testing frameworks.",
        code: `import time
import functools

# Basic decorator
def simple_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("Before function call")
        result = func(*args, **kwargs)
        print("After function call")
        return result
    return wrapper

@simple_decorator
def say_hello():
    print("Hello!")

# Timer decorator
def timer_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.perf_counter()
        result = func(*args, **kwargs)
        end_time = time.perf_counter()
        elapsed_time = end_time - start_time
        print(f"{func.__name__} took {elapsed_time:.4f} seconds")
        return result
    return wrapper

@timer_decorator
def slow_operation():
    time.sleep(1)
    return "Operation complete"

# Logger decorator
def logger_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args}, {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@logger_decorator
def add_numbers(a, b):
    return a + b

# Using decorators
say_hello()
result = slow_operation()
print(f"Result: {result}")
add_numbers(5, 3)`,
        lineByLine: ["Line 1-15: Basic decorator structure", "Line 2: Import time for timing", "Line 3: Import functools for wraps", "Line 5: @functools.wraps preserves metadata", "Line 6: wrapper accepts any arguments", "Line 8: Call original function", "Line 12: @ syntax applies decorator", "Line 18-32: Timer decorator for performance", "Line 35-45: Logger decorator for debugging", "Line 47-53: Using decorated functions"],
        simpleMeaning: "Decorators add extra functionality to functions without modifying their original code. Like gift wrapping - the original gift (function) stays the same, but the wrapper (decorator) adds extra features like timing, logging, or caching.",
        output: `Before function call
Hello!
After function call
slow_operation took 1.0012 seconds
Result: Operation complete
Calling add_numbers with (5, 3), {}
add_numbers returned: 8`,
        note: "Always use functools.wraps to preserve function metadata (name, docstring). Decorators are applied bottom to top (nearest to function runs first). Decorators with arguments need three levels of nesting."
      },

      {
        name: "💨 LIST COMPREHENSIONS & GENERATORS",
        description: "List comprehensions provide a concise way to create lists. They are more readable and often faster than traditional for loops. Syntax: [expression for item in iterable if condition]. Generator expressions (using parentheses instead of brackets) yield values one at a time, saving memory for large sequences. Generator functions use 'yield' instead of 'return' and maintain state between calls. Use generators for processing large datasets, infinite sequences, or when you only need to iterate once. They are memory-efficient because they don't store all values in memory at once.",
        code: `# List comprehension
squares_list = [x**2 for x in range(10)]
print(f"Squares: {squares_list}")

# With condition
even_numbers = [x for x in range(20) if x % 2 == 0]
print(f"Even numbers: {even_numbers[:10]}...")

# Nested comprehension
matrix_2d = [[j for j in range(3)] for i in range(3)]
print(f"Matrix: {matrix_2d}")

# Dictionary comprehension
square_dict = {x: x**2 for x in range(5)}
print(f"Dict: {square_dict}")

# Generator expression (memory efficient)
generator_obj = (x**2 for x in range(1000000))
print(f"Generator type: {type(generator_obj)}")
print(f"First value: {next(generator_obj)}")

# Generator function
def fibonacci_sequence(limit_value):
    a, b = 0, 1
    while a < limit_value:
        yield a
        a, b = b, a + b

fib_gen = fibonacci_sequence(100)
print(f"Fibonacci: {list(fib_gen)[:10]}")`,
        lineByLine: ["Line 1-3: List comprehension syntax [expression for item in iterable]", "Line 6-8: Adding condition with 'if' filters items", "Line 11-12: Nested comprehension creates 2D matrix", "Line 15-16: Dictionary comprehension {key: value for item}", "Line 19-22: Generator expression uses () instead of []", "Line 20: Generators don't store all values in memory", "Line 21: next() gets next value from generator", "Line 24-30: Generator function uses 'yield' instead of return", "Line 25: Maintains state between yields", "Line 32-33: Using generator function"],
        simpleMeaning: "List comprehension is a shortcut for creating lists - like writing a loop in one line. Generators produce values one at a time, saving memory for large data. Like a TV streaming service (generator) vs downloading the whole movie (list).",
        output: `Squares: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
Even numbers: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]...
Matrix: [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
Dict: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
Generator type: <class 'generator'>
First value: 0
Fibonacci: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
        note: "List comprehensions are faster than loops for simple operations. Generators are memory-efficient for large data streams. Use generators when you only need to iterate once. Generator functions use 'yield' to return values one at a time."
      },

      {
        name: "⚡ LAMBDA & MAP/FILTER/REDUCE",
        description: "Lambda creates anonymous one-line functions. Syntax: lambda parameters: expression. They are limited to single expression and cannot contain statements. Map applies function to all items in an iterable. Filter selects items where function returns True. Reduce cumulatively combines items using function from functools module. These functional programming tools are useful for data transformation, filtering, and aggregation. They work well with lambda for concise operations. Map and filter can often be replaced with list comprehensions, which are more readable. Reduce is great for cumulative operations like sum, product, or finding maximum/minimum.",
        code: `# Lambda functions
square_func = lambda x: x ** 2
add_func = lambda a, b: a + b
print(f"Lambda square: {square_func(5)}")
print(f"Lambda add: {add_func(3, 5)}")

# Map - apply to all items
number_list = [1, 2, 3, 4, 5]
squared_values = list(map(lambda x: x**2, number_list))
print(f"Map squared: {squared_values}")

# Filter - select items
even_values = list(filter(lambda x: x % 2 == 0, number_list))
print(f"Filter evens: {even_values}")

# Reduce - cumulative operation
from functools import reduce
sum_total = reduce(lambda a, b: a + b, number_list)
print(f"Reduce sum: {sum_total}")

# Maximum using reduce
max_value = reduce(lambda a, b: a if a > b else b, number_list)
print(f"Max value: {max_value}")

# Chaining operations
number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = reduce(
    lambda a, b: a + b,
    map(lambda x: x**2,
        filter(lambda x: x % 2 == 0, number_list)
    )
)
print(f"Sum of squares of evens: {result}")`,
        lineByLine: ["Line 1-4: Lambda syntax - lambda parameters: expression", "Line 7-9: map(function, iterable) applies to each item", "Line 12-13: filter(condition, iterable) keeps True items", "Line 16-18: reduce from functools combines all items", "Line 21-22: reduce for finding maximum value", "Line 25-31: Chaining - filter then map then reduce", "Line 26: reduce sums everything", "Line 27: map squares values", "Line 28: filter keeps only evens"],
        simpleMeaning: "Lambda is a one-line function without a name, used for simple operations. Map applies a function to every item in a list. Filter selects items that meet a condition. Reduce combines all items into one value. Like assembly line operations - transform, filter, then combine.",
        output: `Lambda square: 25
Lambda add: 8
Map squared: [1, 4, 9, 16, 25]
Filter evens: [2, 4]
Reduce sum: 15
Max value: 5
Sum of squares of evens: 220`,
        note: "Lambda functions are limited to single expression. Map/filter can be replaced by list comprehensions (often more readable). Reduce is good for cumulative operations. For complex operations, regular functions are better than lambda."
      },

      {
        name: "🏗️ OBJECT ORIENTED PROGRAMMING",
        description: "OOP organizes code using classes (blueprints) and objects (instances). Key principles: Encapsulation (bundling data and methods, hiding internal details), Inheritance (creating new classes based on existing ones), Polymorphism (same interface, different implementations). Class variables are shared across all instances, instance variables are unique per instance. The __init__ method is the constructor. Use @property decorator for getters/setters. Single underscore (_) indicates protected, double underscore (__) for name mangling (private). Super() calls parent class methods. Method overriding allows child classes to provide specific implementations. OOP helps in modeling real-world entities and creating reusable, maintainable code.",
        code: `# Class definition
class Student:
    school_name = "Python Academy"  # Class variable
    
    def __init__(self, student_name, student_age, student_grade):
        self.student_name = student_name
        self.student_age = student_age
        self._student_grade = student_grade  # Protected
        self.__private_data = "secret"  # Private
    
    # Instance method
    def introduce_student(self):
        return f"I'm {self.student_name}, {self.student_age} years old"
    
    # Property (getter/setter)
    @property
    def student_grade(self):
        return self._student_grade
    
    @student_grade.setter
    def student_grade(self, grade_value):
        if 0 <= grade_value <= 100:
            self._student_grade = grade_value
        else:
            raise ValueError("Grade must be 0-100")
    
    # Class method
    @classmethod
    def change_school_name(cls, new_school_name):
        cls.school_name = new_school_name

# Inheritance
class GraduateStudent(Student):
    def __init__(self, student_name, student_age, student_grade, thesis_title):
        super().__init__(student_name, student_age, student_grade)
        self.thesis_title = thesis_title
    
    def introduce_student(self):  # Method overriding
        return f"{super().introduce_student()}, writing thesis on {self.thesis_title}"

# Using classes
alice = Student("Alice", 25, 85)
bob = GraduateStudent("Bob", 28, 90, "Artificial Intelligence")
print(alice.introduce_student())
print(bob.introduce_student())
alice.student_grade = 95
print(f"Alice's grade: {alice.student_grade}")
print(f"School name: {Student.school_name}")`,
        lineByLine: ["Line 1: class keyword defines blueprint", "Line 2: Class variable - shared by all instances", "Line 4-7: __init__ is constructor, self refers to instance", "Line 5-6: Instance variables (unique per object)", "Line 7: Single underscore _ means protected (convention)", "Line 8: Double underscore __ for name mangling (private)", "Line 11-12: Instance method", "Line 15-24: @property creates getter/setter", "Line 27-29: @classmethod works on class, not instance", "Line 32-39: Inheritance - GraduateStudent extends Student", "Line 33: super() calls parent class constructor", "Line 36-38: Override introduce() method", "Line 42-47: Creating and using objects"],
        simpleMeaning: "OOP represents real-world things. Class is blueprint, object is actual thing created from blueprint. Like a car design (class) vs actual cars (objects). Encapsulation hides internal details, inheritance reuses code, polymorphism allows same method to work differently.",
        output: `I'm Alice, 25 years old
I'm Bob, 28 years old, writing thesis on Artificial Intelligence
Alice's grade: 95
School name: Python Academy`,
        note: "Use _ for protected (convention), __ for private (name mangling). @property allows controlled access. super() calls parent class methods. Class variables are shared, instance variables are unique per object."
      },

      {
        name: "📦 MODULES & PACKAGES",
        description: "Modules are Python files containing code (functions, classes, variables). Packages are directories containing multiple modules and an __init__.py file. Import functionality from modules to organize and reuse code. Different import methods: 'import module' (entire module), 'from module import item' (specific items), 'import module as alias' (rename). The __name__ == '__main__' guard prevents code from running when imported. Python has a rich standard library with modules like math, random, datetime, os, sys, json, re, collections, and more. Third-party packages can be installed via pip (Python Package Installer).",
        code: `# Different import methods
import math
from datetime import datetime
from random import randint as random_int
import os

# Using imported modules
print(f"Square root of 16: {math.sqrt(16)}")
print(f"Value of Pi: {math.pi}")
print(f"Today's date: {datetime.now().date()}")
print(f"Random integer (1-10): {random_int(1, 10)}")

# OS module operations
print(f"Current working directory: {os.getcwd()}")
print(f"Files in current directory: {os.listdir('.')[:3]}")

# Creating a custom module (save as mymodule.py)
# Content of mymodule.py:
"""
def greet_user(name):
    return f"Hello, {name}!"

PI_VALUE = 3.14159
VERSION = "1.0"
"""

# Importing custom module
# import mymodule
# print(mymodule.greet_user("Alice"))
# print(f"PI: {mymodule.PI_VALUE}")

# __name__ guard for testing when script runs directly
if __name__ == "__main__":
    print("This code runs only when executed directly, not when imported")`,
        lineByLine: ["Line 1-4: Different import methods", "Line 2: 'import module' imports entire module", "Line 3: 'from...import' imports specific items", "Line 4: 'as' creates alias for module/function", "Line 7-11: Using imported functions from modules", "Line 8: math.sqrt() for square root", "Line 9: math.pi for pi constant", "Line 10: datetime.now() for current date/time", "Line 11: Using aliased random function", "Line 14-15: OS module for system operations", "Line 14: getcwd() gets current working directory", "Line 15: listdir() lists directory contents", "Line 18-25: Example of custom module creation", "Line 28-30: Importing and using custom module", "Line 33-35: __name__ == '__main__' guard prevents code from running when imported"],
        simpleMeaning: "Module is a file containing Python code. Package is a folder with multiple modules. You can import and use code from other files. Like using tools from a toolbox - you import only what you need. Python has many built-in modules (math, random, datetime) and thousands of third-party packages.",
        output: `Square root of 16: 4.0
Value of Pi: 3.141592653589793
Today's date: 2024-01-15
Random integer (1-10): 7
Current working directory: /home/user/project
Files in current directory: ['file1.py', 'file2.py', 'file3.py']
This code runs only when executed directly, not when imported`,
        note: "Use 'import module' for namespace, 'from module import item' for direct access. '__name__ == '__main__'' guard allows testing code without running on import. Packages need __init__.py file (can be empty). Install packages using 'pip install package_name'."
      },

      {
        name: "🌐 JSON & API HANDLING",
        description: "JSON (JavaScript Object Notation) is a lightweight data format for data exchange. APIs (Application Programming Interfaces) allow communication between systems over HTTP. Python's json module converts between Python objects and JSON. json.dumps() converts Python dict to JSON string, json.loads() parses JSON string to Python dict. json.dump() writes JSON to file, json.load() reads JSON from file. The requests library makes HTTP requests to APIs. Common HTTP methods: GET (retrieve data), POST (send data), PUT (update data), DELETE (remove data). Always check response.status_code (200 means success). Use try-except for network errors. APIs return data in JSON format which can be parsed with response.json().",
        code: `import json
import requests

# JSON operations
data_object = {
    "user_name": "Alice",
    "user_age": 25,
    "user_city": "New York",
    "user_hobbies": ["reading", "coding"],
    "user_address": {
        "street": "123 Main St",
        "zipcode": "10001"
    }
}

# Serialize Python object to JSON string
json_string = json.dumps(data_object, indent=2)
print("JSON string:")
print(json_string)

# Parse JSON string to Python object
parsed_data = json.loads(json_string)
print(f"Parsed name: {parsed_data['user_name']}")
print(f"Parsed hobbies: {', '.join(parsed_data['user_hobbies'])}")

# Write JSON to file
with open('user_data.json', 'w') as json_file:
    json.dump(data_object, json_file, indent=2)
print("\\nJSON file created: user_data.json")

# Read JSON from file
with open('user_data.json', 'r') as json_file:
    loaded_data = json.load(json_file)
    print(f"Loaded from file - City: {loaded_data['user_city']}")

# API request example (GitHub API)
print("\\n--- API Request Example ---")
try:
    api_response = requests.get('https://api.github.com/users/octocat')
    if api_response.status_code == 200:
        user_api_data = api_response.json()
        print(f"GitHub Username: {user_api_data.get('login')}")
        print(f"User Name: {user_api_data.get('name', 'Not provided')}")
        print(f"Public Repos: {user_api_data.get('public_repos', 0)}")
    elif api_response.status_code == 404:
        print("User not found")
    else:
        print(f"API error: Status code {api_response.status_code}")
except requests.exceptions.RequestException as network_error:
    print(f"Network request failed: {network_error}")

# POST request example
print("\\n--- POST Request Example ---")
post_data = {"title": "Python Post", "body": "Learning APIs", "userId": 1}
try:
    post_response = requests.post('https://jsonplaceholder.typicode.com/posts', json=post_data)
    if post_response.status_code == 201:
        created_data = post_response.json()
        print(f"Post created with ID: {created_data.get('id')}")
    else:
        print(f"POST failed: {post_response.status_code}")
except requests.exceptions.RequestException as network_error:
    print(f"POST request failed: {network_error}")`,
        lineByLine: ["Line 1-2: Import json and requests modules", "Line 5-15: Python dictionary (similar to JSON structure)", "Line 9: List as value", "Line 10-12: Nested dictionary as value", "Line 18-19: json.dumps() converts dict to JSON string", "Line 18: indent parameter makes JSON readable", "Line 23-25: json.loads() parses JSON string back to dict", "Line 28-30: json.dump() writes JSON to file", "Line 33-35: json.load() reads JSON from file", "Line 38-53: API GET request with error handling", "Line 40: requests.get() makes HTTP GET request", "Line 41: Check status code (200=success)", "Line 42: response.json() parses JSON response", "Line 46-49: Handle different status codes", "Line 50-52: Handle network/connection errors", "Line 56-66: API POST request example", "Line 58: requests.post() sends data to API", "Line 59: Check for 201 Created status", "Line 60: Parse and display response data"],
        simpleMeaning: "JSON is a data format like dictionary for sharing data between systems. APIs let programs talk to each other over the internet. JSON serialization converts Python objects to JSON string, deserialization converts back. API requests fetch or send data from/to web services.",
        output: `JSON string:
{
  "user_name": "Alice",
  "user_age": 25,
  "user_city": "New York",
  "user_hobbies": [
    "reading",
    "coding"
  ],
  "user_address": {
    "street": "123 Main St",
    "zipcode": "10001"
  }
}
Parsed name: Alice
Parsed hobbies: reading, coding

JSON file created: user_data.json
Loaded from file - City: New York

--- API Request Example ---
GitHub Username: octocat
User Name: The Octocat
Public Repos: 8

--- POST Request Example ---
Post created with ID: 101`,
        note: "json.dumps() for string, json.dump() for file. Always check API response status code. Use try-except for network calls. Install requests: 'pip install requests'. Common status codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error."
      },

      {
        name: "⚡ ASYNC/AWAIT",
        description: "Async/await enables concurrent programming, allowing multiple tasks to run seemingly simultaneously. Asynchronous functions (coroutines) defined with 'async def' can pause execution using 'await', allowing other tasks to run. This improves performance for I/O-bound operations (network calls, file operations, database queries). Key concepts: asyncio.run() executes async main function, asyncio.gather() runs multiple tasks concurrently, await waits for async function to complete but doesn't block the event loop. Async is NOT for CPU-heavy tasks (use multiprocessing for that). Use async when dealing with many network requests, API calls, or file operations that would otherwise waste time waiting.",
        code: `import asyncio
import time

# Synchronous function (blocks execution)
def sync_task(task_name, duration_seconds):
    print(f"Starting {task_name}...")
    time.sleep(duration_seconds)  # Blocks - nothing else runs
    print(f"Finished {task_name}")
    return f"{task_name} completed"

# Asynchronous function (non-blocking)
async def async_task(task_name, duration_seconds):
    print(f"Starting {task_name}...")
    await asyncio.sleep(duration_seconds)  # Non-blocking - other tasks can run
    print(f"Finished {task_name}")
    return f"{task_name} completed"

# Running async tasks concurrently
async def run_multiple_tasks():
    print("Running tasks concurrently:")
    # Run all tasks at the same time
    results = await asyncio.gather(
        async_task("Task A (2s)", 2),
        async_task("Task B (1s)", 1),
        async_task("Task C (3s)", 3)
    )
    print(f"All results: {results}")

# Processing a list of URLs asynchronously
async def fetch_website_data(session, website_url):
    print(f"Fetching {website_url}...")
    await asyncio.sleep(1)  # Simulating network request
    print(f"Completed {website_url}")
    return f"Data from {website_url}"

async def fetch_multiple_websites(website_list):
    print("\\nFetching multiple websites concurrently:")
    tasks = [asyncio.create_task(fetch_website_data(None, url)) for url in website_list]
    results = await asyncio.gather(*tasks)
    return results

# Async with error handling
async def async_task_with_timeout(task_name, duration_seconds):
    try:
        print(f"Starting {task_name} (timeout: 2 seconds)...")
        result = await asyncio.wait_for(
            async_task(task_name, duration_seconds),
            timeout=2.0
        )
        return result
    except asyncio.TimeoutError:
        return f"{task_name} timed out after 2 seconds"

# Compare sync vs async execution time
def demonstrate_sync_vs_async():
    print("=" * 50)
    print("SYNCHRONOUS EXECUTION (One at a time)")
    print("=" * 50)
    start_time = time.time()
    sync_task("Sync 1", 1)
    sync_task("Sync 2", 1)
    sync_task("Sync 3", 1)
    sync_time = time.time() - start_time
    print(f"Total sync time: {sync_time:.2f} seconds\\n")

# Main async demonstration
async def main():
    # Demonstrate sync vs async
    print("=" * 50)
    print("SYNCHRONOUS EXECUTION (One at a time)")
    print("=" * 50)
    start = time.time()
    sync_task("Sync 1", 1)
    sync_task("Sync 2", 1)
    sync_task("Sync 3", 1)
    sync_total = time.time() - start
    print(f"Total sync time: {sync_total:.2f} seconds\\n")
    
    print("=" * 50)
    print("ASYNCHRONOUS EXECUTION (Concurrent)")
    print("=" * 50)
    start = time.time()
    await run_multiple_tasks()
    async_total = time.time() - start
    print(f"Total async time: {async_total:.2f} seconds")
    print(f"Speed improvement: {sync_total/async_total:.1f}x faster\\n")
    
    # Fetch multiple websites concurrently
    websites = ["google.com", "github.com", "stackoverflow.com", "python.org"]
    results = await fetch_multiple_websites(websites)
    for result in results:
        print(f"✓ {result}")
    
    # Async with timeout
    print("\\n--- Async Timeout Example ---")
    result1 = await async_task_with_timeout("Fast task", 1)
    result2 = await async_task_with_timeout("Slow task", 3)
    print(result1)
    print(result2)

# Run the async program
if __name__ == "__main__":
    asyncio.run(main())`,
        lineByLine: ["Line 1-2: Import modules for async and time", "Line 5-11: Synchronous function uses time.sleep() - blocks everything", "Line 14-20: Async function uses async def and await asyncio.sleep()", "Line 16: await yields control, allowing other tasks to run", "Line 23-31: asyncio.gather() runs multiple tasks concurrently", "Line 25-29: All tasks start together, finish in shortest order", "Line 34-50: Processing multiple async operations concurrently", "Line 35: asyncio.create_task() schedules task for execution", "Line 36: asyncio.gather(*tasks) waits for all tasks", "Line 53-63: Async with timeout using asyncio.wait_for()", "Line 57: wait_for() raises TimeoutError if task takes too long", "Line 66-91: Comparison between sync and async execution", "Line 94-96: Run the async main function"],
        simpleMeaning: "Async programming does multiple things at once without waiting for each to finish. Like while tea is brewing, you prepare coffee - both happen simultaneously. Async is great for I/O operations (network, files, databases). For CPU-heavy tasks, use multiprocessing instead.",
        output: `==================================================
SYNCHRONOUS EXECUTION (One at a time)
==================================================
Starting Sync 1...
Finished Sync 1
Starting Sync 2...
Finished Sync 2
Starting Sync 3...
Finished Sync 3
Total sync time: 3.01 seconds

==================================================
ASYNCHRONOUS EXECUTION (Concurrent)
==================================================
Running tasks concurrently:
Starting Task A (2s)...
Starting Task B (1s)...
Starting Task C (3s)...
Finished Task B (1s)
Finished Task A (2s)
Finished Task C (3s)
All results: ['Task A (2s) completed', 'Task B (1s) completed', 'Task C (3s) completed']
Total async time: 3.01 seconds
Speed improvement: 1.0x faster

Fetching multiple websites concurrently:
Fetching google.com...
Fetching github.com...
Fetching stackoverflow.com...
Fetching python.org...
Completed google.com
Completed github.com
Completed stackoverflow.com
Completed python.org
✓ Data from google.com
✓ Data from github.com
✓ Data from stackoverflow.com
✓ Data from python.org

--- Async Timeout Example ---
Starting Fast task (timeout: 2 seconds)...
Starting Fast task...
Finished Fast task
Starting Slow task (timeout: 2 seconds)...
Starting Slow task...
Slow task timed out after 2 seconds
Fast task completed`,
        note: "Async is great for I/O operations (network, files, databases). For CPU-bound tasks, use multiprocessing instead. Use 'await' to wait for async functions. asyncio.gather() runs multiple tasks concurrently. Always handle TimeoutError for network operations. Install aiohttp for async HTTP requests."
      }
    ]
  }
};

// Helper function to get specific topic
export const getTopic = (category, topicName) => {
  const categoryData = learning[category];
  if (!categoryData) return null;
  return categoryData.topics.find(topic => topic.name === topicName);
};

// Helper function to search topics
export const searchTopics = (keyword) => {
  const results = [];
  const searchTerm = keyword.toLowerCase();
  
  ['basic', 'advanced'].forEach(category => {
    if (learning[category] && learning[category].topics) {
      learning[category].topics.forEach(topic => {
        if (topic.name.toLowerCase().includes(searchTerm) || 
            (topic.description && topic.description.toLowerCase().includes(searchTerm))) {
          results.push({...topic, category});
        }
      });
    }
  });
  
  return results;
};

// Helper function to get all topic names
export const getAllTopicNames = () => {
  const topics = [];
  ['basic', 'advanced'].forEach(category => {
    if (learning[category] && learning[category].topics) {
      learning[category].topics.forEach(topic => {
        topics.push({name: topic.name, category});
      });
    }
  });
  return topics;
};

// Helper function to get topic by exact name
export const getTopicByName = (name) => {
  for (const category of ['basic', 'advanced']) {
    const topic = learning[category]?.topics?.find(t => t.name === name);
    if (topic) return {...topic, category};
  }
  return null;
};

console.log("Complete Python Documentation Loaded!");
console.log(`Total topics: ${(learning.basic?.topics?.length || 0) + (learning.advanced?.topics?.length || 0)}`);
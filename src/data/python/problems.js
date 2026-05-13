// /data/python/problems.js

export const problems = {
  fresher: [
    {
      title: "Factorial of a Number",
      description: "Write a function that returns the factorial of a given non-negative integer n.",
      answer: "The factorial of a number n (denoted as n!) is the product of all positive integers less than or equal to n. Use a loop from 1 to n, multiplying each number. For recursion, the base case is n <= 1 returning 1, and the recursive case is n * factorial(n-1). Handle edge cases: negative numbers return None, 0! returns 1. Use iteration for better performance with large numbers.",
      example: `def factorial(n):
    if n < 0:
        return None
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# Recursive solution
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n - 1)

print(factorial(5))  # 120
print(factorial_recursive(5))  # 120`,
      output: "factorial(5) → 120\nfactorial_recursive(5) → 120",
      note: "💡 Time complexity: O(n). Space complexity: O(1) for iterative, O(n) for recursive."
    },
    {
      title: "Palindrome Checker",
      description: "Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).",
      answer: "A palindrome reads the same forward and backward. First, clean the string by removing non-alphanumeric characters and converting to lowercase. Then compare the cleaned string with its reverse using slicing [::-1]. Alternatively, use two pointers: one at start, one at end, moving inward while comparing characters. Both approaches work in O(n) time.",
      example: `def is_palindrome(s):
    s = ''.join(char.lower() for char in s if char.isalnum())
    return s == s[::-1]

def is_palindrome_two_pointer(s):
    s = ''.join(char.lower() for char in s if char.isalnum())
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

print(is_palindrome("madam"))  # True
print(is_palindrome("racecar"))  # True
print(is_palindrome("hello"))  # False`,
      output: "is_palindrome('madam') → True\nis_palindrome('racecar') → True\nis_palindrome('hello') → False",
      note: "💡 Time complexity: O(n). Space complexity: O(1) for two-pointer, O(n) for slice."
    },
    {
      title: "Find Second Largest Number",
      description: "Find the second largest number in a list without using sort() or sorted().",
      answer: "Track two variables: largest and second_largest. Initialize both to negative infinity. Iterate through the list. If current number is greater than largest, update second_largest to old largest, then update largest. Else if current number is greater than second_largest and not equal to largest, update second_largest. This single pass solution runs in O(n) time.",
      example: `def second_largest(numbers):
    if len(numbers) < 2:
        return None
    largest = second = float('-inf')
    for num in numbers:
        if num > largest:
            second = largest
            largest = num
        elif num > second and num != largest:
            second = num
    return second if second != float('-inf') else None

print(second_largest([10, 20, 4, 45, 99]))  # 45
print(second_largest([5, 5, 5, 5]))  # None
print(second_largest([1]))  # None`,
      output: "second_largest([10,20,4,45,99]) → 45\nsecond_largest([5,5,5,5]) → None\nsecond_largest([1]) → None",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Reverse a String",
      description: "Write a function that reverses a string without using built-in reverse methods.",
      answer: "There are multiple ways to reverse a string. Method 1: Use slicing with step -1 (s[::-1]) - this is the most Pythonic. Method 2: Loop through characters and prepend each to a result string. Method 3: Recursive approach - take first character and append to reversed remainder. Strings are immutable in Python, so all methods create a new string.",
      example: `def reverse_string(s):
    return s[::-1]

def reverse_string_loop(s):
    result = ''
    for char in s:
        result = char + result
    return result

def reverse_string_recursive(s):
    if len(s) <= 1:
        return s
    return reverse_string_recursive(s[1:]) + s[0]

print(reverse_string("Python"))  # 'nohtyP'
print(reverse_string_loop("Hello"))  # 'olleH'`,
      output: "reverse_string('Python') → 'nohtyP'\nreverse_string_loop('Hello') → 'olleH'",
      note: "💡 Time complexity: O(n). Space complexity: O(n)."
    },
    {
      title: "Check Prime Number",
      description: "Write a function that checks if a number is prime.",
      answer: "A prime number is greater than 1 and has no positive divisors other than 1 and itself. Optimized approach: Check divisibility only up to sqrt(n). After checking 2 and 3, check only numbers of form 6k ± 1. This reduces iterations significantly. Handle edge cases: numbers <= 1 return False, 2 and 3 return True.",
      example: `def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

print(is_prime(17))  # True
print(is_prime(4))   # False
print(is_prime(97))  # True`,
      output: "is_prime(17) → True\nis_prime(4) → False\nis_prime(97) → True",
      note: "💡 Time complexity: O(√n). Space complexity: O(1)."
    },
    {
      title: "Fibonacci Sequence",
      description: "Generate the first n numbers in the Fibonacci sequence.",
      answer: "Fibonacci sequence starts with 0 and 1, each subsequent number is the sum of the two preceding ones. Iterative approach: start with [0,1], then loop from 2 to n, appending the sum of last two elements. For large n, use a generator with yield to avoid storing all values in memory. Handle edge cases: n <= 0 returns empty list, n == 1 returns [0].",
      example: `def fibonacci(n):
    if n <= 0:
        return []
    if n == 1:
        return [0]
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[-1] + fib[-2])
    return fib

def fibonacci_generator(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(fibonacci(7))  # [0, 1, 1, 2, 3, 5, 8]`,
      output: "fibonacci(7) → [0, 1, 1, 2, 3, 5, 8]",
      note: "💡 Time complexity: O(n). Space complexity: O(n) for list, O(1) for generator."
    },
    {
      title: "Count Vowels and Consonants",
      description: "Count the number of vowels and consonants in a string.",
      answer: "Define a set of vowels (both uppercase and lowercase). Iterate through each character, check if it's alphabetic using isalpha(). If character in vowel set, increment vowel count; else increment consonant count. This approach handles spaces and punctuation correctly by ignoring non-alphabetic characters.",
      example: `def count_vowels_consonants(s):
    vowels = set('aeiouAEIOU')
    vowel_count = 0
    consonant_count = 0
    for char in s:
        if char.isalpha():
            if char in vowels:
                vowel_count += 1
            else:
                consonant_count += 1
    return vowel_count, consonant_count

v, c = count_vowels_consonants("Hello World")
print(f"Vowels: {v}, Consonants: {c}")`,
      output: "count_vowels_consonants('Hello World') → Vowels: 3, Consonants: 7",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Remove Duplicates from List",
      description: "Remove duplicate elements from a list while preserving order.",
      answer: "Use a set to track seen elements and a result list to maintain order. Iterate through original list, if element not in seen set, add to seen and append to result. This preserves the first occurrence order. Alternative: use OrderedDict.fromkeys() which removes duplicates while preserving order. Both methods run in O(n) time.",
      example: `def remove_duplicates(lst):
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

print(remove_duplicates([1, 2, 2, 3, 4, 4, 5]))  # [1, 2, 3, 4, 5]`,
      output: "remove_duplicates([1,2,2,3,4,4,5]) → [1,2,3,4,5]",
      note: "💡 Time complexity: O(n). Space complexity: O(n)."
    },
    {
      title: "Find Missing Number",
      description: "Find the missing number in an array of 1 to n.",
      answer: "Given an array of n-1 numbers from 1 to n with one missing. Method 1: Calculate expected sum using formula n*(n+1)/2, subtract actual sum to get missing number. Method 2: Use XOR property where a^a=0. XOR all numbers from 1 to n, then XOR with all array elements; the result is the missing number. XOR method avoids integer overflow for large n.",
      example: `def find_missing_number(arr):
    n = len(arr) + 1
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum

def find_missing_xor(arr):
    n = len(arr) + 1
    xor1 = 0
    for i in range(1, n + 1):
        xor1 ^= i
    xor2 = 0
    for num in arr:
        xor2 ^= num
    return xor1 ^ xor2

print(find_missing_number([1, 2, 4, 5, 6]))  # 3`,
      output: "find_missing_number([1,2,4,5,6]) → 3",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Anagram Checker",
      description: "Check if two strings are anagrams of each other.",
      answer: "Two strings are anagrams if they have the same characters with the same frequencies. Method 1: Sort both strings and compare; O(n log n) time. Method 2: Use Counter (dictionary) to count character frequencies; O(n) time. Clean strings by removing spaces and converting to lowercase. Both methods work well; Counter is more efficient for large strings.",
      example: `from collections import Counter

def are_anagrams(str1, str2):
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()
    return sorted(str1) == sorted(str2)

def are_anagrams_counter(str1, str2):
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()
    return Counter(str1) == Counter(str2)

print(are_anagrams("listen", "silent"))  # True
print(are_anagrams("hello", "world"))   # False`,
      output: "are_anagrams('listen', 'silent') → True\nare_anagrams('hello', 'world') → False",
      note: "💡 Time complexity: O(n log n) for sort, O(n) for Counter."
    },
    {
      title: "Sum of Digits (Digital Root)",
      description: "Calculate the sum of digits of a number until it becomes a single digit.",
      answer: "This is also known as the digital root. Method 1: Repeatedly sum digits until single digit using modulo 10 operations. Method 2: Mathematical formula digital root = 1 + (n-1) % 9 for n != 0. The formula works because the digital root is congruent to n modulo 9. Handle negative numbers by taking absolute value.",
      example: `def digital_root(n):
    n = abs(n)
    while n >= 10:
        total = 0
        while n > 0:
            total += n % 10
            n //= 10
        n = total
    return n

def digital_root_formula(n):
    if n == 0:
        return 0
    return 1 + (n - 1) % 9

print(digital_root(9875))  # 2
print(digital_root_formula(9875))  # 2`,
      output: "digital_root(9875) → 2\ndigital_root_formula(9875) → 2",
      note: "💡 Time complexity: O(log n) for iterative, O(1) for formula."
    },
    {
      title: "FizzBuzz",
      description: "Print numbers 1 to n, but for multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.",
      answer: "Classic programming problem. Iterate from 1 to n. Check divisibility by 15 first (both 3 and 5), then by 3, then by 5, else print number. The order of conditions matters: check most specific condition first to avoid double printing. Use modulo operator (%) to check divisibility.",
      example: `def fizzbuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result

print(fizzbuzz(15)[:5])  # ['1', '2', 'Fizz', '4', 'Buzz']`,
      output: "fizzbuzz(15)[:5] → ['1', '2', 'Fizz', '4', 'Buzz']",
      note: "💡 Time complexity: O(n). Space complexity: O(1) if printing directly."
    },
    {
      title: "Max Character in String",
      description: "Find the most frequent character in a string.",
      answer: "Use a dictionary to count character frequencies. Remove spaces if they shouldn't be counted. Iterate through string, update count in dictionary. Then find character with maximum count using max() with key parameter. For large strings, Counter from collections module provides a more concise implementation. Handle empty string by returning None.",
      example: `from collections import Counter

def max_char(s):
    if not s:
        return None
    s = s.replace(" ", "")
    count = Counter(s)
    return max(count, key=count.get)

print(max_char("hello world"))  # 'l'`,
      output: "max_char('hello world') → 'l'",
      note: "💡 Time complexity: O(n). Space complexity: O(k) where k is unique characters."
    },
    {
      title: "Merge Two Sorted Lists",
      description: "Merge two sorted lists into one sorted list.",
      answer: "Use two-pointer technique. Initialize pointers at start of both lists. Compare elements, append smaller to result, advance that pointer. When one list exhausted, append remaining elements from the other list. This runs in O(m+n) time. Alternative: use heapq.merge() for built-in solution.",
      example: `def merge_sorted_lists(list1, list2):
    result = []
    i, j = 0, 0
    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
    result.extend(list1[i:])
    result.extend(list2[j:])
    return result

print(merge_sorted_lists([1, 3, 5], [2, 4, 6]))  # [1, 2, 3, 4, 5, 6]`,
      output: "merge_sorted_lists([1,3,5], [2,4,6]) → [1,2,3,4,5,6]",
      note: "💡 Time complexity: O(m+n). Space complexity: O(m+n)."
    },
    {
      title: "Binary Search",
      description: "Implement binary search to find an element in a sorted array.",
      answer: "Binary search works on sorted arrays by repeatedly dividing search interval in half. Initialize left=0, right=len(arr)-1. While left <= right, calculate mid = (left+right)//2. If arr[mid] == target, return mid. If arr[mid] < target, search right half; else search left half. Returns -1 if not found. Time complexity O(log n), much faster than linear search for large arrays.",
      example: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

arr = [1, 3, 5, 7, 9]
print(binary_search(arr, 5))   # 2
print(binary_search(arr, 10))  # -1`,
      output: "binary_search([1,3,5,7,9], 5) → 2\nbinary_search([1,3,5,7,9], 10) → -1",
      note: "💡 Time complexity: O(log n). Space complexity: O(1)."
    },
    {
      title: "Armstrong Number",
      description: "Check if a number is an Armstrong number (sum of digits^power equals number).",
      answer: "An Armstrong number (also called narcissistic number) is a number that equals the sum of its own digits each raised to the power of the number of digits. First, compute the number of digits. Then sum each digit raised to that power. Compare with original number. For negative numbers, typically consider absolute value.",
      example: `def is_armstrong(n):
    num_str = str(n)
    power = len(num_str)
    total = sum(int(digit) ** power for digit in num_str)
    return total == n

print(is_armstrong(153))  # True (1³+5³+3³=153)
print(is_armstrong(123))  # False`,
      output: "is_armstrong(153) → True\nis_armstrong(123) → False",
      note: "💡 Time complexity: O(d) where d is number of digits."
    },
    {
      title: "Find All Duplicates in Array",
      description: "Find all elements that appear more than once in an array.",
      answer: "Use a set to track seen elements. Iterate through array, if element already in seen set, add to duplicates set; else add to seen set. This runs in O(n) time and O(n) space. Alternative: use Counter from collections to count frequencies and filter those with count > 1.",
      example: `def find_duplicates(nums):
    seen = set()
    duplicates = set()
    for num in nums:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)
    return list(duplicates)

print(find_duplicates([4,3,2,7,8,2,3,1]))  # [2, 3]`,
      output: "find_duplicates([4,3,2,7,8,2,3,1]) → [2,3]",
      note: "💡 Time complexity: O(n). Space complexity: O(n)."
    },
    {
      title: "Leap Year Checker",
      description: "Determine if a year is a leap year.",
      answer: "A year is a leap year if it is divisible by 4, but not by 100, unless also divisible by 400. Implement using conditional checks in that order. Handle negative years? Usually not considered, but can treat as absolute.",
      example: `def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False

print(is_leap_year(2020))  # True
print(is_leap_year(1900))  # False
print(is_leap_year(2000))  # True`,
      output: "is_leap_year(2020) → True\nis_leap_year(1900) → False\nis_leap_year(2000) → True",
      note: "💡 Time complexity: O(1)."
    },
    {
      title: "Reverse Words in String",
      description: "Reverse the order of words in a string.",
      answer: "Split the string into words using split() method which splits on whitespace. Then reverse the list of words using slicing [::-1] or two-pointer technique. Finally, join the reversed words with space using join(). This approach preserves word order within each word. For strings with multiple spaces, split() handles them automatically.",
      example: `def reverse_words(s):
    words = s.split()
    return ' '.join(words[::-1])

print(reverse_words("Hello World Python"))  # "Python World Hello"`,
      output: "reverse_words('Hello World Python') → 'Python World Hello'",
      note: "💡 Time complexity: O(n). Space complexity: O(n)."
    },
    {
      title: "First Non-Repeating Character",
      description: "Find the first character that doesn't repeat in a string.",
      answer: "First, count character frequencies using Counter or dictionary. Then iterate through the string again and return the first character whose count is 1. This two-pass approach runs in O(n) time and O(k) space where k is number of unique characters. Handle edge case where all characters repeat by returning None.",
      example: `from collections import Counter

def first_non_repeating(s):
    count = Counter(s)
    for char in s:
        if count[char] == 1:
            return char
    return None

print(first_non_repeating("swiss"))  # 'w'`,
      output: "first_non_repeating('swiss') → 'w'",
      note: "💡 Time complexity: O(n). Space complexity: O(k)."
    },
    {
      title: "Greatest Common Divisor (GCD)",
      description: "Find the GCD of two numbers using Euclidean algorithm.",
      answer: "The Euclidean algorithm finds GCD by repeatedly replacing the larger number with the remainder of dividing the larger by the smaller. The algorithm continues until remainder is 0, at which point the non-zero number is the GCD. This works because gcd(a,b) = gcd(b, a mod b). The algorithm runs in O(log min(a,b)) time.",
      example: `def gcd(a, b):
    while b:
        a, b = b, a % b
    return abs(a)

print(gcd(48, 18))  # 6
print(gcd(100, 25)) # 25`,
      output: "gcd(48,18) → 6\ngcd(100,25) → 25",
      note: "💡 Time complexity: O(log min(a,b)). Space complexity: O(1)."
    },
    {
      title: "Power of Two",
      description: "Check if a given integer is a power of two.",
      answer: "A number is a power of two if it is positive and has exactly one bit set. For positive integers, use (n & (n-1)) == 0. This works because powers of two have a single 1 bit; subtracting one flips all lower bits, so bitwise AND becomes zero. Also handle n > 0 separately.",
      example: `def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

print(is_power_of_two(16))  # True
print(is_power_of_two(18))  # False`,
      output: "is_power_of_two(16) → True\nis_power_of_two(18) → False",
      note: "💡 Time complexity: O(1)."
    },
    {
      title: "Convert Celsius to Fahrenheit",
      description: "Convert a temperature from Celsius to Fahrenheit.",
      answer: "Formula: F = C * 9/5 + 32. Implement this directly. Handle floating point or integer input accordingly.",
      example: `def celsius_to_fahrenheit(c):
    return c * 9/5 + 32

print(celsius_to_fahrenheit(0))   # 32.0
print(celsius_to_fahrenheit(100)) # 212.0`,
      output: "celsius_to_fahrenheit(0) → 32.0\ncelsius_to_fahrenheit(100) → 212.0",
      note: "💡 Time complexity: O(1)."
    },
    {
      title: "Check if Number is Even or Odd",
      description: "Determine if a number is even or odd.",
      answer: "Use modulo operator %. If number % 2 == 0, it's even; otherwise odd. For negative numbers, same logic works.",
      example: `def is_even(n):
    return n % 2 == 0

print(is_even(4))   # True
print(is_even(7))   # False`,
      output: "is_even(4) → True\nis_even(7) → False",
      note: "💡 Time complexity: O(1)."
    },
    {
      title: "Calculate Average of List",
      description: "Compute the average of numbers in a list.",
      answer: "Sum all elements using sum(), then divide by length. Handle empty list by returning None or 0 according to requirements.",
      example: `def average(nums):
    if not nums:
        return None
    return sum(nums) / len(nums)

print(average([1, 2, 3, 4, 5]))  # 3.0`,
      output: "average([1,2,3,4,5]) → 3.0",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Find Minimum in List",
      description: "Find the smallest number in a list without using min().",
      answer: "Initialize min_val to positive infinity or first element. Iterate through list, update if current number is smaller. Handle empty list by returning None.",
      example: `def find_min(nums):
    if not nums:
        return None
    min_val = nums[0]
    for num in nums[1:]:
        if num < min_val:
            min_val = num
    return min_val

print(find_min([5, 2, 8, 1, 9]))  # 1`,
      output: "find_min([5,2,8,1,9]) → 1",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Count Occurrences in List",
      description: "Count how many times a given element appears in a list.",
      answer: "Use list.count() method for simplicity, or iterate with loop. For multiple elements, use Counter. Return integer.",
      example: `def count_occurrences(lst, target):
    return lst.count(target)

print(count_occurrences([1,2,2,3,2,4], 2))  # 3`,
      output: "count_occurrences([1,2,2,3,2,4], 2) → 3",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Largest Product of Two Integers",
      description: "Find the maximum product of any two integers in an array.",
      answer: "Sort the array and compare product of two largest and product of two smallest (because negative numbers can become positive when multiplied). Return max of both.",
      example: `def max_product(nums):
    nums.sort()
    return max(nums[-1] * nums[-2], nums[0] * nums[1])

print(max_product([-10, -10, 1, 3, 2]))  # 100 (from -10*-10)`,
      output: "max_product([-10, -10, 1, 3, 2]) → 100",
      note: "💡 Time complexity: O(n log n) due to sort."
    },
    {
      title: "String to Integer (atoi)",
      description: "Convert a string to an integer, handling leading spaces, sign, and non-digit characters.",
      answer: "Implement manually: strip leading/trailing spaces? Usually only leading. Track sign and accumulate digits. Stop on first non-digit. Handle overflow (clamp to 32-bit signed int range).",
      example: `def my_atoi(s):
    s = s.strip()
    if not s:
        return 0
    sign = 1
    i = 0
    if s[0] in '+-':
        sign = -1 if s[0] == '-' else 1
        i += 1
    result = 0
    while i < len(s) and s[i].isdigit():
        result = result * 10 + (ord(s[i]) - ord('0'))
        i += 1
    result *= sign
    # clamp
    int_max = 2**31 - 1
    int_min = -2**31
    if result > int_max:
        return int_max
    if result < int_min:
        return int_min
    return result

print(my_atoi(" -42"))  # -42`,
      output: "my_atoi(' -42') → -42",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Longest Common Prefix",
      description: "Find the longest common prefix string amongst an array of strings.",
      answer: "Start with the first string as prefix. Iterate through other strings, shrink prefix until it matches the start of each. If prefix becomes empty, break. Return prefix.",
      example: `def longest_common_prefix(strs):
    if not strs:
        return ""
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix

print(longest_common_prefix(["flower","flow","flight"]))  # "fl"`,
      output: "longest_common_prefix(['flower','flow','flight']) → 'fl'",
      note: "💡 Time complexity: O(S) where S is total characters."
    },
    {
      title: "Valid Perfect Square",
      description: "Check if a given number is a perfect square.",
      answer: "Use binary search between 1 and num. Calculate mid*mid and compare. Alternatively, use integer sqrt (int(num**0.5)**2 == num). For large numbers, binary search avoids floating point issues.",
      example: `def is_perfect_square(num):
    if num < 0:
        return False
    low, high = 1, num
    while low <= high:
        mid = (low + high) // 2
        sq = mid * mid
        if sq == num:
            return True
        elif sq < num:
            low = mid + 1
        else:
            high = mid - 1
    return False

print(is_perfect_square(16))  # True
print(is_perfect_square(14))  # False`,
      output: "is_perfect_square(16) → True\nis_perfect_square(14) → False",
      note: "💡 Time complexity: O(log n)."
    }
  ],

  experienced: [
    {
      title: "Palindrome Number",
      description: "Check if a number is palindrome (reads same forwards and backwards).",
      answer: "A number is palindrome if it reads the same forward and backward. Negative numbers are not palindromes. Method 1: Convert to string and compare with reverse. Method 2: Reverse half of the number mathematically. For mathematical approach, handle edge case where number ends with 0 (except 0 itself). Reverse half the digits and compare with remaining half.",
      example: `def is_palindrome_number(x):
    if x < 0:
        return False
    original = x
    reversed_num = 0
    while x > 0:
        reversed_num = reversed_num * 10 + x % 10
        x //= 10
    return original == reversed_num

print(is_palindrome_number(121))   # True
print(is_palindrome_number(-121))  # False
print(is_palindrome_number(12321)) # True`,
      output: "is_palindrome_number(121) → True\nis_palindrome_number(-121) → False\nis_palindrome_number(12321) → True",
      note: "💡 Time complexity: O(log n). Space complexity: O(1)."
    },
    {
      title: "Two Sum Problem",
      description: "Find two numbers in an array that sum to a target value.",
      answer: "Use a hash map to store complement values. Iterate through array, for each number calculate complement = target - num. If complement exists in map, return indices. Otherwise store current number and its index in map. This single-pass solution runs in O(n) time and O(n) space. Brute force O(n²) is less efficient but works for small arrays.",
      example: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
print(two_sum([3, 2, 4], 6))       # [1, 2]`,
      output: "two_sum([2,7,11,15], 9) → [0,1]\ntwo_sum([3,2,4], 6) → [1,2]",
      note: "💡 Time complexity: O(n). Space complexity: O(n)."
    },
    {
      title: "Move Zeros to End",
      description: "Move all zeros to the end of the array while preserving relative order of non-zero elements.",
      answer: "Use two-pointer technique. One pointer (non_zero_index) tracks position where next non-zero should go. Iterate through array, when encountering non-zero, swap with element at non_zero_index and increment pointer. This maintains relative order of non-zero elements. Alternative: filter out zeros then extend with zeros list. Both methods run in O(n) time.",
      example: `def move_zeros(nums):
    non_zero_index = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[non_zero_index], nums[i] = nums[i], nums[non_zero_index]
            non_zero_index += 1
    return nums

print(move_zeros([0, 1, 0, 3, 12]))  # [1, 3, 12, 0, 0]`,
      output: "move_zeros([0,1,0,3,12]) → [1,3,12,0,0]",
      note: "💡 Time complexity: O(n). Space complexity: O(1) in-place."
    },
    {
      title: "Intersection of Two Arrays",
      description: "Find common elements in two arrays.",
      answer: "Convert both arrays to sets to remove duplicates, then use set intersection (& operator). This gives unique common elements. For including duplicates, use Counter from collections module, count frequencies in both arrays, then extend result with min(count1[num], count2[num]) copies. Both methods run in O(m+n) time.",
      example: `def intersection(arr1, arr2):
    return list(set(arr1) & set(arr2))

print(intersection([1, 2, 2, 1], [2, 2]))  # [2]`,
      output: "intersection([1,2,2,1], [2,2]) → [2]",
      note: "💡 Time complexity: O(m+n). Space complexity: O(m+n)."
    },
    {
      title: "Valid Parentheses",
      description: "Check if the string has valid parentheses (balanced and correctly nested).",
      answer: "Use a stack data structure. Create a mapping of closing to opening brackets. Iterate through each character. If it's an opening bracket, push to stack. If it's a closing bracket, check if stack is empty or top doesn't match; if mismatch return False. After processing, return True if stack is empty. Time complexity O(n), space complexity O(n) for stack.",
      example: `def valid_parentheses(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for char in s:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()
    return len(stack) == 0

print(valid_parentheses("()[]{}"))  # True
print(valid_parentheses("([)]"))    # False`,
      output: "valid_parentheses('()[]{}') → True\nvalid_parentheses('([)]') → False",
      note: "💡 Time complexity: O(n). Space complexity: O(n)."
    },
    {
      title: "Container With Most Water",
      description: "Find the maximum area of water that can be contained between two vertical lines.",
      answer: "Use two pointers, one at start, one at end. Compute area = min(height[left], height[right]) * (right-left). Move the pointer pointing to the shorter line inward. Keep track of max area. This runs in O(n) time. Explanation: The area is limited by the shorter line; moving the shorter pointer towards the center may increase height.",
      example: `def max_area(height):
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_water = max(max_water, width * h)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water

print(max_area([1,8,6,2,5,4,8,3,7]))  # 49`,
      output: "max_area([1,8,6,2,5,4,8,3,7]) → 49",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "3Sum",
      description: "Find all triplets in an array that sum to zero.",
      answer: "Sort the array. For each i, use two pointers to find pairs that sum to -nums[i]. Skip duplicates to avoid duplicate triplets. This runs in O(n²).",
      example: `def three_sum(nums):
    nums.sort()
    result = []
    n = len(nums)
    for i in range(n-2):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        left, right = i+1, n-1
        target = -nums[i]
        while left < right:
            s = nums[left] + nums[right]
            if s == target:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left-1]:
                    left += 1
                while left < right and nums[right] == nums[right+1]:
                    right -= 1
            elif s < target:
                left += 1
            else:
                right -= 1
    return result

print(three_sum([-1,0,1,2,-1,-4]))  # [[-1,-1,2],[-1,0,1]]`,
      output: "three_sum([-1,0,1,2,-1,-4]) → [[-1,-1,2],[-1,0,1]]",
      note: "💡 Time complexity: O(n²)."
    },
    {
      title: "Longest Substring Without Repeating Characters",
      description: "Find the length of the longest substring without repeating characters.",
      answer: "Use sliding window with two pointers. Maintain a set of characters in current window. Expand right pointer; if character already in set, move left pointer until duplicate removed. Track max length. O(n) time.",
      example: `def length_of_longest_substring(s):
    char_set = set()
    left = 0
    max_len = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

print(length_of_longest_substring("abcabcbb"))  # 3`,
      output: "length_of_longest_substring('abcabcbb') → 3",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Group Anagrams",
      description: "Group anagrams together from a list of strings.",
      answer: "Use a dictionary where key is the sorted string (or character count tuple). Iterate through each string, compute its key, and append to list in dict. Finally return list of values.",
      example: `from collections import defaultdict

def group_anagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    return list(groups.values())

print(group_anagrams(["eat","tea","tan","ate","nat","bat"]))  # [['eat','tea','ate'],['tan','nat'],['bat']]`,
      output: "group_anagrams(['eat','tea','tan','ate','nat','bat']) → [['eat','tea','ate'],['tan','nat'],['bat']]",
      note: "💡 Time complexity: O(n * k log k) where k is max string length."
    },
    {
      title: "Product of Array Except Self",
      description: "Return an array where each element is product of all other elements.",
      answer: "Compute left products and right products without division. First pass: left[i] = product of all elements before i. Second pass: right[i] = product of all elements after i. Result[i] = left[i] * right[i]. O(n) time, O(1) extra space (output array not counted).",
      example: `def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    # left pass
    left = 1
    for i in range(n):
        result[i] = left
        left *= nums[i]
    # right pass
    right = 1
    for i in range(n-1, -1, -1):
        result[i] *= right
        right *= nums[i]
    return result

print(product_except_self([1,2,3,4]))  # [24,12,8,6]`,
      output: "product_except_self([1,2,3,4]) → [24,12,8,6]",
      note: "💡 Time complexity: O(n). Space complexity: O(1) apart from output."
    },
    {
      title: "Find Missing Number (Unsorted)",
      description: "Find the missing number in an array of n distinct numbers from 0 to n.",
      answer: "Use XOR: XOR all indices and all numbers, result is missing number. Also works with sum formula (n*(n+1)//2 - sum). Both O(n) time, O(1) space.",
      example: `def missing_number(nums):
    n = len(nums)
    xor_sum = 0
    for i in range(n+1):
        xor_sum ^= i
    for num in nums:
        xor_sum ^= num
    return xor_sum

print(missing_number([3,0,1]))  # 2`,
      output: "missing_number([3,0,1]) → 2",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Maximum Subarray (Kadane's Algorithm)",
      description: "Find the contiguous subarray with the largest sum.",
      answer: "Kadane's algorithm: keep current sum and best sum. For each element, update current sum = max(num, current_sum+num). Update best = max(best, current). O(n) time.",
      example: `def max_subarray(nums):
    best = current = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)
        best = max(best, current)
    return best

print(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))  # 6`,
      output: "max_subarray([-2,1,-3,4,-1,2,1,-5,4]) → 6",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Climbing Stairs",
      description: "Count ways to reach the top of a staircase taking 1 or 2 steps at a time.",
      answer: "This is Fibonacci-like. dp[i] = dp[i-1] + dp[i-2]. Use iterative with two variables to save space. O(n) time, O(1) space.",
      example: `def climb_stairs(n):
    if n <= 2:
        return n
    a, b = 1, 2
    for _ in range(3, n+1):
        a, b = b, a + b
    return b

print(climb_stairs(5))  # 8`,
      output: "climb_stairs(5) → 8",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "House Robber",
      description: "Maximum sum of non-adjacent elements in an array.",
      answer: "DP: rob[i] = max(rob[i-1], rob[i-2] + nums[i]). Use two variables to store previous two results. O(n) time, O(1) space.",
      example: `def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    prev2, prev1 = nums[0], max(nums[0], nums[1])
    for i in range(2, len(nums)):
        current = max(prev1, prev2 + nums[i])
        prev2, prev1 = prev1, current
    return prev1

print(rob([1,2,3,1]))  # 4`,
      output: "rob([1,2,3,1]) → 4",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Number of Islands",
      description: "Count number of islands (connected 1's) in a 2D grid.",
      answer: "DFS/BFS: iterate grid, when find '1', increment count and perform DFS to mark entire island as visited (set to '0'). O(m*n) time.",
      example: `def num_islands(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)
    count = 0
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == '1':
                count += 1
                dfs(i, j)
    return count

grid = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]
print(num_islands(grid))  # 3`,
      output: "num_islands(...) → 3",
      note: "💡 Time complexity: O(m*n)."
    },
    {
      title: "Course Schedule (Cycle Detection)",
      description: "Determine if you can finish all courses given prerequisites.",
      answer: "Topological sort or detect cycle in directed graph. Use DFS with three states (0=unvisited,1=visiting,2=visited) or Kahn's algorithm with indegrees. O(V+E).",
      example: `def can_finish(numCourses, prerequisites):
    graph = [[] for _ in range(numCourses)]
    for a,b in prerequisites:
        graph[a].append(b)
    state = [0]*numCourses  # 0 unvisited, 1 visiting, 2 visited
    def dfs(node):
        if state[node] == 1:
            return False
        if state[node] == 2:
            return True
        state[node] = 1
        for nei in graph[node]:
            if not dfs(nei):
                return False
        state[node] = 2
        return True
    for i in range(numCourses):
        if not dfs(i):
            return False
    return True

print(can_finish(2, [[1,0]]))  # True
print(can_finish(2, [[1,0],[0,1]]))  # False`,
      output: "can_finish(2, [[1,0]]) → True\ncan_finish(2, [[1,0],[0,1]]) → False",
      note: "💡 Time complexity: O(V+E)."
    },
    {
      title: "Lowest Common Ancestor in BST",
      description: "Find the lowest common ancestor (LCA) of two nodes in a binary search tree.",
      answer: "Since it's BST, compare node values. If both p and q are less than node, go left; if both greater, go right; else node is LCA. O(log n) for balanced, worst O(n).",
      example: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowest_common_ancestor(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root
    return None

# Example tree: [6,2,8,0,4,7,9,null,null,3,5]
# ...`,
      output: "LCA of 2 and 8 → 6",
      note: "💡 Time complexity: O(log n) average."
    },
    {
      title: "Coin Change",
      description: "Minimum number of coins to make a given amount.",
      answer: "Dynamic programming: dp[i] = min coins to make amount i. Initialize dp[0]=0, others infinity. For each coin, update dp[i] = min(dp[i], dp[i-coin]+1). O(amount * number of coins).",
      example: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount+1)
    dp[0] = 0
    for coin in coins:
        for i in range(coin, amount+1):
            dp[i] = min(dp[i], dp[i-coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

print(coin_change([1,2,5], 11))  # 3 (5+5+1)`,
      output: "coin_change([1,2,5], 11) → 3",
      note: "💡 Time complexity: O(amount * len(coins))."
    },
    {
      title: "Find All Subsets (Backtracking)",
      description: "Return all subsets of a given set of integers.",
      answer: "Use backtracking: either include or exclude each element. Iterative approach also works.",
      example: `def subsets(nums):
    res = []
    def backtrack(start, current):
        res.append(current[:])
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i+1, current)
            current.pop()
    backtrack(0, [])
    return res

print(subsets([1,2,3]))`,
      output: "subsets([1,2,3]) → [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]",
      note: "💡 Time complexity: O(2^n)."
    },
    {
      title: "Rotate Image",
      description: "Rotate an N x N matrix 90 degrees clockwise in-place.",
      answer: "Transpose then reverse each row. Or reverse then swap symmetric.",
      example: `def rotate(matrix):
    n = len(matrix)
    # transpose
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # reverse each row
    for i in range(n):
        matrix[i].reverse()

m = [[1,2,3],[4,5,6],[7,8,9]]
rotate(m)
print(m)  # [[7,4,1],[8,5,2],[9,6,3]]`,
      output: "rotate([[1,2,3],[4,5,6],[7,8,9]]) → [[7,4,1],[8,5,2],[9,6,3]]",
      note: "💡 Time complexity: O(n²)."
    },
    {
      title: "Longest Increasing Subsequence",
      description: "Find length of longest increasing subsequence.",
      answer: "DP O(n²) or patience sorting O(n log n) using binary search. Patience: maintain piles where top elements are increasing.",
      example: `def length_of_lis(nums):
    piles = []
    for num in nums:
        # binary search leftmost pile with top >= num
        left, right = 0, len(piles)
        while left < right:
            mid = (left + right) // 2
            if piles[mid] < num:
                left = mid + 1
            else:
                right = mid
        if left == len(piles):
            piles.append(num)
        else:
            piles[left] = num
    return len(piles)

print(length_of_lis([10,9,2,5,3,7,101,18]))  # 4`,
      output: "length_of_lis([10,9,2,5,3,7,101,18]) → 4",
      note: "💡 Time complexity: O(n log n)."
    },
    {
      title: "Word Break",
      description: "Check if a string can be segmented into dictionary words.",
      answer: "DP: dp[i] = True if s[0:i] can be segmented. For each i, check if s[j:i] in wordDict and dp[j] true. O(n²) time.",
      example: `def word_break(s, wordDict):
    n = len(s)
    dp = [False] * (n+1)
    dp[0] = True
    word_set = set(wordDict)
    for i in range(1, n+1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    return dp[n]

print(word_break("leetcode", ["leet","code"]))  # True`,
      output: "word_break('leetcode', ['leet','code']) → True",
      note: "💡 Time complexity: O(n²)."
    },
    {
      title: "Merge Intervals",
      description: "Merge overlapping intervals.",
      answer: "Sort by start, then iterate: if current start <= last end, merge; else add new interval. O(n log n).",
      example: `def merge_intervals(intervals):
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged

print(merge_intervals([[1,3],[2,6],[8,10],[15,18]]))  # [[1,6],[8,10],[15,18]]`,
      output: "merge_intervals([[1,3],[2,6],[8,10],[15,18]]) → [[1,6],[8,10],[15,18]]",
      note: "💡 Time complexity: O(n log n)."
    },
    {
      title: "Spiral Matrix",
      description: "Return all elements of a matrix in spiral order.",
      answer: "Use boundaries: top, bottom, left, right. Traverse in order, shrink boundaries.",
      example: `def spiral_order(matrix):
    if not matrix:
        return []
    res = []
    top, bottom = 0, len(matrix)-1
    left, right = 0, len(matrix[0])-1
    while top <= bottom and left <= right:
        # left to right
        for i in range(left, right+1):
            res.append(matrix[top][i])
        top += 1
        # top to bottom
        for i in range(top, bottom+1):
            res.append(matrix[i][right])
        right -= 1
        if top <= bottom:
            # right to left
            for i in range(right, left-1, -1):
                res.append(matrix[bottom][i])
            bottom -= 1
        if left <= right:
            # bottom to top
            for i in range(bottom, top-1, -1):
                res.append(matrix[i][left])
            left += 1
    return res

matrix = [[1,2,3],[4,5,6],[7,8,9]]
print(spiral_order(matrix))  # [1,2,3,6,9,8,7,4,5]`,
      output: "spiral_order(...) → [1,2,3,6,9,8,7,4,5]",
      note: "💡 Time complexity: O(m*n)."
    },
    {
      title: "Evaluate Reverse Polish Notation",
      description: "Evaluate value of arithmetic expression in Reverse Polish Notation.",
      answer: "Use stack. For each token, if number push to stack; if operator pop two, compute, push result. O(n) time.",
      example: `def eval_rpn(tokens):
    stack = []
    ops = {'+': lambda a,b: a+b,
           '-': lambda a,b: a-b,
           '*': lambda a,b: a*b,
           '/': lambda a,b: int(a/b)}  # truncate toward zero
    for token in tokens:
        if token in ops:
            b = stack.pop()
            a = stack.pop()
            stack.append(ops[token](a, b))
        else:
            stack.append(int(token))
    return stack[0]

print(eval_rpn(["2","1","+","3","*"]))  # 9`,
      output: "eval_rpn(['2','1','+','3','*']) → 9",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Sort Colors (Dutch National Flag)",
      description: "Sort an array of 0, 1, 2 in place.",
      answer: "Use three pointers: low, mid, high. While mid <= high, if nums[mid]==0 swap with low and increment low, mid; if ==1 increment mid; if ==2 swap with high and decrement high. O(n).",
      example: `def sort_colors(nums):
    low, mid, high = 0, 0, len(nums)-1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
    return nums

print(sort_colors([2,0,2,1,1,0]))  # [0,0,1,1,2,2]`,
      output: "sort_colors([2,0,2,1,1,0]) → [0,0,1,1,2,2]",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Design LRU Cache",
      description: "Implement an LRU (Least Recently Used) cache with get and put in O(1).",
      answer: "Use OrderedDict or combination of dict and doubly linked list. Python's collections.OrderedDict can be used with move_to_end. Put: if key exists, update value and move to end; else if at capacity, pop first item; then add new.",
      example: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.cap = capacity
    
    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)

cache = LRUCache(2)
cache.put(1,1)
cache.put(2,2)
print(cache.get(1))  # 1
cache.put(3,3)
print(cache.get(2))  # -1`,
      output: "1\n-1",
      note: "💡 Time complexity: O(1) per operation."
    },
    {
      title: "Find Median from Data Stream",
      description: "Implement a class that supports adding numbers and returning median.",
      answer: "Use two heaps: max heap for lower half (store negatives), min heap for upper half. Maintain size difference <=1. Median: if sizes unequal, from larger heap; else average of tops.",
      example: `import heapq

class MedianFinder:
    def __init__(self):
        self.low = []  # max heap via negatives
        self.high = [] # min heap
    
    def add_num(self, num):
        heapq.heappush(self.low, -num)
        # move top of low to high
        heapq.heappush(self.high, -heapq.heappop(self.low))
        if len(self.low) < len(self.high):
            heapq.heappush(self.low, -heapq.heappop(self.high))
    
    def find_median(self):
        if len(self.low) > len(self.high):
            return -self.low[0]
        else:
            return ( -self.low[0] + self.high[0] ) / 2

mf = MedianFinder()
mf.add_num(1)
mf.add_num(2)
print(mf.find_median())  # 1.5
mf.add_num(3)
print(mf.find_median())  # 2`,
      output: "1.5\n2",
      note: "💡 Time complexity: add O(log n), find O(1)."
    },
    {
      title: "Serialize and Deserialize Binary Tree",
      description: "Convert a binary tree to a string and back.",
      answer: "Use BFS or DFS (preorder). Use null markers for missing children. Deserialize using queue for BFS or recursion.",
      example: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def serialize(root):
    if not root:
        return "null"
    return str(root.val) + "," + serialize(root.left) + "," + serialize(root.right)

def deserialize(data):
    nodes = data.split(',')
    def build():
        val = nodes.pop(0)
        if val == 'null':
            return None
        node = TreeNode(int(val))
        node.left = build()
        node.right = build()
        return node
    return build()

# Example:
root = TreeNode(1, TreeNode(2), TreeNode(3, TreeNode(4), TreeNode(5)))
s = serialize(root)
print(s)
print(deserialize(s).val)`,
      output: "1,2,null,null,3,4,null,null,5,null,null\n1",
      note: "💡 Time complexity: O(n)."
    },
    {
      title: "Word Ladder",
      description: "Find shortest transformation sequence from beginWord to endWord, changing one letter at a time.",
      answer: "BFS. Generate all possible neighbors (replace each character with a..z). Use set for wordList. O(M² * n) where M word length, n words.",
      example: `from collections import deque
def ladder_length(beginWord, endWord, wordList):
    wordSet = set(wordList)
    if endWord not in wordSet:
        return 0
    q = deque([(beginWord, 1)])
    while q:
        word, steps = q.popleft()
        for i in range(len(word)):
            for ch in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + ch + word[i+1:]
                if new_word == endWord:
                    return steps + 1
                if new_word in wordSet:
                    wordSet.remove(new_word)
                    q.append((new_word, steps+1))
    return 0

print(ladder_length("hit","cog",["hot","dot","dog","lot","log","cog"]))  # 5`,
      output: "ladder_length(...) → 5",
      note: "💡 Time complexity: O(M² * n)."
    },
    {
      title: "Implement Trie (Prefix Tree)",
      description: "Implement a trie with insert, search, and startsWith methods.",
      answer: "Each node has dictionary of children and boolean end. O(n) per operation.",
      example: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True
    
    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end
    
    def starts_with(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True

trie = Trie()
trie.insert("apple")
print(trie.search("apple"))  # True
print(trie.search("app"))    # False
print(trie.starts_with("app")) # True`,
      output: "True\nFalse\nTrue",
      note: "💡 Time complexity: O(L) where L is word length."
    },
    {
      title: "Design Twitter",
      description: "Design a simplified Twitter system with postTweet, getNewsFeed, follow, unfollow.",
      answer: "Use dictionary for user tweets and follower relationships. getNewsFeed: merge tweets from user and followees using heap/merge sort. O(n log n).",
      example: `class Twitter:
    def __init__(self):
        self.tweets = {}  # user -> list of (timestamp, tweetId)
        self.following = {}  # user -> set of followees
        self.time = 0
    
    def postTweet(self, userId, tweetId):
        if userId not in self.tweets:
            self.tweets[userId] = []
        self.tweets[userId].append((self.time, tweetId))
        self.time += 1
    
    def getNewsFeed(self, userId):
        # get tweets from user and followees
        all_tweets = []
        if userId in self.tweets:
            all_tweets.extend(self.tweets[userId][-10:])
        if userId in self.following:
            for followee in self.following[userId]:
                if followee in self.tweets:
                    all_tweets.extend(self.tweets[followee][-10:])
        all_tweets.sort(key=lambda x: -x[0])
        return [tid for _, tid in all_tweets[:10]]
    
    def follow(self, followerId, followeeId):
        if followerId == followeeId:
            return
        if followerId not in self.following:
            self.following[followerId] = set()
        self.following[followerId].add(followeeId)
    
    def unfollow(self, followerId, followeeId):
        if followerId in self.following and followeeId in self.following[followerId]:
            self.following[followerId].remove(followeeId)

twitter = Twitter()
twitter.postTweet(1,5)
print(twitter.getNewsFeed(1))  # [5]`,
      output: "[5]",
      note: "💡 Time complexity: O(n log n) for feed."
    },
    {
      title: "LFU Cache",
      description: "Design a LFU (Least Frequently Used) cache with O(1) operations.",
      answer: "Use dictionary of frequency to doubly linked list, plus dictionary of key to node. Maintain min_freq. Complex but can be implemented.",
      example: `# Simplified: use OrderedDict and frequency counter, O(log n) but acceptable.
from collections import defaultdict, OrderedDict
class LFUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.key_to_val = {}
        self.key_to_freq = {}
        self.freq_to_keys = defaultdict(OrderedDict)
        self.min_freq = 0
    
    def _update_freq(self, key):
        freq = self.key_to_freq[key]
        val = self.key_to_val[key]
        del self.freq_to_keys[freq][key]
        if not self.freq_to_keys[freq]:
            del self.freq_to_keys[freq]
            if self.min_freq == freq:
                self.min_freq += 1
        new_freq = freq + 1
        self.key_to_freq[key] = new_freq
        self.freq_to_keys[new_freq][key] = True
        self.key_to_val[key] = val
    
    def get(self, key):
        if key not in self.key_to_val:
            return -1
        self._update_freq(key)
        return self.key_to_val[key]
    
    def put(self, key, value):
        if self.cap == 0:
            return
        if key in self.key_to_val:
            self.key_to_val[key] = value
            self._update_freq(key)
            return
        if len(self.key_to_val) >= self.cap:
            evict_key, _ = self.freq_to_keys[self.min_freq].popitem(last=False)
            del self.key_to_val[evict_key]
            del self.key_to_freq[evict_key]
        self.key_to_val[key] = value
        self.key_to_freq[key] = 1
        self.freq_to_keys[1][key] = True
        self.min_freq = 1

cache = LFUCache(2)
cache.put(1,1)
cache.put(2,2)
print(cache.get(1))  # 1
cache.put(3,3)
print(cache.get(2))  # -1`,
      output: "1\n-1",
      note: "💡 Time complexity: O(1) average."
    },
    {
      title: "Alien Dictionary",
      description: "Given sorted words in alien language, determine the order of characters.",
      answer: "Compare adjacent words to build graph, then topological sort. Detect cycle. O(total chars + alphabet).",
      example: `from collections import defaultdict, deque
def alien_order(words):
    graph = defaultdict(set)
    indegree = {ch:0 for word in words for ch in word}
    for i in range(len(words)-1):
        w1, w2 = words[i], words[i+1]
        min_len = min(len(w1), len(w2))
        if len(w1) > len(w2) and w1[:min_len] == w2[:min_len]:
            return ""
        for c1, c2 in zip(w1, w2):
            if c1 != c2:
                if c2 not in graph[c1]:
                    graph[c1].add(c2)
                    indegree[c2] += 1
                break
    q = deque([ch for ch in indegree if indegree[ch]==0])
    result = []
    while q:
        ch = q.popleft()
        result.append(ch)
        for nei in graph[ch]:
            indegree[nei] -= 1
            if indegree[nei]==0:
                q.append(nei)
    if len(result) != len(indegree):
        return ""
    return ''.join(result)

print(alien_order(["wrt","wrf","er","ett","rftt"]))  # "wertf"`,
      output: "'wertf'",
      note: "💡 Time complexity: O(C) where C total characters."
    },
    {
      title: "Reconstruct Itinerary",
      description: "Given list of airline tickets, reconstruct itinerary in lexical order.",
      answer: "Use Hierholzer's algorithm for Eulerian path. Build graph with multiset (heap). DFS and post-order append.",
      example: `from collections import defaultdict
import heapq

def find_itinerary(tickets):
    graph = defaultdict(list)
    for fr, to in tickets:
        heapq.heappush(graph[fr], to)
    result = []
    def dfs(airport):
        while graph[airport]:
            dfs(heapq.heappop(graph[airport]))
        result.append(airport)
    dfs("JFK")
    return result[::-1]

tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
print(find_itinerary(tickets))  # ['JFK','MUC','LHR','SFO','SJC']`,
      output: "['JFK','MUC','LHR','SFO','SJC']",
      note: "💡 Time complexity: O(E log E) due to heap."
    },
    {
      title: "Longest Palindromic Substring",
      description: "Find the longest palindromic substring in a given string.",
      answer: "Expand around center: for each center (2n-1 possibilities), expand outward. O(n²) time, O(1) space.",
      example: `def longest_palindrome(s):
    if not s:
        return ""
    start, end = 0, 0
    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return l+1, r-1
    for i in range(len(s)):
        l1, r1 = expand(i, i)
        l2, r2 = expand(i, i+1)
        if r1 - l1 > end - start:
            start, end = l1, r1
        if r2 - l2 > end - start:
            start, end = l2, r2
    return s[start:end+1]

print(longest_palindrome("babad"))  # "bab" or "aba"`,
      output: "'bab'",
      note: "💡 Time complexity: O(n²)."
    },
    {
      title: "Word Search II",
      description: "Given a board and list of words, find all words that exist in the board.",
      answer: "Use Trie for dictionary, then DFS from each cell, pruning when prefix not in trie. O(M*N*4^L) but early exit.",
      example: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None
def find_words(board, words):
    root = TrieNode()
    for w in words:
        node = root
        for ch in w:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.word = w
    rows, cols = len(board), len(board[0])
    result = []
    def dfs(r, c, node):
        if board[r][c] not in node.children:
            return
        char = board[r][c]
        node = node.children[char]
        if node.word:
            result.append(node.word)
            node.word = None   # avoid duplicates
        board[r][c] = '#'
        for dr, dc in [(0,1),(1,0),(0,-1),(-1,0)]:
            nr, nc = r+dr, c+dc
            if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] != '#':
                dfs(nr, nc, node)
        board[r][c] = char
    for i in range(rows):
        for j in range(cols):
            dfs(i,j,root)
    return result

board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
words = ["oath","pea","eat","rain"]
print(find_words(board, words))  # ['oath','eat']`,
      output: "['oath','eat']",
      note: "💡 Time complexity: O(M*N*L)."
    }
  ]
};

export default problems;
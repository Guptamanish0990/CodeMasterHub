// This is pure data export - NO React imports, NO "use client"
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
      description: "Move all zeros to the end of the array while preserving relative order.",
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
    }
  ]
};

export default problems;
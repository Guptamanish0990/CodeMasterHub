
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
    },
    {
      title: "Power of Two",
      description: "Check if a given number is a power of two.",
      answer: "A number is a power of two if it is greater than 0 and has exactly one bit set in its binary representation. Use bitwise AND: (n & (n-1)) == 0. Also handle edge case n > 0. Alternative: use logarithms or iterative division by 2.",
      example: `def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

def is_power_of_two_loop(n):
    if n <= 0:
        return False
    while n % 2 == 0:
        n //= 2
    return n == 1

print(is_power_of_two(16))  # True
print(is_power_of_two(18))  # False
print(is_power_of_two(1))   # True`,
      output: "is_power_of_two(16) → True\nis_power_of_two(18) → False\nis_power_of_two(1) → True",
      note: "💡 Time complexity: O(1) for bitwise, O(log n) for loop. Space complexity: O(1)."
    },
    {
      title: "Remove Element from Array",
      description: "Remove all occurrences of a given value from an array in-place.",
      answer: "Use two-pointer technique. One pointer (slow) tracks position for non-target elements. Iterate with fast pointer, when element is not target, copy to slow position and increment slow. Return slow which is the new length. This modifies array in-place without extra space.",
      example: `def remove_element(nums, val):
    slow = 0
    for fast in range(len(nums)):
        if nums[fast] != val:
            nums[slow] = nums[fast]
            slow += 1
    return slow

nums = [3, 2, 2, 3]
new_length = remove_element(nums, 3)
print(nums[:new_length])  # [2, 2]`,
      output: "remove_element([3,2,2,3], 3) → [2,2]",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Plus One",
      description: "Given an array of digits representing a non-negative integer, increment the integer by one.",
      answer: "Start from the last digit. If digit is less than 9, increment it and return array. If digit is 9, set it to 0 and continue to next digit. If all digits were 9, insert 1 at beginning. This handles carry properly.",
      example: `def plus_one(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    return [1] + digits

print(plus_one([1, 2, 3]))  # [1, 2, 4]
print(plus_one([9, 9, 9]))  # [1, 0, 0, 0]`,
      output: "plus_one([1,2,3]) → [1,2,4]\nplus_one([9,9,9]) → [1,0,0,0]",
      note: "💡 Time complexity: O(n). Space complexity: O(1) or O(n) for carry overflow."
    },
    {
      title: "Single Number",
      description: "Find the element that appears only once in an array where every other element appears twice.",
      answer: "Use XOR operation. XOR of a number with itself is 0, and XOR with 0 is the number itself. XOR all elements together; pairs cancel out, leaving the single number. This runs in O(n) time with O(1) space without using extra memory.",
      example: `def single_number(nums):
    result = 0
    for num in nums:
        result ^= num
    return result

print(single_number([2, 2, 1]))        # 1
print(single_number([4, 1, 2, 1, 2])) # 4`,
      output: "single_number([2,2,1]) → 1\nsingle_number([4,1,2,1,2]) → 4",
      note: "💡 Time complexity: O(n). Space complexity: O(1). XOR property: a^a=0, a^0=a."
    },
    {
      title: "Majority Element",
      description: "Find the element that appears more than ⌊n/2⌋ times in an array.",
      answer: "Use Boyer-Moore Voting Algorithm. Maintain candidate and count. Iterate through array: if count is 0, set candidate to current element. If current equals candidate, increment count; else decrement count. The candidate at end is majority element. Works because majority element appears more than n/2 times.",
      example: `def majority_element(nums):
    candidate = None
    count = 0
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    return candidate

print(majority_element([3, 2, 3]))        # 3
print(majority_element([2, 2, 1, 1, 2])) # 2`,
      output: "majority_element([3,2,3]) → 3\nmajority_element([2,2,1,1,2]) → 2",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Contains Duplicate",
      description: "Check if any value appears at least twice in the array.",
      answer: "Use a set to track seen elements. Iterate through array, if element already in set, return True. Otherwise add to set. If loop completes, return False. Alternative: sort and compare adjacent elements, but set approach is O(n) time.",
      example: `def contains_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

print(contains_duplicate([1, 2, 3, 1]))  # True
print(contains_duplicate([1, 2, 3, 4]))  # False`,
      output: "contains_duplicate([1,2,3,1]) → True\ncontains_duplicate([1,2,3,4]) → False",
      note: "💡 Time complexity: O(n). Space complexity: O(n)."
    },
    {
      title: "Valid Anagram",
      description: "Check if two strings are anagrams (contain the same characters with same frequencies).",
      answer: "Count character frequencies from first string, subtract from second string. If all counts become zero, strings are anagrams. Use Counter from collections or dictionary manually. Alternative: sort both strings and compare (O(n log n) time).",
      example: `from collections import Counter

def is_anagram(s, t):
    return Counter(s) == Counter(t)

def is_anagram_manual(s, t):
    if len(s) != len(t):
        return False
    count = {}
    for char in s:
        count[char] = count.get(char, 0) + 1
    for char in t:
        if char not in count or count[char] == 0:
            return False
        count[char] -= 1
    return True

print(is_anagram("anagram", "nagaram"))  # True
print(is_anagram("rat", "car"))          # False`,
      output: "is_anagram('anagram', 'nagaram') → True\nis_anagram('rat', 'car') → False",
      note: "💡 Time complexity: O(n). Space complexity: O(k) where k is alphabet size."
    },
    {
      title: "Roman to Integer",
      description: "Convert a Roman numeral string to an integer.",
      answer: "Create a mapping of Roman symbols to values. Iterate through string, if current value is less than next value, subtract current; otherwise add current. This handles cases like IV (4) where smaller precedes larger. Always add last character.",
      example: `def roman_to_int(s):
    roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    result = 0
    for i in range(len(s)):
        if i + 1 < len(s) and roman[s[i]] < roman[s[i + 1]]:
            result -= roman[s[i]]
        else:
            result += roman[s[i]]
    return result

print(roman_to_int("III"))    # 3
print(roman_to_int("IV"))     # 4
print(roman_to_int("MCMXCIV")) # 1994`,
      output: "roman_to_int('III') → 3\nroman_to_int('IV') → 4\nroman_to_int('MCMXCIV') → 1994",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Longest Common Prefix",
      description: "Find the longest common prefix string amongst an array of strings.",
      answer: "Start with first string as prefix. Iterate through other strings, while current string doesn't start with prefix, shorten prefix by removing last character. If prefix becomes empty, return empty string. This works efficiently without comparing all characters.",
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

print(longest_common_prefix(["flower", "flow", "flight"]))  # "fl"
print(longest_common_prefix(["dog", "racecar", "car"]))     # ""`,
      output: "longest_common_prefix(['flower','flow','flight']) → 'fl'\nlongest_common_prefix(['dog','racecar','car']) → ''",
      note: "💡 Time complexity: O(S) where S is sum of all characters. Space complexity: O(1)."
    },
    {
      title: "Climbing Stairs",
      description: "Count the number of ways to climb n stairs taking 1 or 2 steps at a time.",
      answer: "This is a Fibonacci-like problem. Ways to reach step n = ways(n-1) + ways(n-2). Base cases: 1 step = 1 way, 2 steps = 2 ways. Use dynamic programming with O(1) space by keeping only last two values. Avoid recursion to prevent stack overflow.",
      example: `def climb_stairs(n):
    if n <= 2:
        return n
    first, second = 1, 2
    for i in range(3, n + 1):
        third = first + second
        first, second = second, third
    return second

print(climb_stairs(2))  # 2
print(climb_stairs(3))  # 3
print(climb_stairs(4))  # 5`,
      output: "climb_stairs(2) → 2\nclimb_stairs(3) → 3\nclimb_stairs(4) → 5",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Best Time to Buy and Sell Stock",
      description: "Find maximum profit from buying and selling a stock once (buy before sell).",
      answer: "Track minimum price seen so far. For each day, calculate profit if sold today (current price - min price). Update maximum profit. This single pass solution runs in O(n) time without extra space. Handle edge case of empty array.",
      example: `def max_profit(prices):
    if not prices:
        return 0
    min_price = prices[0]
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit

print(max_profit([7, 1, 5, 3, 6, 4]))  # 5
print(max_profit([7, 6, 4, 3, 1]))     # 0`,
      output: "max_profit([7,1,5,3,6,4]) → 5\nmax_profit([7,6,4,3,1]) → 0",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Maximum Subarray (Kadane's Algorithm)",
      description: "Find the contiguous subarray with the largest sum.",
      answer: "Use Kadane's algorithm. Track current sum and maximum sum. For each element, either start new subarray at current element or extend existing subarray. Reset current sum if it becomes negative. Maximum sum is the answer. Handles all negative numbers correctly.",
      example: `def max_subarray(nums):
    current_sum = max_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6
print(max_subarray([1]))   # 1
print(max_subarray([-1]))  # -1`,
      output: "max_subarray([-2,1,-3,4,-1,2,1,-5,4]) → 6\nmax_subarray([1]) → 1\nmax_subarray([-1]) → -1",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "House Robber",
      description: "Find maximum sum of non-adjacent elements in an array.",
      answer: "Use dynamic programming. At each house, decide to rob it (add current + value from two houses before) or skip it (take value from previous house). Keep two variables: prev1 (rob current), prev2 (skip current). Update iteratively in O(n) time with O(1) space.",
      example: `def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    prev2, prev1 = nums[0], max(nums[0], nums[1])
    for i in range(2, len(nums)):
        curr = max(prev1, prev2 + nums[i])
        prev2, prev1 = prev1, curr
    return prev1

print(rob([1, 2, 3, 1]))     # 4
print(rob([2, 7, 9, 3, 1]))  # 12`,
      output: "rob([1,2,3,1]) → 4\nrob([2,7,9,3,1]) → 12",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Linked List Cycle Detection",
      description: "Detect if a linked list has a cycle using Floyd's cycle detection algorithm.",
      answer: "Use two pointers: slow moves one step, fast moves two steps. If there is a cycle, slow and fast will meet. If fast reaches None (end of list), no cycle. This runs in O(n) time and O(1) space. Works for both singly and doubly linked lists.",
      example: `class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# Create cycle: 1 -> 2 -> 3 -> 4 -> 2 (cycle)
node1, node2, node3, node4 = ListNode(1), ListNode(2), ListNode(3), ListNode(4)
node1.next, node2.next, node3.next, node4.next = node2, node3, node4, node2
print(has_cycle(node1))  # True
print(has_cycle(ListNode(1)))  # False`,
      output: "has_cycle() with cycle → True\nhas_cycle() without cycle → False",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Reverse Linked List",
      description: "Reverse a singly linked list iteratively or recursively.",
      answer: "Iterative: use three pointers (prev, current, next). Traverse list, reverse each node's next pointer. Return new head (prev). Recursive: recursively reverse rest, then adjust pointers. Both run in O(n) time. Iterative uses O(1) space, recursive uses O(n) call stack.",
      example: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list_iterative(head):
    prev = None
    current = head
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    return prev

def reverse_list_recursive(head):
    if not head or not head.next:
        return head
    new_head = reverse_list_recursive(head.next)
    head.next.next = head
    head.next = None
    return new_head

# Create list: 1 -> 2 -> 3 -> 4
node4 = ListNode(4)
node3 = ListNode(3, node4)
node2 = ListNode(2, node3)
node1 = ListNode(1, node2)

reversed_head = reverse_list_iterative(node1)
print(reversed_head.val)  # 4`,
      output: "reverse_list([1,2,3,4]) → [4,3,2,1]",
      note: "💡 Time complexity: O(n). Space complexity: O(1) iterative, O(n) recursive."
    },
    {
      title: "Middle of Linked List",
      description: "Find the middle node of a linked list.",
      answer: "Use two pointers (slow and fast). Slow moves one step, fast moves two steps. When fast reaches end, slow is at middle. For even length, return second middle. This works in O(n) time with O(1) space. No need to know list length beforehand.",
      example: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

# Create list: 1 -> 2 -> 3 -> 4 -> 5
node5 = ListNode(5)
node4 = ListNode(4, node5)
node3 = ListNode(3, node4)
node2 = ListNode(2, node3)
node1 = ListNode(1, node2)

middle = middle_node(node1)
print(middle.val)  # 3`,
      output: "middle_node([1,2,3,4,5]) → node with value 3\nmiddle_node([1,2,3,4,5,6]) → node with value 4",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Remove Nth Node from End of List",
      description: "Remove the Nth node from the end of a linked list in one pass.",
      answer: "Use two pointers. Move fast pointer n steps ahead. Then move both fast and slow until fast reaches end. Slow is now at node before target. Remove target node. Handle edge case where first node is to be removed. Works in O(n) time with O(1) space.",
      example: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def remove_nth_from_end(head, n):
    dummy = ListNode(0, head)
    fast = slow = dummy
    for _ in range(n + 1):
        fast = fast.next
    while fast:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return dummy.next

# Create list: 1 -> 2 -> 3 -> 4 -> 5
node5 = ListNode(5)
node4 = ListNode(4, node5)
node3 = ListNode(3, node4)
node2 = ListNode(2, node3)
node1 = ListNode(1, node2)

new_head = remove_nth_from_end(node1, 2)
print(new_head.next.next.val)  # 4 (removed 3)`,
      output: "remove_nth_from_end([1,2,3,4,5], 2) → [1,2,4,5]",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Merge Two Sorted Linked Lists",
      description: "Merge two sorted linked lists into one sorted linked list.",
      answer: "Create dummy head. Use pointers to traverse both lists, comparing values and attaching smaller node to result. When one list exhausted, attach the remaining. Return dummy.next. This is similar to merging arrays but with pointer manipulation. Runs in O(m+n) time.",
      example: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_two_lists(list1, list2):
    dummy = ListNode(0)
    current = dummy
    while list1 and list2:
        if list1.val <= list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next
    current.next = list1 or list2
    return dummy.next

# list1: 1 -> 2 -> 4, list2: 1 -> 3 -> 4
node1_4 = ListNode(4)
node1_2 = ListNode(2, node1_4)
node1_1 = ListNode(1, node1_2)

node2_4 = ListNode(4)
node2_3 = ListNode(3, node2_4)
node2_1 = ListNode(1, node2_3)

merged = merge_two_lists(node1_1, node2_1)
print(merged.next.next.next.val)  # 3`,
      output: "merge_two_lists([1,2,4], [1,3,4]) → [1,1,2,3,4,4]",
      note: "💡 Time complexity: O(m+n). Space complexity: O(1)."
    },
    {
      title: "Palindrome Linked List",
      description: "Check if a singly linked list is a palindrome.",
      answer: "Find middle using slow/fast pointers. Reverse second half. Compare first half with reversed second half. Restore list if needed. Watch for odd/even lengths. This avoids extra space for array. Runs in O(n) time with O(1) space.",
      example: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def is_palindrome(head):
    if not head:
        return True
    # Find middle
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    # Reverse second half
    prev = None
    while slow:
        next_temp = slow.next
        slow.next = prev
        prev = slow
        slow = next_temp
    # Compare
    left, right = head, prev
    while right:
        if left.val != right.val:
            return False
        left = left.next
        right = right.next
    return True

# Create palindrome: 1 -> 2 -> 2 -> 1
node4 = ListNode(1)
node3 = ListNode(2, node4)
node2 = ListNode(2, node3)
node1 = ListNode(1, node2)

print(is_palindrome(node1))  # True`,
      output: "is_palindrome([1,2,2,1]) → True\nis_palindrome([1,2]) → False",
      note: "💡 Time complexity: O(n). Space complexity: O(1)."
    },
    {
      title: "Binary Tree Inorder Traversal",
      description: "Perform inorder traversal (left-root-right) of a binary tree.",
      answer: "Recursive: traverse left, process root, traverse right. Iterative: use stack. Push all left nodes, process, then go right. Recursive is simpler but iterative avoids recursion depth issues. Both run in O(n) time. Use iterative for production code.",
      example: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_recursive(root):
    result = []
    def dfs(node):
        if not node:
            return
        dfs(node.left)
        result.append(node.val)
        dfs(node.right)
    dfs(root)
    return result

def inorder_iterative(root):
    result = []
    stack = []
    current = root
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        current = stack.pop()
        result.append(current.val)
        current = current.right
    return result

# Tree: 1 -> null -> 2 -> 3
node3 = TreeNode(3)
node2 = TreeNode(2, node3)
root = TreeNode(1, None, node2)

print(inorder_recursive(root))   # [1, 3, 2]
print(inorder_iterative(root))   # [1, 3, 2]`,
      output: "inorder_traversal([1,null,2,3]) → [1,3,2]",
      note: "💡 Time complexity: O(n). Space complexity: O(h) where h is tree height."
    },
    {
      title: "Binary Tree Preorder Traversal",
      description: "Perform preorder traversal (root-left-right) of a binary tree.",
      answer: "Recursive: process root, traverse left, traverse right. Iterative: use stack, push right first then left so left is processed first. Preorder is useful for copying trees and prefix expressions. Both methods run in O(n) time.",
      example: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def preorder_recursive(root):
    result = []
    def dfs(node):
        if not node:
            return
        result.append(node.val)
        dfs(node.left)
        dfs(node.right)
    dfs(root)
    return result

def preorder_iterative(root):
    if not root:
        return []
    result = []
    stack = [root]
    while stack:
        node = stack.pop()
        result.append(node.val)
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    return result

root = TreeNode(1, TreeNode(2), TreeNode(3))
print(preorder_recursive(root))  # [1, 2, 3]
print(preorder_iterative(root))  # [1, 2, 3]`,
      output: "preorder_traversal([1,2,3]) → [1,2,3]",
      note: "💡 Time complexity: O(n). Space complexity: O(h)."
    },
    {
      title: "Binary Tree Postorder Traversal",
      description: "Perform postorder traversal (left-right-root) of a binary tree.",
      answer: "Recursive: traverse left, traverse right, process root. Iterative: use two stacks. First stack processes nodes, second stack stores order. Or use one stack with visited tracking. Postorder useful for deleting trees and evaluating postfix expressions.",
      example: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def postorder_recursive(root):
    result = []
    def dfs(node):
        if not node:
            return
        dfs(node.left)
        dfs(node.right)
        result.append(node.val)
    dfs(root)
    return result

def postorder_iterative(root):
    if not root:
        return []
    result = []
    stack = [root]
    while stack:
        node = stack.pop()
        result.append(node.val)
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)
    return result[::-1]

root = TreeNode(1, TreeNode(2), TreeNode(3))
print(postorder_recursive(root))  # [2, 3, 1]
print(postorder_iterative(root))  # [2, 3, 1]`,
      output: "postorder_traversal([1,2,3]) → [2,3,1]",
      note: "💡 Time complexity: O(n). Space complexity: O(h)."
    },
    {
      title: "Maximum Depth of Binary Tree",
      description: "Find the maximum depth (height) of a binary tree.",
      answer: "Recursive approach: depth = 1 + max(depth(left), depth(right)). Base case: empty tree has depth 0. Iterative: BFS level order traversal counting levels. Both run in O(n) time. Recursive is simpler but iterative avoids recursion depth on skewed trees.",
      example: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def max_depth_recursive(root):
    if not root:
        return 0
    return 1 + max(max_depth_recursive(root.left), max_depth_recursive(root.right))

def max_depth_iterative(root):
    if not root:
        return 0
    from collections import deque
    queue = deque([root])
    depth = 0
    while queue:
        depth += 1
        for _ in range(len(queue)):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    return depth

root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
print(max_depth_recursive(root))  # 3
print(max_depth_iterative(root))  # 3`,
      output: "max_depth([3,9,20,null,null,15,7]) → 3",
      note: "💡 Time complexity: O(n). Space complexity: O(h) recursive, O(n) iterative."
    },
    {
      title: "Invert Binary Tree",
      description: "Invert (mirror) a binary tree by swapping left and right children.",
      answer: "Recursive: swap left and right children, then recursively invert left and right subtrees. Iterative: BFS using queue or stack to process nodes and swap children. Both run in O(n) time. This is the famous problem from Google interview.",
      example: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invert_tree_recursive(root):
    if not root:
        return None
    root.left, root.right = invert_tree_recursive(root.right), invert_tree_recursive(root.left)
    return root

def invert_tree_iterative(root):
    if not root:
        return None
    from collections import deque
    queue = deque([root])
    while queue:
        node = queue.popleft()
        node.left, node.right = node.right, node.left
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    return root

# Original: 4 -> 2,7 -> 1,3,6,9
root = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(7, TreeNode(6), TreeNode(9)))
inverted = invert_tree_recursive(root)
print(inverted.left.val)  # 7
print(inverted.right.val) # 2`,
      output: "invert_tree([4,2,7,1,3,6,9]) → [4,7,2,9,6,3,1]",
      note: "💡 Time complexity: O(n). Space complexity: O(h) recursive, O(n) iterative."
    },
    {
      title: "Symmetric Tree",
      description: "Check if a binary tree is symmetric around its center (mirror of itself).",
      answer: "Recursive: compare left's left with right's right, and left's right with right's left. Iterative: BFS queue, push left and right nodes in mirrored order. Both run in O(n) time. Empty tree is symmetric. Base case: both None? True, one None? False.",
      example: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def is_symmetric_recursive(root):
    def is_mirror(t1, t2):
        if not t1 and not t2:
            return True
        if not t1 or not t2:
            return False
        return (t1.val == t2.val and 
                is_mirror(t1.left, t2.right) and 
                is_mirror(t1.right, t2.left))
    return is_mirror(root, root)

def is_symmetric_iterative(root):
    from collections import deque
    if not root:
        return True
    queue = deque([root.left, root.right])
    while queue:
        t1 = queue.popleft()
        t2 = queue.popleft()
        if not t1 and not t2:
            continue
        if not t1 or not t2:
            return False
        if t1.val != t2.val:
            return False
        queue.append(t1.left)
        queue.append(t2.right)
        queue.append(t1.right)
        queue.append(t2.left)
    return True

# Symmetric tree: 1 -> 2,2 -> 3,4,4,3
root = TreeNode(1, TreeNode(2, TreeNode(3), TreeNode(4)), TreeNode(2, TreeNode(4), TreeNode(3)))
print(is_symmetric_recursive(root))  # True`,
      output: "is_symmetric([1,2,2,3,4,4,3]) → True\nis_symmetric([1,2,2,null,3,null,3]) → False",
      note: "💡 Time complexity: O(n). Space complexity: O(h) recursive, O(n) iterative."
    }
 ],
 // This is pure data export - NO React imports, NO "use client"
  experienced: [
    {
      title: "Implement a Memoization Decorator",
      description: "Create a decorator that caches function results to avoid redundant calculations, especially useful for recursive functions like Fibonacci.",
      answer: "Memoization caches function results based on arguments. Create a decorator that maintains a cache dictionary. When function is called, check if arguments exist in cache; if yes, return cached value; if no, compute, store, and return. Use *args and **kwargs for flexible argument handling. For better performance, use functools.lru_cache which provides built-in memoization with size limits. Time complexity reduces from exponential to linear for recursive functions like Fibonacci.",
      example: `from functools import wraps

def memoize(func):
    cache = {}
    @wraps(func)
    def wrapper(*args, **kwargs):
        key = (args, tuple(sorted(kwargs.items())))
        if key not in cache:
            cache[key] = func(*args, **kwargs)
        return cache[key]
    return wrapper

@memoize
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci_lru(n):
    if n <= 1:
        return n
    return fibonacci_lru(n-1) + fibonacci_lru(n-2)

print(fibonacci(100))  # 354224848179261915075
print(fibonacci_lru(100))  # Same result`,
      output: "fibonacci(100) → 354224848179261915075",
      note: "💡 Time complexity: O(n) with cache. Space complexity: O(n)."
    },
    {
      title: "Infinite Fibonacci Generator",
      description: "Write a generator that yields Fibonacci numbers indefinitely without storing the entire sequence in memory.",
      answer: "Generators use 'yield' to produce values lazily without storing entire sequence. Initialize a=0, b=1. In infinite loop, yield a, then update a,b = b, a+b. To get first n numbers, call next() n times. Generators are memory-efficient for infinite sequences because they only hold current state. Time complexity O(1) per generated number, space complexity O(1).",
      example: `def fibonacci_generator():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Get first 10 Fibonacci numbers
fib = fibonacci_generator()
first_10 = [next(fib) for _ in range(10)]
print(first_10)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Find first Fibonacci > 1000
fib = fibonacci_generator()
fib_gt_1000 = None
for num in fib:
    if num > 1000:
        fib_gt_1000 = num
        break
print(fib_gt_1000)  # 1597

# Generator with start position
def fibonacci_from(start=0):
    a, b = 0, 1
    current = 0
    while current < start:
        a, b = b, a + b
        current += 1
    while True:
        yield a
        a, b = b, a + b

fib_start = fibonacci_from(10)
print(next(fib_start))  # 55`,
      output: "fibonacci_generator() first 10 → [0,1,1,2,3,5,8,13,21,34]\nFirst >1000 → 1597\n10th Fibonacci → 55",
      note: "💡 Time complexity: O(1) per yield. Space complexity: O(1)."
    },
    {
      title: "Asynchronous Web Scraper",
      description: "Build an async web scraper using aiohttp to fetch multiple URLs concurrently for better performance.",
      answer: "Asynchronous programming allows concurrent execution of I/O-bound tasks. Use aiohttp for async HTTP requests. Create async function fetch_title that gets URL, parses HTML with BeautifulSoup, extracts title. Use asyncio.gather() to run multiple tasks concurrently. This is much faster than sequential requests. Handle errors with try-except. Requires installing aiohttp and beautifulsoup4.",
      example: `import asyncio
import aiohttp
from bs4 import BeautifulSoup

async def fetch_title(session, url):
    try:
        async with session.get(url, timeout=10) as response:
            html = await response.text()
            soup = BeautifulSoup(html, 'html.parser')
            title = soup.title.string if soup.title else "No title"
            return url, title
    except Exception as e:
        return url, f"Error: {str(e)}"

async def scrape_multiple_urls(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_title(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        return results

# Example usage
urls = [
    'https://python.org',
    'https://github.com',
    'https://stackoverflow.com'
]

# results = asyncio.run(scrape_multiple_urls(urls))
# for url, title in results:
#     print(f"{url}: {title[:50]}...")`,
      output: "https://python.org: Welcome to Python.org...\nhttps://github.com: The world's leading software development platform...",
      note: "💡 Install: pip install aiohttp beautifulsoup4"
    },
    {
      title: "Rate Limiter Decorator",
      description: "Implement a decorator that limits how many times a function can be called within a specific time period.",
      answer: "Rate limiter tracks timestamps of recent calls using deque. When function called, remove calls older than period. If calls count >= max_calls, raise exception or wait. Otherwise record timestamp and execute function. This implements sliding window algorithm. Use functools.wraps to preserve metadata. Time complexity O(1) amortized, space complexity O(max_calls). For production, consider using Redis for distributed rate limiting.",
      example: `import time
from functools import wraps
from collections import deque

def rate_limit(max_calls, period):
    """
    max_calls: maximum number of calls allowed
    period: time period in seconds
    """
    def decorator(func):
        calls = deque()
        
        @wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            
            # Remove calls older than period
            while calls and calls[0] < now - period:
                calls.popleft()
            
            if len(calls) >= max_calls:
                wait_time = period - (now - calls[0])
                raise Exception(f"Rate limit exceeded. Wait {wait_time:.2f} seconds")
            
            calls.append(now)
            return func(*args, **kwargs)
        
        return wrapper
    return decorator

@rate_limit(max_calls=3, period=10)
def api_call(user_id):
    return f"Data for user {user_id}"

# Test the rate limiter
# for i in range(5):
#     try:
#         print(api_call(f"user_{i}"))
#     except Exception as e:
#         print(f"Rate limited: {e}")
#     time.sleep(2)`,
      output: "Data for user user_0\nData for user user_1\nData for user user_2\nRate limited: Rate limit exceeded...",
      note: "💡 Time complexity: O(1) amortized. Space complexity: O(max_calls)."
    },
    {
      title: "Thread Pool Executor for Parallel Downloads",
      description: "Use ThreadPoolExecutor to download multiple files concurrently for I/O-bound tasks.",
      answer: "ThreadPoolExecutor from concurrent.futures manages a pool of threads for concurrent execution. Submit tasks using executor.submit() and process results using as_completed(). Use for I/O-bound tasks where threads can release GIL while waiting. For CPU-bound tasks, use ProcessPoolExecutor instead. Thread pool size should be optimized (usually 2-4 times number of cores).",
      example: `from concurrent.futures import ThreadPoolExecutor, as_completed
import requests

def download_url(url):
    try:
        response = requests.get(url, timeout=5)
        return url, response.status_code, len(response.content)
    except Exception as e:
        return url, None, str(e)

def download_multiple_urls(urls, max_workers=5):
    results = []
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        # Submit all tasks
        future_to_url = {executor.submit(download_url, url): url for url in urls}
        
        # Process as they complete
        for future in as_completed(future_to_url):
            url = future_to_url[future]
            try:
                result = future.result()
                results.append(result)
                print(f"Completed: {url}")
            except Exception as e:
                print(f"Failed: {url} - {e}")
    
    return results

urls = [
    'https://httpbin.org/get',
    'https://httpbin.org/ip',
    'https://httpbin.org/user-agent'
]

# results = download_multiple_urls(urls)
# for url, status, size in results:
#     print(f"{url}: Status {status}, Size {size} bytes")`,
      output: "Completed: https://httpbin.org/get\nCompleted: https://httpbin.org/ip\nCompleted: https://httpbin.org/user-agent",
      note: "💡 Time complexity: O(n/workers) parallel. Space complexity: O(n)."
    },
    {
      title: "Custom Context Manager for Database Connection",
      description: "Create a context manager that automatically handles database connection setup and cleanup.",
      answer: "Context managers ensure proper resource cleanup using __enter__ and __exit__ methods. __enter__ establishes connection and returns it. __exit__ handles commit/rollback based on exception presence and closes connection. Use contextlib.contextmanager decorator for generator-based implementation. This pattern ensures connections are always closed, even if exceptions occur.",
      example: `import sqlite3
from contextlib import contextmanager

class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None
    
    def __enter__(self):
        self.connection = sqlite3.connect(self.db_name)
        return self.connection
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.connection:
            if exc_type is None:
                self.connection.commit()
            else:
                self.connection.rollback()
            self.connection.close()
        return False  # Don't suppress exceptions

@contextmanager
def db_connection(db_name):
    conn = sqlite3.connect(db_name)
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()

# Usage with class-based
# with DatabaseConnection('test.db') as conn:
#     cursor = conn.cursor()
#     cursor.execute('CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)')
#     cursor.execute('INSERT INTO users VALUES (1, "Alice")')
#     print("Data inserted")

# Usage with generator-based
# with db_connection('test.db') as conn:
#     cursor = conn.cursor()
#     cursor.execute('SELECT * FROM users')
#     print(cursor.fetchall())`,
      output: "Data inserted\n[(1, 'Alice')]",
      note: "💡 Always use context managers for database connections."
    },
    {
      title: "LRU Cache Implementation",
      description: "Implement an LRU (Least Recently Used) cache with O(1) get and put operations.",
      answer: "LRU cache evicts least recently accessed item when capacity exceeded. Use OrderedDict from collections which maintains insertion order. For get: if key exists, move to end (mark as recently used) and return value. For put: if key exists, update and move to end; else add new key; if capacity exceeded, pop oldest (first) item. Alternative: implement with dict and doubly linked list for manual control.",
      example: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key):
        if key not in self.cache:
            return -1
        # Move to end (most recently used)
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # Remove least recently used

# Manual implementation without OrderedDict
class LRUCacheManual:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}  # key -> value
        self.order = []  # list of keys in order (oldest to newest)
    
    def get(self, key):
        if key not in self.cache:
            return -1
        # Update order
        self.order.remove(key)
        self.order.append(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) >= self.capacity:
            oldest = self.order.pop(0)
            del self.cache[oldest]
        
        self.cache[key] = value
        self.order.append(key)

cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # 1
cache.put(3, 3)  # Evicts key 2
print(cache.get(2))  # -1
print(cache.get(3))  # 3`,
      output: "1\n-1\n3",
      note: "💡 Time complexity: O(1). Space complexity: O(capacity)."
    },
    {
      title: "Singleton Pattern with Thread Safety",
      description: "Implement the singleton pattern ensuring only one instance exists globally with thread safety.",
      answer: "Singleton ensures only one instance exists globally. Multiple approaches: metaclass (override __call__), decorator (wrap class), or __new__ method. For thread safety, use threading.Lock to synchronize instance creation. The metaclass approach is most Pythonic. Ensure that initialization runs only once. Useful for configuration, logging, connection pools.",
      example: `import threading

# Method 1: Using metaclass
class SingletonMeta(type):
    _instances = {}
    _lock = threading.Lock()
    
    def __call__(cls, *args, **kwargs):
        with cls._lock:
            if cls not in cls._instances:
                cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class DatabaseConnection(metaclass=SingletonMeta):
    def __init__(self):
        self.connection_id = id(self)
    
    def connect(self):
        print(f"Connecting from instance {self.connection_id}")

# Method 2: Using decorator
def singleton(cls):
    instances = {}
    lock = threading.Lock()
    
    def get_instance(*args, **kwargs):
        with lock:
            if cls not in instances:
                instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    
    return get_instance

@singleton
class Configuration:
    def __init__(self):
        self.settings = {}
        self.instance_id = id(self)
    
    def set_setting(self, key, value):
        self.settings[key] = value

# Method 3: Using classmethod and __new__
class Logger:
    _instance = None
    _lock = threading.Lock()
    
    def __new__(cls):
        with cls._lock:
            if cls._instance is None:
                cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        self.logs = []
        self.id = id(self)

# Test singleton
db1 = DatabaseConnection()
db2 = DatabaseConnection()
print(f"Same instance: {db1 is db2}")  # True

config1 = Configuration()
config2 = Configuration()
print(f"Same config: {config1 is config2}")  # True

logger1 = Logger()
logger2 = Logger()
print(f"Same logger: {logger1 is logger2}")  # True`,
      output: "Same instance: True\nSame config: True\nSame logger: True",
      note: "💡 Thread-safe singleton with lazy initialization."
    },
    {
      title: "Longest Substring Without Repeating Characters",
      description: "Find the length of the longest substring without repeating characters.",
      answer: "Use sliding window technique with two pointers. Maintain dictionary of last seen index of each character. Expand window by moving right pointer. If duplicate found in current window, move left pointer to last occurrence + 1. Track maximum window size. This runs in O(n) time and O(min(n, alphabet size)) space. Space complexity O(k) where k is character set size.",
      example: `def length_of_longest_substring(s):
    char_index = {}  # Store last index of each character
    max_length = 0
    start = 0
    
    for end, char in enumerate(s):
        if char in char_index and char_index[char] >= start:
            start = char_index[char] + 1
        char_index[char] = end
        max_length = max(max_length, end - start + 1)
    
    return max_length

def longest_substring(s):
    char_index = {}
    start = 0
    max_start = 0
    max_length = 0
    
    for end, char in enumerate(s):
        if char in char_index and char_index[char] >= start:
            start = char_index[char] + 1
        char_index[char] = end
        
        if end - start + 1 > max_length:
            max_length = end - start + 1
            max_start = start
    
    return s[max_start:max_start + max_length]

print(length_of_longest_substring("abcabcbb"))  # 3
print(longest_substring("abcabcbb"))  # "abc"
print(length_of_longest_substring("bbbbb"))  # 1
print(length_of_longest_substring("pwwkew"))  # 3`,
      output: "3\nabc\n1\n3",
      note: "💡 Time complexity: O(n). Space complexity: O(min(n, alphabet size))."
    },
    {
      title: "Group Anagrams Together",
      description: "Given a list of strings, group anagrams together.",
      answer: "Anagrams have same sorted characters or same character frequency count. Use dictionary with sorted string as key to group anagrams. For each string, sort characters to create key, append original string to key's list. Alternative: use character count tuple as key (more efficient for long strings). Time complexity O(n * k log k) where k is max string length, or O(n * k) with count array.",
      example: `from collections import defaultdict

def group_anagrams(strs):
    anagrams = defaultdict(list)
    
    for s in strs:
        # Sort the string to use as key
        key = ''.join(sorted(s))
        anagrams[key].append(s)
    
    return list(anagrams.values())

def group_anagrams_count(strs):
    anagrams = defaultdict(list)
    
    for s in strs:
        # Use character count tuple as key
        count = [0] * 26
        for char in s:
            count[ord(char) - ord('a')] += 1
        key = tuple(count)
        anagrams[key].append(s)
    
    return list(anagrams.values())

words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
result = group_anagrams(words)
print(result)  # [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

result2 = group_anagrams_count(words)
print(result2)  # Same output`,
      output: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]",
      note: "💡 Time complexity: O(n * k log k) or O(n * k). Space complexity: O(n * k)."
    },
    {
      title: "Implement Binary Search Tree",
      description: "Implement a Binary Search Tree with insert, search, and traversal methods.",
      answer: "BST property: left subtree values < root < right subtree values. Insert: recursively find position, create new node when null found. Search: compare with root, go left if smaller, right if larger. Inorder traversal visits left, root, right - gives sorted order. Preorder: root, left, right. Postorder: left, right, root. Time complexity average O(log n) for balanced tree, worst O(n) for skewed tree.",
      example: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        if not self.root:
            self.root = TreeNode(val)
            return
        
        current = self.root
        while True:
            if val < current.val:
                if current.left:
                    current = current.left
                else:
                    current.left = TreeNode(val)
                    break
            elif val > current.val:
                if current.right:
                    current = current.right
                else:
                    current.right = TreeNode(val)
                    break
            else:
                break  # Value already exists
    
    def search(self, val):
        current = self.root
        while current:
            if val == current.val:
                return True
            elif val < current.val:
                current = current.left
            else:
                current = current.right
        return False
    
    def inorder(self):
        result = []
        def _inorder(node):
            if node:
                _inorder(node.left)
                result.append(node.val)
                _inorder(node.right)
        _inorder(self.root)
        return result
    
    def preorder(self):
        result = []
        def _preorder(node):
            if node:
                result.append(node.val)
                _preorder(node.left)
                _preorder(node.right)
        _preorder(self.root)
        return result
    
    def postorder(self):
        result = []
        def _postorder(node):
            if node:
                _postorder(node.left)
                _postorder(node.right)
                result.append(node.val)
        _postorder(self.root)
        return result

bst = BST()
for val in [5, 3, 7, 2, 4, 6, 8]:
    bst.insert(val)

print(f"Inorder: {bst.inorder()}")      # [2, 3, 4, 5, 6, 7, 8]
print(f"Preorder: {bst.preorder()}")    # [5, 3, 2, 4, 7, 6, 8]
print(f"Postorder: {bst.postorder()}")  # [2, 4, 3, 6, 8, 7, 5]
print(f"Search 4: {bst.search(4)}")     # True
print(f"Search 9: {bst.search(9)}")     # False`,
      output: "Inorder: [2, 3, 4, 5, 6, 7, 8]\nPreorder: [5, 3, 2, 4, 7, 6, 8]\nPostorder: [2, 4, 3, 6, 8, 7, 5]\nSearch 4: True\nSearch 9: False",
      note: "💡 Time complexity: O(log n) average, O(n) worst case. Space complexity: O(h) where h is tree height."
    },
    {
      title: "Word Frequency Counter",
      description: "Count frequency of each word in a text file or string, handling punctuation and case insensitivity.",
      answer: "Use regular expressions to extract words (alphanumeric sequences) and convert to lowercase. Use Counter from collections to count frequencies. For top N words, sort by frequency descending. Handle punctuation and case insensitivity. For large files, process line by line to save memory. Time complexity O(n) for counting, O(k log k) for sorting where k is unique words.",
      example: `from collections import Counter
import re

def word_frequency(text):
    # Remove punctuation and convert to lowercase
    words = re.findall(r'\\b\\w+\\b', text.lower())
    return dict(Counter(words))

def word_frequency_manual(text):
    # Manual implementation
    words = re.findall(r'\\b\\w+\\b', text.lower())
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    return freq

# Sort by frequency
def top_n_words(text, n=5):
    freq = word_frequency(text)
    return sorted(freq.items(), key=lambda x: x[1], reverse=True)[:n]

# Process file line by line (memory efficient)
def file_word_frequency(filename):
    freq = {}
    with open(filename, 'r') as file:
        for line in file:
            words = re.findall(r'\\b\\w+\\b', line.lower())
            for word in words:
                freq[word] = freq.get(word, 0) + 1
    return freq

text = "The cat and the dog. The cat is sleeping. The dog is barking."
freq = word_frequency(text)
print(freq)
# {'the': 4, 'cat': 2, 'and': 1, 'dog': 2, 'is': 2, 'sleeping': 1, 'barking': 1}

print(top_n_words(text, 3))  # [('the', 4), ('cat', 2), ('dog', 2)]`,
      output: "{'the': 4, 'cat': 2, 'and': 1, 'dog': 2, 'is': 2, 'sleeping': 1, 'barking': 1}\n[('the', 4), ('cat', 2), ('dog', 2)]",
      note: "💡 Time complexity: O(n), Space complexity: O(k) where k is unique words."
    },
    {
      title: "Find All Permutations of String",
      description: "Generate all permutations of a given string using recursion or backtracking.",
      answer: "Use recursion/backtracking: pick each character as first, recursively permute remaining characters. Base case when string length <= 1. Number of permutations is n! (factorial). Alternative: use itertools.permutations for built-in solution. For strings with duplicate characters, use set to avoid duplicate permutations. Time complexity O(n! * n), space complexity O(n!) for storing results.",
      example: `def permutations(s):
    if len(s) <= 1:
        return [s]
    
    result = []
    for i, char in enumerate(s):
        # Get permutations of remaining characters
        remaining = s[:i] + s[i+1:]
        for perm in permutations(remaining):
            result.append(char + perm)
    return result

# Remove duplicates for strings with repeated chars
def unique_permutations(s):
    if len(s) <= 1:
        return [s]
    
    result = set()
    for i, char in enumerate(s):
        remaining = s[:i] + s[i+1:]
        for perm in unique_permutations(remaining):
            result.add(char + perm)
    return list(result)

# Using itertools
from itertools import permutations as perm_func
def permutations_iterative(s):
    return [''.join(p) for p in perm_func(s)]

# Using backtracking
def permutations_backtrack(s):
    result = []
    def backtrack(path, remaining):
        if not remaining:
            result.append(path)
            return
        for i, char in enumerate(remaining):
            backtrack(path + char, remaining[:i] + remaining[i+1:])
    
    backtrack('', s)
    return result

print(permutations("abc"))  # ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
print(permutations_iterative("abc"))  # Same
print(len(permutations("abcd")))  # 24 permutations`,
      output: "['abc', 'acb', 'bac', 'bca', 'cab', 'cba']\n24",
      note: "💡 Time complexity: O(n! * n). Space complexity: O(n!)."
    },
    {
      title: "Implement Queue Using Two Stacks",
      description: "Implement a queue using two stacks with amortized O(1) operations.",
      answer: "Use stack_in for enqueue operations and stack_out for dequeue operations. When dequeue called and stack_out empty, pop all elements from stack_in and push to stack_out, reversing order. This yields FIFO behavior. Amortized O(1) per operation because each element moved at most once. Time complexity: enqueue O(1), dequeue amortized O(1).",
      example: `class QueueUsingStacks:
    def __init__(self):
        self.stack_in = []
        self.stack_out = []
    
    def enqueue(self, item):
        self.stack_in.append(item)
    
    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        
        if not self.stack_out:
            # Transfer all elements from stack_in to stack_out
            while self.stack_in:
                self.stack_out.append(self.stack_in.pop())
        
        return self.stack_out.pop()
    
    def peek(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        
        if not self.stack_out:
            while self.stack_in:
                self.stack_out.append(self.stack_in.pop())
        
        return self.stack_out[-1]
    
    def is_empty(self):
        return len(self.stack_in) == 0 and len(self.stack_out) == 0
    
    def size(self):
        return len(self.stack_in) + len(self.stack_out)

# Test queue
queue = QueueUsingStacks()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

print(queue.dequeue())  # 1
print(queue.peek())     # 2
print(queue.dequeue())  # 2
print(queue.dequeue())  # 3
print(queue.is_empty())  # True

queue.enqueue(4)
queue.enqueue(5)
print(queue.dequeue())  # 4
print(queue.size())     # 1`,
      output: "1\n2\n2\n3\nTrue\n4\n1",
      note: "💡 Time complexity: Amortized O(1). Space complexity: O(n)."
    },
    {
      title: "Find Kth Largest Element",
      description: "Find the kth largest element in an array without sorting completely.",
      answer: "Use min-heap of size k: maintain heap of k largest elements seen so far. For each element, if heap size < k, push; else if element > heap[0], replace smallest. Finally heap[0] is kth largest. Alternative: Quick Select algorithm (average O(n)). Heap method is O(n log k) time, O(k) space. For k small relative to n, heap is efficient.",
      example: `import heapq

def find_kth_largest(nums, k):
    # Using heap (min-heap of size k)
    heap = nums[:k]
    heapq.heapify(heap)
    
    for num in nums[k:]:
        if num > heap[0]:
            heapq.heapreplace(heap, num)
    
    return heap[0]

def find_kth_largest_quickselect(nums, k):
    # Quick select algorithm (average O(n))
    def quick_select(arr, k):
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x > pivot]
        mid = [x for x in arr if x == pivot]
        right = [x for x in arr if x < pivot]
        
        if k <= len(left):
            return quick_select(left, k)
        elif k <= len(left) + len(mid):
            return pivot
        else:
            return quick_select(right, k - len(left) - len(mid))
    
    return quick_select(nums, k)

def find_kth_largest_sorting(nums, k):
    # Simplest but least efficient O(n log n)
    return sorted(nums, reverse=True)[k-1]

nums = [3, 2, 1, 5, 6, 4]
print(find_kth_largest(nums, 2))  # 5
print(find_kth_largest_quickselect(nums, 2))  # 5
print(find_kth_largest_sorting(nums, 2))  # 5`,
      output: "5\n5\n5",
      note: "💡 Time complexity: O(n log k) for heap, O(n) average for quick select."
    },
    {
      title: "Implement a REST API using Flask",
      description: "Create a RESTful API with Flask that returns a list of users and handles CRUD operations.",
      answer: "Use Flask framework to create API endpoints. Define routes for GET, POST, PUT, DELETE. Use in-memory list or database for storage. Use jsonify for JSON responses. Handle different HTTP methods with appropriate status codes. This demonstrates creating a simple backend service.",
      example: `from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"}
]

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    if not data or not data.get('name') or not data.get('email'):
        return jsonify({"error": "Name and email required"}), 400
    new_id = max([u["id"] for u in users]) + 1 if users else 1
    new_user = {"id": new_id, "name": data["name"], "email": data["email"]}
    users.append(new_user)
    return jsonify(new_user), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if not user:
        return jsonify({"error": "User not found"}), 404
    data = request.get_json()
    user["name"] = data.get("name", user["name"])
    user["email"] = data.get("email", user["email"])
    return jsonify(user)

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    user = next((u for u in users if u["id"] == user_id), None)
    if not user:
        return jsonify({"error": "User not found"}), 404
    users = [u for u in users if u["id"] != user_id]
    return jsonify({"message": "User deleted"}), 200

# if __name__ == '__main__':
#     app.run(debug=True)`,
      output: "GET /users → returns list of users\nPOST /users → creates new user\nPUT /users/1 → updates user\nDELETE /users/1 → deletes user",
      note: "💡 Install: pip install flask"
    },
    {
      title: "Read File Line by Line",
      description: "Write a script that reads a file and prints its content line by line with line numbers.",
      answer: "Use open() function with 'r' mode. Use with statement for auto-closing. Iterate through file object directly for line-by-line reading (memory efficient for large files). Use enumerate() to add line numbers. Handle FileNotFoundError gracefully. This pattern is optimal for processing large log files.",
      example: `def read_file_line_by_line(filename):
    try:
        with open(filename, 'r') as file:
            for line_number, line in enumerate(file, 1):
                print(f"Line {line_number}: {line.strip()}")
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found")
    except PermissionError:
        print(f"Error: Permission denied to read '{filename}'")

def read_all_lines(filename):
    """Alternative: read all lines into list (use for small files only)"""
    try:
        with open(filename, 'r') as file:
            lines = file.readlines()
            for i, line in enumerate(lines, 1):
                print(f"Line {i}: {line.strip()}")
    except FileNotFoundError:
        print(f"File '{filename}' not found")

def process_large_file(filename):
    """Process large file without storing in memory"""
    try:
        with open(filename, 'r') as file:
            total_lines = 0
            total_chars = 0
            for line in file:
                total_lines += 1
                total_chars += len(line)
            print(f"Total lines: {total_lines}, Total chars: {total_chars}")
    except FileNotFoundError:
        print(f"File '{filename}' not found")

# read_file_line_by_line("sample.txt")`,
      output: "Line 1: First line content\nLine 2: Second line content\n...",
      note: "💡 Always use 'with' statement for file operations to ensure proper closing."
    },
    {
      title: "Command-Line Argument Parser",
      description: "Build a command-line tool that accepts arguments and prints a greeting using argparse.",
      answer: "Use argparse module for professional command-line argument parsing. Define arguments with add_argument() specifying flags, help text, types, and default values. Parse arguments with parse_args(). Use for building CLI tools, scripts with parameters. Supports required/optional arguments, flags, and subcommands.",
      example: `import argparse

def create_parser():
    parser = argparse.ArgumentParser(
        description="A greeting CLI tool",
        epilog="Example: python greet.py --name Alice --title Dr. --upper"
    )
    
    # Required argument
    parser.add_argument('--name', '-n', required=True, help='Name of the person to greet')
    
    # Optional argument with default
    parser.add_argument('--title', '-t', default='Mr./Ms.', help='Title (default: Mr./Ms.)')
    
    # Flag argument (store_true)
    parser.add_argument('--upper', '-u', action='store_true', help='Convert greeting to uppercase')
    
    # Integer argument
    parser.add_argument('--repeat', '-r', type=int, default=1, help='Number of times to repeat')
    
    # Choice argument
    parser.add_argument('--language', '-l', choices=['en', 'es', 'fr'], default='en',
                        help='Language (en/es/fr)')
    
    return parser

def get_greeting(name, title, language='en'):
    greetings = {
        'en': f"Hello, {title} {name}!",
        'es': f"¡Hola, {title} {name}!",
        'fr': f"Bonjour, {title} {name}!"
    }
    return greetings.get(language, greetings['en'])

def main():
    parser = create_parser()
    args = parser.parse_args()
    
    greeting = get_greeting(args.name, args.title, args.language)
    
    if args.upper:
        greeting = greeting.upper()
    
    for i in range(args.repeat):
        print(f"{i+1}. {greeting}")

# if __name__ == '__main__':
#     main()

# Usage examples:
# python greet.py --name John
# python greet.py --name Jane --title Dr. --upper --repeat 3
# python greet.py --name Maria --language es`,
      output: "Hello, Mr./Ms. John!\nDR. JANE!\nDR. JANE!\nDR. JANE!\n¡Hola, Mr./Ms. Maria!",
      note: "💡 Use argparse for professional CLI tools; avoid manual sys.argv parsing."
    },
    {
      title: "Simple Real-Time Chat Server",
      description: "Build a simple real-time chat server using WebSockets (websockets library).",
      answer: "Use websockets library for WebSocket communication. Server maintains set of connected clients. When message received, broadcast to all connected clients except sender. Use asyncio for concurrent connections. Client connects via WebSocket, sends/receives messages. This allows real-time bidirectional communication.",
      example: `import asyncio
import websockets
import json

# Store connected clients
connected_clients = set()

async def handler(websocket, path):
    # Register client
    connected_clients.add(websocket)
    client_name = f"Client_{id(websocket)}"
    print(f"{client_name} connected")
    
    try:
        # Send welcome message
        await websocket.send(json.dumps({
            "type": "system",
            "message": f"Welcome! {len(connected_clients)} users online"
        }))
        
        # Broadcast to others that new user joined
        await broadcast({
            "type": "system",
            "message": f"New user joined! {len(connected_clients)} online"
        }, exclude={websocket})
        
        # Listen for messages
        async for message in websocket:
            data = json.loads(message)
            print(f"Received from {client_name}: {data}")
            
            # Broadcast message to all clients
            await broadcast({
                "type": "message",
                "sender": client_name,
                "content": data.get("content", ""),
                "timestamp": asyncio.get_event_loop().time()
            })
    except websockets.exceptions.ConnectionClosed:
        print(f"{client_name} disconnected")
    finally:
        # Unregister client
        connected_clients.remove(websocket)
        await broadcast({
            "type": "system",
            "message": f"User left. {len(connected_clients)} online"
        }, exclude={websocket})

async def broadcast(message, exclude=None):
    """Send message to all connected clients"""
    if exclude is None:
        exclude = set()
    for client in connected_clients:
        if client not in exclude:
            try:
                await client.send(json.dumps(message))
            except:
                pass

async def main():
    async with websockets.serve(handler, "localhost", 8765):
        print("Chat server started on ws://localhost:8765")
        await asyncio.Future()  # Run forever

# asyncio.run(main())

# Client example (save as client.py):
"""
import asyncio
import websockets
import json

async def chat_client():
    uri = "ws://localhost:8765"
    async with websockets.connect(uri) as websocket:
        # Receive welcome message
        welcome = await websocket.recv()
        print(f"Received: {json.loads(welcome)['message']}")
        
        # Send message
        await websocket.send(json.dumps({"content": "Hello everyone!"}))
        
        # Receive broadcast
        response = await websocket.recv()
        print(f"Broadcast: {json.loads(response)}")

asyncio.run(chat_client())
"""`,
      output: "Chat server with multiple clients, real-time message broadcasting, join/leave notifications",
      note: "💡 Install: pip install websockets"
    }
  ]
};

export default problems;
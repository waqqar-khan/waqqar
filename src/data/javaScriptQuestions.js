export const javaScriptQuestions = [
  {
    id: 1,
    title: "JavaScript: Reverse String",
    description:
      "You are tasked with writing a JavaScript function that takes a string as input and returns the reversed string.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `reverseString` that accepts a single parameter (a string).",
          "The function should return the reversed version of the input string.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 'hello' -> Output: 'olleh'.",
          "Input: 'JavaScript' -> Output: 'tpircSavaJ'.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly reverse any input string.",
      "Empty strings should return an empty string.",
    ],
  },
  {
    id: 2,
    title: "JavaScript: Palindrome Number",
    description:
      "You are tasked with writing a JavaScript function to determine if a given number is a palindrome.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `isPalindromeNumber` that accepts a number as input.",
          "The function should return `true` if the number is a palindrome and `false` otherwise.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 121 -> Output: true.",
          "Input: -121 -> Output: false (negative numbers are not palindromes).",
          "Input: 10 -> Output: false.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should return a boolean value indicating whether the number is a palindrome.",
      "Negative numbers and non-palindrome numbers should return `false`.",
    ],
  },
  {
    id: 3,
    title: "JavaScript: Valid Palindrome",
    description:
      "You are tasked with writing a JavaScript function to determine if a string is a valid palindrome, ignoring case and non-alphanumeric characters.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `isValidPalindrome` that accepts a string as input.",
          "Ignore non-alphanumeric characters and consider only letters and numbers.",
          "The function should be case-insensitive.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 'A man, a plan, a canal: Panama' -> Output: true.",
          "Input: 'race a car' -> Output: false.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should return `true` for valid palindromes and `false` otherwise.",
      "The solution should handle mixed-case strings and ignore non-alphanumeric characters.",
    ],
  },
  {
    id: 4,
    title: "JavaScript: Reverse Integer",
    description:
      "You are tasked with writing a JavaScript function to reverse the digits of an integer.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `reverseInteger` that accepts an integer as input.",
          "The function should reverse the digits of the integer while preserving the sign.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 123 -> Output: 321.",
          "Input: -123 -> Output: -321.",
          "Input: 120 -> Output: 21.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should return the reversed integer.",
      "Trailing zeros should be removed, and the sign should remain intact.",
    ],
  },
  {
    id: 5,
    title: "JavaScript: Maximum Character",
    description:
      "You are tasked with writing a JavaScript function to find the character that appears the most in a given string.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `findMaxChar` that accepts a string as input.",
          "The function should return the character that appears the most in the string.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 'hello' -> Output: 'l'.",
          "Input: 'javascript' -> Output: 'a'.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly identify the character with the highest frequency in the input string.",
      "If there is a tie, return any one of the characters with the maximum frequency.",
    ],
  },
  {
    id: 6,
    title: "JavaScript: Fizz Buzz",
    description:
      "Write a function to print numbers from 1 to n, replacing multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `fizzBuzz` that accepts a single parameter (an integer n).",
          "Print numbers from 1 to n with the appropriate replacements for 'Fizz', 'Buzz', and 'FizzBuzz'.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 15 -> Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should handle numbers up to n and replace correctly based on conditions.",
    ],
  },
  {
    id: 7,
    title: "JavaScript: SubArray of Required Size",
    description:
      "Write a function to find all subarrays of a given size k in an array.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `findSubArrays` that accepts an array and an integer k as inputs.",
          "The function should return all possible subarrays of size k.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [1, 2, 3, 4, 5], k = 3 -> Output: [[1, 2, 3], [2, 3, 4], [3, 4, 5]].",
        ],
      },
    ],
    expectedBehavior: [
      "The function should handle edge cases where k is greater than the array length.",
    ],
  },
  {
    id: 8,
    title: "JavaScript: Plus One",
    description:
      "Write a function that takes an array representing a non-negative integer and adds one to the integer.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `plusOne` that accepts an array of digits.",
          "The function should add one to the number represented by the array and return the resulting array.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [1, 2, 3] -> Output: [1, 2, 4].",
          "Input: [9, 9, 9] -> Output: [1, 0, 0, 0].",
        ],
      },
    ],
    expectedBehavior: [
      "The function should handle cases with carry-over digits.",
    ],
  },
  {
    id: 9,
    title: "JavaScript: Move Zeroes",
    description:
      "Write a function to move all zeroes in an array to the end while maintaining the relative order of non-zero elements.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `moveZeroes` that accepts an array as input.",
          "The function should move all zeroes to the end of the array.",
        ],
      },
      {
        title: "2. Examples",
        items: ["Input: [0, 1, 0, 3, 12] -> Output: [1, 3, 12, 0, 0]."],
      },
    ],
    expectedBehavior: [
      "The function should modify the array in place without creating additional arrays.",
    ],
  },
  {
    id: 10,
    title: "JavaScript: Valid Anagram",
    description:
      "Write a function to determine if two strings are valid anagrams of each other.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `isValidAnagram` that accepts two strings as inputs.",
          "The function should return `true` if the strings are valid anagrams and `false` otherwise.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 'listen', 'silent' -> Output: true.",
          "Input: 'hello', 'world' -> Output: false.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should handle strings of varying lengths and cases.",
    ],
  },
  {
    id: 11,
    title: "JavaScript: Merge Sorted Array",
    description:
      "You are tasked with merging two sorted arrays into one sorted array in-place.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `mergeSortedArray` that accepts two sorted arrays and their lengths as input.",
          "Merge the second array into the first in a sorted manner.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: nums1 = [1, 2, 3, 0, 0, 0], nums2 = [2, 5, 6], m = 3, n = 3 -> Output: [1, 2, 2, 3, 5, 6].",
          "Input: nums1 = [1], nums2 = [], m = 1, n = 0 -> Output: [1].",
        ],
      },
    ],
    expectedBehavior: [
      "The function should merge the two arrays in-place without using extra space.",
    ],
  },
  {
    id: 12,
    title: "JavaScript: Split a String in Balanced Strings",
    description:
      "You are tasked with splitting a string into the maximum number of balanced strings.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `balancedStringSplit` that accepts a string as input.",
          "A balanced string is defined as a string with an equal number of 'L' and 'R' characters.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 'RLRRLLRLRL' -> Output: 4.",
          "Input: 'RLLLLRRRLR' -> Output: 3.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should return the maximum number of balanced strings that can be formed.",
    ],
  },
  {
    id: 13,
    title: "JavaScript: Maximum Number of Words Found in Sentences",
    description:
      "You are tasked with finding the maximum number of words in a sentence from an array of sentences.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `maxWordsInSentences` that accepts an array of strings (sentences).",
          "The function should return the maximum number of words in any sentence.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: ['hello world', 'this is great', 'amazing'] -> Output: 3.",
          "Input: ['I love coding', 'JS is awesome'] -> Output: 3.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly count words in each sentence and return the maximum.",
    ],
  },
  {
    id: 14,
    title: "JavaScript: Jewels and Stones",
    description:
      "You are tasked with finding how many stones in a string are also jewels.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `numJewelsInStones` that accepts two strings (jewels and stones).",
          "Return the count of stones that are jewels.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: jewels = 'aA', stones = 'aAAbbbb' -> Output: 3.",
          "Input: jewels = 'z', stones = 'ZZ' -> Output: 0.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should count the occurrences of jewel characters in the stones string.",
    ],
  },
  {
    id: 15,
    title: "JavaScript: Final Value of Variable After Performing Operations",
    description:
      "You are tasked with finding the final value of a variable after performing a series of operations.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `finalValueAfterOperations` that accepts an array of strings.",
          "Each string represents an operation, either '--X', 'X--', '++X', or 'X++'.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: ['--X', 'X++', 'X++'] -> Output: 1.",
          "Input: ['++X', '++X', 'X++'] -> Output: 3.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should calculate and return the final value after performing all operations.",
    ],
  },
  {
    id: 16,
    title:
      "JavaScript: Partitioning Into Minimum Number of Deci-Binary Numbers",
    description:
      "You are tasked with partitioning a number into the minimum number of deci-binary numbers.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `minPartitions` that accepts a string representing a number.",
          "Return the minimum number of deci-binary numbers needed to sum up to the given number.",
        ],
      },
      {
        title: "2. Examples",
        items: ["Input: '32' -> Output: 3.", "Input: '82734' -> Output: 8."],
      },
    ],
    expectedBehavior: [
      "The function should return the minimum number of deci-binary numbers required.",
    ],
  },
  {
    id: 17,
    title: "JavaScript: Number of Good Pairs",
    description:
      "You are tasked with finding the number of good pairs in an array.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `numGoodPairs` that accepts an array of integers.",
          "A good pair is defined as indices (i, j) such that nums[i] == nums[j] and i < j.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [1, 2, 3, 1, 1, 3] -> Output: 4.",
          "Input: [1, 1, 1, 1] -> Output: 6.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly count and return the number of good pairs.",
    ],
  },
  {
    id: 18,
    title: "JavaScript: To Lower Case",
    description:
      "You are tasked with converting a given string to lowercase letters.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `toLowerCase` that accepts a string as input.",
          "The function should return the string converted to lowercase.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 'Hello' -> Output: 'hello'.",
          "Input: 'LOVELY' -> Output: 'lovely'.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly convert all uppercase letters to lowercase.",
    ],
  },
  {
    id: 19,
    title: "JavaScript: How Many Numbers Are Smaller Than the Current Number",
    description:
      "You are tasked with finding how many numbers are smaller than the current number for each element in an array.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `smallerNumbersThanCurrent` that accepts an array of integers.",
          "The function should return an array where each element represents how many numbers are smaller than the current element.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [8, 1, 2, 2, 3] -> Output: [4, 0, 1, 1, 3].",
          "Input: [6, 5, 4, 8] -> Output: [2, 1, 0, 3].",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly calculate the count of smaller numbers for each element.",
    ],
  },
  {
    id: 20,
    title: "JavaScript: Find Numbers with Even Number of Digits",
    description:
      "You are tasked with finding the count of numbers in an array that have an even number of digits.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `findEvenDigitNumbers` that accepts an array of integers.",
          "Return the count of numbers with an even number of digits.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [12, 345, 2, 6, 7896] -> Output: 2.",
          "Input: [555, 901, 482, 1771] -> Output: 1.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly identify numbers with even digits and return the count.",
    ],
  },
  {
    id: 21,
    title: "JavaScript: Contains Duplicate",
    description:
      "You are tasked with determining if any value appears at least twice in an array.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `containsDuplicate` that accepts an array of integers.",
          "Return true if any value appears at least twice, otherwise return false.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [1, 2, 3, 1] -> Output: true.",
          "Input: [1, 2, 3, 4] -> Output: false.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly identify duplicate values in the array.",
    ],
  },
  {
    id: 22,
    title: "JavaScript: Two Sum",
    description:
      "You are tasked with finding two numbers in an array that add up to a specific target.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `twoSum` that accepts an array of integers and a target value.",
          "Return the indices of the two numbers such that they add up to the target.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: nums = [2, 7, 11, 15], target = 9 -> Output: [0, 1].",
          "Input: nums = [3, 2, 4], target = 6 -> Output: [1, 2].",
        ],
      },
    ],
    expectedBehavior: [
      "The function should return the indices of two numbers that add up to the target value.",
    ],
  },
  {
    id: 23,
    title: "JavaScript: Defanging an IP Address",
    description:
      "You are tasked with replacing every '.' in an IP address with '[.]'.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `defangIPaddr` that accepts a string representing an IP address.",
          "Return the defanged version of the IP address.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: '1.1.1.1' -> Output: '1[.]1[.]1[.]1'.",
          "Input: '255.100.50.0' -> Output: '255[.]100[.]50[.]0'.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly replace all '.' with '[.]' in the input string.",
    ],
  },
  {
    id: 24,
    title: "JavaScript: Flatten Multi Nested Array into 1D Array",
    description:
      "You are tasked with flattening a multi-level nested array into a one-dimensional array.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `flattenArray` that accepts a multi-level nested array.",
          "Return the flattened one-dimensional array.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [1, [2, [3, 4], 5]] -> Output: [1, 2, 3, 4, 5].",
          "Input: [[1, 2], 3, [4, [5]]] -> Output: [1, 2, 3, 4, 5].",
        ],
      },
    ],
    expectedBehavior: [
      "The function should handle nested arrays of any depth and return a flat array.",
    ],
  },
  {
    id: 25,
    title: "JavaScript: Count Occurrences",
    description:
      "You are tasked with counting the occurrences of each element in an array.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `countOccurrences` that accepts an array of elements.",
          "Return an object with the elements as keys and their occurrences as values.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [1, 2, 2, 3, 3, 3] -> Output: {1: 1, 2: 2, 3: 3}.",
          "Input: ['a', 'b', 'a', 'c'] -> Output: {'a': 2, 'b': 1, 'c': 1}.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly count and return the occurrences of each element.",
    ],
  },
  {
    id: 26,
    title: "JavaScript: Sort Count Occurrences",
    description:
      "You are tasked with counting the occurrences of elements in an array and sorting the result by count.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `sortCountOccurrences` that accepts an array of elements.",
          "Return an array of objects with elements and counts, sorted by count in descending order.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [1, 2, 2, 3, 3, 3] -> Output: [{3: 3}, {2: 2}, {1: 1}].",
          "Input: ['a', 'b', 'a', 'c'] -> Output: [{'a': 2}, {'b': 1}, {'c': 1}].",
        ],
      },
    ],
    expectedBehavior: [
      "The function should count occurrences and return the result sorted by count.",
    ],
  },
  {
    id: 27,
    title: "JavaScript: Group By Specific/Single Key in Array of Objects",
    description:
      "You are tasked with grouping objects in an array by a specific key.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `groupBy` that accepts an array of objects and a key.",
          "Return an object where the keys are unique values of the specified key and the values are arrays of objects.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: [{id: 1, type: 'a'}, {id: 2, type: 'b'}, {id: 3, type: 'a'}], key: 'type' -> Output: {'a': [{id: 1, type: 'a'}, {id: 3, type: 'a'}], 'b': [{id: 2, type: 'b'}]}.",
          "Input: [{id: 1, category: 'fruit'}, {id: 2, category: 'vegetable'}], key: 'category' -> Output: {'fruit': [{id: 1, category: 'fruit'}], 'vegetable': [{id: 2, category: 'vegetable'}]}.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly group objects by the specified key.",
    ],
  },
  {
    id: 28,
    title: "JavaScript: Remove Hash Characters",
    description:
      "You are tasked with removing hash (#) characters and their trailing text from a string.",
    sections: [
      {
        title: "1. Function Requirements",
        items: [
          "Create a function named `removeHash` that accepts a string.",
          "Return the string after removing everything from '#' to the end of the line.",
        ],
      },
      {
        title: "2. Examples",
        items: [
          "Input: 'hello#world' -> Output: 'hello'.",
          "Input: 'test#example' -> Output: 'test'.",
        ],
      },
    ],
    expectedBehavior: [
      "The function should correctly remove hash characters and trailing text.",
    ],
  },
];

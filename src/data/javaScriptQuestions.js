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
];

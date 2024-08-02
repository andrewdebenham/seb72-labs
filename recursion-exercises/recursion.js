// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.substring(1);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}

function sumOfArray(arr, index=0, sum=0) {
  // This function returns the sum of all of the numbers in a given array.
  if (index === arr.length) {
    return sum;
  }
  sum += arr[index];
  return sumOfArray(arr, index + 1, sum);
}

function findMax(arr, index=0, max=0) {
  // This function returns the largest number in a given array.
  if (index === arr.length) {
    return max;
  } else if (arr[index] > max) {
    max = arr[index]
  }
  return findMax(arr, index + 1, max);
}

function factorial(num, fact=1) {
  // This function returns the factorial of a given number.
  if (num === 0) {
    return fact;
  }
  fact *= num;
  return factorial(num - 1, fact);
}

function fibonacci(n, fibArr=[1, 1], index=0) {
  if (n === index + 1) {
    return fibArr[index]
  }
  fibArr.push(fibArr[index] + fibArr[index + 1]);
  return fibonacci(n, fibArr, index + 1);
}

// function fibonacci(n) {
//   // This function returns the Nth number in the fibonacci sequence.
//   // https://en.wikipedia.org/wiki/Fibonacci_number
//   // For this function, the first two fibonacci numbers are 1 and 1
//   if (n === 1 || n === 2) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

function coinFlips() {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  
}

function letterCombinations() {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};

// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//       total += i;
//     }
//     return total;
//   }
  
//   var t1 = performance.now();
//   addUpTo(1000000000);
//   var t2 = performance.now();
//   console.log(`I am the slower one, Time Elapsed: ${(t2 - t1) / 1000} seconds.`)



//   function addUpTo(n) {
//     return n * (n + 1) / 2;
//   }
//   var time1 = performance.now();
//   addUpTo(1000000000);
//   var time2 = performance.now();
//   console.log(`I am the faster one, Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//anagrams 
//first count the number of chars in the word
validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false

  //frequency of letters
  let wordOneLetters = {}
  let wordTwoLetters = {}

  for (let char of word1) {
    wordOneLetters[char] = (wordOneLetters[char] || 0) + 1
  }

  for (let char of word2) {
    wordTwoLetters[char] = (wordTwoLetters[char] || 0) + 1
  }

  //is letter of wordOneLetters in wordTwoLetters
  for (let key in wordOneLetters) {
    if (!(key in wordTwoLetters)) {
      return false
    }
    if (wordTwoLetters[key] !== wordOneLetters[key]) {
      return false
    }
  }
  return true
}


//Multiple pointers pattern O(n^2) needs to be sorted array
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

//refactored SumZero
const refactoredSumZero = (arr) => {
  let left = 0
  let right = arr.length-1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// console.log(refactoredSumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))
// console.log(refactoredSumZero([-4, -3, -2, -1, 0, 5, 10]))

const countUniqueValues = (arr) => {
  //get a count of all values
  let values = 0
  let left = 0
  let right = left + 1
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++
      left++
    } else if (arr[left] !== arr[right]) {
      values++
      right++
      left++
    }
  }
  if (arr[arr.length -1] !== arr[arr.length - 2]) {
    values++
  } 
  return values
}

// console.log(countUniqueValues([1,1,1,1,1,2]))
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
// console.log(countUniqueValues([-2,-1,-1,0,1]))
// console.log(countUniqueValues([]))

// **********************************************************************************************

/* sliding window technique
pattern involves creating a window which can either be an array or number from one
position to another, depending on a certain condition, window either increases or closes
and a new window is created, useful for keeping track of a subset of data in an array/string */

//naive solution

// const maxSubarraySum = (arr, num) => {
//   if (num > arr.length) return null

//   let max = -Infinity

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j]
//     }
//     if (temp > max) {
//       max = temp
//     }
//     console.log(temp, max)
//   }
//   return max
// }

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))
// console.log(maxSubarraySum([4,2,1,6], 1))
// console.log(maxSubarraySum([4,2,1,6,2], 4))
// console.log(maxSubarraySum([], 4))

//refactored

const refactoredMaxSubarraySum = (arr, num) => {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

// console.log(refactoredMaxSubarraySum([2,6,9,2,1,8,5,6,3], 3))
// console.log(refactoredMaxSubarraySum([1,2,5,2,8,1,5], 2))
// console.log(refactoredMaxSubarraySum([1,2,5,2,8,1,5], 4))
// console.log(refactoredMaxSubarraySum([4,2,1,6], 1))
// console.log(refactoredMaxSubarraySum([4,2,1,6,2], 4))
// console.log(refactoredMaxSubarraySum([], 4))

/*                        Divide and conquer 
Pattern involves dividing a data set into smaller chunks and then repeating a process with a
subset of data, this pattern can tremendously decrease time complexity */

//example with a sorted array

// given an array of integers, write a function that returns the index of that number
// if not found return -1

//naive solution

const search = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === val) return i
  }
  return -1
}

// console.log(search([5,6,7,8,15,20], 20))

//binary search is an example of divide and conquer


/* Write a function called sameFrequency
Given two positive integers, find out if the two numbers have the same frequency of digits */

const sameFrequency = (num1, num2) => {
  // 1. split the numbers
  let nums1 = num1.toString().split('')
  let nums2 = num2.toString().split('')
  let numbers1 = {}
  let numbers2 = {}

  // 2. if numbers not the same length return
  if (nums1.length !== nums2.length) return false

  // 3. count the numbers and store them in a hash
  for (let num of nums1) {
    numbers1[num] = (numbers1[num] || 0) + 1
  }
  for (let num of nums2) {
    numbers2[num] = (numbers2[num] || 0) + 1
  }
  
  // 4. compare the keys and see if they are in both 
  for (let key in numbers1) {
    if (!(key in numbers2)) {
      return false
    }
    if (numbers2[key] !== numbers1[key]) {
      return false
    }
  }
  return true
}

// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(34, 14))
// console.log(sameFrequency(3589578, 5879385))
// console.log(sameFrequency(21, 26))


/* Implement a function called, areThereDuplicates which accepts a 
variable number of arguments, and checks whether there are any duplicates among the arguments passed in 
You can solve this using the frequency counter pattern OR the multiple pointers pattern */

const areThereDuplicates = (...args) => {
  // 1. use spread operator in parameter to make args an array
  // 2. make parameters a string to do a comparison via localCompare
  args = args.toString().split(',').sort((a, b) => a.localeCompare(b))
  // 3. set multiple pointers
  let left = 0
  let right = left + 1
  while (right < args.length) {
    // 4. check comparison
    if (args[left] === args[right])  {
      return true
    } else {
      left++
      right++
    }
  }
  return false
}

//alternate solution using frequency counter

const areThereDuplicatesFC = (...args) => {
  let argObj = {}
  for (el of args) {
    argObj[el] = (argObj[el] || 0) + 1
    console.log(argObj)
    if (argObj[el] > 1) return true
  }
  return false
}

// console.log(areThereDuplicates('a', 'b', 'c', 'a'))
// console.log(areThereDuplicates(1,2,5,8,10,11,12,15,15))
// console.log(areThereDuplicates(1,2,3))
// console.log(areThereDuplicates(1,2,2))

// console.log(areThereDuplicatesFC('a', 'b', 'c', 'a'))
// console.log(areThereDuplicatesFC(1,2,5,8,10,11,12,15,15))
// console.log(areThereDuplicatesFC(1,2,5,8,10,11,12,16,15))
// console.log(areThereDuplicatesFC(1,2,3))
// console.log(areThereDuplicatesFC(1,2,2))

/* Write a function called averagePair 
Given a sorted array of integers and a target average, determine 
if there is a pair of values in the array where the average of the 
pair equals the target average. There may be more than one pair that 
matches the average target */

const averagePair = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  let average

  while (left < right) {
    average = (arr[left] + arr[right]) / 2
    if (average === target) return true
    // 1. if average is less than the target we have to move our left 
    //    to increase the average
    else if (average < target) {
      left++
      // 2. if the average is greater than target we have to move our right back
      //    to lower the average
    } else {
      right--
    }
  }
  return false
}

// console.log(averagePair([1,2,3], 2.5))
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))


/* Write a function called isSubsequence  which takes in two strings and checks 
whether the characters in the first string form a subsequence of the characters 
in the second string. In other words, the function should check whether the 
characters in the first string appear somewhere in the second string  without
their order changing */

const isSubsequence = (string1, string2) => {
  // 1. take string and convert to array
  let array1 = string1.split('')
  let array2 = string2.split('')
  let combinedArray = [...array1, ...array2]

  // 2. take combined arrays start from beginning of the array for left pointer
  //    start at the length of 1st array as this is the beginning of the second array
  let left = 0
  let right = array1.length

  // console.log(combinedArray[left], combinedArray[right])

  // 3. set bounds for both left and right pointers
  while (right < combinedArray.length) {
    if (combinedArray[left] === combinedArray[right]) left++
    if (left === array1.length) return true
    right++
    console.log(combinedArray[left], combinedArray[right])
  }
  return false
}

// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'acb'))
// console.log(isSubsequence('sing', 'sting'))

/* Given an array of integers and a number, write a function called maxSubarraySum
which finds the maximum sum of a subarray with the length of the number passed to the function
Note that a subarray must consist of consecutive  elements from the original array 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not */

const maxSubarraySum = (arr, range) => {
  // 1. declare the window
  if (range > arr.length) return null
  let temp = 0
  let max = 0
  // 2. get the max of the first iteration
  for (let i = 0; i < range; i++) {
    max += arr[i]
  }
  // 3. do a comparison from max to temp by iterating till the end
  temp = max
  // 4. set new iteration with temp, add the new arr and subtract the old arr in the window
  for (let i = range; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - range]
    max = Math.max(temp, max)
  }
return max
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2))
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0 , 20], 4))
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))
// console.log(maxSubarraySum([2, 3], 3))


/* Write a function called minSubArrayLen  which accepts two parameters - 
an array of positive integers and a positive integer. 
This function should return the minimal length of a contiguous  
subarray of which the sum is greater than or equal to the integer 
passed to the function. If there isn't one, return 0 instead */

const minSubArrayLen = (arr, num) => {
  // could not figure out on my own, had to look at solution
  let sum = 0
  let left = 0
  let right = 0
  let minLen = Infinity

  // broken into two part where sum >= num or sum < num, any other condition break out of loop 
  while (left < arr.length) {
    if (sum < num && right < arr.length) {
      // keep adding until we are at or greater than number
      sum += arr[right]
      right++
    } else if (sum >= num) {
      // if we are greater than number record lengths and slide the window to subtract that from our total
      minLen = Math.min(minLen, right - left)
      sum -= arr[left]
      left++
    } else {
      break;
    }
  }
  // if nothing exists we will return infinity, we should return zero or the min length calculated
  return minLen === Infinity ? 0 : minLen
}


// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) //2
// console.log(minSubArrayLen([2,1,6,5,4], 9)) //2
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) //1
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) //3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)) //5
// console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)) //2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) //0


/* write a function findLongestSubstring, which accepts a string and returns the length of the longest 
substring with all distinct characters */

findLongestSubstring = (phrase) => {
  // could not figure this out on my own, looked at solution
  let longest = 0
  let index = 0
  let seen = {}

  // 1. loop through the letters of the word or phrase
  for (let i = 0; i < phrase.length; i++) {
    let letter = phrase[i]
    //store the index of where the same letter is seen again
    if (seen[letter]) {
      index = Math.max(index, seen[letter])
    }
    // beggining of substring + 1 to include in the count
    longest = Math.max(longest, i - index + 1)
    // store the index of the next letter so as to not double count
    seen[letter] = i + 1
  }
  return longest
}




// console.log(findLongestSubstring('')) //0
// console.log(findLongestSubstring('rithmschool')) //7
// console.log(findLongestSubstring('thisisawesome')) //6
// console.log(findLongestSubstring('thecatinthehat')) //7
// console.log(findLongestSubstring('bbbbbb')) //1
// console.log(findLongestSubstring('longestsubstring')) //8
// console.log(findLongestSubstring('thisishowwedoit')) //6



// *************************************************************************************
//                              Recursion

// 1. base case - usually involves some conditional
// 2. different input

//examples

const countDown = (num) => {
  if (num <= 0) {
    console.log('All done!')
    return
  }
  console.log(num)
  num--
  countDown(num)
}

// factorial

// const factorial = (num) => {
//   if (num === 1) return 1
//   return num * factorial(num - 1)
// }

// console.log(factorial(5))


//helper method recursion

const collectOddValues = (arr) => {
  let result = []

  const helper = (helperInput) => {
    if (helperInput.length === 0) return
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result
}

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

//pure recursion

const collectOddValuesPR = (arr) => {
  let newArr = []
  if (arr.length === 0) return newArr
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  // newArr = newArr.concat(collectOddValuesPR(arr.slice(1)))
  newArr = [...newArr, ...collectOddValuesPR(arr.slice(1))]
  return newArr
}

// console.log(collectOddValuesPR([1,2,3,4,5,6,7,8,9]))


//Recursive coding exercises

/* Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow */

const power = (base, exponent) => {
  if (exponent === 0) return 1
  return base * power(base, exponent -1)
}

// console.log(power(2,0))
// console.log(power(2,2))
// console.log(power(2,4))


/* Write a function factorial which accepts a number and returns 
the factorial of that number. A factorial is the product of an integer 
and all the integers below it; e.g., factorial four (4!) is equal to 4*3*2*1 = 24
factorial zero (0!) = 1 */

const factorial = (num) => {
  if (num === 0) return 1
  return num * factorial(num -1)
}


// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(4))
// console.log(factorial(7))

/* Write a fxn called productOfArray which takes in an array
of numbers and returns the product of them all */

const productOfArray = (arr) => {
  if (arr.length === 0) return 1
  return arr[0] * productOfArray(arr.slice(1))
}


// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60

/* Write a fxn called recursiveRange which accepts a number and 
add up all the numbers from 0 to the number passed to the function */

const recursiveRange = (num) => {
  if (num === 0) return 0
  return num + recursiveRange(num - 1)
}


// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 


/* Write a recursive fxn call fib which acceps a number and returns the
nth number in the Fibonacci sequence. Recall that the Fibonacci sequence 
is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts 
with 1 and 1, and where every number thereafter is equal to the 
sum of the previous two numbers. */

const fib = (n) => {
  if (n <= 2) return 1
  return fib(n -2) + fib(n-1)
}

// console.log(fib(4))// 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465

/* Write a recursive function called reverse which accepts a string 
and returns a new string in reverse */

const reverse = (str) => {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
} 

// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'


/* Write a recursive function isPalindrome which returns true if the string
passed to it is a palindrome otherwise return false */

const isPalindrome = (str) => {
  const checkReverse = (input) => {
    if (input.length <= 1) return input[0]
    return checkReverse(input.slice(1)) + input[0]
  }
  let reverse = checkReverse(str)
  return str === reverse ? true : false
} 

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false


/* Write a recursive function called someRecursive which accepts an array and
a callback. The function returns true if a single value in the array returns true
when passed to the callback. Otherwise it returns false */

const isOdd = val => val % 2 !== 0

const someRecursive = (arr, cb) => {
  if (arr.length === 0) return false
  if (cb(arr[0])) return true
  return someRecursive(arr.slice(1), cb)
}

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)) // false

/* Write a recursive fxn which accepts an array of arrays
and returns a new array with all values flattened */

const flatten = (arr) => {
  let newArr = []
  for (let el of arr) {
    if (Array.isArray(el)) {
      newArr = [...newArr, ...flatten(el)]
    } else {
      newArr.push(el)
    }
  }
  return newArr
}


// console.log(flatten([1,2,[3]]))

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

/* Write a recusive fxn called CapitalizeFirst. Given an array of strings,
capitalize the first letter of each string in the array */

const capitalizeFirst = (words) => {
  if (words.length === 1) return [words[0][0].toUpperCase() + words[0].slice(1)]
  return [(words[0][0].toUpperCase() + words[0].slice(1)),  ...capitalizeFirst(words.slice(1))]
}

// console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']

/* Write a recursive function called nestedEvenSum. Return all even numbers
in an object which may contain nested objects */

const nestedEvenSum = (obj, sum=0) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key])
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0 ) {
      sum += obj[key]
    }
  }
  return sum
}

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// console.log(nestedEvenSum(obj1)) // 6
// console.log(nestedEvenSum(obj2)) // 10

/* Write a recursive fxn called capitalizeWords. Given an array of words
return a new array containing each word capitalized */
let words = ['i', 'am', 'learning', 'recursion']

const capitalizeWords = (words) => {
  if (words.length === 1) return [words[0].toUpperCase()]
  return [words[0].toUpperCase(),  ...capitalizeWords(words.slice(1))]
}

// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

/* Write a fxn called stringifyNumbers which takes in an object and finds all
of the values which are numbers and converts them to strings */


// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

const stringifyNumbers = (obj) => {
  const newObj = {}
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key])
      } else {
          newObj[key] = obj[key]
        }
  }
  return newObj
}
// console.log(stringifyNumbers(obj))

/* Write a fxn called collectStrings which accepts an object and returns
an array of all the values in the object that have a typeof string */


const collectStrings = (obj) => {
  let arr = []
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key])
    } else if(typeof obj[key] === 'object') {
        arr = [...arr, ...collectStrings(obj[key])]
      }
  }
  return arr
}

// let obj = {
//   stuff: "foo",
//   data: {
//       val: {
//           thing: {
//               info: "bar",
//               moreInfo: {
//                   evenMoreInfo: {
//                       weMadeIt: "baz"
//                   }
//               }
//           }
//       }
//   }
// }



// console.log(collectStrings(obj)) // ["foo", "bar", "baz"])

/******************************Searches************************************************* */

//exercise 
/* Write a function called linearSearch  which accepts an array and a value, and returns the 
index at which the value exists. If the value does not exist in the array, return -1. */

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

// console.log(linearSearch([10,15,20,25,30], 25))


// Binary searches only work on sorted arrays
// but a much faster solution, it's a divide and conquer solution

/* pseudocode
    1. fxn accepts a sorted array and a value
    2. create a left pointer and a right pointer (start, end) of the array
    3. left < right while looping
    4. check the middle 
      a. is middle the value you want, return index
      b. is middle < value, move left pointer up
      c. is middle > value, move right pointer down
      d. if value not found, return -1
*/ 

/* Write a fxn call binarySearch which accepts a sorterd 
array and a value and returns the index at which the value 
exists. Otherwise, return -1. This algorithm should be more 
efficient than linearSearch - you can read how to implement it here 
- https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/ */


const binarySearch = (arr, val) => {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right)/2)

  while (left <= right) {
    if (arr[middle] === val) return middle
    else if (arr[middle] < val) {
      left = middle + 1
      middle = Math.floor((right + left)/2)
      } 
      else if (arr[middle] > val) {
        right = middle - 1
        middle = Math.floor((right + left)/2)
      }
    }
  return -1
}

// console.log(binarySearch([1,2,3,4,5,6], 6))


/* pseudocode 
write a fxn stringSearch 

  1. loop over the longer string
  2. loop over the shorter string
  3. if the characters don't match, break out of the inner loop
  4. if the characters do match, keep going
  5. if you complete the inner loop and find a match
    a. increment the count of matches
  6. return the count
*/

const naiveSearch = (str1, str2) => {
  let count = 0
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      console.log(str1[i+j], str2[j])
      if (str1[i+j] !== str2[j]) break
      if (j === str2.length-1) count++
    }
  }
  return count 
}

console.log(naiveSearch('aaaaab', 'aaab'))

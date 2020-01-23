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

// console.log(naiveSearch('aaaaab', 'aaab'))

/* BubbleSort psudocode (does a swap each time)
  1. start looping with a variable called i from the end of the
    aray towards the beginning
  2. start an inner loop with a variable called j from the beginning
    until i - 1
  3. if arr[j] > than arr[j+1], swap those two values
  4. return the sorted array
*/

const bubbleSort = (arr) => {
  let noSwaps // for optimization
  const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
  }

  for (i = arr.length; i > 0; i--) {
    noSwaps = true
    for (j=0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        noSwaps = false
      }
    }
    if(noSwaps) break
  }
  return arr
}

// console.log(bubbleSort([5,3,1,2,4]))
// console.log(bubbleSort([8,1,2,3,4,5,6,7]))


/* Selection sort pseudocode (does a swap only when loop is complete)
  1. store the first element as the smallest value you've seen so far
  2. compare this item to the next item in the array until you find a smaller number
  3. if smaller number is found, designate that smaller number to be the new "min"
  and continue until the end of the array
  4. if the min is not the value (index) you initially began with, swap the 2 values
  5. repeat this with the next element until the array is sorted
*/

const selectionSort = (arr) => {
  let newIndex = 0
  
  const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
  }
  
  for (let i=0; i < arr.length; i++) {
    let min = arr[i]
    for (let j=i+1; j < arr.length; j++) {
      if(min > arr[j]) {
        min = arr[j]
        newIndex = j
      }
    }
    if (arr[i] !== min) {
      swap(arr, i, newIndex)
    }
  }
  return arr
}

// console.log(selectionSort([19,44,38,5,55,67,72,47,15]))

/* Insertion sort pseudocode
  1. start by picking the second element in the array
  2. compare second with the one before it and swap if necessary
  3. continue to the next element and if it is in the incorrect order
    iterate through the sorted portion to place the element in the correct place
  4. repeat until the array is sorted
*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let j = i - 1 //to avoid declaring a global variable throughout the whole program
    // console.log(current, 'i am here')
    for (j; j >= 0 && arr[j] > current; j--) {
      arr[j+1] = arr[j]
      // console.log('i am j in the loop', j)
    }
    arr[j+1] = current
    // console.log('i am j out of the j loop', j)
  }
  return arr
}

// console.log(insertionSort([3,44,38,5]))


/* Pseudocode to merge Arrays
  1. Create an empty array, take a look at the smallest values in each input array
  2. While there are still values we haven't looked at...
  3. If the value in the first array is smaller than the value in the second array, 
      push the value in the first array into our results and move on to the next value in the first array
  4. If the value in the first array is larger than the value in the second array, 
      push the value in the second array into our results and move on to the next value in the second array
  5. Once we exhaust one array, push in all remaining values from the other array */

  const merge = (arr1, arr2) => {
    let i = 0
    let j = 0
    let newArr = []

    while (i + j < arr1.length + arr2.length) {
      if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i])
        // console.log(newArr)
        i++; 
      }
      else if (arr1[i]> arr2[j]) {
        newArr.push(arr2[j])
        // console.log(newArr)
        j++
      }
      else if (arr1[i] === arr2[j]){
        newArr.push(arr1[i], arr2[j])
        i++, j++
      }
      else if (i === arr1.length) {
        newArr.push(arr2[j])
        j++
      }
      else if (j === arr2.length) {
        newArr.push(arr1[i])
        i++
      }
    }
    return newArr
  }

  // console.log(merge([5,42,86], [3,15,90,99]))
  // console.log(merge([1,10,50], [2,14,50,100]))
  // console.log(merge([], [2,14,50,100]))

  /* mergeSort pseudocode 
  1. Break up the array into halves until you have arrays that are empty or have one element
  2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until 
    you are back at the full length of the array
  3. Once the array has been merged back together, return the merged (and sorted!) array */

const mergeSort = (arr) => {
  if (arr.length <= 1 ) return arr
  let mid = Math.floor((arr.length)/2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

// console.log(mergeSort([5,42,86,3,15,90, 99]))

/* Quick sort 
we need a helper function, pivot pseudocode:
  1. accept three arguments: 
    an array, a start index, and an end index 
  2. Grab the pivot from the start of the array 
  3. Store the current pivot index in a variable 
    (this will keep track of where the pivot should end up)
  4. Loop through the array from the start until the end
  5. If the pivot is greater than the current element 
    a. increment the pivot index variable and then swap the current element 
      with the element at the pivot index
  6. Swap the starting element (i.e. the pivot) with the pivot index
  7. Return the pivot index */


  // const pivot = (arr, start = 1, end = arr.length -1) => {
  //   let pivotIndex = 0
  //   let pivot = arr[0]
  //   const swap = (arr, id1, id2) => {
  //     let temp = arr[id1]
  //     arr[id1] = arr[id2]
  //     arr[id2] = temp
  //   }

  //   for (i = 0; i<=end; i++) {
  //     if (pivot > arr[i] && start ===1) {
  //       pivotIndex++
  //       start++
  //     }
  //     else if (pivot < arr[i]) {
  //       start++
  //     }
  //     else if (pivot > arr[i] && start !==1) {
  //       pivotIndex++
  //       swap(arr, i, pivotIndex)
  //       start++
  //     }
  //   }
  //   swap(arr, pivotIndex, 0)
  //   console.log(arr)
  //   return pivotIndex
  // }

//refactor bc we can swap the first one by itself
  // const pivot = (arr, start = 1, end = arr.length -1) => {
  //   let pivotIndex = 0
  //   let pivot = arr[0]
  //   const swap = (arr, id1, id2) => {
  //     let temp = arr[id1]
  //     arr[id1] = arr[id2]
  //     arr[id2] = temp
  //   }
    
  //   for (i = 0; i<=end; i++) {
  //     if (pivot > arr[i]) {
  //       pivotIndex++
  //       swap(arr, i, pivotIndex)
  //       start++
  //       console.log(arr)
  //     }
  //     else if (pivot < arr[i]) {
  //       start++
  //     }
      
  //   }
  //   swap(arr, pivotIndex, 0)
  //   console.log(arr)
  //   return pivotIndex
  // }

  //final refactor
  const pivot = (arr, start=0, end=arr.length-1) => {
    const swap = (arr, idx1, idx2) => {
      let temp = arr[idx1]
      arr[idx1] = arr[idx2]
      arr[idx2] = temp
    }

    /* the next line of code gave me a tremendous amount of 
    trouble i was using pivotIndex = 0, so when i called
    the function with parameters, it would ignore and just use
    0, the samething below in the swap, we will be changing the 
    start varible dynamically based on what we pass through to the
    recursive calls */

    let pivotIndex = start
    let pivot = arr[start]
    
    
    for (let i = start+1; i<=end; i++) {
      if (pivot > arr[i]) {
        pivotIndex++
        swap(arr, pivotIndex, i)
        // console.log(arr)
      }
    }
    swap(arr, start, pivotIndex)
    // console.log(arr)
    return pivotIndex
  }


  // console.log(pivot([4,8,2,1,5,7,6,3]))
  // console.log(pivot([26,23,27,44,17,47,39,42,43,1]))
  // console.log(pivot([4,8,2,1,5,7,6,3]))

  /* Call the pivot helper on the array
  1.When the helper returns to you the updated pivot index, 
    recursively call the pivot helper on the subarray to the 
    left of that index, and the subarray to the right of that index
  2. Your base case occurs when you consider a subarray with less than 2 elements */


  const quickSort = (arr, left = 0, right = arr.length-1) => {
    if (left < right) {
      let pivotPoint = pivot(arr, left, right)
      quickSort(arr, left, pivotPoint-1)
      // console.log(arr, pivotPoint, left, right)
      quickSort(arr, pivotPoint+1, right)
      // console.log(arr, pivotPoint, left, right)
    }
    // console.log(arr)
    return arr
  }

// console.log(quickSort([26,23,27,44,17,47,39,42,43,1]))


/* In order to perform a radix sort we need some helpers
first helper is to return the 1s, 10s, 100s and 1000s place and so on 
getDigit(number, place) */

const getDigit = (number, place) => {
  return Math.floor(Math.abs(number) / 10 ** place % 10)
}

// console.log(getDigit(7323, 2))

/* second helper we need to know the count of numbers 
digitCount*/

const digitCount = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

/* third helper we need to know the most digits
mostDigits(nums) - given an array of numbers, return the number of digits
in the largest numbers in the list 
digitCount*/

const mostDigits = (nums) => {
  let maxDigits = 0
  for (let i=0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

// console.log(mostDigits([23, 567, 89, 12234324, 90]))

/* Define a function radixSort that accepts array of numbers
  1. Figure out how many digits the largest number has
  2. Loop from k = 0 up to this largest number of digits
  3. For each iteration of the loop:
    a. Create buckets for each digit (0 to 9)
    b. place each number in the corresponding bucket based on its kth digit
  4. Replace our existing array with values in our buckets, starting with 0 and going up to 9
  5. return array at the end! 
*/

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums)
  for (let k=0; k<maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let i=0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums =  [].concat(...digitBuckets)
  }
  return nums
}
// console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))


/******************************************************************************************************** 
                                          Data structures 
Node 
  piece of data
  reference to the next node

Linked Lists
  do not have any indices
  connected via nodes with a next pointer
  random access not allowed

  pushing psedudocode
    1. This function should accept a value
    2. Create a new node using the value passed to the function
    3. If there is no head property on the list, 
        a. set the head and tail to be the newly created node
        b. Otherwise set the next property on the tail to be the new 
          node and set the tail property on the list to be the newly created node
    4. Increment the length by one
    5. Return the linked list

  popping pseudocode
    1. If there are no nodes in the list, return undefined
    2. Loop through the list until you reach the tail
    3. Set the next property of the 2nd to last node to be null
    4. Set the tail to be the 2nd to last node
    5. Decrement the length of the list by 1
    6. Return the value of the node removed
  
  shift pseudocode
    1. If there are no nodes, return undefined
    2. Store the current head property in a variable
    3. Set the head property to be the current head's next property
    4. Decrement the length by 1
    5. Return the value of the node removed
  
  unshift psuedoCode 
    1. This function should accept a value
    2. Create a new node using the value passed to the function
    3. If there is no head property on the list, set the head and tail to be the newly created node
    4. Otherwise set the newly created node's next property to be the current head property on the list
    5. Set the head property on the list to be that newly created node
    6. Increment the length of the list by 1
    7. Return the linked list

  get pseudocode
    1. This function should accept an index
    2. If the index is less than zero or greater than or equal to the length of the list, return null
    3. Loop through the list until you reach the index and return the node at that specific index
  
  set pseudocode
    1. This function should accept an index and a value
    2. Use your get function to find the specific node
    3. If the node is not found, return false
    4. If the node is found, set the value of that node to be the value passed to the function and return true
  
  insert pseudocode
    1. If the index is less than zero or greater than the length, return false
    2. If the index is the same as the length, push a new node to the end of the list
    3. If the index is 0, unshift a new node to the start of the list
    4. Otherwise, using the get method, access the node at the index - 1
    5. Set the next property on that node to be the new node
    6. Set the next property on the new node to be the previous next
    7. Increment the length
    8.  Return true

  remove pseudocode
    1. If the index is less than zero or greater than or equal to the the length, return undefined
    2. If the index is the same as the length-1, pop
    3. If the index is 0, shift
    4. Otherwise, using the get method, access the node at the index - 1
    4. Set the next property on that node to be the next of the next node
    5. Decrement the length
    6. Return the value of the node removed

  reverse pseudocode
    1. Swap the head and tail
    2. Create a variable called next
    3. Create a variable called prev
    4. Create a variable called node and initialize it to the head property
    5. Loop through the list
    6. Set next to be the next property on whatever node is
    7. Set the next property on the node to be whatever prev is
    8. Set prev to be the value of the node variable
    9. Set the node variable to be the value of the next variable
    10. Once you have finished looping, return the list
    */

// class Node {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } 
    else {
      let current = this.tail
      current.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let previous = current

    while (current.next !== null) {
      previous = current
      current = current.next
    }
    this.tail = previous
    previous.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if(!this.head) return undefined
    let current = this.head
    this.head = current.next
    current.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index>= this.length) return undefined
    let current = this.head
    if (index === 0) return current
    for (let i=1; i<=index; i++) {
      current = current.next
    }
    return current
  }

  set(index, value) {
    let current = this.get(index)
    if (current === undefined) return false
    current.val = value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)
    let newNode = new Node(value)
    let prev = this.get(index - 1)
    let nextNode = prev.next
    prev.next = newNode
    newNode.next = nextNode
    this.length++
    return true
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === this.length-1) return this.pop()
    if(index === 0) return this.shift()
    let prev = this.get(index - 1)
    let removed = prev.next
    prev.next = removed.next
    removed.next = null
    this.length--
    return removed
  }

  reverse() {
    let current = this.head
    this.head = this.tail
    this.tail = current
    let prev = null
    let next

    for (let i=0; i < this.length; i++) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return this
  }

  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

// const list = new SinglyLinkedList()
// // console.log(list.push(20))
// // console.log(list.push(30))
// // console.log(list.pop())
// list.push(10)
// list.push(20)
// list.push(30)

/*********************************************************************************************************** 
                                          Doubly Linked List
push pseudocode
  1. Create a new node with the value passed to the function
  2. If the head property is null set the head and tail to be the newly created node 
  3. If not, set the next property on the tail to be that node
  4. Set the previous property on the newly created node to be the tail
  5. Set the tail to be the newly created node
  6. Increment the length
  7. Return the Doubly Linked List

pop pseudocode
  1. If there is no head, return undefined
  2. Store the current tail in a variable to return later
  3. If the length is 1, set the head and tail to be null
  4. Update the tail to be the previous Node.
  5. Set the newTail's next to null
  6. Decrement the length
  7. Return the value removed

shifting pseudocode
  1. If length is 0, return undefined
  2. Store the current head property in a variable (we'll call it old head)
  3. If the length is one
  4. set the head to be null
  5. set the tail to be null
  6. Update the head to be the next of the old head
  7. Set the head's prev property to null
  8. Set the old head's next to null
  9. Decrement the length
  10. Return old head

unshift pseudocode
  1. Create a new node with the value passed to the function
  2. If the length is 0
    a. Set the head to be the new node
    b. Set the tail to be the new node
Otherwise
  3. Set the prev property on the head of the list to be the new node
  4. Set the next property on the new node to be the head property 
  5. Update the head to be the new node
  6. Increment the length
  7. Return the list

get pseudocode
  1. If the index is less than 0 or greater or equal to the length, return null
  2. If the index is less than or equal to half the length of the list
      a. Loop through the list starting from the head and loop towards the middle
      b. Return the node once it is found
  3. If the index is greater than half the length of the list
​        a. Loop through the list starting from the tail and loop towards the middle
      b. Return the node once it is found

set pseudocode
  1. Create a variable which is the result of the get method at the index passed to the function
    a. If the get method returns a valid node, set the value of that node to be the value passed to the function
    b. Return true
  2. Otherwise, return false

insert pseudocode
  1. If the index is less than zero or greater than the length return false
  2. If the index is 0, unshift
  3. If the index is the same as the length, push
  4. Use the get method to access the index -1
  5. Set the next and prev properties on the correct nodes to link everything together
  6. Increment the length 
  7. Return true

remove pseudocode
  1. If the index is less than zero or greater than or equal to the length return undefined
  2. If the index is 0, shift
  3. If the index is the same as the length-1, pop
  4. Use the get method to retrieve the item to be removed
  5. Update the next and prev properties to remove the found node from the list
  6. Set next and prev to null on the found node
  7. Decrement the length
  8. Return the removed node

reverse pseudocode
  1. start at the head
  2. traverse the list switching out prev vs next
  3. continue until current.prev (which is now the next value) reaches the end
  4. swap out head and tail
*/

// class Node {
//   constructor(val) {
//     this.val = val
//     this.next = null
//     this.prev = null
//   }
// }

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      let prevNode = this.tail
      prevNode.next = newNode
      newNode.prev = prevNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let removed = this.tail
    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removed.prev
      this.tail.next = null
      removed.prev = null
    }
    this.length--
    return removed
  }

  shift() {
    if (!this.head) return undefined
    let removed = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      let newFirst = removed.next
      this.head = newFirst
      removed.next = null
      newFirst.prev = null
    }
    this.length--
    return removed
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      let secondNode = this.head
      secondNode.prev = newNode
      newNode.next = secondNode
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined
    let current
    if (index <= this.length/2) {
      // console.log('wfb')
      let count = 0
      current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
    } else {
      // console.log('wfe')
      let count = this.length-1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
    }
    return current
  }

  set(index, val) {
    let current = this.get(index)
    if (current) return (!!(current.val = val))
    return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)
    
    let newNode = new Node(val)
    let prev = this.get(index - 1)
    let next = prev.next
      
    prev.next = newNode
    next.prev = newNode
    newNode.prev = prev
    newNode.next = next
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length-1) return this.pop()
    let removed = this.get(index)
    let prev = removed.prev
    let next = removed.next
    prev.next = next
    next.prev = prev
    removed.prev = null
    removed.next = null
    this.length--
    return removed
  }

  reverse() {
    let current = this.head
    while (current) {
      let temp = current.prev
      current.prev = current.next
      current.next = temp
      current = current.prev
    }
    let newHead = this.head
    this.head = this.tail
    this.tail = newHead
    return this
  }
}//end DLL

// dList = new DoublyLinkedList()
// dList.push(5)
// dList.push(10)
// dList.push(15)
// dList.push(20)
// dList.push(40)
// dList.push(50)
// dList.push(60)
// dList.push(70)


/*********************************************************************************************************** 
                                                  Stacks
push pseudocode
  1. The function should accept a value
  2. Create a new node with that value
  3. If there are no nodes in the stack, set the first and last property to be the newly created node 
  4. If there is at least one node, create a variable that stores the current first property on the stack
  5. Reset the first property to be the newly created node
  6. Set the next property on the node to be the previously created variable
  7. Increment the size of the stack by 1

pop pseudocode 
  1. If there are no nodes in the stack, return null
  2. Create a temporary variable to store the first property on the stack
  3. If there is only 1 node, set the first and last property to be null
  4. If there is more than one node, set the first property to be the next property on the current first
  5. Decrement the size by 1
  6. Return the value of the node removed
*/

// class Node {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    let newNode = new Node(val)
    if(!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      newNode.next = this.first
      this.first = newNode
    }
    return ++this.size
  }

  pop() {
    if (!this.first) return null
    let removed = this.first
    this.first = removed.next
    removed.next = null
    this.size--
    if (this.size === 0) {
      this.first = null
      this.last = null
    }
    return removed
  }

}//end stack

// let stack = new Stack()


/*********************************************************************************************************** 
                                                  Queues  
enqueue pseudocode
  1. This function accepts some value
  2. Create a new node using that value passed to the function
  3. If there are no nodes in the queue, set this node to be the first and last property of the queue
  4. Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
  5. Increment the size of the queue by 1

  dequeue pseudocode
    1. If there is no first property, just return null
    2. Store the first property in a variable
    3. See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
    4. If there is more than 1 node, set the first property to be the next property of first 
    5. Decrement the size by 1
    6. Return the value of the node dequeued
*/


class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    let newNode = new Node(val)
    if(!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  dequeue() {
    if(!this.first) return null
    let removed = this.first
    if(this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = removed.next
      removed.next = null
    }
    this.size--
    return removed
  }
} //end queue

// queue = new Queue()


/*********************************************************************************************************** 
                                                  Trees

*/

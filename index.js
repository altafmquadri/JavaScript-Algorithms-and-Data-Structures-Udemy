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

const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null

  let max = -Infinity

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
    console.log(temp, max)
  }
  return max
}

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

console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))
console.log(isSubsequence('sing', 'sting'))
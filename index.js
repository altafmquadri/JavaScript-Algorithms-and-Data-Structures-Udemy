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


/* Write a function called sameFrequency
Given two positive integers, find out if the two numbers have the same frequency of digits */



// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(34, 14))
// console.log(sameFrequency(3589578, 5879385))
// console.log(sameFrequency(21, 26))

/* Implement a function called, areThereDuplicates which accepts a 
variable number of arguments, and checks whether there are any duplicates among the arguments passed in 
You can solve this using the frequency counter pattern OR the multiple pointers pattern */



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



// console.log(averagePair([1,2,3], 2.5))
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))


/* Write a function called isSubsequence  which takes in two strings and checks 
whether the characters in the first string form a subsequence of the characters 
in the second string. In other words, the function should check whether the 
characters in the first string appear somewhere in the second string  without
their order changing */



// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'acb'))
// console.log(isSubsequence('sing', 'sting'))

/* Given an array of integers and a number, write a function called maxSubarraySum
which finds the maximum sum of a subarray with the length of the number passed to the function
Note that a subarray must consist of consecutive  elements from the original array 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not */



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





// console.log(minSubArrayLen([2,3,1,2,4,3], 7)) //2
// console.log(minSubArrayLen([2,1,6,5,4], 9)) //2
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) //1
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) //3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)) //5
// console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)) //2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) //0


/* write a function findLongestSubstring, which accepts a string and returns the length of the longest 
substring with all distinct characters */



// console.log(findLongestSubstring('')) //0
// console.log(findLongestSubstring('rithmschool')) //7
// console.log(findLongestSubstring('thisisawesome')) //6
// console.log(findLongestSubstring('thecatinthehat')) //7
// console.log(findLongestSubstring('bbbbbb')) //1
// console.log(findLongestSubstring('longestsubstring')) //8
// console.log(findLongestSubstring('thisishowwedoit')) //6


//Recursive coding exercises

/* Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow */


// console.log(power(2,0))
// console.log(power(2,2))
// console.log(power(2,4))

/* Write a function factorial which accepts a number and returns 
the factorial of that number. A factorial is the product of an integer 
and all the integers below it; e.g., factorial four (4!) is equal to 4*3*2*1 = 24
factorial zero (0!) = 1 */




// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(4))
// console.log(factorial(7))


/* Write a fxn called productOfArray which takes in an array
of numbers and returns the product of them all */



// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60

/* Write a fxn called recursiveRange which accepts a number and 
add up all the numbers from 0 to the number passed to the function */



//   console.log(recursiveRange(6)) // 21
//   console.log(recursiveRange(10)) // 55 


/* Write a recursive fxn call fib which acceps a number and returns the
nth number in the Fibonacci sequence. Recall that the Fibonacci sequence 
is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts 
with 1 and 1, and where every number thereafter is equal to the 
sum of the previous two numbers. */


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


/* Write a recursive function called reverse which accepts a string 
and returns a new string in reverse */


// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'



/* Write a recursive function isPalindrome which returns true if the string
passed to it is a palindrome otherwise return false */


// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false


/* Write a recursive function called someRecursive which accepts an array and
a callback. The function returns true if a single value in the array returns true
when passed to the callback. Otherwise it returns false */

// const isOdd = val => val % 2 !== 0 //part of fxn uncomment



// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)) // false


/* Write a recursive fxn which accepts an array of arrays
and returns a new array with all values flattened */



// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]


/* Write a recusive fxn called CapitalizeFirst. Given an array of strings,
capitalize the first letter of each string in the array */


// console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']


/* Write a recursive function called nestedEvenSum. Return all even numbers
in an object which may contain nested objects */


// var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }

//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };

//   console.log(nestedEvenSum(obj1)) // 6
//   console.log(nestedEvenSum(obj2)) // 10


/* Write a recursive fxn called capitalizeWords. Given an array of words
return a new array containing each word capitalized */

// let words = ['i', 'am', 'learning', 'recursion']



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


// console.log(stringifyNumbers(obj))


/* Write a fxn called collectStrings which accepts an object and returns
an array of all the values in the object that have a typeof string */


// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(collectStrings(obj)) // ["foo", "bar", "baz"])

//exercise 
/* Write a function called linearSearch  which accepts an array and a value, and returns the 
index at which the value exists. If the value does not exist in the array, return -1. */


  
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




// console.log(naiveSearch('aaaaab', 'aaab'))



/* BubbleSort psudocode (does a swap each time)
  1. start looping with a variable called i from the end of the
    aray towards the beginning
  2. start an inner loop with a variable called j from the beginning
    until i - 1
  3. if arr[j] > than arr[j+1], swap those two values
  4. return the sorted array
*/


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



// console.log(selectionSort([19,44,38,5,55,67,72,47,15]))


/* Insertion sort pseudocode
  1. start by picking the second element in the array
  2. compare second with the one before it and swap if necessary
  3. continue to the next element and if it is in the incorrect order
    iterate through the sorted portion to place the element in the correct place
  4. repeat until the array is sorted
*/


// console.log(insertionSort([3,44,38,5]))


// console.log(insertionSort([3,44,38,5]))


/* Pseudocode to merge Arrays
  1. Create an empty array, take a look at the smallest values in each input array
  2. While there are still values we haven't looked at...
  3. If the value in the first array is smaller than the value in the second array, 
      push the value in the first array into our results and move on to the next value in the first array
  4. If the value in the first array is larger than the value in the second array, 
      push the value in the second array into our results and move on to the next value in the second array
  5. Once we exhaust one array, push in all remaining values from the other array */

  

  // console.log(merge([5,42,86], [3,15,90,99]))
  // console.log(merge([1,10,50], [2,14,50,100]))
  // console.log(merge([], [2,14,50,100]))

  /* mergeSort pseudocode 
  1. Break up the array into halves until you have arrays that are empty or have one element
  2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until 
    you are back at the full length of the array
  3. Once the array has been merged back together, return the merged (and sorted!) array */



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



  // console.log(pivot([4,8,2,1,5,7,6,3]))
  // console.log(pivot([26,23,27,44,17,47,39,42,43,1]))
  // console.log(pivot([4,8,2,1,5,7,6,3]))

  /* Call the pivot helper on the array
  1.When the helper returns to you the updated pivot index, 
    recursively call the pivot helper on the subarray to the 
    left of that index, and the subarray to the right of that index
  2. Your base case occurs when you consider a subarray with less than 2 elements */


  

// console.log(quickSort([26,23,27,44,17,47,39,42,43,1]))


/* In order to perform a radix sort we need some helpers
first helper is to return the 1s, 10s, 100s and 1000s place and so on 
getDigit(number, place) */



// console.log(getDigit(7323, 2))

/* second helper we need to know the count of numbers 
digitCount*/


/* third helper we need to know the most digits
mostDigits(nums) - given an array of numbers, return the number of digits
in the largest numbers in the list 
digitCount*/



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


// console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))

/******************************************************************************************************** 
                                          Data structures */


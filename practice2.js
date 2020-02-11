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


  //frequency of letters
 

  //is letter of wordOneLetters in wordTwoLetters


//Multiple pointers pattern O(n^2) needs to be sorted array

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

//refactored SumZero


// console.log(refactoredSumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))
// console.log(refactoredSumZero([-4, -3, -2, -1, 0, 5, 10]))



// console.log(countUniqueValues([1,1,1,1,1,2]))
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
// console.log(countUniqueValues([-2,-1,-1,0,1]))
// console.log(countUniqueValues([]))

// **********************************************************************************************

/* sliding window technique
pattern involves creating a window which can either be an array or number from one
position to another, depending on a certain condition, window either increases or closes
and a new window is created, useful for keeping track of a subset of data in an array/string */



// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))
// console.log(maxSubarraySum([4,2,1,6], 1))
// console.log(maxSubarraySum([4,2,1,6,2], 4))
// console.log(maxSubarraySum([], 4))

//refactored



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



// console.log(search([5,6,7,8,15,20], 20))

//binary search is an example of divide and conquer


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
    
    include this print at the end 
    print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
    */



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



/*********************************************************************************************************** 
                                                  Trees
lists are linear
tree are non-linear
node has to point to another child and only has one root (top node in a tree)
leaf - has no children
edge - is the arrow
** uses of trees **
html dom
network routing
AI
folders in OS
JSON
**
** Binary Search Tree**
can have a max of two children per node
data that can be compared or sorted
every node to the left of a parent node is always less than the parent
every node to the right of a parent node is always greater than the parent
as the number of nodes doubles we only take one step whether inserting or
finding so it has O(log n) time complexity

if bst is lobsided to only one sided tree, then it's basically a linked list, and it's O(n)

inserting pseudocode
  1. Create a new node
  2. Starting at the root
    a. Check if there is a root, if not - the root now becomes that new node!
    b. If there is a root, check if the value of the new node is greater than or less than the value of the root
    c.If it is greater 
      1. Check to see if there is a node to the right
        a. If there is, move to that node and repeat these steps
        b. If there is not, add that node as the right property
    d. If it is less
        a. Check to see if there is a node to the left
        b. If there is, move to that node and repeat these steps
        c. If there is not, add that node as the left property

find pseudocode
  1. Starting at the root
    a. Check if there is a root, if not - we're done searching!
    b. If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    c. If not, check to see if the value is greater than or less than the value of the root
    d. If it is greater 
      1. Check to see if there is a node to the right
        a. If there is, move to that node and repeat these steps
        b. If there is not, we're done searching!
    e. If it is less
      1. Check to see if there is a node to the left
        a. If there is, move to that node and repeat these steps
        b. If there is not, we're done searching!
        c. return the node if found, if not return false
  2. bonus implement a contains fxn which return true/false

*/




/*********************************************************************************************************** 
                                                  Tree traversal
two main ways
1. Breadth-first
2. Depth-first

BFS
  1. Create a queue (this can be an array) and a variable to store the values of nodes visited
  2. Place the root node in the queue
  3. Loop as long as there is anything in the queue
    a. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    b. If there is a left property on the node dequeued - add it to the queue
    c. If there is a right property on the node dequeued - add it to the queue
  4. Return the variable that stores the values


DFS - Preorder
  1. Create a variable to store the values of nodes visited
  2. Store the root of the BST in a variable called current
  3. Write a helper function which accepts a node
    a. Push the value of the node to the variable that stores the values
    b. If the node has a left property, call the helper function with the left property on the node
    c. If the node has a right property, call the helper function with the right property on the node
  4. Invoke the helper function with the current variable
  5. Return the array of values

DFS - Postorder
  1. Create a variable to store the values of nodes visited
  2. Store the root of the BST in a variable called current
  3. Write a helper function which accepts a node
    a. If the node has a left property, call the helper function with the left property on the node
    b. If the node has a right property, call the helper function with the right property on the node
    c. Push the value of the node to the variable that stores the values
  4. Invoke the helper function with the current variable
  5. Return the array of values

DFS - Inorder
  1. Create a variable to store the values of nodes visited
  2. Store the root of the BST in a variable called current
  3. Write a helper function which accepts a node
    a. If the node has a left property, call the helper function with the left property on the node
    b. Push the value of the node to the variable that stores the values
    c. If the node has a right property, call the helper function with the right property on the node
  4. Invoke the helper function with the current variable
  5. Return the array of values
*/








/*********************************************************************************************************** 
                                                  Heaps 
very similar to trees but with different rules
used to implement priority queues
and used with graph traversal algorithms
to find children you take n = 2n+1 to find left child 2n+2 to find right child
to find parent you take n = (n-1)/2 floored
**Max Binary Heap**
parent nodes are always larger than child nodes
no guarantees between siblings (no implied order between siblings)
compact as possible 
left children always filled out first

**Min Binary Heap**
parent nodes are always smaller than child nodes


MaxBinaryHeap
insert pseudocode
  1. Push the value into the values property on the heap
  2 .Bubble Up:
    a.Create a variable called index which is the length of the values property - 1
    b. Create a variable called parentIndex which is the floor of (index-1)/2
    c. Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    d. Swap the value of the values element at the parentIndex with the value of the element property at the child index
    e. Set the index to be the parentIndex, and start over!

extractMax pseudocode
  1. Swap the first value in the values property with the last one
  2. Pop from the values property, so you can return the value at the end.
  3. Have the new root "sink down" to the correct spot...​
    a. Your parent index starts at 0 (the root)
    b. Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    c. Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
    d. If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
    e. The child index you swapped to now becomes the new parent index.  
    f. Keep looping and swapping until neither child is larger than the element.
    g. Return the old root!
*/


/*********************************************************************************************************** 
                                                  Priority Queue
Priority Queue
  1. Write a Min Binary Heap - lower number means higher priority
  2. Each Node has a val and a priority.  Use the priority to build the heap
  3. Enqueue method accepts a value and priority, makes a new node,
      and puts it in the right spot based off of its priority
  4. Dequeue method removes root element, returns it, and rearranges heap using priority

*/




// let ER = new PriorityQueue()
// ER.enqueue("gunshot wound", 1)
// ER.enqueue("glass in foot", 3)
// ER.enqueue("common cold", 5)
// ER.enqueue("broken arm", 2)
// ER.enqueue("high fever", 4)


/*********************************************************************************************************** 
                                                  Hash Tables
set
  1. Accepts a key and a value
  2. Hashes the key
  3. Stores the key-value pair in the hash table array via separate chaining

get
  1. Accepts a key
  2. Hashes the key
  3. Retrieves the key-value pair in the hash table
  4. If the key isn't found, returns undefined

keys
  1. Loops through the hash table array and returns an array of keys in the table
    values
  2. Loops through the hash table array and returns an array of values in the table

note: delclaring an array with new, makes empty arrays, these are undefined, so length property
cannot be used on undefined
*/


/*********************************************************************************************************** 
                                                  Graphs
graphs
nodes and connections
social networks
location/mapping
routing
file system
vertex - a node
edge - is the connection
**

Add a vertex
  1. Write a method called addVertex, which accepts a name of a vertex
  2. It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

Add an edge
  1. This function should accept two vertices, we can call them vertex1 and vertex2
  2. The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  3. The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  4. Don't worry about handling errors/invalid vertices

Removing an edge
  1. This function should accept two vertices, we'll call them vertex1 and vertex2
  2. The function should reassign the key of vertex1 to be an array that does not contain vertex2
  3. The function should reassign the key of vertex2 to be an array that does not contain vertex1
  4. Don't worry about handling errors/invalid vertices

Removing a vertex
  1. The function should accept a vertex to remove
  2. The function should loop as long as there are any other vertices in the adjacency list for that vertex
  3. Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  4. delete the key in the adjacency list for that vertex
*/

/*********************************************************************************************************** 
                                                  Graph Traversal
Peer to peer networking
web crawlers
finding 'closest'
matches/recommendations
shortest path problems
  gps navigation
  solving mazes
  AI (shortest path)
******************************
Depth first traversal (recursive)
  1. The function should accept a starting node
  2. Create a list to store the end result, to be returned at the very end
  3. Create an object to store visited vertices
  4. Create a helper function which accepts a vertex
    a. The helper function should return early if the vertex is empty
    b. The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
    c. Loop over all of the values in the adjacencyList for that vertex
    d. If any of those values have not been visited, recursively invoke the helper function with that vertex
  5. Invoke the helper function with the starting vertex
  6 .Return the result array

Depth first traversal (iterative)
  1. The function should accept a starting node
  2. Create a stack to help use keep track of vertices (use a list/array)
  3. Create a list to store the end result, to be returned at the very end
  4. Create an object to store visited vertices
  5. Add the starting vertex to the stack, and mark it visited
  6. While the stack has something in it:
    a. Pop the next vertex from the stack
    b. If that vertex hasn't been visited yet:
​      1. Mark it as visited
      2. Add it to the result list
      3. Push all of its neighbors into the stack
  7. Return the result array

Breadth first traversal 
  1. This function should accept a starting vertex
  2. Create a queue (you can use an array) and place the starting vertex in it
  3. Create an array to store the nodes visited
  4. Create an object to store nodes visited
  5. Mark the starting vertex as visited
  6. Loop as long as there is anything in the queue
  7. Remove the first vertex from the queue and push it into the array that stores nodes visited
  8. Loop over each vertex in the adjacency list for the vertex you are visiting.
    a. If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
  9. Once you have finished looping, return the array of visited nodes
*/




// let g = new Graph()
// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")

// g.addEdge("A","B")
// g.addEdge("A","C")
// g.addEdge("B","D")
// g.addEdge("C","E")
// g.addEdge("D","E")
// g.addEdge("D","F")
// g.addEdge("E","F")  


/*********************************************************************************************************** 
                                              Dijkstra's Algorithm
need to work with a weighted graph
so it will be similar to a graph, but now the value added is an object


Dijkstra's Pseudocode
  1. This function should accept a starting and ending vertex
  2. Create an object (we'll call it distances) and set each key to be every 
      vertex in the adjacency list with a value of infinity, except for the 
      starting vertex which should have a value of 0
  3. After setting a value in the distances object, add each vertex with a priority 
      of Infinity to the priority queue, except the starting vertex, which should 
      have a priority of 0 because that's where we begin
  4. Create another object called previous and set each key to be every vertex in 
      the adjacency list with a value of null
  5. Start looping as long as there is anything in the priority queue
    a. dequeue a vertex from the priority queue
    b. If that vertex is the same as the ending vertex - we are done!
    c. Otherwise loop through each value in the adjacency list at that vertex
      d. Calculate the distance to that vertex from the starting vertex
      e. if the distance is less than what is currently stored in our distances object
        f. update the distances object with new lower distance
        g. update the previous object to contain that vertex
        h. enqueue the vertex with the total distance from the start node
*/



// let wG = new WeightedGraph()

// wG.addVertex('A')
// wG.addVertex('B')
// wG.addVertex('C')
// wG.addVertex('D')
// wG.addVertex('E')
// wG.addVertex('F')

// wG.addEdge('A', 'B', 4)
// wG.addEdge('A', 'C', 2)
// wG.addEdge('B', 'E', 3)
// wG.addEdge('C', 'D', 2)
// wG.addEdge('B', 'F', 4)
// wG.addEdge('D', 'E', 3)
// wG.addEdge('D', 'F', 1)
// wG.addEdge('E', 'F', 1)


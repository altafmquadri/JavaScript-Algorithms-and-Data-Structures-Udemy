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
// cinema and iceman
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


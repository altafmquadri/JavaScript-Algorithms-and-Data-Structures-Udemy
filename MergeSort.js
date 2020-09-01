
const merge = (n, m) => {
    const results = []
    let i = 0, j = 0
    while (i + j < n.length + m.length) {
        if (n[i] < m[j]) results.push(n[i]), i++
        if (n[i] > m[j]) results.push(m[j]), j++
        if (n[i] === m[j]) results.push(n[i], m[j]), i++, j++
        if (i === n.length) results.push(m[j]), j++
        if (j === m.length) results.push(n[i]), i++
    }
    return results.filter(arr => arr !== undefined)
}


const mergeSort = (arr) => {
    //check to see that length is 1 or less
    if (arr.length <= 1) return arr
    let half = Math.floor(arr.length / 2)
    //keep dividing in half until above base case is reached
    let left = mergeSort(arr.slice(0, half))
    let right = mergeSort(arr.slice(half))
    return merge(left, right)
}


// console.log(merge([1, 5, 7], [2, 4, 6]))
// console.log(merge([1, 5, 8], []))
// console.log(mergeSort([1, 5, 7, 2, 4, 6]))
console.log(mergeSort([15, 3, 12, 5, 21, 17]))  //[3, 5, 12, 15, 17, 21]
// Problem 2: Maximum Subarray Sum (Kadane's Algorithm)
// Find the contiguous subarray (containing at least one number) which has the largest sum. Return the sum.
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: Subarray [4, -1, 2, 1] has the largest sum = 6.

function maxSubarraySum(numbs) {
    let currentSum = numbs[0]
    let maxSum = numbs[0]
    for (let index = 1; index < numbs.length; index++) {
        currentSum = Math.max(currentSum + numbs[index], numbs[index])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}
console.log(`Max sub array sums: ${maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])}`);
console.log(`============== End =============================\n`);



// Problem 3: Rotate Array
// Rotate an array nums of size n to the right by k steps.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

function reverseArray(numbs, startIndex, endIndex) {
    while(startIndex < endIndex) {
        let startValue = numbs[startIndex]
        let endValue = numbs[endIndex]
        numbs[startIndex] = endValue
        numbs[endIndex]= startValue
        startIndex++
        endIndex--
    }
    return numbs
}

function rotateArray(numbs, k) {
    let n = numbs.length
    k = k % n // To handle the case if n > n

   // Reverse the entire array
   reverseArray(numbs, 0, n-1)

   // Revert the first K element
   reverseArray(numbs, 0, k-1)

   // Reverse the remaining n-k element
   reverseArray(numbs, k, n-1)

   return numbs
}
console.log(`Rotated Array: ${rotateArray([1,2,3,4,5,6,7], 3)}`);
console.log(`============== End =============================\n`);

// Problem 3: Rotate Array using circular way
// Rotate an array nums of size n to the right by k steps.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

function rotateArrayUsingCircularLogic(numList, step) {
    let result = []
    for (let index = 0; index < numList.length; index++) {
        let position = (index + step) % numList.length
        result[position] = numList[index] 
    }
    return result
}
console.log(`Rotated Array using circular logic: ${rotateArrayUsingCircularLogic([1,2,3,4,5,6,7], 3)}`);


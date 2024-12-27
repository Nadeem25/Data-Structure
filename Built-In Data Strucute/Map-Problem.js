// Problem 1: Group Anagrams
// Given an array of strings strs, group the anagrams together.
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function groupAnagram(inputArray) {
    const map = new Map()
    for (const word of inputArray) {
        // Sort the word in acsending order
        const sortedWord = word.split('').sort().join('')
        if (!map.has(sortedWord)) {
            map.set(sortedWord, [])
        }
        map.get(sortedWord).push(word)
    }
    return Array.from(map.values())

}
console.log(`Group Anagrams`, groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));


// Problem 1: Find the Most Frequent Element
// Given an array, find the most frequent element.
// Input: [1, 3, 2, 1, 4, 1]
// Output: 1

function findFrequentCount(inputArray) {
    let maxCount = 1;
    let frequency = new Map()
    let mostFrequentElement = 0
    for (const element of inputArray) {
        // const count = frequency.has(element) ? frequency.get(element) + 1: 1
        // frequency.set(element, count)
        frequency.set(element, (frequency.get(element) || 0) + 1)
        if (frequency.get(element) > maxCount) {
            maxCount = frequency.get(element);
            mostFrequentElement = element
        }
    }
    return mostFrequentElement;
}
console.log(`Most Frequent elemtn in the array is: ${findFrequentCount([1, 2, 3, 1])}`);


// Problem 2: Two Sum
// Given an array of integers, return the two numbers that add up to a given target. Use a map for efficient lookup.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

function findTwoSum(inputArray, target) {
    const map = new Map()
    for (let index = 0; index < inputArray.length; index++) {
        const remaining = target - inputArray[index]
        if (inputArray[index] === target) {
            return [inputArray[index]]
        }
        if (map.has(remaining)) {
            return [remaining, inputArray[index]]
        }
        map.set(inputArray[index], index)
    }

}
const target = 9
console.log(`Two element ${findTwoSum([-2, 7, 11, 15], 7)} which sum is ${target} `);

// Problem 3: Three Sum
// Given an array of integers, return the three numbers that add up to a given target. Use a map for efficient lookup.
// Input: nums = [2, 7, 11, 15, 30, 10], target = 23
// Output: [2,11,10]

function findThreeSum(numbers, target) {
    for (let index = 0; index <= numbers.length - 3; index++) {
        const map = new Map()
        const currentTarget = target - numbers[index]
        for (let j = index + 1; j < numbers.length; j++) {
            const remaining = currentTarget - numbers[j]
            if(map.has(remaining)) {
                return [numbers[index], remaining, numbers[j]]
            }
            map.set(numbers[j], j)
        }
    }
    return []
}
console.log(`Sum of three number whihc target is`, findThreeSum([2, 7, 21, 15, 30, 10], 33));



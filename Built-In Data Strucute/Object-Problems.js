// Problem 3: Merge Two Objects
// Given two objects, merge them. If a property exists in both, sum the values.
// Input:
// Object1: {a: 1, b: 2, c: 3}
// Object2: {b: 3, c: 4, d: 5}
// Output: {a: 1, b: 5, c: 7, d: 5}

function mergeTwoObjects(obj1, obj2) {
    const result = { ...obj1 }
    for (const key of Object.keys(obj2)) {
        result[key] = result[key] ? result[key] + obj2[key] : obj2[key]
    }
    return result
}

console.log(`Result of two mreged object: ${JSON.stringify(mergeTwoObjects({ a: 1, b: 2, c: 3 }, { b: 3, c: 4, d: 5 }))}`);
console.log(`===========================================`);

// Problem 2: Find the First Non-Repeating Character
// Find the first non-repeating character in a string. Return its index. If it doesn't exist, return -1.
// Input: "leetcode"
// Output: 0
// Input: "loveleetcode"
// Output: v at position 2

function findFirstNonRepeatingChar(inputStr) {
    let charCount = {}
    for (const char of inputStr) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1
    }
    for (let index = 0; index < inputStr.length; index++) {
        if(charCount[inputStr[index]] === 1) {
            return inputStr[index]
        }
    }
    return null
} 
const inputStr = "leetcode"
console.log(`First non repeating char is : ${findFirstNonRepeatingChar(inputStr)}`);




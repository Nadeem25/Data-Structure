// Problem 1: Group Anagrams
// Given an array of strings strs, group the anagrams together.
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function groupAnagram(inputArray) {
    const map = new Map()
    for (const word of inputArray) {
        // Sort the word in acsending order
        const sortedWord = word.split('').sort().join('')
        if(!map.has(sortedWord)) {
            map.set(sortedWord, [])
        }
        map.get(sortedWord).push(word)
    }
    return Array.from(map.values())
    
}
console.log(`Group Anagrams`,groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));



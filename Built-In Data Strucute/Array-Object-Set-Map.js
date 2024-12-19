// ####################### Array #################################
// Array Big-O Time Complexity
// 1. Insert or remove from end  - O(1)
// 2. Insert or remove from the beginning - O(n) Linear: Because after inserting or deleting at beginning each index of element get change
// 3. Access - O(1)
// 4. Search - O(n)
// 5. Push/Pop - O(1)
// 6. shift/unshift/concat/slice/splice - O(n)
// forEach / map / filter / reduce - O(n)


// ####################### Object #################################

// Object: It is an onorder collection of key-value pair. The key must be either key or symbol data type whereas value can be any data type.
// Array Big-O Time Complexity
// Insert / Remove / Access - O(1)
// Search / Object.keys / Object.values / Object.entries - O(n)


// ####################### Set #################################
// It is an data structure that hold collection of unique value.
// Set can contain mix of different data types.
// Set are dynamically sized. We dont need to declare the size of set before creating it.
// Set does not maintain an insertion order.
// Set are iterable.

const set = new Set([1,2,3])
set.add(4)
set.delete(3)
set.has(2)
console.log(`Set Size: ${set.size}`);

// ####################### Map #################################
// It is an unorder collection of key-value pair. Both key and value can be any data type
// To retrive value, we can use corresponding key
// Map are iterable.

const map = new Map([['a',1], ['b', 2]])
map.set('C', 3)
//map.delete('C')
map.has('a')
for (const [key, value] of map) {
    console.log(`Map key and value: ${key} and ${value}`);
    
}

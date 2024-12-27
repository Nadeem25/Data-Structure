class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkListWithTail {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size;
    }

    print() {
        let listVal = ' '
        let currentNode = this.head
        while(currentNode) {
            listVal = listVal + `${currentNode.value}` + ' '
            currentNode = currentNode.next
        }
        console.log(`LinkList value:`, listVal);
    }

    // Time Complexity: O(1)
    prepend(value) {
        const node = new Node(value)
        if(!this.isEmpty()) {
            node.next = this.head
            this.head = node
        } else {
            this.head = node
            this.tail = this.head
        }
        this.size++
    }

    // Time Complexity: O(1)
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node;
            this.tail = this.tail.next
        }
        this.size++
    }

    removeFromFront() {
        let removedNode
        if(!this.isEmpty()) {
            removedNode = this.head
            this.head = this.head.next
        }
        this.size--
        return removedNode.value
    }

    removeFromEnd() {
        let removedNode
        if(this.isEmpty()) {
            return null
        } else if(this.size == 1) {
            removedNode = this.head
            this.head = this.tail = null
        } else {
            let prevNode = this.head
            while(prevNode.next !== this.tail) {
                prevNode = prevNode.next
            }
            removedNode = this.tail
            prevNode.next = null
            this.tail = prevNode
        }
        return removedNode.value
        this.size--
    }
}

const linkList = new LinkListWithTail()
console.log(`------ Prepend-----------------`);
linkList.prepend(30)
linkList.prepend(20)
linkList.prepend(10)
linkList.print()

console.log(`------ Append-----------------`);
linkList.append(40)
linkList.print()

console.log(`------ Remove From Front-----------------`);
console.log(`Removed from front value: ${linkList.removeFromFront()}`);
linkList.print()

console.log(`------ Remove From End-----------------`);
console.log(`Removed from end value: ${linkList.removeFromEnd()}`);

linkList.print()




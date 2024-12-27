class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size;
    }

    // Time Complexity: O(1)
    prepend(value) {
        const node = new Node(value)
        if(!this.isEmpty()) {
            node.next = this.head
        }
        this.head = node
        this.size++
    }

    // Time Complexity: O(n)
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prevNode = this.head
            while(prevNode.next !== null) {
                prevNode = prevNode.next
            }
            prevNode.next = node
        }
        this.size++
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {
            console.log(`Cannot insert`);
        }
        if(index === 0) {
            this.prepend(value)
        }
        else if(index === this.size+1) {
            this.append(value)
        } else {
            const node = new Node(value);
            let prevNode = this.head;
            for (let i = 0; i < index-1; i++) {
                prevNode = prevNode.next
            }
            node.next = prevNode.next
            prevNode.next = node
            this.size++
        }
    }

    remove(index) {
        let removeNode;
        if(index < 0 || index >= this.size) {
            return null
        }
        if(index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prevNode = this.head
            for (let i = 0; i < index-1; i++) {
                prevNode = prevNode.next
            }
            removeNode = prevNode.next;
            prevNode.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removedByValue(value) {
        let removedNode
        if(this.isEmpty()) {
            return null
        }
        if(value === this.head.value) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prevNode = this.head
            while(prevNode.next && prevNode.next.value !== value) {
                prevNode = prevNode.next
            }
            removedNode = prevNode.next;
            prevNode.next = removedNode.next;

        }
        this.size--
        return removedNode.value
    }

    reverse() {
        if(this.isEmpty()) {
            console.log(`List is empty`);
        } else {
            let currentNode = this.head
            let prevNode = null
            while(currentNode) {
                let nextNode = currentNode.next
                currentNode.next = prevNode;
                prevNode = currentNode;
                currentNode = nextNode;
            }
            this.head = prevNode
        }
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

}

const linkList = new LinkList()
console.log(`------ Prepend-----------------`);
linkList.prepend(10)
linkList.prepend(20)
linkList.prepend(30)
linkList.print()

console.log(`------ Append-------------------`);
linkList.append(40)
linkList.print()


console.log(`------ Insert at Index-------------------`);
linkList.insert(60, 3)
linkList.print()

console.log(`------ Remove at Index-------------------`);
console.log(`Removed value: ${linkList.remove(2)}`);
linkList.print()

console.log(`------ Remove By Vaue-------------------`);
console.log(`Removed value: ${linkList.removedByValue(60)}`);
linkList.print()

console.log(`------ Reverse Node -------------------`);
linkList.reverse()
linkList.print()

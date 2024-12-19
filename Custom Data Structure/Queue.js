// It is a sequencial collection of elements that follows the principle FIFO (First In First Out)
// Usage: 1. Printers 2. Task scheduling 3. Callback Queue in Javascript Runtime

class QueueWithArray {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        if(!this.items.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    print() {
        console.log(`Queue Elements: ${this.items.toString()}`);
        
    }
}

console.log(`==== Start of Queue with Array ===`);
const queue = new QueueWithArray()
queue.enqueue(10)
queue.enqueue(40)
queue.enqueue(60)
queue.print()

console.log(`Removed Element:${queue.dequeue()}`);
queue.print()
console.log(`==== End of Queue with Array ===`);



class QueueWithObject {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }

    dequeue() {
        if(!this.isEmpty()) {
            const item = this.items[this.front]
            delete this.items[this.front]
            this.front++
            return item
        } else {
            console.log(`Queue is empty`); 
        }
    }

    isEmpty() {
        return this.items.rear - this.items.front === 0
    }

    peek() {
        if(!this.items.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        console.log(this.items);
        
    }
}
console.log(`==== Start of Queue with Object ===`);
const queueWithObj = new QueueWithArray()
queueWithObj.enqueue(10)
queueWithObj.enqueue(40)
queueWithObj.enqueue(60)
queueWithObj.print()

console.log(`Removed Element:${queueWithObj.dequeue()}`);
queueWithObj.print()
console.log(`==== End of Queue with Object ===`);


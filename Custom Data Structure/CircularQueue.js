// The size of the queue is fixed and single block of memeory is used as if the first element is connected to the last element
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.front = -1
        this.rear = -1
        this.currentLength = 0
    }

    isFull() {
        return this.currentLength === this.capacity
    }
    isEmpty() {
        return this.currentLength === 0
    }
    peek() {
        if(!this.items.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }
    enqueue(element) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength++
            if(this.front === -1) {
                this.front = this.rear
            }
        }
    }
    dequeue() {
        if(!this.isEmpty()) {
            const removedItem = this.items[this.front]
            this.items[this.front] = null
            this.front =  (this.front + 1) % this.capacity
            this.currentLength--
            if(this.isEmpty()) {
                this.front = this.rear = -1
            }
        }
    }
    printQueueData() {
        if(this.isEmpty()) {
            console.log(`Circular Queue is empty:`);
        } else {
            let str = ''
            let index
            for (index = this.front; index !== this.rear; index = (index+1) % this.capacity) {
                str = str + this.items[index] + " "
            }
            str = str + this.items[index]
            return str
        }
       
    }
}

const circularQueue = new CircularQueue(8)

circularQueue.enqueue(10)
circularQueue.enqueue(20)
circularQueue.enqueue(30)
circularQueue.enqueue(400)
console.log(`All circular queue elements after enqueue: ${circularQueue.printQueueData()}`);

circularQueue.dequeue()
circularQueue.dequeue()
console.log(`All circular queue elements after dequeue: ${circularQueue.printQueueData()}`);

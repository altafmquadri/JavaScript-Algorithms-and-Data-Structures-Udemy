
class Node {
    constructor(val, priority){
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    enqueue = (val, priority) => {
        let newNode = new Node(val, priority)
        this.values.push(newNode)

        const bubbleUp = (arr) => {
            let currentIdx = arr.length - 1 
            let parentIdx = Math.floor((currentIdx - 1)/2)

            while (parentIdx >= 0 && arr[currentIdx].priority < arr[parentIdx].priority) {
                this.swap(arr, currentIdx, parentIdx)
                currentIdx = parentIdx
                parentIdx = Math.floor((currentIdx - 1)/2)
            }
        }
        bubbleUp(this.values)
        return this.values
    }

    dequeue(){
        if (!this.values.length) return null
        this.swap(this.values, 0, this.values.length - 1)
        let min = this.values.pop()

        const sinkDown = (arr) => {
            let parentIdx = 0
            let firstChildIdx, secondChildIdx
            
            while (true) {
                let swap = null
                firstChildIdx = 2 * parentIdx + 1
                secondChildIdx = 2 * parentIdx + 2

                if (firstChildIdx < arr.length) {
                    if (arr[parentIdx].priority > arr[firstChildIdx].priority) {
                        swap = firstChildIdx
                    }
                } 
                if (secondChildIdx < arr.length) {
                    if (
                        (swap === null && arr[parentIdx].priority > arr[secondChildIdx].priority) ||
                        (swap !== null && arr[secondChildIdx].priority < arr[firstChildIdx].priority)
                        ) {
                            swap = secondChildIdx
                        }
                } 
                if (swap === null) break
                this.swap(arr, parentIdx, swap)
                parentIdx = swap
            }
            
        }
        sinkDown(this.values)
        return min
    }
}

// const mbh = new Heap()

// mbh.insert(41)
// mbh.insert(39)
// mbh.insert(33)
// mbh.insert(18)
// mbh.insert(27)
// mbh.insert(12)

// mbh.insert(81)
// mbh.insert(77)
// mbh.insert(13)
// mbh.insert(55)
// mbh.insert(45)
// mbh.insert(10)
// mbh.insert(8)


let ER = new PriorityQueue()
ER.enqueue("gunshot wound", 1)
ER.enqueue("glass in foot", 3)
ER.enqueue("common cold", 5)
ER.enqueue("broken arm", 2)
ER.enqueue("high fever", 4)
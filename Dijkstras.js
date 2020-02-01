
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


let ER = new PriorityQueue()
ER.enqueue("gunshot wound", 1)
ER.enqueue("glass in foot", 3)
ER.enqueue("common cold", 5)
ER.enqueue("broken arm", 2)
ER.enqueue("high fever", 4)


/*********************************************************************************************************** 
                                              Dijkstra's Algorithm
need to work with a weighted graph
so it will be similar to a graph, but now the value added is an object


Dijkstra's Pseudocode
  1. This function should accept a starting and ending vertex
  2. Create an object (we'll call it distances) and set each key to be every 
      vertex in the adjacency list with a value of infinity, except for the 
      starting vertex which should have a value of 0
  3. After setting a value in the distances object, add each vertex with a priority 
      of Infinity to the priority queue, except the starting vertex, which should 
      have a priority of 0 because that's where we begin
  4. Create another object called previous and set each key to be every vertex in 
      the adjacency list with a value of null
  5. Start looping as long as there is anything in the priority queue
    a. dequeue a vertex from the priority queue
    b. If that vertex is the same as the ending vertex - we are done!
    c. Otherwise loop through each value in the adjacency list at that vertex
      d. Calculate the distance to that vertex from the starting vertex
      e. if the distance is less than what is currently stored in our distances object
        f. update the distances object with new lower distance
        g. update the previous object to contain that vertex
        h. enqueue the vertex with the total distance from the start node
*/

class WeightedGraph{
    constructor(){
      this.adjacencyList = {}
    }
    addVertex = (vertex) => {
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge = (vertex1, vertex2, weight) => {
      this.adjacencyList[vertex1].push({node: vertex2, weight})
      this.adjacencyList[vertex2].push({node: vertex1, weight})
    }
    shortestPath(start, end) {
      let distances = {}
      let previous = {}
      let PQ = new PriorityQueue()
      let removed, nextNode, edge
      let path = []
  
      for (let key in this.adjacencyList) {
        distances[key] = Infinity
        previous[key] = null
        PQ.enqueue(key, distances[key])
      }
      distances[start] = 0
      
      while (PQ.values.length) {
        removed = PQ.dequeue().val
        // if (removed === end) return distances[removed]
        if (removed === end) {
          while (removed) {
            path.push(removed)
            removed = previous[removed]
            // console.log(removed)
          }
          break
        }
        // console.log(previous)
        this.adjacencyList[removed].forEach(val => {
          nextNode = val.node
          edge = val.weight
          if (distances[nextNode] > edge + distances[removed]) {
            distances[nextNode] = edge + distances[removed]
            previous[nextNode] = removed
            PQ.enqueue(nextNode, distances[nextNode])
          }
        })
      }
      return path.reverse()
    }
  }//end weightedGraph
  
  
  
  let wG = new WeightedGraph()
  
  wG.addVertex('A')
  wG.addVertex('B')
  wG.addVertex('C')
  wG.addVertex('D')
  wG.addVertex('E')
  wG.addVertex('F')
  
  wG.addEdge('A', 'B', 4)
  wG.addEdge('A', 'C', 2)
  wG.addEdge('B', 'E', 3)
  wG.addEdge('C', 'D', 2)
  wG.addEdge('B', 'F', 4)
  wG.addEdge('D', 'E', 3)
  wG.addEdge('D', 'F', 1)
  wG.addEdge('E', 'F', 1)

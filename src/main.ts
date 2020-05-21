import { MinHeap } from './articles/11.Heap/Heap'

const minHeap = new MinHeap()

minHeap.insert(1)
minHeap.insert(5)
minHeap.insert(0)
minHeap.insert(10)
minHeap.insert(999)
minHeap.insert(-19)
minHeap.insert(34)
minHeap.insert(1)

console.log(minHeap.removeMin())
console.log(minHeap.removeMin())
console.log(minHeap.removeMin())
console.log(minHeap.removeMin())
console.log(minHeap.removeMin())
console.log(minHeap.removeMin())
console.log(minHeap.removeMin())
console.log(minHeap.removeMin())
console.log(minHeap.removeMin())
console.log(minHeap.removeMin())

window.a = minHeap

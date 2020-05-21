import { MinHeap } from './Heap'

describe('二叉堆和堆排序', () => {
  it('MinHeap', () => {
    const minHeap = new MinHeap()
    minHeap.insert(2)
    minHeap.insert(1)
    minHeap.insert(3)
    minHeap.insert(0)
    minHeap.insert(-1)
    minHeap.insert(9)
    minHeap.insert(1)
    expect(minHeap.removeMin()).toBe(-1)
    expect(minHeap.removeMin()).toBe(0)
    expect(minHeap.removeMin()).toBe(1)
    expect(minHeap.removeMin()).toBe(1)
    expect(minHeap.removeMin()).toBe(2)
    expect(minHeap.removeMin()).toBe(3)
    expect(minHeap.removeMin()).toBe(9)
    expect(minHeap.removeMin()).toBe(undefined)
  })
})

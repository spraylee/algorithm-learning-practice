import { defaultCompare, Compare } from './Compare'

export class MinHeap<T> {
  compareFn: typeof defaultCompare
  heap: T[] = []
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
  }
  getParentIndex(index: number) {
    const parentIndex = Math.floor((index - 1) / 2)
    return parentIndex < 0 ? undefined : parentIndex
  }
  getLeftIndex(index: number) {
    const leftIndex = index * 2 + 1
    return leftIndex >= this.size() ? undefined : leftIndex
  }
  getRightIndex(index: number) {
    const rightIndex = index * 2 + 2
    return rightIndex >= this.size() ? undefined : rightIndex
  }
  insert(item: T) {
    this.heap.push(item)
    let currentIndex = this.heap.length - 1
    let parentIndex = this.getParentIndex(currentIndex)
    while (
      parentIndex !== undefined &&
      this.isBiggerThanByIndex(parentIndex, currentIndex)
    ) {
      this.swap(parentIndex, currentIndex)
      currentIndex = parentIndex
      parentIndex = this.getParentIndex(parentIndex)
    }
  }
  removeMin(): T | undefined {
    if (!this.size()) return undefined
    const root = this.heap[0]
    if (this.size() > 1) {
      this.heap[0] = this.heap.pop()
      this.down(0)
    } else {
      this.heap = []
    }
    return root
  }
  getMin(): T | undefined {
    return this.heap[0]
  }
  down(index: number) {
    let leftIndex = this.getLeftIndex(index)
    let rightIndex = this.getRightIndex(index)
    let childIndexList = [leftIndex, rightIndex].filter((i) => i !== undefined)
    if (!childIndexList.length) return
    let minChildIndex =
      childIndexList.length === 2 &&
      this.isBiggerThanByIndex(childIndexList[0], childIndexList[1])
        ? childIndexList[1]
        : childIndexList[0]
    if (this.isBiggerThanByIndex(index, minChildIndex)) {
      this.swap(index, minChildIndex)
      this.down(minChildIndex)
    }
  }
  swap(a: number, b: number) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
  size() {
    return this.heap.length
  }
  isBiggerThanByIndex(a: number, b: number): boolean {
    return this.compareFn(this.heap[a], this.heap[b]) === Compare.BIGGER
  }
  toString() {
    return this.heap.join(',')
  }
}

import { Node } from './Node'

/**
 * 链表
 */
export class LinkedList<T> {
  count = 0
  head: null | Node = null
  equalsFn: typeof defaultEquals
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn
  }
  push(item: T) {
    if (this.isEmpty()) {
      this.head = new Node(item)
    } else {
      this.getNodeAt(this.count - 1).next = new Node(item)
    }
    this.count++
  }
  insert(item: T, index: number): boolean {
    if (index < 0 || index > this.count) return false
    const node = new Node(item)
    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      const previous = this.getNodeAt(index - 1)
      const current = previous.next
      previous.next = node
      node.next = current
    }
    this.count++
    return true
  }
  getNodeAt(index: number): Node | null {
    if (index < 0 || index >= this.count) return null
    let current = this.head
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next
    }
    return current
  }
  remove(item: T): boolean {
    const index = this.indexOf(item)
    return this.removeAt(index)
  }
  indexOf(item: T): number {
    let current = this.head
    for (let i = 0; i <= this.count - 1; i++) {
      if (this.equalsFn(current.value, item)) return i
      current = current.next
    }
    return -1
  }
  removeAt(index: number): boolean {
    if (index < 0 || index >= this.count) return false
    if (index === 0) {
      this.head = this.head.next
    } else {
      const previous = this.getNodeAt(index - 1)
      previous.next = previous.next.next
    }
    this.count--
    return true
  }
  isEmpty(): boolean {
    return this.count === 0
  }
  size(): number {
    return this.count
  }
  toString(): string {
    if (this.isEmpty()) return ''
    let result = `${this.head.value}`
    let current = this.head.next
    for (let i = 0; i < this.count - 1; i++) {
      result = `${result},${current.value}`
      current = current.next
    }
    return result
  }
}

export function defaultEquals(a: any, b: any) {
  return a === b
}

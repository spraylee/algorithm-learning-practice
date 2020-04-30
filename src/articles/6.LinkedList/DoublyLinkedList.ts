import { LinkedList, LinkedListType, defaultEquals } from './LinkedList'
import { DoublyNode } from './Node'

export class DoublyLinkedList<T> extends LinkedList<T>
  implements LinkedListType<T, DoublyNode> {
  head: DoublyNode | null = null
  tail: null | DoublyNode = null
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  getNodeAt(index: number): DoublyNode | null {
    if (index < 0 || index >= this.count) return null
    let current = this.head
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next
    }
    return current
  }
  push(item: T) {
    this.insert(item, this.count)
  }
  insert(item: T, index: number): boolean {
    if (index < 0 || index > this.count) return false
    const node = new DoublyNode(item)
    if (index === 0) {
      if (this.isEmpty()) {
        this.head = node
        this.tail = node
      } else {
        let temp = this.head
        node.next = temp
        this.head = node
      }
    } else if (index === this.count) {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    } else {
      const pre = this.getNodeAt(index - 1)
      node.next = pre.next
      node.prev = pre
      pre.next = node
      node.next.prev = node
    }
    this.count++
    return true
  }
  removeAt(index: number): boolean {
    if (index < 0 || index > this.count) return false
    if (index === 0) {
      this.head = this.head.next
      if (this.count === 1) {
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else if (index === this.count - 1) {
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      const current = this.getNodeAt(index - 1)
      current.next = current.next.next
      current.next.prev = current
    }
    this.count--
    return true
  }
  remove(item: T) {
    const index = this.indexOf(item)
    return this.removeAt(index)
  }
}

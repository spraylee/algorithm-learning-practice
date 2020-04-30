import { LinkedList, LinkedListType, defaultEquals } from './LinkedList'
import { Node } from './Node'

export class CircularLinkedList<T> extends LinkedList<T>
  implements LinkedListType<T> {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }
  getNodeAt(index: number): Node | null {
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
    const node = new Node(item)
    if (index === 0) {
      if (this.isEmpty()) {
        this.head = node
        node.next = node
      } else {
        let last = this.getNodeAt(this.count - 1)
        let temp = this.head
        node.next = temp
        this.head = node
        last.next = node
      }
    } else if (index === this.count) {
      const temp = this.getNodeAt(this.count - 1)
      temp.next = node
      node.next = this.head
    } else {
      const temp = this.getNodeAt(index - 1)
      node.next = temp.next
      temp.next = node
    }
    this.count++
    return true
  }
  removeAt(index: number): boolean {
    if (index < 0 || index > this.count) return false
    if (index === 0) {
      if (this.count === 1) {
        this.head = null
      } else {
        this.head = this.head.next
      }
    } else {
      const temp = this.getNodeAt(index - 1)
      temp.next = temp.next.next
    }
    this.count--
    return true
  }
  remove(item: T) {
    const index = this.indexOf(item)
    return this.removeAt(index)
  }
}

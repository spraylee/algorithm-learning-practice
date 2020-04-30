export class Node<T = any> {
  value: T
  next: null | Node
  constructor(value: T) {
    this.value = value
  }
}

export class DoublyNode<T = any> extends Node {
  prev: null | DoublyNode
  next: null | DoublyNode
  constructor(value: T) {
    super(value)
  }
}

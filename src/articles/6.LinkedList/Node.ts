export class Node<T = any> {
  value: T
  next: null | Node
  constructor(value: T) {
    this.value = value
  }
}

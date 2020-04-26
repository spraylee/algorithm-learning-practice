/**
 * 队列
 */
export class Queue<T> {
  #items: {
    [key: number]: T
  }
  #max: number
  #min: number
  constructor() {
    this.#items = {}
    this.#max = 0
    this.#min = 0
  }
  push(item: T) {
    this.#max++
    this.#items[this.#max] = item
  }
  pop() {
    if (this.isEmpty()) return undefined
    this.#min++
    const result = this.#items[this.#min]
    delete this.#items[this.#min]
    return result
  }
  peek() {
    if (this.isEmpty()) return undefined
    return this.#items[this.#min + 1]
  }
  clear() {
    this.#items = {}
    this.#max = 0
    this.#min = 0
  }
  size() {
    return this.#max - this.#min
  }
  isEmpty() {
    return this.#max === this.#min
  }
}

/**
 * 双向队列
 */
export class DeQue<T> {
  #items: {
    [key: number]: T
  }
  #max: number
  #min: number
  constructor() {
    this.#items = {}
    this.#max = 0
    this.#min = 0
  }
  addBack(item: T) {
    this.#max++
    this.#items[this.#max] = item
  }
  addFront(item: T) {
    this.#items[this.#min] = item
    this.#min--
  }
  removeBack() {
    if (this.isEmpty()) return undefined
    const target = this.#items[this.#max]
    delete this.#items[this.#max]
    this.#max--
    return target
  }
  removeFront() {
    if (this.isEmpty()) return undefined
    const target = this.#items[this.#min + 1]
    delete this.#items[this.#min + 1]
    this.#min++
    return target
  }
  clear() {
    this.#items = {}
    this.#max = 0
    this.#min = 0
  }
  size() {
    return this.#max - this.#min
  }
  isEmpty() {
    return this.#max === this.#min
  }
  toString() {
    let result = []
    if (this.isEmpty()) return result
    let start = this.#min
    while (start < this.#max) {
      start++
      result.push(this.#items[start])
    }
    return result.join(',')
  }
}

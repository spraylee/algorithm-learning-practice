/**
 * 栈（内部用私有属性（#count,#items）实现，不会暴露额外的属性）
 */
export class Stack<T> {
  #items: {
    [key: number]: T
  }
  #count: number
  constructor() {
    this.#items = {}
    this.#count = 0
  }
  push(item: T) {
    this.#count++
    this.#items[this.#count] = item
  }
  pop() {
    if (this.isEmpty()) return undefined
    const result = this.#items[this.#count]
    delete this.#items[this.#count]
    this.#count--
    return result
  }
  peek() {
    if (this.isEmpty()) return undefined
    return this.#items[this.#count]
  }
  clear() {
    this.#items = {}
    this.#count = 0
  }
  size() {
    return this.#count
  }
  isEmpty() {
    return this.#count === 0
  }
}

const weakMap_items = new WeakMap()
const weakMap_count = new WeakMap()

/**
 * 栈（内部用weakMap实现，不会暴露额外的属性）
 */
export class StackByWeakMap<T> {
  constructor() {
    weakMap_items.set(this, {})
    weakMap_count.set(this, 0)
  }
  push(item: T) {
    const count = weakMap_count.get(this)
    const items = weakMap_items.get(this)
    weakMap_count.set(this, count + 1)
    items[count + 1] = item
  }
  pop() {
    const count = weakMap_count.get(this)
    const items = weakMap_items.get(this)
    const result = items[count]
    delete items[count]
    weakMap_count.set(this, count - 1)
    return result
  }
  peek() {
    if (this.isEmpty()) return undefined
    const count = weakMap_count.get(this)
    const items = weakMap_items.get(this)
    return items[count]
  }
  clear() {
    weakMap_count.set(this, 0)
    weakMap_items.set(this, {})
  }
  size() {
    return weakMap_count.get(this)
  }
  isEmpty() {
    return weakMap_count.get(this) === 0
  }
}

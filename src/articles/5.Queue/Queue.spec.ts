import { Queue, DeQue } from './Queue'

describe('Queue 核心', () => {
  it('Queue 实现', () => {
    const queue = new Queue()
    expect(queue.size()).toBe(0)
    queue.push(111)
    queue.push(222)
    queue.push(333)
    expect(queue.size()).toBe(3)
    expect(queue.peek()).toBe(111)
    expect(queue.pop()).toBe(111)
    expect(queue.pop()).toBe(222)
    expect(queue.size()).toBe(1)
    queue.clear()
    expect(queue.size()).toBe(0)
  })
  it('双向队列 DeQue 实现', () => {
    const queue = new DeQue<number>()
    expect(queue.size()).toBe(0)
    queue.addBack(5)
    queue.addBack(4)
    queue.addBack(6)
    queue.addFront(1)
    expect(queue.toString()).toBe('1,5,4,6')
    expect(queue.size()).toBe(4)
    expect(queue.removeBack()).toBe(6)
    expect(queue.removeFront()).toBe(1)
    expect(queue.size()).toBe(2)
    queue.clear()
    expect(queue.size()).toBe(0)
    expect(queue.isEmpty()).toBeTruthy
  })
})

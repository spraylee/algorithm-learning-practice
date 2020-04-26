import { Queue, DeQue } from './Queue'
import { expect } from 'chai'

describe('Queue 核心', () => {
  it('Queue 实现', () => {
    const queue = new Queue()
    expect(queue.size()).to.be.equal(0)
    queue.push(111)
    queue.push(222)
    queue.push(333)
    expect(queue.size()).to.be.equal(3)
    expect(queue.peek()).to.be.eq(111)
    expect(queue.pop()).to.be.eq(111)
    expect(queue.pop()).to.be.eq(222)
    expect(queue.size()).to.be.eq(1)
    queue.clear()
    expect(queue.size()).to.be.eq(0)
  })
  it('双向队列 DeQue 实现', () => {
    const queue = new DeQue<number>()
    expect(queue.size()).eq(0)
    queue.addBack(5)
    queue.addBack(4)
    queue.addBack(6)
    queue.addFront(1)
    expect(queue.toString()).eq('1,5,4,6')
    expect(queue.size()).eq(4)
    expect(queue.removeBack()).eq(6)
    expect(queue.removeFront()).eq(1)
    expect(queue.size()).eq(2)
    queue.clear()
    expect(queue.size()).eq(0)
    expect(queue.isEmpty()).is.true
  })
})

import { Stack, StackByWeakMap } from './Stack'
import { expect } from 'chai'

describe('Stack Test', function () {
  describe('#class', function () {
    it('基本的 stack 逻辑', function () {
      const stack = new Stack()
      expect(stack.size()).to.be.equal(0)
      stack.push(111)
      stack.push(222)
      stack.push(333)
      expect(stack.size()).to.be.equal(3)
      expect(stack.peek()).to.be.eq(333)
      expect(stack.pop()).to.be.eq(333)
      expect(stack.pop()).to.be.eq(222)
      expect(stack.size()).to.be.eq(1)
      stack.clear()
      expect(stack.size()).to.be.eq(0)
    })
    it('基于 WeakMap 的 stack 逻辑', function () {
      const stack = new StackByWeakMap()
      expect(stack.size()).to.be.equal(0)
      stack.push(111)
      stack.push(222)
      stack.push(333)
      expect(stack.size()).to.be.equal(3)
      expect(stack.peek()).to.be.eq(333)
      expect(stack.pop()).to.be.eq(333)
      expect(stack.pop()).to.be.eq(222)
      expect(stack.size()).to.be.eq(1)
      stack.clear()
      expect(stack.size()).to.be.eq(0)
    })
  })
})

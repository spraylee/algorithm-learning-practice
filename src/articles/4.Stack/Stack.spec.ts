import { Stack, StackByWeakMap } from './Stack'

describe('Stack Test', function () {
  describe('#class', function () {
    it('基本的 stack 逻辑', function () {
      const stack = new Stack()
      expect(stack.size()).toBe(0)
      stack.push(111)
      stack.push(222)
      stack.push(333)
      expect(stack.size()).toBe(3)
      expect(stack.peek()).toBe(333)
      expect(stack.pop()).toBe(333)
      expect(stack.pop()).toBe(222)
      expect(stack.size()).toBe(1)
      stack.clear()
      expect(stack.size()).toBe(0)
    })
    it('基于 WeakMap 的 stack 逻辑', function () {
      const stack = new StackByWeakMap()
      expect(stack.size()).toBe(0)
      stack.push(111)
      stack.push(222)
      stack.push(333)
      expect(stack.size()).toBe(3)
      expect(stack.peek()).toBe(333)
      expect(stack.pop()).toBe(333)
      expect(stack.pop()).toBe(222)
      expect(stack.size()).toBe(1)
      stack.clear()
      expect(stack.size()).toBe(0)
    })
  })
})

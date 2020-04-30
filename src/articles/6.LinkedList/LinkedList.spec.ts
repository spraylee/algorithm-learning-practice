import { LinkedList } from './LinkedList'

describe('实现链表', () => {
  it('基础链表', () => {
    const linkedList = new LinkedList()
    expect(linkedList.count).toBe(0)
    expect(linkedList.isEmpty()).toBe(true)
    expect(linkedList.head).toBe(null)
    expect(linkedList.size()).toBe(0)

    linkedList.push(11)
    linkedList.push(22)
    linkedList.push(33)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.indexOf(11)).toBe(0)
    expect(linkedList.indexOf(22)).toBe(1)
    expect(linkedList.indexOf(33)).toBe(2)
    expect(linkedList.getNodeAt(2).value).toBe(33)
    expect(linkedList.toString()).toBe('11,22,33')
    linkedList.remove(22)
    expect(linkedList.toString()).toBe('11,33')
    linkedList.removeAt(1)
    expect(linkedList.toString()).toBe('11')
    linkedList.insert(55, 1)
    linkedList.insert(66, 0)
    expect(linkedList.toString()).toBe('66,11,55')
  })
})

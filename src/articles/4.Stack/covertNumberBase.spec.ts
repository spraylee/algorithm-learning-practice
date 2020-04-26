import { covertNumberBase } from './covertNumberBase'

describe('Stack 扩展', () => {
  it('数字的进制转换', () => {
    expect(covertNumberBase(10, 2)).toBe('1010')
    expect(covertNumberBase(4, 3)).toBe('11')
    expect(covertNumberBase(12, 11)).toBe('11')
    expect(covertNumberBase(23, 12)).toBe('1B')
  })
})

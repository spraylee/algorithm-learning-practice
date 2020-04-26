import { expect } from 'chai'
import { covertNumberBase } from './covertNumberBase'

describe('Stack 扩展', () => {
  it('数字的进制转换', () => {
    expect(covertNumberBase(10, 2)).eq('1010')
    expect(covertNumberBase(4, 3)).eq('11')
    expect(covertNumberBase(12, 11)).eq('11')
    expect(covertNumberBase(23, 12)).eq('1B')
  })
})

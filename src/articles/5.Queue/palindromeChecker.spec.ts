import { expect } from 'chai'
import { palindromeChecker } from './palindromeChecker'

describe('Queue 扩展', () => {
  it('回文字符串问题', () => {
    expect(palindromeChecker('121')).be.true
    expect(palindromeChecker('')).be.true
    expect(palindromeChecker('1')).be.true
    expect(palindromeChecker('1345665431')).be.true
    expect(palindromeChecker('13431')).be.true
    expect(palindromeChecker('112')).be.false
    expect(palindromeChecker('11123111')).be.false
  })
})

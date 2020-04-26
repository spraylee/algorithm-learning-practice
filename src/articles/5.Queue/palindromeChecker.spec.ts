import { palindromeChecker } from './palindromeChecker'

describe('Queue 扩展', () => {
  it('回文字符串问题', () => {
    expect(palindromeChecker('121')).toBeTruthy
    expect(palindromeChecker('')).toBeTruthy
    expect(palindromeChecker('1')).toBeTruthy
    expect(palindromeChecker('1345665431')).toBeTruthy
    expect(palindromeChecker('13431')).toBeTruthy
    expect(palindromeChecker('112')).toBeFalsy
    expect(palindromeChecker('11123111')).toBeFalsy
  })
})

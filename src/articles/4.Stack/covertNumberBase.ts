import { Stack } from './Stack'

const map = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
}

/**
 * 转换数字的进制
 * @param num 待转换的数字
 * @param base 基数（默认为2，最大为16）
 */
export function covertNumberBase(num: number, base: number = 2): string {
  if (base > 16) throw Error('not support a base number max than 16')
  let temp = num
  const stack = new Stack<string>()
  while (temp > 0) {
    const current = temp % base
    stack.push(map[current] || current.toString())
    temp = (temp - current) / base
  }
  let result = ''
  while (!stack.isEmpty()) {
    result += stack.pop()
  }
  return result
}

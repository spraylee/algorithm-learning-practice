import { DeQue } from './Queue'
/**
 * 检测一个字符串是否为回文字符串
 * @param target 待检测字符串
 */
export function palindromeChecker(target: string) {
  const deque = new DeQue()
  for (const i of target) {
    deque.addBack(i)
  }
  let result = true
  while (result && deque.size() > 1) {
    if (deque.removeBack() !== deque.removeFront()) {
      result = false
    }
  }
  return result
}

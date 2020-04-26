import { DeQue } from './Queue'
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

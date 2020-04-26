/**
 * 测试 delete 操作的性能
 * @param times 次数
 */
export function testDeleteObjectProperty(times = 1000) {
  const a = {}
  for (let i = 0; i < times; i++) {
    a[i] = i
  }
  const start = new Date().getTime()
  for (let i = 0; i < times; i++) {
    delete a[i]
  }
  console.log(`delete for ${times} times: ${new Date().getTime() - start}ms`)
}

/**
 * 测试 Reflect.deleteProperty 操作的性能
 * @param times 次数
 */
export function testDeleteObjectPropertyByReflect(times = 1000) {
  const a = {}
  for (let i = 0; i < times; i++) {
    a[i] = i
  }
  const start = new Date().getTime()
  for (let i = 0; i < times; i++) {
    Reflect.deleteProperty(a, i)
  }
  console.log(
    `delete(Reflect) for ${times} times: ${new Date().getTime() - start}ms`,
  )
}

/**
 * 测试用 undefined 代替删除属性操作的性能
 * @param times 次数
 */
export function testDeleteObjectPropertyByUndefined(times = 1000) {
  const a = {}
  for (let i = 0; i < times; i++) {
    a[i] = i
  }
  const start = new Date().getTime()
  for (let i = 0; i < times; i++) {
    a[i] = undefined
  }
  console.log(
    `delete(undefined) for ${times} times: ${new Date().getTime() - start}ms`,
  )
}

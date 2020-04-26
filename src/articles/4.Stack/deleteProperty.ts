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

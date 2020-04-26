import {
  testDeleteObjectProperty,
  testDeleteObjectPropertyByReflect,
  testDeleteObjectPropertyByUndefined,
} from './deleteProperty'

describe('Delete 相关', () => {
  it('测试原生 delete 和 Reflect.deleteProperty 的耗时', () => {
    testDeleteObjectProperty(100000)
    testDeleteObjectPropertyByReflect(100000)
    testDeleteObjectPropertyByUndefined(100000)
  })
})

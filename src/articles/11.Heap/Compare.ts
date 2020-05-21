export const defaultCompare = <T>(a: T, b: T) => {
  if (a > b) {
    return 1
  } else if (a === b) {
    return 0
  } else {
    return -1
  }
}

export const Compare = {
  BIGGER: 1,
  EQUAL: 0,
  SMALLER: -1,
}

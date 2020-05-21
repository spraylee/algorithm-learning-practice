import { defaultCompare } from "./Compare";

export const heapSort = <T>(arrry: T[], compareFn = defaultCompare) {
  let heapSize = arrry.length
  buildMinHeap(arrry, compareFn)
}

function buildMinHeap<T> (array:T[], compareFn = defaultCompare ) {
  
}

function downByIndex (array, index: number) {
  
}
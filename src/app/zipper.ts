import {SortedSet} from "collections/sorted-set";

export class Zipper {
  zipEachOnce(sortedArrays: Array<SortedSet<any>>, f: (elem: any) => void) {
    for(let s: SortedSet of sortedArrays) {

    }
  }

  public static *iterateUnqiue<T extends number>(sortedArrays: Array<SortedSet<T>>): Iterator<T> {
    const iterators: Iterator<T>[] = sortedArrays.map((e) => e.iterate());
    let results: IteratorResult<T>[] = iterators.map((i) => i.next());
    let min: T;
    for(let s: Iterator<T> of iterators) {
      results.push(s.next());
    }
  }
}

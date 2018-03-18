export let IteratorUtils = {
  /**
   * returns a new iterator that maps values to given `mapping` function.
   * @param iterator iterator to map over
   * @param mapping mapping function to apply to each element.
   * @returns {IterableIterator<any>}
   */
  mapIterator: function* mapIterator<T>(iterator: IterableIterator<T>, mapping: (T) => any) {
    while (true) {
      let result = iterator.next();
      if (result.done) {
        break;
      }
      yield mapping(result.value);
    }
  },
  /**
   * generator that returns only non null elements
   * @param iterator
   * @returns {IterableIterator<any>}
   */
  nonNullIterator: function* nonNullIterator<T>(iterator: IterableIterator<T>) {
    while (true) {
      let result = iterator.next();
      if (result.done) {
        break;
      }
      if (result.value !== null) {
        yield result.value;
      }
    }
  }
}

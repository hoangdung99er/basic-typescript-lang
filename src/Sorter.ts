interface Sortable {
  length: number;
  compare(left: number, right: number): boolean;
  swap(left: number, right: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {
    // this.collection = collection
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if collection is an array of numbers
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }

        // if collection is a string, do this logic instead:
      }
    }
  }
}

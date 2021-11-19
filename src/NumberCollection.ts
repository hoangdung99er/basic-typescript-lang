export class NumbersCollection {
  constructor(public data: number[]) {}

  compare(left: number, right: number): boolean {
    return this.data[left] > this.data[right];
  }

  swap(left: number, right: number): void {
    const leftIndex = this.data[left];
    this.data[left] = this.data[right];
    this.data[right] = leftIndex;
  }

  get length(): number {
    return this.data.length;
  }
}

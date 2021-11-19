export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number): void {
    const chars = this.data.split("");
    const leftIndex = chars[left];
    chars[left] = chars[right];
    chars[right] = leftIndex;

    this.data = chars.join("");
  }
}

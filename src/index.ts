import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

// const numbs = new NumbersCollection([10, 3, -5, 2, 2]);
// const chars = new CharacterCollection("xnBsya");
// const sorter = new Sorter(numbs);
// const charter = new Sorter(chars);
// sorter.sort();
// charter.sort();
// console.log(numbs.data);
// console.log(chars.data);

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(39);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();

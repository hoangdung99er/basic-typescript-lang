"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
// const numbs = new NumbersCollection([10, 3, -5, 2, 2]);
// const chars = new CharacterCollection("xnBsya");
// const sorter = new Sorter(numbs);
// const charter = new Sorter(chars);
// sorter.sort();
// charter.sort();
// console.log(numbs.data);
// console.log(chars.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(39);
linkedList.add(-3);
linkedList.add(4);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();

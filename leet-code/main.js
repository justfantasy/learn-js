import './style.css';
// import twoSum from './solutions/0001.twoSum';
// import { addTwoNumbers, ListNode } from './solutions/0002.var addTwoNumbers';
// import findMedianSortedArrays from './solutions/0004.findMedianSortedArrays';
// const rt = twoSum([2, 7, 15, 4], 9);
// const rt = addTwoNumbers(
//   new ListNode(2, new ListNode(4, new ListNode(3))),
//   new ListNode(5, new ListNode(6, new ListNode(4))),
// );

class MyArray extends Array {}

const arr = new MyArray([1, 2, 3]);
arr.push([4, 5, 6]);

console.log(arr.join(','));

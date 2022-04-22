// 给你两个非空 的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
//
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
//
// 你可以假设除了数字 0 之外，这两个数都不会以 0开头。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function addTwoNumbers(l1, l2) {
  let node1 = new ListNode(0, l1);
  let node2 = new ListNode(0, l2);
  let tmpNode = new ListNode(0);
  const ret = tmpNode;
  let carry = 0;

  while (node1.next || node2.next || carry) {
    node1 = node1.next ? node1.next : new ListNode(0);
    node2 = node2.next ? node2.next : new ListNode(0);

    const sum = node1.val + node2.val + carry;
    tmpNode.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    tmpNode = tmpNode.next;
  }
  return ret.next;
}

export {
  ListNode,
  addTwoNumbers,
};

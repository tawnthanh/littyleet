/**
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
  [2] => [4] => [3]
+ [5] => [6] => [4] 
____________________
  [7] => [0] => [8]

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807. // Which means the last number is seen first visually

               [2] 
             /     
         [4]    [5]
        /     /  
    [3]   [6]
  +     / 
    [4]
    ___________________
      [8] => [0] => [7]

*/

// Definition for singly-linked list.

class ListNode {
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next);
    };

    add(this, val){
        const newNode = new ListNode(val);
        let currentNode = this;

        if(!this.next){
            this.next = newNode;
        } else {
            while(currentNode.next){
                
            }
        }
    }
}

const  node1 = new ListNode(3, 4);

console.log(node1.val)
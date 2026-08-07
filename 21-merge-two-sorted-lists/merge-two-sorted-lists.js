/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    while(list1!=null && list2!=null){
        if(list1.val<=list2.val){
            current.next=list1;     //connect kre list1 kyunki wo choti value hai
            list1=list1.next;        //or aage move hue hame
        }
        else{
            current.next=list2;
            list2=list2.next;

        }
        current=current.next;
    }
        if(list2!=null){
            current.next=list2;
        }
        if(list1!=null){
            current.next=list1;
        }
    
    return dummy.next;
    
};
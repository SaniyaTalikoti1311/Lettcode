/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length===0)
    {
        return null;
    }
    const mid=Math.floor(nums.length/2);    
    /* Find the middle index*/

    const root =new TreeNode(nums[mid]);        
    /* Create root node*/

    root.left=sortedArrayToBST(nums.slice(0,mid));      
    /*Create left subtree*/

    root.right =sortedArrayToBST(nums.slice(mid+1));  
    /* Create right subtree*/

    return root;      
    /* Return the root node*/
};
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// Brute force
// const twoSums = (nums, target) => {    
//     for (let i = 0; i < nums.length; i++){
//         for( let j = i+1; j < nums.length; j++){
//             if((nums[i] + nums[j]) === target) return [i, j];
//         }
//     };
//     return [];
// }

// This was pure trash... how did I do worse? 
// const twoSums = (nums, target) => {    
//     let idx = 0;
//     let currArr = [idx, null];
//     let currIdx = 1;

//     while (!currArr.find(el => el === null)){
//         if(nums[idx] + nums[currIdx]=== target){
//             currArr[1] = currIdx;
//             return currArr;
//         } else {
//             if(currIdx < nums.length - 1){
//                 currIdx++;
//             }else {
//                 idx++;
//                 currArr[0] = idx;
//                 currIdx = idx + 1;
//             }
//         }
//     }
// }

// Time was a bit better here but can I do better?? 
// const twoSums = (nums, target) => {
//     const foundIdx = [nums.length-1, null];
//     let idx = foundIdx[0] - 1;
//     while(nums.length > 0){
//         if(nums[foundIdx[0]] + nums[idx] === target){
//             foundIdx[1] = idx;
//             break;
//         } else if ( idx === 0 ){
//             nums.pop();
//             foundIdx[0] = nums.length-1;
//             idx = foundIdx[0] - 1;
//         } else {
//             idx--;
//         }
//     };
//     return foundIdx;
// };

// Kind of getting there..time still sucks so maybe not indexOf
// const twoSums = (nums, target) => {
//     for(let i = 0 ; i < nums.length; i++){
//         let currVal = target - nums[i]
//         if(nums.indexOf(currVal) > -1 && nums.indexOf(currVal) !== i ){
//             return [i, nums.indexOf(currVal)]
//         }
//     }
// }

// Best result on this one...
const twoSums = (nums, target) => {
    let obj = {};
    for(let i = 0 ; i < nums.length; i++){
        let currVal = target - nums[i];
        if(obj[currVal] !== undefined && obj[currVal] !== i){
            return [i, obj[currVal]];
        }
        obj[nums[i]] = i;
    }
}

console.log(twoSums([2,7,11,15], 9));
console.log(twoSums([3,2,4], 6));
console.log(twoSums([3,3], 6));
console.log(twoSums([0,1,1,2,4], 5));
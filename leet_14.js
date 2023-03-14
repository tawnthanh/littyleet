/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

const longestCommonPrefix = (strs) => {
    let firstWord = strs[0];
    console.log("length - ", firstWord.length)
    let secondWord = '';
    let prefix = strs[0][0]; // do

    for(let i = 1; i < firstWord.length; i++){
        secondWord += strs[i][i-1];

        if(secondWord !== prefix){ // do
            break;
        } else {
            prefix += firstWord[i] // 
        }
    };

    return prefix.length > 1 ? prefix : '';
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
console.log(longestCommonPrefix(["dogs","dogcoin","dogger"])) // "dog"

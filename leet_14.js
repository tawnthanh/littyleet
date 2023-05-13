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
    const sortedStrs = strs.sort((a, b) => a.length - b.length);
    const firstWord = sortedStrs[0];
    const lastWord = sortedStrs[sortedStrs.length - 1]
    let prefix = "";

    if(!strs.length) return "";
    if(strs.length === 1) return firstWord;

    for(let i = 0; i < firstWord.length; i++){
        if(firstWord[i].toLowerCase() !== lastWord[i].toLowerCase()) break;
        if(firstWord[i].toLowerCase() === lastWord[i].toLowerCase()){
            prefix = firstWord.slice(0, i+1);
        } ;
    }
    
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
console.log(longestCommonPrefix(["dogs","dogcoin","dogger"])) // "dog"
console.log(longestCommonPrefix(["reflower","flow","flight"])) // "fl" is the answer on leetcode BUT IT SHOULDN'T. "reflower" has prefix of re...which none has so it should be "";

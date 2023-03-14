/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",    
    ")": "(",
    "}": "{",
    "]": "[",
}

const organizeStr = (str) => {
    let leftStr = "";
    let rightStr = "";

    for(let i = 0; i < str.length; i++){
        if("{([".includes(str[i])){
            leftStr += str[i];
        } else {
            rightStr += str[i];
        }
    }
    return [leftStr, rightStr];
}
const isValid = (str) => {
    if(str.length % 2 !== 0) return false;
    
    const res = organizeStr(str);
    console.log("the res = ", res)
    if(res[0].length !== res[1].length) return false;

    let leftStr = res[0]; // [({
    const rightStr = res[1]; // }])
    for( let i = 0; i < leftStr.length; i++){
        if(!rightStr.includes(brackets[leftStr[i]])){
            return false;
        };
        rightStr.replace(brackets[leftStr[i]], "N")
    };
    return true;
};

console.log(isValid('{}')); // true
console.log(isValid('{()}')); // true
console.log(isValid('{})')); // false
console.log(isValid('({})}}')); // false
console.log(isValid('{}()[]')); // true
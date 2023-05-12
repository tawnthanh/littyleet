/*
Given an input string S, return a string that lists all of the substrings and 
their frequencies ordered first by frequency and then alphabetically. 
Note that the substrings should only return lowercase versions and not 
include any punctuation or non-alphabetical characters.
For example: "Banana boat." should return:

"
4: a
2: an
2: ana
2: b
2: n
1: anan
1: anana
1: ba
1: ban
1: bana
1: banan
1: banana
1: bo
1: boa
1: boat
1: o
1: t
"
*/





const alphabet = "abcdefghijklmnopqrstuvwxyz";


const buildSubstring = (obj) => {
    let arr = [];
    for(let k in obj){
      arr.push({val: obj[k], name: k}); 
    }

    arr.sort((a,b) => {
        if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }

          return 0;
    });

    arr.sort((a, b) => {
        return b.val - a.val
    });

    const newArr = arr.map( obj => {
        return `${obj.val}: ${obj.name}`
    })


    return newArr.toString();
}

const buildKeys = (str) => {
    const newStr = str.toLowerCase();
    const obj = {};

    const arr = newStr.split(" ")

    arr.forEach( (word) => {
        let seg;
        for(let i = 0; i <= word.length; i++){
            for(let j = i+1; j <= word.length; j++){
                seg = word.slice(i, j);
                obj[seg]? obj[seg]++ : obj[seg] = 1;
            }
        };
    });
    return buildSubstring(obj);
}

// console.log(buildKeys("Banana boat"));

const newApproach = (str) => {
    let newStr = str.toLowerCase();
    const obj = {};

    let first = 0;
    let last = newStr.length - 1;

    for( let i = 0; i < newStr.length; i++){
        if(!alphabet.includes(newStr[i])){
           
        }

    }
}

console.log(newApproach("Banana Bo at"));
function solution(A) {
    if (!A.every((val) => val >= 0)) return 0; 
    
    if (A.every((val) => val === A[0])){
        return Math.floor(A.length / 2);
    };

    let valObj = {};
    for (let i = 0; i < A.length-1; i++){
      if (A[i] <= A[i + 1]) {
        let segTotal = A[i] + A[i + 1];
        if (!valObj[segTotal]) {
          valObj[segTotal] = 1;
        } else {
          valObj[segTotal]++;
        };
      };
    };

    return Object.values(valObj).reduce((acc, currentVal) => {
      if (acc > currentVal) return acc;
      return currentVal;
    });
  };

  let A = [10,1,3,1,2,2,1,0,4];
  console.log("With test case = [" + A + "] the result is " + solution(A)); // 3

  let B = [5,3,1,3,2,3];
  console.log("With test case = [" + B + "] the result is " +solution(B)); // 1

  let C = [9,9,9,9,9]
  console.log("With test case = [" + C + "] the result is " +solution(C)); // 2

  let D = [1,5,2,4,3,3];
  console.log("With test case = [" + D + "] the result is " +solution(D)); // 3
function findPairs(arr,n,target){
  // sorting the input array 
  arr.sort((a,b)=>a-b)
  // taking two pointer l & r and one empty ans array
  let l=0,r=n-1
  let ans=[]
  while(l<r){
    // checking if sum of element of the is equal or not 
    // if yes the push into ans array 
    // if  target value is greater than sum of two element then increased the value of l by 1 
    // if  target value is smaller than sum of two element then decreased the value of r by 1 
    if(arr[l]+arr[r]===target){
      ans.push([arr[l],arr[r]])
      r--
      l++
    }
    else if(arr[l]+arr[r]<target){
      l++
    }
    else{
      r--
    }
  }
  return ans
}


//  finding all possible pairs using backtrack method

function findCombinations(arr, target) {
  const combinations = [];
  const backtrack = (start, target, path) => {
    if (target === 0) {
      combinations.push(path.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      if (i > start && arr[i] === arr[i - 1]) continue;
      const num = arr[i];
      if (num <= target) {
        path.push(num);
        backtrack(i + 1, target - num, path);
        path.pop();
      }
    }
  };
  backtrack(0, target, []);
  return combinations;
}

// input ***********************************
const arr = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;
// **********************************************


//   first cobination
const FirstCombination = findPairs(arr,arr.length, target);
//   merging array
const mergedArr = []
for(let el of FirstCombination){
    mergedArr.push(el[0])
    mergedArr.push(el[1])
}
// Sorting merged array
mergedArr.sort((a,b)=>a-b)

//   double array
const doubleTarget = target * 2;
const doubleCombinations = findCombinations(mergedArr, doubleTarget);

// printing values
console.log("Combinations for", target + ":", FirstCombination);
console.log("Merged array:", mergedArr);
console.log("Combinations for", doubleTarget + ":", doubleCombinations);



// Time and Space Complexcity

// *****************for findPairs function**********************************
// The time complexity of the while loop is O(n).
// The time complexity of the sort method is O(n log n).

// Overall time complexity = Time complexity of sort method + Time complexity of the while loop  O(n log n) + O(n) = O(n log n)
// The space complexity  is O(n)

// where n is the length of the input array arr. 


// *****************For findCombinations functions********************

// The time complexity  is O(2^n)
// The space complexity  is O(2^n)
// where n is the length of the input array arr. 
// This is so that the findCombinations functions may produce every conceivable combination that adds up to the goal value using backtracking.
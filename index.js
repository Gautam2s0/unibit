function findPairs(arr, n, target) {
    // initially no pairs
  let ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        // sum of two number is equal to target value
      if (arr[i] + arr[j] == target) {
        // pushing the pairs in ans array
        ans.push([arr[i], arr[j]]);
      }
    }
  }
  return ans;
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

const arr = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

//   first cobination
const combinations = findPairs(arr, target);
console.log("Combinations for", target + ":", combinations);

//   merging array
const mergedArr = arr.concat(...combinations).sort((a, b) => a - b);
console.log("Merged array:", mergedArr);

//   double array
const doubleTarget = target * 2;
const doubleCombinations = findCombinations(mergedArr, doubleTarget);

console.log("Combinations for", doubleTarget + ":", doubleCombinations);

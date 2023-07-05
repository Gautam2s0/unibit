
function findCombinations(arr, target) {
    // finding first combination
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
  const combinations = findCombinations(arr, target);
  console.log("Combinations for", target + ":", combinations);

//   merging array 
  const mergedArr = arr.concat(...combinations).sort((a, b) => a - b);
  console.log("Merged array:", mergedArr);
  
//   double array
  const doubleTarget = target * 2;
  const doubleCombinations = findCombinations(mergedArr, doubleTarget);

  console.log("Combinations for", doubleTarget + ":", doubleCombinations);

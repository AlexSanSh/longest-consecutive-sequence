module.exports = function longestConsecutiveLength(array) {
  const arr = array.sort((a,b) => a - b);
  let countLength = 0;
  let maxCountLength = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]==arr[i-1]+1) {
      countLength++;
    }
    if (arr[i]==arr[i-1]) {
      continue;
    }
    if (arr[i]-arr[i-1]>1) {
      if (countLength>maxCountLength) {
          maxCountLength=countLength;
          countLength=1;
      }
      countLength=1;
    }
  }
  if (array.length===0) return 0;
  if (array.length===1) return 1;
  return maxCountLength;
}

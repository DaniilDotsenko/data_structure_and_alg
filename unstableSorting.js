function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; 
  }

  const pivot = arr[arr.length - 1]; 
  const left = [];
  const right = [];
  const equal = [];


  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]); 
    }
  }

  equal.push(pivot);

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

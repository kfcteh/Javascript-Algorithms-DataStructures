let arrayToSort = [10,9,7,5,8,3,4,4,4,1,2,3];

function swap(indexOne, indexTwo, array) {
  const temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
}
function partition(start, end, array) {
  let x = start;
  let y = start - 1;

  while(x < end) {
    if(array[x] <= array[end]) {
      y+=1;
      swap(x, y, array); 
    } 
      x+=1;
  }
  swap(y+1, end, array);
  return(y+1);
}
function quickSort(start, end, array) {
  // console.log('start', start);
  // console.log('end', end);
  // console.log(array.filter((item, index) => {
  //   return index >= start && index <= end;   
  // }));

  if(start >= end) {
    return;
  }
  const pivotIndex = partition(start, end, array);
  quickSort(start, pivotIndex - 1, array);
  quickSort(pivotIndex + 1, end, array);
}
quickSort(0, arrayToSort.length - 1, arrayToSort);
console.log(arrayToSort);
let array = [4, 5, 9, 8, 7, 1, 10, 9, 8, 7, 3];
function insertionSort(array) {
  let i = 1;
  while (i < array.length) {
    let compare = array[i];
    let j = i;
    let insertionIndex = j;
    while (j >= 1) {
      if(array[j-1] >= compare) {
        array[j] = array[j-1];
        insertionIndex = j - 1;
      }
      j-=1;
    }
    array[insertionIndex] = compare; 
    i+=1;
  }
  return array;
}

console.log(insertionSort(array));







function selectionSort(arrayToBeSorted) {

  let x = 0;
  let y = 0;
  let minIndex = 0;

  let min = arrayToBeSorted[0];

  while (y < arrayToBeSorted.length) {
    while (x < arrayToBeSorted.length) {
      if (arrayToBeSorted[x] < min) {
        min = arrayToBeSorted[x];
        minIndex = x;
      }
      x++;
    }
    //perform swap
    let temp = arrayToBeSorted[y];
    arrayToBeSorted[y] = arrayToBeSorted[minIndex];
    arrayToBeSorted[minIndex] = temp;
    y++;
    x = y;
    min = arrayToBeSorted[x];
    minIndex = x;
  }
  return arrayToBeSorted
}

let array = [3,3,3,3,3,3,2,1,0];
console.log(selectionSort(array));

function mergeSort(arrayToBeSorted) {

  if (arrayToBeSorted.length <= 2) {
    if (arrayToBeSorted.length === 1) {
      return [arrayToBeSorted[0]];
    } else {
      if (arrayToBeSorted[1] > arrayToBeSorted[0]) {
        return [arrayToBeSorted[0],arrayToBeSorted[1]];
      } else {
        return [arrayToBeSorted[1],arrayToBeSorted[0]];
      }
    }
  }

  let lefthalf = [];

  for (let x=0; x < Math.round(arrayToBeSorted.length / 2); x++) {
    lefthalf.push(arrayToBeSorted[x]);
  }

  left = mergeSort(lefthalf);

  let righthalf = [];

  for (let x = Math.round(arrayToBeSorted.length/2); x < arrayToBeSorted.length; x++) {
    righthalf.push(arrayToBeSorted[x]);
  }

  right = mergeSort(righthalf);

  return merge(left,right)

}

function merge(left, right) {

  let final = [];
  let x = 0;
  let y = 0;

  while ((x < left.length) && (y < right.length)) {

    if(left[x] < right[y]) {
      final.push(left[x]);
      x++;
    } else {
      final.push(right[y]);
      y++;
    }

  }

  if(x != left.length) {
    for(let idx = x; idx < left.length; idx++) {
      final.push(left[idx]);
    }
  }

  if(y != right.length) {
    for(let idx = y; idx < right.length; idx++) {
      final.push(right[idx]);
    }

  }
  return final;
}

let arrayToBeSorted = [2,9,8,7,9];
console.log(mergeSort(arrayToBeSorted));

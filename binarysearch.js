function binarySearch(array, number) {

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
  mid = Math.round( (start + end) / 2 );
    if (number === array[mid]) {
      return mid;
    } else if (number < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

array = [1,5,9,17,28,31,54,59,68,70,75];
console.log(binarySearch(array, 0));

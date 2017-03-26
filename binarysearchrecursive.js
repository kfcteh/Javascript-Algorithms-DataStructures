function binarySearch(number, array, start, end) {

  mid = Math.round( (end+start) / 2 );

  if((mid < 0) || (mid > array.length - 1)) {
    return null;
  }

  if(number === array[mid]) {
    return mid;
  } else if (number < array[mid]) {
    return binarySearch(number, array, start, mid-1);
  } else {
    return binarySearch(number ,array, mid+1, end);
  }

}

array = [1,5,9,17,28,31,54,59,68,70,75];
console.log(binarySearch(1, array, 0, 10));

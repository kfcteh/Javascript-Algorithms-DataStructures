function mergeSort(arrayToBeSorted) {
  let multiplier = 2;
  const temp = [];

   for(let sz = 1; sz < arrayToBeSorted.length; sz *= multiplier ) {
     for(let low = 0; low < arrayToBeSorted.length - sz; low += sz*2) {
       let mid = low + sz - 1;
       let high = Math.min(low + (sz*2)-1, arrayToBeSorted.length);
      //  console.log('low--------->',low)
      //  console.log('mid-------->', mid);
      //  console.log('high-------->', high);
      arrayToBeSorted = merge(arrayToBeSorted, temp, low, mid, high);
      arrayToBeSorted = merge(arrayToBeSorted, temp, 8, 9, 11);
       //console.log('sorted steps----->', arrayToBeSorted);
    }
  }
  return arrayToBeSorted;
}

function merge(a, temp, leftStart, mid, rightEnd) {

  let l = leftStart;
  let m = mid+1;
  let e = rightEnd+1

  temp = [];

  while(l < (mid+1) && m < e) {

    if(!a[m]) {
      temp.push(a[l]);
      l++;
      break;
    }

    if (a[l] < a[m]) {
      temp.push(a[l]);
      l++;
    } else {
      temp.push(a[m]);
      m++;
    }
  }

  if (l < (mid+1)) {
    for(let idx = l; idx < (mid+1); idx++) {
      temp.push(a[idx]);
    }
  }

  if (m < e) {
    for(let idy = m; idy < e; idy++) {
      temp.push(a[idy]);
    }
  }

  let idy = 0;

  a.forEach((number,idx) => {
    if(idx >= leftStart && idx < e) {
      a[idx] = temp[idy];
      idy+=1;
    }
  });
  return(a);
}

let arrayToBeSorted = [3,1,8,7,6,5,4,3,1,10,2,12,6];
console.log('Original Array----->', arrayToBeSorted);
console.log('Sorted Array-------->', mergeSort(arrayToBeSorted));

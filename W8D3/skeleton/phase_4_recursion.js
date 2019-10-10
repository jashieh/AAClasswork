function range(start,end){
  if (start===end)
    return [start];
  
    return [start].concat(range(start+1, end));


}

function sumRec(arr){
  if (arr.length === 1)
    return arr[0];


  return arr[0] + sumRec(arr.slice(1, arr.length));
  

}

function exponent(base, exp){
  if (exp === 0)
    return 1;
  
  return base * exponent(base, exp - 1);
}

function fibonacci(n){
  if (n === 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [1,1];

  let prev = fibonacci(n-1);

  return prev.concat(prev[prev.length-1] + prev[prev.length-2]);

}

function deepDup(arr){
  if (!arr.isArray) return arr;
  let dup = [];
  for (let i = 0; i < arr.length; i++){
    dup.concat(deepDup(arr[i]))

  }

  return dup;


}

function bsearch(arr, target){
  let mid = Math.floor(arr.length/2);
  if (arr.length === 0) return null;
  if (arr[mid] === target) return mid;
  if (target < arr[mid])
    return bsearch(arr.slice(0,mid), target);
  else {
    right = bsearch(arr.slice(mid+1, arr.length),target);
    return (right === null ? null : right + mid + 1);
  }

}

function mergesort(arr) {
  if (arr.length <= 1) return arr;
  
  let mid = Math.floor(arr.length/2);

  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid, arr.length+1));

  return merge(left,right);
}

function merge(arr1, arr2){
  let i = 0;
  let j = 0;
  let merged = [];
  while (i < arr1.length && j < arr2.length){
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      merged.push(arr1[i]);
      i++;
    }

  }

  while (i < arr1.length){
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}

function subsets(arr) {
  if (arr.length === 0) return [arr];
  
  let last = arr.pop();
  let subs = subsets(arr); 

  for (let i = 0; i < subs.length; i++){
    subs.push(subs[i].concat(last));
  }

  return subs;
}
function bubblesort(array){
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i=0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        sorted = false;
        temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      } 

    }

  }

  return array;

}

function substrings(string){
  let subs = [];
  for (let i=0; i<string.length; i++){
    for (let j=i+1; j <= string.length; j++){
      subs.push(string.substring(i,j));

    }

  }
  return subs;
}
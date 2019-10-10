Array.prototype.myEach = function(callback) {
  for (let i=0; i<this.length; i++){
    callback(this[i]);
    console.log(callback(this[i]));
  }
}

Array.prototype.myReduce = function(callback,initialVal) {
  let acc = 0;
  if (initialVal){
    acc = initialVal;
  }
  //this.myEach(callback(,acc));
  for (let i = 0; i < this.length; i++) {
    console.log(callback(this[i], acc));
    acc = callback(this[i],acc);
  }
  return acc; 
}
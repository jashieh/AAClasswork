Array.prototype.uniq = function() {
  const new_arr = []; 
  for(let i=0; i < this.length; i++){
    if (!new_arr.includes(this[i])) {
      new_arr.push(this[i]);
    }
  }
  return new_arr;
};

Array.prototype.twoSum = function() {
  const positions = {};
  const pairs = [];
  let compliment = 0; 

  for(let i=0; i<this.length; i++) {
    compliment = -1*this[i];
    if (compliment in positions) {
      pairs.push([positions[compliment],i]);
    }
    positions[this[i]] = i; 
  }
  return pairs;
}

Array.prototype.transpose = function() {
  const transposed = new Array(this.length).fill(0).map(() => new Array(this.length).fill(0));
  for (let i=0; i < this.length; i++) {
    for (let j=0; j<this.length; j++) {
      transposed[j][i] = this[i][j];
    }

  }

  return transposed;

}
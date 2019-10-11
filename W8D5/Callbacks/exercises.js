class Clock {
  constructor() {
    let date = new Date();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }
  
  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick() {
    this.second += 1;  
    if (this.second >= 60) {
      this.minute += 1;
      this.second = 0;
      if (this.minute >= 60){
        this.hour += 1;
        this.minute = 0;
        if (this.hour >= 24) {
          this.hour = 0;
        }
      } 
    }
    this.printTime();
  }
};

// const clock = new Clock();


// const readline = require('readline');
// const reader = readline.createInterface( {
//   input: process.stdin,
//   output: process.stdout
// });

function addNumbers(sum,numsLeft,completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    // reader.close();
  } 
  if (numsLeft > 0) {
    reader.question("Enter a number",function (str){
      const num = parseInt(str);

      sum += num; 
      console.log(sum);
      numsLeft--;
      addNumbers(sum,numsLeft,completionCallback);
    });
  }
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// console.log('absurd bubblesort');

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };
  outerBubbleSortLoop(true);
};

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? (yes or no)`, function (str) {
    if (str === 'yes') {
      callback(true); 
    } else {
      callback(false);
    }
  });
};
  
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  console.log(arr);
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      } else {
        madeAnySwaps = false;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }

  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
};

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// addNumbers.myBind(arr)
Function.prototype.myBind = function(context) {
  return arrowFunc = () => {
    this.apply(context);
  };
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

Function.prototype.myThrottle = function(interval) {
  let tooSoon = false;
  let that = this;
  return function() {
    if (tooSoon === false) {
      tooSoon = true;
      setTimeout(function() { tooSoon = false; },interval);
      that(arguments);
    }
  }
};

class Neuron {
  fire() {
    console.log("Firing!" + arg1);
  }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);


Function.prototype.myDebounce = function(interval) {
  // let called = false; 
  let timeout = null;
  let that = this;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        that(arguments);
      }, interval);
    }
};

class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

// queryForHelloWorld();

searchBar.search = searchBar.search.myDebounce(500);

console.log("improved search");
queryForHelloWorld();

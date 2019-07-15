// function sum(arg){
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++){
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log( sum(1, 2, 3, 4) );


// function sumRest(...args){
//   let sum = 0;
//   for(let i = 0; i < args.length; i++){
//     sum += args[i];
//   }
//   return sum;
// }
// console.log( sumRest(1, 2, 3, 4) );


Function.prototype.myBind = function(context, ...bindArgs){

  const that = this;
  return function(...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs))
  }
}

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


function curriedSum(numArgs){
  const numbers = [];

  return _curriedSum = function(num){
    numbers.push(num);
    if(numbers.length === numArgs){
      return numbers.reduce((acc, el) => acc + el);
    } else {
      return _curriedSum;
    }
  }
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

// Function.prototype.curry = function(numArgs) {
//   const args = [];
//   const that = this;

//   return _curried = function(arg) {
//     args.push(arg);
//     if (args.length === numArgs) {
//       return that(...args);
//     } else {
//       return _curried;
//     }
//   }
// }


Function.prototype.curry = function(numArgs, context=null) {
  const args = [];

  return _curried = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.apply(context, args);
    } else {
      return _curried;
    }
  }
}

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const curried = sum.curry(3)
console.log(curried(2)(4)(6))

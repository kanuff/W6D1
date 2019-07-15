Function.prototype.inherits = function(parent) {
  function Surrogate() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function Cat(name) {
    this.name = name;
}
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function (food) {
  console.log(`Thanks for ${food}`);
}

Cat.inherits(Animal)

Cat.prototype.meow = function() {
    console.log(`meow`);
  }





const c = new Cat('cat');
const a = new Animal('animal')

console.log(c.meow()) //good
console.log(c.eat('pizza')) //good
console.log(a.eat('pizza')) //good
// console.log(a.meow()) //bad
// Instructions
// Make a dogs object with three keys...
// First key called "raining" with a value of true
// Second key called "noise" with a value of "Woof!"
// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs
// Make a cats object with three keys...
// First key called "raining" with a value of false
// Second key called "noise" with a value of "Meow!"
// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats
// Make the dog bark
// Make the cat meow
// BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the raining keys are equal to true.
// BONUS: Look to see if you can find any means to simplify your code further and further

function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
}

var dogs = new Animal (true, "Woof!");
var cats = new Animal (false, "Meow!");

dogs.makeNoise();
cats.makeNoise();

// var dog = {
//   raining: true,
//   noise: "Woof!",
//   makeNoise: function() {
//     if (this.raining === true){
//       console.log(this.noise);
//     }
//   }
// }
//
// var cat = {
//   raining: false,
//   noise: "Meow!",
//   makeNoise: function() {
//     if (this.raining === true){
//       console.log(this.noise);
//     }
//   }
// }
//
// function Dog(raining, noise, makeNoise) {
//   this.raining = true,
//   this.noise = "Woof!",
//   this.makeNoise = function() {
//     if (this.raining === true) {
//       console.log(this.noise);
//     }
//   }
// }
//
// function Cat(raining, noise, makeNoise) {
//   this.raining = false,
//   this.noise = "Woof!",
//   this.makeNoise = function() {
//     if (this.raining === true) {
//       console.log(this.noise);
//     }
//   }
// }
//
// var pug = new Dog();
// pug.makeNoise();

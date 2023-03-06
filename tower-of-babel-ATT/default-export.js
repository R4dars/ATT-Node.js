//Necessário criar um segundo arquivo para que seja importado, 
//eu criei com o nome "babel-default.js".

// Main.js
import math from './babel-default.js';

var arg1 = process.argv[2];
var arg2 = process.argv[3];
var PI = math.PI;
var sqrt = math.sqrt;
var square = math.square;

console.log(math.PI);
console.log(math.sqrt(+arg1));
console.log(math.square(+arg2));

var inputs = process.argv.slice(2);  
var result = inputs
  .map(word => word[0]) // arrow function to extract first letter
  .reduce((prev, curr) => prev + curr); // arrow function to concatenate letters
  
console.log(result);

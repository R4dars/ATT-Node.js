// Creating a promise
const promise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE');
});

// Setting a success handler to the promise
promise.then((value) => {
  console.log(value);
});

// Logging out "MAIN PROGRAM"
console.log('MAIN PROGRAM');

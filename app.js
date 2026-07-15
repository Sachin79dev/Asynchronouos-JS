// Q1. Synchronous vs Asynchronous

console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");





// Q2. Simple Callback

function greet(name) {
  return `Hello ${name}`;
}

function welcome(callback) {
  let user = "Sachin";
  return callback(user);
}

console.log(welcome(greet)); // Hello Sachin

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








// Question 3 — setTimeout with Arguments

function greet(name) {
  console.log(`Hello ${name}`);
}

setTimeout(() => {
  greet("Sachin"); // Hello Sachin
}, 1000);








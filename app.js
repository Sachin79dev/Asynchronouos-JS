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







// Question 4 — Stop a Timer



const timer = setTimeout(() => {
    console.log("Hello 3.0");
    
}, 5000)


clearTimeout(timer) // Nothing should print.








// Question 5 — Countdown Timer



let count = 5

const timer = setInterval(() => {
    console.log(count);
    count--

    if(count === 0) {
        clearInterval(timer)
        console.log("Done!");
        
    }
}, 1000)








// Question 6 — Fake API Call

const fetchUser = (callback) => {
  console.log("Fetching User...");
  setTimeout(() => {
    let user = {
      id: 1,
      name: "Ritik",
    };

    callback(user) 
  }, 2000);
};



fetchUser((value) => {
    console.log(value);
})











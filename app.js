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










// Question 7 — Create Your First Promise


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Received")
    }, 2000)
})


promise.then((value) => {
    console.log(value); // Data Received will print after 2 seconds
})







// Question 8 — Promise Rejection

const promise = new Promise((resolve, reject) => {
  reject("Server Down");
});

promise.catch((val) => {
  console.log(val);
});









// Question 9 — Promise Chaining

function addTen(num) {
  return new Promise((resolve) => {
    resolve(num + 10);
  });
}

addTen(0)
  .then((val) => {
    console.log(val);
    return addTen(val);
  })
  .then((val) => {
    console.log(val);
    return addTen(val);
  })
  .then((val) => {
    console.log(val);
    return addTen(val);
  });











// Question 10 — Async/Await Conversion

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data Received");
    }, 2000);
  });
}



fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });



const getData = async () => {
    try {
        const data = await fetchData()
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}


getData()










// Question 11 — Event Loop Prediction

console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
Promise.resolve().then(() => {
  console.log("C");
});
console.log("D");


// Output
// A
// D
// C
// B










// Question 12 — Fetch + JSON (Mini Project)


const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error("Response Error");
    }

    const data = await response.json()

    console.log(data.name); // Leanne Graham
  } catch (error) {
    console.log(error);
  }
};

getData();












// Bonus Interview Question

console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });
console.log("End");


// Output
// Start
// End
// Promise 1
// Promise 2
// Timeout











// Calling API using fetch

const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Response Not Recieved!!!");
    }

    const data = await res.json();

    console.log(data);
    
  } catch (error) {
    console.log(error);
  }
};



fetchData() // it will print whole API Data 

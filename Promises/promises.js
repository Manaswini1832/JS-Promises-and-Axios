//When a promise is created, it is neither a success nor a failure, it is just pending.
//It becomes one of the twp when it is resolved or rejected

//Basic understanding of the single threadedness of JS
setTimeout(() => {
  console.log("Timed out");
}, 0);

console.log("New to promises ?");
console.log("Not anymore !");

//Promises vanilla syntax :)
let p = new Promise((resolve, reject) => {
  let a = 2;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failure");
  }
})
  .then((message) => {
    console.log("This is in the then " + message);
  })
  .catch((message) => {
    console.log("This is in the catch " + message);
  });

//Understanding fetch and promises
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    res.json().then((res) => {
      console.log(res);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Another fetch but this is better since it takes care of HTTP errors also like 404 or 500 etc...
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      console.log(`HTTP Error ${err}`);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

//Async and await is syntactical sugar used to make it easier to work with promises
async function fetchData() {
  try {
    console.log("Waiting for user data");
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.log("Error here !");
  }
}

fetchData();

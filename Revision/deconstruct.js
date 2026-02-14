// Promise is a built-in JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner.

// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.
let promise = new Promise((resolve, reject) => {
  resolve("Success");
});
promise.then((res) => {
  console.log(res);
});

let promise2 = new Promise((resolve, reject) => {
  reject("Error");
});
promise2.then((res) => {
  console.log(res);
}).catch((err) => {
  console.error(err);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 2000);
});
promise3.then((res) => {
  console.log(res);
}).catch((err) => {
  console.error(err);
});

// Promise.all() is a method that takes an array of promises and returns a new promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject. The resolved value of the returned promise is an array containing the resolved values of each promise in the input array, in the same order as the input promises.
const promiseA = new Promise((resolve) => {
  setTimeout(() => {    resolve("A");
  }, 1000);
});
const promiseB = new Promise((resolve) => {
  setTimeout(() => {
    resolve("B");
  }, 2000);
});
const promiseC = new Promise((resolve) => {
  setTimeout(() => {
    resolve("C");
  }, 1500);
});
Promise.all([promiseA, promiseB, promiseC]).then((results) => {
  console.log(results); // Output: ["A", "B", "C"]
}).catch((error) => {
  console.error(error);
});
**What Actually Happens?**
------------------------------------------------
const counterA = createCounter();
1. createCounter() is a function which is called.
<pre> <code>
javascript
function createCounter() {
  let count = 0;
  function incrementCounter() {
    count++;
    return count;
  }
  return incrementCounter;
}
`</code> </pre>
2. Now, the count = 0, the return value of createCounter() is again inner function named incrementCounter.
3. In incrementCounter(), the count value is incremented and returned.
4. const counterA = createCounter();
The returned count value is stored in variable counterA.
5. console.log(counterA());
As counterA return type is a function, we use (), then it prints - 1.
6. Again, when we call the same function, the count value is updated and prints - 2
console.log(counterA());
7. const counterB = createCounter();
Now, again the count = 0 and and returned the count values as 1;
8. console.log(counterB());
It prints - 1
9. so, counterA and counterB each have their own private count.
10. Each call to createCounter() creates a new closure, and a new count variable scoped to that closure.
------------------------------------------
**Benefit of closure**
1. You cannot access or modify count from the outside.
------------------------------------------
**Modified**
1. if count  = 10 (modified) from outside or try to print the count value will throws error.



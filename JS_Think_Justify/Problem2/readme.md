# Delayed Greeter in JavaScript

This document explains how JavaScript's closures and scoping work with asynchronous functions like `setTimeout`, and how to resolve common issues using different techniques.

## Problem

The following code demonstrates a common mistake when using `var` inside a loop with asynchronous functions like `setTimeout`.

```javascript
function delayedGreeter(names) {
  for (var i = 0; i < names.length; i++) {
    setTimeout(function () {
      console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
  }
}

delayedGreeter(['Alice', 'Bob', 'Charlie']);
```

### Output:
```
Hello, undefined!
Hello, undefined!
Hello, undefined!
```

### Why?
- `var` is **function-scoped**, not block-scoped.
- By the time `setTimeout` callbacks are executed, the loop has already finished and `i === 3`.
- Therefore, `names[i]` is `names[3]`, which is `undefined`.

---

## Solution 1: Using IIFE (Immediately Invoked Function Expression)

You can solve the problem by creating a new scope using an IIFE to capture the current value of `i`.

```javascript
function delayedGreeterCorrected(names) {
  for (var i = 0; i < names.length; i++) {
    (function (index) {
      setTimeout(function () {
        console.log(`Hello, ${names[index]}!`);
      }, index * 1000);
    })(i);
  }
}

delayedGreeterCorrected(['Alice', 'Bob', 'Charlie']);
```

### Output:
```
Hello, Alice!
Hello, Bob!
Hello, Charlie!
```

### Explanation:
- IIFE captures the current value of `i` and stores it in `index`.
- Each `setTimeout` callback uses its own `index`, avoiding the `var` issue.

---

## Solution 2: Using `let`

A more modern and cleaner solution is using `let` instead of `var`.

```javascript
function delayedGreeterLet(names) {
  for (let i = 0; i < names.length; i++) {
    setTimeout(function () {
      console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
  }
}

delayedGreeterLet(['Alice', 'Bob', 'Charlie']);
```

### Output:
```
Hello, Alice!
Hello, Bob!
Hello, Charlie!
```

### Explanation:
- `let` is **block-scoped**, so each iteration of the loop has its own unique `i`.
- Closures inside `setTimeout` correctly capture the current value of `i`.

---

## Conclusion

When working with asynchronous functions in loops:

- Use **`let`** if available (ES6 and above).
- Otherwise, use an **IIFE** to capture the current loop variable.

These approaches ensure that closures capture the intended values.

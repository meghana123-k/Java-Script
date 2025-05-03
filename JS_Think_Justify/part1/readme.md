Task1: console.log(mysteryVariable); // ReferenceError! mysteryVariable = 10; console.log(mysteryVariable);

function revealMystery() { console.log("Inside revealMystery:", mysteryVariable); let mysteryVariable = 20; console.log("Inside revealMystery (after declaration):", mysteryVariable); }

revealMystery(); console.log("After revealMystery:" mysteryVariable); This gives a reference error :cannot access "mystery variable" before declaration. let and const are hoisted, but not initialized. They're in a temporal dead zone (TDZ) from the start of the block until the declaration is executed. Task2: hoisting is js means moving function or variable to top of their scope during compilation before execution only declaration not initilization. var is function-scoped and is initialized to undefined when hoisted. This is why you can access it before its declaration.

let and const are block-scoped and not initialized at the time of hoisting. Accessing them before their declaration throws a ReferenceError because they live in the TDZ.Task1: console.log(mysteryVariable); // ReferenceError! mysteryVariable = 10; console.log(mysteryVariable);

function revealMystery() { console.log("Inside revealMystery:", mysteryVariable); let mysteryVariable = 20; console.log("Inside revealMystery (after declaration):", mysteryVariable); }

revealMystery(); console.log("After revealMystery:" mysteryVariable); This gives a reference error :cannot access "mystery variable" before declaration. let and const are hoisted, but not initialized. They're in a temporal dead zone (TDZ) from the start of the block until the declaration is executed. Task2: hoisting is js means moving function or variable to top of their scope during compilation before execution only declaration not initilization. var is function-scoped and is initialized to undefined when hoisted. This is why you can access it before its declaration.

let and const are block-scoped and not initialized at the time of hoisting. Accessing them before their declaration throws a ReferenceError because they live in the TDZ.

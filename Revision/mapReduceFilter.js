// map, filter, reduce
let nums = [10, 20, 30]
let newMaps = nums.map((n) => n * 2);
console.log(newMaps);

let names = ["meghana", "raj", "sita"];
let newNames = names.map((n) => n.toUpperCase());
console.log(newNames);

let newFilter = nums.filter((n) => n > 15);
console.log(newFilter);
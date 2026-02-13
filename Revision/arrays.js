const a = [1, 2, 3, 4, 5]

for(let i = 0; i < a.length; i++) {
	console.log(a[i]);
}
for(let num of a) {
	console.log(num);
}
for(let num in a) {
	console.log(num);
}
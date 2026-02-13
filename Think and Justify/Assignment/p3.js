function filterObjectProperties(data, minLength) {
  const newData = {}
  for(let key in data) {
    let value = data[key];
    if(typeof value === "string") {
      if(value.length >= minLength) {
        newData[key] = value;
      }
    }
  }
  return newData;
}

const data = {
  a: "short",
  b: "longer string",
  c: 123,
  d: "very long string indeed",
};
const filtered = filterObjectProperties(data, 6);
console.log(filtered); // Expected output: { b: 'longer string', d: 'very long string indeed' }


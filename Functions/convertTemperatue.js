function convertTemperature(temp, degree) {
  if(degree === 'F') {
    return (((temp - 32) * 5) / 9) + "C";
  } else if(degree === 'C') {
    return ((temp * 9) / 5 + 32) + "F";
  }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));

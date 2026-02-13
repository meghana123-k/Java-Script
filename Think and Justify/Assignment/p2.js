// function processObjectsDelayed(items, delay) {
//   for(let index = 0; index < items.length; index++) {
//     const item = items[index];
//     setTimeout(() => {
//       item.process();
//     }, delay * index);
//   }
// }
function processObjectsDelayed(items, delay) {
  items.forEach((value, index)=> {
    setTimeout(() => {
      value.process()
    }, delay * index);
  });
}

const items = [
  {
    name: "Alpha",
    process: function () {
      console.log(`Processing: ${this.name}`);
    },
  },
  {
    name: "Beta",
    process: function () {
      console.log(`Task for ${this.name} done.`);
    },
  },
];
processObjectsDelayed(items, 3000);
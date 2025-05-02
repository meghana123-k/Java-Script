const studentFixed = {
    name: "Charan",
    sayHello: function() {
      setTimeout(() => {
        console.log(`Hi, I'm ${this.name}`); // ✅ Works: this refers to studentFixed
      }, 1000);
    }
  };
  
  studentFixed.sayHello(); // ✅ Outputs: Hi, I'm Charan
  

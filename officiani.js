let obj = {};
Object.defineProperties(obj, {
  name: {
    value: 'John',
    writable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: true,
    configurable: true
  }
});
console.log(obj); // Output: { name: "John", age: 30 }

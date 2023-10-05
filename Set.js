const myMap = new Map();

myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("profession", "Engineer");
myMap.set("profession", "Engineer");

const set = new Set(Array.from(myMap));
console.log(set);
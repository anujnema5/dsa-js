const person = {
    name: "John",
    age: 30,
    profession: "Engineer",
};

// const personMap = new Map(Object.entries(person));
// console.log(personMap.get("name")); // Outputs: "John"

// console.log(personMap);

// const a = Array.from({length: personMap.size})
// const a = personMap.size

// HOW TO GET SIZE OF OBJECT 
Object.entries(person).map(([key, value])=> {
    console.log(key, value);
});
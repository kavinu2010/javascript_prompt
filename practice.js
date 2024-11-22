let obj1 = {};
obj1.name = "kavitha";
obj1.age = 38;
obj1.profession = "IDk";
obj1.date = new Date();
console.log(obj1);

let jsonObj1 = JSON.stringify(obj1);
console.log(jsonObj1);
jsonObj1 = JSON.stringify(obj1, null, 2);
console.log(jsonObj1);

let newobj1 = JSON.parse(jsonObj1);
console.log(newobj1);

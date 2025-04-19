"use strict";
x = 23; // Gives an error since 'x' is not declared
var x;

// Topic 1: Variables and Data Types
// Example:
let name = "Malahima";
let age = 17;
let isStudent = true;

// Topic 2: Arithmetic Operations
let sum = 10 + 5;
let product = 4 * 3;

// Topic 3: Comparison Operators
let isEqual = 10 == '10'; // true
let isStrictEqual = 10 === '10'; // false

// Topic 4: Logical Operators
let andResult = true && false; // false
let orResult = true || false; // true

// Topic 5: Conditional Statements
let score = 85;
if(score >= 90){
  console.log("A grade");
} else if(score >= 80){
  console.log("B grade");
} else {
  console.log("C grade");
}

// Topic 6: Loops (for)
for(let i = 1; i <= 5; i++){
  console.log("Number:", i);
}

// Topic 7: Loops (while)
let j = 1;
while(j <= 5){
  console.log("While loop:", j);
  j++;
}

// Topic 8: Functions
function greet(name){
  return "Hello, " + name;
}
console.log(greet("Malahima"));

// Topic 9: Arrow Functions
const square = x => x * x;
console.log(square(5));

// Topic 10: Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]);

// Topic 11: Array Methods
fruits.push("Date");
console.log(fruits);

// Topic 12: Objects
let student = {
  name: "Ali",
  age: 16,
  grade: "A"
};
console.log(student.name);

// Topic 13: Object Methods
student.greet = function(){
  return "Hi, I'm " + this.name;
};
console.log(student.greet());

// Topic 14: Date Object
let now = new Date();
console.log(now.toDateString());

// Topic 15: Math Object
let random = Math.random();
console.log(random);

// Topic 16: String Methods
let msg = "Hello World";
console.log(msg.toUpperCase());

// Topic 17: Template Literals
let greetMsg = `Hello, ${name}`;
console.log(greetMsg);

// Topic 18: Spread Operator
let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];
console.log(newNums);

// Topic 19: Destructuring
let [a, b] = [10, 20];
console.log(a, b);

// Topic 20: Rest Parameters
function sumAll(...nums){
  return nums.reduce((a, b) => a + b);
}
console.log(sumAll(1, 2, 3, 4));

// Topic 21: Default Parameters
function multiply(x, y = 2){
  return x * y;
}
console.log(multiply(5));

// Topic 22: Callbacks
function process(callback){
  callback("Done!");
}
process(msg => console.log(msg));

// Topic 23: Promises
let promise = new Promise((resolve, reject) => {
  resolve("Success");
});
promise.then(data => console.log(data));

// Topic 24: Async/Await
async function fetchData(){
  return "Data fetched";
}
fetchData().then(console.log);

// Topic 25: Try/Catch
try {
  let result = 10 / 0;
  console.log(result);
} catch(err){
  console.log("Error:", err);
}

// Topic 26: SetTimeout
setTimeout(() => console.log("After 1 second"), 1000);

// Topic 27: SetInterval
let counter = 0;
let interval = setInterval(() => {
  console.log(++counter);
  if(counter >= 3) clearInterval(interval);
}, 1000);

// Topic 28: Event Handling (Browser)
// document.getElementById("btn").addEventListener("click", () => alert("Clicked!"));

// Topic 29: DOM Manipulation
// document.getElementById("demo").innerText = "Updated Text";

// Topic 30: Local Storage
// localStorage.setItem("name", "Malahima");

// Topic 31: JSON
let jsonStr = JSON.stringify(student);
console.log(JSON.parse(jsonStr));

// Topic 32: Classes
class Person {
  constructor(name){
    this.name = name;
  }
  speak(){
    return `Hi, I'm ${this.name}`;
  }
}
let p = new Person("Sara");
console.log(p.speak());

// Topic 33: Inheritance
class Student extends Person {
  study(){
    return `${this.name} is studying.`;
  }
}
let s = new Student("Ali");
console.log(s.study());

// Topic 34: Map
let map = new Map();
map.set("name", "Malahima");
console.log(map.get("name"));

// Topic 35: Set
let set = new Set([1, 2, 2, 3]);
console.log(set);

// Topic 36: forEach
["a", "b", "c"].forEach(letter => console.log(letter));

// Topic 37: Filter
let evens = [1,2,3,4,5].filter(n => n % 2 === 0);
console.log(evens);

// Topic 38: Map Array Method
let doubled = [1, 2, 3].map(n => n * 2);
console.log(doubled);

// Topic 39: Reduce
let total = [1, 2, 3].reduce((acc, cur) => acc + cur, 0);
console.log(total);

// Topic 40: Find
let found = [10, 20, 30].find(n => n > 15);
console.log(found);

// Topic 41: Some
console.log([1, 2, 3].some(n => n > 2));

// Topic 42: Every
console.log([2, 4, 6].every(n => n % 2 === 0));

// Topic 43: Optional Chaining
let user = { profile: { name: "Mala" } };
console.log(user?.profile?.name);

// Topic 44: Nullish Coalescing Operator
let val = null ?? "default";
console.log(val);

// Topic 45: Modules (ES6)
// export function greet(name){ return `Hello ${name}`; }
// import { greet } from './module.js';
 
// topic 46: objects

function Person(animalsname,skincolor,first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyecolor = eye;
  this.skincolor = skincolor;
  this.animalsname = animalsname;
}


const data = ({data,name,class})



























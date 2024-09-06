
Certainly! Here are 100 top JavaScript interview questions with examples to help you prepare for a range of interviews, from basic to advanced.

1. What is JavaScript?
Example Answer: JavaScript is a high-level, interpreted programming language commonly used for creating interactive effects and dynamic content on web pages. It is a core technology of the web, alongside HTML and CSS.

2. What are the different data types in JavaScript?
Example Answer: JavaScript has several data types:

Primitive types: undefined, null, boolean, number, bigint, string, and symbol.
Object types: object, array, function, etc.
javascript
Copy code
let str = "Hello"; // string
let num = 42; // number
let isTrue = true; // boolean
let obj = { name: "John" }; // object
let arr = [1, 2, 3]; // array
3. What is the difference between == and ===?
Example Answer: == is the equality operator that performs type coercion before comparison, whereas === is the strict equality operator that does not perform type coercion and requires both value and type to be the same.

javascript
Copy code
console.log(5 == '5'); // true
console.log(5 === '5'); // false
4. Explain the concept of hoisting in JavaScript.
Example Answer: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation. However, only the declarations are hoisted, not the initializations.

javascript
Copy code
console.log(x); // undefined
var x = 5;

console.log(myFunc()); // "Hello"
function myFunc() {
  return "Hello";
}
5. What are closures in JavaScript?
Example Answer: A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. It allows for private variables and functions.

javascript
Copy code
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
6. What is the this keyword in JavaScript?
Example Answer: The this keyword refers to the context in which a function is called. Its value depends on how the function is invoked.

javascript
Copy code
function show() {
  console.log(this);
}

const obj = { name: "John", show };
obj.show(); // { name: "John", show: [Function: show] }
7. What is event delegation in JavaScript?
Example Answer: Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements. This is efficient for handling events in dynamically added elements.

javascript
Copy code
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target && event.target.matches('button.child')) {
    console.log('Child button clicked!');
  }
});
8. How does the bind method work?
Example Answer: The bind method creates a new function that, when called, has its this keyword set to the provided value and can have pre-set arguments.

javascript
Copy code
function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}

const person = { name: 'John' };
const greetPerson = greet.bind(person, 'Hello');
greetPerson(); // Hello, John
9. What is the difference between null and undefined?
Example Answer: null is an intentional absence of any object value, while undefined indicates that a variable has been declared but not yet assigned a value.

javascript
Copy code
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
10. What are promises in JavaScript?
Example Answer: Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They allow you to handle asynchronous operations in a more manageable way compared to callbacks.

javascript
Copy code
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

promise.then(result => console.log(result)); // "Success!"
11. What are async/await and how do they work?
Example Answer: async/await is a syntax for working with promises that makes asynchronous code look and behave like synchronous code. async functions return a promise, and await pauses the execution until the promise is resolved.

javascript
Copy code
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => console.log(data));
12. What is the event loop in JavaScript?
Example Answer: The event loop is a mechanism that allows JavaScript to perform non-blocking operations by placing functions and callbacks in a queue and executing them when the call stack is empty.

javascript
Copy code
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout
13. What is the difference between let and var?
Example Answer: let and const have block scope, while var has function scope. let and const prevent variable redeclaration and are not hoisted in the same way as var.

javascript
Copy code
if (true) {
  let x = 10;
  var y = 20;
}

console.log(x); // ReferenceError: x is not defined
console.log(y); // 20
14. What are JavaScript prototypes?
Example Answer: JavaScript prototypes are the mechanism by which objects inherit properties and methods from other objects. Each object has a prototype, which is another object that it inherits from.

javascript
Copy code
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
};

const john = new Person('John');
john.greet(); // Hello, John
15. What is the purpose of Object.create?
Example Answer: Object.create creates a new object with the specified prototype object and properties. It is used to set up inheritance and create objects with a specific prototype.

javascript
Copy code
const animal = {
  eats: true
};

const rabbit = Object.create(animal);
console.log(rabbit.eats); // true
16. What is JSON and how is it used?
Example Answer: JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is commonly used to exchange data between a server and a web application.

javascript
Copy code
const obj = { name: "John", age: 30 };
const jsonStr = JSON.stringify(obj); // Convert object to JSON string
const parsedObj = JSON.parse(jsonStr); // Convert JSON string back to object
17. How do you clone an object in JavaScript?
Example Answer: Objects can be cloned using various methods, such as the spread operator, Object.assign, or deep cloning techniques.

javascript
Copy code
const obj = { a: 1, b: 2 };
const clone = { ...obj }; // Shallow clone using spread operator

const deepClone = JSON.parse(JSON.stringify(obj)); // Deep clone
18. What is the typeof operator used for?
Example Answer: The typeof operator is used to determine the type of a variable or expression. It returns a string representing the type.

javascript
Copy code
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof function(){}); // "function"
19. What is the instanceof operator?
Example Answer: The instanceof operator tests whether an object is an instance of a particular constructor or class.

javascript
Copy code
class Person {}
const john = new Person();

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
20. What is the purpose of Array.prototype.map?
Example Answer: Array.prototype.map creates a new array with the results of calling a provided function on every element in the calling array.

javascript
Copy code
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
21. What is the purpose of Array.prototype.filter?
Example Answer: Array.prototype.filter creates a new array with all elements that pass the test implemented by the provided function.

javascript
Copy code
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
22. What is Array.prototype.reduce?
Example Answer: Array.prototype.reduce executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

javascript
Copy code
const numbers = [1, 2, 3];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 6
23. What is the spread operator in JavaScript?
Example Answer: The spread operator (...) allows you to expand an iterable (like an array) into individual elements. It can be used in function calls, array literals, and object literals.

javascript
Copy code
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
console.log(obj2); // { a: 1, b: 2 }
24. What is the rest parameter in JavaScript?
Example Answer: The rest parameter (...) allows a function to accept an indefinite number of arguments as an array.

javascript
Copy code
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
25. What is the Function.prototype.apply method?
Example Answer: Function.prototype.apply calls a function with a given this value and arguments provided as an array (or array-like object).

javascript
Copy code
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John' };
greet.apply(person, ['Hello', '!']); // Hello, John!
26. What is the Function.prototype.call method?
Example Answer: Function.prototype.call calls a function with a given this value and arguments provided individually.

javascript
Copy code
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John' };
greet.call(person, 'Hi', '!'); // Hi, John!
27. How do you handle asynchronous operations in JavaScript?
Example Answer: Asynchronous operations can be handled using callbacks, promises, or async/await for cleaner, more readable code.

javascript
Copy code
// Using promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Using async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
28. What is the difference between let and const?
Example Answer: Both let and const have block scope. let allows variable re-assignment, while const does not allow re-assignment after initialization.

javascript
Copy code
let x = 10;
x = 20; // OK

const y = 30;
y = 40; // TypeError: Assignment to constant variable
29. What is a callback function?
Example Answer: A callback function is a function passed as an argument to another function and is executed after some operation has been completed.

javascript
Copy code
function processData(callback) {
  const data = [1, 2, 3];
  callback(data);
}

processData(data => {
  console.log(data); // [1, 2, 3]
});
30. What is the setTimeout function?
Example Answer: setTimeout is a function that executes a given function after a specified number of milliseconds.

javascript
Copy code
setTimeout(() => {
  console.log('This message is delayed by 1 second');
}, 1000);
31. What is the setInterval function?
Example Answer: setInterval is a function that repeatedly executes a given function at specified intervals of time.

javascript
Copy code
const intervalId = setInterval(() => {
  console.log('This message is logged every 2 seconds');
}, 2000);

// To stop the interval
clearInterval(intervalId);
32. What are arrow functions?
Example Answer: Arrow functions are a shorthand syntax for writing function expressions. They do not have their own this context, which makes them useful for certain scenarios.

javascript
Copy code
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

const person = {
  name: 'John',
  greet: () => console.log(`Hello, ${this.name}`) // `this` is not bound to the person object
};

person.greet(); // Hello, undefined
33. What is the this keyword in JavaScript?
Example Answer: The this keyword refers to the context object that a function is executed in. Its value depends on how the function is called.

javascript
Copy code
function show() {
  console.log(this);
}

const obj = { name: 'John', show };
obj.show(); // { name: 'John', show: [Function: show] }
34. What is Event Bubbling and Event Capturing?
Example Answer:

Event Bubbling: Events propagate from the target element up to the root element.
Event Capturing: Events propagate from the root element down to the target element.
javascript
Copy code
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
}, true); // Capturing phase

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
}); // Bubbling phase
35. What is the DOM?
Example Answer: The DOM (Document Object Model) is an interface that browsers implement to structure and manipulate HTML and XML documents. It represents the document as a tree of nodes.

36. What is localStorage and sessionStorage?
Example Answer: Both localStorage and sessionStorage are web storage objects used to store data on the client-side.

localStorage: Stores data with no expiration time.
sessionStorage: Stores data for the duration of the page session.
javascript
Copy code
localStorage.setItem('key', 'value');
sessionStorage.setItem('key', 'value');

console.log(localStorage.getItem('key')); // 'value'
console.log(sessionStorage.getItem('key')); // 'value'
37. What is fetch API?
Example Answer: The fetch API is used to make network requests and handle responses. It returns a promise that resolves to the Response object.

javascript
Copy code
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
38. What is async and await?
Example Answer: async and await are syntax for handling asynchronous operations. async makes a function return a promise, and await pauses the function execution until the promise is resolved.

javascript
Copy code
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => console.log(data));
39. What is the prototype property?
Example Answer: The prototype property allows you to add properties and methods to a constructor's prototype object, which will be available to all instances of that constructor.

javascript
Copy code
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
};

const john = new Person('John');
john.greet(); // Hello, John
40. What is Object.prototype?
Example Answer: Object.prototype is the prototype object of all objects in JavaScript. It provides common properties and methods that are inherited by all objects.

javascript
Copy code
console.log(Object.prototype.hasOwnProperty); // [Function: hasOwnProperty]
41. What is the constructor property?
Example Answer: The constructor property refers to the function that created the instance's prototype.

javascript
Copy code
function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.constructor); // [Function: Person]
42. What is Object.assign?
Example Answer: Object.assign copies all enumerable properties from one or more source objects to a target object and returns the target object.

javascript
Copy code
const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2 }
43. What are JavaScript symbols?
Example Answer: Symbols are primitive data types used to create unique identifiers for object properties. They are useful for adding properties that are guaranteed to be unique.

javascript
Copy code
const sym = Symbol('description');
const obj = { [sym]: 'value' };
console.log(obj[sym]); // 'value'
44. What is Function.prototype.bind?
Example Answer: Function.prototype.bind creates a new function with the this value set to a specific object and allows you to pre-set arguments.

javascript
Copy code
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'John' };
const boundGreet = greet.bind(person, 'Hello');
boundGreet('!'); // Hello, John!
45. What is the Array.prototype.forEach method?
Example Answer: Array.prototype.forEach executes a provided function once for each array element.

javascript
Copy code
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
// 1
// 2
// 3
46. What is Array.prototype.some?
Example Answer: Array.prototype.some tests whether at least one element in the array passes the provided function's test.

javascript
Copy code
const numbers = [1, 2, 3];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true
47. What is Array.prototype.every?
Example Answer: Array.prototype.every tests whether all elements in the array pass the provided function's test.

javascript
Copy code
const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
48. What is Array.prototype.find?
Example Answer: Array.prototype.find returns the first element in the array that satisfies the provided testing function.

javascript
Copy code
const numbers = [1, 2, 3];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2
49. What is Array.prototype.findIndex?
Example Answer: Array.prototype.findIndex returns the index of the first element that satisfies the provided testing function.

javascript
Copy code
const numbers = [1, 2, 3];
const index = numbers.findIndex(num => num % 2 === 0);
console.log(index); // 1
50. What is Array.prototype.slice?
Example Answer: Array.prototype.slice returns a shallow copy of a portion of an array into a new array object.

javascript
Copy code
const numbers = [1, 2, 3, 4];
const sliced = numbers.slice(1, 3);
console.log(sliced); // [2, 3]
51. What is Array.prototype.concat?
Example Answer: Array.prototype.concat merges two or more arrays and returns a new array.

javascript
Copy code
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
52. What is Array.prototype.sort?
Example Answer: Array.prototype.sort sorts the elements of an array in place and returns the sorted array.

javascript
Copy code
const numbers = [4, 2, 3, 1];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4]
53. What is Array.prototype.reverse?
Example Answer: Array.prototype.reverse reverses the elements of an array in place.

javascript
Copy code
const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]
54. What is Array.prototype.push?
Example Answer: Array.prototype.push adds one or more elements to the end of an array and returns the new length of the array.

javascript
Copy code
const numbers = [1, 2];
numbers.push(3, 4);
console.log(numbers); // [1, 2, 3, 4]
55. What is Array.prototype.pop?
Example Answer: Array.prototype.pop removes the last element from an array and returns that element.

javascript
Copy code
const numbers = [1, 2, 3];
const last = numbers.pop();
console.log(last); // 3
console.log(numbers); // [1, 2]
56. What is Array.prototype.shift?
Example Answer: Array.prototype.shift removes the first element from an array and returns that element.

javascript
Copy code
const numbers = [1, 2, 3];
const first = numbers.shift();
console.log(first); // 1
console.log(numbers); // [2, 3]
57. What is Array.prototype.unshift?
Example Answer: Array.prototype.unshift adds one or more elements to the beginning of an array and returns the new length of the array.

javascript
Copy code
const numbers = [2, 3];
numbers.unshift(0, 1);
console.log(numbers); // [0, 1, 2, 3]
58. What is Array.prototype.join?
Example Answer: Array.prototype.join joins all elements of an array into a single string, separated by a specified delimiter.

javascript
Copy code
const numbers = [1, 2, 3];
const joined = numbers.join('-');
console.log(joined); // '1-2-3'
59. What is Array.prototype.splice?
Example Answer: Array.prototype.splice changes the contents of an array by removing or replacing existing elements and/or adding new elements.

javascript
Copy code
const numbers = [1, 2, 3, 4];
numbers.splice(2, 1, 5, 6); // Removes 1 element at index 2 and adds 5 and 6
console.log(numbers); // [1, 2, 5, 6, 4]
60. What is Array.prototype.fill?
Example Answer: Array.prototype.fill fills all the elements of an array from a start index to an end index with a static value.

javascript
Copy code
const numbers = [1, 2, 3];
numbers.fill(0);
console.log(numbers); // [0, 0, 0]
61. What is the map method used for in JavaScript?
Example Answer: The map method creates a new array with the results of calling a provided function on every element in the calling array.

javascript
Copy code
const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]
62. What is the filter method used for in JavaScript?
Example Answer: The filter method creates a new array with all elements that pass the test implemented by the provided function.

javascript
Copy code
const numbers = [1, 2, 3, 4];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
63. What is Array.prototype.flat?
Example Answer: Array.prototype.flat creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

javascript
Copy code
const arr = [1, [2, [3, [4]]]];
const flat = arr.flat(2);
console.log(flat); // [1, 2, 3, [4]]
64. What is Array.prototype.flatMap?
Example Answer: Array.prototype.flatMap first maps each element using a mapping function, then flattens the result into a new array.

javascript
Copy code
const arr = [1, 2, 3];
const flatMap = arr.flatMap(x => [x, x * 2]);
console.log(flatMap); // [1, 2, 2, 4, 3, 6]
65. What is Array.prototype.at?
Example Answer: Array.prototype.at returns the element at the given index, allowing for negative indices to count back from the end of the array.

javascript
Copy code
const arr = [1, 2, 3];
console.log(arr.at(-1)); // 3
66. What is Object.keys?
Example Answer: Object.keys returns an array of a given object's own enumerable property names.

javascript
Copy code
const obj = { a: 1, b: 2 };
const keys = Object.keys(obj);
console.log(keys); // ['a', 'b']
67. What is Object.values?
Example Answer: Object.values returns an array of a given object's own enumerable property values.

javascript
Copy code
const obj = { a: 1, b: 2 };
const values = Object.values(obj);
console.log(values); // [1, 2]
68. What is Object.entries?
Example Answer: Object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

javascript
Copy code
const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
console.log(entries); // [['a', 1], ['b', 2]]
69. What is the delete operator in JavaScript?
Example Answer: The delete operator removes a property from an object.

javascript
Copy code
const obj = { a: 1, b: 2 };
delete obj.b;
console.log(obj); // { a: 1 }
70. What is Object.freeze?
Example Answer: Object.freeze prevents modifications to an object, including adding new properties, deleting existing properties, and changing the values of existing properties.

javascript
Copy code
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj.a); // 1
71. What is Object.seal?
Example Answer: Object.seal prevents new properties from being added to an object and marks all existing properties as non-configurable.

javascript
Copy code
const obj = { a: 1 };
Object.seal(obj);
obj.b = 2; // Property is not added
delete obj.a; // Property cannot be deleted
obj.a = 2; // Property value can be changed
console.log(obj); // { a: 2 }
72. What is Object.assign?
Example Answer: Object.assign copies the values of all enumerable own properties from one or more source objects to a target object.

javascript
Copy code
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }
73. What is the new keyword used for in JavaScript?
Example Answer: The new keyword is used to create an instance of a user-defined object type or built-in object types that have a constructor function.

javascript
Copy code
function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // John
74. What are JavaScript classes?
Example Answer: JavaScript classes are syntactical sugar over JavaScript's existing prototype-based inheritance and provide a more elegant way to create and manage objects and inheritance.

javascript
Copy code
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Hello, ' + this.name);
  }
}

const john = new Person('John');
john.greet(); // Hello, John
75. What is the super keyword in JavaScript classes?
Example Answer: The super keyword is used to call functions on an object's parent class.

javascript
Copy code
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log('Dog barks');
  }
}

const dog = new Dog();
dog.speak();
// Animal makes a sound
// Dog barks
76. What is Array.prototype.reduceRight?
Example Answer: Array.prototype.reduceRight executes a reducer function on each element of the array, from right to left, and returns a single value.

javascript
Copy code
const numbers = [1, 2, 3];
const sum = numbers.reduceRight((total, num) => total + num, 0);
console.log(sum); // 6
77. What is the window object in JavaScript?
Example Answer: The window object represents the browser's window and is the global object in a browser environment. It provides properties and methods for interacting with the browser.

javascript
Copy code
console.log(window.innerWidth); // width of the browser window
78. What is the document object in JavaScript?
Example Answer: The document object represents the web page loaded in the browser. It provides methods and properties for accessing and manipulating the page's content and structure.

javascript
Copy code
console.log(document.title); // title of the current document
79. What is a Promise in JavaScript?
Example Answer: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows chaining of operations to be performed once the promise is fulfilled or rejected.

javascript
Copy code
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000);
});

promise.then(result => console.log(result)); // Done!
80. What is Promise.all?
Example Answer: Promise.all takes an iterable of promises and, when all of the promises in the iterable have resolved, returns a single promise that resolves with an array of the resolved values.

javascript
Copy code
const p1 = Promise.resolve(3);
const p2 = Promise.resolve(42);
const p3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 42, 'foo']
});
81. What is Promise.race?
Example Answer: Promise.race returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

javascript
Copy code
const p1 = new Promise((resolve) => setTimeout(resolve, 500, 'first'));
const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'second'));

Promise.race([p1, p2]).then(value => {
  console.log(value); // 'second'
});
82. What is Promise.any?
Example Answer: Promise.any takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (i.e., all are rejected), then it returns a promise that is rejected with an AggregateError.

javascript
Copy code
const p1 = Promise.reject('error1');
const p2 = Promise.reject('error2');
const p3 = Promise.resolve('success');

Promise.any([p1, p2, p3]).then(value => {
  console.log(value); // 'success'
});
83. What is Promise.allSettled?
Example Answer: Promise.allSettled takes an iterable of promises and, once all of the promises have either resolved or rejected, returns a promise that resolves with an array of objects describing the outcome of each promise.

javascript
Copy code
const p1 = Promise.resolve(3);
const p2 = Promise.reject('error');
const p3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

Promise.allSettled([p1, p2, p3]).then(results => {
  console.log(results);
  /*
    [
      { status: 'fulfilled', value: 3 },
      { status: 'rejected', reason: 'error' },
      { status: 'fulfilled', value: 'foo' }
    ]
  */
});
84. What is Object.create?
Example Answer: Object.create creates a new object with the specified prototype object and properties.

javascript
Copy code
const person = { name: 'John' };
const john = Object.create(person);
console.log(john.name); // John
85. What is the this keyword in JavaScript?
Example Answer: The this keyword refers to the context object on which the function was called. Its value is determined by how the function is called.

javascript
Copy code
function show() {
  console.log(this);
}

const obj = { name: 'John', show };
obj.show(); // { name: 'John', show: [Function: show] }
86. What is the with statement in JavaScript?
Example Answer: The with statement extends the scope chain for a statement, allowing you to access the properties of an object without having to explicitly reference the object. It is generally discouraged and should be avoided in modern JavaScript.

javascript
Copy code
const obj = { a: 1, b: 2 };
with (obj) {
  console.log(a + b); // 3
}
87. What is null in JavaScript?
Example Answer: null is a special value representing the intentional absence of any object value. It is often used to indicate that a variable has been explicitly set to have no value.

javascript
Copy code
const obj = null;
console.log(obj); // null
88. What is undefined in JavaScript?
Example Answer: undefined is a primitive value automatically assigned to variables that have just been declared or to object properties that do not exist.

javascript
Copy code
let x;
console.log(x); // undefined
89. What is the difference between null and undefined?
Example Answer: null is an assigned value representing no value or object, while undefined is a variable state indicating it has not been assigned a value.

javascript
Copy code
let x = null;  // explicitly assigned null
let y;         // implicitly undefined

console.log(x === null);       // true
console.log(y === undefined);  // true
console.log(x === y);          // false
90. What is typeof in JavaScript?
Example Answer: The typeof operator returns a string indicating the type of the unevaluated operand.

javascript
Copy code
console.log(typeof 42);         // 'number'
console.log(typeof 'hello');    // 'string'
console.log(typeof {});         // 'object'
console.log(typeof []);         // 'object'
console.log(typeof function(){}); // 'function'
91. What is instanceof in JavaScript?
Example Answer: The instanceof operator tests whether an object is an instance of a constructor function or class.

javascript
Copy code
class Person {}
const john = new Person();
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
92. What is a closure in JavaScript?
Example Answer: A closure is a feature where an inner function gets access to variables from an outer function even after the outer function has finished executing.

javascript
Copy code
function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
93. What is the eval function in JavaScript?
Example Answer: The eval function executes a string of JavaScript code and returns the result. Its use is generally discouraged due to potential security risks and performance issues.

javascript
Copy code
const result = eval('2 + 2');
console.log(result); // 4
94. What is the with statement in JavaScript?
Example Answer: The with statement extends the scope chain for a statement. It is not recommended for use because it can lead to confusing and hard-to-maintain code.

javascript
Copy code
const obj = { x: 1 };
with (obj) {
  console.log(x); // 1
}
95. What is the for...in loop in JavaScript?
Example Answer: The for...in loop iterates over the enumerable properties of an object.

javascript
Copy code
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}
// Output:
// a 1
// b 2
96. What is the for...of loop in JavaScript?
Example Answer: The for...of loop iterates over iterable objects like arrays, strings, or other collections, providing access to the values of the iterable.

javascript
Copy code
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}
// Output:
// 1
// 2
// 3
97. What is the try...catch statement in JavaScript?
Example Answer: The try...catch statement allows you to handle errors gracefully by defining a block of code to try and a block to catch and handle errors if any occur.

javascript
Copy code
try {
  const result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log('An error occurred:', error);
}
98. What is the throw statement in JavaScript?
Example Answer: The throw statement allows you to create a custom error and throw it, which can be caught by a try...catch block.

javascript
Copy code
function validateNumber(num) {
  if (typeof num !== 'number') {
    throw new Error('Not a number');
  }
}

try {
  validateNumber('string');
} catch (error) {
  console.log(error.message); // Not a number
}
99. What is the finally block in JavaScript?
Example Answer: The finally block executes code after the try and catch blocks, regardless of whether an exception was thrown or not.

javascript
Copy code
try {
  console.log('Try block');
} catch (error) {
  console.log('Catch block');
} finally {
  console.log('Finally block');
}
// Output:
// Try block
// Finally block
100. What is async/await in JavaScript?
Example Answer: async/await provides a syntax for working with asynchronous code that is easier to read and write. async functions return a promise, and await pauses the function execution until the promise is resolved.

javascript
Copy code
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

fetchData();
101. What is event delegation in JavaScript?
Example Answer: Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements. This is efficient for handling events for multiple elements.

javascript
Copy code
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target && event.target.matches('button')) {
    console.log('Button clicked:', event.target.textContent);
  }
});
102. What is localStorage in JavaScript?
Example Answer: localStorage is a web storage API that allows you to store key-value pairs in a web browser with no expiration time.

javascript
Copy code
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
console.log(value); // 'value'
103. What is sessionStorage in JavaScript?
Example Answer: sessionStorage is a web storage API that allows you to store key-value pairs for the duration of the page session. Data is lost when the page session ends.

javascript
Copy code
sessionStorage.setItem('key', 'value');
const value = sessionStorage.getItem('key');
console.log(value); // 'value'
104. What is WebSocket in JavaScript?
Example Answer: WebSocket is a protocol for full-duplex communication channels over a single TCP connection, allowing real-time communication between a client and server.

javascript
Copy code
const socket = new WebSocket('ws://example.com/socket');

socket.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

socket.send('Hello, server!');
105. What is fetch in JavaScript?
Example Answer: fetch is a modern web API for making network requests. It returns a Promise that resolves to the Response object representing the response to the request.

javascript
Copy code
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
106. What is XMLHttpRequest?
Example Answer: XMLHttpRequest is an older API for making HTTP requests in JavaScript. It is often replaced by fetch in modern applications but is still widely used.

javascript
Copy code
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
107. What is a generator function in JavaScript?
Example Answer: A generator function is a special type of function that can be paused and resumed. It uses the function* syntax and the yield keyword to yield multiple values.

javascript
Copy code
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = counter();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
108. What is the spread operator in JavaScript?
Example Answer: The spread operator (...) expands an iterable (like an array) into individual elements.

javascript
Copy code
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // [1, 2, 3, 4, 5]
109. What is the rest parameter in JavaScript?
Example Answer: The rest parameter (...) allows a function to accept an indefinite number of arguments as an array.

javascript
Copy code
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
110. What is a Set in JavaScript?
Example Answer: A Set is a collection of unique values, where values can be of any type.

javascript
Copy code
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set { 1, 2, 3 }
111. What is a Map in JavaScript?
Example Answer: A Map is a collection of key-value pairs where keys and values can be of any type. It maintains the insertion order of keys.

javascript
Copy code
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // John
112. What is the Object constructor?
Example Answer: The Object constructor creates a new object. It can be used with or without the new keyword.

javascript
Copy code
const obj1 = new Object();
const obj2 = Object.create(null);
113. What are template literals in JavaScript?
Example Answer: Template literals are string literals allowing embedded expressions and multi-line strings. They use backticks (``) instead of single or double quotes.

javascript
Copy code
const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!
114. What is Object.prototype?
Example Answer: Object.prototype is the prototype object of all JavaScript objects, providing properties and methods that all objects inherit.

javascript
Copy code
console.log(Object.prototype.toString); // function toString() { [native code] }
115. What are Symbol data types in JavaScript?
Example Answer: Symbol is a primitive data type that represents a unique identifier. Symbols are used to create unique object keys.

javascript
Copy code
const sym = Symbol('description');
console.log(sym); // Symbol(description)
116. What is WeakMap in JavaScript?
Example Answer: WeakMap is a collection of key-value pairs where keys must be objects, and the values can be of any type. Keys are weakly referenced, allowing them to be garbage-collected.

javascript
Copy code
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // 'value'
117. What is WeakSet in JavaScript?
Example Answer: WeakSet is a collection of objects where each object can only occur once. The references to objects in a WeakSet are weakly held, allowing them to be garbage-collected.

javascript
Copy code
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
118. What is Object.is in JavaScript?
Example Answer: Object.is compares two values to determine if they are the same value, similar to ===, but with special handling for NaN and -0.

javascript
Copy code
console.log(Object.is('foo', 'foo')); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(-0, +0)); // false
119. What is Reflect in JavaScript?
Example Answer: Reflect is a built-in object that provides methods for intercepting and interacting with objects in a manner similar to Proxy handlers. It is used for low-level operations on objects.

javascript
Copy code
const obj = { a: 1 };
console.log(Reflect.get(obj, 'a')); // 1
120. What are proxys in JavaScript?
Example Answer: Proxy is a built-in object that allows you to create a proxy for another object, intercepting and customizing operations like property access, assignment, and function calls.

javascript
Copy code
const handler = {
  get(target, property) {
    return property in target ? target[property] : 'Property does not exist';
  }
};

const proxy = new Proxy({}, handler);
proxy.a = 1;
console.log(proxy.a); // 1
console.log(proxy.b); // Property does not exist

// array - storing a collection of multiple items under a single variable name
// () - paranthesis, [] - brackets, {} - braces

// Properties: 
// 1) JavaScript arrays are resizable and can contain a mix of different data types. 
// 2) JavaScript arrays are zero-indexed
// 3) JavaScript array-copy operations create shallow copies.  (A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.)

//---------------copy operation in array-----------------
const fruits = ["Strawberry", "Mango"];

// Create a copy using spread syntax.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]

// Create a copy using the from() method.
const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]



const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) - adding element in the array
// myArr.push(7)
// myArr.pop() - removing the last element in the array

// myArr.unshift(9) - adding element to the start - time consuming as we need to shift all the elements
// myArr.shift() - removes the first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); - returns -1 if element doesn't exists

// const newArr = myArr.join() - join all the elements of myArr into a string, EX: [1,2,3,4] => 1,2,3,4

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //returns a section of array, exclude last index mentioned

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // includes the last index also, remove the mentioned elements from original array and stored in myn2
console.log("C ", myArr);
console.log(myn2);

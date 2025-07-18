// Dates

let myDate = new Date()  //gives current date and time
// console.log(myDate.toString());  - Fri Jul 18 2025 17:00:26 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());   - 'Fri Jul 18 2025
// console.log(myDate.toLocaleString());   - '7/18/2025, 5:00:26 PM'
// console.log(typeof myDate); //Object    

// Declaring our own date
// let myCreatedDate = new Date(2023, 0, 23)  // year month date - month starts with 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)   // year month date hour min sec - let myCreatedDate = new Date(2023, 0, 23,5,3,90) => Mon Jan 23 2023 05:04:30 GMT+0530 (India Standard Time)
// let myCreatedDate = new Date("2023-01-14")  //yy-mm-dd
let myCreatedDate = new Date("01-14-2023") //mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  //Date.now() returns the current time in milliseconds since January 1, 1970, 00:00:00 UTC

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  - in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


// const tinderUser = new Object()  - singleton object, Creates a new, empty object. Equivalent to {} — it’s just more verbose.
const tinderUser = {}    //non singleton object - shorthand for creating an empty object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } - {obj1: {1: "a", 2: "b"},obj2: {3: "a", 4: "b"}}
// const obj3 = Object.assign({}, obj1, obj2, obj4) - { 1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b" }
// const obj3 = Object.assign(obj1, obj2, obj4) - { 1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b" }

//What is the difference between above two approaches? obj1 gets mutated, The properties from obj2 and obj4 are added into obj1, obj3 is not a new object — it's just a reference to obj1


const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); - returns keys of the object in an array
// console.log(Object.values(tinderUser)); - returns values of the object in an array
// console.log(Object.entries(tinderUser)); - returns a 2D array with each entry consists of key-value as an array EX: [['id',20],['Name','Hitesh']]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); - checks if the key exists or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


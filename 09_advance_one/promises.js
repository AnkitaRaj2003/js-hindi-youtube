const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// async – Means "this function works asynchronously"
// "This function can pause and resume later."
// You mark a function as async when it contains steps that may take time (e.g., waiting for a server, reading a file, or setting a timer).
// It lets JavaScript run other code while waiting, instead of freezing the whole program.

// await – Means "pause here until it’s ready"
// "Hold on here until we get the result, then move on."
// Used only inside an async function.
// It stops that line of code temporarily while the result is loading — but doesn’t block the whole app.

// "An asynchronous (async) function is meant for tasks that may take time to complete (like network requests or timers). That's why we use await inside it — to pause and wait for that specific task to finish, while JavaScript can continue running other code in the background."
// 🔍 Key Concepts Explained:
// async: Marks a function as asynchronous, allowing the use of await inside it.
// await: Waits for a specific asynchronous operation (like fetching data) to complete.
// Non-blocking: While waiting with await, JavaScript doesn’t stop everything — it continues running other tasks on the call stack (thanks to the event loop and Web APIs).

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {   // uppar wale function ne jo return kara hai vo isme aaega
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

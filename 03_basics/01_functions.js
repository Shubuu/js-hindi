function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


// sayMyName    (reference)
// sayMyName()   (execute) 

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// // addTwoNumbers()
// // addTwoNumbers(8, 6)
// // addTwoNumbers(3, "a")
// // addTwoNumbers(8, null)

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result
//     console.log("Hitesh");
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result:", result);

// function loginUserMessage(username = "sam") {
//     // if(username === undefined)
//         if(!username){
//         console.log("Please enter a username");
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("Subbu"))
// console.log(loginUserMessage())

function calculaterCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculaterCartPrice(200, 400, 500, 2000))

const user = {
     username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
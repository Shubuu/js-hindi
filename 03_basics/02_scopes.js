var c = 300
let a = 45
if (true) {
let a = 10
const b = 20
var c = 30
console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    // function declare

    function two(){
        const website = "youtube"
        console.log(username);
    }
        // console.log(website);

// function call
    two()
}

// one()

if(true) {
     const username = "hitesh"
     if(username === "hitesh") {
        const website = " youtube"
              console.log(username + website);
     }
    //   console.log(website);
}

// console.log(username);

// ************************* intresting ************************

console.log(addone(5))
// only declare
function addone(num){
    return num + 1
}

// declare & hold with variable
addTwo(5)
const addTwo = function(num){
    return num + 2
} 
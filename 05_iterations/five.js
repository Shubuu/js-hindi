const coding = ["js", "ruby", "java", "python", "cpp"]

// 1
// coding.forEach( function (val) {
//     console.log(val);
// } )

// 2
// coding.forEach( (item) => {
//     console.log(item);
// })

// 3
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// 4
coding.forEach( (item, index, arr)=> { 
    console.log(item, index, arr);
} )
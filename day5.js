// filter
// function isOdd(arr){
//     return arr%2!=0;
// }
// let arr = [1,2,8,5,4,4,5,4,58,5,9];
// let data = arr.filter(isOdd)
// console.log(data)

// function isEven(arr){
//     return arr%2===0;
// }
// let arr = [1,2,8,5,4,4,5,4,58,5,9];
// let data = arr.filter(isEven)
// console.log(data)

// - How do you filter out even numbers from an array and then square them?

// function isEven(arr){
//     return arr%2===0;
// }

// function square(arr){
//     return arr*arr;
// }
// let arr = [1,2,8,5,4,4,5,4,58,5,9];
// let data = arr.filter(isEven).map(square)
// console.log(data)

//Given an array of strings, how can you filter only those longer than 5 characters and convert them to uppercase?
// function countchar(arr){
//     return arr.length>=5;
// }
// let arr = ['Ram','shayama','ramesh','satyendra','mahendra','satyam']

// let updatedString = arr.filter(countchar).map((arr)=> arr.toUpperCase())

// console.log(updatedString)

//How do you filter numbers greater than the average of the array and then map them to a formatted string?
let arr = [10, 20, 30, 40, 50];
let average = arr.reduce((sum, num) => sum + num, 0);
let filtered = arr.filter(num => num > average);
let formatted = filtered.map(num => `Value: ${num} is above of the average`);
console.log("Average:", average);
console.log("Result:", formatted);

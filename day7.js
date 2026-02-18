// // few hoisting concept

// // console.log(a);
// // var a = ()=>{
// //     console.log("Hiii")
// // }

// // spread operator
// // let arr1 = [1,2,5,4,5,6,2,1,2,4,7,8,];
// // let arr2 = [1,8,7,9,5,8,4];
// // let add = {...arr1 , ...arr2}

// // console.log(add)

// // let arr1 = [1,2,5,4,5,6,2,1,2,4,7,8,];
// // let arr2 = [1,8,7,9,5,8,4];

// // let combine = arr1.concat(arr2)
// // console.log(combine)

// // let arr1 = [1,2,5,4,5,6,2,1,2,4,7,8,14,15];
// // let arr2 = [1,8,7,9,5,8,4,10];

// // let combinedUnique = [...new Set([...arr1, ...arr2])];
// // console.log(combinedUnique);

// // try {
// //   // Code that may throw an error
// //   let num = 10;
// //   let result = num.toUpperCase(); //  Error: toUpperCase is not a function on numbers
// //   console.log(result);
// // } catch (error) {
// //   // Code that runs if an error occurs
// //   console.log("An error occurred:", error.message);
// // }

// // console.log("Program continues running...");

// let jsonString = '{"name":"Satyam","age":22}';

// try {
//   // Correct parsing
//   let user = JSON.parse(jsonString);
//   console.log("User name:", user.name);

//   // Intentional error: invalid JSON
//   let badJson = '{"name":"Satyam", "age":22'; // missing closing brace
//   let broken = JSON.parse(badJson); //  will throw error
//   console.log(broken);
// } catch (error) {
//   console.log("JSON parsing failed:", error.message);
// }

// console.log("Program continues smoothly...");
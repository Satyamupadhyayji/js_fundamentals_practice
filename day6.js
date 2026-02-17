// async function fetchData() {
//   // Sequential (slower)
//   const user = await fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json());

//   console.log("Sequential:", { user, posts });

//   // Parallel (faster)
//   const [userData, postData] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json())
//   ]);

//   console.log("Parallel:", { userData, postData });
// }

// fetchData();

// async function fetchData() {
//   // Sequential (slower)
//   const user = await fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json());

//   console.log("Sequential:", { user, posts });

//   // Parallel (faster)
//   const [userData, postData] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json())
//   ]);

//   console.log("Parallel:", { userData, postData });
// }

// fetchData();

// function sumEvenPlaceDigits(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) { // even index (0, 2, 4, ...)
//       let num = arr[i];
//       // break number into digits and sum them
//       while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//       }
//     }
//   }

//   return sum;
// }

// Example usage:
// const numbers = [12, 34, 56, 78, 90];
// console.log(sumEvenPlaceDigits(numbers)); 
// Explanation: even places → 12, 56, 90 → digits sum = (1+2) + (5+6) + (9+0) = 23
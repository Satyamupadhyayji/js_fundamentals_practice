// async function (by using this function we can make a asynchronous code to synchronous)

// async function fetchdata(){
//      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//      let json = await data.json();
//      console.log(json);
// }

// fetchdata()

// async function getData(){
//     let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.44250&lng=81.85170&restaurantId=508862&catalog_qa=undefined&submitAction=ENTER");
//     let json = await data.json();
//     console.log(json)
// }

// getData()

// map function

// function double(arr){
//     return arr*2;
// }

// arr1 = [1,4,6,8,4];
// console.log(arr1.map(double))

// function triple(arr){
//     return arr*3;
// }
// arr2 = [3,4,5,2,1,45,2];
// let num = arr2.map(triple)
// console.log(num)

// let name = ['satyam','shyam','mohan','sita']
// let updatedname = name.map((n)=>{
//     return 'hello'+" " +n;
// })
// console.log(updatedname)
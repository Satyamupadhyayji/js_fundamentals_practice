//console.log("Hello, World!");

/*1.var (old method)
re-declare
update
function scope
var a = 10;
var a = 20;
a = 30;
console.log(a)
*/

/*2.let (new mathod)
block-scope
not re-declare
update
let a = 10;
let a = 20; //Error
a = 50
console.log(a)
*/

/*3.const(for constant values)
 can't update
 can't re-declare
 must be initialized
 block scope
const a = 10;
const b = {name: "satyam"}
b.name = "upadhyay";// valid because only references are stored
console.log(b.name)
console.log(a)
*/



/* 
There are 3 types of scope in js-
1.Global scope
2.Block scope
3.Function scope
(let,const are block scope but var are function scope)

{
    block code;
}
if(true){
    let a = 10;
    if(true){
        let b = 20;
        console.log(b)//fine
        console.log(a)//fine
    }
    console.log(b)//invalid
}
    // Function scope
*/

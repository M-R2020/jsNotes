//* variables
//* spacing in-between doesn't matter, but it's not clean. don't leave unused space.
//* let and var are pretty much the same thing, but let is newer. use let.
let a=2;

   let b  =   1;
//* 1  2  3   4
//* 1-keyword
//* 2- variable name. can pretty much be anything. it should make sense to what you're doing
//* 3- Assignment operator
//* 4- variable value. whatever is after the = is the variable value

console.log(a +b);

let c=3;

//*case sensetivity is important in JS. cannot have spaces in var names
//* the below is two different variables
let hello="greet"
let Hello="greet again"

let hiThere="hey";

//* VAR LET CONST
var x = 1; //*older version
let y = 2;  //*use this newer version
const z= 3; //* not changable in future

//* DECLARATION VS INITIALIZATION
//* declaration is what is on the lefthand side of the variable
let n;  //*in this case let is the declaration
console.log(n);
n= 10; //*initialization, giving your variable value. if you don't initialize your variable you will get undefined
console.log(n);


//* LET vs CONST

let today = 'Great' //* always use single or double quotes in a string
const elevenFifty= 'Wonderful'

console.log(today, elevenFifty);

today='Lovely!' //* you can re-assign a let
console.log(today, elevenFifty);

elevenFifty='Super!' //* CANNOT RE-ASSIGN A CONST. YOU WILL GET AN ERROR MESSAGE

console.log(today, elevenFifty);
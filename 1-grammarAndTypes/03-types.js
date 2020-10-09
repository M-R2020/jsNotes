//* BOOLEANS
let on= true;
console.log(on);

let off=false;
console.log(off);

//* NULL- an empty value. null is different than undefined. it is currently empty but will get info from it later in the program*//
let empty= null;
console.log(empty);


//*UNDEFINED
let undef= undefined;
console.log(undef);

let x;
console.log(x); //*x is undefined


//* NUMBERS

let degrees= 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; //*oncey ou get to 16 digits, JS has weird behavior and rounds up
console.log(rounded);

let notQuite= 0.2+ 0.1; //* another weird JS behavior.  'rounds out' 
console.log(notQuite);


let numbersAreHard = ( 0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number('123'); //* you would think it would be a string, but the Number () turns it into a number 122


//*STRING

let stringOne = "double quotes";
let stringTwo= 'single quotes';
let stringThree= 'I\'m home' //* if you're using single quotes and need appostrphe, put back slash to tell JS you're not breaking the code*//
letstringFour = `I'm home`; //* good use for ` string interperlation. adding a var to a string ${}
let stringFive= `You can use ${stringOne} or ${stringTwo}`

console.log(stringFive);


let first = 1050 + 100; //* these are numbers and will be added to get 1150
let second = '1050' + '100'; //* concatenation. adding two strings together you will get 1050100
console.log(first);
console.log(second);
console.log(typeof first); //* allows you to see what TYPE 
console.log(typeof second);

let animal= 'dog';

console.log('I have a '+ animal);
console.log(`I have a ${animal}`);

//*OBJECTS- used to store many values, instead of one value

let frodo={  //* curly braces define an object
    //* key: value, called a key-value pair
    race: 'hobbit', //* hobbit is a string so you can use ` " ' 
    rings: 1,
    isShort: true,
}

console.log(frodo);
console.log(typeof frodo);

//* ARRAYS  similar to object, hold multiple data types but more like a list

let tacos = ['large', 4, true]; //* different value types:string, number, boolean. uses indexes. numberical order starting at 0. uses []*//

console.log(tacos);
console.log(typeof tacos); //* JS classifies arrays as objects (holds different value types). arrays are pretty much objects without keys *//



//* STRING PROPERTIES AND METHODS- spaces do count as characters in a string
//* methods-() right after

let name= 'Monica';
console.log(name.length); //*counts the amount of characters in a string

console.log(name.toUpperCase ()); //* changes the whole string into UpperCase

let home= 'My home is franklin';
console.log(home.includes('Franklin')); //*looks to see if the string contains this specific word- boolean t or f- case sensetive *//


let sent='This sentence will be split into individual parts';
let chars= sent.split(' ');
console.log(chars);

console.log(sent.split (' '));
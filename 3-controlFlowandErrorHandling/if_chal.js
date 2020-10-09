//* dot notations
// let student = {   //student=object
//     name : 'Justin',
//     grade : 12 
// };
// console.log(student.name);

// let names = [  // called an array BUT data type is object

//     'justin',
//     'adam',
//     'amy'
// ];

// //ways to access an object
// console.log (student.name);
// console.log (student ['name']);

// //ways to access an array
// console.log(names[2]);

// console.log (names.slice(1,3));

/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/
// let myName='Monica Ragle';

// if (myName= 'Monica Ragle'){
//     console.log(myName);
// } else { console.log('Hello what is your name?')}


/* justin solution: 
let name= 'Justin';
if (name == 'Justin'){
    console.log(name);
} else{
    console.log('Hello what is your name?);
}
silver:

if (name=='Justin'){
    console.log('Hello my name is', name + '!');

} else{
    console.log('Hello what is your name?');
}
gold:
}else{
    console.log('Hello is your name', name +'?');
}

string interp:

console.log (`Hello, is your name ${name}?`);

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

// let name='zAchARy';

// if (name[0] == name[0].isUpperCase()){
//     console.log(name[0]);
// }; else{
//     console.log()
// }
//my solution didn't work. see justins
// if (name=[0].isupper) {
//     console.log(name);
// }else{
//     console.log('hey, this isn`t written correctly');
// }
// if(name[0].isupper){
//     console.log(name[0]);
// }else{
//     console.log()
// }



/*justin solution:*/

// if (name[0] == name[0].toUpperCase()){
//     console.log(name);
// }else{
//     console.log("hey, this isn't written correctly");
// };


/* just messsing around
if (name[3] == name[3].toLowerCase()){
    console.log('good, there`s not a capital letter here');
}else{
    console.log('merrrrp');
}*/

//silver

let name ='zAchARy';

// if (name[0] == name[0].toUpperCase()){ () meaning theresedata to retrieve
//     console.log(name[0])
// }else{
//     console.log(name.slice(1).toLowerCase());
// }
//gold

if (name[0] == name[0].toUpperCase()){
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log('console log #1:', isUpperCase)
} else{
    let notUppercase = name.charAt(0).toUpperCase() + name.
    slice(1).toLowerCase();
    console.log ('console log #2:', notUppercase);
}


/*
CHALLENGE
************
    Write a ternary that does the same thing as the age challenge
    Age Challenge (if else):
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }

    example of ternary: let num = 6;
    () ? true : false

(num > 0) ? console.log('yes') : console.log('no');
*/

let age = 30;

(age >= 25) ? console.log('yay! You can rent a car!') 
            : (age >= 21) ? console.log('yay you can drink')
                          : (age >=18) ? console.log('yay you can vote')
                                       : console.log ('sorry, youre too young to do anything fun')
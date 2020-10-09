
// let i = 7;
//i++ = i+1
// for= keyword. define the condition. i starts at 0
// is i less than ? while 1 < 10 add i (i++)

// for (i=0; i < 10; i++){
//     console.log(i);
// }

// for (i = 2, i < 20; i +=2){
//     console.log(i);
// }
// console.log('global variable', i);

// for (i=10; i>0; i--){
//     console.log(i);
// }
//challenge: using a for loop, start at 0 until you get to -24 but 2
// for (i=0; i>-25; i-=2){
//     console.log(i);
// }
//challenge: using a for loop, go through a name and display each letter individually
// let name='Monica Ragle';
// for (let i = 0; i < name.length; i++){
//     if (name[i]!=''){ 
//     console.log(name[i]);
// }
// }
/* for (your_name_choice) of (some collection){
        <do something>
}
1- for loop declaration
2. is a built in word saying all things in a collection
common name is 'for of' loop
gettting the length of a collection. whether it be letters, numbers, array
*/


// for (letter of name){
//     console.log(letter)
// }

// let fruits = ['apple', 'bananas', 'kiwi']
// for (fruit of fruits){
//     console.log(fruit)
// }

// Make a for loop where you add up all the numbers from 1 to 50(should equal 1275)

//my answer
// let value = (1,50){
//     for (i=0; i>51; i+i);
// }

//justins
let sum = 0;

for (let i =1; i<=50; i++){
    sum +=i;
}
console.log(sum);
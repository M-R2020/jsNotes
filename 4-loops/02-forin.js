
// let student = {
//     name: 'justin',
//     awesome: false,
//     degree: 'JavaScript',
//     week: 1

// }
// for (item in student){
//     console.log(item);
//     console.log(student[item]); // item some word to refer to inside loop ( in [key] you will get back what is the value)
// }

// let cats = ['tabby', 'british shorthair', 'burnese']
// for (cat in cats){
//     console.log(cat);
//     console.log(cats[cat]);
// }

/* challenge: write a for in loop that capitalizes the first letter of a nme and lowercases the rest of the name*/ 

// let name = 'jUstiN AhmAnN'

/* my solution:
for (name[0]==[0].toUpperCase){
    console.log(name[0].toUpperCase);
} */

//justins
let name = 'jUstiN AhmAnN'
let capName;

for (let i in name){
    if (i == 0){
        capName = name[i].toUpperCase();
    }else{
        capName += name[i].toLowerCase();

    }
}
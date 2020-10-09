//* comparison operators return boolean

//* Equal == : answers with a boolean
console.log('3'==3); //* just compares the value, not data type
console.log(3 == 3);
console.log('3' == '3');

//* Strict Equal === //* strict equality takes in the value and data type
console.log('3' === 3); //* false
console.log (3===3); //* true

//* Not equal != - referred to a lot as bang
console.log('3' != 3); //* false- technically is equal if we aren't comparing data types

//* strict not equal !==
console.log('3' !== 3); //* true- value and data types are not the same

//* Greater than
2>1;

//* Less than

1<2;

//* Greater than or equal to
3>=2; //* do not get it confused with => this is a reserved function for later. type it how you say it 

//* less than or equal to 
2<=3;

//* and

2 && 3

//* Or

2|| 3


//* weird JS thing
console.log(3>2>=1); //* JS steps: 1- console.log(3>2); true. step2- console.log(true>1); false. 0 is false 1 is true
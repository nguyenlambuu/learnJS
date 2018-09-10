/**************************
 * Hello World!!!
***************************/
// console.log('Hello World');

/**************************
 * Variables and data types
***************************/
/*
// String
var firstName = 'Buu';
console.log(firstName); // --> Buu
var lastName = 'Nguyen';

// Number
var age = '24';

// Boolean
var fullAge = true;
console.log(fullAge); // --> true

// Undefined
var job;
console.log(job); // --> undefined

var years = 2018;
*/

/**************************************
 * Variable mutation and type coercion
***************************************/
/*
var firstName = 'Buu';
var age = 24;

// Type coercion
console.log(firstName + ' ' + age); // convert number to string.

var job, isMarried;
job = 'developer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); // convert boolean to string.

// Variable mutation
age = 'twenty four';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); 
*/

/******************
 * Basic operators
*******************/
/*
var now, yearBuu, yearJohn;
now = 2018;
ageBuu = 24;
ageJohn = 33;

// Math operators
yearBuu = now- ageBuu;
yearJohn = now - ageJohn;

console.log(yearBuu);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var buuOlder = ageBuu > ageJohn;
console.log(buuOlder); // --> false

// typeof operator
console.log(typeof buuOlder); // --> boolean
console.log(typeof ageBuu); // --> number
console.log(typeof 'John is older than Buu'); // --> string

var x;
console.log(typeof x); // --> undefined
*/

/**********************
 * Operator precedence
***********************/

/*
var now = 2018;
var yearBuu = 1989;
var fullAge = 24;

// Multiple operators
var isFullAge = now - yearBuu >= fullAge;
console.log(isFullAge); // --> true

// Grouping
var ageBuu = now - yearBuu;
var ageMark = 35;
var average = (ageBuu + ageMark) / 2;
console.log(average); // --> 32

// Multiple assignments
var x , y;
x = y = (3 + 5) * 4 - 6; // --> 8 * 4 - 6 = 32 - 6 = 26
console.log(x, y); // --> 26 26

// More operators
x *= 2; // --> x = x * 2
console.log(x); // --> 52
x += 10; // --> x = x + 10
console.log(x); // --> 62
x++; // --> x = x + 1 --> x += 1
console.log(x); // --> 63
*/

/**********************
 * CODING CHALLENGE
***********************/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/
/*
var massMark, massJohn, heightMark, heightJohn, BMIMark, BMIJohn;
massMark = 57; //kg;
heightMark = 1.61; //meters

massJohn = 72;
heightJohn = 1.68;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('Mark\'s BMI: ' + BMIMark + '\n' + 'John\'s BMI: ' + BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/


/**********************
 * IF/ELSE statements
***********************/

/*
var firstName = 'Buu';
var civilStatus = 'single';

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark, massJohn, heightMark, heightJohn, BMIMark, BMIJohn;
massMark = 57; //kg;
heightMark = 1.61; //meters

massJohn = 72;
heightJohn = 1.68;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('Mark\'s BMI: ' + BMIMark + '\n' + 'John\'s BMI: ' + BMIJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI higher than John\'s');
} else {
    console.log('John\'s BMI higher than Mark\'s');
}
*/

/**********************
 * Boolean logic
***********************/

var firstName = 'Buu';
var age = 24;

if (age < 13){
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){ // Between 13 and 20
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30){ // Between 13 and 20
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man.');
}
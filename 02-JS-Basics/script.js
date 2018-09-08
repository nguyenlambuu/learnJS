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

/******************
 * Operator precedence
*******************/


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
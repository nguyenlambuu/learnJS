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

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
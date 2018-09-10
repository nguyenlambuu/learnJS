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

/*
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
*/

/**********************
 * The ternary operator and switch statements
 ***********************/

// var firstName = 'Buu';
// var age = 16;

// // Ternary operator
// age >= 18
// 	? console.log(firstName + ' drinks beer.')
// 	: console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice'; // Return beer or juice
// console.log(drink);

// /*
//     if(age >=18){
//         var drink = 'beer';
//     } else {
//         var drink = 'juice';
//     }
// */

// // Switch statement
// var job = 'designer';

// switch (job) {
// 	case 'teacher':
// 	case 'instructor':
// 	case 'lecturer':
// 		console.log(firstName + ' teaches kids how to code');
// 		break;
// 	case 'driver':
// 		console.log(firstName + ' drives an Uber in SG');
// 		break;
// 	case 'designer':
// 		console.log(firstName + ' designs beautiful websites');
// 		break;
// 	default:
// 		console.log(firstName + ' does something else.');
// }

// switch (true) {
// 	case age < 13:
// 		console.log(firstName + ' is a boy.');
// 		break;
// 	case age >= 13 && age < 20:
// 		console.log(firstName + ' is a teenager');
// 		break;
// 	case age >= 20 && age < 30:
// 		console.log(firstName + ' is a young man');
//         break;
//     default: console.log(firstName + ' is a man.');
// }

/**********************
 * Truthy and Falsy values and equality operators
 ***********************/

// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT FALSY VALUES
/*
 var height;
 console.log(typeof height); // --> undefined
height = '';
 if(height){ // --> false;
     console.log('Variable is defined');
 } else {
    console.log('Variable has NOT been defined'); // --> run
 }

 height = 0; // --> falsy value
 if (height || height === 0) {
    console.log('Variable is defined'); // --> run, because height === 0 is true
} else {
   console.log('Variable has NOT been defined'); 
 }


 // Equality operators

 height = 23; 
 // '23' == 23 --> true
 // But '23' === 23 --> false
 if (height == '23') {
    console.log('The == operator does type coercion!');
 }
 */

/**********************
 * CODING CHALLENGE 2
 ***********************/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMarry = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMarry);

if(scoreJohn > scoreMike && scoreJohn > scoreMarry){
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMarry){
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMarry > scoreJohn && scoreMarry > scoreMike) {
    console.log('Marry\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}

// if (scoreJohn > scoreMike){
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a draw');
// }
*/

/**********************
 * FUNCTIONS
 ***********************/
/*
 function calculateAge(birthYear) {
    return 2018 - birthYear;    
 }

 var ageBuu = calculateAge(1994);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageBuu, ageMike, ageJane);

 function yearUntilRetirement(birthYear, firstName) {
     var age = calculateAge(birthYear); // function calls other function
     var retirement = 60 - age;
     (retirement > 0) ? console.log(firstName + ' retires in ' + retirement + ' years.') : console.log(firstName + ' is already retired!');
     
 }

 yearUntilRetirement(1994, 'Buu');
 yearUntilRetirement(1948, 'Mike');
 yearUntilRetirement(1969, 'Jane');
 */

/**********************
 * Function Statements and Expressions
 ***********************/
/*
 // Function declaration
// function whatDoYouDo(job, firstName) {}

 // Function expresstion
 var whatDoYouDo = function (job, firstName) {
     switch (job){
         case 'teacher': return firstName + ' teaches kids how to code';

         case 'driver': return firstName + ' drives a Grab in SG';

         case 'designer': return firstName + ' designs beautiful websites';

         default: return firstName + ' does something else';
     }
 }

 console.log(whatDoYouDo('driver', 'Buu'));
 console.log(whatDoYouDo('teacher', 'Mike'));
 console.log(whatDoYouDo('designer', 'Jane'));
 console.log(whatDoYouDo('others', 'Doe'));
 */

/**********************
 * Arrays
 ***********************/
/*
 // Initialize new array
 var names = [ 'Buu', 'Mike', 'Jane' ];
 var years = new Array(1994, 1948, 1969);

 console.log(names);
 console.log(names[0]);
 console.log(names.length);

 // Mutate array data
 names[1] = 'Ben';
 names[5] = 'Marry'
 console.log(names);
 names[names.length] = 'Smith';
 console.log(names);

 // Different data types
var buu = [ 'Buu', 'Nguyen', 1994, 'teacher', false ];

buu.push('blue'); // Add element to the last of array
console.log(buu);
buu.unshift('Mr. '); // Add element to the first of array
console.log(buu);
buu.pop(); // Remove last element in array
console.log(buu);
buu.shift(); // Remove first element in array
console.log(buu);
console.log(buu.indexOf(1994)); // return index of element
console.log(buu.indexOf('designer')); // return -1 because it's not existed

buu.indexOf('designer') === -1 ? console.log('Buu is NOT a designer')
: console.log('Buu IS a designer');
*/

/**********************
 * CODING CHALLENGE 3
 ***********************/
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/
/*
function tipCalculator(bill) {
	var percentage;
	switch (true) {
		case bill < 50:
			percentage = 0.2;
			break;
		case bill >= 50 && bill < 200:
			percentage = 0.15;
			break;
		case bill > 200:
			percentage = 0.1;
			break;
	}
	return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
	tipCalculator(bills[0]),
	tipCalculator(bills[1]),
	tipCalculator(bills[2])
];

var finalValues = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(finalValues);
*/

/**********************
 * Objects and properties
 ***********************/
/*
 // Object literal
var buu = {
	firstName: 'Buu',
	lastName: 'Nguyen',
    birthYear: 1994,
    family: [ 'Jane', 'Smith', 'Bob', 'Mike' ],
    job: 'teacher',
    isMarried: false
};

// Get object data
console.log(buu.firstName); // --> Buu
console.log(buu['lastName']); // --> Nguyen
var x = 'birthYear';
console.log(buu[x]);

// Mutate object data
buu.job = 'designer';
buu['isMarried'] = true;
console.log(buu);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastname'] = 'Smith';
console.log(jane);
*/

/**********************
 * Objects and methods
 ***********************/
/*
var buu = {
	firstName: 'Buu',
	lastName: 'Nguyen',
    birthYear: 1994,
    family: [ 'Jane', 'Smith', 'Bob', 'Mike' ],
    job: 'teacher',
    isMarried: false,
    calculateAge: function(){
        this.age = 2018 - this.birthYear; // --> "this", what is means here in this context is buu. "This" means this object, the present, the current object. So, when we call this method here: this.birthYear will mean buu.birthYear
    }
};

// console.log(buu.calculateAge());
// buu.age = buu.calculateAge();
buu.calculateAge();
console.log(buu);
*/

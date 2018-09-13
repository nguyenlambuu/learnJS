/**********************
 * Function constructor
 ***********************/
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


Person.prototype.calculateAge = function (){
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var mike = new Person('Mike', 1944, 'designer');
var jane = new Person('Jane', 1958, 'teacher');
var bob = new Person('Bob', 1993, 'coder');

mike.calculateAge();
jane.calculateAge();
bob.calculateAge();

console.log(mike.lastName);
console.log(jane.lastName);
console.log(bob.lastName);
*/

/**********************
 * Object.create
 ***********************/
/*
var personProto = {
	calculateAge: function() {
		console.log(2018 - this.yearOfBirth);
	}
};

var john = Object.create(personProto); // --> Empty object with calculateAge prototype
john.firstName = 'John';
john.yearOfBirth = 1994;
john.job = 'teacher';

var jane = Object.create(personProto, {
    firstName: { value: 'Jane' },
    yearOfBirth: { value: 1949 },
    job: { value: 'designer' }
});
*/

/**********************
 * Primitive vs objects
 ***********************/
/*
 // Primitive hold value
 var a = 23;
 var b = a;
 a = 46;
 console.log(a); // --> 46
 console.log(b); // --> 23
 
// Object hold reference
 var obj1 = {
     name: 'John',
     age: 26
 };
 var obj2 = obj1;
 obj1.age = 30;
 console.log(obj1.age); // --> 30
 console.log(obj2.age); // --> 30
 
 // Functions
var age = 24;
var obj = {
    name: 'Buu',
    city: 'Sai Gon'
};

function change(a, b) {
    a = 30;
    b.city = 'New York'
}

change(age, obj);
console.log(age); // --> 24, because age is a primitive
console.log(obj.city); // --> New York
*/

/**********************
 * Passing functions as arguments
 ***********************/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrResult = [];
	for (var i = 0; i < arr.length; i++) {
		arrResult.push(fn(arr[i]));
	}
	return arrResult;
}

function calculateAge(element) {
	return 2018 - element;
}

function isFullAge(element) {
	return element >= 18;
}

function maxHeartRate(element) {
	if (element > 18 && element <= 81) {
		return Math.round(206.9 - 0.67 * element);
	} else {
		return -1;
	}
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var heartRates = arrayCalc(ages, maxHeartRate);
console.log(ages); // --> [28, 53, 81, 13, 20]
console.log(fullAges); // --> [true, true, true, false, true]
console.log(heartRates); // --> [188, 171, 153, -1, 194]
*/

/**********************
 * Functions returning functions
 ***********************/
/*
function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?');
		};
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		};
	} else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
teacherQuestion('Mark');
designerQuestion('Jane');
designerQuestion('Mike');

interviewQuestion('teacher')('Steve');
interviewQuestion('designer')('Bill');
interviewQuestion('driver')('Marry');
*/

/**********************
 * IIFE
 ***********************/
/*
// function game() {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// }
// game();

(function() {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

// console.log(score); // --> Error, score is not defined

(function (goodLuck){
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);
*/

/**********************
 * Closures
 ***********************/
/*
function retirement(retirementAge) {
	var message = ' years left until retirement.';

	return function(yearOfBirth){
		var age = 2018 - yearOfBirth;
		console.log((retirementAge - age) + message);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1994);
retirementGermany(1994);
retirementIceland(1994);

// Functions returning functions --> Return the same function with 3 times
// ------------------------------------------
function interviewQuestionFunctionReturn(job) {
	switch(true){
		case job === 'teacher': return function(name){
			console.log('What subject do you teach, ' + name);
		};
		case job === 'designer': return function(name){
			console.log(name + ', can you please explain what UX design is?');
		};
		default: return function(name){
			console.log('Hello ' + name + ', what do you do?');
		};
	}
}
// interviewQuestionFunctionReturn('teacher')('John');
// interviewQuestionFunctionReturn('designer')('Jane');
// interviewQuestionFunctionReturn('designer')('Mike');
// interviewQuestionFunctionReturn('other')('Bob');

// Closures
// ------------------------------------------
function interviewQuestionClosures(job) {
	
	return function(name){
		switch(true){
			case job === 'teacher': console.log('What subject do you teach, ' + name); break;
			case job === 'designer': console.log(name + ', can you please explain what UX design is?'); break;
			default: console.log('Hello ' + name + ', what do you do?'); break;
		}
	}
}

interviewQuestionClosures('teacher')('John');
interviewQuestionClosures('designer')('Jane');
interviewQuestionClosures('other')('Bob');
*/
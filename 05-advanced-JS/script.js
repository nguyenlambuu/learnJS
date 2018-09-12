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
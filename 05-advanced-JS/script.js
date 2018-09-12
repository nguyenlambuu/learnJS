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
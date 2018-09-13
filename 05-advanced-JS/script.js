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

/**********************
 * Call, Bind, Apply
 ***********************/
/*
 var john = {
	 name: 'John',
	 age: 1994,
	 job: 'teacher',
	 presentation: function(style, timeOfDay){
		 if(style === 'formal'){
			console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');			
		 } else if(style === 'friendly'){
			console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		 }
	 }
 }

 var emily = {
	 name: 'Emily',
	 age: 35,
	 job: 'designer'
 }

 john.presentation('formal', 'morning'); // --> Good morning, Ladies and gentlemen! I'm John, I'm a teacher and I'm 1994 years old.

 // Call
// ---------
 john.presentation.call(emily, 'friendly', 'afternoon');
 // Apply
// ---------
 john.presentation.call(emily, ['friendly', 'afternoon']);

// Bind
// ---------
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2018 - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullAgesJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullAgesJapan);
*/

/**********************
 * CODING CHALLENGE 6
 ***********************/
/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

(function() {
	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	// Display question
	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++) {
			console.log(i + ': ' + this.answers[i]);
		}
	};

	// Check the correct answer
	Question.prototype.checkAnswer = function(ans, callback) {
		var sc;
		if (ans === this.correct) {
			console.log('Correct');
			sc = callback(true);
		} else {
			console.log('Incorrect, try again!');

			sc = callback(false);
		}

		this.displayScore(sc);
	};

	// Display score
	Question.prototype.displayScore = function(score){
		console.log('Your current score is: ' + score);
		console.log('-------------------------------');
	}

	var question1 = new Question(
		'Is JavaScript the coolest programming language in the world?',
		['Yes', 'No'],
		0
	);
	var question2 = new Question(
		"What is the name of this course's teacher?",
		['John', 'Micheal', 'Jonas'],
		2
	);
	var question3 = new Question(
		'What does the best describe coding?',
		['Boring', 'Hard', 'Fun', 'Tedious'],
		2
	);

	

	var questions = [question1, question2, question3];

	function score() {
		var sc = 0;
		return function(correct) {
			if (correct) sc++;
			return sc;
		};
	}

	var keepScore = score();
	
	function nextQuestion() {
		var number, answer;

		number = Math.floor(Math.random() * questions.length);

		questions[number].displayQuestion();

		answer = prompt('Please select the correct answer.');

		if (answer !== 'exit') {
			questions[number].checkAnswer(parseInt(answer), keepScore);
			nextQuestion();
		} else {
			console.log('See you again');
	}
	}
	nextQuestion();
})();

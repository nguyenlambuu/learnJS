/**********************
 * Hoisting
 ***********************/
/*
 // Function declaration is OK
calculateAge(1994); // Call before define

 function calculateAge(year) {
     console.log(2018 - year);
 }

// Function expression is NOT OK
//  retirement(1994); // --> Error

 var retirement = function(year){
     console.log(60 - (2018 - year));
 }

 // Variables 
 console.log(age); // --> Undefined
 var age = 23;
 console.log(age);
 
function foo() {
    var age = 65;
    console.log(age);
}

foo(); // --> 65
console.log(age); // --> 23 --> global execution context object
*/

/**********************
 * Scoping 
 ***********************/
/*
 // First scoping example

 var a = 'Halo!';
 first();
 function first() {
     var b = 'Hi!';
     second();

     function second() {
         var c = 'Hey!';
         console.log(a + ' ' + b + ' ' + c);
         
     }
 }

 // Example to show the differece between excution stack and scope chain
 
 var a = 'Halo!';
 first();
 function first() {
     var b = 'Hi!';
     second();

     function second() {
         var c = 'Hey!';
         third();
     }
 }

 function third() {
     var d = 'John';
    //  console.log(c); // --> undefined;
    console.log(a + ' ' + d); 
 }
 */
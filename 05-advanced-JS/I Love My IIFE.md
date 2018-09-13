# I Love My IIFE
- - - -
An IIFE, or  [Immediately Invoked Function Expression](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) , is a common JavaScript design pattern used by most popular libraries (jQuery, Backbone.js, Modernizr, etc) to place all library code inside of a local scope.
In the words of  [James Padolsey](http://james.padolsey.com/javascript/iife-argument-madness/) :
> *An IIFE protects a module’s scope from the environment in which it is placed.*  
There are more benefits to using IIFE’s than just local scoping, but before we talk about some of the other benefits, let’s take a look at some code to see how to create a basic IIFE:
``` javascript
(function(){
  // my special code
}());
```
The above **IFFE** is just an anonymous function (no name attached to it) that is wrapped inside of a set of parentheses and called (invoked) immediately. Let’s break this down step by step.

## The Anonymous Function:
``` javascript
// Anonymous function
function(){
  // my special code
}(); // The parentheses make sure the anonymous function gets called immediately
```
A function, without a name, is created and then called (invoked) immediately via the `()` at the very end.

## The Parentheses
You might be wondering why we need to wrap the immediately invoked anonymous function inside of parentheses. Before I explain why, try the above code inside of a console window. Get a syntax error?
By wrapping the anonymous function inside of parentheses, the JavaScript parser knows to treat the anonymous function as a function expression instead of a function declaration. A function expression can be called (invoked) immediately by using a set of parentheses, but a function declaration cannot be.
**Note**: In case you forget the difference between JavaScript function expressions and function declarations:
*Function Expression* - `var test = function() {};`
*Function Declaration* - `function test() {};`
Since the anonymous function within our IIFE is a function expression and is not being assigned to a global variable, no global property is being created, and all of the properties created inside of the function expression are scoped locally to the expression itself.

## Other Benefits of using an IIFE
Whew, now that we understand the basic concept of an IIFE, let’s determine some other benefits of using them in your code.
#### Reduce scope lookups
A small performance benefit of using IIFE’s is the ability to pass commonly used global objects (window, document, jQuery, etc) to an IIFE’s anonymous function, and then reference these global objects within the IIFE via a local scope.
**Note**: JavaScript first looks for a property in the local scope, and then it goes all the way up the chain, last stopping at the global scope. Being able to place global objects in the local scope provides faster internal lookup speeds and performance.
Let’s look at a code example of passing global objects to an IIFE:
``` javascript
// Anonymous function that has three arguments
function(window, document, $) {

  // You can now reference the window, document, and jQuery objects in a local scope

}(window, document, window.jQuery); // The global window, document, and jQuery objects are passed into the anonymous function
```

#### Minification Optimization
Another small performance benefit of using IIFE’s is that it helps with minification optimization. Since we are able to pass global objects into the anonymous function as local values (parameters), a minifier is able to reduce the name of each global object to a one letter word (as long as you don’t already have a variable of the same name). Let’s look at the above code sample after minification:
``` javascript
/ Anonymous function that has three arguments
function(w, d, $) {

  // You can now reference the window, document, and jQuery objects in a local scope

}(window, document, window.jQuery); // The global window, document, and jQuery objects are passed into the anonymous function
```
**Note**: Another added benefit (when using jQuery), is that you can freely use the `$` without worrying about other library conflicts, since you passed in the global `jQuery` object and scoped it to the `$` as a local parameter.

## Readablility
One of the con’s with using IIFE’s is readability. If you have a lot of JavaScript code inside of an IIFE, and you want to find the parameters that you are passing into an IIFE, then you need to scroll all the way to the bottom of the page. Luckily, there is a more readable pattern that I have begun to use:
``` javascript
(function (library) {

    // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
    library(window, document, window.jQuery);

}

// Locally scoped parameters 
(function (window, document, $) {

// Library code goes here

}));
```
This IIFE pattern allows you see what global objects you are passing into your IIFE, without you having to scroll to the very bottom of a potentially very long file. Happy IIFE’ing!

Posted by Greg Franko Jan 5th, 2013 [I Love My IIFE - Greg Franko](http://gregfranko.com/blog/i-love-my-iife/)
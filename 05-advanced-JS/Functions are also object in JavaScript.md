# Functions are also object in JavaScript

- A function is an instance of the Object type;
- A function behaves like any other object;
- We can store functions in a variable;
- We can pass a function as an argument to another function;
- We can return a function from a function;
###### We have FIRST-CLASS FUNCTIONS

Callback function means we have a function, but we don’t want to call a function now. We want it to be called later by the other function.
``` javascript
function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(element) {
    return 2018 - element;
}

arrayCalc(years, calculateAge); // --> calculateAge is a callback function
```
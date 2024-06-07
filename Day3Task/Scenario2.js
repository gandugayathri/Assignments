//Function declarations are hoisted in a similar manner to variable declarations

foo(); // "Hello, world!"

function foo() {
    console.log("Hello, world!");
}


//the variable bar is hoisted, but its assignment to the function is not, leading to an error

//bar(); // TypeError: bar is not a function

var bar = function () {
    console.log("Hello, world!");
};


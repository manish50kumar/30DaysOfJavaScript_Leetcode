// link of question : https://leetcode.com/problems/create-hello-world-function/


//2667 .  Create Hello World Function

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
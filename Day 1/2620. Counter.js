// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

//2620. Counter

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = 0;
    return function() {
        return n+counter++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
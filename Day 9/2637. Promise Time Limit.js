
//https://leetcode.com/problems/promise-time-limit/


//2637. Promise Time Limit

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        // Original Promise Function
        const promise = fn(...args);

        // Function to reject promise after timeout
        const timeOutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        });

        // race method which returns first settled promise data.
        return Promise.race([promise, timeOutPromise]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

//https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
//2721. Execute Asynchronous Functions in Parallel


/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    let remain = functions.length;
  let result = [];
  return new Promise((res, rej) => {
    functions.forEach((fn, i) => {
      fn()
        .then((data) => {
          remain--;
          result[i] = data;
          if (remain === 0) {
            res(result);
          }
        })
        .catch(rej)
    })
  })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
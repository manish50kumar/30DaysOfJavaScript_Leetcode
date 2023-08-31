


//https://leetcode.com/problems/timeout-cancellation/
// 2715. Timeout Cancellation


/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let cancelled = false;

  const executionTimer = setTimeout(() => {
    if (!cancelled) {
      const result = fn(...args);
      console.log(`fn(${args.join(',')}) called at t=${t}ms`);
      console.log(`Returned: ${result}`);
    }
  }, t);

  return function cancelFn() {
    cancelled = true;
    clearTimeout(executionTimer);
    console.log(`Cancellation called at t=${t}ms`);
  };
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now() 
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr))
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *           
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
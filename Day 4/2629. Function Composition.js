//https://leetcode.com/problems/function-composition/

// 2629. Function Composition


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
         let arr = functions.reverse();
        let ans = x ;
        arr.forEach((fn)=>{
            ans = fn(ans);
        });
        return ans;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
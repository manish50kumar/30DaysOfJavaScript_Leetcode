

//https://leetcode.com/problems/group-by/
//2631. Group By


/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const res = {}
    for (let item of this) {
        const key = fn(item)
        if (!res[key]) res[key] = []
        res[key].push(item)
    }
    return res
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */



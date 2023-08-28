
//https://leetcode.com/problems/array-reduce-transformation/
// 2626. Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    val=init
    for (i=0;i<nums.length;i++){
        val=fn(val,nums[i])
    }
    
    return val
};
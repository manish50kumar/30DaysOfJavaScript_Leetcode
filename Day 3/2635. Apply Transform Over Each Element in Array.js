// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript

//2635. Apply Transform Over Each Element in Array


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
     let tempArr = [];

    for(let [index,item] of arr.entries()) {
        tempArr.push(fn(item, index));
    }
    return tempArr;
};
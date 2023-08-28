
//https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
// 2634. Filter Elements from Array


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
     let a=[]
    arr.forEach((v,i)=>{
        if(fn(v,i)){
          a.push(v)  
        }
    })
    return a
};

//https://leetcode.com/problems/array-prototype-last/
//2619. Array Prototype Last

Array.prototype.last = function() {
     if(this.length === 0){
      return -1
    }else{
      return this[this.length-1]
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
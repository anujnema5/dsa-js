/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let newMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if(newMap.has(nums[i])) {
            return true
        } else {
            newMap.set(nums[i], i);
        }
    }
    return false;
};

const nums = [1,2,3,4]
console.log(containsDuplicate(nums));
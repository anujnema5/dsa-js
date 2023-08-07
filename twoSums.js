/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const newMap = new Map();

    for (let i = 0; i < nums.length; i++) {

        if(nums[i] === target) {
            return [i]
        }

        if (nums[i] < target) {
            const num = nums[i];
            const complement = target - num;

            if (newMap.has(complement)) {
                return [newMap.get(complement), i]
            } else {
                newMap.set(nums[i], i)
            }
        }

    }
    return []

};

console.log(twoSum([2, 7, 11, 15], 9));
/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/maximum-subarray/description/
// LEVEL: Medium

let nums = [-1, 8, -7, 6, -10];
var maxSubArray = function (nums) {

    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += nums[k];
                maxSum = Math.max(maxSum, sum);
            }
        }
    }

    return maxSum;
};

console.log(maxSubArray(nums));
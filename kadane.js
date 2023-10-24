function maxSubArray(arr) {
    if (arr.length === 0) {
        return
    }

    let currentSum = arr[0] // -1, 2, 7, 14, 10, 15
    let maxSum = arr[0] // -1, 2, 7, 14, 14, 15

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i])
        // maxSum = Math.max(currentSum, maxSum)

        if(currentSum > maxSum) {
            maxSum = currentSum
        }
    }

    return maxSum
}

const arr = [-1, 2, 5, 7, -4, 5]
console.log(maxSubArray(arr));
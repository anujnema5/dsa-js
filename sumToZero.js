function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (right > left) {
        let sum = arr[left] + arr[right];

        if (sum ==0) {
            console.log([arr[left], arr[right]]);
            return [arr[left], arr[right]]
        }

        else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


sumZero([-4, -3, -2, 1, 2, 5])
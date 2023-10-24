const arr = [1, 4, 5, 8, 6];

Array.prototype.customMap = function (cb) {
    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
        resultArray.push(this[i])
    }

    return resultArray
}

// const doSquare = (value) => {
//     return value
// }

const arr2 = arr.customMap((sq)=> {
    return sq
});

console.log(arr2);

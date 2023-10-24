const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 2000)
})

var addTwoPromises = async function (promise1, promise2) {
    let promiseSol = await Promise.all([promise1, promise2])

    const sum = promiseSol.reduce((accum, holder)=> accum + holder, 0)

    return sum
};

console.log(addTwoPromises(promise1, promise2));
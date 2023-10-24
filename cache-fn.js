// function memoize() {
//     let cache = {}
//     return function(...args) {
//         const input = args[0]

//         if(cache[input]) {
//             console.log("Fetching from cache")
//             return cache[input]
//         } else {
//             console.log("Intial Calculating")
//             cache[input] = input
//             return cache[input]
//         }
//     }
// }

// const memo = memoize()
// console.log(memo(2))
// console.log(memo(3))
// console.log(memo(2))
// console.log(memo(3))

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

function sum(a, b) {
    return a + b;
}

const memo = memoize(sum)
console.log(memo(1, 3));


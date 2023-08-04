// FIRST ALGORITHM

function addUpto(n) {
    let sum = 0;
    const t = performance.now();
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const t2 = performance.now();
    const totalTime = t2 - t;
    return sum;
}

// SECOND ALGORITHM
function addUpto2(n) {
    const t = performance.now();
    const output = n * (n + 1) / 2;
    const t2 = performance.now();
    const totalTime = t2 - t;
    return output;
}

function compareAlgo(algo1, algo2) {
    const totalTimeinAlgoOne = () => {
        const t = performance.now();
        algo1(1000000000000000000);
        const t2 = performance.now();

        const totalTimeConsumed = t2 - t;
        return totalTimeConsumed
    }

    const totalTimeinAlgoTwo = () => {
        const t = performance.now();
        algo2(100000000000000000000);
        const t2 = performance.now();

        const totalTimeConsumed = t2 - t;
        return totalTimeConsumed
    }

    const timeTakenAlgo1 = totalTimeinAlgoOne();
    const timeTakenAlgo2 = totalTimeinAlgoTwo();

    if (timeTakenAlgo1 > timeTakenAlgo2) {
        console.log("Second Algorithm is better with the time consumed " + timeTakenAlgo2 + " while the first one consumed " + timeTakenAlgo1)
        return timeTakenAlgo1;
    } else {
        console.log("First Algorithm is better with the time consumed " + timeTakenAlgo1 + " while the second one consumed " + timeTakenAlgo2)
        return timeTakenAlgo2;
    }
}

compareAlgo(addUpto, addUpto2);
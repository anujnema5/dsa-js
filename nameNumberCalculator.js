const letters = {
    allLetters: {
        A: 1, I: 1, J: 1, Q: 1, Y: 1,
        B: 2, K: 2, R: 2,
        C: 3, G: 3, L: 3, S: 3,
        D: 4, M: 4, T: 4,
        E: 5, H: 5, N: 5, X: 5,
        U: 6, V: 6, W: 6,
        O: 7, Z: 7,
        F: 8, P: 8,
    },

    soulUrgeLetters: {
        A: 1, I: 1,
        E: 5, O: 5,
        U: 6
    }
}

async function calculateName(name) {
    const cleanName = name.replace(/\s/g, '').toUpperCase();
    
    const nameNumber = await numberCalculator(cleanName, letters.allLetters);
    const soulUrgeNumber = await numberCalculator(cleanName, letters.soulUrgeLetters)

    return {nameNumber, soulUrgeNumber}
}

async function numberCalculator(name, letterValues) {

    let nameNumber = 0;
    for (let letter of name) {
        if (letter in letterValues) {
            nameNumber += letterValues[letter];
        }
    }

    return await singleDigitConvertor(nameNumber);
}

function singleDigitConvertor(name) {
    while (name > 9 && name !== 11 && name !== 22 && name !== 33) {
        name = Math.floor(name / 10) + name % 10;
    }

    return name;
}

async function run() {
    const result = await calculateName("shreyanshrane");
    console.log(result);
}

run();
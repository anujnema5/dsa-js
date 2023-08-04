// function anagramChecker(string, string2) {
//     if (string.length !== string2.length) {
//         return false;
//     }

//     const lookup = {};

//     for (let letter of string) {
//         lookup.hasOwnProperty(letter) ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)

//     for (let letter of string2) {
//         if (!lookup.hasOwnProperty(letter)) {
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
//     }


//     return true
// }

// console.log(anagramChecker("aanuj", "junaa"));


function anagramChecker(string, string2) {
    if (string.length !== string2.length) {
        return false;
    }

    const lookup = new Map();

    for (let letter of string) {
        lookup.set(letter, (lookup.get(letter) || 0) + 1);
    }
    console.log(lookup);

    for (let letter of string2) {
        if (!lookup.has(letter)) {
            return false;
        } else {
            lookup.set(letter, lookup.get(letter) - 1);
        }
    }

    return true;
}

console.log(anagramChecker("aanuj", "junaa"));

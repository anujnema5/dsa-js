function countUniqueValues(arr) {
    // add whatever parameters you deem necessary - good luck!

    if(!arr.length) {
        return false
    }

    const lookup = new Map();

    for (let pointer of arr) {
        lookup.set(pointer, (lookup.get(pointer) || 0) + 1);
    }

    return lookup.size
}

countUniqueValues([1,1,1,1,1,2])
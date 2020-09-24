let array = [1, 2, 3, 4, 5, 6, 7];




const swap = (i, j, array) => {
    [array[i], array[j]] = [array[j], array[i]];
}
const noSwap = (i, j, array) => {
    [array[i], array[j]] = [array[i], array[j]];
}

swap(0, 4, array)
console.log(array)
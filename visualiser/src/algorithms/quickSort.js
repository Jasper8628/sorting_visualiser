export function quickSort(array) {
    const sort = async (array, start, end) => {
        if (start >= end) {
            return array;
        } else {
            let pivotIndex = start;
            let middle = Math.floor((start + end + 1) / 2)
            let pivotValue = array[middle];
            swap(array, middle, end)
            for (let i = start; i < end; i++) {
                if (array[i] >= pivotValue) {
                }
                else {
                    await swap(array, i, pivotIndex)
                    pivotIndex++
                }
            }
            swap(array, pivotIndex, end)
            if (array[pivotIndex] == array[end]) {
                sort(array, start, pivotIndex - 1)
                sort(array, pivotIndex + 1, end)
            } else {
                sort(array, start, pivotIndex - 1)
                sort(array, pivotIndex, end)
            }
        }
    }
    const swap = (array, i, j) => {
        return new Promise(resolve => {
            const divI = document.getElementById(`${i}`);
            const divJ = document.getElementById(`${j}`);
            divI.style.height = `${array[j]}px`
            divJ.style.height = `${array[i]}px`
            setTimeout(() => {
                divI.style.backgroundColor = "magenta"
                divJ.style.backgroundColor = "magenta"
                setTimeout(() => {
                    resolve(
                        divI.style.backgroundColor = "aqua",
                        divJ.style.backgroundColor = "aqua")
                }, 30);
            }, 30);
            [array[i], array[j]] = [array[j], array[i]]

        })
    }
    const compareThree = (a, b, c, array) => {
        let average = (array[a] + array[b] + array[c]) / 3
        if (average - array[a] <= average - array[b] && average - array[a] <= average - array[c]) {
            return a
        } else if (average - array[b] <= average - array[a] && average - array[b] <= average - array[c]) {
            return b
        } else { return c }
    }
    sort(array, 0, array.length - 1)
}
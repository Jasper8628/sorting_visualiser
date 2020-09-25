
export function heapSort(array) {
    const maxHeap = async (array) => {
        const count = [];
        for (let i = 1; i < array.length; i++) {
            await bubbleDown(i, array, array.length, false, count)
        }
        console.log(count.length)
        if (count.length > 0) {
            maxHeap(array)
        } else {
            pop(array)
            return array
        }
    }

    const bubbleDown = (start, array, end, isRecursive, count) => {
        let i = start;
        let j = i * 2;
        let k = i * 2 + 1
        if (k < end) {
            if (array[i] >= array[j] && array[i] >= array[k]) { }
            else if (array[j] >= array[i] && array[j] >= array[k]) {
                swap(i, j, array);
                if (isRecursive) {
                    bubbleDown(j, array, end, true, [])
                } else {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(count.push(i))
                        }, 50);
                    })
                }
            } else {
                swap(i, k, array);
                if (isRecursive) {
                    bubbleDown(k, array, end, true, [])
                } else {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(count.push(i))
                        }, 50);
                    })
                }
            }
        } else if (j < end) {
            if (array[i] >= array[j]) { }
            else {
                swap(i, j, array);
                if (isRecursive) {
                    bubbleDown(j, array, end, true, [])
                } else {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve(count.push(i))
                        }, 50);
                    })
                }
            }
        }
        return (array, count)
    }

    const swap = (i, j, array) => {
        const divI = document.getElementById(`${i - 1}`);
        const divJ = document.getElementById(`${j - 1}`);
        divI.style.height = `${array[j]}px`
        divJ.style.height = `${array[i]}px`
        setTimeout(() => {
            divI.style.backgroundColor = "magenta"
            divJ.style.backgroundColor = "magenta"
            setTimeout(() => {
                divI.style.backgroundColor = "aqua"
                divJ.style.backgroundColor = "aqua"
            }, 50);
        }, 50);
        [array[i], array[j]] = [array[j], array[i]]
    }

    const pop = (array) => {
        for (let i = 1; i < array.length; i++) {
            let end = array.length - i;
            setTimeout(() => {
                swap(1, end, array);
                bubbleDown(1, array, end, true, [])

            }, i * 50);
        }
        console.log(array)
    }

    maxHeap(array);

}

// const sampleArray2 = [0, 7, 52, 12, 1, 3, 5, 6, 2, 66, 11, 9, 43, 21, 8, 4, 5, 9, 1]
// heapSort(sampleArray2)
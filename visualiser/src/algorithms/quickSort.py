
sampleArray = [0, 1, 4, 2, 0, 3, 12, 5, 9, 9,
               7, 11, 9, 43, 21, 8, 6, 52,  66, 15]

count = []


def quickSort(array, start, end, count):
    if start >= end:
        return array
    else:
        pivotIndex = start
        for i in range(start, end):
            pivotValue = array[end]
            if array[i] >= pivotValue:
                pass
            else:
                array[i], array[pivotIndex] = array[pivotIndex], array[i]
                pivotIndex += 1
                count.append(1)
                print(array, len(array), len(count))
        array[pivotIndex], array[end] = array[end], array[pivotIndex]
        if array[pivotIndex] == array[end]:
            quickSort(array, start, pivotIndex-1, count)
            quickSort(array, pivotIndex+1, end, count)
        else:
            quickSort(array, start, pivotIndex-1, count)
            quickSort(array, pivotIndex, end, count)


print('initial length: ', len(sampleArray))
quickSort(sampleArray, 0, len(sampleArray)-1, count)

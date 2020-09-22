def minHeap(array):
    changed=False
    for i in range (1,len(array)): # i is the parent index
        j=i*2  # j is the left child index
        k=i*2+1 # k is the right child index
        if i*2+1<len(array):

            minHeapify(array,i,j,k)
        elif i*2<len(array):
            if array[i]<=array[j]:
                return array
            else:
                array[i],array[j]=array[j],array[i]
                changed=True
                print changed
    print (array,changed)
    return array


def minHeapify(array,i,j,k):
    if array[i] <=array[j] and array[i] <=array[k]:
        return array
    elif array[j] <=array[i] and array[j] <=array[k]:
        array[i],array[j]=array[j],array[i]
        changed=True
        print changed
    elif array[k] <=array[i] and array[k] <=array[j]:
        array[i],array[k]=array[k],array[i]
        changed=True
        print changed



# def finalCheck():

sampleArray=[0,7,52,12,1,3,4,6,2,66]
changed=False
minHeap( minHeap(sampleArray))
def minHeap(array):
    count=[]
    for i in range (1,len(array)): # i is the parent index
        j=i*2  # j is the left child index
        k=i*2+1 # k is the right child index
        if i*2+1<len(array):
            minHeapify(array,i,j,k,count)
        elif i*2<len(array):
            if array[i]<=array[j]:
                array[i],array[j]=array[i],array[j]
            else:
                array[i],array[j]=array[j],array[i]
                count.append(1)
    print (len(array), array,len(count))
    if len(count)>0:
        minHeap(array)
    else:
        return array


def minHeapify(array,i,j,k,buffer):
    if array[i] <=array[j] and array[i] <=array[k]:
        array[i],array[j]=array[i],array[j]
    elif array[j] <=array[i] and array[j] <=array[k]:
        array[i],array[j]=array[j],array[i]
        buffer.append(1)
    else:
        array[i],array[k]=array[k],array[i]
        buffer.append(1)



# def finalCheck():

sampleArray= [0,7,52,12,1,3,4,6,2,66,11,9,43,21]
sampleArray0=[0,7,52,12,1,3,4,6,2,66,11,9,43,21,3]
sampleArray1=[0,7,52,12,1,3,4,6,2,66,11,9,43,21,8,4,5]
sampleArray2=[0,7,52,12,1,3,4,6,2,66,11,9,43,21,8,4,1,9,0]
minHeap(sampleArray)
minHeap(sampleArray0)
minHeap(sampleArray1)
minHeap(sampleArray2)
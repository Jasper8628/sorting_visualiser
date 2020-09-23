def minHeap(array):
    count=[]                       # count the number of violations that has been corrected
    for i in range (1,len(array)): # i is the parent index
        j=i*2                      # j is the left child index
        k=i*2+1                    # k is the right child index
        if i*2+1<len(array):
            minHeapify(array,i,j,k,count)
        elif i*2<len(array):
            if array[i]<=array[j]:
                array[i],array[j]=array[i],array[j]
            else:
                array[i],array[j]=array[j],array[i]
                count.append(i//2)
    print (array,len(count))
    if len(count)>0: # if a change has been make,
                     # go back through the entire heap 
                     # and check for violations one more time
        minHeap(array)
    else:
        pop(array)
        print ("done", array)
        return array

def minHeapify(array,i,j,k,buffer):
    if array[i] <=array[j] and array[i] <=array[k]:
        array[i],array[j]=array[i],array[j]
    elif array[j] <=array[i] and array[j] <=array[k]:
        array[i],array[j]=array[j],array[i]
        buffer.append(i//2)
    else:
        array[i],array[k]=array[k],array[i]
        buffer.append(i//2)


def bubbleDown(i,array):
        j=i*2                     
        k=i*2+1                   
        if i*2+1<len(array):
            if array[i] <=array[j] and array[i] <=array[k]:
                array[i],array[j]=array[i],array[j]
            elif array[j] <=array[i] and array[j] <=array[k]:
                array[i],array[j]=array[j],array[i]
                bubbleDown(j,array)
            else:
                array[i],array[k]=array[k],array[i]
                bubbleDown(k,array)
        elif i*2<len(array):
            if array[i]<=array[j]:
                array[i],array[j]=array[i],array[j]
            else:
                array[i],array[j]=array[j],array[i]
                bubbleDown(j,array)
        print ("after bubble: ", array)
        return array

def pop(array):
    if len(array)>=2:
        print ("swaaping:",array[1], "and",array[-1], array)
        array[1],array[len(array)-1]=array[len(array)-1],array[1]
        print('swapped: ',array)
        pop(bubbleDown(1,array[0:len(array)-1]))
    else:
        print "done"
    print array
    return array

    
    


sampleArray= [0, 0, 1, 4, 2, 3, 12, 5, 5, 7, 11, 9, 43, 21, 8, 6, 52, 9, 66]
sampleArray0= [0, 0, 1, 4, 1, 3, 12, 4, 2, 7, 11, 9, 43, 21, 8, 6, 52, 9, 66]
sampleArray1= [0, 1, 2, 4, 7, 3, 12, 4, 1, 0, 11, 9, 43, 21, 8, 6, 52, 9, 66]
sampleArray2=[0,7,52,12,1,3,5,6,2,66,11,9,43,21,8,4,5,9,1]
minHeap(sampleArray2)
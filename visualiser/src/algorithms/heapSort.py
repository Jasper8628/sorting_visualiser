def minHeap(array):
    count=[]            # count the number of violations that has been corrected
    for i in range (1,len(array)): 
        bubbleDown(i,array,len(array),False,count) # using non-recursive bubbleDown to initiate heap tree

    print (array,len(count))
    if len(count)>0:    # if a change has been made,
                        # go back through the entire heap 
        minHeap(array)  # and check for violations one more time
    else:
        pop(array)

def bubbleDown(start,array,end,isRecursive,count):
        i=start              # i is the parent index
        j=i*2                # j is the left child index     
        k=i*2+1              # k is the right child index     
        if i*2+1<end:        # if parent has a right child, compare all 3 nodes
            if array[i] <=array[j] and array[i] <=array[k]:
                noSwap(i,j,array)
            elif array[j] <=array[i] and array[j] <=array[k]:
                swap(i,j,array)
                if isRecursive==True:
                    print ("after swap: ", array)
                    bubbleDown(j,array,end,True,[])
                else:
                    count.append(i//2)
            else:
                swap(i,k,array)
                if isRecursive==True:
                     print ("after swap: ", array)
                     bubbleDown(k,array,end,True,[])
                else:
                    count.append(i//2)
        elif i*2<end:        # if parent only has a left child, compare 2 nodes
            if array[i]<=array[j]:
                noSwap(i,j,array)
            else:
                swap(i,j,array)
                if isRecursive==True:
                    print ("after swap: ", array)
                    bubbleDown(j,array,end,True,[])
                else:
                    count.append(i//2)
        return array

def pop(array):
    for i in range(1,len(array)):
        swap(1,len(array)-i,array)
        bubbleDown(1,array,len(array)-i,True,[]) # using recursve bubbleDown to extract heap peak 
                                                 # and store it in the end of the same array
    print ("done",array) 
    # return array

def swap(i,j,array):
    array[i],array[j]=array[j],array[i]
def noSwap(i,j,array):
    array[i],array[j]=array[i],array[j]

sampleArray=  [0, 0, 1, 4, 2, 3, 12, 5, 5, 7, 11, 9, 43, 21, 8, 6, 52, 9, 66]
sampleArray1= [0, 1, 2, 4, 7, 3, 12, 4, 1, 0, 11, 9, 43, 21, 8, 6, 52, 9, 66]
sampleArray2= [0,7,52,12,1,3,5,6,2,66,11,9,43,21,8,4,5,9,1]
minHeap(sampleArray2)
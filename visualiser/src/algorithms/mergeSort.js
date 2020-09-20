const sampleArray = [2, 1, 5, 4, 3, 5, 11, 33, 5, 12, 10, 9,88, 13, 15, 14];
const newArray = []
for (i = 0; i < sampleArray.length; i++) {
    newArray[i] =
    {
        value: sampleArray[i],
        index: i
    }
}


const mergeSort=(array)=>{
    if(array.length<2){
        return array;
    } else{
        const half=Math.floor(array.length/2);
        const left=array.slice(0,half);
        const right=array.slice(half,array.length+1);
        return merge(mergeSort(left),mergeSort(right))
    }
}
const merge=(left,right)=>{
    let buffer=[]
    const start=left[0].index;
    const end=right[right.length-1].index;
    console.log(start,end)
    while(left.length!=0 && right.length!=0){
        if(left[0].value<right[0].value){
            buffer.push(left.shift())
        } else{
            buffer.push(right.shift())
        }
    }
    while(left.length!=0){
        buffer.push(left.shift())
    }
    while(right.length!=0){
        buffer.push(right.shift())
    }
    for( i=start,j=0;i<end,j<buffer.length;j++,i++){
        buffer[j].index=i
    }
    newArray.splice(start,buffer.length,...buffer)

    console.log(newArray);
    return buffer;
}
mergeSort(newArray);

const mergeSort=()=> {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

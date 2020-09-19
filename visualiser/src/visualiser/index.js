import React, { useState, useEffect } from 'react'

function Index() {
    const newArray = []
    const [diplay, setDisplay] = useState(newArray);

    for (let i = 0; i < 400; i++) {
        newArray[i] =
        {
            value: Math.floor(Math.random() * 400),
            index: i
        }
    }
    const handleClick = (e) => {
        mergeSort(newArray);

    }


    const mergeSort = (array) => {
        if (array.length < 2) {
            return array;
        } else {
            const half = Math.floor(array.length / 2);
            const left = array.slice(0, half);
            const right = array.slice(half, array.length + 1);
            return merge(mergeSort(left), mergeSort(right))
        }
    }
    const merge = (left, right) => {
        let buffer = []
        const start = left[0].index;
        const end = right[right.length - 1].index;
        while (left.length !== 0 && right.length !== 0) {
            if (left[0].value < right[0].value) {
                buffer.push(left.shift())
            } else {
                buffer.push(right.shift())
            }
        }
        while (left.length !== 0) {
            buffer.push(left.shift())
        }
        while (right.length !== 0) {
            buffer.push(right.shift())
        }
        for (let i = start, j = 0; i < end, j < buffer.length; j++, i++) {
            buffer[j].index = i;
        }
        newArray.splice(start, buffer.length, ...buffer);
        for (let k = 0; k < newArray.length; k++) {
            let barDiv = document.getElementById(`${k}`);
            let height = newArray[k].value
            setTimeout(() => {
                barDiv.style.height = `${height * 2}px`;
                // barDiv.innerHTML(`${height}`)
            },  k*30);

        }
        // console.log(newArray)

        return buffer;
    }




    return (
        <div style={{ 'display': 'flex' }}>
            <h1>Hello</h1>
            <button onClick={handleClick}>Merge Sort</button>
            {diplay.map(bar => (
                <div key={bar.index} id={bar.index} style={{ "width": "5px", "height": `${bar.value * 2}px`, "background": "red"}}>

                </div>
            ))}

        </div>
    )
}

export default Index

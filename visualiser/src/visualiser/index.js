import React, { useState, useEffect } from 'react'
import './style.css';

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
            let colorDiv=document.getElementById(`${buffer[j].index}`)
            setTimeout(() => {
                colorDiv.style.backgroundColor='magenta'
                setTimeout(() => {
                    colorDiv.style.backgroundColor='aqua'
                }, 50);
            }, j*50);
            buffer[j].index = i;
            let barDiv = document.getElementById(`${i}`);
            let height = buffer[j].value;
            setTimeout(() => {
                barDiv.style.height = `${height}px`;
            }, j * 50);
        }
        newArray.splice(start, buffer.length, ...buffer);
        return buffer;
    }




    return (
        <div >
            <div className="display-field">
                {diplay.map(bar => (
                    <div
                        key={bar.index}
                        id={bar.index}
                        className="bar"
                        style={{ "height": `${bar.value}px` }}>

                    </div>
                ))}
            </div>
            <button onClick={handleClick}>Merge Sort</button>


        </div>
    )
}

export default Index

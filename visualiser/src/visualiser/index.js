import React, { useState, useEffect } from 'react'
import { mergeSort } from '../algorithms/mergeSort'
import { heapSort } from '../algorithms/heapSort'
import './style.css';

function Index() {
    const newArray = []
    const [diplay, setDisplay] = useState(newArray);

    for (let i = 0; i < 200; i++) {
        newArray[i] =
        {
            value: Math.floor(Math.random() * 200),
            index: i
        }
    }
    const handleReset = (e) => {
        const reset = []
        for (let i = 0; i < 200; i++) {
            reset[i] =
            {
                value: Math.floor(Math.random() * 200),
                index: i
            }
        }
        setDisplay(reset)
    }
    const handleHeap = (e) => {
        const array = [0];
        for (let i = 0; i < newArray.length; i++) {
            array.push(newArray[i].value)
        }
        console.log(array)
        heapSort(array);
    }
    const handleMerge = (e) => {
        mergeSort(newArray);
    }

    return (
        <div className="container">
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
            <div className="button-container">
                <button onClick={handleMerge}>Merge Sort</button>
                <button onClick={handleHeap}>Heap Sort</button>
                <button >Quick Sort</button>
                <button >Radix Sort</button>
                <button onClick={handleReset}>Reset</button>

            </div>
        </div>
    )
}

export default Index

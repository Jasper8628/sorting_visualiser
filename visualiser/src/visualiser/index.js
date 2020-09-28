import React, { useState, useEffect } from 'react'
import { mergeSort } from '../algorithms/mergeSort'
import { heapSort } from '../algorithms/heapSort'
import { quickSort } from '../algorithms/quickSort'
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
    const handleQuick = (e) => {
        const array = []
        for (let i = 0; i < diplay.length; i++) {
            array.push(diplay[i].value)
        }
        quickSort(array);

    }
    const handleHeap = (e) => {
        const array = [0];
        for (let i = 0; i < diplay.length; i++) {
            array.push(diplay[i].value)
        }
        console.log(array)
        heapSort(array);
    }
    const handleMerge = (e) => {
        mergeSort(diplay);
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
                <button onClick={handleQuick} >Quick Sort</button>
                <button >Radix Sort</button>
                <button onClick={handleReset}>Reset</button>

            </div>
        </div>
    )
}

export default Index

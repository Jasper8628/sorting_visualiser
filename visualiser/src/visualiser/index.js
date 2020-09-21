import React, { useState, useEffect } from 'react'
import {mergeSort} from '../algorithms/mergeSort'
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

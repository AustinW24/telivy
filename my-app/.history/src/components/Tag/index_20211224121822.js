import React, { useState } from 'react'
import "./Tag.css"

export default function Tag() {
    const [tagValue, setTagValue] = useState([])
    console.log(tagValue)

    const handleTagInput = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate');
          }
    }
    
    return (
        <div className="tag__container">
            <div>
                {tagValue}
            </div>
            <input className="tag__input" placeholder="Add a tag" onKeyDown={(e) => handleTagInput(e.target.value)}></input>
        </div>
    )
}

import React, { useState } from 'react'
import "./Tag.css"

export default function Tag() {
    const [tagValue, setTagValue] = useState([])

    const handleTagInput = (e) => {
        if (e.key === 'Enter') {
            setTagValue([...tagValue, ...e.target.value])
        }
    }

    console.log(tagValue)
    return (
        <div className="tag__container">
            {
                tagValue.map((tag, idx) => {
                    return (
                        <div>
                        </div>

                    )
                })
            }
            <input className="tag__input" placeholder="Add a tag" onKeyDown={(e) => handleTagInput(e)}></input>
        </div>
    )
}

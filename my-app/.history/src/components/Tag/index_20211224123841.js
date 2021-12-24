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
            <div>
                {
                    tagValue.map((tag, idx) => {
                        return (
                            <div className="individual__tag">
                                {tag}
                            </div>
                        )
                    })
                }


            </div>
            <div>
                <input className="tag__input" placeholder="Add a tag" onKeyDown={(e) => handleTagInput(e)}></input>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import "./Tag.css"

export default function Tag() {
    const [tagValue, setTagValue] = useState([])

    const handleTagInput = (e) => {
        let newTag = "";
        newTag += e.target.value
        console.log(newTag)
        if (e.key === 'Enter') {
            setTagValue([...tagValue, ...newTag])
        }
    }

    return (
        <div className="tag__container">
            <div className="tag__list">
                {
                    tagValue.map((tag, idx) => {
                        return (
                            <div className="individual__tag" key={idx}>
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

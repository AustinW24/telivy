import React, { useState } from 'react'
import "./Tag.css"

export default function Tag({data, idx}) {
    const [tagValue, setTagValue] = useState([])

    const handleTagInput = (e) => {
        let arr = []
        if (e.key === 'Enter') {
            arr.push(e.target.value)
            setTagValue(tagValue.concat(arr))
        }
    }
    console.log(data, idx)

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

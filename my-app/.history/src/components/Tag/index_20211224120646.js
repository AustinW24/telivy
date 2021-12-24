import React, { useState } from 'react'
import "./Tag.css"

export default function Tag() {
    const [tagValue, setTagValue] = useState("")
    return (
        <div className="tag__container">
            <div>
                {tagValue}
            </div>
            <input className="tag__input" placeholder="Add a tag"></input>
        </div>
    )
}

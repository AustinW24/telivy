import React, { useState } from 'react'
import "./Tag.css"

function Tag() {
    const [tagValue, setTagValue] = useState("")
    return (
        <div className="">
            <div>
                {tagValue}
            </div>
            <input className="tag__input" placeholder="Add a tag"></input>
        </div>
    )
}

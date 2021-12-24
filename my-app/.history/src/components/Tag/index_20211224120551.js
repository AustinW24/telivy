import React, { useState } from 'react'
import ""

function Tag() {
    const [tagValue, setTagValue] = useState("")
    return (
        <div>
            <div>
                {tagValue}
            </div>
            <input className="tag__input" placeholder="Add a tag"></input>
        </div>
    )
}

import React, { useState } from 'react'

function Tag() {
    const [tagValue, setTagValue] = useState("")
    return (
        <div>
            <div>
                {tagValue}
            </div>
            <input className=""></input>
        </div>
    )
}

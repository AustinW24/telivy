import React, { useState } from 'react'
import "./Tag.css"

export default function Tag() {
    const tagValues = []

    const handleTagInput = (e) => {
        if (e.key === 'Enter') {
            setTagValue(e.target.value);
        }

    }
    console.log(tagValue)

    return (
        <div className="tag__container">
            <div>
                {tagValue}
            </div>
            <input className="tag__input" placeholder="Add a tag" onKeyDown={(e) => handleTagInput(e)}></input>
        </div>
    )
}

import React, { useState } from 'react'
import "./Tag.css"

export default function Tag() {
    const tagValues = []

    const handleTagInput = (e) => {
        if (e.key === 'Enter') {
            tagValues.push(e.target.value)
        }

    }
    console.log(tagValues)

    return (
        <div className="tag__container">
                {tagValues.map((tag, idx) => {
                    return (
                        <div>
                        </div>
                    )
                })}
            <input className="tag__input" placeholder="Add a tag" onKeyDown={(e) => handleTagInput(e)}></input>
        </div>
    )
}

import React, { useState } from 'react'
import "./Tag.css"

export default function Tag({student, handleTagInput, tagValue, idx}) {

    student['tags'] = tagValue
    console.log(student)
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

import React, { useEffect, useState } from 'react'
// import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import "./Dropdown.css"

export default function Dropdown(data, student, divId) {


    // console.log("divId", divId)
    console.log("data", data.student)

    return (
        <>
            {
                <div className="dropdown">
                    {data.student.grades.map((person, idx) => {
                        return (

                            <div key={idx}>{person.grades}</div>
                        )
                    })}
                </div>
            }
        </>
    )
}

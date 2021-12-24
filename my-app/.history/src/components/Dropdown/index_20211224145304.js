import React, { useEffect, useState } from 'react'
// import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import "./Dropdown.css"

export default function Dropdown(data, ) {


    return (
        <>
            {
                <div className="dropdown" >
                    {data.student.grades.map((test, idx) => {
                        return (
                            <div key={idx} className="test__scores">Test {idx+1}<div style={{display: "inline", "marginLeft": 15}}>{test}%</div></div>
                        )
                    })}
                </div>
            }
        </>
    )
}

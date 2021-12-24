import React, { useEffect, useState } from 'react'
// import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import "./Dropdown.css"

export default function Dropdown(data, student, divId) {


    // console.log("divId", divId)
    console.log("data", data)

    return (
        <>
            {
                <div className="dropdown">
                    {data.map((student) => {

                    })}
                </div>
            }
        </>
    )
}

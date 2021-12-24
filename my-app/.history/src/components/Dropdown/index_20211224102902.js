import React, { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import "./Dropdown.css"

export default function Dropdown(student, idx, showDiv) {
    const [divId, setDivId] = useState("");
    const handleDropDown = (e) => {
        // setDivId(e.target.getAttribute('idx'))
        console.log(e)
        setShowDiv(!showDiv)
    }
    return (
        <>
            {showDiv &&
                <div className="dropdown">
                    HELLO
                </div>}
        </>
    )
}

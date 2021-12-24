import React, { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import "./Dropdown.css"

export default function Dropdown(student, idx, showDiv, setShowDiv) {
    const [divId, setDivId] = useState("");
    console.log(showDiv)

    return (
        <>
            {showDiv && data[idx] &&
                <div className="dropdown">
                    HELLO
                </div>}
        </>
    )
}

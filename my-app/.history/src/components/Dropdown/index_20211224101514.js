import React, { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


export default function Dropdown(student, idx) {
    const [showDiv, setShowDiv] = useState(false);
    const [divId, setDivId] = useState("");
    const handleDropDown = (e) => {
        // setDivId(e.target.getAttribute('idx'))
        console.log(e)
        setShowDiv(!showDiv)
    }
    return (
        <>
            <button onClick={(e) => handleDropDown(e)}>
                <AiOutlinePlus />
            </button>
            {showDiv &&
                <div>
                    HELLO
                </div>}
        </>
    )
}

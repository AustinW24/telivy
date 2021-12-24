import React, { useEffect, useState } from 'react'
// import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import "./Dropdown.css"

export default function Dropdown(data, student, idx) {
    const [divId, setDivId] = useState("");
    const [showDiv, setShowDiv] = useState(false);

    console.log(showDiv)

    return (
        <>
            {showDiv &&
                <div className="dropdown">
                    HELLO
                </div>
            }

        </>


    )
}

import React, { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


export default function Dropdown() {
    const [showDiv, setShowDiv] = useState(false);
    const [divId, setDivId] = useState("");

    return (
        <>
            <button onClick={(e) => handleDropDown(e)}>
                <AiOutlinePlus />
            </button>
        </>
    )
}

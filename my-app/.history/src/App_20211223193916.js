import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './App.css';

function App() {
    const [data, setData] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [showDiv, setShowDiv] = useState(false);
    const [setDivId, setShowDivId] = useState(0);



    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.hatchways.io/assessment/students");
            const list = await response.json();
            setData(list?.students);
        })();
    }, [])

    const handleDropDown = (e) => {
        setDivId(e.target.id)
        setShowDiv(true)
    }
    console.log(searchTerm)

    return (
        <div className="App">
            <div className="container">
                <input className="search__bar" type="text" onChange={(e) => setSearchTerm(e.target.value)}/>
                <ul className="student__list">
                    {data?.filter((val) => {
                        if(searchTerm == "") {
                            return val
                        } else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((student, idx) => {
                        return (
                            <div key={idx} className="student__row">
                                <li className="individual__student">
                                    <div className="user__photo" style={{ backgroundImage: `url(${student.pic})` }}/>
                                    <div className="user__info">
                                        <div className="name">{student.firstName}<button onClick={() => handleDropDown()}><AiOutlinePlus /></button></div>
                                        <div style={{ "marginLeft": 20, paddingTop: 10 }}>
                                            <div>Email: {student.email}</div>
                                            <div>Company: {student.company}</div>
                                            <div>Skill: {student.skill}</div>
                                            <div>
                                                Average: {student.grades.reduce(function (accumulator, currentValue) {
                                                    return (
                                                        accumulator + Number(currentValue).toFixed(2) / student.grades.length
                                                    )
                                                }, 0)}%
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {showDiv && <div}
                                <hr></hr>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
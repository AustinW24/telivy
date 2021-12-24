import React, { useEffect, useState } from 'react'
 import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import Dropdown from './components/Dropdown'
import Tag from './components/Tag'
import './App.css';

function App() {
    const [data, setData] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTagTerm, setSearchTagTerm] = useState("")
    const [showDiv, setShowDiv] = useState(false);
    const [divId, setDivId] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.hatchways.io/assessment/students");
            const list = await response.json();
            setData(list?.students);
        })();
    }, [])

    const handleDropDown = (id) => {
        setDivId(id)
        setShowDiv(!showDiv)
    }
    const filterStudents = (val) => {
        if(!searchTerm.length && !searchTagTerm.length){
            return val
        }
        if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || val?.tags?.includes(searchTagTerm)){
            return val;
        }
    }
    console.log(searchTagTerm)

    return (
        <div className="App">
            <div className="container">
                <input className="input__field" type="text" placeholder="Search by name" onChange={(e) => setSearchTerm(e.target.value)} />
                <input className="input__field" type="text" placeholder="Search by tag" onChange={(e) => setSearchTagTerm(e.target.value)}></input>
                <ul className="student__list">
                    {data?.filter((val) => {
                        if(val?.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        } else if (val?.tags.includes(searchTagTerm)) {
                            console.log(val.tags)
                            return val
                        }
                    }).map((student, idx) => {
                        return (
                            <div key={idx} className="student__row">
                                <li className="individual__student">
                                    <div className="user__photo" style={{ backgroundImage: `url(${student.pic})` }} />
                                    <div className="user__info">
                                        <div className="name">{student.firstName}
                                        {showDiv ?
                                            <button onClick={(e) => handleDropDown(student.id)}>
                                                <AiOutlineMinus />
                                            </button>
                                            :
                                            <button onClick={(e) => handleDropDown(student.id)}>
                                                <AiOutlinePlus />
                                            </button>
                                        }
                                        </div>
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
                                {showDiv && divId === student.id &&
                                    <Dropdown data={data} student={student} divId={divId}/>
                                }
                                <Tag data={data} student={student} idx={idx}/>
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

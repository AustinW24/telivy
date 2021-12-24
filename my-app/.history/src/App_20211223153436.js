import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.hatchways.io/assessment/students");
            const list = await response.json();
            setData(list.students);
        })();
    }, [])


    return (
        <div className="App">
            <div className="container">
                <ul className="student__list">
                    {data?.map((student, idx) => {
                        return (
                            <div>
                            <li key={idx} className="individual__student">
                                <div className="user__photo" style={{ backgroundImage:`url(${student.pic})`}}></div>
                                <div className="user__info">
                                    <div className="name">{student.firstName}</div>
                                    <div style={{ "marginLeft": 20 }}>
                                        <div>Email: {student.email}</div>
                                        <div>Company: {student.company}</div>
                                        <div>Skill: {student.skill}</div>
                                        <div>Average: {student.grades.reduce(function (accumulator, currentValue) {
                                            return (
                                                accumulator + Number(currentValue).toFixed(2) / student.grades.length
                                            )
                                        }, 0)}%</div>
                                    </div>
                                </div>
                                <hr></hr>
                            </li>
                            
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;

import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [data, setData] = useState()
    let [average, setAverage] = useState(0)

    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.hatchways.io/assessment/students");
            const list = await response.json();
            setData(list.students);
        })();
    }, [])


    console.log(data)

    return (
        <div className="App">
            <div className="container">
                <ul className="student__list">
                    {data?.map((student, idx) => {
                        return (
                            <li key={idx}>
                                <div><img src={student.pic}></img></div>
                                <div className="individual__student">
                                    <div className="name">{student.firstName}</div>
                                    <div>Email: {student.email}</div>
                                    <div>Company: {student.company}</div>
                                    <div>Skill: {student.skill}</div>
                                    <div>Average: {student.grades.reduce(function (accumulator, currentValue) {
                                        return (
                                            accumulator + Number(currentValue).toFixed(2) / student.grades.length
                                        )
                                    }, 0)}%</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;

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
                                <div className="individual__student">
                                    <img src={student.pic}></img>
                                    <div>{student.firstName}</div>
                                    <div>{student.company}</div>
                                    <div>{student.skill}</div>
                                    {student.grades.reduce(function (accumulator, currentValue) {
                                        return accumulator + (currentValue);
                                    }, 0)}
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

import React, {useState} from "react";
import Class from "../Class/Class";
import ClassGraphQL from "../Class/ClassGraphQL";
import "./Home.css";

function Home(props){

    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseList, setCourseList] = useState([]);

    const handleCodeChange = (event) => {
        setCourseCode(event.target.value);
    };
    
    const handleNameChange = (event) => {
        setCourseName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (courseList.some((course) => course.code === courseCode)) {return;}

        setCourseList([...courseList, { code: courseCode.trim(), name: courseName.trim()}]);
        setCourseCode('');
        setCourseName('');
        
    }

    return (
        <div>
            <h2>My Course List</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Course Code:</label>
                    <input type="text" id="courseCode" value={courseCode} onChange={handleCodeChange} required></input>
                </div>
                <div>
                    <label>Course Name:</label>
                    <input type="text" id="courseName" value={courseName} onChange={handleNameChange} required></input>
                </div>
                    <button type="submit">Submit</button>

            </form>
            <div>
                {courseList.map((course, index) => 
                    <ClassGraphQL name={course} key={index}></ClassGraphQL> // modify the tag to Class to use the Class.js which uses REST instead of graphQL
                )}
            </div>
        </div>
    )
}

export default Home;
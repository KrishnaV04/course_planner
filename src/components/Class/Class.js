import "./Class.css";
import React, {useState, useEffect} from 'react';


function Class(props){

    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/rest/v0/courses/"

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url + props.name.name);
            const data = await res.json();
            setClassInfo(data);
            
        }
        fetchData();

    }, [props.name.name]);

    let info;
    if(classInfo.id) {
        info = <div className="information">
            <p id="title">{classInfo.title}</p>
            <p id="des">{classInfo.description}</p>
        </div>
    }
    else if(classInfo.error){
        info = <div><p>Oops.. Class Not Found</p></div>
    }
    else {
        info = <div><p>Loading...</p></div>
    }

    return (
        <div className="class">
            {props.name.code} - {props.name.name}
        <div>{info}</div>
        </div>
    )
}

export default Class;
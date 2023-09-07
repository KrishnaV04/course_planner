import "./Class.css";
import React, {useState, useEffect} from 'react';


function Class(props){

    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/graphql"

    useEffect(() => {
        const fetchData = async () => {
            const query = `
                query {
                    course(id:"${props.name.name}") {
                        id
                        title
                        description
                    }
                }
            `
            const res = await fetch(url,{
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setClassInfo(data.data.course);
            
        }
        fetchData();

    }, [props.name.name]);

    let info;
    if(classInfo) {
        info = <div className="information">
            <p id="title">{classInfo.title}</p>
            <p id="des">{classInfo.description}</p>
        </div>
    }
    else if(classInfo == null){
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
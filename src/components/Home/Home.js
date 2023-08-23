import React, {useState} from "react";
import Class from "../Class/Class";

function Home(props){

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value.trim())) {
            setClasses(favoriteClasses.concat(value.trim()));
            setValue('');
        }
    }


    return (
        <div>
            <h1>Courses</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Course:  </label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">+</button>
            </form>
            <div>
                {favoriteClasses.map((favClass) => 
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
        </div>
    )
}

export default Home;
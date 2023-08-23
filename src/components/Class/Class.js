import "./Class.css";

function Class(props){
    return (
        <div className="class">
            {props.name.code} - {props.name.name}
        </div>
    )
}

export default Class;